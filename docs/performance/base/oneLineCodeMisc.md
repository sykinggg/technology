# JavaScript一行代码 - Misc

### Check if the code is running in NodeJS

<div>

<div title="js">

```js
const isNode = typeof process !== 'undefined' && process.versions != null && process.versions.node != null;
```

</div>

<div title="ts">

```ts
const isNode: boolean = typeof process !== 'undefined' && process.versions != null && process.versions.node != null;
```

</div>

</div>

### Check if the code is running in the browser

<div>

<div title="js">

```js
const isBrowser = typeof window === 'object' && typeof document === 'object';
```

</div>

<div title="ts">

```ts
const isBrowser: boolean = typeof window === 'object' && typeof document === 'object';
```

</div>

</div>

### Clear all cookies

<div>

<div title="js">

```js
const clearCookies = () => document.cookie.split(';').forEach((c) => (document.cookie = c.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`)));
```

</div>

<div title="ts">

```ts
const clearCookies = (): void => document.cookie.split(';').forEach((c) => (document.cookie = c.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`)));
```

</div>

</div>

> Examples

```ts
clearCookies();
```

### Convert 3 digits color to 6 digits color

<div>

<div title="js">

```js
const toFullHexColor = (color) =>
    `#${(color.startsWith('#') ? color.slice(1) : color)
        .split('')
        .map((c) => `${c}${c}`)
        .join('')}`;
```

</div>

<div title="ts">

```ts
const toFullHexColor = (color: string): string =>
    `#${(color.startsWith('#') ? color.slice(1) : color)
        .split('')
        .map((c) => `${c}${c}`)
        .join('')}`;
```

</div>

</div>

> Examples

```ts
toFullHexColor('123'); // '#112233'
toFullHexColor('#123'); // '#112233'
toFullHexColor('#abc'); // '#aabbcc'
```

### Convert Celsius to Fahrenheit

<div>

<div title="js">

```js
const celsiusToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;
```

</div>

<div title="ts">

```ts
const celsiusToFahrenheit = (celsius: number): number => (celsius * 9) / 5 + 32;
```

</div>

</div>

> Examples

```ts
celsiusToFahrenheit(15); // 59
celsiusToFahrenheit(0); // 32
celsiusToFahrenheit(-20); // -4
```

### Convert cookie to object

<div>

<div title="js">

```js
const cookies = document.cookie
    .split(';')
    .map((item) => item.split('='))
    .reduce((acc, [k, v]) => (acc[k.trim().replace('"', '')] = v) && acc, {});
```

</div>

</div>

### Convert Fahrenheit to Celsius

<div>

<div title="js">

```js
const fahrenheitToCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;
```

</div>

<div title="ts">

```ts
const fahrenheitToCelsius = (fahrenheit: number): number => ((fahrenheit - 32) * 5) / 9;
```

</div>

</div>

> Examples

```ts
fahrenheitToCelsius(59); // 15
fahrenheitToCelsius(32); // 0
```

### Convert hex to rgb

<div>

<div title="js">

```js
const hexToRgb = (hex) =>
    hex
        .replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (_, r, g, b) => `#${r}${r}${g}${g}${b}${b}`)
        .substring(1)
        .match(/.{2}/g)
        .map((x) => parseInt(x, 16));
```

</div>

<div title="ts">

```ts
const hexToRgb = (hex: string): string =>
    hex
        .replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (_, r, g, b) => `#${r}${r}${g}${g}${b}${b}`)
        .substring(1)
        .match(/.{2}/g)
        .map((x) => parseInt(x, 16));
```

</div>

</div>

> Examples

```ts
hexToRgb('#00ffff'); // [0, 255, 255]
hexToRgb('#0ff'); // [0, 255, 255]
```

### Convert rgb color to hex

<div>

<div title="js">

```js
const rgbToHex = (red, green, blue) => `#${((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1)}`;

// Or
const rgbToHex = (red, green, blue) => `#${[red, green, blue].map((v) => v.toString(16).padStart(2, '0')).join('')}`;
```

</div>

<div title="ts">

```ts
const rgbToHex = (red: number, green: number, blue: number): string => `#${((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1)}`;

// Or
const rgbToHex = (red: number, green: number, blue: number): string => `#${[red, green, blue].map((v) => v.toString(16).padStart(2, '0')).join('')}`;
```

</div>

</div>

> Examples

```ts
rgbToHex(0, 255, 255); // '#00ffff'
```

### Convert URL parameters to object

<div>

<div title="js">

```js
const getUrlParams = (query) => Array.from(new URLSearchParams(query)).reduce((p, [k, v]) => Object.assign({}, p, { [k]: p[k] ? (Array.isArray(p[k]) ? p[k] : [p[k]]).concat(v) : v }), {});
```

</div>

<div title="ts">

```ts
const getUrlParams = (query: string): Record<string, string> => (
    Array.from(new URLSearchParams(query)).reduce((p, [k, v]) => Object.assign({}, p, { [k]: p[k] ? (Array.isArray(p[k]) ? p[k] : [p[k]]).concat(v) : v }), {} as Record<string, string>)
);
```

</div>

</div>

> Examples

```ts
getUrlParams(location.search); // Get the parameters of the current URL

getUrlParams('foo=Foo&bar=Bar'); // { foo: "Foo", bar: "Bar" }

// Duplicate key
getUrlParams('foo=Foo&foo=Fuzz&bar=Bar'); // { foo: ["Foo", "Fuzz"], bar: "Bar" }
```

### Decode a JWT token

<div>

<div title="js">

```js
const decode = (token) =>
    decodeURIComponent(
        atob(token.split('.')[1].replace('-', '+').replace('_', '/'))
            .split('')
            .map((c) => `%${('00' + c.charCodeAt(0).toString(16)).slice(-2)}`)
            .join('')
    );
```

</div>

<div title="ts">

```ts
const decode = (token: string): string =>
    decodeURIComponent(
        atob(token.split('.')[1].replace('-', '+').replace('_', '/'))
            .split('')
            .map((c) => `%${('00' + c.charCodeAt(0).toString(16)).slice(-2)}`)
            .join('')
    );
```

</div>

</div>

> Examples

```ts
decode(`
    eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
    eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0I
    joxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
`);

// { "sub": "1234567890", "name": "John Doe", "iat": 1516239022 }
```

### Detect dark mode

<div>

<div title="js">

```js
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
```

</div>

<div title="ts">

```ts
const isDarkMode: boolean = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
```

</div>

</div>

### Easing functions

<div>

<div title="js">

```js
// Some easing functions
// See https://gist.github.com/gre/1650294 and https://easings.net

const linear = (t) => t;

const easeInQuad = (t) => t * t;
const easeOutQuad = (t) => t * (2 - t);
const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

const easeInCubic = (t) => t * t * t;
const easeOutCubic = (t) => --t * t * t + 1;
const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1);

const easeInQuart = (t) => t * t * t * t;
const easeOutQuart = (t) => 1 - --t * t * t * t;
const easeInOutQuart = (t) => (t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t);

const easeInQuint = (t) => t * t * t * t * t;
const easeOutQuint = (t) => 1 + --t * t * t * t * t;
const easeInOutQuint = (t) => (t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t);

const easeInSine = (t) => 1 + Math.sin((Math.PI / 2) * t - Math.PI / 2);
const easeOutSine = (t) => Math.sin((Math.PI / 2) * t);
const easeInOutSine = (t) => (1 + Math.sin(Math.PI * t - Math.PI / 2)) / 2;

const easeInElastic = (t) => (0.04 - 0.04 / t) * Math.sin(25 * t) + 1;
const easeOutElastic = (t) => ((0.04 * t) / --t) * Math.sin(25 * t);
const easeInOutElastic = (t) => ((t -= 0.5) < 0 ? (0.02 + 0.01 / t) * Math.sin(50 * t) : (0.02 - 0.01 / t) * Math.sin(50 * t) + 1);
```

</div>

<div title="ts">

```ts
const linear = (t: number): number => t;

const easeInQuad = (t: number): number => t * t;
const easeOutQuad = (t: number): number => t * (2 - t);
const easeInOutQuad = (t: number): number => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

const easeInCubic = (t: number): number => t * t * t;
const easeOutCubic = (t: number): number => --t * t * t + 1;
const easeInOutCubic = (t: number): number => (t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1);

const easeInQuart = (t: number): number => t * t * t * t;
const easeOutQuart = (t: number): number => 1 - --t * t * t * t;
const easeInOutQuart = (t: number): number => (t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t);

const easeInQuint = (t: number): number => t * t * t * t * t;
const easeOutQuint = (t: number): number => 1 + --t * t * t * t * t;
const easeInOutQuint = (t: number): number => (t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t);

const easeInSine = (t: number): number => 1 + Math.sin((Math.PI / 2) * t - Math.PI / 2);
const easeOutSine = (t: number): number => Math.sin((Math.PI / 2) * t);
const easeInOutSine = (t: number): number => (1 + Math.sin(Math.PI * t - Math.PI / 2)) / 2;

const easeInElastic = (t: number): number => (0.04 - 0.04 / t) * Math.sin(25 * t) + 1;
const easeOutElastic = (t: number): number => ((0.04 * t) / --t) * Math.sin(25 * t);
const easeInOutElastic = (t: number): number => ((t -= 0.5) < 0 ? (0.02 + 0.01 / t) * Math.sin(50 * t) : (0.02 - 0.01 / t) * Math.sin(50 * t) + 1);
```

</div>

</div>

### Emulate a dice throw

<div>

<div title="js">

```js
const throwdice = () => ~~(Math.random() * 6) + 1;
```

</div>

<div title="ts">

```ts
const throwdice = (): number => ~~(Math.random() * 6) + 1;
```

</div>

</div>

> Examples

```ts
throwdice(); // 4
throwdice(); // 1
throwdice(); // 6
```

### Encode a URL

<div>

<div title="js">

```js
// `encodeURIComponent` doesn't encode -_.!~*'()
const encode = (url) => encodeURIComponent(url).replace(/!/g, '%21').replace(/~/g, '%7E').replace(/\*/g, '%2A').replace(/'/g, '%27').replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/%20/g, '+');
```

</div>

<div title="ts">

```ts
const encode = (url: string): string =>
    encodeURIComponent(url).replace(/!/g, '%21').replace(/~/g, '%7E').replace(/\*/g, '%2A').replace(/'/g, '%27').replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/%20/g, '+');
```

</div>

</div>

### Generate an unique and increment id

<div>

<div title="js">

```js
const uid = (() => ((id = 0), () => id++))();
```

</div>

</div>

> Examples

```ts
uid(); // 0
uid(); // 1
uid(); // 2
uid(); // 3
```

### Get the first defined and non null argument

<div>

<div title="js">

```js
const coalesce = (...args) => args.find((item) => item !== undefined && item !== null);

// Or
const coalesce = (...args) => args.find((item) => ![undefined, null].includes(item));
```

</div>

<div title="ts">

```ts
const coalesce = (...args: any[]): any[] => args.find((item) => item !== undefined && item !== null);

// Or
const coalesce = (...args: any[]): any[] => args.find((item) => ![undefined, null].includes(item));
```

</div>

</div>

> Examples

```ts
coalesce(undefined, null, 'helloworld', NaN); // 'helloworld'
```

### Get the value of a cookie

<div>

<div title="js">

```js
const cookie = (name) => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
```

</div>

</div>

> Examples

```js
cookie('_ga'); // GA1.2.825309271.1581874719
```

### Get the value of a param from a URL

<div>

<div title="js">

```js
const getParam = (url, param) => new URLSearchParams(new URL(url).search).get(param);
```

</div>

<div title="ts">

```ts
const getParam = (url: string, param: string): string | null => new URLSearchParams(new URL(url).search).get(param);
```

</div>

</div>

> Examples

```ts
getParam('http://domain.com?message=hello', 'message'); // 'hello'
```

### Get type of a variable in string

<div>

<div title="js">

```js
const getTypeOf = (obj) => Object.prototype.toString.call(obj).match(/\[object (.*)\]/)[1];
```

</div>

<div title="ts">

```ts
const getTypeOf = (obj: any): string => (Object.prototype.toString.call(obj).match(/\[object (.*)\]/) as string[])[1];
```

</div>

</div>

> Examples

```ts
getTypeOf('hello world'); // String
getTypeOf(1000); // Number
getTypeOf(Infinity); // Number
getTypeOf(true); // Boolean
getTypeOf(Symbol()); // Symbol
getTypeOf(null); // Null
getTypeOf(undefined); // Undefined
getTypeOf({}); // Object
getTypeOf([]); // Array
getTypeOf(/[a-z]/g); // RegExp
getTypeOf(new Date(2021)); // Date
getTypeOf(new Error()); // Error
getTypeOf(function () {}); // Function
getTypeOf((a, b) => a + b); // Function
getTypeOf(async () => {}); // AsyncFunction
getTypeOf(document); // HTMLDocument
```

### Redirect the page to HTTPS if it is in HTTP

<div>

<div title="js">

```js
const redirectHttps = () => (location.protocol === 'https:' ? {} : location.replace(`https://${location.href.split('//')[1]}`));

// Or
const redirectHttps = () => (location.protocol === 'https:' ? {} : (location.protocol = 'https:'));
```

</div>

<div title="ts">

```ts
const redirectHttps = (): void => (location.protocol === 'https:' ? void 0 : location.replace(`https://${location.href.split('//')[1]}`));

// Or
const redirectHttps = (): string => (location.protocol === 'https:' ? '' : (location.protocol = 'https:'));
```

</div>

</div>

### Run Promises in sequence

<div>

<div title="js">

```js
// `promises` is an array of `Promise`
const run = (promises) => promises.reduce((p, c) => p.then((rp) => c.then((rc) => [...rp, rc])), Promise.resolve([]));
```

</div>

<div title="ts">

```ts
const run = (promises: Promise<any>[]): Promise<any> => promises.reduce((p, c) => p.then((rp) => c.then((rc) => [...rp, rc])), Promise.resolve([]));
```

</div>

</div>

> Examples

```ts
run(promises).then((results) => {
    // `results` is an array of promise results in the same order
});
```

### Swap two variables

<div>

<div title="js">

```js
[a, b] = [b, a];

// Or
a = [b, (b = a)][0];

// Or
a = ((x) => x)(b, (b = a));

// Or
// (only works with numbers)
a = b + ((b = a), 0);

a = b * ((b = a), 1);
```

</div>

</div>

### Wait for an amount of time

<div>

<div title="js">

```js
const wait = async (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));
```

</div>

<div title="ts">

```ts
const wait = async (milliseconds: number) => new Promise((resolve) => setTimeout(resolve, milliseconds));
```

</div>

</div>