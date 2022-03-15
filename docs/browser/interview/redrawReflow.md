# 浏览器重绘与回流

## 浏览器渲染流程

浏览器的主要功能就是向服务端发送请求，下载解析资源显示在浏览器上。将网页内容展示到浏览器上的过程，这其实就是渲染引擎完成的。渲染引擎有很多种，这里以 `webkit` 为例。

### WebKit 渲染引擎的主流程

<img :src="$withBase('/assets/browser/12885aa2adeb4e2d81a15bb06b880bb1_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

从上面这个图上，我们可以看到，浏览器渲染流程如下：

1. 解析 HTML Source，生成 DOM 树。

2. 解析 CSS，生成 CSSOM 树。

3. 将 DOM 树和 CSSOM 树结合，去除不可见元素，生成渲染树( Render Tree )。

4. Layout (布局)：根据生成的渲染树，进行布局( Layout )，得到节点的几何信息(宽度、高度和位置等)。

5. Painting (重绘):根据渲染树以及回流得到的几何信息，将 Render Tree 的每个像素渲染到屏幕上。

### 渲染树

<img :src="$withBase('/assets/browser/5be05f02ba9140a49e74ef6b1707fad5_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

* 构建渲染树流程：

    1. 从 DOM 树的根节点开始遍历每个可见节点。

    2. 对于每个可见的节点，找到 CSSOM 树中对应的规则，并应用它们。

    3. 根据每个可见节点以及其对应的样式，组合生成渲染树。

* 什么是不可见节点

    1. 一些不会渲染输出的节点，比如 script、meta、link 等。
    
    2. 一些通过 css 进行隐藏的节点。比如 display : none。注意，使用 visibility 和 opacity 隐藏的节
    
    3. 点，还是会显示在渲染树上的（因为还占据文档空间），只有 display : none 的节点才不会显示在渲染树上。

## 回流与重绘的原理

webkit 将渲染树中的元素成为渲染对象，每一个渲染对象都代表了一个矩形区域，通常对应相关节点的css框，包含宽度、高度和位置等几何信息。框的类型会受到与节点相关的 “display” 样式属性的影响，根据不同 display 类型创建不同渲染对象

* RenderInline

* RenderBlock

* RenderListItem

WebKits `RenderObject` 类是所有渲染对象的基类，其定义如下：

```js
class RenderObject{
  virtual void layout();
  virtual void paint(PaintInfo);
  virtual void rect repaintRect();
  Node* node;  // the DOM node
  RenderStyle* style;  // the computed style
  RenderLayer* containgLayer; // the containing z-index layer
}
```

::: tip 注意
每个渲染对象都有 `layout` 和 `paint` 方法，分别对应了回流和重绘的方法。布局是一个递归的过程。根渲染对象是从HTML元素开始的，然后递归遍历部分或全部树结构，每渲染对象都会调用需要进行布局的子代的 `layout` 或 `paint` 方法。
:::

## 什么是回流

渲染对象在创建完成并添加到渲染树时，只是将 DOM 节点和它对应的样式结合起来，并不包含位置和大小信息。所以还需要 `layout` 这一过程计算他们的位置和大小，这一过程称为回流。

### 全局布局和增量布局

全局布局是指触发了整个渲染树范围的布局，一般是同步的，触发原因可能包括：

1. 影响所有渲染对象的全局样式更改，例如字体大小更改。

2. 屏幕大小调整。

增量布局：是指对标记为 `dirty` 的渲染对象进行布局。一般是异步执行的，浏览器将增量布局的 `reflow` 命令” 加入队列，而调度程序会触发这些命令的批量执行。但是请求样式信息（例如 offsetHeight ）的脚本可同步触发增量布局。

::: tip 细节
为避免对所有细小更改都进行整体布局，浏览器采用了一种 dirty 位系统。如果某个渲染对象发生了更改，或者将自身及其子代标注为 “dirty”，则需要进行布局。

有两种标记：“dirty” 和  “children are dirty”。“children are dirty” 表示尽管渲染对象自身没有变化，但它至少有一个子代需要布局。
:::

触发条件：

回流这一阶段主要是计算节点的位置和几何信息，那么当页面布局和几何信息发生变化的时候，就需要回流

* 一个 DOM 元素的几何属性变化，常见的几何属性有 width、height、padding、margin、left、top、border 等等。

* 使 DOM 节点发生增减或者移动。

* 读写 offset 家族、scroll 家族和 client 家族属性的时候，浏览器为了获取这些值，需要进行回流操作。

* 调用 window.getComputedStyle 方法。

## 什么是重绘

通过构造渲染树和回流阶段，知道了哪些节点是可见的，以及可见节点的样式和具体的几何信息(位置、大小)，那么我们就可以将渲染树的每个节点都转换为屏幕上的实际像素，这个过程就叫做重绘。

在重绘阶段，系统会遍历渲染树，并调用渲染对象的 `paint` 方法，将渲染对象的内容显示在屏幕上。和布局一样，绘制也分为全局（绘制整个呈现树）和增量两种。

### 绘制顺序

绘制的顺序其实就是元素进入堆栈样式上下文的顺序。这些堆栈会从后往前绘制，因此这样的顺序会影响绘制。块渲染对象的堆栈顺序如下：

1. 背景颜色

2. 背景图片

3. 边框

4. 子代

5. 轮廓

触发条件：

重绘是一个元素外观的改变所触发的浏览器行为，例如改变 `visibility`、`outline`、`background-color` 等属性，这些属性只是影响元素的外观，风格，并且没有影响几何属性的时候，会导致重绘 ( repaint )

## 结合 performance 工具调试

下面是个小例子，结合 performance 工具调试一下更直观

```js
const box = document.querySelector('#box') 
const btn = document.querySelector('#btn') 
btn.addEventListener('click', () => { 
  box.style.width = '200px'
})
```

<img :src="$withBase('/assets/browser/ac51305ce07d4477a4e0c034261f6618_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

截图可以看是一条完整的渲染流程 JS / CSS > 样式 > 布局 > 绘制 > 合成

如果我们只是修改背景色

```js
box.style.background = '#fof'
```

<img :src="$withBase('/assets/browser/b8b8b2d082c3415f94754ed77a95b074_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

通过上图发现修改背景颜色，渲染流程跳过了 `Layout`（布局）这一环节，继续走绘制以及后面的流程。

## 像素管道

<img :src="$withBase('/assets/browser/e8eb9c27f3114a7293a16e1e7eb7736e_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

**上图是一张很经典的流程图，是浏览器运行的单个帧的渲染流水线，称为像素管道**

* **JavaScript**。一般来说，我们会使用 JavaScript 来实现一些视觉变化的效果。比如用 jQuery 的 `animate` 函数做一个动画、对一个数据集进行排序或者往页面里添加一些 DOM 元素等。当然，除了 JavaScript，还有其他一些常用方法也可以实现视觉变化效果，比如: CSS Animations、Transitions 和 Web Animation API。

* **样式计算**。此过程是根据匹配选择器（例如 `.headline` 或 `.nav > .nav__item`）计算出哪些元素应用哪些 CSS 规则的过程。从中知道规则之后，将应用规则并计算每个元素的最终样式。

* **布局**。在知道对一个元素应用哪些规则之后，浏览器即可开始计算它要占据的空间大小及其在屏幕的位置。网页的布局模式意味着一个元素可能影响其他元素，例如 `<body>` 元素的宽度一般会影响其子元素的宽度以及树中各处的节点，因此对于浏览器来说，布局过程是经常发生的。

* **绘制**。绘制是填充像素的过程。它涉及绘出文本、颜色、图像、边框和阴影，基本上包括元素的每个可视部分。绘制一般是在多个表面（通常称为层）上完成的。绘制其实是分为两个步骤 ：创建绘图调用的列表，填充像素。

* **合成**。由于页面的各部分可能被绘制到多层，由此它们需要按正确顺序绘制到屏幕上，以便正确渲染页面。对于与另一元素重叠的元素来说，这点特别重要，因为一个错误可能使一个元素错误地出现在另一个元素的上层。

单帧的渲染流水线每个环节都可能对性能产生影响，所以我们要尽可能减少管道执行步骤。不一定每帧都总是会经过管道每个部分的处理，实际上，不管是使用 JavaScript、CSS 还是网络动画，在实现视觉变化时，管道针对指定帧的运行通常有三种方式:

1. JS / CSS > 样式 > 布局 > 绘制 > 合成

<img :src="$withBase('/assets/browser/7b1195b9bb5c4768a4a28a09cbb25ea6_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

如果修改元素的 layout 属性，也就是触发了回流。例如改变元素的宽度、高度等，那么浏览器会触发重新布局，解析之后的一系列子阶段，这个过程就叫回流。回流需要更新完整的渲染流水线，所以开销也是最大的。

1. JS / CSS > 样式 > 绘制 > 合成

<img :src="$withBase('/assets/browser/4d027fe8cb704bf59741962feb1b10ec_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

如果修改了背景图片、文字颜色或阴影等不会影响页面布局的属性，则浏览器会跳过布局，但是后面的绘制以及后面的流程还是会执行的。

1. JS / CSS > 样式 > 合成

<img :src="$withBase('/assets/browser/65fa2eff94aa4a91bca2fc5d616e0516_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

有些属性可以使渲染流水线跳过布局和绘制环节，只需要做合成层的合并即可，例如：`transform` 和 `opacity` 属性。

只有元素提升为合成层后，`transform` 和 `opacity` 才不会触发 `paint`，如果不是合成层，则其依然会触发 `paint`。

**按照渲染流水线的顺序可知，回流一定会触发重绘，而重绘不一定发生回流**

::: tip 注意
如果想知道更改任何指定 CSS 属性将触发上述三个版本中的哪一个，请查看 [CSS 触发器](https://link.juejin.cn/?target=https%3A%2F%2Fcsstriggers.com%2F)。

如果要快速了解高性能动画，请阅读[更改仅合成器的属性](https://link.juejin.cn/?target=https%3A%2F%2Fdevelopers.google.cn%2Fweb%2Ffundamentals%2Fperformance%2Frendering%2Fstick-to-compositor-only-properties-and-manage-layer-count)部分。
:::

## 如何减少回流与重绘

上面我们已经介绍了像素管道相关内容，知道回流和重绘的代价是非常昂贵的，如果我们不停的在改变页面的布局，就会造成浏览器耗费大量的开销在进行页面的计算，对用户体验非常的不友好。减少回流与重绘前端性能优化重要手段之一。

### 减少强制同步布局

避免频繁读取会引发回流/重绘的属性，如果确实需要多次使用，就用一个变量缓存起来。

比如下属性或方法时，浏览器会立刻清空队列

读写 `offset` 家族、`scroll` 家族和 `client` 家族属性，以及 `getComputedStyle()` 方法和 `getBoundingClientRect()` 方法

::: tip 注意
现代浏览器会对频繁的回流或重绘操作进行优化，浏览器会维护一个队列，把所有引起回流和重绘的操作放入队列中，如果队列中的任务数量或者时间间隔达到一个阈值的，浏览器就会将队列清空，进行一次批处理，这样可以把多次回流和重绘变成一次。
:::

### 避免频繁操作 DOM

创建一个 `documentFragment`，DOM 操作都在 `documentFragment` 上执行，最后再把它挂载到他的父节点上。

```js
let container = document.getElementById('container')
let content = document.createDocumentFragment()
for(let i=0;i<10;i++){
  let li = document.createElement("li")
  li.innerHTML = 'li'+i
  content.appendChild(li)
}
container.appendChild(content)
```

### 开启GPU加速

样式中有类似像 `ps` 中图层的概念，每一层中的 `Layout` 和 `Paint` 互不影响。开启 `GPU` 加速元素会被单独提升到一层。

```html
<style>
#box{
    width: 100px;
    height: 100px;
    background: #f00;
    transition: 0.5s ease;
}
</style>
<body>
    <div id="box"></div>
    <button id="btn">点击</button>
</body>
</html>
<script>
    const box = document.querySelector('#box')
    const btn = document.querySelector('#btn')
    btn.addEventListener('click', () => {
       box.style.transform = 'translateX(200px)'
    })
</script>
```

<img :src="$withBase('/assets/browser/96a4f610b02147769747d593eba10526_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

有些文章有写到 `transform` 和 `opacity` 属性不会引起回流和重绘，但是上述例子（只截取动画开始部分）实际效果是在动画开始和结束的时候都有一次重绘（`Paint`。动画过程中只会发生 `**composite **`合成。那这里为什么会有重绘呢？是因为对 `transform` 和 `opacity` 应用了 `animation` 或者 `transition`属性是需要这两个属性是在过程中的，如果 `animation` 或者 `transition` 未开始或者已结束，那么提升合成层也会失效。所以动画开始前创建合成层发生一次重绘，动画结束后独立的合成层被移除，移除后会引发重绘。

在控制台的 Layers 工具可以看到合成层：

<img :src="$withBase('/assets/browser/c3e98d1e6e644818abe84833a4b01377_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

::: tip 注意
`WebKit` 内核的浏览器中，CSS3 的 `transform`、`opacity`、`filter` 这些属性就可以实现合成的效果，浏览器会将渲染层提升为合成层
:::

### 如何开启硬件加速呢？

* css 的 will-change 属性 [developer.mozilla.org/zh-CN/docs/…](https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FCSS%2Fwill-change)

* 不支持 will-change 的可以使用 translateZ(0)

::: tip 注意
`will-change` 不是开启硬件加速，它只是是一个属性，它允许我们向浏览器提示我们要为所选元素设置动画，并且应该针对这种情况进行优化，通常情况下，作用于t`ransform`,告诉浏览器使用`gpu`作用与这个属性的所有时间，从而不存在cpu=>gpu的切换

`translateZ(0)`只能针对于`translate`属性开启加速吧，不能作用与其他属性
:::

::: danger 警告
硬件加速不是万金油，单独创建合成层是有代价的，每创建一个合成层，就要为其分配内存，内存大小取决于复合层的数量

复合层的大小 层的管理也更为复杂，在一些低端和终端移动端设备中更为明显，滥用 GPU 加速会引起页面卡顿甚至闪退。
:::

### 不要滥用硬件加速

* 隐式合成

有两个元素绝对定位的元素 a,b ,他们有部分重叠，a 在下 b 在上，如果给 a 增加 translateZ(0) 属性或者别的属性，使得 a 元素提升到合成层，那么为了保持 a 在下 b 在上的这种关系，b 元素也会被提升到合成层。

举个例子：

```html
<style>
    .box1 {
        width: 100px;
        height: 100px;
        background-color: #999;
        position: absolute;
        left: 100px;
        top: 100px;
        transform: translateZ(0);
    }

    .box2 {
        width: 100px;
        height: 100px;
        background-color: #666;
        position: absolute;
        z-index: 10;
        left: 180px;
        top: 180px;
    }
</style>

<body>
    <div class="box1">a</div>
    <div class="box2">b</div>
</body>

</html>
```

<img :src="$withBase('/assets/browser/0372a570c10c4b6f9e983e8085debc12_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

上图中 a 提升到合成层 ，因为 a 层级低，为了保持原有的层级关系 会把b也提成为合成层。

我搞了个极端的例子 以手淘的网站为例 控制台给所有元素都提升到合成层

```css
*{
	transform: translateZ(0)
}
```

<img :src="$withBase('/assets/browser/1434e6b2b2214eb688f2de25e1aff488_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

试想一下如果我们不小把层级较低的元素提成为合成层 ，有可能造成大量的无意义的提升的合成层，虽然浏览器有层压缩机制，但是也有很多情况无法压缩，合成过多导致层爆炸浏览器崩溃，卡顿等等情况。

如果你现有项目 在一些低端或者终端移动设备不是那么流畅，可以排查一些是不是因为隐式合成导致的，可以结合调试工具看一下

是不是有很多黄色的块，如果存在大量的合成层肯定是不合理的，可以结合合成原因排查一下。

### 使用 requestAnimationFrame

`window.requestAnimationFrame()` 告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行

使用 `requestAnimationFrame` 替代 `setTimeout` 或 `setInterval` 来执行动画之类的视觉变化，避免轻易造成丢帧导致卡顿。

::: tip 注意
注意：不要在回调函数里调用会触发强制同步布局的属性或者方法
:::

### 使用 requestIdleCallback

`window.requestIdleCallback()` 方法将在浏览器的空闲时段内调用的函数排队。这使开发者能够在主事件循环上执行后台和低优先级工作，而不会影响延迟关键事件，如动画和输入响应。函数一般会按先进先调用的顺序执行，然而，如果回调函数指定了执行超时时间  `timeout`，则有可能为了在超时前执行函数而打乱执行顺序。

在 `requestIdleCallback` 的回调中构建 Document Fragment，然后在下一帧的 `requestAnimationFrame` 回调进行真实的 DOM 变动。

## 其他

* 将动画效果应用到 `position` 属性为 `absolute` 或 `fixed` 的元素上，给 `z-index` 层级变高一点。

* `top` `left` 使用 `transform` 代替。

* 避免使用 CSS 表达式/如：calc。

* 使用性能更高的选择器，如类选择器。同时可以选择性使用 BEM（块、元素、修饰符）规范。
