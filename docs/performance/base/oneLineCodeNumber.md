# JavaScript一行代码 - Number

### Add an ordinal suffix to a number

<div>

<div title="js">

```js
// `n` is a position number
const addOrdinal = (n) => `${n}${['st', 'nd', 'rd'][((((n + 90) % 100) - 10) % 10) - 1] || 'th'}`;

// Or
const addOrdinal = (n) => `${n}${[, 'st', 'nd', 'rd'][/1?.$/.exec(n)] || 'th'}`;

// Or
const addOrdinal = (n) => `${n}${[, 'st', 'nd', 'rd'][(n % 100 >> 3) ^ 1 && n % 10] || 'th'}`;

// Or
const addOrdinal = (n) => `${n}${{ one: 'st', two: 'nd', few: 'rd', other: 'th' }[new Intl.PluralRules('en', { type: 'ordinal' }).select(n)]}`;
```

</div>

<div title="ts">

```ts
const addOrdinal = (n: number): string => `${n}${['st', 'nd', 'rd'][((((n + 90) % 100) - 10) % 10) - 1] || 'th'}`;

// Or
const addOrdinal = (n: number): string => `${n}${[, 'st', 'nd', 'rd'][/1?.$/.exec(n)] || 'th'}`;

// Or
const addOrdinal = (n: number): string => `${n}${[, 'st', 'nd', 'rd'][(n % 100 >> 3) ^ 1 && n % 10] || 'th'}`;

// Or
const addOrdinal = (n: number): string => `${n}${{ one: 'st', two: 'nd', few: 'rd', other: 'th' }[new Intl.PluralRules('en', { type: 'ordinal' }).select(n)]}`;
```

</div>

</div>

> Examples

```ts
addOrdinal(1); // '1st'
addOrdinal(2); // '2nd'
addOrdinal(3); // '3rd'
addOrdinal(11); // '11th'
addOrdinal(12); // '13th'
addOrdinal(13); // '13th'
```

### Calculate Fibonacci numbers

<div>

<div title="js">

```js
const fibo = (n, memo = {}) => memo[n] || (n <= 2 ? 1 : (memo[n] = fibo(n - 1, memo) + fibo(n - 2, memo)));
```

</div>

<div title="ts">

```ts
const fibo = (n: number, memo: Record<string, number> = {}): number => memo[n] || (n <= 2 ? 1 : (memo[n] = fibo(n - 1, memo) + fibo(n - 2, memo)));
```

</div>

</div>

> Examples

```ts
fibo(1); // 1
fibo(2); // 1
fibo(3); // 2
fibo(4); // 3
fibo(5); // 5
fibo(6); // 8
```

### Calculate the average of arguments

<div>

<div title="js">

```js
const average = (...args) => args.reduce((a, b) => a + b) / args.length;
```

</div>

<div title="ts">

```ts
const average = (...args: number[]): number => args.reduce((a, b) => a + b) / args.length;
```

</div>

</div>

> Examples

```ts
average(1, 2, 3, 4); // 2.5
```

### Calculate the division of arguments

<div>

<div title="js">

```js
const division = (...args) => args.reduce((a, b) => a / b);
```

</div>

<div title="ts">

```ts
const division = (...args: number): number => args.reduce((a, b) => a / b);
```

</div>

</div>

> Examples

```ts
division(1, 2, 3, 4); // 0.04166666666666666
```

### Calculate the factorial of a number

<div>

<div title="js">

```js
const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));
```

</div>

<div title="ts">

```ts
const factorial = (n: number): number => (n <= 1 ? 1 : n * factorial(n - 1));
```

</div>

</div>

> Examples

```ts
factorial(2); // 2
factorial(3); // 6
factorial(4); // 24
factorial(5); // 120
factorial(6); // 720
```

### Calculate the mod of collection index

<div>

<div title="js">

```js
const mod = (a, b) => ((a % b) + b) % b;
```

</div>

<div title="ts">

```ts
const mod = (a: number, b: number): number => ((a % b) + b) % b;
```

</div>

</div>

> Examples

```ts
mod(-1, 5); // 4
mod(3, 5); // 3
mod(6, 5); // 1
```

### Calculate the remainder of division of arguments

<div>

<div title="js">

```js
const remainder = (...args) => args.reduce((a, b) => a % b);
```

</div>

<div title="ts">

```ts
const remainder = (...args: number[]): number => args.reduce((a, b) => a % b);
```

</div>

</div>

> Examples

```ts
remainder(1, 2, 3, 4); // 1
```

### Calculate the sum of arguments

<div>

<div title="js">

```js
const sum = (...args) => args.reduce((a, b) => a + b);
```

</div>

<div title="ts">

```ts
const sum = (...args: number[]): number => args.reduce((a, b) => a + b);
```

</div>

</div>

> Examples

```ts
sum(1, 2, 3, 4); // 10
```

### Clamp a number between two values

<div>

<div title="js">

```js
const clamp = (val, min = 0, max = 1) => Math.max(min, Math.min(max, val));
```

</div>

<div title="ts">

```ts
const clamp = (val: number, min: number = 0, max: number = 1): number => Math.max(min, Math.min(max, val));
```

</div>

</div>

> Examples

```ts
clamp(199, 10, 25); // 25
```

### Compute the greatest common divisor between two numbers

<div>

<div title="js">

```js
const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
```

</div>

<div title="ts">

```ts
const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
```

</div>

</div>

> Examples

```ts
gcd(10, 15); // 5
```

### Convert a number to equivalent characters

<div>

<div title="js">

```js
const toChars = (n) => `${n >= 26 ? toChars(Math.floor(n / 26) - 1) : ''}${'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[n % 26]}`;
```

</div>

<div title="ts">

```ts
const toChars = (n: number): string => `${n >= 26 ? toChars(Math.floor(n / 26) - 1) : ''}${'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[n % 26]}`;
```

</div>

</div>

> Examples

```ts
toChars(0); // A
toChars(1); // B
toChars(25); // Z

toChars(26); // AA
toChars(27); // AB
toChars(51); // AZ

toChars(701); // ZZ
toChars(702); // AAA
toChars(703); // AAB
```

### Convert a string to number

<div>

<div title="js">

```js
const toNumber = (str) => +str;
```

</div>

<div title="ts">

```ts
const toNumber = (str: string): number => +str;
```

</div>

</div>

> Examples

```ts
toNumber('42'); // 42
```

### Convert decimal to binary recursively

<div>

<div title="js">

```js
const decToBi = (num) => (num === 0 ? 0 : (num % 2) + 10 * decToBi(~~(num / 2)));
```

</div>

<div title="ts">

```ts
const decToBi = (num: number): number => (num === 0 ? 0 : (num % 2) + 10 * decToBi(~~(num / 2)));
```

</div>

</div>

> Examples

```ts
decToBi(10); //1010
```

### Get the arrays of digits from a number

<div>

<div title="js">

```js
const digitize = (n) => `${n}`.split('').map((v) => parseInt(v, 10));

// Or
const digitize = (n) => [...`${n}`].map((v) => parseInt(v, 10));
```

</div>

<div title="ts">

```ts
const digitize = (n: number): number[] => `${n}`.split('').map((v) => parseInt(v, 10));

// Or
const digitize = (n: number): number[] => [...`${n}`].map((v) => parseInt(v, 10));
```

</div>

</div>

> Examples

```ts
digitize(123); // [1, 2, 3]
```

### Multiply arguments

<div>

<div title="js">

```js
const mul = (...args) => args.reduce((a, b) => a * b);
```

</div>

<div title="ts">

```ts
const mul = (...args: number[]): number => args.reduce((a, b) => a * b);
```

</div>

</div>

> Examples

```ts
mul(1, 2, 3, 4); // 24
```

### Prefix an integer with zeros

<div>

<div title="js">

```js
const prefixWithZeros = (n, length) => (n / Math.pow(10, length)).toFixed(length).substr(2);

// Or
const prefixWithZeros = (n, length) => `${Array(length).join('0')}${n}`.slice(-length);

// Or
const prefixWithZeros = (n, length) => String(n).padStart(length, '0');
```

</div>

<div title="ts">

```ts
const prefixWithZeros = (n: number, length: number): string => (n / Math.pow(10, length)).toFixed(length).substr(2);

// Or
const prefixWithZeros = (n: number, length: number): string => `${Array(length).join('0')}${n}`.slice(-length);

// Or
const prefixWithZeros = (n: number, length: number): string => String(n).padStart(length, '0');
```

</div>

</div>

> Examples

```ts
prefixWithZeros(42, 5); // '00042'
```

### Round a number to a given number of digits

<div>

<div title="js">

```js
const round = (n, decimals = 0) => Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);
```

</div>

<div title="ts">

```ts
const round = (n: number, decimals: number = 0): number => Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);
```

</div>

</div>

> Examples

```ts
round(1.234567, 3); // 1.235
round(1.234567, 4); // 1.2346
```

### Subtract arguments

<div>

<div title="js">

```js
const subtract = (...args) => args.reduce((a, b) => a - b);
```

</div>

<div title="ts">

```ts
const subtract = (...args: number[]): number => args.reduce((a, b) => a - b);
```

</div>

</div>

> Examples

```ts
subtract(1, 2, 3, 4); // -8
```

### Truncate a number at decimal

<div>

<div title="js">

```js
const truncate = (n) => ~~n;
```

</div>

<div title="ts">

```ts
const truncate = (n: number): number => ~~n;
```

</div>

</div>

> Examples

```ts
truncate(25.198726354); // 25
truncate(-25.198726354); // -25
```

### Truncate a number to a given number of decimal places without rounding

<div>

<div title="js">

```js
const toFixed = (n, fixed) => `${n}`.match(new RegExp(`^-?\\d+(?:\.\\d{0,${fixed}})?`))[0];

// Or
const toFixed = (n, fixed) => ~~(Math.pow(10, fixed) * n) / Math.pow(10, fixed);
```

</div>

<div title="ts">

```ts
const toFixed = (n: number, fixed: number): number => +(`${n}`.match(new RegExp(`^-?\\d+(?:\.\\d{0,${fixed}})?`)) as string[])[0];

// Or
const toFixed = (n: number, fixed: number): number => ~~(Math.pow(10, fixed) * n) / Math.pow(10, fixed);
```

</div>

</div>

> Examples

```ts
toFixed(25.198726354, 1); // 25.1
toFixed(25.198726354, 2); // 25.19
toFixed(25.198726354, 3); // 25.198
toFixed(25.198726354, 4); // 25.1987
toFixed(25.198726354, 5); // 25.19872
toFixed(25.198726354, 6); // 25.198726
```