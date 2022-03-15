# MVVM

## MVVM

> MVVM(Model View ViewModel)是一种基于MVC和MVP的架构模式，它试图将用户界面（UI）从业务逻辑和行为中更加清晰地分离出来。为了这个目的，很多例子使用声明变量绑定来把View层的工作从其他层分离出来。
>
> 这促进了UI和开发工作在同一代码库中的同步进行。UI开发者用他们的文档标记（HTML）绑定到ViewModel，在这个地方Model和ViewModel由负责逻辑的开发人员维护。

## 历史

> MVVM（如其大名）最初是由微软定义，用于Windows Presentation Foundation(WPF)和Silverlight，在John Grossman2005年的一篇关于Avalon（WPF的代号）的博文中被官方推出。它也作为方便使用MVC的一种可选方案，为Adobe Flex社区积累了一些用户量。
>
> 先于微软采用的`MVVM`名称，在社区中已经有了一场由`MVC`像`MVPM`迁移的运动：`模型-视图-展现模型`。Marton Fowler在2004年为那些对此感兴趣的人写了一篇关于展现模型的文章。展现模型的理念的内容要远远长于这篇文章，然而这篇文章被认为是这一理念的重大突破，并且极大的捧红了它。
>
> 在微软推出作为`MVPM`的可选方案的`MVVM`后，就出现了许多沸沸扬扬的“`alt.net`”圈子。其中许多声称这个公司在`GUI`世界的霸主地位给与了它们将社区统一为整体的机会，出于市场营销的目的，按照它们所高兴的方式对已有的概念重新命名。一个进步的群体也承认`MVVM`和`MVPM`其实实在是同样的概念，只是展现出来的是不同的包而已。
>
> 在近几年，`MVVM`已经在Javascript中得到了实现，其构造框架的形式诸如KnockoutJS，Kendo MVVM和Knockback.js，获得了整个社区的积极响应。

现在就让来看看组成了`MVVM`的这三个组件。

### 模型

> 和其它`MV*`家族成员一样，`MVVM`中的模型代表的应用用到的领域相关的数据或者信息。一个领域相关的数据的典型例子是用户账号（例如名字，头像，电子邮件）或者音乐唱片（例如唱片名，年代，专辑）。
>
> 模型持有信息，但是通常没有操作行为。它们不会格式化信息，也不会影响数据在浏览器中的表现，因为这些不是模型的责任。相反，数据格式化是由视图层处理的，尽管这种行为被认为是业务逻辑，这个逻辑应该被另外一个层封装，这个层和模型交互，这个曾就是视图模型。
>
> 这个规则唯一的例外是验证，由模型进行数据验证是被认为可以接受的，这些数据用于定义或者更新现存的模型（例如输入的电子邮件地址是否满足特定的正则表达式要求？）。
>
> 在`KnockoutJS`中，模型遵从上面的定义，但是通常对服务端服务的Ajax调用被做成即可以读取也可以写入模型数据。
>
> 如果正在构建一个简单的Todo应用，使用`KnockoutJS`模型来表示一个`Todo`条目，看起来像下面这个样子：

```js
var Todo = function ( content, done ) {
    this.content = ko.observable(content);
    this.done = ko.observable(done);
    this.editing = ko.observable(false);
};
```

> 注意:在上面小段代码里面，你可能发现了，在`KnockoutJS`的名字空间里面调用`observable()`方法。在`KnockoutJS`中，观察者是一类特殊的`JavaScript`对象，可以将变化通知给订阅者，并且自动检测依赖关系。这个特性使在模型值修改之后，可以同步模型和视图模型。

### 视图

> 使用`MVC`,视图是应用程序中用户真正与之打交道的唯一一个部分.它们是展现一个视图模型状态的一个可交互UI.此种意义而言,视图是主动的而不是被动的,而这也是真正的`MVC`和`MVP`的观点.在MVC,MVP和MVVM中视图也可以是被动的,而这又是什么意思呢?
>
> 被动视图仅仅只输出要展示的东西,而不去接受任何用户的输入。
>
> 这样一个视图在的应用程序中可能也没有真正的模型的概念,而可以被一个代理控制`.MVVM`的主动视图包含数据绑定,事件和需要能够理解视图模型的行为.尽管这些行为能够被映射到属性,视图仍然处理这来自视图模型的事件。
>
> 记住视图在这里并不负责处理状态时很重要的——它使得其与视图模型得以同步。
>
> `KnockoutJS`视图是简单的一个带有声明链接到视图模型的`HTML`文档。`KnockoutJS`视图展示来自视图模型的信息，并且传递命令给他（比如，用户在一个元素上面点击），并且针对视图模型的变化更新状态。而使用来自视图模型的数据来生成标记的模板也能够被用在这个目的上。
>
> 未来给出一个简单的初始示例，可以看看Javascritpt的`MVVM`框架`KnockoutJS`，看它如何允许一个视图模型的定义，还有它在标记中的相关绑定。

视图模型：

``` js
var aViewModel = {
    contactName: ko.observable("John")
};
ko.applyBindings(aViewModel);
```

视图：

```html
<p><input id="source" data-bind="value: contactName, valueUpdate: 'keyup'" /></p>
<div data-bind="visible: contactName().length > 10">
    You have a really long name!
</div>
<p>Contact name: <strong data-bind="text: contactName"></strong></p>
```

> 的`text-box`输入(源)从`contactName`获取它的初始值,无论何时`contactName`发生了改变都会自动更新这个值.由于数据绑定是双向的,像text-box中输入也将据此更新`contactName`,以此保持值总是同步的。
>
> 尽管这个实现特定于`KnockoutJS`，但是包含着"You have a really long name!"文本的
>
> 标签包含有简单的验证(同样是以数据绑定的形式呈现)。如果输入超过10个字符，这个标签就会显示，否则保持隐藏。
>
> 让看看一个更高级的例子，可以看看的Todo应用。一个用于这个应用的裁剪后的`KnockoutJS`的视图，包含有所有必要的数据绑定，这个视图看起来是下面这个样子。

```html
<div id="todoapp">
    <header>
        <h1>Todos</h1>
        <input id="new-todo" type="text" data-bind="value: current, valueUpdate: 'afterkeydown', enterKey: add"
               placeholder="What needs to be done?"/>
    </header>
    <section id="main" data-bind="block: todos().length">

        <input id="toggle-all" type="checkbox" data-bind="checked: allCompleted">
        <label for="toggle-all">Mark all as complete</label>

        <ul id="todo-list" data-bind="foreach: todos">

           <!-- item -->
            <li data-bind="css: { done: done, editing: editing }">
                <div class="view" data-bind="event: { dblclick: $root.editItem }">
                    <input class="toggle" type="checkbox" data-bind="checked: done">
                    <label data-bind="text: content"></label>
                    <a class="destroy" href="#" data-bind="click: $root.remove"></a>
                </div>
                <input class="edit' type="text"
                       data-bind="value: content, valueUpdate: 'afterkeydown', enterKey: $root.stopEditing, selectAndFocus: editing, event: { blur: $root.stopEditing }"/>
            </li>

        </ul>

    </section>
</div>
```

请注意，这个标记的基本布局是相对直观的，包含有一个输入文本框(新的`todo`)用于增加新条目，用于标记条目完成的开关，以及一个拥有模板的列表（`todo`列表），这个模板以`anli`的形式展现`Todo`条目。

上面标记中绑定的数据可以分成下面几块：

* 输入的文本框`new-todo` 有一个当前属性的数据绑定，当前要增加的条目的值存储在这里。的视图模型(后面就会看到)观察当前属性，并且绑定在添加事件上。当回车键按下的时候，添加事件就被出发了，的视图模型就可以处理当前的值按照需要并且将其加入到Todo列表中。

* 输入勾选框可以通过点击标示所有当前条目为完成状态。如果勾选了，触发完成事件，这个事件可以被模型视图观察到。

* 有一类条目是进行中状态。当一个任务被标记为进行中，`CSS`类也会根据这个状态进行标识。如果双击条目，`$root.editItem` 回调就会被执行。

* `toggle`类的勾选框表明当前的进行状态。

* 一个文本标签包含有`Todo`条目的内容

* 当点击一个移除按钮时可以调用`$root.remove` 回调函数。

* 编辑模式下的一个输入文本框可以保存`Todo`条目的内容。回车键事件将会设定编辑属性为真或者假。

### 视图模型

> 视图模型被认为是一个专门进行数据转换的控制器。它可以把对象信息转换到视图信息，将命令从视图携带到对象。
>
> 例如，想象有一个对象的日期属性是unix格式的（e.g 1333832407），而不是用户视图的所需要的日期格式（e.g 04/07/2012 @ 5:00pm），这时就有必要把unix的日期格式转换为视图需要的格式。的对象只简单保存原始的unix数据格式日期，视图模型作为一个中间人角色会格式化原始的unix数据格式转换为视图需要的日期格式。
>
> 在这个场景下，视图模型可以被看做一个对象，它处理很多视图显示逻辑。视图模型也对外提供更新视图状态的方法，并通过视图方法和触发事件更新对象。
>
> 简单来说，视图模型位于UI层后面层。它通过视图发布对象的公共数据，同时它作为视图源提供数据和方法。
>
> `KnockoutJS`描述视图模型作为数据的表现和操作可以在UI上访问和执行。视图模型并不是一个UI对象，也不是数据持久化对象，而是一个能够为用户提供储存状态及操作的层次对象。`Knockout`的视图模型实现了JavaScript对象与HTML语言无关性。通过这个实现使开发保持了简单，意味着可以在视图层更加简单的管理更多的组合方法。

对于的ToDo应用程序的一部分`KnockoutJS`视图模型可以是像下面这样:

```js
// our main ViewModel
    var ViewModel = function ( todos ) {
        var self = this;

    // map array of passed in todos to an observableArray of Todo objects
    self.todos = ko.observableArray(
    ko.utils.arrayMap( todos, function ( todo ) {
        return new Todo( todo.content, todo.done );
    }));

    // store the new todo value being entered
    self.current = ko.observable();

    // add a new todo, when enter key is pressed
    self.add = function ( data, event ) {
        var newTodo, current = self.current().trim();
        if ( current ) {
            newTodo = new Todo( current );
            self.todos.push( newTodo );
            self.current("");
        }
    };

    // remove a single todo
    self.remove = function ( todo ) {
        self.todos.remove( todo );
    };

    // remove all completed todos
    self.removeCompleted = function () {
        self.todos.remove(function (todo) {
            return todo.done();
        });
    };

    // writeable computed observable to handle marking all complete/incomplete
    self.allCompleted = ko.computed({

        // always return true/false based on the done flag of all todos
        read:function () {
            return !self.remainingCount();
        },

        // set all todos to the written value (true/false)
        write:function ( newValue ) {
            ko.utils.arrayForEach( self.todos(), function ( todo ) {
                //set even if value is the same, as subscribers are not notified in that case
                todo.done( newValue );
            });
        }
    });

    // edit an item
    self.editItem = function( item ) {
        item.editing( true );
    };
 ..
```

上面基本上提供了必需的加入、编辑或者移除记录的方法，还有标记所有现存的记录已经被完成的逻辑。注意：唯一真正需要关注的同前面的视图模型的示例的不同之处就是观察数组.在KnockoutJS中,如果希望监测到并且去回应一个单独的对象发生的改变,可以使用观察.然而如果希望检测并且去回应一个集合的事物所发生的改变,可以换用一个观察数组.如何使用观察数组的一个简单示例就像下面这样:

```js
// Define an initially an empty array
var myObservableArray = ko.observableArray();

// Add a value to the array and notify our observers
myObservableArray.push( 'A new todo item' );
```

> 注意:感兴趣的话,在前面所提到的完整的KnockoutJS Todo应用程序可以从 `TodoMVC` 获取到。

## 扼要重述: 视图和视图模型

> 视图和视图模型使用数据绑定和事件进行通信。正如之前的视图模型例子所见，视图模型不仅仅发布对象属性，它还提供其他的方法和特性，诸如验证。
>
> 的视图处理自己的用户接口事件，并会把相关事件映射到视图模型。对象和它属性与视图模型是同步的，且通过双向数据绑定进行更新。
>
> 触发器（数据触发器）允许进一步在视图状态变化后改变的对象属性。

## 小结:视图模型和模型

> 虽然可能会出现在MVVM中视图模型完全对模型负责的情况,这些关系确实有一些值得关注的微妙之处.处于数据绑定的目的,视图模型可以暴露出来一个模型或者模型属性,而且也能够包含获取和操作视图中暴露出来的属性。

### 优点和缺点

现在,完全对MVVM是什么,以及它是如何工作的,有了一个更好的了解.现在就让来看看使用这种模式的优点和缺点吧:

优点:

* MVVM更加便于UI和驱动UI的构造块,这两部分的并行开发

* 抽象视图使得背后所需要的业务逻辑(或者粘合剂)的代码数量得以减少

* 视图模型比事件驱动代码更加容易进行单元测试

* 视图模型(比视图更加像是模型)能够在不用担心UI自动化和交互的前提下被测试

缺点:

* 对于更简单的UI而言,MVVM可能矫枉过正了

* 虽然数据绑定可以是声明性质的并且工作得很好,但在简单设置断点的地方,它们比当务之急的代码更加难于调试

* 在非凡的应用程序中的数据绑定能够创造许多的账簿.也并不希望以绑定比被绑定目标对象更加重量级,这样的境地告终

* 在大型的应用程序中,将视图模型的设计提升到获取足够所需数量的泛化,会变得更加的困难

## MVVM 的低耦合数据绑定

> 常见到有着MVC或者MVP开发经验的JavaScript程序员评论MVVM的时候在抱怨它会分散他们的关注点。也就是说，他们习惯在一个视图中有相当数量的数据被耦合在了HTML标签中。
>
> 我必须承认当我第一次体验实现了MVVM的JavaScript框架后(例如 KnockoutJS, Knockback)，我很惊讶很多程序员都想要回到一个难以维护的混淆了逻辑(JavaScript代码)和HTML标签做法的过去。然而现实是使用MVVM会有很多好处（之前说过），包括设计师能更容易的通过他们的标记去绑定相关逻辑。
>
> 在中间的传统程序员，你会很开心知道现在能够通过数据绑定这个特性大量减少程序代码的耦合程度，且KnockoutJS从1.3这个版本就开始提供自定义绑定功能。

KnockoutJS 默认有一个数据绑定提供者，这个提供者搜索所有的附属有数据绑定属性的元素，如下面的例子：

```html
<input id="new-todo" type="text" data-bind="value: current, valueUpdate: 'afterkeydown', enterKey: add" placeholder="What needs to be done?"/>
```

> 当这个提供者定位一个到包含有该属性的元素时，这个工具将会分析该元素，使用当前的数据上下文来将其转化成一个绑定对象。这种方式是 KnockoutJS百分百可以工作的方式，通过这种方式，可以采用声明式的方法对元素增加绑定，KnockoutJS之后会在该层上将数据绑定到元素上。
>
> 当开始构建复杂的视图的时候，最终就可能得到大量的元素和属性在标记中绑定数据，这种方式将会变得很难管理。通过自定义的绑定提供者，这就不算个问题。

一个绑定提供者主要关心两件事：

* 给定一个DOM节点，这个节点是否包含任何数据绑定？

* 如果节点回答是YES，那么这个绑定的对象在当前数据上下文中，看起来是什么样的？

绑定提供者实现了两个功能：

 * `nodeHasBindings`:这个有一个DOM的节点参数，这个参数不一定是一个元素

 * `getBindings`:返回一个对象代表当前数据上下文下的要使用的绑定

一个框架绑定提供者看起来如下：

```js
var ourBindingProvider = {
  nodeHasBindings: function( node ) {
      // returns true/false
  },

  getBindings: function( node, bindingContext ) {
      // returns a binding object
  }
};
```

> 在充实这个提供者之前，让先简要的讨论一下数据绑定属性中的逻辑。
>
> 当使用`Knockout`的`MVVM`，会对将应用逻辑过度绑定到视图上的这种方法不满。可以实现像`CSS`类一样的东西，将绑定根据名字赋值给元素。Ryan Niemeyer(`knockmeout.net`上的)之前提出使用数据类用于这个目的，来避免将展示类和数据类混淆，让改造的`nodeHasBindings` 函数，来支持这个概念：

```js
// does an element have any bindings?
function nodeHasBindings( node ) {
    return node.getAttribute ? node.getAttribute("data-class") : false;
};
```

接下来，需要一个敏感的`getBindings()`函数。既然坚持使用CSS类的概念，为什么不考虑一下支持空格分割类呢，这样可以使在不同元素之间共享绑定标准。

让首先看一下的绑定长什么样子。建立一个对象用于持有它们，在这些绑定处，的属性名需要和数据类中使用的关键字相匹配。

> 注意：对于将使用传统数据绑定方式的`KnockoutJS`应用转化成一个使用自定义绑定提供者的不引人瞩目的绑定方式。简单的拉取所有的数据绑定属性，使用数据类属性来替换它们，并且像之前做的一样，将的绑定放到绑定对象中去。

```js
var viewModel = new ViewModel( todos || [] ),
    bindings = {

        newTodo:  {
            value: viewModel.current,
            valueUpdate: "afterkeydown",
            enterKey: viewModel.add
        },

        taskTooltip : {
            visible: viewModel.showTooltip
        },
        checkAllContainer : {
            visible: viewModel.todos().length
        },
        checkAll: {
            checked: viewModel.allCompleted
        },

        todos: {
            foreach: viewModel.todos
        },
        todoListItem: function() {
            return {
                css: {
                    editing: this.editing
                }
            };
        },
        todoListItemWrapper: function() {
            return {
                css: {
                    done: this.done
                }
            };
        },
        todoCheckBox: function() {
            return {
                checked: this.done
            };
        },
        todoContent: function() {
            return {
                text: this.content,
                event: {
                    dblclick: this.edit
                }
            };
        },
        todoDestroy: function() {
            return {
                click: viewModel.remove
            };
        },       

        todoEdit: function() {
            return {
                value: this.content,
                valueUpdate: "afterkeydown",
                enterKey: this.stopEditing,
                event: {
                    blur: this.stopEditing
                }
            };
        },

        todoCount: {
            visible: viewModel.remainingCount
        },
        remainingCount: {
            text: viewModel.remainingCount
        },
        remainingCountWord: function() {
            return {
                text: viewModel.getLabel(viewModel.remainingCount)
            };
        },
        todoClear: {
            visible: viewModel.completedCount
        },
        todoClearAll: {
            click: viewModel.removeCompleted
        },
        completedCount: {
            text: viewModel.completedCount
        },
        completedCountWord: function() {
            return {
                text: viewModel.getLabel(viewModel.completedCount)
            };
        },
        todoInstructions: {
            visible: viewModel.todos().length
        }
    };

    ....
```

> 上面代码中，丢掉了两行，仍然需要`getBindings`函数，这个函数遍历数据类属性中每一个关键字，并从中构建最终对象。如果检测到绑定对象是个函数，使用当前的数据调用它。的完成版自定义绑定提供中，如下：

```js
 // We can now create a bindingProvider that uses
// something different than data-bind attributes
ko.customBindingProvider = function( bindingObject ) {
    this.bindingObject = bindingObject;

    // determine if an element has any bindings
    this.nodeHasBindings = function( node ) {
        return node.getAttribute ? node.getAttribute( "data-class" ) : false;
    };
};

// return the bindings given a node and the bindingContext
this.getBindings = function( node, bindingContext ) {

    var result = {},
        classes = node.getAttribute( "data-class" );

    if ( classes ) {
        classes = classes.split( "" ); 

        //evaluate each class, build a single object to return
        for ( var i = 0, j = classes.length; i < j; i++ ) {

            var bindingAccessor = this.bindingObject[classes[i]];
            if ( bindingAccessor ) {
                var binding = typeof bindingAccessor === "function" ? bindingAccessor.call(bindingContext.$data) : bindingAccessor;
                ko.utils.extend(result, binding);              
            }  

        }
    }

    return result;
};
```

绑定对象最后的几行，定义如下：

```js
// set ko's current bindingProvider equal to our new binding provider
ko.bindingProvider.instance = new ko.customBindingProvider( bindings );  

// bind a new instance of our ViewModel to the page
ko.applyBindings( viewModel );

})();
```

在这里所做的是为的绑定处理器有效的定义构造器，绑定处理器接受一个用来查找绑定的对象（绑定）。然后可以使用数据类为应用程序视图的重写标记，像下面这样做：

```html
<div id="create-todo">
    <input id="new-todo" data-class="newTodo" placeholder="What needs to be done?" />
    <span class="ui-tooltip-top" data-class="taskTooltip" style="display: none;">Press Enter to save this task</span>
</div>
<div id="todos">
    <div data-class="checkAllContainer" >
        <input id="check-all" class="check" type="checkbox" data-class="checkAll" />
        <label for="check-all">Mark all as complete</label>
    </div>
    <ul id="todo-list" data-class="todos" >
        <li data-class="todoListItem" >
            <div class="todo" data-class="todoListItemWrapper" >
                <div class="display">
                    <input class="check" type="checkbox" data-class="todoCheckBox" />
                    <div class="todo-content" data-class="todoContent" style="cursor: pointer;"></div>
                    <span class="todo-destroy" data-class="todoDestroy"></span>
                </div>
                <div class="edit">
                    <input class="todo-input" data-class="todoEdit"/>
                </div>
            </div>
        </li>
    </ul>
</div>
```

Nei Kerkin 已经使用上面的方式组合成了一个完整的`TodoMVC`示例，它可以 从 这里获取到。 虽然上面的解释看起来像是有许多的工作要做，现在就有一个一般的getBindingmethod方法要写。比起为了编写的KnockoutJS应用程序而严格使用数据绑定，简单的重用和使用数据类更加的琐碎。最终的结果是希望得到一个干净的标记，其中的数据绑定会从视图切换到一个绑定对象。

## MVC VS MVP VS MVVM

> `MVP`和`MVVM`都是`MVC`的衍生物。它和它的衍生物之间关键的不同之处在于每一层对于其它层的依赖，以及它们相互之间是如何紧密结合在一起的。
>
> 在`MVC`中，视图位于架构的顶部，其背后是控制器。模型在控制器后面，而因此的视图了解得到的控制器，而控制器了解得到模型。这里，的视图有对模型的直接访问。然而将整个模型完全暴露给视图可能会有安全和性能损失，这取决于应用程序的复杂性。MVVM则尝试去避免这些问题。
>
> 在MVP中，控制器的角色被代理器所取代，代理器和视图处于同样的地位，视图和模型的事件都被它侦听着并且接受它的调解。不同于MVVM，没有一个将视图绑定到视图模型的机制，因此转而依赖于每一个视图都实现一个允许代理器同视图去交互的接口。
>
> MVVM进一步允许创建一个模型的特定视图子集，包含了状态和逻辑信息，避免了将模型完全暴露给视图的必要。不同于MVP的代理器，视图模型并不需要去引用一个视图。视图可以绑定到视图模型的属性上面，视图模型则去将包含在模型中的数据暴露给视图。像所提到过的，对视图的抽象意味着其背后的代码需要较少的逻辑。
>
> 对此的副作用之一就是视图模型和视图层之间新增的的用于翻译解释的一层会有性能损失。这种解释层的复杂度根据情况也会有所差异——它可能像复制数据一样简单，也可能会像希望用视图理解的一种形式去操作它们，那样复杂。由于整个模型是现成可用的，从而这种操作可以被避免掉，所以MVC没有这种问题。

## Backbone.js Vs KnockoutJS

了解MVC，MVP和MVVM之间的细微差别是很重要的，然而基于已经了解到的东西，开发者最终会问到是否它们应该考虑使用KnockoutJS而不是Backbone这个问题。下面的一些相关事项对此可能有些帮助：

* 两个库都设计用于不同的目标，它常常不仅仅简单的知识选择MVC或者MVVM的问题。

* 如果数据绑定和双向通信是你主要关注的问题，KnockoutJS绝对是应该选择的方式。实践中任何存储在DOM节点中的值或者属性都能够使用此方法映射到Javascript对象上面。

* Backbone在同RESTful服务的易于整合方面有其过人之处，而KnockoutJS模型就是简单的Javascript对象，而更新模型所需要的代码也必须要由开发者自己来写。

* KnockoutJS专注于自动的UI绑定，如果尝试使用Backbone来做的话则会要求更加细节的自定义代码。由于Backbone自身就意在独立于UI而存在，所以这并不是它的问题。然而Knockback也确实能协助并解决此问题。 使用KnockoutJS，能够将自己拥有的函数绑定到视图模型观察者上面，任何时候观察者一旦发生了变化，它都会执行。这允许能够拥有同在Backbone中发现的一样级别的灵活性。

* Backbone内置有一个坚实的路由解决方案，而KnockoutJS则没有提供路由供选择。然而人们如果需要的话，可以很容易的加入这个行为，使用Ben Alman的BBQ插件或者一个像Miller Medeiros优秀的Crossroads就行了。

总结下来，我个人发觉`KnockoutJS`更适合于小型的应用，而Backbone的特性在任何东西都是无序的场景下面才会是亮点。那就是说，许多开发者两个框架都已经使用过来编写不同复杂度的应用程序，而我建议在一个小范围内两种都尝试一下，在你决定哪一种能更好的为你工作之前。

