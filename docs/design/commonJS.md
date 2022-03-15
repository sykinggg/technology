# CommonJS

## 为服务器提供的一种模块形式的优化

> `CommonJS`模块建议指定一个简单的用于声明模块服务器端的API，并且不像`AMD`那样尝试去广泛的操心诸如`io`，文件系统，约定以及更多的一揽子问题。
>
> 这种形式为`CommonJS`所建议--它是一个把目标定在设计，原型化和标准化`Javascript API`的自愿者工作组。迄今为止，他们已经在模块和包方面做出了批复标准的尝试。

## 入门

> 从架构的角度来看,`CommonJS`模块是一个可以`复用`的`Javascript`块，它出口对任何独立代码都起作用的特定对象。不同于AMD，通常没有针对此模块的功能封装（因此打个比方并没有在这里找到定义的相关语句）。
>
> `CommonJS`模块基本上包括两个基础的部分：一个取名为`exports`的自由变量，它包含模块希望提供给其他模块的对象，以及模块所需要的可以用来引入和导出其它模块的函数。

### 理解CommonJS：require()和exports

```js
// package/lib is a dependency we require
var lib = require( "package/lib" );

// behaviour for our module
function foo(){
    lib.log( "hello world!" );
}

// export (expose) foo to other modules
exports.foo = foo;
```

### exports的基础使用

```js
// define more behaviour we would like to expose
function foobar(){
  this.foo = function(){
    console.log( "Hello foo" );
  }

  this.bar = function(){
    console.log( "Hello bar" );
  }
}

// expose foobar to other modules
exports.foobar = foobar;

// an application consuming "foobar"

// access the module relative to the path
// where both usage and module files exist
// in the same directory

var foobar = require("./foobar").foobar,
    test   = new foobar();

// Outputs: "Hello bar"
test.bar();
```

### 等同于`AMD`的第一个`CommonJS`示例

```js
define(function(require){
   var lib = require( "package/lib" );

    // some behaviour for our module
    function foo(){
        lib.log( "hello world!" );
    }

    // export (expose) foo for other modules
    return {
        foobar: foo
    };
});
```

> 这也可以用`AMD`支持的简化了的`CommonJS`特定做到。

## 消耗多重依赖

### app.js

```js
var modA = require( "./foo" );
var modB = require( "./bar" );

exports.app = function(){
    console.log( "Im an application!" );
}

exports.foo = function(){
    return modA.helloWorld();
}
```

### bar.js

```js
exports.name = "bar";
```

### foo.js

```js
require( "./bar" );
exports.helloWorld = function(){
    return "Hello World!!"
}
```

在浏览器端：

* [curl.js](http://github.com/unscriptable/curl)

* [SproutCore 1.1](http://sproutcore.com/)

* [PINF](https://www.w3cschool.cn/zobyhd/%C2%A0%5Bhttp%3A//github.com/pinf/loader-js%5D(http://github.com/pinf/loader-js)

服务器端：

* [Node](http://nodejs.org/)

* [Narwhal](https://github.com/tlrobinson/narwhal)

* [Persevere](https://www.w3cschool.cn/zobyhd/%C2%A0%5Bhttp%3A//www.persvr.org/%5D(http://www.persvr.org/)

* [Wakanda](https://www.w3cschool.cn/zobyhd/%C2%A0%5Bhttp%3A//www.wakandasoft.com/%5D(http://www.wakandasoft.com/)

## CommonJS适合浏览器

> 有开发者感觉CommonJS更适合于服务器端的开发，这是如今应该用哪种形式和将要来作为面向未来的备选事实标准，在这一问题上存在一定程度分歧的原因之一。一些争论指摘CommonJS包括许多面向服务器的特性，这些特性很容易可以看出并不能够用Javascript在浏览器级别中实现--例如，io，系统，而且js会被认为是借助于它们功能的性质无法实现的。
>
> 那就是说，无论如何了解如何构建CommonJS模块是有用的，那样就可以更好的理解它们如何适合于定义可以在任何地方使用的模块了。模块在客户端和服务器端都有包括验证，约定和模板引擎的应用程序。一些开发者趋向于选择那种形式的方式是当一个模块能够在服务器端环境使用时，就选择CommonJS，而如果不是这种场景，就使用AMD。
>
> 由于AMD模块具有使用插件的能力，并且能够定义更加精细的像构造器和函数之类的东西，如此是有道理的。
>
> CommonJS模块只能够去定义使用起来会非常繁琐的对象，如果尝试从它们那里获取构造器的话。

## AMD 与 CommonJS

> `AMD` 和 `CommonJS` 都是有效的模块形式，它们带有不同的最终目标。
>
> `AMD`采用浏览器先行的方针，它选择了异步的行为方式，并且简化了向后兼容性，但是它并没有任何文件`I/O`的概念。它支持`对象`，`函数`，`构造器`，`字符串`，`JSON`以及许多其它类型的模块，在浏览器进行本地运行。这是令人难以置信的灵活性。
>
> `CommonJS` 则在另一个方面采用了服务器端先行的方针，承载着同步行为，没有全局的负担并且尝试去迎合（在服务器上的）未来。的意思是`CommonJS`支持无封装的模块，可以感觉到它跟`ES.next/Harmony`更接近一点，将从`AMD`强制使用的`define()`封装中解放出来。然而`CommonJS`仅支持对象作为模块。

## UMD：AMD和兼容CommonJS模块的插件

> `UMD`是一种是实验性质的模块形式，允许在编写代码的时候，所有或者大多数流行的实用脚本加载技术对模块的定义在客户端和服务器环境下都能够起作用。另外一种模块格式的想法尽管可能是艰巨的，出于仔细彻底的考虑，将简要的概括一下`UMD`。最开始，通过简要的看一看AMD规范中所支持的对于CommonJS的简单封装，来定义`UMD`。对于希望把模块当做CommonJS模块来编写的开发者，可以应用下面的兼容CommonJS的形式：
>
> 基础的AMD混合格式：

```js
define( function ( require, exports, module ){

    var shuffler = require( "lib/shuffle" );

    exports.randomize = function( input ){
        return shuffler.shuffle( input );
    }
});
```

然而，注意到如果一个模块并没有包含一个依赖数组，并且定义的函数只包含最少的一个参数，那么它就真的仅仅只是被当做`CommonJS`模块来对待，这一点是很重要的。这在某些设备（例如PS3）上面也不会正确的工作。如需进一步了解上述的封装，请看看：[http://requirejs.org/docs/api.html#cjsmodule](http://requirejs.org/docs/api.html#cjsmodule)。

进一步的考虑，想要提供许多不同的模式，那不仅仅只是在`AMD`和`CommonJS`上起作用，同样也能解决开发者希望使用其它环境开发这样的模块时普遍遇到的问题。

下面可以看到这样的变化允许使用`CommonJS`，`AMD`或者浏览全局的对象创建一个模块。

## 使用 CommonJS，AMD或者浏览器全局对象创建模块

定义一个模块 `commonJsStrict`，它依赖于另外一个叫做B的模块。模块的名称暗示了文件的名称（，就是说一样的），而让文件名和导出的全局对象的名字一样则是一种最佳实践。

如果模块同时也在浏览器中使用了相同类型的样板，它就会创建一个global.b备用。如果不希望对浏览器全局补丁进行支持， 可以将root移除，并且把this传递到顶层函数作为其第一个参数。

```js
(function ( root, factory ) {
    if ( typeof exports === 'object' ) {
        // CommonJS
        factory( exports, require('b') );
    } else if ( typeof define === 'function' && define.amd ) {
        // AMD. Register as an anonymous module.
        define( ['exports', 'b'], factory);
    } else {
        // Browser globals
        factory( (root.commonJsStrict = {}), root.b );
    }
}(this, function ( exports, b ) {
    //use b in some fashion.

    // attach properties to the exports object to define
    // the exported module properties.
    exports.action = function () {};
}));
```

> `UMD`资源库包含了在浏览器中能够最优化运作的涵盖不同的模块，那些对于提供导出非常不错的，那些对于`CommonJS`的优化还有那些对于定义`jQuery`插件作用良好的，会在接下里看得到。

## 可以在所有环境下面起作用的jQuery插件

> `UMD`提供了两种同`jQuery`一起工作的模式--一种模式定义了能够同`AMD`和浏览器全局对象一起工作得很好的插件，而另外一种模式也能够在`CommonJS`环境中起作用。`jQuery`并不像是能够运行在大多数`CommonJS`环境中的，因此除非工作在一个能够良好同`jQuery`一起运作的环境中，那就把这一点牢记于心。
>
> 现在将定义一个包含一个核心，以及对此核心的一个扩展的插件。核心插件被加载到一个`$.core`命名空间中，它可以简单的使用借助于命名空间模式的插件扩展进行扩展。通过脚本标签加载的插件会自动填充`core`下面的一个插件命名空间（比如，`$core.plugin.methodName()`）。
>
> 这种模式操作起来相当的棒，因为插件扩展可以访问到底层定义的属性和方法，或者，做一些小小的调整就可以重写行为以便它能够被扩展来做更多的事情。加载器同样也不在需要面面俱到了。
>
> 想要了解更多需要做的详细信息，那就请看看下面代码示例中内嵌的注释吧：

### usage.html

```html
<script type="text/javascript" src="jquery-1.7.2.min.js"></script>
<script type="text/javascript" src="pluginCore.js"></script>
<script type="text/javascript" src="pluginExtension.js"></script>

<script type="text/javascript">

$(function(){

    // Our plugin "core" is exposed under a core namespace in
    // this example, which we first cache
    var core = $.core;

    // Then use use some of the built-in core functionality to
    // highlight all divs in the page yellow
    core.highlightAll();

    // Access the plugins (extensions) loaded into the "plugin"
    // namespace of our core module:

    // Set the first div in the page to have a green background.
    core.plugin.setGreen( "div:first");
    // Here we're making use of the core's "highlight" method
    // under the hood from a plugin loaded in after it

    // Set the last div to the "errorColor" property defined in
    // our core module/plugin. If we review the code further down,
    // we can see how easy it is to consume properties and methods
    // between the core and other plugins
    core.plugin.setRed("div:last");
});

</script>
```

### pluginCore.js

```js
// Module/Plugin core
// Note: the wrapper code we see around the module is what enables
// us to support multiple module formats and specifications by
// mapping the arguments defined to what a specific format expects
// to be present. Our actual module functionality is defined lower
// down, where a named module and exports are demonstrated.
//
// Note that dependencies can just as easily be declared if required
// and should work as demonstrated earlier with the AMD module examples.

(function ( name, definition ){
  var theModule = definition(),
      // this is considered "safe":
      hasDefine = typeof define === "function" && define.amd,
      // hasDefine = typeof define === "function",
      hasExports = typeof module !== "undefined" && module.exports;

  if ( hasDefine ){ // AMD Module
    define(theModule);
  } else if ( hasExports ) { // Node.js Module
    module.exports = theModule;
  } else { // Assign to common namespaces or simply the global object (window)
    ( this.jQuery || this.ender || this.$ || this)[name] = theModule;
  }
})( "core", function () {
    var module = this;
    module.plugins = [];
    module.highlightColor = "yellow";
    module.errorColor = "red";

  // define the core module here and return the public API

  // This is the highlight method used by the core highlightAll()
  // method and all of the plugins highlighting elements different
  // colors
  module.highlight = function( el,strColor ){
    if( this.jQuery ){
      jQuery(el).css( "background", strColor );
    }
  }
  return {
      highlightAll:function(){
        module.highlight("div", module.highlightColor);
      }
  };

});
```

### pluginExtension.js

```js
// Extension to module core

(function ( name, definition ) {
    var theModule = definition(),
        hasDefine = typeof define === "function",
        hasExports = typeof module !== "undefined" && module.exports;

    if ( hasDefine ) { // AMD Module
        define(theModule);
    } else if ( hasExports ) { // Node.js Module
        module.exports = theModule;
    } else {

        // Assign to common namespaces or simply the global object (window)
        // account for for flat-file/global module extensions
        var obj = null,
            namespaces,
            scope;

        obj = null;
        namespaces = name.split(".");
        scope = ( this.jQuery || this.ender || this.$ || this );

        for ( var i = 0; i < namespaces.length; i++ ) {
            var packageName = namespaces[i];
            if ( obj && i == namespaces.length - 1 ) {
                obj[packageName] = theModule;
            } else if ( typeof scope[packageName] === "undefined" ) {
                scope[packageName] = {};
            }
            obj = scope[packageName];
        }

    }
})( "core.plugin" , function () {

    // Define our module here and return the public API.
    // This code could be easily adapted with the core to
    // allow for methods that overwrite and extend core functionality
    // in order to expand the highlight method to do more if we wish.
    return {
        setGreen: function ( el ) {
            highlight(el, "green");
        },
        setRed: function ( el ) {
            highlight(el, errorColor);
        }
    };

});
```

`UMD`并不企图取代`AMD`或者`CommonJS`，而仅仅只是为如今希望让其代码运行在更多的环境下的开发者提供一些补充的援助。想要关于这种实验性质的形式的更多信息或者想要贡献建议，见：[https://github.com/umdjs/umd](https://github.com/umdjs/umd)。