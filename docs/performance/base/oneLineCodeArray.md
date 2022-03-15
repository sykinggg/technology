# JavaScript一行代码 - Array

### Cast a value as an array

<div>

<div title="js">

```js
const castArray = (value) => (Array.isArray(value) ? value : [value]);
```

</div>

<div title="ts">

```ts
const castArray = <T,_>(value: T | T[]): T[] => (Array.isArray(value) ? value : [value]);
```

</div>

</div>

> Examples

```ts
castArray(1); // [1]
castArray([1, 2, 3]); // [1, 2, 3]
```

### Check if an array is empty

<div>

<div title="js">

```js
const isEmpty = (arr) => !Array.isArray(arr) || arr.length === 0;
```

</div>

<div title="ts">

```ts
const isEmpty = <T,_>(arr: T[]): boolean => !Array.isArray(arr) || arr.length === 0;
```

</div>

</div>

> Examples

```ts
isEmpty([]); // true
isEmpty([1, 2, 3]); // false
```

### Clone an array

<div>

<div title="js">

```js
// `arr` is an array
const clone = (arr) => arr.slice(0);

// Or
const clone = (arr) => [...arr];

// Or
const clone = (arr) => Array.from(arr);

// Or
const clone = (arr) => arr.map((x) => x);

// Or
const clone = (arr) => JSON.parse(JSON.stringify(arr));

// Or
const clone = (arr) => arr.concat([]);
```

</div>

<div title="ts">

```ts
// `arr` is an array
const clone = <T,_>(arr: T[]): T[] => arr.slice(0);

// Or
const clone = <T,_>(arr: T[]): T[] => [...arr];

// Or
const clone = <T,_>(arr: T[]): T[] => Array.from(arr);

// Or
const clone = <T,_>(arr: T[]): T[] => arr.map((x) => x);

// Or
const clone = <T,_>(arr: T[]): T[] => JSON.parse(JSON.stringify(arr));

// Or
const clone = <T,_>(arr: T[]): T[] => arr.concat([]);
```

</div>

</div>

### Compare two arrays regardless of order

<div>

<div title="js">

```js
// `a` and `b` are arrays
const isEqual = (a, b) => JSON.stringify(a.sort()) === JSON.stringify(b.sort());
```

</div>

<div title="ts">

```ts
const isEqual = <T,_>(a: T[], b: T[]): boolean => JSON.stringify(a.sort()) === JSON.stringify(b.sort());
```

</div>

</div>

> Examples

```ts
isEqual([1, 2, 3], [1, 2, 3]); // true
isEqual([1, 2, 3], [1, 3, 2]); // true
isEqual([1, 2, 3], [1, '2', 3]); // false
```

### Compare two arrays

<div>

<div title="js">

```js
// `a` and `b` are arrays
const isEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);

// Or
const isEqual = (a, b) => a.length === b.length && a.every((v, i) => v === b[i]);
```

</div>

<div title="ts">

```ts
const isEqual = <T,_>(a: T[], b: T[]): boolean => JSON.stringify(a) === JSON.stringify(b);

// Or
const isEqual = <T,_>(a: T[], b: T[]): boolean => a.length === b.length && a.every((v, i) => v === b[i]);
```

</div>

</div>

> Examples

```ts
isEqual([1, 2, 3], [1, 2, 3]); // true
isEqual([1, 2, 3], [1, '2', 3]); // false
```

### Convert an array of objects to a single object

<div>

<div title="js">

```js
const toObject = (arr, key) => arr.reduce((a, b) => ({ ...a, [b[key]]: b }), {});

// Or
const toObject = (arr, key) => Object.fromEntries(arr.map((it) => [it[key], it]));
```

</div>

<div title="ts">

```ts
const toObject = <T extends Record<string, any>, K extends keyof T>(arr: T[], key: K): Record<string, T> => (
    arr.reduce((a, b) => ({ ...a, [b[key]]: b }), {})
);

const toObject = <T extends Record<string, any>, K extends keyof T>(arr: T[], key: K): Record<string, T> => (
    Object.fromEntries(arr.map((it) => [it[key], it]))
);
```

</div>

</div>

> Example

```ts
toObject(
    [
        { id: '1', name: 'Alpha', gender: 'Male' },
        { id: '2', name: 'Bravo', gender: 'Male' },
        { id: '3', name: 'Charlie', gender: 'Female' },
    ],
    'id'
);
/* 
{
    '1': { id: '1', name: 'Alpha', gender: 'Male' },
    '2': { id: '2', name: 'Bravo', gender: 'Male' },
    '3': { id: '3', name: 'Charlie', gender: 'Female' },
}
*/
```

### Convert an array of strings to numbers

<div>

<div title="js">

```js
const toNumbers = (arr) => arr.map(Number);

// Or
const toNumbers = (arr) => arr.map((x) => +x);
```

</div>

<div title="ts">

```ts
const toNumbers = (arr: string[]): number[] => arr.map(Number);

// Or
const toNumbers = (arr: string[]): number[] => arr.map((x) => +x);
```

</div>

</div>

> Example

```ts
toNumbers(['2', '3', '4']); // [2, 3, 4]
```

### Count by the properties of an array of objects

<div>

<div title="js">

```js
const countBy = (arr, prop) => arr.reduce((prev, curr) => ((prev[curr[prop]] = ++prev[curr[prop]] || 1), prev), {});
```

</div>

<div title="ts">

```ts
const countBy = <T extends Record<string, string>, K extends keyof T>(arr: T[], prop: K): Record<string, number> => (
    arr.reduce((prev, curr) => ((prev[curr[prop]] = ++prev[curr[prop]] || 1), prev), {} as Record<string, number>)
);
```

</div>

</div>

> Example

```ts
countBy(
    [
        { branch: 'audi', model: 'q8', year: '2019' },
        { branch: 'audi', model: 'rs7', year: '2020' },
        { branch: 'ford', model: 'mustang', year: '2019' },
        { branch: 'ford', model: 'explorer', year: '2020' },
        { branch: 'bmw', model: 'x7', year: '2020' },
    ],
    'branch'
);

// { 'audi': 2, 'ford': 2, 'bmw': 1 }
```

### Count the occurrences of a value in an array

<div>

<div title="js">

```js
const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

// Or
const countOccurrences = (arr, val) => arr.filter((item) => item === val).length;
```

</div>

<div title="ts">

```ts
const countOccurrences = <T,_>(arr: T[], val: T): number => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

// Or
const countOccurrences = <T,_>(arr: T[], val: T): number => arr.filter((item) => item === val).length;
```

</div>

</div>

> Examples

```ts
countOccurrences([2, 1, 3, 3, 2, 3], 2); // 2
countOccurrences(['a', 'b', 'a', 'c', 'a', 'b'], 'a'); // 3
```

### Count the occurrences of array elements

<div>

<div title="js">

```js
const countOccurrences = (arr) => arr.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {});
```

</div>

<div title="ts">

```ts
const countOccurrences = <T extends string | number,>(arr: T[]): Record<T, number> => (
    arr.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {}as Record<T, number>)
);
```

</div>

</div>

> Examples

```ts
countOccurrences([2, 1, 3, 3, 2, 3]); // { '1': 1, '2': 2, '3': 3 }
countOccurrences(['a', 'b', 'a', 'c', 'a', 'b']); // { 'a': 3, 'b': 2, 'c': 1 }
```

### Create an array of cumulative sum

<div>

<div title="js">

```js
const accumulate = (arr) =>
    arr.map(
        (
            (sum) => (value) =>
                (sum += value)
        )(0)
    );

// Or
const accumulate = (arr) => arr.reduce((a, b, i) => (i === 0 ? [b] : [...a, b + a[i - 1]]), [0]);
```

</div>

<div title="ts">

```ts
const accumulate = (arr: number[]): number[] =>
    arr.map(
        (
            (sum) => (value: number) =>
                (sum += value)
        )(0)
    );

// Or
const accumulate = (arr: number[]): number[] => arr.reduce((a, b, i) => (i === 0 ? [b] : [...a, b + a[i - 1]]), [0]);
```

</div>

</div>

> Example

```ts
accumulate([1, 2, 3, 4]); // [1, 3, 6, 10]
// 1             = 1
// 1 + 2         = 3
// 1 + 2 + 3     = 6
// 1 + 2 + 3 + 4 = 10
```

### Create an array of numbers in the given range

<div>

<div title="js">

```js
const range = (min, max) => [...Array(max - min + 1).keys()].map((i) => i + min);

// Or
const range = (min, max) =>
    Array(max - min + 1)
        .fill(0)
        .map((_, i) => min + i);

// Or
const range = (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i);
```

</div>

<div title="ts">

```ts
const range = (min: number, max: number): number[] => [...Array(max - min + 1).keys()].map((i) => i + min);

// Or
const range = (min: number, max: number): number[] =>
    Array(max - min + 1)
        .fill(0)
        .map((_, i) => min + i);

// Or
const range = (min: number, max: number): number[] => Array.from({ length: max - min + 1 }, (_, i) => min + i);
```

</div>

</div>

> Example

```ts
range(5, 10); // [5, 6, 7, 8, 9, 10]
```

### Create cartesian product

<div>

<div title="js">

```js
const cartesian = (...sets) => sets.reduce((acc, set) => acc.flatMap((x) => set.map((y) => [...x, y])), [[]]);
```

</div>

</div>

> Example

```js
cartesian([1, 2], [3, 4]); // [ [1, 3], [1, 4], [2, 3], [2, 4] ]

/*
       3       4
   ---------------
1 | [1, 3]  [1, 4]
  |
2 | [2, 3]  [2, 4]

*/
```

### Empty an array

<div>

<div title="js">

```js
const empty = (arr) => (arr.length = 0);

// Or
arr = [];
```

</div>

<div title="ts">

```ts
const empty = <T,_>(arr: T[]) => (arr.length = 0);

// Or
arr = [];
```

</div>

</div>

### Find the closest number from an array

<div>

<div title="js">

```js
// Find the number from `arr` which is closest to `n`
const closest = (arr, n) => arr.reduce((prev, curr) => (Math.abs(curr - n) < Math.abs(prev - n) ? curr : prev));

// Or
const closest = (arr, n) => arr.sort((a, b) => Math.abs(a - n) - Math.abs(b - n))[0];
```

</div>

<div title="ts">

```ts
const closest = (arr: number[], n: number): number => arr.reduce((prev, curr) => (Math.abs(curr - n) < Math.abs(prev - n) ? curr : prev));

// Or
const closest = (arr: number[], n: number): number => arr.sort((a, b) => Math.abs(a - n) - Math.abs(b - n))[0];
```

</div>

</div>

> Example

```ts
closest([29, 87, 8, 78, 97, 20, 75, 33, 24, 17], 50); // 33
```

### Find the index of the last matching item of an array

<div>

<div title="js">

```js
const lastIndex = (arr, predicate) => arr.reduce((prev, curr, index) => (predicate(curr) ? index : prev), -1);

// Or
const lastIndex = (arr, predicate) => arr.map((item) => predicate(item)).lastIndexOf(true);
```

</div>

<div title="ts">

```ts
const lastIndex = <T,_>(arr: T[], predicate: (a: T) => boolean): number => arr.reduce((prev, curr, index) => (predicate(curr) ? index : prev), -1);

// Or
const lastIndex = <T,_>(arr: T[], predicate: (a: T) => boolean): number => arr.map((item) => predicate(item)).lastIndexOf(true);
```

</div>

</div>

> Examples

```ts
lastIndex([1, 3, 5, 7, 9, 2, 4, 6, 8], (i) => i % 2 === 1); // 4
lastIndex([1, 3, 5, 7, 9, 8, 6, 4, 2], (i) => i > 6); // 5
```

### Find the index of the maximum item of an array

<div>

<div title="js">

```js
const indexOfMax = (arr) => arr.reduce((prev, curr, i, a) => (curr > a[prev] ? i : prev), 0);
```

</div>

<div title="ts">

```ts
const indexOfMax = (arr: number[]): number => arr.reduce((prev, curr, i, a) => (curr > a[prev] ? i : prev), 0);
```

</div>

</div>

> Examples

```ts
indexOfMax([1, 3, 9, 7, 5]); // 2
indexOfMax([1, 3, 7, 7, 5]); // 2
```

### Find the index of the minimum item of an array

<div>

<div title="js">

```js
const indexOfMin = (arr) => arr.reduce((prev, curr, i, a) => (curr < a[prev] ? i : prev), 0);
```

</div>

<div title="ts">

```ts
const indexOfMin = (arr: number[]): number => arr.reduce((prev, curr, i, a) => (curr < a[prev] ? i : prev), 0);
```

</div>

</div>

> Examples

```ts
indexOfMin([6, 4, 8, 2, 10]); // 3
indexOfMin([6, 4, 2, 2, 10]); // 2
```

### Find the length of the longest string in an array

<div>

<div title="js">

```js
const findLongest = (words) => Math.max(...words.map((el) => el.length));
```

</div>

<div title="ts">

```ts
const findLongest = (words: string[]): number => Math.max(...words.map((el) => el.length));
```

</div>

</div>

> Example

```ts
findLongest(['always', 'look', 'on', 'the', 'bright', 'side', 'of', 'life']); // 6
```

### Find the maximum item of an array by given key

<div>

<div title="js">

```js
const maxBy = (arr, key) => arr.reduce((a, b) => (a[key] >= b[key] ? a : b), {});
```

</div>

<div title="ts">

```ts
const maxBy = <T extends Record<string, any>, K extends keyof T>(arr: T[], key: K): T => (
    arr.reduce((a, b) => (a[key] >= b[key] ? a : b), {} as T)
);
```

</div>

</div>

> Example

```ts
const people = [
    { name: 'Bar', age: 24 },
    { name: 'Baz', age: 32 },
    { name: 'Foo', age: 42 },
    { name: 'Fuzz', age: 36 },
];
maxBy(people, 'age'); // { name: 'Foo', age: 42 }
```

### Find the maximum item of an array

<div>

<div title="js">

```js
const max = (arr) => Math.max(...arr);
```

</div>

<div title="ts">

```ts
const max = (arr: number[]): number => Math.max(...arr);
```

</div>

</div>

### Find the minimum item of an array by given key

<div>

<div title="js">

```js
const minBy = (arr, key) => arr.reduce((a, b) => (a[key] < b[key] ? a : b), {});
```

</div>

<div title="ts">

```ts
const minBy = <T extends Record<string, any>, K extends keyof T>(arr: T[], key: K): T => (
    arr.reduce((a, b) => (a[key] < b[key] ? a : b), {} as T)
);
```

</div>

</div>

> Example

```ts
const people = [
    { name: 'Bar', age: 24 },
    { name: 'Baz', age: 32 },
    { name: 'Foo', age: 42 },
    { name: 'Fuzz', age: 36 },
];
minBy(people, 'age'); // { name: 'Bar', age: 24 }
```

### Find the minimum item of an array

<div>

<div title="js">

```js
const min = (arr) => Math.min(...arr);
```

</div>

<div title="ts">

```ts
const min = (arr: number[]): number => Math.min(...arr);
```

</div>

</div>

### Flatten an array

<div>

<div title="js">

```js
const flat = (arr) =>
    [].concat.apply(
        [],
        arr.map((a) => (Array.isArray(a) ? flat(a) : a))
    );

// Or
const flat = (arr) => arr.reduce((a, b) => (Array.isArray(b) ? [...a, ...flat(b)] : [...a, b]), []);

// Or
// See the browser compatibility at https://caniuse.com/#feat=array-flat
const flat = (arr) => arr.flat();
```

</div>

</div>

> Example

```ts
flat(['cat', ['lion', 'tiger']]); // ['cat', 'lion', 'tiger']
```

### Generate an array of alphabet characters

<div>

<div title="js">

```js
const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

// Or
const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];

// Or
const alphabet = Array(26)
    .fill(0)
    .map((_, i) => String.fromCharCode(i + 97));

// Or
const alphabet = [...Array(26).keys()].map((i) => String.fromCharCode(i + 97));

// Or
const alphabet = [...Array(26)].map((_, i) => (i + 10).toString(36));

// Or
const alphabet = String.fromCharCode(
    ...' '
        .repeat(26)
        .split('')
        .map((_, i) => i + 97)
).split('');
```

</div>

<div title="ts">

```ts
const alphabet: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');

// Or
const alphabet: string[] = [...'abcdefghijklmnopqrstuvwxyz'];

// Or
const alphabet: string[] = Array(26)
    .fill(0)
    .map((_, i) => String.fromCharCode(i + 97));

// Or
const alphabet: string[] = [...Array(26).keys()].map((i) => String.fromCharCode(i + 97));

// Or
const alphabet: string[] = [...Array(26)].map((_, i) => (i + 10).toString(36));

// Or
const alphabet: string[] = String.fromCharCode(
    ...' '
        .repeat(26)
        .split('')
        .map((_, i) => i + 97)
).split('');
```

</div>

</div>

### Get all arrays of consecutive elements

<div>

<div title="js">

```js
const getConsecutiveArrays = (arr, size) => (size > arr.length ? [] : arr.slice(size - 1).map((_, i) => arr.slice(i, size + i)));
```

</div>

<div title="ts">

```ts
const getConsecutiveArrays = <T,_>(arr: T[], size: number): T[][] => (size > arr.length ? [] : arr.slice(size - 1).map((_, i) => arr.slice(i, size + i)));
```

</div>

</div>

> Examples

```ts
getConsecutiveArrays([1, 2, 3, 4, 5], 2); // [[1, 2], [2, 3], [3, 4], [4, 5]]
getConsecutiveArrays([1, 2, 3, 4, 5], 3); // [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
getConsecutiveArrays([1, 2, 3, 4, 5], 6); // []
```

### Get all n-th items of an array

<div>

<div title="js">

```js
const getNthItems = (arr, nth) => arr.filter((_, i) => i % nth === nth - 1);
```

</div>

<div title="ts">

```ts
const getNthItems = <T,_>(arr: T[], nth: number): T[] => arr.filter((_, i) => i % nth === nth - 1);
```

</div>

</div>

> Examples

```ts
getNthItems([1, 2, 3, 4, 5, 6, 7, 8, 9], 2); // [2, 4, 6, 8]
getNthItems([1, 2, 3, 4, 5, 6, 7, 8, 9], 3); // [3, 6, 9]
```

### Get all subsets of an array

<div>

<div title="js">

```js
const getSubsets = (arr) => arr.reduce((prev, curr) => prev.concat(prev.map((k) => k.concat(curr))), [[]]);
```

</div>

<div title="ts">

```ts
const getSubsets = <T,>(arr: T[]): T[][] => (
    arr.reduce((prev, curr) => prev.concat(prev.map((k) => k.concat(curr))), [[]] as T[][])
);
```

</div>

</div>

> Examples

```ts
getSubsets([1, 2]); // [[], [1], [2], [1, 2]]
getSubsets([1, 2, 3]); // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
```

### Get indices of a value in an array

<div>

<div title="js">

```js
const indices = (arr, value) => arr.reduce((acc, v, i) => (v === value ? [...acc, i] : acc), []);

// Or
const indices = (arr, value) => arr.map((v, i) => (v === value ? i : false)).filter(Boolean);
```

</div>

<div title="ts">

```ts
const indices = <T,>(arr: T[], value: T): number[] => (
    arr.reduce((acc, v, i) => (v === value ? [...acc, i] : acc), [] as number[])
);

// Or
const indices = <T,>(arr: T[], value: T): number[] => (
    arr.map((v, i) => (v === value ? i : false)).filter(Boolean) as number[]
);
```

</div>

</div>

> Examples

```ts
indices(['h', 'e', 'l', 'l', 'o'], 'l'); // [2, 3]
indices(['h', 'e', 'l', 'l', 'o'], 'w'); // []
```

### Get the average of an array

<div>

<div title="js">

```js
const average = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;
```

</div>

<div title="ts">

```ts
const average = (arr: number[]): number => arr.reduce((a, b) => a + b, 0) / arr.length;
```

</div>

</div>

### Get the intersection of arrays

<div>

<div title="js">

```js
const getIntersection = (a, ...arr) => [...new Set(a)].filter((v) => arr.every((b) => b.includes(v)));
```

</div>

<div title="ts">

```ts
const getIntersection = <T,_>(a: T[], ...arr: T[][]): T[] => [...new Set(a)].filter((v) => arr.every((b) => b.includes(v)));
```

</div>

</div>

> Examples

```ts
getIntersection([1, 2, 3], [2, 3, 4, 5]); // [2, 3]
getIntersection([1, 2, 3], [2, 3, 4, 5], [1, 3, 5]); // [3]
```

### Get the rank of an array of numbers

<div>

<div title="js">

```js
const ranking = (arr) => arr.map((x, y, z) => z.filter((w) => w > x).length + 1);
```

</div>

<div title="ts">

```ts
const ranking = (arr: number[]): number[] => arr.map((x, y, z) => z.filter((w) => w > x).length + 1);
```

</div>

</div>

> Examples

```ts
ranking([80, 65, 90, 50]); // [2, 3, 1, 4]
ranking([80, 80, 70, 50]); // [1, 1, 3, 4]
ranking([80, 80, 80, 50]); // [1, 1, 1, 4]
```

### Get the sum of an array of numbers

<div>

<div title="js">

```js
const sum = (arr) => arr.reduce((a, b) => a + b, 0);
```

</div>

<div title="ts">

```ts
const sum = (arr: number[]): number => arr.reduce((a, b) => a + b, 0);
```

</div>

</div>

### Get the unique values of an array

<div>

<div title="js">

```js
const unique = (arr) => [...new Set(arr)];

// Or
const unique = (arr) => arr.filter((el, i, array) => array.indexOf(el) === i);

// Or
const unique = (arr) => arr.reduce((acc, el) => (acc.includes(el) ? acc : [...acc, el]), []);
```

</div>

<div title="ts">

```ts
const unique = <T,>(arr: T[]): T[] => [...new Set(arr)];

// Or
const unique = <T,>(arr: T[]): T[] => arr.filter((el, i, array) => array.indexOf(el) === i);

// Or
const unique = <T,>(arr: T[]): T[] => arr.reduce((acc, el) => (acc.includes(el) ? acc : [...acc, el]), [] as T[]);
```

</div>

</div>

### Get union of arrays

<div>

<div title="js">

```js
const union = (...arr) => [...new Set(arr.flat())];
```

</div>

<div title="ts">

```ts
const union = <T,_>(...arr: T[][]): T[] => [...new Set(arr.flat())];
```

</div>

</div>

> Example

```ts
union([1, 2], [2, 3], [3]); // [1, 2, 3]
```

### Group an array of objects by a key

<div>

<div title="js">

```js
const groupBy = (arr, key) => arr.reduce((acc, item) => ((acc[item[key]] = [...(acc[item[key]] || []), item]), acc), {});
```

</div>

<div title="ts">

```ts
const groupBy = <T extends Record<string, any>, K extends keyof T>(arr: T[], key: K): Record<string, T[]> => (
    arr.reduce((acc, item) => ((acc[item[key]] = [...(acc[item[key]] || []), item]), acc), {} as Record<string, T[]>)
);
```

</div>

</div>

> Example

```ts
groupBy(
    [
        { branch: 'audi', model: 'q8', year: '2019' },
        { branch: 'audi', model: 'rs7', year: '2020' },
        { branch: 'ford', model: 'mustang', year: '2019' },
        { branch: 'ford', model: 'explorer', year: '2020' },
        { branch: 'bmw', model: 'x7', year: '2020' },
    ],
    'branch'
);

/*
{
    audi: [
        { branch: 'audi', model: 'q8', year: '2019' },
        { branch: 'audi', model: 'rs7', year: '2020' }
    ],
    bmw: [
        { branch: 'bmw', model: 'x7', year: '2020' }
    ],
    ford: [
        { branch: 'ford', model: 'mustang', year: '2019' },
        { branch: 'ford', model: 'explorer', year: '2020' }
    ],
}
*/
```

### Merge two arrays

<div>

<div title="js">

```js
// Merge but don't remove the duplications
const merge = (a, b) => a.concat(b);
// Or
const merge = (a, b) => [...a, ...b];

// Merge and remove the duplications
const merge = (a, b) => [...new Set(a.concat(b))];
// Or
const merge = (a, b) => [...new Set([...a, ...b])];
```

</div>

<div title="ts">

```ts
// Merge but don't remove the duplications
const merge = <T,_>(a: T[], b: T[]): T[] => a.concat(b);
// Or
const merge = <T,_>(a: T[], b: T[]): T[] => [...a, ...b];

// Merge and remove the duplications
const merge = <T,_>(a: T[], b: T[]): T[] => [...new Set(a.concat(b))];
// Or
const merge = <T,_>(a: T[], b: T[]): T[] => [...new Set([...a, ...b])];
```

</div>

</div>

### Partition an array based on a condition

<div>

<div title="js">

```js
const partition = (arr, criteria) => arr.reduce((acc, i) => (acc[criteria(i) ? 0 : 1].push(i), acc), [[], []]);
```

</div>

<div title="ts">

```ts
const partition = <T,_>(arr: T[], criteria: (a: T) => boolean): T[][] => arr.reduce((acc, i) => (acc[criteria(i) ? 0 : 1].push(i), acc), [[], []]);
```

</div>

</div>

> Example

```ts
partition([1, 2, 3, 4, 5], (n) => n % 2); // [[1, 3, 5], [2, 4]]
```

### Remove duplicate values in an array

<div>

<div title="js">

```js
const removeDuplicate = (arr) => arr.filter((i) => arr.indexOf(i) === arr.lastIndexOf(i));
```

</div>

<div title="ts">

```ts
const removeDuplicate = <T,_>(arr: T[]): T[] => arr.filter((i) => arr.indexOf(i) === arr.lastIndexOf(i));
```

</div>

</div>

> Example

```ts
removeDuplicate(['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']); //  ['h', 'e', 'w', 'r', 'd']
```

### Remove falsy values from array

<div>

<div title="js">

```js
const removeFalsy = (arr) => arr.filter(Boolean);
```

</div>

<div title="ts">

```ts
const removeFalsy = <T,_>(arr: T[]): T[] => arr.filter(Boolean);
```

</div>

</div>

> Example

```ts
removeFalsy([0, 'a string', '', NaN, true, 5, undefined, 'another string', false]);
// ['a string', true, 5, 'another string']
```

### Repeat an array

<div>

<div title="js">

```js
// `arr` is an array
const repeat = (arr, n) => [].concat(...Array(n).fill(arr));

// Or
const repeat = (arr, n) => Array(n).fill(arr).flat();

// Or
const repeat = (arr, n) =>
    Array(arr.length * n)
        .fill(0)
        .map((_, i) => arr[i % arr.length]);

// Or
const repeat = (arr, n) => Array.from({ length: arr.length * n }, (_, i) => arr[i % arr.length]);
```

</div>

<div title="ts">

```ts
const repeat = <T,_>(arr: T[], n: number): T[] => [].concat(...Array(n).fill(arr));

// Or
const repeat = <T,_>(arr: T[], n: number): T[] => Array(n).fill(arr).flat();

// Or
const repeat = <T,_>(arr: T[], n: number): T[] =>
    Array(arr.length * n)
        .fill(0)
        .map((_, i) => arr[i % arr.length]);

// Or
const repeat = <T,_>(arr: T[], n: number): T[] => Array.from({ length: arr.length * n }, (_, i) => arr[i % arr.length]);
```

</div>

</div>

> Example

```ts
repeat([1, 2, 3], 3); // [1, 2, 3, 1, 2, 3, 1, 2, 3]
```

### Shuffle an array

<div>

<div title="js">

```js
const shuffle = (arr) =>
    arr
        .map((a) => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value);

// Or
const shuffle = (arr) => arr.sort(() => 0.5 - Math.random());
```

</div>

<div title="ts">

```ts
const shuffle = <T,_>(arr: T[]): T[] =>
    arr
        .map((a) => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value);

// Or
const shuffle = <T,_>(arr: T[]): T[] => arr.sort(() => 0.5 - Math.random());
```

</div>

</div>

> Example

```ts
shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // [9, 1, 10, 6, 8, 5, 2, 3, 7, 4]
```

### Sort an array of items by given key

<div>

<div title="js">

```js
const sortBy = (arr, k) => arr.concat().sort((a, b) => (a[k] > b[k] ? 1 : a[k] < b[k] ? -1 : 0));
```

</div>

<div title="ts">

```ts
const sortBy = <T extends Record<string, any>, K extends keyof T>(arr: T[], k: K): T[] => (
    arr.concat().sort((a, b) => (a[k] > b[k] ? 1 : a[k] < b[k] ? -1 : 0))
);
```

</div>

</div>

> Example

```ts
const people = [
    { name: 'Foo', age: 42 },
    { name: 'Bar', age: 24 },
    { name: 'Fuzz', age: 36 },
    { name: 'Baz', age: 32 },
];
sortBy(people, 'age');

//  [
//      { name: 'Bar', age: 24 },
//      { name: 'Baz', age: 32 },
//      { name: 'Fuzz', age: 36 },
//      { name: 'Foo', age: 42 },
//  ]
```

### Sort an array of numbers

<div>

<div title="js">

```js
const sort = (arr) => arr.sort((a, b) => a - b);
```

</div>

<div title="ts">

```ts
const sort = (arr: number[]): number[] => arr.sort((a, b) => a - b);
```

</div>

</div>

> Example

```ts
sort([1, 5, 2, 4, 3]); // [1, 2, 3, 4, 5]
```

### Split an array into chunks

<div>

<div title="js">

```js
const chunk = (arr, size) => arr.reduce((acc, e, i) => (i % size ? acc[acc.length - 1].push(e) : acc.push([e]), acc), []);
```

</div>

<div title="ts">

```ts
const chunk = <T,>(arr: T[], size: number): T[][] => (
    arr.reduce((acc, e, i) => (i % size ? acc[acc.length - 1].push(e) : acc.push([e]), acc), [] as T[][])
);
```

</div>

</div>

> Examples

```ts
chunk([1, 2, 3, 4, 5, 6, 7, 8], 3); // [[1, 2, 3], [4, 5, 6], [7, 8]]
chunk([1, 2, 3, 4, 5, 6, 7, 8], 4); // [[1, 2, 3, 4], [5, 6, 7, 8]]
```

### Swap the rows and columns of a matrix

<div>

<div title="js">

```js
const transpose = (matrix) => matrix[0].map((col, i) => matrix.map((row) => row[i]));

// Or
const transpose = (matrix) => matrix[0].map((col, c) => matrix.map((row, r) => matrix[r][c]));

// Or
const transpose = (matrix) => matrix.reduce((prev, next) => next.map((item, i) => (prev[i] || []).concat(next[i])), []);
```

</div>

<div title="ts">

```ts
const transpose = <T,>(matrix: T[][]): T[][] => matrix[0].map((col, i) => matrix.map((row) => row[i]));

// Or
const transpose = <T,>(matrix: T[][]): T[][] => matrix[0].map((col, c) => matrix.map((row, r) => matrix[r][c]));

// Or
const transpose = <T,>(matrix: T[][]): T[][] => (
    matrix.reduce((prev, next) => next.map((item, i) => (prev[i] || []).concat(next[i])), [] as T[][])
);
```

</div>

</div>

> Examples

```ts
transpose([
    // [
    [1, 2, 3], //      [1, 4, 7],
    [4, 5, 6], //      [2, 5, 8],
    [7, 8, 9], //      [3, 6, 9],
]); //  ]
```

### Swap two array items

<div>

<div title="js">

```js
// `i` must be less than `j`
const swapItems = (a, i, j) => (a[i] && a[j] && [...a.slice(0, i), a[j], ...a.slice(i + 1, j), a[i], ...a.slice(j + 1)]) || a;
```

</div>

<div title="ts">

```ts
const swapItems = <T,_>(a: T[], i: number, j: number): T[] => (a[i] && a[j] && [...a.slice(0, i), a[j], ...a.slice(i + 1, j), a[i], ...a.slice(j + 1)]) || a;
```

</div>

</div>

> Example

```ts
swapItems([1, 2, 3, 4, 5], 1, 4); // [1, 5, 3, 4, 2]
```

### Unzip an array of arrays

<div>

<div title="js">

```js
const unzip = (arr) =>
    arr.reduce(
        (acc, c) => (c.forEach((v, i) => acc[i].push(v)), acc),
        Array.from({ length: Math.max(...arr.map((a) => a.length)) }, (_) => [])
    );
```

</div>

</div>

> Example

```js
unzip([
    ['a', 1],
    ['b', 2],
    ['c', 3],
    ['d', 4],
    ['e', 5],
]); // [['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5]]

/*
    a     1
     b   2
      c 3
      d 4
      e 5
*/
```

### Zip multiple arrays

<div>

<div title="js">

```js
const zip = (...arr) => Array.from({ length: Math.max(...arr.map((a) => a.length)) }, (_, i) => arr.map((a) => a[i]));
```

</div>

</div>

> Example

```js
zip(['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5]); // [['a', 1], ['b', 2], ['c', 3], ['d', 4], ['e', 5]]

/*
Does it look like a zipper?
        a 1
        b 2
       c   3
      d     4
     e       5
*/
```