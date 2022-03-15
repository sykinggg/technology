# Content Types

下面列出了所有内置内容类型。每个内容类型都有一个关联的“加载器”，它告诉 esbuild 如何解释文件内容。默认情况下，某些文件扩展名已经为它们配置了加载程序，尽管可以覆盖默认值。

## JavaScript

Loader: `js`

默认情况下为 `.js`、`.cjs` 和 `.mjs` 文件启用此加载程序。 `.cjs` 扩展名被 node 用于 CommonJS 模块，而 `.mjs` 扩展名被 node 用于 ECMAScript 模块，尽管 esbuild 没有区分两者。

esbuild 支持所有现代 JavaScript 语法。但是，较旧的浏览器可能不支持较新的语法，因此您可能需要配置 [target](https://esbuild.github.io/api/#target) 选项以告诉 esbuild 根据需要将较新的语法转换为较旧的语法。

这些语法特性总是针对旧浏览器进行转换：

| 语法转换 | 语言版本 | 栗子 ｜
| ---- | ---- | ---- |
| [函数参数列表和调用中的尾随逗号](https://github.com/tc39/proposal-trailing-function-commas) | `es2017` | `foo(a, b, )` |
| [数字分隔符](https://github.com/tc39/proposal-numeric-separator) | `esnext` | `1_000_000` |

这些语法特性根据配置的语言目标有条件地转换为旧浏览器：

| 语法转换 | 当 --target 低于时转换 | Example |
| ---- | ---- | ---- |
| [求幂运算符](https://github.com/tc39/proposal-exponentiation-operator) | `es2016` | `a ** b` |
| [异步函数](https://github.com/tc39/ecmascript-asyncawait) | `es2017` | `async () => {}` |
| [传播属性](https://github.com/tc39/proposal-object-rest-spread) | `es2018` | `let x = {...y}` |
| [休息属性](https://github.com/tc39/proposal-object-rest-spread) | `es2018` | `let {...x} = y` |
| [可选的捕获约束](https://github.com/tc39/proposal-optional-catch-binding) | `es2019` | `try {} catch {}` |
| [可选的链接](https://github.com/tc39/proposal-optional-chaining) | `es2020` | `a?.b` |
| [无效的聚结](https://github.com/tc39/proposal-nullish-coalescing) | `es2020` | `a ?? b` |
| [import.meta](https://github.com/tc39/proposal-import-meta) | `es2020` | `import.meta` |
| [逻辑赋值运算符](https://github.com/tc39/proposal-logical-assignment) | `es2021` | `a ??= b` |
| [类实例字段](https://github.com/tc39/proposal-class-fields) | `esnext` | `class { x }` |
| [静态类字段](https://github.com/tc39/proposal-static-class-features) | `esnext` | `class { static x }` |
| [私人实例方法](https://github.com/tc39/proposal-private-methods) | `esnext` | `class { #x() {} }` |
| [私有实例字段](https://github.com/tc39/proposal-class-fields) | `esnext` | `class { #x }` |
| [私人静态方法](https://github.com/tc39/proposal-static-class-features) | `esnext` | `class { static #x() {} }` |
| [私人静态字段](https://github.com/tc39/proposal-static-class-features) | `esnext` | `class { static #x }` |
| [Ergonomic brand checks](https://github.com/tc39/proposal-private-fields-in-in) | `esnext` | `#x in y` |
| [Import assertions](https://github.com/tc39/proposal-import-assertions) | `esnext` | `import "x" assert {}` |

这些语法功能目前始终通过未转换：

| 语法转换 | 当--target下面时不支持 | 栗子 |
| ---- | ---- | ---- |
| [异步迭代](https://github.com/tc39/proposal-async-iteration) | `es2018` | `for await (let x of y) {}` |
| [Async generators](https://github.com/tc39/proposal-async-iteration) | `es2018` | `async function* foo() {}` |
| [BigInt](https://github.com/tc39/proposal-bigint) | `es2020` | `123n` |
| [Hashbang语法](https://github.com/tc39/proposal-hashbang) | `esnext` | `#!/usr/bin/env node` |
| [Top-level await](https://github.com/tc39/proposal-top-level-await) | `esnext` | `await import(x)` |
| [任意模块命名空间标识符](https://github.com/bmeck/proposal-arbitrary-module-namespace-identifiers) | `esnext` | `export {foo as 'f o o'}` |

另请参阅[已完成的ECMAScript提案列表](https://github.com/tc39/proposals/blob/master/finished-proposals.md)以及[活动的ECMAScript提案列表](https://github.com/tc39/proposals/blob/master/README.md)。请注意，在支持包含顶级等待的转换代码的同时，仅当[输出格式](https://esbuild.github.io/api/#format)设置为`ESM`时，才会支持包含顶级等待的捆绑代码。

### JavaScript的注意事项

使用eSbuild使用JavaScript时，您应该记住以下内容：

#### ES5没有得到很好的支持

尚未支持将ES6 +语法转换为ES5。但是，如果您使用eSbuild来转换ES5代码，则应将[目标](https://esbuild.github.io/api/#target)设置为`ES5`。这可以防止eSBuild将ES6语法引入ES5代码。例如，如果没有此标志，则对象文字`{x：x}`将成为`{x}`，并且字符串`“a \ nb”`在拆除时将成为多行模板文字。这两个替换都是如此因为所得到的代码较短，但如果[目标](https://esbuild.github.io/api/#target)是`ES5`，则不会执行替换。

#### 私人会员表现

私有成员转换（对于`#Name`语法）使用`WeakMap`和`WeakSet`来保留此功能的隐私属性。这类似于Babel和TypeScript编译器中的相应变换。大多数现代的JavaScript引擎（V8，JavaScriptCore和Spidermonkey但不是Chakracore）可能对大型`WeakMap`和`WeakSet`具有良好的性能特征。

使用本语法变换激活创建具有私有字段或私有方法的许多类实例可能导致垃圾收集器的大量开销。这是因为现代引擎（除Chakracore）存储在实际地图对象中的弱价值，而不是键本身上的隐藏属性，并且大地图对象可能导致垃圾收集的性能问题。有关更多信息，[请参阅此参考](https://github.com/tc39/ecma262/issues/1657#issuecomment-518916579)。

#### Avoid direct eval when bundling

虽然表达式`eval（x）`看起来像普通函数调用，但它实际上是在JavaScript中的特殊行为。以这种方式使用`eval`意味着存储在x中的评估代码可以通过名称引用任何包含范围的任何变量。例如，代码`let y = 123; return eval('y')`将返回`123`。

这被称为“Direct Eval”，有问题捆绑代码有很多原因：

* 现代捆绑程序包含一个名为“scope提升”的优化，它将所有捆绑的文件合并到单个文件中，并重命名变量以避免名称冲突。但是，这意味着通过Direct `Eval`评估的代码可以在捆绑包中的任何文件中读取和写入变量！这是一个正确的问题，因为评估的代码可以尝试访问全局变量，但可能意外地访问与另一个文件相同的名称的私有变量。如果另一个文件中的私有变量具有敏感数据，则可能甚至是安全问题。

* 当使用`导入语句`引用导入的变量时，评估的代码可能无法正常工作。导入的变量是另一个文件中变量的实际绑定。它们不是这些变量的副本。因此，当esbuild捆绑代码时，将替换导入的导入直接引用导入文件中的变量。但该变量可能有一个不同的名称，在这种情况下，Direct `Eval`评估的代码将无法通过预期的名称引用。

* 使用Direct `Eval`迫使ESBuild将所有范围内的所有代码都取消优化，其中包含对Direct `Eval`的调用的所有范围内。对于正确性，它必须假设评估的代码可能需要访问从该`eval`调用中访问的文件中的任何其他代码。这意味着该代码都没有被删除为死代码，并且均未缩小该代码。

* 由于直接`eval`评估的代码可能需要按名称引用任何可达变量，因此防止eSbuild重命名评估代码可访问的所有变量。这意味着它无法重命名变量以避免与捆绑包中的其他变量发生碰撞。因此，Direct `Eval`会导致eSBuild将文件包装在CommonJS Closure中，这通过引入新的范围来避免名称冲突。但是，这使得生成的代码更大，更慢，因为导出的变量使用运行时动态绑定而不是编译时静态绑定。

幸运的是，使用直接`eval`通常很容易避免。有两种常用的替代方案避免了上述所有缺点：

* `(0, eval)('x')`

这被称为“间接`eval`”，因为eval未直接调用，因此不会触发JavaScript VM中的直接eval的语法特殊情况。您可以使用任何语法呼叫间接`eval`，除了表达式`eval（'x'）`。例如，`var eval2 = eval;` `eval2（'x'）`和`[eval] [0]（'x'）`和`window.eval（'x'）`是所有间接eval调用。使用间接eval时，代码在全局范围内评估，而不是调用者的内联范围。

* `new Function('x')`

这在运行时构造了一个新的函数对象。它好像在全局范围内写入`function() { x }`除了x可以是任意的代码字符串之外。此表单有时是方便的，因为您可以向函数添加参数，并使用这些参数将变量暴露给评估的代码。例如，`(new Function('env', 'x'))(someEnv)`就像你写的那样`(function(env) { x })(someEnv)`。当评估的代码需要访问本地变量时，这通常是直接`eval`的足够替代方案，因为您可以将本地变量传递为参数。

### ToString（）的值不保留在功能（和类）上

在JavaScript函数对象上调用ToString（）call `toString()`有点常见，然后将该字符串传递给某种形式的`eval`以获取新功能对象。这有效地“将”函数“中的函数从包含的文件中删除，并与该文件中的所有变量中断链路。不支持与eSbuild这样做，可能无法正常工作。特别是，eSbuild通常使用帮助程序方法来实现某些功能，并且它假设JavaScript范围规则没有被篡改。例如：

```js
let pow = (a, b) => a ** b;
let pow2 = (0, eval)(pow.toString());
console.log(pow2(2, 3));
```

当为ES6编译此代码时，`**`运算符不可用，`**`操作员将替换为`__pow`帮助函数的呼叫：

```js
let __pow = Math.pow;
let pow = (a, b) => __pow(a, b);
let pow2 = (0, eval)(pow.toString());
console.log(pow2(2, 3));
```

如果您尝试运行此代码，您将收到一个错误，例如`ReferenceError: __pow is not defined`，因为函数`(a, b) => __pow(a, b)`取决于本地范围的符号`__pow`，它不可用在全球范围内。这种情况是许多JavaScript语言功能，包括`异步`函数，以及一些ESBuild特定功能，如保[留名称](https://esbuild.github.io/api/#keep-names)设置。

当人们获取与`.tostring（）`获取函数的源代码，然后尝试将其用作`Web工作`者的正文时，此问题最高出现。如果您正在执行此操作并且您想要使用eSBuild，则应在单独的构建步骤中构建Web工作者的源代码，然后将Web工作源代码插入创建Web工作者的代码中。定义[功能](https://esbuild.github.io/api/#define)是在构建时插入字符串的一种方法。

## TypeScript

Loader: `ts` or `tsx`

默认情况下，该加载器默认为`.ts`和`.tsx`文件，这意味着eSbuild已内置支持，用于解析打字语法并丢弃类型注释。但是，eSBuild不执行任何类型检查，这样您仍然需要与eSBuild并行运行`TSC -Noemit`以检查类型。这不是eSbuild自己的东西。

根据这些标注类型声明解析并忽略（非穷举列表）：

| 语法功能 | 栗子 |
| ---- | ---- |
| 接口声明 | `interface Foo {}` |
| 类型声明 | `type Foo = number` |
| 函数声明 | `function foo(): void;` |
| 环境声明 | `declare module 'foo' {}` |
| 仅限类型的导入 | `import type {Type} from 'foo'` |
| 仅限类型的导出 | `export type {Type} from 'foo'` |

仅支持打字的语法扩展，并且始终将其转换为JavaScript（非穷举列表）：

| 语法功能 | 栗子 ｜ notes |
| ---- | ---- | ---- |
| 名称空间 | `namespace Foo {}` | |
| 枚举 | `enum Foo { A, B }` | |
| const枚举 | `const enum Foo { A, B }` | 与常规枚举的行为相同 |
| 通用类型参数 | `<T>(a: T): T => a` | TSX装载机不提供 |
| JSX有类型 | `<Element<T>/>` | |
| Type casts | `a as B and <B>a` | |
| 类型导入 | `import {Type} from 'foo'` | 通过删除所有未使用的导入来处理 |
| 类型出口 | `export {Type} from 'foo'` | 通过忽略类型键可文件中的缺失的导出来处理 |
| 实验装饰器 | `@sealed class Foo {}` | 不支持`EmitDecoratorMetAdata`标志 |

### TypeScript的注意事项

使用eSbuild使用类型签字时，您应该记住以下内容（除了[JavaScript Capeats](./content/#/#javascript-caveats)）：

#### 文件独立编译

即使在转发单个模块时，可键字编译器实际上仍然会解析导入的文件，以便判断导入的名称是否是类型或值。但是，像eSBuild和Babel这样的工具（以及recescript编译器的`transpilemodule` api）以隔离编译每个文件，因此它们无法判断导入的名称是否是类型或值。

因此，如果使用具有eSbuild的类型签名，则应启用Solditmodules Typescript配置选项。此选项可防止您使用可能在eSBuild等环境中导致MIS编译的功能，其中每个文件被[独立编译](https://www.typescriptlang.org/tsconfig#isolatedModules)，而无需跨文件的类型引用。例如，它可以防止您从使用`export {T} from './types'`（您需要使用`export type {T} from './types'`）。

#### 导入遵循ECMAScript模块行为

出于历史原因，默认情况下，Pinesscript编译器将ESM（ECMAScript模块）语法编译为CommonJS语法。例如，`import * as foo from 'foo'`, `const foo = require('foo')`。可能发生这种情况，因为当类型签字采用语法时，Ecmascript模块仍然是一个提议。但是，这是传统行为，这与在节点等真实平台上的语法行为如何不匹配。例如，`require`函数可以返回包括字符串的任何JavaScript值，而是`import * as`，因为语法始终导致对象，并且不能是一个字符串。

为避免由于此遗留功能而出现问题，如果使用具有eSbuild的类型项，则应启用[ESModuleInterop](https://www.typescriptlang.org/tsconfig#esModuleInterop) Typescript配置选项。启用它禁用此遗留行为，并使Ringscript的类型系统与ESM兼容。默认情况下未启用此选项，因为它将是现有版本项目的破坏更改，但Microsoft强烈建议将其应用于[新的和现有项目](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html#support-for-import-d-from-cjs-from-commonjs-modules-with---esmoduleinterop)（然后更新代码）以便与生态系统的其余部分更好地兼容。

具体地说，这意味着必须使用ESM导入语法导入来自CancomJS模块的非对象值，而是使用默认导入而不是使用`import * as`。因此，如果CommonJS模块通过`module.exports = fn`导出函数，则需要使用import fn from 'path'而不是import * as fn from 'path'。

#### 不支持需要类型系统的功能

根据eSBuild将打字类型的类型视为注释，因此将被视线视为“选中的JavaScript”。类型注释的解释取决于打字类型检查器，如果您使用的是eSbuild，您应该运行的类型检查器。这是Babel的TypeScript实现使用的相同编译策略。但是，这意味着某些根据eSBuild的类型解释需要类型解释的一些类型标注汇编功能。

具体来说就是。

* 不支持[EmitDecoratorData](https://www.typescriptlang.org/tsconfig#emitDecoratorMetadata) TypeScript配置选项。此功能将相应的打字类型的JavaScript表示传递给附加的装饰函数。由于eSbuild不复制打字的类型系统，因此它没有足够的信息来实现此功能。

* CodeScript中的[Const枚举](https://www.typescriptlang.org/docs/handbook/enums.html#const-enums)功能定义了一组在类型下分组的编译时间常量。该类型的每个枚举值由相应的常量在编译时替换。由于eSbuild不复制打印类型的类型系统，因此`Const Enum`声明将被编译为`Enum`声明。

#### 只有某些tsconfig.json字段才会增加权重

在捆绑期间，eSbuild中的路径分辨率算法将考虑包含一个的最近父目录中的`TSConfig.json`文件的内容，并将相应地修改其行为。还可以使用eSbuild的[TSconfig](https://esbuild.github.io/api/#tsconfig)设置将`Tsconfig.json`路径与构建API一起[显式设置](https://esbuild.github.io/api/#tsconfig-raw)，并使用eSbuild的TSconFigraw设置将`TSConfig.json`文件的内容显式传递。但是，eSBuild目前只检查TSConfig.json文件中的以下字段：

* [baseUrl](https://www.typescriptlang.org/tsconfig#baseUrl)

* [extends](https://www.typescriptlang.org/tsconfig#extends)

* [importsNotUsedAsValues](https://www.typescriptlang.org/tsconfig#importsNotUsedAsValues)

* [jsxFactory](https://www.typescriptlang.org/tsconfig#jsxFactory)

* [jsxFragmentFactory](https://www.typescriptlang.org/tsconfig#jsxFragmentFactory)

* [paths](https://www.typescriptlang.org/tsconfig#paths)

* [target](https://www.typescriptlang.org/tsconfig#target)

* [useDefineForClassFields](https://www.typescriptlang.org/tsconfig#useDefineForClassFields)

注意：QuestRick默默地发布版本4.3.2中的断开更改，如果未指定`useDefineForClassFields`选项，则如果指定目标：“esnext”，则默认为`true`。在第4.3.2版之前，`useDefineForClassFields`选项始终默认为`false`。已更新最新版本的ESBuild，以反映RiceScript 4.3.2版的行为。如果您需要旧行为，请务必指定AdsioneFineForClassFields：`false`除目标之外：“esnext”。有关更多信息，请参阅键盘签名PR[＃42663](https://github.com/microsoft/TypeScript/pull/42663)。

所有其他字段都将被忽略。请注意，导入路径转换需要[捆绑](https://esbuild.github.io/api/#bundle)才能启用，因为只在捆绑期间发生路径分辨率。

#### 你不能对*.ts文件使用tsx加载器

`TSX`加载器不是TS装载机的超集。它们是两种不同的部分不兼容的语法。例如，具有TS Loader和`<a>1</a>/g`的字符序列`(<a>1</a>) / g`映射为`<a>(1 < (/a>/g))` `TSX`装载机。

最常见的问题这一原因无法在箭头函数表达式上使用通用类型参数，例如使用`TSX`加载器的`<T>() => {}`。这是故意的，并匹配官方类型编译器的行为。 `TSX`语法中的空间为JSX元素保留。

## JSX

Loader: `jsx` or `tsx`

[JSX](https://facebook.github.io/jsx/)是用于javascript的XML语法扩展名，用于对[React](https://github.com/facebook/react)创建的。它旨在通过构建工具转换为正常的JavaScript。每个XML元素都成为正常的JavaScript函数调用。例如，以下JSX代码：

```jsx
import Button from './button'
let button = <Button>Click me</Button>
render(button)
```

将转换为以下JavaScript代码：

```js
import Button from "./button";
let button = React.createElement(Button, null, "Click me");
render(button);
```

默认情况下，此加载器默认为`.jsx`和`.tsx`文件。请注意，默认情况下，不会在`.js`文件中启用JSX语法。如果您想启用它，您需要配置它：

<div>
<div title="cli">

```sh
esbuild app.js --bundle --loader:.js=jsx
```

</div>
<div title="js">

```js
require('esbuild').buildSync({
  entryPoints: ['app.js'],
  bundle: true,
  loader: { '.js': 'jsx' },
  outfile: 'out.js',
})
```

</div>
<div title="go">

```go
package main

import "github.com/evanw/esbuild/pkg/api"
import "os"

func main() {
  result := api.Build(api.BuildOptions{
    EntryPoints: []string{"app.js"},
    Bundle:      true,
    Loader: map[string]api.Loader{
      ".js": api.LoaderJSX,
    },
    Write: true,
  })

  if len(result.Errors) > 0 {
    os.Exit(1)
  }
}
```

</div>
</div>

### 自动导入JSX

使用JSX语法通常要求您手动导入您正在使用的JSX库。例如，如果您使用的反应，默认情况下，您需要导入到每个JSX文件中的反应：

```js
import * as React from 'react'
render(<div></div>)
```

这是因为JSX变换将JSX语法转换为`React.CReateElement`，但它本身并不导入任何内容，因此不会自动存在`React`变量。

如果您希望避免手动将JSX库`导入`每个文件，则可以使用eSbuild的注入功能自动将其导入每个文件。此功能是一种通用的PolyFill机制，替换对来自注入文件的导出到全局变量的引用。在这种情况下，我们可以使用它来替换对`React` Package导出的`React`变量的引用。

首先，创建一个名为`React-Shim.js`的文件，该文件将从`React` Package中重新导出一个名为`React`的导出中的所有内容：

```js
// react-shim.js
import * as React from 'react'
export { React }
```

然后使用eSbuild的[注入功能](https://esbuild.github.io/api/#inject)将其注入每个文件：

<div>
<div title="cli">

```sh

esbuild app.jsx --bundle --inject:./react-shim.js --outfile=out.js
```

</div>
<div title="js">

```js

require('esbuild').buildSync({
  entryPoints: ['app.jsx'],
  bundle: true,
  inject: ['./react-shim.js'],
  outfile: 'out.js',
})
```

</div>
<div title="go">

```go

package main

import "github.com/evanw/esbuild/pkg/api"
import "os"

func main() {
  result := api.Build(api.BuildOptions{
    EntryPoints: []string{"app.jsx"},
    Bundle:      true,
    Inject:      []string{"./react-shim.js"},
    Outfile:     "out.js",
    Write:       true,
  })

  if len(result.Errors) > 0 {
    os.Exit(1)
  }
}
```

</div>
</div>

由于注入功能是通用代码注入机制，因此它可以与任何JSX变换库一起使用，而不仅仅是反应。

> **重要提示：**需要`导出`陈述。不要删除它。 inject功能将`导入`语句注入到每个文件顶部的`rest-shim.js`的内容如下所示：

```js
import { /* ... */ } from './react-shim.js'
```

从文件（即`React`）的未绑定引用集中自动生成的导入名称`/* ... */`等于注入的文件`React-Shim.js`导出的名称。如果注入的文件不会导出任何内容，那么导入的名称集留空，所有未绑定的引用都保持未绑定。如果在全局范围内没有可变导致的变量，则未绑定引用的代码将在运行时崩溃。这是通过设计，并且由于ECMAScript模块如何工作而发生。一个模块中的导入是该模块的本地，除非该模块`导出`并导入另一个模块，否则无法从其他模块读取。使用局部变量反应的`React-Shim.js`中的导出允许它被其他模块`导入`并使用它。

### 在没有React的情况下使用JSX

如果您使用的是与React以外的库（如[摘要](https://preactjs.com/)）使用的JSX，则可能需要配置[JSX Factory](https://esbuild.github.io/api/#jsx-factory)和[JSX片段](https://esbuild.github.io/api/#jsx-fragment)设置，因为它们默认为`React.CreateAlement`和`React.cragment`：

<div>
<div title="cli">

```sh

esbuild app.jsx --jsx-factory=h --jsx-fragment=Fragment
```

</div>
<div title="js">

```js

require('esbuild').buildSync({
  entryPoints: ['app.jsx'],
  jsxFactory: 'h',
  jsxFragment: 'Fragment',
  outfile: 'out.js',
})
```

</div>
<div title="go">

```go

package main

import "github.com/evanw/esbuild/pkg/api"
import "os"

func main() {
  result := api.Build(api.BuildOptions{
    EntryPoints: []string{"app.jsx"},
    JSXFactory:  "h",
    JSXFragment: "Fragment",
    Write:       true,
  })

  if len(result.Errors) > 0 {
    os.Exit(1)
  }
}
```

</div>
</div>

或者，如果您使用的是类型签字，只需通过将此添加到`TSConfig.JSON`文件和eSbuild即可自动将其拾取而无法配置：

```json
{
  "compilerOptions": {
    "jsxFactory": "h",
    "jsxFragmentFactory": "Fragment"
  }
}
```

除非使用如上所述的自动导入，否则您还必须在包含JSX语法中的`import {h, Fragment} from 'preact'`。

## JSON

Loader: `json`

默认情况下，该加载器默认为`.json`文件启用。它将JSON文件解析为构建时的JavaScript对象，并将对象导出为默认导出。使用它看起来像这样：

```js
import object from './example.json'
console.log(object)
```

除默认导出外，还有JSON对象中的每个顶级属性的名为导出。导入命名导出直接意味着eSbuild可以从捆绑包自动删除JSON文件的未使用部分，只留下实际使用的命名导出。例如，此代码仅包含捆绑的`版本`字段：

```js
import { version } from './package.json'
console.log(version)
```

## CSS

Loader: `css`

默认情况下，此加载器将启用`.css`文件。它将文件加载为CSS语法。 CSS是eSBuild中的一流内容类型，这意味着eSbuild可以直接捆绑CSS文件，而无需从JavaScript代码导入CSS：

<div>
<div title="cli">

```sh

esbuild --bundle app.css --outfile=out.css
```

</div>
<div title="js">

```js

require('esbuild').buildSync({
  entryPoints: ['app.css'],
  bundle: true,
  outfile: 'out.css',
})
```

</div>
<div title="go">

```go

package main

import "github.com/evanw/esbuild/pkg/api"
import "os"

func main() {
  result := api.Build(api.BuildOptions{
    EntryPoints: []string{"app.css"},
    Bundle:      true,
    Outfile:     "out.css",
    Write:       true,
  })

  if len(result.Errors) > 0 {
    os.Exit(1)
  }
}
```

</div>
</div>

您可以`@Import`其他CSS文件和参考图像以及带有`URL（）`和esbuild的字体文件将捆绑在一起。请注意，由于eSbuild没有任何预先配置，您必须为图像和字体文件配置加载器。通常这是[data URL](./content/#/#data-url)加载程序或[外部文件](./content/#/#external-file)加载器。

您还可以从JavaScript导入CSS。执行此操作后，eSBuild将收集来自给定入口点引用的所有CSS文件，并将其捆绑到旁边的JavaScript输出文件旁边的兄弟CSS输出文件中，以获取该JavaScript入口点。因此，如果esbuild生成`app.js`，它还会生成包含由`app.js`引用的所有CSS文件的`App.css`。以下是从JavaScript导入CSS文件的示例：

```js
import './button.css'

export let Button = ({ text }) =>
  <div className="button">{text}</div>
```

请注意，eSbuild尚未支持CSS模块，因此来自CSS文件的导出名称集目前始终为空。支持基本形式的CSS模块是在路线图上。


## Text

Loader: `text`

默认情况下，此加载器启用`.txt`文件。它将文件加载为构建时的字符串，并将字符串导出为默认导出。使用它看起来像这样：

```js
import string from './example.txt'
console.log(string)
```

## Binary

Loader: `binary`

此加载程序将文件加载为Build Time的二进制缓冲区，并使用Base64编码将其嵌入到捆绑包中。文件的原始字节在运行时从base64解码，并使用默认导出导出为`uint8Array`。使用它看起来像这样：

```js
import uint8array from './example.data'
console.log(uint8array)
```

如果您需要一个`ArrayBuffer`，则只需访问`UInt8Array.Buffer`。请注意，默认情况下未启用此加载器。您需要为类似的文件扩展名配置它：

<div>
<div title="cli">

```sh
esbuild app.js --bundle --loader:.data=binary
```

</div>
<div title="js">

```js

require('esbuild').buildSync({
  entryPoints: ['app.js'],
  bundle: true,
  loader: { '.data': 'binary' },
  outfile: 'out.js',
})
```

</div>
<div title="go">

```go

package main

import "github.com/evanw/esbuild/pkg/api"
import "os"

func main() {
  result := api.Build(api.BuildOptions{
    EntryPoints: []string{"app.js"},
    Bundle:      true,
    Loader: map[string]api.Loader{
      ".data": api.LoaderBinary,
    },
    Write: true,
  })

  if len(result.Errors) > 0 {
    os.Exit(1)
  }
}
```

</div>
</div>

## Base64

Loader: `base64`

此加载程序将文件作为二进制缓冲区加载为在构建时的二进制缓冲区，并使用Base64编码将其作为字符串嵌入到捆绑包中。使用默认导出导出此字符串。使用它看起来像这样：

```js
import base64string from './example.data'
console.log(base64string)
```

请注意，默认情况下未启用此加载器。您需要为类似的文件扩展名配置它：

<div>
<div title="cli">

```sh

esbuild app.js --bundle --loader:.data=base64
```

</div>
<div title="js">

```js

require('esbuild').buildSync({
  entryPoints: ['app.js'],
  bundle: true,
  loader: { '.data': 'base64' },
  outfile: 'out.js',
})
```

</div>
<div title="go">

```go

package main

import "github.com/evanw/esbuild/pkg/api"
import "os"

func main() {
  result := api.Build(api.BuildOptions{
    EntryPoints: []string{"app.js"},
    Bundle:      true,
    Loader: map[string]api.Loader{
      ".data": api.LoaderBase64,
    },
    Write: true,
  })

  if len(result.Errors) > 0 {
    os.Exit(1)
  }
}
```

</div>
</div>

如果您打算将其转换为`UINT8ARRAY`或`ArrayBuffer`，则应使用`二进制`加载器。它使用优化的Base64到二进制转换器比通常的`ATOB`转换过程更快。

## Data URL

Loader: `dataurl`

此加载程序将文件作为二进制缓冲区加载到构建时，并将其嵌入到捆绑包中作为Base64编码的数据URL。使用默认导出导出此字符串。使用它看起来像这样：

```js
import url from './example.png'
let image = new Image
image.src = url
document.body.appendChild(image)
```

数据 URL 包括基于文件扩展名和/或文件内容的 MIME 类型的最佳猜测，并且看起来像这样：

```
data:image/png;base64,iVBORw0KGgo=
```

请注意，默认情况下未启用此加载程序。您需要将其配置为适当的文件扩展名，如下所示：

<div>
<div title="cli">

```sh

esbuild app.js --bundle --loader:.png=dataurl
```

</div>
<div title="js">

```js

require('esbuild').buildSync({
  entryPoints: ['app.js'],
  bundle: true,
  loader: { '.png': 'dataurl' },
  outfile: 'out.js',
})
```

</div>
<div title="go">

```go

package main

import "github.com/evanw/esbuild/pkg/api"
import "os"

func main() {
  result := api.Build(api.BuildOptions{
    EntryPoints: []string{"app.js"},
    Bundle:      true,
    Loader: map[string]api.Loader{
      ".png": api.LoaderDataURL,
    },
    Write: true,
  })

  if len(result.Errors) > 0 {
    os.Exit(1)
  }
}
```

</div>
</div>

## External file

Loader: `file`

这个加载器会将文件复制到输出目录，并将文件名作为字符串嵌入到包中。此字符串使用默认导出导出。使用它看起来像这样：

```js
import url from './example.png'
let image = new Image
image.src = url
document.body.appendChild(image)
```

请注意，默认情况下未启用此加载程序。您需要将其配置为适当的文件扩展名，如下所示：

<div>
<div title="cli">

```sh

esbuild app.js --bundle --loader:.png=file --outdir=out
```

</div>
<div title="js">

```js

require('esbuild').buildSync({
  entryPoints: ['app.js'],
  bundle: true,
  loader: { '.png': 'file' },
  outdir: 'out',
})
```

</div>
<div title="go">

```go

package main

import "github.com/evanw/esbuild/pkg/api"
import "os"

func main() {
  result := api.Build(api.BuildOptions{
    EntryPoints: []string{"app.js"},
    Bundle:      true,
    Loader: map[string]api.Loader{
      ".png": api.LoaderFile,
    },
    Outdir: "out",
    Write:  true,
  })

  if len(result.Errors) > 0 {
    os.Exit(1)
  }
}
```

</div>
</div>

默认情况下，导出的字符串只是文件名。如果您想为导出的字符串添加基本路径，可以使用[公共路径](https://esbuild.github.io/api/#public-path) API 选项来完成。