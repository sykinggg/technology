# Generator

**生成器**对象是由一个 generator function 返回的,并且它符合可迭代协议和迭代器协议。

## 语法

```js
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

let g = gen();
// "Generator { }"
```

## 方法

### Generator.prototype.next()
返回一个由 `yield`表达式生成的值。

### Generator.prototype.return()
返回给定的值并结束生成器。

### Generator.prototype.throw()
向生成器抛出一个错误。

## 示例

### 一个无限迭代器

```js
function* idMaker(){
    let index = 0;
    while(true)
        yield index++;
}

let gen = idMaker(); // "Generator { }"

console.log(gen.next().value);
// 0
console.log(gen.next().value);
// 1
console.log(gen.next().value);
// 2
// ...
```

## 传统的生成器对象

Firefox (SpiderMonkey) 在 `JavaScript 1.7 `中也实现了一个较早版本的生成器，其中函数声明中的星号（*）不是必需的 (只需在函数体中使用`yield` 关键字)。但是，旧式生成器已弃用。不要使用它们;他们将被删除

## 传统的生成器方法

### Generator.prototype.next() 不建议使用

  返回 `yield` 表达式产生的值. 与ES2015 生成器对象的`next()`方法对应.

### Generator.prototype.close() 不建议使用

  关闭生成器，因此执行该函数后调用`next()`函数时将会抛出 `StopIteration` 错误. 与ES2015 生成器对象的`return()`方法对应.

### Generator.prototype.send() 不建议使用

  用于将值发送到生成器。 该值由 `yield` 表达式返回, 并且返回下一个 `yield` 表达式产生的值. `send(x)` 对应于ES2015生成器对象中的 `next(x)`

### Generator.prototype.throw() 不建议使用

  向生成器抛出错误. 与ES2015 生成器对象的`throw()`方法对应.

## 旧生成器对象示例

```js
function fibonacci() {
  var a = yield 1;
  yield a * 2;
}

var it = fibonacci();
console.log(it);          // "Generator {  }"
console.log(it.next());   // 1
console.log(it.send(10)); // 20
console.log(it.close());  // undefined
console.log(it.next());   // throws StopIteration (as the generator is now closed)
```

## 浏览器兼容性

<img :src="$withBase('/assets/mozillaJs/1624582200(1).jpg')" alt="demo" />