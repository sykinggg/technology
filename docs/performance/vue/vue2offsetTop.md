# Vue获取页面元素的相对位置

## 发现问题

```html
// html 结构
<div :class="['source-subnav', isFixed ? 'tab-nav-fixed' : '']" ref="subnav">
     <ul>
        <li class="active"><a href="javascript:;">首页推荐</a></li>
        <li><a href="javascript:;">最新发布</a></li>
     </ul>
</div>
```

```js
export default {
    data(){
        return {
            isFixed:false,
        }
    },	
    mounted(){
        if(this.$refs.subnav.getBoundingClientRect){
	    this.scrollTop(this.$refs.subnav.getBoundingClientRect())
        }
    },
    methods:{
	// 这是封装的一个方法
        scrollTop(h){
            console.log(h);
            this.utils.scrollTop((res)=>{
                this.isFixed = res.scrollH > h ? true :false;
            })
        }
    }
}
```

> utils.js

```js
// 该函数主要功能返回，滚动的高度以及文档占比窗口高度的百分比
utils.scrollTop = function(callback){
    // 页面总高
    var totalH = document.body.scrollHeight || document.documentElement.scrollHeight;
    // 可视高
    var clientH = window.innerHeight || document.documentElement.clientHeight;
    var result = {}
    window.addEventListener('scroll', function(e){
        // 计算有效高
        var validH = totalH - clientH
        // 滚动条卷去高度
        var scrollH = document.body.scrollTop || document.documentElement.scrollTop
        // 百分比
        result.percentage = (scrollH/validH*100).toFixed(2)
        result.scrollH = scrollH;
        callback && callback(result)
    })
}
```

<img :src="$withBase('/assets/cli/17013dfdf76aa8c2_tplv-t2oaga2asx-watermark.awebp')" alt="demo" />

可以看到该元素的距离顶部595px，正常显示
当我先滚动一段距离后，然后再次刷新，滚动条位置还会记录之前的位置，这是top为195px，这也是正常的，因为`getBoundingClientRect`是根据浏览器窗口进行定位置的
而我想要的是想要不管浏览器滚动条位置在何处时刷新浏览器，我所绑定的dom元素都是根据文档左上角进行定位的

<img :src="$withBase('/assets/performance/vue/17013dfe141e75c3_tplv-t2oaga2asx-watermark.awebp')" alt="demo" />

### offsetTop

网上有人说用`offsetTop`，其实`offsetTop`是对当前对象到其上级层顶部的距离。不能对其进行赋值.设置对象到页面顶部的距离请用`style.top`属性

## 获取元素距离文档顶部距离

::: tip 注意
返回值是一个 DOMRect 对象，这个对象是由该元素的 getClientRects() 方法返回的一组矩形的集合, 即：是与该元素相关的 CSS 边框集合。
DOMRect 对象包含了一组用于描述边框的只读属性: left、top、right 和 bottom，单位为像素。除了 width 和 height 外的属性都是相对于视口的左上角位置而言的。
getBoundingClientRect返回值
   top: 元素上边框距离视窗顶部的距离
   bottom: 元素下边框距离视窗顶部的距离
   left: 元素左边框距离视窗左侧的距离
   right: 元素右边框距离视窗左侧的距离
:::

由于`getBoundingClientRect`它们会随着视窗的滚动而相应的改变，那么元素距离页面顶部的距离就是,再加上滚动距离

```js
this.$refs.subnav.getBoundingClientRect().top + window.scrollY; 
// 或者
this.$refs.subnav.getBoundingClientRect().top+document.documentElement.scrollTop;
```

window.scrollY不兼容ie9，如需兼容请看[Window.scrollY](https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FAPI%2FWindow%2FscrollY)

> 修改上方代码

```js
if(this.$refs.subnav.getBoundingClientRect){
    var top1 =  this.$refs.subnav.getBoundingClientRect().top + window.scrollY
    var top2 = this.$refs.subnav.getBoundingClientRect().top+document.documentElement.scrollTop;
    console.log(top1)
    console.log(top2)
    this.scrollTop(top)
}
```

效果如下，不管滚动条何处位置都是一个相对文档最上面的左上角

<img :src="$withBase('/assets/performance/vue/17013dfe05de5eab_tplv-t2oaga2asx-watermark.awebp')" alt="demo" />

## 阮一峰

```js
function getElementTop(element){
    var actualTop = element.offsetTop;
    var current = element.offsetParent;

    while (current !== null){
        actualTop += current.offsetTop;
        current = current.offsetParent;
    }

    return actualTop;
}
```

### 实现原理

offsetTop可以返回元素距离offsetParent属性返回元素顶部的距离（如果父元素有定位的，那么将返回距离最近的定位元素，否则返回body元素，元素可能有多个定位元素，需要通过递归的方式层层获取距离，然后相加

**特别说明**： 需要将body的外边距设置为0，这样元素距离body顶部的距离就等同于距离文档顶部的距离

### 修改上方代码

```js
if(this.$refs.subnav.getBoundingClientRect){
    var top1 =  this.$refs.subnav.getBoundingClientRect().top + window.scrollY
    var top2 = this.$refs.subnav.getBoundingClientRect().top+document.documentElement.scrollTop;
    // getElementTop在上方 
    var top3 =  getElementTop(this.$refs.subnav)
    console.log(top1)
    console.log(top2)
    console.log(top3)
    this.scrollTop(top)
}
```

效果如下

<img :src="$withBase('/assets/performance/vue/17013dfe0422450c_tplv-t2oaga2asx-watermark.awebp')" alt="demo" />

## 总结三种方法获取元素距离文档顶部位置

```js
dom.getBoundingClientRect().top + window.scrollY; 
// 或者
dom.getBoundingClientRect().top+document.documentElement.scrollTop;
// 或者
function getElementTop(element){
    var actualTop = element.offsetTop;
    var current = element.offsetParent;

    while (current !== null){
        actualTop += current.offsetTop;
        current = current.offsetParent;
    }
    return actualTop;
}
```