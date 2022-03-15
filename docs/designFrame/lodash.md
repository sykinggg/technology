# lodash 源码整体架构

::: tip 注意

`lodash`的版本是：`v4.17.15`

`unpkg.com`地址 https://unpkg.com/lodash@4.17.15/lodash.js

:::

## 匿名函数执行

```js
;(function() {

}.call(this));
```

> 暴露 lodash

```js
var _ = runInContext();
```

## runInContext 函数

> 这里的简版源码，只关注函数入口和返回值。

```js
var runInContext = (function runInContext(context) {
 // 浏览器中处理context为window
 // ...
 function lodash(value) {}{
  // ...
  return new LodashWrapper(value);
 }
 // ...
 return lodash;
});
```

可以看到申明了一个`runInContext`函数。里面有一个`lodash`函数，最后处理返回这个`lodash`函数。

再看`lodash`函数中的返回值 `new LodashWrapper(value)`。

### LodashWrapper 函数

```js
function LodashWrapper(value, chainAll) {
 this.__wrapped__ = value;
 this.__actions__ = [];
 this.__chain__ = !!chainAll;
 this.__index__ = 0;
 this.__values__ = undefined;
}
```

> 设置了这些属性：

* `__wrapped__`：存放参数`value`。

* `__actions__`：存放待执行的函数体`func`， 函数参数 `args`，函数执行的`this` 指向 `thisArg`。

* `__chain__`、`undefined`两次取反转成布尔值`false`，不支持链式调用。和`underscore`一样，默认是不支持链式调用的。

* `__index__`：索引值 默认 0。

* `__values__`：主要`clone`时使用。

接着往下搜索源码，`LodashWrapper`， 会发现这两行代码。

```js
LodashWrapper.prototype = baseCreate(baseLodash.prototype);
LodashWrapper.prototype.constructor = LodashWrapper;
```

接着往上找`baseCreate`、`baseLodash`这两个函数。

### baseCreate 原型继承

```js
//  立即执行匿名函数
// 返回一个函数，用于设置原型 可以理解为是 __proto__
var baseCreate = (function() {
 // 这句放在函数外，是为了不用每次调用baseCreate都重复申明 object
 // underscore 源码中，把这句放在开头就申明了一个空函数 `Ctor`
 function object() {}
 return function(proto) {
  // 如果传入的参数不是object也不是function 是null
  // 则返回空对象。
  if (!isObject(proto)) {
   return {};
  }
  // 如果支持Object.create方法，则返回 Object.create
  if (objectCreate) {
   // Object.create
   return objectCreate(proto);
  }
  // 如果不支持Object.create 用 ployfill new
  object.prototype = proto;
  var result = new object;
  // 还原 prototype
  object.prototype = undefined;
  return result;
 };
}());

// 空函数
function baseLodash() {
 // No operation performed.
}

// Ensure wrappers are instances of `baseLodash`.
lodash.prototype = baseLodash.prototype;
// 为什么会有这一句？因为上一句把lodash.prototype.construtor 设置为Object了。这一句修正constructor
lodash.prototype.constructor = lodash;

LodashWrapper.prototype = baseCreate(baseLodash.prototype);
LodashWrapper.prototype.constructor = LodashWrapper;
```

<img :src="$withBase('/assets/designFrame/16d19648b052f4cb_tplv-t2oaga2asx-watermark.awebp')" alt="lodash 原型关系图">

### 衍生的 isObject 函数

> 判断`typeof value`不等于`null`，并且是`object`或者`function`。

```js
function isObject(value) {
 var type = typeof value;
 return value != null && (type == 'object' || type == 'function');
}
```

### Object.create() 用法举例

`lodash`上有很多方法和属性，但在`lodash.prototype`也有很多与`lodash`上相同的方法。肯定不是在`lodash.prototype`上重新写一遍。而是通过`mixin`挂载的。

## mixin

### mixin 具体用法

```js
_.mixin([object=lodash], source, [options={}])
```

> 添加来源对象自身的所有可枚举函数属性到目标对象。 如果 object 是个函数，那么函数方法将被添加到原型链上。

> 注意: 使用 _.runInContext 来创建原始的 lodash 函数来避免修改造成的冲突。

**添加版本**

> 0.1.0

**参数**

> [object=lodash] (Function|Object): 目标对象。

> source (Object): 来源对象。

> [options={}] (Object): 选项对象。

> [options.chain=true] (boolean): 是否开启链式操作。

**返回**

> (*): 返回 object.

### mixin 源码

```js
function mixin(object, source, options) {
 var props = keys(source),
  methodNames = baseFunctions(source, props);

 if (options == null &&
  !(isObject(source) && (methodNames.length || !props.length))) {
  options = source;
  source = object;
  object = this;
  methodNames = baseFunctions(source, keys(source));
 }
 var chain = !(isObject(options) && 'chain' in options) || !!options.chain,
  isFunc = isFunction(object);

 arrayEach(methodNames, function(methodName) {
  var func = source[methodName];
  object[methodName] = func;
  if (isFunc) {
   object.prototype[methodName] = function() {
    var chainAll = this.__chain__;
    if (chain || chainAll) {
     var result = object(this.__wrapped__),
      actions = result.__actions__ = copyArray(this.__actions__);

     actions.push({ 'func': func, 'args': arguments, 'thisArg': object });
     result.__chain__ = chainAll;
     return result;
    }
    return func.apply(object, arrayPush([this.value()], arguments));
   };
  }
 });

 return object;
}
```

### mixin 衍生的函数 keys

在 `mixin` 函数中 其实最终调用的就是 `Object.keys`

```js
function keys(object) {
 return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}
```

### mixin 衍生的函数 baseFunctions

返回函数数组集合

```js
function baseFunctions(object, props) {
 return arrayFilter(props, function(key) {
  return isFunction(object[key]);
 });
}
```

### mixin 衍生的函数 isFunction

判断参数是否是函数

```js
function isFunction(value) {
 if (!isObject(value)) {
  return false;
 }
 // The use of `Object#toString` avoids issues with the `typeof` operator
 // in Safari 9 which returns 'object' for typed arrays and other constructors.
 var tag = baseGetTag(value);
 return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
```

### mixin 衍生的函数 arrayEach

类似 `[].forEarch`

```js
function arrayEach(array, iteratee) {
 var index = -1,
  length = array == null ? 0 : array.length;

 while (++index < length) {
  if (iteratee(array[index], index, array) === false) {
   break;
  }
 }
 return array;
}
```

### mixin 衍生的函数 arrayPush

类似 `[].push`

```js
function arrayPush(array, values) {
 var index = -1,
  length = values.length,
  offset = array.length;

 while (++index < length) {
 array[offset + index] = values[index];
 }
 return array;
}
```

### mixin 衍生的函数 copyArray

拷贝数组

```js
function copyArray(source, array) {
 var index = -1,
  length = source.length;

 array || (array = Array(length));
 while (++index < length) {
  array[index] = source[index];
 }
 return array;
}
```

### mixin 源码解析

`lodash` 源码中两次调用 `mixin`

```js
// Add methods that return wrapped values in chain sequences.
lodash.after = after;
// code ... 等 153 个支持链式调用的方法

// Add methods to `lodash.prototype`.
// 把lodash上的静态方法赋值到 lodash.prototype 上
mixin(lodash, lodash);

// Add methods that return unwrapped values in chain sequences.
lodash.add = add;
// code ... 等 152 个不支持链式调用的方法


// 这里其实就是过滤 after 等支持链式调用的方法，获取到 lodash 上的 add 等 添加到lodash.prototype 上。
mixin(lodash, (function() {
 var source = {};
 // baseForOwn 这里其实就是遍历lodash上的静态方法，执行回调函数
 baseForOwn(lodash, function(func, methodName) {
  // 第一次 mixin 调用了所以赋值到了lodash.prototype
  // 所以这里用 Object.hasOwnProperty 排除不在lodash.prototype 上的方法。也就是 add 等 152 个不支持链式调用的方法。
  if (!hasOwnProperty.call(lodash.prototype, methodName)) {
   source[methodName] = func;
  }
 });
 return source;
// 最后一个参数options 特意注明不支持链式调用
}()), { 'chain': false });
```

结合两次调用`mixin` 代入到源码解析如下

### mixin源码及注释

```js
function mixin(object, source, options) {
 // source 对象中可以枚举的属性
 var props = keys(source),
  // source 对象中的方法名称数组
  methodNames = baseFunctions(source, props);

 if (options == null &&
  !(isObject(source) && (methodNames.length || !props.length))) {
  // 如果 options 没传为 undefined  undefined == null 为true
  // 且 如果source 不为 对象或者不是函数
  // 且 source对象的函数函数长度 或者 source 对象的属性长度不为0
  // 把 options 赋值为 source
  options = source;
  // 把 source 赋值为 object
  source = object;
  // 把 object 赋值为 this 也就是 _ (lodash)
  object = this;
  // 获取到所有的方法名称数组
  methodNames = baseFunctions(source, keys(source));
 }
 // 是否支持 链式调用
 // options  不是对象或者不是函数，是null或者其他值
 // 判断options是否是对象或者函数，如果不是或者函数则不会执行 'chain' in options 也就不会报错
 //  且 chain 在 options的对象或者原型链中
 // 知识点 in [MDN in :  https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/in
 // 如果指定的属性在指定的对象或其原型链中，则in 运算符返回true。

 // 或者 options.chain 转布尔值
 var chain = !(isObject(options) && 'chain' in options) || !!options.chain,
  // object 是函数
  isFunc = isFunction(object);

 // 循环 方法名称数组
 arrayEach(methodNames, function(methodName) {
  // 函数本身
  var func = source[methodName];
  // object 通常是 lodash  也赋值这个函数。
  object[methodName] = func;
  if (isFunc) {
   // 如果object是函数 赋值到  object prototype  上，通常是lodash
   object.prototype[methodName] = function() {
    // 实例上的__chain__ 属性 是否支持链式调用
    // 这里的 this 是 new LodashWrapper 实例 类似如下
    /**
     {
     __actions__: [],
     __chain__: true
     __index__: 0
     __values__: undefined
     __wrapped__: []
     }
     **/

    var chainAll = this.__chain__;
    // options 中的 chain 属性 是否支持链式调用
    // 两者有一个符合链式调用  执行下面的代码
    if (chain || chainAll) {
     // 通常是 lodash
     var result = object(this.__wrapped__),
     // 复制 实例上的 __action__ 到 result.__action__ 和 action 上
     actions = result.__actions__ = copyArray(this.__actions__);

     // action 添加 函数 和 args 和 this 指向，延迟计算调用。
     actions.push({ 'func': func, 'args': arguments, 'thisArg': object });
     //实例上的__chain__ 属性  赋值给 result 的 属性 __chain__
     result.__chain__ = chainAll;
     // 最后返回这个实例
     return result;
    }

    // 都不支持链式调用。直接调用
    // 把当前实例的 value 和 arguments 对象 传递给 func 函数作为参数调用。返回调用结果。
    return func.apply(object, arrayPush([this.value()], arguments));
   };
  }
 });

 // 最后返回对象 object
 return object;
}
```

::: tip 小结
简单说就是把`lodash`上的静态方法赋值到`lodash.prototype`上。分两次第一次是支持链式调用（`lodash.after`等 `153`个支持链式调用的方法），第二次是不支持链式调用的方法（`lodash.add`等`152`个不支持链式调用的方法）。
:::

## lodash 究竟在_和_.prototype挂载了多少方法和属性

再来看下`lodash`究竟挂载在`_`函数对象上有多少静态方法和属性，和挂载`_.prototype`上有多少方法和属性。

使用`for in`循环一试便知。看如下代码：

```js
var staticMethods = [];
var staticProperty = [];
for(var name in _){
 if(typeof _[name] === 'function'){
  staticMethods.push(name);
 }
 else{
  staticProperty.push(name);
 }
}
console.log(staticProperty); // ["templateSettings", "VERSION"] 2个
console.log(staticMethods); // ["after", "ary", "assign", "assignIn", "assignInWith", ...] 305个
```

其实就是上文提及的 `lodash.after` 等`153`个支持链式调用的函数 、`lodash.add` 等 `152`不支持链式调用的函数赋值而来。

```js
var prototypeMethods = [];
var prototypeProperty = [];
for(var name in _.prototype){
 if(typeof _.prototype[name] === 'function'){
  prototypeMethods.push(name);
 }
 else{
  prototypeProperty.push(name);
 }
}
console.log(prototypeProperty); // []
console.log(prototypeMethods); // ["after", "all", "allKeys", "any", "assign", ...] 317个
```

相比`lodash`上的静态方法多了`12`个，说明除了 `mixin` 外，还有`12`个其他形式赋值而来。

支持链式调用的方法最后返回是实例对象，获取最后的处理的结果值，最后需要调用`value`方法。

<img :src="$withBase('/assets/designFrame/16d2fe47c4bd70d6_tplv-t2oaga2asx-watermark.awebp')" alt="lodash的方法和属性挂载关系">

## 请出贯穿下文的简单的例子

```js
var result = _.chain([1, 2, 3, 4, 5])
.map(el => {
 console.log(el); // 1, 2, 3
 return el + 1;
})
.take(3)
.value();
// lodash中这里的`map`仅执行了`3`次。
// 具体功能也很简单 数组 1-5 加一，最后获取其中三个值。
console.log('result:', result);
```

**也就是说这里`lodash`聪明的知道了最后需要几个值，就执行几次`map`循环，对于很大的数组，提升性能很有帮助。**

而`underscore`执行这段代码其中`map`执行了5次。 如果是平常实现该功能也简单。

```js
var result = [1, 2, 3, 4, 5].map(el => el + 1).slice(0, 3);
console.log('result:', result);
```

而相比`lodash`这里的`map`执行了`5`次。

```js
// 不使用 map、slice
var result = [];
var arr = [1, 2, 3, 4, 5];
for (var i = 0; i < 3; i++){
 result[i] = arr[i] + 1;
}
console.log(result, 'result');
```

简单说这里的`map`方法，添加 `LazyWrapper` 的方法到 `lodash.prototype`存储下来，最后调用 `value`时再调用。 具体看下文源码实现。

## 添加 LazyWrapper 的方法到 lodash.prototype

主要是如下方法添加到到 `lodash.prototype` 原型上。

```js
// "constructor"
["drop", "dropRight", "take", "takeRight", "filter", "map", "takeWhile", "head", "last", "initial", "tail", "compact", "find", "findLast", "invokeMap", "reject", "slice", "takeRightWhile", "toArray", "clone", "reverse", "value"]
```

### 源码&注释

```js
// Add `LazyWrapper` methods to `lodash.prototype`.
// baseForOwn 这里其实就是遍历LazyWrapper.prototype上的方法，执行回调函数
baseForOwn(LazyWrapper.prototype, function(func, methodName) {
 // 检测函数名称是否是迭代器也就是循环
 var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName),
  // 检测函数名称是否head和last
  // 顺便提一下 ()这个是捕获分组 而加上 ?:  则是非捕获分组 也就是说不用于其他操作
  isTaker = /^(?:head|last)$/.test(methodName),
  // lodashFunc 是 根据 isTaker 组合 takeRight take methodName
  lodashFunc = lodash[isTaker ? ('take' + (methodName == 'last' ? 'Right' : '')) : methodName],
  // 根据isTaker 和 是 find 判断结果是否 包装
  retUnwrapped = isTaker || /^find/.test(methodName);

 // 如果不存在这个函数，就不往下执行
 if (!lodashFunc) {
  return;
 }
 // 把 lodash.prototype 方法赋值到lodash.prototype
 lodash.prototype[methodName] = function() {
  // 取实例中的__wrapped__ 值 例子中则是 [1,2,3,4,5]
  var value = this.__wrapped__,
   // 如果是head和last 方法 isTaker 返回 [1], 否则是arguments对象
   args = isTaker ? [1] : arguments,
   // 如果value 是LayeWrapper的实例
   isLazy = value instanceof LazyWrapper,
   // 迭代器 循环
   iteratee = args[0],
   // 使用useLazy isLazy value或者是数组
   useLazy = isLazy || isArray(value);

  var interceptor = function(value) {
   // 函数执行 value args 组合成数组参数
   var result = lodashFunc.apply(lodash, arrayPush([value], args));
   // 如果是 head 和 last (isTaker) 支持链式调用 返回结果的第一个参数 否则 返回result
   return (isTaker && chainAll) ? result[0] : result;
  };

  // useLazy true 并且 函数checkIteratee 且迭代器是函数，且迭代器参数个数不等于1
  if (useLazy && checkIteratee && typeof iteratee == 'function' && iteratee.length != 1) {
   // Avoid lazy use if the iteratee has a "length" value other than `1`.
   // useLazy 赋值为 false
   // isLazy 赋值为 false
   isLazy = useLazy = false;
  }
  // 取实例上的 __chain__
  var chainAll = this.__chain__,
   // 存储的待执行的函数 __actions__ 二次取反是布尔值 也就是等于0或者大于0两种结果
   isHybrid = !!this.__actions__.length,
   // 是否不包装 用结果是否不包装 且 不支持链式调用
   isUnwrapped = retUnwrapped && !chainAll,
   // 是否仅Lazy 用isLazy 和 存储的函数
   onlyLazy = isLazy && !isHybrid;

  // 结果不包装 且 useLazy 为 true
  if (!retUnwrapped && useLazy) {
   // 实例 new LazyWrapper 这里的this 是 new LodashWrapper()
   value = onlyLazy ? value : new LazyWrapper(this);
   // result 执行函数结果
   var result = func.apply(value, args);

   /*
   *
   // _.thru(value, interceptor)
   // 这个方法类似 _.tap， 除了它返回 interceptor 的返回结果。该方法的目的是"传递" 值到一个方法链序列以取代中间结果。
   _([1, 2, 3])
   .tap(function(array) {
    // 改变传入的数组
    array.pop();
   })
   .reverse()
   .value();
   // => [2, 1]
   */

   // thisArg 指向undefined 或者null 非严格模式下是指向window，严格模式是undefined 或者nll
   result.__actions__.push({ 'func': thru, 'args': [interceptor], 'thisArg': undefined });
   // 返回实例 lodashWrapper
   return new LodashWrapper(result, chainAll);
  }
  // 不包装 且 onlyLazy 为 true
  if (isUnwrapped && onlyLazy) {
   // 执行函数
   return func.apply(this, args);
  }
  // 上面都没有执行，执行到这里了
  // 执行 thru 函数，回调函数 是 interceptor
  result = this.thru(interceptor);
  return isUnwrapped ? (isTaker ? result.value()[0] : result.value()) : result;
 };
});
```

::: tip 小结
其实就是用`LazyWrapper.prototype` 改写原先在`lodash.prototype`的函数，判断函数是否需要使用惰性求值，需要时再调用。
:::

### 例子的chain和map执行后的debugger截图

<img :src="$withBase('/assets/designFrame/16d1965d6ddb9fad_tplv-t2oaga2asx-watermark.awebp')" alt="demo" />

### 例子的chain和map执行后的结果截图

<img :src="$withBase('/assets/designFrame/16d19661e13803e4_tplv-t2oaga2asx-watermark.awebp')" alt="demo" />

链式调用最后都是返回实例对象，实际的处理数据的函数都没有调用，而是被存储存储下来了，最后调用`value`方法，才执行这些函数。

## lodash.prototype.value 即 wrapperValue

```js
function baseWrapperValue(value, actions) {
 var result = value;
 // 如果是lazyWrapper的实例，则调用LazyWrapper.prototype.value 方法，也就是 lazyValue 方法
 if (result instanceof LazyWrapper) {
  result = result.value();
 }
 // 类似 [].reduce()，把上一个函数返回结果作为参数传递给下一个函数
 return arrayReduce(actions, function(result, action) {
  return action.func.apply(action.thisArg, arrayPush([result], action.args));
 }, result);
}
function wrapperValue() {
 return baseWrapperValue(this.__wrapped__, this.__actions__);
}
lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;
```

如果是惰性求值，则调用的是 `LazyWrapper.prototype.value` 即 `lazyValue`。

## LazyWrapper.prototype.value 即 lazyValue 惰性求值

### `lazyValue`源码及注释

```js
function LazyWrapper(value) {
 // 参数 value
 this.__wrapped__ = value;
 // 执行的函数
 this.__actions__ = [];
 this.__dir__ = 1;
 // 过滤
 this.__filtered__ = false;
 // 存储迭代器函数
 this.__iteratees__ = [];
 // 默认最大取值个数
 this.__takeCount__ = MAX_ARRAY_LENGTH;
 // 具体取值多少个，存储函数和类型
 this.__views__ = [];
}
/**
* Extracts the unwrapped value from its lazy wrapper.
*
* @private
* @name value
* @memberOf LazyWrapper
* @returns {*} Returns the unwrapped value.
*/
function lazyValue() {
 // this.__wrapped__ 是 new LodashWrapper 实例 所以执行.value 获取原始值
 var array = this.__wrapped__.value(),
  //
  dir = this.__dir__,
  // 是否是函数
  isArr = isArray(array),
  // 是否从右边开始
  isRight = dir < 0,
  // 数组的长度。如果不是数组，则是0
  arrLength = isArr ? array.length : 0,
  // 获取 take(3) 上述例子中 则是 start: 0，end: 3
  view = getView(0, arrLength, this.__views__),
  start = view.start,
  end = view.end,
  // 长度 3
  length = end - start,
  // 如果是是从右开始
  index = isRight ? end : (start - 1),
  // 存储的迭代器数组
  iteratees = this.__iteratees__,
  // 迭代器数组长度
  iterLength = iteratees.length,
  // 结果resIndex
  resIndex = 0,
  // 最后获取几个值，也就是 3
  takeCount = nativeMin(length, this.__takeCount__);

 // 如果不是数组，或者 不是从右开始 并且 参数数组长度等于take的长度 takeCount等于长度
 // 则直接调用 baseWrapperValue 不需要
 if (!isArr || (!isRight && arrLength == length && takeCount == length)) {
  return baseWrapperValue(array, this.__actions__);
 }
 var result = [];

 // 标签语句 label
 // MDN label 链接
 // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/label
 // 标记语句可以和 break 或 continue 语句一起使用。标记就是在一条语句前面加个可以引用的标识符（identifier）。
 outer:
 while (length-- && resIndex < takeCount) {
  index += dir;

  var iterIndex = -1,
   // 数组第一项
   value = array[index];

  while (++iterIndex < iterLength) {
   // 迭代器数组 {iteratee: function{}, typy: 2}
   var data = iteratees[iterIndex],
    iteratee = data.iteratee,
    type = data.type,
    // 结果 迭代器执行结果
    computed = iteratee(value);

   if (type == LAZY_MAP_FLAG) {
    // 如果 type 是 map 类型，结果 computed 赋值给value
    value = computed;
   } else if (!computed) {
    if (type == LAZY_FILTER_FLAG) {
     // 退出当前这次循环，进行下一次循环
     continue outer;
    } else {
     // 退出整个循环
     break outer;
    }
   }
  }
  // 最终数组
  result[resIndex++] = value;
 }
 // 返回数组 例子中则是 [2, 3, 4]
 return result;
}
// Ensure `LazyWrapper` is an instance of `baseLodash`.
LazyWrapper.prototype = baseCreate(baseLodash.prototype);
LazyWrapper.prototype.constructor = LazyWrapper;

LazyWrapper.prototype.value = lazyValue;
```

<img :src="$withBase('/assets/designFrame/16d1966cbe76d7c9_tplv-t2oaga2asx-watermark.awebp')" alt="lodash和LazyWrapper的关系图">

::: tip 小结
`lazyValue`简单说实现的功能就是把之前记录的需要执行几次，把记录存储的函数执行几次，不会有多少项数据就执行多少次，而是根据需要几项，执行几项。 也就是说以下这个例子中，`map`函数只会执行`3`次。如果没有用惰性求值，那么`map`函数会执行`5`次。
:::

```js
var result = _.chain([1, 2, 3, 4, 5])
.map(el => el + 1)
.take(3)
.value();
```

## 总结

> 文章主要学习了`runInContext()` 导出`_lodash`函数使用`baseCreate`方法原型继承`LodashWrapper`和`LazyWrapper`，`mixin`挂载方法到`lodash.prototype`、后文用结合例子解释`lodash.prototype.value(wrapperValue)`和`Lazy.prototype.value(lazyValue)`惰性求值的源码具体实现。

**分享一个只知道函数名找源码定位函数申明位置的`VSCode` 技巧**：`Ctrl + p`。输入 `@functionName` 定位函数`functionName`在源码文件中的具体位置。如果知道调用位置，那直接按`alt+鼠标左键`即可跳转到函数申明的位置。

