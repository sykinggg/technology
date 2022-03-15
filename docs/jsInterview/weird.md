# js 奇怪的小问题

## true + false

* "truefalse"

* 1

* NaN

* SyntaxError

### 正确答案

1

### 思路

首先将表达式进行转换-js隐式转换

```js
Number(true); // -> 1
Number(false); // -> 0
1 + 0; // -> 1
```

## [,,,].length

* 0

* 3

* 4

* SyntaxError

### 正确答案

3

### 思路

将数组转为string,然后进行length当对后一个元素为空则会省略

```js
[,] + [,]; // -> ""
[] + [] === [,] + [,]; // -> true
[,,,] + [,,,]; // -> ",,,,"
([,,,] + [,,,]).length === [,,,,].length; // -> true
```

## [1, 2, 3] + [4, 5, 6]

* "123456"

* "1,2,34,5,6"

* "1,2,3,4,5,6"

* NaN

### 正确答案

“1,2,34,5,6”

### 思路

极其简单的答案是将数组转换为字符串，然后进行连接

顺便说一下，添加尾随逗号不会改变任何东西：

```js
[1, 2, 3,] + [4, 5, 6]; // -> "1,2,34,5,6"
```

但是，我想，如果您真的想将数组转换为逗号分隔的字符串并将它们组合起来，您可以编写如下愚蠢的代码：

```js
[1, 2, 3] + [, 4, 5, 6]; // -> "1,2,3,4,5,6"
```

或者，更愚蠢的是，这个：

```js
[1, 2, 3, ""] + [4, 5, 6]; // -> "1,2,3,4,5,6"
```

不过，最好不要将加法运算符与数组一起使用。如果您确实想真正组合两个数组，这是一个更好的方法：

```js
[...[1, 2, 3], ...[4, 5, 6]];
```

## 0.2 + 0.1 === 0.3

* true

* false

* NaN

* SyntaxError

### 正确答案

false

### 思路

小数的二进制算法除不尽
与其直接比较两个浮点数，不如将浮点数与某种程度的容差进行比较
[这个 StackOverflow 答案](https://stackoverflow.com/questions/588004/is-floating-point-math-broken)

```js
0.2 + 0.1; // -> 0.30000000000000004;
0.2 + 0.1 > 0.3; // -> true
```

## 10,2

* 10.2

* 10

* 2

* 20

### 正确答案

2

### 思路

该[逗号操作符](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comma_Operator)只是返回的最后操作数的值。

```js
10, 2; // -> 2
1, 2, 3, 4; // -> 4
42, "pineapple", true; // -> true
```

## !!""

* true

* false

* undefined

* SyntaxError

### 正确答案

false

### 思路

可以在任何值之前添加两个感叹号以获取其布尔表示。通常，任何有值的都是真，任何有“空”值的都是假。

```js
Boolean(""); // -> false
Boolean(0); // -> false
Boolean("Pineapple"); // -> true
Boolean(42); // -> true
```

## +!![]

* true

* false

* 0

* 1

### 正确答案

1

### 思路

空值通常由布尔值 false 表示。但是，空数组是一个例外。它由 true 表示。然后加号字符将 true 转换为其数字表示。

```js
Boolean([]); // -> true
Number(true); // -> 1
```

## !!!true

* true

* false

* 0

* SyntaxError

### 正确答案

false

### 思路

!的数量本身没有意义，主要是单数去反，双数仅取当前值得boolean值

```js
!!!!!!!!!!!!true; // -> true
```

## true == "true"

* true

* false

* undefined

* SyntaxError

### 正确答案

false

### 思路

根据[抽象相等比较](https://262.ecma-international.org/11.0/#sec-abstract-equality-comparison)的规则，这两个值都转换为数字。

```js
Number(true); // -> 1
Number("true"); // -> NaN
1 == NaN; // -> false
```

## 010 - 03

* 7

* 5

* 3

* NaN

### 正确答案

5

### 思路

010 被 JavaScript 视为八进制数。因此，它的值以 8 为基数。[请参阅 Mozilla 对八进制数字的解释](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates#octal_numbers)。

```js
010; // -> 8
03; // -> 3
8 - 3; // -> 5
```

如果您愿意，您可以全力以赴使用八进制数：

```js
01111111111111111; // -> 40210710958665
```

顺便说一下，前导零的数量无关紧要：

```js
010 === 0000000010; // -> true
```

## "" - - ""

* ""

* 0 

* NaN

* SyntaxError

### 正确答案

0

### 思路

这两个空字符串都转换为 0。

```js
Number(""); // -> 0
0 - - 0; // -> 0
```

如果我这样写，表达式可能会变得更清晰一些：

```js
+"" - -"";
+0 - -0;
```

请注意，虽然我在减号和空字符串之间放置空格只是为了让您感到困惑，但减号之间的空格本身很重要：

```js
- -""; // -> 0
--""; // -> SyntaxError
```

## null + 0

* 0

* "null0"

* NaN

* TypeError

### 正确答案

0

### 思路

Null 转换为其数字表示形式：0。

```js
Number(null); // -> 0
0 + 0; // -> 0
```

这也意味着，虽然...

```js
null === false; // -> false
```

... 这是真的：

```js
+null === +false; // -> true
```

## 0/0

* 0

* Infinity

* NaN

* SyntaxError

### 正确答案

NaN

### 思路

`0/0` 没有有意义的数字答案，因此输出只是`NaN`。

```js
isNaN(0/0); // -> true
```

## 1/0 > Math.pow(10, 1000)

* true

* false

* NaN

* SyntaxError

### 正确答案

false

### 思路

JavaScript 将这两个值都视为无穷大，无穷大等于无穷大[了解有关无穷大的更多信息](https://en.wikipedia.org/wiki/Floating-point_arithmetic#Infinities)

```js
1/0; // -> Infinity
Math.pow(10, 1000); // -> Infinity
Infinity > Infinity; // -> false
```

## true++

* 2

* undefined

* NaN

* SyntaxError

### 正确答案

SyntaxError

### 思路

`undefined++`不会导致 `SyntaxError`：

```js
1++; // -> SyntaxError
"x"++; // -> SyntaxError
undefined++; // -> NaN
```

当然，为了完全清楚，这是有效的语法：

```js
let _true = true;
_true++;
_true; // -> 2
```

## "" - 1

* "1"

* "-1"

* -1

* NaN

### 正确答案

-1

### 思路

加法运算符 (+) 用于数字和字符串，减法运算符 (-) 不用于字符串，因此 JavaScript 将其解释为数字之间的运算。空字符串转换为 0。

```js
Number(""); // -> 0
0 - 1; // -> -1;
```

即使字符串内部有空格（或更多），这仍然是正确的：

```js
" " - 1; // -> -1;
```

但是，如果使用加法运算符，则字符串连接优先：

```js
"" + 1; // -> "1";
```

## (null - 0) + "0"

* "null0"

* "00"

* 0

* NaN

### 正确答案

"00"

### 思路

```js
Number(null) - 0; // -> 0
0 + "0"; // -> "00"
```

如果问题只使用了减法运算符，结果就会不同：

```js
(null - 0) - "0"; // -> 0
```

## true + ("true" - 0)

* 1

* 2

* NaN

* SyntaxError

### 正确答案

NaN

### 思路

js 会将字符串文字转换为其布尔值，然后再转换为数字表示。
实际发生的是它尝试将字符串转换为数字失败。

```js
Number("true"); // -> NaN
```

## !5 + !5

* 0

* 10

* 25

* NaN

### 正确答案

0

### 思路

所有正数都由布尔值 true 表示。true 的反义词是 false，false 转换为 0。

```js
Boolean(5); // -> true
!true; // -> false
Number(false); // -> 0
0 + 0; // -> 0
```

## [] + []

* []

* [,]

* ""

* NaN

### 正确答案

""

### 思路

极其简单的答案是 JavaScript 将数组转换为字符串

```js
[].toString(); // -> ""
"" + ""; // -> ""
```

由于尾随逗号，这些表达式是相等的：

```js
[] + [] === [,] + [,]; // -> true
```

尽管这些数组不同，但它们都被转换为空字符串：

```js
[].length; // -> 0
[,].length; // -> 1
[].toString() === [,].toString(); // -> true
```

当然，这也是事实：

```js
Number([]) === Number([,]); // -> true
```

## NaN === NaN

* true

* false

* TypeError

* SyntaxError

### 正确答案

false

### 思路

这是由于 IEEE-754 委员会出于一些原因做出的决定，例如空间效率以及当时不存在函数isNaN的事实。请参阅[Stephen Canon](https://stackoverflow.com/questions/1565164/what-is-the-rationale-for-all-comparisons-returning-false-for-ieee754-nan-values#1573715)对 NaN 为何不等于自身的解释。

另外，虽然 NaN 可能不等于它自己......

```js
NaN === NaN; // -> false
```

……这两个说法是对的。

```js
isNaN(NaN); // -> true
Object.is(NaN, NaN); // -> true
```

## NaN++

* NaN

* undefined

* TypeError

* SyntaxError

### 正确答案

NaN

### 思路

尝试增加 NaN 只会输出 NaN。

```js
let _NaN = NaN;
_NaN++;
isNaN(_NaN); // -> true
_NaN--;
isNaN(_NaN); // -> true
_NaN *= 10;
isNaN(_NaN); // -> true
```

## undefined + false

* "undefinedfalse"

* 0

* NaN

* SyntaxError

### 正确答案

NaN

### 思路

虽然 false 可以转换为数字，但 undefined 不能。

```js
Number(false); // -> 0
Number(undefined); // -> NaN
NaN + 0; // -> NaN
```

但是，不确定的是通过虚假表示：

```js
!!undefined === false; // -> true
```

这意味着可以像这样添加 undefined 和 false ：

```js
!!undefined + false; // -> 0
```

## +0 === -0

* true

* false

* TypeError

* SyntaxError

### 正确答案

true

### 思路

正零和负零在 JavaScript 中是相等的。有趣的是，Object.is函数不同意。有几种情况===和Object.is彼此不一致，这就是其中之一。

```js
Object.is(0, -0); // -> false
```

## - "" + + "1" * null - [,]

* 0

* "0"

* NaN

* I give up

### 正确答案

0

### 思路

分解

```js
-""; // -> -0
+"1"; // -> 1
Number(null); // -> 0
Number([,]); // -> 0
```

把它们加在一起：

```js
-0 + 1 * 0 - 0; // -> 0
```