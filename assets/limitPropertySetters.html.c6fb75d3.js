import{a as n}from"./app.b05da4ec.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="\u51CF\u5C11-setter-\u5C5E\u6027\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u51CF\u5C11-setter-\u5C5E\u6027\u7684\u4F7F\u7528" aria-hidden="true">#</a> \u51CF\u5C11 setter \u5C5E\u6027\u7684\u4F7F\u7528</h1><p>\u503E\u5411\u4E8E\u4F7F\u7528\u66F4\u7CBE\u786E\u7684 <code>set/get</code> \u51FD\u6570\uFF08\u5982 <code>setBar</code>, <code>getBar</code>\uFF09\uFF0C\u51CF\u5C11\u4F7F\u7528 <code>setter/getter</code>\uFF1B</p><p>\u8003\u8651\u4EE5\u4E0B\u4EE3\u7801\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>foo<span class="token punctuation">.</span>bar <span class="token operator">=</span> <span class="token punctuation">{</span>
  a<span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
  b<span class="token operator">:</span> <span class="token number">456</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u5B58\u5728 <code>setter/getter</code> \u65F6\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  b<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token keyword">set</span> <span class="token function">bar</span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token punctuation">{</span> a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> b<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>a <span class="token operator">=</span> value<span class="token punctuation">.</span>a<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>b <span class="token operator">=</span> value<span class="token punctuation">.</span>b<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> foo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u8FD9\u5E76\u4E0D\u662F <code>setter</code> \u7684\u4E00\u4E2A\u597D\u7684\u4F7F\u7528\u573A\u666F\uFF0C\u5F53\u5F00\u53D1\u4EBA\u5458\u9605\u8BFB\u7B2C\u4E00\u6BB5\u4EE3\u7801\u65F6\uFF0C\u4E0D\u77E5\u9053\u5C06\u8981\u66F4\u6539\u7684\u6240\u6709\u5185\u5BB9\u7684\u4E0A\u4E0B\u6587\u3002\u7136\u800C\uFF0C\u5F53\u5F00\u53D1\u8005\u4F7F\u7528 <code>foo.setBar(value)</code>\uFF0C\u4ED6\u53EF\u80FD\u4F1A\u610F\u8BC6\u5230\u5728 <code>foo</code> \u91CC\u53EF\u80FD\u4F1A\u5F15\u8D77\u4E00\u4E9B\u6539\u53D8\u3002</p>`,7);function p(t,o){return e}var l=s(a,[["render",p]]);export{l as default};
