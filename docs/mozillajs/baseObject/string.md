# String

`String` 全局对象是一个用于字符串或一个字符序列的构造函数。

## 语法

字符串字面量采取以下形式：

```js
'string text'
"string text"
"中文/汉语"
"español"
"English "
"हिन्दी"
"العربية"
"português"
"বাংলা"
"русский"
"日本語"
"ਪੰਜਾਬੀ"
"한국어"
```

你也能使用 `String` 函数将其他值生成或转换成字符串：

```js
String(thing)
new String(thing)
```

## 参数

`thing`
    任何可以被转换成字符串的值。

## 模板字面量

从 ECMAScript 2015 开始，字符串字面量也可以称为[模板字面量](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)：

```js
`hello world` `hello! world!` `hello ${who}` escape `<a>${who}</a>`
```

## 转义字符

除了普通的可打印字符以外，一些有特殊功能的字符可以通过转义字符的形式放入字符串中：

| Code | OutPut |
| ---- | ---- |
| \0 | 空字符 |
| \' | 单引号 |
| \" | 双引号 |
| \\ | 反斜杠 |
| \n | 换行 |
| \r | 回车 |
| \v | 垂直制表符 |
| \t | 水平制表符 |
| \b | 退格 |
| \f | 换页 |
| \uXXXX | unicode 码 |
| \u{x} ... \u{XXXXXX} | unicode codepoint |
| \xXX | Latin-1 字符(x小写) |

> 和其他语言不同，javascript 的字符串不区分单引号和双引号，所以不论是单引号还是双引号的字符串，上面的转义字符都能运行 。


## 长字符串

有时，你的代码可能含有很长的字符串。你可能想将这样的字符串写成多行，而不是让这一行无限延长或着被编辑器折叠。有两种方法可以做到这一点。

* 其一，可以使用 `+` 运算符将多个字符串连接起来，如下所示：

```js
let longString = "This is a very long string which needs " +
                 "to wrap across multiple lines because " +
                 "otherwise my code is unreadable.";
```

* 其二，可以在每行末尾使用反斜杠字符（`“\”`），以指示字符串将在下一行继续。确保反斜杠后面没有空格或任何除换行符之外的字符或缩进; 否则反斜杠将不会工作。 如下所示：

```js
let longString = "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable.";
```

使用这两种方式会创建相同的字符串。

## 描述

字符串对于保存可以以文本形式表示的数据非常有用。 一些常用的字符串操作有：查询[字符串长度](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/length)，使用 [+ 和 +=](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/String_Operators) 运算符来构建和连接字符串，使用 [indexOf](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf) 方法检查某一子字符串在父字符串中的位置，又或是使用 [substring](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/substring) 方法提取从父字符串中提取子字符串。

### 从字符串中获取单个字符

获取字符串的某个字符有两种方法。 第一种是使用 [charAt](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/charAt) 方法：

```js
return 'cat'.charAt(1); // returns "a"
```

另一种 (在ECMAScript 5中有所介绍) 是把字符串当作一个类似数组的对象，其中的每个字符对应一个数值索引：

```js
return 'cat'[1]; // returns "a"
```

使用括号访问字符串不可以对其进行删除或添加，因为字符串对应未知的属性并不是可读或配置的。 (更多的信息请参阅 [Object.defineProperty](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)。 )

### 字符串比较

熟练使用 C 语言的开发者经常使用 strcmp 函数来比较字符串，但在 JavaScript 中，你只需要使用[比较操作符(>/</>=/<=)](https://developer.mozilla.org/zh-CN/docs/conflicting/Web/JavaScript/Reference/Operators_310dc67549939233c3d18a8fa2cdbb23)：

```js
var a = "a";
var b = "b";
if (a < b) // true
  print(a + " is less than " + b);
else if (a > b)
  print(a + " is greater than " + b);
else
  print(a + " and " + b + " are equal.");
```

使用从字符串实例继承而来的 [localeCompare](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare) 方法也能达到同样的效果。 

### 基本字符串和字符串对象的区别

请注意区分 JavaScript 字符串对象和基本字符串值 . ( 对于 [Boolean](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Boolean) 和[Numbers](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number) 也同样如此.)

> 隐式转换
>
> 字符串字面量 (通过单引号或双引号定义) 和 直接调用 `String` 方法(没有通过 `new` 生成字符串对象实例)的字符串都是基本字符串。JavaScript会自动将基本字符串转换为字符串对象，只有将基本字符串转化为字符串对象之后才可以使用字符串对象的方法。当基本字符串需要调用一个字符串对象才有的方法或者查询值的时候(基本字符串是没有这些方法的)，JavaScript 会自动将基本字符串转化为字符串对象并且调用相应的方法或者执行查询。

```js
var s_prim = "foo";
var s_obj = new String(s_prim);

console.log(typeof s_prim); // Logs "string"
console.log(typeof s_obj);  // Logs "object"
```

当使用 [eval](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval)时，基本字符串和字符串对象也会产生不同的结果。`eval` 会将基本字符串作为源代码处理; 而字符串对象则被看作对象处理, 返回对象。 例如：

```js
s1 = "2 + 2";               // creates a string primitive
s2 = new String("2 + 2");   // creates a String object
console.log(eval(s1));      // returns the number 4
console.log(eval(s2));      // returns the string "2 + 2"
```

由于上述原因, 当一段代码在需要使用基本字符串的时候却使用了字符串对象就会导致执行失败(虽然一般情况下程序员们并不需要考虑这样的问题)。

利用 [valueOf](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/valueOf) 方法，可以将字符串对象转换为其对应的基本字符串。

```js
console.log(eval(s2.valueOf())); // returns the number 4
```

> **注意**: 其他的将字符串对象转换成基本字符串的方法可以及参考 [StringView – a C-like representation of strings based on typed arrays](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Typed_arrays/StringView).

## 属性

[String.prototype](https://developer.mozilla.org/zh-CN/docs/conflicting/Web/JavaScript/Reference/Global_Objects/String)

> 可以为 String 对象增加新的属性。

## 方法

[String.fromCharCode()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode)

> 通过一串 Unicode 创建字符串。

[String.fromCodePoint()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint)

> 通过一串 码点 创建字符串。

[String.raw()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/raw) 

> 通过模板字符串创建字符串。

## String 实例

### 属性

`String.prototype.constructor`

> 用于创造对象的原型对象的特定的函数。

[String.prototype.length](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/length)

> 返回了字符串的长度。

N
    
> 用于访问第N个位置的字符，其中N是小于 [length](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/length) 和 0之间的正整数。这些属性都是“只读”性质，不能编辑。

## 跟HTML无关的方法

[String.prototype.charAt()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/charAt)

> 返回特定位置的字符。

[String.prototype.charCodeAt()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt)

> 返回表示给定索引的字符的Unicode的值。

[String.prototype.codePointAt()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt)

> 返回使用UTF-16编码的给定位置的值的非负整数。

[String.prototype.concat()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/concat)

> 连接两个字符串文本，并返回一个新的字符串。

[String.prototype.includes()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/includes)

> 判断一个字符串里是否包含其他字符串。

[String.prototype.endsWith()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith)

> 判断一个字符串的是否以给定字符串结尾，结果返回布尔值。

[String.prototype.indexOf()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)

> 从字符串对象中返回首个被发现的给定值的索引值，如果没有找到则返回-1。

[String.prototype.lastIndexOf()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf)

> 从字符串对象中返回最后一个被发现的给定值的索引值，如果没有找到则返回-1。

[String.prototype.localeCompare()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare)

> 返回一个数字表示是否引用字符串在排序中位于比较字符串的前面，后面，或者二者相同。

[String.prototype.match()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match)

> 使用正则表达式与字符串相比较。

[String.prototype.normalize()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/normalize)

> 返回调用字符串值的Unicode标准化形式。

[String.prototype.padEnd()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd)

> 在当前字符串尾部填充指定的字符串， 直到达到指定的长度。 返回一个新的字符串。

[String.prototype.padStart()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/padStart)

> 在当前字符串头部填充指定的字符串， 直到达到指定的长度。 返回一个新的字符串。

[String.prototype.repeat()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)

> 返回指定重复次数的由元素组成的字符串对象。

[String.prototype.replace()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace)

> 被用来在正则表达式和字符串直接比较，然后用新的子串来替换被匹配的子串。

[String.prototype.search()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/search)

> 对正则表达式和指定字符串进行匹配搜索，返回第一个出现的匹配项的下标。

[String.prototype.slice()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/slice)

> 摘取一个字符串区域，返回一个新的字符串。

[String.prototype.split()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/split)

> 通过分离字符串成字串，将字符串对象分割成字符串数组。

[String.prototype.startsWith()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith)

> 判断字符串的起始位置是否匹配其他字符串中的字符。

[String.prototype.substr()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/substr)

> 通过指定字符数返回在指定位置开始的字符串中的字符。

[String.prototype.substring()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/substring)

> 返回在字符串中指定两个下标之间的字符。

[String.prototype.toLocaleLowerCase()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase)

> 根据当前区域设置，将符串中的字符转换成小写。对于大多数语言来说，[toLowerCase](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase) 的返回值是一致的。

[String.prototype.toLocaleUpperCase()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleUpperCase)

> 根据当前区域设置，将字符串中的字符转换成大写，对于大多数语言来说，[toUpperCase](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)的返回值是一致的。

[String.prototype.toLowerCase()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)

> 将字符串转换成小写并返回。

[String.prototype.toString()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toString)

> 返回用字符串表示的特定对象。重写 [Object.prototype.toString](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) 方法。

[String.prototype.toUpperCase()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)

> 将字符串转换成大写并返回。

[String.prototype.trim()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/Trim)

> 从字符串的开始和结尾去除空格。参照部分 ECMAScript 5 标准。

[String.prototype.trimStart()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart)

> 从字符串的左侧去除空格。

[String.prototype.trimEnd()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd)

> 从字符串的右侧去除空格。

[String.prototype.valueOf()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/valueOf)

> 返回特定对象的原始值。重写 [Object.prototype.valueOf](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf) 方法。

[String.prototype[@@iterator]()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/@@iterator)

> 返回一个新的迭代器对象，该对象遍历字符串值的索引位置，将每个索引值作为字符串值返回。

## HTML wrapper methods

下面的方法被限制使用，因为只对可用的HTML标签和属性提供部分支持。

[String.prototype.anchor()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/anchor)

`<a name="name"> `(hypertext target)

## 示例

### 将其他值转换成字符串

使用 `String()` 方法将其它对象转化为字符串可以被认为是一种更加安全的做法，虽然该方法底层使用的也是 `toString()` 方法，但是针对 `null/undefined/symbols`，`String()` 方法会有特殊的处理：

```js
var outputStrings = [];
for (let i = 0, n = inputValues.length; i < n; ++i) {
  outputStrings.push(String(inputValues[i]));
}
```