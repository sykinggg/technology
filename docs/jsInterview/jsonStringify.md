# JSON.stringify 悲伤的故事

## 悲伤的开始

### 直接错误原因

::: warning 错误
非必填情况下，signInfo字段中经过`JSON.stringify`后的字符串对象缺少`value` key，导致后端parse之后无法正确读取value值，进而报接口系统异常，用户无法进行下一步动作。
:::

```js
// 异常入参数据，数组字符串中没有value key
{
  signInfo: '[{"fieldId":539},{"fieldId":540},{"fieldId":546,"value":"10:30"}]'
}

// 正常入参数据
{
  signInfo: '[{"fieldId":539,"value":"银卡"},{"fieldId":540,"value":"2021-03-01"},{"fieldId":546,"value":"10:30"}]'
}
```

**异常数据是如何产生的**

```js
// 默认情况下数据是这样的
let signInfo = [
  {
    fieldId: 539,
    value: undefined
  },
  {
    fieldId: 540,
    value: undefined
  },
  {
    fieldId: 546,
    value: undefined
  },
]
// 经过JSON.stringify之后的数据,少了value key,导致后端无法读取value值进行报错
// 具体原因是`undefined`、`任意的函数`以及`symbol值`，出现在`非数组对象`的属性值中时在序列化过程中会被忽略
console.log(JSON.stringify(signInfo))
// '[{"fieldId":539},{"fieldId":540},{"fieldId":546}]'
```

### 解决方案

**方案一：新开一个对象处理**

```js
let signInfo = [
  {
    fieldId: 539,
    value: undefined
  },
  {
    fieldId: 540,
    value: undefined
  },
  {
    fieldId: 546,
    value: undefined
  },
]

let newSignInfo = signInfo.map((it) => {
  const value = typeof it.value === 'undefined' ? '' : it.value
  return {
    ...it,
    value
  }
})

console.log(JSON.stringify(newSignInfo))
// '[{"fieldId":539,"value":""},{"fieldId":540,"value":""},{"fieldId":546,"value":""}]'
```

**方案二：利用`JSON.stringify`第二个参数，直接处理**

```js
let signInfo = [
  {
    fieldId: 539,
    value: undefined
  },
  {
    fieldId: 540,
    value: undefined
  },
  {
    fieldId: 546,
    value: undefined
  },
]

// 判断到value为undefined，返回空字符串即可
JSON.stringify(signInfo, (key, value) => typeof value === 'undefined' ? '' : value)
// '[{"fieldId":539,"value":""},{"fieldId":540,"value":""},{"fieldId":546,"value":""}]'
```

## 学透JSON.stringify

::: tip 注意
`JSON.stringify()`  方法将一个 `JavaScript 对象`或`值`转换为 JSON 字符串，如果指定了一个 replacer 函数，则可以选择性地替换值，或者指定的 replacer 是数组，则可选择性地仅包含数组指定的属性。
:::

以下信息来自[MDN](https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FJavaScript%2FReference%2FGlobal_Objects%2FJSON%2Fstringify%23syntax)

### 语法

```js
JSON.stringify(value[, replacer [, space]])
```

#### 参数

* `value`

  将要序列化成 一个 JSON 字符串的值。

* `replacer` 可选

  1. 如果该参数是一个函数，则在序列化过程中，被序列化的值的每个属性都会经过该函数的转换和处理；

  2. 如果该参数是一个数组，则只有包含在这个数组中的属性名才会被序列化到最终的 JSON 字符串中；

  3. 如果该参数为 null 或者未提供，则对象所有的属性都会被序列化。

* `space` 可选

  1. 指定缩进用的空白字符串，用于美化输出（pretty-print）；

  2. 如果参数是个数字，它代表有多少的空格；上限为10。

  3. 该值若小于1，则意味着没有空格；

  4. 如果该参数为字符串（当字符串长度超过10个字母，取其前10个字母），该字符串将被作为空格；

  5. 如果该参数没有提供（或者为 null），将没有空格。

#### 返回值

一个表示给定值的JSON字符串。

#### 异常

* 当在循环引用时会抛出异常`TypeError` ("cyclic object value")（循环对象值）

* 当尝试去转换 `BigInt` 类型的值会抛出`TypeError` ("BigInt value can't be serialized in JSON")（BigInt值不能JSON序列化）.

### 基本使用

#### 注意

1. JSON.stringify可以转换对象或者值（平常用的更多的是转换对象）

1. 可以指定`replacer`为函数选择性的地替换

1. 也可以指定`replacer`为数组，可转换指定的属性

这里仅仅是[NDN](https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FJavaScript%2FReference%2FGlobal_Objects%2FJSON%2Fstringify)上关于`JSON.stringify`其中最基础的说明，咱们先打个码试试这几个特性

```js
// 1. 转换对象
console.log(JSON.stringify({ name: 'jsonStringify', sex: 'boy' })) // '{"name":"jsonStringify","sex":"boy"}'

// 2. 转换普通值
console.log(JSON.stringify('jsonStringify')) // "jsonStringify"
console.log(JSON.stringify(1)) // "1"
console.log(JSON.stringify(true)) // "true"
console.log(JSON.stringify(null)) // "null"

// 3. 指定replacer函数
console.log(JSON.stringify({ name: 'jsonStringify', sex: 'boy', age: 100 }, (key, value) => {
  return typeof value === 'number' ? undefined : value
}))
// '{"name":"jsonStringify","sex":"boy"}'

// 4. 指定数组
console.log(JSON.stringify({ name: 'jsonStringify', sex: 'boy', age: 100 }, [ 'name' ]))
// '{"name":"jsonStringify"}'

// 5. 指定space(美化输出)
console.log(JSON.stringify({ name: 'jsonStringify', sex: 'boy', age: 100 }))
// '{"name":"jsonStringify","sex":"boy","age":100}'
console.log(JSON.stringify({ name: 'jsonStringify', sex: 'boy', age: 100 }, null , 2))
/*
{
  "name": "jsonStringify",
  "sex": "boy",
  "age": 100
}
*/
```

### 9大特性要记住

#### 特性一

1. `undefined`、`任意的函数`以及`symbol值`，出现在`非数组对象`的属性值中时在序列化过程中会被忽略

1. `undefined`、`任意的函数`以及`symbol值`出现在`数组`中时会被转换成 `null`。

1. `undefined`、`任意的函数`以及`symbol值`被`单独转换`时，会返回 undefined

```js
// 1. 对象中存在这三种值会被忽略
console.log(JSON.stringify({
  name: 'jsonStringify',
  sex: 'boy',
  // 函数会被忽略
  showName () {
    console.log('jsonStringify')
  },
  // undefined会被忽略
  age: undefined,
  // Symbol会被忽略
  symbolName: Symbol('jsonStringify')
}))
// '{"name":"jsonStringify","sex":"boy"}'

// 2. 数组中存在着三种值会被转化为null
console.log(JSON.stringify([
  'jsonStringify',
  'boy',
  // 函数会被转化为null
  function showName () {
    console.log('jsonStringify')
  },
  //undefined会被转化为null
  undefined,
  //Symbol会被转化为null
  Symbol('jsonStringify')
]))
// '["jsonStringify","boy",null,null,null]'

// 3.单独转换会返回undefined
console.log(JSON.stringify(
  function showName () {
    console.log('jsonStringify')
  }
)) // undefined
console.log(JSON.stringify(undefined)) // undefined
console.log(JSON.stringify(Symbol('jsonStringify'))) // undefined
```

#### 特性二

::: tip 注意
`布尔值`、`数字`、`字符串`的包装对象在序列化过程中会自动转换成对应的原始值。
:::

```js
console.log(JSON.stringify([new Number(1), new String("jsonStringify"), new Boolean(false)]))
// '[1,"jsonStringify",false]'
```

#### 特性三

::: tip 注意
所有以`symbol`为属性键的属性都会被完全忽略掉，即便 `replacer` 参数中强制指定包含了它们。
:::

```js
console.log(JSON.stringify({
  [Symbol('jsonStringify')]: 'jsonStringify'}
)) 
// '{}'
console.log(JSON.stringify({
  [ Symbol('jsonStringify') ]: 'jsonStringify',
}, (key, value) => {
  if (typeof key === 'symbol') {
    return value
  }
}))
// undefined
```

#### 特性四

::: tip 注意
`NaN` 和 `Infinity` 格式的数值及 `null` 都会被当做 `null`。
:::

```js
console.log(JSON.stringify({
  age: NaN,
  age2: Infinity,
  name: null
}))
// '{"age":null,"age2":null,"name":null}'
```

#### 特性五

::: tip 注意
转换值如果有 `toJSON()` 方法，该方法定义什么值将被序列化。
:::

```js
const toJSONObj = {
  name: 'jsonStringify',
  toJSON () {
    return 'JSON.stringify'
  }
}

console.log(JSON.stringify(toJSONObj))
// "JSON.stringify"
```

#### 特性六

::: tip 注意
`Date` 日期调用了 `toJSON()` 将其转换为了 `string` 字符串（同`Date.toISOString()`），因此会被当做字符串处理。
:::

```js
const d = new Date()

console.log(d.toJSON()) // 2021-10-05T14:01:23.932Z
console.log(JSON.stringify(d)) // "2021-10-05T14:01:23.932Z"
```

#### 特性七

::: tip 注意
对包含循环引用的对象（对象之间相互引用，形成无限循环）执行此方法，会抛出错误。
:::

```js
let cyclicObj = {
  name: 'jsonStringify',
}

cyclicObj.obj = cyclicObj

console.log(JSON.stringify(cyclicObj))
// Converting circular structure to JSON
```

#### 特性八

::: tip 注意
其他类型的对象，包括 `Map`/`Set`/`WeakMap`/`WeakSet`，仅会序列化可枚举的属性
:::

```js
let enumerableObj = {}

Object.defineProperties(enumerableObj, {
  name: {
    value: 'jsonStringify',
    enumerable: true
  },
  sex: {
    value: 'boy',
    enumerable: false
  },
})

console.log(JSON.stringify(enumerableObj))
// '{"name":"jsonStringify"}'
```

#### 特性九

::: tip 注意
当尝试去转换 `BigInt` 类型的值会抛出错误
:::

```js
const alsoHuge = BigInt(9007199254740991)

console.log(JSON.stringify(alsoHuge))
// TypeError: Do not know how to serialize a BigInt
```

## 手写一个JSON.stringify

::: tip 注意
终于重新学完`JSON.stringify`的众多特性啦！咱们根据这些特性来手写一个简单版本的吧（无replacer函数和space）
:::

### 源码实现

```js
const jsonstringify = (data) => {
  // 确认一个对象是否存在循环引用
  const isCyclic = (obj) => {
  // 使用Set数据类型来存储已经检测过的对象
  let stackSet = new Set()
  let detected = false

  const detect = (obj) => {
    // 不是对象类型的话，可以直接跳过
    if (obj && typeof obj != 'object') {
      return
    }
    // 当要检查的对象已经存在于stackSet中时，表示存在循环引用
    if (stackSet.has(obj)) {
      return detected = true
    }
    // 将当前obj存如stackSet
    stackSet.add(obj)

    for (let key in obj) {
      // 对obj下的属性进行挨个检测
      if (obj.hasOwnProperty(key)) {
        detect(obj[key])
      }
    }
    // 平级检测完成之后，将当前对象删除，防止误判
    /*
      例如：对象的属性指向同一引用，如果不删除的话，会被认为是循环引用
      let tempObj = {
        name: 'jsonStringify'
      }
      let obj4 = {
        obj1: tempObj,
        obj2: tempObj
      }
    */
    stackSet.delete(obj)
  }

  detect(obj)

  return detected
}

  // 特性七:
  // 对包含循环引用的对象（对象之间相互引用，形成无限循环）执行此方法，会抛出错误。
  if (isCyclic(data)) {
    throw new TypeError('Converting circular structure to JSON')
  }

  // 特性九:
  // 当尝试去转换 BigInt 类型的值会抛出错误
  if (typeof data === 'bigint') {
    throw new TypeError('Do not know how to serialize a BigInt')
  }

  const type = typeof data
  const commonKeys1 = ['undefined', 'function', 'symbol']
  const getType = (s) => {
    return Object.prototype.toString.call(s).replace(/\[object (.*?)\]/, '$1').toLowerCase()
  }

  // 非对象
  if (type !== 'object' || data === null) {
    let result = data
    // 特性四：
    // NaN 和 Infinity 格式的数值及 null 都会被当做 null。
    if ([NaN, Infinity, null].includes(data)) {
      result = 'null'
      // 特性一：
      // `undefined`、`任意的函数`以及`symbol值`被`单独转换`时，会返回 undefined
    } else if (commonKeys1.includes(type)) {
      // 直接得到undefined，并不是一个字符串'undefined'
      return undefined
    } else if (type === 'string') {
      result = '"' + data + '"'
    }

    return String(result)
  } else if (type === 'object') {
    // 特性五:
    // 转换值如果有 toJSON() 方法，该方法定义什么值将被序列化
    // 特性六:
    // Date 日期调用了 toJSON() 将其转换为了 string 字符串（同Date.toISOString()），因此会被当做字符串处理。
    if (typeof data.toJSON === 'function') {
      return jsonstringify(data.toJSON())
    } else if (Array.isArray(data)) {
      let result = data.map((it) => {
        // 特性一:
        // `undefined`、`任意的函数`以及`symbol值`出现在`数组`中时会被转换成 `null`
        return commonKeys1.includes(typeof it) ? 'null' : jsonstringify(it)
      })

      return `[${result}]`.replace(/'/g, '"')
    } else {
      // 特性二：
      // 布尔值、数字、字符串的包装对象在序列化过程中会自动转换成对应的原始值。
      if (['boolean', 'number'].includes(getType(data))) {
        return String(data)
      } else if (getType(data) === 'string') {
        return '"' + data + '"'
      } else {
        let result = []
        // 特性八
        // 其他类型的对象，包括 Map/Set/WeakMap/WeakSet，仅会序列化可枚举的属性
        Object.keys(data).forEach((key) => {
          // 特性三:
          // 所有以symbol为属性键的属性都会被完全忽略掉，即便 replacer 参数中强制指定包含了它们。
          if (typeof key !== 'symbol') {
            const value = data[key]
            // 特性一
            // `undefined`、`任意的函数`以及`symbol值`，出现在`非数组对象`的属性值中时在序列化过程中会被忽略
            if (!commonKeys1.includes(typeof value)) {
              result.push(`"${key}":${jsonstringify(value)}`)
            }
          }
        })

        return `{${result}}`.replace(/'/, '"')
      }
    }
  }
}
```

### 测试一把

```js
// 1. 测试一下基本输出
console.log(jsonstringify(undefined)) // undefined 
console.log(jsonstringify(() => { })) // undefined
console.log(jsonstringify(Symbol('jsonStringify'))) // undefined
console.log(jsonstringify((NaN))) // null
console.log(jsonstringify((Infinity))) // null
console.log(jsonstringify((null))) // null
console.log(jsonstringify({
  name: 'jsonStringify',
  toJSON() {
    return {
      name: 'jsonStringify2',
      sex: 'boy'
    }
  }
}))
// {"name":"jsonStringify2","sex":"boy"}

// 2. 和原生的JSON.stringify转换进行比较
console.log(jsonstringify(null) === JSON.stringify(null));
// true
console.log(jsonstringify(undefined) === JSON.stringify(undefined));
// true
console.log(jsonstringify(false) === JSON.stringify(false));
// true
console.log(jsonstringify(NaN) === JSON.stringify(NaN));
// true
console.log(jsonstringify(Infinity) === JSON.stringify(Infinity));
// true
let str = "jsonStringify";
console.log(jsonstringify(str) === JSON.stringify(str));
// true
let reg = new RegExp("\w");
console.log(jsonstringify(reg) === JSON.stringify(reg));
// true
let date = new Date();
console.log(jsonstringify(date) === JSON.stringify(date));
// true
let sym = Symbol('jsonStringify');
console.log(jsonstringify(sym) === JSON.stringify(sym));
// true
let array = [1, 2, 3];
console.log(jsonstringify(array) === JSON.stringify(array));
// true
let obj = {
  name: 'jsonStringify',
  age: 18,
  attr: ['coding', 123],
  date: new Date(),
  uni: Symbol(2),
  sayHi: function () {
    console.log("hello world")
  },
  info: {
    age: 16,
    intro: {
      money: undefined,
      job: null
    }
  },
  pakingObj: {
    boolean: new Boolean(false),
    string: new String('jsonStringify'),
    number: new Number(1),
  }
}
console.log(jsonstringify(obj) === JSON.stringify(obj)) 
// true
console.log((jsonstringify(obj)))
// {"name":"jsonStringify","age":18,"attr":["coding",123],"date":"2021-10-06T14:59:58.306Z","info":{"age":16,"intro":{"job":null}},"pakingObj":{"boolean":false,"string":"jsonStringify","number":1}}
console.log(JSON.stringify(obj))
// {"name":"jsonStringify","age":18,"attr":["coding",123],"date":"2021-10-06T14:59:58.306Z","info":{"age":16,"intro":{"job":null}},"pakingObj":{"boolean":false,"string":"jsonStringify","number":1}}

// 3. 测试可遍历对象
let enumerableObj = {}

Object.defineProperties(enumerableObj, {
  name: {
    value: 'jsonStringify',
    enumerable: true
  },
  sex: {
    value: 'boy',
    enumerable: false
  },
})

console.log(jsonstringify(enumerableObj))
// {"name":"jsonStringify"}

// 4. 测试循环引用和Bigint

let obj1 = { a: 'aa' }
let obj2 = { name: 'jsonStringify', a: obj1, b: obj1 }
obj2.obj = obj2

console.log(jsonstringify(obj2))
// TypeError: Converting circular structure to JSON
console.log(jsonStringify(BigInt(1)))
// TypeError: Do not know how to serialize a BigInt
```