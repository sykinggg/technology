# 迭代器模式

## 迭代器模式

> 迭代器模式中，迭代器（允许遍历集合中所有元素的对象）顺序迭代一个集合对象中的元素而无需暴漏其底层形式。
>
> 迭代器封装了这种特别的迭代操作的内部结构，就`jQuery`的`jQuery.fn.each()`迭代器来说，实际上可以使用`jQuery.each()`底层的代码来迭代一个集合，而无需知道或者理解后台提供这种功能的代码是如何实现的。
>
> 这种模式可以被理解为门面模式的一种特例，在这里只处理与迭代有关的问题。

```js
$.each( ["john","dave","rick","julian"] , function( index, value ) {
  console.log( index + ": "" + value);
});

$( "li" ).each( function ( index ) {
  console.log( index + ": " + $( this ).text());
});
```

这里可以看到`jQuery.fn.each()`的代码:

```js
// Execute a callback for every element in the matched set.
each: function( callback, args ) {
  return jQuery.each( this, callback, args );
}
```

在`jQuery.each()`方法后面的代码提供了两种迭代对象的方法:

```js
each: function( object, callback, args ) {
  var name, i = 0,
    length = object.length,
    isObj = length === undefined || jQuery.isFunction( object );

  if ( args ) {
    if ( isObj ) {
      for ( name in object ) {
        if ( callback.apply( object[ name ], args ) === false ) {
          break;
        }
      }
    } else {
      for ( ; i < length; ) {
        if ( callback.apply( object[ i++ ], args ) === false ) {
          break;
        }
      }
    }

  // A special, fast, case for the most common use of each
  } else {
    if ( isObj ) {
      for ( name in object ) {
        if ( callback.call( object[ name ], name, object[ name ] ) === false ) {
          break;
        }
      }
    } else {
      for ( ; i < length; ) {
        if ( callback.call( object[ i ], i, object[ i++ ] ) === false ) {
          break;
        }
      }
    }
  }

  return object;
};
```