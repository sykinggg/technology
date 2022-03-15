# 44个 Javascript 变态题解析


## 第1题

```js
["1", "2", "3"].map(parseInt)
```

### 知识点:

* [Array/map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

* [Number/parseInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt)

* [Global_Objects/parseInt](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseInt)

* [JavaScript parseInt](http://www.w3school.com.cn/jsref/jsref_parseInt.asp)

首先, map接受两个参数, 一个回调函数 callback, 一个回调函数的this值

其中回调函数接受三个参数 currentValue, index, arrary;

而题目中, map只传入了回调函数--parseInt.

其次, parseInt 只接受两个两个参数 string, radix(基数).

> 在没有指定基数，或者基数为 0 的情况下，JavaScript 作如下处理：
>
> * 如果字符串 string 以"0x"或者"0X"开头, 则基数是16 (16进制).
> * 如果字符串 string 以"0"开头, 基数是8（八进制）或者10（十进制），那么具体是哪个基数由实现环境决- 定。ECMAScript 5 规定使用10，但是并不是所有的浏览器都遵循这个规定。因此，永远都要明确给出radix>参数的值。
> * 如果字符串 string 以其它任何值开头，则基数是10 (十进制)。

所以本题即问

```js
parseInt('1', 0);
parseInt('2', 1);
parseInt('3', 2);
```

首先后两者参数不合法.

所以答案是 `[1, NaN, NaN]`

## 第2题

```js
[typeof null, null instanceof Object]
```

### 知识点:

* [Operators/typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)

* [Operators/instanceof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof)

* [Operators/instanceof(中)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof)

typeof 返回一个表示类型的字符串.

instanceof 运算符用来检测 constructor.prototype 是否存在于参数 object 的原型链上.

这个题可以直接看链接... 因为 `typeof null === 'object'` 自语言之初就是这样....

typeof 的结果请看下表:

| type | result |
| ---- | ---- |
| Undefined | "undefined" |
| Null | "object" |
| Boolean | "boolean" |
| Number | "number" |
| String | "string" |
| Symbol | "symbol" |
| Host object | Implementation-dependent |
| Function | "function" |
| Object | "object" |

所以答案 `[object, false]`

## 第3题

```js
[ [3,2,1].reduce(Math.pow), [].reduce(Math.pow) ]
```

### 知识点:

* [Array/Reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

`arr.reduce(callback[, initialValue])`

reduce接受两个参数, 一个回调, 一个初始值.

回调函数接受四个参数 `previousValue`, `currentValue`, `currentIndex`, `array`

需要注意的是 `If the array is empty and no initialValue was provided, TypeError would be thrown.`

所以第二个表达式会报异常. 第一个表达式等价于 `Math.pow(3, 2) => 9`; `Math.pow(9, 1) =>9`

答案 `an error`

## 第4题

```js
var val = 'smtg';
console.log('Value is ' + (val === 'smtg') ? 'Something' : 'Nothing');
```

### 知识点:

* [Operators/Operator_Precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

* [Operators/Conditional_Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

简而言之 `+` 的优先级 大于 `?`

所以原题等价于 `'Value is true' ? 'Somthing' : 'Nonthing'` 而不是 `'Value is' + (true ? 'Something' : 'Nonthing')`

答案 `'Something'`

## 第5题

```js
var name = 'World!';
(function () {
    if (typeof name === 'undefined') {
        var name = 'Jack';
        console.log('Goodbye ' + name);
    } else {
        console.log('Hello ' + name);
    }
})();
```

### 知识点:

* [Hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)

在 JavaScript中， functions 和 variables 会被提升。变量提升是JavaScript将声明移至作用域 scope (全局域或者当前函数作用域) 顶部的行为。

这个题目相当于

```js
var name = 'World!';
(function () {
    var name;
    if (typeof name === 'undefined') {
        name = 'Jack';
        console.log('Goodbye ' + name);
    } else {
        console.log('Hello ' + name);
    }
})();
```

所以答案是 `'Goodbye Jack'`

## 第6题

```js
var END = Math.pow(2, 53);
var START = END - 100;
var count = 0;
for (var i = START; i <= END; i++) {
    count++;
}
console.log(count);
```

### 知识点

* [Infinity](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity)

::: tip 注意
js中可以表示的最大整数不是2的53次方，而是1.7976931348623157e+308。
2的53次方不是js能表示的最大整数而应该是能正确计算且不失精度的最大整数，可以参见js权威指南。
9007199254740992 +1还是 9007199254740992 ，这就是因为精度问题，如果 9007199254740992 +11或者 9007199254740992 +111的话，值是会发生改变的，只是这时候计算的结果不是正确的值，就是因为精度丢失的问题。
:::

## 第7题

```js
var ary = [0,1,2];
ary[10] = 10;
ary.filter(function(x) { return x === undefined;});
```

### 知识点

* [译 JavaScript中的稀疏数组与密集数组](http://www.cnblogs.com/ziyunfei/archive/2012/09/16/2687165.html)

* [Array/filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

我们来看一下 `Array.prototype.filter` 的 `polyfill`:

```js
if (!Array.prototype.filter) {
  Array.prototype.filter = function(fun/*, thisArg*/) {
    'use strict';

    if (this === void 0 || this === null) {
      throw new TypeError();
    }

    var t = Object(this);
    var len = t.length >>> 0;
    if (typeof fun !== 'function') {
      throw new TypeError();
    }

    var res = [];
    var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
    for (var i = 0; i < len; i++) {
      if (i in t) { // 注意这里!!!
        var val = t[i];
        if (fun.call(thisArg, val, i, t)) {
          res.push(val);
        }
      }
    }

    return res;
  };
}
```

我们看到在迭代这个数组的时候, 首先检查了这个索引值是不是数组的一个属性, 那么我们测试一下.

```js
0 in ary; => true
3 in ary; => false
10 in ary; => true
```

也就是说 从 3 - 9 都是没有初始化的'坑'!, 这些索引并不存在与数组中. 在 array 的函数调用的时候是会跳过这些'坑'的.

答案是 `[]`

## 第8题

```js
var two   = 0.2
var one   = 0.1
var eight = 0.8
var six   = 0.6
[two - one == one, eight - six == two]
```

### 知识点

* [JavaScript的设计缺陷?浮点运算：0.1 + 0.2 != 0.3](http://ourjs.com/detail/54695381bc3f9b154e000046)

IEEE 754标准中的浮点数并不能精确地表达小数

那什么时候精准, 什么时候不经准呢? 笔者也不知道...

答案 `[true, false]`

## 第9题

```js
function showCase(value) {
    switch(value) {
    case 'A':
        console.log('Case A');
        break;
    case 'B':
        console.log('Case B');
        break;
    case undefined:
        console.log('undefined');
        break;
    default:
        console.log('Do not know!');
    }
}
showCase(new String('A'));
```

### 知识点

* [Statements/switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)

* [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

switch 是严格比较, String 实例和 字符串不一样.

```js
var s_prim = 'foo';
var s_obj = new String(s_prim);

console.log(typeof s_prim); // "string"
console.log(typeof s_obj);  // "object"
console.log(s_prim === s_obj); // false
```

答案是 `'Do not know!'`

## 第10题

```js
function showCase2(value) {
    switch(value) {
    case 'A':
        console.log('Case A');
        break;
    case 'B':
        console.log('Case B');
        break;
    case undefined:
        console.log('undefined');
        break;
    default:
        console.log('Do not know!');
    }
}
showCase2(String('A'));
```

解释:
`String(x) does not create an object but does return a string, i.e. typeof String(1) === "string"`

还是刚才的知识点, 只不过 String 不仅是个构造函数 直接调用返回一个字符串哦.

答案 `'Case A'`

## 第11题

```js
function isOdd(num) {
    return num % 2 == 1;
}
function isEven(num) {
    return num % 2 == 0;
}
function isSane(num) {
    return isEven(num) || isOdd(num);
}
var values = [7, 4, '13', -9, Infinity];
values.map(isSane);
```

### 知识点

* [Arithmetic_Operators#Remainder](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder)

此题等价于

```js
7 % 2 => 1
4 % 2 => 0
'13' % 2 => 1
-9 % % 2 => -1
Infinity % 2 => NaN
```

需要注意的是 余数的正负号随第一个操作数.

答案 `[true, true, true, false, false]`

## 第12题

```js
parseInt(3, 8)
parseInt(3, 2)
parseInt(3, 0)
```

第一个题讲过了, 答案 `3, NaN, 3`

## 第13题

```js
Array.isArray( Array.prototype )
```

### 知识点

* [Array/prototype](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype)

一个鲜为人知的实事: `Array.prototype => []`;

[对JS原型的一些思考 by renaesop](https://github.com/renaesop/blog/issues/17)

答案: `true`

## 第14题

```js
var a = [0];
if ([0]) {
  console.log(a == true);
} else {
  console.log("wut");
}
```

### 知识点

* [JavaScript-Equality-Table](https://dorey.github.io/JavaScript-Equality-Table/)

* 更新[通过一张简单的图，让你彻底地、永久地搞懂JS的==运算](https://zhuanlan.zhihu.com/p/21650547) 非常不错的一篇文章!

解析:

* Boolean([0]) === true

* [0] == true

  * true 转换为数字 => 1

  * [0] 转化为数字失败, 转化为字符串 '0', 转化成数字 => 0

  * 0 !== 1

答案: `false`

## 第15题

```js
[]==[]
```

[] 是Object, 两个 Object 不相等

答案是 `false`

## 第16题

```js
'5' + 3
'5' - 3
```

### 知识点

* [Arithmetic_Operators#Addition](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Addition)

* [Arithmetic_Operators#Subtraction](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Subtraction)

`+` 用来表示两个数的和或者字符串拼接, `-`表示两数之差.

请看例子, 体会区别:

```js
> '5' + 3
'53'
> 5 + '3'
'53'
> 5 - '3'
2
> '5' - 3
2
> '5' - '3'
2
```

也就是说 `-` 会尽可能的将两个操作数变成数字, 而 `+` 如果两边不都是数字, 那么就是字符串拼接.

答案是 `'53', 2`

## 第17题

```js
1 + - + + + - + 1
```

这里应该是(倒着看)

```js
1 + (a)  => 2
a = - (b) => 1
b = + (c) => -1
c = + (d) => -1
d = + (e) => -1
e = + (f) => -1
f = - (g) => -1
g = + 1   => 1
```

所以答案 `2`

## 第18题

```js
var ary = Array(3);
ary[0]=2
ary.map(function(elem) { return '1'; });
```

稀疏数组. 同第7题.

题目中的数组其实是一个长度为3, 但是没有内容的数组, array 上的操作会跳过这些未初始化的'坑'.

所以答案是 `["1", undefined × 2]`

这里贴上 Array.prototype.map 的 polyfill.

```js
Array.prototype.map = function(callback, thisArg) {
    var T, A, k;

    if (this == null) {
        throw new TypeError(' this is null or not defined');
    }

    var O = Object(this);
    var len = O.length >>> 0;
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }
    if (arguments.length > 1) {
        T = thisArg;
    }
    A = new Array(len);
    k = 0;
    while (k < len) {
        var kValue, mappedValue;
        if (k in O) {
            kValue = O[k];
            mappedValue = callback.call(T, kValue, k, O);
            A[k] = mappedValue;
        }
        k++;
    }
    return A;
};
```

## 第19题

```js
function sidEffecting(ary) {
  ary[0] = ary[2];
}
function bar(a,b,c) {
  c = 10
  sidEffecting(arguments);
  return a + b + c;
}
bar(1,1,1)
```

这是一个大坑, 尤其是涉及到 ES6语法的时候

### 知识点

* [Functions/arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)

首先 `The arguments object is an Array-like object corresponding to the arguments passed to a function.`

也就是说 `arguments` 是一个 `object`, c 就是 arguments[2], 所以对于 c 的修改就是对 arguments[2] 的修改.

所以答案是 `21`.

然而!!!!!!

当函数参数涉及到 `any rest parameters, any default parameters or any destructured parameters` 的时候, 这个 arguments 就不在是一个 `mapped arguments object` 了.....

> 请看

```js
function sidEffecting(ary) {
  ary[0] = ary[2];
}
function bar(a,b,c=3) {
  c = 10
  sidEffecting(arguments);
  return a + b + c;
}
bar(1,1,1)
```

答案是 `12` !!!!

## 第20题

```js
var a = 111111111111111110000,
    b = 1111;
a + b;
```

答案还是 `111111111111111110000.` 解释是 `Lack of precision for numbers in JavaScript affects both small and big numbers.` 

## 第21题

```js
var x = [].reverse;
x();
```

### 知识点

* [Array/reverse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)

`The reverse method transposes the elements of the calling array object in place, mutating the array, and returning a reference to the array.`

也就是说 最后会返回这个调用者(this), 可是 x 执行的时候是上下文是全局. 那么最后返回的是 `window`.

::: tip 注意
发现 firefox 是 window, chrome 报错 VM190:2 Uncaught TypeError: Array.prototype.reverse called on null or undefined(…) 可能是实现不同, 在 chrome 中应该是对调用者做了检查.
:::

答案是 `window`

## 第22题

```js
Number.MIN_VALUE > 0
```

MIN_VALUE 属性是 JavaScript 中可表示的最小的数（接近 0 ，但不是负数），它的近似值为 5 x 10-324。

答案: `true`

## 第23题

```js
[1 < 2 < 3, 3 < 2 < 1]
```

这个题会让人误以为是 `2 > 1 && 2 < 3` 其实不是的.

这个题等价于

```js
 1 < 2 => true;
 true < 3 =>  1 < 3 => true;
 3 < 2 => false;
 false < 1 => 0 < 1 => true;
```

答案是 `[true, true]`

## 第24题

```js
// the most classic wtf
2 == [[[2]]]
```

这个题我是猜的. 我猜的 `true`, 至于为什么.....

`both objects get converted to strings and in both cases the resulting string is "2"` 

```js
[[[[2]]]].toString()

'2'
```

## 第25题

```js
3.toString()
3..toString()
3...toString()
```

答案是 error, '3', error

换一个写法

```js
var a = 3;
a.toString()
```

这个答案就是 '3';

因为在 js 中 1.1, 1., .1 都是合法的数字. 那么在解析 3.toString 的时候这个 . 到底是属于这个数字还是函数调用呢? 只能是数字, 因为3.合法啊!

## 第26题

```js
(function(){
  var x = y = 1;
})();
console.log(y);
console.log(x);
```

答案是 `1, error`

`y` 被赋值到全局. `x` 是局部变量. 所以打印 `x` 的时候会报 `ReferenceError`

## 第27题

```js
var a = /123/,
    b = /123/;
a == b
a === b
```

即使正则的字面量一致, 他们也不相等.

答案 `false, false`

## 第28题

```js
var a = [1, 2, 3],
    b = [1, 2, 3],
    c = [1, 2, 4]
a ==  b
a === b
a >   c
a <   c
```

字面量相等的数组也不相等.

数组在比较大小的时候按照字典序比较

答案 `false, false, false, true`

## 第29题

```js
var a = {}, b = Object.prototype;
[a.prototype === b, Object.getPrototypeOf(a) === b]
```

### 知识点

* [Object/getPrototypeOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf)

只有 Function 拥有一个 prototype 的属性. 所以 `a.prototype` 为 `undefined`.

而 `Object.getPrototypeOf(obj)` 返回一个具体对象的原型(该对象的内部`[[prototype]]`值)

答案 `false, true`

## 第30题

```js
function f() {}
var a = f.prototype, b = Object.getPrototypeOf(f);
a === b
```

f.prototype是将成为任何用new f创建的对象的父对象，而Object.getPrototypeOf返回继承层次中的父对象。

f.prototype 是使用使用 new 创建的 f 实例的原型. 而 Object.getPrototypeOf 是 f 函数的原型.

```js
a === Object.getPrototypeOf(new f()) // true
b === Function.prototype // true
```

答案 `false`

## 第31题

```js
function foo() { }
var oldName = foo.name;
foo.name = "bar";
[oldName, foo.name]
```

### 知识点

* [Function/name](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name)

因为**函数的名字不可变**.

答案 `['foo', 'foo']`

## 第32题

```js
"1 2 3".replace(/\d/g, parseInt)
```

### 知识点

* [String/replace#Specifying_a_function_as_a_parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Specifying_a_function_as_a_parameter)

`str.replace(regexp|substr, newSubStr|function)`

如果`replace`函数传入的第二个参数是函数, 那么这个函数将接受如下参数

* match 首先是匹配的字符串

* p1, p2 .... 然后是正则的分组

* offset match 匹配的index

* string 整个字符串

由于题目中的正则没有分组, 所以等价于问

```js
parseInt('1', 0)
parseInt('2', 2)
parseInt('3', 4)
```

答案: `1, NaN, 3`

## 第33题

```js
function f() {}
var parent = Object.getPrototypeOf(f);
f.name // ?
parent.name // ?
typeof eval(f.name) // ?
typeof eval(parent.name) //  ?
```

先说以下答案 `'f', 'Empty', 'function', error` 这个答案并不重要.....

这里第一小问和第三小问很简单不解释了.

第二小问笔者在自己的浏览器测试的时候是 `''`, 第四问是 `'undefined'`

所以应该是平台相关的. 这里明白 `parent === Function.prototype` 就好了.

## 第34题

```js
var lowerCaseOnly =  /^[a-z]+$/;
[lowerCaseOnly.test(null), lowerCaseOnly.test()]
```

### 知识点

* [RegExp/test](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)

这里 test 函数会将参数转为字符串. `'nul'`, `'undefined'` 自然都是全小写了

答案: `true, true`

## 第35题

```js
[,,,].join(", ")
```

```js
[,,,] => [undefined × 3]
```

因为javascript 在定义数组的时候允许最后一个元素后跟一个`,`, 所以这是个长度为三的稀疏数组(这是长度为三, 并没有 0, 1, 2三个属性哦)

答案: `", , "`

## 第36题

```js
var a = {class: "Animal", name: 'Fido'};
a.class
```

这个题比较流氓.. 因为是浏览器相关, `class`是个保留字(现在是个关键字了)

所以答案不重要, 重要的是自己在取属性名称的时候尽量避免保留字. 如果使用的话请加引号 `a['class']`

## 第37题

```js
var a = new Date("epoch")
```

### 知识点

* [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

* [Date/parse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse)

简单来说, 如果调用 Date 的构造函数传入一个字符串的话需要符合规范, 即满足 Date.parse 的条件.

另外需要注意的是 如果格式错误 构造函数返回的仍是一个Date 的实例 `Invalid Date`.

答案 `Invalid Date`

## 第38题

```js
var a = Function.length,
    b = new Function().length
a === b
```

我们知道一个function(Function 的实例)的 `length` 属性就是函数签名的参数个数, 所以 b.length == 0.

另外 Function.length 定义为1......

所以不相等.......答案 `false`

## 第39题

```js
var a = Date(0);
var b = new Date(0);
var c = new Date();
[a === b, b === c, a === c]
```

还是关于Date 的题, 需要注意的是

* 如果不传参数等价于当前时间.

* 如果是函数调用 返回一个字符串.

答案 `false, false, false`

## 第40题

```js
var min = Math.min(), max = Math.max()
min < max
```

### 知识点

* [Math/min](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min)

* [Math/max](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max)

有趣的是, Math.min 不传参数返回 `Infinity`, Math.max 不传参数返回 `-Infinity`

答案: `false`

## 第41题

```js
function captureOne(re, str) {
  var match = re.exec(str);
  return match && match[1];
}
var numRe  = /num=(\d+)/ig,
    wordRe = /word=(\w+)/i,
    a1 = captureOne(numRe,  "num=1"),
    a2 = captureOne(wordRe, "word=1"),
    a3 = captureOne(numRe,  "NUM=2"),
    a4 = captureOne(wordRe,  "WORD=2");
[a1 === a2, a3 === a4]
```

### 知识点

* [RegExp/exec](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)

解析:

因为第一个正则有一个 g 选项 它会‘记忆’他所匹配的内容, 等匹配后他会从上次匹配的索引继续, 而第二个正则不会

> 举个例子

```js
var myRe = /ab*/g;
var str = 'abbcdefabh';
var myArray;
while ((myArray = myRe.exec(str)) !== null) {
  var msg = 'Found ' + myArray[0] + '. ';
  msg += 'Next match starts at ' + myRe.lastIndex;
  console.log(msg);
}
// Found abb. Next match starts at 3
// Found ab. Next match starts at 9
```

所以 a1 = '1'; a2 = '1'; a3 = null; a4 = '2'

答案 `[true, false]`

## 第42题

```js
var a = new Date("2014-03-19"),
    b = new Date(2014, 03, 19);
[a.getDay() === b.getDay(), a.getMonth() === b.getMonth()]
```

::: tip 注意
JavaScript从C语言中继承了40年的设计：在C语言的结构tm中，天是1索引的，但月是0索引的。此外，getDay返回的是0索引的星期，要获得1索引的月份，你必须使用getDate，但它并不返回一个Date对象。
:::

```js
a.getDay()
3
b.getDay()
6
a.getMonth()
2
b.getMonth()
3
```

答案 `[false, false]`

## 第43题

```js
if ('http://giftwrapped.com/picture.jpg'.match('.gif')) {
  'a gif file'
} else {
  'not a gif file'
}
```

### 知识点

* [String/match](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)

String.prototype.match 接受一个正则, 如果不是, 按照 `new RegExp(obj)` 转化. 所以 `.` 并不会转义
那么 `/gif` 就匹配了 `/.gif/`

答案: `'a gif file'`

## 第44题

```js
function foo(a) {
    var a;
    return a;
}
function bar(a) {
    var a = 'bye';
    return a;
}
[foo('hello'), bar('hello')]
```

在两个函数里, a作为参数其实已经声明了, 所以 `var a; var a = 'bye'` 其实就是 `a; a ='bye'`

所以答案 `'hello', 'bye'`