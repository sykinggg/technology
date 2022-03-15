# 建造者模式

## 建造者模式

> 处理DOM时，常常想要去动态的构建新的元素--这是一个会让希望构建的元素最终所包含的标签，属性和参数的复杂性有所增长的过程。
>
> 定义复杂的元素时需要特别的小心，特别是如果想要在元素标签的字面意义上（这可能会乱成一团）拥有足够的灵活性，或者取而代之去获得更多面向对象路线的可读性。需要一种为构建复杂DOM对象的机制，它独立于为提供这种灵活性的对象本身，而这正是建造者模式为所提供的。
>
> 建造器使得仅仅只通过定义对象的类型和内容，就可以去构建复杂的对象，为屏蔽了明确创造或者展现对象的过程。
>
> `jQuery`的美元标记为动态构建新的`jQuery`（和DOM）对象提供了大量可以让这样做的不同的方法，可以通过给一个元素传入完整的标签，也可以是部分标签还有内容，或者使用`jQuery`来进行构造：

```js
$( '<div class="foo">bar</div>' );

$( '<p id="test">foo <em>bar</em></p>').appendTo("body");

var newParagraph = $( "<p />" ).text( "Hello world" );

$( "<input />" )
      .attr({ "type": "text", "id":"sample"});
      .appendTo("#container");
```

> 下面引用自jQuery内部核心的`jQuery.protoype`方法，它支持从`jQuery`对象到传入`jQuery()`选择器的标签的构造。不管是不是使用`document.createElement`去创建一个新的元素，都会有一个针对这个元素的引用（找到或者被创建）被注入到返回的对象中，因此进一步会有更多的诸如`as.attr()`的方法在这之后就可以很容易的在其上使用了。

```js
// HANDLE: $(html) -> $(array)
if ( match[1] ) {
    context = context instanceof jQuery ? context[0] : context;
    doc = ( context ? context.ownerDocument || context : document );

    // If a single string is passed in and it's a single tag
    // just do a createElement and skip the rest
    ret = rsingleTag.exec( selector );

    if ( ret ) {
        if ( jQuery.isPlainObject( context ) ) {
        selector = [ document.createElement( ret[1] ) ];
        jQuery.fn.attr.call( selector, context, true );

        } else {
        selector = [ doc.createElement( ret[1] ) ];
        }

    } else {
        ret = jQuery.buildFragment( [ match[1] ], [ doc ] );
        selector = ( ret.cacheable ? jQuery.clone(ret.fragment) : ret.fragment ).childNodes;
    }

return jQuery.merge( this, selector );
```