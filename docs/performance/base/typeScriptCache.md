# TypeScript 高效缓存库

## 一、介绍

「cacheables」正如它名字一样，是用来做内存缓存使用，其代码仅仅 200 行左右（不含注释），官方的介绍如下： 

<img :src="$withBase('/assets/performance/base/1635900613645.jpg')" alt="demo" />

> 一个简单的内存缓存，支持不同的缓存策略，使用 TypeScript 编写优雅的语法。

它的特点：

* 优雅的语法，包装现有 API 调用，节省 API 调用；

* 完全输入的结果。不需要类型转换。

* 支持不同的缓存策略。

* 集成日志：检查 API 调用的时间。

* 使用辅助函数来构建缓存 key。

* 适用于浏览器和 Node.js。

* 没有依赖。

* 进行大范围测试。

* 体积小，gzip 之后 1.43kb。

当我们业务中需要对请求等异步任务做缓存，避免重复请求时，完全可以使用上「cacheables」。

## 二、上手体验

上手 `cacheables`很简单，看看下面使用对比：

```js
// 没有使用缓存
fetch("https://some-url.com/api");

// 有使用缓存
cache.cacheable(() => fetch("https://some-url.com/api"), "key");
```

### 1. 安装依赖

```bash
npm install cacheables
// 或者
pnpm add cacheables
```

### 2. 使用示例

```ts
import { Cacheables } from "cacheables";
const apiUrl = "http://localhost:3000/";

// 创建一个新的缓存实例  ①
const cache = new Cacheables({
  logTiming: true,
  log: true,
});

// 模拟异步任务
const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// 包装一个现有 API 调用 fetch(apiUrl)，并分配一个 key 为 weather
// 下面例子使用 'max-age' 缓存策略，它会在一段时间后缓存失效
// 该方法返回一个完整 Promise，就像' fetch(apiUrl) '一样，可以缓存结果。
const getWeatherData = () =>
  // ②
  cache.cacheable(() => fetch(apiUrl), "weather", {
    cachePolicy: "max-age",
    maxAge: 5000,
  });

const start = async () => {
  // 获取新数据，并添加到缓存中
  const weatherData = await getWeatherData();

  // 3秒之后再执行
  await wait(3000);

  // 缓存新数据，maxAge设置5秒，此时还未过期
  const cachedWeatherData = await getWeatherData();

  // 3秒之后再执行
  await wait(3000);

  // 缓存超过5秒，此时已过期，此时请求的数据将会再缓存起来
  const freshWeatherData = await getWeatherData();
};

start();
```

上面示例代码我们就实现一个请求缓存的业务，在 `maxAge`为 5 秒内的重复请求，不会重新发送请求，而是从缓存读取其结果进行返回。

### 3. API 介绍

官方文档中介绍了很多 API，具体可以从[文档](https://github.com/grischaerbe/cacheables)中获取，比较常用的如 `cache.cacheable()`，用来包装一个方法进行缓存。 所有 API 如下：

* `new Cacheables(options?): Cacheables`

* `cache.cacheable(resource, key, options?): Promise<T>`

* `cache.delete(key: string): void`

* `cache.clear(): void`

* `cache.keys(): string[]`

* `cache.isCached(key: string): boolean`

* `Cacheables.key(...args: (string | number)[]): string`

可以通过下图加深理解： 

<img :src="$withBase('/assets/performance/base/ed5d7485cc054c6b9d725ff697d572a7_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

## 三、源码分析

克隆 [cacheables](https://github.com/grischaerbe/cacheables) 项目下来后，可以看到主要逻辑都在 `index.ts`中，去掉换行和注释，代码量 200 行左右，阅读起来比较简单。 接下来我们按照官方提供的示例，作为主线来阅读源码。

### 1. 创建缓存实例

示例中第 ① 步中，先通过 `new Cacheables()`创建一个缓存实例，在源码中`Cacheables`类的定义如下，这边先删掉多余代码，看下类提供的方法和作用：

```ts
export class Cacheables {
  constructor(options?: CacheOptions) {
    this.enabled = options?.enabled ?? true;
    this.log = options?.log ?? false;
    this.logTiming = options?.logTiming ?? false;
  }
  // 使用提供的参数创建一个 key
  static key(): string {}

  // 删除一笔缓存
  delete(): void {}

  // 清除所有缓存
  clear(): void {}

  // 返回指定 key 的缓存对象是否存在，并且有效（即是否超时）
  isCached(key: string): boolean {}

  // 返回所有的缓存 key
  keys(): string[] {}

  // 用来包装方法调用，做缓存
  async cacheable<T>(): Promise<T> {}
}
```

这样就很直观清楚 `cacheables` 实例的作用和支持的方法，其 `UML` 类图如下：

<img :src="$withBase('/assets/performance/base/8345d7bf3de44f829ddb16267c5b5c5c_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

在第 ① 步实例化时，`Cacheables` 内部构造函数会将入参保存起来，接口定义如下：

```ts
const cache = new Cacheables({
  logTiming: true,
  log: true,
});

export type CacheOptions = {
  // 缓存开关
  enabled?: boolean;
  // 启用/禁用缓存命中日志
  log?: boolean;
  // 启用/禁用计时
  logTiming?: boolean;
};
```

根据参数可以看出，此时我们 `Cacheables` 实例支持缓存日志和计时功能。

### 2. 包装缓存方法

第 ② 步中，我们将请求方法包装在 `cache.cacheable`方法中，实现使用 `max-age`作为缓存策略，并且有效期 5000 毫秒的缓存：

```ts
const getWeatherData = () =>
  cache.cacheable(() => fetch(apiUrl), "weather", {
    cachePolicy: "max-age",
    maxAge: 5000,
  });
```

其中，`cacheable` 方法是 `Cacheables`类上的成员方法，定义如下（移除日志相关代码）：

```ts
// 执行缓存设置
async cacheable<T>(
  resource: () => Promise<T>,  // 一个返回Promise的函数
  key: string,  // 缓存的 key
  options?: CacheableOptions, // 缓存策略
): Promise<T> {
  const shouldCache = this.enabled
  // 没有启用缓存，则直接调用传入的函数，并返回调用结果
  if (!shouldCache) {
    return resource()
  }
	// ... 省略日志代码
  const result = await this.#cacheable(resource, key, options) // 核心
	// ... 省略日志代码
  return result
}
```

其中`cacheable` 方法接收三个参数：

* `resource`：需要包装的函数，是一个返回 Promise 的函数，如 `() => fetch()`；

* `key`：用来做缓存的 `key`；

* `options`：缓存策略的配置选项；

返回 `this.#cacheable`私有方法执行的结果，`this.#cacheable`私有方法实现如下：

```ts
// 处理缓存，如保存缓存对象等
async #cacheable<T>(
  resource: () => Promise<T>,
  key: string,
  options?: CacheableOptions,
): Promise<T> {
  // 先通过 key 获取缓存对象
  let cacheable = this.#cacheables[key] as Cacheable<T> | undefined
	// 如果不存在该 key 下的缓存对象，则通过 Cacheable 实例化一个新的缓存对象
  // 并保存在该 key 下
  if (!cacheable) {
    cacheable = new Cacheable()
    this.#cacheables[key] = cacheable
  }
	// 调用对应缓存策略
  return await cacheable.touch(resource, options)
}
```

`this.#cacheable`私有方法接收的参数与 `cacheable`方法一样，返回的是 `cacheable.touch`方法调用的结果。 如果 `key` 的缓存对象不存在，则通过 `Cacheable`类创建一个，其 UML 类图如下： 

<img :src="$withBase('/assets/performance/base/5ee7668263274d1088f2868dcb95dc85_tplv-k3u1fbpfcp-watermark')" alt="demo" />

### 3. 处理缓存策略

上一步中，会通过调用 `cacheable.touch`方法，来执行对应缓存策略，该方法定义如下：

```ts
// 执行缓存策略的方法
async touch(
  resource: () => Promise<T>,
  options?: CacheableOptions,
): Promise<T> {
  if (!this.#initialized) {
    return this.#handlePreInit(resource, options)
  }
  if (!options) {
    return this.#handleCacheOnly()
  }
	// 通过实例化 Cacheables 时候配置的 options 的 cachePolicy 选择对应策略进行处理
  switch (options.cachePolicy) {
    case 'cache-only':
      return this.#handleCacheOnly()
    case 'network-only':
      return this.#handleNetworkOnly(resource)
    case 'stale-while-revalidate':
      return this.#handleSwr(resource)
    case 'max-age': // 本案例使用的类型
      return this.#handleMaxAge(resource, options.maxAge)
    case 'network-only-non-concurrent':
      return this.#handleNetworkOnlyNonConcurrent(resource)
  }
}
```

`touch`方法接收两个参数，来自 `#cacheable`私有方法参数的 `resource`和 `options`。 本案例使用的是 `max-age`缓存策略，所以我们看看对应的 `#handleMaxAge`私有方法定义（其他的类似）：

```ts
// maxAge 缓存策略的处理方法
#handleMaxAge(resource: () => Promise<T>, maxAge: number) {
	// #lastFetch 最后发送时间，在 fetch 时会记录当前时间
	// 如果当前时间大于 #lastFetch + maxAge 时，会非并发调用传入的方法
  if (!this.#lastFetch || Date.now() > this.#lastFetch + maxAge) {
    return this.#fetchNonConcurrent(resource)
  }
  return this.#value // 如果是缓存期间，则直接返回前面缓存的结果
}
```

当我们第二次执行 `getWeatherData()` 已经是 6 秒后，已经超过 `maxAge`设置的 5 秒，所有之后就会缓存失效，重新发请求。​

再看下 `#fetchNonConcurrent`私有方法定义，该方法用来发送非并发的请求：

```ts
// 发送非并发请求
async #fetchNonConcurrent(resource: () => Promise<T>): Promise<T> {
	// 非并发情况，如果当前请求还在发送中，则直接执行当前执行中的方法，并返回结果
  if (this.#isFetching(this.#promise)) {
    await this.#promise
    return this.#value
  }
  // 否则直接执行传入的方法
  return this.#fetch(resource)
}
```

`#fetchNonConcurrent`私有方法只接收参数 `resource`，即需要包装的函数。
​
这边先判断当前是否是【发送中】状态，如果则直接调用 `this.#promise`，并返回缓存的值，结束调用。否则将 `resource` 传入 `#fetch`执行。

`#fetch`私有方法定义如下：
