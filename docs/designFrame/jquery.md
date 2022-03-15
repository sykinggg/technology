# jQuery 源码整体架构

`v3.4.1`版本。 `unpkg.com`源码地址：https://unpkg.com/jquery@3.4.1/dist/jquery.js

## 自执行匿名函数

```js
(function(global, factory){

})(typeof window !== "underfined" ? window: this, function(window, noGlobal){

});
```

外界访问不到里面的变量和函数，里面可以访问到外界的变量，但里面定义了自己的变量，则不会访问外界的变量。
匿名函数将代码包裹在里面，防止与其他代码冲突和污染全局环境。
关于自执行函数不是很了解的读者可以参看这篇文章。

浏览器环境下，最后把`$` 和 `jQuery`函数挂载到`window`上，所以在外界就可以访问到`$`和`jQuery`了。

```js
if ( !noGlobal ) {
 window.jQuery = window.$ = jQuery;
}
// 其中`noGlobal`参数只有在这里用到。
```

## 支持多种环境下使用 比如 commonjs、amd规范

### commonjs 规范支持

`commonjs`实现 主要代表 `nodejs`

```js
// global是全局变量，factory 是函数
( function( global, factory ) {

 //  使用严格模式
 "use strict";
 // Commonjs 或者 CommonJS-like  环境
 if ( typeof module === "object" && typeof module.exports === "object" ) {
  // 如果存在global.document 则返回factory(global, true);
  module.exports = global.document ?
   factory( global, true ) :
   function( w ) {
    if ( !w.document ) {
     throw new Error( "jQuery requires a window with a document" );
    }
    return factory( w );
   };
 } else {
  factory( global );
 }

// Pass this if window is not defined yet
// 第一个参数判断window，存在返回window，不存在返回this
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {});
```

### amd 规范 主要代表 requirejs

```js
if ( typeof define === "function" && define.amd ) {
 define( "jquery", [], function() {
  return jQuery;
 } );
}
```

### cmd 规范 主要代表 seajs

`jQuery`源码里没有暴露对`seajs`的支持

## 无 new 构造

实际上也是可以 `new`的，因为`jQuery`是函数。而且和不用`new`效果是一样的。 new显示返回对象，所以和直接调用`jQuery`函数作用效果是一样的。 如果对`new`操作符具体做了什么不明白。可以参看我之前写的文章。

> 源码：

```js
 var
 version = "3.4.1",

 // Define a local copy of jQuery
 jQuery = function( selector, context ) {
  // 返回new之后的对象
  return new jQuery.fn.init( selector, context );
 };
jQuery.fn = jQuery.prototype = {
 // jQuery当前版本
 jquery: version,
 // 修正构造器为jQuery
 constructor: jQuery,
 length: 0,
};
init = jQuery.fn.init = function( selector, context, root ) {
 // ...
 if ( !selector ) {
  return this;
 }
 // ...
};
init.prototype = jQuery.fn;
```

```js
jQuery.fn === jQuery.prototype;  // true
init = jQuery.fn.init;
init.prototype = jQuery.fn;
// 也就是
jQuery.fn.init.prototype === jQuery.fn;  // true
jQuery.fn.init.prototype === jQuery.prototype;  // true
```

<img :src="$withBase('/assets/designFrame/16c3d14eb4c48e84_tplv-t2oaga2asx-watermark.awebp')" alt="demo" />

```js
<sciprt src="https://unpkg.com/jquery@3.4.1/dist/jquery.js">
</script>
console.log({jQuery});
// 在谷歌浏览器控制台，可以看到jQuery函数下挂载了很多静态属性和方法，在jQuery.fn 上也挂着很多属性和方法。
```

`Vue`源码中，也跟`jQuery`类似，执行的是`Vue.prototype._init`方法。

```js
function Vue (options) {
 if (!(this instanceof Vue)
 ) {
  warn('Vue is a constructor and should be called with the `new` keyword');
 }
 this._init(options);
}
initMixin(Vue);
function initMixin (Vue) {
 Vue.prototype._init = function (options) {};
};
```

## 核心函数之一 extend

用法：

```js
jQuery.extend( target [, object1 ] [, objectN ] )        Returns: Object

jQuery.extend( [deep ], target, object1 [, objectN ] )
```

[jQuery.extend API](https://link.juejin.cn/?target=https%3A%2F%2Fapi.jquery.com%2FjQuery.extend%2F)

[jQuery.fn.extend API](https://link.juejin.cn/?target=https%3A%2F%2Fapi.jquery.com%2FjQuery.extend%2F)

看几个例子： （例子可以我放到在线编辑代码的[jQuery.extend例子codepen](https://link.juejin.cn/?target=https%3A%2F%2Fcodepen.io%2Flxchuan12%2Fpen%2FQeGdqj)了，可以直接运行）。

```js
// 1. jQuery.extend( target)
var result1 = $.extend({
 job: '前端开发工程师',
});

console.log(result1, 'result1', result1.job); // $函数 加了一个属性 job  // 前端开发工程师

// 2. jQuery.extend( target, object1)
var result2 = $.extend({
 name: '若川',
},
{
 job: '前端开发工程师',
});

console.log(result2, 'result2'); // { name: '若川', job: '前端开发工程师' }

// deep 深拷贝
// 3. jQuery.extend( [deep ], target, object1 [, objectN ] )
var result3 = $.extend(true,  {
 name: '若川',
 other: {
  mac: 0,
  ubuntu: 1,
  windows: 1,
 },
}, {
 job: '前端开发工程师',
 other: {
  mac: 1,
  linux: 1,
  windows: 0,
 }
});
console.log(result3, 'result3');
// deep true
// {
//     "name": "若川",
//     "other": {
//         "mac": 1,
//         "ubuntu": 1,
//         "windows": 0,
//         "linux": 1
//     },
//     "job": "前端开发工程师"
// }
// deep false
// {
//     "name": "若川",
//     "other": {
//         "mac": 1,
//         "linux": 1,
//         "windows": 0
//     },
//     "job": "前端开发工程师"
// }
```

结论：`extend`函数既可以实现给`jQuery`函数可以实现浅拷贝、也可以实现深拷贝。可以给jQuery上添加静态方法和属性，也可以像`jQuery.fn`(也就是`jQuery.prototype`)上添加属性和方法，这个功能归功于`this`，`jQuery.extend`调用时`this`指向是`jQuery`，`jQuery.fn.extend`调用时`this`指向则是`jQuery.fn`。

### 浅拷贝实现

> 知道这些，其实实现浅拷贝还是比较容易的：

```js
// 浅拷贝实现
jQuery.extend = function(){
 // options 是扩展的对象object1，object2...
 var options,
 // object对象上的键
 name,
 // copy object对象上的值，也就是是需要拷贝的值
 copy,
 // 扩展目标对象，可能不是对象，所以或空对象
 target = arguments[0] || {},
 // 定义i为1
 i = 1,
 // 定义实参个数length
 length = arguments.length;
 // 只有一个参数时
 if(i === length){
  target = this;
  i--;
 }
 for(; i < length; i++){
  // 不是underfined 也不是null
  if((options = arguments[i]) !=  null){
   for(name in options){
    copy = options[name];
    // 防止死循环，continue 跳出当前此次循环
    if ( name === "__proto__" || target === copy ) {
     continue;
    }
    if ( copy !== undefined ) {
     target[ name ] = copy;
    }
   }
  }

 }
 // 最后返回目标对象
 return target;
}
```

> 深拷贝则主要是在以下这段代码做判断。可能是数组和对象引用类型的值，做判断。

```js
if ( copy !== undefined ) {
 target[ name ] = copy;
}
```

代码同样放在[jQuery.extend浅拷贝代码实现codepen](https://link.juejin.cn/?target=https%3A%2F%2Fcodepen.io%2Flxchuan12%2Fpen%2FVoPPmQ)，可在线运行。

### 深拷贝实现

```js
$.extend = function(){
 // options 是扩展的对象object1，object2...
 var options,
 // object对象上的键
 name,
 // copy object对象上的值，也就是是需要拷贝的值
 copy,
 // 深拷贝新增的四个变量 deep、src、copyIsArray、clone
 deep = false,
 // 源目标，需要往上面赋值的
 src,
 // 需要拷贝的值的类型是函数
 copyIsArray,
 //
 clone,
 // 扩展目标对象，可能不是对象，所以或空对象
 target = arguments[0] || {},
 // 定义i为1
 i = 1,
 // 定义实参个数length
 length = arguments.length;

 // 处理深拷贝情况
 if ( typeof target === "boolean" ) {
  deep = target;

  // Skip the boolean and the target
  // target目标对象开始后移
  target = arguments[ i ] || {};
  i++;
 }

 // Handle case when target is a string or something (possible in deep copy)
 // target不等于对象，且target不是函数的情况下，强制将其赋值为空对象。
 if ( typeof target !== "object" && !isFunction( target ) ) {
  target = {};
 }

 // 只有一个参数时
 if(i === length){
  target = this;
  i--;
 }
 for(; i < length; i++){
  // 不是underfined 也不是null
  if((options = arguments[i]) !=  null){
   for(name in options){
    copy = options[name];
    // 防止死循环，continue 跳出当前此次循环
    if ( name === "__proto__" || target === copy ) {
     continue;
    }

    // Recurse if we're merging plain objects or arrays
    // 这里deep为true，并且需要拷贝的值有值，并且是纯粹的对象
    // 或者需拷贝的值是数组
    if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
     ( copyIsArray = Array.isArray( copy ) ) ) ) {

     // 源目标，需要往上面赋值的
     src = target[ name ];

     // Ensure proper type for the source value
     // 拷贝的值，并且src不是数组，clone对象改为空数组。
     if ( copyIsArray && !Array.isArray( src ) ) {
      clone = [];
      // 拷贝的值不是数组，对象不是纯粹的对象。
     } else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
      // clone 赋值为空对象
      clone = {};
     } else {
      // 否则 clone = src
      clone = src;
     }
     // 把下一次循环时，copyIsArray 需要重新赋值为false
     copyIsArray = false;

     // Never move original objects, clone them
     // 递归调用自己
     target[ name ] = jQuery.extend( deep, clone, copy );

    // Don't bring in undefined values
    }
    else if ( copy !== undefined ) {
     target[ name ] = copy;
    }
   }
  }

 }
 // 最后返回目标对象
 return target;
};
```

这段代码同样放在[jQuery.extend深拷贝代码实现codepen](https://link.juejin.cn/?target=https%3A%2F%2Fcodepen.io%2Flxchuan12%2Fpen%2FjgyyyN)，可在线运行

### 深拷贝衍生的函数 isFunction

> 判断参数是否是函数。

```js
var isFunction = function isFunction( obj ) {

 // Support: Chrome <=57, Firefox <=52
 // In some browsers, typeof returns "function" for HTML <object> elements
 // (i.e., `typeof document.createElement( "object" ) === "function"`).
 // We don't want to classify *any* DOM node as a function.
 return typeof obj === "function" && typeof obj.nodeType !== "number";
};
```

### 深拷贝衍生的函数 jQuery.isPlainObject

> `jQuery.isPlainObject(obj)` 测试对象是否是纯粹的对象（通过 "{}" 或者 "new Object" 创建的）。

```js
jQuery.isPlainObject({}) // true
jQuery.isPlainObject("test") // false
```

```js
var getProto = Object.getPrototypeOf;
var class2type = {};
var toString = class2type.toString;
var hasOwn = class2type.hasOwnProperty;
var fnToString = hasOwn.toString;
var ObjectFunctionString = fnToString.call( Object );

jQuery.extend( {
 isPlainObject: function( obj ) {
  var proto, Ctor;

  // Detect obvious negatives
  // Use toString instead of jQuery.type to catch host objects
  // !obj 为true或者 不为[object Object]
  // 直接返回false
  if ( !obj || toString.call( obj ) !== "[object Object]" ) {
   return false;
  }

  proto = getProto( obj );

  // Objects with no prototype (e.g., `Object.create( null )`) are plain
  // 原型不存在 比如 Object.create(null) 直接返回 true;
  if ( !proto ) {
   return true;
  }

  // Objects with prototype are plain iff they were constructed by a global Object function
  Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
  // 构造器是函数，并且 fnToString.call( Ctor )  === fnToString.call( Object );
  return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
 },
});
```

`extend`函数，也可以自己删掉写一写，算是`jQuery`中一个比较核心的函数了。而且用途广泛，可以内部使用也可以，外部使用扩展 插件等。

## 链式调用

`jQuery`能够链式调用是因为一些函数执行结束后 `return this`。 比如 `jQuery` 源码中的`addClass`、`removeClass`、`toggleClass`。

```js
jQuery.fn.extend({
 addClass: function(){
  // ...
  return this;
 },
 removeClass: function(){
  // ...
  return this;
 },
 toggleClass: function(){
  // ...
  return this;
 },
});
```

## jQuery.noConflict 很多js库都会有的防冲突函数

[jQuery.noConflict API](https://link.juejin.cn/?target=https%3A%2F%2Fapi.jquery.com%2FjQuery.noConflict%2F)

> 用法：

```html
<script>
 var $ = '我是其他的$，jQuery不要覆盖我';
</script>
<script src="./jquery-3.4.1.js">
</script>
<script>
 $.noConflict();
 console.log($); // 我是其他的$，jQuery不要覆盖我
</script>
```

> jQuery.noConflict 源码

```js
var

 // Map over jQuery in case of overwrite
 _jQuery = window.jQuery,

 // Map over the $ in case of overwrite
 _$ = window.$;

jQuery.noConflict = function( deep ) {
 // 如果已经存在$ === jQuery;
 // 把已存在的_$赋值给window.$;
 if ( window.$ === jQuery ) {
  window.$ = _$;
 }

 // 如果deep为 true, 并且已经存在jQuery === jQuery;
 // 把已存在的_jQuery赋值给window.jQuery;
 if ( deep && window.jQuery === jQuery ) {
  window.jQuery = _jQuery;
 }

 // 最后返回jQuery
 return jQuery;
};
```

## 总结

全文主要通过浅析了`jQuery`整体结构，自执行匿名函数、无`new`构造、支持多种规范（如commonjs、amd规范）、核心函数之`extend`、链式调用、`jQuery.noConflict`等方面。

> 重新梳理下文中学习的源码结构。

```js
// 源码结构
( function( global, factory )
 "use strict";
 if ( typeof module === "object" && typeof module.exports === "object" ) {
  module.exports = global.document ?
   factory( global, true ) :
   function( w ) {
    if ( !w.document ) {
     throw new Error( "jQuery requires a window with a document" );
    }
    return factory( w );
   };
 } else {
  factory( global );
 }

} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {
 var version = "3.4.1",

  // Define a local copy of jQuery
  jQuery = function( selector, context ) {
   return new jQuery.fn.init( selector, context );
  };

 jQuery.fn = jQuery.prototype = {
  jquery: version,
  constructor: jQuery,
  length: 0,
  // ...
 };

 jQuery.extend = jQuery.fn.extend = function() {};

 jQuery.extend( {
  // ...
  isPlainObject: function( obj ) {},
  // ...
 });

 init = jQuery.fn.init = function( selector, context, root ) {};

 init.prototype = jQuery.fn;

 if ( typeof define === "function" && define.amd ) {
  define( "jquery", [], function() {
   return jQuery;
  } );
 }
 jQuery.noConflict = function( deep ) {};

 if ( !noGlobal ) {
  window.jQuery = window.$ = jQuery;
 }

 return jQuery;
});
```

可以学习到`jQuery`巧妙的设计和架构，为自己所用，打造属于自己的`js`类库。 相关代码和资源放置在[github blog](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Flxchuan12%2Fblog)中