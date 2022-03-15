# 迭代协议

作为 ECMAScript 2015 的一组补充规范，迭代协议并不是新的内置实现或语法，而是协议。这些协议可以被任何遵循某些约定的对象来实现。

迭代协议具体分为两个协议：`可迭代协议`和`迭代器协议`。

## 可迭代协议

**可迭代协议**允许 JavaScript 对象定义或定制它们的迭代行为，例如，在一个 `for..of` 结构中，哪些值可以被遍历到。一些内置类型同时是`内置可迭代对象`，并且有默认的迭代行为，比如 `Array` 或者 `Map`，而其他内置类型则不是（比如 `Object`)）。

要成为**可迭代**对象， 一个对象必须实现 **@@iterator** 方法。这意味着对象（或者它`原型链`上的某个对象）必须有一个键为 **@@iterator** 的属性，可通过常量 `Symbol.iterator` 访问该属性：

| 属性 | 值 |
| ---- | ---- |
| [Symbol.iterator] | 一个无参数的函数，其返回值为一个符合`迭代器协议`的对象。|

当一个对象需要被迭代的时候（比如被置入一个 `for...of` 循环时），首先，会不带参数调用它的 `@@iterator` 方法，然后使用此方法返回的**迭代器**获得要迭代的值。

值得注意的是调用此零个参数函数时，它将作为对可迭代对象的方法进行调用。 因此，在函数内部，`this`关键字可用于访问可迭代对象的属性，以决定在迭代过程中提供什么。

此函数可以是普通函数，也可以是生成器函数，以便在调用时返回迭代器对象。 在此生成器函数的内部，可以使用`yield`提供每个条目。

## 迭代器协议

**迭代器协议**定义了产生一系列值（无论是有限个还是无限个）的标准方式。当值为有限个时，所有的值都被迭代完毕后，则会返回一个默认返回值。

只有实现了一个拥有以下语义（semantic）的 **next()** 方法，一个对象才能成为迭代器：

### next

>一个无参数函数，返回一个应当拥有以下两个属性的对象：

**done（boolean）**
    
> 如果迭代器可以产生序列中的下一个值，则为 `false`。（这等价于没有指定  `done` 这个属性。）
>
> 如果迭代器已将序列迭代完毕，则为 `true`。这种情况下，`value` 是可选的，如果它依然存在，即为迭代结束之后的默认返回值。

**value**

> 迭代器返回的任何 `JavaScript` 值。`done` 为 true 时可省略。

`next()` 方法必须返回一个对象，该对象应当有两个属性： `done` 和 `value`，如果返回了一个非对象值（比如 `false` 或 `undefined`），则会抛出一个 `TypeError` 异常（"iterator.next() returned a non-object value"）。


## 注意：

> **备注**：不可能判断一个特定的对象是否实现了迭代器协议，然而，创造一个同时满足迭代器协议和可迭代协议的对象是很容易的（如下面的示例中所示）。
>
> 这样做允许一个迭代器能被各种需要可迭代对象的语法所使用。因此，很少会只实现迭代器协议，而不实现可迭代协议。

```js
var myIterator = {
    next: function() {
        // ...
    },
    [Symbol.iterator]: function() { return this }
}
```

## 使用迭代协议的例子

### String 是一个内置的可迭代对象：

```js
let someString = "hi";
typeof someString[Symbol.iterator];          // "function"
```

### String 的默认迭代器会依次返回该字符串的各码点（code point）：

```js
let iterator = someString[Symbol.iterator]();
iterator + "";                               // "[object String Iterator]"

iterator.next();                             // { value: "h", done: false }
iterator.next();                             // { value: "i", done: false }
iterator.next();                             // { value: undefined, done: true }
```

### 一些内置的语法结构——比如展开语法——其内部实现也使用了同样的迭代协议：

```js
[...someString]                              // ["h", "i"]
```

### 可以通过提供自己的 @@iterator 方法，重新定义迭代行为：

```js
// 必须构造 String 对象以避免字符串字面量 auto-boxing
var someString = new String("hi");
someString[Symbol.iterator] = function() {
  return { // 只返回一次元素，字符串 "bye"，的迭代器对象
    next: function() {
      if (this._first) {
        this._first = false;
        return { value: "bye", done: false };
      } else {
        return { done: true };
      }
    },
    _first: true
  };
};
```

### 注意重新定义的 @@iterator 方法是如何影响内置语法结构的行为的：

```js
[...someString];                              // ["bye"]
someString + "";                              // "hi"
```

## 可迭代对象示例

### 内置可迭代对象

目前所有的内置可迭代对象如下：`String`、`Array`、`TypedArray`、`Map` 和 `Set`，它们的原型对象都实现了 `@@iterator` 方法。

### 自定义可迭代对象

可以实现一个自己的可迭代对象，就像这样:

```js
var myIterable = {};
myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};
[...myIterable]; // [1, 2, 3]
```

### 接受可迭代对象的内置 API

很多 `API` 接受可迭代对象作为参数，例如：

* `new Map([iterable])`

* `new WeakMap([iterable])`

* `new Set([iterable])`

* `new WeakSet([iterable])`

```js
new Map([[1, 'a'], [2, 'b'], [3, 'c']]).get(2); // "b"

let myObj = {};

new WeakMap([
    [{}, 'a'],
    [myObj, 'b'],
    [{}, 'c']
]).get(myObj);             // "b"

new Set([1, 2, 3]).has(3); // true
new Set('123').has('2');   // true

new WeakSet(function* () {
    yield {}
    yield myObj
    yield {}
}()).has(myObj);           // true
```

另外，还有…

* `Promise.all(iterable)`

* `Promise.race(iterable)`

* `Array.from(iterable)`

### 需要可迭代对象的语法

一些语句和表达式需要可迭代对象，比如 `for...of` 循环、`展开语法`、`yield*`，和`解构赋值`。

```js
for(let value of ["a", "b", "c"]){
    console.log(value);
}
// "a"
// "b"
// "c"

[..."abc"]; // ["a", "b", "c"]

function* gen() {
  yield* ["a", "b", "c"];
}

gen().next(); // { value: "a", done: false }

[a, b, c] = new Set(["a", "b", "c"]);
a // "a"
```

### 格式不佳的可迭代对象

如果一个可迭代对象的 `@@iterator` 方法不能返回迭代器对象，那么可以认为它是一个格式不佳的（Non-well-formed）可迭代对象 。

使用这样的可迭代对象很可能会导致如下的运行时（runtime）异常，或者不可预料的表现：

```js
var nonWellFormedIterable = {}
nonWellFormedIterable[Symbol.iterator] = () => 1
[...nonWellFormedIterable] // TypeError: [] is not a function
```

## 迭代器示例

### 简单迭代器

```js
function makeIterator(array) {
    let nextIndex = 0;
    return {
       next: function () {
           return nextIndex < array.length ? {
               value: array[nextIndex++],
               done: false
           } : {
               done: true
           };
       }
    };
}

let it = makeIterator(['哟', '呀']);

console.log(it.next().value); // '哟'
console.log(it.next().value); // '呀'
console.log(it.next().done);  // true
```

### 无穷迭代器

```js
function idMaker() {
    let index = 0;
    return {
       next: function() {
           return {
               value: index++,
               done: false
           };
       }
    };
}

let it = idMaker();

console.log(it.next().value); // '0'
console.log(it.next().value); // '1'
console.log(it.next().value); // '2'
// ...
```

### 使用生成器

```js
function* makeSimpleGenerator(array) {
    let nextIndex = 0;

    while(nextIndex < array.length) {
        yield array[nextIndex++];
    }
}

let gen = makeSimpleGenerator(['哟', '呀']);

console.log(gen.next().value); // '哟'
console.log(gen.next().value); // '呀'
console.log(gen.next().done);  // true



function* idMaker() {
    let index = 0;
    while (true) {
        yield index++;
    }
}

let gen = idMaker();

console.log(gen.next().value); // '0'
console.log(gen.next().value); // '1'
console.log(gen.next().value); // '2'
// ...
```

### ES2015 类 class 中的迭代器

```js
class SimpleClass {
  constructor(data) {
    this.data = data
  }

  [Symbol.iterator]() {
    // Use a new index for each iterator. This makes multiple
    // iterations over the iterable safe for non-trivial cases,
    // such as use of break or nested looping over the same iterable.
    let index = 0;

    return {
      next: () => {
        if (index < this.data.length) {
          return {value: this.data[index++], done: false}
        } else {
          return {done: true}
        }
      }
    }
  }
}

const simple = new SimpleClass([1,2,3,4,5])

for (const val of simple) {
  console.log(val)   //'1' '2' '3' '4' '5'
}
```

## 生成器对象到底是一个迭代器，还是一个可迭代对象

### 生成器对象既是迭代器，也是可迭代对象:

```js
let aGeneratorObject = function* (){
    yield 1;
    yield 2;
    yield 3;
}();

typeof aGeneratorObject.next;
// 返回"function", 因为有一个next方法，所以这是一个迭代器

typeof aGeneratorObject[Symbol.iterator];
// 返回"function", 因为有一个@@iterator方法，所以这是一个可迭代对象

aGeneratorObject[Symbol.iterator]() === aGeneratorObject;
// 返回true, 因为@@iterator方法返回自身（即迭代器），所以这是一个格式良好的可迭代对象

[...aGeneratorObject];
// 返回[1, 2, 3]

console.log(Symbol.iterator in aGeneratorObject)
// 返回true, 因为@@iterator方法是aGeneratorObject的一个属性
```