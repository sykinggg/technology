import{r as p,o as e,c as t,b as c,d as o,w as l,F as r,a as s,e as n}from"./app.6f963528.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const i={},m=s(`<h1 id="\u7C7B\u662F\u6709\u7528\u7684" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u662F\u6709\u7528\u7684" aria-hidden="true">#</a> \u7C7B\u662F\u6709\u7528\u7684</h1><p>\u4EE5\u4E0B\u7ED3\u6784\u5728\u5E94\u7528\u4E2D\u5F88\u5E38\u89C1\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> someProperty<span class="token punctuation">;</span>

  <span class="token comment">// \u4E00\u4E9B\u5176\u4ED6\u7684\u521D\u59CB\u5316\u4EE3\u7801</span>

  <span class="token keyword">function</span> <span class="token function">someMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u7528 someProperty \u505A\u4E00\u4E9B\u4E8B\u60C5</span>
    <span class="token comment">// \u53EF\u80FD\u6709\u5176\u4ED6\u5C5E\u6027</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u53EF\u80FD\u6709\u5176\u4ED6\u7684\u65B9\u6CD5</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    someMethod
    <span class="token comment">// \u53EF\u80FD\u6709\u5176\u4ED6\u65B9\u6CD5</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u5B83\u88AB\u79F0\u4E3A\u6A21\u5757\u6A21\u5F0F\uFF08\u5229\u7528 JavaScript \u7684\u95ED\u5305\uFF09\u3002</p>`,4),b=n("\u5982\u679C\u4F60\u4F7F\u7528"),k=n("\u6587\u4EF6\u6A21\u5757"),d=n("\uFF08\u4F60\u786E\u5B9E\u5E94\u8BE5\u5C06\u5168\u5C40\u53D8\u91CF\u89C6\u4E3A\u9519\u8BEF\uFF09\uFF0C\u6587\u4EF6\u4E2D\u7684\u4EE3\u7801\u4E0E\u793A\u4F8B\u4E00\u6837\uFF0C\u90FD\u4E0D\u662F\u5168\u5C40\u53D8\u91CF\u3002"),y=s(`<p>\u7136\u800C\uFF0C\u5F00\u53D1\u8005\u6709\u65F6\u4F1A\u5199\u4EE5\u4E0B\u7C7B\u4F3C\u4EE3\u7801\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> someProperty<span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u4E00\u4E9B\u521D\u59CB\u5316\u4EE3\u7801</span>
<span class="token punctuation">}</span>

<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
someProperty <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span> <span class="token comment">// \u5176\u4ED6\u521D\u59CB\u5316\u4EE3\u7801</span>

<span class="token comment">// \u4E00\u4E9B\u5176\u5B83\u672A\u5BFC\u51FA</span>

<span class="token comment">// later</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">someMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u5C3D\u7BA1\u6211\u5E76\u4E0D\u662F\u4E00\u4E2A\u7279\u522B\u559C\u6B22\u4F7F\u7528<strong>\u7EE7\u627F</strong>\u7684\u4EBA\uFF0C\u4F46\u662F\u6211\u786E\u5B9E\u53D1\u73B0\u8BA9\u5F00\u53D1\u8005\u4F7F\u7528\u7C7B\uFF0C\u53EF\u4EE5\u5728\u4E00\u5B9A\u7A0B\u5EA6\u4E0A\u66F4\u597D\u7684\u7EC4\u7EC7\u4ED6\u4EEC\u7684\u4EE3\u7801\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> someProperty<span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u4E00\u4E9B\u521D\u59CB\u5316\u5185\u5BB9</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token function">someMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ..code</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token function">someUtility</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// .. code</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>\u8FD9\u5E76\u4E0D\u4EC5\u4EC5\u6709\u5229\u4E8E\u5F00\u53D1\u8005\uFF0C\u5728\u521B\u5EFA\u57FA\u4E8E\u7C7B\u7684\u66F4\u51FA\u8272\u53EF\u89C6\u5316\u5DE5\u5177\u4E2D\uFF0C\u5B83\u66F4\u5E38\u89C1\u3002\u5E76\u4E14\uFF0C\u8FD9\u6709\u5229\u4E8E\u9879\u76EE\u7684\u7406\u89E3\u548C\u7EF4\u62A4\u3002</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u5728\u6D45\u5C42\u6B21\u7684\u7ED3\u6784\u4E2D\uFF0C\u5982\u679C\u5B83\u4EEC\u80FD\u591F\u63D0\u4F9B\u660E\u663E\u7684\u91CD\u590D\u4F7F\u7528\u548C\u51CF\u5C11\u6A21\u7248\u7684\u597D\u5904\uFF0C\u90A3\u4E48\u5728\u8FD9\u4E2A\u89C2\u70B9\u91CC\uFF0C\u6211\u5E76\u6CA1\u6709\u9519\u8BEF\u3002</p></div>`,6);function f(_,h){const a=p("RouterLink");return e(),t(r,null,[m,c("p",null,[b,o(a,{to:"/ts/project/modules.html#%E6%96%87%E4%BB%B6%E6%A8%A1%E5%9D%97"},{default:l(()=>[k]),_:1}),d]),y],64)}var g=u(i,[["render",f]]);export{g as default};
