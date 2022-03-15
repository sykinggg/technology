# es6 module

## ES Harmony

TC39，负责讨论ECMAScript语法和语义定义问题和其未来迭代的标准机构，它是由许多的非常聪明的开发者组成的。这些开发者中的一些人（比如Alex Russell）对Javascript在大规模开发中的用例场景在过去几年一直保持者密切的关注，并且敏锐的意识到了人们对于能够使用其编写更加模块化JS的优良的语言特性的需求。 出于这个原因，目前已经有大量激动人心的，包括在客户端和服务器上都能起作用的弹性模块，一个模块加载器以及更多的对语言的改进提议。

> 注意：尽管Harmony仍然处于建设性阶段，也已经可以尝试ES.next的（部分）特性了，而这得感谢Google的Traceur编译器为模块化的Javascript提供的原生支持。为了在短时间内使Traceur启动和运作起来，读一读这份初学指导吧。如果对更深入的了解这个项目感兴趣的话，一个关于它JSConf展示就值得看一看。

## 使用导入和导出的模块

> 已经通读过`AMD`和`CommonJS`章节的话，你也许熟悉模块依赖（导入）和模块导出（或者说是允许其它模块使用的公共API/变量）这两个概念。在`ES.next`中，这些概念已经使用一种同预期没太大不同，而开发者将可以在代码示例中往下看到并且能瞬间抓住的用一个`export`关键字指定依赖的稍微更简洁的方式，被提供了出来。

* `import`声明绑定了一个以本地变量身份导出的模块，而且可能被重命名以避免名称重复或冲突。

* `export`声明声明了模块本地绑定的外部可见性，那样其他模块就可能读取到导出但不能修改它们。有趣的是，模块可能导出子模块但不能够导出已经在另外一个地方定义的模块。也可以对导出进行重命名以便它们的外部名称同本地名称有所不同。

```js
module staff{
    // specify (public) exports that can be consumed by
    // other modules
    export var baker = {
        bake: function( item ){
            console.log( "Woo! I just baked " + item );
        }
    }  
}

module skills{
    export var specialty = "baking";
    export var experience = "5 years";
}

module cakeFactory{

    // specify dependencies
    import baker from staff;

    // import everything with wildcards
    import * from skills;

    export var oven = {
        makeCupcake: function( toppings ){
            baker.bake( "cupcake", toppings );
        },
        makeMuffin: function( mSize ){
            baker.bake( "muffin", size );
        }
    }
}
```

## 从远程来源加载的模块

> 模块的提案也支持基于远程来源的模块（例如，一个第三方库），这简化了从外部位置载入模块的操作。这里有一个在模块中抽取并使用它的示例：

```js
module cakeFactory from "http://addyosmani.com/factory/cakes.js";
cakeFactory.oven.makeCupcake( "sprinkles" );
cakeFactory.oven.makeMuffin( "large" );
```

## 模块加载API

> 被提出来的模块加载器描述了一个用于在一个被高度控制的环境中加载模块的动态`API`。加载器上支持的签名包含`load(url, moduleInstance, error)`用于加载模块，`createModule(object, globalModuleReferences)`以及其他的操作。
>
> 这里是另外一个最初定义的在模块中进行动态加载的示例。注意，并不像最近的一个从远程来源拉入一个模块的示例，模块加载器API更加适合于动态环境。

```js
Loader.load( "http://addyosmani.com/factory/cakes.js" ,
    function( cakeFactory ){
        cakeFactory.oven.makeCupcake( "chocolate" );
    }
);
```

## 针对服务器的CommonJS类似模块

对于那些对服务器环境更加感兴趣的开发者，`ES.next`提供的模块系统并不仅仅限制只在浏览器中寻找模块。例如在下面，能够看到一个`CommonJS`类似的模块被提供给在服务器上使用。

```js
// io/File.js
export function open( path ) { ... };
export function close( hnd ) { ... };
```

```js
// compiler/LexicalHandler.js
module file from "io/File";

import { open, close } from file;
export function scan( in ) {
    try {
        var h = open( in ) ...
    }
    finally { close( h ) }
}
```

```js
module lexer from "compiler/LexicalHandler";
module stdlib from "@std";

//... scan(cmdline[0]) ...
```

## 带有构造器，Get和Set方法的类

> 类的概念一直都是带有纯粹主义色彩的有争议的问题，而目前相对已经回落到关于Javascript原型性质的问题上来，或者通过使用提供在一个表单中使用类定义能力的框架或者抽象，其具有相同原型行为的语法糖。
>
> 在Harmony中，为这种语言类已经同构造器和一些（最终）具有某种意义的真正隐晦的东西一起，被提了出来。在下面的示例中，其中的注释提供了用于帮助解释类是如何被构造的问题。
>
> 通过阅读，人们也许也会意识到这里“function“世界的缺失。这并不是一个笔误：TC39已经做出有目的的尝试，降低在任何事物上对function关键字的滥用，而这其实是希望能够简化编写代码的工作。

```js
class Cake{

    // We can define the body of a class" constructor
    // function by using the keyword "constructor" followed
    // by an argument list of public and private declarations.
    constructor( name, toppings, price, cakeSize ){
        public name = name;
        public cakeSize = cakeSize;
        public toppings = toppings;
        private price = price;

    }

    // As a part of ES.next's efforts to decrease the unnecessary
    // use of "function" for everything, you'll notice that it's
    // dropped for cases such as the following. Here an identifier
    // followed by an argument list and a body defines a new method

    addTopping( topping ){
        public( this ).toppings.push( topping );
    }

    // Getters can be defined by declaring get before
    // an identifier/method name and a curly body.
    get allToppings(){
        return public( this ).toppings;
    }

    get qualifiesForDiscount(){
        return private( this ).price > 5;
    }

    // Similar to getters, setters can be defined by using
    // the "set" keyword before an identifier
    set cakeSize( cSize ){
        if( cSize < 0 ){
            throw new Error( "Cake must be a valid size - either small, medium or large" );
        }
        public( this ).cakeSize = cSize;
    }

}
```

## ES6 Module 相对于 CommonJS 的优势

关于 ES Module 和 CommonJS 的规范以及语法，这里不再详细叙述，如果你还不了解这两者的语法糖，可以查看 [ECMAScript 6 入门 / Module 语法](https://link.juejin.cn/?target=https%3A%2F%2Fes6.ruanyifeng.com%2F%23docs%2Fmodule)、[ES Module 标准](https://link.juejin.cn/?target=https%3A%2F%2Ftc39.es%2Fecma262%2F%23sec-modules)以及 [Node.js 的 CommonJS 模块](https://link.juejin.cn/?target=http%3A%2F%2Fnodejs.cn%2Fapi%2Fmodules.html)，两者的主要区别如下所示：

| 类型 | ES Module | CommonJS |
| ---- | ---- | ---- |
| 加载方式 | 编译时	| 运行时 |
| 引入性质 | 引用 / 只读 | 浅拷贝 / 可读写 |
| 模块作用域 | this	| this / __filename / __dirname... |

### 1 加载方式

加载方式是 ES Module 和 CommonJS 的最主要区别，这使得两者在**编译时**和**运行时**上各有优劣。首先来看一下 ES Module 在加载方式上的特性，如下所示：

```ts
// 编译时：VS Code 鼠标 hover 到 b 时可以显示出 b 的类型信息
import { b } from './b';

const a = 1;
// WARNING: 具有逻辑
if(a === 1) {
   // 编译时：ESLint: Parsing error: 'import' and 'export' may only appear at the top level
   // 运行时：SyntaxError: Unexpected token '{'
   // TIPS: 这里可以使用 import() 进行动态导入
   import { b } from './b';
}

const c = 'b';
// WARNING: 含有变量
// 编译时：ESLint：Parsing error: Unexpected token `
// 运行时：SyntaxError: Unexpected template string
import { d } from `./${c}`;
```

CommonJS 相对于 ES Module 在加载方式上的特性如下所示：

```ts
const a = 1;

if(a === 1) {
  // VS Code 鼠标 hover 到 b 时，无法显示出 b 的类型信息
  const b = require('./b');
}

const c = 'b';
const d = require(`./${c}`);
```

大家可能知道上述语法的差异性，接下来通过理论知识重点讲解一下两者产生差异的主要原因。在[前端知识点扫盲（一）/ 编译器原理](https://juejin.cn/post/6987549240436195364)中重点讲解了整个编译器的执行阶段，如下图所示：

<img :src="$withBase('/assets/design/ee672b39fdae42a1a9318947be3bc39d_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

ES Module 是采用[静态](https://link.juejin.cn/?target=https%3A%2F%2Fexploringjs.com%2Fes6%2Fch_modules.html%23static-module-structure)的加载方式，也就是模块中导入导出的依赖关系可以在代码编译时就确定下来。如上图所示，代码在编译的过程中可以做的事情包含词法和语法分析、类型检查以及代码优化等等。因此采用 ES Module 进行代码设计时可以在编译时通过 ESLint 快速定位出模块的词法语法错误以及类型信息等。ES Module 中会产生一些错误的加载方式，是因为这些加载方式含有逻辑和变量的运行时判断，只有在代码的运行时阶段才能确定导入导出的依赖关系，这明显和 ES Module 的加载机制不相符。

CommonJS 相对于 ES Module 在加载模块的方式上存在明显差异，是因为 CommonJS 在运行时进行加载方式的动态解析，在运行时阶段才能确定的导入导出关系，因此无法进行静态编译优化和类型检查。​

> 温馨提示：注意 import 语法和 import() 的区别，import() 是 [tc39 中的一种提案](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Ftc39%2Fproposal-dynamic-import)，该提案允许你可以使用类似于 import(`${path}/foo.js`) 的导入语句（估计是借鉴了 CommonJS 可以动态加载模块的特性），因此也允许你在运行时进行条件加载，也就是所谓的[懒加载](https://link.juejin.cn/?target=https%3A%2F%2Fwebpack.docschina.org%2Fguides%2Flazy-loading%2F)。除此之外，import  和 import() 还存在其他一些重要的区别，大家还是自行谷歌一下。

### 2 编译优化

由于 ES Module 是在编译时就能确定模块之间的依赖关系，因此可以在编译的过程中进行代码优化。例如：

```ts
// hello.js 
export function a() {
  console.log('a');
}

export function b() {
  console.log('b');
}

// index.js
// TIPS: Webpack 编译入口文件
// 这里不引入 function b
import { a } from './hello';
console.log(a);
```

使用 Webpack 5.47.1 （Webpack Cli 4.7.2）进行代码编译，生成的编译产物如下所示：

```js
(()=>{"use strict";console.log((function(){console.log("a")}))})();
```

可以发现编译生成的产物没有 function b 的代码，这是在编译阶段对代码进行了优化，移除了未使用的代码（Dead Code），这种优化的术语被叫做 [Tree Shaking](https://link.juejin.cn/?target=https%3A%2F%2Fwebpack.docschina.org%2Fguides%2Ftree-shaking%2F)。

> 温馨提示：你可以将应用程序想象成一棵树。绿色表示实际用到的 Source Code（源码）和 Library（库），是树上活的树叶。灰色表示未引用代码，是秋天树上枯萎的树叶。为了除去死去的树叶，你必须摇动这棵树，使它们落下。
>
> 温馨提示：在 ES Module 中可能会因为代码具有副作用（例如操作原型方法以及添加全局对象的属性等）导致优化失败，如果想深入了解 Tree Shaking 的更多优化注意事项，可以深入阅读[你的 Tree-Shaking 并没什么卵用](https://juejin.cn/post/6844903549290151949#heading-7)。

为了对比 ES Module 的编译优化能力，同样采用 CommonJS 规范进行模块导入：​

```ts
// hello.js
exports.a = function () {
  console.log('a');
};

exports.b = function () {
  console.log('b');
};

// index.js
// TIPS: Webpack 编译入口文件
const { a } = require('./hello');
console.log(a);
```

使用 Webpack 进行代码编译，生成的编译产物如下所示：

```ts
(() => {
  var o = {
      418: (o, n) => {
        (n.a = function () {
          console.log('a');
        }),
          // function b 的代码并没有被去除
          (n.b = function () {
            console.log('b');
          });
      },
    },
    n = {};
  function r(t) {
    var e = n[t];
    if (void 0 !== e) return e.exports;
    var s = (n[t] = { exports: {} });
    return o[t](s, s.exports, r), s.exports;
  }
  (() => {
    const { a: o } = r(418);
    console.log(o);
  })();
})();
```

可以发现在 CommonJS 模块中，尽管没有使用 function b，但是代码仍然会被打包编译，正是因为 CommonJS 模块只有在运行时才能进行同步导入，因此无法在编译时确定是否 function b 是一个 Dead Code。

> 温馨提示：在 Node.js 环境中一般不需要编译 CommonJS 模块代码，除非你使用了当前 Node 版本所不能兼容的一些新语法特性。

大家可能会注意到一个新的问题，当我们在制作工具库或者组件库的时候，通常会将库包编译成 ES5 语法，这样尽管 Babel 以及 Webpack 默认会忽略 node_modules 里的模块，我们的项目在编译时引入的这些模块仍然能够做到兼容。在这个过程中，如果你制作的库包体积非常大，你又不提供非常细粒度的按需引入的加载方式，那么你可以编译你的源码使得编译产物可以支持 ES Module 的导入导出模式（注意只支持 ES6 中模块的语法，其他的语法仍然需要被编译成 ES5），当项目真正引入这些库包时可以通过 Tree Shaking 的特性在编译时去除未引入的代码（Dead Code）。

> 温馨提示：如果你想了解如何使发布的 Npm 库包支持 Tree Shaking 特性，可以查看 [defense-of-dot-js / Typical Usage](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fdherman%2Fdefense-of-dot-js%2Fblob%2Fmaster%2Fproposal.md%23typical-usage)、 [Webpack / Final Steps](https://link.juejin.cn/?target=https%3A%2F%2Fwebpack.js.org%2Fguides%2Fauthor-libraries%2F%23final-steps)、[pgk.module](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Frollup%2Frollup%2Fwiki%2Fpkg.module) 以及 [rollup.js / Tree Shaki…](https://link.juejin.cn/?target=https%3A%2F%2Frollupjs.org%2Fguide%2Fen%2F%23tree-shaking)。
​
### 3 加载原理 & 引入性质

> 温馨提示：下述理论部分以及图片内容均出自于 2018 年的文章 [ES modules: A cartoon deep-dive](https://link.juejin.cn/?target=https%3A%2F%2Fhacks.mozilla.org%2F2018%2F03%2Fes-modules-a-cartoon-deep-dive%2F)，如果想要了解更多原理信息可以查看 TC39 的 [16.2 Modules](https://link.juejin.cn/?target=https%3A%2F%2Ftc39.es%2Fecma262%2F%23sec-modules)。

<img :src="$withBase('/assets/design/f81e90e1874547b093d9a00b749f271f_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

事实上， ES Module 的加载过程主要分为如下三个阶段：​

* 构建（Construction）：主要分为查找、加载（在浏览器中是下载文件，在本地文件系统中是加载文件）、然后把文件解析成 Module Record。

* 实例化（Instantiation）：给所有的 Module Record 分配内存空间（此刻还没有填充值），并根据导入导出关系确定各自之间的引用关系，确定引用关系的过程称为链接（Linking）。

* 运行（Evaluation）：运行代码，给内存地址填充运行时的模块数据。

> 温馨提示：import 的上述三个阶段其实在 import() 中体现的更加直观（尽管 import 已经被多数浏览器支持，但是我们在真正开发和运行的过程中仍然会使用编译后的代码运行，而不是采用浏览器 script 标签的远程地址的动态异步加载方式），而 import() 事实上如果要实现懒加载优化（例如 Vue 里的路由懒加载，更多的是在浏览器的宿主环境而不是 Node.js 环境，这里不展开更多编译后实现方式的细节问题），大概率要完整经历上述三个阶段的异步加载过程，具体再次查看 [tc39 动态提案](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Ftc39%2Fproposal-dynamic-import%23proposed-solution)

<img :src="$withBase('/assets/design/da0d7178b8544e119bf8b5e7af520e72_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

ES Module 模块加载的三个阶段分别需要在编译时和运行时进行（可能有的同学会像我一样好奇实例化阶段到底是在编译时还是运行时进行，根据 [tc39 动态加载提案](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Ftc39%2Fproposal-dynamic-import)里的描述可以得出你想要的答案：The existing syntactic forms for importing modules are static declarations. They accept a string literal as the module specifier, and introduce bindings into the local scope via a pre-runtime "linking" process.），而 CommonJS 规范中的模块是在运行时同步顺序执行，模块在加载的过程中不会被中断，具体如下图所示：

<img :src="$withBase('/assets/design/ddfb51ee6b5d41cc933158796f76d6d4_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

上图中 main.js 在运行加载 counter.js 时，会先等待 counter.js 运行完成后才能继续运行代码，因此在 CommonJS 中模块的加载是阻塞式的。CommonJS 采用同步阻塞式加载模块是因为它只需要从本地的文件系统中加载文件，耗费的性能和时间很少，而 ES Module 在浏览器（注意这里说的是浏览器）中运行的时候需要下载文件然后才能进行实例化和运行，如果这个过程是同步进行，那么会影响页面的加载性能。

从 ES Module 链接的过程可以发现模块之间的引用关系是内存的地址引用，如下所示：

```ts
// hello.js
export let a = 1;

setTimeout(() => {
  a++;
}, 1000);


// index.js
import { a } from './hello.js';

setTimeout(() => {
  console.log(a); // 2
}, 2000);
```

在 Node （v14.15.4）环境中运行上述代码得到的执行结果是 2，对比一下 CommonJS 规范的执行：

```ts
// hello.js
exports.a = 1;

setTimeout(() => {
  exports.a++;
}, 1000);


// index.js
let { a } = require('./hello');

setTimeout(() => {
  console.log(a); // 1
}, 2000);
```

可以发现打印的结果信息和 ES Module 的结果不一样，这里的执行结果为 1。产生上述差异的根本原因是实例化的方式不同，如下图所示：

<img :src="$withBase('/assets/design/28b968cb9ce24e51a99896919ae7af21_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

在 ES Module 的导出中 Module Record 会实时跟踪（wire up 在这里理解为链接或者引用的意思）和绑定每一个导出变量对应的内存地址（从上图可以发现值还没有被填充，而 function 则可以在链接阶段进行初始化），导入同样对应的是导出所对应的同一个内存地址，因此对导入变量进行处理其实处理的是同一个引用地址的数据，如下图所示：
​
<img :src="$withBase('/assets/design/9c77a8a446c244c79941166cdb9e2d7d_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

CommonJS 规范在导出时事实上导出的是值拷贝，如下图所示：​

<img :src="$withBase('/assets/design/708109828ff24a36ba034e8458e81a4d_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

在上述代码执行的过程中先对变量 a 进行值拷贝，因此尽管设置了定时器，变量 a 被引入后打印的信息仍然是 1。需要注意的是这种拷贝是浅拷贝，如下所示：

```ts
// hello.js
exports.a = {
  value: 1,
};

setTimeout(() => {
  exports.a.value++;
}, 1000);

// index.js
let { a } = require('./hello');

setTimeout(() => {
  console.log(a.value); // 2
}, 2000);
```

接下来对比编译后的差异，将 ES Module 的源码进行编译（仍然使用 Webpack），编译之后的代码如下所示：​

```ts
(() => {
  'use strict';
  let e = 1;
  setTimeout(() => {
    e++;
  }, 1e3),
    setTimeout(() => {
      console.log(e);
    }, 2e3);
})();
```

可以看出，将 ES Module 的代码进行编译后，使用的是同一个变量值，此时将 CommonJS 的代码进行编译：​

```ts
(() => {
  var e = {
      418: (e, t) => {
        // hello.js 中的模块代码
        (t.a = 1),
          setTimeout(() => {
            t.a++;
          }, 1e3);
      },
    },
    t = {};
  function o(r) {
   	// 开辟模块的缓存空间
    var s = t[r];
   	// 获取缓存信息，每次返回相同的模块对象信息
    if (void 0 !== s) return s.exports;
    // 开辟模块对象的内存空间
    var a = (t[r] = { exports: {} });
    // 逗号运算符，先运行模块代码，赋值模块对象的值，然后返回模块信息
    // 由于缓存，模块代码只会被执行一次
    return e[r](a, a.exports, o), a.exports;
  }
  (() => {
    // 浅拷贝
    let { a: e } = o(418);
    setTimeout(() => {
      // 尽管 t.a ++，这里输出的仍然是 1
      console.log(e);
    }, 2e3);
  })();
})();
```

可以发现 CommonJS 规范在编译后会缓存模块的信息，从而使得下一次将从缓存中直接获取模块数据。除此之外，缓存会使得模块代码只会被执行一次。查看 Node.js 官方文档对于 [CommonJS 规范的缓存描述](https://link.juejin.cn/?target=http%3A%2F%2Fnodejs.cn%2Fapi%2Fmodules.html%23modules_caching)，发现 Webpack 的编译完全符合 CommonJS 规范的缓存机制。了解了这个机制以后，你会发现多次使用 require 进行模块加载不会导致代码被执行多次，这是解决无[限循环依](https://link.juejin.cn/?target=http%3A%2F%2Fnodejs.cn%2Fapi%2Fmodules.html%23modules_cycles)赖的一个重要特征。

除了引入的方式可能会有区别之外，引入的代码可能还存在一些区别，比如在 ES Module 中：

```ts
// hello.js
export function a() {
  console.log('a this: ', this);
}


// index.js
import { a } from './hello.js';

// a = 1;
  ^
// TypeError: Assignment to constant variable.
//    ...
//    at ModuleJob.run (internal/modules/esm/module_job.js:152:23)
//    at async Loader.import (internal/modules/esm/loader.js:166:24)
//    at async Object.loadESM (internal/process/esm_loader.js:68:5)
a = 1;
```

使用 Node.js 直接运行上述 ES Module 代码，是会产生报错的，因为导入的变量根据提示可以看出是只读变量，而如果采用 Webpack 进行编译后运行，则没有上述问题，除此之外 CommonJS 中导入的变量则可读可写。当然除此之外，你也可以尝试更多的其他方面，比如：

```ts
// hello.js

// 非严格模式
b = 1;

export function a() {
  console.log('a this: ', this);
}

// index.js
import { a } from './hello.js';

console.log('a: ', a);
```

你会发现使用 Node.js 环境执行上述 ES Module 代码，会直接抛出下述错误信息：

```
ReferenceError: b is not defined
    at file:///Users/ziyi/Desktop/Gitlab/Explore/module-example/esmodule/hello.js:1:3
    at ModuleJob.run (internal/modules/esm/module_job.js:152:23)
    at async Loader.import (internal/modules/esm/loader.js:166:24)
    at async Object.loadESM (internal/process/esm_loader.js:68:5)
```

是因为 ES Module 的模块需要运行在严格模式下， 而 CommonJS 规范则没有这样的要求，如果你在仔细一点观察的话，会发现使用 Webpack 进行编译的时候，ES Module 编译的代码会在前面加上 "use strict"，而 CommonJS 编译的代码没有。

### 4 模块作用域

大家会发现在 Node.js 的模块中设计代码时可以使用诸如 __dirname、__filename 之类的变量（需要注意在 Webpack 编译出的 CommonJS 前端产物中，并没有 __filename、__dirname 等变量信息，浏览器中并不需要这些文件系统的变量信息），是因为 Node.js 在加载模块时会对其进行如下包装：

```ts
// https://github.com/nodejs/node/blob/master/lib/internal/modules/cjs/loader.js#L206
const wrapper = [
  '(function (exports, require, module, __filename, __dirname) { ',
  '\n});',
];
```

索性看到这个模块作用域的代码，我们就继续查看一下 require 的源码：

```ts
// https://github.com/nodejs/node/blob/3914354cd7ddc65774f13bbe435978217149793c/lib/internal/modules/cjs/loader.js#L997
Module.prototype.require = function(id) {
  validateString(id, 'id');
  if (id === '') {
    throw new ERR_INVALID_ARG_VALUE('id', id,
                                    'must be a non-empty string');
  }
  requireDepth++;
  try {
    return Module._load(id, this, /* isMain */ false);
  } finally {
    requireDepth--;
  }
};

// https://github.com/nodejs/node/blob/3914354cd7ddc65774f13bbe435978217149793c/lib/internal/modules/cjs/loader.js#L757

// Check the cache for the requested file.
// 1. If a module already exists in the cache: return its exports object.
// 2. If the module is native: call
//    `NativeModule.prototype.compileForPublicLoader()` and return the exports.
// 3. Otherwise, create a new module for the file and save it to the cache.
//    Then have it load  the file contents before returning its exports
//    object.
Module._load = function(request, parent, isMain) {
  let relResolveCacheIdentifier;
  if (parent) {
    debug('Module._load REQUEST %s parent: %s', request, parent.id);
    // Fast path for (lazy loaded) modules in the same directory. The indirect
    // caching is required to allow cache invalidation without changing the old
    // cache key names.
    relResolveCacheIdentifier = `${parent.path}\x00${request}`;
    const filename = relativeResolveCache[relResolveCacheIdentifier];
    // 有缓存，则走缓存
    if (filename !== undefined) {
      const cachedModule = Module._cache[filename];
      if (cachedModule !== undefined) {
        updateChildren(parent, cachedModule, true);
        if (!cachedModule.loaded)
          return getExportsForCircularRequire(cachedModule);
        return cachedModule.exports;
      }
      delete relativeResolveCache[relResolveCacheIdentifier];
    }
  }

  // `node:` 用于检测核心模块，例如 fs、path 等
  // Node.js 文档：http://nodejs.cn/api/modules.html#modules_core_modules
  // 这里主要用于绕过 require 缓存
  const filename = Module._resolveFilename(request, parent, isMain);
  if (StringPrototypeStartsWith(filename, 'node:')) {
    // Slice 'node:' prefix
    const id = StringPrototypeSlice(filename, 5);

    const module = loadNativeModule(id, request);
    if (!module?.canBeRequiredByUsers) {
      throw new ERR_UNKNOWN_BUILTIN_MODULE(filename);
    }

    return module.exports;
  }
	
	// 缓存处理
  const cachedModule = Module._cache[filename];
  if (cachedModule !== undefined) {
    updateChildren(parent, cachedModule, true);
    if (!cachedModule.loaded) {
      const parseCachedModule = cjsParseCache.get(cachedModule);
      if (!parseCachedModule || parseCachedModule.loaded)
        return getExportsForCircularRequire(cachedModule);
      parseCachedModule.loaded = true;
    } else {
      return cachedModule.exports;
    }
  }

  const mod = loadNativeModule(filename, request);
  if (mod?.canBeRequiredByUsers) return mod.exports;

  // Don't call updateChildren(), Module constructor already does.
  const module = cachedModule || new Module(filename, parent);

  if (isMain) {
    process.mainModule = module;
    module.id = '.';
  }

  Module._cache[filename] = module;
  if (parent !== undefined) {
    relativeResolveCache[relResolveCacheIdentifier] = filename;
  }

  let threw = true;
  try {
    module.load(filename);
    threw = false;
  } finally {
    if (threw) {
      delete Module._cache[filename];
      if (parent !== undefined) {
        delete relativeResolveCache[relResolveCacheIdentifier];
        const children = parent?.children;
        if (ArrayIsArray(children)) {
          const index = ArrayPrototypeIndexOf(children, module);
          if (index !== -1) {
            ArrayPrototypeSplice(children, index, 1);
          }
        }
      }
    } else if (module.exports &&
               !isProxy(module.exports) &&
               ObjectGetPrototypeOf(module.exports) ===
                 CircularRequirePrototypeWarningProxy) {
      ObjectSetPrototypeOf(module.exports, ObjectPrototype);
    }
  }

  return module.exports;
};
```

> 温馨提示：这里没有将 wrapper 和 _load 的联系说清楚（最后如何在 _load 中执行 wrapper），大家可以在 Node.js 源码中跟踪一下看一下上述代码是怎么被执行的，是否是 eval 呢？不说了，脑壳疼，想要了解更多信息，可以查看 [Node.js / vm](https://link.juejin.cn/?target=http%3A%2F%2Fnodejs.cn%2Fapi%2Fvm.html)。除此之外，感兴趣的同学也了解一下 import 语法在 Node.js 中的底层实现，这里脑壳疼，就没有深入研究了。

> 温馨提示的温馨提示：比如你在源码中找不到上述代码的执行链路，那最简单的方式就是引入一个错误的模块，让错误信息将错误栈抛出来，比如如下所示，你会发现最底下执行了 wrapSafe，好了你又可以开始探索了，因为你对 safe 这样的字眼一定感到好奇，底下是不是执行的时候用了沙箱隔离呢？

```
SyntaxError: Cannot use import statement outside a module
    at wrapSafe (internal/modules/cjs/loader.js:979:16)
    at Module._compile (internal/modules/cjs/loader.js:1027:27)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1092:10)
    at Module.load (internal/modules/cjs/loader.js:928:32)
    at Function.Module._load (internal/modules/cjs/loader.js:769:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)
    at internal/main/run_main_module.js:17:47
```

> 温馨提示：是不是以前经常有面试官询问 exports 和 module.exports 有什么关联，其实根本不用纠结这个问题，因为两者指向的是同一个引用地址，你如果对 exports 进行重新赋值，那么引用发生了改变，你新引用的部分当然就不会导出了，因为从源码里可以看出，我们这里导出的是 module.exports。

接下来主要是重点看下 this 执行上下文的差异（注意这里只测试 Node.js 环境，编译后的代码可能会有差异），首先执行 ES Module 模块的代码：

```ts
// hello.js
export function a() {
  console.log('this: ', this); // undefined
}

// index.js
import { a } from './hello.js';
a();
```

我们接着执行 CommonJS 的代码：​

```ts
// hello.js
exports.a = function () {
  console.log('this: ', this);
};

// index.js
let { a } = require('./hello');
a();
```

你会发现 this 的上下文环境是有信息的，可能是当前模块的信息，具体没有深究：​

<img :src="$withBase('/assets/design/bacb79df619b43058c365bf2e51b8590_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

> 温馨提示：Node.js 的调试还能在浏览器进行？可以查看一下 [Node.js 调试](https://link.juejin.cn/?target=https%3A%2F%2Fnodejs.org%2Fzh-cn%2Fdocs%2Fguides%2Fdebugging-getting-started%2F)，当然你也可以使用 VS Code 进行调试，需要进行一些额外的 launch 配置，当然如果你觉得 Node.js 自带的浏览器调试方式太难受了，也可以想想办法，如何通过 IP 端口在浏览器中进行调试，并且可以做到代码变动监听调试。

[两年工作经验成功面试阿里P6总结 / 如何在Node端配置路径别名（类似于Webpack中的alias配置）](https://juejin.cn/post/6844903928442667015#heading-37)

基本上思路就是 HACK 原型链上的 require 方法：

```ts
const Module = require('module');
const originalRequire = Module.prototype.require;

Module.prototype.require = function(id){
  // 这里加入 path 的逻辑
  return originalRequire.apply(this, id);
};
```

