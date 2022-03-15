# 通用兄弟选择器

# 概述

兄弟选择符，位置无须紧邻，只须同层级，`A~B` 选择`A`元素之后所有同层级`B`元素。

# 语法

```
former_element ~ target_element { style properties }
```

# 示例

```css
p ~ span {
  color: red;
}
```

> 上面的CSS作用于下面的HTML中:

```html
<span>This is not red.</span>
<p>Here is a paragraph.</p>
<div>Here is some code.</div>
<span>And here is a span.</span>
```

# 结果

<img :src="$withBase('/assets/mozillaCss/1617679081(1).jpg')" alt="demo" />

# 浏览器兼容性

<img :src="$withBase('/assets/mozillaCss/1617679124(1).jpg')" alt="demo" />