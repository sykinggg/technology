# 观察者模式

## 观察者模式

> 另一个之前提到过的模式就是观察者（`发布/订阅`）模式.这种模式下，系统中的对象可以在关注的事件发生的时候给其他对象发送消息，也可以被其他对象所通知。
>
> `jQuery`核心库很多年前就已经提供了对于类似于发布/订阅系统的支持，它们称之为定制事件。
>
> `jQuery`的早期版本中，可以通过使用`jQuery.bind()`(订阅),`jQuery.trigger()`(发布),和`jQuery.unbind()`(取消订阅)来使用这些定制事件，但在近期的版本中，这些都可以通过使用`jQuery.on()`,`jQuery.trigger()`和`jQuery.off()`来完成。

下面来看一下实际应用中的一个例子:

```js
// Equivalent to subscribe(topicName, callback)
$( document ).on( "topicName" , function () {
    //..perform some behaviour
});

// Equivalent to publish(topicName)
$( document ).trigger( "topicName" );

// Equivalent to unsubscribe(topicName)
$( document ).off( "topicName" );
```

> 对于`jQuery.on()`和`jQuery.off()`的调用最后会经过`jQuery`的事件系统，与`Ajax`一样，由于它们的实现代码相对较长，只看一下实际上事件处理器是在哪儿以及如何将定制事件加入到系统中的:

```js
jQuery.event = {

  add: function( elem, types, handler, data, selector ) {

    var elemData, eventHandle, events,
      t, tns, type, namespaces, handleObj,
      handleObjIn, quick, handlers, special;

    ...

    // Init the element's event structure and main handler,
    //if this is the first
    events = elemData.events;
    if ( !events ) {
      elemData.events = events = {};
    }
    ...

    // Handle multiple events separated by a space
    // jQuery(...).bind("mouseover mouseout", fn);
    types = jQuery.trim( hoverHack(types) ).split( " " );
    for ( t = 0; t < types.length; t++ ) {

      ...

      // Init the event handler queue if we're the first
      handlers = events[ type ];
      if ( !handlers ) {
        handlers = events[ type ] = [];
        handlers.delegateCount = 0;

        // Only use addEventListener/attachEvent if the special
        // events handler returns false
        if ( !special.setup || special.setup.call( elem, data,
        //namespaces, eventHandle ) === false ) {
          // Bind the global event handler to the element
          if ( elem.addEventListener ) {
            elem.addEventListener( type, eventHandle, false );

          } else if ( elem.attachEvent ) {
            elem.attachEvent( "on" + type, eventHandle );
          }
        }
      }
```

对于那些喜欢使用传统的命名方案的人， Ben Alamn对于上面的方法提供了一个简单的包装，然后为提供了`jQuery.publish()`,`jQuery.subscribe`和`jQuery.unscribe`方法。我之前在书中提到过，现在可以完整的看一下这个包装器。

```js
(function( $ ) {

  var o = $({});

  $.subscribe = function() {
    o.on.apply(o, arguments);
  };

  $.unsubscribe = function() {
    o.off.apply(o, arguments);
  };

  $.publish = function() {
    o.trigger.apply(o, arguments);
  };

}( jQuery ));
```

在近期的`jQuery`版本中，一个多目的的回调对象（`jQuery.Callbacks`）被提供用来让用户在回调列表的基础上写新的方案。另一个发布/订阅系统就是一个使用这个特性写的方案，它的实现方式如下:

```js
var topics = {};

jQuery.Topic = function( id ) {
    var callbacks,
        topic = id && topics[ id ];
    if ( !topic ) {
        callbacks = jQuery.Callbacks();
        topic = {
            publish: callbacks.fire,
            subscribe: callbacks.add,
            unsubscribe: callbacks.remove
        };
        if ( id ) {
            topics[ id ] = topic;
        }
    }
    return topic;
};
```

然后可以像下面一样使用:

```js
// Subscribers
$.Topic( "mailArrived" ).subscribe( fn1 );
$.Topic( "mailArrived" ).subscribe( fn2 );
$.Topic( "mailSent" ).subscribe( fn1 );

// Publisher
$.Topic( "mailArrived" ).publish( "hello world!" );
$.Topic( "mailSent" ).publish( "woo! mail!" );

//  Here, "hello world!" gets pushed to fn1 and fn2
//  when the "mailArrived" notification is published
//  with "woo! mail!" also being pushed to fn1 when
//  the "mailSent" notification is published.

// Outputs:
// hello world!
// fn2 says: hello world!
// woo! mail!
```