import{a as s}from"./app.ba47fc91.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const n={},t=s(`<h2 id="\u8C08\u8C08src\u548Chref\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u8C08\u8C08src\u548Chref\u7684\u533A\u522B" aria-hidden="true">#</a> <strong>\u8C08\u8C08src\u548Chref\u7684\u533A\u522B</strong></h2><p>src\u548Chref\u90FD\u662F\u7528\u4E8E\u5916\u90E8\u8D44\u6E90\u7684\u5F15\u5165\uFF0C src\u4E00\u822C\u5F15\u5165js\u6587\u4EF6\uFF0C \u56FE\u7247\u6587\u4EF6\uFF0Chref\u4E00\u822C\u94FE\u63A5css\u8D44\u6E90\u6587\u4EF6\uFF0C\u7F51\u9875\u8D44\u6E90\u6587\u4EF6\u3002\u8FD9\u91CC\u7ED9\u51FA\u51E0\u4E2A\u4F7F\u7528\u5F97\u4F8B\u5B50\uFF1A</p><ul><li><p>\u5F15\u7528js\u6587\u4EF6\u65F6\uFF1Asrc=&quot;myscript.js&quot;</p></li><li><p>\u5F15\u7528\u56FE\u7247\uFF1Asrc=&quot;mypic.jpg&quot;</p></li><li><p>\u5F15\u7528css\u6587\u4EF6\u65F6\uFF1Ahref=&quot;cssfile.css&quot;</p></li><li><p>\u7F51\u7AD9\u94FE\u63A5\uFF1Ahref=&quot;http://www.webpage.com&quot;</p></li></ul><blockquote><p><code>src\u7528\u4E8E\u66FF\u4EE3\u8FD9\u4E2A\u5143\u7D20\uFF0C\u800Chref\u7528\u4E8E\u5EFA\u7ACB\u8FD9\u4E2A\u6807\u7B7E\u4E0E\u5916\u90E8\u8D44\u6E90\u4E4B\u95F4\u7684\u5173\u7CFB</code>\u3002</p></blockquote><p>\u4F8B\u5982\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>www.xxx.com<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1.jpg<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>  
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><code>a</code> \u6807\u7B7E\u91CC\u9762\u7684\u5185\u5BB9\u662F\u4E00\u5F20\u56FE\u7247\uFF0C<code>a</code>\u6807\u7B7E\u52A0\u4E0Ahref\u5C5E\u6027\u5C06\u56FE\u7247\u94FE\u63A5\u5230\u4E86<code>www.xxx.com</code>\u8FD9\u4E2A\u7F51\u7AD9\uFF0C\u4F46\u5E76\u672A\u66FF\u6362<code>a</code>\u6807\u7B7E\u91CC\u9762\u7684\u5185\u5BB9\u3002</p><p>\u800Cimg\u6807\u7B7E\u7684src\u5C5E\u6027\u5219\u662F\u5C06\u8FD9\u4E2A\u6807\u7B7E\u5B8C\u5168\u66FF\u6362\u6210\u4E86src\u91CC\u9762\u7684\u8D44\u6E90\u3002</p><p><strong>href (Hypertext Reference) \u8D85\u6587\u672C\u5F15\u7528</strong></p><p>href\u8FD9\u4E2A\u5C5E\u6027\u6307\u5B9Aweb\u8D44\u6E90\u7684\u4F4D\u7F6E\uFF0C\u4ECE\u800C\u5B9A\u4E49\u5F53\u524D\u5143\u7D20\uFF08\u5982\u951A\u70B9a\uFF09\u6216\u5F53\u524D\u6587\u6863\uFF08\u5982\u94FE\u63A5\uFF09\u4E0E\u76EE\u6807\u951A\u70B9\u6216\u76EE\u6807\u8D44\u6E90\u4E4B\u95F4\u7684\u8054\u7CFB\u3002\u4F8B\u5982\u5F53\u5199\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>style.css<span class="token punctuation">&quot;</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u6D4F\u89C8\u5668\u77E5\u9053\u8FD9\u662F\u4E2A\u6837\u5F0F\u8868\u6587\u4EF6\uFF0C<strong>html\u9875\u9762\u7684\u89E3\u6790\u548C\u6E32\u67D3\u4E0D\u4F1A\u6682\u505C\uFF0Ccss\u6587\u4EF6\u7684\u52A0\u8F7D\u662F\u540C\u65F6\u8FDB\u884C\u7684</strong>\uFF0C\u7528@import\u6DFB\u52A0\u7684\u6837\u5F0F\u662F\u5728\u9875\u9762\u8F7D\u5165\u4E4B\u540E\u518D\u52A0\u8F7D\uFF0C\u8FD9\u53EF\u80FD\u4F1A\u5BFC\u81F4\u9875\u9762\u56E0\u91CD\u65B0\u6E32\u67D3\u800C\u95EA\u70C1\u3002\u6240\u4EE5\u5EFA\u8BAE\u4F7F\u7528link\u800C\u4E0D\u662F@import\u3002</p><h2 id="src-source-\u6E90" tabindex="-1"><a class="header-anchor" href="#src-source-\u6E90" aria-hidden="true">#</a> <strong>src (Source)\u6E90</strong></h2><p>\u8FD9\u4E2A\u5C5E\u6027\u662F\u5C06\u8D44\u6E90\u5D4C\u5165\u5230\u5F53\u524D\u6587\u6863\u4E2D\u5143\u7D20\u6240\u5728\u7684\u4F4D\u7F6E\u3002\u4F8B\u5982\u5F53\u5199\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>script.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5F53\u6D4F\u89C8\u5668\u89E3\u6790\u5230\u8FD9\u53E5\u4EE3\u7801\u65F6\uFF0C<strong>html\u9875\u9762\u7684\u52A0\u8F7D\u548C\u89E3\u6790\u90FD\u4F1A\u6682\u505C\uFF0C\u76F4\u5230\u6D4F\u89C8\u5668\u52A0\u8F7D\u3001\u7F16\u8BD1\u3001\u6267\u884C\u5B8C\u6BD5js\u6587\u4EF6</strong>\u3002\u8FD9\u5C31\u50CF\u662F\u628Ajs\u6587\u4EF6\u91CC\u7684\u5185\u5BB9\u5168\u90E8\u6CE8\u5165\u5230\u8FD9\u4E2Ascript\u6807\u7B7E\u4E2D\uFF0C\u7C7B\u4F3C\u4E8Eimg\uFF0Cimg\u6807\u7B7E\u662F\u4E00\u4E2A\u7A7A\u6807\u7B7E\uFF0C\u5B83\u7684\u5185\u5BB9\u5C31\u662F\u7531src\u8FD9\u4E2A\u5C5E\u6027\u5B9A\u4E49\uFF0C\u6D4F\u89C8\u5668\u4F1A\u6682\u505C\u52A0\u8F7D\u76F4\u5230\u8FD9\u4E2A\u56FE\u7247\u52A0\u8F7D\u5B8C\u6210\uFF0C<code>iframe</code>\u6807\u7B7E\u4E5F\u6709\u8FD9\u6837\u8FD9\u6837\u5F97\u7279\u6027\u3002</p><p>\u8FD9\u4E5F\u662F\u4E3A\u4EC0\u4E48\u8981\u5C06js\u6587\u4EF6\u7684\u52A0\u8F7D\u653E\u5728body\u6700\u540E\u7684\u539F\u56E0\uFF08 \u5728<code>&lt;body&gt;</code>\u524D\u9762 \uFF09</p>`,17);function e(p,c){return t}var r=a(n,[["render",e]]);export{r as default};
