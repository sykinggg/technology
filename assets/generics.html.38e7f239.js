import{a as n}from"./app.6f963528.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="\u6CDB\u578B" tabindex="-1"><a class="header-anchor" href="#\u6CDB\u578B" aria-hidden="true">#</a> \u6CDB\u578B</h1><h2 id="\u901A\u8FC7\u63A5\u53E3-a-t-\u4E3A\u4EC0\u4E48-a-string-\u53EF\u8D4B\u503C\u7ED9-a-number" tabindex="-1"><a class="header-anchor" href="#\u901A\u8FC7\u63A5\u53E3-a-t-\u4E3A\u4EC0\u4E48-a-string-\u53EF\u8D4B\u503C\u7ED9-a-number" aria-hidden="true">#</a> \u901A\u8FC7\u63A5\u53E3 <code>A&lt;T&gt;</code>\uFF0C\u4E3A\u4EC0\u4E48 <code>A&lt;string&gt;</code> \u53EF\u8D4B\u503C\u7ED9 <code>A&lt;number&gt;</code>\uFF1F</h2><blockquote><p>\u6211\u5199\u4E0B\u8FD9\u6BB5\u4EE3\u7801\uFF0C\u8BA9\u5B83\u629B\u51FA\u4E00\u4E2A\u9519\u8BEF\u3002</p></blockquote><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Something<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> x<span class="token operator">:</span> Something<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> y<span class="token operator">:</span> Something<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token comment">// Expected error: Can&#39;t convert Something&lt;number&gt; to Something&lt;string&gt;!</span>
x <span class="token operator">=</span> y<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><code>TypeScript</code> \u4F7F\u7528\u4E86\u4E00\u79CD\u7ED3\u6784\u7C7B\u578B\u7684\u7CFB\u7EDF\u3002\u5F53\u5224\u65AD <code>Something&lt;number&gt;</code> \u548C <code>Something&lt;string&gt;</code> \u517C\u5BB9\u6027\u7684\u65F6\u5019\uFF0C\u4F1A\u68C0\u67E5\u6BCF\u4E00\u4E2A\u6210\u5458\u7684\u6BCF\u4E00\u4E2A\u5C5E\u6027\uFF0C\u5982\u679C\u7C7B\u578B\u7684\u6BCF\u4E2A\u6210\u5458\u90FD\u662F\u517C\u5BB9\u7684\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u7C7B\u578B\u4E5F\u662F\u517C\u5BB9\u7684\u3002\u56E0\u4E3A <code>Something&lt;T&gt;</code> \u6CA1\u6709\u5728\u4EFB\u4F55\u6210\u5458\u4E2D\u4F7F\u7528 <code>T</code>\uFF0C\u6240\u4EE5 <code>T</code> \u662F\u4EC0\u4E48\u7C7B\u578B\u5E76\u4E0D\u91CD\u8981\u3002</p><p>\u901A\u5E38\uFF0C\u4F60\u7EDD\u4E0D\u5E94\u8BE5\u6709\u672A\u4F7F\u7528\u7C7B\u578B\u7684\u53C2\u6570\u3002\u8BE5\u7C7B\u578B\u4F1A\u6709\u65E0\u6CD5\u9884\u6599\u7684\u517C\u5BB9\u6027\uFF08\u5982\u4E0A\u6240\u793A\uFF09\uFF0C\u540C\u65F6\u5728\u51FD\u6570\u8C03\u7528\u4E2D\u4E5F\u65E0\u6CD5\u83B7\u53D6\u6B63\u786E\u7684\u6CDB\u578B\u7C7B\u578B\u63A5\u53E3\u3002</p><h2 id="\u4E3A\u4EC0\u4E48\u7C7B\u578B\u63A5\u53E3\u4E0D\u80FD\u5728\u8FD9\u4E2A\u63A5\u53E3\u4E0A\u8FD0\u884C-interface-foo-t" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u7C7B\u578B\u63A5\u53E3\u4E0D\u80FD\u5728\u8FD9\u4E2A\u63A5\u53E3\u4E0A\u8FD0\u884C-interface-foo-t" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u7C7B\u578B\u63A5\u53E3\u4E0D\u80FD\u5728\u8FD9\u4E2A\u63A5\u53E3\u4E0A\u8FD0\u884C: <code>interface Foo&lt;T&gt; { }</code>?</h2><blockquote><p>\u6211\u5199\u4E86\u4E00\u4E9B\u8FD9\u6837\u7684\u4EE3\u7801</p></blockquote><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Named<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">MyNamed<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token keyword">implements</span> <span class="token class-name">Named<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;mine&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">findByName</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>x<span class="token operator">:</span> Named<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>
  <span class="token comment">// TODO: Implement</span>
  <span class="token keyword">return</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> x<span class="token operator">:</span> MyNamed<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> y <span class="token operator">=</span> <span class="token function">findByName</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// expected y: string, got y: {}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p><code>TypeScript</code> \u4F7F\u7528\u4E86\u4E00\u79CD\u7ED3\u6784\u7C7B\u578B\u7684\u7CFB\u7EDF\u3002\u8FD9\u79CD\u7ED3\u6784\u6027\u4E5F\u9002\u7528\u4E8E\u6CDB\u578B\u7C7B\u578B\u63A5\u53E3\u3002\u5F53\u5728\u51FD\u6570\u8C03\u7528\u4E2D\u63A8\u65AD <code>T</code> \u7684\u7C7B\u578B\u65F6\uFF0C\u8BD5\u56FE\u5728 <code>x</code> \u53C2\u6570\u4E0A\u627E\u5230 <code>T</code> \u7C7B\u578B\u7684\u6210\u5458\uFF0C\u4ECE\u800C\u5224\u65AD <code>T</code> \u5E94\u8BE5\u662F\u4EC0\u4E48\u3002\u56E0\u4E3A\u6CA1\u6709\u4F7F\u7528 <code>T</code> \u7684\u6210\u5458\uFF0C\u6240\u4EE5\u6CA1\u6709\u4EC0\u4E48\u53EF\u63A8\u65AD\u7684\uFF0C\u4E8E\u662F\u8FD4\u56DE <code>{}</code>\u3002</p><p>\u8BF7\u6CE8\u610F\uFF0C\u5982\u679C\u4F60\u4F7F\u7528 <code>T</code>\uFF0C\u4F60\u5C31\u4F1A\u5F97\u5230\u6B63\u786E\u7684\u7ED3\u679C\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Named<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  value<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span> <span class="token comment">// &lt;-- added</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">MyNamed<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token keyword">implements</span> <span class="token class-name">Named<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;mine&#39;</span><span class="token punctuation">;</span>
  value<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span> <span class="token comment">// &lt;-- added</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">findByName</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>x<span class="token operator">:</span> Named<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>
  <span class="token comment">// TODO: Implement</span>
  <span class="token keyword">return</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> x<span class="token operator">:</span> MyNamed<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> y <span class="token operator">=</span> <span class="token function">findByName</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// got y: string;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u8BB0\u4F4F\uFF1A\u4F60\u7EDD\u4E0D\u5E94\u8BE5\u6709\u672A\u4F7F\u7528\u7C7B\u578B\u7684\u53C2\u6570\uFF01\u8BF7\u770B\u524D\u4E00\u4E2A\u95EE\u9898\uFF0C\u4E86\u89E3\u4E3A\u4EC0\u4E48\u8FD9\u6837\u4E0D\u597D\u3002</p><h2 id="\u4E3A\u4EC0\u4E48\u4E0D\u8981\u5728\u6CDB\u578B\u51FD\u6570\u4E2D\u5199-typeof-t\u3001new-t-\u6216\u8005-instanceof-t" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u4E0D\u8981\u5728\u6CDB\u578B\u51FD\u6570\u4E2D\u5199-typeof-t\u3001new-t-\u6216\u8005-instanceof-t" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u4E0D\u8981\u5728\u6CDB\u578B\u51FD\u6570\u4E2D\u5199 <code>typeof T</code>\u3001<code>new T</code>, \u6216\u8005 <code>instanceof T</code>\uFF1F</h2><blockquote><p>\u6211\u5199\u4E86\u4E00\u4E9B\u8FD9\u6837\u7684\u4EE3\u7801</p></blockquote><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">doSomething</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Can&#39;t find name T?</span>
  <span class="token keyword">let</span> xType <span class="token operator">=</span> <span class="token keyword">typeof</span> <span class="token constant">T</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> y <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">xType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// Same here?</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>someVar <span class="token keyword">instanceof</span> <span class="token class-name"><span class="token keyword">typeof</span></span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token punctuation">}</span>
  <span class="token comment">// How do I instantiate?</span>
  <span class="token keyword">let</span> z <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">T</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u6CDB\u578B\u5728\u7F16\u8BD1\u671F\u95F4\u88AB\u5220\u9664\uFF0C\u8FD9\u610F\u5473\u7740\u5728 <code>doSomething</code> \u8FD0\u884C\u65F6\u6CA1\u6709\u503C\u4E3A <code>T</code> \u3002\u8FD9\u91CC\u4EBA\u4EEC\u8BD5\u56FE\u8868\u8FBE\u7684\u6B63\u5E38\u6A21\u5F0F\u662F\u5C06\u7C7B\u7684\u6784\u9020\u51FD\u6570\u7528\u4E8E\u5DE5\u5382\u6216\u8FD0\u884C\u65F6\u7C7B\u578B\u68C0\u67E5\u3002\u3002\u5728\u8FD9\u4E24\u79CD\u60C5\u51B5\u4E0B\uFF0C\u4F7F\u7528\u6784\u9020\u7B7E\u540D\u5E76\u5C06\u5176\u4F5C\u4E3A\u53C2\u6570\u63D0\u4F9B\u662F\u6B63\u786E\u7684\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">create</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>ctor<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token keyword">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ctor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> c <span class="token operator">=</span> <span class="token function">create</span><span class="token punctuation">(</span>MyClass<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// c: MyClass</span>

<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">isReallyInstanceOf</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>ctor<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token keyword">new</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> obj<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> obj <span class="token keyword">instanceof</span> <span class="token class-name">ctor</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,18);function e(t,o){return p}var r=s(a,[["render",e]]);export{r as default};
