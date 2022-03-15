# 函数式编程

顾名思义，函数式编程是使用函数来进行高效处理数据或数据流的一种编程方式。在数学中，函数的三要素是定义域、值域和**对应关系。假设 A、B 是非空数集，对于集合 A 中的任意一个数 x，在集合 B 中都有唯一确定的数 f(x) 和它对应，那么可以将 f 称为从 A 到 B 的一个函数，记作：y = f(x)。在函数式编程中函数的概念和数学函数的概念类似，主要是描述形参 x 和返回值 y 之间的对应关系，**如下图所示：

<img :src="$withBase('/assets/design/5a09dc7ab098445896b56361b3ee635f_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

在实际的编程中，可以将各种明确**对应关系**的函数进行传递、组合从而达到处理数据的最终目的。在此过程中，我们的关注点不在于如何去实现**对应关系**而在于如何将各种已有的对应关系进行高效联动，从而可快速进行数据转换，达到最终的数据处理目的，提供开发效率。

### 简单示例

尽管你对函数式编程的概念有所了解，但是你仍然不知道函数式编程到底有什么特点。这里我们仍然拿 OOP 编程范式来举例，假设希望通过 OOP 编程来解决数学的加减乘除问题：

```ts
class MathObject {
  constructor(private value: number) {}
  public add(num: number): MathObject {
    this.value += num;
    return this;
  }
  public multiply(num: number): MathObject {
    this.value *= num;
    return this;
  }
  public getValue(): number {
    return this.value;
  }
}

const a = new MathObject(1);
a.add(1).multiply(2).add(a.multiply(2).getValue()); 
```

我们希望通过上述程序来解决 (1 + 2) * 2 + 1 * 2 的问题，但实际上计算出来的结果是 24，因为在代码内部有一个 `this.value` 的状态值需要跟踪，这会使得结果不符合预期。 接下来我们采用函数式编程的方式：

```ts
function add(a: number, b: number): number {
  return a + b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

const a: number = 1;
const b: number = 2;

add(multiply(add(a, b), b), multiply(a, b));
```

以上程序计算的结果是 8，完全符合预期。我们知道了 `add` 和 `multiply` 两个函数的实际**对应关系**，通过将**对应关系**进行有效的组合和传递，达到了最终的计算结果。除此之外，这两个函数还可以根据数学定律得出更优雅的组合方式：

```ts
add(multiply(add(a, b), b), multiply(a, b));

// 根据数学定律分配律：a * b  +  a * c = a * (b + c)，得出：
// (a + b) * b + a * b = (2a + b) * b

// 简化上述函数的组合方式
multiply(add(add(a, a), b), b);
```

我们完全不需要追踪类似于 OOP 编程范式中可能存在的内部状态数据，事实上对于数学定律中的结合律、交换律、同一律以及分配律，上述的函数式编程代码足可以胜任。

### 原则

通过上述简单的例子可以发现，要实现高可复用的函数**（对应关系）**，一定要遵循某些特定的原则，否则在使用的时候可能无法进行高效的传递和组合，例如

* 高内聚低耦合

* 最小意外原则

* 单一职责原则

* ...

如果你之前经常进行无原则性的代码设计，那么在设计过程中可能会出现各种出乎意料的问题（这是为什么新手老是出现一些稀奇古怪问题的主要原因）。函数式编程可以有效的通过一些原则性的约束使你设计出更加健壮和优雅的代码，并且在不断的实践过程中进行经验式叠加，从而提高开发效率。

### 特点

虽然我们在使用函数的过程中更多的不再关注函数如何实现（**对应关系**），但是真正在使用和设计函数的时候需要注意以下一些特点：

* 声明式（Declarative Programming）

* 一等公民（First Class Function）

* 纯函数（Pure Function）

* 无状态和数据不可变（Statelessness and Immutable Data）

* ...

### 声明式

我们以前设计的代码通常是命令式编程方式，这种编程方式往往注重具体的实现的过程（**对应关系**），而函数式编程则采用声明式的编程方式，往往注重如何去组合已有的**对应关系**简单举个例子：

```ts
// 命令式
const array = [0.8, 1.7, 2.5, 3.4];
const filterArray = [];

for (let i = 0; i < array.length; i++) {
  const integer = Math.floor(array[i]);
  if (integer < 2) {
    continue;
  }
  filterArray.push(integer);
}

// 声明式
// map 和 filter 不会修改原有数组，而是产生新的数组返回
[0.8, 1.7, 2.5, 3.4].map((item) => Math.floor(item)).filter((item) => item > 1);
```

命令式代码一步一步的告诉计算机需要执行哪些语句，需要关心变量的实例化情况、循环的具体过程以及跟踪变量状态的变化过程。声明式代码更多的不再关心代码的具体执行过程，而是采用表达式的组合变换去处理问题，不再强调**怎么做**，而是指明**做什么**声明式编程方式可以将我们设计代码的关注点彻底从过程式解放出来，从而提高开发效率。

### 函数

在 JavaScript 中，函数的使用非常灵活，例如可以对函数进行以下操作：

```ts
interface IHello {
  (name: string): string;
  key?: string;
  arr?: number[];
  fn?(name: string): string;
}

// 函数声明提升
console.log(hello instanceof Object); // true

// 函数声明提升
// hello 和其他引用类型的对象一样，都有属性和方法
hello.key = 'key';
hello.arr = [1, 2];
hello.fn = function (name: string) {
  return `hello.fn, ${name}`;
};

// 函数声明提升
// 注意函数表达式不能在声明前执行，例如不能在这里使用 helloCopy('world')
hello('world'); 

// 函数
// 创建新的函数对象，将函数的引用指向变量 hello
// hello 仅仅是变量的名称
function hello(name: string): string {
  return `hello, ${name}`;
}

console.log(hello.key); // key
console.log(hello.arr); // [1,2]
console.log(hello.name); // hello

// 函数表达式
const helloCopy: IHello = hello;
helloCopy('world');

function transferHello(name: string, hello: Hello) {
  return hello('world');
}

// 把函数对象当作实参传递
transferHello('world', helloCopy);

// 把匿名函数当作实参传递
transferHello('world', function (name: string) {
  return `hello, ${name}`;
});
```

通过以上示例可以看出，函数继承至对象并拥有对象的特性。在 JavaScript 中可以对函数进行参数传递、变量赋值或数组操作等等，因此把函数称为一等公民。函数式编程的核心就是对函数进行组合或传递，JavaScript 中函数这种灵活的特性是满足函数式编程的重要条件。

### 纯函数

纯函数是是指在相同的参数调用下，函数的返回值唯一不变。这跟数学中函数的映射关系类似，同样的 x 不可能映射多个不同的 y。使用函数式编程会使得函数的调用非常稳定，从而降低 Bug 产生的机率。当然要实现纯函数的这种特性，需要函数不能包含以下一些副作用：

* 操作 Http 请求

* 可变数据（包括在函数内部改变输入参数）

* DOM 操作

* 打印日志

* 访问系统状态

* 操作文件系统

* 操作数据库

* ...

从以上常见的一些副作用可以看出，纯函数的实现需要遵循最小意外原则，为了确保函数的稳定唯一的输入和输出，尽量应该避免与函数外部的环境进行任何交互行为，从而防止外部环境对函数内部产生无法预料的影响。纯函数的实现应该自给自足，举几个例子：

```ts
// 如果使用 const 声明 min 变量（基本数据类型），则可以保证以下函数的纯粹性
let min: number = 1;

// 非纯函数
// 依赖外部环境变量 min，一旦 min 发生变化则输入和返回不唯一
function isEqual(num: number): boolean {
  return num === min;
}

// 纯函数
function isEqual(num: number): boolean {
  return num === 1;
}

// 非纯函数
function request<T, S>(url: string, params: T): Promise<S> {
  // 会产生请求成功和请求失败两种结果，返回的结果可能不唯一
  return $.getJson(url, params);
}

// 纯函数
function request<T, S>(url: string, params: T) : () => Promise<S> {
  return function() {
    return $.getJson(url, params);
  }
}
```

纯函数的特性使得函数式编程具备以下特性：

* 可缓存性（Cacheable）

* 可移植性（Portable）

* 可测试性（Testable）

可缓存性和可测试性基于纯函数输入输出唯一不变的特性，可移植性则主要基于纯函数不依赖外部环境的特性。这里举一个可缓存的例子：

```ts
interface ICache<T> {
  [arg: string]: T;
}

interface ISquare<T> {
  (x: T): T;
}

// 简单的缓存函数（忽略通用性和健壮性）
function memoize<T>(fn: ISquare<T>): ISquare<T> {
  const cache: ICache<T> = {};
  return function (x: T) {
    const arg: string = JSON.stringify(x);
    cache[arg] = cache[arg] || fn.call(fn, x);
    return cache[arg];
  };
}

// 纯函数
function square(x: number): number {
  return x * x;
}

const memoSquare = memoize<number>(square);
memoSquare(4);

// 不会再次调用纯函数 square，而是直接从缓存中获取值
// 由于输入和输出的唯一性，获取缓存结果可靠稳定
// 提升代码的运行效率
memoSquare(4);
```

### 无状态和数据不可变

在函数式编程的简单示例中已经可以清晰的感受到函数式编程绝对不能依赖内部状态，而在纯函数中则说明了函数式编程不能依赖外部的环境或状态，因为一旦依赖的状态变化，不能保证函数根据对应关系所计算的返回值因为状态的变化仍然保持不变。

这里单独讲解一下数据不可变，在 JavaScript 中有很多数组操作的方法，举个例子：

```ts
const arr = [1, 2, 3];

console.log(arr.slice(0, 2)); // [1, 2]
console.log(arr); // [1, 2, 3]
console.log(arr.slice(0, 2)); // [1, 2]
console.log(arr); // [1, 2, 3]

console.log(arr.splice(0, 1)); // [1]
console.log(arr); // [2, 3]
console.log(arr.splice(0, 1)); // [2]
console.log(arr); // [3]
```

这里的 `slice` 方法多次调用都不会改变原有数组，且会产生相同的输出。而 `splice` 每次调用都在修改原数组，且产生的输出也不相同。 在函数式编程中，这种会改变原有数据的函数已经不再是纯函数，应该尽量避免使用。

### 响应式编程的使用场景

响应式编程是一种基于**观察者（发布 / 订阅）模式**并且面向**异步**（Asynchronous）**数据流**（Data Stream）和**变化传播**的声明式编程范式。响应式编程主要适用的场景包含：

* 用户和系统发起的连续事件处理，例如鼠标的点击、键盘的按键或者通信设备发起的信号等

* 非可靠的网络或者通信处理（例如 HTTP 网络的请求重试）

* 连续的异步 IO 处理

* 复杂的继发事务处理（例如一次事件涉及到多个继发的网络请求）

* 高并发的消息处理（例如 IM 聊天）

* ...
