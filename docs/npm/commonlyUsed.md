# 常用命令

## 类似 github 的 star

### 增加

```sh
npm star [package-name]
```

### 取消

```sh
npm unstar [package-name]
``` 

### 查看

```sh
npm stars
```

## 登录npm

> 推荐使用 yrm 镜像源管理

### 手动 npm 切换为默认源

```sh
npm config set registry https://registry.npmjs.org
```

### 登录

```sh
npm adduser
# or
npm login
# login是adduser的一个别名
```

### 查看当前 npm 的登陆人

```sh
npm whoami
```

## 查看某个包的文档

```sh
# 此命令会尝试猜测包文档 URL 的可能位置，一般没有自定义的话，就会打开包的github地址。
npm docs [package-name]
# or
npm home [package-name]
```

### 举个栗子

```sh
npm docs lodash
# or
npm home lodash
```

`npm docs`或者`npm home`命令在不接参数时，会在当前项目中，通过 `package.json` 文件中的`homepage`配置，来打开对应的地址。

<img :src="$withBase('/assets/npm/0cd80a0991274197ae71d518f39cc59f_tplv-k3u1fbpfcp-zoom-in-crop-mark_1304_0_0_0.awebp')" alt="demo" />

其原理就是：当你要查看的项目中的 `package.json` 文件中，设置了`homepage`属性，通过`npm docs/home`就能打开对应的主页，没有设置`homepage`属性时，npm 会继续寻找其中的`repository`属性，这时候打开的就是项目在 `github` 中的托管地址 `url` npm 官网中包的所在地址，（例如：[www.npmjs.com/package/npm…](https://www.npmjs.com/package/npm)

## 查看某个包的代码仓库

```sh
# 此命令尝试猜测包的存储库 URL 的可能位置
npm repo [package-name]
```

> 它是根据项目中的 `package.json` 文件中，设置的`repository`属性，来打开对应的 `url`。

## 快速给一个包提 issues

```sh
npm bugs [package-name]
```

它是根据项目中的 `package.json` 文件中，设置的`bugs`属性，来打开对应的 url。

## 查看某个包的详细信息

```sh
npm v [package-name]
# or
npm view [package-name]
npm info [package-name]
npm show [package-name]
```

## 查看某个包的所有历史版本

```sh
npm v [package-name] versions
```

## 本地开发的 npm 包如何调试

```sh
npm install . -g
```

```sh
# 在某个项目中安装本地包
npm install ../Path/xxPackageName
```

> 也可以做一个软链指向当前需要调试的项目(全局)

```sh
npm link
```

> 将调试包链接到当前项目中（先做一个软链指向当前需要调试的项目）

```sh
# 先在本地开发的 npm 包中执行👇
npm link
# 然后切换到你要安装本地调试包的项目中，执行👇，即可将本地包安装到项目依赖中
npm link <package-name>

# 项目中取消安装本地的调试包👇
npm unlink <package-name>
```

## npm 发布包

> 注意:使用淘宝源会报错，要改回默认源

### 修改下版本号

```sh
npm version [版本号]
```

### 当前目录执行npm publish

```sh
npm publish
```

## 弃用包的相关操作

> 注意：强烈建议弃用包或包版本而不是取消发布它们，因为取消发布会从注册表中完全删除一个包，这意味着任何依赖它的人都将无法再使用它，而不会发出警告。

### 弃用整个包

```sh
npm deprecate package-name "弃用信息"
```

### 弃用包的单个版本

```sh
npm deprecate package-name@version "弃用信息"
```

### 取消弃用操作

```sh
# 将弃用消息改为空字符串即可
npm deprecate package-name ""
```

### 取消发布整个包

```sh
npm unpublish [package-name] -f
```

### 取消发布包的指定版本

```sh
npm unpublish [package-name]@<version>
```

## 一些好用的其他操作

### 包的重命名

```sh
# （重命名包的唯一方法是以新名称重新发布它）
```

### 查看当前项目中有哪些包过时了

```sh
npm outdated
```

### 查看本地全局环境的包有哪些过时了

```sh
npm outdated -g --depth=0
```

### 列出 node_modules 中的所有包

```sh
ls node_modules
# or
dir node_modules
```

### 审计项目中所有包的安全漏洞

```sh
npm audit
# 这个命令依赖 package-lock.json 文件,所以如果你用的是yarn需要使用下面的命令
yarn audit
```

> 执行后会列出有问题的包

| hahh | hah |
| ---- | ---- |
| Critical | 需要立即解决的! |
| High | 需要尽快解决! |
| Moderate | 在时间允许的情况下解决 |
| Low | 不慌不燥不急不忙 |

> 报告中会给出它问题的严重性,你就可以根据具体情况来进行版本更新或是调整。

```sh
npm token list
```

### 检测一下当前镜像源的延迟

```sh
npm ping
```

### 检测当前 node 和 npm 存在的问题

```sh
npm doctor
```

