import{a as o}from"./app.ba47fc91.js";import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";const d={},c=o('<h1 id="\u6807\u51C6\u7684-css-\u7684\u76D2\u5B50\u6A21\u578B-\u4F4E\u7248\u672C-ie-\u7684\u76D2\u5B50\u6A21\u578B" tabindex="-1"><a class="header-anchor" href="#\u6807\u51C6\u7684-css-\u7684\u76D2\u5B50\u6A21\u578B-\u4F4E\u7248\u672C-ie-\u7684\u76D2\u5B50\u6A21\u578B" aria-hidden="true">#</a> \u6807\u51C6\u7684 CSS \u7684\u76D2\u5B50\u6A21\u578B\uFF1F\u4F4E\u7248\u672C IE \u7684\u76D2\u5B50\u6A21\u578B</h1><ol><li><p>\u6709\u4E24\u79CD\u76D2\u5B50\u6A21\u578B\uFF1A<code>IE\u76D2\u6A21\u578B\uFF08border-box\uFF09</code>\u3001<code>W3C\u6807\u51C6\u76D2\u6A21\u578B\uFF08content-box\uFF09</code></p></li><li><p>\u76D2\u6A21\u578B\uFF1A\u5206\u4E3A<code>\u5185\u5BB9\uFF08content\uFF09</code>\u3001<code>\u586B\u5145\uFF08padding\uFF09</code>\u3001<code>\u8FB9\u754C\uFF08margin\uFF09</code>\u3001<code>\u8FB9\u6846\uFF08border\uFF09</code>\u56DB\u4E2A\u90E8\u5206</p></li></ol><p>IE\u76D2\u6A21\u578B\u548CW3C\u6807\u51C6\u76D2\u6A21\u578B\u7684\u533A\u522B\uFF1A</p><ol><li><p>W3C\u6807\u51C6\u76D2\u6A21\u578B\uFF1A\u5C5E\u6027<code>width</code>\uFF0C<code>height</code><strong>\u53EA\u5305\u542B\u5185\u5BB9content\uFF0C\u4E0D\u5305\u542Bborder\u548Cpadding</strong></p></li><li><p>IE\u76D2\u6A21\u578B\uFF1A\u5C5E\u6027<code>width</code>\uFF0C<code>height</code><strong>\u5305\u542Bcontent\u3001border\u548Cpadding\uFF0C\u6307\u7684\u662Fcontent</strong> +padding+border\u3002</p></li></ol><p>\u5728ie8+\u6D4F\u89C8\u5668\u4E2D\u4F7F\u7528\u54EA\u4E2A\u76D2\u6A21\u578B\u53EF\u4EE5\u7531<code>box-sizing\uFF08CSS\u65B0\u589E\u7684\u5C5E\u6027\uFF09</code>\u63A7\u5236\uFF0C<strong>\u9ED8\u8BA4\u503C\u4E3Acontent-box</strong>\uFF0C\u5373\u6807\u51C6\u76D2\u6A21\u578B\uFF1B\u5982\u679C\u5C06<code>box-sizing</code>\u8BBE\u4E3A<code>border-box</code>\u5219\u7528\u7684\u662FIE\u76D2\u6A21\u578B\u3002\u5982\u679C\u5728ie6\uFF0C7\uFF0C8\u4E2DDOCTYPE\u7F3A\u5931\u4F1A\u5C06\u76D2\u5B50\u6A21\u578B\u89E3\u91CA\u4E3AIE\u76D2\u5B50\u6A21\u578B\u3002\u82E5\u5728\u9875\u9762\u4E2D\u58F0\u660E\u4E86DOCTYPE\u7C7B\u578B\uFF0C\u6240\u6709\u7684\u6D4F\u89C8\u5668\u90FD\u4F1A\u628A\u76D2\u6A21\u578B\u89E3\u91CA\u4E3AW3C\u76D2\u6A21\u578B\u3002</p><p>\u76D2\u6A21\u578B\u90FD\u662F\u7531\u56DB\u4E2A\u90E8\u5206\u7EC4\u6210\u7684\uFF0C\u5206\u522B\u662F<code>margin</code>\u3001<code>border</code>\u3001<code>padding</code>\u548C<code>content</code>\u3002</p><p>\u6807\u51C6\u76D2\u6A21\u578B\u548CIE\u76D2\u6A21\u578B\u7684\u533A\u522B\u5728\u4E8E\u8BBE\u7F6E<code>width</code>\u548C<code>heigh</code>t\u65F6\uFF0C\u6240\u5BF9\u5E94\u7684\u8303\u56F4\u4E0D\u540C\u3002\u6807\u51C6\u76D2\u6A21\u578B\u7684<code>width</code>\u548C<code>height</code>\u5C5E\u6027\u7684\u8303\u56F4\u53EA\u5305\u542B\u4E86<code>content</code>\uFF0C\u800CIE\u76D2\u6A21\u578B\u7684<code>width</code>\u548C<code>height</code>\u5C5E\u6027\u7684\u8303\u56F4\u5305\u542B\u4E86<code>border</code>\u3001<code>padding</code>\u548C<code>content</code>\u3002</p><p>\u4E00\u822C\u6765\u8BF4\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4FEE\u6539\u5143\u7D20\u7684<code>box-sizing</code>\u5C5E\u6027\u6765\u6539\u53D8\u5143\u7D20\u7684\u76D2\u6A21\u578B\u3002</p>',8);function t(i,n){return c}var a=e(d,[["render",t]]);export{a as default};
