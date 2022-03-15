# 外观模式

## 外观模式

> 正如早前在书中提过的, 没面模式为一个庞大的（可能更复杂的）代码结构提供了一个更简单的抽象接口。
>
> 门面在`jQuery`库中能够经常见到，它们为开发者处理`DOM`节点，动画或者令人特别感兴趣的跨域`Ajax`提供了简单的实现入口。
>
> 下面的代码是`jQuery $.ajax()`方法的门面:

```js
$.get( url, data, callback, dataType );
$.post( url, data, callback, dataType );
$.getJSON( url, data, callback );
$.getScript( url, callback ); 
```

这些方法背后真正执行的代码是这样的：

```js
// $.get()
$.ajax({
  url: url,
  data: data,
  dataType: dataType
}).done( callback );

// $.post
$.ajax({
  type: "POST",
  url: url,
  data: data,
  dataType: dataType
}).done( callback );

// $.getJSON()
$.ajax({
  url: url,
  dataType: "json",
  data: data,
}).done( callback );

// $.getScript()
$.ajax({
  url: url,
  dataType: "script",
}).done( callback );
```

> 更有趣的是，上面代码中的门面实际上是它们自身具有的能力，它们隐藏了代码背后很多复杂的操作。
>
> 这是因为`jQuery.ajax()`在`jQuery`核心代码中的实现是一段不平凡的代码，至少是这样的。至少它规范了`XHR（XMLHttpRequest）`之间的差异而且让能够简单的执行常见的HTTP动作（比如：`get`、`post`等），以及处理延迟等等。
>
> 由于显示与上面所讲的门面相关的代码将会占据整个章节，这里仅仅给出了`jQuery`核心代码中规划化`XHR`的代码:

```js
// Functions to create xhrs
function createStandardXHR() {
  try {
    return new window.XMLHttpRequest();
  } catch( e ) {}
}

function createActiveXHR() {
  try {
    return new window.ActiveXObject( "Microsoft.XMLHTTP" );
  } catch( e ) {}
}

// Create the request object
jQuery.ajaxSettings.xhr = window.ActiveXObject ?
  /* Microsoft failed to properly
   * implement the XMLHttpRequest in IE7 (can't request local files),
   * so we use the ActiveXObject when it is available
   * Additionally XMLHttpRequest can be disabled in IE7/IE8 so
   * we need a fallback.
   */
  function() {
    return !this.isLocal && createStandardXHR() || createActiveXHR();
  } :
  // For all other browsers, use the standard XMLHttpRequest object
  createStandardXHR;
  ...
```

下面的代码也处于实际的`jQuery XHR（jqXHR）`实现的上层，它是实际上经常打交道的方便的门面:

```js
// Request the remote document
   jQuery.ajax({
     url: url,
     type: type,
     dataType: "html",
     data: params,
     // Complete callback (responseText is used internally)
     complete: function( jqXHR, status, responseText ) {
       // Store the response as specified by the jqXHR object
       responseText = jqXHR.responseText;
       // If successful, inject the HTML into all the matched elements
       if ( jqXHR.isResolved() ) {
         // Get the actual response in case
         // a dataFilter is present in ajaxSettings
         jqXHR.done(function( r ) {
           responseText = r;
         });
         // See if a selector was specified
         self.html( selector ?
           // Create a dummy div to hold the results
           jQuery("

<div>

   ")
             // inject the contents of the document in, removing the scripts
             // to avoid any 'Permission Denied' errors in IE
             .append(responseText.replace(rscript, ""))

             // Locate the specified elements
             .find(selector) :

           // If not, just inject the full result
           responseText );
       }

       if ( callback ) {
         self.each( callback, [ responseText, status, jqXHR ] );
       }
     }
   });

   return this;
 }

</div>
```