# Introduction

## Overview

Rollup 是一个用于 JavaScript 的模块打包器，它将小段代码编译成更大更复杂的东西，比如库或应用程序。它对包含在 JavaScript 的 ES6 修订版中的代码模块使用新的标准化格式，而不是以前的特殊解决方案，例如 CommonJS 和 AMD。 ES 模块让您可以自由无缝地组合您最喜欢的库中最有用的单个功能。这最终在任何地方都可以实现，但是 Rollup 让你今天就可以做到。

## Installation

```sh
npm install --global rollup
```

这将使 Rollup 可用作全局命令行工具。您也可以在本地安装，请参阅在[本地安装 Rollup](https://rollupjs.org/guide/en/#installing-rollup-locally)。

## Quick start

可以通过带有可选配置文件的[命令行界面](https://rollupjs.org/guide/en/#command-line-reference)或通过其 [JavaScript API](https://rollupjs.org/guide/en/#javascript-api) 使用 Rollup。运行 rollup --help 以查看可用选项和参数。

::: danger 警告
请参阅 [rollup-starter-lib](https://github.com/rollup/rollup-starter-lib) 和 [rollup-starter-app](https://github.com/rollup/rollup-starter-app) 以查看使用 Rollup 的示例库和应用程序项目
:::

这些命令假定应用程序的入口点名为 main.js，并且您希望所有导入都编译到一个名为 bundle.js 的文件中。

<div>
<div title="对于浏览器">

```sh
# compile to a <script> containing a self-executing function ('iife')
rollup main.js --file bundle.js --format iife
```

</div>
<div title="对于 Node.js：">

```sh
# compile to a CommonJS module ('cjs')
rollup main.js --file bundle.js --format cjs
```

</div>
<div title="对于浏览器和 Node.js：">

```sh
# UMD format requires a bundle name
rollup main.js --file bundle.js --format umd --name "myBundle"
```

</div>
</div>

### 产生原因

如果您将项目分成更小的独立部分，开发软件通常会更容易，因为这通常会消除意外的交互并显着降低您需要解决的问题的复杂性，并且首先简单地编写较小的项目不一定是回答。不幸的是，JavaScript 历史上并没有将此功能作为该语言的核心功能。
这最终随着 JavaScript 的 ES6 修订版而改变，其中包括用于导入和导出函数和数据的语法，以便它们可以在不同的脚本之间共享。该规范现已修复，但仅在现代浏览器中实现，并未在 Node.js 中最终确定。 Rollup 允许您使用新的模块系统编写代码，然后将其编译回现有支持的格式，例如 CommonJS 模块、AMD 模块和 IIFE 风格的脚本。这意味着您可以编写面向未来的代码，并且您还可以获得……的巨大好处。

### Tree-Shaking

除了启用 ES 模块的使用外，Rollup 还会静态分析您正在导入的代码，并将排除任何实际未使用的代码。这使您可以在现有工具和模块的基础上进行构建，而无需添加额外的依赖项或增加项目的大小。

例如，对于 CommonJS，必须导入整个工具或库。

```js
// import the entire utils object with CommonJS
const utils = require('./utils');
const query = 'Rollup';
// use the ajax method of the utils object
utils.ajax(`https://api.example.com?search=${query}`).then(handleResponse);
```

使用 ES 模块，我们可以只导入我们需要的一个 ajax 函数，而不是导入整个 utils 对象：

```js
// import the ajax function with an ES6 import statement
import { ajax } from './utils';
const query = 'Rollup';
// call the ajax function
ajax(`https://api.example.com?search=${query}`).then(handleResponse);
```

因为 Rollup 包括最低限度，所以它产生更轻、更快、更简单的库和应用程序。由于这种方法可以使用显式导入和导出语句，因此它比简单地运行自动缩小器来检测编译输出代码中未使用的变量更有效。

### Compatibility

#### 导入 CommonJS

Rollup 可以通过[插件导入](https://github.com/rollup/plugins/tree/master/packages/commonjs)现有的 CommonJS 模块。

#### 发布 ES 模块

为了确保您的 ES 模块可以立即被与 CommonJS 一起使用的工具（例如 Node.js 和 webpack）使用，您可以使用 Rollup 编译为 UMD 或 CommonJS 格式，然后使用包中的 main 属性指向该编译版本。 .json 文件。如果你的 package.json 文件也有 module 字段，ES-module-aware 工具如 Rollup 和 [webpack 2+](https://webpack.js.org/) 将直接[导入 ES 模块版本](https://github.com/rollup/rollup/wiki/pkg.module)。

## Command Line Interface


通常应从命令行使用RollUp。您可以提供一个可选的 Rollup 配置文件来简化命令行使用并启用高级 Rollup 功能。

### Configuration Files

Rollup 配置文件是可选的，但它们功能强大且方便，因此推荐使用。配置文件是一个 ES 模块，它导出具有所需选项的默认对象：

```js
export default {
  input: 'src/main.js',
  output: {
    file: 'bundle.js',
    format: 'cjs'
  }
};
```

通常，它称为 rollup.config.js 并位于项目的根目录中。在幕后，Rollup 通常会在需要之前将此文件及其相关依赖项转换并捆绑到 CommonJS。这样做的好处是您可以与 ES 模块代码库共享代码，同时与 Node 生态系统具有完全的互操作性。

如果要使用Require和Module.Exports将Config写为CommonJS模块，则应将文件扩展名更改为.cjs，这将阻止RollUp尝试转换该文件。此外，如果您在节点13+上，将文件扩展名更改为.mjs还将阻止RollUp从转介IT转移，但将文件导入ES模块。有关更多详细信息，请参阅[使用未转换的配置文件](https://rollupjs.org/guide/en/#using-untranspiled-config-files)以及为什么您可能想要执行此操作。

您还可以使用其他语言进行配置文件，如类型键。要执行此操作，请安装相应的rollup插件，如@ rollup / plugin-typescript，并使用[--configplugin](https://rollupjs.org/guide/en/#--configplugin-plugin)选项：

```sh
rollup --config rollup.config.ts --configPlugin typescript
```

另外看看[Config IntelliSense](https://rollupjs.org/guide/en/#config-intellisense)以获取更多方法，以便在CONFIG文件中使用Typescript键入。

配置文件支持下面列出的选项。有关每个选项的详细信息，请咨询[大型选项列表](https://rollupjs.org/guide/en/#big-list-of-options)：

```js
// rollup.config.js

// can be an array (for multiple inputs)
export default {
  // core input options
  external,
  input, // conditionally required
  plugins,

  // advanced input options
  cache,
  onwarn,
  preserveEntrySignatures,
  strictDeprecations,

  // danger zone
  acorn,
  acornInjectPlugins,
  context,
  moduleContext,
  preserveSymlinks,
  shimMissingExports,
  treeshake,

  // experimental
  experimentalCacheExpiry,
  perf,

  // required (can be an array, for multiple outputs)
  output: {
    // core output options
    dir,
    file,
    format, // required
    globals,
    name,
    plugins,

    // advanced output options
    assetFileNames,
    banner,
    chunkFileNames,
    compact,
    entryFileNames,
    extend,
    footer,
    hoistTransitiveImports,
    inlineDynamicImports,
    interop,
    intro,
    manualChunks,
    minifyInternalExports,
    outro,
    paths,
    preserveModules,
    preserveModulesRoot,
    sourcemap,
    sourcemapExcludeSources,
    sourcemapFile,
    sourcemapPathTransform,
    validate,

    // danger zone
    amd,
    esModule,
    exports,
    externalLiveBindings,
    freeze,
    indent,
    namespaceToStringTag,
    noConflict,
    preferConst,
    sanitizeFileName,
    strict,
    systemNullSetters
  },

  watch: {
    buildDelay,
    chokidar,
    clearScreen,
    skipWrite,
    exclude,
    include
  }
};
```

您可以从配置文件中导出数组，即使在Watch模式下，即使在Watch模式下也可以将数组从多个不相关的输入中构建捆绑包。要使用相同的输入构建不同的捆绑包，可以为每个输入提供一系列输出选项：

```js
// rollup.config.js (building more than one bundle)

export default [
  {
    input: 'main-a.js',
    output: {
      file: 'dist/bundle-a.js',
      format: 'cjs'
    }
  },
  {
    input: 'main-b.js',
    output: [
      {
        file: 'dist/bundle-b1.js',
        format: 'cjs'
      },
      {
        file: 'dist/bundle-b2.js',
        format: 'es'
      }
    ]
  }
];
```

如果要异步地创建配置，Rollup还可以处理解析为对象或数组的承诺。

```js
// rollup.config.js
import fetch from 'node-fetch';
export default fetch('/some-remote-service-or-file-which-returns-actual-config');
```

同样，您也可以执行以下操作：

```js
// rollup.config.js (Promise resolving an array)
export default Promise.all([fetch('get-config-1'), fetch('get-config-2')]);
```

要使用配置文件RollUp，请传递--config或-c标志：

```sh
# pass a custom config file location to Rollup
rollup --config my.config.js

# if you do not pass a file name, Rollup will try to load
# configuration files in the following order:
# rollup.config.mjs -> rollup.config.cjs -> rollup.config.js
rollup --config
```

您还可以导出返回任何上述配置格式的函数。此函数将传递当前命令行参数，以便您可以动态地调整配置以尊重例如。 [--silent](https://rollupjs.org/guide/en/#--silent)。如果您使用Config以配置为前缀，您甚至可以定义自己的命令行选项：

```js
// rollup.config.js
import defaultConfig from './rollup.default.config.js';
import debugConfig from './rollup.debug.config.js';

export default commandLineArgs => {
  if (commandLineArgs.configDebug === true) {
    return debugConfig;
  }
  return defaultConfig;
};
```

如果您现在运行`rollup --config --configdebug`，则将使用调试配置。

默认情况下，命令行参数将始终覆盖从配置文件导出的各个值。如果要更改此行为，则可以通过从`commandlineargs`对象删除它们来使rollup忽略命令行参数：

```js
// rollup.config.js
export default commandLineArgs => {
  const inputBase = commandLineArgs.input || 'main.js';

  // this will make Rollup ignore the CLI argument
  delete commandLineArgs.input;
  return {
    input: 'src/entries/' + inputBase,
    output: {...}
  }
}
```

### Config Intellisense

由于Rollup带有TypeScript的类型，你可以利用IDE的Intellisense与JSDoc类型提示。

```js
// rollup.config.js
/**
 * @type {import('rollup').RollupOptions}
 */
const config = {
  // ...
};

export default config;
```

或者，你可以使用`defineConfig`助手，它应该提供Intellisense而不需要JSDoc注释。

```js
// rollup.config.js
import { defineConfig } from 'rollup';

export default defineConfig({
  // ...
});
```

除了`RollupOptions`和封装这种类型的`defineConfig`帮助器，以下类型也可以证明是有用的。

* `OutputOptions`: 配置文件的输出部分

* `Plugin`: 一个插件对象，它提供了一个名称和一些钩子。所有的钩子都是完全类型化的，以帮助插件的开发。

* `pluginimpl`：将选项对象映射到插件对象的函数。大多数公共rollup插件遵循此模式。

您还可以通过[--configplugin](https://rollupjs.org/guide/en/#--configplugin-plugin)选项直接在键入版中编写CONFIC。

### Differences to the JavaScript API

虽然配置文件提供了一种配置RollUp的简单方法，但它们还会限制如何调用和配置RollUp。特别是如果您将RollUp到另一个构建工具或想要将其集成到高级构建过程中，则可以更好地从脚本上编程地调用RollUp。

如果要从配置文件切换到在某些时候使用[JavaScript API](https://rollupjs.org/guide/en/#javascript-api)，则会有一些重要的差异：

* 使用JavaScript API时，将传递给Rollup.rollup必须是一个对象，不能以承诺或函数包裹。

* 您无法再使用一系列配置。相反，您应该为每组`InputOptions`运行Rollup.rollup.rollup。

* 输出选项将被忽略。相反，对于每组输出选项，您应该运行`bundle.generate(outputOptions)`或`bundle.write(outputOptions)`。

### Loading a configuration from a Node package

对于互操作性，Rollup还支持从安装到`node_modules`的包中加载配置文件：

```sh
# this will first try to load the package "rollup-config-my-special-config";
# if that fails, it will then try to load "my-special-config"
rollup --config node:my-special-config
```

### Using untranspiled config files

默认情况下，Rollup将期望配置文件是eS模块，并将其发送并转换为它们，并在要求它们之前向CommonJS进行传输。这是一个快速的过程，并且具有易于在配置和ES模块代码库之间共享代码的优点。如果要将配置写入CommonJs，则可以使用`.cjs`扩展名来跳过此过程：

```js
// rollup.config.cjs
module.exports = {
  input: 'src/main.js',
  output: {
    file: 'bundle.js',
    format: 'cjs'
  }
};
```

如果您想不仅从命令行使用CONFIC文件，而且可以从以编程方式从您的自定义脚本使用，但可能是相关的。

另一方面，如果你至少使用Node 13并且在`package.json`文件中有 `"type"`: `"模块"`，Rollup的转译会阻止你的配置文件导入本身是ES模块的包。在这种情况下，将你的文件扩展名改为.mjs将指示Rollup将你的配置直接作为ES模块导入。然而，请注意，这是专门针对Node 13+的；在更早的Node版本中，`.mjs`的处理方式与`.js`相同。

在**Node 13+**上使用`.mjs`时，有一些潜在的麻烦。

* 您只能从CommonJS插件获取默认导出

* 你可能无法导入JSON文件，如你的package.json文件。有两种方法可以解决这个问题。

  * 通过以下方式运行Rollup CLI

  ```sh
  node --experimental-json-modules ./node_modules/.bin/rollup --config
  ```

  * 创建一个需要JSON文件的CommonJS包装器：

  ```js
  // load-package.cjs
  module.exports = require('./package.json');

  // rollup.config.mjs
  import pkg from './load-package.cjs';
  ...
  ```

### Command line flags

许多选项都有对应的命令行。在这些情况下，如果你使用的是配置文件，那么这里传递的任何参数都将覆盖配置文件的内容。这是一个所有支持的选项的列表。

```
-c, --config <filename> 使用这个配置文件（如果参数被使用，但值没有指定
未指定，默认为rollup.config.js)
-d, --dir <dirname> 块的目录（如果没有，打印到stdout）。
-e, --external <ids> 逗号分隔的要排除的模块ID列表
-f, --format <format> 输出的类型(amd, cjs, es, iife, umd, system)
-g, --globals <pairs> 逗号分隔的 "moduleID:Global "配对列表
-h, --help 显示此帮助信息
-i, --input <filename> 输入（替代<entry file>）。
-m, --sourcemap 生成源码图（`-m inline`表示内联图
-n, --name <名称> 用于UMD输出的名称
-o, --file <output>单个输出文件（如果没有，则打印到stdout）。
-p, --plugin <plugin> 使用指定的插件（可以重复）。
-v, --version 显示版本号
-w, --watch 观察软件包中的文件，并在发生变化时重新构建
--amd.id <id> AMD模块的ID（默认为匿名）。
--amd.autoId 根据块的名称生成AMD的ID
--amd.basePath <prefix> 在自动生成的AMD ID前加上的路径
--amd.define <name> 用来代替`define`的函数。
--assetFileNames <pattern> 排放资产的名称模式
--banner <text> 在bundle顶部插入代码（在wrapper之外）。
--chunkFileNames <pattern> 排放的二级块的名称模式
--compact 缩减包装器代码
--context <variable> 指定顶层的`this`值
--entryFileNames <pattern> 排放的入口块的名称模式
--environment <values> 传递给配置文件的设置（见示例）。
--no-esModule 不添加__esModule属性
--exports <mode> 指定输出模式（自动、默认、命名、无）。
--extend 扩展由 --name 定义的全局变量
--no-externalLiveBindings 不生成支持实时绑定的代码
--failAfterWarnings 如果构建过程中产生了警告，则以错误退出
--footer <text> 在bundle的末尾插入代码（在wrapper之外）。
--no-freeze 不冻结命名空间对象
--no-hoist TransitiveImports 不把横向导入的内容挂到入口块中。
--no-indent 不要缩进结果。
--no-interop 不包括互操作块
--inlineDynamicImports 当使用动态导入时，创建单个捆绑包。
--intro <text> 在bundle的顶部插入代码（在wrapper里面）。
--minifyInternalExports 强制或禁止对内部导出文件进行最小化处理
--namespaceToStringTag 为命名空间创建适当的`.toString`方法
--noConflict 为UMD globals生成一个noConflict方法
--outro <text> 在bundle的末尾插入代码（在wrapper内）。
--preferConst 使用`const`而不是`var`进行输出
--no-preserveEntrySignatures 避免使用入口点的facade chunks。
--preserveModules 保留模块结构
--preserveModulesRoot 将保留的模块放在根级的这个路径下
--preserveSymlinks 在解析文件时不遵循符号链接。
--no-sanitizeFileName 不替换文件名中的无效字符
--shimMissingExports 为丢失的出口创建shim变量。
--silent 不打印警告信息
--sourcemapExcludeSources 不在源码图中包括源代码
--sourcemapFile <file> 为源码地图指定捆绑位置
--stdin=ext 指定用于stdin输入的文件扩展名
--no-stdin 不要从stdin读取"-"。
--no-strict 不要在生成的模块中发出`"use strict";`。
--strictDeprecations 对已废弃的功能抛出错误
--systemNullSetters 用 "null "替换空的SystemJS设置器。
--no-treeshake 禁用树形抖动优化功能
--no-treeshake.annotations 忽略纯调用注释
--no-treeshake.moduleSideEffects 假设模块没有副作用
--no-treeshake.propertyReadSideEffects 忽略属性访问的副作用
--no-treeshake.tryCatchDeoptimization 不关闭尝试抓取树状结构的功能
--no-treeshake.unknownGlobalSideEffects 假设未知的globals不会抛出
--waitForBundleInput 等待bundle输入文件
--watch.buildDelay <number> 节约手表重建的时间
--no-watch.clearScreen 重建时不清除屏幕
--watch.skipWrite 观察时不写文件到磁盘。
--watch.exclude <files> 排除被监视的文件
--watch.include <files> 限制监视到指定的文件
--validate 验证输出
```

下面列出的标志只能通过命令行界面使用。所有其他标志都对应并覆盖它们的配置文件对应物，详见[选项大列表](https://rollupjs.org/guide/en/#big-list-of-options)。

#### -h/--help

打印帮助文档。

#### -p (plugin), --plugin (plugin)

使用指定的插件。有几种方法可以在此指定插件：

* 通过相对路径：

```sh
rollup -i input.js -f es -p ./my-plugin.js
```

该文件应导出返回Plugin对象的函数。

* 通过安装在本地或全局`Node_Modules`文件夹中的插件的名称：

```sh
rollup -i input.js -f es -p @rollup/plugin-node-resolve
```

如果插件名称无法以`Rollup-plugin-`or `@rollup / plugin--`，RollUp将自动尝试添加这些前缀：

```sh
rollup -i input.js -f es -p node-resolve
```

* 通过内联实现：

```sh
rollup -i input.js -f es -p '{transform: (c, i) => `/* ${JSON.stringify(i)} */\n${c}`}'
```

如果要加载多个插件，可以重复该选项或提供逗号分隔的名称列表：

```sh
rollup -i input.js -f es -p node-resolve -p commonjs,json
```

默认情况下，将调用插件函数，没有参数来创建插件。但是，您也可以传递自定义参数：

```sh
rollup -i input.js -f es -p 'terser={output: {beautify: true, indent_level: 2}}'
```

#### --configPlugin (plugin)

允许将RollUp插件指定要转换或以其他方式控制配置文件的解析。主要好处是它允许您使用非JavaScript配置文件。例如，以下内容将允许您在输入的类型中编写配置，只要您安装了`@rollup/plugin-typescript`：

```sh
rollup --config rollup.config.ts --configPlugin @rollup/plugin-typescript
```

它支持与[-plugin](https://rollupjs.org/guide/en/#-p-plugin---plugin-plugin)选项相同的语法i.e.，您可以多次指定选项，可以省略@ rollup / plugin-前缀并只需编写打印键，您可以通过= {...}指定插件选项。

#### -v/--version

打印安装的版本号。

#### -w/--watch

当其源文件更改磁盘时重建捆绑包。

注意：在观察模式下，***ROLLUP_WATCH***环境变量将被Rollup的命令行界面设置为 ***"true"***，并且可以被其他进程检查。插件应该检查[this.meta.watchMode](https://rollupjs.org/guide/en/#thismeta-rollupversion-string-watchmode-boolean)，它与命令行界面无关。

#### --silent

不要向控制台打印警告。如果你的配置文件包含一个onwarn处理程序，这个处理程序仍然会被调用。要手动防止这种情况，你可以在配置文件中访问命令行选项，如[配置文件](https://rollupjs.org/guide/en/#configuration-files)末尾所述。

#### --failAfterWarnings

构建完成后，如果发生任何警告，则以错误退出构建。

#### --environment (values)

通过`process.ENV`向配置文件传递额外的设置。

```sh
rollup -c --environment INCLUDE_DEPS,BUILD:production
```

将设置 `process.env.INCLUDE_DEPS === 'true'` 和 `process.env.BUILD === 'production'`。你可以多次使用这个选项。在这种情况下，随后设置的变量将覆盖之前的定义。这使得你可以在`package.json`脚本中覆盖环境变量。

如果您通过以下方式调用此脚本：

```sh
npm run build -- --environment BUILD:development
```

那么配置文件将收到 `process.env.INCLUDE_DEPS === 'true'` 和 `process.env.BUILD === 'development'`。

#### --waitForBundleInput

如果其中一个入口点文件不可用，它不会抛出一个错误。相反，它将等待，直到所有的文件都存在才开始构建。这很有用，特别是在观察模式下，当Rollup正在消耗另一个进程的输出时。

#### --stdin=ext

当从stdin读取内容时，指定一个虚拟文件扩展名。默认情况下，Rollup将使用虚拟文件名--对于从stdin读取的内容没有扩展名。然而，一些插件依靠文件扩展名来决定它们是否应该处理一个文件。请参见[从stdin读取文件](https://rollupjs.org/guide/en/#reading-a-file-from-stdin)。

#### --no-stdin

不要从stdin中读取文件。设置这个标志可以防止向Rollup输送内容，并确保Rollup将-和-.[ext]解释为普通的文件名，而不是将这些解释为stdin的名称。[参见从stdin读取文件](https://rollupjs.org/guide/en/#reading-a-file-from-stdin)。

### Reading a file from stdin

当使用命令行界面时，Rollup也可以从stdin读取内容。

```sh
echo "export const foo = 42;" | rollup --format cjs --file out.js
```

当这个文件包含导入时，Rollup会尝试相对于当前工作目录来解决。当使用配置文件时，Rollup只会使用stdin作为入口点，如果入口点的文件名是-。要从stdin读取一个非入口点文件，只需调用-，这是内部用来引用`stdin`的文件名。即

```js
import foo from '-';
```

在任何文件中都会提示Rollup尝试从stdin中读取导入的文件，并将默认的出口分配给foo。你可以向Rollup传递[--no-stdin](https://rollupjs.org/guide/en/#--no-stdin) CLI标志，将--作为一个普通的文件名来处理。

由于一些插件依靠文件扩展名来处理文件，你可以通过`-stdin=ext`为stdin指定一个文件扩展名，其中ext是所需的扩展名。在这种情况下，虚拟文件名将是`-.ext`。

```sh
echo '{"foo": 42, "bar": "ok"}' | rollup --stdin=json -p json
```

JavaScript API会一直把`-`和`-.ext`当作普通的文件名。

## JavaScript API

Rollup提供了一个可以从Node.js使用的JavaScript API。你很少需要使用它，而应该使用命令行API，除非你正在扩展Rollup本身或使用它做一些深奥的事情，比如以编程方式生成捆绑包。

### rollup.rollup

`rollup.rollup`函数接收一个输入选项对象作为参数，并返回一个Promise，该Promise可解析为一个具有各种属性和方法的bundle对象，如下图所示。在这一步骤中，Rollup将构建模块图并执行树形摇动，但不会产生任何输出。

在一个`bundle`对象上，你可以用不同的输出选项对象多次调用`bundle.generate`来在内存中生成不同的bundle。如果你直接想把它们写到磁盘上，请使用`bundle.write`代替。

一旦你完成了对bundle对象的处理，你应该调用`bundle.close()`，这将让插件通过[closeBundle](https://rollupjs.org/guide/en/#closebundle)钩子清理其外部进程或服务。

```js
const rollup = require('rollup');

// see below for details on the options
const inputOptions = {...};
const outputOptions = {...};

async function build() {
  // create a bundle
  const bundle = await rollup.rollup(inputOptions);

  console.log(bundle.watchFiles); // an array of file names this bundle depends on

  // generate output specific code in-memory
  // you can call this function multiple times on the same bundle object
  const { output } = await bundle.generate(outputOptions);

  for (const chunkOrAsset of output) {
    if (chunkOrAsset.type === 'asset') {
      // For assets, this contains
      // {
      //   fileName: string,              // the asset file name
      //   source: string | Uint8Array    // the asset source
      //   type: 'asset'                  // signifies that this is an asset
      // }
      console.log('Asset', chunkOrAsset);
    } else {
      // For chunks, this contains
      // {
      //   code: string,                  // the generated JS code
      //   dynamicImports: string[],      // external modules imported dynamically by the chunk
      //   exports: string[],             // exported variable names
      //   facadeModuleId: string | null, // the id of a module that this chunk corresponds to
      //   fileName: string,              // the chunk file name
      //   implicitlyLoadedBefore: string[]; // entries that should only be loaded after this chunk
      //   imports: string[],             // external modules imported statically by the chunk
      //   importedBindings: {[imported: string]: string[]} // imported bindings per dependency
      //   isDynamicEntry: boolean,       // is this chunk a dynamic entry point
      //   isEntry: boolean,              // is this chunk a static entry point
      //   isImplicitEntry: boolean,      // should this chunk only be loaded after other chunks
      //   map: string | null,            // sourcemaps if present
      //   modules: {                     // information about the modules in this chunk
      //     [id: string]: {
      //       renderedExports: string[]; // exported variable names that were included
      //       removedExports: string[];  // exported variable names that were removed
      //       renderedLength: number;    // the length of the remaining code in this module
      //       originalLength: number;    // the original length of the code in this module
      //       code: string | null;       // remaining code in this module
      //     };
      //   },
      //   name: string                   // the name of this chunk as used in naming patterns
      //   referencedFiles: string[]      // files referenced via import.meta.ROLLUP_FILE_URL_<id>
      //   type: 'chunk',                 // signifies that this is a chunk
      // }
      console.log('Chunk', chunkOrAsset.modules);
    }
  }

  // or write the bundle to disk
  await bundle.write(outputOptions);

  // closes the bundle
  await bundle.close();
}

build();
```

#### inputOptions object

`inputOptions`对象可以包含以下属性（关于这些属性的完整细节，请参见[选项大列表](https://rollupjs.org/guide/en/#big-list-of-options)）。

```js
const inputOptions = {
  // core input options
  external,
  input, // conditionally required
  plugins,

  // advanced input options
  cache,
  onwarn,
  preserveEntrySignatures,
  strictDeprecations,

  // danger zone
  acorn,
  acornInjectPlugins,
  context,
  moduleContext,
  preserveSymlinks,
  shimMissingExports,
  treeshake,

  // experimental
  experimentalCacheExpiry,
  perf
};
```

#### outputOptions object

`outputOptions`对象可以包含以下属性（关于这些属性的完整细节，请参见[选项大列表](https://rollupjs.org/guide/en/#big-list-of-options)）。

```js
const outputOptions = {
  // core output options
  dir,
  file,
  format, // required
  globals,
  name,
  plugins,

  // advanced output options
  assetFileNames,
  banner,
  chunkFileNames,
  compact,
  entryFileNames,
  extend,
  externalLiveBindings,
  footer,
  hoistTransitiveImports,
  inlineDynamicImports,
  interop,
  intro,
  manualChunks,
  minifyInternalExports,
  outro,
  paths,
  preserveModules,
  preserveModulesRoot,
  sourcemap,
  sourcemapExcludeSources,
  sourcemapFile,
  sourcemapPathTransform,
  validate,

  // danger zone
  amd,
  esModule,
  exports,
  freeze,
  indent,
  namespaceToStringTag,
  noConflict,
  preferConst,
  sanitizeFileName,
  strict,
  systemNullSetters
};
```

### rollup.watch

Rollup还提供了一个`rollup.watch`函数，当它检测到个别模块在磁盘上发生变化时，会重建你的捆绑包。当你从命令行中用`--watch`标志运行Rollup时，它被内部使用。注意，当通过JavaScript API使用观察模式时，你有责任在响应`BUNDLE_END`事件时调用`event.result.close()`，以允许插件清理[closeBundle](https://rollupjs.org/guide/en/#closebundle)钩中的资源，见下文。

```js
const rollup = require('rollup');

const watchOptions = {...};
const watcher = rollup.watch(watchOptions);

watcher.on('event', event => {
  // event.code can be one of:
  //   START        — the watcher is (re)starting
  //   BUNDLE_START — building an individual bundle
  //                  * event.input will be the input options object if present
  //                  * event.output contains an array of the "file" or
  //                    "dir" option values of the generated outputs
  //   BUNDLE_END   — finished building a bundle
  //                  * event.input will be the input options object if present
  //                  * event.output contains an array of the "file" or
  //                    "dir" option values of the generated outputs
  //                  * event.duration is the build duration in milliseconds
  //                  * event.result contains the bundle object that can be
  //                    used to generate additional outputs by calling
  //                    bundle.generate or bundle.write. This is especially
  //                    important when the watch.skipWrite option is used.
  //                  You should call "event.result.close()" once you are done
  //                  generating outputs, or if you do not generate outputs.
  //                  This will allow plugins to clean up resources via the
  //                  "closeBundle" hook.
  //   END          — finished building all bundles
  //   ERROR        — encountered an error while bundling
  //                  * event.error contains the error that was thrown
  //                  * event.result is null for build errors and contains the
  //                    bundle object for output generation errors. As with
  //                    "BUNDLE_END", you should call "event.result.close()" if
  //                    present once you are done.
});

// This will make sure that bundles are properly closed after each run
watcher.on('event', ({ result }) => {
  if (result) {
  	result.close();
  }
});

// stop watching
watcher.close();
```

#### watchOptions

`watchOptions`参数是一个配置（或一个配置数组），你将从一个配置文件中导出。

```js
const watchOptions = {
  ...inputOptions,
  output: [outputOptions],
  watch: {
    buildDelay,
    chokidar,
    clearScreen,
    skipWrite,
    exclude,
    include
  }
};
```

关于`inputOptions`和`outputOptions`的细节，见上文，或者[查阅大的选项列表](https://rollupjs.org/guide/en/#big-list-of-options)，了解关于`chokidar`、`include`和`exclude`的信息。

#### Programmatically loading a config file

为了帮助生成这样的配置，rollup通过一个单独的入口点公开了它用来在其命令行界面中加载配置文件的帮助器。这个帮助器接收一个已解决的`fileName`和一个包含命令行参数的对象。

```js
const loadConfigFile = require('rollup/dist/loadConfigFile');
const path = require('path');
const rollup = require('rollup');

// load the config file next to the current script;
// the provided config object has the same effect as passing "--format es"
// on the command line and will override the format of all outputs
loadConfigFile(path.resolve(__dirname, 'rollup.config.js'), { format: 'es' }).then(
  async ({ options, warnings }) => {
    // "warnings" wraps the default `onwarn` handler passed by the CLI.
    // This prints all warnings up to this point:
    console.log(`We currently have ${warnings.count} warnings`);

    // This prints all deferred warnings
    warnings.flush();

    // options is an array of "inputOptions" objects with an additional "output"
    // property that contains an array of "outputOptions".
    // The following will generate all outputs for all inputs, and write them to disk the same
    // way the CLI does it:
    for (const optionsObj of options) {
      const bundle = await rollup.rollup(optionsObj);
      await Promise.all(optionsObj.output.map(bundle.write));
    }

    // You can also pass this directly to "rollup.watch"
    rollup.watch(options);
  }
);
```

## ES Module Syntax

以下是[ES2015规范](https://www.ecma-international.org/ecma-262/6.0/)中定义的模块行为的轻量级参考，因为正确理解导入和导出语句对成功使用Rollup至关重要。

### Importing

导入的值不能被重新分配，尽管导入的对象和数组可以被突变（并且导出模块和任何其他导入者都会受到突变的影响）。在这方面，它们的行为类似于`常量`声明。

#### Named Imports

从源模块导入一个特定的项目，并使用其原始名称。

```js
import { something } from './module.js';
```

从源模块导入一个特定的项目，导入时指定一个自定义的名称。

```js
import { something as somethingElse } from './module.js';
```

#### Namespace Imports

将源模块的所有内容导入一个对象，该对象将源模块的所有命名出口作为属性和方法公开。

```js
import * as module from './module.js';
```

上面的例子中的东西将作为一个属性附加到导入的对象上，例如`module.something`。如果存在，可以通过`module.default`访问默认导出。

#### Default Import

导入源模块的**默认导出**。

```js
import something from './module.js';
```

#### Empty Import

加载模块代码，但不要让任何新对象可用。

```js
import './module.js';
```

这对polyfills很有用，或者当导入代码的主要目的是为了混用原型时。

#### Dynamic Import

使用[动态导入 API](https://github.com/tc39/proposal-dynamic-import#import) 导入模块。

```js
import('./modules.js').then(({ default: DefaultExport, NamedExport }) => {
  // do something with modules.
});
```

这对代码拆分应用和即时使用模块很有用。

### Exporting

#### Named exports

导出先前声明的值：

```js
const something = true;
export { something };
```

重命名导出：

```js
export { something as somethingElse };
```

声明后立即导出价值：

```js
// this works with `var`, `let`, `const`, `class`, and `function`
export const something = true;
```

#### Default Export

输出一个单一的值作为源模块的默认出口。

```js
export default something;
```

只有您的源模块只有一个导出，才会建议使用此操作。

在同一模块中混合默认和命名导出的惯例是不好的，但规范允许。

### How bindings work

ES模块导出的是活的绑定，而不是值，所以值可以在最初导入后按照[这个演示](https://rollupjs.org/repl/?shareable=JTdCJTIybW9kdWxlcyUyMiUzQSU1QiU3QiUyMm5hbWUlMjIlM0ElMjJtYWluLmpzJTIyJTJDJTIyY29kZSUyMiUzQSUyMmltcG9ydCUyMCU3QiUyMGNvdW50JTJDJTIwaW5jcmVtZW50JTIwJTdEJTIwZnJvbSUyMCcuJTJGaW5jcmVtZW50ZXIuanMnJTNCJTVDbiU1Q25jb25zb2xlLmxvZyhjb3VudCklM0IlNUNuaW5jcmVtZW50KCklM0IlNUNuY29uc29sZS5sb2coY291bnQpJTNCJTIyJTdEJTJDJTdCJTIybmFtZSUyMiUzQSUyMmluY3JlbWVudGVyLmpzJTIyJTJDJTIyY29kZSUyMiUzQSUyMmV4cG9ydCUyMGxldCUyMGNvdW50JTIwJTNEJTIwMCUzQiU1Q24lNUNuZXhwb3J0JTIwZnVuY3Rpb24lMjBpbmNyZW1lbnQoKSUyMCU3QiU1Q24lNUN0Y291bnQlMjAlMkIlM0QlMjAxJTNCJTVDbiU3RCUyMiU3RCU1RCUyQyUyMm9wdGlvbnMlMjIlM0ElN0IlMjJmb3JtYXQlMjIlM0ElMjJjanMlMjIlMkMlMjJnbG9iYWxzJTIyJTNBJTdCJTdEJTJDJTIybW9kdWxlSWQlMjIlM0ElMjIlMjIlMkMlMjJuYW1lJTIyJTNBJTIybXlCdW5kbGUlMjIlN0QlMkMlMjJleGFtcGxlJTIyJTNBbnVsbCU3RA==)进行更改。

<div>
<div title="incrementer.js">

```js
// incrementer.js
export let count = 0;

export function increment() {
  count += 1;
}
```

</div>
<div title="main.js">

```js
// main.js
import { count, increment } from './incrementer.js';

console.log(count); // 0
increment();
console.log(count); // 1

count += 1; // Error — only incrementer.js can change this
```

</div>
</div>

## Tutorial

* [Creating Your First Bundle]()

* [Using Config Files]()

* [Installing Rollup locally]()

* [Using plugins]()

* [Using output plugins]()

* [Code Splitting]()

### Creating Your First Bundle

在我们开始之前，你需要安装[Node.js](https://nodejs.org/)，以便你可以使用[NPM](https://npmjs.com/)。你还需要知道如何访问你机器上的[命令行](https://www.codecademy.com/learn/learn-the-command-line)。

使用Rollup的最简单方法是通过命令行界面（或CLI）。现在，我们将在全局范围内安装它（稍后我们将学习如何在你的项目中本地安装它，以便你的构建过程是可移植的，但先不要担心这个问题）。在命令行中键入以下内容。

```sh
npm install rollup --global
# or `npm i rollup -g` for short
```

您现在可以运行rollup命令。尝试一下！

```sh
rollup
```

由于没有传递参数，Rollup打印出使用说明。这与运行`rollup --help`或`rollup -h`相同。

让我们创建一个简单的项目：

```sh
mkdir -p my-rollup-project/src
cd my-rollup-project
```

首先，我们需要一个入口点。将其粘贴到一个名为 src/main.js 的新文件中。

```js
// src/main.js
import foo from './foo.js';
export default function () {
  console.log(foo);
}
```

然后，让我们创建我们的入口点导入的`foo.js`模块：

```js
// src/foo.js
export default 'hello world!';
```

现在我们已准备好创建一个捆绑包：

```sh
rollup src/main.js -f cjs
```

`-f`选项（`--format`的缩写）指定了我们要创建的是哪种捆绑包--在本例中是CommonJS（将在Node.js中运行）。因为我们没有指定输出文件，它将被直接打印到`stdout`。

```js
'use strict';

const foo = 'hello world!';

const main = function () {
  console.log(foo);
};

module.exports = main;
```

您可以将捆绑包保存为如此：

```sh
rollup src/main.js -o bundle.js -f cjs
```

(你也可以做`rollup src/main.js -f cjs > bundle.js`，但正如我们稍后看到的，如果你要生成源代码地图，这就不那么灵活了)。

尝试运行代码：

```bash
node
> var myBundle = require('./bundle.js');
> myBundle();
'hello world!'
```

恭喜你！你已经用Rollup创建了你的第一个包。

### Using Config Files

到目前为止，情况还不错，但当我们开始添加更多的选项时，打出命令就变得有点麻烦了。

为了节省重复劳动，我们可以创建一个包含所有我们需要的选项的配置文件。配置文件是用JavaScript编写的，比原始CLI更灵活。

在项目根部创建一个名为`rollup.config.js`的文件，并添加以下代码。

```js
// rollup.config.js
export default {
  input: 'src/main.js',
  output: {
    file: 'bundle.js',
    format: 'cjs'
  }
};
```

(注意，你可以使用CJS模块，因此`module.exports = {/* config */}`)

要使用配置文件，我们使用`--config`或`-c`标志：

```bash
rm bundle.js # so we can check the command works!
rollup -c
```

你可以用相应的命令行选项来覆盖配置文件中的任何选项。

```bash
rollup -c -o bundle-2.js # `-o` is equivalent to `--file` (formerly "output")
```

注意：Rollup本身会处理配置文件，这就是为什么我们能够使用`导出的默认语法`--代码没有被Babel或类似的东西转译，所以你只能使用你所运行的Node.js版本所支持的ES2015特性。

如果你愿意，你可以指定一个不同于默认`rollup.config.js`的配置文件。

```bash
rollup --config rollup.config.dev.js
rollup --config rollup.config.prod.js
```

### Installing Rollup locally

当在团队或分布式环境中工作时，将Rollup作为一个本地依赖项添加是明智的。在本地安装Rollup可以避免要求多个贡献者分别安装Rollup的额外步骤，并确保所有贡献者使用相同版本的Rollup。

要使用NPM本地安装汇总：

```bash
npm install rollup --save-dev
```

或用yarn：

```sh
yarn -D add rollup
```

安装后，Rollup可以在你的项目的根目录下运行。

```sh
npx rollup --config
```

或用yarn：

```sh
yarn rollup --config
```

一旦安装完毕，通常的做法是在`package.json`中添加一个单一的构建脚本，为所有贡献者提供一个方便的命令。 例如

```json
{
  "scripts": {
    "build": "rollup --config"
  }
}
```

注意：一旦安装到本地，NPM和Yarn都会解析依赖的bin文件，并在从包脚本调用时执行Rollup。

### Using plugins

到目前为止，我们已经从一个入口点和一个通过相对路径导入的模块创建了一个简单的捆绑程序。当你建立更复杂的软件包时，你往往需要更多的灵活性--导入用NPM安装的模块，用Babel编译代码，用JSON文件工作等等。

为此，我们使用插件，在捆绑过程的关键点上改变Rollup的行为。在Rollup Awesome List上[有一个插件列表](https://github.com/rollup/awesome)。

在本教程中，我们将使用[@rollup/plugin-json](https://github.com/rollup/plugins/tree/master/packages/json)，它允许Rollup从JSON文件导入数据。

在项目根部创建一个名为`package.json`的文件，并添加以下内容。

```json
{
  "name": "rollup-tutorial",
  "version": "1.0.0",
  "scripts": {
    "build": "rollup -c"
  }
}
```

将@rollup/plugin-json安装为开发依赖项。

```sh
npm install --save-dev @rollup/plugin-json
```

（我们正在使用`--save-dev`而不是`--save`，因为我们的代码实际上并没有依赖于运行时的插件 - 只有在我们构建捆绑包时才依赖于插件。）

更新你的`src/main.js`文件，使其从`package.json`而不是`src/foo.js`导入。

```js
// src/main.js
import { version } from '../package.json';

export default function () {
  console.log('version ' + version);
}
```

编辑您的`Rollup.config.js`文件以包含JSON插件：

```js
// rollup.config.js
import json from '@rollup/plugin-json';

export default {
  input: 'src/main.js',
  output: {
    file: 'bundle.js',
    format: 'cjs'
  },
  plugins: [json()]
};
```

用`npm run build`运行Rollup。结果应该是这样的。

```js
'use strict';

var version = '1.0.0';

function main() {
  console.log('version ' + version);
}

module.exports = main;
```

注意：只有我们真正需要的数据被导入`--name`和`devDependencies`以及`package.json`的其他部分被忽略。这就是**树状结构的作用**。

### Using output plugins

一些插件也可以专门应用于某些输出。关于特定输出的插件能做什么的技术细节，请看[插件钩子](https://rollupjs.org/guide/en/#build-hooks)。简而言之，那些插件只能在Rollup的主要分析完成后修改代码。如果一个不兼容的插件被用作输出特定插件，Rollup会发出警告。一个可能的用例是对在浏览器中使用的包进行最小化。

让我们扩展前面的例子，以提供一个减化的构建和非减化的构建。为此，我们安装`rollup-plugin-terser`。

```sh
npm install --save-dev rollup-plugin-terser
```

编辑你的`rollup.config.js`文件，添加第二个最小化的输出。作为格式，我们选择`iife`。这种格式包装了代码，以便它可以通过浏览器中的脚本标签来消费，同时避免与其他代码进行不必要的交互。由于我们有一个输出，我们需要提供一个全局变量的名字，这个变量将由我们的bundle创建，这样其他代码就可以通过这个变量访问我们的输出。

```js
// rollup.config.js
import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/main.js',
  output: [
    {
      file: 'bundle.js',
      format: 'cjs'
    },
    {
      file: 'bundle.min.js',
      format: 'iife',
      name: 'version',
      plugins: [terser()]
    }
  ],
  plugins: [json()]
};
```

除了`bundle.js`，Rollup现在会创建第二个文件`bundle.min.js`。

```js
var version = (function () {
  'use strict';
  var n = '1.0.0';
  return function () {
    console.log('version ' + n);
  };
})();
```

### Code Splitting

对于代码分割，有些情况下，Rollup会自动将代码分割成几块，比如动态加载或多个入口点，还有一种方法是通过[output.manualChunks](https://rollupjs.org/guide/en/#outputmanualchunks)选项明确告诉Rollup哪些模块要分割成独立的几块。

为了使用代码拆分功能来实现懒惰的动态加载（一些导入的模块只在执行函数后才被加载），我们回到原来的例子，修改 `src/main.js`，动态加载 `src/foo.js` 而不是静态加载。

```js
// src/main.js
export default function () {
  import('./foo.js').then(({ default: foo }) => console.log(foo));
}
```

Rollup将使用动态导入来创建一个单独的块，只在需要时加载。为了让Rollup知道在哪里放置第二个数据块，我们没有使用`--file`选项，而是使用`--dir`选项设置了一个要输出的文件夹。

```sh
rollup src/main.js -f cjs -d dist
```

这将创建一个文件夹`dist`，包含两个文件，`main.js`和`chunk-[hash].js`，其中`[hash]`是一个基于内容的哈希字符串。你可以通过指定[output.chunkFileNames](https://rollupjs.org/guide/en/#outputchunkfilenames)和[output.entryFileNames](https://rollupjs.org/guide/en/#outputentryfilenames)选项提供你自己的命名模式。

你仍然可以像以前一样运行你的代码，有相同的输出，尽管速度稍慢，因为只有当我们第一次调用导出的函数时，才会开始加载和解析`./foo.js`。

```sh
node -e "require('./dist/main.js')()"
```

如果我们不使用`-dir`选项，Rollup会再次将块打印到stdout，并添加注释以突出块的边界。

```js
//→ main.js:
'use strict';

function main() {
  Promise.resolve(require('./chunk-b8774ea3.js')).then(({ default: foo }) => console.log(foo));
}

module.exports = main;

//→ chunk-b8774ea3.js:
('use strict');

var foo = 'hello world!';

exports.default = foo;
```

如果要在使用时才能加载和解析等开销大的功能，这将是有用的。

代码拆分的另一个用途是能够指定几个共享某些依赖关系的入口点。我们再次扩展我们的例子，添加第二个入口点 `src/main2.js`，它静态地导入 `src/foo.js`，就像我们在原始例子中做的那样。

```js
// src/main2.js
import foo from './foo.js';
export default function () {
  console.log(foo);
}
```

如果我们向rollup提供两个入口点，就会创建三个块。

```sh
rollup src/main.js src/main2.js -f cjs
```

将输出

```js
//→ main.js:
'use strict';

function main() {
  Promise.resolve(require('./chunk-b8774ea3.js')).then(({ default: foo }) => console.log(foo));
}

module.exports = main;

//→ main2.js:
('use strict');

var foo_js = require('./chunk-b8774ea3.js');

function main2() {
  console.log(foo_js.default);
}

module.exports = main2;

//→ chunk-b8774ea3.js:
('use strict');

var foo = 'hello world!';

exports.default = foo;
```

注意这两个入口点是如何导入同一个共享块的。Rollup不会重复代码，而是创建额外的块，只加载必要的最低限度。同样，通过`-dir`选项将把文件写到磁盘上。

你可以通过本地ES模块、AMD加载器或SystemJS为浏览器构建相同的代码。

例如，使用`-f es`进行本机模块：

<div>
<div title="cli">

```sh
rollup src/main.js src/main2.js -f es -d dist
```

</div>
<div title="html">

```html
<!DOCTYPE html>
<script type="module">
  import main2 from './dist/main2.js';
  main2();
</script>
```

</div>
</div>

对于SystemJS，用`-f system`。

```sh
rollup src/main.js src/main2.js -f system -d dist
```

安装SystemJS Via.

```sh
npm install --save-dev systemjs
```

然后根据需要在一个HTML页面中加载任一或两个入口点。

```html
<!DOCTYPE html>
<script src="node_modules/systemjs/dist/s.min.js"></script>
<script>
  System.import('./dist/main2.js').then(({ default: main }) => main());
</script>
```

请参阅[rollup-starter-code-splitting](https://github.com/rollup/rollup-starter-code-splitting)，了解如何在支持本地ES模块的浏览器上设置Web应用，并在必要时回退到SystemJS。

## Plugin Development


* [Plugins Overview]()

* [A Simple Example]()

* [Conventions]()

* [Properties]()

  * [name]()

* [Build Hooks]()

  * [buildEnd]()

  * [buildStart]()

  * [closeWatcher]()

  * [load]()

  * [moduleParsed]()

  * [options]()

  * [resolveDynamicImport]()

  * [resolveId]()

  * [transform]()

  * [watchChange]()

* [Output Generation Hooks]()

  * [augmentChunkHash]()

  * [banner]()

  * [closeBundle]()

  * [footer]()

  * [generateBundle]()

  * [intro]()

  * [outputOptions]()

  * [outro]()

  * [renderChunk]()

  * [renderDynamicImport]()

  * [renderError]()

  * [renderStart]()

  * [resolveFileUrl]()

  * [resolveImportMeta]()

  * [writeBundle]()

* [Deprecated Hooks]()

* [Plugin Context]()

  * [this.addWatchFile(id: string) => void]()

  * [this.emitFile(emittedFile: EmittedChunk | EmittedAsset) => string]()

  * [this.error(error: string | Error, position?: number | { column: number; line: number }) => never]()

  * [this.getCombinedSourcemap() => SourceMap]()

  * [this.getFileName(referenceId: string) => string]()

  * [this.getModuleIds() => IterableIterator(string)]()

  * [this.getModuleInfo(moduleId: string) => (ModuleInfo | null)]()

  * [this.getWatchFiles() => string[]]()

  * [this.meta: {rollupVersion: string, watchMode: boolean}]()

  * [this.parse(code: string, acornOptions?: AcornOptions) => ESTree.Program]()

  * [this.resolve(source: string, importer?: string, options?: {skipSelf?: boolean, custom?: {[plugin: string]: any}}) => Promise<{id: string, external: boolean | "absolute", moduleSideEffects: boolean | 'no-treeshake', syntheticNamedExports: boolean | string, meta: {[plugin: string]: any}} | null>]()

  * [this.setAssetSource(referenceId: string, source: string | Uint8Array) => void]()

  * [this.warn(warning: string | RollupWarning, position?: number | { column: number; line: number }) => void]()

* [Deprecated Context Functions]()

* [File URLs]()

* [Transformers]()

  * [Example Transformer]()

  * [Source Code Transformations]()

* [Synthetic named exports]()

* [Inter-plugin communication]()

  * [Custom resolver options]()

  * [Custom module meta-data]()

  * [Direct plugin communication]()

### Plugins Overview

一个Rollup插件是一个具有下面描述的一个或多个[属性](https://rollupjs.org/guide/en/#properties)、[构建钩子](https://rollupjs.org/guide/en/#build-hooks)和[输出生成钩子的对象](https://rollupjs.org/guide/en/#output-generation-hooks)，并遵循我们的惯例。一个插件应该以包的形式[发布](https://rollupjs.org/guide/en/#conventions)，该包导出一个可以用插件特定选项调用的函数，并返回这样一个对象。

插件允许你自定义Rollup的行为，例如，在捆绑前转译代码，或在你的node_modules文件夹中寻找第三方模块。关于如何使用它们的例子，请参阅[使用插件](https://rollupjs.org/guide/en/#using-plugins)。

插件列表可以在[github.com/rollup/awesome](https://github.com/rollup/awesome)找到。如果你想对一个插件提出建议，请提交一个Pull Request。

### A Simple Example

下面的插件将拦截任何`虚拟模块`的导入而不访问文件系统。例如，如果你想在浏览器中使用Rollup，这是必要的。它甚至可以用来替换入口点，如例子中所示。

```js
// rollup-plugin-my-example.js
export default function myExample () {
  return {
    name: 'my-example', // this name will show up in warnings and errors
    resolveId ( source ) {
      if (source === 'virtual-module') {
        return source; // this signals that rollup should not ask other plugins or check the file system to find this id
      }
      return null; // other ids should be handled as usually
    },
    load ( id ) {
      if (id === 'virtual-module') {
        return 'export default "This is virtual!"'; // the source code for "virtual-module"
      }
      return null; // other ids should be handled as usually
    }
  };
}

// rollup.config.js
import myExample from './rollup-plugin-my-example.js';
export default ({
  input: 'virtual-module', // resolved by our plugin
  plugins: [myExample()],
  output: [{
    file: 'bundle.js',
    format: 'es'
  }]
});
```

### Conventions

::: tip 约定:

* 插件应该有一个明确的名称，并带有rollup-plugin-前缀。

* 在package.json中包括rollup-plugin关键字。

* 插件应该被测试。我们推荐mocha或ava，它们支持开箱即用的承诺。

* 在可能的情况下使用异步方法。

* 用英文记录你的插件。

* 如果合适的话，确保你的插件输出正确的源映射。

* 如果你的插件使用 "虚拟模块"（例如，用于辅助函数），请在模块ID前加上 "0"。这可以防止其他插件试图处理它。

:::

### Properties

`name`

Type: `string`

The name of the plugin, for use in error messages and warnings.

### Build Hooks

为了与构建过程互动，你的插件对象包括 "钩子"。钩子是在构建的不同阶段被调用的函数。钩子可以影响构建的运行方式，提供关于构建的信息，或者在构建完成后对其进行修改。有不同种类的钩子。

* `async`: 钩子也可以返回一个解析为相同类型的值的承诺；否则，钩子被标记为同步。

* `first`: 如果有几个插件实现了这个钩子，那么这些钩子将按顺序运行，直到一个钩子返回一个非空或未定义的值。

* `sequential`: 如果有几个插件实现了这个钩子，所有的钩子将按照指定的插件顺序运行。如果一个钩子是异步的，后续的这种钩子将等待，直到当前钩子被解决。

* `parallel`: 如果有几个插件实现了这个钩子，它们都将按照指定的插件顺序来运行。如果一个钩子是异步的，后续的这类钩子将被平行运行，而不会等待当前的钩子。

构建钩子在构建阶段运行，这是由`rollup.rollup(inputOptions)`触发的。它们主要是在Rollup处理输入文件之前，对其进行定位、提供和转换。构建阶段的第一个钩子是[options](https://rollupjs.org/guide/en/#options)，最后一个钩子总是[buildEnd](https://rollupjs.org/guide/en/#buildend)。如果有一个构建错误，之后将调用[closeBundle](https://rollupjs.org/guide/en/#closebundle)。

<!-- ```flow
options=>start: options|buildStart
buildStart=>operation: buildStart
eachEntry=>subroutine: each entry
resolveld=>parallel: resolveld
external=>subroutine: external
load=>operation: load
transform=>operation: transform
moduleParsed=>parallel: moduleParsed
noImport=>subroutine: no imports
eachImport=>subroutine: each import()
resolveDynamicImport=>parallel: resolveDynamicImport
nonExternal=>subroutine: non-external
externalOther=>subroutine: external
unresolved=>subroutine: unresolved
buildEnd=>end: End

options->buildStart
buildStart->eachEntry->resolveld
resolveld(path1, bottom)->load
load->transform
transform->moduleParsed
moduleParsed(path1)->noImport->buildEnd
moduleParsed(path2)->eachImport->resolveDynamicImport(path1)
->externalOther->buildEnd
resolveDynamicImport(path2)->nonExternal->load
resolveDynamicImport(path3)->unresolved->resolveld
resolveld(path2)->external->buildEnd
``` -->

<img :src="$withBase('/assets/rollup/introduction/1630648412252.jpg')" alt="demo" />

此外，在观察模式下，[watchChange](https://rollupjs.org/guide/en/#watchchange)钩子可以在任何时候被触发，以通知新的运行将在当前运行产生其输出后被触发。另外，当watcher关闭时，[closeWatcher](https://rollupjs.org/guide/en/#closewatcher)钩将被触发。

参见[输出生成钩子](https://rollupjs.org/guide/en/#output-generation-hooks)，了解在输出生成阶段运行的钩子，以修改生成的输出。

#### buildEnd

Type: `(error?: Error) => void`
Kind: `async`, `parallel`
Previous Hook: [moduleParsed](https://rollupjs.org/guide/en/#moduleparsed), [resolveId](https://rollupjs.org/guide/en/#resolveid) or [resolveDynamicImport](https://rollupjs.org/guide/en/#resolvedynamicimport).
Next Hook: 输出生成阶段的[outputOptions](https://rollupjs.org/guide/en/#outputoptions)，因为这是构建阶段的最后一个钩子.

当rollup完成捆绑，但在`generate`或`write`被调用之前被调用；你也可以返回一个Promise。如果在构建过程中发生了错误，它将被传递给这个钩子。

#### buildStart

Type: `(options: InputOptions) => void`
Kind: `async`, `parallel`
Previous Hook: [options](https://rollupjs.org/guide/en/#options)
Next Hook：[resolveId](https://rollupjs.org/guide/en/#resolveid) 并行解析每个入口点。

在每次`rollup.rollup`构建时被调用。当你需要访问传递给`rollup.rollup()`的选项时，推荐使用这个钩子，因为它考虑到了所有[选项](https://rollupjs.org/guide/en/#options)钩子的转换，也包含了未设置选项的正确默认值。

#### closeWatcher

Type: `() => void`
Kind: `sync`, `sequential`
Previous/Next Hook: 这个钩子可以在任何时候被触发，无论是在构建阶段还是在输出生成阶段。如果是这种情况，当前的构建仍将继续进行，但不会有新的[watchChange](https://rollupjs.org/guide/en/#watchchange)事件被触发。

当观察者进程关闭时通知一个插件，所有打开的资源也应该关闭。这个钩子不能被输出插件使用。

#### load

Type: `(id: string) => string | null | {code: string, map?: string | SourceMap, ast? : ESTree.Program, moduleSideEffects?: boolean | "no-treeshake" | null, syntheticNamedExports?: boolean | string | null, meta?: {[plugin: string]: any} | null}`
Kind: `async`, `first`
Previous Hook: 解析加载的 ID 的 [resolveId](https://rollupjs.org/guide/en/#resolveid) 或 [resolveDynamicImport](https://rollupjs.org/guide/en/#resolvedynamicimport)。
Next Hook: [transform](https://rollupjs.org/guide/en/#transform) 转换加载的文件。

定义自定义加载器。返回 null 延迟到其他加载函数（以及最终从文件系统加载的默认行为）。为了防止额外的解析开销，例如由于某种原因，这个钩子已经使用 `this.parse` 来生成一个 AST，这个钩子可以选择返回一个 `{ code, ast, map }` 对象。 ast 必须是标准的 ESTree AST，每个节点都有开始和结束属性。如果转换不移动代码，您可以通过将 map 设置为 null 来保留现有的源映射。否则，您可能需要生成源映射。[请参阅有关源代码转换的部分](https://rollupjs.org/#source-code-transformations)。

如果为 `moduleSideEffects` 返回 `false` 并且没有其他模块从该模块导入任何内容，则即使该模块有副作用，该模块也不会包含在包中。如果返回 `true`，Rollup 将使用其默认算法来包含模块中具有副作用（例如修改全局或导出变量）的所有语句。如果返回“`no-treeshake`”，则此模块的 `treeshaking` 将关闭，并且即使它为空，它也会包含在生成的块之一中。如果返回 null 或省略标志，则 `moduleSideEffects` 将由解析此模块的第一个 `resolveId` 钩子、`treeshake.moduleSideEffects` 选项确定，或最终默认为 `true`。变换钩子可以覆盖它。

关于 `syntheticNamedExports` 选项的效果，请参阅 [syntheticNamedExports](https://rollupjs.org/guide/en/#synthetic-named-exports)。如果返回`null`或者省略该标志，那么`syntheticNamedExports`将由解析该模块的第一个`resolveId`钩子决定，或者最终默认为`false`。`transform`钩子可以覆盖这一点。

关于如何使用meta选项，请参阅[自定义模块元数据](https://rollupjs.org/guide/en/#custom-module-meta-data)。如果这个钩子返回一个元对象，它将与由 resolveId 钩子返回的任何元对象进行浅层合并。如果没有钩子返回一个元对象，它将默认为一个空对象。transform钩子可以进一步添加或替换这个对象的属性。

你可以使用[this.getModuleInfo](https://rollupjs.org/guide/en/#thisgetmoduleinfomoduleid-string--moduleinfo--null)来找出这个钩子里面的moduleSideEffects、syntheticNamedExports和meta的前一个值。

#### moduleParsed

Type: (moduleInfo: ModuleInfo) => void
Kind: async, parallel
Previous Hook: [transform](https://rollupjs.org/guide/en/#transform)当前处理的文件的转换位置
NextHook: [resolveId](https://rollupjs.org/guide/en/#resolveid)和[resolveDynamicImport](https://rollupjs.org/guide/en/#resolvedynamicimport)来解决所有发现的静态和动态导入（如果存在），否则[buildEnd](https://rollupjs.org/guide/en/#buildend)。

每次 Rollup 完全解析模块时都会调用此钩子。有关传递给此钩子的信息，请参阅 [this.getModuleInfo](https://rollupjs.org/guide/en/#thisgetmoduleinfomoduleid-string--moduleinfo--null)。

与[转换](https://rollupjs.org/guide/en/#transform)钩子相反，这个钩子从不被缓存，可以用来获取缓存和其他模块的信息，包括元属性的最终形状、代码和星号。

请注意，这个钩子中还没有关于导入模块的信息，而且关于导入模块的信息可能是不完整的，因为后来可能会发现更多的导入者。如果你需要这些信息，请使用[buildEnd](https://rollupjs.org/guide/en/#buildend)钩子。

#### options

Type: (options: InputOptions) => InputOptions | null
Kind: async, sequential
Previous Hook: 这是构建阶段的第一个钩子。
Next Hook: [buildStart](https://rollupjs.org/guide/en/#buildstart)

替换或操作传递给rollup.rollup的选项对象。返回null不会替换任何东西。如果你只需要读取选项，建议使用[buildStart](https://rollupjs.org/guide/en/#buildstart)钩子，因为该钩子可以在考虑到所有选项钩子的转换后访问选项。

这是唯一不能访问大多数插件上下文[实用功能](https://rollupjs.org/guide/en/#plugin-context)的钩子，因为它是在rollup完全配置之前运行的。

#### resolveDynamicImport

Type: (specifier: string | ESTree.Node, importer: string) => string | false | null | {id: string, external?: boolean}
Kind: async, first
Previous Hook: 为导入文件[解析模块](https://rollupjs.org/guide/en/#moduleparsed)。
Next Hook: 如果钩子解决了一个尚未加载的id，则为[load](https://rollupjs.org/guide/en/#load)；如果动态导入包含一个字符串，且未被钩子解决，则为[resolveId](https://rollupjs.org/guide/en/#resolveid)；否则为[buildEnd](https://rollupjs.org/guide/en/#buildend)。

定义了一个用于动态导入的自定义解析器。返回 false 表示导入应该保持原样，不被传递给其他解析器，从而使其成为外部的。与 [resolveId](https://rollupjs.org/guide/en/#resolveid) 钩子类似，你也可以返回一个对象来将导入解析为一个不同的 id，同时将其标记为外部。

如果一个动态导入被传递一个字符串作为参数，从这个钩子返回的字符串将被解释为一个现有的模块ID，而返回null将推迟到其他解析器并最终到resolveId。

如果动态导入没有传递一个字符串作为参数，这个钩子就会获得原始AST节点的分析权，并在以下方面表现得略有不同。

* 如果所有的插件都返回null，则导入被视为`外部的`，没有警告。

* 如果返回一个字符串，这个字符串不会被解释为模块ID，而是被用作import参数的替代。确保生成的代码是有效的，这是插件的责任。

* 为了解决这样一个导入现有模块的问题，你仍然可以返回一个对象`{id, external}`。

请注意，这个钩子的返回值之后不会传递给 `resolveId`；如果你需要访问静态解析算法，你可以在插件上下文上使用 [this.resolve(source, importer)](https://rollupjs.org/guide/en/#thisresolvesource-string-importer-string-options-skipself-boolean-custom-plugin-string-any--promiseid-string-external-boolean--absolute-modulesideeffects-boolean--no-treeshake-syntheticnamedexports-boolean--string-meta-plugin-string-any--null) 。

#### resolveId

Type: (source: string, importer: string | undefined, options: {custom?: {[plugin: string]: any}) => string | false | null | {id: string, external?: boolean | "relative" | "absolute", moduleSideEffects?: boolean | "no-treeshake" | null, syntheticNamedExports?: boolean | string | null, meta?: {[plugin: string]: any} | null}
Kind: async, first
Previous Hook: 如果我们正在解决一个入口点，则使用[buildStart](https://rollupjs.org/guide/en/#buildstart)；如果我们正在解决一个导入，则使用[moduleParsed](https://rollupjs.org/guide/en/#moduleparsed)；或者作为[resolveDynamicImport](https://rollupjs.org/guide/en/#resolvedynamicimport)的回退。此外，这个钩子可以在构建阶段通过调用[this.emitFile](https://rollupjs.org/guide/en/#thisemitfileemittedfile-emittedchunk--emittedasset--string)来触发一个入口点，或者在任何时候通过调用[this.resolve](https://rollupjs.org/guide/en/#thisresolvesource-string-importer-string-options-skipself-boolean-custom-plugin-string-any--promiseid-string-external-boolean--absolute-modulesideeffects-boolean--no-treeshake-syntheticnamedexports-boolean--string-meta-plugin-string-any--null)来手动解析一个id。
Next Hook: 如果解决了尚未[加载](https://rollupjs.org/guide/en/#load)的id，则加载，否则[buildEnd](https://rollupjs.org/guide/en/#buildend)。

定义了一个自定义的解析器。解析器对于定位第三方的依赖关系等非常有用。这里的source是指导入者，与导入语句中写的完全一样，也就是说，对于

```js
import { foo } from '../bar.js';
```

源将是“../bar.js”“。

`importer`是导入模块的完全解析id。当解析入口点时，importer将是未定义的。例如，你可以把它作为一种机制，为入口点定义自定义代理模块。

下面的插件将只从入口点暴露默认的出口，同时仍然保持命名的出口可用于内部使用。

```js
async resolveId(source,importer) {
  if (!importer) {
    // We need to skip this plugin to avoid an infinite loop
    const resolution = await this.resolve(source, undefined, { skipSelf: true });
    // If it cannot be resolved, return `null` so that Rollup displays an error
    if (!resolution) return null;
    return `${resolution.id}?entry-proxy`;
  }
  return null;
},
load(id) {
  if (id.endsWith('?entry-proxy')) {
    const importee = id.slice(0, -'?entry-proxy'.length);
    // Note that this will throw if there is no default export
    return `export {default} from '${importee}';`;
  }
  return null;
}
```

返回`null`会推迟到其他的`resolveId`函数，最终是默认的解析行为。返回 `false` 表示 `source` 应该被视为外部模块而不包括在捆绑包中。如果这发生在相对导入的情况下，id将被重新规范化，与使用外部选项时的方式相同。

如果你返回一个对象，那么就有可能将一个导入解析为一个不同的id，同时将其从捆绑中排除。这允许你用外部依赖替换依赖，而不需要用户通过外部选项手动将其标记为 "`外部`"。

```js
resolveId(source) {
  if (source === 'my-dependency') {
    return {id: 'my-dependency-develop', external: true};
  }
  return null;
}
```

如果`external`为真，那么绝对id将根据用户对[makeAbsoluteExternalsRelative](https://rollupjs.org/guide/en/#makeabsoluteexternalsrelative)选项的选择被转换为相对id。这个选择可以通过传递`external: "relative "`来始终将绝对id转换为相对`id`，或者将`external: "absolute "`来保持它是一个绝对id。当返回一个对象时，相对的外部id，即以./或./开头的id，将不会被内部转换为绝对id，并在输出中转换为相对id，而是不变地包含在输出中。如果你想让相对的id被重新规范化和重复利用，请返回一个绝对的文件系统位置作为id并选择`external: "relative"`。

如果在第一个解析模块ID的钩子中，`moduleSideEffects`返回`false`，并且没有其他模块从这个模块导入任何东西，那么即使这个模块会有副作用，也不会被包括在内。如果返回 "true"，Rollup将使用其默认算法，包括该模块中所有有副作用的语句（如修改全局或导出的变量）。如果返回 "no-treeshake"，这个模块的树形处理将被关闭，即使它是空的，也会被包含在一个生成的块中。如果返回null或者省略该标志，那么moduleSideEffects将由`treeshake.moduleSideEffects`选项决定或者默认为true。`加载`和转换钩子可以覆盖这一点。

请参阅[SyntheticnamedExports](https://rollupjs.org/guide/en/#synthetic-named-exports)选项的效果的合成名称导出。如果返回`null`或省略标志，则`SyntheticnamedExports`将默认为`false`。负载和变换钩可以覆盖此。

关于如何[使用meta选项](https://rollupjs.org/guide/en/#custom-module-meta-data)，请参阅自定义模块元数据。如果返回null或者省略了该选项，那么meta将默认为一个空对象。加载和转换钩子可以添加或替换这个对象的属性。

当通过[this.resolve(source, importer, options)](https://rollupjs.org/guide/en/#thisresolvesource-string-importer-string-options-skipself-boolean-custom-plugin-string-any--promiseid-string-external-boolean--absolute-modulesideeffects-boolean--no-treeshake-syntheticnamedexports-boolean--string-meta-plugin-string-any--null)从一个插件触发这个钩子时，可以向这个钩子传递一个自定义选项对象。虽然这个对象将被传递，未经修改，但插件应该遵循惯例，用一个对象添加一个自定义属性，其中的键对应于选项所针对的插件的名称。详情见[自定义解析器选项](https://rollupjs.org/guide/en/#custom-resolver-options)。

#### transform

Type: `(code: string, id: string) => string | null | {code?: string, map?: string | SourceMap, ast? : ESTree.Program, moduleSideEffects?: boolean | "no-treeshake" | null, syntheticNamedExports?: boolean | string | null, meta?: {[plugin: string]: any} | null}`
Kind: `async`, `sequential`
Previous Hook: [加载](https://rollupjs.org/guide/en/#load)当前处理的文件的加载位置。
NextHook: [moduleParsed](https://rollupjs.org/guide/en/#moduleparsed) 一旦文件被处理和解析。

可以用来转换单个模块。为了防止额外的解析开销，例如这个钩子已经因为某些原因使用`this.parse`来生成AST，这个钩子可以选择返回一个`{ code, ast, map }`对象。`ast`必须是一个标准的`ESTree AST`，每个节点都有开始和结束属性。如果转换不移动代码，你可以通过将map设置为null来保留现有的源映射。否则你可能需要生成源码图。参见[源代码转换部分](https://rollupjs.org/#source-code-transformations)。

请注意，在监视模式下，此钩子的结果在重建时会被缓存，并且仅当模块的`代码`已更改或上次通过 `this.addWatchFile` 添加的文件已更改时，才会为模块 ID 再次触发此钩子为该模块触发了钩子。

您还可以使用返回值的对象形式来配置模块的附加属性。请注意，可以只返回属性而不返回代码转换。

如果为 `moduleSideEffects` 返回 `false` 并且没有其他模块从该模块导入任何内容，则即使该模块有副作用，也不会包含该模块。

如果返回 `true`，`Rollup` 将使用其默认算法来包含模块中具有副作用（例如修改全局或导出变量）的所有语句。

如果返回`“no-treeshake”`，则此模块的 `treeshaking` 将关闭，并且即使它为空，它也会包含在生成的块之一中。

如果返回`null`或省略标志，则`ModulesIDeeFfects`将由加载此模块的加载钩确定，该挂钩解析此模块的第一个解析挂钩，`treeshake.modulesideefects`选项，或最终默认为`true`。

关于 [synthetic named exports](https://rollupjs.org/guide/en/#synthetic-named-exports) 选项的效果，请看 `syntheticNamedExports`。如果返回`null`或者省略该标志，那么`syntheticNamedExports`将由加载该模块的`load hook`、解析该模块的第一个`resolveId hook`、`treeshake.moduleSideEffects`选项决定，或者最终默认为`false`。

请参阅[自定义模块元数据](https://rollupjs.org/guide/en/#custom-module-meta-data)，了解如何使用`元选项`。如果返回NULL或省略选项，则`META`将由加载此模块的负载挂钩确定，该挂钩解决此模块的第一个解析挂钩或最终默认为空对象。

你可以使用[this.getModuleInfo](https://rollupjs.org/guide/en/#thisgetmoduleinfomoduleid-string--moduleinfo--null)来找出这个钩子里面的`moduleSideEffects`、`syntheticNamedExports`和`meta`的前一个值。

#### watchChange

Type: `watchChange: (id: string, change: {event: 'create' | 'update' | 'delete'}) => void`
Kind: `sync`, `sequential`
Previous/Next Hook: 这个钩子可以在构建和输出生成阶段的任何时候被触发。如果是这种情况，当前的构建仍将继续进行，但一旦当前的构建完成，新的构建将被安排开始，从[选项](https://rollupjs.org/guide/en/#options)中重新开始。

### Output Generation Hooks
[rollup](https://rollupjs.org/guide/en/#output-generation-hooks)