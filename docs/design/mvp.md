# MVP模式

## 模型,视图&展示器

> MVP中的P代表展示器.它是一个包含视图的用户界面逻辑的组件.不像MVC,来自视图的调用被委派给了展示器,它是从视图中解耦出来的,并且转而通过一个接口来同它进行对话.这允许所有类型的有用的东西,比如在单元测试中模拟视图的调用。
>
> 对MVP最通常的实现是使用一个被动视图(Passive View 一种对所有动机和目的保持静默的视图),包含很少甚至与没有任何逻辑.如果MVC和MVP是不同的,那是因为其C和P干了不同的事情.在MVP中,P观察着模型并且当模型发生改变的时候对视图进行更新.P切实的将模型绑定到了视图,这一责任在MVC中被控制器提前持有了。
>
> 通过视图发送请求，展示者执行所有和用户请求相关的工作，并且把数据返回给视图。从这个方面来讲，它们获取数据，操作数据，然后决定数据如何在视图上面展示。在一些实现当中，展示者同时和一个服务层交互，用于持久化数据（模型）。模型可以触发事件，但是是由展示者扮演这个角色，用于订阅这些事件，从而来更新视图。在这个被动体系架构下，没有直接数据绑定的概念。视图暴露setter ，而展示者使用这些setter 来设置数据。
>
> 相较于MVC模式的这个改变所带来的好处是，增强了应用的可测试性，并且提供了一个更加干净的视图和模型之间的隔离。但是在这个模式里面伴随着缺乏数据绑定支持的缺陷，这就意味着必须对这个任务做另外的处理。
>
> 尽管被动视图实现起来普遍都是为视图和实现一个接口，但在它之上还是有差异的，包括可以更多的把视图从展示器解耦的事件的使用。由于在Javascript中并没有接口的构造，这里更多的是使用一种约定而不是一个明确的接口。技术上看它仍然是一个接口，而从那个角度对于而言把它作为一个接口引用可能更加说得过去一些。
>
> 也有一种叫做监督控制器的MVP的变种，它更加接近于`MVC`和`MVVM`模式，因为它提供了来自于直接来源于视图的模型的数据绑定。键值观察（KVO）插件（比如Derick Bailey的Backbone.ModelBingding插件）趋向于吧Backbone带出被动视图的范畴，而更多的带入监督控制器和`MVVM`变异中。

## MVP还是MVC

> MVP一般最常使用在企业级应用程序中，这样的程序中有必要对展现逻辑尽可能的重用。带有非常复杂的逻辑和大量用户交互的应用程序中，也许会发现MVC相对来说并不怎么满足需求，因为要解决这个问题可能意味着对多重控制器的重度依赖。在MVP中，所有这些复杂的逻辑能够被封装到一个展示器中，它可以显著的简化维护工作量。
>
> 由于MVP的视图是通过一个接口来被定义的，而这个接口在技术上唯一的要点只是系统和视图（展示器除外）之间接触，这一模式也允许开发者不需要等待设计师为应用程序制作出布局和图形，就可以开始编写展现逻辑。
>
> 根据其实现，MVP也许MVC更加容易进行自动的单元测试。为此常常被提及的理由是展示器可以被当做用户接口的完全模拟来使用，而因此它能够独立于其它组件接受单元测试。在我的经验中这取决于正在实现的MVP所使用的语言（超过一种取代Javascript来实现MVP的可选语言，同Javascript有着相当大的不同，比如说ASP.net）。
>
> 在一天的终点，对MVC可能会有的底层关注，可能将是保持对MVP的认可，因为它们之间的不同主要是在语义上的。一旦对清晰分离的关注被纳入到模型、视图和控制器（或者展示器）中，也许会获得大部分同样的好处，而不用去管所作出的选择的差异。

## MVC, MVP 和 Backbone.js

> 很少有，但是如果有任何架构性质的Javascript框架声称用其经典形式实现了MVC或者MVP模式的话，那是因为许多开发者并不认为MVC和MVP是相互冲突的（看到诸如ASP.net或者GWT这样的web框架，实际上更加可能会认为MVP被严格的实现了）。这是因为让的应用程序有一个附加的展示器/视图逻辑，同时也仍然当其是一种MVC的意味，是有可能的。
>
> Backbone贡献者Irene Ros（位于波士顿的Bocoup）赞同这种想法，当她将视图分离到属于它们自己的单独组件中时，她需要某些东西来实际为她组装它们。这可以是一个控制器路由（比如Backbone.Router，在本书的后面会提到）或者一个对被获取数据做出响应的回调。

这就是说，一些开发者确实感觉Backbone.js更加适合于MVP的描述，相比于MVC。他们的观点是：

* 相比于控制器，`MVP`中的展示器更好的描述了`Backbone.View`（视图模板和绑定在视图模板之上的数据之间的中间层）。

* 模型适合`Backbone.Model`（相较于MVC中的模型并没有很大的不同）。

* 视图最能代表模板（比如 `Handlebars/Mustache`标记模板）

> 对此的回应会是视图也可以是一个`View`（如MVC），因为`Backbone`对于让它用于多用途有足够的弹性。`MVC`中的V和`MVP`中的P都能够通过`Backbone.View`来完成，因为它们能够达成两个目标：都用来渲染原子组件，还有将那个组件组装起来让其它视图来渲染。
>
> 也已经看到`Backbone`中控制器的责任`Backbone.View`和`Backbone.Router`都有分享，而在下面的示例中能够实际看到那方面实际上都是千真万确的。
>
> 在`this.model.bind("change",..)`一行中，的`BackbonePhotoView`使用了观察者模式来对视图的改变进行“订阅”。它也处理`render()`方法中的模板，但是并不像一些其它的实现，用户交互也在视图中处理（见`events`参数）。

```js
var PhotoView = Backbone.View.extend({

    //... is a list tag.
    tagName:  "li",

    // Pass the contents of the photo template through a templating
    // function, cache it for a single photo
    template: _.template( $("#photo-template").html() ),

    // The DOM events specific to an item.
    events: {
      "click img" : "toggleViewed"
    },

    // The PhotoView listens for changes to
    // its model, re-rendering. Since tHere's
    // a one-to-one correspondence between a
    // **Photo** and a **PhotoView** in this
    // app, we set a direct reference on the model for convenience.

    initialize: function() {
      this.model.on( "change", this.render, this );
      this.model.on( "destroy", this.remove, this );
    },

    // Re-render the photo entry
    render: function() {
      $( this.el ).html( this.template(this.model.toJSON() ));
      return this;
    },

    // Toggle the `"viewed"` state of the model.
    toggleViewed: function() {
      this.model.viewed();
    }

});
```

> 另一种（完全不同的）看法是`Backbone`更加向前面考察过的Smalltalk-80MVC靠拢。
>
> 定期为`Backbone`写博客的Derick Bailey之前已经提到过，最终最好不要去强迫`Backbone`让其适应任何特定的设计模式。设计模式应该考虑指导可能如何被构建的灵活性，而在这一方面，`Backbone`既不适应MVC，也不适应MVP。相反，它从多个架构模式中借用了一些最好的经验而创造出了一个灵活的框架，并且工作得很好。