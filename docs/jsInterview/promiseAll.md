# 实现 Promise

## Promise.all

`Promise.all` 是 es6 `Promise` 对象上的一个方法，它的功能就是将多个`Promise`实例包装成一个`promise`实例

> Promise.all() 方法接收一个 promise 的 iterable 类型（注：Array，Map，Set都属于ES6的iterable类型）的输入，并且只返回一个[Promise](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)实例， 那个输入的所有 promise 的 resolve 回调的结果是一个数组。这个[Promise](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)的 resolve 回调执行是在所有输入的 promise 的 resolve 回调都结束，或者输入的 iterable 里没有 promise 了的时候。它的 reject 回调执行是，只要任何一个输入的 promise 的 reject 回调执行或者输入不合法的 promise 就会立即抛出错误，并且reject的是第一个抛出的错误信息。

### 关键点

* `Promise.all` 的返回值是一个新的 `Promise` 实例。

* `Promise.all` 接受一个可遍历的数据容器，容器中每个元素都应是 `Promise` 实例。咱就是说，假设这个容器就是数组。

* 数组中每个 `Promise` 实例都成功时（由`pendding`状态转化为`fulfilled`状态），`Promise.all` 才成功。这些 `Promise` 实例所有的 `resolve` 结果会按照原来的顺序集合在一个数组中作为 `Promise.all` 的 `resolve` 的结果。

* 数组中只要有一个 `Promise` 实例失败（由`pendding`状态转化为`rejected`状态），`Promise.all` 就失败。`Promise.all` 的 `.catch()` 会捕获到这个 `reject`。

### 原生 Promise.all 测试

```js
const p1 = Promise.resolve('p1')

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p2 延时一秒')
  }, 1000)
})

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p3 延时两秒')
  }, 2000)
})

const p4 = Promise.reject('p4 rejected')

const p5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('p5 rejected 延时1.5秒')
  }, 1500)
})

// 所有Promise实例都成功
Promise.all([p1, p2, p3])
  .then(res => {
    console.log(res)
  })
  .catch(err => console.log(err)) // 2秒后打印 [ 'p1', 'p2 延时一秒', 'p3 延时两秒' ]
  
// 一个Promise实例失败
Promise.all([p1, p2, p4])
  .then(res => {
    console.log(res)
  })
  .catch(err => console.log(err)) // p4 rejected
  
// 一个延时失败的Promise
 Promise.all([p1, p2, p5])
  .then(res => {
    console.log(res)
  })
  .catch(err => console.log(err)) // 1.5秒后打印 p5 rejected
  
// 两个Promise实例失败
Promise.all([p1, p4, p5])
  .then(res => {
    console.log(res)
  })
  .catch(err => console.log(err)) // p4 rejected
```

**注意**

上面 `p4` 和 `p5` 在未传入 `Promise.all` 时需要注释掉，因为一个调用了 `reject` 的 `Promise` 实例如果没有使用 `.catch()` 方法去捕获错误会报错。但如果 `Promise` 实例定义了自己的 `.catch`，就不会触发 `Promise.all` 的 `.catch()` 方法。

### 手动实现Promise.all

* `Promise.all` 接受一个数组，返回值是一个新的 `Promise` 实例

```js
Promise.MyAll = function (promises) {
  return new Promise((resolve, reject) => {

  })
}
```

* 数组中所有 `Promise` 实例都成功，`Promise.all` 才成功。不难想到，咱得需要一个数组来收集这些 `Promise` 实例的 `resolve` 结果。数组里面有元素不是 `Promise` —— 那就得用 `Promise.resolve()` 把它办了。这里还有一个问题，`Promise` 实例是不能直接调用 `resolve` 方法的。注意要保持结果的顺序。

```js
Promise.MyAll = function (promises) {
  let arr = []
  return new Promise((resolve, reject) => {
    promises.forEach((item, i) => {
      Promise.resolve(item).then(res => {
        arr[i] = res
      })
    }) 
  })
}
```

* 将收集到的结果（数组`arr`）作为参数传给外层的 `resolve` 方法。这里咱们肯定是有一个判断条件的，如何判断所有 `Promise` 实例都成功了？

```js
if (arr.length === promises.length) resolve(arr)
```

* `Promise` 使用来干嘛的 —— 处理异步任务。对呀，异步任务很多都需要花时间呀，如果这些 `Promise` 中最后一个先完成呢？那 `arr` 数组不就只有最后一项了，前面的所有项都是 `empty`。所以这里咱们应该创建一个计数器，每有一个 `Promise` 实例成功，计数器加一：

```js
Promise.MyAll = function (promises) {
  let arr = [],
    count = 0
  return new Promise((resolve, reject) => {
    promises.forEach((item, i) => {
      Promise.resolve(item).then(res => {
        arr[i] = res
        count += 1
        if (count === promises.length) resolve(arr)
      })
    })
  })
}
```

### 处理失败
  
* 第一种是用 `.catch()` 方法捕获失败：

```js
Promise.MyAll = function (promises) {
  let arr = [],
    count = 0
  return new Promise((resolve, reject) => {
    promises.forEach((item, i) => {
      Promise.resolve(item).then(res => {
        arr[i] = res
        count += 1
        if (count === promises.length) resolve(arr)
      }).catch(reject)
    })
  })
}
```

* 第二种写法就是给 `.then()` 方法传入第二个参数，这个函数是处理错误的回调函数：

```js
Promise.MyAll = function (promises) {
  let arr = [],
    count = 0
  return new Promise((resolve, reject) => {
    promises.forEach((item, i) => {
      Promise.resolve(item).then(res => {
        arr[i] = res
        count += 1
        if (count === promises.length) resolve(arr)
      }, reject)
    })
  })
}
```

### 测试案例

```js
const p1 = Promise.resolve('p1')
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p2 延时一秒')
  }, 1000)
})
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p3 延时两秒')
  }, 2000)
})

const p4 = Promise.reject('p4 rejected')

const p5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('p5 rejected 延时1.5秒')
  }, 1500)
})

// 所有 Promsie 都成功
Promise.MyAll([p1, p2, p3])
  .then(res => console.log(res))
  .catch(err => console.log(err)) // 2秒后打印 [ 'p1', 'p2 延时一秒', 'p3 延时两秒' ]
  
// 一个 Promise 失败
Promise.MyAll([p1, p2, p4])
  .then(res => console.log(res))
  .catch(err => console.log(err)) // p4 rejected
  
// 一个延时失败的 Promise
Promise.MyAll([p1, p2, p5])
  .then(res => console.log(res))
  .catch(err => console.log(err)) // 1.5秒后打印 p5 rejected 延时1.5秒
 
// 两个失败的 Promise
Promise.MyAll([p1, p4, p5])
  .then(res => console.log(res))
  .catch(err => console.log(err)) // p4 rejected
```

## Promise.race

`Promise.race` 从字面意思理解就是赛跑，以状态变化最快的那个 `Promise` 实例为准，最快的 `Promise` 成功 `Promise.race` 就成功，最快的 `Promise` 失败 `Promise.race` 就失败。

### 原生 Promise.race 测试

```js
const p1 = Promise.resolve('p1')
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p2 延时一秒')
  }, 1000)
})
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p3 延时两秒')
  }, 2000)
})

const p4 = Promise.reject('p4 rejected')

const p5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('p5 rejected 延时1秒')
  }, 1500)
})

// p1无延时，p2延时1s，p3延时2s
Promise.race([p1, p2, p3])
  .then(res => console.log(res))
  .catch(err => console.log(err)) // p1

// p4无延时reject
Promise.race([p4, p2, p3])
  .then(res => console.log(res))
  .catch(err => console.log(err)) // p4 rejected
  
// p5 延时1.5秒reject，p2延时1s
Promise.race([p5, p2, p3])
  .then(res => console.log(res))
  .catch(err => console.log(err)) // 1s后打印: p2 延时一秒
```

### 手写Promise.race

整体流程与 `Promise` 差不多，只是对数组中的 `Promise` 实例处理的逻辑不一样，这里我们需要将最快改变状态的 `Promise` 结果作为 `Promise.race` 的结果，相对来说就比较简单了，代码如下：

```js
Promise.MyRace = function (promises) {
  return new Promise((resolve, reject) => {
    // 这里不需要使用索引，只要能循环出每一项就行
    for (const item of promises) {
      Promise.resolve(item).then(resolve, reject)
    }
  })
}
```

### 测试案例

```js
// p1无延时，p2延时1s，p3延时2s
Promise.MyRace([p1, p2, p3])
  .then(res => console.log(res))
  .catch(err => console.log(err)) // p1

// p4无延时reject
Promise.MyRace([p4, p2, p3])
  .then(res => console.log(res))
  .catch(err => console.log(err)) // p4 rejected
  
// p5 延时1.5秒reject，p2延时1s
Promise.MyRace([p5, p2, p3])
  .then(res => console.log(res))
  .catch(err => console.log(err)) // 1s后打印: p2 延时一秒
```

## Promise.any

> `Promise.any` 与 `Promise.all` 可以看做是相反的。`Promise.any` 中只要有一个 `Promise` 实例成功就成功，只有当所有的 `Promise` 实例失败时 `Promise.any` 才失败，此时`Promise.any` 会把所有的失败/错误集合在一起，返回一个失败的 `promise` 和[AggregateError](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/AggregateError)类型的实例。MDN 上说这个方法还处于试验阶段，如果 `node` 或者浏览器版本过低可能无法使用。


### 原生 Promise.any 测试

```js
const p1 = Promise.resolve('p1')
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p2 延时一秒')
  }, 1000)
})
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p3 延时两秒')
  }, 2000)
})

const p4 = Promise.reject('p4 rejected')

const p5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('p5 rejected 延时1.5秒')
  }, 1500)
})

// 所有 Promise 都成功
Promise.any([p1, p2, p3])
  .then(res => console.log(res))
  .catch(err => console.log(err)) // p1
  
// 两个 Promise 成功
Promise.any([p1, p2, p4])
  .then(res => console.log(res))
  .catch(err => console.log(err)) // p1

// 只有一个延时成功的 Promise
Promise.any([p2, p4, p5])
  .then(res => console.log(res))
  .catch(err => console.log(err)) // p2 延时1秒

// 所有 Promise 都失败
Promise.any([p4, p5])
  .then(res => console.log(res))
  .catch(err => console.log(err)) // AggregateError: All promises were rejected
```

可以看出，如果 `Promise.any` 中有多个成功的 `Promise` 实例，则以最快成功的那个结果作为自身 `resolve` 的结果。

### 手写Promise.any

* `Promise.any` 的整体结构

```js
Promise.MyAny = function (promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((item, i) => {

    })
  })
}
```

* 这里跟`Promise.all` 的逻辑是反的，咱们需要收集 `reject` 的 `Promise`，也需要一个数组和计数器，用计数器判断是否所有的 `Promise` 实例都失败。另外在收集失败的 `Promise` 结果时咱需要打上一个失败的标记方便分析结果。

```js
Promise.MyAny = function (promises) {
  let arr = [],
    count = 0
  return new Promise((resolve, reject) => {
    promises.forEach((item, i) => {
      Promise.resolve(item).then(resolve, err => {
        arr[i] = { status: 'rejected', val: err }
        count += 1
        if (count === promises.length) reject(new Error('没有promise成功'))
      })
    })
  })
}
```

### 测试案例

```js
// 所有 Promise 都成功
Promise.MyAny([p1, p2, p3])
  .then(res => console.log(res))
  .catch(err => console.log(err)) // p1
  
// 两个 Promise 成功
Promise.MyAny([p1, p2, p4])
  .then(res => console.log(res))
  .catch(err => console.log(err)) // p1

// 只有一个延时成功的 Promise
Promise.MyAny([p2, p4, p5])
  .then(res => console.log(res))
  .catch(err => console.log(err)) // p2 延时1秒

// 所有 Promise 都失败
Promise.MyAny([p4, p5])
  .then(res => console.log(res))
  .catch(err => console.log(err)) // 没有promise成功
```

## Promise.allSettled

> 一组 `Promise` 实例无论成功与否，都等它们异步操作结束了在继续执行下一步操作

### 原生 Promise.allSettled 测试

```js
const p1 = Promise.resolve('p1')
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p2 延时一秒')
  }, 1000)
})
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p3 延时两秒')
  }, 2000)
})

const p4 = Promise.reject('p4 rejected')

const p5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('p5 rejected 延时1.5秒')
  }, 1500)
})

// 所有 Promise 实例都成功
Promise.allSettled([p1, p2, p3])
  .then(res => console.log(res))
  .catch(err => console.log(err)) 
// [
//   { status: 'fulfilled', value: 'p1' },
//   { status: 'fulfilled', value: 'p2 延时一秒' },
//   { status: 'fulfilled', value: 'p3 延时两秒' }
// ]

// 有一个 Promise 失败
Promise.allSettled([p1, p2, p4])
  .then(res => console.log(res))
  .catch(err => console.log(err))
// [
//   { status: 'fulfilled', value: 'p1' },
//   { status: 'fulfilled', value: 'p2 延时一秒' },
//   { status: 'rejected' , value: 'p4 rejected' }
// ]

// 所有 Promise 都失败
Promise.allSettled([p4, p5])
  .then(res => console.log(res))
  .catch(err => console.log(err))
// [
//   { status: 'rejected', reason: 'p4 rejected' },
//   { status: 'rejected', reason: 'p5 rejected 延时1.5秒' }
// ]
```

> 可以看到，与 `Promise.any` 类似，`Promise.allSettled` 也给所有收集到的结果打上了标记。而且 `Promise.allSettled` 是不会变成 `rejected` 状态的，不管一组 `Promise` 实例的各自结果如何，`Promise.allSettled` 都会转变为 `fulfilled` 状态。

### 手写 Promise.allSettled

得用个数组把所有的 `Promise` 实例的结果（无论成功与否）都收集起来，判断收集完了（所有 `Promise` 实例状态都改变了），咱就将这个收集到的结果 `resolve` 掉。收集成功 `Promise` 结果的逻辑咱们在 `Promise.all` 中实现过，收集失败 `Promise` 结果咱们在 `Promise.any` 中处理过。

```js
Promise.MyAllSettled = function (promises) {
  let arr = [],
    count = 0
  return new Promise((resolve, reject) => {
    promises.forEach((item, i) => {
      Promise.resolve(item).then(res => {
        arr[i] = { status: 'fulfilled', val: res }
        count += 1
        if (count === promises.length) resolve(arr)
      }, (err) => {
        arr[i] = { status: 'rejected', val: err }
        count += 1
        if (count === promises.length) resolve(arr)
      })
    })
  })
}
```

### 封装一下

```js
Promise.MyAllSettled = function (promises) {
  let arr = [],
    count = 0
  return new Promise((resolve, reject) => {
    const processResult = (res, index, status) => {
      arr[index] = { status: status, val: res }
      count += 1
      if (count === promises.length) resolve(arr)
    }

    promises.forEach((item, i) => {
      Promise.resolve(item).then(res => {
        processResult(res, i, 'fulfilled')
      }, err => {
        processResult(err, i, 'rejected')
      })
    })
  })
}
```

### 测试案例

```js
// 所有 Promise 实例都成功
Promise.MyAllSettled([p1, p2, p3])
  .then(res => console.log(res))
  .catch(err => console.log(err)) 
// [
//   { status: 'fulfilled', value: 'p1' },
//   { status: 'fulfilled', value: 'p2 延时一秒' },
//   { status: 'fulfilled', value: 'p3 延时两秒' }
// ]

// 有一个 MyAllSettled 失败
Promise.allSettled([p1, p2, p4])
  .then(res => console.log(res))
  .catch(err => console.log(err))
// [
//   { status: 'fulfilled', value: 'p1' },
//   { status: 'fulfilled', value: 'p2 延时一秒' },
//   { status: 'rejected' , value: 'p4 rejected' }
// ]

// 所有 MyAllSettled 都失败
Promise.allSettled([p4, p5])
  .then(res => console.log(res))
  .catch(err => console.log(err))
// [
//   { status: 'rejected', reason: 'p4 rejected' },
//   { status: 'rejected', reason: 'p5 rejected 延时1.5秒' }
// ]
```

