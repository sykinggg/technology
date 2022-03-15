# 组合模式

## 组合模式

> 组合模式 描述了一组对象可像单个对象一样的对待。
>
> 这允许能统一的处理单个对象或多个对象。这意味着无论是一个对象还是一千个对象都能以同样的行为来处理。
>
> 在Jquery中，当在一个节点或多个节点上应用方法时，都能以相同的方式来选择并返回JQuery对象。
>
> 下面这个演示将使用Jquery的选择器。对单一元素(比如拥有唯一ID的元素)或拥有相同标签或Class的一组元素添加名为active的class,对待它们使用上并无不同:

```js
// 单一节点
$( "#singleItem" ).addClass( "active" );
$( "#container" ).addClass( "active" );

// 一组节点
$( "div" ).addClass( "active" );
$( ".item" ).addClass( "active" );
$( "input" ).addClass( "active" );
```

`JQuery`的`addClass()`实现中直接使用原生的`for`循环、`Jquery`的`JQuery.each()`、`Jquery.fn.each`来迭代一个集合以达到能同时处理一个或一组元素的目的。请看下面的例子:

```js
addClass: function( value ) {
  var classNames, i, l, elem,
    setClass, c, cl;

  if ( jQuery.isFunction( value ) ) {
    return this.each(function( j ) {
      jQuery( this ).addClass( value.call(this, j, this.className) );
    });
  }

  if ( value && typeof value === "string" ) {
    classNames = value.split( rspace );

    for ( i = 0, l = this.length; i < l; i++ ) {
      elem = this[ i ];

      if ( elem.nodeType === 1 ) {
        if ( !elem.className && classNames.length === 1 ) {
          elem.className = value;

        } else {
          setClass = " " + elem.className + " ";

          for ( c = 0, cl = classNames.length; c < cl; c++ ) {
            if ( !~setClass.indexOf( " " + classNames[ c ] + " " ) ) {
              setClass += classNames[ c ] + " ";
            }
          }
          elem.className = jQuery.trim( setClass );
        }
      }
    }
  }

  return this;
}
```