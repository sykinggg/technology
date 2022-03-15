# 第一套js综合基础面试题

**1. 原型 / 构造函数 / 实例**
---

* 原型(`prototype`): 一个简单的对象，用于实现对象的 **属性继承**。可以简单的理解成对象的爹。在 Firefox 和 Chrome 中，每个`JavaScript`对象中都包含一个`__proto__` (非标准)的属性指向它爹(该对象的原型)，可`obj.__proto__`进行访问。

* 构造函数: 可以通过`new`来 **新建一个对象** 的函数。

* 实例: 通过构造函数和`new`创建出来的对象，便是实例。 **实例通过**`__proto__`**指向原型，通过**`constructor`**指向构造函数**。

* **注意: 其实实例上并不是真正有 `constructor` 这个指针，它其实是从原型链上获取的**

以`Object`为例，常用的`Object`便是一个构造函数，因此可以通过它构建实例。

```javascript
// 实例
const instance = new Object()
```

则此时， **实例为**`instance`, **构造函数为**`Object`，知道，构造函数拥有一个`prototype`的属性指向原型，因此原型为:

```javascript
// 原型
const prototype = Object.prototype
```

三者的关系:

```javascript
实例.__proto__ === 原型

原型.constructor === 构造函数

构造函数.prototype === 原型

// 这条线其实是是基于原型进行获取的，可以理解成一条基于原型的映射线
// 例如: 
// const o = new Object()
// o.constructor === Object   --> true
// o.__proto__ = null;
// o.constructor === Object   --> false
// 注意: 其实实例上并不是真正有 constructor 这个指针，它其实是从原型链上获取的
//      instance.hasOwnProperty('constructor') === false
实例.constructor === 构造函数
```

<img :src="$withBase('/assets/168e9d9b940c4c6f.png')" alt="原型示例图">

**2.原型链：**
---

**原型链是由原型对象组成**，每个对象都有 `__proto__` 属性，指向了创建该对象的构造函数的原型，`__proto__` 将对象连接起来组成了原型链。是一个用来**实现继承和共享属性**的有限的对象链。

* **属性查找机制**: 当查找对象的属性时，如果实例对象自身不存在该属性，则沿着原型链往上一级查找，找到时则输出，不存在时，则继续沿着原型链往上一级查找，直至最顶级的原型对象`Object.prototype`，如还是没找到，则输出 `undefined`；

* **属性修改机制**: 只会修改实例对象本身的属性，如果不存在，则进行添加该属性，如果需要修改原型的属性时，则可以用: `b.prototype.x = 2`；但是这样会造成所有继承于该对象的实例的属性发生改变。

**3. 执行上下文(EC)**
---

执行上下文可以简单理解为一个对象:

* 它包含三个部分:
    
    * 变量对象(VO)
    
    * 作用域链(词法作用域)
    
    * `this`指向

* 它的类型:

    * 全局执行上下文

    * 函数执行上下文

    * eval执行上下文

* 代码执行过程:

    * 创建 **全局上下文 (global EC)**

    * 全局执行上下文 (caller) 逐行 **自上而下** 执行。遇到函数时，**函数执行上下文 (callee)** 被`push`到执行栈顶层

    * 函数执行上下文被激活，成为 `active EC`, 开始执行函数中的代码，`caller` 被挂起

    * 函数执行完后，`callee` 被`pop`移除出执行栈，控制权交还**全局上下文 (caller)**，继续执行

**4.变量对象**
---

变量对象，是执行上下文中的一部分，可以抽象为一种 **数据作用域**，其实也可以理解为就是一个简单的对象，它存储着该执行上下文中的所有 **变量和函数声明(不包含函数表达式)**。

> 活动对象 (AO): 当变量对象所处的上下文为 active EC 时，称为活动对象。

**5. 作用域**
---

执行上下文中还包含作用域链。理解作用域之前，先介绍下作用域。作用域其实可理解为该上下文中声明的 **变量和声明的作用范围**。可分为 **块级作用域** 和 **函数作用域**

特性:

* **声明提前**: 一个声明在函数体内都是可见的, 函数优先于变量

* 非匿名自执行函数，函数变量为 **只读** 状态，无法修改

```javascript
let foo = function() { console.log(1) };
(function foo() {
    foo = 10  // 由于foo在函数中只为可读，因此赋值无效
    console.log(foo)
}()) 

// 结果打印：  ƒ foo() { foo = 10 ; console.log(foo) }
```

**6.作用域链**
---

可以在执行上下文中访问到父级甚至全局的变量，这便是作用域链的功劳。作用域链可以理解为一组对象列表，包含 **父级和自身的变量对象**，因此便能通过作用域链访问到父级里声明的变量或者函数。

* 由两部分组成:

    * `[[scope]]`属性: 指向父级变量对象和作用域链，也就是包含了父级的`[[scope]]`和`AO`

    * **AO**: 自身活动对象

如此 `[[scopr]]`包含`[[scope]]`，便自上而下形成一条 **链式作用域**。

**7. 闭包**
---

闭包属于一种特殊的作用域，称为 **静态作用域**。它的定义可以理解为: **父函数被销毁** 的情况下，返回出的子函数的`[[scope]]`中仍然保留着父级的单变量对象和作用域链，因此可以继续访问到父级的变量对象，这样的函数称为闭包。

* 闭包会产生一个很经典的问题:

    * 多个子函数的`[[scope]]`都是同时指向父级，是完全共享的。因此当父级的变量对象被修改时，所有子函数都受到影响。

* 解决:

    * 变量可以通过 **函数参数的形式** 传入，避免使用默认的`[[scope]]`向上查找

    * 使用`setTimeout`包裹，通过第三个参数传入

    * 使用 **块级作用域**，让变量成为自己上下文的属性，避免共享

**8.script 引入方式：**
---

* html 静态`<script>`引入

* js 动态插入`<script>`

* `<script defer>`: 延迟加载，元素解析完成后执行

* `<script async>`: 异步加载，但执行时会阻塞元素渲染

**9.对象的拷贝**
---

* 浅拷贝: 以赋值的形式拷贝引用对象，仍指向同一个地址，**修改时原对象也会受到影响**

    * `Object.assign`

    * 展开运算符(...)

* 深拷贝: 完全拷贝一个新对象，**修改时原对象不再受到任何影响**

    * `JSON.parse(JSON.stringify(obj))`: 性能最快

        * 具有循环引用的对象时，报错

        * 当值为函数、`undefined`、或`symbol`时，无法拷贝
    
    * 递归进行逐一赋值

**10.new运算符的执行过程**
---

* 新生成一个对象

* 链接到原型: `obj.__proto__ = Con.prototype`

* 绑定**this**: `apply`

* 返回新对象(如果构造函数有自己 **retrun** 时，则返回该值)

**11.instanceof原理**
---

能在实例的 **原型对象链** 中找到该构造函数的`prototype`属性所指向的 **原型对象**，就返回`true`。即:

```javascript
// __proto__: 代表原型对象链
instance.[__proto__...] === instance.constructor.prototype

// return true
```

**12.代码的复用**
---

* 函数封装

* 继承

* 复制`extend`

* 混入`mixin`

* 借用`apply/call`

**13.继承**
---

在 JS 中，继承通常指的便是 **原型链继承**，也就是通过指定原型，并可以通过原型链继承原型上的属性或者方法。

* 最优化: **圣杯模式**

```javascript
var inherit = (function(c,p){
	var F = function(){};
	return function(c,p){
		F.prototype = p.prototype;
		c.prototype = new F();
		c.uber = p.prototype;
		c.prototype.constructor = c;
	}
})();
```

* 使用 ES6 的语法糖 `class / extends`

**14.类型转换**
---

大家都知道 JS 中在使用运算符号或者对比符时，会自带隐式转换，规则如下:

* -、*、/、% ：一律转换成数值后计算

* +：
    
    * 数字 + 字符串 = 字符串， 运算顺序是从左到右
    
    * 数字 + 对象， 优先调用对象的`valueOf` -> `toString`
    
    * 数字 + `boolean/null` -> 数字
    
    * 数字 + `undefined` -> `NaN`

* `[1].toString() === '1'`

* `{}.toString() === '[object object]'`

* `NaN !== NaN` 、`+undefined` 为 NaN

**15.模块化**
---

模块化开发在现代开发中已是必不可少的一部分，它大大提高了项目的可维护、可拓展和可协作性。通常， **在浏览器中使用 ES6 的模块化支持，在 Node 中使用 commonjs 的模块化支持**。

* 分类:

    * es6: `import/export`

    * commonjs: `require/module.exports/exports`

    * amd: `require/defined`

* `require`与`import`的区别

    * `require`支持 **动态导入**，`import`不支持，正在提案 (babel 下可支持)

    * `require`是 **同步** 导入，`import`属于 **异步** 导入

    * `require`是 **值拷贝**，导出值变化不会影响导入值；`import`指向 **内存地址**，导入值会随导出值而变化

**16. 函数执行改变this**
---

由于 JS 的设计原理: 在函数中，可以引用运行环境中的变量。因此就需要一个机制来让可以在函数体内部获取当前的运行环境，这便是`this`。

因此要明白 `this` 指向，其实就是要搞清楚 函数的运行环境，说人话就是，谁调用了函数。例如:

* `obj.fn()`，便是 `obj` 调用了函数，既函数中的 `this === obj`

* `fn()`，这里可以看成 `window.fn()`，因此 `this === window`

但这种机制并不完全能满足的业务需求，因此提供了三种方式可以手动修改 `this` 的指向:

* `call: fn.call(target, 1, 2)`

* `apply: fn.apply(target, [1, 2])`

* `bind: fn.bind(target)(1,2)`

**17. ES6/ES7**
---

由于 **Babel** 的强大和普及，现在 **ES6/ES7** 基本上已经是现代化开发的必备了。通过新的语法糖，能让代码整体更为简洁和易读。

* 声明

    * `let/const`: 块级作用域、不存在变量提升、暂时性死区、不允许重复声明

    * `const`: 声明常量，无法修改

* 解构赋值

* `class/extend`: 类声明与继承

* `Set/Map`: 新的数据结构

* 异步解决方案:
    
    * `Promise`的使用与实现

    * `generator`:

        * `yield`: 暂停代码
        
        * `next()`: 继续执行代码

```javascript
function* helloWorld() {
  yield 'hello';
  yield 'world';
  return 'ending';
}

const generator = helloWorld();

generator.next()  // { value: 'hello', done: false }

generator.next()  // { value: 'world', done: false }

generator.next()  // { value: 'ending', done: true }

generator.next()  // { value: undefined, done: true }
```

    * `await/async`: 是`generator`的语法糖， babel中是基于`promise`实现。

```javascript
async function getUserByAsync(){
   let user = await fetchUser();
   return user;
}

const user = await getUserByAsync()
console.log(user)
```

**18. AST**
---

**抽象语法树 (Abstract Syntax Tree)**，是将代码逐字母解析成 **树状对象** 的形式。这是语言之间的转换、代码语法检查，代码风格检查，代码格式化，代码高亮，代码错误提示，代码自动补全等等的基础。例如:

```javascript
function square(n){
	return n * n
}
```

通过解析转化成的`AST`如下图:

<img :src="$withBase('/assets/168e9d95910dd187.png')" alt="AST流程图">

**19. babel编译原理**
---

* babylon 将 ES6/ES7 代码解析成 AST

* babel-traverse 对 AST 进行遍历转译，得到新的 AST

* 新 AST 通过 babel-generator 转换成 ES5

**20. 函数柯里化**
---

在一个函数中，首先填充几个参数，然后再返回一个新的函数的技术，称为函数的柯里化。通常可用于在不侵入函数的前提下，为函数 **预置通用参数**，供多次重复调用。

```javascript
const add = function add(x) {
	return function (y) {
		return x + y
	}
}

const add1 = add(1)

add1(2) === 3
add1(20) === 21
```

**21. 数组(array)**
---

* `map`: 遍历数组，返回回调返回值组成的新数组

* `forEach`: 无法`break`，可以用`try/catch`中`throw new Error`来停止

* `filter`: 过滤

* `some`: 有一项返回`true`，则整体为`true`

* `every`: 有一项返回`false`，则整体为`false`

* `join`: 通过指定连接符生成字符串

* `push / pop`: 末尾推入和弹出，改变原数组， `push` 返回数组长度, `pop` 返回原数组最后一项；

* `unshift / shift`: 头部推入和弹出，改变原数组，`unshift` 返回数组长度，`shift` 返回原数组第一项 ；

* `sort(fn) / reverse`: 排序与反转，改变原数组

* `concat`: 连接数组，不影响原数组， 浅拷贝

* `slice(start, end)`: 返回截断后的新数组，不改变原数组

* `splice(start, number, value...)`: 返回删除元素组成的数组，`value` 为插入项，改变原数组

* `indexOf / lastIndexOf(value, fromIndex)`: 查找数组项，返回对应的下标

* `reduce / reduceRight(fn(prev, cur)， defaultPrev)`: 两两执行，`prev` 为上次化简函数的`return`值，`cur` 为当前值
    
    * 当传入 `defaultPrev` 时，从第一项开始；
    
    * 当未传入时，则为第二项

* 数组乱序：

```javascript
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.sort(function () {
    return Math.random() - 0.5;
});
```

* 数组拆解: flat: [1,[2,3]] --> [1, 2, 3]

```javascript
Array.prototype.flat = function() {
    return this.toString().split(',').map(item => +item )
}
```

## 22. 数据类型

JavaScript一共有8种数据类型，其中有7种基本数据类型：`Undefined`、`Null`、`Boolean`、`Number`、`String`、`Symbol`（es6新增，表示独一无二的值）和`BigInt`（es10新增）；

<img :src="$withBase('/assets/js/037881b6bfbb413caf758a0911609b89_tplv-k3u1fbpfcp-watermark.image')" alt="demo" />

1种引用数据类型——Object（Object本质上是由一组无序的名值对组成的）。里面包含 `function`、`Array`、`Date`等。JavaScript不支持任何创建自定义类型的机制，而所有值最终都将是上述 8 种数据类型之一。

* 原始数据类型：直接存储在**栈（stack）**中，占据空间小、大小固定，属于被频繁使用数据，所以放入栈中存储。

* 引用数据类型：同时存储在**栈（stack）**和**堆（heap）**中，占据空间大、大小不固定。引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体。

> `在 JavaScript 中，原始类型的赋值会完整复制变量值，而引用类型的赋值是复制引用地址。`
> 在 JavaScript 的执行过程中， 主要有三种类型内存空间，分别是`代码空间`、`栈空间`、`堆空间`。其中的代码空间主要是存储可执行代码的，原始类型(Number、String、Null、Undefined、Boolean、Symbol、BigInt)的数据值都是直接保存在“栈”中的，引用类型(Object)的值是存放在“堆”中的。因此在栈空间中(执行上下文)，原始类型存储的是变量的值，而引用类型存储的是其在"堆空间"中的地址，当 JavaScript 需要访问该数据的时候，是通过栈中的引用地址来访问的，相当于多了一道转手流程。
> 在编译过程中，如果 JavaScript 引擎判断到一个闭包，也会在堆空间创建换一个“closure(fn)”的对象（这是一个内部对象，JavaScript 是无法访问的），用来保存闭包中的变量。所以闭包中的变量是存储在“堆空间”中的。
> JavaScript 引擎需要用栈来维护程序执行期间上下文的状态，如果栈空间大了话，所有的数据都存放在栈空间里面，那么会影响到上下文切换的效率，进而又影响到整个程序的执行效率。通常情况下，栈空间都不会设置太大，主要用来存放一些原始类型的小数据。而引用类型的数据占用的空间都比较大，所以这一类数据会被存放到堆中，堆空间很大，能存放很多大的数据，不过缺点是分配内存和回收内存都会占用一定的时间。因此需要“栈”和“堆”两种空间。

## 23. && 、 ||和!! 运算符分别能做什么

* `&&` 叫逻辑与，在其操作数中找到第一个虚值表达式并返回它，如果没有找到任何虚值表达式，则返回最后一个真值表达式。它采用短路来防止不必要的工作。

* `||` 叫逻辑或，在其操作数中找到第一个真值表达式并返回它。这也使用了短路来防止不必要的工作。在支持 ES6 默认函数参数之前，它用于初始化函数中的默认参数值。

* `!!` 运算符可以将右侧的值强制转换为布尔值，这也是将值转换为布尔值的一种简单方法。

## 24. js的数据类型的转换

在 JS 中类型转换只有三种情况，分别是：


* 转换为布尔值（调用`Boolean()`方法）

* 转换为数字（调用`Number()`、`parseInt()`和`parseFloat()`方法）

* 转换为字符串（调用.`toString()`或者`String()`方法）

> null和underfined没有.toString方法

<img :src="$withBase('/assets/js/v2-59308bb89b868f36917e90e3a9175f22_1440w')" alt="demo" />

## 25. JS中数据类型的判断（ typeof，instanceof，constructor，Object.prototype.toString.call()

### typeof

`typeof` 对于原始类型来说，除了 `null` 都可以显示正确的类型

```js
console.log(typeof 2);               // number
console.log(typeof true);            // boolean
console.log(typeof 'str');           // string
console.log(typeof []);              // object     []数组的数据类型在 typeof 中被解释为 object
console.log(typeof function(){});    // function
console.log(typeof {});              // object
console.log(typeof undefined);       // undefined
console.log(typeof null);            // object     null 的数据类型被 typeof 解释为 object
```

> `typeof` 对于对象来说，除了函数都会显示 `object`，所以说 `typeof` 并不能准确判断变量到底是什么类型,所以想判断一个对象的正确类型，这时候可以考虑使用 instanceof

### （2）instanceof

`instanceof` 可以正确的判断对象的类型，因为内部机制是通过判断对象的原型链中是不是能找到类型的 `prototype`。

```js
console.log(2 instanceof Number);                    // false
console.log(true instanceof Boolean);                // false 
console.log('str' instanceof String);                // false  
console.log([] instanceof Array);                    // true
console.log(function(){} instanceof Function);       // true
console.log({} instanceof Object);                   // true    
// console.log(undefined instanceof Undefined);
// console.log(null instanceof Null);
```

> 可以看出直接的字面量值判断数据类型，`instanceof`可以精准判断引用数据类型（`Array`，`Function`，`Object`），而基本数据类型不能被`instanceof`精准判断。

来看一下 `instanceof` 在MDN中的解释：`instanceof` 运算符用来测试一个对象在其原型链中是否存在一个构造函数的 `prototype` 属性。其意思就是判断对象是否是某一数据类型（如`Array`）的实例，请重点关注一下是判断一个对象是否是数据类型的实例。在这里字面量值，2， `true` ，`'str'`不是实例，所以判断值为`false`。

### （3）constructor

```js
console.log((2).constructor === Number); // true
console.log((true).constructor === Boolean); // true
console.log(('str').constructor === String); // true
console.log(([]).constructor === Array); // true
console.log((function() {}).constructor === Function); // true
console.log(({}).constructor === Object); // true
```

> 这里有一个坑，如果我创建一个对象，更改它的原型，`constructor`就会变得不可靠了

```js
function Fn(){};
 
Fn.prototype=new Array();
 
var f=new Fn();
 
console.log(f.constructor===Fn);    // false
console.log(f.constructor===Array); // true 
```

### （4）Object.prototype.toString.call() 使用 Object 对象的原型方法 toString ，使用 call 进行狸猫换太子，借用Object的 toString 方法

```js
var a = Object.prototype.toString;
 
console.log(a.call(2));
console.log(a.call(true));
console.log(a.call('str'));
console.log(a.call([]));
console.log(a.call(function(){}));
console.log(a.call({}));
console.log(a.call(undefined));
console.log(a.call(null));
```

## 26. 内置对象

> 全局的对象（ global objects ）或称标准内置对象，不要和 "全局对象（global object）" 混淆。
>
> 全局作用域里的对象。全局作用域中的其他对象可以由用户的脚本创建或由宿主程序提供。

### 标准内置对象的分类

（1）值属性，这些全局属性返回一个简单值，这些值没有自己的属性和方法。

例如 `Infinity`、`NaN`、`undefined`、`null` 字面量

（2）函数属性，全局函数可以直接调用，不需要在调用时指定所属对象，执行结束后会将结果直接返回给调用者。

例如 `eval()`、`parseFloat()`、`parseInt()` 等

（3）基本对象，基本对象是定义或使用其他对象的基础。基本对象包括一般对象、函数对象和错误对象。

例如 `Object`、`Function`、`Boolean`、`Symbol`、`Error` 等

（4）数字和日期对象，用来表示数字、日期和执行数学计算的对象。

例如 `Number`、`Math`、`Date`

（5）字符串，用来表示和操作字符串的对象。

例如 `String`、`RegExp`

（6）可索引的集合对象，这些对象表示按照索引值来排序的数据集合，包括数组和类型数组，以及类数组结构的对象。例如 Array

（7）使用键的集合对象，这些集合对象在存储数据时会使用到键，支持按照插入顺序来迭代元素。

例如 `Map`、`Set`、`WeakMap`、`WeakSet`

（8）矢量集合，`SIMD` 矢量集合中的数据会被组织为一个数据序列。

例如 `SIMD` 等

（9）结构化数据，这些对象用来表示和操作结构化的缓冲区数据，或使用 JSON 编码的数据。

例如 `JSON` 等

（10）控制抽象对象

例如 `Promise`、`Generator` 等

（11）反射

例如 `Reflect`、`Proxy`

（12）国际化，为了支持多语言处理而加入 `ECMAScript` 的对象。

例如 `Intl`、`Intl.Collator` 等

（13）WebAssembly

（14）其他

例如 `arguments`

js 中的内置对象主要指的是在程序执行前存在全局作用域里的由 js 定义的一些全局值属性、函数和用来实例化其他对象的构造函 数对象。一般经常用到的如全局变量值 NaN、undefined，全局函数如 parseInt()、parseFloat() 用来实例化对象的构 造函数如 Date、Object 等，还有提供数学计算的单体内置对象如 Math 对象。

## 27. undefined 与 undeclared 的区别

已在作用域中声明但还没有赋值的变量，是 `undefined` 的。相反，还没有在作用域中声明过的变量，是 `undeclared` 的。

对于 `undeclared` 变量的引用，浏览器会报引用错误，如 `ReferenceError: b is not defined` 。但是可以使用 `typeof` 的安全防范机制来避免报错，因为对于 `undeclared`（或者 `not defined` ）变量，`typeof` 会返回 "undefined"。

## 28. null 和 undefined 的区别

首先 `Undefined` 和 `Null` 都是基本数据类型，这两个基本数据类型分别都只有一个值，就是 `undefined` 和 `null`。

`undefined` 代表的含义是未定义， `null` 代表的含义是空对象。一般变量声明了但还没有定义的时候会返回 `undefined`，`null` 主要用于赋值给一些可能会返回对象的变量，作为初始化。

`undefined` 在 js 中不是一个保留字，这意味着可以使用 `undefined` 来作为一个变量名，这样的做法是非常危险的，它 会影响对 `undefined` 值的判断。但是可以通过一些方法获得安全的 `undefined` 值，比如说 `void 0`。

当对两种类型使用 `typeof` 进行判断的时候，`Null` 类型化会返回 “object”，这是一个历史遗留的问题。当使用双等 号对两种类型的值进行比较时会返回 `true`，使用三个等号时会返回 `false`。

## 29. {} 和 [] 的 valueOf 和 toString 的结果是什么？

`{}` 的 **valueOf** 结果为 `{}` ，**toString** 的结果为 `"[object Object]"`

`[]` 的 **valueOf** 结果为 `[]` ，**toString** 的结果为 `""`

## 30. Javascript 的作用域和作用域链

**作用域**： 作用域是定义变量的区域，它有一套访问变量的规则，这套规则来管理浏览器引擎如何在当前作用域以及嵌套的作用域中根据变量（标识符）进行变量查找。

**作用域链**： 作用域链的作用是保证对执行环境有权访问的所有变量和函数的有序访问，通过作用域链，可以访问到外层环境的变量和 函数。

作用域链的本质上是一个指向变量对象的指针列表。变量对象是一个包含了执行环境中所有变量和函数的对象。作用域链的前 端始终都是当前执行上下文的变量对象。全局执行上下文的变量对象（也就是全局对象）始终是作用域链的最后一个对象。

当查找一个变量时，如果当前执行环境中没有找到，可以沿着作用域链向后查找。

作用域链的创建过程跟执行上下文的建立有关....

## 31. Javascript 创建对象的几种方式

一般使用字面量的形式直接创建对象，但是这种创建方式对于创建大量相似对象的时候，会产生大量的重复代码。但 js和一般的面向对象的语言不同，在 ES6 之前它没有类的概念。但是可以使用函数来进行模拟，从而产生出可复用的对象创建方式，我了解到的方式有这么几种：

### （1）第一种是工厂模式

> **概述:** 工厂模式的主要工作原理是用函数来封装创建对象的细节，从而通过调用函数来达到复用的目的。
>
> **缺点:** 但是它有一个很大的问题就是创建出来的对象无法和某个类型联系起来，它只是简单的封装了复用代码，而没有建立起对象和类型间的关系。

### （2）第二种是构造函数模式

> **概述:** js 中每一个函数都可以作为构造函数，只要一个函数是通过 `new` 来调用的，那么就可以把它称为构造函数。
>
> **流程:**
>
> 1. 执行构造函数首先会创建一个对象，
>
> 2. 然后将对象的原型指向构造函数的 prototype 属性，
>
> 3. 然后将执行上下文中的 this 指向这个对象，
>
> 4. 最后再执行整个函数，如果返回值不是对象，则返回新建的对象。
>
> **关键:** 因为 `this` 的值指向了新建的对象，因此可以使用 `this` 给对象赋值。
>
> **优点:** 构造函数模式相对于工厂模式的优点是，所创建的对象和构造函数建立起了联系，因此可以通过原型来识别对象的类型。
>
> **缺点:** 但是构造函数存在一个缺点就是，造成了不必要的函数对象的创建，因为在 js 中函数也是一个对象，因此如果对象属性中如果包含函数的话，那么每次都会新建一个函数对象，浪费了不必要的内存空间，因为函数是所有的实例都可以通用的。

### （3）第三种模式是原型模式

> **概述:** 因为每一个函数都有一个 `prototype` 属性，这个属性是一个对象，它包含了通过构造函数创建的所有实例都能共享的属性和方法。因此可以使用原型对象来添加公用属性和方法，从而实现代码的复用。这种方式相对于构造函数模式来说，解决了函数对象的复用问题。
>
> **缺点:** 但是这种模式也存在一些问题，一个是没有办法通过传入参数来初始化值，另一个是如果存在一个引用类型如 Array 这样的值，那么所有的实例将共享一个对象，一个实例对引用类型值的改变会影响所有的实例。
>
> **个人总结:** 成也单例，败也单例

### （4）第四种模式是组合使用构造函数模式和原型模式

> **概述:** 因为构造函数模式和原型模式分开使用都存在一些问题，因此可以组合使用这两种模式，通过构造函数来初始化对象的属性，通过原型对象来实现函数方法的复用。这种方法很好的解决了两种模式单独使用时的缺点.
>
> **缺点:** 但是有一点不足的就是，因为使用了两种不同的模式，所以对于代码的封装性不够好。

### （5）第五种模式是动态原型模式

> **概述:** 这一种模式将原型方法赋值的创建过程移动到了构造函数的内部，通过对属性是否存在的判断，可以实现仅在第一次调用函数时对原型对象赋值一次的效果。
>
> **优点:** 这一种方式很好地对上面的混合模式进行了封装。

### （6）第六种模式是寄生构造函数模式

> **概述:** 这一种模式和工厂模式的实现基本相同，我对这个模式的理解是，它主要是基于一个已有的类型，在实例化时对实例化的对象进行扩展。这样既不用修改原来的构造函数，也达到了扩展对象的目的。
>
> **优点:** 它的一个缺点和工厂模式一样，无法实现对象的识别。

## 32. JavaScript 继承的几种实现方式

我了解的 js 中实现继承的几种方式有：

### （1）第一种是以原型链的方式来实现继承

> **缺点:** 在包含有引用类型的数据时，会被所有的实例对象所共享，容易造成修改的混乱。还有就是在创建子类型的时候不能向超类型传递参数。

### （2）第二种方式是使用借用构造函数的方式

> **概述:** 这种方式是通过在子类型的函数中调用超类型的构造函数来实现的，这一种方法解决了不能向超类型传递参数的缺点
>
> **缺点:** 但是它存在的一个问题就是无法实现函数方法的复用，并且超类型原型定义的方法子类型也没有办法访问到。

### （3）第三种方式是组合继承

> **概述:** 组合继承是将原型链和借用构造函数组合起来使用的一种方式。通过借用构造函数的方式来实现类型的属性的继承，通过将子类型的原型设置为超类型的实例来实现方法的继承。
>
> **缺点:** 这种方式解决了上面的两种模式单独使用时的问题，但是由于是以超类型的实例来作为子类型的原型，所以调用了两次超类的构造函数，造成了子类型的原型中多了很多不必要的属性。

### （4）第四种方式是原型式继承

> **概述:** 原型式继承的主要思路就是基于已有的对象来创建新的对象，实现的原理是，向函数中传入一个对象，然后返回一个以这个对象为原型的对象。
>
> **缺点:** 这种继承的思路主要不是为了实现创造一种新的类型，只是对某个对象实现一种简单继承，`ES5` 中定义的 `Object.create()` 方法就是原型式继承的实现。缺点与原型链方式相同。

### （5）第五种方式是寄生式继承

> **概述:** 寄生式继承的思路是创建一个用于封装继承过程的函数，通过传入一个对象，然后复制一个对象的副本，然后对象进行扩展，最后返回这个对象。这个扩展的过程就可以理解是一种继承。
>
> **缺点:** 这种继承的优点就是对一个简单对象实现继承，如果这个对象不是的自定义类型时。缺点是没有办法实现函数的复用。

### （6）第六种方式是寄生式组合继承

> **概述:** 寄生式组合继承的方式是使用超类型的原型的副本来作为子类型的原型，这样就避免了创建不必要的属性。
>
> **缺点:**  组合继承的缺点就是使用超类型的实例做为子类型的原型，导致添加了不必要的原型属性。

## 33. 寄生式组合继承的实现

```js
function Person(name) {
  this.name = name;
}

Person.prototype.sayName = function() {
  console.log("My name is " + this.name + ".");
};

function Student(name, grade) {
  Person.call(this, name);
  this.grade = grade;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.sayMyGrade = function() {
  console.log("My grade is " + this.grade + ".");
  
};
```

## 34. 谈谈你对this、call、apply和bind的理解

1. 在浏览器里，在全局范围内this 指向window对象；

2. 在函数中，this永远指向最后调用他的那个对象；

3. 构造函数中，this指向new出来的那个新的对象；

4. call、apply、bind中的this被强绑定在指定的那个对象上；

5. 箭头函数中this比较特殊,箭头函数this为父作用域的this，不是调用时的this.要知道前四种方式,都是调用时确定,也就是动态的,而箭头函数的this指向是静态的,声明的时候就确定了下来；

6. apply、call、bind都是js给函数内置的一些API，调用他们可以为函数指定this的执行,同时也可以传参。

<img :src="$withBase('/assets/js/v2-6228b3f5efabc66806f0937fbd1ab9d4_720w.jpg')" alt="demo" />

## 35. JavaScript 原型，原型链

在 js 中是使用构造函数来新建一个对象的，每一个构造函数的内部都有一个 `prototype` 属性值，这个属性值是一个对 象，这个对象包含了可以由该构造函数的所有实例共享的属性和方法。当使用构造函数新建一个对象后，在这个对象的内部 将包含一个指针，这个指针指向构造函数的 `prototype` 属性对应的值，在 `ES5` 中这个指针被称为对象的原型。一般来说 是不应该能够获取到这个值的，但是现在浏览器中都实现了 `proto` 属性来让访问这个属性，但是最好不要使用这 个属性，因为它不是规范中规定的。`ES5` 中新增了一个 `Object.getPrototypeOf()` 方法，可以通过这个方法来获取对 象的原型。

当访问一个对象的属性时，如果这个对象内部不存在这个属性，那么它就会去它的原型对象里找这个属性，这个原型对象又 会有自己的原型，于是就这样一直找下去，也就是原型链的概念。原型链的尽头一般来说都是 `Object.prototype` 所以这就 是新建的对象为什么能够使用 `toString()` 等方法的原因。

`JavaScript` 对象是通过引用来传递的，创建的每个新对象实体中并没有一份属于自己的原型副本。当修改原型时，与 之相关的对象也会继承这一改变。

## 36. js 获取原型的方法

* p.proto

* p.constructor.prototype

* Object.getPrototypeOf(p)

## 37. 什么是闭包，为什么要用它

> **闭包是指有权访问另一个函数作用域内变量的函数**，创建闭包的最常见的方式就是在一个函数内创建另一个函数，创建的函数可以 访问到当前函数的局部变量。

闭包有两个常用的用途。

* 闭包的第一个用途是使在函数外部能够访问到函数内部的变量。

> 通过使用闭包，可以通过在外部调用闭包函数，从而在外部访问到函数内部的变量，可以使用这种方法来创建私有变量。

* 函数的另一个用途是使已经运行结束的函数上下文中的变量对象继续留在内存中，因为闭包函数保留了这个变量对象的引用，所以这个变量对象不会被回收。

```js
function a(){
    var n = 0;
    function add(){
       n++;
       console.log(n);
    }
    return add;
}
var a1 = a(); //注意，函数名只是一个标识（指向函数的指针），而（）才是执行函数；
a1();    //1
a1();    //2  第二次调用n变量还在内存中
```

其实闭包的本质就是作用域链的一个特殊的应用，只要了解了作用域链的创建过程，就能够理解闭包的实现原理。

## 38. 什么是 DOM 和 BOM

**DOM** 指的是文档对象模型，它指的是把文档当做一个对象来对待，这个对象主要定义了处理网页内容的方法和接口。

**BOM** 指的是浏览器对象模型，它指的是把浏览器当做一个对象来对待，这个对象主要定义了与浏览器进行交互的法和接口。`BOM` 的核心是 `window`，而 `window` 对象具有双重角色，它既是通过 `js` 访问浏览器窗口的一个接口，又是一个 `Global（全局）` 对象。这意味着在网页中定义的任何对象，变量和函数，都作为全局对象的一个属性或者方法存在。`window` 对象含有 `locati on 对象`、`navigator 对象`、`screen 对象`等子对象，并且 `DOM` 的最根本的对象 `document` 对象也是 `BOM` 的 `window` 对象的子对象。

## 39. 三种事件模型是什么

> **事件** 是用户操作网页时发生的交互动作或者网页本身的一些操作，现代浏览器一共有三种事件模型。

### 1. DOM0级模型

> 这种模型不会传播，所以没有事件流的概念，但是现在有的浏览器支持以冒泡的方式实现，它可以在网页中直接定义监听函数，也可以通过 js属性来指定监听函数。这种方式是所有浏览器都兼容的。

### 2. IE 事件模型

> 在该事件模型中，一次事件共有两个过程，事件处理阶段，和事件冒泡阶段。事件处理阶段会首先执行目标元素绑定的监听事件。然后是事件冒泡阶段，冒泡指的是事件从目标元素冒泡到 `document`，依次检查经过的节点是否绑定了事件监听函数，如果有则执行。这种模型通过 `attachEvent` 来添加监听函数，可以添加多个监听函数，会按顺序依次执行。

### 3. DOM2 级事件模型

> 在该事件模型中，一次事件共有三个过程，
>
> 第一个过程是事件捕获阶段。捕获指的是事件从 `document` 一直向下传播到目标元素，依次检查经过的节点是否绑定了事件监听函数，如果有则执行。
>
> 后面两个阶段和 IE 事件模型的两个阶段相同。这种事件模型，事件绑定的函数是 `addEventListener`，其中第三个参数可以指定事件是否在捕获阶段执行。

## 40. 事件委托是什么

> **事件委托** 本质上是利用了浏览器事件冒泡的机制。因为事件在冒泡过程中会上传到父节点，并且父节点可以通过事件对象获取到 目标节点，因此可以把子节点的监听函数定义在父节点上，由父节点的监听函数统一处理多个子元素的事件，这种方式称为事件代理。
>
> 使用事件代理可以不必要为每一个子元素都绑定一个监听事件，这样减少了内存上的消耗。并且使用事件代理还可以实现事件的动态绑定，比如说新增了一个子节点，并不需要单独地为它添加一个监听事件，它所发生的事件会交给父元素中的监听函数来处理。

## 41. 什么是事件传播

> 当**事件**发生在`DOM`元素上时，该事件并不完全发生在那个元素上。在“当事件发生在`DOM`元素上时，该事件并不完全发生在那个元素上。在“冒泡阶段”中，事件冒泡或向上传播至父级，祖父母，祖父母或父级，直到到达`window`为止；而在“捕获阶段”中，事件从`window`开始向下触发元素 事件或`event.target`。
>
> 事件传播有三个阶段中，事件冒泡或向上传播至父级，祖父母，祖父母或父级，直到到达`window`为止；而在“**捕获阶段**”中，事件从`window`开始向下触发`元素` `事件`或`event.target`。

事件传播有三个阶段：

1. 捕获阶段–事件从 `window` 开始，然后向下到每个元素，直到到达目标元素。

2. 目标阶段–事件已达到目标元素。

3. 冒泡阶段–事件从目标元素冒泡，然后上升到每个元素，直到到达 `window`。

## 42. 什么是事件捕获

当事件发生在 `DOM` 元素上时，该事件并不完全发生在那个元素上。在捕获阶段，事件从`window`开始，一直到触发事件的元素。`window----> document----> html----> div ---->目标元素`

假设有如下的 HTML 结构：

```html
<div class="grandparent">
  <div class="parent">
    <div class="child">1</div>
  </div>
</div>
```

```js
function addEvent(el, event, callback, isCapture = false) {
  if (!el || !event || !callback || typeof callback !== 'function') return;
  if (typeof el === 'string') {
    el = document.querySelector(el);
  };
  el.addEventListener(event, callback, isCapture);
}

addEvent(document, 'DOMContentLoaded', () => {
  const child = document.querySelector('.child');
  const parent = document.querySelector('.parent');
  const grandparent = document.querySelector('.grandparent');

  addEvent(child, 'click', function (e) {
    console.log('child');
  });

  addEvent(parent, 'click', function (e) {
    console.log('parent');
  });

  addEvent(grandparent, 'click', function (e) {
    console.log('grandparent');
  });

  addEvent(document, 'click', function (e) {
    console.log('document');
  });

  addEvent('html', 'click', function (e) {
    console.log('html');
  })

  addEvent(window, 'click', function (e) {
    console.log('window');
  })

});
```

> 代码描述
>
> `addEventListener`方法具有第三个可选参数`useCapture`，其默认值为`false`，事件将在冒泡阶段中发生，如果为`true`，则事件将在捕获阶段中发生。如果单击`child`元素，它将分别在控制台上打印`window`，`document`，`html`，`grandparent`和`parent`，这就是事件捕获。

## 43. 什么是事件冒泡

事件冒泡刚好与事件捕获相反，`当前元素---->div ----> html---->document ---->window`。当事件发生在DOM元素上时，该事件并不完全发生在那个元素上。在冒泡阶段，事件冒泡，或者事件发生在它的父代，祖父母，祖父母的父代，直到到达window为止。

假设有如下的 HTML 结构：

```html
<div class="grandparent">
  <div class="parent">
    <div class="child">1</div>
  </div>
</div>
```

对应的JS代码：

```js
function addEvent(el, event, callback, isCapture = false) {
  if (!el || !event || !callback || typeof callback !== 'function') return;
  if (typeof el === 'string') {
    el = document.querySelector(el);
  };
  el.addEventListener(event, callback, isCapture);
}

addEvent(document, 'DOMContentLoaded', () => {
  const child = document.querySelector('.child');
  const parent = document.querySelector('.parent');
  const grandparent = document.querySelector('.grandparent');

  addEvent(child, 'click', function (e) {
    console.log('child');
  });

  addEvent(parent, 'click', function (e) {
    console.log('parent');
  });

  addEvent(grandparent, 'click', function (e) {
    console.log('grandparent');
  });

  addEvent(document, 'click', function (e) {
    console.log('document');
  });

  addEvent('html', 'click', function (e) {
    console.log('html');
  })

  addEvent(window, 'click', function (e) {
    console.log('window');
  })

});
```

> 代码描述
>
> `addEventListener`方法具有第三个可选参数`useCapture`，其默认值为`false`，事件将在冒泡阶段中发生，如果为`true`，则事件将在捕获阶段中发生。如果单击`child`元素，它将分别在控制台上打印`child`，`parent`，`grandparent`，`html`，`document`和`window`，这就是事件冒泡。

## 44. DOM 操作——怎样添加、移除、移动、复制、创建和查找节点

### （1）创建新节点

```js
createDocumentFragment()    //创建一个DOM片段
createElement()   //创建一个具体的元素
createTextNode()   //创建一个文本节点
```

### （2）添加、移除、替换、插入

```js
appendChild(node)
removeChild(node)
replaceChild(new,old)
insertBefore(new,old)
```

### （3）查找

```js
getElementById();
getElementsByName();
getElementsByTagName();
getElementsByClassName();
querySelector();
querySelectorAll();
```

### （4）属性操作

```js
getAttribute(key);
setAttribute(key, value);
hasAttribute(key);
removeAttribute(key);
```

## 45. js数组和对象有哪些原生方法

<img :src="$withBase('/assets/js/v2-7d5cc94dbef19976b4f766b925ed1a9a_720w.jpg')" alt="demo" />

<img :src="$withBase('/assets/js/v2-033b62cea47fe9d4176e3baf9419b916_720w.jpg')" alt="demo" />

## 46. 常用的正则表达式

```js
//（1）匹配 16 进制颜色值
var color = /#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/g;

//（2）匹配日期，如 yyyy-mm-dd 格式
var date = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;

//（3）匹配 qq 号
var qq = /^[1-9][0-9]{4,10}$/g;

//（4）手机号码正则
var phone = /^1[34578]\d{9}$/g;

//（5）用户名正则
var username = /^[a-zA-Z\$][a-zA-Z0-9_\$]{4,16}$/;

//（6）Email正则
var email = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

//（7）身份证号（18位）正则
var cP = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;

//（8）URL正则
var urlP= /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;

// (9)ipv4地址正则
var ipP = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

// (10)//车牌号正则
var cPattern = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/;

// (11)强密码(必须包含大小写字母和数字的组合，不能使用特殊字符，长度在8-10之间)：
var pwd = /^(?=.\d)(?=.[a-z])(?=.[A-Z]).{8,10}$/
```

## 47. Ajax 是什么? 如何创建一个 Ajax

我对 `ajax` 的理解是，它是一种**异步通信**的方法，通过直接由 `js` 脚本向服务器发起 `http` 通信，然后根据服务器返回的数据，更新网页的相应部分，而不用刷新整个页面的一种方法。

### 创建步骤：

<img :src="$withBase('/assets/js/v2-9f92809fbd893ff41055898079018d3d_720w.jpg')" alt="demo" />

### 面试手写（原生）：

```js
//1：创建Ajax对象
var xhr = window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject('Microsoft.XMLHTTP');// 兼容IE6及以下版本
//2：配置 Ajax请求地址
xhr.open('get','index.xml',true);
//3：发送请求
xhr.send(null); // 严谨写法
//4:监听请求，接受响应
xhr.onreadysatechange=function(){
     if(xhr.readySates==4&&xhr.status==200 || xhr.status==304 )
          console.log(xhr.responsetXML)
}
```

### jQuery写法

```js
$.ajax({
    type:'post',
    url:'',
    async:ture,//async 异步  sync  同步
    data:data,//针对post请求
    dataType:'jsonp',
    success:function (msg) {

    },
    error:function (error) {

    }
})
```

### promise 封装实现：

```js
// promise 封装实现：

function getJSON(url) {
  // 创建一个 promise 对象
  let promise = new Promise(function(resolve, reject) {
    let xhr = new XMLHttpRequest();

    // 新建一个 http 请求
    xhr.open("GET", url, true);

    // 设置状态的监听函数
    xhr.onreadystatechange = function() {
      if (this.readyState !== 4) return;

      // 当请求成功或失败时，改变 promise 的状态
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };

    // 设置错误监听函数
    xhr.onerror = function() {
      reject(new Error(this.statusText));
    };

    // 设置响应的数据类型
    xhr.responseType = "json";

    // 设置请求头信息
    xhr.setRequestHeader("Accept", "application/json");

    // 发送 http 请求
    xhr.send(null);
  });

  return promise;
}
```

## 48. js 延迟加载的方式有哪些

js 的`加载`、`解析`和`执行`会阻塞页面的渲染过程，因此希望 js 脚本能够尽可能的延迟加载，提高页面的渲染速度。

我了解到的几种方式是：


1. 将 `js` 脚本放在文档的底部，来使 `js` 脚本尽可能的在最后来加载执行。

2. 给 `js` 脚本添加 `defer`属性，这个属性会让脚本的加载与文档的解析同步解析，然后在文档解析完成后再执行这个脚本文件，这样的话就能使页面的渲染不被阻塞。多个设置了 `defer` 属性的脚本按规范来说最后是顺序执行的，但是在一些浏览器中可能不是这样。

3. 给 `js` 脚本添加 `async`属性，这个属性会使脚本异步加载，不会阻塞页面的解析过程，但是当脚本加载完成后立即执行 `js`脚本，这个时候如果文档没有解析完成的话同样会阻塞。多个 `async` 属性的脚本的执行顺序是不可预测的，一般不会按照代码的顺序依次执行。

4. 动态创建 `DOM` 标签的方式，可以对文档的加载事件进行监听，当文档加载完成后再动态的创建 `script` 标签来引入 `js` 脚本。

## 49. 谈谈你对模块化开发的理解

我对模块的理解是，一个模块是实现一个特定功能的一组方法。在最开始的时候，js 只实现一些简单的功能，所以并没有模块的概念 ，但随着程序越来越复杂，代码的模块化开发变得越来越重要。

由于函数具有独立作用域的特点，最原始的写法是使用函数来作为模块，几个函数作为一个模块，但是这种方式容易造成全局变量的污染，并且模块间没有联系。

后面提出了对象写法，通过将函数作为一个对象的方法来实现，这样解决了直接使用函数作为模块的一些缺点，但是这种办法会暴露所 有的所有的模块成员，外部代码可以修改内部属性的值。

现在最常用的是立即执行函数的写法，通过利用闭包来实现模块私有作用域的建立，同时不会对全局作用域造成污染。

## 50. js 的几种模块规范

### 第一种是 CommonJS 方案

> node
>
> 它通过 `require` 来引入模块，通过 `module.exports` 定义模块的输出接口。这种模块加载方案是服务器端的解决方案，它是以同步的方式来引入模块的，因为在服务端文件都存储在本地磁盘，所以读取非常快，所以以同步的方式加载没有问题。但如果是在浏览器端，由于模块的加载是使用网络请求，因此使用异步加载的方式更加合适。

### 第二种是 AMD 方案

> 这种方案采用异步加载的方式来加载模块，模块的加载不影响后面语句的执行，所有依赖这个模块的语句都定义在一个回调函数里，等到加载完成后再执行回调函数。`require.js` 实现了 `AMD` 规范。

### 第三种是 CMD 方案

> 这种方案和 `AMD` 方案都是为了解决异步模块加载的问题，`sea.js` 实现了 `CMD` 规范。它和`require.js`的区别在于模块定义时对依赖的处理不同和对依赖模块的执行时机的处理不同。

### 第四种方案是 ES6 提出的方案

> 使用 `import` 和 `export` 的形式来导入导出模块。这种方案和上面三种方案都不同。

## 51. AMD 和 CMD 规范的区别

它们之间的主要区别有两个方面。

1. 第一个方面是在模块定义时对依赖的处理不同。`AMD`推崇依赖前置，在定义模块的时候就要声明其依赖的模块。而 `CMD` 推崇就近依赖，只有在用到某个模块的时候再去 `require`。

2. 第二个方面是对依赖模块的执行时机处理不同。首先 `AMD` 和 `CMD` 对于模块的加载方式都是异步加载，不过它们的区别在于 模块的执行时机，`AMD` 在依赖模块加载完成后就直接执行依赖模块，依赖模块的执行顺序和书写的顺序不一定一致。而 `CMD` 在依赖模块加载完成后并不执行，只是下载而已，等到所有的依赖模块都加载好后，进入回调函数逻辑，遇到 `require` 语句 的时候才执行对应的模块，这样模块的执行顺序就和书写的顺序保持一致了。

```js
// CMD
define(function(require, exports, module) {
  var a = require("./a");
  a.doSomething();
  // 此处略去 100 行
  var b = require("./b"); // 依赖可以就近书写
  b.doSomething();
  // ...
});

// AMD 默认推荐
define(["./a", "./b"], function(a, b) {
  // 依赖必须一开始就写好
  a.doSomething();
  // 此处略去 100 行
  b.doSomething();
  // ...
});
```

## 52. ES6 模块与 CommonJS 模块、AMD、CMD 的差异

1. `CommonJS` 模块输出的是一个值的拷贝，`ES6` 模块输出的是值的引用。`CommonJS` 模块输出的是值的，也就是说，一旦输出一个值，模块内部的变化就影响不到这个值。`ES6` 模块的运行机制与 `CommonJS` 不一样。`JS` 引擎对脚本静态分析的时候，遇到模块加载命令 `import`，就会生成一个只读引用。等到脚本真正执行时，再根据这个只读引用，到被加载的那个模块里面去取值。

2. `CommonJS` 模块是运行时加载，`ES6` 模块是编译时输出接口。`CommonJS` 模块就是对象，即在输入时是先加载整个模块，生成一个对象，然后再从这个对象上面读取方法，这种加载称为“运行时加载”。而 `ES6` 模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成。

## 53. requireJS的核心原理是什么

`require.js` 的核心原理是通过动态创建 `script` 脚本来异步引入模块，然后对每个脚本的 `load` 事件进行监听，如果每个脚本都加载完成了，再调用回调函数。

## 54. 谈谈JS的运行机制

### 1. js单线程

JavaScript语言的一大特点就是单线程，即同一时间只能做一件事情。

> `JavaScrip`t的单线程，与它的用途有关。作为浏览器脚本语言，JavaScript的主要用途是与`用户互动`，以及`操作DOM`。这决定了它只能是单线程，`否则会带来很复杂的同步问题`。比如，假定JavaScript同时有两个线程，一个线程在某个DOM节点上添加内容，另一个线程删除了这个节点，这时浏览器应该以哪个线程为准？ 所以，为了避免复杂性，从一诞生，JavaScript就是单线程，这已经成了这门语言的核心特征，将来也不会改变。

### 2. js事件循环

js代码执行过程中会有很多任务，这些任务总的分成两类：

* 同步任务

* 异步任务

当打开网站时，网页的渲染过程就是一大堆同步任务，比如页面骨架和页面元素的渲染。而像加载图片音乐之类占用资源大耗时久的任务，就是异步任务。，用导图来说明：

<img :src="$withBase('/assets/js/v2-d8d012ef2891180b221f279d88735ac8_720w.jpg')" alt="demo" />

解释一下这张图：

* 同步和异步任务分别进入不同的执行"场所"，同步的进入主线程，异步的进入`Event Table`并注册函数。

* 当指定的事情完成时，`Event Table`会将这个函数移入`Event Queue`。

* 主线程内的任务执行完毕为空，会去`Event Queue`读取对应的函数，进入主线程执行。

* 上述过程会不断重复，也就是常说的`Event Loop`(事件循环)。

那主线程执行栈何时为空呢？js引擎存在`monitoring process`进程，会持续不断的检查主线程执行栈是否为空，一旦为空，就会去`Event Queue`那里检查是否有等待被调用的函数。

以上就是js运行的整体流程

需要注意的是除了同步任务和异步任务，任务还可以更加细分为`macrotask(宏任务)`和`microtask(微任务)`，js引擎会优先执行微任务

> 微任务包括了 `promise` 的回调、`node` 中的 `process.nextTick` 、对 `Dom` 变化监听的 `MutationObserver`。
>
> 宏任务包括了 `script` 脚本的执行、`setTimeout` ，`setInterval` ，`setImmediate` 一类的定时事件，还有如 `I/O` 操作、`UI` 渲染等。

面试中该如何回答呢？ 下面是我个人推荐的回答：

1. 首先js 是单线程运行的，在代码执行的时候，通过将不同函数的执行上下文压入执行栈中来保证代码的有序执行。

2. 在执行同步代码的时候，如果遇到了异步事件，js 引擎并不会一直等待其返回结果，而是会将这个事件挂起，继续执行执行栈中的其他任务

3. 当同步事件执行完毕后，再将异步事件对应的回调加入到与当前执行栈中不同的另一个任务队列中等待执行。

4. 任务队列可以分为宏任务对列和微任务对列，当当前执行栈中的事件执行完毕后，js 引擎首先会判断微任务对列中是否有任务可以执行，如果有就将微任务队首的事件压入栈中执行。

5. 当微任务对列中的任务都执行完成后再去判断宏任务对列中的任务。

最后可以用下面一道题检测一下收获：

```js
setTimeout(function() {
  console.log(1)
}, 0);
new Promise(function(resolve, reject) {
  console.log(2);
  resolve()
}).then(function() {
  console.log(3)
});
process.nextTick(function () {
  console.log(4)
})
console.log(5)
```

> 代码描述:
>
> 第一轮：主线程开始执行
> 1. 遇到`setTimeout`，将`setTimeout`的回调函数丢到宏任务队列中
> 2. 在往下执行`new Promise`立即执行，输出2，`then`的回调函数丢到微任务队列中，再继续执行
> 3. 遇到`process.nextTick`，同样将回调函数扔到为任务队列，再继续执行，输出5
> 4. 当所有同步任务执行完成后看有没有可以执行的微任务，发现有`then`函数和`nextTick`两个微任务，先执行哪个呢？
>   4.1. `process.nextTick`指定的异步任务总是发生在所有异步任务之前，因此先执行`process.nextTick`输出4
>   4.2. 然后执行`then`函数输出3，第一轮执行结束。 
> 第二轮：从宏任务队列开始，发现`setTimeout`回调，输出1执行完毕，因此结果是25431

## 55. arguments 的对象是什么

`arguments`对象是函数中传递的参数值的集合。它是一个类似数组的对象，因为它有一个`length`属性，可以使用数组索引表示法`arguments[1]`来访问单个值，但它没有数组中的内置方法，如：`forEach`、`reduce`、`filter`和`map`。

可以使用`Array.prototype.slice`将`arguments`对象转换成一个数组。

```js
function one() {
  return Array.prototype.slice.call(arguments);
}
```

注意:箭头函数中没有`arguments`对象。

```js
function one() {
  return arguments;
}
const two = function () {
  return arguments;
}
const three = function three() {
  return arguments;
}

const four = () => arguments;

four(); // Throws an error  - arguments is not defined
```

当调用函数`four`时，它会抛出一个`ReferenceError: arguments is not defined error`。使用`rest`语法，可以解决这个问题。

```js
const four = (...args) => args;
```

这会自动将所有参数值放入数组中。

## 56. 为什么在调用这个函数时，代码中的b会变成一个全局变量

```js
function myFunc() {
  let a = b = 0;
}

myFunc();
```

> 原因是赋值运算符是从右到左的求值的。这意味着当多个赋值运算符出现在一个表达式中时，它们是从右向左求值的。所以上面代码变成了这样：

```js
function myFunc() {
  let a = (b = 0);
}

myFunc();
```

首先，表达式`b = 0`求值，在本例中b没有声明。因此，`JS`引擎在这个函数外创建了一个全局变量`b`，之后表达式`b = 0`的返回值为`0`，并赋给新的局部变量`a`。

可以通过在赋值之前先声明变量来解决这个问题。

```js
function myFunc() {
  let a,b;
  a = b = 0;
}
myFunc();
```

## 57. 简单介绍一下 V8 引擎的垃圾回收机制

v8 的垃圾回收机制基于分代回收机制，这个机制又基于世代假说，这个假说有两个特点，一是新生的对象容易早死，另一个是不死的对象会活得更久。基于这个假说，v8 引擎将内存分为了新生代和老生代。

新创建的对象或者只经历过一次的垃圾回收的对象被称为新生代。经历过多次垃圾回收的对象被称为老生代。

新生代被分为 `From` 和 `To` 两个空间，`To` 一般是闲置的。当 `From` 空间满了的时候会执行 `Scavenge` 算法进行垃圾回收。当执行垃圾回收算法的时候应用逻辑将会停止，等垃圾回收结束后再继续执行。这个算法分为三步：

1. 首先检查 `From` 空间的存活对象，如果对象存活则判断对象是否满足晋升到老生代的条件，如果满足条件则晋升到老生代。如果不满足条件则移动 `To` 空间。

2. 如果对象不存活，则释放对象的空间。

3. 最后将 `From` 空间和 `To` 空间角色进行交换。

新生代对象晋升到老生代有两个条件：

1. 第一个是判断是对象否已经经过一次 `Scavenge` 回收。若经历过，则将对象从 `From` 空间复制到老生代中；若没有经历，则复制到 `To` 空间。

2. 第二个是 `To` 空间的内存使用占比是否超过限制。当对象从 `From` 空间复制到 `To` 空间时，若 `To` 空间使用超过 25%，则对象直接晋升到老生代中。设置 25% 的原因主要是因为算法结束后，两个空间结束后会交换位置，如果 `To` 空间的内存太小，会影响后续的内存分配。

老生代采用了标记清除法和标记压缩法。标记清除法首先会对内存中存活的对象进行标记，标记结束后清除掉那些没有标记的对象。由于标记清除后会造成很多的内存碎片，不便于后面的内存分配。所以了解决内存碎片的问题引入了标记压缩法。

由于在进行垃圾回收的时候会暂停应用的逻辑，对于新生代方法由于内存小，每次停顿的时间不会太长，但对于老生代来说每次垃圾回收的时间长，停顿会造成很大的影响。 为了解决这个问题 `V8` 引入了增量标记的方法，将一次停顿进行的过程分为了多步，每次执行完一小步就让运行逻辑执行一会，就这样交替运行。

## 58.  哪些操作会造成内存泄漏

1. 意外的全局变量

> **思路:**
>
> 由于使用未声明的变量，而意外的创建了一个全局变量，而使这个变量一直留在内存中无法被回收。

2. 被遗忘的计时器或回调函数

> **思路:**
>
> 设置了`setInterval`定时器，而忘记取消它，如果循环函数有对外部变量的引用的话，那么这个变量会被一直留在内存中，而无法被回收。

3. 脱离 DOM 的引用

> **思路:**
>
> 获取一个`DOM`元素的引用，而后面这个元素被删除，由于一直保留了对这个元素的引用，所以它也无法被回收。

4. 闭包

> **思路:**
>
> 是不合理的使用闭包，从而导致某些变量一直被留在内存当中。

## 59. ECMAScript 是什么

`ECMAScript` 是编写脚本语言的标准，这意味着`JavaScript`遵循`ECMAScript`标准中的规范变化，因为它是`JavaScript`的蓝图。

`ECMAScript` 和 `Javascript`，本质上都跟一门语言有关，一个是语言本身的名字，一个是语言的约束条件 只不过发明`JavaScript`的那个人（Netscape公司），把东西交给了ECMA（European Computer Manufacturers Association），这个人规定一下他的标准，因为当时有java语言了，又想强调这个东西是让ECMA这个人定的规则，所以就这样一个神奇的东西诞生了，这个东西的名称就叫做`ECMAScript`。

`javaScript` = `ECMAScript` + `DOM` + `BOM`（自认为是一种广义的`JavaScript`）

`ECMAScript`说什么`JavaScript`就得做什么！

`JavaScript`（狭义的`JavaScript`）做什么都要问问ECMAScript我能不能这样干！如果不能我就错了！能我就是对的！

## 60. ECMAScript 2015（ES6）有哪些新特性

* 块作用域

* 类

* 箭头函数

* 模板字符串

* 加强的对象字面

* 对象解构

* Promise

* 模块

* Symbol

* 代理（proxy）Set

* 函数默认参数

* rest 和展开

## 61. var,let和const的区别是什么

1. `var`声明的变量会挂载在`window`上，而`let`和`const`声明的变量不会：

```js
var a = 100;
console.log(a,window.a);    // 100 100

let b = 10;
console.log(b,window.b);    // 10 undefined

const c = 1;
console.log(c,window.c);    // 1 undefined
```

2. `var`声明变量存在变量提升，`let`和`const`不存在变量提升:

```js
console.log(a); // undefined  ===>  a已声明还没赋值，默认得到undefined值
var a = 100;

console.log(b); // 报错：b is not defined  ===> 找不到b这个变量
let b = 10;

console.log(c); // 报错：c is not defined  ===> 找不到c这个变量
const c = 10;
```

3. `let`和`const`声明形成块作用域

```js
if(1){
  var a = 100;
  let b = 10;
}

console.log(a); // 100
console.log(b)  // 报错：b is not defined  ===> 找不到b这个变量

-------------------------------------------------------------

if(1){
  var a = 100;
  const c = 1;
}
console.log(a); // 100
console.log(c)  // 报错：c is not defined  ===> 找不到c这个变量
```

4. 同一作用域下`let`和`const`不能声明同名变量，而`var`可以

```js
var a = 100;
console.log(a); // 100

var a = 10;
console.log(a); // 10
-------------------------------------
let a = 100;
let a = 10;

//  控制台报错：Identifier 'a' has already been declared  ===> 标识符a已经被声明了。
```

5. 暂存死区

```js
var a = 100;

if(1){
    a = 10;
    //在当前块作用域中存在a使用let/const声明的情况下，给a赋值10时，只会在当前作用域找变量a，
    // 而这时，还未到声明时候，所以控制台Error:a is not defined
    let a = 1;
}
```

6. const

```js
/*
 * &emsp;&emsp;1、一旦声明必须赋值,不能使用null占位。
 *
 * &emsp;&emsp;2、声明后不能再修改
 *
 * &emsp;&emsp;3、如果声明的是复合类型数据，可以修改其属性
 *
 * */

const a = 100; 

const list = [];
list[0] = 10;
console.log(list);&emsp;&emsp;// [10]

const obj = {a:100};
obj.name = 'apple';
obj.a = 10000;
console.log(obj);&emsp;&emsp;// {a:10000,name:'apple'}
```

## 62. 什么是箭头函数

1. 箭头函数表达式的语法比函数表达式更简洁，并且没有自己的`this`，`arguments`，`super`或`new.target`。箭头函数表达式更适用于那些本来需要匿名函数的地方，并且它不能用作构造函数。

```js
//ES5 Version
var getCurrentDate = function (){
  return new Date();
}

//ES6 Version
const getCurrentDate = () => new Date();
```

2. 在本例中，`ES5` 版本中有`function(){}`声明和`return`关键字，这两个关键字分别是创建函数和返回值所需要的。在箭头函数版本中，只需要`()`括号，不需要 `return` 语句，因为如果只有一个表达式或值需要返回，箭头函数就会有一个隐式的返回。

```js
//ES5 Version
function greet(name) {
  return 'Hello ' + name + '!';
}

//ES6 Version
const greet = (name) => `Hello ${name}`;
const greet2 = name => `Hello ${name}`;
```

3. 还可以在箭头函数中使用与函数表达式和函数声明相同的参数。如果在一个箭头函数中有一个参数，则可以省略括号。

```js
const getArgs = () => arguments

const getArgs2 = (...rest) => rest
```

4. 箭头函数不能访问`arguments`对象。所以调用第一个`getArgs`函数会抛出一个错误。相反，可以使用`rest`参数来获得在箭头函数中传递的所有参数。

```js
const data = {
  result: 0,
  nums: [1, 2, 3, 4, 5],
  computeResult() {
    // 这里的“this”指的是“data”对象
    const addAll = () => {
      return this.nums.reduce((total, cur) => total + cur, 0)
    };
    this.result = addAll();
  }
};
```

箭头函数没有自己的`this`值。它捕获词法作用域函数的`this`值，在此示例中，`addAll`函数将复制`computeResult` 方法中的`this`值，如果在全局作用域声明箭头函数，则`this`值为 `window` 对象。

## 63. 什么是类

1. `类(class)`是在 JS 中编写构造函数的新方法。它是使用构造函数的语法糖，在底层中使用仍然是原型和基于原型的继承。

```js
//ES5 Version
function Person(firstName, lastName, age, address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.address = address;
}

Person.self = function(){
    return this;
}

Person.prototype.toString = function(){
    return "[object Person]";
}

Person.prototype.getFullName = function (){
    return this.firstName + " " + this.lastName;
}  

//ES6 Version
class Person {
    constructor(firstName, lastName, age, address){
        this.lastName = lastName;
        this.firstName = firstName;
        this.age = age;
        this.address = address;
    }

    static self() {
        return this;
    }

    toString(){
        return "[object Person]";
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}
```

2. 重写方法并从另一个类继承。

```js
//ES5 Version
Employee.prototype = Object.create(Person.prototype);

function Employee(firstName, lastName, age, address, jobTitle, yearStarted) {
  Person.call(this, firstName, lastName, age, address);
  this.jobTitle = jobTitle;
  this.yearStarted = yearStarted;
}

Employee.prototype.describe = function () {
  return `I am ${this.getFullName()} and I have a position of ${this.jobTitle} and I started at ${this.yearStarted}`;
}

Employee.prototype.toString = function () {
  return "[object Employee]";
}

//ES6 Version
class Employee extends Person { //Inherits from "Person" class
  constructor(firstName, lastName, age, address, jobTitle, yearStarted) {
    super(firstName, lastName, age, address);
    this.jobTitle = jobTitle;
    this.yearStarted = yearStarted;
  }

  describe() {
    return `I am ${this.getFullName()} and I have a position of ${this.jobTitle} and I started at ${this.yearStarted}`;
  }

  toString() { // Overriding the "toString" method of "Person"
    return "[object Employee]";
  }
}
```

3. 所以要怎么知道它在内部使用原型？

```js
class Something {

}

function AnotherSomething(){

}
const as = new AnotherSomething();
const s = new Something();

console.log(typeof Something); // "function"
console.log(typeof AnotherSomething); // "function"
console.log(as.toString()); // "[object Object]"
console.log(as.toString()); // "[object Object]"
console.log(as.toString === Object.prototype.toString); // true
console.log(s.toString === Object.prototype.toString); // true
```

## 64. 什么是模板字符串

1. 模板字符串是在 `JS` 中创建字符串的一种新方法。可以通过使用反引号使模板字符串化。

```js
//ES5 Version
var greet = 'Hi I\'m Mark';

//ES6 Version
let greet = `Hi I'm Mark`;
```

2. 在 `ES5` 中需要使用一些转义字符来达到多行的效果，在模板字符串不需要这么麻烦：

```js
//ES5 Version
var lastWords = '\n'
  + '   I  \n'
  + '   Am  \n'
  + 'Iron Man \n';


//ES6 Version
let lastWords = `
    I
    Am
  Iron Man   
`;
```

3. 在`ES5`版本中，需要添加`\n`以在字符串中添加新行。在模板字符串中，不需要这样做。

```js
//ES5 Version
function greet(name) {
  return 'Hello ' + name + '!';
}


//ES6 Version
function greet(name) {
  return `Hello ${name} !`;
}
```

在 `ES5` 版本中，如果需要在字符串中添加表达式或值，则需要使用`+`运算符。在模板字符串`s`中，可以使用`${expr}`嵌入一个表达式，这使其比 `ES5` 版本更整洁。

## 65. 什么是对象解构

1. 对象析构是从对象或数组中获取或提取值的一种新的、更简洁的方法。假设有如下的对象：

```js
const employee = {
  firstName: "Marko",
  lastName: "Polo",
  position: "Software Developer",
  yearHired: 2017
};
```

2. 从对象获取属性，早期方法是创建一个与对象属性同名的变量。这种方法很麻烦，因为要为每个属性创建一个新变量。假设有一个大对象，它有很多属性和方法，用这种方法提取属性会很麻烦。

```js
var firstName = employee.firstName;
var lastName = employee.lastName;
var position = employee.position;
var yearHired = employee.yearHired;
```

3. 使用解构方式语法就变得简洁多了：

```js
{ firstName, lastName, position, yearHired } = employee;
```

4. 还可以为属性取别名：

```js
let { firstName: fName, lastName: lName, position, yearHired } = employee;
```

5. 当然如果属性值为 `undefined` 时，还可以指定默认值：

```js
let { firstName = "Mark", lastName: lName, position, yearHired } = employee;
```

## 66. 什么是Set对象，它是如何工作的

1. `Set` 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用。

2. 可以使用Set构造函数创建`Set`实例。

```js
const set1 = new Set();
const set2 = new Set(["a","b","c","d","d","e"]);
```

3. 可以使用`add`方法向Set实例中添加一个新值，因为`add`方法返回`Set`对象，所以可以以链式的方式再次使用`add`。如果一个值已经存在于`Set`对象中，那么它将不再被添加。

```js
set2.add("f");
set2.add("g").add("h").add("i").add("j").add("k").add("k");
// 后一个“k”不会被添加到set对象中，因为它已经存在了
```

4. 可以使用`has`方法检查`Set`实例中是否存在特定的值。

```js
set2.has("a") // true
set2.has("z") // true
```

5. 可以使用`size`属性获得`Set`实例的长度。

```js
set2.size // returns 10
```

6. 可以使用`clear`方法删除 `Set` 中的数据。

```js
set2.clear();
```

7. 可以使用`Set`对象来删除数组中重复的元素。

```js
const numbers = [1, 2, 3, 4, 5, 6, 6, 7, 8, 8, 5];
const uniqueNums = [...new Set(numbers)]; // [1,2,3,4,5,6,7,8]
```

8. 另外还有`WeakSet`， 与 `Set` 类似，也是不重复的值的集合。但是 `WeakSet` 的成员只能是对象，而不能是其他类型的值。`WeakSet` 中的对象都是弱引用，即垃圾回收机制不考虑 `WeakSet`对该对象的引用。

* `Map` 数据结构。它类似于`对象`，也是`键值对`的集合，但是“`键`”的范围不限于字符串，**各种类型的值（包括对象）都可以当作键**。

* `WeakMap` 结构与 `Map` 结构类似，也是用于生成键值对的集合。但是 `WeakMap` **只接受对象作为键名（ null 除外）**，不接受其他类型的值作为键名。而且 `WeakMap` 的键名所指向的对象，不计入垃圾回收机制。

## 67. 什么是Proxy

`Proxy` 用于修改某些操作的默认行为，等同于在语言层面做出修改，所以属于一种“元编程”，即对编程语言进行编程。

`Proxy` 可以理解成，在目标对象之前架设一层“**拦截**”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。Proxy 这个词的原意是代理，用在这里表示由它来“代理”某些操作，可以译为“**代理器**”。

## 68. 写一个通用的事件侦听器函数

```js
const EventUtils = {
  // 视能力分别使用dom0||dom2||IE方式 来绑定事件
  // 添加事件
  addEvent: function(element, type, handler) {
    if (element.addEventListener) {
      element.addEventListener(type, handler, false);
    } else if (element.attachEvent) {
      element.attachEvent("on" + type, handler);
    } else {
      element["on" + type] = handler;
    }
  },

  // 移除事件
  removeEvent: function(element, type, handler) {
    if (element.removeEventListener) {
      element.removeEventListener(type, handler, false);
    } else if (element.detachEvent) {
      element.detachEvent("on" + type, handler);
    } else {
      element["on" + type] = null;
    }
  },

  // 获取事件目标
  getTarget: function(event) {
    return event.target || event.srcElement;
  },

  // 获取 event 对象的引用，取到事件的所有信息，确保随时能使用 event
  getEvent: function(event) {
    return event || window.event;
  },

  // 阻止事件（主要是事件冒泡，因为 IE 不支持事件捕获）
  stopPropagation: function(event) {
    if (event.stopPropagation) {
      event.stopPropagation();
    } else {
      event.cancelBubble = true;
    }
  },

  // 取消事件的默认行为
  preventDefault: function(event) {
    if (event.preventDefault) {
      event.preventDefault();
    } else {
      event.returnValue = false;
    }
  }
};
```

## 69. 什么是函数式编程

**函数式编程**（通常缩写为FP）是通过编写纯函数，避免共享状态、可变数据、副作用 来构建软件的过程。

> 数式编程是声明式 的而不是命令式 的，应用程序的状态是通过纯函数流动的。与面向对象编程形成对比，面向对象中应用程序的状态通常与对象中的方法共享和共处。
>
> 函数式编程是一种编程范式 ，这意味着它是一种基于一些基本的定义原则（如上所列）思考软件构建的方式。
> 当然，编程范式的其他示例也包括面向对象编程和过程编程。
> 函数式的代码往往比命令式或面向对象的代码更简洁，更可预测，更容易测试 - 但如果不熟悉它以及与之相关的常见模式，函数式的代码也可能看起来更密集杂乱，并且 相关文献对新人来说是不好理解的。

## 70. 什么是高阶函数

> 高阶函数只是将函数作为参数或返回值的函数。

```js
function higherOrderFunction(param,callback){
    return callback(param);
}
```

## 71. 为什么函数被称为一等公民

在JavaScript中，函数不仅拥有一切传统函数的使用方式（声明和调用），而且可以做到像简单值一样:

* **赋值** （var func = function(){}）、

* **传参** (function func(x,callback){callback();})、

* **返回** (function(){return function(){}})，

这样的函数也称之为`第一级函数（First-class Function）`。不仅如此，`JavaScript`中的函数还充当了类的构造函数的作用，同时又是一个`Function`类的实例(`instance`)。这样的多重身份让`JavaScript`的函数变得非常重要。

## 72. 手动实现 Array.prototype.map 方法

`map()` 方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。

```js
function map(arr, mapCallback) {
  // 首先，检查传递的参数是否正确。
  if (!Array.isArray(arr) || !arr.length || typeof mapCallback !== 'function') { 
    return [];
  } else {
    let result = [];
    // 每次调用此函数时，都会创建一个 result 数组
    // 因为不想改变原始数组。
    for (let i = 0, len = arr.length; i < len; i++) {
      result.push(mapCallback(arr[i], i, arr)); 
      // 将 mapCallback 返回的结果 push 到 result 数组中
    }
    return result;
  }
}
```

## 73. 手动实现Array.prototype.filter方法

`filter()` 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。

```js
function filter(arr, filterCallback) {
  // 首先，检查传递的参数是否正确。
  if (!Array.isArray(arr) || !arr.length || typeof filterCallback !== 'function') 
  {
    return [];
  } else {
    let result = [];
     // 每次调用此函数时，都会创建一个 result 数组
     // 因为不想改变原始数组。
    for (let i = 0, len = arr.length; i < len; i++) {
      // 检查 filterCallback 的返回值是否是真值
      if (filterCallback(arr[i], i, arr)) { 
      // 如果条件为真，则将数组元素 push 到 result 中
        result.push(arr[i]);
      }
    }
    return result; // return the result array
  }
}
```

## 74. 手动实现Array.prototype.reduce方法

[reduce()](https://link.zhihu.com/?target=https%3A//juejin.im/post/6844904200917221389) 方法对数组中的每个元素执行一个由您提供的`reducer`函数(升序执行)，将其结果汇总为单个返回值。

```js
function reduce(arr, reduceCallback, initialValue) {
  // 首先，检查传递的参数是否正确。
  if (!Array.isArray(arr) || !arr.length || typeof reduceCallback !== 'function') 
  {
    return [];
  } else {
    // 如果没有将initialValue传递给该函数，将使用第一个数组项作为initialValue
    let hasInitialValue = initialValue !== undefined;
    let value = hasInitialValue ? initialValue : arr[0];
   、

    // 如果有传递 initialValue，则索引从 1 开始，否则从 0 开始
    for (let i = hasInitialValue ? 1 : 0, len = arr.length; i < len; i++) {
      value = reduceCallback(value, arr[i], i, arr); 
    }
    return value;
  }
}
```

## 75. js的深浅拷贝

JavaScript的深浅拷贝一直是个难点，如果现在面试官让我写一个深拷贝，我可能也只是能写出个基础版的。

* **浅拷贝:** 

> 创建一个新对象，这个对象有着原始对象属性值的一份精确拷贝。如果属性是基本类型，拷贝的就是基本类型的值，如果属性是引用类型，拷贝的就是内存地址 ，所以如果其中一个对象改变了这个地址，就会影响到另一个对象。

* **深拷贝:**

> 将一个对象从内存中完整的拷贝一份出来,从堆内存中开辟一个新的区域存放新对象,且修改新对象不会影响原对象。

### 浅拷贝的实现方式：

1. `Object.assign()` 方法： 

> 用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。

2. `Array.prototype.slice()`：

> `slice()` 方法返回一个新的数组对象，这一对象是一个由 `begin`和`end（不包括end）`决定的原数组的浅拷贝。原始数组不会被改变。

3. 拓展运算符...：

```js
let a = {
    name: "Jake",
    flag: {
        title: "better day by day",
        time: "2020-05-31"
    }
}
let b = {...a};
```

### 深拷贝的实现方式：

1. **乞丐版：** 

> JSON.parse(JSON.stringify(object))，缺点诸多（会忽略undefined、symbol、函数；不能解决循环引用；不能处理正则、new Date()）

2. **基础版（面试够用）：**

> 浅拷贝+递归 （只考虑了普通的 object和 array两种数据类型）

```js
function cloneDeep(target,map = new WeakMap()) {
  if(typeOf taret ==='object'){
     let cloneTarget = Array.isArray(target) ? [] : {};
      
     if(map.get(target)) {
        return target;
    }
     map.set(target, cloneTarget);
     for(const key in target){
        cloneTarget[key] = cloneDeep(target[key], map);
     }
     return cloneTarget
  }else{
       return target
  }
}
```

> 终极版：

```js
const mapTag = '[object Map]';
const setTag = '[object Set]';
const arrayTag = '[object Array]';
const objectTag = '[object Object]';
const argsTag = '[object Arguments]';

const boolTag = '[object Boolean]';
const dateTag = '[object Date]';
const numberTag = '[object Number]';
const stringTag = '[object String]';
const symbolTag = '[object Symbol]';
const errorTag = '[object Error]';
const regexpTag = '[object RegExp]';
const funcTag = '[object Function]';

const deepTag = [mapTag, setTag, arrayTag, objectTag, argsTag];


function forEach(array, iteratee) {
    let index = -1;
    const length = array.length;
    while (++index < length) {
        iteratee(array[index], index);
    }
    return array;
}

function isObject(target) {
    const type = typeof target;
    return target !== null && (type === 'object' || type === 'function');
}

function getType(target) {
    return Object.prototype.toString.call(target);
}

function getInit(target) {
    const Ctor = target.constructor;
    return new Ctor();
}

function cloneSymbol(targe) {
    return Object(Symbol.prototype.valueOf.call(targe));
}

function cloneReg(targe) {
    const reFlags = /\w*$/;
    const result = new targe.constructor(targe.source, reFlags.exec(targe));
    result.lastIndex = targe.lastIndex;
    return result;
}

function cloneFunction(func) {
    const bodyReg = /(?<={)(.|\n)+(?=})/m;
    const paramReg = /(?<=\().+(?=\)\s+{)/;
    const funcString = func.toString();
    if (func.prototype) {
        const param = paramReg.exec(funcString);
        const body = bodyReg.exec(funcString);
        if (body) {
            if (param) {
                const paramArr = param[0].split(',');
                return new Function(...paramArr, body[0]);
            } else {
                return new Function(body[0]);
            }
        } else {
            return null;
        }
    } else {
        return eval(funcString);
    }
}

function cloneOtherType(targe, type) {
    const Ctor = targe.constructor;
    switch (type) {
        case boolTag:
        case numberTag:
        case stringTag:
        case errorTag:
        case dateTag:
            return new Ctor(targe);
        case regexpTag:
            return cloneReg(targe);
        case symbolTag:
            return cloneSymbol(targe);
        case funcTag:
            return cloneFunction(targe);
        default:
            return null;
    }
}

function clone(target, map = new WeakMap()) {

    // 克隆原始类型
    if (!isObject(target)) {
        return target;
    }

    // 初始化
    const type = getType(target);
    let cloneTarget;
    if (deepTag.includes(type)) {
        cloneTarget = getInit(target, type);
    } else {
        return cloneOtherType(target, type);
    }

    // 防止循环引用
    if (map.get(target)) {
        return map.get(target);
    }
    map.set(target, cloneTarget);

    // 克隆set
    if (type === setTag) {
        target.forEach(value => {
            cloneTarget.add(clone(value, map));
        });
        return cloneTarget;
    }

    // 克隆map
    if (type === mapTag) {
        target.forEach((value, key) => {
            cloneTarget.set(key, clone(value, map));
        });
        return cloneTarget;
    }

    // 克隆对象和数组
    const keys = type === arrayTag ? undefined : Object.keys(target);
    forEach(keys || target, (value, key) => {
        if (keys) {
            key = value;
        }
        cloneTarget[key] = clone(target[key], map);
    });

    return cloneTarget;
}

module.exports = {
    clone
};
```

[ 如何写出一个惊艳面试官的深拷贝 深拷贝的终极探索（99%的人都不知道）](https://link.zhihu.com/?target=https%3A//segmentfault.com/a/1190000016672263)

## 76. 手写call、apply及bind函数

### call 函数的实现步骤

1. 判断调用对象是否为函数，即使是定义在函数的原型上的，但是可能出现使用 `call` 等方式调用的情况。

2. 判断传入上下文对象是否存在，如果不存在，则设置为 `window` 。

3. 处理传入的参数，截取第一个参数后的所有参数。

4. 将函数作为上下文对象的一个属性。

5. 使用上下文对象来调用这个方法，并保存返回结果。

6. 删除刚才新增的属性。

7. 返回结果。

```js
// call函数实现
Function.prototype.myCall = function(context) {
  // 判断调用对象
  if (typeof this !== "function") {
    console.error("type error");
  }

  // 获取参数
  let args = [...arguments].slice(1),
    result = null;

  // 判断 context 是否传入，如果未传入则设置为 window
  context = context || window;

  // 将调用函数设为对象的方法
  context.fn = this;

  // 调用函数
  result = context.fn(...args);

  // 将属性删除
  delete context.fn;

  return result;
};
```

### apply 函数的实现步骤

1. 判断调用对象是否为函数，即使是定义在函数的原型上的，但是可能出现使用 `call` 等方式调用的情况。

2. 判断传入上下文对象是否存在，如果不存在，则设置为 `window` 。

3. 将函数作为上下文对象的一个属性。

4. 判断参数值是否传入

5. 使用上下文对象来调用这个方法，并保存返回结果。

6. 删除刚才新增的属性

7. 返回结果

```js
// apply 函数实现
Function.prototype.myApply = function(context) {
  // 判断调用对象是否为函数
  if (typeof this !== "function") {
    throw new TypeError("Error");
  }

  let result = null;

  // 判断 context 是否存在，如果未传入则为 window
  context = context || window;

  // 将函数设为对象的方法
  context.fn = this;

  // 调用方法
  if (arguments[1]) {
    result = context.fn(...arguments[1]);
  } else {
    result = context.fn();
  }

  // 将属性删除
  delete context.fn;

  return result;
};
```

### bind 函数的实现步骤

1. 判断调用对象是否为函数，即使是定义在函数的原型上的，但是可能出现使用 `call` 等方式调用的情况。

2. 保存当前函数的引用，获取其余传入参数值。

3. 创建一个函数返回

4. 函数内部使用 `apply` 来绑定函数调用，需要判断函数作为构造函数的情况，这个时候需要传入当前函数的 `this` 给 `apply` 调用，其余情况都传入指定的上下文对象。

```js
// bind 函数实现
Function.prototype.myBind = function(context) {
  // 判断调用对象是否为函数
  if (typeof this !== "function") {
    throw new TypeError("Error");
  }

  // 获取参数
  var args = [...arguments].slice(1),
    fn = this;

  return function Fn() {
    // 根据调用方式，传入不同绑定值
    return fn.apply(
      this instanceof Fn ? this : context,
      args.concat(...arguments)
    );
  };
};
```

## 77. 函数柯里化的实现

```js
// 函数柯里化指的是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术。

function curry(fn, args) {
  // 获取函数需要的参数长度
  let length = fn.length;

  args = args || [];

  return function() {
    let subArgs = args.slice(0);

    // 拼接得到现有的所有参数
    for (let i = 0; i < arguments.length; i++) {
      subArgs.push(arguments[i]);
    }

    // 判断参数的长度是否已经满足函数所需参数的长度
    if (subArgs.length >= length) {
      // 如果满足，执行函数
      return fn.apply(this, subArgs);
    } else {
      // 如果不满足，递归返回科里化的函数，等待参数的传入
      return curry.call(this, fn, subArgs);
    }
  };
}

// es6 实现
function curry(fn, ...args) {
  return fn.length <= args.length ? fn(...args) : curry.bind(null, fn, ...args);
}
```

## 78. js模拟new操作符的实现

这个问题如果你在掘金上搜，你可能会搜索到类似下面的回答：

<img :src="$withBase('/assets/js/1726f21a7f6f36a8')" alt="demo" />

说实话，看第一遍，我是不理解的，我需要去理一遍原型及原型链的知识才能理解。所以我觉得[MDN](https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FJavaScript%2FReference%2FOperators%2Fnew)对new的解释更容易理解：

`new` 运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例。`new` 关键字会进行如下的操作：

1. 创建一个空的简单`JavaScript`对象（即{}）；

2. 链接该对象（即设置该对象的构造函数）到另一个对象 ；

3. 将步骤1新创建的对象作为`this`的上下文 ；

4. 如果该函数没有返回对象，则返回`this`。

接下来看实现：

```js
function Dog(name, color, age) {
  this.name = name;
  this.color = color;
  this.age = age;
}

Dog.prototype={
  getName: function() {
    return this.name
  }
}

var dog = new Dog('大黄', 'yellow', 3)
```

上面的代码相信不用解释，大家都懂。来看最后一行带`new`关键字的代码，按照上述的1,2,3,4步来解析`new`背后的操作。

1. 创建一个简单空对象

```js
var obj = {}
```

2. 链接该对象到另一个对象（原型链）

```js
// 设置原型链
obj.__proto__ = Dog.prototype
```

3. 将步骤1新创建的对象作为 `this` 的上下文

```js
// this指向obj对象
Dog.apply(obj, ['大黄', 'yellow', 3])
```

4. 如果该函数没有返回对象，则返回this

```js
// 因为 Dog() 没有返回值，所以返回obj
var dog = obj
dog.getName() // '大黄'
```

需要注意的是如果 `Dog()` 有 `return` 则返回 `return的值`

```js
var rtnObj = {}
function Dog(name, color, age) {
  // ...
  //返回一个对象
  return rtnObj
}

var dog = new Dog('大黄', 'yellow', 3)
console.log(dog === rtnObj) // true
```

接下来将以上步骤封装成一个对象实例化方法，即模拟`new`的操作：

```js
function objectFactory(){
    var obj = {};
    //取得该方法的第一个参数(并删除第一个参数)，该参数是构造函数
    var Constructor = [].shift.apply(arguments);
    //将新对象的内部属性__proto__指向构造函数的原型，这样新对象就可以访问原型中的属性和方法
    obj.__proto__ = Constructor.prototype;
    //取得构造函数的返回值
    var ret = Constructor.apply(obj, arguments);
    //如果返回值是一个对象就返回该对象，否则返回构造函数的一个实例对象
    return typeof ret === "object" ? ret : obj;
}
```

## 79. 什么是回调函数

**回调函数**是一段可执行的代码段，它作为一个参数传递给其他的代码，其作用是在需要的时候方便调用这段（回调函数）代码。

在JavaScript中函数也是对象的一种，同样对象可以作为参数传递给函数，因此函数也可以作为参数传递给另外一个函数，这个作为参数的函数就是回调函数。

```js
const btnAdd = document.getElementById('btnAdd');

btnAdd.addEventListener('click', function clickCallback(e) {
    // do something useless
});
```

在本例中，等待id为`btnAdd`的元素中的`click`事件，如果它被单击，则执行`clickCallback`函数。回调函数向某些数据或事件添加一些功能。

回调函数有一个致命的弱点，就是容易写出`回调地狱（Callback hell）`。假设多个事件存在依赖性：

```js
setTimeout(() => {
    console.log(1)
    setTimeout(() => {
        console.log(2)
        setTimeout(() => {
            console.log(3)
    
        },3000)
    
    },2000)
},1000)
```

这就是典型的回调地狱，以上代码看起来不利于阅读和维护，事件一旦多起来就更是乱糟糟，所以在es6中提出了`Promise`和`async`/`await`来解决回调地狱的问题。当然，回调函数还存在着别的几个缺点，比如不能使用 `try catch` 捕获错误，不能直接 `return`。接下来的两条就是来解决这些问题的，咱们往下看。

## 80. Promise是什么

`Promise`，翻译过来是承诺，承诺它过一段时间会给你一个结果。从编程讲`Promise` 是**异步编程的一种解决方案**。下面是`Promise`在[MDN](https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FJavaScript%2FReference%2FGlobal_Objects%2FPromise)的相关说明：

`Promise` 对象是一个代理对象（代理一个值），被代理的值在`Promise`对象创建时可能是未知的。它允许你为异步操作的成功和失败分别绑定相应的处理方法（`handlers`）。 这让异步方法可以像同步方法那样返回值，但并不是立即返回最终执行结果，而是一个能代表未来出现的结果的`promise`对象。

一个 `Promise`有以下几种状态:

* `pending:` 初始状态，既不是成功，也不是失败状态。

* `fulfilled:` 意味着操作成功完成。

* `rejected:` 意味着操作失败。

这个承诺一旦从等待状态变成为其他状态就永远不能更改状态了，也就是说一旦状态变为 `fulfilled`/`rejected` 后，就不能再次改变。 可能光看概念大家不理解`Promise`，举个简单的栗子；

上一条说过`Promise`可以解决回调地狱的问题，没错，`pending` 状态的 `Promise` 对象会触发 `fulfilled`/`rejected` 状态，一旦状态改变，`Promise` 对象的 `then` 方法就会被调用；否则就会触发 `catch`。将上一条回调地狱的代码改写一下：

```js
new Promise((resolve，reject) => {
     setTimeout(() => {
            console.log(1)
            resolve()
        },1000)
        
}).then((res) => {
    setTimeout(() => {
            console.log(2)
        },2000)
}).then((res) => {
    setTimeout(() => {
            console.log(3)
        },3000)
}).catch((err) => {
console.log(err)
})
```

其实`Promise`也是存在一些缺点的，比如无法取消 `Promise`，错误需要通过回调函数捕获。

### promise手写实现，面试够用版：

```js
function myPromise(constructor){
    let self=this;
    self.status="pending" //定义状态改变前的初始状态
    self.value=undefined;//定义状态为resolved的时候的状态
    self.reason=undefined;//定义状态为rejected的时候的状态
    function resolve(value){
        //两个==="pending"，保证了状态的改变是不可逆的
       if(self.status==="pending"){
          self.value=value;
          self.status="resolved";
       }
    }
    function reject(reason){
        //两个==="pending"，保证了状态的改变是不可逆的
       if(self.status==="pending"){
          self.reason=reason;
          self.status="rejected";
       }
    }
    //捕获构造异常
    try{
       constructor(resolve,reject);
    }catch(e){
       reject(e);
    }
}
// 定义链式调用的then方法
myPromise.prototype.then=function(onFullfilled,onRejected){
   let self=this;
   switch(self.status){
      case "resolved":
        onFullfilled(self.value);
        break;
      case "rejected":
        onRejected(self.reason);
        break;
      default:       
   }
}
```

关于`Promise`还有其他的知识，比如`Promise.all()`、`Promise.race()`等的运用，由于篇幅原因就不再做展开，想要深入了解的可看下面的文章。

相关资料：

[「硬核JS」深入了解异步解决方案](https://juejin.im/post/6844904064614924302#heading-69)

[【翻译】Promises/A+规范](https://link.juejin.cn/?target=https%3A%2F%2Fwww.ituring.com.cn%2Farticle%2F66566%23)

## 81. Iterator是什么，有什么作用？

`Iterator`（迭代器）是一种接口，也可以说是一种规范。为各种不同的数据结构提供统一的访问机制。任何数据结构只要部署`Iterator`接口，就可以完成遍历操作（即依次处理该数据结构的所有成员）。

### Iterator语法：

```js
const obj = {
    [Symbol.iterator]:function(){}
}
```

`[Symbol.iterator]` 属性名是固定的写法，只要拥有了该属性的对象，就能够用迭代器的方式进行遍历。

迭代器的遍历方法是首先获得一个迭代器的指针，初始时该指针指向第一条数据之前，接着通过调用 `next` 方法，改变指针的指向，让其指向下一条数据 每一次的 `next` 都会返回一个对象，该对象有两个属性

* **value** 代表想要获取的数据

* **done** 布尔值，`false`表示当前指针指向的数据有值，`true`表示遍历已经结束

### Iterator 的作用有三个：

1. 为各种数据结构，提供一个统一的、简便的访问接口；

2. 使得数据结构的成员能够按某种次序排列；

3. `ES6` 创造了一种新的遍历命令`for…of`循环，`Iterator` 接口主要供`for…of`消费。

### 遍历过程：

1. 创建一个指针对象，指向当前数据结构的起始位置。也就是说，遍历器对象本质上，就是一个指针对象。

2. 第一次调用指针对象的`next`方法，可以将指针指向数据结构的第一个成员。

3. 第二次调用指针对象的`next`方法，指针就指向数据结构的第二个成员。

4. 不断调用指针对象的`next`方法，直到它指向数据结构的结束位置。

每一次调用`next`方法，都会返回数据结构的当前成员的信息。具体来说，就是返回一个包含`value`和`done`两个属性的对象。其中，`value`属性是当前成员的值，`done`属性是一个布尔值，表示遍历是否结束。

```js
let arr = [{num:1},2,3]
let it = arr[Symbol.iterator]() // 获取数组中的迭代器
console.log(it.next()) 	// { value: Object { num: 1 }, done: false }
console.log(it.next()) 	// { value: 2, done: false }
console.log(it.next()) 	// { value: 3, done: false }
console.log(it.next()) 	// { value: undefined, done: true }
```

## 82. Generator函数是什么，有什么作用

`Generator`函数可以说是`Iterator`接口的具体实现方式。`Generator` 最大的特点就是可以控制函数的执行。

```js
function *foo(x) {
  let y = 2 * (yield (x + 1))
  let z = yield (y / 3)
  return (x + y + z)
}
let it = foo(5)
console.log(it.next())   // => {value: 6, done: false}
console.log(it.next(12)) // => {value: 8, done: false}
console.log(it.next(13)) // => {value: 42, done: true}
```

上面这个示例就是一个`Generator`函数，来分析其执行过程：

1. 首先 `Generator` 函数调用时它会返回一个迭代器

2. 当执行第一次 `next` 时，传参会被忽略，并且函数暂停在 `yield (x + 1)` 处，所以返回 `5 + 1 = 6`

3. 当执行第二次 `next` 时，传入的参数等于上一个 `yield` 的返回值，如果你不传参，`yield` 永远返回 `undefined`。此时 `let y = 2 * 12`，所以第二个 `yield` 等于 `2 * 12 / 3 = 8`

4. 当执行第三次 `next` 时，传入的参数会传递给 `z`，所以 `z = 13`, `x = 5`, `y = 24`，相加等于 `42`

`Generator` 函数一般见到的不多，其实也于他有点绕有关系，并且一般会配合 `co` 库去使用。当然，可以通过 `Generator` 函数解决回调地狱的问题。

## 83. 什么是 async/await 及其如何工作,有什么优缺点

`async/await`是一种建立在`Promise`之上的编写异步或非阻塞代码的新方法，被普遍认为是 JS异步操作的最终且最优雅的解决方案。相对于 `Promise` 和回调，它的可读性和简洁度都更高。毕竟一直`then()`也很烦。

`async` 是异步的意思，而 `await` 是 `async wait`的简写，即异步等待。

所以从语义上就很好理解 `async` 用于声明一个 `function` 是异步的，而`await` 用于等待一个异步方法执行完成。

一个函数如果加上 `async` ，那么该函数就会返回一个 `Promise`

```js
async function test() {
  return "1"
}
console.log(test()) // -> Promise {<resolved>: "1"}
```

可以看到输出的是一个`Promise`对象。所以，`async` 函数返回的是一个 `Promise` 对象，如果在 `async` 函数中直接 return 一个直接量，`async` 会把这个直接量通过 `PromIse.resolve()` 封装成`Promise`对象返回。

相比于 `Promise`，`async/await`能更好地处理 `then` 链

```js
function takeLongTime(n) {
    return new Promise(resolve => {
        setTimeout(() => resolve(n + 200), n);
    });
}

function step1(n) {
    console.log(`step1 with ${n}`);
    return takeLongTime(n);
}

function step2(n) {
    console.log(`step2 with ${n}`);
    return takeLongTime(n);
}

function step3(n) {
    console.log(`step3 with ${n}`);
    return takeLongTime(n);
}
```

现在分别用 `Promise` 和`async/await`来实现这三个步骤的处理。

### 使用Promise

```js
function doIt() {
    console.time("doIt");
    const time1 = 300;
    step1(time1)
        .then(time2 => step2(time2))
        .then(time3 => step3(time3))
        .then(result => {
            console.log(`result is ${result}`);
        });
}
doIt();
// step1 with 300
// step2 with 500
// step3 with 700
// result is 900
```

### 使用async/await

```js
async function doIt() {
    console.time("doIt");
    const time1 = 300;
    const time2 = await step1(time1);
    const time3 = await step2(time2);
    const result = await step3(time3);
    console.log(`result is ${result}`);
}
doIt();
```

结果和之前的 `Promise` 实现是一样的，但是这个代码看起来是不是清晰得多，优雅整洁，几乎跟同步代码一样。

> `await`关键字只能在`async function`中使用。在任何非`async function`的函数中使用`await`关键字都会抛出错误。`await`关键字在执行下一行代码之前等待右侧表达式(可能是一个`Promise`)返回。

[「硬核JS」深入了解异步解决方案](https://juejin.im/post/6844904064614924302#heading-69)

## 84. instanceof的原理是什么，如何实现

`instanceof` 可以正确的判断对象的类型，因为内部机制是通过判断对象的原型链中是不是能找到类型的 `prototype`。

实现 `instanceof`：

1. 首先获取类型的原型

2. 然后获得对象的原型

3. 然后一直循环判断对象的原型是否等于类型的原型，直到对象原型为 `null`，因为原型链最终为 `null`

```js
function myInstanceof(left, right) {
  let prototype = right.prototype
  left = left.__proto__
  while (true) {
    if (left === null || left === undefined)
      return false
    if (prototype === left)
      return true
    left = left.__proto__
  }
}
```

## 85. js 的节流与防抖

### 函数防抖 

> 是指在事件被触发 `n` 秒后再执行回调，如果在这 `n` 秒内事件又被触发，则重新计时。这可以使用在一些点击请求的事件上，避免因为用户的多次点击向后端发送多次请求。
>
> 最终操作之后一段时间内未操作，以最后一次操作为结算单位，最终操作后单位时间内无操作则触发

```js
// 函数防抖的实现
function debounce(fn, wait) {
  var timer = null;

  return function() {
    var context = this,
      args = arguments;

    // 如果此时存在定时器的话，则取消之前的定时器重新记时
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }

    // 设置定时器，使事件间隔指定事件后执行
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, wait);
  };
}
```

### 函数节流

> 是指规定一个单位时间，在这个单位时间内，只能有一次触发事件的回调函数执行，如果在同一个单位时间内某事件被触发多次，只有一次能生效。节流可以使用在 scroll 函数的事件监听上，通过事件节流来降低事件调用的频率。
>
> 单位时间内仅触发一次，以时间作为结算单位，通常为第一次单位时间内无触发

```js
// 函数节流的实现;
function throttle(fn, delay) {
  var preTime = Date.now();

  return function() {
    var context = this,
      args = arguments,
      nowTime = Date.now();

    // 如果两次时间间隔超过了指定时间，则执行函数。
    if (nowTime - preTime >= delay) {
      preTime = Date.now();
      return fn.apply(context, args);
    }
  };
}
```

[《轻松理解 JS 函数节流和函数防抖》](https://juejin.im/post/6844903535125987335)

[《JavaScript 事件节流和事件防抖》](https://juejin.im/post/6844903575663935496)

[《JS 的防抖与节流》](https://juejin.im/entry/6844903618827517965)

## 86. 什么是设计模式

### 1. 概念

设计模式是一套被反复使用的、多数人知晓的、经过分类编目的、代码设计经验的总结。使用设计模式是为了重用代码、让代码更容易被他人理解、保证代码可靠性。 毫无疑问，设计模式于己于他人于系统都是多赢的，设计模式使代码编制真正工程化，设计模式是软件工程的基石，如同大厦的一块块砖石一样。

### 2. 设计原则

1. **S – Single Responsibility Principle 单一职责原则**

* 一个程序只做好一件事

* 如果功能过于复杂就拆分开，每个部分保持独立

2. **O – OpenClosed Principle 开放/封闭原则**

* 对扩展开放，对修改封闭

* 增加需求时，扩展新代码，而非修改已有代码

3. **L – Liskov Substitution Principle 里氏替换原则**

* 子类能覆盖父类

* 父类能出现的地方子类就能出现

4. **I – Interface Segregation Principle 接口隔离原则**

* 保持接口的单一独立

* 类似单一职责原则，这里更关注接口

5. **D – Dependency Inversion Principle 依赖倒转原则**

* 面向接口编程，依赖于抽象而不依赖于具

* 使用方只关注接口而不关注具体类的实现

### 3. 设计模式的类型

1. **结构型模式（Structural Patterns）：** 

> 通过识别系统中组件间的简单关系来简化系统的设计。

2. **创建型模式（Creational Patterns）：** 

> 处理对象的创建，根据实际情况使用合适的方式创建对象。常规的对象创建方式可能会导致设计上的问题，或增加设计的复杂度。创建型模式通过以某种方式控制对象的创建来解决问题。

3. **行为型模式（Behavioral Patterns）：** 

> 用于识别对象之间常见的交互模式并加以实现，如此，增加了这些交互的灵活性。

## 87. 9种前端常见的设计模式

### 1. 外观模式（Facade Pattern）

外观模式是最常见的设计模式之一，它为子系统中的一组接口提供一个统一的高层接口，使子系统更容易使用。简而言之外观设计模式就是把多个子系统中复杂逻辑进行抽象，从而提供一个更统一、更简洁、更易用的API。很多常用的框架和库基本都遵循了外观设计模式，比如JQuery就把复杂的原生DOM操作进行了抽象和封装，并消除了浏览器之间的兼容问题，从而提供了一个更高级更易用的版本。其实在平时工作中也会经常用到外观模式进行开发，只是不自知而已。

1. 兼容浏览器事件绑定

```js
let addMyEvent = function (el, ev, fn) {
    if (el.addEventListener) {
        el.addEventListener(ev, fn, false)
    } else if (el.attachEvent) {
        el.attachEvent('on' + ev, fn)
    } else {
        el['on' + ev] = fn
    }
}; 
```

2. 封装接口

```js
let myEvent = {
    // ...
    stop: e => {
        e.stopPropagation();
        e.preventDefault();
    }
};
```

**场景**

* 设计初期，应该要有意识地将不同的两个层分离，比如经典的三层结构，在数据访问层和业务逻辑层、业务逻辑层和表示层之间建立外观Facade

* 在开发阶段，子系统往往因为不断的重构演化而变得越来越复杂，增加外观Facade可以提供一个简单的接口，减少他们之间的依赖。

* 在维护一个遗留的大型系统时，可能这个系统已经很难维护了，这时候使用外观Facade也是非常合适的，为系系统开发一个外观Facade类，为设计粗糙和高度复杂的遗留代码提供比较清晰的接口，让新系统和Facade对象交互，Facade与遗留代码交互所有的复杂工作。

**优点**

* 减少系统相互依赖。

* 提高灵活性。

* 提高了安全性

**缺点**

* 不符合开闭原则，如果要改东西很麻烦，继承重写都不合适。

### 2. 代理模式（Proxy Pattern）

是为一个对象提供一个代用品或占位符，以便控制对它的访问

> 假设当A 在心情好的时候收到花，小明表白成功的几率有60%，而当A 在心情差的时候收到花，小明表白的成功率无限趋近于0。小明跟A 刚刚认识两天，还无法辨别A 什么时候心情好。如果不合时宜地把花送给A，花被直接扔掉的可能性很大，这束花可是小明吃了7 天泡面换来的。但是A 的朋友B 却很了解A，所以小明只管把花交给B，B 会监听A 的心情变化，然后选择A 心情好的时候把花转交给A，代码如下：

```js
let Flower = function() {}
let xiaoming = {
  sendFlower: function(target) {
    let flower = new Flower()
    target.receiveFlower(flower)
  }
}
let B = {
  receiveFlower: function(flower) {
    A.listenGoodMood(function() {
      A.receiveFlower(flower)
    })
  }
}
let A = {
  receiveFlower: function(flower) {
    console.log('收到花'+ flower)
  },
  listenGoodMood: function(fn) {
    setTimeout(function() {
      fn()
    }, 1000)
  }
}
xiaoming.sendFlower(B)
```

**场景**

* HTML元 素事件代理

```html
<ul id="ul">
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
<script>
  let ul = document.querySelector('#ul');
  ul.addEventListener('click', event => {
    console.log(event.target);
  });
</script>
```

* ES6 的 proxy [阮一峰Proxy](https://link.juejin.cn/?target=https%3A%2F%2Fes6.ruanyifeng.com%2F%23docs%2Fproxy)

* jQuery.proxy()方法

**优点**

* 代理模式能将代理对象与被调用对象分离，降低了系统的耦合度。代理模式在客户端和目标对象之间起到一个中介作用，这样可以起到保护目标对象的作用

* 代理对象可以扩展目标对象的功能；通过修改代理对象就可以了，符合开闭原则；

**缺点**

* 处理请求速度可能有差别，非直接访问存在开销

### 3. 工厂模式（Factory Pattern）

工厂模式定义一个用于创建对象的接口，这个接口由子类决定实例化哪一个类。该模式使一个类的实例化延迟到了子类。而子类可以重写接口方法以便创建的时候指定自己的对象类型。

```js
class Product {
    constructor(name) {
        this.name = name
    }
    init() {
        console.log('init')
    }
    fun() {
        console.log('fun')
    }
}

class Factory {
    create(name) {
        return new Product(name)
    }
}

// use
let factory = new Factory()
let p = factory.create('p1')
p.init()
p.fun()
```

**场景**

* 如果你不想让某个子系统与较大的那个对象之间形成强耦合，而是想运行时从许多子系统中进行挑选的话，那么工厂模式是一个理想的选择

* 将`new`操作简单封装，遇到`new`的时候就应该考虑是否用工厂模式；

* 需要依赖具体环境创建不同实例，这些实例都有相同的行为,这时候可以使用工厂模式，简化实现的过程，同时也可以减少每种对象所需的代码量，有利于消除对象间的耦合，提供更大的灵活性

**优点**

* 创建对象的过程可能很复杂，但只需要关心创建结果。

* 构造函数和创建者分离, 符合“开闭原则”

* 一个调用者想创建一个对象，只要知道其名称就可以了。

* 扩展性高，如果想增加一个产品，只要扩展一个工厂类就可以。

**缺点**

* 添加新产品时，需要编写新的具体产品类,一定程度上增加了系统的复杂度

* 考虑到系统的可扩展性，需要引入抽象层，在客户端代码中均使用抽象层进行定义，增加了系统的抽象性和理解难度

**什么时候不用**

* 当被应用到错误的问题类型上时,这一模式会给应用程序引入大量不必要的复杂性.除非为创建对象提供一个接口是编写的库或者框架的一个设计上目标,否则我会建议使用明确的构造器,以避免不必要的开销。

* 由于对象的创建过程被高效的抽象在一个接口后面的事实,这也会给依赖于这个过程可能会有多复杂的单元测试带来问题。

### 4. 单例模式（Singleton Pattern）

顾名思义，单例模式中`Class`的实例个数最多为1。当需要一个对象去贯穿整个系统执行某些任务时，单例模式就派上了用场。而除此之外的场景尽量避免单例模式的使用，因为单例模式会引入全局状态，而一个健康的系统应该避免引入过多的全局状态。

实现单例模式需要解决以下几个问题：

1. 如何确定`Class`只有一个实例？

2. 如何简便的访问`Class`的唯一实例？

3. `Class`如何控制实例化的过程？

4. 如何将`Class`的实例个数限制为1？

一般通过实现以下两点来解决上述问题：

1. 隐藏`Class`的构造函数，避免多次实例化

2. 通过暴露一个 `getInstance()` 方法来创建/获取唯一实例

`Javascript`中单例模式可以通过以下方式实现：

```js
// 单例构造器
const FooServiceSingleton = (function () {
  // 隐藏的Class的构造函数
  function FooService() {}

  // 未初始化的单例对象
  let fooService;

  return {
    // 创建/获取单例对象的函数
    getInstance: function () {
      if (!fooService) {
        fooService = new FooService();
      }
      return fooService;
    }
  }
})();
```

实现的关键点有：

1. 使用 `IIFE`创建局部作用域并即时执行；

2. `getInstance()` 为一个 闭包 ，使用闭包保存局部作用域中的单例对象并返回。

可以验证下单例对象是否创建成功：

```js
const fooService1 = FooServiceSingleton.getInstance();
const fooService2 = FooServiceSingleton.getInstance();

console.log(fooService1 === fooService2); // true
```

**场景例子**

* 定义命名空间和实现分支型方法

* 登录框

* `vuex` 和 `redux`中的`store`

**优点**

* 划分命名空间，减少全局变量

* 增强模块性，把自己的代码组织在一个全局变量名下，放在单一位置，便于维护

* 且只会实例化一次。简化了代码的调试和维护

**缺点**

* 由于单例模式提供的是一种单点访问，所以它有可能导致模块间的强耦合

* 从而不利于单元测试。无法单独测试一个调用了来自单例的方法的类，而只能把它与那个单例作为一

* 个单元一起测试。

### 5. 策略模式（Strategy Pattern）

策略模式简单描述就是：对象有某个行为，但是在不同的场景中，该行为有不同的实现算法。把它们一个个封装起来，并且使它们可以互相替换

```html
<html>
<head>
    <title>策略模式-校验表单</title>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type">
</head>
<body>
    <form id = "registerForm" method="post" action="http://xxxx.com/api/register">
        用户名：<input type="text" name="userName">
        密码：<input type="text" name="password">
        手机号码：<input type="text" name="phoneNumber">
        <button type="submit">提交</button>
    </form>
    <script type="text/javascript">
        // 策略对象
        const strategies = {
          isNoEmpty: function (value, errorMsg) {
            if (value === '') {
              return errorMsg;
            }
          },
          isNoSpace: function (value, errorMsg) {
            if (value.trim() === '') {
              return errorMsg;
            }
          },
          minLength: function (value, length, errorMsg) {
            if (value.trim().length < length) {
              return errorMsg;
            }
          },
          maxLength: function (value, length, errorMsg) {
            if (value.length > length) {
              return errorMsg;
            }
          },
          isMobile: function (value, errorMsg) {
            if (!/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|17[7]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test(value)) {
              return errorMsg;
            }                
          }
        }
        
        // 验证类
        class Validator {
          constructor() {
            this.cache = []
          }
          add(dom, rules) {
            for(let i = 0, rule; rule = rules[i++];) {
              let strategyAry = rule.strategy.split(':')
              let errorMsg = rule.errorMsg
              this.cache.push(() => {
                let strategy = strategyAry.shift()
                strategyAry.unshift(dom.value)
                strategyAry.push(errorMsg)
                return strategies[strategy].apply(dom, strategyAry)
              })
            }
          }
          start() {
            for(let i = 0, validatorFunc; validatorFunc = this.cache[i++];) {
              let errorMsg = validatorFunc()
              if (errorMsg) {
                return errorMsg
              }
            }
          }
        }

        // 调用代码
        let registerForm = document.getElementById('registerForm')

        let validataFunc = function() {
          let validator = new Validator()
          validator.add(registerForm.userName, [{
            strategy: 'isNoEmpty',
            errorMsg: '用户名不可为空'
          }, {
            strategy: 'isNoSpace',
            errorMsg: '不允许以空白字符命名'
          }, {
            strategy: 'minLength:2',
            errorMsg: '用户名长度不能小于2位'
          }])
          validator.add(registerForm.password, [ {
            strategy: 'minLength:6',
            errorMsg: '密码长度不能小于6位'
          }])
          validator.add(registerForm.phoneNumber, [{
            strategy: 'isMobile',
            errorMsg: '请输入正确的手机号码格式'
          }])
          return validator.start()
        }

        registerForm.onsubmit = function() {
          let errorMsg = validataFunc()
          if (errorMsg) {
            alert(errorMsg)
            return false
          }
        }
    </script>
</body>
</html>
```

**场景例子**

* 如果在一个系统里面有许多类，它们之间的区别仅在于它们的'行为'，那么使用策略模式可以动态地让一个对象在许多行为中选择一种行为。

* 一个系统需要动态地在几种算法中选择一种。

* 表单验证

**优点**

* 利用组合、委托、多态等技术和思想，可以有效的避免多重条件选择语句

* 提供了对开放-封闭原则的完美支持，将算法封装在独立的`strategy`中，使得它们易于切换，理解，易于扩展

* 利用组合和委托来让Context拥有执行算法的能力，这也是继承的一种更轻便的代替方案

**缺点**

* 会在程序中增加许多策略类或者策略对象

* 要使用策略模式，必须了解所有的`strategy`，必须了解各个`strategy`之间的不同点，这样才能选择一个合适的`strategy`

### 6. 迭代器模式（Iterator Pattern）

如果你看到这，`ES6`中的迭代器 `Iterator` 相信你还是有点印象的，上面第60条已经做过简单的介绍。迭代器模式简单的说就是提供一种方法顺序一个聚合对象中各个元素，而又不暴露该对象的内部表示。

迭代器模式解决了以下问题：

* 提供一致的遍历各种数据结构的方式，而不用了解数据的内部结构

* 提供遍历容器（集合）的能力而无需改变容器的接口

一个迭代器通常需要实现以下接口：

* `hasNext()`：判断迭代是否结束，返回`Boolean`

* `next()`：查找并返回下一个元素

为`Javascript`的数组实现一个迭代器可以这么写：

```js
const item = [1, 'red', false, 3.14];

function Iterator(items) {
  this.items = items;
  this.index = 0;
}

Iterator.prototype = {
  hasNext: function () {
    return this.index < this.items.length;
  },
  next: function () {
    return this.items[this.index++];
  }
}
```

验证一下迭代器是否工作：

```js
const iterator = new Iterator(item);

while(iterator.hasNext()){
  console.log(iterator.next());
}
//输出：1, red, false, 3.14
```

`ES6`提供了更简单的迭代循环语法 `for...of`，使用该语法的前提是操作对象需要实现 `可迭代协议（The iterable protocol）`，简单说就是该对象有个`Key`为 `Symbol.iterator` 的方法，该方法返回一个`iterator`对象。

比如实现一个 `Range` 类用于在某个数字区间进行迭代：

```js
function Range(start, end) {
  return {
    [Symbol.iterator]: function () {
      return {
        next() {
          if (start < end) {
            return { value: start++, done: false };
          }
          return { done: true, value: end };
        }
      }
    }
  }
}
```

验证一下：

```js
for (num of Range(1, 5)) {
  console.log(num);
}
// 输出：1, 2, 3, 4
```

### 7. 观察者模式（Observer Pattern）

**观察者模式又称发布-订阅模式（Publish/Subscribe Pattern）**，是经常接触到的设计模式，日常生活中的应用也比比皆是，比如你订阅了某个博主的频道，当有内容更新时会收到推送；又比如JavaScript中的事件订阅响应机制。观察者模式的思想用一句话描述就是：**被观察对象（subject）维护一组观察者（observer），当被观察对象状态改变时，通过调用观察者的某个方法将这些变化通知到观察者。**

观察者模式中Subject对象一般需要实现以下API：

* `subscribe()`: 接收一个观察者`observer`对象，使其订阅自己

* `unsubscribe()`: 接收一个观察者`observer`对象，使其取消订阅自己

* `fire()`: 触发事件，通知到所有观察者

用`JavaScript`手动实现观察者模式：

```js
// 被观察者
function Subject() {
  this.observers = [];
}

Subject.prototype = {
  // 订阅
  subscribe: function (observer) {
    this.observers.push(observer);
  },
  // 取消订阅
  unsubscribe: function (observerToRemove) {
    this.observers = this.observers.filter(observer => {
      return observer !== observerToRemove;
    })
  },
  // 事件触发
  fire: function () {
    this.observers.forEach(observer => {
      observer.call();
    });
  }
}
```

验证一下订阅是否成功：

```js
const subject = new Subject();

function observer1() {
  console.log('Observer 1 Firing!');
}


function observer2() {
  console.log('Observer 2 Firing!');
}

subject.subscribe(observer1);
subject.subscribe(observer2);
subject.fire();

//输出：
Observer 1 Firing! 
Observer 2 Firing!
```

验证一下取消订阅是否成功：

```js
subject.unsubscribe(observer2);
subject.fire();

//输出：
Observer 1 Firing!
```

**场景**

* `DOM` 事件

```js
document.body.addEventListener('click', function() {
    console.log('hello world!');
});
document.body.click()
```

* `vue` 响应式

**优点**

* 支持简单的广播通信，自动通知所有已经订阅过的对象

* 目标对象与观察者之间的抽象耦合关系能单独扩展以及重用

* 增加了灵活性

* 观察者模式所做的工作就是在解耦，让耦合的双方都依赖于抽象，而不是依赖于具体。从而使得各自的变化都不会影响到另一边的变化。

**缺点**

* 过度使用会导致对象与对象之间的联系弱化，会导致程序难以跟踪维护和理解

### 8. 中介者模式（Mediator Pattern）

在中介者模式中，`中介者（Mediator）`包装了一系列对象相互作用的方式，使得这些对象不必直接相互作用，而是由中介者协调它们之间的交互，从而使它们可以松散偶合。当某些对象之间的作用发生改变时，不会立即影响其他的一些对象之间的作用，保证这些作用可以彼此独立的变化。

中介者模式和观察者模式有一定的相似性，都是一对多的关系，也都是集中式通信，不同的是中介者模式是处理同级对象之间的交互，而观察者模式是处理`Observer`和`Subject`之间的交互。中介者模式有些像婚恋中介，相亲对象刚开始并不能直接交流，而是要通过中介去筛选匹配再决定谁和谁见面。

**场景**

* 例如购物车需求，存在商品选择表单、颜色选择表单、购买数量表单等等，都会触发change事件，那么可以通过中介者来转发处理这些事件，实现各个事件间的解耦，仅仅维护中介者对象即可。

```js
var goods = {   //手机库存
    'red|32G': 3,
    'red|64G': 1,
    'blue|32G': 7,
    'blue|32G': 6,
};
//中介者
var mediator = (function() {
    var colorSelect = document.getElementById('colorSelect');
    var memorySelect = document.getElementById('memorySelect');
    var numSelect = document.getElementById('numSelect');
    return {
        changed: function(obj) {
            switch(obj){
                case colorSelect:
                    //TODO
                    break;
                case memorySelect:
                    //TODO
                    break;
                case numSelect:
                    //TODO
                    break;
            }
        }
    }
})();
colorSelect.onchange = function() {
    mediator.changed(this);
};
memorySelect.onchange = function() {
    mediator.changed(this);
};
numSelect.onchange = function() {
    mediator.changed(this);
};
```

* 聊天室里

    * 聊天室成员类：

    ```js
    function Member(name) {
    this.name = name;
    this.chatroom = null;
    }

    Member.prototype = {
    // 发送消息
    send: function (message, toMember) {
        this.chatroom.send(message, this, toMember);
    },
    // 接收消息
    receive: function (message, fromMember) {
        console.log(`${fromMember.name} to ${this.name}: ${message}`);
    }
    }
    ```

    * 聊天室类：

    ```js
    function Chatroom() {
    this.members = {};
    }

    Chatroom.prototype = {
    // 增加成员
    addMember: function (member) {
        this.members[member.name] = member;
        member.chatroom = this;
    },
    // 发送消息
    send: function (message, fromMember, toMember) {
        toMember.receive(message, fromMember);
    }
    }

    ```

    * 测试一下：

    ```js
    const chatroom = new Chatroom();
    const bruce = new Member('bruce');
    const frank = new Member('frank');

    chatroom.addMember(bruce);
    chatroom.addMember(frank);

    bruce.send('Hey frank', frank);

    //输出：bruce to frank: hello frank
    ```

**优点**

* 使各对象之间耦合松散，而且可以独立地改变它们之间的交互

* 中介者和对象一对多的关系取代了对象之间的网状多对多的关系

* 如果对象之间的复杂耦合度导致维护很困难，而且耦合度随项目变化增速很快，就需要中介者重构代码

**缺点**

* 系统中会新增一个中介者对象，因为对象之间交互的复杂性，转移成了中介者对象的复杂性，使得中介者对象经常是巨大的。中介 者对象自身往往就是一个难以维护的对象。

### 9. 访问者模式（Visitor Pattern）

**访问者模式** 是一种将算法与对象结构分离的设计模式，通俗点讲就是：访问者模式让能够在不改变一个对象结构的前提下能够给该对象增加新的逻辑，新增的逻辑保存在一个独立的访问者对象中。访问者模式常用于拓展一些第三方的库和工具。

```js
// 访问者  
class Visitor {
    constructor() {}
    visitConcreteElement(ConcreteElement) {
        ConcreteElement.operation()
    }
}
// 元素类  
class ConcreteElement{
    constructor() {
    }
    operation() {
       console.log("ConcreteElement.operation invoked");  
    }
    accept(visitor) {
        visitor.visitConcreteElement(this)
    }
}
// client
let visitor = new Visitor()
let element = new ConcreteElement()
elementA.accept(visitor)
```

访问者模式的实现有以下几个要素：

* **Visitor Object：**访问者对象，拥有一个`visit()`方法

* **Receiving Object：**接收对象，拥有一个 `accept()` 方法

* **visit(receivingObj)：**用于`Visitor`接收一个`Receiving Object`

* **accept(visitor)：**用于`Receving Object`接收一个`Visitor`，并通过调用`Visitor`的 `visit()` 为其提供获取`Receiving Object`数据的能力

简单的代码实现如下：

```js
Receiving Object：

function Employee(name, salary) {
  this.name = name;
  this.salary = salary;
}

Employee.prototype = {
  getSalary: function () {
    return this.salary;
  },
  setSalary: function (salary) {
    this.salary = salary;
  },
  accept: function (visitor) {
    visitor.visit(this);
  }
}
Visitor Object：

function Visitor() { }

Visitor.prototype = {
  visit: function (employee) {
    employee.setSalary(employee.getSalary() * 2);
  }
}
```

验证一下：

```js
const employee = new Employee('bruce', 1000);
const visitor = new Visitor();
employee.accept(visitor);

console.log(employee.getSalary());//输出：2000
```

**场景**

* 对象结构中对象对应的类很少改变，但经常需要在此对象结构上定义新的操作

* 需要对一个对象结构中的对象进行很多不同的并且不相关的操作，而需要避免让这些操作"污染"这些对象的类，也不希望在增加新操作时修改这些类。

**优点**

* 符合单一职责原则

* 优秀的扩展性

* 灵活性

**缺点**

* 具体元素对访问者公布细节，违反了迪米特原则

* 违反了依赖倒置原则，依赖了具体类，没有依赖抽象。

* 具体元素变更比较困难

[JavaScript设计模式es6（23种)](https://juejin.im/post/5e021eb96fb9a01628014095)

[《前端面试之道》](https://juejin.im/book/5bdc715fe51d454e755f75ef/section/5bdc74186fb9a049ab0d0b6b)

[《JavaScript 设计模式》](https://juejin.im/post/59df4f74f265da430f311909#heading-3)

[《JavaScript 中常见设计模式整理》](https://juejin.im/post/5afe6430518825428630bc4d)