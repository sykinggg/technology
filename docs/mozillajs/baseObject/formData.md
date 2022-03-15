# 表单数据

## 概述

该`FormData`接口提供了一种轻松构造一组表示表单字段及其值的键/值对的[XMLHttpRequest.send()](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/send)方法，然后可以使用该方法轻松发送这些键/值对。如果编码类型设置为"`multipart/form-data`".

[URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)如果您想以 a[form](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)使用简单`GET`提交的方式生成查询参数，也可以将其直接传递给构造函数。

一个对象实现`FormData`可以直接在[for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)结构中使用，而不是[entries()](https://developer.mozilla.org/en-US/docs/Web/API/FormData/entries):`for (var p of myFormData)`等价于`for (var p of myFormData.entries())`.

> **注意：**此功能在[Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API) 中可用。

## 构造函数

[FormData()](https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData)

  创建一个新`FormData`对象。

## 方法

[FormData.append()](https://developer.mozilla.org/en-US/docs/Web/API/FormData/append)

  将新值附加到`FormData`对象内的现有键上，或者如果键不存在则添加该键。

[FormData.delete()](https://developer.mozilla.org/en-US/docs/Web/API/FormData/delete)

  从`FormData`对象中删除键/值对。

[FormData.entries()](https://developer.mozilla.org/en-US/docs/Web/API/FormData/entries)

  返回[iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)允许遍历此对象中包含的所有键/值对。

[FormData.get()](https://developer.mozilla.org/en-US/docs/Web/API/FormData/get)

  从`FormData`对象中返回与给定键关联的第一个值。

[FormData.getAll()](https://developer.mozilla.org/en-US/docs/Web/API/FormData/getAll)

  从 a 中返回与给定键关联的所有值的数组`FormData`。

[FormData.has()](https://developer.mozilla.org/en-US/docs/Web/API/FormData/has)

  返回一个布尔值，说明`FormData` 对象是否 包含某个键。

[FormData.keys()](https://developer.mozilla.org/en-US/docs/Web/API/FormData/keys)

  返回[iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)允许遍历此对象中包含的键/值对的所有键。

[FormData.set()](https://developer.mozilla.org/en-US/docs/Web/API/FormData/set)

  为`FormData`对象内的现有键设置新值，如果键/值尚不存在，则添加该键/值。

[FormData.values()](https://developer.mozilla.org/en-US/docs/Web/API/FormData/values)

  返回[iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)允许遍历此对象中包含的所有值。

## 浏览器兼容性

<img :src="$withBase('/assets/mozillaJs/1625192257(1).jpg')" alt="demo" />