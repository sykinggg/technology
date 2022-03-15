### css基础面试

**1. 盒模型**
---

页面渲染时，dom 元素所采用的 **布局模型**。可通过`box-sizing`进行设置。根据计算宽高的区域可分为：

* `content-box` (W3C 标准盒模型)

* `border-box` (IE 盒模型)

* `padding-box` (FireFox 曾经支持)

* `margin-box` (浏览器未实现)

> Tips: 理论上是有上面 4 种盒子，但现在 w3c 与 mdn 规范中均只支持 `content-box` 与 `border-box`；

**2. BFC**
---

**块级格式化上下文**，是一个独立的渲染区域，让处于 BFC 内部的元素与外部的元素相互隔离，使内外元素的定位不会相互影响。

> IE下为 Layout，可通过 zoom:1 触发

* 触发条件:

    * 根元素
    
    * `position: absolute/fixed`
    
    * `display: inline-block / table`
    
    * `float` 元素
    
    * `ovevflow !== visible`

* 规则:
    
    * 属于同一个 BFC 的两个相邻 Box 垂直排列
    
    * 属于同一个 BFC 的两个相邻 Box 的 margin 会发生重叠
    
    * BFC 中子元素的 margin box 的左边， 与包含块 (BFC) border box的左边相接触 (子元素 absolute 除外)
    
    * BFC 的区域不会与 float 的元素区域重叠
    
    * 计算 BFC 的高度时，浮动子元素也参与计算
    
    * 文字层不会被浮动层覆盖，环绕于周围

* 应用:

    * 阻止`margin`重叠
    
    * 可以包含浮动元素 —— 清除内部浮动(清除浮动的原理是两个div都位于同一个 BFC 区域之中)
    
    * 自适应两栏布局
    
    * 可以阻止元素被浮动元素覆盖

**3.层叠上下文**
---

元素提升为一个比较特殊的图层，在三维空间中 (**z轴**) 高出普通元素一等。

* 触发条件

    * 根层叠上下文(`html`)
    
    * `position`
    
    * css3属性
        
        * `flex`
        
        * `transform`
        
        * `opacity`
        
        * `filter`
        
        * `will-change`
        
        * `-webkit-overflow-scrolling`
    
    * 层叠等级：层叠上下文在z轴上的排序
        
        * 在同一层叠上下文中，层叠等级才有意义
        
        * z-index的优先级最高

![示例图](https://user-gold-cdn.xitu.io/2019/2/14/168e9d9f3a1d368b?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

**4. 居中布局**
---

* 水平居中
    
    * 行内元素: `text-align: center`
    
    * 块级元素: `margin: 0 auto`
    
    * `absolute + transform`
    
    * `flex + justify-content: center`

* 垂直居中
    
    * `line-height: height`
    
    * `absolute + transform`
    
    * `flex + align-items: center`
    
    * `table`

* 水平垂直居中

    * `absolute + transform`

    * `flex + justify-content + align-items`

**5. 选择器优先级**
---

* `!important` > 行内样式 > `#id` > `.class` > `tag` > * > 继承 > 默认

* 选择器 从右往左 解析

**6.去除浮动影响，防止父级高度塌陷**
---

* 通过增加尾元素清除浮动

    * `:after / <br> : clear: both`

* 创建父级 BFC

* 父级设置高度

**7.link 与 @import 的区别**

* `link`功能较多，可以定义 RSS，定义 Rel 等作用，而`@import`只能用于加载 css

* 当解析到`link`时，页面会同步加载所引的 css，而`@import`所引用的 css 会等到页面加载完才被加载

* `@import`需要 IE5 以上才能使用

* `link`可以使用 js 动态引入，`@import`不行

**8. CSS预处理器(Sass/Less/Postcss)**

CSS预处理器的原理: 是将类 CSS 语言通过 **Webpack 编译** 转成浏览器可读的真正 CSS。在这层编译之上，便可以赋予 CSS 更多更强大的功能，常用功能:

* 嵌套

* 变量

* 循环语句

* 条件语句

* 自动前缀

* 单位转换

* mixin复用

**9.CSS动画**
* transition: 过渡动画

    * transition-property: 属性

    * transition-duration: 间隔

    * transition-timing-function: 曲线

    * transition-delay: 延迟

    * 常用钩子: transitionend

* animation / keyframes

    * animation-name: 动画名称，对应@keyframes

    * animation-duration: 间隔

    * animation-timing-function: 曲线

    * animation-delay: 延迟

    * animation-iteration-count: 次数

        * infinite: 循环动画

    * animation-direction: 方向

        * alternate: 反向播放

    * animation-fill-mode: 静止模式
        
        * forwards: 停止时，保留最后一帧
        
        * backwards: 停止时，回到第一帧
        
        * both: 同时运用 forwards / backwards

    * 常用钩子: animationend

* 动画属性: 尽量使用动画属性进行动画，能拥有较好的性能表现
    
    * translate
    
    * scale
    
    * rotate
    
    * skew
    
    * opacity
    
    * color

**经验**

通常，CSS 并不是重点的考察领域，但这其实是由于现在国内业界对 CSS 的专注不够导致的，真正精通并专注于 CSS 的团队和人才并不多。

## 平滑滚动

曾经有一段时间，不得不依靠JavaScript的`window.scrollY`来实现来执行此操作，如果想平滑滚动还要依赖定时器增加一个动画。 随着`scroll-behavior`属性的新增，可以使用一行CSS代码来处理网站上的平滑滚动！浏览器支持约为75％，兼容性还是挺不错的。

```css
html {
  scroll-behavior: smooth;
}
```

<img :src="$withBase('/assets/css/60ccc6bfb0764cfe953792eef68a79ab_tplv-k3u1fbpfcp-watermark.image')" alt="demo" />

### demo

> html

```html
<ul>
  
  <li >1</li>
  <li>1</li>
  <li>1</li>
  <li>1</li>
  <li>1</li>
  <li>1</li>
  <li>1</li>
  <li>1</li>
  <li>1</li>
   <li>1</li>
  <li>1</li>
  <li>1</li>
  <li>1</li>
  <li>1</li>
  <li>1</li>
  <li>1</li>
  <li>1</li>
  <li>1</li>
   <li>1</li>
  <li>1</li>
  <li>1</li>
  <li>1</li>
  <li>1</li>
  <li>1</li>
  <li>1</li>
  <li>1</li>
  <li>1</li>
   <li>1</li>
  <li>1</li>
  <li>1</li>
  <li>1</li>
  <li>1</li>
  <li>1</li>
  <li>1</li>
  <li>1</li>
  <li>1</li>
    <li>1</li>
  <li>1</li>
  <li>1</li>
  <li>1</li>
  <li>1</li>
  <li>1</li>
  <li>1</li>
  <li>1</li>
  <li>1</li>
   <li>1</li>
  <li>1</li>
  <li>1</li>
  <li>1</li>
  <li>1</li>
  <li >1</li>
  
</ul>
```

> css

```css
html {
  scroll-behavior: smooth;
}
ul{
  list-style:none
}
body {
  font-size : 50px;
  font-family: system-ui;
  background: #f06d06;
  color: white;
}
```

## 滚动抓捕

幻灯片、图片库这些也是前端高频使用功能，上一代`CSS`能力有限，不得不依赖`JavaScript`来完成这功能。现在只要几行代码就可以实现此功能。
从某种意义上说，它与`Flexbox`或`CSS Grid`的工作原理类似，即您需要一个容器元素，在该容器元素上设置`scrolln-snap-type`和多个为其设置了`scroll-snap-align`的子元素，如下所示：

```html
<main class=”parent”>
  <section class=”child”></section>
  <section class=”child”></section>
  <section class=”child”></section>
</main>
```

```css
.parent {
  scroll-snap-type: x mandatory;
}

.child {
  scroll-snap-align: start;
}
```

<img :src="$withBase('/assets/css/35cab35c6ad345e09cf9ea8c3cec8021_tplv-k3u1fbpfcp-watermark.image')" alt="demo" />

### demo

> html

```html
<main class="slides">
  <section class="section-1">
    <h2>向右滑动 >>></h2>
  </section>
  <section class="section-2">
    <h3>再滑 >>></h3>
  </section>
  <section class="section-3">
    <h2>再滑 >>></h2>
  </section>
  <section class="section-4">
    <h3>不用JavaScript啦</h3>
  </section>
</main>
```

> css

```css
body {
  overflow-y: hidden;
}

.slides {
  /* We set the scroll snapping */
  scroll-snap-type: x mandatory;
  /* Necessary for mobile scrolling */
  -webkit-overflow-scrolling: touch;
  /* For layout purposes */
  display: flex;
  /* To allow horizontal scrolling */
  overflow-x: scroll;
}

section {
  /* For styling purposes */
  height: 100vh;
  min-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* Set where the snapping should happen */
  scroll-snap-align: start;
}

/* Styling for the sections */
section h2 {
  font-family: system-ui, sans-serif;
  font-size: 2rem;
  color: #1a1a1a;
  font-weight: 100;
}

section h3 {
  font-family: system-ui, sans-serif;
  font-size: 2rem;
  color: #ffffff;
  font-weight: 100;
}

.section-1 {
  background-image: url("https://images.unsplash.com/photo-1524260855046-f743b3cdad07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1401&q=80");
}

.section-2 {
  background-image: url("https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80");
}

.section-3 {
  background-image: url("https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1378&q=80");
}

.section-4 {
  background-image: url("https://images.unsplash.com/photo-1501791330673-603715379ded?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");
}
```