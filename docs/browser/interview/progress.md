# ProgressEvent

**ProgressEvent**接口表示衡量底层进程进度的事件，比如HTTP请求（对于`XMLHttpRequest`，或者加载`<img>`、`<audio>`、`<video>`、`<style>`或`<link>`的底层资源）。

```flow
para=>parallel: ProgressEvent
process=>operation: Event

para(path1, left)->process
```

## Constructor

`ProgressEvent()`

使用给定的参数创建一个 `ProgressEvent` [事件](https://developer.mozilla.org/en-US/docs/Web/API/Event)。

## Properties

从其父级事件中继承属性。

[ProgressEvent.lengthComputable](https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent/lengthComputable) `Read only`

一个布尔标志，表示底层过程要做的总工作和已经完成的工作量是否可以计算。换句话说，它告诉人们进度是否可以测量。

[ProgressEvent.loaded](https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent/loaded) `Read only`

一个64位无符号整数值，表示底层进程已经完成的工作量。所做工作的比例可以通过用总数除以该属性的值来计算。当使用HTTP下载资源时，这只计算HTTP消息的主体，而不包括头文件和其他开销。

[ProgressEvent.total](https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent/total) `Read only`

一个 64 位无符号整数，表示底层进程正在执行的工作总量。使用 HTTP 下载资源时，这是 `Content-Length`（消息正文的大小），不包括标头和其他开销。

## Methods

继承了其父级[事件](https://developer.mozilla.org/en-US/docs/Web/API/Event)的方法

[ProgressEvent.initProgressEvent()](https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent/initProgressEvent)

初始化使用已弃用的 [Document.createEvent("ProgressEvent")](https://developer.mozilla.org/en-US/docs/Web/API/Document/createEvent) 方法创建的 `ProgressEvent`。

## Examples

下面的示例将一个 `ProgressEvent` 添加到一个新的 [XMLHTTPRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) 并使用它来显示请求的状态。

```js
var progressBar = document.getElementById("p"),
    client = new XMLHttpRequest()
client.open("GET", "magical-unicorns")
client.onprogress = function(pe) {
  if(pe.lengthComputable) {
    progressBar.max = pe.total
    progressBar.value = pe.loaded
  }
}
client.onloadend = function(pe) {
  progressBar.value = pe.loaded
}
client.send()
```

## 浏览器兼容性

<img :src="$withBase('/assets/browser/1631583052792.jpg')" alt="demo" />