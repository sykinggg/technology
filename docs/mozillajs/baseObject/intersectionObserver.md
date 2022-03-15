# Intersection Observer API

交叉口观察者API提供了一种异步地观察目标元素与祖先元素或[顶级文档的视口](https://developer.mozilla.org/en-US/docs/Glossary/Viewport)的交叉点的方法。

从历史上看，检测元素的可见性或相互关系的两个元素的相对可见性，这是​​一种艰难的任务，该解决方案不可靠，并且容易导致浏览器和用户访问的站点变得缓慢。随着Web已经成熟，需要这种信息的需求。有很多原因需要交叉信息，例如：

* 当页面滚动时，图像或其他内容的懒散加载。

* 实现“无限滚动”网站，在滚动时加载和呈现越来越多的内容，以便用户不必翻阅页面。

* 报告广告的可见度，以计算广告收入。

* 根据用户是否会看到结果来决定是否执行任务或动画过程。

在过去的涉及事件处理程序中实现交叉路口检测，循环调用`Element.getBoundingClientRect()`等方法，以构建受影响的每个元素的所需信息。由于所有这些代码都在主线程上运行，因此即使其中一个可能导致性能问题。当网站加载这些测试时，事情会彻头彻尾的丑陋。

考虑一个使用无限滚动的网页。它使用一个供应商提供的库来管理定期放置在整个页面的广告，在这里和那里有动画图形，并使用一个自定义库来绘制通知框和类似内容。每一个都有自己的交叉检测程序，都在主线程上运行。网站的作者甚至可能没有意识到这种情况的发生，因为他们可能对他们正在使用的两个库的内部工作原理知之甚少。当用户滚动页面时，这些交叉检测例程在滚动处理代码中不断启动，导致用户对浏览器、网站和他们的计算机感到沮丧。

交叉观察者API让代码注册一个回调函数，当他们希望监控的元素进入或退出另一个元素（或视口），或者当两者相交的量发生所要求的变化时，该函数就会被执行。这样，网站就不再需要在主线程上做任何事情来观察这种元素的交集，而浏览器则可以根据自己的需要来优化交集的管理。

交叉观察者API有一点不能告诉你：重叠的像素的确切数量或具体是哪些像素；然而，它涵盖了更常见的使用情况："如果它们相交的地方大约有N%，我需要做一些事情。"

## 交叉口观察者概念和用法

交叉观察者API允许你配置一个回调，当这些情况发生时被调用。

* **目标**元素与**设备的视口**或**指定元素相交**。出于交叉口观察者API的目的，该指定元素称为根元素或根。

* 第一次，观察者最初被要求观察一个目标元素。

通常情况下，你想观察与目标元素最接近的可滚动祖先的相交变化，或者，如果目标元素不是可滚动元素的后代，则是设备的视口。要观察相对于设备视口的交集，请为根选项指定null。继续阅读关于相交观察器选项的更详细的解释。

无论你是使用视口还是其他元素作为根，API的工作方式都是一样的，每当目标元素的可见性发生变化，使其与根的交集达到所需数量时，就会执行你提供的回调函数。

目标元素和它的根之间的交集程度是交集率。这是对目标元素的百分比的表示，它是一个在0.0和1.0之间的可见值。

### 创建交叉观察者

通过调用其构造函数来创建交集观测器，并传递给它一个回调函数，每当一个方向的阈值被越过时就会运行。

```js
let options = {
  root: document.querySelector('#scrollArea'),
  rootMargin: '0px',
  threshold: 1.0
}

let observer = new IntersectionObserver(callback, options);
```

阈值为1.0意味着当100%的目标在根选项所指定的元素内可见时，回调被调用。

### 交叉口观察者选项

传递给 [IntersectionObserver()](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver) 构造函数的选项对象让您可以控制调用观察者回调的情况。它有以下字段：

### 1.root

用来作为检查目标可见性的视口的元素。必须是目标的祖先。如果没有指定或为空，则默认为浏览器的视口。

### 2.rootMargin

根部周围的边距。可以有类似于CSS margin属性的值，例如 "10px 20px 30px 40px"（上、右、下、左）。这些值可以是百分比。这组数值的作用是在计算交叉点之前增长或缩小根元素的边界框的每一边。默认为全部为零。

### 3.threshold

一个单一的数字或者一个数字数组，表示在目标的可见度达到多少百分比时，观察者的回调应该被执行。如果你只想在可见度超过50%的时候进行检测，你可以使用0.5的值。如果你想让回调在每次可见度再过25%时运行，你可以指定数组[0, 0.25, 0.5, 0.75, 1]。默认值是0（意味着只要有一个像素是可见的，回调就会被运行）。1.0的值意味着直到每个像素都是可见的，才认为通过了阈值。

### 锁定一个要观察的要素

一旦你创建了观察者，你需要给它一个目标元素来观察：

```js
let target = document.querySelector('#listItem');
observer.observe(target);

// 我们为观察者设置的回调现在将第一次执行
// 它一直等到我们为观察者分配一个目标（即使目标当前不可见）
```

每当目标达到为IntersectionObserver指定的阈值时，回调就被调用。该回调接收一个[IntersectionObserverEntry](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry)对象的列表和观察者。

```js
let callback = (entries, observer) => {
  entries.forEach(entry => {
    // Each entry describes an intersection change for one observed
    // target element:
    //   entry.boundingClientRect
    //   entry.intersectionRatio
    //   entry.intersectionRect
    //   entry.isIntersecting
    //   entry.rootBounds
    //   entry.target
    //   entry.time
  });
};
```

回调收到的条目列表包括每个报告其相交状态变化的目标的一个条目。检查[isIntersecting](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/isIntersecting)属性的值，看该条目是否代表一个当前与根相交的元素。

请注意，你的回调是在主线程上执行的。它应该尽可能快地运行；如果需要做任何耗时的事情，请使用[Window.requestIdleCallback()](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestIdleCallback)。

::: tip 注意
另请注意，如果您指定了 root 选项，则目标必须是根元素的后代。
:::

## 交叉点是如何计算的

Intersection Observer API 考虑的所有区域都是矩形；不规则形状的元素被认为占据了包含元素所有部分的最小矩形。类似地，如果元素的可见部分不是矩形，则元素的相交矩形被解释为包含元素所有可见部分的最小矩形。

了解一下 [IntersectionObserverEntry](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry) 提供的各种属性如何描述交集是很有用的。

## 交集根和根边距

在我们跟踪元素与容器的交集之前，我们需要知道容器是什么。该容器是交集根或根元素。这可以是文档中的特定元素，它是要观察的元素的祖先，也可以是 null 以使用文档的视口作为容器。

根交叉矩形是用于检查一个或多个目标的矩形。这个矩形是这样确定的：

* 如果交叉根是隐式根（即[顶级文档](https://developer.mozilla.org/en-US/docs/Web/API/Document)），则根交叉矩形是视口的矩形。

* 如果交叉根有溢出，则根交叉矩形是根元素的内容区域。

* 否则，根交点矩形是交点根的边界客户端矩形（通过对其调用 [getBoundingClientRect()](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect) 返回）。

在创建 [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver) 时，可以通过设置根边距 **rootMargin** 进一步调整根交叉矩形。 rootMargin 中的值定义了添加到交叉根边界框每一侧的偏移量，以创建最终交叉根边界（在执行回调时在 [IntersectionObserverEntry.rootBounds](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/rootBounds) 中公开）。

Intersection Observer API 使用**阈值**，而不是报告目标元素可见程度的每一个无穷小变化。创建观察者时，您可以提供一个或多个数值，代表可见的目标元素的百分比。然后，API 仅报告超过这些阈值的可见性更改。

例如，如果您希望在每次目标的可见性通过每个 25% 标记向后或向前移动时收到通知，您可以在创建观察者时将数组 [0, 0.25, 0.5, 0.75, 1] 指定为阈值列表。

当回调被调用时，它会收到一个 IntersectionObserverEntry 对象的列表，每个观察到的目标都有一个，它与根变化相交的程度使得暴露的数量在任一方向上超过一个阈值。

你可以通过查看条目的[isIntersecting](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/isIntersecting)属性来了解目标当前是否与根相交；如果其值为真，则目标至少与根元素或文档部分相交。这可以让你确定该条目是代表从元素相交到不再相交的过渡，还是代表从不相交到相交的过渡。

::: tip 注意
请注意，可能存在非零相交矩形，如果相交恰好沿着两者之间的边界或 boundingClientRect 的面积为零，则可能会发生这种情况。共享边界线的目标和根的这种状态不足以被视为过渡到相交状态
:::

为了了解阈值的工作原理，请尝试滚动下面的方框。其中的每个彩色方框都显示其四个角上可见的自身的百分比，因此你可以看到这些比例随着你滚动容器而发生变化。每个盒子都有一组不同的阈值。

* 第一个框为每个百分比的可见度设置阈值；也就是说，[IntersectionObserver.thresholds](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/thresholds) 数组是 [0.00, 0.01, 0.02, ..., 0.99, 1.00]。

* 第二个框有一个阈值，即 50% 标记。

* 第三个框每 10% 的可见度（0%、10%、20% 等）设置一个阈值。

* 最后一个框有每个 25% 的阈值。

[demo 事例](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#how_intersection_is_calculated)

## 裁剪和相交矩形

浏览器按如下方式计算最终的交集矩形；这一切都已为您完成，但了解这些步骤有助于更好地准确掌握何时会发生交集。

1. 目标元素的边界矩形（即完全包围构成元素的每个组件的边界框的最小矩形）是通过在目标上调用 [getBoundingClientRect()](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect) 获得的。这是相交矩形可能是最大的。剩余的步骤将删除任何不相交的部分。

2. 从目标的直接父块开始并向外移动，每个包含块的剪辑（如果有）都应用于相交矩形。块的剪裁是根据两个块的交集和溢出属性指定的剪裁模式（如果有）确定的。将[溢出](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow)设置为不可见的任何内容都会导致发生剪切。

3. 如果包含元素之一是嵌套浏览上下文的根（例如包含在 `<iframe>` 中的文档，则交叉矩形将被剪切到包含上下文的视口，并且通过容器向上递归继续容器的包含块。因此，如果到达 `<iframe>` 的顶层，则交集矩形将被裁剪到框架的视口，然后框架的父元素是下一个向交集根递归通过的块。

4. 当向上递归到达交点根时，生成的矩形被映射到交点根的坐标空间。

5. 然后通过将其与根交叉矩形相交来[更新结果矩形](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#root-intersection-rectangle)。

6. 最后，这个矩形被映射到目标[文档](https://developer.mozilla.org/en-US/docs/Web/API/Document)的坐标空间。

### 交叉点变更回调

当根元素中可见的目标元素的数量超过其中一个可见性阈值时，[IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver)对象的回调被执行。该回调接收所有[IntersectionObserverEntry](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry)对象的数组作为输入，每个被越过的阈值都有一个，还有一个对`IntersectionObserver`对象本身的引用。

阈值列表中的每个条目是一个[IntersectionObserverEntry](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry)对象，描述了一个被跨越的阈值；也就是说，每个条目描述了一个给定元素与根元素相交的程度，该元素是否被认为是相交的，以及发生转变的方向。

下面的代码片段显示了一个回调，它保留了一个计数器，记录元素从不与根相交到至少相交75%的次数。对于阈值为0.0（默认）的回调，在[isIntersecting](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/isIntersecting)的布尔值转换时被调用。因此，该片段首先检查过渡是否为正值，然后确定[intersectionRatio](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/intersectionRatio)是否高于75%，在这种情况下，它会增加计数器。

```js
intersectionCallback(entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      let elem = entry.target;

      if (entry.intersectionRatio >= 0.75) {
        intersectionCounter++;
      }
    }
  });
}
```

## Interfaces

### IntersectionObserver

Intersection Observer API 的主要接口。提供创建和管理观察者的方法，观察者可以观察相同交叉配置的任意数量的目标元素。每个观察者都可以异步观察一个或多个目标元素与共享祖先元素之间的交集或与其顶级文档视口的变化。祖先或视口称为根。

### IntersectionObserverEntry

描述在特定转换时刻目标元素与其根容器之间的交集。这种类型的对象只能通过两种方式获得：作为 IntersectionObserver 回调的输入，或通过调用 [IntersectionObserver.takeRecords()](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/takeRecords)。

## 栗子

这个简单的例子使目标元素在变得或多或少可见时改变它的颜色和透明度。[在 Intersection Observer API 的计时元素可见性中](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)，您可以找到一个更广泛的示例，该示例展示了如何计时一组元素（例如广告）对用户可见的时间，以及如何通过记录统计信息或更新元素来对该信息做出反应..

### HTML

此示例的 HTML 非常简短，主要元素是我们将定位的框（带有广告素材 ID“框”）和框内的一些内容。

```html
<div id="box">
  <div class="vertical">
    Welcome to <strong>The Box!</strong>
  </div>
</div>
```

### CSS

就本示例而言，CSS 并不是非常重要；它布置元素并确定背景颜色和边框属性可以参与 CSS 过渡，我们将使用它们来影响元素的变化，因为它或多或少地变得模糊。

```css
#box {
  background-color: rgba(40, 40, 190, 255);
  border: 4px solid rgb(20, 20, 120);
  transition: background-color 1s, border 1s;
  width: 350px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.vertical {
  color: white;
  font: 32px "Arial";
}

.extra {
  width: 350px;
  height: 350px;
  margin-top: 10px;
  border: 4px solid rgb(20, 20, 120);
  text-align: center;
  padding: 20px;
}
```

### JS

最后，让我们看一下使用 `Intersection Observer API` 使事情发生的 JavaScript 代码。

```js
const numSteps = 20.0;

let boxElement;
let prevRatio = 0.0;
let increasingColor = "rgba(40, 40, 190, ratio)";
let decreasingColor = "rgba(190, 40, 40, ratio)";

// Set things up
window.addEventListener("load", (event) => {
  boxElement = document.querySelector("#box");

  createObserver();
}, false);
```

我们在这里设置的常量和变量是：

### numSteps

  一个常数，表示我们希望在 0.0 和 1.0 的可见性比率之间有多少个阈值。

### prevRatio

  此变量将用于记录上次越过阈值时的能见度；这将让我们弄清楚目标元素是变得越来越可见还是越来越不可见。

### increasingColor

  一个字符串，它定义了当可见性比率增加时我们将应用于目标元素的颜色。此字符串中的单词“ratio”将替换为目标的当前可见性比率，因此元素不仅会改变颜色，而且会随着变得不那么模糊而变得越来越不透明。

### decreasingColor

  类似地，这是一个字符串，它定义了当可见性比率下降时我们将应用的颜色。

我们调用[Window.addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)开始监听加载事件；一旦页面[加载](https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event)完毕，我们就用[querySelector()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)获得一个ID为 "box "的元素的引用，然后调用我们稍后要创建的createObserver()方法来处理构建和安装交叉点观察器。

## 创建交叉点观察者

一旦页面加载完成，将调用 `createObserver()` 方法来处理实际创建新的 [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver) 并开始观察目标元素的过程。

```js
function createObserver() {
  let observer;

  let options = {
    root: null,
    rootMargin: "0px",
    threshold: buildThresholdList()
  };

  observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(boxElement);
}
```

首先设置一个包含观察者设置的选项对象。我们想观察目标元素相对于文档视口的可见性变化，所以 root 为空。我们不需要边距，因此边距偏移量 `rootMargin` 被指定为“0px”。这会导致观察者观察目标元素边界与视口边界之间的交集的变化，而不会增加（或减少）任何空间。

可见率阈值列表，阈值，由函数 buildThresholdList() 构造。在此示例中，阈值列表是以编程方式构建的，因为它们有很多，而且数量是可调整的。

一旦选项准备好，我们创建新的观察者，调用 [IntersectionObserver()](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver) 构造函数，指定一个函数，当交集跨越我们的阈值之一、handleIntersect() 和我们的选项集时要调用的函数。然后我们对返回的观察者调用[observe()](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/observe)，将所需的目标元素传递给它。

如果我们想这样做，我们可以选择通过为每个元素调用 `observer.observe()` 来监视多个元素相对于视口的可见性交集变化。

## 构建阈值比率数组

构建阈值列表的 `buildThresholdList()` 函数如下所示：

```js
function buildThresholdList() {
  let thresholds = [];
  let numSteps = 20;

  for (let i=1.0; i<=numSteps; i++) {
    let ratio = i/numSteps;
    thresholds.push(ratio);
  }

  thresholds.push(0);
  return thresholds;
}
```

这就建立了阈值数组--每个阈值都是0.0和1.0之间的比率，对于1和numSteps之间的每个整数i，它都会把数值i/numSteps推到阈值数组中。它还推送0来包括该值。考虑到numSteps的默认值（20），其结果是以下的阈值列表。

|  #  |	Ratio  |	#  |	Ratio |
|----|----|----|----|
|  1  |	0.05  |	11  |	0.55 |
|  2  |	0.1	  |12	  | 0.6 |
|  3  |	0.15  |	13  |	0.65 |
|  4  |	0.2	  |14	  | 0.7 |
|  5  |	0.25  |	15  |	0.75 |
|  6  |	0.3	  |16	  | 0.8 |
|  7  |	0.35  |	17  |	0.85 |
|  8  |	0.4	  |18	  | 0.9 |
|  9  |	0.45  |	19  |	0.95 |
|  1  |0	0.5  |	20  |	1.0 |

当然，我们可以将阈值数组硬编码到我们的代码中，通常这就是您最终要做的事情。但是这个示例为添加配置控件以调整粒度留下了空间，例如。

## 处理交叉点变化

当浏览器检测到目标元素（在我们的例子中，ID 为“`box`”的元素）已经被揭开或被遮挡，以至于它的可见性比率超过了我们列表中的阈值之一时，它会调用我们的处理程序函数 `handleIntersect()` ：

```js
function handleIntersect(entries, observer) {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > prevRatio) {
      entry.target.style.backgroundColor = increasingColor.replace("ratio", entry.intersectionRatio);
    } else {
      entry.target.style.backgroundColor = decreasingColor.replace("ratio", entry.intersectionRatio);
    }

    prevRatio = entry.intersectionRatio;
  });
}
```

