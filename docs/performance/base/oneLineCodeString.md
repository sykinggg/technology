# JavaScript一行代码 - String

### Capitalize a string

<div>

<div title="js">

```js
const capitalize = (str) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

// Or
const capitalize = ([first, ...rest]) => `${first.toUpperCase()}${rest.join('')}`;
```

</div>

<div title="ts">

```ts
const capitalize = (str: string): string => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

// Or
const capitalize = ([first, ...rest]: string): string => `${first.toUpperCase()}${rest.join('')}`;
```

</div>

</div>

> Examples

```ts
capitalize('hello world'); // 'Hello world'
```

### Check if a path is relative

<div>

<div title="js">

```js
const isRelative = (path) => !/^([a-z]+:)?[\\/]/i.test(path);
```

</div>

<div title="ts">

```ts
const isRelative = (path: string): boolean => !/^([a-z]+:)?[\\/]/i.test(path);
```

</div>

</div>

> Examples

```ts
isRelative('/foo/bar/baz'); // false
isRelative('C:\\foo\\bar\\baz'); // false
isRelative('foo/bar/baz.txt'); // true
isRelative('foo.md'); // true
```

### Check if a string consists of a repeated character sequence

<div>

<div title="js">

```js
const consistsRepeatedSubstring = (str) => `${str}${str}`.indexOf(str, 1) !== str.length;
```

</div>

<div title="ts">

```ts
const consistsRepeatedSubstring = (str: string): boolean => `${str}${str}`.indexOf(str, 1) !== str.length;
```

</div>

</div>

> Examples

```ts
consistsRepeatedSubstring('aa'); // true
consistsRepeatedSubstring('aaa'); // true
consistsRepeatedSubstring('ababab'); // true
consistsRepeatedSubstring('abc'); // false
```

### Check if a string is a palindrome

<div>

<div title="js">

```js
const isPalindrome = (str) => str === str.split('').reverse().join('');
```

</div>

<div title="ts">

```ts
const isPalindrome = (str: string): boolean => str === str.split('').reverse().join('');
```

</div>

</div>

> Examples

```ts
isPalindrome('abc'); // false
isPalindrom('abcba'); // true
```

### Check if a URL is absolute

<div>

<div title="js">

```js
const isAbsoluteUrl = (url) => /^[a-z][a-z0-9+.-]*:/.test(url);
```

</div>

<div title="ts">

```ts
const isAbsoluteUrl = (url: string): boolean => /^[a-z][a-z0-9+.-]*:/.test(url);
```

</div>

</div>

> Examples

```ts
isAbsoluteUrl('https://1loc.dev'); // true
isAbsoluteUrl('https://1loc.dev/foo/bar'); // true
isAbsoluteUrl('1loc.dev'); // false
isAbsoluteUrl('//1loc.dev'); // false
```

### Check if two strings are anagram

<div>

<div title="js">

```js
const areAnagram = (str1, str2) => str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('');
```

</div>

<div title="ts">

```ts
const areAnagram = (str1: string, str2: string): boolean => str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('');
```

</div>

</div>

> Examples

```ts
areAnagram('listen', 'silent'); // true
areAnagram('they see', 'the eyes'); // true
areAnagram('node', 'deno'); // true
```

### Convert a base64 encoded string to an uint8 array

<div>

<div title="js">

```js
const base64ToUint8 = (str) => Uint8Array.from(atob(str), (c) => c.charCodeAt(0));
```

</div>

<div title="ts">

```ts
const base64ToUint8 = (str: string): Uint8Array => Uint8Array.from(atob(str), (c) => c.charCodeAt(0));
```

</div>

</div>

### Convert a letter to associate emoji

<div>

<div title="js">

```js
const letterToEmoji = (c) => String.fromCodePoint(c.toLowerCase().charCodeAt(0) + 127365);
```

</div>

<div title="ts">

```ts
const letterToEmoji = (c: string): string => String.fromCodePoint(c.toLowerCase().charCodeAt(0) + 127365);
```

</div>

</div>

> Examples

```ts
letterToEmoji('a'); // 🇦
letterToEmoji('b'); // 🇧
```

### Convert a string to camelCase

<div>

<div title="js">

```js
const toCamelCase = (str) => str.trim().replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''));
```

</div>

<div title="ts">

```ts
const toCamelCase = (str: string): string => str.trim().replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''));
```

</div>

</div>

> Examples

```ts
toCamelCase('background-color'); // backgroundColor
toCamelCase('-webkit-scrollbar-thumb'); // WebkitScrollbarThumb
toCamelCase('_hello_world'); // HelloWorld
toCamelCase('hello_world'); // helloWorld
```

### Convert a string to PascalCase

<div>

<div title="js">

```js
const toPascalCase = (str) => (str.match(/[a-zA-Z0-9]+/g) || []).map((w) => `${w.charAt(0).toUpperCase()}${w.slice(1)}`).join('');
```

</div>

<div title="ts">

```ts
const toPascalCase = (str: string): string => (str.match(/[a-zA-Z0-9]+/g) || []).map((w) => `${w.charAt(0).toUpperCase()}${w.slice(1)}`).join('');
```

</div>

</div>

> Examples

```ts
toPascalCase('hello world'); // 'HelloWorld'
toPascalCase('hello.world'); // 'HelloWorld'
toPascalCase('foo_bar-baz'); // FooBarBaz
```

### Convert a string to URL slug

<div>

<div title="js">

```js
const slugify = (str) =>
    str
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '');
```

</div>

<div title="ts">

```ts
const slugify = (str: string): string =>
    str
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '');
```

</div>

</div>

> Examples

```ts
slugify('Chapter One: Once upon a time...'); // 'chapter-one-once-upon-a-time'
```

### Convert a Windows file path to Unix path

<div>

<div title="js">

```js
const toUnixPath = (path) => path.replace(/[\\/]+/g, '/').replace(/^([a-zA-Z]+:|\.\/)/, '');
```

</div>

<div title="ts">

```ts
const toUnixPath = (path: string): string => path.replace(/[\\/]+/g, '/').replace(/^([a-zA-Z]+:|\.\/)/, '');
```

</div>

</div>

> Examples

```ts
toUnixPath('./foo/bar/baz'); // foo/bar/baz
toUnixPath('C:\\foo\\bar\\baz'); // /foo/bar/baz
```

### Convert an uint8 array to a base64 encoded string

<div>

<div title="js">

```js
const uint8ToBase64 = (arr) =>
    btoa(
        Array(arr.length)
            .fill('')
            .map((_, i) => String.fromCharCode(arr[i]))
            .join('')
    );

// For Node.js
const uint8ToBase64 = (arr) => Buffer.from(arr).toString('base64');
```

</div>

<div title="ts">

```ts
const uint8ToBase64 = (arr: Uint8Array): string =>
    btoa(
        Array(arr.length)
            .fill('')
            .map((_, i) => String.fromCharCode(arr[i]))
            .join('')
    );

// For Node.js
const uint8ToBase64 = (arr: Uint8Array): string => Buffer.from(arr).toString('base64');
```

</div>

</div>

### Convert camelCase to kebab-case and vice versa

<div>

<div title="js">

```js
const kebabToCamel = (str) => str.replace(/-./g, (m) => m.toUpperCase()[1]);

const camelToKebab = (str) => str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
```

</div>

<div title="ts">

```ts
const kebabToCamel = (str: string): string => str.replace(/-./g, (m) => m.toUpperCase()[1]);

const camelToKebab = (str: string): string => str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
```

</div>

</div>

> Examples

```ts
kebabToCamel('background-color'); // 'backgroundColor'
camelToKebab('backgroundColor'); // 'background-color'
```

### Convert snake_case to camelCase

<div>

<div title="js">

```js
const snakeToCamel = (str) => str.toLowerCase().replace(/(_\w)/g, (m) => m.toUpperCase().substr(1));
```

</div>

<div title="ts">

```ts
const snakeToCamel = (str: string): string => str.toLowerCase().replace(/(_\w)/g, (m) => m.toUpperCase().substr(1));
```

</div>

</div>

> Examples

```ts
snakeToCamel('HELLO_world'); // 'helloWorld'
```

### Convert the name of an Excel column to number

<div>

<div title="js">

```js
const getIndex = (col) => col.split('').reduce((prev, next) => prev * 26 + parseInt(next, 36) - 9, 0);
```

</div>

<div title="ts">

```ts
const getIndex = (col: string): number => col.split('').reduce((prev, next) => prev * 26 + parseInt(next, 36) - 9, 0);
```

</div>

</div>

> Examples

```ts
getIndex('A'); // 1
getIndex('B'); // 2
getIndex('C'); // 3
getIndex('Z'); // 26

getIndex('AA'); // 27
getIndex('AB'); // 28
getIndex('AC'); // 29
getIndex('AZ'); // 52

getIndex('AAA'); // 703
getIndex('AAB'); // 704
```

### Count the number of words in a string

<div>

<div title="js">

```js
const countWords = (str) => str.trim().split(/\s+/).length;
```

</div>

<div title="ts">

```ts
const countWords = (str: string): number => str.trim().split(/\s+/).length;
```

</div>

</div>

> Examples

```ts
countWords('Hello World'); // 2
countWords('Hello    World'); // 2
countWords('  Hello  World  '); // 2
```

### Count the occurrences of a character in a string

<div>

<div title="js">

```js
const countOccurrences = (str, char) => [...str].reduce((a, v) => (v === char ? a + 1 : a), 0);

// Or
const countOccurrences = (str, char) => str.split('').reduce((a, v) => (v === char ? a + 1 : a), 0);

// Or
const countOccurrences = (str, char) => [...str].filter((item) => item === char).length;

// Or
const countOccurrences = (str, char) => str.split('').filter((item) => item === char).length;
```

</div>

<div title="ts">

```ts
const countOccurrences = (str: string, char: string): number => [...str].reduce((a, v) => (v === char ? a + 1 : a), 0);

// Or
const countOccurrences = (str: string, char: string): number => str.split('').reduce((a, v) => (v === char ? a + 1 : a), 0);

// Or
const countOccurrences = (str: string, char: string): number => [...str].filter((item) => item === char).length;

// Or
const countOccurrences = (str: string, char: string): number => str.split('').filter((item) => item === char).length;
```

</div>

</div>

> Examples

```ts
countOccurrences('a.b.c.d.e', '.'); // 4
```

### Decapitalize a string

<div>

<div title="js">

```js
const decapitalize = (str) => `${str.charAt(0).toLowerCase()}${str.slice(1)}`;

// Or
const decapitalize = ([first, ...rest]) => `${first.toLowerCase()}${rest.join('')}`;
```

</div>

<div title="ts">

```ts
const decapitalize = (str: string): string => `${str.charAt(0).toLowerCase()}${str.slice(1)}`;

// Or
const decapitalize = ([first, ...rest]: string): string => `${first.toLowerCase()}${rest.join('')}`;
```

</div>

</div>

> Examples

```ts
decapitalize('Hello world'); // 'hello world'
```

### Escape HTML special characters

<div>

<div title="js">

```js
const escape = (str) => str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

// Or
const escape = (str) => str.replace(/[&<>"']/g, (m) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));
```

</div>

<div title="ts">

```ts
const escape = (str: string): string => str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

// Or
const escape = (str: string): string => str.replace(/[&<>"']/g, (m) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));
```

</div>

</div>

### Format a string

<div>

<div title="js">

```js
const format = (str, ...vals) => vals.reduce((s, v, i) => s.replace(new RegExp('\\{' + i + '\\}', 'g'), v), str);
```

</div>

<div title="ts">

```ts
const format = (str: string, ...vals: unknown[]): string => vals.reduce((s, v, i) => s.replace(new RegExp('\\{' + i + '\\}', 'g'), v), str);
```

</div>

</div>

> Examples

```ts
const template = 'My name is {0} and I am {1} years old';

format(template, 'John', 30));
// My name is John and I am 30 years old

format(template, 'Jane', 20);
// My name is Jane and I am 20 years old
```

### Generate a hash of a string

<div>

<div title="js">

```js
const hash = (str) => str.split('').reduce((prev, curr) => (Math.imul(31, prev) + curr.charCodeAt(0)) | 0, 0);

// Or
const hash = (str) => str.split('').reduce((prev, curr) => ((prev << 5) - prev + curr.charCodeAt(0)) | 0, 0);
```

</div>

<div title="ts">

```ts
const hash = (str: string): number => str.split('').reduce((prev, curr) => (Math.imul(31, prev) + curr.charCodeAt(0)) | 0, 0);

// Or
const hash = (str: string): number => str.split('').reduce((prev, curr) => ((prev << 5) - prev + curr.charCodeAt(0)) | 0, 0);
```

</div>

</div>

> Examples

```ts
hash('hello'); // 99162322
```

### Get the base URL without any parameters

<div>

<div title="js">

```js
const baseUrl = (url) => (url.indexOf('?') === -1 ? url : url.slice(0, url.indexOf('?')));

// Or
// Note that `includes` isn't supported in IE 11
const baseUrl = (url) => (url.includes('?') ? url.slice(0, url.indexOf('?')) : url);

// Or
const baseUrl = (url) => url.split('?')[0];
```

</div>

<div title="ts">

```ts
const baseUrl = (url: string): string => (url.indexOf('?') === -1 ? url : url.slice(0, url.indexOf('?')));

// Or
// Note that `includes` isn't supported in IE 11
const baseUrl = (url: string): string => (url.includes('?') ? url.slice(0, url.indexOf('?')) : url);

// Or
const baseUrl = (url: string): string => url.split('?')[0];
```

</div>

</div>

> Examples

```ts
baseUrl('https://domain.com/path/sub/path?foo=bar&hello=world'); // 'https://domain.com/path/sub/path'
```

### Get the file extension from a file name

<div>

<div title="js">

```js
const ext = (fileName) => fileName.split('.').pop();
```

</div>

<div title="ts">

```ts
const ext = (fileName: string): string => fileName.split('.').pop();
```

</div>

</div>

### Get the file name from a URL

<div>

<div title="js">

```js
const fileName = (url: string): string => url.substring(url.lastIndexOf('/') + 1);
```

</div>

<div title="ts">

```ts
const fileName = (url: string): string => url.substring(url.lastIndexOf('/') + 1);
```

</div>

</div>

> Examples

```ts
fileName('http://domain.com/path/to/document.pdf'); // 'document.pdf'
```

### Get the length of a string in bytes

<div>

<div title="js">

```js
const bytes = (str) => new Blob([str]).size;
```

</div>

<div title="ts">

```ts
const bytes = (str: string): number => new Blob([str]).size;
```

</div>

</div>

> Examples

```ts
bytes('hello world'); // 11
bytes('🎉'); // 4
```

### Get the number of a character in a string

<div>

<div title="js">

```js
const characterCount = (str, char) => str.split(char).length - 1;

// Or
const characterCount = (str, char) => str.replace(new RegExp(String.raw`[^${char}]`, 'g'), '').length;
```

</div>

<div title="ts">

```ts
const characterCount = (str: string, char: string): number => str.split(char).length - 1;

// Or
const characterCount = (str: string, char: string): number => str.replace(new RegExp(String.raw`[^${char}]`, 'g'), '').length;
```

</div>

</div>

> Examples

```ts
characterCount('192.168.1.1', '.'); // 3
characterCount('star wars', 's'); // 2
```

### Make the first character of a string lowercase

<div>

<div title="js">

```js
const lowercaseFirst = (str) => `${str.charAt(0).toLowerCase()}${str.slice(1)}`;
```

</div>

<div title="ts">

```ts
const lowercaseFirst = (str: string): string => `${str.charAt(0).toLowerCase()}${str.slice(1)}`;
```

</div>

</div>

> Examples

```ts
lowercaseFirst('Hello World'); // 'hello World'
```

### Normalize file path slashes

<div>

<div title="js">

```js
const normalizePath = (path) => path.replace(/[\\/]+/g, '/');
```

</div>

<div title="ts">

```ts
const normalizePath = (path: string): string => path.replace(/[\\/]+/g, '/');
```

</div>

</div>

> Examples

```ts
normalizePath('\\foo\\bar\\baz\\'); // /foo/bar/baz/
normalizePath('.//foo//bar///////baz/'); // ./foo/bar/baz/
```

### Prepend a line number to each line of a text document

<div>

<div title="js">

```js
const prependNumbers = (str) =>
    str
        .split(/\r?\n/)
        .map((line, i) => `${(i + 1).toString().padStart(2, ' ')} ${line}`)
        .join('\n');
```

</div>

<div title="ts">

```ts
const prependNumbers = (str: string): string =>
    str
        .split(/\r?\n/)
        .map((line, i) => `${(i + 1).toString().padStart(2, ' ')} ${line}`)
        .join('\n');
```

</div>

</div>

> Examples

```ts
prependNumbers(`one
two
three
four`);

/* Output */
/*
1 one
2 two
3 three
4 four
*/
```

### Remove duplicate lines of a text document

<div>

<div title="js">

```js
const removeDuplicateLines = (str) => Array.from(new Set(str.split(/\r?\n/))).join('\n');
```

</div>

<div title="ts">

```ts
const removeDuplicateLines = (str: string): string => Array.from(new Set(str.split(/\r?\n/))).join('\n');
```

</div>

</div>

> Examples

```ts
removeDuplicateLines(`one
three
two
three
one
four`);

/* Output */
/*
one
three
two
four
*/
```

### Remove empty lines of a text document

<div>

<div title="js">

```js
const removeEmptyLines = (str) =>
    str
        .split(/\r?\n/)
        .filter((line) => line.trim() !== '')
        .join('\n');
```

</div>

<div title="ts">

```ts
const removeEmptyLines = (str: string): string =>
    str
        .split(/\r?\n/)
        .filter((line) => line.trim() !== '')
        .join('\n');
```

</div>

</div>

> Examples

```ts
removeEmptyLines(`red

green
blue

yellow`);

/* Output */
/*
red
green
blue
yellow
*/
```

### Remove spaces from a string

<div>

<div title="js">

```js
const removeSpaces = (str) => str.replace(/\s/g, '');
```

</div>

<div title="ts">

```ts
const removeSpaces = (str: string): string => str.replace(/\s/g, '');
```

</div>

</div>

> Examples

```ts
removeSpaces('hel lo wor ld'); // 'helloworld'
```

### Repeat a string

<div>

<div title="js">

```js
const repeat = (str, numberOfTimes) => str.repeat(numberOfTimes);

// Or
const repeat = (str, numberOfTimes) => Array(numberOfTimes + 1).join(str);
```

</div>

<div title="ts">

```ts
const repeat = (str: string, numberOfTimes: number): string => str.repeat(numberOfTimes);

// Or
const repeat = (str: string, numberOfTimes: number): string => Array(numberOfTimes + 1).join(str);
```

</div>

</div>

### Replace all line breaks with br elements

<div>

<div title="js">

```js
const nl2br = (str) => str.replace(new RegExp('\r?\n', 'g'), '<br>');

// In React
str.split('\n').map((item, index) => (
    <React.Fragment key={index}>
        {item}
        <br />
    </React.Fragment>
));
```

</div>

<div title="ts">

```ts
const nl2br = (str: string): string => str.replace(new RegExp('\r?\n', 'g'), '<br>');
```

</div>

</div>

### Replace all tab characters with spaces

<div>

<div title="js">

```js
const replace = (str, numSpaces = 4) => str.replaceAll('\t', ' '.repeat(numSpaces));
```

</div>

<div title="ts">

```ts
const replace = (str: string, numSpaces = 4): string => str.replaceAll('\t', ' '.repeat(numSpaces));
```

</div>

</div>

### Replace multiple spaces with a single space

<div>

<div title="js">

```js
// Replace spaces, tabs and new line characters
const replaceSpaces = (str) => str.replace(/\s\s+/g, ' ');

// Only replace spaces
const replaceOnlySpaces = (str) => str.replace(/  +/g, ' ');
```

</div>

<div title="ts">

```ts
const replaceSpaces = (str: string): string => str.replace(/\s\s+/g, ' ');

const replaceOnlySpaces = (str: string): string => str.replace(/  +/g, ' ');
```

</div>

</div>

> Examples

```ts
replaceSpaces('this\n   is     \ta    \rmessage'); // 'this is a message'
```

### Replace the first given number of characters of a string with another character

<div>

<div title="js">

```js
const mask = (str, num, mask) => `${str}`.slice(num).padStart(`${str}`.length, mask);
```

</div>

<div title="ts">

```ts
const mask = (str: string, num: number, mask: string): string => `${str}`.slice(num).padStart(`${str}`.length, mask);
```

</div>

</div>

> Examples

```ts
mask(1234567890, 3, '*'); // ***4567890
```

### Reverse a string

<div>

<div title="js">

```js
const reverse = (str) => str.split('').reverse().join('');

// Or
const reverse = (str) => [...str].reverse().join('');

// Or
const reverse = (str) => str.split('').reduce((rev, char) => `${char}${rev}`, '');

// Or
const reverse = (str) => (str === '' ? '' : `${reverse(str.substr(1))}${str.charAt(0)}`);
```

</div>

<div title="ts">

```ts
const reverse = (str: string): string => str.split('').reverse().join('');

// Or
const reverse = (str: string): string => [...str].reverse().join('');

// Or
const reverse = (str: string): string => str.split('').reduce((rev, char) => `${char}${rev}`, '');

// Or
const reverse = (str: string): string => (str === '' ? '' : `${reverse(str.substr(1))}${str.charAt(0)}`);
```

</div>

</div>

> Examples

```ts
reverse('hello world'); // 'dlrow olleh'
```

### Reverse the order of lines of a text

<div>

<div title="js">

```js
const reverseLines = (str) => str.split(/\r?\n/).reverse().join('\n');
```

</div>

<div title="ts">

```ts
const reverseLines = (str: string): string => str.split(/\r?\n/).reverse().join('\n');
```

</div>

</div>

> Examples

```ts
reverseLines(`one
two
three`);

/* Output */
/*
three
two
one
*/
```

### Sort lines of a text document in the alphabetical order

<div>

<div title="js">

```js
const sortLines = (str) => str.split(/\r?\n/).sort().join('\n');

// Reverse the order
const reverseSortedLines = (str) => str.split(/\r?\n/).sort().reverse().join('\n');
```

</div>

<div title="ts">

```ts
const sortLines = (str: string): string => str.split(/\r?\n/).sort().join('\n');

// Reverse the order
const reverseSortedLines = (str: string): string => str.split(/\r?\n/).sort().reverse().join('\n');
```

</div>

</div>

> Examples

```ts
sortLines(`Thaddeus Mullen
Kareem Marshall
Ferdinand Valentine
Hasad Lindsay
Mufutau Berg
Knox Tyson
Kasimir Fletcher
Colton Sharp
Adrian Rosales
Theodore Rogers`);

/* Output */
/*
Adrian Rosales
Colton Sharp
Ferdinand Valentine
Hasad Lindsay
Kareem Marshall
Kasimir Fletcher
Knox Tyson
Mufutau Berg
Thaddeus Mullen
Theodore Rogers
*/
```

### Sort the characters of a string in the alphabetical order

<div>

<div title="js">

```js
const sort = (str) =>
    str
        .split('')
        .sort((a, b) => a.localeCompare(b))
        .join('');
```

</div>

<div title="ts">

```ts
const sort = (str: string): string =>
    str
        .split('')
        .sort((a, b) => a.localeCompare(b))
        .join('');
```

</div>

</div>

> Examples

```ts
sort('hello world'); // dehllloorw
```

### Strip ANSI codes from a string

<div>

<div title="js">

```js
const stripAnsiCodes = (str) => str.replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, '');
```

</div>

<div title="ts">

```ts
const stripAnsiCodes = (str: string): string => str.replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, '');
```

</div>

</div>

> Examples

```ts
stripAnsiCodes('\u001B[4mcake\u001B[0m'); // 'cake'
stripAnsiCodes('\u001B[0m\u001B[4m\u001B[42m\u001B[31mfoo\u001B[39m\u001B[49m\u001B[24mfoo\u001B[0m'); // 'foofoo'
```

### Swap case of characters in a string

<div>

<div title="js">

```js
const swapCase = (str) =>
    str
        .split('')
        .map((c) => (c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase()))
        .join('');
```

</div>

<div title="ts">

```ts
const swapCase = (str: string): string =>
    str
        .split('')
        .map((c) => (c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase()))
        .join('');
```

</div>

</div>

> Examples

```ts
swapCase('Hello World'); // 'hELLO wORLD'
```

### Trim slashes at the beginning and the end of a string

<div>

<div title="js">

```js
const trimSlashes = (str) => str.replace(/^\/+|\/+$/g, '');

// Or
const trimSlashes = (str) => str.split('/').filter(Boolean).join('/');
```

</div>

<div title="ts">

```ts
const trimSlashes = (str: string): string => str.replace(/^\/+|\/+$/g, '');

// Or
const trimSlashes = (str: string): string => str.split('/').filter(Boolean).join('/');
```

</div>

</div>

> Examples

```ts
trimSlashes('//hello/world///'); // hello/world
```

### Trim some character

<div>

<div title="js">

```js
const trim = (str, char) => str.split(char).filter(Boolean).join();
```

</div>

<div title="ts">

```ts
const trim = (str: string, char: string): string => str.split(char).filter(Boolean).join();
```

</div>

</div>

> Examples

```ts
trim('/hello world//', '/'); // hello world
trim('"hello world"', '"'); // hello world
trim('   hello world ', ' '); // hello world
```

### Trim the file extension from a file name

<div>

<div title="js">

```js
const trimExt = (fileName) => (fileName.indexOf('.') === -1 ? fileName : fileName.split('.').slice(0, -1).join('.'));
```

</div>

<div title="ts">

```ts
const trimExt = (fileName: string): string => (fileName.indexOf('.') === -1 ? fileName : fileName.split('.').slice(0, -1).join('.'));
```

</div>

</div>

> Examples

```ts
trimExt('document'); // document
trimExt('document.pdf'); // document
trimExt('document.2020.pdf'); // document.2020
```

### Truncate a string at full words

<div>

<div title="js">

```js
const truncate = (str, max, suffix) => (str.length < max ? str : `${str.substr(0, str.substr(0, max - suffix.length).lastIndexOf(' '))}${suffix}`);
```

</div>

<div title="ts">

```ts
const truncate = (str: string, max: number, suffix: string = '...'): string => (str.length < max ? str : `${str.substr(0, str.substr(0, max - suffix.length).lastIndexOf(' '))}${suffix}`);
```

</div>

</div>

> Examples

```ts
truncate('This is a long message', 20, '...'); // 'This is a long...'
```

### Unescape HTML special characters

<div>

<div title="js">

```js
const unescape = (str) =>
    str
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&#0*39;/g, "'")
        .replace(/&quot;/g, '"');
```

</div>

<div title="ts">

```ts
const unescape = (str: string): string =>
    str
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&#0*39;/g, "'")
        .replace(/&quot;/g, '"');
```

</div>

</div>

### Uppercase the first character of each word in a string

<div>

<div title="js">

```js
const uppercaseWords = (str) =>
    str
        .split(' ')
        .map((w) => `${w.charAt(0).toUpperCase()}${w.slice(1)}`)
        .join(' ');

// Or
const uppercaseWords = (str) => str.replace(/^(.)|\s+(.)/g, (c) => c.toUpperCase());
```

</div>

<div title="ts">

```ts
const uppercaseWords = (str: string): string =>
    str
        .split(' ')
        .map((w) => `${w.charAt(0).toUpperCase()}${w.slice(1)}`)
        .join(' ');

// Or
const uppercaseWords = (str: string): string => str.replace(/^(.)|\s+(.)/g, (c) => c.toUpperCase());
```

</div>

</div>

> Examples

```ts
uppercaseWords('hello world'); // 'Hello World'
```