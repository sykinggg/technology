# 基本概念

## 编译速度

<img :src="$withBase('/assets/design/1629444255384.jpg')" alt="demo" />


### 1.它是用Go语言编写的，编译成可执行代码

JavaScript必须基于解释器的node环境才能执行，所以当webpack等工具解释完本身的代码后，可能esbuild已经完成编译工作了，而这时候webpack才开始执行编译。

此外，Go的核心设计是并行的，而JavaScript不是。

Go有线程之间的共享内存，而JavaScript则必须在线程之间进行数据序列化。

Go和JavaScript都有并行的垃圾收集器，但Go的堆是在所有线程之间共享的，而JavaScript的每个线程都有一个独立的堆。JavaScript工作线程并行量减少了一半，因为还有一半CPU核心正忙于为另一半收集垃圾。

### 2.并行被大量使用

esbuild内部的算法是经过精心设计的，以尽可能使所有可用的CPU核心完全饱和。

大致有三个阶段：解析、连接和代码生成。解析和代码生成是大部分的工作，并且是完全可并行的。

由于所有线程都共享内存，在编译导入相同的JavaScript库的不同入口点时，工作可以很容易地被分享。大多数现代计算机都有很多内核，所以并行化是一个很大的性能提升。

### 3.esbuild中的所有内容都是从头开始编写的

自己编写而不是使用第三方库有很多性能上的好处。可以从一开始就考虑到性能问题，以确保所有的东西都使用一致的数据结构，避免昂贵的转换，而且在必要时可进行广泛的架构变更。当然，缺点是这是一个很大的工作量。

### 4.内存得到有效利用

编译器在理想情况下大多是输入长度的O(n)复杂性。因此，如果你正在处理大量的数据，内存访问速度可能会严重影响性能。你需要对数据处理的越少，编译器速度就越快。

## Api

可以通过以下三种方式之一访问 API：在命令行上、在 JavaScript 中和在 Go 中。三种语言的概念和参数在很大程度上是相同的

esbuild 的 API 中有两个主要的 API 调用：transform 和 build。

## Install esbuild

首先，在本地下载并安装ESBuild命令。可以使用NPM安装预构建的本机可执行文件：

```sh
npm install esbuild
```

这应该在本地`Node_modules`文件夹中安装了eSbuild。您可以运行eSbuild可执行文件以验证所有内容是否正常工作：

> Unix

```sh
./node_modules/.bin/esbuild --version
```

> Windows

```sh
.\node_modules\.bin\esbuild --version
```

建议的安装eSBuild的方法是使用NPM安装本机可执行文件。但如果你不想这样做，还有一些[其他方法可以安装](https://esbuild.github.io/getting-started/#other-ways-to-install)。

## Build scripts

你的构建命令是你将重复运行的东西，所以你会想要自动化它。这样做的一种自然方法是将构建脚本添加到您的 `package.json` 文件中，如下所示：

```json
{
  "scripts": {
    "build": "esbuild app.jsx --bundle --outfile=out.js"
  }
}
```

请注意，这直接使用 `esbuild` 命令而没有相对路径。这是有效的，因为`脚本`部分中的所有内容都是使用路径中已经存在的 `esbuild` 命令运行的（只要您安装了软件包）。

可以像这样调用构建脚本：

```s
npm run build
```

但是，如果您需要向 esbuild 传递许多选项，则使用命令行界面可能会变得笨拙。对于更复杂的用途，您可能希望使用 esbuild 的 JavaScript API 在 JavaScript 中编写构建脚本。这可能看起来像这样：

```js
require('esbuild').build({
  entryPoints: ['app.jsx'],
  bundle: true,
  outfile: 'out.js',
}).catch(() => process.exit(1))
```

`build` 函数在子进程中运行 esbuild 可执行文件，并返回一个在构建完成时解析的承诺。上面的代码不会打印出捕获的异常，因为默认情况下异常中的任何错误消息也会打印到控制台（尽管您可以根据需要更改日志级别以将其关闭）。

虽然也有一个非异步的 `buildSync` API，但异步 API 更适合构建脚本，因为[插件](https://esbuild.github.io/plugins/)只适用于异步 API。您可以在 [API 文档](./transform/#/#build-api)中阅读有关构建 API 的配置选项的更多信息。

## Bundling for the browser

捆绑器默认为浏览器输出代码，因此无需额外配置即可开始使用。对于开发构建，您可能希望使用 `--sourcemap` 启用源映射，而对于生产构建，您可能希望使用 `--minify` 启用缩小。您可能还想为您支持的浏览器配置目标环境。所有这些可能看起来像这样：

> cli

```sh
esbuild app.jsx --bundle --minify --sourcemap --target=chrome58,firefox57,safari11,edge16
```

> js

```js
require('esbuild').buildSync({
  entryPoints: ['app.jsx'],
  bundle: true,
  minify: true,
  sourcemap: true,
  target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
  outfile: 'out.js',
})
```

> go

```go
package main

import "github.com/evanw/esbuild/pkg/api"
import "os"

func main() {
  result := api.Build(api.BuildOptions{
    EntryPoints:       []string{"app.jsx"},
    Bundle:            true,
    MinifyWhitespace:  true,
    MinifyIdentifiers: true,
    MinifySyntax:      true,
    Engines: []api.Engine{
      {api.EngineChrome, "58"},
      {api.EngineFirefox, "57"},
      {api.EngineSafari, "11"},
      {api.EngineEdge, "16"},
    },
    Write: true,
  })

  if len(result.Errors) > 0 {
    os.Exit(1)
  }
}
```

有时候一个你想使用的包可能会导入另一个只有node才有的包，比如内置的`路径`包。发生这种情况时，您可以使用 `package.json` 文件中的[浏览器字段](https://github.com/defunctzombie/package-browser-field-spec)，将包替换为浏览器友好的替代方案，如下所示：

```json
{
  "browser": {
    "path": "path-browserify"
  }
}
```

您要使用的某些 npm 包可能不是设计为在浏览器中运行的。有时您可以使用 esbuild 的配置选项来解决某些问题并成功地捆绑包。未定义的全局变量可以在简单情况下用[定义](./transform/#/#define)功能替换，在更复杂情况下可以用[注入](./transform/#/#inject)功能替换。

## Bundling for node

尽管在使用 node 时不需要 bundler，但有时在 node 中运行之前使用 esbuild 处理代码仍然是有益的。 Bundling 可以自动剥离 TypeScript 类型，将 ECMAScript 模块语法转换为 CommonJS，并将新的 JavaScript 语法转换为特定版本节点的旧语法。并且在发布之前捆绑包可能是有益的，这样它的下载量较小，因此在加载时从文件系统读取的时间更少。

如果您正在捆绑将在 node 中运行的代码，您应该通过将 `--platform=node` 传递给 esbuild 来配置[平台](./transform/#/#platform)设置。这同时将一些不同的设置更改为节点友好的默认值。例如，所有内置于节点的包（如 fs）都会自动标记为外部包，因此 esbuild 不会尝试捆绑它们。此设置还会禁用 `package.json` 中浏览器字段的解释。

如果您的代码使用在您的 node 版本中不起作用的较新 JavaScript 语法，您将需要配置 node 的目标版本：

> cli

```sh
esbuild app.js --bundle --platform=node --target=node10.4
```

> 

```js
require('esbuild').buildSync({
  entryPoints: ['app.js'],
  bundle: true,
  platform: 'node',
  target: ['node10.4'],
  outfile: 'out.js',
})
```

> go

```go
package main

import "github.com/evanw/esbuild/pkg/api"
import "os"

func main() {
  result := api.Build(api.BuildOptions{
    EntryPoints: []string{"app.js"},
    Bundle:      true,
    Platform:    api.PlatformNode,
    Engines: []api.Engine{
      {api.EngineNode, "10.4"},
    },
    Write: true,
  })

  if len(result.Errors) > 0 {
    os.Exit(1)
  }
}
```

有时，您要使用的包包含由于某种原因无法捆绑的代码。这方面的一个示例是带有本机扩展（如 `fsevents`）的包。或者，您可能出于其他原因希望从捆绑包中排除一个包。这可以通过将包标记为外部来完成：

> cli

```sh
esbuild app.jsx --bundle --platform=node --external:fsevents
```

> js

```js
require('esbuild').buildSync({
  entryPoints: ['app.jsx'],
  bundle: true,
  platform: 'node',
  external: ['fsevents'],
  outfile: 'out.js',
})
```

> go

```go
package main

import "github.com/evanw/esbuild/pkg/api"
import "os"

func main() {
  result := api.Build(api.BuildOptions{
    EntryPoints: []string{"app.jsx"},
    Bundle:      true,
    Platform:    api.PlatformNode,
    External:    []string{"fsevents"},
    Write:       true,
  })

  if len(result.Errors) > 0 {
    os.Exit(1)
  }
}
```

## Other ways to install

安装 esbuild 的推荐方法是使用 [npm 安装本机可执行文件](https://esbuild.github.io/getting-started/#install-esbuild)。但是您也可以通过以下方式安装 esbuild：

### Install the WASM version

除了 `esbuild` npm 包之外，还有一个 `esbuild-wasm` 包，其功能类似但使用 WebAssembly 而不是本机代码。安装它还会安装一个名为 `esbuild` 的可执行文件：

```sh
npm install esbuild-wasm
```

::: warning
**为什么不推荐**：WebAssembly 版本比原生版本慢得多。在许多情况下，它要慢一个数量级（即 10 倍）。这是出于多种原因，包括 a) 节点在每次运行时从头开始重新编译 WebAssembly 代码，b) Go 的 WebAssembly 编译方法是单线程的，以及 c) 节点具有 WebAssembly 错误，可以延迟进程退出数秒. WebAssembly 版本还排除了一些功能，例如本地文件服务器。如果没有其他选择，您应该只使用这样的 WebAssembly 包，例如当您想在不受支持的平台上使用 esbuild 时。 WebAssembly 包主要旨在仅在浏览器中使用。
:::

### Use Deno instead of node

如果您想使用 esbuild 代替，还有对 [Deno](https://deno.land/) JavaScript 环境的基本支持。该包托管在 [https://deno.land/x/esbuild](https://deno.land/x/esbuild) 并使用本机 esbuild 可执行文件。可执行文件将在运行时从 npm 下载并缓存，因此您的计算机需要通过网络访问 registry.npmjs.org 才能使用此包。使用包看起来像这样：

```js
import * as esbuild from 'https://deno.land/x/esbuild@v0.12.21/mod.js'
const ts = 'let test: boolean = true'
const result = await esbuild.transform(ts, { loader: 'ts' })
console.log('result:', result)
esbuild.stop()
```

它具有与 esbuild 的 npm 包基本相同的 API，但有一个补充：完成后需要调用 `stop()`，因为与 node 不同，Deno 没有提供必要的 API 来允许 Deno 在 esbuild 的内部子进程仍然存在时退出跑步。

::: warning
**为什么不推荐**：Deno 比 node 新，使用较少，支持的平台比 node 少，所以推荐 node 作为运行 esbuild 的主要方式。 Deno 还使用互联网作为包系统而不是现有的 JavaScript 包生态系统，并且 esbuild 是围绕 npm 风格的包管理设计和优化的。您应该仍然可以将 esbuild 与 Deno 一起使用，但是如果您希望能够捆绑 HTTP URL，则需要一个插件。
:::

### Build from source

从源代码构建 esbuild：

1. 安装 Go 编译器：

[https://golang.org/dl/](https://golang.org/dl/)

2. 下载源代码：

```sh
git clone --depth 1 --branch v0.12.21 https://github.com/evanw/esbuild.git
cd esbuild
```

3. 构建 `esbuild` 可执行文件（在 Windows 上将是 `esbuild.exe`）：

```sh
go build ./cmd/esbuild
```

如果要为其他平台构建，只需在构建命令前面加上平台信息即可。例如，您可以使用以下命令构建 32 位 Linux 版本：

```sh
GOOS=linux GOARCH=386 go build ./cmd/esbuild
```

::: warning
**为什么不推荐**：本机版本只能通过命令行界面使用，这对于复杂的用例可能不符合人体工程学，并且不支持[插件](https://esbuild.github.io/plugins/)。您需要编写 JavaScript 或 Go 代码并使用 [esbuild 的 API](./transform/#/) 来使用插件。
:::

### Download a build

尽管预编译的本机可执行文件是使用 npm 托管的，但您实际上并不需要安装 npm 来下载它们。 npm 包注册表是一个普通的 HTTP 服务器，包是普通的 gzipped tar 文件。

以下是直接下载二进制可执行文件的示例：

```sh
curl -O https://registry.npmjs.org/esbuild-darwin-64/-/esbuild-darwin-64-0.12.21.tgz
tar xf ./esbuild-darwin-64-0.12.21.tgz
./package/bin/esbuild
Usage:
  esbuild [options] [entry points]
```

`esbuild-darwin-64` 包中的本机可执行文件适用于 macOS 操作系统和 x86-64 架构。在撰写本文时，这是 esbuild 支持的平台的本机可执行包的完整列表：

::: warning
**为什么不推荐这样做**：这取决于 esbuild 的本机可执行安装程序的内部实现细节。这些细节可能会在某些时候发生变化，在这种情况下，这种方法将不再适用于新的 esbuild 版本。这只是一个小缺点，因为该方法应该仍然适用于现有的 esbuild 版本，因为发布到 npm 的包是不可变的。另一个缺点是您不能在本机版本中使用插件。
:::
