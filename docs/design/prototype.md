# 原型模式

## 原型模式

> GoF将原型模式引用为通过克隆的方式基于一个现有对象的模板创建对象的模式。
>
> 能够将原型模式认作是基于原型的继承中,创建作为其它对象原型的对象.原型对象自身被当做构造器创建的每一个对象的蓝本高效的使用着.如果构造器函数使用的原型包含例如叫做name的属性,那么每一个通过同一个构造器创建的对象都将拥有这个相同的属性。
>
> 在现存的(非Javascript的)语法中重新看一看对这个模式的定义,也许可以再一次发现对类的引用.真实的情况是那种原型继承避免了完全使用类.理论上既不是一个"定义的“对象，也不是一个核心对象。可以简单的创建现存函数型对象的拷贝。
>
> 使用原型模式的好处之一就是,在JavaScript提供的原生能力之上工作的,而不是JavaScript试图模仿的其它语言的特性.而对于其它的模式来说,情况并非如此。
>
> 这一模式不仅仅是实现继承的一种简单方式,它顺便还能够带来一点性能上的提升:当定义对象的一个方法时,它们都是使用引用创建的(因此所有的子对象都指向同一个函数),而不是创建属于它们的单独的拷贝。
>
> 对于那些有趣的,真正原型的集成,像ECMAScript 5标准中所定义的那样,需要使用 Object.create(如在本节的前面部分所见到的).为了提醒自己,Object.create创建了一个拥有特定原型的对象,并且也包含选项式的特定属性.(例如,Object.create(prototype,optionalDescriptorObject))。

可以在下面的示例中看到对这个的展示:

```js
var myCar = {

  name: "Ford Escort",

  drive: function () {
    console.log( "Weeee. I'm driving!" );
  },

  panic: function () {
    console.log( "Wait. How do you stop this thing?" );
  }

};

// Use Object.create to instantiate a new car
var yourCar = Object.create( myCar );

// Now we can see that one is a prototype of the other
console.log( yourCar.name );
```

`Object.create`也允许简单的继承先进的概念,比如对象能够直接继承自其它对象,这种不同的继承.早先也看到`Object.create`允许使用 供应的第二个参数来初始化对象属性。例如：

```js
var vehicle = {
  getModel: function () {
    console.log( "The model of this vehicle is.." + this.model );
  }
};

var car = Object.create(vehicle, {

  "id": {
    value: MY_GLOBAL.nextId(),
    // writable:false, configurable:false by default
    enumerable: true
  },

  "model": {
    value: "Ford",
    enumerable: true
  }

});
```

> 这里的属性可以被`Object.create`的第二个参数来初始化,使用一种类似于前面看到的`Object.defineProperties`和`Object.defineProperties`方法所使用语法的对象字面值。
>
> 在枚举对象的属性,和(如`Crockford`所提醒的那样)在一个`hasOwnProperty()`检查中封装循环的内容时,原型关系会造成麻烦,这一事实是值得关注的。

如果希望在不直接使用`Object.create`的前提下实现原型模式,可以像下面这样,按照上面的示例,模拟这一模式:

```js
var vehiclePrototype = {

  init: function ( carModel ) {
    this.model = carModel;
  },

  getModel: function () {
    console.log( "The model of this vehicle is.." + this.model);
  }
};

function vehicle( model ) {

  function F() {};
  F.prototype = vehiclePrototype;

  var f = new F();

  f.init( model );
  return f;

}

var car = vehicle( "Ford Escort" );
car.getModel();
```

> 注意:这种可选的方式不允许用户使用相同的方式定义只读的属性(因为如果不小心的话vehicle原型可能会被改变)。

原型模式的最后一种可选实现可以像下面这样:

```js
var beget = (function () {

    function F() {}

    return function ( proto ) {
        F.prototype = proto;
        return new F();
    };
})();
```

一个人可以从vehicle函数引用这个方法,注意,这里的那个vehicle正是在模拟着构造器,因为原型模式在将一个对象链接到一个原型之外没有任何初始化的概念。

