# JavaScript一行代码 - DOM

### Check if an element is a descendant of another

<div>

<div title="js">

```js
const isDescendant = (child, parent) => parent.contains(child);
```

</div>

<div title="ts">

```ts
const isDescendant = (child: Node, parent: Node): boolean => parent.contains(child);
```

</div>

</div>

### Check if an element is focused

<div>

<div title="js">

```js
const hasFocus = (ele) => ele === document.activeElement;
```

</div>

<div title="ts">

```ts
const hasFocus = (ele: Node): boolean => ele === document.activeElement;
```

</div>

</div>

### Check if the touch events are supported

<div>

<div title="js">

```js
const touchSupported = () => 'ontouchstart' in window || (window.DocumentTouch && document instanceof window.DocumentTouch);
```

</div>

<div title="ts">

```ts
const touchSupported = (): boolean => (
    'ontouchstart' in window || (window as any)['DocumentTouch'] && document instanceof (window as any)['DocumentTouch']
);
```

</div>

</div>

### Check if user scrolls to the bottom of the page

<div>

<div title="js">

```js
const isAtBottom = () => document.documentElement.clientHeight + window.scrollY >= document.documentElement.scrollHeight;
```

</div>

<div title="ts">

```ts
const isAtBottom = (): boolean => document.documentElement.clientHeight + window.scrollY >= document.documentElement.scrollHeight;
```

</div>

</div>

### Detect Internet Explorer browser

<div>

<div title="js">

```js
const isIE = !!document.documentMode;
```

</div>

<div title="ts">

```ts
const isIE = !!(document as any).documentMode;
```

</div>

</div>

### Detect macOS browser

<div>

<div title="js">

```js
const isMacBrowser = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
```

</div>

<div title="ts">

```ts
const isMacBrowser: boolean = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
```

</div>

</div>

### Get all siblings of an element

<div>

<div title="js">

```js
const siblings = (ele) => [].slice.call(ele.parentNode.children).filter((child) => child !== ele);
```

</div>

<div title="ts">

```ts
const siblings = (ele: Node): Node[] => (ele.parentNode ? [].slice.call(ele.parentNode.children).filter((child) => child !== ele) : []);
```

</div>

</div>

### Get the position of an element relative to the document

<div>

<div title="js">

```js
const getPosition = (ele) => ((r = ele.getBoundingClientRect()), { left: r.left + window.scrollX, top: r.top + window.scrollY });
```

</div>

</div>

> Example

```js
getPosition(document.body); // { left: 0, top: 0 }
```

### Get the selected text

<div>

<div title="js">

```js
const getSelectedText = () => window.getSelection().toString();
```

</div>

</div>

### Go back to the previous page

<div>

<div title="js">

```js
history.back();

// Or
history.go(-1);
```

</div>

</div>

### Hide an element

<div>

<div title="js">

```js
// Pick the method that is suitable for your use case
const hide = (ele) => (ele.style.display = 'none');

// Or
const hide = (ele) => (ele.style.visibility = 'hidden');

// Or
const hide = (ele) => (ele.hidden = true);
```

</div>

<div title="ts">

```ts
const hide = (ele: HTMLElement): string => (ele.style.display = 'none');

// Or
const hide = (ele: HTMLElement): string => (ele.style.visibility = 'hidden');

// Or
const hide = (ele: HTMLElement): boolean => (ele.hidden = true);
```

</div>

</div>

### Insert an element after other one

<div>

<div title="js">

```js
const insertAfter = (ele, anotherEle) => anotherEle.parentNode.insertBefore(ele, anotherEle.nextSibling);

// Or
const insertAfter = (ele, anotherEle) => anotherEle.insertAdjacentElement('afterend', ele);
```

</div>

<div title="ts">

```ts
const insertAfter = (ele: Element, anotherEle: Element): Element | null => (anotherEle.parentNode ? anotherEle.parentNode.insertBefore(ele, anotherEle.nextSibling) : null);

// Or
const insertAfter = (ele: Element, anotherEle: Element): Element | null => anotherEle.insertAdjacentElement('afterend', ele);
```

</div>

</div>

### Insert given HTML after an element

<div>

<div title="js">

```js
const insertHtmlAfter = (html, ele) => ele.insertAdjacentHTML('afterend', html);
```

</div>

<div title="ts">

```ts
const insertHtmlAfter = (html: string, ele: Element): void => ele.insertAdjacentHTML('afterend', html);
```

</div>

</div>

### Insert given HTML before an element

<div>

<div title="js">

```js
const insertHtmlBefore = (html, ele) => ele.insertAdjacentHTML('beforebegin', html);
```

</div>

<div title="ts">

```ts
const insertHtmlBefore = (html: string, ele: Element): void => ele.insertAdjacentHTML('beforebegin', html);
```

</div>

</div>

### Redirect to another page

<div>

<div title="js">

```js
const goTo = (url) => (location.href = url);
```

</div>

<div title="ts">

```ts
const goTo = (url: string): string => (location.href = url);
```

</div>

</div>

### Reload the current page

<div>

<div title="js">

```js
const reload = () => location.reload();

// Or
const reload = () => (location.href = location.href);
```

</div>

<div title="ts">

```ts
const reload = (): void => location.reload();

// Or
const reload = (): string => (location.href = location.href);
```

</div>

</div>

### Replace an element

<div>

<div title="js">

```js
const replace = (ele, newEle) => ele.parentNode.replaceChild(newEle, ele);
```

</div>

<div title="ts">

```ts
const replace = (ele: Element, newEle: Element): Element | null => (ele.parentNode ? ele.parentNode.replaceChild(newEle, ele) : null);
```

</div>

</div>

### Scroll to top of the page

<div>

<div title="js">

```js
const goToTop = () => window.scrollTo(0, 0);
```

</div>

<div title="ts">

```ts
const goToTop = (): void => window.scrollTo(0, 0);
```

</div>

</div>

### Serialize form data

<div>

<div title="js">

```js
const serialize = (formEle) => Array.from(new FormData(formEle)).reduce((p, [k, v]) => Object.assign({}, p, { [k]: p[k] ? (Array.isArray(p[k]) ? p[k] : [p[k]]).concat(v) : v }), {});
```

</div>

</div>

### Show an element

<div>

<div title="js">

```js
const show = (ele) => (ele.style.display = '');
```

</div>

<div title="ts">

```ts
const show = (ele: HTMLElement): string => (ele.style.display = '');
```

</div>

</div>

### Strip HTML from a given text

<div>

<div title="js">

```js
const stripHtml = (html) => new DOMParser().parseFromString(html, 'text/html').body.textContent || '';
```

</div>

<div title="ts">

```ts
const stripHtml = (html: string): string => new DOMParser().parseFromString(html, 'text/html').body.textContent || '';
```

</div>

</div>

### Toggle an element

<div>

<div title="js">

```js
const toggle = (ele) => (ele.style.display = ele.style.display === 'none' ? 'block' : 'none');

// Or
const toggle = (ele) => (ele.hidden = !ele.hidden);
```

</div>

<div title="ts">

```ts
const toggle = (ele: HTMLElement): string => (ele.style.display = ele.style.display === 'none' ? 'block' : 'none');

// Or
const toggle = (ele: HTMLElement): boolean => (ele.hidden = !ele.hidden);
```

</div>

</div>