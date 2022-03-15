# 基础面试整理

## script 标签中 defer 和 async 

* `script` ：会阻碍 HTML 解析，只有下载好并执行完脚本才会继续解析 HTML。

* `async script` ：解析 HTML 过程中进行脚本的异步下载，下载成功立马执行，有可能会阻断 HTML 的解析。

* `defer script`：完全不会阻碍 HTML 的解析，解析完成之后再按照顺序执行脚本。

下图清晰地展示了三种 `script` 的过程：

<img :src="$withBase('/assets/html/8ea091aed8364b88a653a13c4845a824_tplv-k3u1fbpfcp-zoom-in-crop-mark_1304_0_0_0.awebp')" alt="demo" />

> [图解 script 标签中的 async 和 defer 属性](https://juejin.cn/post/6894629999215640583)