# 构造器模式

## 构造器模式

> 在面向对象编程中，构造器是一个当新建对象的内存被分配后，用来初始化该对象的一个特殊函数。在JavaScript中几乎所有的东西都是对象，经常会对对象的构造器十分感兴趣。
>
> 对象构造器是被用来创建特殊类型的对象的，首先它要准备使用的对象，其次在对象初次被创建时，通过接收参数，构造器要用来对成员的属性和方法进行赋值。

## 对象创建

下面是创建对象的三种基本方式:

下面的每一种都会创建一个新的对象:

```js
var newObject = {};

// or
var newObject = Object.create( null );

// or
var newObject = new Object();
```

最后一个例子中`"Object"`构造器创建了一个针对特殊值的对象包装，只不过这里没有传值给它，所以它将会返回一个空对象。

> 有四种方式可以将一个键值对赋给一个对象:

```js
// ECMAScript 3 兼容形式

// 1\. “点号”法

// 设置属性
newObject.someKey = "Hello World";

// 获取属性
var key = newObject.someKey;

// 2\. “方括号”法

// 设置属性
newObject["someKey"] = "Hello World";

// 获取属性
var key = newObject["someKey"];

// ECMAScript 5 仅兼容性形式
// For more information see: http://kangax.github.com/es5-compat-table/

// 3\. Object.defineProperty方式

// 设置属性
Object.defineProperty( newObject, "someKey", {
    value: "for more control of the property's behavior",
    writable: true,
    enumerable: true,
    configurable: true
});

// 如果上面的方式你感到难以阅读，可以简短的写成下面这样：

var defineProp = function ( obj, key, value ){
  config.value = value;
  Object.defineProperty( obj, key, config );
};

// 为了使用它，要创建一个“person”对象
var person = Object.create( null );

// 用属性构造对象
defineProp( person, "car",  "Delorean" );
defineProp( person, "dateOfBirth", "1981" );
defineProp( person, "hasBeard", false );

// 4\. Object.defineProperties方式

// 设置属性
Object.defineProperties( newObject, {

  "someKey": { 
    value: "Hello World", 
    writable: true 
  },

  "anotherKey": { 
    value: "Foo bar", 
    writable: false 
  } 

});

// 3和4中的读取属行可用1和2中的任意一种
```

> 在这本书的后面一点，这些方法会被用于继承，如下：

```js
// 使用:

// 创建一个继承与Person的赛车司机
var driver = Object.create( person );

// 设置司机的属性
defineProp(driver, "topSpeed", "100mph");

// 获取继承的属性 (1981)
console.log( driver.dateOfBirth );

// 获取设置的属性 (100mph)
console.log( driver.topSpeed );
```

## 基础构造器

> 正如先前所看到的，Javascript不支持类的概念，但它有一种与对象一起工作的构造器函数。使用new关键字来调用该函数，可以告诉Javascript把这个函数当做一个构造器来用,它可以用自己所定义的成员来初始化一个对象。
>
> 在这个构造器内部，关键字this引用到刚被创建的对象。回到对象创建，一个基本的构造函数看起来像这样:

```js
function Car( model, year, miles ) {

  this.model = model;
  this.year = year;
  this.miles = miles;

  this.toString = function () {
    return this.model + " has done " + this.miles + " miles";
  };
}

// 使用:

// 可以示例化一个Car
var civic = new Car( "Honda Civic", 2009, 20000 );
var mondeo = new Car( "Ford Mondeo", 2010, 5000 );

// 打开浏览器控制台查看这些对象toString()方法的输出值
// output of the toString() method being called on
// these objects
console.log( civic.toString() );
console.log( mondeo.toString() );
```

上面这是个简单版本的构造器模式，但它还是有些问题。一个是难以继承，另一个是每个Car构造函数创建的对象中，toString()之类的函数都被重新定义。这不是非常好，理想的情况是所有Car类型的对象都应该引用同一个函数。 这要谢谢 ECMAScript3和ECMAScript5-兼容版，对于构造对象他们提供了另外一些选择，解决限制小菜一碟。

## 使用“原型”的构造器

在Javascript中函数有一个prototype的属性。当调用Javascript的构造器创建一个对象时，构造函数prototype上的属性对于所创建的对象来说都看见。照这样，就可以创建多个访问相同prototype的Car对象了。下面，来扩展一下原来的例子：

```js
function Car( model, year, miles ) {

  this.model = model;
  this.year = year;
  this.miles = miles;

}

// 注意这里使用Note here that we are using Object.prototype.newMethod 而不是
// Object.prototype ，以避免重新定义原型对象
Car.prototype.toString = function () {
  return this.model + " has done " + this.miles + " miles";
};

// 使用:

var civic = new Car( "Honda Civic", 2009, 20000 );
var mondeo = new Car( "Ford Mondeo", 2010, 5000 );

console.log( civic.toString() );
console.log( mondeo.toString() );
```

通过上面代码，单个`toString()`实例被所有的Car对象所共享了。