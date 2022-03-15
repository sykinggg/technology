# Mixin模式

## Mixin 模式

在诸如C++或者List着这样的传统语言中,织入模式就是一些提供能够被一个或者一组子类简单继承功能的类,意在重用其功能。

## 子类划分

> 对于不熟悉子类划分的开发者,在深入织入模式和装饰器模式之前,将对他们进行一个简短的初学者入门指引。
>
> 子类划分是一个参考了为一个新对象继承来自一个基类或者超类对象的属性的术语.在传统的面向对象编程中,类B能够从另外一个类A处扩展.这里将A看做是超类,而将B看做是A的子类.如此,所有B的实体都从A处继承了其A的方法.然而B仍然能够定义它自己的方法,包括那些重载的原本在A中的定义的方法。
>
> B是否应该调用已经被重载的A中的方法,将这个引述为方法链.B是否应该调用A(超类)的构造器,将这称为构造器链。

为了演示子类划分,首先需要一个能够创建自身新实体的基对象。

```js
var Person =  function( firstName , lastName ){

  this.firstName = firstName;
  this.lastName =  lastName;
  this.gender = "male";

};
```

接下来,将制定一个新的类(对象),它是一个现有的`Person`对象的子类.让想象想要加入一个不同属性用来分辨一个`Person`和一个继承了`Person`"超类"属性的`Superhero`.由于超级英雄分享了一般人类许多共有的特征(例如:`name`,`gender`),因此这应该很有希望充分展示出子类划分是如何工作的。

```js
// a new instance of Person can then easily be created as follows:
var clark = new Person( "Clark" , "Kent" );

// Define a subclass constructor for for "Superhero":
var Superhero = function( firstName, lastName , powers ){

    // Invoke the superclass constructor on the new object
    // then use .call() to invoke the constructor as a method of
    // the object to be initialized.

    Person.call( this, firstName, lastName );

    // Finally, store their powers, a new array of traits not found in a normal "Person"
    this.powers = powers;
};

SuperHero.prototype = Object.create( Person.prototype );
var superman = new Superhero( "Clark" ,"Kent" , ["flight","heat-vision"] );
console.log( superman );

// Outputs Person attributes as well as powers
```

`Superhero`构造器创建了一个自`Peroson`下降的对象。这种类型的对象拥有链中位于它之上的对象的属性,而且如果在`Person`对象中设置了默认的值,`Superhero`能够使用特定于它的对象的值覆盖任何继承的值。

## Mixin(织入目标类)

> 在Javascript中,会将从`Mixin`继承看作是通过扩展收集功能的一种途径.定义的每一个新的对象都有一个原型,从其中它可以继承更多的属性.原型可以从其他对象继承而来,但是更重要的是,能够为任意数量的对象定义属性.可以利用这一事实来促进功能重用。
>
> `Mix`允许对象以最小量的复杂性从它们那里借用(或者说继承)功能.作为一种利用Javascript对象原型工作得很好的模式,它为提供了从不止一个`Mix`处分享功能的相当灵活,但比多继承有效得多得多的方式。

它们可以被看做是其属性和方法可以很容易的在其它大量对象原型共享的对象.想象一下定义了一个在一个标准对象字面量中含有实用功能的Mixin,如下所示:

```js
var myMixins = {

  moveUp: function(){
    console.log( "move up" );
  },

  moveDown: function(){
    console.log( "move down" );
  },

  stop: function(){
    console.log( "stop! in the name of love!" );
  }

};
```

然后可以方便的扩展现有构造器功能的原型,使其包含这种使用一个 如下面的`score.js_.extends()`方法辅助器的行为:

```js
// A skeleton carAnimator constructor
function carAnimator(){
  this.moveLeft = function(){
    console.log( "move left" );
  };
}

// A skeleton personAnimator constructor
function personAnimator(){
  this.moveRandomly = function(){ /*..*/ };
}

// Extend both constructors with our Mixin
_.extend( carAnimator.prototype, myMixins );
_.extend( personAnimator.prototype, myMixins );

// Create a new instance of carAnimator
var myAnimator = new carAnimator();
myAnimator.moveLeft();
myAnimator.moveDown();
myAnimator.stop();

// Outputs:
// move left
// move down
// stop! in the name of love!
```

> 如所见,这允许将通用的行为轻易的"混"入相当普通对象构造器中。
>
> 在接下来的示例中,有两个构造器:一个`Car`和一个`Mixin`.将要做的是静`Car`参数化(另外一种说法是扩展),以便它能够继承`Mixin`中的特定方法,名叫`driveForwar()`和`driveBackward()`.这一次不会使用`Underscore.js`。

取而代之，这个示例将演示如何将一个构造器参数化，以便在无需重复每一个构造器函数过程的前提下包含其功能。

```js
// Define a simple Car constructor
var Car = function ( settings ) {

        this.model = settings.model || "no model provided";
        this.color = settings.color || "no colour provided";

    };

// Mixin
var Mixin = function () {};

Mixin.prototype = {

    driveForward: function () {
        console.log( "drive forward" );
    },

    driveBackward: function () {
        console.log( "drive backward" );
    },

    driveSideways: function () {
        console.log( "drive sideways" );
    }

};

// Extend an existing object with a method from another
function augment( receivingClass, givingClass ) {

    // only provide certain methods
    if ( arguments[2] ) {
        for ( var i = 2, len = arguments.length; i < len; i++ ) {
            receivingClass.prototype[arguments[i]] = givingClass.prototype[arguments[i]];
        }
    }
    // provide all methods
    else {
        for ( var methodName in givingClass.prototype ) {

            // check to make sure the receiving class doesn't
            // have a method of the same name as the one currently
            // being processed
            if ( !Object.hasOwnProperty(receivingClass.prototype, methodName) ) {
                receivingClass.prototype[methodName] = givingClass.prototype[methodName];
            }

            // Alternatively:
            // if ( !receivingClass.prototype[methodName] ) {
            //  receivingClass.prototype[methodName] = givingClass.prototype[methodName];
            // }
        }
    }
}

// Augment the Car constructor to include "driveForward" and "driveBackward"
augment( Car, Mixin, "driveForward", "driveBackward" );

// Create a new Car
var myCar = new Car({
    model: "Ford Escort",
    color: "blue"
});

// Test to make sure we now have access to the methods
myCar.driveForward();
myCar.driveBackward();

// Outputs:
// drive forward
// drive backward

// We can also augment Car to include all functions from our mixin
// by not explicitly listing a selection of them
augment( Car, Mixin );

var mySportsCar = new Car({
    model: "Porsche",
    color: "red"
});

mySportsCar.driveSideways();

// Outputs:
// drive sideways
```

## 优点&缺点

> `Mixin`支持在一个系统中降解功能的重复性,增加功能的重用性.在一些应用程序也许需要在所有的对象实体共享行为的地方,能够通过在一个`Mixin`中维护这个共享的功能,来很容易的避免任何重复,而因此专注于只实现系统中真正彼此不同的功能。
>
> 也就是说,对`Mixin`的副作用是值得商榷的.一些开发者感觉将功能注入到对象的原型中是一个坏点子,因为它会同时导致原型污染和一定程度上的对原有功能的不确定性.在大型的系统中,很可能是有这种情况的。