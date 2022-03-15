# plugins

## 概述

::: warning
插件 API 是新的，仍然是实验性的。随着新用例的发现，它可能会在 esbuild 1.0.0 版本之前发生变化。您可以关注跟踪问题以获取有关此功能的[更新](https://github.com/evanw/esbuild/issues/111)。
:::

插件 API 允许您将代码注入构建过程的各个部分。与 API 的其余部分不同，它不能从命令行使用。您必须编写 JavaScript 或 Go 代码才能使用插件 API。插件也只能与构建 API 一起使用，不能与转换 API 一起使用。

## 寻找插件

如果您正在寻找现有的 esbuild 插件，您应该查看[现有的 esbuild 插件列表](https://github.com/esbuild/community-plugins)。此列表中的插件是作者有意添加的，旨在供 esbuild 社区中的其他人使用。

如果你想分享你的 esbuild 插件，你应该：

1. 将它[发布到 npm](https://docs.npmjs.com/creating-and-publishing-unscoped-public-packages) 以便其他人可以安装它。

2. 将其添加到[现有 esbuild 插件列表](https://github.com/esbuild/community-plugins)中，以便其他人可以找到它。

## 使用插件

esbuild 插件是一个具有`名称`和`设置`功能的对象。它们以数组形式传递给[构建 API](./transform/#build) 调用。 `setup` 函数为每个构建 API 调用运行一次。

这是一个简单的插件示例，允许您在构建时导入当前环境变量：

<div>
<div title="js">

```js
let envPlugin = {
  name: 'env',
  setup(build) {
    // Intercept import paths called "env" so esbuild doesn't attempt
    // to map them to a file system location. Tag them with the "env-ns"
    // namespace to reserve them for this plugin.
    build.onResolve({ filter: /^env$/ }, args => ({
      path: args.path,
      namespace: 'env-ns',
    }))

    // Load paths tagged with the "env-ns" namespace and behave as if
    // they point to a JSON file containing the environment variables.
    build.onLoad({ filter: /.*/, namespace: 'env-ns' }, () => ({
      contents: JSON.stringify(process.env),
      loader: 'json',
    }))
  },
}

require('esbuild').build({
  entryPoints: ['app.js'],
  bundle: true,
  outfile: 'out.js',
  plugins: [envPlugin],
}).catch(() => process.exit(1))
```

</div>
<div title="go">

```go
package main

import "encoding/json"
import "os"
import "strings"
import "github.com/evanw/esbuild/pkg/api"

var envPlugin = api.Plugin{
  Name: "env",
  Setup: func(build api.PluginBuild) {
    // Intercept import paths called "env" so esbuild doesn't attempt
    // to map them to a file system location. Tag them with the "env-ns"
    // namespace to reserve them for this plugin.
    build.OnResolve(api.OnResolveOptions{Filter: `^env$`},
      func(args api.OnResolveArgs) (api.OnResolveResult, error) {
        return api.OnResolveResult{
          Path:      args.Path,
          Namespace: "env-ns",
        }, nil
      })

    // Load paths tagged with the "env-ns" namespace and behave as if
    // they point to a JSON file containing the environment variables.
    build.OnLoad(api.OnLoadOptions{Filter: `.*`, Namespace: "env-ns"},
      func(args api.OnLoadArgs) (api.OnLoadResult, error) {
        mappings := make(map[string]string)
        for _, item := range os.Environ() {
          if equals := strings.IndexByte(item, '='); equals != -1 {
            mappings[item[:equals]] = item[equals+1:]
          }
        }
        bytes, err := json.Marshal(mappings)
        if err != nil {
          return api.OnLoadResult{}, err
        }
        contents := string(bytes)
        return api.OnLoadResult{
          Contents: &contents,
          Loader:   api.LoaderJSON,
        }, nil
      })
  },
}

func main() {
  result := api.Build(api.BuildOptions{
    EntryPoints: []string{"app.js"},
    Bundle:      true,
    Outfile:     "out.js",
    Plugins:     []api.Plugin{envPlugin},
    Write:       true,
  })

  if len(result.Errors) > 0 {
    os.Exit(1)
  }
}
```

</div>
</div>

你会像这样使用它：

```js
import { PATH } from 'env'
console.log(`PATH is ${PATH}`)
```

## 概念

为 esbuild 编写插件与为其他打包器编写插件的工作方式略有不同。在开发插件之前了解以下概念很重要：

### 命名空间

每个模块都有一个关联的命名空间。默认情况下，esbuild 在文件命名空间中运行，该命名空间对应于文件系统上的`文件`。但是 esbuild 也可以处理在文件系统上没有相应位置的“虚拟”模块。发生这种情况的一种情况是使用 [stdin](./transform/#stdin) 提供模块。

插件可用于创建虚拟模块。虚拟模块通常使用文件以外的命名空间来区分它们与`文件`系统模块。通常命名空间特定于创建它们的插件。例如，下面的示例 [HTTP 插件](./plugins/#http-plugin)使用 `http-url` 命名空间来下载文件。

### Filters

每个回调都必须提供一个正则表达式作为过滤器。当路径与其过滤器不匹配时，esbuild 使用它来跳过调用回调，这是为了性能而完成的。从 esbuild 的高度并行内部调用到单线程 JavaScript 代码是昂贵的，应尽可能避免以获得最大速度。

您应该尽可能尝试使用过滤器正则表达式而不是使用 JavaScript 代码进行过滤。这更快，因为正则表达式是在 esbuild 内部计算的，根本不需要调用 JavaScript。例如，下面的示例 HTTP 插件使用了 `^https?://` 过滤器，以确保运行插件的性能开销仅对以 `http://` 或 `https://` 开头的路径产生。

允许的正则表达式语法是 Go 的[正则表达式引擎](https://golang.org/pkg/regexp/)支持的语法。这与 JavaScript 略有不同。具体来说，不支持前瞻、后视和反向引用。 Go 的正则表达式引擎旨在避免可能影响 JavaScript 正则表达式的灾难性指数时间最坏情况性能问题。

请注意，命名空间也可用于过滤。回调必须提供过滤器正则表达式，但也可以选择提供命名空间以进一步限制匹配的路径。这对于“记住”虚拟模块的来源很有用。请记住，命名空间使用精确的字符串相等性测试而不是正则表达式进行匹配，因此与模块路径不同，它们不用于存储任意数据。

## Resolve callbacks

使用 `onResolve` 添加的回调将在 esbuild 构建的每个模块中的每个导入路径上运行。回调可以自定义 esbuild 如何进行路径解析。例如，它可以拦截导入路径并将它们重定向到其他地方。它还可以将路径标记为外部路径。下面是一个例子：

<div>
<div title="js">

```js
let exampleOnResolvePlugin = {
  name: 'example',
  setup(build) {
    let path = require('path')

    // Redirect all paths starting with "images/" to "./public/images/"
    build.onResolve({ filter: /^images\// }, args => {
      return { path: path.join(args.resolveDir, 'public', args.path) }
    })

    // Mark all paths starting with "http://" or "https://" as external
    build.onResolve({ filter: /^https?:\/\// }, args => {
      return { path: args.path, external: true }
    })
  },
}

require('esbuild').build({
  entryPoints: ['app.js'],
  bundle: true,
  outfile: 'out.js',
  plugins: [exampleOnResolvePlugin],
  loader: { '.png': 'binary' },
}).catch(() => process.exit(1))
```

</div>
<div title="go">

```go
package main

import "os"
import "path/filepath"
import "github.com/evanw/esbuild/pkg/api"

var exampleOnResolvePlugin = api.Plugin{
  Name: "example",
  Setup: func(build api.PluginBuild) {
    // Redirect all paths starting with "images/" to "./public/images/"
    build.OnResolve(api.OnResolveOptions{Filter: `^images/`},
      func(args api.OnResolveArgs) (api.OnResolveResult, error) {
        return api.OnResolveResult{
          Path: filepath.Join(args.ResolveDir, "public", args.Path),
        }, nil
      })

    // Mark all paths starting with "http://" or "https://" as external
    build.OnResolve(api.OnResolveOptions{Filter: `^https?://`},
      func(args api.OnResolveArgs) (api.OnResolveResult, error) {
        return api.OnResolveResult{
          Path:     args.Path,
          External: true,
        }, nil
      })
  },
}

func main() {
  result := api.Build(api.BuildOptions{
    EntryPoints: []string{"app.js"},
    Bundle:      true,
    Outfile:     "out.js",
    Plugins:     []api.Plugin{exampleOnResolvePlugin},
    Write:       true,
    Loader: map[string]api.Loader{
      ".png": api.LoaderBinary,
    },
  })

  if len(result.Errors) > 0 {
    os.Exit(1)
  }
}
```

</div>
</div>

回调可以在不提供路径的情况下返回，以将路径解析的责任传递给下一个回调。对于给定的导入路径，来自所有插件的所有 `onResolve` 回调将按照它们注册的顺序运行，直到有人负责路径解析。如果没有回调返回路径，esbuild 将运行其默认路径解析逻辑。

请记住，许多回调可能同时运行。在 JavaScript 中，如果您的回调执行可以在另一个线程上运行的昂贵工作，例如 `fs.existsSync()`，您应该使回调`异步`并使用 `await`（在这种情况下使用 `fs.promises.exists()`）以允许其他代码在此期间运行。在 Go 中，每个回调都可以在单独的 goroutine 上运行。如果您的插件使用任何共享数据结构，请确保您有适当的同步。

### Resolve options

`onResolve` API 旨在在 `setup` 函数中调用，并注册在某些情况下要触发的回调。它需要几个选项：

<div>
<div title="js">

```js
interface OnResolveOptions {
  filter: RegExp;
  namespace?: string;
}
```

</div>
<div title="go">

```go
type OnResolveOptions struct {
  Filter    string
  Namespace string
}
```

</div>
</div>

* `filter`

每个回调都必须提供一个过滤器，它是一个正则表达式。当路径与此过滤器不匹配时，将跳过注册的回调。您可以[在此处阅读有关过滤器的更多信息](./plugins/#filters)。

* `namespace`

这是可选的。如果提供，则回调仅在提供的命名空间中的模块内的路径上运行。您可以在[此处阅读有关命名空间的更多信息](./plugins/#namespaces)。

### Resolve arguments

当eSbuild调用`onresolve`注册的回调时，它将提供这些参数，其中包含有关导入路径的信息：

<div>
<div title="js">

```js
interface OnResolveArgs {
  path: string;
  importer: string;
  namespace: string;
  resolveDir: string;
  kind: ResolveKind;
  pluginData: any;
}

type ResolveKind =
  | 'entry-point'
  | 'import-statement'
  | 'require-call'
  | 'dynamic-import'
  | 'require-resolve'
  | 'import-rule'
  | 'url-token'
```

</div>
<div title="go">

```go
type OnResolveArgs struct {
  Path       string
  Importer   string
  Namespace  string
  ResolveDir string
  Kind       ResolveKind
  PluginData interface{}
}

const (
  ResolveEntryPoint        ResolveKind
  ResolveJSImportStatement ResolveKind
  ResolveJSRequireCall     ResolveKind
  ResolveJSDynamicImport   ResolveKind
  ResolveJSRequireResolve  ResolveKind
  ResolveCSSImportRule     ResolveKind
  ResolveCSSURLToken       ResolveKind
)
```

</div>
</div>

* `path`

这是来自底层模块的源代码的逐字未解决的路径。它可以采取任何形式。虽然eSbuild的默认行为是将导入路径解释为相对路径或包名称，但是可用于引入新的路径表单。例如，下面的示例[HTTP插件](./plugins/#http-plugin)对以`HTTP：//`开始的路径提供了特殊含义。

* `importer`

这是包含要解决此导入的模块的路径。请注意，如果命名空间是`文件`，则仅保证此路径是文件系统路径。如果要解析相对于包含导入器模块的目录的路径，则应使用`Resolvedir`，因为它也适用于虚拟模块。

* `namespace`

这是包含此导入的模块的命名空间，如加载此文件的[负载回调](./plugins/#load-callbacks)所设置的。这默认为包含eSbuild默认行为的模块的`文件`命名空间。您可以在[此处阅读更多关于命名空间的信息](./plugins/#namespaces)。

* `resolveDir`

这是在解析文件系统上的实际路径的导入路径时要使用的文件系统目录。对于`文件`命名空间中的模块，此值默认为模块路径的目录部分。对于虚拟模块，此值默认为空，但[负载回调](./plugins/#load-callbacks)可以选择为虚拟模块提供一个解析目录。如果发生这种情况，将提供用于解析该文件中未解决的路径的回调。

* `kind`

这表示如何导入要解决的路径。例如，`entry-point`表示将路径提供给API作为入口点路径，`import-statement`表示路径来自JavaScript`import`或`export`语句，并且`import-rule`表示路径是来自一个CSS `@Import`规则。

* `pluginData`

此属性从上一个插件传递，如加载此文件的[负载回调](./plugins/#load-callbacks)所设置。

### Resolve results

这是可以通过`onresolve`添加的回调来提供自定义路径分辨率的对象。如果您想从回调返回而不提供路径，只需返回默认值（在JavaScript和`OnResolveresult {}`中拒绝）。以下是可以返回的可选属性：

<div>
<div title="js">

```js
interface OnResolveResult {
  errors?: Message[];
  external?: boolean;
  namespace?: string;
  path?: string;
  pluginData?: any;
  pluginName?: string;
  warnings?: Message[];
  watchDirs?: string[];
  watchFiles?: string[];
}

interface Message {
  text: string;
  location: Location | null;
  detail: any; // The original error from a JavaScript plugin, if applicable
}

interface Location {
  file: string;
  namespace: string;
  line: number; // 1-based
  column: number; // 0-based, in bytes
  length: number; // in bytes
  lineText: string;
}
```

</div>
<div title="go">

```go
type OnResolveResult struct {
  Errors     []Message
  External   bool
  Namespace  string
  Path       string
  PluginData interface{}
  PluginName string
  Warnings   []Message
  WatchDirs  []string
  WatchFiles []string
}

type Message struct {
  Text     string
  Location *Location
  Detail   interface{} // The original error from a Go plugin, if applicable
}

type Location struct {
  File      string
  Namespace string
  Line      int // 1-based
  Column    int // 0-based, in bytes
  Length    int // in bytes
  LineText  string
}
```

</div>
</div>

* `path`

将其设置为非空字符串以将导入解析为特定路径。如果设置了这一点，则不会在此模块中为此导入路径运行更多的on-destve回调。如果未设置为此，eSbuild将继续运行在当前一个后注册的on-Desclude回调。然后，如果路径仍未解决，eSBuild将默认为相对于当前模块的解析目录解析路径。

* `external`

将此设置为`true`以将模块标记为[外部](./transform/#external)，这意味着它不会包含在捆绑包中，而是将在运行时导入。

* `namespace`

这是与已解析路径关联的命名空间。如果留空，则将默认为非外部路径的`文件`命名空间。文件命名空间中的路径必须是当前文件系统的绝对路径（因此在UNIX上的正斜杠开始，并且在Windows上使用驱动器号）。

如果要解析为非文件系统路径的路径，则应将命名空间设置为`文件`以外的内容或空字符串。这告诉esbuild不将路径视为指向文件系统上的某些东西。

* `errors` and `warnings`

这些属性允许您通过路径分辨率期间生成的任何日志消息，以根据当前[日志级别](./transform/#log-level)显示在终端中的eSBuild，并最终在最终构建结果中结束。例如，如果您正在调用库，并且该库可以返回错误和/或警告，您将希望使用这些属性转发它们。

如果您只有单个错误返回，则不必通过错误传递它。您可以简单地将`错误`丢弃在JavaScript中，或者将`错误`对象返回到Go中的第二个返回值。

* `watchFiles` and `watchDirs`

这些属性允许您返回eSbuild[watch mode](./transform/#watch)的其他文件系统路径以扫描。默认情况下，eSBuild将仅扫描提供给`onload`插件的路径，并且仅当命名空间是`文件`时。如果您的插件需要对文件系统的其他更改作出反应，则需要使用其中一个属性。

如果`WatchFiles`数组的任何文件已自上次构建以来已更改任何文件，则将触发重建。更改检测有点复杂，可以检查文件内容和/或文件的元数据。

如果从上次构建以来，如果`WatchDirs`数组中的任何目录列表列表已更改以来，则还将触发重建。请注意，这不会检查这些目录中的任何文件内容的内容，它也不会检查任何子目录。考虑一下它作为检查UNIX `LS`命令的输出。

对于稳健性，您应该包括在评估插件期间使用的所有文件系统路径。例如，如果您的插件相当于`Require.Resolve（）`，则需要包含所有“执行此文件存在”的路径，而不仅仅是最终路径。否则，可以创建一个新文件，这会导致构建变得过时，但eSbuild不会检测到它，因为未列出该路径。

* `pluginName`

此属性允许您使用此路径解析操作的另一个名称替换此插件的名称。通过这个插件代理另一个插件很有用。例如，它允许您将单个插件转发到包含多个插件的子进程。您可能不需要使用它。

* `pluginData`

此属性将传递到在插件链中运行的下一个插件。如果从`onload`插件返回它，它将传递给`onresolve`插件，以获取该文件中的任何导入的插件，如果从`onresolve`插件返回它，则在加载文件时将传递给`onload`插件（由于关系多对一，这是随意的）。这对于在不同插件之间传递数据是有用的，而无需直接坐标。

## Load callbacks

使用`onload`添加的回调将为尚未标记为外部的唯一路径/命名空间对运行。它的工作是返回模块的内容并告诉esbuild如何解释它。这是一个示例插件，它将`.txt`文件转换为单词数组：

<div>
<div title="js">

```js
let exampleOnLoadPlugin = {
  name: 'example',
  setup(build) {
    let fs = require('fs')

    // Load ".txt" files and return an array of words
    build.onLoad({ filter: /\.txt$/ }, async (args) => {
      let text = await fs.promises.readFile(args.path, 'utf8')
      return {
        contents: JSON.stringify(text.split(/\s+/)),
        loader: 'json',
      }
    })
  },
}

require('esbuild').build({
  entryPoints: ['app.js'],
  bundle: true,
  outfile: 'out.js',
  plugins: [exampleOnLoadPlugin],
}).catch(() => process.exit(1))
```

</div>
<div title="go">

```go
package main

import "encoding/json"
import "io/ioutil"
import "os"
import "strings"
import "github.com/evanw/esbuild/pkg/api"

var exampleOnLoadPlugin = api.Plugin{
  Name: "example",
  Setup: func(build api.PluginBuild) {
    // Load ".txt" files and return an array of words
    build.OnLoad(api.OnLoadOptions{Filter: `\.txt$`},
      func(args api.OnLoadArgs) (api.OnLoadResult, error) {
        text, err := ioutil.ReadFile(args.Path)
        if err != nil {
          return api.OnLoadResult{}, err
        }
        bytes, err := json.Marshal(strings.Fields(string(text)))
        if err != nil {
          return api.OnLoadResult{}, err
        }
        contents := string(bytes)
        return api.OnLoadResult{
          Contents: &contents,
          Loader:   api.LoaderJSON,
        }, nil
      })
  },
}

func main() {
  result := api.Build(api.BuildOptions{
    EntryPoints: []string{"app.js"},
    Bundle:      true,
    Outfile:     "out.js",
    Plugins:     []api.Plugin{exampleOnLoadPlugin},
    Write:       true,
  })

  if len(result.Errors) > 0 {
    os.Exit(1)
  }
}
```

</div>
</div>

回调可以在不提供模块内容的情况下返回。在这种情况下，加载模块的责任将传递到下一个注册的回调。对于给定的模块，所有插件的所有`onload`回调将按其注册的顺序运行，直到一个负责加载模块。如果没有回调返回模块的内容，则eSbuild将运行其默认模块加载逻辑。

请记住，许多回调可能同时运行。在JavaScript中，如果您的回调执行昂贵的工作，可以在其他线程中运行，例如`fs.readfilesync（）`，您应该使回调`async`和使用`await`（在这种情况下使用`fs.promises.readfile（）`）来允许其他代码与此同时运行。在Go中，每个回调可能在单独的goroutine上运行。如果您的插件使用任何共享数据结构，请确保在适当的同步时进行同步。

### Load options

`onload` API在设置功能中被`调用`，并在某些情况下注册要触发的回调。需要一些选择：

<div>
<div title="js">

```js
interface OnLoadOptions {
  filter: RegExp;
  namespace?: string;
}
```

</div>
<div title="go">

```go
type OnLoadOptions struct {
  Filter    string
  Namespace string
}
```

</div>
</div>

* `filter`

每个回调必须提供一个过滤器，这是一个正则表达式。当路径与此过滤器不匹配时，将跳过注册的回调。您可以在[此阅读更多有关过滤器的信息](./plugins/#filters)。

* `namespace`

这是可选的。如果提供的话，回调仅在所提供的命名空间中的模块中的路径上运行。您可以在[此处阅读更多关于命名空间的信息](./plugins/#namespaces)。

### Load arguments

当eSBuild调用`onload`注册的回调时，它将提供这些参数，其中包含有关要加载的模块的信息：

<div>
<div title="js">

```js
interface OnLoadArgs {
  path: string;
  namespace: string;
  pluginData: any;
}
```

</div>
<div title="go">

```go
type OnLoadArgs struct {
  Path       string
  Namespace  string
  PluginData interface{}
}
```

</div>
</div>

* `path`

这是模块的完全解析的路径。如果命名空间是`文件`，则应被视为文件系统路径，但否则路径可以采用任何形式。例如，下面的示例[HTTP插件](./plugins/#http-plugin)对以`HTTP：//`开始的路径提供了特殊含义。

* `namespace`

这是模块路径所在的命名空间，如解析该文件的[解析回调](./plugins/#resolve-callbacks)所设置。它默认为已加载eSbuild默认行为的模块的`文件`命名空间。您可以在[此处阅读更多关于命名空间的信息](./plugins/#namespaces)。

* `pluginData`

此属性从上一个插件传递，如在插件链中运行的[解析回调](./plugins/#resolve-callbacks)设置。

### Load results

这是可以使用`onload`添加的回调来返回的对象来提供模块的内容。如果您想从回调返回而不提供任何内容，则只需返回默认值（在JavaScript和`OnloadResult {}`中拒绝）。以下是可以返回的可选属性：

<div>
<div title="js">

```js
interface OnLoadResult {
  contents?: string | Uint8Array;
  errors?: Message[];
  loader?: Loader;
  pluginData?: any;
  pluginName?: string;
  resolveDir?: string;
  warnings?: Message[];
  watchDirs?: string[];
  watchFiles?: string[];
}

interface Message {
  text: string;
  location: Location | null;
  detail: any; // The original error from a JavaScript plugin, if applicable
}

interface Location {
  file: string;
  namespace: string;
  line: number; // 1-based
  column: number; // 0-based, in bytes
  length: number; // in bytes
  lineText: string;
}
```

</div>
<div title="go">

```go
type OnLoadResult struct {
  Contents   *string
  Errors     []Message
  Loader     Loader
  PluginData interface{}
  PluginName string
  ResolveDir string
  Warnings   []Message
  WatchDirs  []string
  WatchFiles []string
}

type Message struct {
  Text     string
  Location *Location
  Detail   interface{} // The original error from a Go plugin, if applicable
}

type Location struct {
  File      string
  Namespace string
  Line      int // 1-based
  Column    int // 0-based, in bytes
  Length    int // in bytes
  LineText  string
}
```
</div>
</div>

* `contents`

将其设置为字符串以指定模块的内容。如果设置了这一点，则不会为此已解决的路径运行更多的负载回调。如果未设置为此，eSBuild将继续运行当前登记的负载回调。然后，如果仍未设置内容，则eSBuild将默认为如果已解析路径位于`文件`命名空间中，则默认默认为从文件系统加载内容。

* `loader`

这告诉esbuild如何解释内容。例如，[JS](./content/#javascript) Loader将内容解释为JavaScript，[CSS](./content/#css)加载程序将内容解释为CSS。如果未指定，则加载器默认为`JS`。有关所有内置加载器的完整列表，请参阅[内容类型](./content/#/)页面。

* `resolveDir`

这是在将此模块中的导入路径解析为文件系统上的实际路径时，这是要使用的文件系统目录。对于`文件`命名空间中的模块，此值默认为模块路径的目录部分。否则此值默认为空，除非插件提供一个。如果插件未提供一个，eSbuild的默认行为将无法解析此模块中的任何导入。此目录将传递到在此模块中未解决的导入路径上运行的任何[解决调用](./plugins/#resolve-callbacks)。

* `errors` && `warnings`

这些属性使您可以将路径解析期间生成的任何日志消息传递给 esbuild，它们将根据当前的[日志级别](./transform/#log-level)显示在终端中，并最终出现在最终的构建结果中。例如，如果您正在调用一个库并且该库可以返回错误和/或警告，您将需要使用这些属性转发它们。

如果您只有一个错误要返回，则不必通过错误传递它。你可以简单地在 JavaScript 中抛出错误，或者在 Go 中将错误对象作为第二个返回值返回。

* `watchFiles` && `watchDirs`

这些属性允许您返回额外的文件系统路径，以便 esbuild 的[监视模式](./transform/#watch)进行扫描。默认情况下，esbuild 只会扫描提供给 `onLoad` 插件的路径，并且仅当命名空间是`文件`时。如果您的插件需要对文件系统中的其他更改做出反应，则需要使用这些属性之一。

如果 `watchFiles` 数组中的任何文件自上次构建以来已被更改，则将触发重建。更改检测有点复杂，可能会检查文件内容和/或文件的元数据。

如果 `watchDirs` 数组中任何目录的目录条目列表自上次构建以来已更改，也将触发重建。请注意，这不会检查这些目录中任何文件的内容，也不会检查任何子目录。将此视为检查 Unix `ls` 命令的输出。

为了健壮性，您应该包括在插件评估期间使用的所有文件系统路径。例如，如果您的插件执行与 `require.resolve()` 等效的操作，则您需要包含所有“此文件是否存在”检查的路径，而不仅仅是最终路径。否则，可能会创建一个新文件，导致构建过时，但 esbuild 不会检测到它，因为该路径未列出。

* `pluginName`

此属性允许您使用此模块加载操作的另一个名称替换此插件的名称。通过这个插件代理另一个插件很有用。例如，它允许您将单个插件转发到包含多个插件的子进程。您可能不需要使用它。

* `pluginData`

此属性将传递给在插件链中运行的下一个插件。如果您从 `onLoad` 插件返回它，它将被传递给该文件中任何导入的 `onResolve` 插件，如果您从 `onResolve` 插件返回它，则在加载文件时将任意一个传递给 `onLoad` 插件（这是任意的，因为关系是多对一的）。这对于在不同插件之间传递数据而不必直接协调很有用。

### Caching your plugin

由于 esbuild 速度如此之快，通常情况下插件评估是使用 esbuild 构建时的主要瓶颈。插件评估的缓存由每个插件决定，而不是 esbuild 本身的一部分，因为缓存失效是特定于插件的。如果您正在编写一个需要缓存才能快速运行的慢速插件，则必须自己编写缓存逻辑。

缓存本质上是一个映射，它记住代表您的插件的转换函数。映射的键通常包含转换函数的输入，映射的值通常包含转换函数的输出。此外，地图通常具有某种形式的最近最少使用的缓存驱逐策略，以避免随着时间的推移尺寸不断增大。

缓存可以存储在内存中（有利于与 esbuild 的[增量构建 API](./transform/#incremental) 一起使用）、磁盘上（有利于跨单独的构建脚本调用进行缓存），甚至可以存储在服务器上（有利于可以在不同开发人员之间共享的非常慢的转换）机）。缓存的存储位置因情况而异，取决于您的插件。

这是一个简单的缓存示例。假设我们要缓存函数 `slowTransform()`，该函数将 `*.example` 格式的文件内容作为输入并将其转换为 JavaScript。当与 esbuild 的[增量构建 API](./transform/#incremental) 一起使用时，避免对此函数进行冗余调用的内存缓存可能如下所示：

```ts
let examplePlugin = {
  name: 'example',
  setup(build) {
    let fs = require('fs')
    let cache = new Map

    build.onLoad({ filter: /\.example$/ }, async (args) => {
      let input = await fs.promises.readFile(args.path, 'utf8')
      let key = args.path
      let value = cache.get(key)

      if (!value || value.input !== input) {
        let contents = slowTransform(input)
        value = { input, output: { contents } }
        cache.set(key, value)
      }

      return value.output
    })
  }
}
```

关于上述缓存代码的一些重要警告：

* 上面的代码中没有缓存驱逐策略。如果将越来越多的键添加到缓存映射中，内存使用量将继续增长。

为了在一定程度上克服这种限制，`输入`值存储在缓存`值`中而不是缓存`键`中。这意味着更改文件的内容不会泄漏内存，因为密钥仅包含文件路径，而不包含文件内容。更改文件内容只会覆盖先前的缓存条目。对于有人在增量重建之间反复编辑同一个文件并且只是偶尔添加或重命名文件的常见用法，这可能很好。

但是如果每个构建包含新的唯一路径名（例如，可能包含当前时间的自动生成的临时文件路径），缓存的大小将继续增长。更高级的版本可能会使用最近最少使用的驱逐策略。

* 只有当`slowTransform()` 是一个`纯函数`（意味着函数的输出仅取决于函数的输入）并且函数的所有输入都以某种方式在对缓存映射的查找中被捕获时，缓存失效才有效。例如，如果转换函数自动读取一些其他文件的内容并且输出也取决于这些文件的内容，那么当这些文件被更改时，缓存将无法失效，因为它们不包含在缓存键中。

这部分很容易搞砸，所以值得通过一个具体的例子。考虑一个实现 compile-to-CSS 语言的插件。如果该插件通过解析导入的文件来实现`@import` 规则本身，并将它们捆绑或使任何导出的变量声明可用于导入代码，那么如果它只检查导入文件的内容没有因为更改而更改，则您的插件将不正确导入的文件也可能使缓存无效。

您可能认为您可以将导入文件的内容添加到缓存键来解决此问题。然而，即使这样也可能是不正确的。例如，这个插件使用 [require.resolve()](https://nodejs.org/api/modules.html#modules_require_resolve_request_options) 将导入路径解析为绝对文件路径。这是一种常见的方法，因为它使用节点的内置路径解析，可以解析为包内的路径。此函数通常在返回解析路径之前对不同位置的文件进行多次检查。例如，从文件 `src/entry.css` 导入路径 `pkg/file` 可能会检查以下位置（是的，节点的包解析算法非常低效）：

```sh
src/node_modules/pkg/file
src/node_modules/pkg/file.css
src/node_modules/pkg/file/package.json
src/node_modules/pkg/file/main
src/node_modules/pkg/file/main.css
src/node_modules/pkg/file/main/index.css
src/node_modules/pkg/file/index.css
node_modules/pkg/file
node_modules/pkg/file.css
node_modules/pkg/file/package.json
node_modules/pkg/file/main
node_modules/pkg/file/main.css
node_modules/pkg/file/main/index.css
node_modules/pkg/file/index.css
```

假设 import `pkg/file` 最终解析为绝对路径 `node_modules/pkg/file/index.css`。即使您缓存了导入文件和导入文件的内容并在重用缓存条目之前验证这两个文件的内容仍然相同，如果其他文件中的一个 `require.resolve()`，缓存条目仍然可能是陈旧的 检查自添加缓存条目以来已创建或删除。正确缓存它本质上涉及始终重新运行所有此类路径解析，即使没有更改任何输入文件并验证也没有更改任何路径解析。

* 这些缓存键仅适用于内存缓存。使用相同的缓存键实现文件系统缓存是不正确的。虽然内存缓存保证始终为每个构建运行相同的代码，因为代码也存储在内存中，但文件系统缓存可能会被两个单独的构建访问，每个构建都包含不同的代码。特别是在两次构建之间，`slowTransform()` 函数的代码可能已更改。

这可能发生在各种情况下。包含函数 `slowTransform()` 的包可能已经更新，或者它的一个传递依赖项可能已经更新，即使你由于 npm 处理 semver 的方式固定了包的版本，或者有人可能已经[改变了文件系统上的包内容](https://www.npmjs.com/package/patch-package)与此同时，或者转换函数可能正在调用节点 API，并且不同的构建可能会在不同的节点版本上运行。

如果您想将缓存存储在文件系统上，您应该通过在缓存键中存储转换函数的代码的一些表示来[防止对转换函数的代码进行更改](https://nodejs.org/api/crypto.html#crypto_class_hash)。这通常是某种形式的散列，其中包含所有相关包中所有相关文件的内容以及潜在的其他详细信息，例如您当前正在运行的节点版本。使所有这些都正确是非常重要的。

## Start callbacks

注册开始回调以在新构建开始时收到通知。这会触发所有构建，而不仅仅是初始构建，因此它对于[增量构建](./transform/#incremental)、[监视模式](./transform/#watch)和[服务 API](./transform/#serve) 尤其有用。以下是添加开始回调的方法：

<div>
<div title="js">

```js
let examplePlugin = {
  name: 'example',
  setup(build) {
    build.onStart(() => {
      console.log('build started')
    })
  },
}
```

</div>
<div title="go">

```go
package main

import "fmt"
import "github.com/evanw/esbuild/pkg/api"
import "os"

var examplePlugin = api.Plugin{
  Name: "example",
  Setup: func(build api.PluginBuild) {
    build.OnStart(func() (api.OnStartResult, error) {
      fmt.Fprintf(os.Stderr, "build started\n")
      return api.OnStartResult{}, nil
    })
  },
}

func main() {
}
```

</div>
</div>

您不应该使用 start 回调进行初始化，因为它可以多次运行。如果你想初始化一些东西，只需将你的插件初始化代码直接放在 `setup` 函数中。

开始回调可以是`异步`的并且可以返回一个承诺。但是，构建在开始之前不会等待 promise 得到解决，因此慢启动回调不一定会减慢构建速度。所有启动回调也同时运行，而不是连续运行。返回的 Promise 纯粹用于错误报告，当 start 回调需要执行可能失败或可能产生警告的异步操作时很重要。如果您的插件需要在运行任何解析或加载回调之前等待启动回调中的异步任务完成，您将需要在该异步任务上阻止[解析](./plugins/#resolve-callbacks)或[加载](./plugins/#load-callbacks)回调。

请注意，开始回调不能改变构建选项。初始构建选项只能在 `setup` 函数中修改，并且在 `setup` 返回后使用。第一个构建之后的所有构建都重用相同的[初始选项](./plugins/#build-options)，因此永远不会重新使用初始选项，并且忽略在 start 回调中完成的对 `build.initialOptions` 的修改。

## End callbacks

注册结束回调以在新构建结束时收到通知。这会触发所有构建，而不仅仅是初始构建，因此它对于[增量构建](./transform/#incremental)、[监视模式](./transform/#watch)和[服务 API](./transform/#serve) 尤其有用。添加结束回调的方法如下：

<div>
<div title="js">

```js
let examplePlugin = {
  name: 'example',
  setup(build) {
    build.onEnd(result => {
      console.log(`build ended with ${result.errors.length} errors`)
    })
  },
}
```

</div>
<div title="go">

```go
package main

import "fmt"
import "github.com/evanw/esbuild/pkg/api"
import "os"

var examplePlugin = api.Plugin{
  Name: "example",
  Setup: func(build api.PluginBuild) {
    build.OnEnd(func(result *api.BuildResult) {
      fmt.Fprintf(os.Stderr, "build ended with %d errors\n", len(result.Errors))
    })
  },
}

func main() {
}
```

</div>
</div>

所有结束回调都是串行运行的，并且每个回调都可以访问最终构建结果。它可以在返回之前修改构建结果，并且可以通过返回一个 promise 来延迟构建的结束。如果您希望能够检查构建图，您应该在[初始选项](./plugins/#build-options)上启用[元文件](./transform/#metafile)设置，构建图将作为构建结果对象的`元文件`属性返回。

## Accessing build options

插件可以从设置方法中访问初始`构建`选项。这使您可以检查构建的配置方式以及在构建开始之前修改构建选项。下面是一个例子：

<div>
<div title="js">

```js
let examplePlugin = {
  name: 'auto-node-env',
  setup(build) {
    const options = build.initialOptions
    options.define = options.define || {}
    options.define['process.env.NODE_ENV'] =
      options.minify ? '"production"' : '"development"'
  },
}
```

</div>
<div title="go">

```go
package main

import "github.com/evanw/esbuild/pkg/api"

var examplePlugin = api.Plugin{
  Name: "auto-node-env",
  Setup: func(build api.PluginBuild) {
    options := build.InitialOptions
    if options.Define == nil {
      options.Define = map[string]string{}
    }
    if options.MinifyWhitespace && options.MinifyIdentifiers && options.MinifySyntax {
      options.Define[`process.env.NODE_ENV`] = `"production"`
    } else {
      options.Define[`process.env.NODE_ENV`] = `"development"`
    }
  },
}

func main() {
}
```

</div>
</div>

请注意，在构建开始后对构建选项的修改不会影响构建。特别是，如果插件在第一次构建开始后改变构建选项对象，[增量重建](./transform/#incremental)、[观察模式](./transform/#watch)和[服务模式](./transform/#serve)不会更新它们的构建选项。

## Example plugins

下面的示例插件旨在让您了解可以使用插件 API 执行的不同类型的操作。

### HTTP plugin

***此示例演示：使用文件系统路径以外的路径格式、特定于命名空间的路径解析、同时使用解析和加载回调。***

此插件允许您将 HTTP URL 导入 JavaScript 代码。代码将在构建时自动下载。它启用以下工作流程：

```js
import { zip } from 'https://unpkg.com/lodash-es@4.17.15/lodash.js'
console.log(zip([1, 2], ['a', 'b']))
```

这可以通过以下插件来完成。请注意，对于实际使用，下载应该被缓存，但为了简洁起见，本示例中省略了缓存：

<div>
<div title="js">

```js
let httpPlugin = {
  name: 'http',
  setup(build) {
    let https = require('https')
    let http = require('http')

    // Intercept import paths starting with "http:" and "https:" so
    // esbuild doesn't attempt to map them to a file system location.
    // Tag them with the "http-url" namespace to associate them with
    // this plugin.
    build.onResolve({ filter: /^https?:\/\// }, args => ({
      path: args.path,
      namespace: 'http-url',
    }))

    // We also want to intercept all import paths inside downloaded
    // files and resolve them against the original URL. All of these
    // files will be in the "http-url" namespace. Make sure to keep
    // the newly resolved URL in the "http-url" namespace so imports
    // inside it will also be resolved as URLs recursively.
    build.onResolve({ filter: /.*/, namespace: 'http-url' }, args => ({
      path: new URL(args.path, args.importer).toString(),
      namespace: 'http-url',
    }))

    // When a URL is loaded, we want to actually download the content
    // from the internet. This has just enough logic to be able to
    // handle the example import from unpkg.com but in reality this
    // would probably need to be more complex.
    build.onLoad({ filter: /.*/, namespace: 'http-url' }, async (args) => {
      let contents = await new Promise((resolve, reject) => {
        function fetch(url) {
          console.log(`Downloading: ${url}`)
          let lib = url.startsWith('https') ? https : http
          let req = lib.get(url, res => {
            if ([301, 302, 307].includes(res.statusCode)) {
              fetch(new URL(res.headers.location, url).toString())
              req.abort()
            } else if (res.statusCode === 200) {
              let chunks = []
              res.on('data', chunk => chunks.push(chunk))
              res.on('end', () => resolve(Buffer.concat(chunks)))
            } else {
              reject(new Error(`GET ${url} failed: status ${res.statusCode}`))
            }
          }).on('error', reject)
        }
        fetch(args.path)
      })
      return { contents }
    })
  },
}

require('esbuild').build({
  entryPoints: ['app.js'],
  bundle: true,
  outfile: 'out.js',
  plugins: [httpPlugin],
}).catch(() => process.exit(1))
```

</div>
<div title="go">

```go
package main

import "io/ioutil"
import "net/http"
import "net/url"
import "os"
import "github.com/evanw/esbuild/pkg/api"

var httpPlugin = api.Plugin{
  Name: "http",
  Setup: func(build api.PluginBuild) {
    // Intercept import paths starting with "http:" and "https:" so
    // esbuild doesn't attempt to map them to a file system location.
    // Tag them with the "http-url" namespace to associate them with
    // this plugin.
    build.OnResolve(api.OnResolveOptions{Filter: `^https?://`},
      func(args api.OnResolveArgs) (api.OnResolveResult, error) {
        return api.OnResolveResult{
          Path:      args.Path,
          Namespace: "http-url",
        }, nil
      })

    // We also want to intercept all import paths inside downloaded
    // files and resolve them against the original URL. All of these
    // files will be in the "http-url" namespace. Make sure to keep
    // the newly resolved URL in the "http-url" namespace so imports
    // inside it will also be resolved as URLs recursively.
    build.OnResolve(api.OnResolveOptions{Filter: ".*", Namespace: "http-url"},
      func(args api.OnResolveArgs) (api.OnResolveResult, error) {
        base, err := url.Parse(args.Importer)
        if err != nil {
          return api.OnResolveResult{}, err
        }
        relative, err := url.Parse(args.Path)
        if err != nil {
          return api.OnResolveResult{}, err
        }
        return api.OnResolveResult{
          Path:      base.ResolveReference(relative).String(),
          Namespace: "http-url",
        }, nil
      })

    // When a URL is loaded, we want to actually download the content
    // from the internet. This has just enough logic to be able to
    // handle the example import from unpkg.com but in reality this
    // would probably need to be more complex.
    build.OnLoad(api.OnLoadOptions{Filter: ".*", Namespace: "http-url"},
      func(args api.OnLoadArgs) (api.OnLoadResult, error) {
        res, err := http.Get(args.Path)
        if err != nil {
          return api.OnLoadResult{}, err
        }
        defer res.Body.Close()
        bytes, err := ioutil.ReadAll(res.Body)
        if err != nil {
          return api.OnLoadResult{}, err
        }
        contents := string(bytes)
        return api.OnLoadResult{Contents: &contents}, nil
      })
  },
}

func main() {
  result := api.Build(api.BuildOptions{
    EntryPoints: []string{"app.js"},
    Bundle:      true,
    Outfile:     "out.js",
    Plugins:     []api.Plugin{httpPlugin},
    Write:       true,
  })

  if len(result.Errors) > 0 {
    os.Exit(1)
  }
}
```

</div>
</div>

该插件首先使用解析器将 `http://` 和 `https://` URL 移动到 `http-url` 命名空间。设置命名空间会告诉 esbuild 不要将这些路径视为文件系统路径。然后，`http-url` 命名空间的加载器下载模块并将内容返回给 esbuild。从那里，`http-url` 命名空间中模块内的导入路径的另一个解析器获取相对路径，并通过针对导入模块的 URL 解析它们将它们转换为完整的 URL。然后反馈到加载器，允许下载的模块递归下载其他模块。

### WebAssembly plugin

***这个例子演示：使用二进制数据，创建虚拟；模块使用 import 语句，在不同的命名空间中重新使用相同的路径。***

这个插件允许你将 `.wasm` 文件导入 JavaScript 代码。它不会自己生成 WebAssembly 文件；这可以通过其他工具完成，也可以通过修改此示例插件来满足您的需求。它启用以下工作流程：

```js
import load from './example.wasm'
load(imports).then(exports => { ... })
```

当您导入 `.wasm` 文件时，此插件会在 `wasm-stub` 命名空间中生成一个虚拟 JavaScript 模块，该模块具有单个函数，用于加载作为默认导出导出的 WebAssembly 模块。该存根模块如下所示：

```js
import wasm from '/path/to/example.wasm'
export default (imports) =>
  WebAssembly.instantiate(wasm, imports).then(
    result => result.instance.exports)
```

然后该存根模块使用 esbuild 的内置[二进制](./content/#binary)加载器将 WebAssembly 文件本身作为 `wasm-binary` 命名空间中的另一个模块导入。这意味着导入 `.wasm` 文件实际上会生成两个虚拟模块。这是插件的代码：

<div>
<div title="js">

```js
let wasmPlugin = {
  name: 'wasm',
  setup(build) {
    let path = require('path')
    let fs = require('fs')

    // Resolve ".wasm" files to a path with a namespace
    build.onResolve({ filter: /\.wasm$/ }, args => {
      // If this is the import inside the stub module, import the
      // binary itself. Put the path in the "wasm-binary" namespace
      // to tell our binary load callback to load the binary file.
      if (args.namespace === 'wasm-stub') {
        return {
          path: args.path,
          namespace: 'wasm-binary',
        }
      }

      // Otherwise, generate the JavaScript stub module for this
      // ".wasm" file. Put it in the "wasm-stub" namespace to tell
      // our stub load callback to fill it with JavaScript.
      //
      // Resolve relative paths to absolute paths here since this
      // resolve callback is given "resolveDir", the directory to
      // resolve imports against.
      if (args.resolveDir === '') {
        return // Ignore unresolvable paths
      }
      return {
        path: path.isAbsolute(args.path) ? args.path : path.join(args.resolveDir, args.path),
        namespace: 'wasm-stub',
      }
    })

    // Virtual modules in the "wasm-stub" namespace are filled with
    // the JavaScript code for compiling the WebAssembly binary. The
    // binary itself is imported from a second virtual module.
    build.onLoad({ filter: /.*/, namespace: 'wasm-stub' }, async (args) => ({
      contents: `import wasm from ${JSON.stringify(args.path)}
        export default (imports) =>
          WebAssembly.instantiate(wasm, imports).then(
            result => result.instance.exports)`,
    }))

    // Virtual modules in the "wasm-binary" namespace contain the
    // actual bytes of the WebAssembly file. This uses esbuild's
    // built-in "binary" loader instead of manually embedding the
    // binary data inside JavaScript code ourselves.
    build.onLoad({ filter: /.*/, namespace: 'wasm-binary' }, async (args) => ({
      contents: await fs.promises.readFile(args.path),
      loader: 'binary',
    }))
  },
}

require('esbuild').build({
  entryPoints: ['app.js'],
  bundle: true,
  outfile: 'out.js',
  plugins: [wasmPlugin],
}).catch(() => process.exit(1))
```

</div>
<div title="go">

```go
package main

import "encoding/json"
import "io/ioutil"
import "os"
import "path/filepath"
import "github.com/evanw/esbuild/pkg/api"

var wasmPlugin = api.Plugin{
  Name: "wasm",
  Setup: func(build api.PluginBuild) {
    // Resolve ".wasm" files to a path with a namespace
    build.OnResolve(api.OnResolveOptions{Filter: `\.wasm$`},
      func(args api.OnResolveArgs) (api.OnResolveResult, error) {
        // If this is the import inside the stub module, import the
        // binary itself. Put the path in the "wasm-binary" namespace
        // to tell our binary load callback to load the binary file.
        if args.Namespace == "wasm-stub" {
          return api.OnResolveResult{
            Path:      args.Path,
            Namespace: "wasm-binary",
          }, nil
        }

        // Otherwise, generate the JavaScript stub module for this
        // ".wasm" file. Put it in the "wasm-stub" namespace to tell
        // our stub load callback to fill it with JavaScript.
        //
        // Resolve relative paths to absolute paths here since this
        // resolve callback is given "resolveDir", the directory to
        // resolve imports against.
        if args.ResolveDir == "" {
          return api.OnResolveResult{}, nil // Ignore unresolvable paths
        }
        if !filepath.IsAbs(args.Path) {
          args.Path = filepath.Join(args.ResolveDir, args.Path)
        }
        return api.OnResolveResult{
          Path:      args.Path,
          Namespace: "wasm-stub",
        }, nil
      })

    // Virtual modules in the "wasm-stub" namespace are filled with
    // the JavaScript code for compiling the WebAssembly binary. The
    // binary itself is imported from a second virtual module.
    build.OnLoad(api.OnLoadOptions{Filter: `.*`, Namespace: "wasm-stub"},
      func(args api.OnLoadArgs) (api.OnLoadResult, error) {
        bytes, err := json.Marshal(args.Path)
        if err != nil {
          return api.OnLoadResult{}, err
        }
        contents := `import wasm from ` + string(bytes) + `
          export default (imports) =>
            WebAssembly.instantiate(wasm, imports).then(
              result => result.instance.exports)`
        return api.OnLoadResult{Contents: &contents}, nil
      })

    // Virtual modules in the "wasm-binary" namespace contain the
    // actual bytes of the WebAssembly file. This uses esbuild's
    // built-in "binary" loader instead of manually embedding the
    // binary data inside JavaScript code ourselves.
    build.OnLoad(api.OnLoadOptions{Filter: `.*`, Namespace: "wasm-binary"},
      func(args api.OnLoadArgs) (api.OnLoadResult, error) {
        bytes, err := ioutil.ReadFile(args.Path)
        if err != nil {
          return api.OnLoadResult{}, err
        }
        contents := string(bytes)
        return api.OnLoadResult{
          Contents: &contents,
          Loader:   api.LoaderBinary,
        }, nil
      })
  },
}

func main() {
  result := api.Build(api.BuildOptions{
    EntryPoints: []string{"app.js"},
    Bundle:      true,
    Outfile:     "out.js",
    Plugins:     []api.Plugin{wasmPlugin},
    Write:       true,
  })

  if len(result.Errors) > 0 {
    os.Exit(1)
  }
}
```

</div>
</div>

该插件分多个步骤工作。首先，解析回调捕获普通模块中的 `.wasm` 路径并将它们移动到 `wasm-stub` 命名空间。然后，`wasm-stub` 命名空间的加载回调生成一个 JavaScript 存根模块，该模块导出加载器函数并导入 `.wasm` 路径。这将再次调用解析回调，这次将路径移动到 `wasm-binary` 命名空间。然后 `wasm-binary` 命名空间的第二个加载回调导致使用`二进制`加载器加载 WebAssembly 文件，它告诉 esbuild 将文件本身嵌入到包中。

### Svelte plugin

***此示例演示：支持编译为 JavaScript 语言、报告警告和错误、集成源映射。***

此插件允许您捆绑来自 Svelte 框架的 `.svelte` 文件。您使用类似于 HTML 的语法编写代码，然后由 [Svelte](https://svelte.dev/) 编译器将其转换为 JavaScript。 Svelte 代码如下所示：

```html
<script>
  let a = 1;
  let b = 2;
</script>
<input type="number" bind:value={a}>
<input type="number" bind:value={b}>
<p>{a} + {b} = {a + b}</p>
```

使用 Svelte 编译器编译此代码会生成一个 JavaScript 模块，该模块依赖于 `svelte/内部包`，并使用默认`导出`将组件导出为单个类。这意味着 `.svelte` 文件可以独立编译，这使得 Svelte 非常适合 esbuild 插件。这个插件是通过像这样导入 `.svelte` 文件来触发的：

```js
import Button from './button.svelte'
```

这是该插件的代码（该插件没有 Go 版本，因为 Svelte 编译器是用 JavaScript 编写的）：

```js
let sveltePlugin = {
  name: 'svelte',
  setup(build) {
    let svelte = require('svelte/compiler')
    let path = require('path')
    let fs = require('fs')

    build.onLoad({ filter: /\.svelte$/ }, async (args) => {
      // This converts a message in Svelte's format to esbuild's format
      let convertMessage = ({ message, start, end }) => {
        let location
        if (start && end) {
          let lineText = source.split(/\r\n|\r|\n/g)[start.line - 1]
          let lineEnd = start.line === end.line ? end.column : lineText.length
          location = {
            file: filename,
            line: start.line,
            column: start.column,
            length: lineEnd - start.column,
            lineText,
          }
        }
        return { text: message, location }
      }

      // Load the file from the file system
      let source = await fs.promises.readFile(args.path, 'utf8')
      let filename = path.relative(process.cwd(), args.path)

      // Convert Svelte syntax to JavaScript
      try {
        let { js, warnings } = svelte.compile(source, { filename })
        let contents = js.code + `//# sourceMappingURL=` + js.map.toUrl()
        return { contents, warnings: warnings.map(convertMessage) }
      } catch (e) {
        return { errors: [convertMessage(e)] }
      }
    })
  }
}

require('esbuild').build({
  entryPoints: ['app.js'],
  bundle: true,
  outfile: 'out.js',
  plugins: [sveltePlugin],
}).catch(() => process.exit(1))
```

这个插件只需要一个加载回调，而不是解析回调，因为它足够简单，它只需要将加载的代码转换成 JavaScript 而不用担心代码来自哪里。

它将 `//# sourceMappingURL=` 注释附加到生成的 JavaScript 以告诉 esbuild 如何将生成的 JavaScript 映射回原始源代码。如果在构建期间启用了源映射，esbuild 将使用它来确保最终源映射中生成的位置一直映射回原始 Svelte 文件，而不是中间 JavaScript 代码。

## Plugin API limitations

此 API 并不打算涵盖所有用例。不可能连接到捆绑过程的每个部分。例如，目前无法直接修改 AST。存在此限制是为了保持 esbuild 的出色性能特征，并避免暴露过多的 API 表面，这将是维护负担并会阻止涉及更改 AST 的改进。

将 esbuild 视为网络的“链接器”的一种方式。就像本地代码的链接器一样，esbuild 的工作是获取一组文件，解析和绑定它们之间的引用，并生成一个包含所有链接在一起的代码的单个文件。插件的工作是生成最终被链接的单个文件。

esbuild 中的插件在相对范围内且仅自定义构建的一小部分时效果最佳。例如，自定义格式（例如 YAML）的特殊配置文件的插件就非常合适。你使用的插件越多，你的构建就会越慢，特别是如果你的插件是用 JavaScript 编写的。如果插件适用于您构建中的每个文件，那么您的构建可能会非常缓慢。如果缓存适用，则必须由插件本身完成。

