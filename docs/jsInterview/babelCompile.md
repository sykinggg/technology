# babel 编译原理

## 基础原理

> Babel 是一个源到源的转换编译器（Transpiler），它的主要作用是将 JavaScript 的高版本语法（例如 ES6）转换成低版本语法（例如 ES5），从而可以适配浏览器的兼容性。

<img :src="$withBase('/assets/jsInterview/c88916e811d348938f248080125a09b0_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

从上图可知，Babel 的编译过程主要可以分为三个阶段：

* `解析（Parse）`：包括词法分析和语法分析。词法分析主要把字符流源代码（`Char Stream`）转换成令牌流（ `Token Stream`），语法分析主要是将令牌流转换成抽象语法树（`Abstract Syntax Tree，AST`）。

* `转换（Transform）`：通过 Babel 的插件能力，将高版本语法的 AST 转换成支持低版本语法的 AST。当然在此过程中也可以对 AST 的 Node 节点进行优化操作，比如添加、更新以及移除节点等。

* `生成（Generate）`：将 AST 转换成字符串形式的低版本代码，同时也能创建 `Source Map` 映射。

具体的流程如下所示：

<img :src="$withBase('/assets/jsInterview/deploy.awebp')" alt="demo" />

举个栗子，如果要将 TypeScript 语法转换成 ES5 语法：

```js
// 源代码
let a: string = 1;
// 目标代码
var a = 1;
```

### 6.1 解析（Parser）

Babel 的解析过程（源码到 AST 的转换）可以使用 [@babel/parser](https://link.juejin.cn/?target=https%3A%2F%2Fbabeljs.io%2Fdocs%2Fen%2Fbabel-parser)，它的主要特点如下：

* 支持解析最新的 ES2020

* 支持解析 JSX、Flow & TypeScript

* 支持解析实验性的语法提案（支持任何 [Stage 0](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Ftc39%2Fproposals%2Fblob%2Fmaster%2Fstage-0-proposals.md) 的 PRS）

@babel/parser 主要是基于输入的字符串流（源代码）进行解析，最后转换成[规范](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fbabel%2Fbabel%2Fblob%2Fmaster%2Fpackages%2Fbabel-parser%2Fast%2Fspec.md)（基于 [ESTree](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Festree%2Festree) 进行调整）的 AST，如下所示：

```ts
import { parse } from '@babel/parser';
const source = `let a: string = 1;`;

enum ParseSourceTypeEnum {
  Module = 'module',
  Script = 'script',
  Unambiguous = 'unambiguous',
}

enum ParsePluginEnum {
  Flow = 'flow',
  FlowComments = 'flowComments',
  TypeScript = 'typescript',
  Jsx = 'jsx',
  V8intrinsic = 'v8intrinsic',
}

// 解析（Parser）阶段
const ast = parse(source, {
  // 严格模式下解析并且允许模块定义
  sourceType: ParseSourceTypeEnum.Module,
  // 支持解析 TypeScript 语法（注意，这里只是支持解析，并不是转换 TypeScript）
  plugins: [ParsePluginEnum.TypeScript],
});
```

需要注意，在 Parser 阶段主要是进行词法和语法分析，如果词法或者语法分析错误，那么会在该阶段被检测出来。如果检测正确，则可以进入语法的转换阶段。

### 6.2 转换（Transform）

Babel 的转换过程（AST 到 AST 的转换）主要使用 [@babel/traverse](https://link.juejin.cn/?target=https%3A%2F%2Fbabeljs.io%2Fdocs%2Fen%2Fbabel-traverse)，该库包可以通过[访问者模式](https://link.juejin.cn/?target=https%3A%2F%2Fzh.wikipedia.org%2Fwiki%2F%25E8%25AE%25BF%25E9%2597%25AE%25E8%2580%2585%25E6%25A8%25A1%25E5%25BC%258F)自动遍历并访问 AST 树的每一个 Node 节点信息，从而实现节点的替换、移除和添加操作，如下所示：

```ts
import { parse } from '@babel/parser';
import traverse from '@babel/traverse';

enum ParseSourceTypeEnum {
  Module = 'module',
  Script = 'script',
  Unambiguous = 'unambiguous',
}

enum ParsePluginEnum {
  Flow = 'flow',
  FlowComments = 'flowComments',
  TypeScript = 'typescript',
  Jsx = 'jsx',
  V8intrinsic = 'v8intrinsic',
}

const source = `let a: string = 1;`;

// 解析（Parser）阶段
const ast = parse(source, {
  // 严格模式下解析并且允许模块定义
  sourceType: ParseSourceTypeEnum.Module,
  // 支持解析 TypeScript 语法（注意，这里只是可以解析，并不是转换 TypeScript）
  plugins: [ParsePluginEnum.TypeScript],
});

// 转换（Transform) 阶段
traverse(ast, {
  // 访问变量声明标识符
  VariableDeclaration(path) {
    // 将 const 和 let 转换为 var
    path.node.kind = 'var';
  },
  // 访问 TypeScript 类型声明标识符
  TSTypeAnnotation(path) {
    // 移除 TypeScript 的声明类型
    path.remove();
  },
});
```

关于 Babel 中的访问器 API，这里不再过多说明，如果想了解更多信息，可以查看 [Babel 插件手册](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fjamiebuilds%2Fbabel-handbook%2Fblob%2Fmaster%2Ftranslations%2Fzh-Hans%2Fplugin-handbook.md)。除此之外，你可能已经注意到这里的转换逻辑其实可以理解为实现一个简单的 Babel 插件，只是没有封装成 Npm 包。当然，在真正的插件开发开发中，还可以配合 [@babel/types](https://link.juejin.cn/?target=https%3A%2F%2Fbabeljs.io%2Fdocs%2Fen%2Fbabel-types) 工具包进行节点信息的判断处理。

> 温馨提示：这里只是简单的一个 Demo 示例，在真正转换 let、const 等变量声明的过程中，还会遇到处理暂时性死区（Temporal Dead Zone， TDZ）的情况，更多详细信息可以查看官方的插件 [babel-plugin-transform-block-scoping](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fbabel%2Fbabel%2Fblob%2Fmain%2Fpackages%2Fbabel-plugin-transform-block-scoping%2Fsrc%2Findex.js)。

### 6.3 生成（Generate）

Babel 的代码生成过程（AST 到目标代码的转换）主要使用 [@babel/generator](https://link.juejin.cn/?target=https%3A%2F%2Fbabeljs.io%2Fdocs%2Fen%2Fbabel-generator)，如下所示：

```ts
import { parse } from '@babel/parser';
import traverse from '@babel/traverse';
import generate from '@babel/generator';

enum ParseSourceTypeEnum {
  Module = 'module',
  Script = 'script',
  Unambiguous = 'unambiguous',
}

enum ParsePluginEnum {
  Flow = 'flow',
  FlowComments = 'flowComments',
  TypeScript = 'typescript',
  Jsx = 'jsx',
  V8intrinsic = 'v8intrinsic',
}
const source = `let a: string = 1;`;

// 解析（Parser）阶段
const ast = parse(source, {
  // 严格模式下解析并且允许模块定义
  sourceType: ParseSourceTypeEnum.Module,
  // 支持解析 TypeScript 语法（注意，这里只是可以解析，并不是转换 TypeScript）
  plugins: [ParsePluginEnum.TypeScript],
});

// 转换（Transform) 阶段
traverse(ast, {
  // 访问词法规则
  VariableDeclaration(path) {
    path.node.kind = 'var';
  },
	
  // 访问词法规则
  TSTypeAnnotation(path) {
    // 移除 TypeScript 的声明类型
    path.remove();
  },
});

// 生成（Generate）阶段
const { code } = generate(ast);
// code:  var a = 1;
console.log('code: ', code);
```

如果你想了解上述输入源对应的 AST 数据或者尝试自己编译，可以使用工具 [AST Explorer](https://link.juejin.cn/?target=https%3A%2F%2Fastexplorer.net%2F) （也可以使用 Babel 官网自带的 [Try It Out](https://link.juejin.cn/?target=https%3A%2F%2Fbabeljs.io%2Frepl) ），具体如下所示：

<img :src="$withBase('/assets/jsInterview/d20e49a8926d406bba93a6b0769572e6_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

> 温馨提示：上述第三个框是以插件的 API 形式进行调用，如果想了解 Babel 的插件开发，可以查看 [Babel 插件手册 / 编写你的第一个 Babel 插件](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fjamiebuilds%2Fbabel-handbook%2Fblob%2Fmaster%2Ftranslations%2Fzh-Hans%2Fplugin-handbook.md%23toc-writing-your-first-babel-plugin)。

如果你觉得 Babel 的编译过程太过于简单，你可以尝试更高阶的玩法，比如自己设计词法和语法规则从而实现一个简单的编译器（Babel 内置了这些规则），你完全可以不只是做出一个源到源的转换编译器，而是实现一个真正的从 JavaScript （TypeScript） 到机器代码的完整编译器，包括实现中间代码 IR 以及提供机器的运行环境等，这里给出一个可以尝试这种高阶玩法的库包 [antlr4ts](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Ftunnelvisionlabs%2Fantlr4ts)（可以配合交叉编译工具链 [riscv-gnu-toolchain](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Friscv%2Friscv-gnu-toolchain)，gcc编译工具的制作还是非常耗时的）。
