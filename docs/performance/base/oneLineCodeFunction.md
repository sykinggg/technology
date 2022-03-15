# JavaScript一行代码 - Function

### Box handler

<div>

<div title="js">

```js
const boxHandler = (x) => ({ next: (f) => boxHandler(f(x)), done: (f) => f(x) });
```

</div>

</div>

> Examples

```js
// First example
const getPercentNumber = (str) =>
    boxHandler(str)
        .next((str) => str.replace(/\%/, ''))
        .next((str) => parseFloat(str))
        .done((res) => res * 0.01);

getPercentNumber('50%'); // 0.5

// Second example
const getMoney = (price) => Number.parseFloat(price.replace(/\$/, ''));
const getPercent = (percent) => Number.parseFloat(percent.replace(/\%/)) * 0.01;

const getDiscountPrice = (price, discount) =>
    boxHandler(getMoney(price))
        .done((cents) => boxHandler(getPercent(discount)).next((save) => cents - cents * save))
        .done((res) => res);

getDiscountPrice('$6.00', '20%'); // 4.8
```

### Check if a value is a function

<div>

<div title="js">

```js
const isFunction = (v) => ['[object Function]', '[object GeneratorFunction]', '[object AsyncFunction]', '[object Promise]'].includes(Object.prototype.toString.call(v));
```

</div>

</div>

> Examples

```js
isFunction(function () {}); // true
isFunction(function* () {}); // true
isFunction(async function () {}); // true
```

### Check if a value is a generator function

<div>

<div title="js">

```js
const isGeneratorFunction = (v) => Object.prototype.toString.call(v) === '[object GeneratorFunction]';
```

</div>

</div>

> Examples

```js
isGeneratorFunction(function () {}); // false
isGeneratorFunction(function* () {}); // true
```

### Check if a value is an async function

<div>

<div title="js">

```js
const isAsyncFunction = (v) => Object.prototype.toString.call(v) === '[object AsyncFunction]';
```

</div>

</div>

> Examples

```js
isAsyncFunction(function () {}); // false
isAsyncFunction(function* () {}); // false
isAsyncFunction(async function () {}); // true
```

### Compose functions from left to right

<div>

<div title="js">

```js
// Compose functions from left to right
const pipe =
    (...fns) =>
    (x) =>
        fns.reduce((y, f) => f(y), x);
```

</div>

</div>

> Examples

```js
const lowercase = (str) => str.toLowerCase();
const capitalize = (str) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
const reverse = (str) => str.split('').reverse().join('');

const fn = pipe(lowercase, capitalize, reverse);

// We will execute `lowercase`, `capitalize` and `reverse` in order
fn('Hello World') === 'dlrow olleH';
```

### Compose functions

<div>

<div title="js">

```js
// Compose functions from right to left
const compose =
    (...fns) =>
    (x) =>
        fns.reduceRight((y, f) => f(y), x);
```

</div>

</div>

> Examples

```js
const lowercase = (str) => str.toLowerCase();
const capitalize = (str) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
const reverse = (str) => str.split('').reverse().join('');

const fn = compose(reverse, capitalize, lowercase);

// We will execute `lowercase`, `capitalize` and `reverse` in order
fn('Hello World') === 'dlrow olleH';
```

### Create a function that accepts a single argument

<div>

<div title="js">

```js
const unary = (fn) => (arg) => fn(arg);
```

</div>

</div>

> Examples

```js
['1', '2', '3', '4', '5'].map(unary(parseInt)); // [1, 2, 3, 4, 5]
```

### Create an empty function

<div>

<div title="js">

```js
const noop = () => {};

// Or
const noop = Function();
// calling Function() might be detected as using eval by some security tools
```

</div>

</div>

### Curry a function

<div>

<div title="js">

```js
const curry = (fn, ...args) => (fn.length <= args.length ? fn(...args) : curry.bind(null, fn, ...args));
```

</div>

</div>

> Examples

```js
const sum = (a, b, c) => a + b + c;
curry(sum)(1)(2)(3); // 6
curry(sum)(1, 2, 3); // 6
curry(sum, 1)(2, 3); // 6
curry(sum, 1)(2)(3); // 6
curry(sum, 1, 2)(3); // 6
curry(sum, 1, 2, 3); // 6
```

### Delay the evaluation of a function

<div>

<div title="js">

```js
// returns a new version of `fn` that returns values as lazy evaluable
const thunkfy =
    (fn) =>
    (...args) =>
    () =>
        fn(...args);
```

</div>

</div>

> Examples

```js
const heavyComputation = (x) => doStuff(x);
const unnecessarySlow = manyThings.map(heavyComputation).find((result) => result.criteria);
const probablyFaster = manyThings.map(thunkfy(heavyComputation)).find((thunk) => thunk().criteria);
```

### Execute a function once

<div>

<div title="js">

```js
const once = (fn) =>
    (
        (ran = false) =>
        () =>
            ran ? fn : ((ran = !ran), (fn = fn()))
    )();
```

</div>

</div>

> Examples

```js
let n = 0;
const incOnce = once(() => ++n);
incOnce(); // n = 1
incOnce(); // n = 1
incOnce(); // n = 1
```

### Flip the arguments of a function

<div>

<div title="js">

```js
// Reverse the order of arguments
const flip =
    (fn) =>
    (...args) =>
        fn(...args.reverse());

// For binary functions
const flip = (fn) => (b, a) => fn(a, b);

// Or for curried functions
const flip = (fn) => (b) => (a) => fn(a)(b);
```

</div>

</div>

### Examples

```js
const isParent = (parent, child) => parent.children.includes(child);
const isChild = flip(isParent);
```

### Identity function

<div>

<div title="js">

```js
const identity = (x) => x;
```

</div>

</div>

### Logical xor operator

<div>

<div title="js">

```js
// returns `true` if one of the arguments is truthy and the other is falsy

const xor = (a, b) => (a && !b) || (!a && b);

// Or
const xor = (a, b) => !(!a && !b) && !(a && b);

// Or
const xor = (a, b) => Boolean(!a ^ !b);
```

</div>

</div>

> Examples

```js
xor(true, true); // false
xor(false, false); // false
xor(true, false); // true
xor(false, true); // true
```

### Memoize a function

<div>

<div title="js">

```js
const memoize = (fn) =>
    (
        (cache = Object.create(null)) =>
        (arg) =>
            cache[arg] || (cache[arg] = fn(arg))
    )();
```

</div>

</div>

> Examples

```js
// Calculate Fibonacci numbers
const fibo = memoize((n) => (n <= 2 ? 1 : fibo(n - 1) + fibo(n - 2)));

fibo(1); // 1
fibo(2); // 1
fibo(3); // 2
fibo(4); // 3
fibo(5); // 5
fibo(6); // 8
```

### Partially apply a function

<div>

<div title="js">

```js
const partial =
    (fn, ...a) =>
    (...b) =>
        fn(...a, ...b);
```

</div>

</div>

> Examples

```js
const sum = (x, y) => x + y;
const inc = partial(sum, 1);
inc(9); // 10
```

### Uncurry a function

<div>

<div title="js">

```js
// `fn` is a curried function
// `n` is the depth of parameters
const uncurry =
    (fn, n = 1) =>
    (...args) =>
        (
            (acc) => (args) =>
                args.reduce((x, y) => x(y), acc)
        )(fn)(args.slice(0, n));
```

</div>

</div>

> Examples

```js
const sum = (a) => (b) => (c) => a + b + c;
uncurry(sum, 1)(1)(2)(3); // 6
uncurry(sum, 2)(1, 2)(3); // 6
uncurry(sum, 3)(1, 2, 3); // 6
```