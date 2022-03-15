# MVC模式

## MVC

> MVC是一个架构设计模式，它通过分离关注点的方式来支持改进应用组织方式。它促成了业务数据(`Models`)从用户界面(`Views`)中分离出来，还有第三个组成部分(`Controllers`)负责管理传统意义上的业务逻辑和用户输入。该模式最初是由Trygve Reenskaug在研发Smalltalk-80 (1979)期间设计的，当时它起初被称作`Model-View-Controller-Editor`。在1995年的“设计模式: 面向对象软件中的可复用元素” (著名的"GoF"的书)中，MVC被进一步深入的描述，该书对`MVC`的流行使用起到了关键作用。

## Smalltalk-80 MVC

> 了解一下最初的MVC模式打算解决什么问题是很重要的，因为自从诞生之日起它已经发生了很大的改变。回到70年代，图形用户界面还很稀少，一个被称为分离展示的概念开始被用来清晰的划分下面两种对象：领域对象，它对现实世界里的概念进行建模(比如一张照片，一个人)， 还有展示对象，它被渲染到用户屏幕上进行展示。
>
> Smalltalk-80作为MVC的实现，把这一概念进一步发展，产生这样一个观点，即把应用逻辑从用户界面中分离开来。这种想法使得应用的各个部分之间得以解耦，也允许该应用中的其它界面对模型进行复用。关于Smalltalk-80的MVC架构，有几点很有趣，值得注意一下:

* 模型表现了领域特定的数据,并且不用考虑用户界面(视图和控制器).当一个模型有所改变的时候,它会通知它的观察者。

* 视图表现了一个模型的当前状态.观察者模式被用来让视图在任何时候都知晓模型已经被更新了或者被改变了。

* 展现受到视图的照管,但是不仅仅只有一个单独的视图或者控制器——每一个在屏幕上展现的部分或者元素都需要一个视图-控制器对。

* 控制器在这个视图-控制器对中扮演着处理用户交互的角色（比如按键或者点击动作），做出对视图的选择。

> 开发者有时候会惊奇于他们了解到的观察者模式（如今已经被普遍的作为发布/订阅的变异实现了）已经在几十年以前被作为MVC架构的一部分包含进去了.在Smalltalk-80的 MVC中,视图观察着模型.如上面要点中所提到的,模型在任何时候发生了改变,视图就会做出响应.一个简单的示例就是一个由股票市场数据支撑的应用程序——为了应用程序的实用性，任何对于模型中数据的改变都应该导致视图中的结果实时的刷新。

## JavaScript 开发者可以使用的 MVC

> 已经回顾了70年代，让回到当下回到眼前。现在，MVC模式已经被应用到大范围的编程语言当中，包括与关系最近的JavaScript。JavaScript领域现在有一些鼓励支持`MVC` (或者是它的变种，称之为`MV*` 家族)的框架，允许开发者不用付出太多的努力就可以往他们的应用中添加新的结构。

> 这些框架包括诸如`Backbone`, `Ember.js`和`AngularJS`。考虑到避免出现“意大利面条”式的代码的重要性，该词是指那些由于缺乏结构设计而导致难于阅读和维护的代码，对现代JavaScript开发者来说，了解该模式能够提供什么已经是势在必行。这使得可以有效的领会到，这些框架能让以不同的方式做哪些事情。

### Models

> Models管理一个业务应用的数据。它们既与用户界面无关也与表现层无关，相反的它们代表了一个业务应用所需要的形式唯一的数据。当一个model改变时(比如当它被更新时)，它通常会通知它的观察者(比如很快会介绍的views)一个改变已经发生了，以便观察者采取相应的反应。

为了更深的理解models，让假设有一个JavaScript的相册应用。在一个相册中，照片这个概念配得上拥有一个自己的`model`， 因为它代表了特定领域数据的一个独特类型。这样一个`model`可以包含一些相关的属性，比如标题，图片来源和额外的元数据。一张特定的照片可以存储到`model`的一个实例中，而且一个`model`也可以被复用。下面可以看到一个用`Backbone`实现的被简化的`model`例子。

```js
var Photo = Backbone.Model.extend({

    // 照片的默认属性
    defaults: {
      src: "placeholder.jpg",
      caption: "A default image",
      viewed: false
    },

    // 确保每一个被创建的照片都有一个`src`.
    initialize: function() {
       this.set( { "src": this.defaults.src} );
    }

});
```

> 不同的框架其内置的模型的能力有所不同,然而他们对于属性验证的支持还是相当普遍的,属性展现了模型的特征,比如一个模型标识符.当在一个真实的世界使用模型的时候,一般也希望模型能够持久.持久化允许用最近的状态对模型进行编辑和更新,这一状态会存储在内存、用户的本地数据存储区或者一个同步的数据库中。
>
> 另外，模型可能也会被多个视图观察着。如果说，的照片模型包含了一些元数据，比如它的位置（经纬度），照片中所展现的好友（一个标识符的列表）和一个标签的列表，开发者也许会选择为这三个方面的每一个提供一个单独的视图。
>
> 为现代`MVC/MV*`框架提供一种将模型组合到一起的方法（例如，在Backbone中，这些分组作为“集合”被引用）并不常见。管理分组中的模型允许基于来自分组中所包含的模型发生改变的通知,来编写应用程序逻辑.这避免了手动设置去观察每一个单独的模型实体的必要。

如下是一个将模型分组成一个简化的Backbone集合的示例:

```js
var PhotoGallery = Backbone.Collection.extend({

    // Reference to this collection's model.
    model: Photo,

    // Filter down the list of all photos
    // that have been viewed
    viewed: function() {
        return this.filter(function( photo ){
           return photo.get( "viewed" );
        });
    },

    // Filter down the list to only photos that
    // have not yet been viewed
    unviewed: function() {
      return this.without.apply( this, this.viewed() );
    }
});
```

> MVC上旧的文本可能也包含了模型管理着应用程序状态的一种概念的引述.Javascript中的应用程序状态有一种不同的意义,通常指的是当前的"状态",即在一个固定点上的用户屏幕上的视图或者子视图(带有特定的数据).状态是一个经常被谈论到的话题,看一看单页面应用程序,其中的状态的概念需要被模拟。

### 视图

> 视图是模型的可视化表示，提供了一个当前状态的经过过滤的视图。`Smaltalk`的视图是关于绘制和操作位图的，而JavaScript的视图是关于构建和操作DOM元素的。
>
> 一个视图通常是模型的观察者，当模型改变的时候，视图得到通知，因此使得视图可以更新自身。用设计模式的语言可以称视图为“哑巴”，因为在应用程序中是它们关于模型和控制器的了解是受到限制的。
>
> 用户可以和视图进行交互，包括读和编辑模型的能力（例如，获取或者设置模型的属性值）。因为视图是表示层，通常以用户友好的方式提供编辑和更新的能力。例如，在之前讨论的照片库应用中，模型编辑可以通过“编辑”视图来进行，这个视图里面，用户可以选择一个特定的图片，接着编辑它的元数据。
>
> 而实际更新模型的任务落到了控制器上面（很快就会讲这个东西）。
>
> 让使用vanilla JavaScript 实现的例子来更深入的探索一下视图。下面可以看到一个函数创建了一个照片视图，使用了模型实例和控制器实例。
>
> 在视图里定义了一个`render()`工具，使用一个`JavaScript`模板引擎来用于渲染照片模型的内容（`Underscore`的模板），并且更新了视图的内容，供照片EI来参考。
>
> 照片模型接着将的`render()`函数作为一个其一个订阅者的回调函数，这样通过观察者模式，当模型发生改变的时候，就能触发视图的更新。
>
> 人们可能会问用户交互如何在这里起作用的。当用户点击视图中的任何元素，不是由视图决定接下来怎么做。而是由控制器为视图做决定。在的例子中，通过为`photoEI`增加一个事件监听器，来达到这个目的，`photoEI`将会代理处理送往控制器的点击行为，在需要的时候将模型信息和事件一并传递。
>
> 这个架构的好处是每个组件在应用工作的时候都扮演着必要的独立的角色。

```js
var buildPhotoView = function ( photoModel, photoController ) {

  var base = document.createElement( "div" ),
      photoEl = document.createElement( "div" );

  base.appendChild(photoEl);

  var render = function () {
          // We use a templating library such as Underscore
          // templating which generates the HTML for our
          // photo entry
          photoEl.innerHTML = _.template( "#photoTemplate" , {
              src: photoModel.getSrc()
          });
      };

  photoModel.addSubscriber( render );

  photoEl.addEventListener( "click", function () {
    photoController.handleEvent( "click", photoModel );
  });

  var show = function () {
    photoEl.style.display = "";
  };

  var hide = function () {
    photoEl.style.display = "none";
  };

  return {
    showView: show,
    hideView: hide
  };

};
```

### 模板

> 在支持`MVC/MV*`的JavaScript框架的下，有必要简略的讨论一下JavaScript的模板以及它们与视图之间的关系，在上一小节，已经接触到这种关系了。
>
> 历史已经证明在内存中通过字符串拼接来构建大块的HTML标记是一种糟糕的性能实践。开发者这样做，就会深受其害。遍历数据，将其封装成嵌套的div，使用例如`document.writeto` 这样过时的技术将"模板"注入到DOM中。这样通常意味着校本化的标记将会嵌套在标准的标记中，很快就变得很难阅读了，更重要的是，维护这样的代码将是一场灾难，尤其是在构建大型应用的时候。
>
> JavaScript 模板解决方案（例如`Handlebars.js` 和`Mustache`）通常用于为视图定义模板作为标记（要么存储在外部，要么存储在脚本标签里面，使用自定义的类型例如`text/template`），标记中包含有模板变量。变量可以使用变化的语法来分割（例如`{{name}}`），框架通常也足够只能接受JSON格式的数据（模型可以转化成JSOn格式），这样只需要关心如何维护干净的模型和干净的模板。人们遭遇的绝大多数的苦差事都被框架本身所处理了。这样做有大量的好处，尤其选择是将模板存储在外部的时候，这样在构建大型引应用的时候可以是模板按照需要动态加载。

下面可以看到两个`HTMP`模板的例子。一个使用流行的`Handlebar.js`框架实现，一个使用`Underscore`模板实现。

### Handlebars.js

```html
<li class="photo">
  <h2>{{caption}}</h2>
  <img class="source" src="{{src}}"/>
  <div class="meta-data">
    {{metadata}}
  </div>
</li>
```

### Underscore.js Microtemplates

```html
<li class="photo">
  <h2><%= caption %></h2>
  <img class="source" src="<%= src %>"/>
  <div class="meta-data">
    <%= metadata %>
  </div>
</li>
<span style="line-height:1.5;font-family:'sans serif', tahoma, verdana, helvetica;font-size:10pt;"></span>
```

> 请注意模板并不是它们自身的视图，来自于`Struts Model 2` 架构的开发者可能会感觉模板就是一个视图，但并不是这样的。视图是一个观察着模型的对象，并且让可视的展现保持最新。模板也许是用一种声明的方式指定部分甚至所有的视图对象，因此它可能是从模板定制文档生成的。
>
> 在经典的web开发中，在单独的视图之间进行导航需要利用到页面刷新，然而也并不值得这样做。而在单页面Javascript应用程序中，一旦数据通过ajax从服务器端获取到了，并不需要任何这样必要的刷新，就可以简单的在同一个页面渲染出一个新的视图。
>
> 这里导航就降级为了“路由”的角色，用来辅助管理应用程序状态（例如，允许用户用书签标记它们已经浏览到的视图）。然而，路由既不是`MVC`的一部分，也不在每一个类`MVC`框架中展现出来，在这一节中我将不深入详细的讨论它们。
>
> 总而言之，视图是对的数据的一种可视化展现。

### 控制器

> 控制器是模型和视图之间的中介，典型的职责是当用户操作视图的时候同步更新模型。
>
> 在的照片廊应用程序中，控制器会负责处理用户通过对一个特定照片的视图进行编辑所造成改变，当用户完成编辑后，就更新一个特定的照片模型。
>
> 请记住满足了`MVC`中的一种角色：针对视图的策略模式的基础设施。在策略模式方面，视图在视图的自由载量权方面代表了控制器。因此，那就是测试模式是如何工作的，视图可以代表针对控制器的用户事件，当视图看起来合适的时候。视图也可以代表针对控制器的模型变更事件处理，当视图看起来合适的时候，但这并不是控制器的传统角色。
>
> 大多数的Javascript `MVC`框架都受到了对"`MVC`"通常认知的影响,而这种认知是和控制器绑定在一起的.出现这种情况的原因各异,但在我的真实想法中,那是由于框架的作者一开始就将从服务器端的角度看待`MVC`,意识到它并不在客户端进行`1:1`的翻译,而对`MVC`中的C进行重新诠释意在他们感觉更加有意义的事情.与此同在的问题在于它是主观的,增加了理解经典MVC模式的复杂度,当然还有控制器在现代框架中的角色。
>
> 作为示例,让来简要回顾一下当前流行的一种构造框架`Backbone.js`其架构.`Backbone`包含了模型和视图(某些东西同前面看到的类似),然而它实际上并没有真正的控制器.它的视图和路由行为同控制器有一点点类似,但它们自身实际上都不是控制器。
>
> 在这一方面,同官方文档或者博客文章中可能提到的相左,`Backbone`既不是一个真正的`MVC/MVP`框架,也不是一个`MVVM`框架.事实上把它看做是用它自身的方式架构方法的`MV*`家族中的一员,更加合适.当然这没有任何错误的地方,但区分经典`MVC`和`MV*`是重要的,应该依靠前者的经典语法来帮助理解后者。

## Spine.js VS Backbone.js

### Spine.js

> 现在知道传统的控制器负责当用户更新视图是同步更新模型.值得注意的一个有趣的地方是大多数时下流行的`Javascript` `MVC/MV*`框架在编写的时候(`Backbone`)都没有属于它们自己的明确的控制器的概念。
>
因此,这对于从另一个`MVC`框架中体会到控制器实现的差异,并更进一步的展现出控制如何扮演着非传统的角色是很有用处的.对于这一点,让来看看来自于`Spine.js`的示例控制器。
>
> 在这个示例中,会有一个叫做`PhotosController`的控制器，用来管理应用程序中的个人照片.它将确保当视图更新(例如,一个用户编辑了照片的元数据)时,对应的模型也会更新。

注意:并不会花大力气研究`Spine.js`,而只是对它的控制器能做什么进行一定程度的了解:

```js
// Controllers in Spine are created by inheriting from Spine.Controller

var PhotosController = Spine.Controller.sub({ 

  init: function () {
    this.item.bind( "update" , this.proxy( this.render ));
    this.item.bind( "destroy", this.proxy( this.remove ));
  },

  render: function () {
    // Handle templating
    this.replace( $( "#photoTemplate" ).tmpl( this.item ) );
    return this;
  },

  remove: function () {
    this.el.remove();
    this.release();
  }
});
```

> 在`Spine`中,控制器被认为是一个应用程序的粘合剂,对`DOM`事件进行添加和响应,渲染模板,还有确保视图和模型保持同步(这在所知的控制器的上下文中起作用)。
>
> 在上面的`example.js`示例中所做的,是使用`render()`和`remove()`方法在更新和销毁事件中设置侦听器。当一个照片条目获得更新的时候，对视图进行重新渲染，以此反映对元数据的修改。类似的，如果照片从照片集中被删除了，也会把它从视图中移除。在`render()`函数中，使用`Underscore`微模板（通过`_.template()`)来用ID #photoTemplate对一个Javascript模板进行渲染。这样会简单的返回一个编辑了的HTML字符串用来填充`photoEL`的内容。
>
> 这为提供了一个非常轻量级的，简单的管理模型和视图之间的变更的方法。

### Backbone.js

> 后面的章节将会对`Backbone`和传统MVC之间的区别进行一下重新审视,但现在还是让专注于控制器吧。
>
> 在`Backbone`中,控制器的责任一分为二,由`Backbone.View`和`Backbone.Router`共享.前段时间`Backbone`确曾有其属于自己的`Backbone.Controller`,但是对这一组件的命名对于它所被使用的上下文环境中并没有什么意义,后来它就被重新命名为`Router`了。
>
> `Router`比控制器要负担处理着更多一点点的责任,因为它使得为模型绑定事件,以及让的视图对DOM事件和渲染产生响应,成为可能.如Tim Branyen(另外一名基于Bocoup的Backbone贡献者)在以前所指出的，为此完全摆脱不使用`Backbone.Router`是有可能的，因此一种考虑让它使用Router范式的做法可能像下面这样：

```js
var PhotoRouter = Backbone.Router.extend({
  routes: { "photos/:id": "route" },

  route: function( id ) {
    var item = photoCollection.get( id );
    var view = new PhotoView( { model: item } );

    $('.content').html( view.render().el );
  }
});
```

## MVC优点

* 整体的维护更加便利.当需要对应用程序进行更新时,到底这些改变是否是以数据为中心的,意味着对模型的修改还-有可能是控制器,或者仅仅是视觉的,意味着对视图的修改,这一区分是非常清楚的。

* 对模型和视图的解耦意味着为业务逻辑编写单元测试将会是更加直截了当的。

* 对底层模型和控制器的代码解耦(即可能会取代使用的)在整个应用程序中被淘汰了。

* 依赖于应用程序的体积和角色的分离,这种模块化允许负责核心逻辑的开发者和工作于用户界面的开发者同时进行工作。