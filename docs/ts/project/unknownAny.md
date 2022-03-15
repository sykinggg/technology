# TypeScript 中 unknown 与 any 有啥区别

我们知道 `any` 类型的变量可以被赋给任何值。

```ts
let myVar: any = 0;
myVar = '1';
myVar = false;
```

**TypeScript** 指南并不鼓励使用 `any`，因为使用它就会丢掉类型限制--而需要类型限制也是我们选择 TypeScript 的一个原因，所以就是有点背道而驰。

**TypeScript**（3.0 及以上版本）还提供了一种类似于 `any` 的特殊类型 `unknown`。 我们也可以为 `unknown` 类型变量分配任何值：

```ts
let myVar: unknown = 0;
myVar = '1';
myVar = false;
```

## 1. unknown vs any

为了更好地理解 `unknown` 和 `any` 之间的区别，我们先从编写一个想要调用其唯一参数的函数开始。

我们将 `invokeAnything()` 的唯一参数设置为 `any` 类型

```ts
function invokeAnything(callback: any) {
  callback();
}

invokeAnything(1); // throws "TypeError: callback is not a function"
```

因为 `callback` 参数是任何类型的，所以语句 `callback()` 不会触发类型错误。我们可以用`any` 类型的变量做任何事情。

但是运行会抛出一个运行时错误:`TypeError: callback is not a function`。`1` 是一个数字，不能作为函数调用，TypeScript并没有保护代码避免这个错误

那既允许 `invokeAnything()` 函数接受任何类型的参数，又要强制对该参数进行类型检查防止上面这种报错，要怎么做呢？

与 `any` 一样，`unknown` 变量接受任何值。但是当尝试使用 `unknown` 变量时，TypeScript 会强制执行类型检查。这不就是我们想要的嘛。

```ts
function invokeAnything(callback: unknown) {
  callback();
  // Object is of type 'unknown'
}

invokeAnything(1);
```

因为 `callback` 参数的类型是 `unknown`，所以语句 `callback()` 有一个类型错误 :`Object is of type 'unknown'`。 与 `any` 相反，TypeScript会保护我们不调用可能不是函数的东西。

在使用一个 `unknown` 类型的变量之前，你需要进行类型检查。在这个例子中，我们只需要检查`callback` 是否是一个函数类型。

```ts
function invokeAnything(callback: unknown) {
  if (typeof callback === 'function') {
    callback();
  }
}

invokeAnything(1);
```

## 2. unknown 和 any 的心智模式

下面是帮助我理解两者区别的规则:

* 可以将任何东西赋给 `unknown` 类型，但在进行类型检查或类型断言之前，不能对 `unknown` 进行操作

* 可以把任何东西分配给`any`类型，也可以对`any`类型进行任何操作

`unknown` 示例：

```ts
function invokeAnything(callback: unknown) {
  // 可以将任何东西赋给 `unknown` 类型，
  // 但在进行类型检查或类型断言之前，不能对 `unknown` 进行操作
  if (typeof callback === 'function') {
    callback();
  }
}

invokeAnything(1); // You can assign anything to `unknown` type
```

类型检查 `typeof callback === 'function'`，检查 `callback` 是否为函数，如果是，则可以调用。

`any` 示例：

```ts
function invokeAnything(callback: any) {
  // 可以对 `any` 类型执行任何操作
  callback();
}

invokeAnything(1); // 可以把任何东西分配给`any`类型
```

如果 `callback`是 `any`, TypeScript 就不会强制 `callback()` 语句进行任何类型检查。

## 3.总结

`unknown`和 `any` 是2个特殊的类型，可以容纳任何值。

推荐使用 `unknown` 而不是 `any`，因为它提供了更安全的类型--如果想对 `unknown` 进行操作，必须使用类型断言或缩小到一个特定的类型。

