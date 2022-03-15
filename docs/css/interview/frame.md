# css资源

> `4`个预/后处理、`12`个CSS框架以及`14`个CSS-in-JS库

## 一、预/后处理

### 1. Sass

npm最新周下载量：`3195089`

github斩获star数：`2797`

2021 CSS年度调查报告：使用度排名第一、认知度第一、满意度和关注度排名第二

Sass 是一款强化 CSS 的辅助工具，它在 CSS 语法的基础上增加了变量 (variables)、嵌套 (nested rules)、混合 (mixins)、导入 (inline imports) 等高级功能，这些拓展令 CSS 更加强大与优雅。使用 Sass 以及 Sass 的样式库（如 [Compass](http://compass-style.org/)）有助于更好地组织管理样式文件，以及更高效地开发项目

特色功能：


* 完全兼容 CSS3

* 在 CSS 基础上增加变量、嵌套 (nesting)、混合 (mixins) 等功能

* 通过[函数](https://sass-lang.com/documentation/modules)进行颜色值与属性值的运算

* 提供[控制指令 (control directives)](https://www.sass.hk/docs/#t8)等高级功能

* 自定义输出格式

github地址：[https://github.com/sass/dart-sass](https://github.com/sass/dart-sass)

<img :src="$withBase('/assets/css/frame/0d47ad6f6fbd40b7bf1521d969a8fcac_tplv-k3u1fbpfcp-watermark.webp')" alt="demo" />

官网地址： [www.sass.hk/](https://www.sass.hk/)

<img :src="$withBase('/assets/css/frame/34c2235cb7ad4e3b8433d628b71d89d8_tplv-k3u1fbpfcp-watermark.webp')" alt="demo" />

### 2. PostCSS

npm最新周下载量：`3195089`

github斩获star数：`25706`

2021 CSS年度调查报告：使用度排名第二、认知度第三、满意度和关注度排名第一

PostCSS本身不是预处理器，PostCSS 是一个允许使用 JS 插件转换样式的工具。 这些插件可以检查（lint）你的 CSS，支持 CSS Variables 和 Mixins， 编译尚未被浏览器广泛支持的先进的 CSS 语法，内联图片，以及其它很多优秀的功能

github地址：[github.com/postcss/postcss](https://github.com/postcss/postcss)

<img :src="$withBase('/assets/css/frame/1641777783414.jpg')" alt="demo" />

官网地址： [postcss.org/](https://postcss.org/)

<img :src="$withBase('/assets/css/frame/0f5a4cbf36b94b0d9887df42d572ca53_tplv-k3u1fbpfcp-watermark.webp')" alt="demo" />

### 3. Less

npm最新周下载量：`2440518`

github斩获star数：`16714`

2021 CSS年度调查报告：使用度排名第三、认知度第二、满意度和关注度排名第四

跟Sass类似，Less 也是是CSS 预处理，它扩充了 CSS 语言，增加了诸如变量、混合（mixin）、函数等功能，让 CSS 更易维护、方便制作主题、扩充

github地址：[github.com/less/less.js](https://github.com/less/less.js)

<img :src="$withBase('/assets/css/frame/1641792506302.jpg')" alt="demo"/>

官网地址：[lesscss.org](https://lesscss.org/)

<img :src="$withBase('/assets/css/frame/9ea8db27143e4f4689726075abe2c114_tplv-k3u1fbpfcp-watermark.webp')" alt="demo" />

### 4. Stylus

npm最新周下载量：`1652661`

github斩获star数：`10823`

2021 CSS年度调查报告：使用度排名第四、认知度第四、关注度第五，满意度第三

Stylus是一个CSS预处理器，提供一种高效、动态和富有表现力的方式来生成CSS。Stylus 比较激进，利用缩进、空格和换行来减少需要输入的字符。不过同时也兼容CSS语法

github地址：[github.com/stylus/stylus](https://github.com/stylus/stylus)

<img :src="$withBase('/assets/css/frame/1641792779961.jpg')" alt="demo" />

官网地址：[www.stylus-lang.cn/](https://www.stylus-lang.cn/)

### 数据展示

<img :src="$withBase('/assets/css/frame/6714ea39e4c243a4983060db10cdad9a_tplv-k3u1fbpfcp-watermark.webp')" alt="demo" />

## 二、CSS框架

### 1. Tailwind CSS

npm最新周下载量：`1440528`

github斩获star数：`51843`

2021 CSS年度调查报告：满意度排名第一、关注度排名第二、使用度排名第一、认知度排名第二

Tailwind CSS 是一个功能类优先的 CSS 框架，它集成了诸如 `flex`, `pt-4`, `text-center` 和 `rotate-90` 这样的的类，它们能直接在脚本标记语言中组合起来，构建出任何设计

github地址：[github.com/tailwindlabs/tailwindcss](https://github.com/tailwindlabs/tailwindcss)

<img :src="$withBase('/assets/css/frame/1641793149486.jpg')" alt="demo" />

官网地址：[tailwindcss.com/](https://tailwindcss.com/)

### 2. PureCSS

npm最新周下载量：`16068`

github斩获star数：`22127`

2021 CSS年度调查报告：满意度排名第二、关注度排名第二、使用度排名第八、认知度排名第九

PureCSS是美国雅虎公司出品的一组轻量级、响应式纯css模块，适用于任何Web项目

github地址：[github.com/pure-css/pure](https://github.com/pure-css/pure)

<img :src="$withBase('/assets/css/frame/1641809323402.jpg')" alt="demo" />

官网地址：[purecss.io/](https://purecss.io/)

<img :src="$withBase('/assets/css/frame/b4b3ee980fe4420088528ccc0b91bcaa_tplv-k3u1fbpfcp-watermark.webp')" alt="demo" />

### 3. Ant Design

2021 CSS年度调查报告：满意度排名第三、关注度排名第五、使用度排名第六、认知度排名第七

Ant Design 是一个设计体系，其中包括支持React和UI等框架，举例，`antd` 就是基于 Ant Design 设计体系的 React UI 组件库，主要用于研发企业级中后台产品

特性：

* 🌈 提炼自企业级中后台产品的交互语言和视觉风格。

* 📦 开箱即用的高质量 React 组件。

* 🛡 使用 TypeScript 开发，提供完整的类型定义文件。

* ⚙️ 全链路开发和设计工具体系。

* 🌍 数十个国际化语言支持。

* 🎨 深入每个细节的主题定制能力。

antd的npm最新周下载量：`544381`

antd的github斩获star数：`76844`

github地址：[github.com/ant-design/ant-design](https://github.com/ant-design/ant-design)

<img :src="$withBase('/assets/css/frame/1641860441120.jpg')" alt="demo" />

官网地址：[ant.design/index-cn](https://ant.design/index-cn)

<img :src="$withBase('/assets/css/frame/44d8909eb8324f639340ab02693559e5_tplv-k3u1fbpfcp-watermark.webp')" alt="demo" />

### 4. Bulma

npm最新周下载量：`133565`

github斩获star数：`44866`

2021 CSS年度调查报告：满意度排名第四、关注度排名第七、使用度排名第五、认知度排名第六

Bulma是一个开源、简单、现代的CSS框架，它基于flexbox模块(用于开发响应式布局结构)，纯css没有js代码

特性：

* 轻量级的现代CSS框架，使用Flexbox

* 支持响应式布局，网格等

* 纯CSS，没有Javascript代码

* 可定制、模块化

github地址：[github.com/jgthms/bulma](https://github.com/jgthms/bulma)

<img :src="$withBase('/assets/css/frame/1641861130367.jpg')" alt="demo" />

官网地址：[bulma.io/](https://bulma.io/)

<img :src="$withBase('/assets/css/frame/fa1db8e8015644148c7077bd201608c1_tplv-k3u1fbpfcp-watermark.webp')" alt="demo" />

### 5. Semantic UI

npm最新周下载量：`6189`

github斩获star数：`49774`

2021 CSS年度调查报告：满意度排名第五、关注度排名第四、使用度排名第七、认知度排名第五

Semantic UI—完全语义化的前端界面开发框架，跟 Bootstrap 和 Foundation 比起来，还是有些不同的，在功能特性上、布局设计上、用户体验上均存在很多差异

特点：

* 文档和演示非常完善

* 易于学习和使用

* 配备网格布局

* 支持 Sass 和LESS 动态样式语言

* 有一些非常实用的附加配置，例如inverted类

* 对于社区贡献来说是比较开放的

* 有一个非常好的按钮实现，情态动词，和进度条

* 在许多功能上使用图标字体

github地址：[github.com/semantic-org/semantic-ui](https://github.com/semantic-org/semantic-ui)

<img :src="$withBase('/assets/css/frame/1641861441012.jpg')" alt="demo" />

官网地址：[semantic-ui.com/](https://semantic-ui.com/)

<img :src="$withBase('/assets/css/frame/8cb5e57e4a66454586a201859d4850a9_tplv-k3u1fbpfcp-watermark.webp')" alt="demo" />

### 6. Materialize CSS

github斩获star数：`412`

fork数： `4881`

2021 CSS年度调查报告：满意度排名第六、关注度排名第八、使用度排名第三、认知度排名第三

一个基于Material Design的前端响应式框架

github地址：[github.com/materializecss/materialize](https://github.com/materializecss/materialize)

<img :src="$withBase('/assets/css/frame/1641861702481.jpg')" alt="demo" />

官网地址：[materializecss.com/](https://materializecss.com/)

### 7. UIKit

npm最新周下载量：`11853`

github斩获star数：`17280`

2021 CSS年度调查报告：满意度排名第七、关注度排名第六、使用度排名第九、认知度排名第八

UIkit 是 YOOtheme 团队开发的一款轻量级、模块化的前端框架，可快速构建强大的web前端界面。UIKit提供了全面的HTML、CSS及JS组件，它们使用简单，容易定制和扩展。它基于LESS开发，代码结构清晰简单，易于扩展和维护，并且具有体积小、反应灵敏的响应式组件，你可以根据 UIKit 基本的风格样式，轻松地自定义创建出自己喜欢的主题样式

github地址：[github.com/uikit/uikit](https://github.com/uikit/uikit)

<img :src="$withBase('/assets/css/frame/1641861887733.jpg')" alt="demo" />

官网地址：[getuikit.com/](https://getuikit.com/)

<img :src="$withBase('/assets/css/frame/1641861994408.jpg')" alt="demo" />

### 8. Primer

npm最新周下载量：`81777`

github斩获star数：`10706`

2021 CSS年度调查报告：满意度排名第八、关注度排名第九、使用度排名第十一、认知度排名第十一

github地址: [github.com/primer/css](https://github.com/primer/css)

<img :src="$withBase('/assets/css/frame/1641862151451.jpg')" alt="demo" />

官网地址：[primer.style/](https://primer.style/)

<img :src="$withBase('/assets/css/frame/d5be681157984e73bf06c24e0ee4c2e1_tplv-k3u1fbpfcp-watermark.webp')" alt="demo" />

### 9. Tachyons

npm最新周下载量：`29441`

github斩获star数：`11076`

2021 CSS年度调查报告：满意度排名第九、关注度排名第十、使用度排名第十、认知度排名第十

与其他流行的前端框架不同，Tachyons旨在将CSS规则分解为小型的、可管理的、以及可复用的部件。Tachyons可以帮助开发人员创建出具有高度可读性、能够快速加载和响应的网站，而且无需使用大量CSS代码

github地址：[github.com/tachyons-css/tachyons](https://github.com/tachyons-css/tachyons)

<img :src="$withBase('/assets/css/frame/1641862398556.jpg')" alt="demo" />

官网地址：[tachyons.io/](https://tachyons.io/)

<img :src="$withBase('/assets/css/frame/805437d13ad34a63a06953a1f77f68b5_tplv-k3u1fbpfcp-watermark.webp')" alt="demo" />

### 10. Bootstrap

npm最新周下载量：`2438422`

github斩获star数：`154754`

2021 CSS年度调查报告：满意度排名第十、关注度排名第十二、使用度排名第一、认知度排名第一

Bootstrap 是一套用于 HTML、CSS 和 JS 开发的开源工具集。利用我们提供的 Sass 变量和大量 mixin、响应式栅格系统、可扩展的预制组件、基于 jQuery 的强大的插件系统，能够快速为你的想法开发出原型或者构建整个 app

github地址：[github.com/twbs/bootstrap](https://github.com/twbs/bootstrap)

<img :src="$withBase('/assets/css/frame/1641862605836.jpg')" alt="demo" />

官网地址：[getbootstrap.com/](https://getbootstrap.com/)

<img :src="$withBase('/assets/css/frame/62ffeb989f894f3e872913384eb417f7_tplv-k3u1fbpfcp-watermark.webp')" alt="demo" />

### 11. Halfmoon

npm最新周下载量：`866`

github斩获star数：`2602`

2021 CSS年度调查报告：满意度排名第十一、关注度排名第三、使用度排名第十二、认知度排名第十二

一个内置暗模式和完全定制使用CSS变量的前端框架

github地址：[github.com/halfmoonui/halfmoon](https://github.com/halfmoonui/halfmoon)

<img :src="$withBase('/assets/css/frame/1641862834757.jpg')" alt="demo" />

官网地址：[www.gethalfmoon.com/](https://www.gethalfmoon.com/)

<img :src="$withBase('/assets/css/frame/3dadc4661373448084283194490a9a10_tplv-k3u1fbpfcp-watermark.webp')" alt="demo" />

### 12. Foundation

npm最新周下载量：`662`

fork 数： `5683`

2021 CSS年度调查报告：满意度排名第十二、关注度排名第十一、使用度排名第四、认知度排名第四

github地址：[github.com/blai/foundation](https://github.com/blai/foundation)

<img :src="$withBase('/assets/css/frame/1641863079068.jpg')" alt="demo" />

官网地址：[get.foundation/](https://get.foundation/)

<img :src="$withBase('/assets/css/frame/1641863394730.jpg')" alt="demo" />

## 三、 CSS-in-JS库

简言之，就是使用JS编写CSS库

### 1. Styled Components

npm最新周下载量：`2,183,303`

github斩获star数：`35,617`

2021 CSS年度调查报告：使用度排名第一、认知度排名第一、满意度排名第四、关注度排名第五

styled-components 是一个常用的 css in js 类库。和所有同类型的类库一样,通过 js 赋能解决了原生 css 所不具备的能力

特性:

* 可以实现仅加载所需的最少代码

* 解决了 class name 冲突

* CSS 更容易移除:

* 简单的动态样式

* 无痛维护

* 自动提供前缀

github地址：[github.com/styled-components/styled-components](https://github.com/styled-components/styled-components)

<img :src="$withBase('/assets/css/frame/1641863584574.jpg')" alt="demo" />

官网地址：[styled-components.com/](https://styled-components.com/)

<img :src="$withBase('/assets/css/frame/80ab07bc03e74fb797d639568a86a363_tplv-k3u1fbpfcp-watermark.webp')" alt="demo" />

### 2. CSS Modules

github斩获star数：`15628`

2021 CSS年度调查报告：使用度排名第二、认知度排名第二、满意度排名第二、关注度排名第一

CSS Modules并不是一个正式的声明或者是浏览器的一个实现，而是通过构建工具（webpack or Browserify）来使所有的class达到scope的一个过程

github地址：[github.com/css-modules/css-modules](https://github.com/css-modules/css-modules)

<img :src="$withBase('/assets/css/frame/1641863761546.jpg')" alt="demo" />

### 3. Styled JSX

npm最新周下载量：`1,479,156`

github斩获star数：`6804`

2021 CSS年度调查报告：使用度排名第三、认知度排名第三、满意度排名第十一、关注度排名第十一

github地址：[github.com/vercel/styled-jsx](https://github.com/vercel/styled-jsx)

<img :src="$withBase('/assets/css/frame/1641863861125.jpg')" alt="demo" />

### 4. Emotion

npm最新周下载量：`2,502,832`

github斩获star数：`14248`

2021 CSS年度调查报告：使用度排名第四、认知度排名第四、满意度排名第六、关注度排名第十

github地址：[github.com/emotion-js/emotion/tree/main/packages/css](https://github.com/emotion-js/emotion/tree/main/packages/css)

<img :src="$withBase('/assets/css/frame/1641864001592.jpg')" alt="demo" />

官网地址：[emotion.sh/docs/introduction](https://emotion.sh/docs/introduction)

<img :src="$withBase('/assets/css/frame/8e1639145f5a49c1851c3f444a59403e_tplv-k3u1fbpfcp-watermark.webp')" alt="demo" />

### 5. JSS

npm最新周下载量：`1,741,371`

github斩获star数：`6584`

2021 CSS年度调查报告：使用度排名第五、认知度排名第五、满意度排名第十三、关注度排名第十三

github地址：[github.com/cssinjs/jss](https://github.com/cssinjs/jss)

<img :src="$withBase('/assets/css/frame/5e9f3470f56a45018606d0015f810b8d_tplv-k3u1fbpfcp-watermark.webp')" alt="demo" />

官网地址：[cssinjs.org/from-sass-to-cssinjs/](https://cssinjs.org/from-sass-to-cssinjs/)

<img :src="$withBase('/assets/css/frame/7b1b0d0f942f454ca5cdbb865c59f367_tplv-k3u1fbpfcp-watermark.webp')" alt="demo" />

### 6. Styled System

npm最新周下载量：`368,559`

github斩获star数：`7132`

2021 CSS年度调查报告：使用度排名第六、认知度排名第六、满意度排名第九、关注度排名第八

github地址：[github.com/styled-system/styled-system](https://github.com/styled-system/styled-system)

官网地址：[styled-system.com/](https://styled-system.com/)

<img :src="$withBase('/assets/css/frame/40fe5ddbe9c14da49918a36aaf12a44e_tplv-k3u1fbpfcp-watermark.webp')" alt="demo" />

### 7. Theme UI

npm最新周下载量：`70,981`

github斩获star数：`4191`

2021 CSS年度调查报告：使用度排名第七、认知度排名第十、满意度排名第七、关注度排名第四

github地址：[github.com/system-ui/theme-ui](https://github.com/system-ui/theme-ui)

<img :src="$withBase('/assets/css/frame/1641865155299.jpg')" alt="demo" />

官网地址：[theme-ui.com/](https://theme-ui.com/)

<img :src="$withBase('/assets/css/frame/441ca0d020694397921fadd32487a48a_tplv-k3u1fbpfcp-watermark.webp')" alt="demo" />

### 8. Stitches

github斩获star数：`1033`

2021 CSS年度调查报告：使用度排名第八、认知度排名第八、满意度排名第五、关注度排名第三

github地址：[github.com/draeton/stitches](https://github.com/draeton/stitches)

<img :src="$withBase('/assets/css/frame/1641865454351.jpg')" alt="demo" />

官网地址：[draeton.github.io/stitches/](http://draeton.github.io/stitches/)

<img :src="$withBase('/assets/css/frame/1641865572417.jpg')" alt="demo" />

### 9. Windi CSS

npm最新周下载量：`23,901`

github斩获star数：`4231`

2021 CSS年度调查报告：使用度排名第九、认知度排名第九、满意度排名第三、关注度排名第九

github地址：[github.com/windicss/windicss](https://github.com/windicss/windicss)

<img :src="$withBase('/assets/css/frame/1641865674223.jpg')" alt="demo" />

官网地址：[windicss.org/](https://windicss.org/)

<img :src="$withBase('/assets/css/frame/b4caf21e421e4ff8af09428decc80936_tplv-k3u1fbpfcp-watermark.webp')" alt="demo" />

