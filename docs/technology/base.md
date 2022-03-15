# 2022 最新技术趋势

## ZX： 使用js编写更便捷shell脚本

> ZX.js 2021年 star 增量 +24.3K

<img :src="$withBase('/assets/technology/base/1642034948613.jpg')" alt="demo" />

[https://github.com/google/zx](https://github.com/google/zx)

```js
#!/usr/bin/env zx

await $`cat package.json | grep name`

let branch = await $`git branch --show-current`
await $`dep deploy --branch=${branch}`

await Promise.all([
  $`sleep 1; echo 1`,
  $`sleep 2; echo 2`,
  $`sleep 3; echo 3`,
])
```

## React & Next.js： 互相成就的好基友

<img :src="$withBase('/assets/technology/base/1642035447880.jpg')" alt="demo" />

> React 2021年 `star` 增量 +18.5K

> Next.js 2021年 `star` 增量 +19.7K

`Next.js` 则是基于 `React` 的一款应用框架，基于 `Next.js` 你可以更便捷地上手开发 `React` 应用

[https://www.nextjs.cn/](https://www.nextjs.cn/)

## Tauri： 构建更小更快的跨平台桌面应用

> Tauri 2021年 `star` 增量 +18.0K

<img :src="$withBase('/assets/technology/base/1642035615780.jpg')" alt="demo" />

> Tauri 是一个为所有主流桌面平台构建小型、快速二进制文件的框架。开发人员可以集成任何编译成 HTML、 JS 和 CSS 的前端框架来构建他们的用户界面。应用程序的后端是一个 `Rust` 二进制文件，具有前端可以与之交互的 API。

[https://tauri.studio/en/docs/getting-started/intro](https://tauri.studio/en/docs/getting-started/intro)

[https://github.com/tauri-apps/tauri](https://github.com/tauri-apps/tauri)

## Slidev： 基于markdown的演示幻灯片

> Slidev 2021年 `star` 增量 +16.9K

<img :src="$withBase('/assets/technology/base/1642036003611.jpg')" alt="demo" />

[https://sli.dev/](https://sli.dev/)

[https://github.com/slidevjs/slidev](https://github.com/slidevjs/slidev)

## 以Vite为代表的前端构建工具

**核心原理**

* 开发环境下，模块以原生 `esm` 的形式被浏览器加载。

* 生产环境下，模块被 `Rollup` 以传统方式打包，而且做了很多默认优化。

* 开发和生产环境下共享同一套 `Rollup` 插件机制，所以单个模块的编译在开发和生产环境下是一致的。

<img :src="$withBase('/assets/technology/base/5f3d9ee833174df881e7a76a1a17e05a_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

<img :src="$withBase('/assets/technology/base/c549367d994a4af694e339770f8be521_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

**框架优势**

* 快，极速，使用原生ESM文件

* 超快的HMR(热重载)

* `Rollup` 插件机制

* 天然优先支持`Vue3`

## Vue3+Ts+Vite+Pinia组合

上面已提到Vite基于Ts语法，并且对Vue3天然的支持，加上尤大主推的[Pinia](https://pinia.vuejs.org/)作为vuex的最佳替代品。此套组合或成为22年Vue开发的最佳选择

## pnpm

> `pnpm` 节省你的磁盘空间，让依赖包也能统一管理，按需更新

[pnpm](https://pnpm.io/zh/)

## tailwindcss

> 不适合初中级前端

[tailwindcss](https://tailwindcss.com/)

<img :src="$withBase('/assets/technology/base/tailwindcss-1.gif')" alt="demo" />

## vue 工具包

### Vue I18n

> Vue.js 的国际化插件

[Vue I18n](https://vue-i18n.intlify.dev/)

### ViteSSG

> ViteSSG，SEO优化 可以直接在Vue3的服务器上生成

[ViteSSG](https://github.com/antfu/vite-ssg)

### Vitest

> Vitest 基于Vite的单元测试工具

[Vitest](https://github.com/vitest-dev/vitest)

## Web3D图形技术

> oasisengine 血荐

[oasisengine](https://oasisengine.cn/)

## 5G在加速Web通信的增强

### WebRTC

> **WebRTC** (Web Real-Time Communications) 是一项实时通讯技术，它允许网络应用或者站点，在不借助中间媒介的情况下，建立浏览器之间点对点（Peer-to-Peer）的连接，实现视频流和（或）音频流或者其他任意数据的传输。WebRTC包含的这些标准使用户在无需安装任何插件或者第三方的软件的情况下，创建点对点（Peer-to-Peer）的数据分享和电话会议成为可能。——出自MDN

* **2012年**： 谷歌已经把这款软件集成到Chrome浏览器中，Opera初步集成WebRTC。

* **2013年 6月**： Mozilla Firefox[5]发布22.0版本正式集成及支持WebRTC。

* **2017年11月**： W3C WebRTC 1.0 草案正式定稿。

* **2021年1月**： WebRTC 被 W3C 和 IETF 发布为正式标准（见《[WebRTC 1.0: Real-Time Communication Between Browsers](https://www.w3.org/TR/2021/REC-webrtc-20210126/)》）。

<img :src="$withBase('/assets/technology/base/426fd4d6cca54b9ebf8f12593d6fcb40_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

## Chrome97发布，QUIC协议到来

一周前，Chrome 97发布，最大的亮点是`WebTransport`，得益于强大的`QUIC`协议，`WebTranport`可以提供更强更快的双向通信能力，有望用于游戏、直播、视频会议等低延时场景。

| **双向通信协议** | **底层协议** | **优点** | **缺点** |
| ---- | ---- | ---- | ---- |
| WebSocket | TCP/TLS | 技术成熟，使用简单 | TCP头部阻塞，不支持不可靠无序通信，不适用于低延时场景 |
| WebRTC data channels | SCTP/DTLS/ICE/UDP | 可以用于适合P2P场景 | 使用难度大，不适用于Client/Server通信 |
| WebTransport | HTTP/3（QUIC/UDP）或者HTTP/2（TLS/TCP） | 延时更低，没有头部阻塞问题，适用场景更多 | 尚未成为正式标准 |

> `WebTransport`默认使用`HTTP/3`，同时使用`HTTP/2`作为备胎。

<img :src="$withBase('/assets/technology/base/8f8f4dec3d064b8b890d50d976fb8849_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

* 提供类似于TCP的可靠通信，处理丢包、拥塞等网络异常情况；

* 基于TLS/1.3进行加密，保证通信的安全性，同时避免中间节点干扰导致协议僵化；

* 提供类似于HTTP/2的多路复用能力，在网络传输层增加了流的概念，解决了TCP协议的头部阻塞问题；

[QUIC](https://support.google.com/chrome/a/answer/7679408?hl=en)