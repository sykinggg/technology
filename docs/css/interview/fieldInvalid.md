# fixed失效

## 前言

在css中，我们常常需要用到定位`position`，它的属性设置值有`static`、`relative`，`absolute`，`fixed`。其中，当元素设置了`absolute`，`fixed`后，元素会脱离文档流，这两个属性的主要区别就是偏移位置的设置的参照元素，`absolute`是相对于**最近的非 `static` 祖先元素**定位，当这样的祖先元素不存在时，则相对于初始包含块（html）。`fixed`与`absolute`相似，但元素的包含块为 viewport 视口。问题来了，`fixed`一定会相对于viewport 视口定位吗？

## 例子

我们在项目的开发中常常会用到第三方UI组件库，如element UI等等，可以发现基本上这些UI组件关于messageBox，toast等这一类的弹窗是一般都是挂载在外层节点。这是为什么呢？我想我们接下来可以得到一些答案。

> html部分：

```html
<body>
    <div class="fixed-wrapper">
        <div class="fixed-box"></div>
        <button class="btn">点击弹出层</button>
    </div>
</body>
```

```html
<style>
    .fixed-wrapper {
        width: 100vw;
        height: 50vh;
        background-color: rgb(245, 241, 241);
        overflow: hidden;
        text-align: center;
    }
    .fixed-box {
        display: none;
        position: fixed;
        width: 100vw;
        height: 100px;
        bottom: 0;
        background-color: rgb(204, 204, 247);
    }
    .btn {
        margin: 10px;
    }
</style>
```

<img :src="$withBase('/assets/css/875d485529a8485a9e4e727c2e8ddda4_tplv-k3u1fbpfcp-watermark.webp')" alt="demo" />

如图所示这个效果就是我们想要的底部弹出效果，这个时候，另一个需求来了，我们需要父级可以相对于垂直居中，这个时候我们使用了`absolute`结合`transform`实现了垂直居中，但当我们再点击按钮，弹窗的位置不对了。

```css
.fixed-wrapper {
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    width: 100vw;
    height: 50vh;
    background-color: rgb(245, 241, 241);
    overflow: hidden;
    text-align: center;
}
```

<img :src="$withBase('/assets/css/1a2af30721df4f29b210d5a284066894_tplv-k3u1fbpfcp-watermark.webp')" alt="demo" />

## 探究

出现这个问题的时候，我查看了很多很文章，网上有些文章说是层叠上下文对fixed的影响，对此，我们先存疑，我们可以先看看哪些属性是会形成层叠上下文的，并一一试验一下：

层叠上下文由满足以下任意一个条件的元素形成：

1. 文档根元素（`<html>`）；

2. `position`值为 `absolute`（绝对定位）或  `relative`（相对定位）且 `z-index` 值不为 `auto` 的元素；

3. `position`值为 `fixed`（固定定位）；

4. flex 、grid容器的子元素，且 `z-index` 值不为 `auto`；

5. 元素的`opacity`值不是`1`.

6. 元素的`transform`值不是`none`.

7. 元素`mix-blend-mode`值不是`normal`.

8. 元素的`filter`值不是`none`.

9. 元素的`isolation`值是`isolate`.

10. `will-change`指定的属性值为上面任意一个。

11. 元素的`-webkit-overflow-scrolling`设为`touch`

层叠上下文确实会对子元素层级的显示有影响，换句话说，是影响了对元素的层级参考元素。在试验过程中发现：有些属性如`transform`、`filter`、`perspective`、`will-change`设为`transform`、`filter`、`perspective`会使`fixed`不是相对于视觉窗口定位。

但在这里，我不同意说这是因为层叠上下文致使`fixed`相对于视觉窗口定位失效了，我更倾向于说，是这些属性本身的特质影响了`fixed`的参考包含块。为此，我查了这些属性的w3c文档，于是发现了：

[关于transform的有](https://www.w3.org/TR/css-transforms-1/#transform-box)：

<img :src="$withBase('/assets/css/63632154744141ebbeeffd42d01231a9_tplv-k3u1fbpfcp-watermark.webp')" alt="demo" />

[关于filter的有](https://drafts.fxtf.org/filter-effects/#FilterProperty)：

<img :src="$withBase('/assets/css/22ae7a8612594818a17609f1859671f9_tplv-k3u1fbpfcp-watermark.webp')" alt="demo" />

[关于perspective的有](https://www.w3.org/TR/css-transforms-2/#perspective)：

<img :src="$withBase('/assets/css/9f2463459caf4cd383861eebc3cf1903_tplv-k3u1fbpfcp-watermark.webp')" alt="demo" />

::: tip 注意
意思就是：
**transform或filter不为none时**，`fixed`会相对于设置了transform或filter不为none的父元素相对定位，`absolute`是相对于最近的非 `static` 祖先元素定位，当这样的祖先元素不存在时，则相对于设置了transform或filter不为none的父元素， **perspective属性对元素的影响与transform一样**
:::

`will-change`设置了transform、filter、perspective，也会形成一个包含块，影响着`fixed`，`absolute`的定位

## 总结

在css中，有些属性设置会修改`absolute`、 `fixed`的定位位置的参考元素，如`transform`、`filter`、`perspective`等等。所以在使用过程中，我们可以利用这些属性，来改变定位位置的参考元素，而当我们需要保证元素的固定定位位置时，则应尽量避免这些属性对于定位位置的影响，即我们开头提到的，为何Element UI的messageBox，toast的html标签一般都是挂载在外层标签，我想这样也是为了避免用户在使用过程中，设置了`transform`、`filter`、`perspective`等影响了弹窗位置，以保证位置的固定。
