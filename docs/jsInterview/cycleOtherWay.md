# 数组方法另一个角度总结

<img :src="$withBase('/assets/jsInterview/dd1a1e965fa94bdd8e84d81152bb852d_tplv-k3u1fbpfcp-watermark.webp')" alt="demo" />

## 遍历类

### 1. forEach

#### 基本使用

::: tip 注意
`forEach`一个日常用的非常多的遍历函数，你一定熟悉到不能再熟悉啦！这里我们着重看一些比较重要且容易忽略的点。 [mdn](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
:::

1. 该方法对数组的每个元素执行一次给定的函数，返回值是`undefiend`。

2. 该方法按升序为数组中**含有效值**的每一项执行一次 `callback` 函数，未初始化的项将被跳过（例如在稀疏数组上）。

3. 如果已经存在的值被改变，则传递给 `callback` 的值是 `forEach()` 遍历到他们那一刻的值。

4. 已删除的项不会被遍历到

**举个小例子**

```js
let demoArr = [ 1, 2, 3, 4, , 5 ]

demoArr.forEach((it, i) => {
  if (i === 1) {
    // 后添加进去的不会被访问到
    demoArr.push(5)
  } else if (i === 2) {
    // 4将不会被访问到，而4-4会被访问到
    demoArr.splice(3, 1, '4-4')
  }

  console.log(it)
})

/*
 1
 2
 3
 4-4
 5
*/
```

#### 代码实现

```js
Array.prototype.forEach2 = function (callback, thisCtx) {
  if (typeof callback !== 'function') {
    throw `${callback} is not a function`
  }

  const length = this.length
  let i = 0

  while (i < length) {
    if (i in this) {
      callback.call(thisCtx, this[ i ], i, this)
    }

    i++
  }
}


// 举个小例子
let demoArr = [ 1, 2, 3, 4, , 5 ]

// demoArr.forEach((it, i) => {
//   if (i === 1) {
//     // 后添加进去的不会被访问到
//     demoArr.push(5)
//   } else if (i === 2) {
//     // 4将不会被访问到，相仿4-4会被访问到
//     demoArr.splice(3, 1, '4-4')
//   }

//   console.log(it)
// })

demoArr.forEach2((it, i) => {
  if (i === 1) {
    // 后添加进去的不会被访问到
    demoArr.push(5)
  } else if (i === 2) {
    // 4将不会被访问到，相仿4-4会被访问到
    demoArr.splice(3, 1, '4-4')
  }

  console.log(it)
})
```

#### 测试

```js
// 测试
let demoArr = [ 1, 2, 3, 4, , 5 ]

demoArr.forEach2((it, i) => {
  if (i === 1) {
    // 后添加进去的不会被访问到
    demoArr.push(5)
  } else if (i === 2) {
    // 4将不会被访问到，相仿4-4会被访问到
    demoArr.splice(3, 1, '4-4')
  }

  console.log(it)
})

/*
 1
 2
 3
 4-4
 5
*/
```

### 2. map

#### 基本使用

::: tip 注意
`map` 方法创建一个新数组，其结果是该数组中的每个元素是调用一次提供的函数后的返回值。 [mdn](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
:::

**注意点**

1. `callback` 函数只会在有值的索引上被调用

1. 从来没被赋过值或者使用 `delete` 删除的索引则不会被调用。

```js
// 注意索引为2的位置没有赋值
let arr = [ 1, 2, ,4, 5 ]

// 删除索引3
delete arr[3]

console.log(arr.map((it) => it * it))
// [ 1, 4, 25 ]
```

#### 代码实现

```js
Array.prototype.map2 = function (callback, thisCtx) {
  if (typeof callback !== 'function') {
    throw `${callback} is not a function`
  }

  const length = this.length
  let i = 0
  let newArray = []

  while (i < length) {
    if (i in this) {
      newArray.push(callback.call(thisCtx, this[ i ], i, this))
    }

    i++
  }

  return newArray
}

let arr = [ 0, 1, 2, 3, 4,, 5 ]

let newArr = arr.map((it) => it * it )

console.log(newArr)

let arr2 = arr.map2(function (it, i, array) {
  console.log(it, i, array, this)
  return it * it
}, { name: 'map 测试' })

console.log(arr2)
```

测试

```js
let arr = [ 0, 1, 2, 3, 4,, 5 ]

let arr2 = arr.map2(function (it, i, array) {
  console.log(it, i, array, this)
  return it * it
}, { name: 'map 测试' })

console.log(arr2)
```

<img :src="$withBase('/assets/jsInterview/1633740470721.jpg')" alt="demo" />

### 3. every

#### 基本使用

::: tip 注意
`every` 方法测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值。 [mdn](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
:::

**注意点**

1. 若收到一个空数组，此方法在一切情况下都会返回 `true`。

2. `callback` 只会为那些已经被赋值的索引调用

3. 不会为那些被删除或从未被赋值的索引调用

```js
// 举例
let emptyArr = []
// 空数组直接返回true
console.log(emptyArr.every((it) => it > 0)) // true
// 有未被赋值的
let arr = [ 0, 1, 2, 3, 4,, 5, -1 ]
// 删除元素
delete arr[7]

console.log(arr.every((it) => it >= 0)) // true
```

#### 代码实现

```js
Array.prototype.every2 = function (callback, thisCtx) {
  if (typeof callback !== 'function') {
    throw `${callback} is not a function`
  }

  const length = this.length
  let i = 0

  while (i < length) {
    if (i in this && !callback.call(thisCtx, this[ i ], i, this)) {
      return false
    }

    i++
  }

  return true
}
/**
// 举例
let emptyArr = []
// 空数组直接返回true
console.log(emptyArr.every((it) => it > 0))
let arr = [ 0, 1, 2, 3, 4,, 5, -1 ]
delete arr[7]
console.log(arr.every((it) => it >= 0))
**/

// 举例
let emptyArr = []
// 空数组直接返回true
console.log(emptyArr.every2((it) => it > 0))
let arr = [ 0, 1, 2, 3, 4,, 5, -1 ]

delete arr[7]

console.log(arr.every2((it) => it >= 0))
```

#### 测试

```js
let emptyArr = []

console.log(emptyArr.every2((it) => it > 0)) // true

let arr = [ 0, 1, 2, 3, 4,, 5, -1 ]

delete arr[7]

console.log(arr.every2((it) => it >= 0)) // true
```

### 4. some

#### 基本使用

::: tip 注意
`some` 方法测试数组中是不是至少有1个元素通过了被提供的函数测试。它返回的是一个Boolean类型的值 。
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
:::

**注意点**

1. `callback` 只会在那些”有值“的索引上被调用，不会在那些被删除或从来未被赋值的索引上调用。

**举个例子**

```js
let emptyArr = []
// 空数组直接返回false
console.log(emptyArr.some((it) => it > 0)) // false
let arr = [ 0, 1, 2, 3, 4,, 5, -1 ]
// 还没有遍历前把-1删除了，唯一小于0的值不存在了，即返回false
delete arr[7]

console.log(arr.some((it) => it < 0)) // false
```

#### 代码实现

```js
Array.prototype.some2 = function (callback, thisCtx) {
  if (typeof callback !== 'function') {
    throw `${callback} is not a function`
  }

  const length = this.length
  let i = 0

  while (i < length) {
    if (i in this && callback.call(thisCtx, this[ i ], i, this)) {
      return true
    }

    i++
  }

  return false
}

let emptyArr = []
// 空数组直接返回true
console.log(emptyArr.some2((it) => it > 0))
let arr = [ 0, 1, 2, 3, 4,, 5, -1 ]

delete arr[7]

console.log(arr.some2((it) => it < 0))
console.log(arr.some2((it) => it > 0)) // true
```

#### 测试

```js
let emptyArr = []
// 空数组直接返回true
console.log(emptyArr.some2((it) => it > 0)) // false
let arr = [ 0, 1, 2, 3, 4,, 5, -1 ]

delete arr[7]

console.log(arr.some2((it) => it < 0)) // false
console.log(arr.some2((it) => it > 0)) // true
```

### 5. filter

#### 基本使用

::: tip 注意
`filter` 方法创建一个新数组, 其包含通过所提供函数测试的所有元素。 [mdn](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
:::

**注意点**

1. `filter` 为数组中的每个元素调用一次 `callback` 函数，并利用所有使得 `callback` 返回 true 或`等价于 true 的值`的元素创建一个新数组。

2. `callback` 只会在已经赋值的索引上被调用，对于那些已经被删除或者从未被赋值的索引不会被调用。

3. 那些没有通过 `callback` 测试的元素会被跳过，不会被包含在新数组中。

```js
// 索引为5的位置，没有初始化值，不会被遍历
let arr = [ 0, 1, 2, -3, 4,, 5 ]
// 删除掉最后一个元素
delete arr[6]
// 过滤出大于0的值
let filterArr = arr.filter((it) => it > 0)

console.log(filterArr) // [ 1, 2, 4 ]
```

#### 代码实现

```js
Array.prototype.filter2 = function (callback, thisCtx) {
  if (typeof callback !== 'function') {
    throw `${callback} is not a function`
  }

  const length = this.length
  let newArray = []
  let i = 0

  while (i < length) {
    if (i in this && callback.call(thisCtx, this[ i ], i, this)) {
      newArray.push(this[ i ])
    }
    i++
  }

  return newArray
}

let arr = [ 0, 1, 2, -3, 4,, 5 ]

delete arr[6]

let filterArr = arr.filter2((it) => it > 0)

console.log(filterArr)


// let arr2 = arr.filter2(function (it, i, array) {
//   console.log(it, i, array, this)
//   return it >= 3
// }, { name: '前端胖头鱼' })

// console.log(arr2)
```

#### 测试

```js
// 索引为5的位置，没有初始化值，不会被遍历
let arr = [ 0, 1, 2, -3, 4,, 5 ]
// 删除掉最后一个元素
delete arr[6]
// 过滤出大于0的值
let filterArr = arr.filter2((it) => it > 0)

console.log(filterArr) // [ 1, 2, 4 ]
```

### 6. reduce

#### 基本使用

::: tip 注意
`reduce` 方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
:::

这个函数稍微复杂一些，我们用一个例子来看一下他是怎么用的。

```js

const sum = [1, 2, 3, 4].reduce((prev, cur) => {
  return prev + cur;
})

console.log(sum) // 10

// 初始设置
prev = initialValue = 1, cur = 2

// 第一次迭代
prev = (1 + 2) =  3, cur = 3

// 第二次迭代
prev = (3 + 3) =  6, cur = 4

// 第三次迭代
prev = (6 + 4) =  10, cur = undefined (退出)
```

#### 代码实现

```js
Array.prototype.reduce2 = function (callback, initValue) {
  if (typeof callback !== 'function') {
    throw `${callback} is not a function`
  }

  let pre = initValue
  let i = 0
  const length = this.length

  if (typeof pre === 'undefined') {
    pre = this[0]
    i = 1
  }

  while (i < length) {
    if (i in this) {
      pre = callback(pre, this[ i ], i, this)
    }
    i++
  }

  return pre
}

let arr = [ 1, 2, 3 ] 

console.log(arr.reduce2((result, it) => {
  result += it
  return result
}, 0))
```

#### 测试

```js
const sum = [1, 2, 3, 4].reduce2((prev, cur) => {
  return prev + cur;
})

console.log(sum) // 10
```

### 7. reduceRight

#### 基本使用

::: tip 注意
`reduceRight` 方法对数组中的每个元素执行一个由您提供的**reducer函数**(降序执行)，将其结果汇总为单个返回值 [mdn](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRIght)
:::

和reduce很类似，唯一不同的是`reduceRight`从右往左遍历

```js
const sum = [1, 2, 3, 4].reduce((prev, cur) => {
  console.log(cur)
  return prev + cur;
})

// 2 1
// 3 2
// 4 3

console.log(sum) // 10

const sum2 = [1, 2, 3, 4].reduceRight((prev, cur) => {
  console.log(cur)
  return prev + cur;
})
// 3 2 
// 2 1
// 1 0

console.log(sum2) // 10
```

#### 代码实现

```js
Array.prototype.reduceRight2 = function (callback, initValue) {
  if (typeof callback !== 'function') {
    throw `${callback} is not a function`
  }

  let pre = initValue
  const length = this.length
  let i = length - 1

  if (typeof pre === 'undefined') {
    pre = this[i]
    i--
  }

  while (i >= 0) {
    if (i in this) {
      pre = callback(pre, this[ i ], i, this)
    }
    i--
  }

  return pre
}

let arr = [ 1, 2, 3 ] 

console.log(arr.reduceRight2((result, it, i )=> {
  console.log(it, i)
  result += it
  return result
}, 0))
```

#### 测试

```js
const sum = [1, 2, 3, 4].reduceRight2((prev, cur) => {
  console.log(cur)
  return prev + cur;
})

// 3 2
// 2 1
// 1 0

console.log(sum) // 10
```

## 查找类

### 8. find

#### 基本使用

::: tip 注意
`find` 方法返回数组中满足测试函数的第一个元素的值。否则返回 u`ndefined`, [mdn](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
:::

注意点

1. `find`方法对数组中的每一项元素执行一次 `callback` 函数，直至有一个 `callback` 返回 `true`

2. 当找到了这样一个元素后，该方法会立即返回这个元素的值，否则返回 `undefined`

3. `callback` 函数会为数组中的每个索引调用即从 `0` 到 `length - 1`，而不仅仅是那些被赋值的索引。（**这个点是和前面几个函数不一样的地方**）

```js
let arr = [ 0, 1, 2, 3, 4,, 5 ]

let index = arr.find((it) =>  {
  return it > 3
}, { name: '前端胖头鱼' })

console.log(index) // 4
```

#### 代码实现

```js
Array.prototype.find2 = function (callback, thisCtx) {
  if (typeof callback !== 'function') {
    throw `${callback} is not a function`
  }

  const length = this.length
  let i = 0

  while (i < length) {
    const value = this[ i ]

    if (callback.call(thisCtx, value, i, this)) {
      return value
    }

    i++
  }

  return undefined
}

let arr = [ 0, 1, 2, 3, 4,, 5 ]

let index = arr.find2(function (it, i, array) {
  console.log(it, i, array, this)
  return it > 3
}, { name: 'find 测试' })

console.log(index)
```

#### 测试

```js

let arr = [ 0, 1, 2, 3, 4,, 5 ]

let index = arr.find2(function (it, i, array) {
  console.log(it, i, array, this)
  return it > 3
}, { name: 'find 测试' })

console.log(index) // 4
```

<img :src="$withBase('/assets/jsInterview/1633741755029.jpg')" alt="demo" />

### 9. findIndex

#### 基本使用

::: tip 注意
`findIndex`方法返回数组中满足提供的测试函数的第一个元素的**索引**。若没有找到对应元素则返回-1。 [mdn](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
:::

和find函数不同的地方在于，findIndex是返回**索引而非值**, 注意点也和find基本一样

1. `findIndex`方法对数组中的每个数组索引`0 ~ length-1`（包括）执行一次`callback`函数，直到找到一个`callback`函数返回true的值。

2. 如果找到这样的元素，`findIndex`会立即返回该元素的索引。如果回调从不返回真值，或者数组的`length`为0，则`findIndex`返回-1

3. 与某些其他数组方法（如Array#some）不同，在稀疏数组中，即使对于数组中不存在的条目的索引也会调用回调函数

```js
let arr = [ 0, 1, 2, 3, 4,, 5 ]

let index = arr.findIndex((it, i, array) => {
  return it > 2
})

console.log(index) // 3
```

#### 代码实现

```js
Array.prototype.findIndex2 = function (callback, thisCtx) {
  if (typeof callback !== 'function') {
    throw `${callback} is not a function`
  }

  const length = this.length
  let i = 0

  while (i < length) {
    if (callback.call(thisCtx, this[ i ], i, this)) {
      return i
    }

    i++
  }

  return -1
}

let arr = [ 0, 1, 2, 3, 4,, 5 ]

let index = arr.findIndex((it, i, array) => {
  return it > 2
})

console.log(index)
```

#### 测试

```js
let arr = [ 0, 1, 2, 3, 4,, 5 ]

let index = arr.findIndex2(function (it, i, array) {
  console.log(it, i, array, this)
  return it > 2
}, { name: 'findIndex 测试' })

console.log(index) // 3
```

<img :src="$withBase('/assets/jsInterview/1633741996410.jpg')" alt="demo" />

### 10. indexOf

#### 基本使用

::: tip 注意
`indexOf`方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。 [mdn](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
:::

```js
arr.indexOf(searchElement[, fromIndex])
```

**注意点**

1. 如果开始查找的索引值大于或等于数组长度，意味着不会在数组里查找，返回-1

2. 如果参数中提供的索引值是一个**负值**，则将其作为数组末尾的一个抵消，即-1表示从最后一个元素开始查找，-2表示从倒数第二个元素开始查找 ，以此类推

3. 如果参数中提供的索引值是一个负值，并不改变其查找顺序，查找顺序仍然是从前向后查询数组

4. 如果抵消后的索引值仍小于0，则整个数组都将会被查询。其默认值为0.

```js
const array = [2, 5, 9]

console.log(array.indexOf(2))      // 0
console.log(array.indexOf(7))      // -1
console.log(array.indexOf(9, 2))   // 2
console.log(array.indexOf(2, -1))  // -1
console.log(array.indexOf(2, -3))  // 0
```

#### 代码实现

```js
Array.prototype.indexOf2 = function (targetEle, fromIndex) {
  const length = this.length

  fromIndex = +fromIndex || 0

  // 数组为空或者从大于等于数组长度的地方开始检索，都直接是-1
  if (length === 0 || fromIndex >= length) {
    return -1
  }
  /*
    1. 从fromIndex开始搜索元素
    2. fromIndex大于0时候直接取即可
    3. 小于0先用长度减去fromIndex的绝对值，如果还是小于0，就直接取0即可
  */
  let i = Math.max(fromIndex >= 0 ? fromIndex : length - Math.abs(fromIndex), 0)

  while (i < length) {
    if (i in this && targetEle === this[ i ]) {
      
      return i
    }

    i++
  }

  return -1
}

let arr = [ 0, 1, 2, 3, 4,, 5 ]

let targetEle = arr.indexOf2(5)

console.log(targetEle)
```

#### 测试

```js
const array = [2, 5, 9]

console.log(array.indexOf2(2))      // 0
console.log(array.indexOf2(7))      // -1
console.log(array.indexOf2(9, 2))   // 2
console.log(array.indexOf2(2, -1))  // -1
console.log(array.indexOf2(2, -3))  // 0
```

### 11. lastIndexOf

#### 基本使用

::: tip
`lastIndexOf` 方法返回指定元素在数组中的最后一个的索引，如果不存在则返回 -1。 [mdn](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf)
:::

```js
arr.lastIndexOf(searchElement[, fromIndex])
```

**注意点**

1. 从`arr.length - 1`位置开始逆向查找。

2. 如果`fromIndex`大于或等于数组的长度，则整个数组会被查找。

3. 如果`fromIndex`为负值，将其视为从数组末尾向前的偏移。即使该值为负，数组仍然会被从后向前查找。

4. 如果`fromIndex`值为负时，其绝对值大于数组长度，则方法返回 -1，即数组不会被查找。

```js
let array = [2, 5, 9, 2]

console.log(array.lastIndexOf(2)) // 3
console.log(array.lastIndexOf(7)) // -1
console.log(array.lastIndexOf(2, 3)) // 3
console.log(array.lastIndexOf(2, 2)) // 0
console.log(array.lastIndexOf(2, -2)) // 0
console.log(array.lastIndexOf(2, -1)) // 3
```

#### 代码实现

```js
Array.prototype.lastIndexOf2 = function (targetEle, fromIndex) {
  const length = this.length

  fromIndex = typeof fromIndex === 'undefined' ? length - 1 : fromIndex
  // 数组为空，以及该值为负时，其绝对值大于数组长度，则方法返回 -1，即数组不会被查找。
  if (length === 0 || fromIndex < 0 && Math.abs(fromIndex) >= length) {
    return -1
  }

  let i

  if (fromIndex >= 0) {
    i = Math.min(fromIndex, length - 1)
  } else {
    i = length - Math.abs(fromIndex)
  }

  while (i >= 0) {
    if (i in this && targetEle === this[ i ]) {
      return i
    }

    i--
  }

  return -1
}

let array = [2, 5, 9, 2]

console.log(array.lastIndexOf2(2)) // 3
console.log(array.lastIndexOf2(7)) // -1
console.log(array.lastIndexOf2(2, 3)) // 3
console.log(array.lastIndexOf2(2, 2)) // 0
console.log(array.lastIndexOf2(2, -2)) // 0
console.log(array.lastIndexOf2(2, -1)) // 3
```

#### 测试

```js
let array = [2, 5, 9, 2]

console.log(array.lastIndexOf2(2)) // 3
console.log(array.lastIndexOf2(7)) // -1
console.log(array.lastIndexOf2(2, 3)) // 3
console.log(array.lastIndexOf2(2, 2)) // 0
console.log(array.lastIndexOf2(2, -2)) // 0
console.log(array.lastIndexOf2(2, -1)) // 3
```

### 12. includes

#### 基本使用

::: tip 注意
`includes` 方法用来判断一个数组是否包含一个指定的值,如果包含则返回 true，否则返回false。[mdn](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
:::

```js
arr.includes(valueToFind[, fromIndex])
```

**注意点**

1. 从`fromIndex` 索引处开始查找 `valueToFind`。

2. 如果为负值，则按升序从 `array.length + fromIndex` 的索引开始搜

3. 数组中存在NaN的话，`[ ..., NaN ].includes(NaN)为true`

```js
console.log([1, 2, 3].includes(2))     // true
console.log([1, 2, 3].includes(4))     // false
console.log([1, 2, 3].includes(3, 3))  // false
console.log([1, 2, 3].includes(3, -1)) // true
console.log([1, 2, NaN].includes(NaN)) // true
```

#### 代码实现

```js
Array.prototype.includes2 = function (targetEle, fromIndex) {
  const length = this.length

  fromIndex = +fromIndex || 0

  // 数组为空或者从大于等于数组长度的地方开始检索，都直接是-1
  if (length === 0 || fromIndex >= length) {
    return false
  }
  /*
    1. 从fromIndex开始搜索元素
    2. fromIndex大于0时候直接取即可
    3. 小于0先用长度减去fromIndex的绝对值，如果还是小于0，就直接取0即可
  */
  let i = Math.max(fromIndex >= 0 ? fromIndex : length - Math.abs(fromIndex), 0)

  while (i < length) {
    const value = this[ i ]
    // 注意NaN情况
    if (targetEle === value || typeof targetEle === 'number' && typeof value === 'number' && isNaN(targetEle) && isNaN(value)) {
      return true
    }

    i++
  }

  return false
}

let arr = [ 0, 1, 2, 3, 4,, 5 ]

let result = arr.includes2(10)

console.log(result)
```

#### 测试

```js
console.log([1, 2, 3].includes2(2))     // true
console.log([1, 2, 3].includes2(4))     // false
console.log([1, 2, 3].includes2(3, 3))  // false
console.log([1, 2, 3].includes2(3, -1)) // true
console.log([1, 2, NaN].includes2(NaN)) // true
```

## 增删改类

### 13. push

#### 基本使用

::: tip 注意
`push` 方法将一个或多个元素添加到数组的末尾，并返回该数组的新长度。[mdn](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
:::

```js
const animals = ['pigs', 'goats', 'sheep']
animals.push('cows')

console.log(animals, animals.length) 
// ["pigs", "goats", "sheep", "cows"], 4

animals.push('chickens', 'cats', 'dogs')

console.log(animals, animals.length) 

// ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"], 7
```

#### 代码实现

```js
Array.prototype.push2 = function (...pushEles) {
  const pushEleLength = pushEles.length
  const length = this.length

  let i = 0

  while (i < pushEleLength) {
    this[ length + i ] = pushEles[ i ]
    i++
  }

  return this.length
}

let arr = [ 1, 2 ]

console.log(arr.push2(3, 4), arr)
```

#### 测试

```js
const animals = ['pigs', 'goats', 'sheep']
animals.push2('cows')

console.log(animals, animals.length) 
// ["pigs", "goats", "sheep", "cows"], 4

animals.push2('chickens', 'cats', 'dogs')

console.log(animals, animals.length) 

// ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"], 7
```

### 14. pop

#### 基本使用

::: tip 注意
`pop`方法从数组中删除最后一个元素，并返回该元素的值。此方法更改数组的长度。[mdn](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)
:::

```js
let arr = [ 1, 2 ]
let arr2 = []

console.log(arr.pop(), arr) // 2 [1]
console.log(arr2.pop(), arr2) // undefined []
```

代码实现和使用一样简单，只要把数组的最后一个元素返回，并且让数组长度减1即可

#### 代码实现

```js
Array.prototype.pop2 = function () {
  const length = this.length
  // 空数组上pop，直接返回undefined
  if (length === 0) {
    return undefined
  }

  const delEle = this[ length - 1 ]

  this.length = length - 1

  return delEle
}

let arr = [ 1, 2 ]
let arr2 = []

console.log(arr.pop2(), arr)
console.log(arr2.pop2(), arr2)
```

#### 测试

```js
let arr = [ 1, 2 ]
let arr2 = []

console.log(arr.pop2(), arr) // 2 [1]
console.log(arr2.pop2(), arr2) // undefined []
```

### 15. unshift

#### 基本使用

::: tip 注意
`unshift` 方法将一个或多个元素添加到数组的开头，并返回该数组的新长度(**该方法修改原有数组**) 。
:::

**注意点**

1. 如果传入多个参数，它们会被以块的形式插入到对象的开始位置，它们的顺序和被作为参数传入时的顺序一致。

2. 传入多个参数调用一次 `unshift` ，和传入一个参数调用多次 `unshift` (例如，循环调用)，它们将得到不同的结果。例如:

```js
let arr = [4,5,6]
// 一次性插入
arr.unshift(1,2,3)

console.log(arr) // [1, 2, 3, 4, 5, 6]

let arr2 = [4,5,6]
// 插入多次
arr2.unshift(1)
arr2.unshift(2)
arr2.unshift(3)

console.log(arr2); // [3, 2, 1, 4, 5, 6]
```

#### 代码实现

```js
Array.prototype.unshift2 = function (...unshiftEles) {
  let newArray = [ ...unshiftEles, ...this ]
  let length = newArray.length
  
  let i = 0

  if (unshiftEles.length === 0) {
    return length
  }

  while (i < length) {
    this[ i ] = newArray[ i ]
    i++
  }
  
  return this.length
}

let arr = [ 4, 5, 6 ]

console.log(arr.unshift2(1, 2, 3))
console.log(arr)
```

#### 测试

```js
let arr = [4,5,6]
// 一次性插入
arr.unshift2(1,2,3)

console.log(arr) // [1, 2, 3, 4, 5, 6]

let arr2 = [4,5,6]
// 插入多次
arr2.unshift2(1)
arr2.unshift2(2)
arr2.unshift2(3)

console.log(arr2); // [3, 2, 1, 4, 5, 6]
```

### 16. shift

#### 基本使用

::: tip 注意
`shift` 方法从数组中删除第一个元素，并返回该元素的值。 [mdn](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)
:::

```js
let arr = [ 1, 2 ]

console.log(arr.shift(), arr) // 1 [2]
console.log(arr.shift(), arr) // 2 []
```

#### 代码实现

```js
Array.prototype.shift2 = function () {
  const length = this.length
  const delValue = this[ 0 ]

  let i = 1

  while (i < length) {
    this[ i - 1 ] = this[ i ]
    i++
  }

  this.length = length - 1

  return delValue
}

let arr = [ 1, 2, 3, 4, 5, 6 ]

console.log(arr.shift2())
console.log(arr)
```

#### 测试

```js
let arr = [ 1, 2 ]

console.log(arr.shift2(), arr) // 1 [2]
console.log(arr.shift2(), arr) // 2 []
```

### 17. reverse

#### 基本使用

::: tip 注意
`reverse` 方法将数组中元素的位置颠倒，并返回该数组。即数组的第一个元素会变成最后一个，数组的最后一个元素变成第一个。[mdn](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
:::

```js
const arr = [1, 2, 3]

console.log(arr) // [1, 2, 3]

arr.reverse()

console.log(arr) // [3, 2, 1]
```

#### 代码实现

```js
Array.prototype.reverse2 = function () {
  let i = 0
  let j = this.length - 1

  while (i < j) {
    [ this[ i ], this[ j ] ] = [ this[ j ], this[ i ] ]
    i++
    j--
  }

  return this
}

let arr = [ 1, 2, 3, 4 ]

// console.log(arr.reverse())
console.log(arr.reverse2(), arr)
```

#### 测试

```js
const arr = [1, 2, 3]

console.log(arr) // [1, 2, 3]

arr.reverse2()

console.log(arr) // [3, 2, 1]
```

### 18. fill

#### 基本使用

::: tip 注意
`fill` 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。[mdn](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)
:::

```js
const array1 = [1, 2, 3, 4];

console.log(array1.fill(0, 2, 4)) // [1, 2, 0, 0]


console.log(array1.fill(5, 1)) // [1, 5, 5, 5]

console.log(array1.fill(6)) // [6, 6, 6, 6]
```

#### 代码实现

```js
Array.prototype.fill2 = function (value, start, end) {
  const length = this.length
  // 这里是个亮点
  start = start >> 0
  end = typeof end === 'undefined' ? length : end >> 0

  start = start >= 0 ? Math.min(start, length) : Math.max(start + length, 0)
  end = end >= 0 ? Math.min(end, length) : Math.max(end + length, 0)

  while (start < end) {
    this[ start ] = value
    start++
  }

  return this
}

console.log([1, 2, 3].fill2(4))
console.log([1, 2, 3].fill2(4, 1))
console.log([1, 2, 3].fill2(4, 1, 2))
console.log([1, 2, 3].fill2(4, 1, 1))
console.log([1, 2, 3].fill2(4, 3, 3))
console.log([1, 2, 3].fill2(4, -3, -2))
console.log([1, 2, 3].fill2(4, NaN, NaN))
console.log([1, 2, 3].fill2(4, 3, 5))
console.log(Array(3).fill(4))
```

#### 测试

```js
const array1 = [1, 2, 3, 4];

console.log(array1.fill2(0, 2, 4)) // [1, 2, 0, 0]

console.log(array1.fill2(5, 1)) // [1, 5, 5, 5]

console.log(array1.fill2(6)) // [6, 6, 6, 6]
```

## 连接、拼接

### 19. concat

#### 基本使用

::: tip 注意
`concat` 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组 [mdn](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
:::

```js
let num1 = [[1]]
let num2 = [2, [3]]
let num3=[5,[6]]

let nums = num1.concat(num2) // [[1], 2, [3]]
let nums2 = num1.concat(4, num3) // [[1], 4, 5,[6]]
```

#### 代码实现

```js
Array.prototype.concat2 = function (...concatEles) {
  const length = concatEles.length
  let newArray = [ ...this ]
  let i = 0

  while (i < length) {
    const value = concatEles[ i ]
    Array.isArray(value) ? newArray.push(...value) : newArray.push(value)
    i++
  }

  return newArray
}
const arr1 = [ 1, 2 ]
const arr2 = [ 3, 4 ]
const ele = 5

// let concatResult = 

console.log(arr1.concat2(arr2.concat2(ele)))
```

#### 测试

```js
let num1 = [[1]]
let num2 = [2, [3]]
let num3=[5,[6]]

let nums = num1.concat2(num2) // [[1], 2, [3]]
let nums2 = num1.concat2(4, num3) // [[1], 4, 5,[6]]
```

### 20. join

#### 基本使用

::: tip 注意
`join` 方法将一个数组的所有元素通过`字符标识`连接成一个字符串并返回这个字符串。如果数组只有一个项目，那么将返回该项目而不使用分隔符。
:::

```js
const elements = ['Fire', 'Air', 'Water']
const elements2 = ['Fire']

console.log(elements.join()) // Fire,Air,Water
console.log(elements.join('')) // FireAirWater
console.log(elements.join('-')) //  Fire-Air-Water
console.log(elements2.join('-')) // Fire
```

#### 代码实现

```js
Array.prototype.join2 = function (format = ',') {
  const length = this.length
  let lastEle = this[ length - 1 ]
  let string = ''

  if (length === 0) {
    return ''
  }

  for (i = 0; i < length - 1; i++) {
    string += this[ i ] + format
  }

  return string + lastEle
}
// let arr = [ 1, 2, 3, 4, 5, 6 ]
let arr = [  ]

console.log(arr.join2('-'))
```

#### 测试

```js
const elements = ['Fire', 'Air', 'Water']
const elements2 = ['Fire']

console.log(elements.join2()) // Fire,Air,Water
console.log(elements.join2('')) // FireAirWater
console.log(elements.join2('-')) //  Fire-Air-Water
console.log(elements2.join2('-')) // Fire
```

## 静态方法

### 21. Array.isArray

#### 基本使用

::: tip 注意
**Array.isArray()** 用于确定传递的值是否是一个 `Array`。
:::

```js
Array.isArray([1, 2, 3]) // true

Array.isArray({foo: 123}) // false

Array.isArray("foobar") // false

Array.isArray(undefined) // false
```

#### 代码实现

```js
Array.isArray2 = function (ele) {
  return  Object.prototype.toString.call(ele) === '[object Array]';
}

console.log(Array.isArray2([]))
console.log(Array.isArray2(1))
console.log(Array.isArray2(null))
```

#### 测试

```js
Array.isArray2([1, 2, 3]) // true

Array.isArray2({foo: 123}) // false

Array.isArray2("foobar") // false

Array.isArray2(undefined) // false
```

### 22. Array.of

#### 基本使用

::: tip 注意
`Array.of` 方法创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型。
:::

**注意点**

`Array.of()` 和 `Array` 构造函数之间的区别在于处理整数参数：

`Array.of(7)` 创建一个具有单个元素 **7** 的数组，而 `Array(7)` 创建一个长度为7的空数组（**注意**： 这是指一个有7个空位(empty)的数组，而不是由7个`undefined`组成的数组）

```js
Array.of(7);       // [7]
Array.of(1, 2, 3); // [1, 2, 3]

Array(7);          // [ , , , , , , ]
Array(1, 2, 3);    // [1, 2, 3]
```

#### 代码实现

实现思路就是把你传进去的值，挨个赋值到当前数组即可

```js
Array.of2 = function (...eles) {
  const length = eles.length
  let i = 0
  let newArray = []

  while (i < length) {
    newArray[ i ] = eles[ i ]
    i++
  }

  return newArray
}

console.log(Array.of2(1))         // [1]
console.log(Array.of2(1, 2, 3))   // [1, 2, 3]
console.log(Array.of2(undefined)) // [undefined]
```

#### 测试

```js
Array.of2(7);       // [7]
Array.of2(1, 2, 3); // [1, 2, 3]
```

## 扁平类

### 23. flat

#### 基本使用

::: tip 注意
`flat()`  方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。 [mdn](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)
:::

```js
const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat()) // [0, 1, 2, 3, 4] 默认会平铺展开一层


const arr2 = [0, 1, 2, [[[3, 4]]]]

console.log(arr2.flat(2)) // [0, 1, 2, [3, 4]] 指定展开两层
```

#### 代码实现

```js
Array.prototype.flat2 = function (depth = 1) {
  const result = []
  const flat = (arr, depth) => {
    for (let item of arr) {
      if (Array.isArray(item) && depth > 0) {
        flat(item, depth - 1)
      } else {
        // 去除空元素，添加非undefined元素
        item !== void 0 && result.push(item);
      }
    }
  }

  flat(this, depth)

  return result
}

const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat2()) // [0, 1, 2, 3, 4]


const arr2 = [0, 1, 2, [[[3, 4]]]]

console.log(arr2.flat2(2)) // [0, 1, 2, [3, 4]] 
```

#### 测试

```js
const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat2()) // [0, 1, 2, 3, 4]


const arr2 = [0, 1, 2, [[[3, 4]]]]

console.log(arr2.flat2(2)) // [0, 1, 2, [3, 4]] 
```

### 24. flatMap

#### 基本使用

::: tip 注意
`flatMap` 方法首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。它与 `map` 连着深度值为1的 `flat` 几乎相同。 [mdn](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap)
:::

```js
let arr = [1, 2, 3, 4]

arr.flatMap(x => [x * 2]) // [2, 4, 6, 8]
```

####  代码实现

```js
Array.prototype.flatMap2 = function (callback, thisCtx) {
  if (typeof callback !== 'function') {
    throw `${callback} is not a function`
  }
  // map和flat具体实现可以看map.js和flat.js
  return this.map(function (it, i, array) {
    return callback.call(thisCtx, it, i, array)
  }).flat(1)
}

let arr = [ 1, 2, [ 3 ], 4, [ 5, [ 6 ] ] ]

console.log(arr.flatMap2((it, i, array) => {
  console.log(it, i, array, this)
  return it
}, { name: 'flatMap 测试' }))
```

#### 测试

```js
let arr = [1, 2, 3, 4]

arr.flatMap2(x => [x * 2]) // [2, 4, 6, 8]
```