# async/await原理

## async/await用法

### 使用场景

`async/await`的用处就是：**用同步方式，执行异步操作**，举个例子

比如我现在有一个需求：先请求完`接口1`，再去请求`接口2`

```js
function request(num) { // 模拟接口请求
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(num * 2)
    }, 1000)
  })
}

request(1).then(res1 => {
  console.log(res1) // 1秒后 输出 2

  request(2).then(res2 => {
    console.log(res2) // 2秒后 输出 4
  })
})
```

或者我现在又有一个需求：先请求完`接口1`，再拿`接口1`返回的数据，去当做`接口2`的请求参数

```js
request(5).then(res1 => {
  console.log(res1) // 1秒后 输出 10

  request(res1).then(res2 => {
    console.log(res2) // 2秒后 输出 20
  })
})
```

其实这么做是没问题的，但是如果嵌套的多了，不免有点不雅观，这个时候就可以用`async/await`来解决了

```js
async function fn () {
  const res1 = await request(5)
  const res2 = await request(res1)
  console.log(res2) // 2秒后输出 20
}
fn()
```

### 使用方法

需求一：

```js
async function fn () {
  await request(1)
  await request(2)
  // 2秒后执行完
}
fn()
```

需求二：

```js
async function fn () {
  const res1 = await request(5)
  const res2 = await request(res1)
  console.log(res2) // 2秒后输出 20
}
fn()
```

<img :src="$withBase('/assets/jsInterview/c63ae650b71144e2a1ba8dc2bdaceed3_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

在a`sync`函数中，`await`规定了异步操作只能一个一个排队执行，从而达到**用同步方式，执行异步操作的效果**，这里注意了：**await只能在async函数中使用，不然会报错**

刚刚上面的例子`await`后面都是跟着异步操作`Promise`，那如果不接`Promise`会怎么样呢？

```js
function request(num) { // 去掉Promise
  setTimeout(() => {
    console.log(num * 2)
  }, 1000)
}

async function fn() {
  await request(1) // 2
  await request(2) // 4
  // 1秒后执行完  同时输出
}
fn()
```

`async`是一个位于function之前的前缀，只有`async函数`中，才能使用`await`。

```js
async function fn () {}
console.log(fn) // [AsyncFunction: fn]
console.log(fn()) // Promise {<fulfilled>: undefined}
```

`async函数`执行完会自动返回一个状态为`fulfilled`的Promise，也就是成功状态，但是值却是undefined，那要怎么才能使值不是undefined呢？很简单，函数有`return`返回值就行了

```js
async function fn (num) {
  return num
}
console.log(fn) // [AsyncFunction: fn]
console.log(fn(10)) // Promise {<fulfilled>: 10}
fn(10).then(res => console.log(res)) // 10
```

### 总结

::: tip

* await只能在async函数中使用，不然会报错

* async函数返回的是一个状态为fuifilled的Promise对象，有无值看有无return值

* await后面只有接了Promise才能实现排队效果

* async/await作用是**用同步方式，执行异步操作**
:::

## generator函数

### 基本用法

`generator函数`跟普通函数在写法上的区别就是，多了一个星号`*`，并且只有在`generator函数`中才能使用`yield`，他相当于`generator函数`执行的`中途暂停点`，暂停后继续走就得使用到`next方法`，`next方法`执行后会返回一个对象，对象中有`value` 和 `done`两个属性

* `value`：暂停点后面接的值，也就是`yield`后面接的值

* `done`：是否`generator`函数已走完，没走完为`false`，走完为`true`

```js
function* gen() {
  yield 1
  yield 2
  yield 3
}
const g = gen()
console.log(g.next()) // { value: 1, done: false }
console.log(g.next()) // { value: 2, done: false }
console.log(g.next()) // { value: 3, done: false }
console.log(g.next()) // { value: undefined, done: true }
```

可以看到最后一个是`undefined`，这取决于你`generator`函数有无返回值

```js
function* gen() {
  yield 1
  yield 2
  yield 3
  return 4
}
const g = gen()
console.log(g.next()) // { value: 1, done: false }
console.log(g.next()) // { value: 2, done: false }
console.log(g.next()) // { value: 3, done: false }
console.log(g.next()) // { value: 4, done: true }
```

<img :src="$withBase('/assets/jsInterview/d56e8dea0f204cc18a2d86d1ffcf51ef_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

### yield && 函数

yield后面接函数的话，到了对应暂停点yield，会马上执行此函数，并且该函数的执行返回值，会被当做此暂停点对象的`value`

```js
function fn(num) {
  console.log(num)
  return num
}
function* gen() {
  yield fn(1)
  yield fn(2)
  return 3
}
const g = gen()
console.log(g.next()) 
// 1
// { value: 1, done: false }
console.log(g.next())
// 2
//  { value: 2, done: false }
console.log(g.next()) 
// { value: 3, done: true }
```

### yield && Promise

前面说了，函数执行返回值会当做暂停点对象的value值，那么下面例子就可以理解了，前两个的value都是pending状态的Promise对象

```js
function fn(num) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(num)
    }, 1000)
  })
}
function* gen() {
  yield fn(1)
  yield fn(2)
  return 3
}
const g = gen()
console.log(g.next()) // { value: Promise { <pending> }, done: false }
console.log(g.next()) // { value: Promise { <pending> }, done: false }
console.log(g.next()) // { value: 3, done: true }
```

<img :src="$withBase('/assets/jsInterview/39a4a3ec5ecc4e9e88a9515be0bc7bb1_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

其实我们想要的结果是，两个Promise的结果`1 和 2`，那怎么做呢？很简单，使用Promise的then方法就行了

```js
const g = gen()
const next1 = g.next()
next1.value.then(res1 => {
  console.log(next1) // 1秒后输出 { value: Promise { 1 }, done: false }
  console.log(res1) // 1秒后输出 1

  const next2 = g.next()
  next2.value.then(res2 => {
    console.log(next2) // 2秒后输出 { value: Promise { 2 }, done: false }
    console.log(res2) // 2秒后输出 2
    console.log(g.next()) // 2秒后输出 { value: 3, done: true }
  })
})
```

<img :src="$withBase('/assets/jsInterview/56134335085443e9a86da9c3a9c139b6_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

### next函数传参

generator函数可以用`next方法`来传参，并且可以通过`yield`来接收这个参数，注意两点

* 第一次next传参是没用的，只有从第二次开始next传参才有用

* next传值时，要记住顺序是，先右边yield，后左边接收参数

```js
function* gen() {
  const num1 = yield 1
  console.log(num1)
  const num2 = yield 2
  console.log(num2)
  return 3
}
const g = gen()
console.log(g.next()) // { value: 1, done: false }
console.log(g.next(11111))
// 11111
//  { value: 2, done: false }
console.log(g.next(22222)) 
// 22222
// { value: 3, done: true }
```

<img :src="$withBase('/assets/jsInterview/c49ec193e19249d2876fba7909f89acc_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

### Promise+next传参

前面讲了

* `yield`后面接`Promise`

* `next`函数传参

那这两个组合起来会是什么样呢？

```js
function fn(nums) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(nums * 2)
    }, 1000)
  })
}
function* gen() {
  const num1 = yield fn(1)
  const num2 = yield fn(num1)
  const num3 = yield fn(num2)
  return num3
}
const g = gen()
const next1 = g.next()
next1.value.then(res1 => {
  console.log(next1) // 1秒后同时输出 { value: Promise { 2 }, done: false }
  console.log(res1) // 1秒后同时输出 2

  const next2 = g.next(res1) // 传入上次的res1
  next2.value.then(res2 => {
    console.log(next2) // 2秒后同时输出 { value: Promise { 4 }, done: false }
    console.log(res2) // 2秒后同时输出 4

    const next3 = g.next(res2) // 传入上次的res2
    next3.value.then(res3 => {
      console.log(next3) // 3秒后同时输出 { value: Promise { 8 }, done: false }
      console.log(res3) // 3秒后同时输出 8

       // 传入上次的res3
      console.log(g.next(res3)) // 3秒后同时输出 { value: 8, done: true }
    })
  })
})
```

<img :src="$withBase('/assets/jsInterview/8db7c759079a404ebab41b9aacc90c77_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

## 实现async/await

其实上方的`generator`函数的`Promise+next传参`，就很像`async/await`了，区别在于

* gen函数执行返回值不是Promise，asyncFn执行返回值是Promise

* gen函数需要执行相应的操作，才能等同于asyncFn的排队效果

* gen函数执行的操作是不完善的，因为并不确定有几个yield，不确定会嵌套几次

<img :src="$withBase('/assets/jsInterview/2465072c79684ecabd9b0377e22b05f8_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

`高阶函数`的特点是：**参数是函数，返回值也是函数**。下方的`highorderFn`就是一个`高阶函数`

```js
function highorderFn(函数) {
  // 一系列处理
  return 函数
}
```

我们可以封装一个高阶函数，接收一个`generator`函数，并经过一系列处理，返回一个具有`async`函数功能的函数

```js
function generatorToAsync(generatorFn) {
  // 经过一系列处理 
  return 具有async函数功能的函数
}
```

### 返回值Promise

`async`函数的执行返回值是一个`Promise`

```js
function* gen() {

}

const asyncFn = generatorToAsync(gen)

console.log(asyncFn()) // 期望这里输出 Promise
```

其实很简单，`generatorToAsync函数`里做一下处理就行了

```js
function* gen() {

}
function generatorToAsync (generatorFn) {
  return function () {
    return new Promise((resolve, reject) => {

    })
  }
}

const asyncFn = generatorToAsync(gen)

console.log(asyncFn()) // Promise
```

### 加入操作

加入`generatorToAsync`函数中

```js
function fn(nums) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(nums * 2)
    }, 1000)
  })
}
function* gen() {
  const num1 = yield fn(1)
  const num2 = yield fn(num1)
  const num3 = yield fn(num2)
  return num3
}
function generatorToAsync(generatorFn) {
  return function () {
    return new Promise((resolve, reject) => {
      const g = generatorFn()
      const next1 = g.next()
      next1.value.then(res1 => {

        const next2 = g.next(res1) // 传入上次的res1
        next2.value.then(res2 => {

          const next3 = g.next(res2) // 传入上次的res2
          next3.value.then(res3 => {

            // 传入上次的res3
            resolve(g.next(res3).value)
          })
        })
      })
    })
  }
}

const asyncFn = generatorToAsync(gen)

asyncFn().then(res => console.log(res)) // 3秒后输出 8
```

已经实现了以下的`async/await`的结果了

```js
async function asyncFn() {
  const num1 = await fn(1)
  const num2 = await fn(num1)
  const num3 = await fn(num2)
  return num3
}
asyncFn().then(res => console.log(res)) // 3秒后输出 8
```

### 完善代码

```js
function generatorToAsync(generatorFn) {
  return function() {
    const gen = generatorFn.apply(this, arguments) // gen有可能传参

    // 返回一个Promise
    return new Promise((resolve, reject) => {

      function go(key, arg) {
        let res
        try {
          res = gen[key](arg) // 这里有可能会执行返回reject状态的Promise
        } catch (error) {
          return reject(error) // 报错的话会走catch，直接reject
        }

        // 解构获得value和done
        const { value, done } = res
        if (done) {
          // 如果done为true，说明走完了，进行resolve(value)
          return resolve(value)
        } else {
          // 如果done为false，说明没走完，还得继续走

          // value有可能是：常量，Promise，Promise有可能是成功或者失败
          return Promise.resolve(value).then(val => go('next', val), err => go('throw', err))
        }
      }

      go("next") // 第一次执行
    })
  }
}

const asyncFn = generatorToAsync(gen)

asyncFn().then(res => console.log(res))
```

### 示例

`async/await`版本

```js
async function asyncFn() {
  const num1 = await fn(1)
  console.log(num1) // 2
  const num2 = await fn(num1)
  console.log(num2) // 4
  const num3 = await fn(num2)
  console.log(num3) // 8
  return num3
}
const asyncRes = asyncFn()
console.log(asyncRes) // Promise
asyncRes.then(res => console.log(res)) // 8
```

使用`generatorToAsync函数`的版本

```js
function* gen() {
  const num1 = yield fn(1)
  console.log(num1) // 2
  const num2 = yield fn(num1)
  console.log(num2) // 4
  const num3 = yield fn(num2)
  console.log(num3) // 8
  return num3
}

const genToAsync = generatorToAsync(gen)
const asyncRes = genToAsync()
console.log(asyncRes) // Promise
asyncRes.then(res => console.log(res)) // 8
```

