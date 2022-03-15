# Flyweight模式

## 亨元模式

> 享元模式是一个优化重复、缓慢和低效数据共享代码的经典结构化解决方案。它的目标是以相关对象尽可能多的共享数据，来减少应用程序中内存的使用(例如：应用程序的配置、状态等)。
>
> 实际应用中，轻量级的数据共享采集被多个对象使用的相似对象或数据结构，并将这些数据放置于单个的扩展对象中。可以把它传递给依靠这些数据的对象，而不是在他们每个上面都存储一次。

## 使用享元

> 有两种方法来使用享元。第一种是数据层，基于存储在内存中的大量相同对象的数据共享的概念。第二种是DOM层，享元模式被作为事件管理中心，以避免将事件处理程序关联到需要相同行为父容器的所有子节点上。 享元模式通常被更多的用于数据层，先来看看它。

## 享元和数据共享

> 对于这个应用程序而言，围绕经典的享元模式有更多需要意识到的概念。享元模式中有一个两种状态的概念——内在和外在。内在信息可能会被的对象中的内部方法所需要，它们绝对不可以作为功能被带出。外在信息则可以被移除或者放在外部存储。
>
> 带有相同内在数据的对象可以被一个单独的共享对象所代替，它通过一个工厂方法被创建出来。这允许去显著降低隐式数据的存储数量。
>
> 个中的好处是能够留心于已经被初始化的对象，让只有不同于已经拥有的对象的内在状态时，新的拷贝才会被创建。
>
> 使用一个管理器来处理外在状态。如何实现可以有所不同，但针对此的一种方法就是让管理器对象包含一个存储外在状态以及它们所属的享元对象的中心数据库。

## 经典的享元实现

* 享元对应的是一个接口，通过此接口能够接受和控制外在状态。

* 构造享元来实际的实际的实现接口，并存储内在状态。构造享元须是能够被共享的，并且具有操作外在状态的能力。

* 享元工厂负责管理享元对象，并且也创建它们。它确保了的享元对象是共享的，并且可以对其作为一组对象进行管理，这一组对象可以在需要的时候查询其中的单个实体。如果一个对象已经在一个组里面创建好了，那它就会返回该对象，否则它会在对象池中新创建一个，并且返回之。

这些对应于实现中的如下定义：

* `CoffeeOrder`：享元

* `CoffeeFlavor`：构造享元

* `CoffeeOrderContext`：辅助器

* `CoffeeFlavorFactory`：享元工厂

* `testFlyweight`：对享元的使用

## 鸭式冲减的 “implements”

鸭式冲减允许扩展一种语言或者解决方法的能力，而不需要变更运行时的源。由于接下的方案需要使用一个`Java`关键字“`implements`”来实现接口，而在`Javascript`本地看不到这种方案，那就让首先来对它进行鸭式冲减。

```js
// Flyweight object
var CoffeeOrder = {

  // Interfaces
  serveCoffee:function(context){},
    getFlavor:function(){}

};

// ConcreteFlyweight object that creates ConcreteFlyweight
// Implements CoffeeOrder
function CoffeeFlavor( newFlavor ){

    var flavor = newFlavor;

    // If an interface has been defined for a feature
    // implement the feature
    if( typeof this.getFlavor === "function" ){
      this.getFlavor = function() {
          return flavor;
      };
    }

    if( typeof this.serveCoffee === "function" ){
      this.serveCoffee = function( context ) {
        console.log("Serving Coffee flavor "
          + flavor
          + " to table number "
          + context.getTable());
    };     
    }

}

// Implement interface for CoffeeOrder
CoffeeFlavor.implementsFor( CoffeeOrder );

// Handle table numbers for a coffee order
function CoffeeOrderContext( tableNumber ) {
   return{
      getTable: function() {
         return tableNumber;
     }
   };
}

function CoffeeFlavorFactory() {
    var flavors = {},
    length = 0;

    return {
        getCoffeeFlavor: function (flavorName) {

            var flavor = flavors[flavorName];
            if (flavor === undefined) {
                flavor = new CoffeeFlavor(flavorName);
                flavors[flavorName] = flavor;
                length++;
            }
            return flavor;
        },

        getTotalCoffeeFlavorsMade: function () {
            return length;
        }
    };
}

// Sample usage:
// testFlyweight()

function testFlyweight(){

  // The flavors ordered.
  var flavors = new CoffeeFlavor(),

  // The tables for the orders.
    tables = new CoffeeOrderContext(),

  // Number of orders made
    ordersMade = 0,

  // The CoffeeFlavorFactory instance
    flavorFactory;

  function takeOrders( flavorIn, table) {
     flavors[ordersMade] = flavorFactory.getCoffeeFlavor( flavorIn );
     tables[ordersMade++] = new CoffeeOrderContext( table );
  }

   flavorFactory = new CoffeeFlavorFactory();

   takeOrders("Cappuccino", 2);
   takeOrders("Cappuccino", 2);
   takeOrders("Frappe", 1);
   takeOrders("Frappe", 1);
   takeOrders("Xpresso", 1);
   takeOrders("Frappe", 897);
   takeOrders("Cappuccino", 97);
   takeOrders("Cappuccino", 97);
   takeOrders("Frappe", 3);
   takeOrders("Xpresso", 3);
   takeOrders("Cappuccino", 3);
   takeOrders("Xpresso", 96);
   takeOrders("Frappe", 552);
   takeOrders("Cappuccino", 121);
   takeOrders("Xpresso", 121);

   for (var i = 0; i < ordersMade; ++i) {
       flavors[i].serveCoffee(tables[i]);
   }
   console.log(" ");
   console.log("total CoffeeFlavor objects made: " +  flavorFactory.getTotalCoffeeFlavorsMade());
} <span style="line-height:1.5;font-family:'sans serif', tahoma, verdana, helvetica;font-size:10pt;"></span>
```

## 转换代码为使用享元模式

接下来，让通过实现一个管理一个图书馆中所有书籍的系统来继续观察享元。分析得知每一本书的重要元数据如下：

* ID

* 标题

* 作者

* 类型

* 总页数

* 出版商ID

* ISBN

也将需要下面一些属性，来跟踪哪一个成员是被借出的一本特定的书，借出它们的日期，还有预计的归还日期。

* 借出日期

* 借出的成员

* 规定归还时间

* 可用性

```js
var Book = function( id, title, author, genre, pageCount,publisherID, ISBN, checkoutDate, checkoutMember, dueReturnDate,availability ){

   this.id = id;
   this.title = title;
   this.author = author;
   this.genre = genre;
   this.pageCount = pageCount;
   this.publisherID = publisherID;
   this.ISBN = ISBN;
   this.checkoutDate = checkoutDate;
   this.checkoutMember = checkoutMember;
   this.dueReturnDate = dueReturnDate;
   this.availability = availability;

};

Book.prototype = {

  getTitle: function () {
     return this.title;
  },

  getAuthor: function () {
     return this.author;
  },

  getISBN: function (){
     return this.ISBN;
  },

  // For brevity, other getters are not shown
  updateCheckoutStatus: function( bookID, newStatus, checkoutDate , checkoutMember, newReturnDate ){

     this.id  = bookID;
     this.availability = newStatus;
     this.checkoutDate = checkoutDate;
     this.checkoutMember = checkoutMember;
     this.dueReturnDate = newReturnDate;

  },

  extendCheckoutPeriod: function( bookID, newReturnDate ){

      this.id =  bookID;
      this.dueReturnDate = newReturnDate;

  },

  isPastDue: function(bookID){

     var currentDate = new Date();
     return currentDate.getTime() > Date.parse( this.dueReturnDate );

   }
};
```

> 这对于最初小规模的藏书可能工作得还好，然而当图书馆扩充至每一本书的多个版本和可用的备份，这样一个大型的库存，会发现管理系统的运行随着时间的推移会越来越慢。使用成千上万的书籍对象可能会压倒内存，而可以通过享元模式的提升来优化的系统。
>
> 现在可以像下面这样将的数据分离成为内在和外在的状态：同书籍对象（标题，版权归属）相关的数据是内在的，而借出数据（借出成员，规定归还日期）则被看做是外在的。这实际上意味着对于每一种书籍属性的组合仅需要一个书籍对象。这仍然具有相当大的数量，但相比之前已经得到大大的缩减了。

下面的书籍元数据组合的单一实体将在所有带有一个特定标题的书籍拷贝中共享。

```js
// Flyweight optimized version
var Book = function ( title, author, genre, pageCount, publisherID, ISBN ) {

    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pageCount = pageCount;
    this.publisherID = publisherID;
    this.ISBN = ISBN;

};
```

如所见，外在状态已经被移除了。从图书馆借出所要做的一切都被转移到一个管理器中，由于对象数据现在是分段的，工厂可以被用来做实例化。

## 一个基本工厂

> 现在让定义一个非常基本的工厂。用它做的工作是，执行一个检查来看看一本给定标题的书是不是之前已经在系统内创建过了；如果创建过了，就返回它 - 如果没有，一本新书就会被创建并保存，使得以后可以访问它。这确保了为每一条本质上唯一的数据，只创建了一份单一的拷贝:

```js
// Book Factory singleton
var BookFactory = (function () {
  var existingBooks = {}, existingBook;

  return {
    createBook: function ( title, author, genre, pageCount, publisherID, ISBN ) {

      // Find out if a particular book meta-data combination has been created before
      // !! or (bang bang) forces a boolean to be returned
      existingBook = existingBooks[ISBN];
      if ( !!existingBook ) {
        return existingBook;
      } else {

        // if not, let's create a new instance of the book and store it
        var book = new Book( title, author, genre, pageCount, publisherID, ISBN );
        existingBooks[ISBN] = book;
        return book;

      }
    }
  };

});
```

## 管理外在状态

> 下一步，需要将那些从`Book`对象中移除的状态存储到某一个地方——幸运的是一个管理器（会将其定义成一个单例）可以被用来封装它们。书籍对象和借出这些书籍的图书馆成员的组合将被称作书籍借出记录。这些的管理器都将会存储，并且也包含在对Book类进行享元优化期间剥离的同借出相关的逻辑。

```js
// BookRecordManager singleton
var BookRecordManager = (function () {

  var bookRecordDatabase = {};

  return {
    // add a new book into the library system
    addBookRecord: function ( id, title, author, genre, pageCount, publisherID, ISBN, checkoutDate, checkoutMember, dueReturnDate, availability ) {

      var book = bookFactory.createBook( title, author, genre, pageCount, publisherID, ISBN );

      bookRecordDatabase[id] = {
        checkoutMember: checkoutMember,
        checkoutDate: checkoutDate,
        dueReturnDate: dueReturnDate,
        availability: availability,
        book: book
      };
    },
    updateCheckoutStatus: function ( bookID, newStatus, checkoutDate, checkoutMember, newReturnDate ) {

      var record = bookRecordDatabase[bookID];
      record.availability = newStatus;
      record.checkoutDate = checkoutDate;
      record.checkoutMember = checkoutMember;
      record.dueReturnDate = newReturnDate;
    },

    extendCheckoutPeriod: function ( bookID, newReturnDate ) {
      bookRecordDatabase[bookID].dueReturnDate = newReturnDate;
    },

    isPastDue: function ( bookID ) {
      var currentDate = new Date();
      return currentDate.getTime() > Date.parse( bookRecordDatabase[bookID].dueReturnDate );
    }
  };

});
```

> 这些改变的结果是所有从Book类中撷取的数据现在被存储到了`BookManager`单例（`BookDatabase`）的一个属性之中——与以前使用大量对象相比可以被认为是更加高效的东西。同书籍借出相关的方法也被设置在这里，因为它们处理的数据是外在的而不内在的。
>
> 这个过程确实给最终的解决方法增加了一点点复杂性，然而同已经明智解决的数据性能问题相比，这只是一个小担忧，如果有同一本书的30份拷贝，现在只需要存储它一次就够了。每一个函数也会占用内存。使用享元模式这些函数只在一个地方存在（就是在管理器上），并且不是在每一个对象上面，这节约了内存上的使用。

## 享元模式和DOM

DOM（文档对象模型）支持两种允许对象侦听事件的方法——自顶向下（事件捕获）或者自底向下（时间冒泡）。 在事件捕获中，事件一开始会被最外面的元素捕获，并且传播到最里面的元素。在事件冒泡中，事件被捕获并且被赋给了最里面的元素，然后传播到最外面的元素。

在此背景下描述享元模式的最好隐喻来自Gary Chisholm写的文章，这里摘录了一点点：

> 尝试用一种池塘的方式思考享元模式。一只鱼张开了它的嘴巴（事件发生了），泡泡一直要上升到表面（冒泡），当泡泡到达表面时，停泊在顶部的一直苍蝇飞走了（动作执行）。在这个示例中能够很容易的将鱼张开嘴巴转换为按钮被点击了一下，将泡泡转换为冒泡效果，而苍蝇飞走了表示一些需要运行的函数。

> 冒泡被引入用来处理单个事件（比如：一次点击）可能会由在DOM层级中的不同级别的多个事件处理器处理，这样的场景。这在哪里发生了，事件冒泡就会为在尽可能最低的级别定义的事件处理器执行。从那里开始，事件向上冒泡，一直到包含比应该包含的更高层级的元素。
>
> 享元模式可用来进一步调整事件冒泡过程，这很快就将会看到。

## 例子1：集中式事件处理

> 一起来看看第一例子，当用户有个动作(如点击或是鼠标移动)时将有很多相似的文档对象以及相似的行为要处理。一般情况下，当构建手风琴式控件，菜单以及其它列表控件时，就会在每一个超链接元素父容器里绑定点击事件(如，`$('ul li a').on(..)`(jQuery代码,译者注))。可以方便的在可以监听事件容器里添加`Flyweight`，而不是在很多元素里绑定点击事件。这样就可处理或是简单或是复杂的需求。
>
> 提到组件的类型，经常会涉及到很多部分都有同样重复的标签(如，手风琴式控件)，这是个好机会，每个元素都有可能被点击的行为，而且基本上用相同的类。可以用`Flyweight`来构建一个基本的手风琴控件。
>
> 这里使用一个`stateManager`命名空间来封装的享元逻辑，同时使用`jQuery`来把初始点击事件绑定到一个`div`容器上。为了确保页面上没有其他程序逻辑把类似的处理器绑定到该容器上，首先使用了一个`unbind`事件。
>
> 现在明确的确立一下容器中的那个子元素会被点击，使用一次对`target`的检查来提供对被点击元素的引用，而不管它的父元素是谁。然后利用该信息来处理点击事件，而实际上不需要在页面装载时把该事件绑定到具体的子元素上。

### HTML

```html
<div id="container">
   <div class="toggle" href="#">More Info (Address)
       <span class="info">
           This is more information
       </span></div>
   <div class="toggle" href="#">Even More Info (Map)
       <span class="info">
          <iframe src="https://atts.w3cschool.cn/attachments/image/cimg/extmap.php?name=London&address=london%2C%20england&amp;width=500...gt;"</iframe>
       </span>
   </div>
</div>
```

### JavaScript

```js
var stateManager = {

  fly: function () {

    var self = this;

    $( "#container" ).unbind().on( "click" , function ( e ) {
      var target = $( e.originalTarget || e.srcElement );
        if ( target.is( "div.toggle") ) {
          self.handleClick( target );
        }
    });
  },

  handleClick: function ( elem ) {
    elem.find( "span" ).toggle( "slow" );
  }
};
```

## 示例2：使用享元进行性能优化

> 在的第二个示例中，将会引述通过使用`jQuery`的享元可以获得的一些更多的性能上的收获。
>
> Jame Padolsey 以前写过一篇叫做76比特的文章，讲述更快的jQuery，在其中他提醒每一次`jQuery`触发了一个回调，不管是什么类型（过滤器，每一个，事件处理器），都能够通过`this`关键字访问函数的上下文（与它相关的`DOM`元素）。
>
> 不幸的是，中的许多人已经习惯将`this`封装到`$()`或者`jQuery()`中的想法，这意味着新的`jQuery`实体没必要每次都被构造出来，而是简单的这样做：

```js
$("div").on( "click", function () {
  console.log( "You clicked: " + $( this ).attr( "id" ));
});

// we should avoid using the DOM element to create a
// jQuery object (with the overhead that comes with it)
// and just use the DOM element itself like this:

$( "div" ).on( "click", function () {
  console.log( "You clicked:"  + this.id );
});
```

> James想要下面的场景中使用`jQuery`的`jQuery.text`，然而他不能苟同一个新的`jQuery`对象必须在每次迭代中创建的概念。

```js
$( "a" ).map( function () {
  return $( this ).text();
});
```

现在就使用`jQuery`的工具方法进行多余的包装而言，使用`jQuery.methodName`(如，jQuery.text）比`jQuery.fn.methodName`（如，jQuery.fn.text）更好，这里`methodName`代表了一种使用的工具，如`each()`或者`text`。这避免了调用更深远级别的抽象，或者每一次当的函数被调用时就构造一个新的`jQuery`对象，因为定义了`jQuery.methodName`的库本身在更底层使用`jQuery.fn.methodName`驱动的。

然而由于并不是所有`jQuery`的方法都有相应的单节点功能，Padolsey根据这个创意设计了`jQuery.single`工具。 这里的创意是一个单独的`jQuery`对象会被被创建出来并且用于每一次对`jQuery.single`的调用（有意义的是仅有一个`jQuery`对象会被创建出来）。对于此的实现可以在下面看到，而且由于将来自多个可能的对象的数据整合到一个更加集中的单一结构中，技术上讲，它也是一个享元。

```js
jQuery.single = (function( o ){

   var collection = jQuery([1]);
   return function( element ) {

       // Give collection the element:
       collection[0] = element;

        // Return the collection:
       return collection;

   };
});
```

对于这个的带有调用链的动作的示例如下：

```js
$( "div" ).on( "click", function () {

   var html = jQuery.single( this ).next().html();
   console.log( html );

});
```

> 注意：尽管可能相信通过简单的缓存的`jQuery`代码会提供出同等良好的性能收获，但Padolsey声称`$.single()`仍然值得使用，且表现更好。那并不是说不使用任何的缓存，只要对这种方法的助益做到心里有数就行。想要对`$.single`有更加详细的了解，建议你却读一读Padolsey完整的文章。

