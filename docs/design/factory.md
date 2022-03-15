# 工厂模式

## 工厂模式

> 工厂模式是另外一种关注对象创建概念的创建模式。它的领域中同其它模式的不同之处在于它并没有明确要求使用一个构造器。取而代之，一个工厂能提供一个创建对象的公共接口，可以在其中指定希望被创建的工厂对象的类型。
>
> 试想一下，在被要求创建一种类型的UI组件时，就有一个UI工厂。并不是通过直接使用`new`操作符或者通过另外一个构造器来创建这个组件，取而代之的向一个工厂对象索要一个新的组件。告知工厂需要什么类型的组件（例如：“按钮”，“面板”），而它会将其初始化，然后返回供使用。
>
> 如果创建过程相当复杂的话，那这会特别的有用，例如：如果它强烈依赖于动态因素或者应用程序配置的话。

这个模式的一些例子可以在`UI`库里面找到，例如`ExtJS`, 用于创建对象或者组件的方法可以被做更深层次的子类。 下面使用用之前的那些代码来做的一个例子，通过使用构造器模式逻辑来定义汽车。这个例子展示了`Vehicle` 工厂可以使用工厂模式来实现。

```js
// Types.js - Constructors used behind the scenes

// A constructor for defining new cars
function Car( options ) {

  // some defaults
  this.doors = options.doors || 4;
  this.state = options.state || "brand new";
  this.color = options.color || "silver";

}

// A constructor for defining new trucks
function Truck( options){

  this.state = options.state || "used";
  this.wheelSize = options.wheelSize || "large";
  this.color = options.color || "blue";
}

// FactoryExample.js

// Define a skeleton vehicle factory
function VehicleFactory() {}

// Define the prototypes and utilities for this factory

// Our default vehicleClass is Car
VehicleFactory.prototype.vehicleClass = Car;

// Our Factory method for creating new Vehicle instances
VehicleFactory.prototype.createVehicle = function ( options ) {

  if( options.vehicleType === "car" ){
    this.vehicleClass = Car;
  }else{
    this.vehicleClass = Truck;
  }

  return new this.vehicleClass( options );

};

// Create an instance of our factory that makes cars
var carFactory = new VehicleFactory();
var car = carFactory.createVehicle( {
            vehicleType: "car",
            color: "yellow",
            doors: 6 } );

// Test to confirm our car was created using the vehicleClass/prototype Car

// Outputs: true
console.log( car instanceof Car );

// Outputs: Car object of color "yellow", doors: 6 in a "brand new" state
console.log( car );
```

### 方法1: 修改 VehicleFactory 实例使用 Truck 类

```js
var movingTruck = carFactory.createVehicle( {
                      vehicleType: "truck",
                      state: "like new",
                      color: "red",
                      wheelSize: "small" } );

// Test to confirm our truck was created with the vehicleClass/prototype Truck

// Outputs: true
console.log( movingTruck instanceof Truck );

// Outputs: Truck object of color "red", a "like new" state
// and a "small" wheelSize
console.log( movingTruck );
```

### 方法2: 做 VehicleFactory 的子类用于创建一个工厂类生产 Trucks

```js
function TruckFactory () {}
TruckFactory.prototype = new VehicleFactory();
TruckFactory.prototype.vehicleClass = Truck;

var truckFactory = new TruckFactory();
var myBigTruck = truckFactory.createVehicle( {
                    state: "omg..so bad.",
                    color: "pink",
                    wheelSize: "so big" } );

// Confirms that myBigTruck was created with the prototype Truck
// Outputs: true
console.log( myBigTruck instanceof Truck );

// Outputs: Truck object with the color "pink", wheelSize "so big"
// and state "omg. so bad"
console.log( myBigTruck );
```

## 何时使用工厂模式

当被应用到下面的场景中时，工厂模式特别有用：

* 当的对象或者组件设置涉及到高程度级别的复杂度时。

* 当需要根据所在的环境方便的生成不同对象的实体时。

* 当在许多共享同一个属性的许多小型对象或组件上工作时。

* 当带有其它仅仅需要满足一种API约定(又名鸭式类型)的对象的组合对象工作时.这对于解耦来说是有用的。

## 何时不要去使用工厂模式

当被应用到错误的问题类型上时,这一模式会给应用程序引入大量不必要的复杂性.除非为创建对象提供一个接口是编写的库或者框架的一个设计上目标,否则我会建议使用明确的构造器,以避免不必要的开销。

由于对象的创建过程被高效的抽象在一个接口后面的事实,这也会给依赖于这个过程可能会有多复杂的单元测试带来问题。

## 抽象工厂

> 了解抽象工厂模式也是非常实用的,它的目标是以一个通用的目标将一组独立的工厂进行封装.它将一堆对象的实现细节从它们的一般用例中分离。
>
> 抽象工厂应该被用在一种必须从其创建或生成对象的方式处独立,或者需要同多种类型的对象一起工作,这样的系统中。
>
> 简单且容易理解的例子就是一个发动机工厂,它定义了获取或者注册发动机类型的方式.抽象工厂会被命名为`AbstractVehicleFactory`.抽象工厂将允许像`"car"`或者`"truck"`的发动机类型的定义,并且构造工厂将仅实现满足发动机合同的类.(例如:`Vehicle.prototype.driven`和`Vehicle.prototype.breakDown`)。

```js
var AbstractVehicleFactory = (function () {

    // Storage for our vehicle types
    var types = {};

    return {
        getVehicle: function ( type, customizations ) {
            var Vehicle = types[type];

            return (Vehicle ? new Vehicle(customizations) : null);
        },

        registerVehicle: function ( type, Vehicle ) {
            var proto = Vehicle.prototype;

            // only register classes that fulfill the vehicle contract
            if ( proto.drive && proto.breakDown ) {
                types[type] = Vehicle;
            }

            return AbstractVehicleFactory;
        }
    };
})();

// Usage:

AbstractVehicleFactory.registerVehicle( "car", Car );
AbstractVehicleFactory.registerVehicle( "truck", Truck );

// Instantiate a new car based on the abstract vehicle type
var car = AbstractVehicleFactory.getVehicle( "car" , {
            color: "lime green",
            state: "like new" } );

// Instantiate a new truck in a similar manner
var truck = AbstractVehicleFactory.getVehicle( "truck" , {
            wheelSize: "medium",
            color: "neon yellow" } );
```