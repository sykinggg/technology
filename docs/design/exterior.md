# 外观模式

## 外观模式

当提出一个门面，要向这个世界展现的是一个外观，这一外观可能藏匿着一种非常与众不同的真实。这就是即将要回顾的模式背后的灵感——门面模式。这一模式提供了面向一种更大型的代码体提供了一个的更高级别的舒适的接口，隐藏了其真正的潜在复杂性。把这一模式想象成要是呈现给开发者简化的API，一些总是会提升使用性能的东西。

门面是一种经常可以在`Javascript`库中看到的结构性模式，像在`jQuery`中，尽管一种实现可能支持带有广泛行为的方法，但仅仅只有这些方法的“门面”或者说被限制住的抽象才会公开展现出来供人们所使用。

这允许直接同门面，而不是同幕后的子系统交互。不论何时使用`jQuery`的`$(el).css`或者`$(el).animate()`方法，实际上都是在使用一个门面——更加简单的公共接口让避免为了使得行为工作起来而不得不去手动调用`jQuery`核心的内置方法。这也避免了手动同`DOM API`交互和维护状态变量的需要。

应该考虑对`jQuery`的核心方法做一层中间抽象。对于开发者来说更直接的负担是`DOM API`，而门面使得`jQuery`使用起来如此的容易。

为了在所学的基础上进行构建，门面模式同时需要简化一个类的接口，和把类同使用它的代码解耦。这给予了使用一种方式直接同子系统交互的能力，这一方式有时候会比直接访问子系统更加不容易出错。门面的优势包括易用，还有常常实现起这个模式来只是一小段路，不费力。

让通过实践来看看这个模式。这是一个没有经过优化的代码示例，但是这里使用了一个门面来简化跨浏览器事件监听的接口。创建了一个公共的方法来实现，此方法 能够被用在检查特性的存在的代码中，以便这段代码能够提供一种安全和跨浏览器兼容方案。

```js
var addMyEvent = function( el,ev,fn ){

   if( el.addEventListener ){
            el.addEventListener( ev,fn, false );
      }else if(el.attachEvent){
            el.attachEvent( "on" + ev, fn );
      } else{
           el["on" + ev] = fn;
    }

};
```

都熟知`jQuery`的`$(document).ready(..)`，使 用了一种类似的方式。在内部，这实际上是考一个叫做`bindReady()`的方法来驱动的，它做了一些这样的事：

```js
bindReady: function() {
    ...
    if ( document.addEventListener ) {
      // Use the handy event callback
      document.addEventListener( "DOMContentLoaded", DOMContentLoaded, false );

      // A fallback to window.onload, that will always work
      window.addEventListener( "load", jQuery.ready, false );

    // If IE event model is used
    } else if ( document.attachEvent ) {

      document.attachEvent( "onreadystatechange", DOMContentLoaded );

      // A fallback to window.onload, that will always work
      window.attachEvent( "onload", jQuery.ready );
```

这是门面的另外一个例子，其它人只需要使用被`$(document).ready(...)`有限暴露的简单接口，而更加复杂的实现被从视野中隐藏了。

门面不仅仅只被用在它们自己身上，它们也能够被用来同其它的模式诸如模块模式进行集成。如在下面所看到的，模块模式的实体包含许多被定义为私有的方法。门面则被用来提供访问这些方法的更加简单的`API`：

```js
var module = (function() {

    var _private = {
        i:5,
        get : function() {
            console.log( "current value:" + this.i);
        },
        set : function( val ) {
            this.i = val;
        },
        run : function() {
            console.log( "running" );
        },
        jump: function(){
            console.log( "jumping" );
        }
    };

    return {

        facade : function( args ) {
            _private.set(args.val);
            _private.get();
            if ( args.run ) {
                _private.run();
            }
        }
    };
}());

// Outputs: "current value: 10" and "running"
module.facade( {run: true, val:10} );
```

在这个示例中，调用`module.facade()`将会触发一堆模块中的私有方法。但再一次，用户并不需要关心这些。已经使得对用户而言不需要担心实现级别的细节就能消受一种特性。

## 关于抽象的注意事项

门面一般没有多少缺陷，但是性能是值得注意的问题。也就是说，需要确定门面在为提供实现的同时是否为带来了隐性的消耗，如果是这样的话，那么这种消耗是否合理。回到`jQuery`库，都知道`getElementById('identifier')`和`$("#identifier")`都能够被用来借助ID查找页面上的一个元素。

然而你是否知道`getElementById()`拥有更高数量级的速度呢？来瞧瞧这个`jsPerf`的测试，看一看在每一个浏览器级别的结果：[http://jsperf.com/getelementbyid-vs-jquery-id。当然现在，应该牢记在心的是jQuery（和Sizzle-它的的选择器引擎）在幕后对的查询（而这返回的是一个jQuery对象，并不是一个DOM节点）做了更大量的优化。](http://jsperf.com/getelementbyid-vs-jquery-id%E3%80%82%E5%BD%93%E7%84%B6%E7%8E%B0%E5%9C%A8%EF%BC%8C%E6%88%91%E4%BB%AC%E5%BA%94%E8%AF%A5%E7%89%A2%E8%AE%B0%E5%9C%A8%E5%BF%83%E7%9A%84%E6%98%AFjQuery%EF%BC%88%E5%92%8CSizzle-%E5%AE%83%E7%9A%84%E7%9A%84%E9%80%89%E6%8B%A9%E5%99%A8%E5%BC%95%E6%93%8E%EF%BC%89%E5%9C%A8%E5%B9%95%E5%90%8E%E5%AF%B9%E6%88%91%E4%BB%AC%E7%9A%84%E6%9F%A5%E8%AF%A2%EF%BC%88%E8%80%8C%E8%BF%99%E8%BF%94%E5%9B%9E%E7%9A%84%E6%98%AF%E4%B8%80%E4%B8%AAjQuery%E5%AF%B9%E8%B1%A1%EF%BC%8C%E5%B9%B6%E4%B8%8D%E6%98%AF%E4%B8%80%E4%B8%AADOM%E8%8A%82%E7%82%B9%EF%BC%89%E5%81%9A%E4%BA%86%E6%9B%B4%E5%A4%A7%E9%87%8F%E7%9A%84%E4%BC%98%E5%8C%96)

这个特定的门面模式所面临的挑战就是，为了提供一种优雅的接受和转换多种查询类型的选择器功能，就会有在抽象上的隐性成本。用户并不需要访问`jQuery.getById("identifier")`或者`jQuery.getbyClass("identifier")`等等方法。那就是说，在性能上权衡已经通过了多年的实践考量，并且带了`jQuery`的成功，一个实际上为团队工作得很好的门面。

