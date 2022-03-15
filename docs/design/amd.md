# AMD 模块

## 在浏览器中编写模块化Javascript的格式

> AMD (异步模块定义`Asynchronous Module Definition`)格式的最终目的是提供一个当前开发者能使用的模块化`Javascript`方案。它出自于`Dojo`用`XHR+eval`的实践经验，这种格式的支持者想在以后的项目中避免忍受过去的这些弱点。
>
> `AMD`模块格式本身是模块定义的一个建议，通过它模块本身和模块之间的引用可以被异步的加载。它有几个明显的优点，包括异步的调用和本身的高扩展性，它实现了解耦，模块在代码中也可通过识别号进行查找。当前许多开发者都喜欢使用它，并且认为它朝`ES Harmony`(es6 module)提出模块化系统 迈出了坚实的一步。
>
> 最开始`AMD`在`CommonJs`的列表中是作为模块化格式的一个草案，但是由于它不能达到与模块化完全一致，更进一步的开发被移到了在`amdjs`组中。
>
> 现在，它包含工程`Dojo`、`MooTools`、`Firebug`以及`jQuery`。尽管有时你会看见`CommonJS` `AMD` 格式化术语，但最好的和它相关的是`AMD`或者是异步模块支持，同样不是所有参与到`CommonJS`列表的成员都希望与它产生关系。

> 注意：曾有一段时间涉及`Transport/C`模块的提议规划没有面向已经存在的`CommonJS`模块，但是对于定义模块来说，它对选择`AMD`命名空间约定产生了影响。

## 从模块开始

> 关于AMD值得特别注意的两个概念就是：一个帮助定义模块的`define`方法和一个处理依赖加载的`require`方法。`define`被用来通过下面的方式定义命名的或者未命名的模块：

```js
define(
    module_id /*可选的*/,
    [dependencies] /*可选的*/,
    definition function /*用来实例化模块或者对象的方法*/
);
```

> 通过代码中的注释可以发现，`module_id` 是可选的，它通常只有在使用非AMD连接工具的时候才是必须的（可能在其它不是特别常见的情况下，它也是有用的）。当不存在`module_id`参数的时候，称这个模块为匿名模块。
>
> 当使用匿名模块的时候，模块认定的概念是DRY的，这样使它在避免文件名和代码重复的时候显得很微不足道。因为这样一来代码方便切换，你可以很容易地把它移动到其它地方（或者文件系统的其他位置），而不需要更改代码内容或者它的模块ID。你可以认为模块`id`跟文件路径的概念是相似的。
>
> 注意：开发者们可以将同样的代码放到不同的环境中运行，只要他们使用一个在`CommonJS`环境下工作的`AMD`优化器（比如`r.js`）就可以了。
>
> 在回来看define方法签名, `dependencies`参数代表了正在定义的模块需要的`dependency`数组，第三个参数("`definition function`" or "`factory function`") 是用来执行的初始化模块的方法。 一个正常的模块可以像下面那样定义：

**Understanding AMD: define()**

```js
// A module_id (myModule) is used here for demonstration purposes only
define( "myModule",

    ["foo", "bar"],

    // module definition function
    // dependencies (foo and bar) are mapped to function parameters
    function ( foo, bar ) {
        // return a value that defines the module export
        // (i.e the functionality we want to expose for consumption)

        // create your module here
        var myModule = {
            doStuff:function () {
                console.log( "Yay! Stuff" );
            }
        };

    return myModule;
});

// An alternative version could be..
define( "myModule",

    ["math", "graph"],

    function ( math, graph ) {

        // Note that this is a slightly different pattern
        // With AMD, it's possible to define modules in a few
        // different ways due to it's flexibility with
        // certain aspects of the syntax
        return {
            plot: function( x, y ){
                return graph.drawPie( math.randomGrid( x, y ) );
            }
        };
});
```

> 另一方面，`require`被用来从一个顶级文件或者模块里加载代码，而这是原本就希望的动态加载依赖的位置。它的一个用法如下：

### 理解AMD: require()

```js
// Consider "foo" and "bar" are two external modules
// In this example, the "exports" from the two modules
// loaded are passed as function arguments to the
// callback (foo and bar) so that they can similarly be accessed

require(["foo", "bar"], function ( foo, bar ) {
        // rest of your code here
        foo.doSomething();
});
```

### 动态加载依赖

```js
define(function ( require ) {
    var isReady = false, foobar;

    // note the inline require within our module definition
    require(["foo", "bar"], function ( foo, bar ) {
        isReady = true;
        foobar = foo() + bar();
    });

    // we can still return a module
    return {
        isReady: isReady,
        foobar: foobar
    };
});
```

### 理解 AMD: 插件

下面是定义一个兼容AMD插件的例子:

```js
// With AMD, it's possible to load in assets of almost any kind
// including text-files and HTML. This enables us to have template
// dependencies which can be used to skin components either on
// page-load or dynamically.

define( ["./templates", "text!./template.md","css!./template.css" ],

    function( templates, template ){
        console.log( templates );
        // do something with our templates here
    }

});
```

> 注意:尽管上面的例子中css!被包含在在加载CSS依赖的过程中，要记住，这种方式有一些问题，比如它不完全可能在CSS完全加载的时候建立模块. 取决于如何实现创建过程，这也可能导致CSS被作为优化文件中的依赖被包含进来，所以在这些情况下把CSS作为已加载的依赖应该多加小心。如果你对上面的做法感兴趣，也可以从这里查看更多@VIISON的RequireJS CSS 插件：[https://github.com/VIISON/RequireCSS](https://github.com/VIISON/RequireCSS)

### 使用RequireJS加载AMD模块

```js
require(["app/myModule"],

    function( myModule ){
        // start the main module which in-turn
        // loads other modules
        var module = new myModule();
        module.doStuff();
});
```

> 这个例子可以简单地看出`asrequirejs`（“`app/myModule`”,function(){}）已被加载到顶层使用。这就展示了通过`AMD`的`define（）`函数加载到顶层模块的不同，下面通过一个本地请求`allrequire（[]）`示例两种类型的装载机（curl.js和RequireJS）。

### 使用curl.js加载AMD模块

```js
curl(["app/myModule.js"],

    function( myModule ){
        // start the main module which in-turn
        // loads other modules
        var module = new myModule();
        module.doStuff();

});
```

### 延迟依赖模块

```js
// This could be compatible with jQuery's Deferred implementation,
// futures.js (slightly different syntax) or any one of a number
// of other implementations

define(["lib/Deferred"], function( Deferred ){
    var defer = new Deferred();

    require(["lib/templates/?index.html","lib/data/?stats"],
        function( template, data ){
            defer.resolve( { template: template, data:data } );
        }
    );
    return defer.promise();
});
```

## 使用Dojo的AMD模块

使用`Dojo`定义`AMD`兼容的模块是相当直接的.如上所述,就是在一个数组中定义任何的模块依赖作为第一个参数,并且提供回调函数来执行一次依赖已经被加载进来的模块.例如:

```js
define(["dijit/Tooltip"], function( Tooltip ){

    //Our dijit tooltip is now available for local use
    new Tooltip(...);

});
```

> 请注意模块的匿名特性,现在它可以在一个`Dojo`匿名装载装置中的被处理,`RequireJS`或者标准的`dojo.require()`模块装载器。
>
> 了解一些有趣的关于模块引用的陷阱是非常有用的.虽然`AMD`倡导的引用模块的方式宣称它们在一组带有一些匹配参数的依赖列表里面,这在版本更老的`Dojo 1.6`构建系统中并不被支持--它真的仅仅对`AMD`兼容的装载器才起作用.例如:

```js
define(["dojo/cookie", "dijit/Tooltip"], function( cookie, Tooltip ){

    var cookieValue = cookie( "cookieName" );
    new Tooltip(...);

});
```

> 越过嵌套的命名空间定义方式有许多好处,模块不再需要每一次都直接引用完整的命名空间了--所有所需要的是依赖中的"`dojo/cookie`"路径,它一旦赋给一个作为别名的参数,就可以用变量来引用了.这移除了在的应用程序中重复打出"`dojo.`"的必要。
>
> 最后需要注意到的难点是,如果希望继续使用更老的`Dojo`构建系统,或者希望将老版本的模块迁移到更新的`AMD`形式,接下来更详细的版本会使得迁移更加容易.注意`dojo`和`dijit`也是作为依赖被引用的:

```js
define(["dojo", "dijit', "dojo/cookie", "dijit/Tooltip"], function( dojo, dijit ){
    var cookieValue = dojo.cookie( "cookieName" );
    new dijit.Tooltip(...);
});
```

## AMD 模块设计模式 (Dojo)

> 正如在前面的章节中，设计模式在提高的结构化构建的共同开发问题非常有效。 John Hann已经给AMD模块设计模式，涵盖单例，装饰，调解和其他一些优秀的设计模式，如果有机会，我强烈建议参考一下他的 幻灯片。 AMD设计模式的选择可以在下面找到。
>
> 一段AMD设计模式可以在下面找到。

### 修饰设计模式

```js
// mylib/UpdatableObservable: dojo/store/Observable的一个修饰器
define(["dojo", "dojo/store/Observable"], function ( dojo, Observable ) {
    return function UpdatableObservable ( store ) {

        var observable = dojo.isFunction( store.notify ) ? store :
                new Observable(store);

        observable.updated = function( object ) {
            dojo.when( object, function ( itemOrArray) {
                dojo.forEach( [].concat(itemOrArray), this.notify, this );
            });
        };

        return observable;
    };
});

// 修饰器消费者
// mylib/UpdatableObservable的消费者

define(["mylib/UpdatableObservable"], function ( makeUpdatable ) {
    var observable,
        updatable,
        someItem;

    // 让observable 储存 updatable
    updatable = makeUpdatable( observable ); // `new` 关键字是可选的!

    // 如果想传递修改过的data，要调用.update()
    //updatable.updated( updatedItem );
});
```

### 适配器设计模式

```js
// "mylib/Array" 适配`each`方法来模仿 jQuerys:
define(["dojo/_base/lang", "dojo/_base/array"], function ( lang, array ) {
    return lang.delegate( array, {
        each: function ( arr, lambda ) {
            array.forEach( arr, function ( item, i ) {
                lambda.call( item, i, item ); // like jQuery's each
            });
        }
    });
});

// 适配器消费者
// "myapp/my-module":
define(["mylib/Array"], function ( array ) {
    array.each( ["uno", "dos", "tres"], function ( i, esp ) {
        // here, `this` == item
    });
});
```

## 使用jQuery的AMD模块

不像`Dojo`，`jQuery`真的存在于一个文件中，而是基于插件机制的库，可以在下面代码中证明`AMD`模块是如何直线前进的。

```js
define(["js/jquery.js","js/jquery.color.js","js/underscore.js"],

function( $, colorPlugin, _ ){
    // <span></span>这里，通过jQuery中，颜色的插件，并强调没有这些将可在全局范围内访问，但可以很容易地在下面引用它们。
    // 伪随机一系列的颜色，在改组后的数组中选择的第一个项目 

<div>

</div>
    var shuffleColor = _.first( _.shuffle( "#666","#333","#111"] ) );

    // 在页面上有class为"item" 的元素随机动画改变背景色
    $( ".item" ).animate( {"backgroundColor": shuffleColor } );

    // 的返回可以被其他模块使用
    return {};
});
```

## 将jQuery当做一个异步兼容的模块注册

> jQuery1.7中落实的一个关键特性是支持将jQuery当做一个异步兼容的模块注册。有很多兼容的脚本加载器(包括RequireJS 和 curl）可以使用异步模块形式加载模块,而这意味着在让事物起作用的时候,更少的需要使用取巧的特殊方法。
>
> 如果开发者想要使用AMD,并且不想将他们的jQuery的版本泄露到全局空间中,他们就应该在使用了jQuery的顶层模块中调用noConflict方法.另外,由于多个版本的jQuery可能在一个页面上,AMD加载器就必须作出特殊的考虑,以便jQuery只使用那些认识到这些问题的AMD加载器来进行注册,这是使用加载器特殊的define.amd.jQuery来表示的。RequireJS和curl是两个这样做了的加载器。
>
> 这个叫做AMD的家伙提供了一种安全的鲁棒的封包，这个封包可以用于绝大多数情况。

```js
// Account for the existence of more than one global
// instances of jQuery in the document, cater for testing
// .noConflict()

var jQuery = this.jQuery || "jQuery",
$ = this.$ || "$",
originaljQuery = jQuery,
original$ = $;

define(["jquery"] , function ( $ ) {
    $( ".items" ).css( "background","green" );
    return function () {};
});
```

## AMD 模块优点

* 提供了一个清晰的方案，告诉如何定义一个可扩展的模块。

* 和常用的前面的全局命名空间以及 `<script>` 标签解决方案相比较，非常清晰。有一个清晰的方式用于声明独立的模块，以及它们所依赖的模块。

* 模块定义被封装了，有助于避免污染全局命名空间。

* 比其它替代方案能更好的工作（例如`CommonJS`，后面就会看到）。没有跨域问题，局部以及调试问题，不依赖于服务器端工具。大多数AMD加载器支持在浏览器中加载模块，而不需要构建过程。

* 提供一个“透明”的方法用于在单个文件中包含多个模块。其它方式像 `CommonJS` 要求必须遵循一个传输格式。 再有需要的时候，可以惰性加载脚本。

> 注意：上面的很多说法也可以说做事YUI模块加载策略。

