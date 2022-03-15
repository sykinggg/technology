# js 异步历史

<img :src="$withBase('/assets/mozillaJs/1624843428(1).jpg')" alt="demo" />

如果一个函数无法立即返回 value，而是经过一段不可预测的行为时间之后（副作用），才能得到 value

## 问题产生
```js
function ordinary () {
  const i = value
  // ...
  return value
}

function sideEffect () {
  const value = 1
  setTimeout(() => {
    return value
  })
}

console.log(ordinary()) // 1
console.log(sideEffect()) // undefined
```

### 回调函数解决问题
```js
function sideEffect (callback) {
  const value = 1
  setTimeout(() => {
    // ...
    callback(value)
  })
}

sideEffect(value => {
  console.log(value) // 1
})
```

> callback 让拥有了获取不可预测行为结果的能力
> 这得益于 JavaScript 函数是一等公民

## 引入的新问题

但是 `callback` 带来了很严重的语法层面上的问题

### callback 地狱

```js
getData(function (a) {
  getMoreData(a, function (b) {
    getMoreData(b, function (c) {
      getMoreData(c, function (d) {
        // ...
      })
    })
  })
})
```

### 解决方案

```js
// 需要合理的封装和简化，这需要开发人员自身的水平和认知决定
function fn (a, cb) {
  getMoreData(a, function (b) {
    getMoreData(b, function (c) {
      getMoreData(c, function (d) {
        cb(d)
      })
    })
  })
}

// 通过层层封装，抽象出模块和通用的类来保证代码是浅层的
getData(function (a) {
  fn(a, function (d) {
    // ...
  })
})
```

## js 后续版本着手解决

> 社区陆续出来了 `promise` 和类 `promise` 的方案
> JQuery1.5 中就有了 `deferred` 的概念

### 通过 promise 的形式重写

```js
// 将 callback 变成了一种扁平化的结构
// 相对于 callback 是更加同步的思维将代码结构铺开来

getData()
  .then(getMoreData)
  .then(getMoreData)
  .then(getMoreData)
  .then(function (d) {
    // ...
  })
```

### deferred && promise

```js
// deferred
deferred.promise.then(v => console.log(v))
setTimeout(() => {
  deferred.resolve('tao')
}, 500)

// promise
const p = new Promise(resolve => {
  setTimeout(() => {
    resolve('tao')
  }, 500)
})
p.then(v => console.log(v))
```

### 为什么选择了 promise

```js
// 不会捕捉到错误
deferred.promise.catch(reason => console.log(reason))

setTimeout(() => {
  throw 'error'
})

// promise 由于是自执行，自动捕捉异常
const p = new Promise(() => {
  throw 'error'
})

p.catch(reason => console.log(reason))
```

> **promise** 首先应该是一个异步流程控制的解决方案，流程控制包括了正常的数据流和异常流程处理
> **deferred** 的方式存在一个致命的缺陷
> 就是 **promise** 链的第一个 `promise（deferred.promise）`的触发阶段抛出的异常是不交由 `promise` 自动处理的

### deferred

> `deferred` 对象其实就是一个发布/订阅模式

```js
function createDeferred () {
  let resolve, reject

  const promise = new Promise((_resolve, _reject) => {
    resolve = _resolve
    reject = _reject
  })
  return { promise, resolve, reject }
}
```

## 产生新的问题

### promise 链式调用的语法还是不够同步，怎么办

```js
const getData = () => {
  return new Promise(resolve => resolve(1))
}

const getMoreData = value => {
  return value + 1
}

getData()
  .then(getMoreData)
  .then(getMoreData)
  .then(getMoreData)
  .then(value => {
    console.log(value) // 4
  })
```

### 解决方案 generator

```js
const gen = (function * () {
const a = yield 1
const b = yield a + 1
const c = yield b + 1
const d = yield c + 1
return d
})()

const a = gen.next()
const b = gen.next(a.value)
const c = gen.next(b.value)
const d = gen.next(c.value)
console.log(d.value) // 4
```

### 引申的问题

> 但是需要手动调用 `gen.next()`

```js
// 封装基于generator 封装Promise
function co (fn, ...args) {
  return new Promise((resolve, reject) => {
    const gen = fn(...args)

    function next (result) { ... }

    function onFulfilled (res) { ... }

    function onRejected (err) { ... }

    onFulfilled()
  })
}

// 自动调用 gen.next()
// 然后调用 next() 将结果传入到 generator 对象内部
function onFulfilled (res) {
  let result

  try {
    result = gen.next(res)
    next(result)
  } catch (err) {
    return reject(err)
  }
}

// 发生错误调用 gen.throw()
// 这可以让 generator 函数内部的 try/catch 捕获到
function onRejected (res) {
  let result

  try {
    result = gen.throw(err)
    next(result)
  } catch (err) {
    return reject(err)
  }
}

// 接受到结果后再次调用 onFulfilled
// 继续执行 generator 内部的代码
function next (result) {
  let value = result.value
  if (result.done) return resolve(value)

  // 如果是 generator 函数，等待整个 generator 函数执行完毕
  if (
      value && value.constructor && 
      value.constructor.name === 'GeneratorFunction'
  ) {
    value = co(value)
  }

  // 转为 promise
  Promise.resolve(value).then(onFulfilled, onRejected)
}
```

### 解决方案描述

> 在这个名叫 `co` 的自执行函数里面
> `onFulfilled` 调用 `next`
> `next` 调用 `onFulfilled`
> 这样就形成一个自执行器，只有当代码全部执行完毕后才会终止

### demo 1

> 流程处理

```js
const ret = co(function * () {
  const a = yield 1
  const b = yield a + 1
  const c = yield b + 1
  const d = yield c + 1
  return d
})
ret.then(v => console.log(v)) // 4
```

### demo 2

> 嵌套Promise 进行流程处理

```js
const fn = v => {
  return new Promise(resolve => {
    setTimeout(() => resolve(v), 200)
  })
}

const ret = co(function * () {
  const a = yield fn(1)
  console.log(a) // 1

  const b = yield fn(a + 1)
  console.log(b) // 2

  const c = yield fn(b + 1)
  console.log(c) // 3

  const d = yield fn(c + 1)
  console.log(d) // 4

  return d
})
ret.then(v => console.log(v)) // 4
```

### demo 3 错误处理

```js
// 错误都能被捕捉
const ret = co(function * () {
  try {
    throw 'errorOne'
  } catch (err) {
    console.log(err) // errorOne
    throw 'errorTwo'
  }
})

ret.catch(err => console.log(err)) // errorTwo
```

## es2017 yyds

> `ES2017` 标准引入了 `async` 函数，使得异步操作变得更加方便
> `async` 函数是什么？它就是 `Generator` 函数的语法糖

```js
// 将会打印 'into'
// 这表明 async 函数会在 promise 后面添加 p.then() 的行为
// 这无关 promise 是哪一种实现（theable 也是可以的）

const p = {
  then (resolve, reject) {
    console.log('into')
    setTimeout(() => resolve('tao'), 1000)
    // reject('err')
  }
}

(async function () {
  try {
    const v = await p
    console.log(v)
  } catch (err) {
    console.log(err)
  }
})()
```

### await 使用

```js
xhr.get('xx', data, res => {
  console.log(res)
})

const res = await xhr.get('xx', data)
console.log(res)
```

## CO

> co 这个库是 TJ 大神为 koa 框架编写的一个基于 generator + promise 处理异步行为的库。这种结合带来了强大的异步交互能力，可以显着改进在 JavaScript 中编写异步代码的语言级模型

### 解读 next 函数

```js
function next(ret) {
  if (ret.done) return resolve(ret.value)
  var value = toPromise.call(ctx, ret.value)
  if (value && isPromise(value)) return value.then(onFulfilled, onRejected)

  return onRejected(new TypeError(
    'You may only yield a function, promise, generator, array, or object, '
    + 'but the following object was passed: "' + String(ret.value) + '"')
  )
}
```

```js
function toPromise(obj) {
  if (!obj) return obj
  if (isPromise(obj)) return obj
  if (isGeneratorFunction(obj) || isGenerator(obj)) return co.call(this, obj)
  if ('function' == typeof obj) return thunkToPromise.call(this, obj)
  if (Array.isArray(obj)) return arrayToPromise.call(this, obj)
  if (isObject(obj)) return objectToPromise.call(this, obj)

  return obj
}
```

通过 `next` 和 `toPromsie` 函数源码可以知道，co 只支持以下几种数据类型：


* array

* object

* promise

* generator

* function（thunk function 不做讨论）

```js
// 数组种的所有 item 都做了 promise 的过滤
function arrayToPromise (obj) {
  return Promise.all(obj.map(toPromise, this))
}
```

```js
function objectToPromise(obj) {
  var results = new obj.constructor()
  var keys = Object.keys(obj)
  var promises = []

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i]
    var promise = toPromise.call(this, obj[key])

    // 这里将 object 中是 promise 的 item 筛选出来，通过 promise.all 来处理
    if (promise && isPromise(promise)) defer(promise, key)
    else results[key] = obj[key]
  }

  return Promise.all(promises).then(function () {
    return results
  })

  function defer(promise, key) {
    // js 引擎喜欢稳定的对象结构，所有预先定义（也告诉少用 delete 语句）
    results[key] = undefined
    promises.push(promise.then(function (res) {
      results[key] = res
    }))
  }
}
```

```js
objectToPromise({
  a: 1,
  b: [2, 3],
  c: new Promise(resolve => {
    setTimeout(() => resolve(1), 500)
  })
}).then(res => {
  console.log(res) // { a: 1, b: [2, 3], c: 1 }
})
```

```js
// 判断是否是 promise
function isPromise (obj) {
  return 'function' == typeof obj.then
}
```

### Theable 和 鸭子类型

> 如果一个对象 x 有一个 `then` 方法，那么 x 就是一个 `thenable`
> then 会被立即调用，传入参数 resolve 和 reject，并绑定 x 作为 this
> 而 `thenable` 就是 `promise` 的 鸭子类型

```js
Promise.resolve({
  then (resolve, reject) {
    resolve(1)
  }
})
.then(res => {
  console.log(res) // 1
})
```

> 不需要判断是不是一个 `promise`，只需要判断像不像一个 `promise`
> 无论是你自己写 `promise`，第三方库的 `promise`，还是 js 引擎实现的 `promise`。这带来了良好的兼容性

### CO.Warp

```js
// 创建一个高阶函数
co.wrap = function (fn) {
  createPromise.__generatorFunction__ = fn // 单元测试用
  return createPromise
  function createPromise() {
    return co.call(this, fn.apply(this, arguments))
  }
}
```

### demo

```js
const fn = co.wrap(function * () {})
const gen = fn()
```


* co 在整个 Js 的异步发展历史中处于一个很关键的节点

* co 将 promise 和 generator 函数结合在一起，给了 Js 更加强大的生命力

* 到最后的发展阶段，有了控制异步行为更好的手段，这让能更好的结合函数式编程

* Js 的异步与各个平台的 event loop 息息相关，不同平台的行为可能不一致（后话）

* Js 的异步发展是 ES 规范中很重要的一部分，但是 es6 的发展也包含了其他，例如：

    * 更好的数据结构（map，set，weakmap，weakset）

    * 更好的遍历手段（for/of + iterator）

    * 更好的数据保护机制（setter/getter -> proxy/reflect）

    * 更好的 TypeArray 支持（音视频等）

    * 当然 es 也在继续发展，未来还会有更多的新东西

### bug

```vue
<template>
  <div @click='getMessage'></div>
</template>

<script>
  export default {
    data: () => ({
      message: '',
    }),

    methods: {
      // 问题在于异步请求是副作用，无法预测这个结果在什么时间到来
      // 导致无法保证程序的顺序。同样也很难复现，同样的输入可能导致不同的输出
      async getMessage () {
        this.message = await fetch('xx')
      }
    }
  }
</script>
```

### 解决方案

```html
<template>
  <div @click='getMessage'></div>
</template>

<script>
  export default {
    data: () => ({
      message: '',
      requestId: 0,
    }),

    methods: {
      // 利用闭包拒绝掉已经丢弃的副作用行为
      async getMessage () {
        const id = ++this.requestId
        const res = await fetch('xx')

        if (id !== this.requestId) return
        this.message = res
      }
    }
  }
</script>
```
