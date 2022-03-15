# 跨域请求如何携带cookie

## 一. 搭建一个跨域请求的环境

### 思路：

1. 使用`express`搭建第一个服务`A(http://localhost:8000)`，运行在`8000`端口上；

2. `A`服务托管`index.html`(用于在前端页面发送网络请求)文件；

3. 在`A`服务中写一个处理请求的路由，加载`index.html`页面时，种下`cookie`(这里种`cookie`为了在请求`B`服务时携带上);

4. 使用`express`搭建第二个服务`B(http://localhost:8003)`，运行在`8003`端口上；

5. 在`A`服务托管的`index.html`页面去请求`B`服务，然后把`cookie`传过去；

<img :src="$withBase('/assets/http/1a2d619e2f9d4cef834b636325620d2a_tplv-k3u1fbpfcp-zoom-in-crop-mark_1304_0_0_0.webp')" alt="demo" />

> `A`服务的代码：

```js
// src/app1.js
const express = require("express");
const app = express();

// `index.html` 加载时会请求login接口
// 设置`cookie`
app.get("/login", (req, res) => {
  res.cookie("user", "jay", { maxAge: 2000000, httpOnly: true });
  res.json({ code: 0, message: "登录成功" });
});

// 此接口是检测`cookie`是否设置成功，如果设置成功的话，浏览器会自动携带上`cookie`
app.get("/user", (req, res) => {
  // req.headers.cookie: user=jay
  const user = req.headers.cookie.split("=")[1];
  res.json({ code: 0, user });
});

// 托管`index.html`页面
// 这样的话在`index.html`中发起的请求，默认的源就是`http://localhost:8000`
// 然后再去请求`http://localhost:8003`就会出现跨域了
app.use("/static", express.static("public"));

app.listen("8000", () => {
  console.log("app1 running at port 8000");
});
```

> `index.html`的代码：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h2>this is index.html at port 8000</h2>
    <button id="button">发送同源请求</button>
    <button id="cross-button">发送跨域请求</button>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script>
      const button = document.querySelector("#button");
      const crossButton = document.querySelector("#cross-button");

      axios.get("http://localhost:8000/login", {}).then((res) => {
        console.log(res);
      });
      // 发送同域请求
      button.onclick = function () {
        axios.get("http://localhost:8000/user", {}).then((res) => {
          console.log(res);
        });
      };
      // 发送跨域请求
      crossButton.onclick = function () {
        axios({
          method: "get",
          url: "http://localhost:8003/anotherService",
        }).then((res) => {
          console.log(res);
        });
      };
    </script>
  </body>
</html>
```

> `B`服务的代码：

```js
// src/app2.js
const express = require("express");
const app = express();

// 定义一个接口，index.html页面请求这个接口就是跨域（因为端口不同）
app.get("/anotherService", (req, res) => {
  res.json({ code: 0, msg: "这是8003端口返回的" });
});

app.listen("8003", () => {
  console.log("app2 running at port 8003");
});
```

## 二、解决跨域携带cookie问题

首先我们先在`A`服务的`index.html`页面中得到一个`cookie`,运行`A`服务：

```shell
npm install express -D
node src/app1.js
```

然后打开`http://localhost:8000/static/index.html`: 没有问题的话，页面长这样：

<img :src="$withBase('/assets/http/b2e0edc978b7481093b171a09c7545f9_tplv-k3u1fbpfcp-zoom-in-crop-mark_1304_0_0_0.webp')" alt="demo" />

这个时候`F12`打开控制台： 可以看到发送了一个`login`请求，并且设置了cookie,也可以选择浏览器控制台的`Application`页签，选中`cookie`，可以看到`cookie`的信息：

<img :src="$withBase('/assets/http/1cbf24f5af214f09807590ed1893c0dc_tplv-k3u1fbpfcp-zoom-in-crop-mark_1304_0_0_0.webp')" alt="demo" />

<img :src="$withBase('/assets/http/7d080cbdcb464972af68e8d486544b2f_tplv-k3u1fbpfcp-zoom-in-crop-mark_1304_0_0_0.webp')" alt='demo' />

然后我们点击页面上的**发送同源请求**按钮，可以看到发送了一个user请求，并且已经携带上了cookie：

<img :src="$withBase('/assets/http/378f340ff4f04ca0bf11b57c69822cb1_tplv-k3u1fbpfcp-zoom-in-crop-mark_1304_0_0_0.webp')" />

接下来刺激的画面来了，我们点击 **发送跨域请求** 按钮，出现了跨域请求的报错：

<img :src="$withBase('/assets/http/908613aa21a7448ea4cb5000d91e0dcc_tplv-k3u1fbpfcp-zoom-in-crop-mark_1304_0_0_0.webp')" alt="demo" />

**重点**： 接下来开始解决跨域携带cookie问题：

### 1. 在前端请求的时候设置request对象的属性withCredentials为true;

**XMLHttpRequest.withCredentials** 属性是一个`Boolean`类型，它指示了是否该使用类似cookies,authorization headers(头部授权)或者TLS客户端证书这一类资格证书来创建一个跨站点访问控制（`cross-site Access-Control`）请求。在同一个站点下使用`withCredentials属性是无效的`。

如果在发送来自其他域的XMLHttpRequest请求之前，未设置`withCredentials` 为true，那么就不能为它自己的域设置cookie值。而通过设置`withCredentials` 为true获得的第三方cookies，将会依旧享受同源策略，因此不能被通过[document.cookie](https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FDocument%2Fcookie)或者从头部相应请求的脚本等访问。

```js
// 修改跨域请求的代码
crossButton.onclick = function () {
    axios({
      withCredentials: true, // ++ 新增
      method: "get",
      url: "http://localhost:8003/anotherService",
    }).then((res) => {
      console.log(res);
    });
};
```

这个时候再去发送一个跨域请求，你会发现依旧报错，但是我们仔细看下报错，意思是需要设置`header`的`Access-Control-Allow-Origin`属性：

<img :src="$withBase('/assets/http/828d43b3e6df406a871483bbc1c7e3c7_tplv-k3u1fbpfcp-zoom-in-crop-mark_1304_0_0_0.webp')" alt="demo" />

### 2. 在服务端设置Access-Control-Allow-Origin

我们修改`B`(app2.js)服务的代码：

```js
// 在所有路由前增加，可以拦截所有请求
app.all("*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:8000");
  next();
});
```

修改完之后再次发送一个跨域请求，你会发现，又报错了(接近崩溃)，但是跟之前报的错不一样了，意思大概就是`Access-Control-Allow-Credentials`这个属性应该设置为`true`，但是显示得到的是个`''`：

<img :src="$withBase('/assets/http/692f018c656b471f88bc0e709f46899e_tplv-k3u1fbpfcp-zoom-in-crop-mark_1304_0_0_0.webp')" alt="demo" />

### 3. 在服务端设置Access-Control-Allow-Credentials

> 再次修改B服务的代码（每次修改后需要重新运行）：

```js
// 在所有路由前增加，可以拦截所有请求
app.all("*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:8000");
  res.header("Access-Control-Allow-Credentials", "true"); // ++ 新增
  next();
});
```

> 再发送一个跨域请求：

<img :src="$withBase('/assets/http/6af693163705471fa3e4d55ad8be5981_tplv-k3u1fbpfcp-zoom-in-crop-mark_1304_0_0_0.webp')" alt="demo" />

<img :src="$withBase('/assets/http/a3132a2065fe4a4e81b4825fc45865f3_tplv-k3u1fbpfcp-zoom-in-crop-mark_1304_0_0_0.webp')" alt="demo" />

可以看到，这个跨域请求已经请求成功并且返回数据了！而且也携带了`A`服务的`cookie`，这个时候已经大功告成了。

## 三、总结

1. 前端请求时在`request`对象中配置`"withCredentials": true`；

2. 服务端在`response`的`header`中配置`"Access-Control-Allow-Origin"`, `"http://xxx:${port}"`;

3. 服务端在`response的header`中配置`"Access-Control-Allow-Credentials"`, `"true"`