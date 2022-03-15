# 中介者模式

## 中介者模式

字典中中介者的定义是，一个中立方，在谈判和冲突解决过程中起辅助作用。在的世界，一个中介者是一个行为设计模式，使可以导出统一的接口，这样系统不同部分就可以彼此通信。

如果系统组件之间存在大量的直接关系，就可能是时候，使用一个中心的控制点，来让不同的组件通过它来通信。中介者通过将组件之间显式的直接的引用替换成通过中心点来交互的方式，来做到松耦合。这样可以帮助解耦，和改善组件的重用性。

在现实世界中，类似的系统就是，飞行控制系统。一个航站塔（中介者）处理哪个飞机可以起飞，哪个可以着陆，因为所有的通信（监听的通知或者广播的通知）都是飞机和控制塔之间进行的，而不是飞机和飞机之间进行的。一个中央集权的控制中心是这个系统成功的关键，也正是中介者在软件设计领域中所扮演的角色。

从实现角度来讲，中介者模式是观察者模式中的共享被观察者对象。在这个系统中的对象之间直接的发布/订阅关系被牺牲掉了，取而代之的是维护一个通信的中心节点。

也可以认为是一种补充-用于应用级别的通知，例如不同子系统之间的通信，子系统本身很复杂，可能需要使用发布/订阅模式来做内部组件之间的解耦。

另外一个类似的例子是DOM的事件冒泡机制，以及事件代理机制。如果系统中所有的订阅者都是对文档订阅，而不是对独立的节点订阅，那么文档就充当一个中介者的角色。DOM的这种做法，不是将事件绑定到独立节点上，而是用一个更高级别的对象负责通知订阅者关于交互事件的信息。

## 基础的实现

> 中间人模式的一种简单的实现可以在下面找到,`publish()`和`subscribe()`方法都被暴露出来使用:

```js
var mediator = (function(){

    // Storage for topics that can be broadcast or listened to
    var topics = {};

    // Subscribe to a topic, supply a callback to be executed
    // when that topic is broadcast to
    var subscribe = function( topic, fn ){

        if ( !topics[topic] ){
          topics[topic] = [];
        }

        topics[topic].push( { context: this, callback: fn } );

        return this;
    };

    // Publish/broadcast an event to the rest of the application
    var publish = function( topic ){

        var args;

        if ( !topics[topic] ){
          return false;
        }

        args = Array.prototype.slice.call( arguments, 1 );
        for ( var i = 0, l = topics[topic].length; i < l; i++ ) {

            var subscription = topics[topic][i];
            subscription.callback.apply( subscription.context, args );
        }
        return this;
    };

    return {
        publish: publish,
        subscribe: subscribe,
        installTo: function( obj ){
            obj.subscribe = subscribe;
            obj.publish = publish;
        }
    };

}());
```

### 高级的实现

对于那些对更加高级实现感兴趣的人,以走读的方式看一看以下我对Jack Lawson优秀的Mediator.js重写的一个缩略版本.在其它方面的改进当中,为的中间人支持主题命名空间,用户拆卸和一个更加稳定的发布/订阅系统。但是如果你想跳过这个走读，你可以直接进入到下一个例子继续阅读。

得感谢Jack优秀的代码注释对这部分内容的协助。

首先，让实现认购的概念，可以考虑一个中间人主题的注册。

通过生成对象实体,稍后能够简单的更新认购,而不需要去取消注册然后重新注册它们.认购可以写成一个使用被称作一个选项对象或者一个上下文环境的函数

```js
// Pass in a context to attach our Mediator to.
// By default this will be the window object
(function( root ){

  function guidGenerator() { /*..*/}

  // Our Subscriber constructor
  function Subscriber( fn, options, context ){

    if ( !(this instanceof Subscriber) ) {

      return new Subscriber( fn, context, options );

    }else{

      // guidGenerator() is a function that generates
      // GUIDs for instances of our Mediators Subscribers so
      // we can easily reference them later on. We're going
      // to skip its implementation for brevity

      this.id = guidGenerator();
      this.fn = fn;
      this.options = options;
      this.context = context;
      this.topic = null;

    }
  }
})();
```

在的中间人主题中包涵了一长串的回调和子主题,当中间人发布在中间人实体上被调用的时候被启动.它也包含操作数据列表的方法

```js
// Let's model the Topic.
// JavaScript lets us use a Function object as a
// conjunction of a prototype for use with the new
// object and a constructor function to be invoked.
function Topic( namespace ){

  if ( !(this instanceof Topic) ) {
    return new Topic( namespace );
  }else{

    this.namespace = namespace || "";
    this._callbacks = [];
    this._topics = [];
    this.stopped = false;

  }
}

// Define the prototype for our topic, including ways to
// add new subscribers or retrieve existing ones.
Topic.prototype = {

  // Add a new subscriber
  AddSubscriber: function( fn, options, context ){

    var callback = new Subscriber( fn, options, context );

    this._callbacks.push( callback );

    callback.topic = this;

    return callback;
  },
...
```

的主题实体被当做中间人调用的一个参数被传递.使用一个方便实用的calledStopPropagation()方法,回调就可以进一步被传播开来:

```js
StopPropagation: function(){
  this.stopped = true;
},
```

也能够使得当提供一个GUID的标识符的时候检索订购用户更加容易:

```js
GetSubscriber: function( identifier ){

  for(var x = 0, y = this._callbacks.length; x < y; x++ ){
    if( this._callbacks[x].id == identifier || this._callbacks[x].fn == identifier ){
      return this._callbacks[x];
    }
  }

  for( var z in this._topics ){
    if( this._topics.hasOwnProperty( z ) ){
      var sub = this._topics[z].GetSubscriber( identifier );
      if( sub !== undefined ){
        return sub;
      }
    }
  }

},
```

接着,在需要它们的情况下,也能够提供添加新主题,检查现有的主题或者检索主题的简单方法:

```js
AddTopic: function( topic ){
  this._topics[topic] = new Topic( (this.namespace ? this.namespace + ":" : "") + topic );
},

HasTopic: function( topic ){
  return this._topics.hasOwnProperty( topic );
},

ReturnTopic: function( topic ){
  return this._topics[topic];
},
```

如果觉得不再需要它们了,也可以明确的删除这些订购用户.下面就是通过它的其子主题递归删除订购用户的代码:

```js
RemoveSubscriber: function( identifier ){

  if( !identifier ){
    this._callbacks = [];

    for( var z in this._topics ){
      if( this._topics.hasOwnProperty(z) ){
        this._topics[z].RemoveSubscriber( identifier );
      }
    }
  }

  for( var y = 0, x = this._callbacks.length; y < x; y++ ) {
    if( this._callbacks[y].fn == identifier || this._callbacks[y].id == identifier ){
      this._callbacks[y].topic = null;
      this._callbacks.splice( y,1 );
      x--; y--;
    }
  }

},
```

接着通过递归子主题将发布任意参数的能够包含到订购服务对象中:

```js
Publish: function( data ){

    for( var y = 0, x = this._callbacks.length; y < x; y++ ) {

        var callback = this._callbacks[y], l;
          callback.fn.apply( callback.context, data );

      l = this._callbacks.length;

      if( l < x ){
        y--;
        x = l;
      }
    }

    for( var x in this._topics ){
      if( !this.stopped ){
        if( this._topics.hasOwnProperty( x ) ){
          this._topics[x].Publish( data );
        }
      }
    }

    this.stopped = false;
  }
};
```

接着暴露将主要交互的调节实体.这里它是通过注册的并且从主题中删除的事件来实现的

```js
function Mediator() {

  if ( !(this instanceof Mediator) ) {
    return new Mediator();
  }else{
    this._topics = new Topic( "" );
  }

};
```

想要更多先进的用例,可以看看调解支持的主题命名空间,下面这样的`asinbox:messages:new:read.GetTopic` 返回基于一个命名空间的主题实体。

```js
Mediator.prototype = {

  GetTopic: function( namespace ){
    var topic = this._topics,
        namespaceHierarchy = namespace.split( ":" );

    if( namespace === "" ){
      return topic;
    }

    if( namespaceHierarchy.length > 0 ){
      for( var i = 0, j = namespaceHierarchy.length; i < j; i++ ){

        if( !topic.HasTopic( namespaceHierarchy[i]) ){
          topic.AddTopic( namespaceHierarchy[i] );
        }

        topic = topic.ReturnTopic( namespaceHierarchy[i] );
      }
    }

    return topic;
  },
```

这一节定义了一个`Mediator.Subscribe`方法，它接受一个主题命名空间,一个将要被执行的函数,选项和又一个在订阅中调用函数的上下文环境.这样就创建了一个主题,如果这样的一个主题存在的话

```js
Subscribe: function( topiclName, fn, options, context ){
  var options = options || {},
      context = context || {},
      topic = this.GetTopic( topicName ),
      sub = topic.AddSubscriber( fn, options, context );

  return sub;
},
```

根据这一点,可以进一步定义能够访问特定订阅用户,或者将他们从主题中递归删除的工具

```js
// Returns a subscriber for a given subscriber id / named function and topic namespace

GetSubscriber: function( identifier, topic ){
  return this.GetTopic( topic || "" ).GetSubscriber( identifier );
},

// Remove a subscriber from a given topic namespace recursively based on
// a provided subscriber id or named function.

Remove: function( topicName, identifier ){
  this.GetTopic( topicName ).RemoveSubscriber( identifier );
},
```

主要的发布方式可以让随意发布数据到选定的主题命名空间，这可以在下面的代码中看到。

主题可以被向下递归.例如,一条对`inbox:message`的`post`将发送到`inbox:message:new`和`inbox:message:new:read`.它将像接下来这样被使用:`Mediator.Publish( "inbox:messages:new", [args] )`;

```js
Publish: function( topicName ){
    var args = Array.prototype.slice.call( arguments, 1),
        topic = this.GetTopic( topicName );

    args.push( topic );

    this.GetTopic( topicName ).Publish( args );
  }
};
```

最后，可以很容易的暴露的中间人，将它附着在传递到根中的对象上：

```js
 root.Mediator = Mediator;
  Mediator.Topic = Topic;
  Mediator.Subscriber = Subscriber;

// Remember we can pass anything in here. I've passed inwindowto
// attach the Mediator to, but we can just as easily attach it to another
// object if desired.
})( window );
```

## 示例

无论是使用来自上面的实现（简单的选项和更加先进的选项都是），能够像下面这样将一个简单的聊天记录系统整到一起:

### HTML

```html
<h1>Chat</h1>
<form id="chatForm">
    <label for="fromBox">Your Name:</label>
    <input id="fromBox" type="text"/>
    <br />
    <label for="toBox">Send to:</label>
    <input id="toBox" type="text"/>
    <br />
    <label for="chatBox">Message:</label>
    <input id="chatBox" type="text"/>
    <button type="submit">Chat</button>
</form>

<div id="chatResult"></div>
```

### Javascript

```js
$( "#chatForm" ).on( "submit", function(e) {
    e.preventDefault();

    // Collect the details of the chat from our UI
    var text = $( "#chatBox" ).val(),
        from = $( "#fromBox" ).val(),
        to = $( "#toBox" ).val();

    // Publish data from the chat to the newMessage topic
    mediator.publish( "newMessage" , { message: text, from: from, to: to } );
});

// Append new messages as they come through
function displayChat( data ) {
    var date = new Date(),
        msg = data.from + " said \"" + data.message + "\" to " + data.to;

    $( "#chatResult" )
        .prepend("
<p>
    " + msg + " (" + date.toLocaleTimeString() + ")
</p>
");
}

// Log messages
function logChat( data ) {
    if ( window.console ) {
        console.log( data );
    }
}

// Subscribe to new chat messages being submitted
// via the mediator
mediator.subscribe( "newMessage", displayChat );
mediator.subscribe( "newMessage", logChat );

// The following will however only work with the more advanced implementation:

function amITalkingToMyself( data ) {
    return data.from === data.to;
}

function iAmClearlyCrazy( data ) {
    $( "#chatResult" ).prepend("
<p>
    " + data.from + " is talking to himself.
</p>
");
}

 mediator.Subscribe( amITalkingToMyself, iAmClearlyCrazy );
```

### 优点&缺点

> 中间人模式最大的好处就是，它节约了对象或者组件之间的通信信道，这些对象或者组件存在于从多对多到多对一的系统之中。由于解耦合水平的因素，添加新的发布或者订阅者是相对容易的。
>
> 也许使用这个模式最大的缺点是它可以引入一个单点故障。在模块之间放置一个中间人也可能会造成性能损失，因为它们经常是间接地的进行通信的。由于松耦合的特性，仅仅盯着广播很难去确认系统是如何做出反应的。
>
> 这就是说，提醒自己解耦合的系统拥有许多其它的好处，是很有用的——如果的模块互相之间直接的进行通信，对于模块的改变（例如：另一个模块抛出了异常）可以很容易的对系统的其它部分产生多米诺连锁效应。这个问题在解耦合的系统中很少需要被考虑到。
>
> 在一天结束的时候，紧耦合会导致各种头痛，这仅仅只是另外一种可选的解决方案，但是如果得到正确实现的话也能够工作得很好。

### 中间人VS观察者

> 开发人员往往不知道中间人模式和观察者模式之间的区别。不可否认，这两种模式之间有一点点重叠，但让回过头来重新寻求GoF的一种解释：
>
> “在观察者模式中，没有封装约束的单一对象”。取而代之，观察者和主题必须合作来维护约束。通信的模式决定于观察者和主题相互关联的方式：一个单独的主题经常有许多的观察者，而有时候一个主题的观察者是另外一个观察者的主题。“
>
> 中间人和观察者都提倡松耦合，然而，中间人默认使用让对象严格通过中间人进行通信的方式实现松耦合。观察者模式则创建了观察者对象，这些观察者对象会发布触发对象认购的感兴趣的事件。

### 中间人VS门面

> 不久的描述就将涵盖门面模式，但作为参考之用，一些开发者也想知道中间人和门面模式之间有哪些相似之处。它们都对模块的功能进行抽象，但有一些细微的差别。
>
> 中间人模式让模块之间集中进行通信，它会被这些模块明确的引用。门面模式却只是为模块或者系统定义一个更加简单的接口，但不添加任何额外的功能。系统中其他的模块并不直接意识到门面的概念，而可以被认为是单向的。