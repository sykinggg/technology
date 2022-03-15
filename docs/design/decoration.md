# 装饰模式

## 装饰模式

> 装饰器是旨在提升重用性能的一种结构性设计模式。同`Mixin`类似，它可以被看作是应用子类划分的另外一种有价值的可选方案。
>
> 典型的装饰器提供了向一个系统中现有的类动态添加行为的能力。其创意是装饰本身并不关心类的基础功能，而只是将它自身拷贝到超类之中。
>
> 它们能够被用来在不需要深度改变使用它们的对象的依赖代码的前提下，变更希望向其中附加功能的现有系统之中。开发者使用它们的一个通常的理由是，它们的应用程序也许包含了需要大量彼此不相干类型对象的特性。想象一下不得不要去定义上百个不同对象的构造器，比方说，一个`Javascript`游戏。
>
> 对象构造器可以代表不同播放器类型，每一种类型具有不同的功能。一种叫做领主戒指的游戏会需要霍比特人、巫术师，兽人，巨兽，精灵，山岭巨人，乱世陆地等对象的构造器，而这些的数量很容易过百。而还要考虑为每一个类型的能力组合创建子类。
>
> 例如，带指环的霍比特人，带剑的霍比特人和插满宝剑的陆地等等。这并不是非常的实用，当考虑到不同能力的数量在不断增长这一因素时，最后肯定是不可控的。
>
> 装饰器模式并不去深入依赖于对象是如何创建的，而是专注于扩展它们的功能这一问题上。不同于只依赖于原型继承，在一个简单的基础对象上面逐步添加能够提供附加功能的装饰对象。它的想法是，不同于子类划分，向一个基础对象添加（装饰）属性或者方法，因此它会是更加轻巧的。

向Javascript中的对象添加新的属性是一个非常直接了当的过程，因此将这一特定牢记于心，一个非常简单的装饰器可以实现如下：

### 示例1：带有新功能的装饰构造器

```js
// A vehicle constructor
function vehicle( vehicleType ){

    // some sane defaults
    this.vehicleType = vehicleType || "car";
    this.model = "default";
    this.license = "00000-000";

}

// Test instance for a basic vehicle
var testInstance = new vehicle( "car" );
console.log( testInstance );

// Outputs:
// vehicle: car, model:default, license: 00000-000

// Lets create a new instance of vehicle, to be decorated
var truck = new vehicle( "truck" );

// New functionality we're decorating vehicle with
truck.setModel = function( modelName ){
    this.model = modelName;
};

truck.setColor = function( color ){
    this.color = color;
};

// Test the value setters and value assignment works correctly
truck.setModel( "CAT" );
truck.setColor( "blue" );

console.log( truck );

// Outputs:
// vehicle:truck, model:CAT, color: blue

// Demonstrate "vehicle" is still unaltered
var secondInstance = new vehicle( "car" );
console.log( secondInstance );

// Outputs:
// vehicle: car, model:default, license: 00000-000
```

这种类型的简单实现是实用的，但它没有真正展示出装饰能够贡献出来的全部潜能。为这个，首先区分一下我的`Coffee`示例和`Freeman`，`Sierra`和`Bates`所著Head First Design Patterns这一本优秀的书中围绕Mackbook商店建立的模型，这两个之间的不同。

### 示例2：带有多个装饰器的装饰对象

```js
// The constructor to decorate
function MacBook() {

  this.cost = function () { return 997; };
  this.screenSize = function () { return 11.6; };

}

// Decorator 1
function Memory( macbook ) {

  var v = macbook.cost();
  macbook.cost = function() {
    return v + 75;
  };

}

// Decorator 2
function Engraving( macbook ){

  var v = macbook.cost();
  macbook.cost = function(){
    return  v + 200;
  };

}

// Decorator 3
function Insurance( macbook ){

  var v = macbook.cost();
  macbook.cost = function(){
     return  v + 250;
  };

}

var mb = new MacBook();
Memory( mb );
Engraving( mb );
Insurance( mb );

// Outputs: 1522
console.log( mb.cost() );

// Outputs: 11.6
console.log( mb.screenSize() );
```

### 代码描述

> 在上面的示例中，的装饰器重载了超类对象`MacBook()`的 `object.cost()`函数，使其返回的`Macbook`的当前价格加上了被定制后升级的价格。
>
> 这被看做是对原来的`Macbook`对象构造器方法的装饰，它并没有将其重写（例如，`screenSize()`)，所定义的`Macbook`的其它属性也保持不变，完好无缺。
>
> 上面的示例并没有真正定义什么接口，而且也转移了从创造者到接受者移动时确保一个对象对应一个接口的责任。

## 伪古典装饰器

> 现在要来试试首见于Dustin Diaz与Ross Harmes合著的Pro Javascript Design Patterns（PJDP）中一种装饰器的变体。
>
> 不像早些时候的一些实例，Diaz和Harms坚持更加近似于其他编程语言（如Java或者C++)如何使用一种“接口”的概念来实现装饰器，不久就将对此进行详细的定义。

> `注意：装饰模式的这一特殊变体是提供出来做参考用的。如果发现它过于复杂，建议你选择前面更加简单的实现。`

### 接口

> `PJDP`所描述的装饰器是一种被用于将具备相同接口的对象进行透明封装的对象，这样一种模式。接口是一种定义一个对象应该具有哪些方法的途径，然而，它实际上并不指定那些方法应该如何实现。
>
> 它们也可以声明方法应该有些什么参数，但这被看做是可选项。
>
> 因此，为什么要在Javascript中使用接口呢？这个想法意在让它们具有自说明文档特性，并促进其重用性。在理论上，接口通过确保了其被改变的同时也要让其对象实现这些改变，从而使得代码更加的稳定。
>
> 下面是一个在Javascript中使用鸭式类型来实现接口的示例，鸭式类型是一种基于所实现的方法来帮助判定一个对象是否是一种构造器/对象的实体的方法。

```js
// Create interfaces using a pre-defined Interface
// constructor that accepts an interface name and
// skeleton methods to expose.

// In our reminder example summary() and placeOrder()
// represent functionality the interface should
// support
var reminder = new Interface( "List", ["summary", "placeOrder"] );

var properties = {
  name: "Remember to buy the milk",
  date: "05/06/2016",
  actions:{
    summary: function (){
      return "Remember to buy the milk, we are almost out!";
   },
    placeOrder: function (){
      return "Ordering milk from your local grocery store";
    }
  }
};

// Now create a constructor implementing the above properties
// and methods

function Todo( config ){

  // State the methods we expect to be supported
  // as well as the Interface instance being checked
  // against

  Interface.ensureImplements( config.actions, reminder );

  this.name = config.name;
  this.methods = config.actions;

}

// Create a new instance of our Todo constructor

var todoItem = Todo( properties );

// Finally test to make sure these function correctly

console.log( todoItem.methods.summary() );
console.log( todoItem.methods.placeOrder() );

// Outputs:
// Remember to buy the milk, we are almost out!
// Ordering milk from your local grocery store
```

> 在上面的代码中，接口确保了实现提供严格的功能检查，而这个和接口构造器的接口代码能在这里找到。
>
> 使用接口最大的问题是，由于这并不是Javascript内置的对它们的支持，对而言就会存在尝试去模仿另外一种语言的特性，但看着并不完全合适，这样一种风险。然而对于没有太大性能消耗的轻量级接口是可以被使用的，并且下面将要看到的抽象装饰器同样使用了这个概念。

## 抽象装饰者

> 为了阐明这个版本的装饰者模式的结构，想象有一个超级类，还是一个Macbook模型，以及一个store，使可以用耗费额外费用的许多种增强来“装饰”Macbook。
>
> 增强可以包括升级到4GB或8GB的Ram，雕刻，或相似案例。如果现在要针对每一种增强选项的组合，使用单独的子类进行建模，可能看起来是这样的：

```js
var Macbook = function(){
        //...
};

var  MacbookWith4GBRam =  function(){},
     MacbookWith8GBRam = function(){},
     MacbookWith4GBRamAndEngraving = function(){},
     MacbookWith8GBRamAndEngraving = function(){},
     MacbookWith8GBRamAndParallels = function(){},
     MacbookWith4GBRamAndParallels = function(){},
     MacbookWith8GBRamAndParallelsAndCase = function(){},
     MacbookWith4GBRamAndParallelsAndCase = function(){},
     MacbookWith8GBRamAndParallelsAndCaseAndInsurance = function(){},
     MacbookWith4GBRamAndParallelsAndCaseAndInsurance = function(){};
```

### 思路

> 这不是一个实际的解决方案，因为一个新的子类可能需要具有每一种可能的增强组合。由于倾向于保持事物简单，不想维持一个巨大的子类集合，来看看怎样用装饰者更好的解决这个问题。
>
> 不需要前面看到的所有组合，只需要简单的创建五个新的装饰者类。对这些增强类的方法调用，将会传递给Macbook类。
>
> 在下一个例子中，装饰者透明的包装了它们的组件，而且有趣的是，可以在相同的接口互换。
>
> 这里是给Macbook定义的接口：

```js
var Macbook = new Interface( "Macbook",
  ["addEngraving",
  "addParallels",
  "add4GBRam",
  "add8GBRam",
  "addCase"]);

// A Macbook Pro might thus be represented as follows:
var MacbookPro = function(){
    // implements Macbook
};

MacbookPro.prototype = {
    addEngraving: function(){
    },
    addParallels: function(){
    },
    add4GBRam: function(){
    },
    add8GBRam:function(){
    },
    addCase: function(){
    },
    getPrice: function(){
      // Base price
      return 900.00;        
    }
};
```

> 为了使得稍后更加容易的添加所需的更多选项，一种带有被用来实现`Mackbook`接口的默认方法的抽象装饰器方法被定义了出来，其剩余的选项将会进行子类划分。抽象装饰器确保了能够独立于尽可能多的在不同的组合中所需的装饰器，去装饰一个基础类（记得早先的那个示例么？），而不需要去为了每一种可能的组合而去驱动一个类。

```js
// Macbook decorator abstract decorator class

var MacbookDecorator = function( macbook ){

    Interface.ensureImplements( macbook, Macbook );
    this.macbook = macbook; 

};

MacbookDecorator.prototype = {
    addEngraving: function(){
        return this.macbook.addEngraving();
    },
    addParallels: function(){
        return this.macbook.addParallels();
    },
    add4GBRam: function(){
        return this.macbook.add4GBRam();
    },
    add8GBRam:function(){
        return this.macbook.add8GBRam();
    },
    addCase: function(){
        return this.macbook.addCase();
    },
    getPrice: function(){
        return this.macbook.getPrice();
    }       
};
```

> 上述示例中所发生的是Macbook装饰器在像组件一样的使用一个对象。它使用了早先定义的Macbook接口，对于每一个方法都调用了组件上相同的方法。现在就能够只使用Macbook装饰器来创建的选项类了——通过简单调用超类的构造器和根据需要可以被重载的方法。

```js
var CaseDecorator = function( macbook ){

   // call the superclass's constructor next
   this.superclass.constructor( macbook );  

};

// Let's now extend the superclass
extend( CaseDecorator, MacbookDecorator );

CaseDecorator.prototype.addCase = function(){
    return this.macbook.addCase() + "Adding case to macbook";  
};

CaseDecorator.prototype.getPrice = function(){
    return this.macbook.getPrice() + 45.00; 
};
```

> 如所见，大多数都是相对应的直接实现。所做的是重载需要被装饰的`addCase()`和`getPrise()`方法，而通过首先执行组件的方法然后将其添加到它里面，来达到目的。
>
> 鉴于到目前为止本节所介绍的信息一斤相当的多了，让试试将其全部放到一个单独的实例中，以期突出所学。

```js
// Instantiation of the macbook
var myMacbookPro = new MacbookPro(); 

// Outputs: 900.00
console.log( myMacbookPro.getPrice() );

// Decorate the macbook
myMacbookPro = new CaseDecorator( myMacbookPro );

// This will return 945.00
console.log( myMacbookPro.getPrice() );
```

由于装饰器能够动态的修改对象，它们就是改变现有系统的理想模式。有时候，它只是简单的围绕一个对象及其维护针对每一个对象类型单独的子类划分所产生的麻烦，来创建装饰器的。这使得维护起可能需要大量子类划分对象的应用程序来更加显著的直接。

## 装饰器和jQuery

同所涵盖的其它模式一起，也有许多装饰器模式的示例能够使用jQuery来实现。jQuery.extend()允许将两个或者更多个对象（以及它们的属性）扩展（或者混合）到一个对象中，不论是在运行时或者动态的在一个稍后的时点上。

在这一场景中，目标对象没必要打断或者重载源/超类中现有的方法（尽管这可以被做到）就能够使用新的功能装饰起来。 在接下来的示例中，定义了三个对象：默认，选项和设置。任务的目标是用在选项中找到的附加功能来装饰默认对象。

* 将“默认”放置在一个不可触及的状态之中，在这里不会失去访问稍后会在其中发现的属性和方法的能力

* 赢得了使用在“选项”中找到被装饰起来的属性和函数的能力。

```js
var decoratorApp = decoratorApp || {};

// define the objects we're going to use
decoratorApp = {

    defaults: {
        validate: false,
        limit: 5,
        name: "foo",
        welcome: function () {
            console.log( "welcome!" );
        }
    },

    options: {
        validate: true,
        name: "bar",
        helloWorld: function () {
            console.log( "hello world" );
        }
    },

    settings: {},

    printObj: function ( obj ) {
        var arr = [],
            next;
        $.each( obj, function ( key, val ) {
            next = key + ": ";
            next += $.isPlainObject(val) ? printObj( val ) : val;
            arr.push( next );
        } );

        return "{ " + arr.join(", ") + " }";
    }

};

// merge defaults and options, without modifying defaults explicitly
decoratorApp.settings = $.extend({}, decoratorApp.defaults, decoratorApp.options);

// what we have done here is decorated defaults in a way that provides
// access to the properties and functionality it has to offer (as well as
// that of the decorator "options"). defaults itself is left unchanged

$("#log")
    .append( decoratorApp.printObj(decoratorApp.settings) + 
          + decoratorApp.printObj(decoratorApp.options) +
          + decoratorApp.printObj(decoratorApp.defaults));

// settings -- { validate: true, limit: 5, name: bar, welcome: function (){ console.log( "welcome!" ); },
// helloWorld: function (){ console.log("hello!"); } }
// options -- { validate: true, name: bar, helloWorld: function (){ console.log("hello!"); } }
// defaults -- { validate: false, limit: 5, name: foo, welcome: function (){ console.log("welcome!"); } }
```

## 优点 & 缺点

> 因为它可以被透明的使用，并且也相当的灵活，因此开发者都挺乐意去使用这个模式——如所见，对象可以用新的行为封装或者“装饰”起来，而后继续使用，并不用去担心基础的对象被改变。在一个更加广泛的范围内，这一模式也避免了去依赖大量子类来实现同样的效果。
>
> 然而在实现这个模式时，也存在应该意识到的缺点。如果穷于管理，它也会由于引入了许多微小但是相似的对象到的命名空间中，从而显著的使得的应用程序架构变得复杂起来。这里所担忧的是，除了渐渐变得难于管理，其他不能熟练使用这个模式的开发者也可能会有一段要掌握它被使用的理由的艰难时期。