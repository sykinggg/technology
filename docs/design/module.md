# 模块化模式

## 模块

> 模块是任何健壮的应用程序体系结构不可或缺的一部分，特点是有助于保持应用项目的代码单元既能清晰地分离又有组织。
>
> 在JavaScript中，实现模块有几个选项，他们包括：

* 模块化模式

* 对象表示法

* AMD模块

* CommonJS 模块

* ECMAScript Harmony 模块

## 对象字面值

> 在对象字面值的标记里，一个对象被描述为一组以逗号分隔的名称/值对括在大括号（{}）的集合。对象内部的名称可以是字符串或是标记符后跟着一个冒号":"。在对象里最后一个名称/值对不应该以","为结束符，因为这样会导致错误。

```js
var myObjectLiteral = {

    variableKey: variableValue,

    functionKey: function () {
      // ...
    };
};
```

> 对象字面值不要求使用新的操作实例，但是不能够在结构体开始使用，因为打开"{"可能被解释为一个块的开始。在对象外新的成员会被加载，使用分配如下：`smyModule.property = "someValue";` 下面可以看到一个更完整的使用对象字面值定义一个模块的例子：

```js
var myModule = {

  myProperty: "someValue",

  // 对象字面值包含了属性和方法（properties and methods）.
  // 例如，可以定义一个模块配置进对象：
  myConfig: {
    useCaching: true,
    language: "en"
  },

  // 非常基本的方法
  myMethod: function () {
    console.log( "Where in the world is Paul Irish today?" );
  },

  // 输出基于当前配置（<span>configuration</span>）的一个值
  myMethod2: function () {
    console.log( "Caching is:" + ( this.myConfig.useCaching ) ? "enabled" : "disabled" );
  },

  // 重写当前的配置（configuration）
  myMethod3: function( newConfig ) {

    if ( typeof newConfig === "object" ) {
      this.myConfig = newConfig;
      console.log( this.myConfig.language );
    }
  }
};

// 输出: Where in the world is Paul Irish today?
myModule.myMethod();

// 输出: enabled
myModule.myMethod2();

// 输出: fr
myModule.myMethod3({
  language: "fr",
  useCaching: false
});
```

## 模块化模式

> 模块化模式最初被定义为一种对传统软件工程中的类提供私有和公共封装的方法。
>
> 在JavaScript中，模块化模式用来进一步模拟类的概念，通过这样一种方式：可以在一个单一的对象中包含公共/私有的方法和变量，从而从全局范围中屏蔽特定的部分。这个结果是可以减少的函数名称与在页面中其他脚本区域定义的函数名称冲突的可能性。

### 私有信息

> 模块模式使用闭包的方式来将"私有信息",状态和组织结构封装起来。提供了一种将公有和私有方法，变量封装混合在一起的方式，这种方式防止内部信息泄露到全局中，从而避免了和其它开发者接口发生冲图的可能性。在这种模式下只有公有的API 会返回，其它将全部保留在闭包的私有空间中。
>
> 这种方法提供了一个比较清晰的解决方案，在只暴露一个接口供其它部分使用的情况下，将执行繁重任务的逻辑保护起来。这个模式非常类似于立即调用函数式表达式(IIFE-查看命名空间相关章节获取更多信息)，但是这种模式返回的是对象，而立即调用函数表达式返回的是一个函数。
>
> 需要注意的是，在javascript事实上没有一个显式的真正意义上的"私有性"概念，因为与传统语言不同，javascript没有访问修饰符。从技术上讲，变量不能被声明为公有的或者私有的，因此使用函数域的方式去模拟这个概念。在模块模式中，因为闭包的缘故，声明的变量或者方法只在模块内部有效。在返回对象中定义的变量或者方法可以供任何人使用。

### 历史

> 从历史角度来看，模块模式最初是在2003年由一群人共同发展出来的，这其中包括Richard Cornford。后来通过Douglas Crockford的演讲，逐渐变得流行起来。另外一件事情是，如果你曾经用过雅虎的YUI库，你会看到其中的一些特性和模块模式非常类似，而这种情况的原因是在创建YUI框架的时候，模块模式极大的影响了YUI的设计。

### 例子

> 下面这个例子通过创建一个自包含的模块实现了模块模式。

```js
var testModule = (function () {

  var counter = 0;

  return {

    incrementCounter: function () {
      return counter++;
    },

    resetCounter: function () {
      console.log( "counter value prior to reset: " + counter );
      counter = 0;
    }
  };

})();

// Usage:

// Increment our counter
testModule.incrementCounter();

// Check the counter value and reset
// Outputs: 1
testModule.resetCounter();
```

> 在这里看到，其它部分的代码不能直接访问的`incrementCounter()` 或者 `resetCounter()`的值。`counter`变量被完全从全局域中隔离起来了，因此其表现的就像一个私有变量一样，它的存在只局限于模块的闭包内部，因此只有两个函数可以访问`counter`。的方法是有名字空间限制的，因此在代码的测试部分，需要给所有函数调用前面加上模块的名字(例如"`testModule`")。
>
> 当使用模块模式时，会发现通过使用简单的模板，对于开始使用模块模式非常有用。下面是一个模板包含了命名空间，公共变量和私有变量。

```js
var myNamespace = (function () {

  var myPrivateVar, myPrivateMethod;

  // A private counter variable
  myPrivateVar = 0;

  // A private function which logs any arguments
  myPrivateMethod = function( foo ) {
      console.log( foo );
  };

  return {

    // A public variable
    myPublicVar: "foo",

    // A public function utilizing privates
    myPublicFunction: function( bar ) {

      // Increment our private counter
      myPrivateVar++;

      // Call our private method using bar
      myPrivateMethod( bar );

    }
  };

})();
```

> 看一下另外一个例子，下面看到一个使用这种模式实现的购物车。这个模块完全自包含在一个叫做basketModule 全局变量中。模块中的购物车数组是私有的，应用的其它部分不能直接读取。只存在与模块的闭包中，因此只有可以访问其域的方法可以访问这个变量。

```js
var basketModule = (function () {

  // privates

  var basket = [];

  function doSomethingPrivate() {
    //...
  }

  function doSomethingElsePrivate() {
    //...
  }

  // Return an object exposed to the public
  return {

    // Add items to our basket
    addItem: function( values ) {
      basket.push(values);
    },

    // Get the count of items in the basket
    getItemCount: function () {
      return basket.length;
    },

    // Public alias to a  private function
    doSomething: doSomethingPrivate,

    // Get the total value of items in the basket
    getTotal: function () {

      var q = this.getItemCount(),
          p = 0;

      while (q--) {
        p += basket[q].price;
      }

      return p;
    }
  };
}());
```

> 在模块内部，你可能注意到返回了应外一个对象。这个自动赋值给了`basketModule` 因此可以这样和这个对象交互。

```js
// basketModule returns an object with a public API we can use

basketModule.addItem({
  item: "bread",
  price: 0.5
});

basketModule.addItem({
  item: "butter",
  price: 0.3
});

// Outputs: 2
console.log( basketModule.getItemCount() );

// Outputs: 0.8
console.log( basketModule.getTotal() );

// However, the following will not work:

// Outputs: undefined
// This is because the basket itself is not exposed as a part of our
// the public API
console.log( basketModule.basket );

// This also won't work as it only exists within the scope of our
// basketModule closure, but not the returned public object
console.log( basket );
```

> 上面的方法都处于`basketModule` 的名字空间中。
>
> 请注意在上面的basket模块中 域函数是如何在所有的函数中被封装起来的，以及如何立即调用这个域函数，并且将返回值保存下来。这种方式有以下的优势：

* 可以创建只能被模块访问的私有函数。这些函数没有暴露出来（只有一些API是暴露出来的），它们被认为是完全私有的。

* 当在一个调试器中，需要发现哪个函数抛出异常的时候，可以很容易的看到调用栈，因为这些函数是正常声明的并且是命名的函数。

* 正如过去 T.J Crowder 指出的，这种模式同样可以让在不同的情况下返回不同的函数。我见过有开发者使用这种技巧用于执行UA（尿检，抽样检查）测试，目的是为了在他们的模块里面针对IE专门提供一条代码路径，但是现在也可以简单的使用特征检测达到相同的目的。

## 模块模式的变体

### Import mixins(导入混合)

> 这个变体展示了如何将全局（例如 jQuery, Underscore）作为一个参数传入模块的匿名函数。这种方式允许导入全局，并且按照的想法在本地为这些全局起一个别名。

```js
// Global module
var myModule = (function ( jQ, _ ) {

    function privateMethod1(){
        jQ(".container").html("test");
    }

    function privateMethod2(){
      console.log( _.min([10, 5, 100, 2, 1000]) );
    }

    return{
        publicMethod: function(){
            privateMethod1();               
        }           
    };

// Pull in jQuery and Underscore
}( jQuery, _ ));

myModule.publicMethod();
```

### Exports（导出）

> 这个变体允许声明全局对象而不用使用它们，同样也支持在下一个例子中将会看到的全局导入的概念。

```js
// Global module
var myModule = (function () {

    // Module object
  var module = {},
    privateVariable = "Hello World";

  function privateMethod() {
    // ...
  }

  module.publicProperty = "Foobar";
  module.publicMethod = function () {
    console.log( privateVariable );
  };

  return module;

}());
```

> 工具箱和框架特定的模块模式实现。