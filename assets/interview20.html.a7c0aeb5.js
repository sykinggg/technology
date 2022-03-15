import{a as c}from"./app.ba47fc91.js";import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";const o={},d=c("<p>js \u653E\u5728 <code>&lt;head&gt;</code> \u4E2D\uFF0C\u5982\u679C\u4E0D\u6DFB\u52A0 <code>async</code> \u6216\u8005 <code>defer</code> \u65F6\uFF0C\u5F53\u6D4F\u89C8\u5668\u9047\u5230 <code>script</code> \u65F6\uFF0C\u4F1A\u963B\u585E DOM \u6811\u7684\u6784\u5EFA\uFF0C\u8FDB\u800C\u5F71\u54CD\u9875\u9762\u7684\u52A0\u8F7D\u3002\u5F53 js \u6587\u4EF6\u8F83\u591A\u65F6\uFF0C\u9875\u9762\u767D\u5C4F\u7684\u65F6\u95F4\u4E5F\u4F1A\u53D8\u957F\u3002</p><blockquote><p>\u5728\u8FD9\u4E2A\u8FC7\u7A0B\u4E2D\uFF0C\u5982\u679C\u89E3\u6790\u5668\u9047\u5230\u4E86\u4E00\u4E2A\u811A\u672C(<code>script</code>)\uFF0C\u5B83\u5C31\u4F1A\u505C\u4E0B\u6765\uFF0C\u5E76\u4E14\u6267\u884C\u8FD9\u4E2A\u811A\u672C\uFF0C\u7136\u540E\u624D\u4F1A\u7EE7\u7EED\u89E3\u6790 HTML\u3002\u5982\u679C\u9047\u5230\u4E86\u4E00\u4E2A\u5F15\u7528\u5916\u90E8\u8D44\u6E90\u7684\u811A\u672C(<code>script</code>)\uFF0C\u5B83\u5C31\u5FC5\u987B\u505C\u4E0B\u6765\u7B49\u5F85\u8FD9\u4E2A\u811A\u672C\u8D44\u6E90\u7684\u4E0B\u8F7D\uFF0C\u800C\u8FD9\u4E2A\u884C\u4E3A\u4F1A\u5BFC\u81F4\u4E00\u4E2A\u6216\u8005\u591A\u4E2A\u7684\u7F51\u7EDC\u5F80\u8FD4\uFF0C\u5E76\u4E14\u4F1A\u5EF6\u8FDF\u9875\u9762\u7684\u9996\u6B21\u6E32\u67D3\u65F6\u95F4\u3002</p></blockquote><p>\u628A js \u653E\u5230 <code>&lt;body&gt;</code> \u91CC\uFF08\u4E00\u822C\u5728 <code>&lt;/body&gt;</code> \u7684\u4E0A\u9762\uFF09\u65F6\uFF0C\u7531\u4E8E DOM \u65F6\u987A\u5E8F\u89E3\u6790\u7684\uFF0C\u56E0\u6B64 js \u4E0D\u4F1A\u963B\u585E DOM \u7684\u89E3\u6790\u3002\u5BF9\u4E8E\u5FC5\u987B\u8981\u5728 DOM \u89E3\u6790\u524D\u5C31\u8981\u52A0\u8F7D\u7684 js\uFF0C\u9700\u8981\u653E\u5728 <code>&lt;head&gt;</code> \u4E2D\u3002</p><p>\u8BF4\u5230 <code>&lt;script&gt;</code> \u6807\u7B7E\uFF0C\u90A3\u4E48\u5B83\u662F\u5177\u6709\u4E24\u4E2A\u5C5E\u6027\u7684\u3002<code>async</code> \u5F02\u6B65\u52A0\u8F7D \u548C <code>defer</code> \u5EF6\u8FDF\u52A0\u8F7D\u3002</p><p><strong><code>&lt;script&gt;</code></strong></p><p>\u5F53 <code>script</code> \u6807\u7B7E \u653E\u5728 <code>head</code> \u4E2D\uFF0C\u5E76\u4E14\u8FD9\u4E2A <code>script</code> \u6807\u7B7E\u53EA\u6709 <code>src</code> \u5C5E\u6027\u5F15\u5165\u5916\u90E8 js \u6587\u4EF6\u7684\u60C5\u51B5\u4E0B\uFF0Chtml \u6587\u4EF6\u5F00\u59CB\u6E32\u67D3\uFF0C\u76F4\u5230\u547D\u4E2D <code>script</code> \u6807\u7B7E\uFF0C\u6B64\u65F6\u89E3\u6790\u5C06\u505C\u6B62\uFF0C\u5E76\u53D1\u51FA\u4E00\u4E2A\u8BF7\u6C42\u83B7\u53D6\u8BE5\u6587\u4EF6\u5E76\u6267\u884C\u3002\u6267\u884C\u7ED3\u675F\u4E4B\u540E\u7EE7\u7EED\u6E32\u67D3 html \u6807\u7B7E\u3002</p><p><strong><code>&lt;script async&gt;</code></strong></p><p>\u4F7F\u7528 <code>async</code> \u4F1A\u5728 html \u89E3\u6790\u671F\u95F4\u4E0B\u8F7D\u6587\u4EF6\uFF0C\u5E76\u5728\u4E0B\u8F7D\u5B8C\u6210\u540E\u6682\u505C html \u7684\u89E3\u6790\uFF0C\u6267\u884C\u4E0B\u8F7D\u7684\u5916\u90E8 js \u6587\u4EF6\u3002\u76F4\u63A5\u540E\u7EE7\u7EED\u89E3\u6790 html</p><p><strong><code>&lt;script defer&gt;</code></strong></p><p>\u5B83\u548C <code>async</code> \u7684\u533A\u522B\u662F\uFF0C\u540C\u6837\u5728 html \u89E3\u6790\u671F\u95F4\u4E0B\u8F7D\u5916\u90E8\u7684 js \u6587\u4EF6\uFF0C\u4F46\u662F\u4E0B\u8F7D\u5B8C\u6210\u540E\u4E0D\u4F1A\u7ACB\u5373\u6267\u884C js \u811A\u672C\u6587\u4EF6\uFF0C\u800C\u662F\u7B49\u5230 html \u89E3\u6790\u5B8C\u6210\u540E\u624D\u6267\u884C\u5B83\u3002 \u5373\u5728 <code>DOMContentLoaded</code> \u4E4B\u95F4\u6267\u884C\u5DF2\u4E0B\u8F7D\u7684 \u5916\u90E8 js \u6587\u4EF6\u3002</p><p><strong>\u4F7F\u7528 <code>async</code> \u6216 <code>defer</code></strong></p><ul><li><p>\u5982\u679C <code>script</code> \u662F\u6A21\u5757\u5316\uFF0C\u5E76\u4E14\u4E0D\u4F9D\u8D56\u4E8E\u4EFB\u4F55\u811A\u672C\uFF0C\u90A3\u4E48\u4F7F\u7528 <code>async</code></p></li><li><p>\u5982\u679C\u811A\u672C\u4F9D\u8D56\u4E8E\u6216\u8005\u88AB\u53E6\u4E00\u4E2A\u811A\u672C\u4F9D\u8D56\uFF0C\u90A3\u4E48\u4F7F\u7528<code>defe</code></p></li></ul>",12);function t(s,p){return d}var l=e(o,[["render",t]]);export{l as default};
