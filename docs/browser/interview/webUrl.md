# 浏览器输入URL

* 1. 浏览器的地址栏输入URL并按下回车。

* 2. 浏览器查找当前URL是否存在缓存，并比较缓存是否过期。

* 3. DNS解析URL对应的IP。

* 4. 根据IP建立TCP连接（三次握手）。

* 5. HTTP发起请求。

* 6. 服务器处理请求，浏览器接收HTTP响应。

* 7. 渲染页面，构建DOM树。

* 8. 关闭TCP连接（四次挥手）。

## 1. 浏览器应该具备什么功能

* 1. 网络：浏览器通过网络模块来下载各式各样的资源，例如`HTML文本`，`JavaScript代码`，`CSS样式表`，`图片`，`音视频文件`等。网络部分尤为重要，因为它耗时长，而且需要安全访问互联网上的资源

* 2. 资源管理：从网络下载，或者本地获取到的资源需要有`高效的机制`来管理他们。例如如何`避免重复下载`，`资源如何缓存`等等

* 3. 网页浏览：这是浏览器的核心也是最`基本`的功能，最`重要`的功能。这个功能决定了如何将`资源转变为可视化`的结果

* 4. 多页面管理

* 5. 插件与管理

* 6. 账户和同步

* 7. 安全机制

* 8. 开发者工具

> 浏览器的主要功能总结起来就是一句话:`将用户输入的url转变成可视化的图像`。

## 2. 浏览器的内核

在浏览器中有一个最重要的模块，它主要的作用是把一切`请求回来的资源变成可视化的图像`，这个模块就是`浏览器内核`，通常他也被称为`渲染引擎`。

下面是浏览器内核的总结：


* 1. IE：`Trident`

* 2. Safari：`WebKit`。WebKit本身主要是由两个小引擎构成的，一个正是渲染引擎“WebCore”，另一个则是javascript解释引擎“JSCore”，它们均是从KDE的渲染引擎KHTML及javascript解释引擎KJS衍生而来。

* 3. Chrome：`Blink`。在13年发布的Chrome 28.0.1469.0版本开始，Chrome放弃Chromium引擎转而使用最新的Blink引擎（基于WebKit2——苹果公司于2010年推出的新的WebKit引擎），Blink对比上一代的引擎精简了代码. 改善了DOM框架，也提升了安全性。

* 4. Opera：2013年2月宣布放弃`Presto`，采用`Chromium`引擎，又转为`Blink`引擎

* 5. Firefox：`Gecko`

## 3. 进程和线程

* 1. 进程：程序的一次执行，它占有一片独有的内存空间，是`操作系统`执行的`基本单元`

* 2. 线程：是进程内的一个独立执行单元，是CPU调度的最小单元，`程序运行`的`基本单元`

* 3. 一个进程中`至少`有一个运行的线程：`主线程`。它在进程启动后自动创建

* 4. 一个进程可以同时运行多个线程，常说程序是`多线程运行`的，比如你使用`听歌软件`，这个软件就是一个`进程`，而你在这个软件里`听歌`，`收藏歌`，`点赞评论`，这就是一个进程里的`多个线程操作`

* 5. 一个进程中的数据可以供其中的多个线程`直接共享`，但是`进程与进程`之间的数据时`不能共享`的

* 6. JS引擎是`单线程运行`的

## 4. 浏览器渲染引擎的主要模块

* 1. HTML解析器：解释`HTML文档`的解析器，主要作用是`将HTML文本解释为DOM树`

* 2. CSS解析器：它的作用是为DOM中的各个元素对象`计算出样式信息`，为布局提供`基础设施`

* 3. JavaScript引擎：JavaScript引擎能够解释`JavaScript代码`，并通过`DOM接口和CSS接口`来修改`网页内容`  和`样式信息`，从而改变`渲染的结果`

* 4. 布局（layout）：在DOM创建之后，WebKit需要将其中的元素对象同样式信息`结合起来`，计算他们的`大小位置等布局信息`，形成一个能表达着所有信息的`内部表示模型`

* 5. 绘图模块（paint）：使用`图形库`将布局计算后的各个网页的节点绘制成`图像结果`

## 5. 大致的渲染过程

第1题的第7点，`渲染页面`，`构建DOM树`，接下来说说大致的渲染过程

* 1. 浏览器会从上到下解析文档

* 2. 遇见HTML标记，调用`HTML解析器`解析为对应的token(一个token就是一个标签文本的序列化)并构建DOM树(就是一块内存，保存着tokens，建立他们之间的关系)

* 3. 遇见style/link标记调用相应解析器处理CSS标记，并构建出`CSS样式树`

* 4. 遇见script标记，调用`JavaScript引擎`处理script标记，绑定事件，修改DOM树/CSS树等

* 5. 将DOM树与CSS合并成一个`渲染树`

* 6. 根据渲染树来渲染，以计算每个节点的`几何信息`(这一过程需要依赖GPU)

* 7. 最终将各个节点`绘制`在屏幕上

<img :src="$withBase('/assets/browser/0f72241cf7af4da3923254405ac086c4_tplv-k3u1fbpfcp-watermark.image')" alt="demo" />

## 6. CSS阻塞情况以及优化

1. style标签中的样式：由`HTML解析器`进行解析，`不会`阻塞浏览器渲染(可能会产生“闪屏现象”)，不会阻塞DOM解析

2. link引入的CSS样式：由`CSS解析器`进行解析，`会`阻塞浏览器渲染，会阻塞后面的js语句执行，不阻塞DOM的解析

3. 优化：使用CDN节点进行外部资源加速，对CSS进行压缩，优化CSS代码(不要使用太多层选择器)

注意：看下图，`HTML`和`CSS`是并行解析的，所以CSS`不会阻塞HTML解析`，但是，`会阻塞整体页面的渲染`(因为最后要渲染必须CSS和HTML一起解析完并合成一处)

<img :src="$withBase('/assets/browser/0f72241cf7af4da3923254405ac086c4_tplv-k3u1fbpfcp-watermark.image')" alt="demo" />

## 7. JS阻塞问题

1. `js会阻塞后续DOM的解析`，原因是：浏览器不知道后续脚本的内容，如果先去解析了下面的DOM，而随后的js删除了后面所有的DOM，那么浏览器就做了无用功，浏览器无法预估脚本里面具体做了什么操作，例如像document.write这种操作，索性全部停住，等脚本执行完了，浏览器再继续向下解析DOM

2. `js会阻塞页面渲染`，原因是：js中也可以给DOM设置样式，浏览器等该脚本执行完毕，渲染出一个最终结果，避免做无用功。

3. `js会阻塞后续js的执行`，原因是维护依赖关系，例如：必须先引入jQuery再引入bootstrap

## 8. 资源加载阻塞

无论css阻塞，还是js阻塞，`都不会阻塞浏览器加载外部资源`（图片. 视频. 样式. 脚本等）

原因：浏览器始终处于一种：`“先把请求发出去”`的工作模式，只要是涉及到网络请求的内容，无论是：图片. 样式. 脚本，都会先发送请求去获取资源，至于资源到本地之后什么时候用，由浏览器自己协调。这种做法效率很高。

## 9. 为什么CSS解析顺序从右到左

如果是`从左到右`的话：

1. 第一次从`爷节点 -> 子节点 -> 孙节点1`
2. 第一次从`爷节点 -> 子节点 -> 孙节点2`
3. 第一次从`爷节点 -> 子节点 -> 孙节点3`

如果三次都匹配不到的话，那至少也得走三次：`爷节点 -> 子节点 -> 孙节点`，这就做了很多无用功啊。

<img :src="$withBase('/assets/browser/ec27806c5dec40ea81c422821d8b1185_tplv-k3u1fbpfcp-watermark.image')" alt="demo" />

如果是`从右到左`的话：

1. 第一次从`孙节点1`，找不到，停止
2. 第一次从`孙节点2`，找不到，停止
3. 第一次从`孙节点3`，找不到，停止

这样的话，尽早发现找不到，尽早停止，可以少了很多无用功。

<img :src="$withBase('/assets/browser/b44eb01261704363ab9a21641661715d_tplv-k3u1fbpfcp-watermark.image')" alt="demo" />

## 10. 什么是重绘回流

1. 重绘：重绘是一个`元素外观的改变`所触发的浏览器行为，例如改变outline. 背景色等属性。浏览器会根据元素的新属性重新绘制，使元素呈现新的外观。重绘不会带来重新布局，所以并不一定伴随重排。

2. 回流：渲染对象在创建完成并添加到渲染树时，并不包含位置和大小信息。`计算这些值的过程称为布局或重排，或回流`

3. `"重绘"不一定需要"重排"`，比如改变某个网页元素的颜色，就只会触发"重绘"，不会触发"重排"，因为布局没有改变。

4. `"重排"大多数情况下会导致"重绘"`，比如改变一个网页元素的位置，就会同时触发"重排"和"重绘"，因为布局改变了。

## 11. 触发重绘的属性

* color
* background
* outline-color         
* border-style
* background-image
* outline         
* border-radius
* background-position
* outline-style         
* visibility
* background-repeat
* outline-width         
* text-decoration
* background-size
* box-shadow

## 12. 触发回流的属性

* width
* top
* text-align
* height
* bottom
* overflow-y
* padding
* left
* font-weight
* margin
* right
* overflow
* display
* position
* font-family
* border-width
* float
* line-height
* border
* clear
* vertival-align
* min-height
* white-space

## 13. 常见触发重绘回流的行为


1. 当你增加. 删除. 修改 DOM 结点时，会导致 Reflow , Repaint。

2. 当你移动 DOM 的位置

3. 当你修改 CSS 样式的时候。

4. 当你`Resize`窗口的时候（移动端没有这个问题，因为移动端的缩放没有影响布局视口)

5. 当你修改网页的`默认字体`时。

6. 获取DOM的`height`或者`width`时，例如`clientWidth`. `clientHeight`. `clientTop`. `clientLeft`. `offsetWidth`. `offsetHeight`. `offsetTop`. `offsetLeft`. `scrollWidth`. `scrollHeight`. `scrollTop`. `scrollLeft`. `scrollIntoView()`. `scrollIntoViewIfNeeded()`. `getComputedStyle()`. `getBoundingClientRect()`. `scrollTo()`

## 14. 针对重绘回流的优化方案


1. 元素位置移动变换时尽量使用CSS3的`transform`来代替`top`，`left`等操作

2. 不要使用`table`布局

3. 将多次改变样式属性的操作合`并成一次操作`

4. 利用`文档素碎片（documentFragment）`，vue使用了该方式提升性能

5. 动画实现过程中，启用`GPU硬件加速：transform:tranlateZ(0)`

6. 为动画元素`新建图层`，提高动画元素的`z-index`

7. 编写动画时，尽量使用`requestAnimationFrame`

## 15. 浏览器缓存分类

<img :src="$withBase('/assets/browser/3f3a31bc463b40578c1d6bbc6c79758a_tplv-k3u1fbpfcp-watermark.image')" alt="demo" />

* 强缓存

    * 不会向服务器发送请求，直接从本地缓存中获取数据

    * 请求资源的的状态码为: `200 ok(from memory cache)`

    * 优先级：`cache-control > expires`

* 协商缓存

    * 向服务器发送请求，服务器会根据请求头的资源判断是否命中协商缓存

    * 如果命中，则返回`304`状态码通知浏览器从缓存中读取资源

    * 优先级：`Last-Modified与ETag是可以一起使用的`，服务器会优先验证`ETag`，一致的情况下，才会继续比对`Last-Modified`，最后才决定是否返回`304`