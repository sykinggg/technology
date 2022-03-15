# Transform & Build Api

## Transform Api

转换 API 调用对单个字符串进行操作，而无需访问文件系统。这使其非常适合在没有文件系统的环境（例如浏览器）中使用或作为其他工具链的一部分使用。下面是一个简单的转换：

> cli

```bash
echo 'let x: number = 1' | esbuild --loader=ts
let x = 1;
```

> js

```js
require('esbuild').transformSync('let x: number = 1', {
  loader: 'ts',
})

{
  code: 'let x = 1;\n',
  map: '',
  warnings: []
}
```

> go

```go
package main

import "fmt"
import "github.com/evanw/esbuild/pkg/api"
func main() {
  result := api.Transform("let x: number = 1", api.TransformOptions{
    Loader: api.LoaderTS,
  })

  if len(result.Errors) == 0 {
    fmt.Printf("%s", result.Code)
  }
}
```
 

如果未提供输入文件且不存在 --bundle 标志，则命令行界面将使用此 API 调用。在这种情况下，输入字符串来自标准输入，输出字符串进入标准输出。转换 API 可以采用以下选项：

### 基础配置
[Define](/esbuild/api/transform.md#define)
[Format](/esbuild/api/transform.md#format)
[Loader](/esbuild/api/transform.md#loader)
[Minify](/esbuild/api/transform.md#minify)
[SourceMap](/esbuild/api/transform.md#sourcemap)
[Target](/esbuild/api/transform.md#target)
### 高级配置
[Banner](/esbuild/api/transform.md#banner)
[Charset](/esbuild/api/transform.md#charset)
[Color](/esbuild/api/transform.md#color)
[Footer](/esbuild/api/transform.md#footer)
[Global name](/esbuild/api/transform.md#global-name)
[JSX](/esbuild/api/transform.md#jsx)
[JSX factory](/esbuild/api/transform.md#jsx-factory)
[JSX fragment](/esbuild/api/transform.md#jsx-fragment)
[Keep names](/esbuild/api/transform.md#keep-names)
[Legal comments](/esbuild/api/transform.md#legal-comments)
[Log level](/esbuild/api/transform.md#log-level)
[Log limit](/esbuild/api/transform.md#log-limit)
[Pure](/esbuild/api/transform.md#pure)
[Source Root](/esbuild/api/transform.md#source-root)
[Sourcefile](/esbuild/api/transform.md#sourcefile)
[Sources Content](/esbuild/api/transform.md#sources-content)
[Tree shaking](/esbuild/api/transform.md#tree-shaking)
[Tsconfig raw](/esbuild/api/transform.md#tsconfig-raw)

## Build API

构建 API 调用对文件系统中的一个或多个文件进行操作。这允许文件相互引用并捆绑在一起。下面是一个简单的构建

<div>
<div title="cli" active>

```bash
echo 'let x: number = 1' > in.ts
esbuild in.ts --outfile=out.js
cat out.js
let x = 1;
```

</div>
<div title="js">

```js
require('fs').writeFileSync('in.ts', 'let x: number = 1')

require('esbuild').buildSync({
  entryPoints: ['in.ts'],
  outfile: 'out.js',
})
{ errors: [], warnings: [] }

require('fs').readFileSync('out.js', 'utf8')
'let x = 1;\n'
```

</div>
<div title="go">

```go
package main

import "io/ioutil"
import "github.com/evanw/esbuild/pkg/api"
import "os"

func main() {
  ioutil.WriteFile("in.ts", []byte("let x: number = 1"), 0644)

  result := api.Build(api.BuildOptions{
    EntryPoints: []string{"in.ts"},
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

如果提供了至少一个输入文件或存在 --bundle 标志，则命令行界面将使用此 API 调用。请注意，默认情况下 esbuild 不捆绑。您必须显式传递 --bundle 标志以启用捆绑。如果未提供输入文件，则从标准输入读取单个输入文件。构建 API 可以采用以下选项：

### 基础配置
[Bundle](/esbuild/api/transform.md#bundle)
[Define](/esbuild/api/transform.md#define)
[Entry points](/esbuild/api/transform.md#entry-points)
[External](/esbuild/api/transform.md#external)
[Format](/esbuild/api/transform.md#format)
[Inject](/esbuild/api/transform.md#inject)
[Loader](/esbuild/api/transform.md#loader)
[Minify](/esbuild/api/transform.md#minify)
[Outdir](/esbuild/api/transform.md#outdir)
[Outfile](/esbuild/api/transform.md#outfile)
[Platform](/esbuild/api/transform.md#platform)
[Serve](/esbuild/api/transform.md#serve)
[Sourcemap](/esbuild/api/transform.md#sourcemap)
[Splitting](/esbuild/api/transform.md#splitting)
[Target](/esbuild/api/transform.md#target)
[Watch](/esbuild/api/transform.md#watch)
[Write](/esbuild/api/transform.md#write)

### 高级配置

[Allow overwrite](/esbuild/api/transform.md#allow-overwrite)
[Asset names](/esbuild/api/transform.md#asset-names)
[Banner](/esbuild/api/transform.md#banner)
[Charset](/esbuild/api/transform.md#charset)
[Chunk names](/esbuild/api/transform.md#chunk-names)
[Color](/esbuild/api/transform.md#color)
[Conditions](/esbuild/api/transform.md#conditions)
[Entry names](/esbuild/api/transform.md#entry-names)
[Footer](/esbuild/api/transform.md#footer)
[Global name](/esbuild/api/transform.md#global-name)
[Incremental](/esbuild/api/transform.md#incremental)
[JSX](/esbuild/api/transform.md#jsx)
[JSX factory](/esbuild/api/transform.md#jsx-factory)
[JSX fragment](/esbuild/api/transform.md#jsx-fragment)
[Keep names](/esbuild/api/transform.md#keep-names)
[Legal comments](/esbuild/api/transform.md#legal-comments)
[Log level](/esbuild/api/transform.md#log-level)
[Log limit](/esbuild/api/transform.md#log-limit)
[Main fields](/esbuild/api/transform.md#main-fields)
[Metafile](/esbuild/api/transform.md#metafile)
[Node paths](/esbuild/api/transform.md#node-paths)
[Out extension](/esbuild/api/transform.md#out-extension)
[Outbase](/esbuild/api/transform.md#outbase)
[Preserve symlinks](/esbuild/api/transform.md#preserve-symlinks)
[Public path](/esbuild/api/transform.md#public-path)
[Pure](/esbuild/api/transform.md#pure)
[Resolve extensions](/esbuild/api/transform.md#resolve-extensions)
[Source Root](/esbuild/api/transform.md#source-root)
[Sourcefile](/esbuild/api/transform.md#sourcefile)
[Sources Content](/esbuild/api/transform.md#sources-content)
[Stdin](/esbuild/api/transform.md#stdin)
[Tree shaking](/esbuild/api/transform.md#tree-shaking)
[Tsconfig](/esbuild/api/transform.md#tsconfig)
[Working directory](/esbuild/api/transform.md#working-directory)

## Simple options

### Bundle

支持: Build

捆绑文件意味着将任何导入的依赖项内联到文件本身中。此过程是递归的，因此依赖项（等等）的依赖项也将被内联。默认情况下，esbuild 不会捆绑输入文件。必须像这样显式启用捆绑：

<div>
<div title="cli" active>

```s
esbuild in.js --bundle
```

</div>

<div title="js">

```js

require('esbuild').buildSync({
  entryPoints: ['in.js'],
  bundle: true,
  outfile: 'out.js',
})
{ errors: [], warnings: [] }
```

</div>

<div title="go">

```go

package main

import "github.com/evanw/esbuild/pkg/api"
import "os"

func main() {
  result := api.Build(api.BuildOptions{
    EntryPoints: []string{"in.js"},
    Bundle:      true,
  })

  if len(result.Errors) > 0 {
    os.Exit(1)
  }
}
```

</div>
</div>

请注意，捆绑与文件串联不同。在启用捆绑的情况下传递 esbuild 多个输入文件将创建多个单独的捆绑包，而不是将输入文件连接在一起。要将一组文件与 esbuild 连接在一起，请将它们全部导入到一个单一的入口点文件中，并将该文件与 esbuild 捆绑在一起。

另请注意，捆绑仅适用于静态定义的导入（即当导入路径是字符串文字时）。在运行时定义的导入（即依赖于运行时代码评估的导入）不会被捆绑，因为捆绑是一个编译时操作。如果您需要捆绑执行此操作的代码，您可能需要使用另一个捆绑器而不是 esbuild。例如：

```js
// Static imports (will be bundled by esbuild)
import 'pkg';
import('pkg');
require('pkg');

// Dynamic imports (will not be bundled by esbuild)
import(`pkg/${foo}`);
require(`pkg/${foo}`);
['pkg'].map(require);
```

### Define

支持: Transform | Build

此功能提供了一种用常量表达式替换全局标识符的方法。它可以是一种在构建之间更改某些代码行为而不更改代码本身的方法：

<div>

<div title="cli">

```sh

echo 'DEBUG && require("hooks")' | esbuild --define:DEBUG=true
require("hooks");
echo 'DEBUG && require("hooks")' | esbuild --define:DEBUG=false
false;
```

</div>

<div title="js">

```js

let js = 'DEBUG && require("hooks")'
require('esbuild').transformSync(js, {
  define: { DEBUG: 'true' },
})
{
  code: 'require("hooks");\n',
  map: '',
  warnings: []
}
require('esbuild').transformSync(js, {
  define: { DEBUG: 'false' },
})
{
  code: 'false;\n',
  map: '',
  warnings: []
}
```

</div>

<div title="go">

```go

package main

import "fmt"
import "github.com/evanw/esbuild/pkg/api"

func main() {
  js := "DEBUG && require('hooks')"

  result1 := api.Transform(js, api.TransformOptions{
    Define: map[string]string{"DEBUG": "true"},
  })

  if len(result1.Errors) == 0 {
    fmt.Printf("%s", result1.Code)
  }

  result2 := api.Transform(js, api.TransformOptions{
    Define: map[string]string{"DEBUG": "false"},
  })

  if len(result2.Errors) == 0 {
    fmt.Printf("%s", result2.Code)
  }
}
```

</div>

</div>

替换表达式必须是 JSON 对象（空值、布尔值、数字、字符串、数组或对象）或单个标识符。数组和对象以外的替换表达式是内联替换的，这意味着它们可以参与常量折叠。数组和对象替换表达式存储在变量中，然后使用标识符引用而不是内联替换，这避免了替换值的重复副本，但意味着值不参与常量折叠。

如果您想用字符串文字替换某些内容，请记住传递给 esbuild 的替换值本身必须包含引号。省略引号意味着替换值是一个标识符：

<div>

<div title="cli">

```sh

echo 'id, str' | esbuild --define:id=text --define:str=\"text\"
text, "text";
```

</div>

<div title="js">

```js
// js

let js = 'DEBUG && require("hooks")'
require('esbuild').transformSync(js, {
  define: { DEBUG: 'true' },
})
{
  code: 'require("hooks");\n',
  map: '',
  warnings: []
}
require('esbuild').transformSync(js, {
  define: { DEBUG: 'false' },
})
{
  code: 'false;\n',
  map: '',
  warnings: []
}
```

</div>

<div title="go">

```go
// go

package main

import "fmt"
import "github.com/evanw/esbuild/pkg/api"

func main() {
  js := "DEBUG && require('hooks')"

  result1 := api.Transform(js, api.TransformOptions{
    Define: map[string]string{"DEBUG": "true"},
  })

  if len(result1.Errors) == 0 {
    fmt.Printf("%s", result1.Code)
  }

  result2 := api.Transform(js, api.TransformOptions{
    Define: map[string]string{"DEBUG": "false"},
  })

  if len(result2.Errors) == 0 {
    fmt.Printf("%s", result2.Code)
  }
}
```

</div>

</div>

替换表达式必须是 JSON 对象（空值、布尔值、数字、字符串、数组或对象）或单个标识符。数组和对象以外的替换表达式是内联替换的，这意味着它们可以参与常量折叠。数组和对象替换表达式存储在变量中，然后使用标识符引用而不是内联替换，这避免了替换值的重复副本，但意味着值不参与常量折叠。

如果您想用字符串文字替换某些内容，请记住传递给 esbuild 的替换值本身必须包含引号。省略引号意味着替换值是一个标识符：

<div>
<div title="cli">

```sh

echo 'id, str' | esbuild --define:id=text --define:str=\"text\"
text, "text";
```

</div>
<div title="js">

```js

let js = 'DEBUG && require("hooks")'
require('esbuild').transformSync(js, {
  define: { DEBUG: 'true' },
})
{
  code: 'require("hooks");\n',
  map: '',
  warnings: []
}
require('esbuild').transformSync(js, {
  define: { DEBUG: 'false' },
})
{
  code: 'false;\n',
  map: '',
  warnings: []
}
```

</div>
<div title="go">

```go

package main

import "fmt"
import "github.com/evanw/esbuild/pkg/api"

func main() {
  js := "DEBUG && require('hooks')"

  result1 := api.Transform(js, api.TransformOptions{
    Define: map[string]string{"DEBUG": "true"},
  })

  if len(result1.Errors) == 0 {
    fmt.Printf("%s", result1.Code)
  }

  result2 := api.Transform(js, api.TransformOptions{
    Define: map[string]string{"DEBUG": "false"},
  })

  if len(result2.Errors) == 0 {
    fmt.Printf("%s", result2.Code)
  }
}
```

</div>
</div>

替换表达式必须是 JSON 对象（空值、布尔值、数字、字符串、数组或对象）或单个标识符。数组和对象以外的替换表达式是内联替换的，这意味着它们可以参与常量折叠。数组和对象替换表达式存储在变量中，然后使用标识符引用而不是内联替换，这避免了替换值的重复副本，但意味着值不参与常量折叠。

如果您想用字符串文字替换某些内容，请记住传递给 esbuild 的替换值本身必须包含引号。省略引号意味着替换值是一个标识符：

<div>
<div title="cli">

```sh

echo 'id, str' | esbuild --define:id=text --define:str=\"text\"
text, "text";
```

</div>
<div title="js">

```js

let js = 'DEBUG && require("hooks")'
require('esbuild').transformSync(js, {
  define: { DEBUG: 'true' },
})
{
  code: 'require("hooks");\n',
  map: '',
  warnings: []
}
require('esbuild').transformSync(js, {
  define: { DEBUG: 'false' },
})
{
  code: 'false;\n',
  map: '',
  warnings: []
}
```

</div>
<div title="go">

```go

package main

import "fmt"
import "github.com/evanw/esbuild/pkg/api"

func main() {
  js := "DEBUG && require('hooks')"

  result1 := api.Transform(js, api.TransformOptions{
    Define: map[string]string{"DEBUG": "true"},
  })

  if len(result1.Errors) == 0 {
    fmt.Printf("%s", result1.Code)
  }

  result2 := api.Transform(js, api.TransformOptions{
    Define: map[string]string{"DEBUG": "false"},
  })

  if len(result2.Errors) == 0 {
    fmt.Printf("%s", result2.Code)
  }
}
```

</div>
</div>

替换表达式必须是 JSON 对象（空值、布尔值、数字、字符串、数组或对象）或单个标识符。数组和对象以外的替换表达式是内联替换的，这意味着它们可以参与常量折叠。数组和对象替换表达式存储在变量中，然后使用标识符引用而不是内联替换，这避免了替换值的重复副本，但意味着值不参与常量折叠。

如果您想用字符串文字替换某些内容，请记住传递给 esbuild 的替换值本身必须包含引号。省略引号意味着替换值是一个标识符：

<div>
<div title="cli">

```sh

echo 'id, str' | esbuild --define:id=text --define:str=\"text\"
text, "text";
```

</div>
<div title="js">

```js

require('esbuild').transformSync('id, str', {
  define: { id: 'text', str: '"text"' },
})
{
  code: 'text, "text";\n',
  map: '',
  warnings: []
}
```

</div>
<div title="go">

```go

package main

import "fmt"
import "github.com/evanw/esbuild/pkg/api"

func main() {
  result := api.Transform("id, text", api.TransformOptions{
    Define: map[string]string{
      "id":  "text",
      "str": "\"text\"",
    },
  })

  if len(result.Errors) == 0 {
    fmt.Printf("%s", result.Code)
  }
}
```

</div>
</div>

如果您使用的是 CLI，请记住，不同的 shell 对如何转义双引号字符（当替换值是字符串时这是必需的）有不同的规则。使用 \" 反斜杠转义，因为它适用于 bash 和 Windows 命令提示符。在 bash 中工作的其他转义双引号的方法（例如用单引号将它们括起来）在 Windows 上不起作用，因为 Windows 命令提示符不会删除单引号. 当在 package.json 文件中使用 npm 脚本中的 CLI 时，这是相关的，人们希望它可以在所有平台上工作：

```json
{
  "scripts": {
    "build": "esbuild --define:process.env.NODE_ENV=\\\"production\\\" app.js"
  }
}
```

如果您仍然遇到使用不同 shell 的跨平台报价转义问题，您可能希望改用 JavaScript API。在那里您可以使用常规 JavaScript 语法来消除跨平台差异。


### Entry points

支持: Build

这是一个文件数组，每个文件都用作捆绑算法的输入。它们被称为“入口点”，因为每个入口点都是被评估的初始脚本，然后加载它所代表的代码的所有其他方面。不是使用 `<script>` 标签在页面中加载许多库，而是使用 `import` 语句将它们导入到您的入口点（或另一个文件，然后导入到您的入口点）。

简单的应用程序只需要一个入口点，但如果有多个逻辑上独立的代码组（例如主线程和工作线程），或者应用程序具有独立的相对不相关的区域（例如着陆页、编辑器），则附加入口点会很有用页面和设置页面。单独的入口点有助于引入关注点分离，并有助于减少浏览器需要下载的不必要代码量。如果适用，在浏览到第二个页面时，启用代码拆分可以进一步减少下载大小，第二个页面的入口点与已经访问过的第一个页面共享一些已下载的代码。

指定入口点的简单方法是只传递一个文件路径数组：

<div>
<div title="cli">

```bash
esbuild home.ts settings.ts --bundle --outdir=out
```

</div>
<div title="js">

```js

require('esbuild').buildSync({
  entryPoints: ['home.ts', 'settings.ts'],
  bundle: true,
  write: true,
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
    EntryPoints: []string{"home.ts", "settings.ts"},
    Bundle:      true,
    Write:       true,
    Outdir:      "out",
  })

  if len(result.Errors) > 0 {
    os.Exit(1)
  }
}
```

</div>
</div>

这将生成两个输出文件，`out/home.js` 和 `out/settings.js`，分别对应两个入口点 `home.ts` 和 `settings.ts`。

为了进一步控制如何从相应的输入入口点派生输出文件的路径，您应该查看以下选项：

* [Entry names]()

* [Out extension]()

* [Outbase]()

* [Outdir]()

* [Outfile]()

此外，您还可以使用替代入口点语法为每个单独的入口点指定完全自定义的输出路径：

<div>
<div title="cli">

```sh
esbuild out1=home.js out2=settings.js --bundle --outdir=out
```

</div>
<div title="js">

```js

require('esbuild').buildSync({
  entryPoints: {
    out1: 'home.js',
    out2: 'settings.js',
  },
  bundle: true,
  write: true,
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
    EntryPointsAdvanced: []api.EntryPoint{{
      OutputPath: "out1",
      InputPath:  "home.js",
    }, {
      OutputPath: "out2",
      InputPath:  "settings.js",
    }},
    Bundle: true,
    Write:  true,
    Outdir: "out",
  })

  if len(result.Errors) > 0 {
    os.Exit(1)
  }
}
```

</div>
</div>

这将生成两个输出文件，`out/out1.js` 和 `out/out2.j`s，分别对应两个入口点 `home.ts` 和 `settings.ts`。

### External

支持: Build

您可以将文件或包标记为外部以将其从构建中排除。导入不会被捆绑，而是被保留（对 `iife` 和 `cjs` 格式使用 `require`，对 `esm` 格式使用 `import`）并将在运行时进行评估。

这有多种用途。首先，它可用于从您的包中修剪不必要的代码，以便您知道永远不会执行的代码路径。例如，一个包可能包含只在 `node` 中运行的代码，但你只能在浏览器中使用该包。它还可以用于在运行时从无法捆绑的包中导入 `node` 中的代码。例如，`fsevents` 包包含一个原生扩展，`esbuild` 不支持该扩展。将某些内容标记为外部内容如下所示：

<div>
<div title="cli">

```sh

echo 'require("fsevents")' > app.js
esbuild app.js --bundle --external:fsevents --platform=node
// app.js
require("fsevents");
```

</div>
<div title="js">

```js

require('fs').writeFileSync('app.js', 'require("fsevents")')
require('esbuild').buildSync({
  entryPoints: ['app.js'],
  outfile: 'out.js',
  bundle: true,
  platform: 'node',
  external: ['fsevents'],
})
{ errors: [], warnings: [] }
```

</div>
<div title="go">

```go

package main

import "io/ioutil"
import "github.com/evanw/esbuild/pkg/api"
import "os"

func main() {
  ioutil.WriteFile("app.js", []byte("require(\"fsevents\")"), 0644)

  result := api.Build(api.BuildOptions{
    EntryPoints: []string{"app.js"},
    Outfile:     "out.js",
    Bundle:      true,
    Write:       true,
    Platform:    api.PlatformNode,
    External:    []string{"fsevents"},
  })

  if len(result.Errors) > 0 {
    os.Exit(1)
  }
}
```

</div>
</div>

您还可以在外部路径中使用 `*` 通配符将匹配该模式的所有文件标记为外部。例如，您可以使用 `*.png` 删除所有 `.png` 文件或使用 `/images/*` 删除所有以 `/images`/ 开头的路径。当外部路径中存在 `*` 通配符时，该模式将应用于源代码中的原始路径，而不是解析为实际文件系统路径后的路径。这使您可以匹配不是真实文件系统路径的路径。

### Format

支持: Transform | Build

这将设置生成的 JavaScript 文件的输出格式。目前有三个可能的值：`iife`、`cjs` 和 `esm`。

#### IIFE

`iife` 格式代表“立即调用的函数表达式”，旨在在浏览器中运行。将代码包装在函数表达式中可确保代码中的任何变量不会意外地与全局范围内的变量发生冲突。如果您的入口点具有要在浏览器中公开为全局的导出，您可以使用全局名称设置来配置该全局的名称。 `iife` 格式是默认格式，除非您将平台设置为node。使用它看起来像这样：

<div>
<div title="cli">

```sh

echo 'alert("test")' | esbuild --format=iife
(() => {
  alert("test");
})();
```

</div>
<div title="js">

```js

let js = 'alert("test")'
let out = require('esbuild').transformSync(js, {
  format: 'iife',
})
process.stdout.write(out.code)
```

</div>
<div title="go">

```go

package main

import "fmt"
import "github.com/evanw/esbuild/pkg/api"

func main() {
  js := "alert(\"test\")"

  result := api.Transform(js, api.TransformOptions{
    Format: api.FormatIIFE,
  })

  if len(result.Errors) == 0 {
    fmt.Printf("%s", result.Code)
  }
}
```

</div>
</div>

#### CommonJS

`cjs` 格式代表“CommonJS”，旨在在 `node.js` 中运行。它假设环境包含`exports`, `require`, 和 `module`。使用 `ECMAScript` 模块语法导出的入口点将被转换为一个模块，每个导出名称的导出都有一个 `getter`。当您将 [platform](./transform/#platform)设置为`node`时，`cjs` 格式是默认格式。使用它看起来像这样：

<div>
<div title="cli">

```sh

echo 'export default "test"' | esbuild --format=cjs
...
__export(exports, {
  default: () => stdin_default
});
var stdin_default = "test";
```

</div>
<div title="js">

```js

let js = 'export default "test"'
let out = require('esbuild').transformSync(js, {
  format: 'cjs',
})
process.stdout.write(out.code)
```

</div>
<div title="go">

```go

package main

import "fmt"
import "github.com/evanw/esbuild/pkg/api"

func main() {
  js := "export default 'test'"

  result := api.Transform(js, api.TransformOptions{
    Format: api.FormatCommonJS,
  })

  if len(result.Errors) == 0 {
    fmt.Printf("%s", result.Code)
  }
}
```

</div>
</div>

#### ESM

`esm` 格式代表“ECMAScript 模块”。它假定环境支持`import`和`export`语法。 `CommonJS` 模块语法中带有导出的入口点将被转换为 `module.exports` 值的单个默认导出。使用它看起来像这样：

<div>
<div title="cli">

```sh

echo 'module.exports = "test"' | esbuild --format=esm
...
var require_stdin = __commonJS({
  "<stdin>"(exports, module) {
    module.exports = "test";
  }
});
export default require_stdin();
```

</div>
<div title="js">

```js

let js = 'module.exports = "test"'
let out = require('esbuild').transformSync(js, {
  format: 'esm',
})
process.stdout.write(out.code)
```

</div>
<div title="go">

```go

package main

import "fmt"
import "github.com/evanw/esbuild/pkg/api"

func main() {
  js := "module.exports = 'test'"

  result := api.Transform(js, api.TransformOptions{
    Format: api.FormatESModule,
  })

  if len(result.Errors) == 0 {
    fmt.Printf("%s", result.Code)
  }
}
```

</div>
</div>

`esm` 格式既可以在浏览器中使用，也可以在node中使用，但是您必须将其作为模块显式加载。如果您从另一个模块`import`它，这会自动发生。否则：

* 在浏览器中，您可以使用 `<script src="file.js" type="module"></script>` 加载模块。

* 在 `node` 中，您可以使用 `node --experimental-modules file.mjs` 加载模块。请注意，node需要 `.mjs` 扩展名，除非您在 package.json 文件中配置了 `"type": "module"`。您可以使用 `esbuild` 中的 `out` 扩展设置来自定义 `esbuild` 生成的文件的输出扩展。您可以在此处阅读有关在node中使用 [ECMAScript 模块](https://nodejs.org/api/esm.html)的更多信息。

### Inject

支持：Build

此选项允许您使用来自另一个文件的导入自动替换全局变量。这可能是一个有用的工具，可以将您无法控制的代码适应新环境。例如，假设您有一个名为 `process-shim.js` 的文件，它导出名为 `process` 的变量：

<div>
<div title="process-shim.js">

```js
// process-shim.js
export let process = {
  cwd: () => ''
}
```

</div>
<div title="entry.js">

```js
// entry.js
console.log(process.cwd())
```

</div>
</div>

这旨在替换 `node` 的 `process.cwd()` 函数的使用，以防止调用它的包在浏览器中运行时崩溃。您可以使用注入功能将全局标识符过程的所有使用替换为对该文件的导入：

<div>
<div title="cli">

```sh

esbuild entry.js --bundle --inject:./process-shim.js --outfile=out.js
```

</div>
<div title="js">

```js

require('esbuild').buildSync({
  entryPoints: ['entry.js'],
  bundle: true,
  inject: ['./process-shim.js'],
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
    EntryPoints: []string{"entry.js"},
    Bundle:      true,
    Inject:      []string{"./process-shim.js"},
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

结果是这样的：

```js
// out.js
let process = {cwd: () => ""};
console.log(process.cwd());
```

* **使用带定义的[注入](./transform/#define)**

您还可以将其与定义[功能](./transform/#define)结合起来，以便对您导入的内容更具选择性。例如：

<div>
<div title="process-shim.js">

```js
// process-shim.js
export function dummy_process_cwd() {
  return ''
}
```

</div>
<div title="entry.js">

```js
// entry.js
console.log(process.cwd())
```

</div>
</div>

您可以使用定义功能将 `process.cwd` 映射到 `dummy_process_cwd`，然后使用注入功能从 `process-shim.js` 注入 `dummy_process_cwd`：

<div>
<div title="cli">

```sh

esbuild entry.js --bundle --define:process.cwd=dummy_process_cwd --inject:./process-shim.js --outfile=out.js
```

</div>
<div title="js">

```js

require('esbuild').buildSync({
  entryPoints: ['entry.js'],
  bundle: true,
  define: { 'process.cwd': 'dummy_process_cwd' },
  inject: ['./process-shim.js'],
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
    EntryPoints: []string{"entry.js"},
    Bundle:      true,
    Define: map[string]string{
      "process.cwd": "dummy_process_cwd",
    },
    Inject:  []string{"./process-shim.js"},
    Outfile: "out.js",
    Write:   true,
  })

  if len(result.Errors) > 0 {
    os.Exit(1)
  }
}
```

</div>
</div>

这导致以下输出：

```js
// out.js
function dummy_process_cwd() {
  return "";
}
console.log(dummy_process_cwd());
```

* **[JSX](https://esbuild.github.io/content-types/#jsx) 的自动导入**

您可以使用注入功能自动提供 `JSX` 表达式的实现。比如你可以自动导入`react`包来提供`React.createElement`等功能。有关详细信息，[请参阅 JSX 文档](https://esbuild.github.io/content-types/#auto-import-for-jsx)。

* **在没有导入的情况下注入文件**

您还可以将此功能用于没有导出的文件。在这种情况下，注入的文件只是在输出的其余部分之前出现，就好像每个输入文件都包含导入`“./file.js”`。由于 ECMAScript 模块的工作方式，这种注入仍然是“hygienic”，因为不同文件中具有相同名称的符号被重命名，因此它们不会相互冲突。

* **有条件地注入文件**

如果您只想在实际使用导出时有条件地导入文件，您应该将注入的文件标记为没有副作用，将其放入包中并在该包的 `package.json` 文件中添加 `"sideEffects": false` 。此设置是[来自 Webpack 的约定](https://webpack.js.org/guides/tree-shaking/#mark-the-file-as-side-effect-free)，esbuild 尊重任何导入的文件，而不仅仅是用于注入的文件。

### Loader

支持：Transform | Build

此选项更改给定输入文件的解释方式。例如，`js` 加载器将文件解释为 JavaScript，而 `css` 加载器将文件解释为 CSS。有关所有内置加载器的完整列表，[请参阅内容类型页面](https://esbuild.github.io/content-types/)。

为给定的文件类型配置加载器允许您使用`import` 语句或 `require` 调用加载该文件类型。例如，将 `.png` 文件扩展名配置为使用[数据 URL](https://esbuild.github.io/content-types/#data-url) 加载器意味着导入 `.png` 文件会为您提供一个包含该图像内容的数据 URL：

```js
import url from './example.png'
let image = new Image
image.src = url
document.body.appendChild(image)

import svg from './example.svg'
let doc = new DOMParser().parseFromString(svg, 'application/xml')
let node = document.importNode(doc.documentElement, true)
document.body.appendChild(node)
```

上面的代码可以使用构建 API 调用进行[捆绑](./transform/#build-api)，如下所示：

<div>
<div title="cli">

```sh

esbuild app.js --bundle --loader:.png=dataurl --loader:.svg=text
```

</div>
<div title="js">

```js

require('esbuild').buildSync({
  entryPoints: ['app.js'],
  bundle: true,
  loader: {
    '.png': 'dataurl',
    '.svg': 'text',
  },
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
      ".svg": api.LoaderText,
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

如果您将构建 API 与来自 stdin 的输入一起使用，则此选项的指定方式不同，因为 [stdin](./transform/#stdin) 没有文件扩展名。使用构建 API 为 stdin 配置加载器如下所示：

<div>
<div title="cli">

```sh

echo 'let x: number = 1' | esbuild --loader=ts
let x = 1;
```

</div>
<div title="js">

```js

require('esbuild').buildSync({
  stdin: {
    contents: 'import pkg = require("./pkg")',
    loader: 'ts',
    resolveDir: __dirname,
  },
  bundle: true,
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
      ".svg": api.LoaderText,
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

如果您将构建 API 与来自 [stdin](./transform/#stdin) 的输入一起使用，则此选项的指定方式不同，因为 stdin 没有文件扩展名。使用构建 API 为 stdin 配置加载器如下所示：

<div>
<div title="cli">

```sh

echo 'import pkg = require("./pkg")' | esbuild --loader=ts --bundle
```

</div>
<div title="js">

```js

require('esbuild').buildSync({
  stdin: {
    contents: 'import pkg = require("./pkg")',
    loader: 'ts',
    resolveDir: __dirname,
  },
  bundle: true,
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
      ".svg": api.LoaderText,
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

[转换 API](./transform/#transform-api) 调用只需要一个加载器，因为它不涉及与文件系统的交互，因此不处理文件扩展名。为转换 API 配置加载器（在本例中为 `ts` 加载器）如下所示：

<div>
<div title="cli">

```sh

echo 'let x: number = 1' | esbuild --loader=ts
let x = 1;
```

</div>
<div title="js">

```js

let ts = 'let x: number = 1'
require('esbuild').transformSync(ts, {
  loader: 'ts',
})
{
  code: 'let x = 1;\n',
  map: '',
  warnings: []
}
```

</div>
<div title="go">

```go

package main

import "fmt"
import "github.com/evanw/esbuild/pkg/api"

func main() {
  ts := "let x: number = 1"

  result := api.Transform(ts, api.TransformOptions{
    Loader: api.LoaderTS,
  })

  if len(result.Errors) == 0 {
    fmt.Printf("%s", result.Code)
  }
}
```

</div>
</div>

### Minify

支持：Transform | Build

启用后，生成的代码将被压缩而不是漂亮的打印。压缩代码通常等同于非压缩代码，但更小，这意味着它下载速度更快但更难调试。通常你会在生产中而不是在开发中压缩代码。

在 esbuild 中启用压缩如下所示：

<div>
<div title="cli">

```sh

echo 'fn = obj => { return obj.x }' | esbuild --minify
fn=n=>n.x;
```

</div>
<div title="js">

```js

var js = 'fn = obj => { return obj.x }'
require('esbuild').transformSync(js, {
  minify: true,
})
{
  code: 'fn=n=>n.x;\n',
  map: '',
  warnings: []
}
```

</div>
<div title="go">

```go

package main

import "fmt"
import "github.com/evanw/esbuild/pkg/api"

func main() {
  js := "fn = obj => { return obj.x }"

  result := api.Transform(js, api.TransformOptions{
    MinifyWhitespace:  true,
    MinifyIdentifiers: true,
    MinifySyntax:      true,
  })

  if len(result.Errors) == 0 {
    fmt.Printf("%s", result.Code)
  }
}
```

</div>
</div>

此选项组合执行三个独立的操作：删除空格，将语法重写为更紧凑，并将局部变量重命名为更短。通常你想要做所有这些事情，但如果需要，也可以单独启用这些选项：

<div>
<div title="cli">

```sh

echo 'fn = obj => { return obj.x }' | esbuild --minify-whitespace
fn=obj=>{return obj.x};
echo 'fn = obj => { return obj.x }' | esbuild --minify-identifiers
fn = (n) => {
  return n.x;
};
echo 'fn = obj => { return obj.x }' | esbuild --minify-syntax
fn = (obj) => obj.x;
```

</div>
<div title="js">

```js
// js

var js = 'fn = obj => { return obj.x }'
require('esbuild').transformSync(js, {
  minifyWhitespace: true,
})
{
  code: 'fn=obj=>{return obj.x};\n',
  map: '',
  warnings: []
}
require('esbuild').transformSync(js, {
  minifyIdentifiers: true,
})
{
  code: 'fn = (n) => {\n  return n.x;\n};\n',
  map: '',
  warnings: []
}
require('esbuild').transformSync(js, {
  minifySyntax: true,
})
{
  code: 'fn = (obj) => obj.x;\n',
  map: '',
  warnings: []
}
```

</div>
<div title="go">

```go
// go

package main

import "fmt"
import "github.com/evanw/esbuild/pkg/api"

func main() {
  css := "div { color: yellow }"

  result1 := api.Transform(css, api.TransformOptions{
    Loader:           api.LoaderCSS,
    MinifyWhitespace: true,
  })

  if len(result1.Errors) == 0 {
    fmt.Printf("%s", result1.Code)
  }

  result2 := api.Transform(css, api.TransformOptions{
    Loader:            api.LoaderCSS,
    MinifyIdentifiers: true,
  })

  if len(result2.Errors) == 0 {
    fmt.Printf("%s", result2.Code)
  }

  result3 := api.Transform(css, api.TransformOptions{
    Loader:       api.LoaderCSS,
    MinifySyntax: true,
  })

  if len(result3.Errors) == 0 {
    fmt.Printf("%s", result3.Code)
  }
}
```

</div>
</div>

这些相同的概念也适用于 CSS，而不仅仅是 JavaScript：

<div>
<div title="cli">

```sh

echo 'div { color: yellow }' | esbuild --loader=css --minify
div{color:#ff0}
```

</div>
<div title="js">

```js

var css = 'div { color: yellow }'
require('esbuild').transformSync(css, {
  loader: 'css',
  minify: true,
})
{
  code: 'div{color:#ff0}\n',
  map: '',
  warnings: []
}
```

</div>
<div title="go">

```go

package main

import "fmt"
import "github.com/evanw/esbuild/pkg/api"

func main() {
  css := "div { color: yellow }"

  result := api.Transform(css, api.TransformOptions{
    Loader:            api.LoaderCSS,
    MinifyWhitespace:  true,
    MinifyIdentifiers: true,
    MinifySyntax:      true,
  })

  if len(result.Errors) == 0 {
    fmt.Printf("%s", result.Code)
  }
}
```

</div>
</div>

esbuild 中的 JavaScript 压缩算法通常生成的输出非常接近行业标准 JavaScript 压缩工具的压缩输出大小。该[基准](https://github.com/privatenumber/minification-benchmarks/tree/cd3e5acb8d38da5f86426d44ac95974812559683#readme)测试对不同压缩器之间的输出大小进行了示例比较。虽然 esbuild 不是所有情况下的最佳 JavaScript 压缩器（并且不会尝试成为），但它努力在大多数代码的专用压缩工具大小的百分之几内生成压缩的输出，并且当然做得更快比其他工具。

#### 思考

以下是使用 esbuild 作为压缩器时要记住的一些事项：

* 您可能还应该在启用压缩时设置目标[选项](./transform/#target)。默认情况下，esbuild 利用现代 JavaScript 功能来使您的代码更小。例如，`a === undefined ||一个 === 空？ 1 : a` 可以压缩为 `a ?? 1`. 如果您不希望 esbuild 在压缩时利用现代 JavaScript 功能，您应该使用较旧的语言目标，例如 `--target=es6`。

* 压缩对于 100% 的 JavaScript 代码都是不安全的。这对于 esbuild 以及其他流行的 JavaScript 压缩器（如 terser）都是如此。特别是，esbuild 并非旨在保留对函数调用 `.toString()` 的值。这样做的原因是因为如果所有函数中的所有代码都必须逐字保存，那么压缩几乎不会做任何事情并且几乎毫无用处。然而，这意味着依赖 `.toString()` 返回值的 JavaScript 代码在压缩时可能会中断。例如，当代码被压缩时，AngularJS 框架中的一些模式会中断，因为 AngularJS 使用 `.toString()` 来读取函数的参数名称。解决方法是[改用显式注释](https://docs.angularjs.org/api/auto/service/$injector#injection-function-annotation)。

* 默认情况下，esbuild 不会在函数和类对象上保留 `.name` 的值。这是因为大多数代码不依赖于这个属性，使用较短的名称是一个重要的大小优化。但是，某些代码确实依赖 `.name` 属性进行注册和绑定。如果您需要依赖它，您应该启用[保留名称](./transform/#keep-names)选项。

* 使用某些 JavaScript 功能可以禁用许多 esbuild 的优化，包括压缩。具体来说，使用直接 `eval` 和/或 `with` 语句可以防止 esbuild 将标识符重命名为较小的名称，因为这些功能会导致标识符绑定发生在运行时而不是编译时。这几乎总是无意的，并且只是因为人们不知道直接 `eval` 是什么以及它为什么不好。

> 如果您正在考虑编写一些这样的代码：

```js
// Direct eval (will disable minification for the whole file)
let result = eval(something)
```

> 您可能应该像这样编写代码，以便可以压缩代码：

```js
// Indirect eval (has no effect on the surrounding code)
let result = (0, eval)(something)
```

这里有关于直接`eval`的后果和可用替代方案的更多信息。

* esbuild 中的压缩算法尚未进行高级代码优化。特别是，以下代码优化对于 JavaScript 代码是可能的，但不是由 esbuild 完成的（不是详尽的列表）：
  
  * 函数体内的死代码消除
  
  * 函数内联
  
  * 跨语句常量传播
  
  * 对象形状建模
  
  * 分配下沉
  
  * 方法去虚拟化
  
  * 符号执行
  
  * JSX 表达式提升
  
  * TypeScript 枚举检测和内联

如果您的代码使用的模式要求其中一些代码优化形式紧凑，或者您正在为您的用例搜索最佳 JavaScript 压缩算法，您应该考虑使用其他工具。实现其中一些高级代码优化的工具的一些示例包括 [Terser](https://github.com/terser/terser#readme) 和 [Google Closure Compiler](https://github.com/google/closure-compiler#readme)。

### Outdir

支持：Build

此选项设置构建操作的输出目录。例如，此命令将生成一个名为的目录

<div>
<div title="cli">

```sh

esbuild app.js --bundle --outdir=out
```

</div>
<div title="js">

```js

require('esbuild').buildSync({
  entryPoints: ['app.js'],
  bundle: true,
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
    Outdir:      "out",
  })

  if len(result.Errors) > 0 {
    os.Exit(1)
  }
}
```

</div>
</div>

如果输出目录尚不存在，则会生成输出目录，但如果已包含某些文件，则不会清除它。任何生成的文件都会以静默方式覆盖同名的现有文件。如果您希望输出目录仅包含来自当前 esbuild 运行的文件，您应该在运行 esbuild 之前自己清除输出目录。

如果您的构建在不同的目录中包含多个入口点，则目录结构将从所有输入入口点路径中最低的[公共祖先目录](https://en.wikipedia.org/wiki/Lowest_common_ancestor)开始复制到输出目录中。例如，如果有两个入口点 `src/home/index.ts` 和 `src/about/index.ts`，则输出目录将包含 `home/index.js` 和 `about/index.js`。如果要自定义此行为，则应更改 [outbase 目录](./transform/#outbase)。

### Outfile

支持: Build

此选项设置构建操作的输出文件名。这仅适用于有单个入口点的情况。如果有多个入口点，则必须改用 [outdir](./transform/#outdir) 选项来指定输出目录。使用 outfile 看起来像这样：

<div>
<div title="cli">

```sh

esbuild app.js --bundle --outfile=out.js
```

</div>
<div title="js">

```js

require('esbuild').buildSync({
  entryPoints: ['app.js'],
  bundle: true,
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
    Outdir:      "out.js",
  })

  if len(result.Errors) > 0 {
    os.Exit(1)
  }
}
```

</div>
</div>

### Platform

支持：Build

默认情况下，esbuild 的 bundler 被配置为生成用于浏览器的代码。如果您的捆绑代码打算在 node 中运行，您应该将平台设置为 `node`：

<div>
<div title="cli">

```sh

esbuild app.js --bundle --platform=node
```

</div>
<div title="js">

```js

require('esbuild').buildSync({
  entryPoints: ['app.js'],
  bundle: true,
  platform: 'node',
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
    Platform:    api.PlatformNode,
    Write:       true,
  })

  if len(result.Errors) > 0 {
    os.Exit(1)
  }
}
```

</div>
</div>

当平台设置为`浏览器(browser)`时（默认值）：

* 默认输出[格式](./transform/#format)设置为 `iife`，它将生成的 JavaScript 代码包装在立即调用的函数表达式中，以防止变量泄漏到全局范围内。

* 如果包在其 `package.json` 文件中为`浏览器`字段指定了映射，esbuild 将使用该映射将特定文件或模块替换为其浏览器友好版本。例如，一个包可能包含用 `path-browserify` 替换`路径`。

* [主要字段](./transform/#main-fields)设置设置为 `browser,module,main` 但有一些额外的特殊行为。如果包支持 `module` 和 `main` 但不支持`浏览器`，那么如果使用 `require()` 导入该`包`，则使用 `main` 而不是 `module`。此行为通过将函数分配给 `module.exports` 来提高与导出函数的 CommonJS 模块的兼容性。

* [条件](./transform/#conditions)设置自动包含`浏览器`条件。这改变了 `package.json` 文件中的`导出`字段被解释为更喜欢浏览器特定代码的方式。

* 如果启用了所有[压缩选项](./transform/#minify)，则所有 `process.env.NODE_ENV` 表达式都会[自动定义](./transform/#define)为`“production”`，否则为`“development”`。仅当 `process`、`process.env` 和 `process.env.NODE_ENV` 尚未定义时才会发生这种情况。这种替换对于避免基于 React 的代码立即崩溃是必要的（因为`进程`是node API，而不是 Web API）。

当平台设置为node时：

* 默认输出[格式](./transform/#format)设置为`cjs`，代表CommonJS（node使用的模块格式）。使用 `export` 语句的 ES6 样式导出将转换为 CommonJS `导出`对象上的 getter。

* 所有[内置node模块](https://nodejs.org/docs/latest/api/)（例如 `fs`）都会自动标记为[外部](./transform/#external)模块，因此当捆绑器尝试捆绑它们时，它们不会导致错误。


  * [主要字段](./transform/#main-fields)设置设置为 `main,module`。这意味着同时提供 `module` 和 `main` 的包可能不会发生摇树，因为摇树适用于 ECMAScript 模块，但不适用于 CommonJS 模块。

  * 不幸的是，一些包错误地将模块视为“浏览器代码”而不是“ECMAScript `模块`代码”，因此为了兼容性需要这种默认行为。如果您想启用摇树并且知道这样做是安全的，您可以手动将[主要字段](./transform/#main-fields)设置配置为 `module,main`。

* [条件](./transform/#conditions)设置自动包含`node`条件。这改变了 `package.json` 文件中的`导出`字段被解释为更喜欢特定于node的代码的方式。

当平台设置为neutral时：

* 默认输出[格式](./transform/#format)设置为 `esm`，它使用 ECMAScript 2015（即 ES6）引入的`导出`语法。如果此默认值不合适，您可以更改输出格式。

* 默认情况下，[主要字段](./transform/#main-fields)设置为空。如果您想使用 npm 样式的包，您可能必须将其配置为其他内容，例如 node 使用的标准 `main` 字段的 main 。

* [条件](./transform/#conditions)设置不会自动包含任何特定于平台的值。

另请参阅[浏览器的捆绑](https://esbuild.github.io/getting-started/#bundling-for-the-browser)和[node的捆绑](https://esbuild.github.io/getting-started/#bundling-for-node)。

### Serve

支持: Build

在开发过程中，进行更改时通常会在文本编辑器和浏览器之间来回切换。在浏览器中重新加载代码之前手动重新运行 esbuild 很不方便。有几种方法可以自动执行此操作：

* 使用[监视模式](./transform/#watch)在文件更改时重新运行 esbuild

* 配置您的文本编辑器以在每次保存时运行 esbuild

* 使用根据每个请求重建的 Web 服务器为您的代码提供服务

这个 API 调用实现了最后一个方法。服务 API 类似于[构建 API](./transform/#build-api) 调用，但它不是将生成的文件写入文件系统，而是启动一个长期存在的本地 HTTP Web 服务器，为最新构建的生成文件提供服务。每一批新请求都会导致 esbuild 在响应请求之前重新运行构建命令，以便您的文件始终是最新的。

与其他方法相比，这种方法的优势在于 Web 服务器可以延迟浏览器的请求，直到构建完成。这样，在最新构建完成之前在浏览器中重新加载代码将永远不会运行先前构建中的代码。这些文件是从内存中提供的，不会写入文件系统，以确保无法观察到过时的文件。

请注意，这仅用于开发。不要在生产中使用它。在生产中，您应该在不使用 esbuild 作为 Web 服务器的情况下提供静态文件。

使用服务 API 有两种不同的方法：

#### 方法一：用 esbuild 服务一切

使用这种方法，除了 esbuild 生成的文件之外，您还为 esbuild 提供了一个名为 `serveir 的目录`，其中包含要提供的额外内容。这适用于创建一些静态 HTML 页面并希望使用 esbuild 捆绑 JavaScript 和/或 CSS 的简单情况。您可以将您的 HTML 文件放在 `servedir` 中，并将您的其他源代码放在 `servedir` 之外，然后将 `outdir` 设置在 `servedir` 内的某个位置：

<div>
<div title="cli">

```sh

esbuild src/app.js --servedir=www --outdir=www/js --bundle
```

</div>
<div title="js">

```js

require('esbuild').serve({
  servedir: 'www',
}, {
  entryPoints: ['src/app.js'],
  outdir: 'www/js',
  bundle: true,
}).then(server => {
  // Call "stop" on the web server when you're done
  server.stop()
})
```

</div>
<div title="go">

```go

server, err := api.Serve(api.ServeOptions{
  Servedir: "www",
}, api.BuildOptions{
  EntryPoints: []string{"src/app.js"},
  Outdir:      "www/js",
  Bundle:      true,
})

// Call "stop" on the web server when you're done
server.Stop()
```

</div>
</div>

在上面的例子中，你的 `www/index.html` 页面可以像这样引用 `src/app.js` 中的编译代码：

```html
<script src="js/app.js"></script>
```

当您这样做时，每个 HTTP 请求都会导致 esbuild 重建您的代码并为您提供最新版本。因此，每次您重新加载页面时，`js/app.js` 将始终是最新的。请注意，虽然生成的代码似乎在 `outdir` 目录中，但它实际上从未使用 serve API 写入文件系统。相反，生成的代码阴影的路径（即优先于）`servedir` 和生成的文件中的其他路径直接从内存中提供。

这样做的好处是您可以在开发和生产中使用完全相同的 HTML 页面。在开发中，您可以使用 `--servedir=` 运行 esbuild，esbuild 将直接提供生成的输出文件。对于生产，您可以省略该标志，esbuild 会将生成的文件写入文件系统。在这两种情况下，您应该在开发和生产中使用完全相同的代码在浏览器中获得完全相同的结果。

默认情况下，端口会自动选择为第一个等于或大于 8000 的开放端口。端口号从 API 调用返回（或打印到 CLI 的终端），因此您可以知道要访问哪个 URL。如有必要，可以将端口设置为特定的内容（在下面进一步描述）。

#### 方法 2：仅使用 esbuild 提供生成的文件

使用这种方法，您只需告诉 esbuild 提供 [outdir](./transform/#outdir) 的内容，而无需为其提供任何额外的内容。这适用于更复杂的开发设置。例如，您可能希望使用 NGINX 作为反向代理，在开发过程中将不同路径路由到单独的后端服务（例如 `/static/` 到 NGINX、`/api/` 到 node、`/js/` 到 esbuild 等）。通过这种方法使用 esbuild 看起来像这样：

<div>
<div title="cli">

```sh

esbuild src/app.js --outfile=out.js --bundle --serve=8000
```

</div>
<div title="js">

```js

require('esbuild').serve({
  port: 8000,
}, {
  entryPoints: ['src/app.js'],
  bundle: true,
  outfile: 'out.js',
}).then(server => {
  // Call "stop" on the web server when you're done
  server.stop()
})
```

</div>
<div title="go">

```go
// go

server, err := api.Serve(api.ServeOptions{
  Port: 8000,
}, api.BuildOptions{
  EntryPoints: []string{"src/app.js"},
  Bundle:      true,
  Outfile:     "out.js",
})

// Call "stop" on the web server when you're done
server.Stop()
```

</div>
</div>

上面示例中的 API 调用将在 [http://localhost:8000/out.js](http://localhost:8000/out.js) 处提供 src/app.js 的编译内容。就像第一种方法一样，每个 HTTP 请求都会导致 esbuild 重建您的代码并为您提供最新版本，因此 `out.js` 将始终是最新的。然后，您的 HTML 文件（由另一个端口上的另一个 Web 服务器提供服务）可以像这样从您的 HTML 引用编译后的文件：

```html
<script src="http://localhost:8000/out.js"></script>
```

在未启用 Web 服务器的情况下使用普通构建命令时，Web 服务器的 URL 结构完全反映[输出目录](./transform/#outdir)的 URL 结构。例如，如果输出目录通常包含一个名为 `./pages/about.js` 的文件，则 Web 服务器将具有相应的 `/pages/about.js` 路径。

如果您想浏览 Web 服务器以查看哪些 URL 可用，您可以通过访问目录名而不是文件名来使用内置目录列表。例如，如果您在端口 8000 上运行 esbuild 的 Web 服务器，则可以在浏览器中访问 [http://localhost:8000/](http://localhost:8000/) 以查看 Web 服务器的根目录。从那里您可以单击链接以浏览 Web 服务器上的不同文件和目录。

#### Arguments

请注意，服务 API 是与[构建 API](./transform/#build-api) 不同的 API 调用。这是因为启动一个长时间运行的 Web 服务器是不同的，足以保证不同的参数和返回值。服务 API 调用的第一个参数是带有服务特定选项的选项对象：

<div>
<div title="ts">

```ts
interface ServeOptions {
  port?: number;
  host?: string;
  servedir?: string;
  onRequest?: (args: ServeOnRequestArgs) => void;
}

interface ServeOnRequestArgs {
  remoteAddress: string;
  method: string;
  path: string;
  status: number;
  timeInMS: number;
}
```

</div>
<div title="go">

```go
type ServeOptions struct {
  Port      uint16
  Host      string
  Servedir  string
  OnRequest func(ServeOnRequestArgs)
}

type ServeOnRequestArgs struct {
  RemoteAddress string
  Method        string
  Path          string
  Status        int
  TimeInMS      int
}
```

</div>
</div>

* port

可以选择在此处配置 HTTP 端口。如果省略，则默认为开放端口，优先选择端口 8000。您可以在命令行上使用 `--serve=8000` 而不是 `--serve` 设置端口。

* host

默认情况下，esbuild 使 Web 服务器可用于所有 IPv4 网络接口。这对应于 `0.0.0.0` 的主机地址。如果您想配置不同的主机（例如，仅在 `127.0.0.1` 环回接口上提供服务而不向网络公开任何内容），您可以使用此参数指定主机。您可以使用 `--serve=127.0.0.1:8000` 而不是 `--serve` 在命令行上设置主机。

如果您需要使用 IPv6 而不是 IPv4，您只需要指定一个 IPv6 主机地址。等效于 IPv6 中的 `127.0.0.1` 环回接口是 `::1`，等效于 IPv6 中的 `0.0.0.0` 通用接口是 `::`。如果在命令行中将主机设置为 IPv6 地址，则需要用方括号将 IPv6 地址括起来，以区分地址中的冒号和分隔主机和端口的冒号，如下所示：`--serve=[:: ]：8000`。

* servedir

当传入请求与任何生成的输出文件路径不匹配时，这是 esbuild 的 HTTP 服务器提供的额外内容目录，而不是 404。这使您可以将 esbuild 用作通用的本地 Web 服务器。例如，使用 `esbuild --servedir=`。为`本地`主机上的`当前目录`提供服务。在前面关于不同方法的部分中更详细地描述了使用 serveir。

* onRequest

每个传入请求都会调用一次，并提供有关请求的一些信息。 CLI 使用此回调为每个请求打印日志消息。时间字段是为请求生成数据的时间，但不包括将请求流式传输到客户端的时间。

请注意，这是在请求完成后调用的。无法使用此回调以任何方式修改请求。如果你想这样做，你应该[在 esbuild 前面放置一个代理](./transform/#customizing-server-behavior)。

服务 API 调用的第二个参数是在每个请求上调用的底层构建 API 的正常选项集。有关这些选项的更多信息，请参阅[构建 API](./transform/#build-api) 的文档。

#### Return values

<div>
<div title="js">

```js

interface ServeResult {
  port: number;
  host: string;
  wait: Promise<void>;
  stop: () => void;
}
```

</div>
<div title="go">

```go
// go

type ServeResult struct {
  Port uint16
  Host string
  Wait func() error
  Stop func()
}
```

</div>
</div>

* port

这是 Web 服务器最终使用的端口。如果您没有指定端口，您将需要使用它，因为 esbuild 最终会选择一个任意的开放端口，并且您需要知道它选择了哪个端口才能连接到它。如果您使用的是 CLI，则此端口号将打印到终端中的 stderr。

* host

这是最终被 Web 服务器使用的主机。除非配置了自定义主机，否则它将是 `0.0.0.0`（即在所有可用的网络接口上提供服务）。

* wait

只要可以打开套接字，服务 API 调用就会立即返回。`await`返回值提供了一种在 Web 服务器终止时通知的方法，无论是由于网络错误还是由于在将来的某个时间点`stop`调用。

* stop

调用这个回调来停止 web 服务器，当你不再需要它来清理资源时你应该这样做。这将立即终止所有打开的连接并唤醒任何`等待`等待返回值的代码。

#### Customizing server behavior

无法连接到 esbuild 的本地服务器来自定义服务器本身的行为。相反，应该通过在 esbuild 前面放置一个代理来自定义行为。

这是一个简单的代理服务器示例，可帮助您入门。它添加了一个自定义的 404 页面，而不是 esbuild 的默认 404 页面：

```js
// js

const esbuild = require('esbuild');
const http = require('http');

// Start esbuild's server on a random local port
esbuild.serve({
  servedir: __dirname,
}, {
  // ... your build options go here ...
}).then(result => {
  // The result tells us where esbuild's local server is
  const {host, port} = result

  // Then start a proxy server on port 3000
  http.createServer((req, res) => {
    const options = {
      hostname: host,
      port: port,
      path: req.url,
      method: req.method,
      headers: req.headers,
    }

    // Forward each incoming request to esbuild
    const proxyReq = http.request(options, proxyRes => {
      // If esbuild returns "not found", send a custom 404 page
      if (proxyRes.statusCode === 404) {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>A custom 404 page</h1>');
        return;
      }

      // Otherwise, forward the response from esbuild to the client
      res.writeHead(proxyRes.statusCode, proxyRes.headers);
      proxyRes.pipe(res, { end: true });
    });

    // Forward the body of the request to esbuild
    req.pipe(proxyReq, { end: true });
  }).listen(3000);
});
```

此代码在随机本地端口上启动 esbuild 的服务器，然后在端口 3000 上启动代理服务器。在开发过程中，您将在浏览器中加载 [http://localhost:3000](http://localhost:3000)，它与代理通信。此示例演示在 esbuild 处理请求后修改响应，但您也可以在 esbuild 处理请求之前修改或替换请求。

你可以用这样的代理做很多事情，包括：

* 注入你自己的 404 页面（上面的例子）

* 自定义路由到文件系统上文件的映射

* 将一些路由重定向到 API 服务器而不是 esbuild

* 使用您自己的自签名证书添加对 HTTPS 的支持

如果您有更高级的需求，也可以使用真正的代理，例如 [NGINX](https://nginx.org/en/docs/beginners_guide.html#proxy)。

### Sourcemap

支持：Transform | Build

源映射可以使调试代码更容易。它们对将生成的输出文件中的行/列偏移转换回相应原始输入文件中的行/列偏移所需的信息进行编码。如果您生成的代码与原始代码有很大不同（例如，您的原始代码是 TypeScript 或您启用了[压缩](./transform/#minify)），这将非常有用。如果您更喜欢在浏览器的开发人员工具中查看单个文件而不是一个大的捆绑文件，这也很有用。

请注意，JavaScript 和 CSS 都支持源地图输出，并且相同的选项适用于两者。下面讨论 `.js` 文件的所有内容也同样适用于 `.css` 文件。

启用源映射生成将在任何生成的 .js 文件旁边生成一个 `.js.map` 文件，并在指向 `.js.map` 文件的 `.js` 文件底部添加一个特殊的 `//# sourceMappingURL=` 注释：

<div>
<div title="cli">

```sh

esbuild app.ts --sourcemap --outfile=out.js
```

</div>
<div title="js">

```js

require('esbuild').buildSync({
  entryPoints: ['app.ts'],
  sourcemap: true,
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
    EntryPoints: []string{"app.ts"},
    Sourcemap:   api.SourceMapLinked,
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

如果输入文件本身包含一个特殊的 `//# sourceMappingURL=` 注释，esbuild 将自动尝试解析链接的源映射。如果成功，生成的源映射中的映射将一直映射回输入源映射中引用的原始源代码。

如果你想从生成的 `.js` 文件中省略特殊的 `//# sourceMappingURL=` 注释，但你仍然想生成 `.js.map` 文件，你应该将源映射模式设置为`外部`：

<div>
<div title="cli">

```sh

esbuild app.ts --sourcemap=external --outfile=out.js
```

</div>
<div title="js">

```js

require('esbuild').buildSync({
  entryPoints: ['app.ts'],
  sourcemap: 'external',
  outfile: 'out.js',
})
```

</div>
<div title="go">

```go
// go

package main

import "github.com/evanw/esbuild/pkg/api"
import "os"

func main() {
  result := api.Build(api.BuildOptions{
    EntryPoints: []string{"app.ts"},
    Sourcemap:   api.SourceMapExternal,
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

如果要将整个源映射插入 `.js` 文件而不是生成单独的 `.js.map` 文件，则应将源映射模式设置为`内联`：

<div>
<div title="cli">

```sh

esbuild app.ts --sourcemap=inline --outfile=out.js
```

</div>
<div title="js">

```js

require('esbuild').buildSync({
  entryPoints: ['app.ts'],
  sourcemap: 'inline',
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
    EntryPoints: []string{"app.ts"},
    Sourcemap:   api.SourceMapInline,
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

请记住，源映射通常非常大，因为它们包含您所有的原始源代码，因此您通常不希望发布包含`内联`源映射的代码。要从源映射中删除源代码（仅保留文件名和行/列映射），请使用[源内容](./transform/#sources-content)选项。

如果你想同时拥有`inline`和`external`的效果，你应该将source map mode设置为`both`：

<div>
<div title="cli">

```sh

esbuild app.ts --sourcemap=both --outfile=out.js
```

</div>
<div title="js">

```js

require('esbuild').buildSync({
  entryPoints: ['app.ts'],
  sourcemap: 'both',
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
    EntryPoints: []string{"app.ts"},
    Sourcemap:   api.SourceMapInlineAndExternal,
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

#### Using source maps

在浏览器中，只要启用了源映射设置，浏览器的开发人员工具就会自动获取源映射。请注意，浏览器仅使用源映射在记录到控制台时更改堆栈跟踪的显示。堆栈跟踪本身不会被修改，因此在您的代码中检查 `error.stack` 仍然会提供包含已编译代码的未映射堆栈跟踪。以下是在浏览器的开发人员工具中启用此设置的方法：

* Chrome：⚙ → 启用 JavaScript 源映射

* Safari: ⚙ → Sources → Enable source maps

* Firefox：···→ 启用源地图

在 node 中，从 [v12.12.0](https://nodejs.org/en/blog/release/v12.12.0/) 版本开始原生支持源映射。默认情况下禁用此功能，但可以使用标志启用。与浏览器不同，实际的堆栈跟踪也在 node 中修改，因此检查代码中的 `error.stack` 将提供包含原始源代码的映射堆栈跟踪。以下是如何在node中启用此设置（`--enable-source-maps` 标志必须位于脚本文件名之前）：

```bash

node --enable-source-maps app.js
```

### Splitting

支持: Build

> 代码拆分仍然是正在进行的工作。它目前仅适用于`ESM`输出[格式](./transform/#format)。还有一个 [ordering issue](https://github.com/evanw/esbuild/issues/399) 问题，横跨代码拆分块具有`导入`语句。您可以遵循关于此功能的[the tracking issue](https://github.com/evanw/esbuild/issues/16)问题。

这使得“代码拆分”能够用于两个目的：

* 在多个入口点之间共享的代码被拆分为入口点导入的单独的共享文件。这样，如果用户首先浏览一个页面然后到另一个页面，如果共享部分已被下载并被其浏览器缓存，则它们不必从头下载第二页的所有JavaScript。

* 通过异步`import()`表达式引用的代码将被拆分为单独的文件，并且仅在评估该表达式时加载。这允许您通过仅下载您需要的代码来改进应用的初始下载时间，然后在稍后需要懒惰下载其他代码。
* 没有代码拆分启用，`import()` 表达式变为Promise.resolve().then(() => require())。这仍然保留了表达式的异步语义，但这意味着导入的代码包含在同一捆绑包中，而不是将其拆分为单独的文件。

启用代码拆分时，还必须使用[outir](./transform/#outdir)的设置配置输出目录：

<div>

<div title="cli">

```sh
esbuild home.ts about.ts --bundle --splitting --outdir=out --format=esm
```

</div>

<div title="js">

```js

require('esbuild').buildSync({
  entryPoints: ['home.ts', 'about.ts'],
  bundle: true,
  splitting: true,
  outdir: 'out',
  format: 'esm',
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
    EntryPoints: []string{"home.ts", "about.ts"},
    Bundle:      true,
    Splitting:   true,
    Outdir:      "out",
    Format:      api.FormatESModule,
    Write:       true,
  })

  if len(result.Errors) > 0 {
    os.Exit(1)
  }
}
```

</div>

</div>

### Target

支持：Transform | Build

这为生成的JavaScript代码设置了目标环境。例如，您可以将eSbuild配置为不生成node版本10无法处理的任何较新的JavaScript。目标可以设置为诸如`ES2020`的JavaScript语言版本，也可以是单个引擎的版本列表（目前是`Chrome`，`Firefox`，`Safari`，`Edge`或`node`）。默认目标是`esnext`，这意味着默认情况下，eSbuild将假设支持所有最新的JavaScript功能。

以下是一个使用esbuild中的所有可用目标环境名称的示例。请注意，您不需要指定所有这些;您只需指定项目所关心的目标环境的子集。如果您想要的（例如`Node12.19.0`而不是`Node12`），您也可以更精确地了解版本号

<div>
<div title="cli">

```sh

esbuild app.js --target=es2020,chrome58,firefox57,safari11,edge16,node12
```

</div>
<div title="js">

```js

require('esbuild').buildSync({
  entryPoints: ['app.js'],
  target: [
    'es2020',
    'chrome58',
    'firefox57',
    'safari11',
    'edge16',
    'node12',
  ],
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
    Target:      api.ES2020,
    Engines: []api.Engine{
      {Name: api.EngineChrome, Version: "58"},
      {Name: api.EngineFirefox, Version: "57"},
      {Name: api.EngineSafari, Version: "11"},
      {Name: api.EngineEdge, Version: "16"},
      {Name: api.EngineNode, Version: "12"},
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

您可以参考[JavaScript Loader](https://esbuild.github.io/content-types/#javascript)，了解有关哪些语法功能的详细信息，其中包含语言版本。请记住，虽然`ES2020`等JavaScript语言版本在年份中确定，但这是规范批准的一年。它与年份无关，所有主要浏览器都实施该规范，这些规范通常会发生在早年或更晚于该年。

请注意，如果使用eSbuild尚未支持转换为当前语言目标的语法功能，则Esbuild将生成不支持的语法的错误。例如，这通常是针对`ES5`语言版本的情况，因为eSbuild仅支持将大多数较新的JavaScript语法功能转换为`ES6`。

### Watch

支持：Build

在构建API上启用监视模式告诉eSBuild侦听文件系统的更改，并在可以使构建无效的文件更改时重建。使用它看起来像这样：

<div>
<div title="cli">

```sh

esbuild app.js --outfile=out.js --bundle --watch
```

</div>
<div title="js">

```js

require('esbuild').build({
  entryPoints: ['app.js'],
  outfile: 'out.js',
  bundle: true,
  watch: true,
}).then(result => {
  // Call "stop" on the result when you're done
  result.stop()
})
```

</div>
<div title="go">

```go
// go

result := api.Build(api.BuildOptions{
  EntryPoints: []string{"app.js"},
  Outfile:     "out.js",
  Bundle:      true,
  Watch:       &api.WatchMode{},
})

// Call "stop" on the result when you're done
result.Stop()
```

</div>
</div>

如果您使用的是JavaScript或Go API，则可以选择在增量构建完成时提供调用的回调。一旦构建完成，这可以用来做某事（例如，在浏览器中重新加载您的应用程序）：

<div>
<div title="js">

```js
// js

require('esbuild').build({
  entryPoints: ['app.js'],
  outfile: 'out.js',
  bundle: true,
  watch: {
    onRebuild(error, result) {
      if (error) console.error('watch build failed:', error)
      else console.log('watch build succeeded:', result)
    },
  },
}).then(result => {
  // Call "stop" on the result when you're done
  result.stop()
})
```

</div>
<div title="go">

```go
// go

result := api.Build(api.BuildOptions{
  EntryPoints: []string{"app.js"},
  Outfile:     "out.js",
  Bundle:      true,
  Watch: &api.WatchMode{
    OnRebuild: func(result api.BuildResult) {
      if len(result.Errors) > 0 {
        fmt.Printf("watch build failed: %d errors\n", len(result.Errors))
      } else {
        fmt.Printf("watch build succeeded: %d warnings\n", len(result.Warnings))
      }
    },
  },
})

// Call "stop" on the result when you're done
result.Stop()
```

</div>
</div>

使用轮询而不是OS特定文件系统API实现eSBuild中的监视模式以进行可移植性。投票系统旨在使用相对较少的CPU与一个传统的投票系统一次扫描整个目录树。文件系统仍然是定期扫描的，但每个扫描只检查文件的随机子集，这意味着在更改之后将在更改之后不久会拾取文件的更改，但不一定立即才能拾取文件。

凭借目前的启发式，应在每2秒内完全扫描大型项目，所以在最坏的情况下，最多可能需要2秒钟进行注意。但是，在发生了变化之后，更改的路径在最近更改的路径的短期列表中，在每次扫描中检查，因此应几乎立即注意到最近更改的文件的进一步更改。

请注意，如果您不想使用基于轮询的方法，仍然可以使用esbuild的[增量构建API](./transform/#incremental)和文件观察者库来实现手表模式。

### Write

支持：Build

构建API调用可以直接写入文件系统，也可以返回将作为内存缓冲区中写入的文件。默认情况下，CLI和JavaScript API写入文件系统和GO API。要使用内存缓冲区：

<div>
<div title="js">

```js

let result = require('esbuild').buildSync({
  entryPoints: ['app.js'],
  sourcemap: 'external',
  write: false,
  outdir: 'out',
})

for (let out of result.outputFiles) {
  console.log(out.path, out.contents)
}
```

</div>
<div title="go">

```go

package main

import "fmt"
import "github.com/evanw/esbuild/pkg/api"
import "os"

func main() {
  result := api.Build(api.BuildOptions{
    EntryPoints: []string{"app.js"},
    Sourcemap:   api.SourceMapExternal,
    Write:       false,
    Outdir:      "out",
  })

  if len(result.Errors) > 0 {
    os.Exit(1)
  }

  for _, out := range result.OutputFiles {
    fmt.Printf("%v %v\n", out.Path, out.Contents)
  }
}
```

</div>
</div>

## 高级选项

### Allow overwrite

支持：Build

启用此设置允许输出文件覆盖输入文件。它默认情况下未启用，因为这样做意味着覆盖源代码，如果未选中您的代码，则会导致数据丢失。但是，通过避免对临时目录的需求来说，支持这使得某些工作流程更容易。因此，您可以在要故意覆盖源代码时启用此项：

<div>
<div title="cli">

```sh

esbuild app.js --outdir=. --allow-overwrite
```

</div>
<div title="js">

```js

require('esbuild').buildSync({
  entryPoints: ['app.js'],
  outdir: '.',
  allowOverwrite: true,
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
    EntryPoints:    []string{"app.js"},
    Outdir:         ".",
    AllowOverwrite: true,
  })

  if len(result.Errors) > 0 {
    os.Exit(1)
  }
}
```

</div>
</div>

### Asset names

支持：Build

此选项控制[加载器](./transform/#loader)设置为[文件](https://esbuild.github.io/content-types/#external-file)时生成的附加输出文件的文件名。它使用带有占位符的模板配置输出路径，该占位符将被替换为在生成输出路径时由特定于文件的值替换。例如，指定资产的`assets/ [name] - [hash]`将所有资产放入输出目录中的名为`assets`的子目录中，并包括文件名中资产的内容散列。这样看起来如此：

<div>
<div title="cli">

```sh

esbuild app.js --asset-names=assets/[name]-[hash] --loader:.png=file --bundle --outdir=out
```

</div>
<div title="js">

```js

require('esbuild').buildSync({
  entryPoints: ['app.js'],
  assetNames: 'assets/[name]-[hash]',
  loader: { '.png': 'file' },
  bundle: true,
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
    AssetNames:  "assets/[name]-[hash]",
    Loader: map[string]api.Loader{
      ".png": api.LoaderFile,
    },
    Bundle: true,
    Outdir: "out",
  })

  if len(result.Errors) > 0 {
    os.Exit(1)
  }
}
```

</div>
</div>

有三个占位符可以在assets路径模板中使用：

* `[dir]`

这是从包含资产文件到outbase目录的目录的相对路径。其目的是通过镜像[输出目录](./transform/#outbase)内的输入目录结构来帮助资产输出路径看起来更美观令人愉悦。

* `[name]`

这是没有扩展的资产的原始文件名。例如，如果资产最初是名为`Image.png`，则`[name]`将被模板中的`图像`替换。没有必要使用这个占位符;它只存在提供人类友好的资产名称来使调试更容易。

* `[hash]`

这是assets的内容哈希值，这对于避免名称碰撞是有用的。例如，您的代码可能导入`components/button/icon.png`和`components/select/icon.png`，在这种情况下，您需要散列来区分两个名为图标的两个`icon`。

assets路径模板不需要包含文件扩展名。在模板替换后，资产的原始文件扩展将自动添加到输出路径的末尾。

此选项类似于[块名称](./transform/#chunk-names)和[条目名称](./transform/#entry-names)选项。

### Banner

支持：Transform | Build

使用此功能可在生成的JavaScript和CSS文件的开头插入任意字符串。这通常用于插入评论：

<div>
<div title="cli">

```sh

esbuild app.js --banner:js=//comment --banner:css=/*comment*/
```

</div>
<div title="js">

```js

require('esbuild').buildSync({
  entryPoints: ['app.js'],
  banner: {
    js: '//comment',
    css: '/*comment*/',
  },
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
    Banner: map[string]string{
      "js":  "//comment",
      "css": "/*comment*/",
    },
  })

  if len(result.Errors) > 0 {
    os.Exit(1)
  }
}
```

</div>
</div>

这类似于在[最后](./transform/#footer)插入的页脚而不是开始。

请注意，如果要将非注释代码插入CSS文件，请注意，CSS忽略非`@import`规则（除`@CharSet`规则之外）之后的non-`@import`规则，因此使用横幅注入CSS规则可能会意外禁用外部样式表的进口。

### Charset

支持：Transform | Build

默认情况下，eSbuild的输出仅为ASCII。使用反斜杠转义序列逃离任何非ASCII字符。一个原因是因为默认情况下，浏览器误解了非ASCII字符，导致混淆。您必须将`<meta charset =“utf-8”>`显式添加到您的HTML或用正确的`Content-Type`标题为浏览器提供服务，以不敲打代码。另一个原因是非ASCII字符可以[显着慢下浏览器的解析器](https://v8.dev/blog/scanner)。但是，使用转义序列使生成的输出略大，并且还更难读取。

如果您希望在不使用转义序列的情况下打印原始字符，并且确保浏览器将代码解释为UTF-8，则可以通过设置Charset来禁用字符逃避：

<div>
<div title="cli">

```sh

echo 'let π = Math.PI' | esbuild
let \u03C0 = Math.PI;
echo 'let π = Math.PI' | esbuild --charset=utf8
let π = Math.PI;
```

</div>
<div title="js">

```js

let js = 'let π = Math.PI'
require('esbuild').transformSync(js)
{
  code: 'let \\u03C0 = Math.PI;\n',
  map: '',
  warnings: []
}
require('esbuild').transformSync(js, {
  charset: 'utf8',
})
{
  code: 'let π = Math.PI;\n',
  map: '',
  warnings: []
}
```

</div>
<div title="go">

```go
// go

package main

import "fmt"
import "github.com/evanw/esbuild/pkg/api"

func main() {
  js := "let π = Math.PI"

  result1 := api.Transform(js, api.TransformOptions{})

  if len(result1.Errors) == 0 {
    fmt.Printf("%s", result1.Code)
  }

  result2 := api.Transform(js, api.TransformOptions{
    Charset: api.CharsetUTF8,
  })

  if len(result2.Errors) == 0 {
    fmt.Printf("%s", result2.Code)
  }
}
```

</div>
</div>

一些警告：

* 这尚未逃避嵌入正则表达式中的非ASCII字符。这是因为eSbuild目前根本没有解析正则表达式的内容。尽管有此限制，因此添加了该标志，因为它对不包含这样的案例的代码仍然有用。

* 此标志不适用于评论。我相信在注释中保留非ASCII数据应该是正常的，因为即使编码是错误的，运行时环境也应该完全忽略所有评论的内容。例如，V8博客发布提到了一种优化，避免完全解码评论内容。无论如何都是由伊斯邦尔剥离了许可证相关评论之外的所有评论。

* 此选项同时适用于所有输出文件类型（JavaScript，CSS和JSON）。因此，如果将Web服务器配置为发送正确的`Content-Type`标题并希望使用UTF-8 Charset，请确保将Web服务器配置为将`.js`和`.css`文件视为UTF-8。

### Chunk names

支持：Build

此选项控制启用[代码拆分](./transform/#splitting)时自动生成的共享代码块的文件名。它使用带有占位符的模板配置输出路径，当生成输出路径时，这些占位符将替换为特定于块的值。例如，指定 `chunks/[name]-[hash]` 的块名称模板会将所有生成的块放入输出目录中名为 chunks 的子目录中，并在文件名中包含块的内容哈希。这样做看起来像这样：

<div>
<div title="cli">

```sh

esbuild app.js --chunk-names=chunks/[name]-[hash] --bundle --outdir=out --splitting --format=esm
```

</div>
<div title="js">

```js

require('esbuild').buildSync({
  entryPoints: ['app.js'],
  chunkNames: 'chunks/[name]-[hash]',
  bundle: true,
  outdir: 'out',
  splitting: true,
  format: 'esm',
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
    ChunkNames:  "chunks/[name]-[hash]",
    Bundle:      true,
    Outdir:      "out",
    Splitting:   true,
    Format:      api.FormatESModule,
  })

  if len(result.Errors) > 0 {
    os.Exit(1)
  }
}
```

</div>
</div>

有两个占位符可用于块路径模板：

* `[name]`

目前这将始终是`文本块`，尽管此占位符可能会在未来版本中采用其他值。

* `[hash]`

这是块的内容哈希。在生成多个共享代码块的情况下，为了将不同的块彼此区分开来，必须包括这一点。

块路径模板不需要包含文件扩展名。模板替换后，为适当的内容类型配置的[输出扩展](./transform/#out-extension)名将自动添加到输出路径的末尾。

请注意，此选项仅控制自动生成的共享代码块的名称。它不控制与入口点相关的输出文件的名称。这些名称当前是根据原始入口点文件相对于 [outbase](./transform/#outbase) 目录的路径确定的，并且无法更改此行为。将来会添加一个额外的 API 选项，让您可以更改入口点输出文件的文件名。

此选项类似于[资产名称](./transform/#asset-names)和[条目名称](./transform/#entry-names)选项。

### Color

支持：Transform | Build

此选项启用或禁用 esbuild 写入终端中 stderr 文件描述符的错误和警告消息中的颜色。默认情况下，如果 stderr 是 TTY 会话，则自动启用颜色，否则自动禁用。 esbuild 中的彩色输出如下所示：

<img :src="$withBase('/assets/cli/1629696207477.jpg')" alt="demo" />

可以通过将 color 设置为 `true` 来强制启用彩色输出。如果您自己将 esbuild 的 stderr 输出通过管道传输到 TTY，这将非常有用：

<div>
<div title="cli">

```sh

echo 'typeof x == "null"' | esbuild --color=true 2> stderr.txt
```

</div>
<div title="js">

```js

let js = 'typeof x == "null"'
require('esbuild').transformSync(js, {
  color: true,
})
```

</div>
<div title="go">

```go

package main

import "fmt"
import "github.com/evanw/esbuild/pkg/api"

func main() {
  js := "typeof x == 'null'"

  result := api.Transform(js, api.TransformOptions{
    Color: api.ColorAlways,
  })

  if len(result.Errors) == 0 {
    fmt.Printf("%s", result.Code)
  }
}
```

</div>
</div>

也可以将彩色输出设置为 `false` 以禁用颜色。

### Conditions

支持：Build

此功能控制如何解释 `package.json` 中的`导出字段`。可以使用条件设置添加自定义条件。您可以根据需要指定任意数量的这些，这些的含义完全取决于包作者。 Node 目前只认可推荐使用的`开发`和`生产`自定义条件。以下是添加自定义条件 `custom1` 和 `custom2` 的示例：

<div>
<div title="cli">

```sh

esbuild src/app.js --bundle --conditions=custom1,custom2
```

</div>
<div title="js">

```js

require('esbuild').buildSync({
  entryPoints: ['src/app.js'],
  bundle: true,
  conditions: ['custom1', 'custom2'],
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
    EntryPoints: []string{"src/app.js"},
    Bundle:      true,
    Conditions:  []string{"custom1", "custom2"},
  })

  if len(result.Errors) > 0 {
    os.Exit(1)
  }
}
```

</div>
</div>

#### How conditions work

条件允许您在不同情况下将相同的导入路径重定向到不同的文件位置。包含条件和路径的重定向映射存储在包的 `package.json` 文件的`导出字段`中。例如，这会将 `require('pkg/foo')` 重新映射到 `pkg/required.cjs` 并使用 `import` 和 `require` 条件将 `'pkg/foo'` 导入到 `pkg/imported.mjs`：

```json
{
  "name": "pkg",
  "exports": {
    "./foo": {
      "import": "./imported.mjs",
      "require": "./required.cjs",
      "default": "./fallback.js"
    }
  }
}
```

条件按照它们在 JSON 文件中出现的顺序进行检查。所以上面的例子表现得有点像这样：

```js
if (importPath === './foo') {
  if (conditions.has('import')) return './imported.mjs'
  if (conditions.has('require')) return './required.cjs'
  return './fallback.js'
}
```

默认情况下，esbuild 内置了五个具有特殊行为的条件，并且无法禁用：

* `default`

此条件始终处于活动状态。它旨在最后出现，并让您在没有其他条件适用时提供后备。

* `import`

此条件仅在导入路径来自 ESM `导入语句`或 `import()` 表达式时才有效。它可用于提供特定于 ESM 的代码。

* `require`

此条件仅在导入路径来自 CommonJS `require()` 调用时才有效。它可用于提供 CommonJS 特定的代码。

* `browser`

当esbuild的[平台设置](./transform/#platform)设置为`浏览器`时，此条件仅激活。它可用于提供特定于浏览器的代码。

* `node`

当eSbuild的[平台设置设](./transform/#platform)置为`node`时，此条件仅激活。它可用于提供特定于node的代码。

请注意，当您使用`require`和`import`条件时，您的包裹可能会多次捆绑在捆绑包中！这是一个微妙的问题，除了围绕生成的捆绑包之外，由于代码状态的重复副本，可能会导致错误。这通常被称为[双包危险](https://nodejs.org/docs/latest/api/packages.html#packages_dual_package_hazard)。避免此方法的主要方式是将所有代码放在`require`条件下，并具有`import`条件只是一个非受控块`require`，可在您的包装上调用，并使用ESM语法重新导出包裹。

### Entry names

支持：Build

此选项控制对应于每个输入条目点文件的输出文件的文件名。它使用带有占位符的模板配置输出路径，该占位符将被替换为在生成输出路径时由特定于文件的值替换。例如，指定`[dir]/[name]-[hash]`的条目名称模板包括文件名中的输出文件的哈希，并将文件放入输出目录中，可能会在子目录下（请参阅有关[`[ Dir]`下面）。这样看起来如此：

<div>
<div title="cli">

```sh

esbuild src/main-app/app.js --entry-names=[dir]/[name]-[hash] --outbase=src --bundle --outdir=out
```

</div>
<div title="js">

```js

require('esbuild').buildSync({
  entryPoints: ['src/main-app/app.js'],
  entryNames: '[dir]/[name]-[hash]',
  outbase: 'src',
  bundle: true,
  outdir: 'out',
})
```

</div>
<div title="go">

```go
// go

package main

import "github.com/evanw/esbuild/pkg/api"
import "os"

func main() {
  result := api.Build(api.BuildOptions{
    EntryPoints: []string{"src/main-app/app.js"},
    EntryNames:  "[dir]/[name]-[hash]",
    Outbase:     "src",
    Bundle:      true,
    Outdir:      "out",
  })

  if len(result.Errors) > 0 {
    os.Exit(1)
  }
}
```

</div>
</div>

有三个占位符可以在进入路径模板中使用：

* `[dir]`

这是从包含输入条目点文件到[outbase](./transform/#outbase)目录的目录的相对路径。其目的是帮助您避免不同子目录中相同名为的入口点之间的碰撞。

例如，如果有两个条目点`src/pages/home/index.ts`和`src/pages/about/index.ts`，则`outbase`目录是`src`，条目名称模板是`[dir]/[name]`，输出目录将包含`pages/home/index.js`和`pages/about/index.js`。如果输入名称模板只是`[name]`而言，捆绑将失败，因为输出目录中存在两个具有相同输出路径索​​引的输出文件。

* `[name]`

这是没有扩展名的入口点的原始文件名。例如，如果输入条目点文件名为`App.js`，则`[Name]`将在模板中的`应用程序`替换。

* `[hash]`

这是输出文件的内容散列，可用于采取浏览器缓存的最佳优势。将`[hash]`添加到您的入口点名称意味着eSbuild将计算与相应的输出文件中的所有内容相关的散列（以及如果[代码拆分](./transform/#splitting)是活动的任何输出文件，则它导入的任何输出文件）。散列旨在且仅在更改与该输出文件相关的任何输入文件时才更改。

之后，您可以让您的Web服务器告诉浏览器，以便将浏览器永远缓存这些文件（在练习中，您可以说他们从现在就像在一年中那样长时间到期）。然后，您可以使用[元文件](./transform/#metafile)中的信息来确定哪个输出文件路径对应于哪个输入条目点，以便您知道`<script>`标记中包含的路径包含在哪条路径中。

条目路径模板不需要包含文件扩展名。基于文件类型的适当[突出](./transform/#out-extension)扩展将在模板替换后自动添加到输出路径的末尾。

此选项类似于[资产名称](./transform/#asset-names)和[块名称](./transform/#chunk-names)选项。

### Footer

支持：Transform | Build

使用此选项可在生成的JavaScript和CSS文件的末尾插入任意字符串。这通常用于插入评论：

<div>
<div title="cli">

```sh

esbuild app.js --footer:js=//comment --footer:css=/*comment*/
```

</div>
<div title="js">

```js

require('esbuild').buildSync({
  entryPoints: ['app.js'],
  footer: {
    js: '//comment',
    css: '/*comment*/',
  },
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
    Footer: map[string]string{
      "js":  "//comment",
      "css": "/*comment*/",
    },
  })

  if len(result.Errors) > 0 {
    os.Exit(1)
  }
}
```

</div>
</div>

这类似于[横幅](./transform/#banner)，该横幅在开始而不是结束时插入。

### Global name

支持：Transform | Build

此选项仅在[格式](./transform/#format)设置为`IIFE`时事项（代表立即调用的函数表达式）。它设置全局变量的名称，用于从入口点存储导出：

<div>
<div title="cli">

```sh

echo 'module.exports = "test"' | esbuild --format=iife --global-name=xyz
```

</div>
<div title="js">

```js

let js = 'module.exports = "test"'
require('esbuild').transformSync(js, {
  format: 'iife',
  globalName: 'xyz',
})
```

</div>
<div title="go">

```go

package main

import "fmt"
import "github.com/evanw/esbuild/pkg/api"

func main() {
  js := "module.exports = 'test'"

  result := api.Transform(js, api.TransformOptions{
    Format:     api.FormatIIFE,
    GlobalName: "xyz",
  })

  if len(result.Errors) == 0 {
    fmt.Printf("%s", result.Code)
  }
}
```

</div>
</div>

使用`iife`格式指定全局名称将生成查看类似的代码：

```js
var xyz = (() => {
  ...
  var require_stdin = __commonJS((exports, module) => {
    module.exports = "test";
  });
  return require_stdin();
})();
```

全局名称也可以是复合属性表达式，在这种情况下，eSbuild将生成具有该属性的全局变量。不覆盖冲突的现有全局变量。这可以用于实现“命名方式”，其中多个独立脚本将导出添加到同一全局对象上。例如：

<div>
<div title="cli">

```sh

echo 'module.exports = "test"' | esbuild --format=iife --global-name='example.versions["1.0"]'
```

</div>
<div title="js">

```js

let js = 'module.exports = "test"'
require('esbuild').transformSync(js, {
  format: 'iife',
  globalName: 'example.versions["1.0"]',
})
```

</div>
<div title="go">

```go

package main

import "fmt"
import "github.com/evanw/esbuild/pkg/api"

func main() {
  js := "module.exports = 'test'"

  result := api.Transform(js, api.TransformOptions{
    Format:     api.FormatIIFE,
    GlobalName: `example.versions["1.0"]`,
  })

  if len(result.Errors) == 0 {
    fmt.Printf("%s", result.Code)
  }
}
```

</div>
</div>

上面使用的复合全局名称生成如下所示的代码：

```js
var example = example || {};
example.versions = example.versions || {};
example.versions["1.0"] = (() => {
  ...
  var require_stdin = __commonJS((exports, module) => {
    module.exports = "test";
  });
  return require_stdin();
})();
```

### Incremental

支持：Build

如果您的用例涉及使用相同的选项致电呼叫eSbuild的[构建API](./transform/#build-api)，则可能希望使用此API。例如，如果您正在实现文件观察者服务，这将是有用的。增量构建比常规构建更有效，因为有些数据被缓存，并且如果自上次构建以来原始文件没有更改，则可以重用。目前，增量构建API使用两种形式的缓存：

* 文件存储在内存中，如果文件元数据自上次构建以来未更改，则不会从文件系统重新读取。此优化仅适用于文件系统路径。它不适用于由[插件](https://esbuild.github.io/plugins/)创建的虚拟模块。

* 解析[AST](https://en.wikipedia.org/wiki/Abstract_syntax_tree)存储在内存中，如果文件内容自上次构建以来没有更改，则避免重新解析AST。除了文件系统模块之外，此优化还适用于由Plugins创建的虚拟模块，只要虚拟模块路径保持不变。

以下是如何进行增量构建：

<div>
<div title="js">

```js

async function example() {
  let result = await require('esbuild').build({
    entryPoints: ['app.js'],
    bundle: true,
    outfile: 'out.js',
    incremental: true,
  })

  // Call "rebuild" as many times as you want
  for (let i = 0; i < 5; i++) {
    let result2 = await result.rebuild()
  }

  // Call "dispose" when you're done to free up resources.
  result.rebuild.dispose()
}

example()
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
    Outfile:     "out.js",
    Incremental: true,
  })
  if len(result.Errors) > 0 {
    os.Exit(1)
  }

  // Call "Rebuild" as many times as you want
  for i := 0; i < 5; i++ {
    result2 := result.Rebuild()
    if len(result2.Errors) > 0 {
      os.Exit(1)
    }
  }
}
```

</div>
</div>

### JSX

支持：Transform | Build

此选项告诉eSBuild如何处理JSX语法。您可以将eSBuild转换为JS（默认值）或保留输出中的JSX语法。保留JSX语法：

<div>
<div title="cli">

```sh

echo '<div/>' | esbuild --jsx=preserve --loader=jsx
<div />;
```

</div>
<div title="js">

```js

require('esbuild').transformSync('<div/>', {
  jsx: 'preserve',
  loader: 'jsx',
})
{
  code: '<div />;\n',
  map: '',
  warnings: []
}
```

</div>
<div title="go">

```go

package main

import "fmt"
import "github.com/evanw/esbuild/pkg/api"

func main() {
  result := api.Transform("<div/>", api.TransformOptions{
    JSXMode: api.JSXModePreserve,
    Loader:  api.LoaderJSX,
  })

  if len(result.Errors) == 0 {
    fmt.Printf("%s", result.Code)
  }
}
```

</div>
</div>

请注意，如果保留JSX语法，则输出文件不再有效JavaScript代码。当您希望在捆绑后通过另一个工具在eSBuild的输出文件中将JSX语法转换为eSbuild的输出文件中的JSX语法，通常是与一个eSBuild实现不同的JSX-to-JS转换。

### JSX factory

支持：Transform | Build

这设置了对每个JSX元素调用的函数。通常是诸如此类的JSX表达式：

```jsx
<div>Example text</div>
```

被编译成函数调用`React.createElement`。如下所示：

```jsx
React.createElement("div", null, "Example text");
```

您可以通过更改JSX工厂来调用除`React.createLement`之外的内容。例如，要调用函数`h`（而不是由其他库使用，例如 [Preact](https://preactjs.com/)）：

<div>
<div title="cli">

```sh

echo '<div/>' | esbuild --jsx-factory=h --loader=jsx
/* @__PURE__ */ h("div", null);
```

</div>
<div title="js">

```js
// js

require('esbuild').transformSync('<div/>', {
  jsxFactory: 'h',
  loader: 'jsx',
})
{
  code: '/* @__PURE__ */ h("div", null);\n',
  map: '',
  warnings: []
}
```

</div>
<div title="go">

```go
// go

package main

import "fmt"
import "github.com/evanw/esbuild/pkg/api"

func main() {
  result := api.Transform("<div/>", api.TransformOptions{
    JSXFactory: "h",
    Loader:     api.LoaderJSX,
  })

  if len(result.Errors) == 0 {
    fmt.Printf("%s", result.Code)
  }
}
```

</div>
</div>

或者，如果您使用的是类型签字，只需通过将此添加到`TSConfig.JSON`文件和eSbuild即可自动将其拾取而无法配置：

```json
{
  "compilerOptions": {
    "jsxFactory": "h"
  }
}
```

### JSX fragment

支持：Transform | Build

这设置了对每个JSX片段调用的函数。通常是一个JSX片段表达式，如下所示：

```jsx
<>Stuff</>
```

被编译为使用`React.Fragment`组件如下所示：

```js
React.createElement(React.Fragment, null, "Stuff");
```

您可以通过更改JSX片段，使用除`React.fragment`之外的组件。例如，要使用组件`Fragment`（由其他库使用，例如[ Preact](https://preactjs.com/)）：

<div>
<div title="cli">

```sh

echo '<>x</>' | esbuild --jsx-fragment=Fragment --loader=jsx
/* @__PURE__ */ React.createElement(Fragment, null, "x");
```

</div>
<div title="js">

```js

require('esbuild').transformSync('<>x</>', {
  jsxFragment: 'Fragment',
  loader: 'jsx',
})
{
  code: '/* @__PURE__ */ React.createElement(Fragment, null, "x");\n',
  map: '',
  warnings: []
}
```

</div>
<div title="go">

```go
// go

package main

import "fmt"
import "github.com/evanw/esbuild/pkg/api"

func main() {
  result := api.Transform("<>x</>", api.TransformOptions{
    JSXFragment: "Fragment",
    Loader:      api.LoaderJSX,
  })

  if len(result.Errors) == 0 {
    fmt.Printf("%s", result.Code)
  }
}
```

</div>
</div>

或者，如果您使用的是类型签字，只需通过将此添加到`tsconfig.json`文件和eSbuild即可自动将其拾取而无法配置：

```json
{
  "compilerOptions": {
    "jsxFragmentFactory": "Fragment"
  }
}
```

### Keep names

支持：Transform | Build

在JavaScript中，函数的`名称`属性和类默认为源代码中的附近标识符。这些语法表单都将函数的`名称`属性设置为`“fn”`：

```js
function fn() {}
let fn = function() {};
fn = function() {};
let [fn = function() {}] = [];
let {fn = function() {}} = {};
[fn = function() {}] = [];
({fn = function() {}} = {});
```

但是，[压缩](./transform/#minify)重命名符号以降低代码大小和捆绑有时需要重命名符号以避免冲突。这对这些案例中的许多情况进行了`名称`属性的值。这通常很好，因为`名称`属性通常仅用于调试。但是，某些框架依赖于`名称`属性进行注册和绑定目的。如果是这种情况，您可以启用此选项即使在压缩代码中也可以保留原始`名称`值：

<div>
<div title="cli">

```sh

esbuild app.js --minify --keep-names
```

</div>
<div title="js">

```js

require('esbuild').buildSync({
  entryPoints: ['app.js'],
  minify: true,
  keepNames: true,
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
    EntryPoints:       []string{"app.js"},
    MinifyWhitespace:  true,
    MinifyIdentifiers: true,
    MinifySyntax:      true,
    KeepNames:         true,
  })

  if len(result.Errors) > 0 {
    os.Exit(1)
  }
}
```

</div>
</div>

### Legal comments

支持：Transform | Build

“法律评论”被认为是包含`@License`或`@PreServe`或以//开始的任何声明级别评论`//!`或`/*!`默认情况下，这些注释保留在输出文件中，因为它遵循代码的原始作者的意图。但是，可以使用以下选项之一来配置此行为：

* `none`

不要保留任何法律评论。

* `inline`

保留所有法律评论。

* `eof`

将所有法律评论移动到文件的末尾。

* `linked`

将所有法律评论移动到`.legal.txt`文件并用评论链接到它们。

* `external`

将所有法律评论移动到`.legal.txt`文件，但不链接到它们。

默认行为是`EOF`当[捆绑](./transform/#bundle)包启用并否则`内联`。设置法律评论模式如下所示：

<div>
<div title="cli">

```sh

esbuild app.js --legal-comments=eof
```

</div>
<div title="js">

```js

require('esbuild').buildSync({
  entryPoints: ['app.js'],
  legalComments: 'eof',
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
    EntryPoints:   []string{"app.js"},
    LegalComments: api.LegalCommentsEndOfFile,
  })

  if len(result.Errors) > 0 {
    os.Exit(1)
  }
}
```

</div>
</div>

请注意，“语句级别”表示注释必须在允许多个语句的上下文中出现，例如在顶级范围或语句块中。因此表达中的评论不被视为许可评论。

### Log level

支持：Transform | Build

可以更改日志级别以防止eSbuild打印警告和/或错误消息到终端。六个日志级别为：

* `silent`

请勿显示任何日志输出。

* `error`

只显示错误。

* `warning`

只显示警告和错误。

* `info`

显示警告，错误和输出文件摘要。这是默认的日志级别。

* `debug`

从`信息`和一些可以帮助您调试损坏捆绑包的其他邮件记录所有内容。此日志级别具有性能影响，其中一些消息可能是误报，因此默认情况下未显示此信息。

* `verbose`

这会生成一个日志消息的洪流，并添加到带有文件系统驱动程序的调试问题。它不适用于一般使用。

可以设置日志级别：

<div>
<div title="cli">

```cli
// cli

echo 'typeof x == "null"' | esbuild --log-level=error
```

</div>
<div title="js">

```js

let js = 'typeof x == "null"'
require('esbuild').transformSync(js, {
  logLevel: 'error',
})
```

</div>
<div title="go">

```go

package main

import "fmt"
import "github.com/evanw/esbuild/pkg/api"

func main() {
  js := "typeof x == 'null'"

  result := api.Transform(js, api.TransformOptions{
    LogLevel: api.LogLevelError,
  })

  if len(result.Errors) == 0 {
    fmt.Printf("%s", result.Code)
  }
}
```

</div>
</div>

### Log limit

支持：Transform | Build

默认情况下，eSBuild在报告10条消息后停止报告日志消息。这避免了意外生成压倒性数量的日志消息，这可以轻松锁定较慢的终端仿真器，例如Windows命令提示符。它还避免使用具有有限滚动缓冲器的终端仿真器的整个滚动缓冲区。

日志限制可以更改为另一个值，也可以通过将其设置为零完全禁用。这将显示所有日志消息：

<div>
<div title="cli">

```sh

esbuild app.js --log-limit=0
```

</div>
<div title="js">

```js

require('esbuild').buildSync({
  entryPoints: ['app.js'],
  logLimit: 0,
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
    LogLimit:    0,
  })

  if len(result.Errors) > 0 {
    os.Exit(1)
  }
}
```

</div>
</div>

### Main fields

支持：Build

当您在node中导入包时，该软件包包中的`mane` `package.json`文件确定导入哪个文件（以及[许多其他规则](https://nodejs.org/api/modules.html#modules_all_together)）。包括eSBuild的主要JavaScript Bundlers，允许您指定其他包。json字段以在解析包时尝试。通常有三个这些领域：

* `main`

这是[标准字段](https://docs.npmjs.com/files/package.json#main)，用于与node一起使用的所有包。名称`Main`中硬编码为Node的模块分辨率逻辑本身。因为它旨在与node一起使用，所以可以合理地期望此字段中的文件路径是CommonJS样式模块。

* `module`

该领域来自如何将EcMasscript模块集成到node中的[提案](https://github.com/dherman/defense-of-dot-js/blob/f31319be735b21739756b87d551f6711bd7aa283/proposal.md)。因此，预计此字段中的文件路径是ECMAScript风格模块是合理的。node未采用此提议（Node使用`“type”`：`“module”`而不是），但主要是主要的捆绑程序采用，因为ECMAScript风格模块导致更好的[树抖动](./transform/#tree-shaking)，或拆除死亡代码。

对于包作者：某些软件包错误地使用特定于浏览器代码的`模块`字段，为`main`留下特定于node的代码。这可能是因为node忽略了`模块`字段，人们通常只使用Bundlers特定于浏览器代码。然而，捆绑的node特定代码也有价值（例如，它减少了下载和启动时间），并将特定于`模块`中的浏览器代码的软件包阻止捆绑程序能够有效地进行树摇动。如果您尝试在包中发布特定于浏览器的代码，请使用`浏览器`字段。

* `browser`

此字段来自一个[提议](https://gist.github.com/defunctzombie/4339901/49493836fb873ddaa4b8a7aa0ef2352119f69211)，允许捆绑程序用浏览器友好版本替换特定于node的文件或模块。它允许您指定备用浏览器特定的入口点。请注意，程序包可以一起使用`浏览器`和`模块`字段（请参阅下面的注释）。

默认主字段取决于当前平台[设置](./transform/#platform)，并且基本上是`浏览器`，`模块`，`main`和主要的`main`，node `module`。这些默认值应该是与现有包生态系统最广泛兼容。但如果您愿意，您可以根据这样自定义它们：

<div>
<div title="cli">

```sh

esbuild app.js --bundle --main-fields=module,main
```

</div>
<div title="js">

```js

require('esbuild').buildSync({
  entryPoints: ['app.js'],
  bundle: true,
  mainFields: ['module', 'main'],
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
    MainFields:  []string{"module", "main"},
    Write:       true,
  })

  if len(result.Errors) > 0 {
    os.Exit(1)
  }
}
```

</div>
</div>

对于包作者：如果要创建使用`浏览器`字段的包与`模块`字段结合使用浏览器字段以填写完整CommonJS-VS-ESM和浏览器-VS-Node兼容性矩阵中的所有四个条目，则要使用展开的`浏览器`字段的形式，即地图而不是仅限字符串：

```json
{
  "main": "./node-cjs.js",
  "module": "./node-esm.js",
  "browser": {
    "./node-cjs.js": "./browser-cjs.js",
    "./node-esm.js": "./browser-esm.js"
  }
}
```

### Metafile

支持：Build

此选项告诉ESBuild以JSON格式生成有关构建的一些元数据。以下示例将元数据放在名为`meta.json`的文件中：

<div>
<div title="cli">

```sh

esbuild app.js --bundle --metafile=meta.json --outfile=out.js
```

</div>
<div title="js">

```js

const result = require('esbuild').buildSync({
  entryPoints: ['app.js'],
  bundle: true,
  metafile: true,
  outfile: 'out.js',
})
require('fs').writeFileSync('meta.json',
  JSON.stringify(result.metafile))
```

</div>
<div title="go">

```go

package main

import "io/ioutil"
import "github.com/evanw/esbuild/pkg/api"
import "os"

func main() {
  result := api.Build(api.BuildOptions{
    EntryPoints: []string{"app.js"},
    Bundle:      true,
    Metafile:    true,
    Outfile:     "out.js",
    Write:       true,
  })

  if len(result.Errors) > 0 {
    os.Exit(1)
  }

  ioutil.WriteFile("meta.json", []byte(result.Metafile), 0644)
}
```

</div>
</div>

然后可以通过其他工具分析此数据。例如，[Bundle Buddy](https://www.bundle-buddy.com/esbuild)可以消耗eSBuild的元数据格式，并在捆绑包中生成模块的Treemap可视化以及每个人占用多少空间。

元数据JSON格式如图所示（使用typescript界面描述）：

```ts
interface Metadata {
  inputs: {
    [path: string]: {
      bytes: number
      imports: {
        path: string
        kind: string
      }[]
    }
  }
  outputs: {
    [path: string]: {
      bytes: number
      inputs: {
        [path: string]: {
          bytesInOutput: number
        }
      }
      imports: {
        path: string
        kind: string
      }[]
      exports: string[]
      entryPoint?: string
    }
  }
}
```

### Node paths

支持：Build

node的模块分辨率算法支持一个名为[node_path](https://nodejs.org/api/modules.html#modules_loading_from_the_global_folders)的环境变量，其中包含在解析导入路径时使用的全局目录列表。除了所有父目录中的`node_modules`目录之外，还搜索这些路径。您可以使用带有CLI的环境变量并使用JS和GO API的阵列将此目录列表传递给eSBuild列表：

<div>
<div title="cli">

```sh

NODE_PATH=someDir esbuild app.js --bundle --outfile=out.js
```

</div>
<div title="js">

```js

require('esbuild').buildSync({
  nodePaths: ['someDir'],
  entryPoints: ['app.js'],
  bundle: true,
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
    NodePaths:   []string{"someDir"},
    EntryPoints: []string{"app.js"},
    Bundle:      true,
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

如果您使用的是CLI并希望使用`Node_Path`传递多个目录，则必须将它们分开`:`UNIX和`;`在Windows上。这是node本身使用的格式相同的格式。

### Out extension

支持：Build

此选项允许您自定义 esbuild 生成的文件的文件扩展名，而不是 `.js` 或 `.css`。特别是`.mjs` 和`.cjs` 文件扩展名在node 中有特殊含义（它们分别表示ESM 和CommonJS 格式的文件）。如果您使用 esbuild 生成多个文件并且必须使用 [outdir](./transform/#outdir) 选项而不是 [outfile](./transform/#outfile) 选项，则此选项很有用。你可以这样使用它：

<div>
<div title="cli">

```sh

esbuild app.js --bundle --outdir=dist --out-extension:.js=.mjs
```

</div>
<div title="js">

```js

require('esbuild').buildSync({
  entryPoints: ['app.js'],
  bundle: true,
  outdir: 'dist',
  outExtension: { '.js': '.mjs' },
})
```

</div>
<div title="go">

```go
// go

package main

import "github.com/evanw/esbuild/pkg/api"
import "os"

func main() {
  result := api.Build(api.BuildOptions{
    EntryPoints: []string{"app.js"},
    Bundle:      true,
    Outdir:      "dist",
    OutExtensions: map[string]string{
      ".js": ".mjs",
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

### Outbase

支持：Build

如果您的构建在单独的目录中包含多个入口点，则目录结构将复制到相对于 outbase 目录的[输出目录](./transform/#outdir)中。例如，如果有两个入口点 `src/pages/home/index.ts` 和 `src/pages/about/index.ts` 并且 outbase 目录是 `src`，则输出目录将包含 `pages/home/index.js` 和 `pages/about/index.js`。以下是如何使用它：

<div>
<div title="cli">

```sh

esbuild src/pages/home/index.ts src/pages/about/index.ts --bundle --outdir=out --outbase=src
```

</div>
<div title="js">

```js

require('esbuild').buildSync({
  entryPoints: [
    'src/pages/home/index.ts',
    'src/pages/about/index.ts',
  ],
  bundle: true,
  outdir: 'out',
  outbase: 'src',
})
```

</div>
<div title="go">

```go
// go

package main

import "github.com/evanw/esbuild/pkg/api"
import "os"

func main() {
  result := api.Build(api.BuildOptions{
    EntryPoints: []string{
      "src/pages/home/index.ts",
      "src/pages/about/index.ts",
    },
    Bundle:  true,
    Outdir:  "out",
    Outbase: "src",
  })

  if len(result.Errors) > 0 {
    os.Exit(1)
  }
}
```

</div>
</div>

如果未指定 outbase 目录，则默认为所有输入入口点路径中[最低的公共祖先](https://en.wikipedia.org/wiki/Lowest_common_ancestor)目录。这是上面示例中的 `src/pages`，这意味着默认情况下输出目录将包含 `home/index.js` 和 `about/index.js`。

### Preserve symlinks

支持：Build

此设置反映了节点中的 [--preserve-symlinks](https://nodejs.org/api/cli.html#cli_preserve_symlinks) 设置。如果您使用该设置（或 Webpack 中类似的 [resolve.symlinks](https://webpack.js.org/configuration/resolve/#resolvesymlinks) 设置），您可能也需要在 esbuild 中启用此设置。它可以像这样启用：

<div>
<div title="cli">

```sh

esbuild app.js --bundle --preserve-symlinks --outfile=out.js
```

</div>
<div title="js">

```js

require('esbuild').buildSync({
  entryPoints: ['app.js'],
  bundle: true,
  preserveSymlinks: true,
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
    EntryPoints:      []string{"app.js"},
    Bundle:           true,
    PreserveSymlinks: true,
    Outfile:          "out.js",
  })

  if len(result.Errors) > 0 {
    os.Exit(1)
  }
}
```

</div>
</div>

启用此设置会导致 esbuild 通过原始文件路径（即没有跟随符号链接的路径）而不是真实文件路径（即跟随符号链接之后的路径）来确定文件标识。这对于某些目录结构是有益的。请记住，这意味着如果有多个符号链接指向一个文件，它可能会被赋予多个身份，这可能导致它在生成的输出文件中多次出现。

注意：术语“符号链接”表示[符号链接](https://en.wikipedia.org/wiki/Symbolic_link)，指的是一种文件系统功能，其中一个路径可以重定向到另一个路径。

### Public path

支持：Build

这与外部文件加载器结合使用很有用。默认情况下，加载器使用`默认`导出将导入文件的名称导出为字符串。公共路径选项允许您在此加载程序加载的每个文件的导出字符串之前添加基本路径：

<div>
<div title="cli">

```sh

esbuild app.js --bundle --loader:.png=file --public-path=https://www.example.com/v1 --outdir=out
```

</div>
<div title="js">

```js

require('esbuild').buildSync({
  entryPoints: ['app.js'],
  bundle: true,
  loader: { '.png': 'file' },
  publicPath: 'https://www.example.com/v1',
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
    Outdir:     "out",
    PublicPath: "https://www.example.com/v1",
    Write:      true,
  })

  if len(result.Errors) > 0 {
    os.Exit(1)
  }
}
```

</div>
</div>

### Pure

支持：Transform | Build

各种 JavaScript 工具都使用一个约定，其中在 new 或 call 表达式之前包含 `/* @__PURE__ */` 或 `/* #__PURE__ */` 的特殊注释意味着如果结果值未使用，则可以删除该表达式。它看起来像这样：

```js
let button = /* @__PURE__ */ React.createElement(Button, null);
```

在打包程序无法自行证明删除是安全的情况下，打包程序（例如 esbuild 在摇树（又名死代码删除）期间使用此信息来执行跨模块边界的未使用导入的细粒度删除） JavaScript 代码的动态特性。

请注意，虽然注释说“pure”，但令人困惑的是，它并不表示被调用的函数是纯函数。例如，它并不表示可以缓存对该函数的重复调用。该名称本质上只是“如果未使用则可以删除”的抽象简写。

一些表达式如 JSX 和某些内置全局变量在 esbuild 中自动注释为 `/* @__PURE__ */`。您还可以配置其他全局变量以标记为 `/* @__PURE__ */`。例如，您可以将全局 `console.log` 函数标记为这样，以便在包缩小时自动将其从包中删除，只要结果未被使用。

值得一提的是，注解的作用只扩展到调用本身，而不扩展到参数。仍然保留有副作用的参数：

<div>
<div title="cli">

```sh

echo 'console.log("foo:", foo())' | esbuild --pure:console.log
/* @__PURE__ */ console.log("foo:", foo());

echo 'console.log("foo:", foo())' | esbuild --pure:console.log --minify
foo();
```

</div>
<div title="js">

```js

let js = 'console.log("foo:", foo())'
require('esbuild').transformSync(js, {
  pure: ['console.log'],
})
{
  code: '/* @__PURE__ */ console.log("foo:", foo());\n',
  map: '',
  warnings: []
}
require('esbuild').transformSync(js, {
  pure: ['console.log'],
  minify: true,
})
{
  code: 'foo();\n',
  map: '',
  warnings: []
}
```

</div>
<div title="go">

```go

package main

import "fmt"
import "github.com/evanw/esbuild/pkg/api"

func main() {
  js := "console.log('foo:', foo())"

  result1 := api.Transform(js, api.TransformOptions{
    Pure: []string{"console.log"},
  })

  if len(result1.Errors) == 0 {
    fmt.Printf("%s", result1.Code)
  }

  result2 := api.Transform(js, api.TransformOptions{
    Pure:         []string{"console.log"},
    MinifySyntax: true,
  })

  if len(result2.Errors) == 0 {
    fmt.Printf("%s", result2.Code)
  }
}
```

</div>
</div>

### Resolve extensions

支持：Build

[node 使用的解析算法](https://nodejs.org/api/modules.html#modules_file_modules)支持隐式文件扩展名。您可以 `require('./file')` ，它会按顺序检查 `./file`、.`/file.js`、`./file.json` 和 `./file.node`。包括 esbuild 在内的现代打包器也将此概念扩展到其他文件类型。可以使用解析扩展名设置自定义 esbuild 中隐式文件扩展名的完整顺序，默认为 `.tsx`,`.ts`,`.jsx`,`.js`,`.css`,`.json`：

<div>
<div title="cli">

```sh

esbuild app.js --bundle --resolve-extensions=.ts,.js
```

</div>
<div title="js">

```js

require('esbuild').buildSync({
  entryPoints: ['app.js'],
  bundle: true,
  resolveExtensions: ['.ts', '.js'],
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
    EntryPoints:       []string{"app.js"},
    Bundle:            true,
    ResolveExtensions: []string{".ts", ".js"},
    Write:             true,
  })

  if len(result.Errors) > 0 {
    os.Exit(1)
  }
}
```

</div>
</div>

### Source Root

支持：Transform | Build

此功能仅在启用源映射时相关。它允许您设置[源映射](./transform/#sourcemap)中的 `sourceRoot` 字段的值，该值指定源映射中所有其他路径相对于的路径。如果此字段不存在，则源映射中的所有路径都被解释为相对于包含源映射的目录。

您可以像这样配置 `sourceRoot`：

<div>
<div title="cli">

```sh

esbuild app.js --sourcemap --source-root=https://raw.githubusercontent.com/some/repo/v1.2.3/
```

</div>
<div title="js">

```js

require('esbuild').buildSync({
  entryPoints: ['app.js'],
  sourcemap: true,
  sourceRoot: 'https://raw.githubusercontent.com/some/repo/v1.2.3/',
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
    Sourcemap:   api.SourceMapInline,
    SourceRoot:  "https://raw.githubusercontent.com/some/repo/v1.2.3/",
  })

  if len(result.Errors) > 0 {
    os.Exit(1)
  }
}
```

</div>
</div>

### Sourcefile

支持：Transform | Build

当使用没有文件名的输入时，此选项设置文件名。使用转换 API 和使用带有标准输入的构建 API 时会发生这种情况。配置的文件名反映在错误消息和源映射中。如果未配置，则文件名默认为 `<stdin>`。它可以这样配置：

<div>
<div title="cli">

```sh

cat app.js | esbuild --sourcefile=example.js --sourcemap
```

</div>
<div title="js">

```js

let fs = require('fs')
let js = fs.readFileSync('app.js', 'utf8')

require('esbuild').transformSync(js, {
  sourcefile: 'example.js',
  sourcemap: 'inline',
})
```

</div>
<div title="go">

```go

package main

import "fmt"
import "io/ioutil"
import "github.com/evanw/esbuild/pkg/api"

func main() {
  js, err := ioutil.ReadFile("app.js")
  if err != nil {
    panic(err)
  }

  result := api.Transform(string(js),
    api.TransformOptions{
      Sourcefile: "example.js",
      Sourcemap:  api.SourceMapInline,
    })

  if len(result.Errors) == 0 {
    fmt.Printf("%s", result.Code)
  }
}
```

</div>
</div>

### Sources Content

支持：Transform | Build

[源映射](./transform/#sourcemap)是使用源映射格式的[第 3 版](https://sourcemaps.info/spec.html)生成的，这是迄今为止最广泛支持的变体。每个源映射看起来像这样：

```json
{
  "version": 3,
  "sources": ["bar.js", "foo.js"],
  "sourcesContent": ["bar()", "foo()\nimport './bar'"],
  "mappings": ";AAAA;;;ACAA;",
  "names": []
}
```

`sourcesContent` 字段是一个可选字段，包含所有原始源代码。这对调试很有帮助，因为这意味着原始源代码将在调试器中可用。

但是，在某些情况下不需要它。例如，如果您只是在生产中使用源映射来生成包含原始文件名的堆栈跟踪，则不需要原始源代码，因为不涉及调试器。在这种情况下，可能需要省略 `sourcesContent` 字段以使源映射更小：

<div>
<div title="cli">

```sh

esbuild --bundle app.js --sourcemap --sources-content=false
```

</div>
<div title="js">

```js

require('esbuild').buildSync({
  bundle: true,
  entryPoints: ['app.js'],
  sourcemap: true,
  sourcesContent: false,
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
    Bundle:         true,
    EntryPoints:    []string{"app.js"},
    Sourcemap:      api.SourceMapInline,
    SourcesContent: api.SourcesContentExclude,
  })

  if len(result.Errors) > 0 {
    os.Exit(1)
  }
}
```

</div>
</div>

### Stdin

支持：Build

通常，构建 API 调用将一个或多个文件名作为输入。但是，此选项可用于在文件系统上根本不存在模块的情况下运行构建。它被称为“标准输入”，因为它对应于在命令行上将文件通过管道传输到标准输入。

除了指定 stdin 文件的内容之外，您还可以选择指定解析目录（用于确定相对导入的位置）、[源文件](./transform/#sourcefile)（在错误消息和源映射中使用的文件名）和[加载程序](./transform/#loader)（这决定了文件内容的解释方式）。 CLI 无法指定解析目录。相反，它会自动设置为当前工作目录。

以下是如何使用此功能：

<div>
<div title="cli">

```sh

echo 'export * from "./another-file"' | esbuild --bundle --sourcefile=imaginary-file.js --loader=ts --format=cjs
```

</div>
<div title="js">

```js

let result = require('esbuild').buildSync({
  stdin: {
    contents: `export * from "./another-file"`,

    // These are all optional:
    resolveDir: require('path').join(__dirname, 'src'),
    sourcefile: 'imaginary-file.js',
    loader: 'ts',
  },
  format: 'cjs',
  write: false,
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
    Stdin: &api.StdinOptions{
      Contents: "export * from './another-file'",

      // These are all optional:
      ResolveDir: "./src",
      Sourcefile: "imaginary-file.js",
      Loader:     api.LoaderTS,
    },
    Format: api.FormatCommonJS,
  })

  if len(result.Errors) > 0 {
    os.Exit(1)
  }
}
```

</div>
</div>

### Tree shaking

支持：Transform | Build

摇树是 JavaScript 社区用于消除死代码的术语，这是一种常见的编译器优化，可自动删除无法访问的代码。请注意，esbuild 中的树抖动在捆绑期间始终处于启用状态，并且无法关闭，因为修剪未使用的代码会使生成的文件更小，而不会改变可观察的行为。

用一个例子来解释摇树是最容易的。考虑以下文件。有一个使用的函数和一个未使用的函数：

```js
// input.js
function one() {
  console.log('one')
}
function two() {
  console.log('two')
}
one()
```

如果您将此文件与 `esbuild --bundle input.js --outfile=output.js` 捆绑在一起，则未使用的函数将自动被丢弃，留下以下输出：

```js
// input.js
function one() {
  console.log("one");
}
one();
```

如果我们将函数拆分成一个单独的库文件并使用 `import` 语句导入它们，这甚至可以工作：

<div>
<div title="lib.js">

```js
// lib.js
export function one() {
  console.log('one')
}
export function two() {
  console.log('two')
}
```

</div>
<div title="input.js">

```js
// input.js
import * as lib from './lib.js'
lib.one()
```

</div>
</div>

如果您将此文件与 `esbuild --bundle input.js --outfile=output.js` 捆绑在一起，未使用的函数和未使用的导入仍将被自动丢弃，留下以下输出：

```js
// lib.js
function one() {
  console.log("one");
}

// input.js
one();
```

这样 esbuild 只会捆绑您实际使用的库的部分，这有时可以节省大量的大小。请注意，esbuild 的摇树实现依赖于 ECMAScript 模块`导入`和`导出`语句的使用。它不适用于 `CommonJS` 模块。 npm 上的许多库都包含这两种格式，而 esbuild 尝试选择默认情况下适用于摇树的格式。您可以使用[主字段选](./transform/#main-fields)项自定义 esbuild 选择的格式。

#### Manual tree shaking annotations(手动摇树注释)

由于 JavaScript 是一种动态语言，有时对于编译器来说识别未使用的代码非常困难，因此社区开发了某些注释来帮助告诉编译器哪些代码应该被视为未使用。目前esbuild支持两种形式的摇树注解：

* 函数调用前的内联 `/* @__PURE__ */` 注释告诉 esbuild 如果不使用结果值，可以删除函数调用。有关更多信息，请参阅[pure API](./transform/#pure) 选项。

* `package.json` 中的 `sideEffects` 字段可用于告诉 esbuild 如果来自该文件的所有导入最终都未使用，则可以删除包中的哪些文件。这是来自 Webpack 的约定，许多发布到 npm 的库已经在它们的包定义中包含了这个字段。您可以在该字段的 [Webpack 文档](https://webpack.js.org/guides/tree-shaking/)中了解有关该字段的更多信息。

这些注释可能有问题，因为编译器的准确性完全依赖于开发人员，而且开发人员偶尔会发布带有不正确注释的包。 `sideEffects` 字段对于开发人员来说特别容易出错，因为默认情况下，如果不使用导入，它会导致包中的所有文件都被视为死代码。如果您添加一个包含副作用的新文件并忘记更新该字段，那么当人们尝试捆绑它时，您的包可能会损坏。

这就是为什么 esbuild 包含一种忽略摇树注释的方法。只有在遇到包被破坏的问题时，才应该启用此功能，因为必需的代码意外地从包中删除：

<div>
<div title="cli">

```sh

esbuild app.js --bundle --tree-shaking=ignore-annotations
```

</div>
<div title="js">

```js

require('esbuild').buildSync({
  entryPoints: ['app.js'],
  bundle: true,
  treeShaking: 'ignore-annotations',
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
    TreeShaking: api.TreeShakingIgnoreAnnotations,
  })

  if len(result.Errors) > 0 {
    os.Exit(1)
  }
}
```

</div>
</div>

启用这意味着 esbuild 将不再尊重 `/* @__PURE__ */` 注释或 `sideEffects` 字段。然而，它仍然会对未使用的导入进行自动树摇动，因为这不依赖于开发人员的注释。理想情况下，此标志只是一种临时解决方法。您应该将这些问题报告给软件包的维护者以修复它们，因为它们表明软件包存在问题，并且也可能会绊倒其他人。

### Tsconfig

支持：Build

通常，[构建 API](./transform/#build-api) 会自动发现 `tsconfig.json` 文件并在构建过程中读取它们的内容。但是，您也可以配置自定义 `tsconfig.json` 文件来代替使用。如果您需要使用不同的设置对同一代码进行多次构建，这会很有用：

<div>
<div title="cli">

```sh

esbuild app.ts --bundle --tsconfig=custom-tsconfig.json
```

</div>
<div title="js">

```js

require('esbuild').buildSync({
  entryPoints: ['app.ts'],
  bundle: true,
  tsconfig: 'custom-tsconfig.json',
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
    EntryPoints: []string{"app.ts"},
    Bundle:      true,
    Tsconfig:    "custom-tsconfig.json",
    Write:       true,
  })

  if len(result.Errors) > 0 {
    os.Exit(1)
  }
}
```

</div>
</div>

### Tsconfig raw

支持：Transform

此选项可用于将您的 `tsconfig.json` 文件传递​​给不访问文件系统的[transform API](./transform/#transform-api)。使用它看起来像这样：

<div>
<div title="cli">

```sh

echo 'class Foo { foo }' | esbuild --loader=ts --tsconfig-raw='{"compilerOptions":{"useDefineForClassFields":true}}'
```

</div>
<div title="js">

```js

let ts = 'class Foo { foo }'
require('esbuild').transformSync(ts, {
  loader: 'ts',
  tsconfigRaw: `{
    "compilerOptions": {
      "useDefineForClassFields": true,
    },
  }`,
})
```

</div>
<div title="go">

```go

package main

import "fmt"
import "github.com/evanw/esbuild/pkg/api"

func main() {
  ts := "class Foo { foo }"

  result := api.Transform(ts, api.TransformOptions{
    Loader: api.LoaderTS,
    TsconfigRaw: `{
      "compilerOptions": {
        "useDefineForClassFields": true,
      },
    }`,
  })

  if len(result.Errors) == 0 {
    fmt.Printf("%s", result.Code)
  }
}
```

</div>
</div>

### Working directory

支持：Build

此 API 选项允许您指定用于构建的工作目录。它通常默认为您用来调用 esbuild 的 API 的进程的[当前工作目录](https://en.wikipedia.org/wiki/Working_directory)。 esbuild 将工作目录用于一些不同的事情，包括将作为 API 选项给出的相对路径解析为绝对路径，以及将绝对路径漂亮地打印为日志消息中的相对路径。以下是覆盖它的方法：

<div>
<div title="js">

```js

require('esbuild').buildSync({
  entryPoints: ['file.js'],
  absWorkingDir: process.cwd(),
  outfile: 'out.js',
})
```

</div>
<div title="go">

```go

package main

import "github.com/evanw/esbuild/pkg/api"
import "log"
import "os"

func main() {
  cwd, err := os.Getwd()
  if err != nil {
    log.Fatal(err)
  }

  result := api.Build(api.BuildOptions{
    EntryPoints:   []string{"file.js"},
    AbsWorkingDir: cwd,
    Outfile:       "out.js",
  })

  if len(result.Errors) > 0 {
    os.Exit(1)
  }
}
```

</div>
</div>

## JS-specific details

因为 JavaScript 是单线程的，所以有几种不同的方式来调用 API，并具有不同的性能和便利性权衡。重要的是要了解差异以根据您的情况选择正确的差异。

首先是同步 API。这是最方便的选项，因为单线程 JavaScript 代码具有最干净的语法。如果您只需要运行 esbuild 然后退出，这也是最佳性能。但是，它会阻塞主线程，因此如果您在此期间还有其他工作要执行，您就不想使用它。这也是唯一不能使用插件的选项（因为插件是异步的）。它看起来像这样：

```js
let esbuild = require('esbuild')
let result1 = esbuild.transformSync(code, options)
let result2 = esbuild.buildSync(options)
```

然后是异步 API。每次调用都会返回一个承诺而不是立即完成。在幕后，esbuild 二进制文件作为单个子进程生成，在主机进程中的所有调用之间共享。主机使用自定义二进制协议通过 stdin、stdout 和 stderr 管道与子进程通信。如果您只需要运行 esbuild 一次但需要在后台做其他工作，这是理想的选择。它还允许您同时运行许多同时运行的 esbuild API 调用，然后将这些调用分布在所有可用内核中以获得最大性能。使用它看起来像这样：

```js
let esbuild = require('esbuild')
esbuild.transform(code, options).then(result => { ... })
esbuild.build(options).then(result => { ... })
```

### Running in the browser

esbuild API 也可以在 Web Worker 中使用 WebAssembly 在浏览器中运行。要利用这一点，您需要安装 `esbuild-wasm` 包而不是 `esbuild` 包：

```
// cli

npm install esbuild-wasm
```

浏览器的 API 与 node 的 API 类似，只是需要先调用 `initialize()`，并且需要传递 WebAssembly 二进制文件的 URL。 API 的同步版本也不可用。假设您使用的是打包器，它看起来像这样：

```js
let esbuild = require('esbuild-wasm')

esbuild.initialize({
  wasmURL: './node_modules/esbuild-wasm/esbuild.wasm',
}).then(() => {
  esbuild.transform(code, options).then(result => { ... })
  esbuild.build(options).then(result => { ... })
})
```

如果您已经从一个 worker 运行此代码并且不想 `initialize` 创建另一个 worker，您可以将 worker: `false` 传递给它。然后它将在与调用 `initialize` 的线程相同的线程中创建一个 WebAssembly 模块。

您还可以通过注入 `lib/browser.min.js` 文件，将 esbuild 的 API 用作 HTML 文件中的脚本标记，而无需使用捆绑程序。在这种情况下，API 创建了一个名为 `esbuild` 的全局对象，用于保存 API 对象：

```html
<script src="./node_modules/esbuild-wasm/lib/browser.min.js"></script>
<script>
  esbuild.initialize({
    wasmURL: './node_modules/esbuild-wasm/esbuild.wasm',
  }).then(() => { ... })
</script>
```

如果您需要将此 API 与 ECMAScript 模块一起使用，您应该导入 `esm/browser.min.js` 文件：

```html
<script type="module">
  import * as esbuild from './node_modules/esbuild-wasm/esm/browser.min.js'

  esbuild.initialize({
    wasmURL: './node_modules/esbuild-wasm/esbuild.wasm',
  }).then(() => { ... })
</script>
```

