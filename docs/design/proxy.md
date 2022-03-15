# 代理模式

## 代理模式

> 在需要在一个对象后多次进行访问控制访问和上下文，代理模式是非常有用处的。
>
> 当实例化一个对象开销很大的时候，它可以帮助控制成本，提供更高级的方式去关联和修改对象，就是在上下文中运行一个特别的方法。
>
> 在jQuery核心中，一个`jQUery.proxy()`方法在接受一个函数的输入和返回一个一直具有特殊上下文的新的实体时存在。这确保了它在函数中的值时所期待的的值。

一个使用该模式的例子，在点击事件操作时利用了定时器。设想我用下面的操作优先于任何添加的定时器：

```js
$( "button" ).on( "click", function () {
  // 在这个函数中，'this'代表了被当前被点击的那个元素对象
  $( this ).addClass( "active" );
});
```

如果想要在`addClass`操作之前添加一个延迟，可以使用`setTiemeout()`做到。然而不幸的是这么操作时会有一个小问题：无论这个函数执行了什么在`setTimeout()`中都会有个一个不同的值在那个函数中。而这个值将会关联window对象替代所期望的被触发的对象。

```js
$( "button" ).on( "click", function () {
  setTimeout(function () {
    // "this" 无法关联到点击的元素
    // 而是关联了window对象
    $( this ).addClass( "active" );
  });
});
```

为解决这类问题，使用`jQuery.proxy()`方法来实现一种代理模式。通过调用它在这个函数中，使用这个函数和想要分配给它的`this`，将会得到一个包含了所期望的上下文中的值。如下所示：

```js
$( "button" ).on( "click", function () {

    setTimeout( $.proxy( function () {
        // "this" 现在关联了想要的元素
        $( this ).addClass( "active" ); 
    }, this), 500);

    // 最后的参数'this'代表了的dom元素并且传递给了$.proxy()方法
});
```

`jQuery`代理方法的实现如下：

```js
// Bind a function to a context, optionally partially applying any
// arguments.
proxy: function( fn, context ) {
if ( typeof context === "string" ) {
    var tmp = fn[ context ];
    context = fn;
    fn = tmp;
}

// Quick check to determine if target is callable, in the spec
// this throws a TypeError, but we will just return undefined.
if ( !jQuery.isFunction( fn ) ) {
    return undefined;
}

// Simulated bind
var args = slice.call( arguments, 2 ),
    proxy = function() {
        return fn.apply( context, args.concat( slice.call( arguments ) ) );
    };

    // Set the guid of unique handler to the same of original handler, so it can be removed
    proxy.guid = fn.guid = fn.guid || proxy.guid || jQuery.guid++;

    return proxy;
}
```