# 实现一个web代码模板快速生成CLI工具

## 基本流程

基本思路其实很简单，就是通过命令调取定义好的模板，然后生成代码文件：

<img :src="$withBase('/assets/cli/cab3081dda3242cc85a639a27ae8efc0_tplv-k3u1fbpfcp-watermark.webp')" alt="demo" />

## 项目结构

```
xman-tcli
├─ bin
│  └─ xmant.js
├─ command
│  ├─ createFile.js
│  └─ createManyFiles.js
├─ config
│  └─ fileList.js
├─ templates
│  ├─ index.js
│  ├─ js
│  │  ├─ reactClassJSX.js
│  │  └─ reactFuncJSX.js
│  └─ ts
│     ├─ reactClassTSX.js
│     ├─ reactFuncTS.js
│     └─ reactFuncTSX.js
├─ utils
│  └─ index.js
├─ .gitignore
├─ LICENSE
├─ package.json
└─ README.md
```

## 具体实现

### 初始化项目

可以用 `npm init` 进行创建，也可以根据下面列出的 `package.json` 进行修改。

```json
{
  "name": "xman-tcli",
  "version": "1.0.0",
  "description": "web-cli工具，可以快速创建template",
  "bin": {
    "xmant": "bin/xmant.js"
  },
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/XmanLin/xman-tcli.git"
  },
  "keywords": [
    "cli"
  ],
  "author": "xmanlin",
  "license": "MIT",
  "dependencies": {
    "chalk": "^4.1.2",
    "clui": "^0.3.6",
    "commander": "^8.2.0",
    "figlet": "^1.5.2",
    "handlebars": "^4.7.7",
    "inquirer": "^8.1.5",
    "update-notifier": "^5.1.0"
  }
}
```

### 编写bin/xman.js

```js
#!/usr/bin/env node

const { program } = require('commander');

program
	.version(require('../package').version, '-v, --version');
	
program.parse(process.argv); // 这里是必要的

if (!program.args.length) {
	program.help();
}
```

在当前`xmant-cli`目录下，执行 `npm link` 后，就可以在本地对脚手架工具进行调试了。

然后在当前目录下执行:

```shell
xmant -v
```
<img :src="$withBase('/assets/cli/7bdce7b0bfaf4447a64c1c99b9e71e00_tplv-k3u1fbpfcp-watermark.webp')" alt="demo" />

## 通过命令快速创建单个代码模板

### 编写模板

代码模板可以根据实际项目进行抽离，这里利用几个简单的模板作为例子。

> templates/js/reactClassJSX.js

```js
    return `
import * as React from 'react';

export class ${className} extends React.Component{
    constructor(props){
        super(props);

        this.state = {}
    }

    componentDidMount(){

    }

    render() {
        return (
            <div></div>
        )
    }
}
    ` 
}
```

> templates/js/reactFuncJSX.js

```js
module.exports = function (funcName) {
    return `
import React, {useEffect, useState} from 'react';

const ${funcName} = (props) => {
    
    return (
        <div></div>
    )
}

export default ${funcName};
    ` 
}
```

> templates/ts/reactClassTSX.js

```js
module.exports = function (className) {
    return `
import * as React from 'react';

interface Props {}
interface State {}

export class ${className} extends React.Component<Props, State>{
    constructor(props: Props){
        super(props);

        this.state = {}
    }

    componentDidMount(){

    }

    render() {
        return (
            <div></div>
        )
    }
}
    ` 
}
```

> templates/ts/reactFuncTS.js

```js
module.exports = function (funcName) {
    return `
export const ${funcName} = () => {
    
}
    ` 
}
```

> templates/ts/reactFuncTSX.js

```js
module.exports = function (funcName) {
    return `
import React, {useEffect, useState} from 'react';

const ${funcName} = (props: any) => {
    
    useEffect(() => {
        
    },[])
    
    return (
        <div></div>
    )
}

export default ${funcName};
    ` 
}
```

模板定义好之后，通过 `index.js` 统一导出。

> templates/index.js

```js
const reactClassJSX = require('./js/reactClassJSX');
const reactFuncJSX = require('./js/reactFuncJSX');
const reactClassTSX = require('./ts/reactClassTSX');
const reactFuncTSX = require('./ts/reactFuncTSX');
const reactFuncTS = require('./ts/reactFuncTS');
// 命名规范：name由“-”链接，前面为模板名，后面为创建后文件的后缀

module.exports = [
    {
        name: 'reactClass-jsx', src: reactClassJSX
    },
    {
        name: 'reactFunc-jsx', src: reactFuncJSX
    },
    {
        name: 'reactClass-tsx', src: reactClassTSX
    },
    {
        name: 'reactFunc-tsx', src: reactFuncTSX
    },
    {
        name: 'reactFunc-ts', src: reactFuncTS
    }
]
```

这里的`“命名规范”`，目的是为了后面创建文件时得到相应的后缀。

> 创建工具函数 `utils/index.js`：

```js
module.exports = {
    getFileSuffix: (name) => {
        if(typeof name === 'string') {
            return name.split('-')[1]
        }
    }
}
```

### 编写创建文件逻辑

> 准备工作就绪，接下来就是文件创建的逻辑 `command/createFile.js`：

```js
// 创建单个文件
const templates = require('../templates/index');
const chalk = require('chalk');
const inquirer = require('inquirer');
const fs = require("fs");
const utils = require('../utils/index');


module.exports = () => {
    inquirer.prompt([
        {
            name: 'templateName',
            type:'list',
            message: '请选择你想要生成的代码模板：',
            choices: templates
        },
        {
            name: 'filename',
            type:'input',
            message: '请输入代码文件中类名或方法名：',
            validate: function (value) {
                if (value.length) {
                    return true;
                } else {
                    return '请输入代码文件中类名或方法名';
                }
            },
        }
    ])
    .then(answers => {
        const templateName = answers.templateName;
        const filename = answers.filename;
        templates.forEach((item) => {
            if(item.name === templateName) {
                const suffix = utils.getFileSuffix(item.name)
                const file = `./index.${suffix}`
                // 检验当前文件夹下是否有同名文件
                fs.access(file, function(err) {
                    if(!err) {
                        console.log('创建失败：', chalk.yellow('文件已存在'))
                    } else {
                        fs.writeFile(file, item.src(filename), function(err) {
                            if(err) {
                                console.log('创建失败：', chalk.red(err))
                            } else {
                                console.log(chalk.green(`创建文件成功！${file}`));
                            }
                        })
                    }
                })
            }
        })
    })
}
```

这里需要注意的是：如果不在文件创建之前检查当前文件夹下是否有同名文件的话，原有的同名文件将被覆盖。

### 编写命令

> 最后就是命令的编写 `bin/xman.js`：

```js
#!/usr/bin/env node

const { program } = require('commander');

...

program
	.command('create')
	.description("Create a file")
	.alias('c')
	.action(() => {
		require('../command/createFile')()
	});
	
...
```

### 调试

> 在当前项目文件夹下执行 `npm link --force` , 然后随便找个文件下执行 `xmant c`:

<img :src="$withBase('/assets/cli/0135f12ca96e40e48b73b88c548f13d2_tplv-k3u1fbpfcp-watermark.webp')" alt="demo" />

> 打开我们新创建的文件看看：

<img :src="$withBase('/assets/cli/523b7ad34059498093b4658c3851208f_tplv-k3u1fbpfcp-watermark.webp')" alt="demo" />

也可以选择其他模板创建试试。

## 通过命令快速批量创建代码模板

这里的思路：通过读取配置文件，然后进行批量创建。

### 编写配置文件

```js
// 说明： 
// folder: 文件夹名，可以嵌套，用 “/”分隔
// fileName: 文件名
// funcName: 类名或函数名
// template： 用到的文件模板

module.exports = [
    {
        folder: './home',
        fileName: 'index',
        funcName: 'Home',
        template: 'reactFunc-tsx'
    },
    {
        folder: './home/compnent',
        fileName: 'index',
        funcName: 'Compnent',
        template: 'reactFunc-tsx'
    },
    {
        folder: './home/service',
        fileName: 'index',
        funcName: 'service',
        template: 'reactFunc-ts'
    },
    {
        folder: './news',
        fileName: 'index',
        funcName: 'News',
        template: 'reactFunc-tsx'
    },
    {
        folder: './news/service',
        fileName: 'index',
        funcName: 'service',
        template: 'reactFunc-ts'
    }
]
```

这里用到的文件模板就是我们之前编写好的模板。

### 编写批量创建文件逻辑

> 根据配置文件进行文件夹和文件的批量创建 `command/createManyFiles.js`：

```js
// 批量创建文件

const chalk = require('chalk');
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const utils = require('../utils/index');
const fileList = require('../config/fileList');
const templates = require('../templates/index');
const clui = require('clui');
const Spinner = clui.Spinner;
const status = new Spinner('正在创建...');

// 递归创建目录 同步方法
function mkdirsSync(dirname) {
    if (fs.existsSync(dirname)) {
        return true;
    } else {
        if (mkdirsSync(path.dirname(dirname))) {
            fs.mkdirSync(dirname);
            console.log(chalk.green(`创建目录成功-${dirname}`));
        }
    }   
}

module.exports = () => {
    inquirer.prompt([
        {
            name: 'choices',
            type:'list',
            message: '请确认配置好模板批量生成列表',
            choices: ['yes', 'no']
        }
    ])
    .then(answers => {
        const choices = answers.choices
        if(choices === 'yes') {
            // 批量创建目录
            fileList.forEach(item => {
                if(item.folder) {
                    mkdirsSync(`${item.folder}`)
                }
            })
            // 批量创建文件
            fileList.forEach(item => {
                templates.forEach(tpl => {
                    if(item.template === tpl.name) {
                        const suffix = utils.getFileSuffix(item.template)
                        const fileName = `${item.fileName}.${suffix}`
                        fs.writeFile(`${item.folder}/${fileName}`, tpl.src(item.funcName), function(err) {
                            if(err) {
                                console.log('创建失败：', chalk.red(err))
                            } else{
                                console.log(chalk.green(`创建文件成功！${fileName}`));
                            }
                        })
                    }
                })
            })
        }
    })
}
```

### 编写命令

> 最后编写 `bin/xman.js`：

```js
#!/usr/bin/env node

const { program } = require('commander');

...

program
	.command('create-many')
	.description("Create many folders and files")
	.alias('cm')
	.action(() => {
		require('../command/createManyFiles')()
	});
	
...
```

### 调试

> 在当前项目文件夹下执行 `npm link --force` , 然后随便找个文件下执行 `xmant cm`:

<img :src="$withBase('/assets/cli/e82626560e5c4bfe8485ff3c2664cc2e_tplv-k3u1fbpfcp-watermark.webp')" alt="demo" />

看一下我们批量创建的文件和文件夹：

<img :src="$withBase('/assets/cli/b9d58f8ab5db46858b41c3c8ff0e09ed_tplv-k3u1fbpfcp-watermark.webp')" alt="demo" />