import{a as n}from"./app.b05da4ec.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h3 id="\u3010\u8FDB\u96362-1\u671F\u3011\u6DF1\u5165\u6D45\u51FA\u56FE\u89E3\u4F5C\u7528\u57DF\u94FE\u548C\u95ED\u5305" tabindex="-1"><a class="header-anchor" href="#\u3010\u8FDB\u96362-1\u671F\u3011\u6DF1\u5165\u6D45\u51FA\u56FE\u89E3\u4F5C\u7528\u57DF\u94FE\u548C\u95ED\u5305" aria-hidden="true">#</a> \u3010\u8FDB\u96362-1\u671F\u3011\u6DF1\u5165\u6D45\u51FA\u56FE\u89E3\u4F5C\u7528\u57DF\u94FE\u548C\u95ED\u5305</h3><h2 id="\u57FA\u672C\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u6982\u5FF5" aria-hidden="true">#</a> <strong>\u57FA\u672C\u6982\u5FF5</strong></h2><p>\u7EA2\u5B9D\u4E66(p178)\u4E0A\u5BF9\u4E8E\u95ED\u5305\u7684\u5B9A\u4E49\uFF1A<code>\u95ED\u5305\u662F\u6307\u6709\u6743\u8BBF\u95EE\u53E6\u5916\u4E00\u4E2A\u51FD\u6570\u4F5C\u7528\u57DF\u4E2D\u7684\u53D8\u91CF\u7684\u51FD\u6570</code></p><p>\u5173\u952E\u5728\u4E8E\u4E0B\u9762\u4E24\u70B9\uFF1A</p><ul><li><p>\u662F\u4E00\u4E2A\u51FD\u6570</p></li><li><p>\u80FD\u8BBF\u95EE\u53E6\u5916\u4E00\u4E2A\u51FD\u6570\u4F5C\u7528\u57DF\u4E2D\u7684\u53D8\u91CF</p></li></ul><p>\u5BF9\u4E8E\u95ED\u5305\u6709\u4E0B\u9762\u4E09\u4E2A\u7279\u6027\uFF1A</p><ul><li>1\u3001\u95ED\u5305\u53EF\u4EE5\u8BBF\u95EE\u5F53\u524D\u51FD\u6570\u4EE5\u5916\u7684\u53D8\u91CF</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getOuter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> date <span class="token operator">=</span> <span class="token string">&#39;815&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token function">getDate</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str <span class="token operator">+</span> date<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//\u8BBF\u95EE\u5916\u90E8\u7684date</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token function">getDate</span><span class="token punctuation">(</span><span class="token string">&#39;\u4ECA\u5929\u662F\uFF1A&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//&quot;\u4ECA\u5929\u662F\uFF1A815&quot;</span>
<span class="token punctuation">}</span>
<span class="token function">getOuter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul><li>2\u3001\u5373\u4F7F\u5916\u90E8\u51FD\u6570\u5DF2\u7ECF\u8FD4\u56DE\uFF0C\u95ED\u5305\u4ECD\u80FD\u8BBF\u95EE\u5916\u90E8\u51FD\u6570\u5B9A\u4E49\u7684\u53D8\u91CF</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getOuter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">var</span> date <span class="token operator">=</span> <span class="token string">&#39;815&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">function</span> <span class="token function">getDate</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str <span class="token operator">+</span> date<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//\u8BBF\u95EE\u5916\u90E8\u7684date</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> getDate<span class="token punctuation">;</span>     <span class="token comment">//\u5916\u90E8\u51FD\u6570\u8FD4\u56DE</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> today <span class="token operator">=</span> <span class="token function">getOuter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">today</span><span class="token punctuation">(</span><span class="token string">&#39;\u4ECA\u5929\u662F\uFF1A&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//&quot;\u4ECA\u5929\u662F\uFF1A815&quot;</span>
<span class="token function">today</span><span class="token punctuation">(</span><span class="token string">&#39;\u660E\u5929\u4E0D\u662F\uFF1A&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//&quot;\u660E\u5929\u4E0D\u662F\uFF1A815&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ul><li>3\u3001\u95ED\u5305\u53EF\u4EE5\u66F4\u65B0\u5916\u90E8\u53D8\u91CF\u7684\u503C</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">updateCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">var</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">function</span> <span class="token function">getCount</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    count <span class="token operator">=</span> val<span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> getCount<span class="token punctuation">;</span>     <span class="token comment">//\u5916\u90E8\u51FD\u6570\u8FD4\u56DE</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> count <span class="token operator">=</span> <span class="token function">updateCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">count</span><span class="token punctuation">(</span><span class="token number">815</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//815</span>
<span class="token function">count</span><span class="token punctuation">(</span><span class="token number">816</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//816</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="\u4F5C\u7528\u57DF\u94FE" tabindex="-1"><a class="header-anchor" href="#\u4F5C\u7528\u57DF\u94FE" aria-hidden="true">#</a> <strong>\u4F5C\u7528\u57DF\u94FE</strong></h2><p>Javascript\u4E2D\u6709\u4E00\u4E2A\u6267\u884C\u4E0A\u4E0B\u6587(execution context)\u7684\u6982\u5FF5\uFF0C\u5B83\u5B9A\u4E49\u4E86\u53D8\u91CF\u6216\u51FD\u6570\u6709\u6743\u8BBF\u95EE\u7684\u5176\u5B83\u6570\u636E\uFF0C\u51B3\u5B9A\u4E86\u4ED6\u4EEC\u5404\u81EA\u7684\u884C\u4E3A\u3002\u6BCF\u4E2A\u6267\u884C\u73AF\u5883\u90FD\u6709\u4E00\u4E2A\u4E0E\u4E4B\u5173\u8054\u7684\u53D8\u91CF\u5BF9\u8C61\uFF0C\u73AF\u5883\u4E2D\u5B9A\u4E49\u7684\u6240\u6709\u53D8\u91CF\u548C\u51FD\u6570\u90FD\u4FDD\u5B58\u5728\u8FD9\u4E2A\u5BF9\u8C61\u4E2D\u3002</p><p>**\u4F5C\u7528\u57DF\u94FE\uFF1A**\u5F53\u8BBF\u95EE\u4E00\u4E2A\u53D8\u91CF\u65F6\uFF0C\u89E3\u91CA\u5668\u4F1A\u9996\u5148\u5728\u5F53\u524D\u4F5C\u7528\u57DF\u67E5\u627E\u6807\u793A\u7B26\uFF0C\u5982\u679C\u6CA1\u6709\u627E\u5230\uFF0C\u5C31\u53BB\u7236\u4F5C\u7528\u57DF\u627E\uFF0C\u76F4\u5230\u627E\u5230\u8BE5\u53D8\u91CF\u7684\u6807\u793A\u7B26\u6216\u8005\u4E0D\u5728\u7236\u4F5C\u7528\u57DF\u4E2D\uFF0C\u8FD9\u5C31\u662F\u4F5C\u7528\u57DF\u94FE\u3002</p><p>\u4F5C\u7528\u57DF\u94FE\u548C\u539F\u578B\u7EE7\u627F\u67E5\u627E\u65F6\u7684\u533A\u522B\uFF1A\u5982\u679C\u53BB\u67E5\u627E\u4E00\u4E2A\u666E\u901A\u5BF9\u8C61\u7684\u5C5E\u6027\uFF0C\u4F46\u662F\u5728\u5F53\u524D\u5BF9\u8C61\u548C\u5176\u539F\u578B\u4E2D\u90FD\u627E\u4E0D\u5230\u65F6\uFF0C\u4F1A\u8FD4\u56DEundefined\uFF1B\u4F46\u67E5\u627E\u7684\u5C5E\u6027\u5728\u4F5C\u7528\u57DF\u94FE\u4E2D\u4E0D\u5B58\u5728\u7684\u8BDD\u5C31\u4F1A\u629B\u51FA<strong>ReferenceError</strong>\u3002</p><p>\u4F5C\u7528\u57DF\u94FE\u7684\u9876\u7AEF\u662F\u5168\u5C40\u5BF9\u8C61\uFF0C\u5728\u5168\u5C40\u73AF\u5883\u4E2D\u5B9A\u4E49\u7684\u53D8\u91CF\u5C31\u4F1A\u7ED1\u5B9A\u5230\u5168\u5C40\u5BF9\u8C61\u4E2D\u3002</p><h2 id="\u5168\u5C40\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u73AF\u5883" aria-hidden="true">#</a> <strong>\u5168\u5C40\u73AF\u5883</strong></h2><div size="1">**\u65E0\u5D4C\u5957\u7684\u51FD\u6570**</div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// my_script.js</span>
<span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> bar <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">myFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  
    <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;inside myFunc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;outside&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">myFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p><strong>\u5B9A\u4E49\u65F6</strong>\uFF1A\u5F53myFunc\u88AB\u5B9A\u4E49\u7684\u65F6\u5019\uFF0CmyFunc\u7684\u6807\u8BC6\u7B26\uFF08identifier\uFF09\u5C31\u88AB\u52A0\u5230\u4E86\u5168\u5C40\u5BF9\u8C61\u4E2D\uFF0C\u8FD9\u4E2A\u6807\u8BC6\u7B26\u6240\u5F15\u7528\u7684\u662F\u4E00\u4E2A\u51FD\u6570\u5BF9\u8C61\uFF08myFunc function object\uFF09\u3002</p><p>\u5185\u90E8\u5C5E\u6027[[scope]]\u6307\u5411\u5F53\u524D\u7684\u4F5C\u7528\u57DF\u5BF9\u8C61\uFF0C\u4E5F\u5C31\u662F\u51FD\u6570\u7684\u6807\u8BC6\u7B26\u88AB\u521B\u5EFA\u7684\u65F6\u5019\uFF0C\u6240\u80FD\u591F\u76F4\u63A5\u8BBF\u95EE\u7684\u90A3\u4E2A\u4F5C\u7528\u57DF\u5BF9\u8C61\uFF08\u5373\u5168\u5C40\u5BF9\u8C61\uFF09\u3002</p><p><img src="https://camo.githubusercontent.com/bf702f0df678f20694e04fb24fc2ea0e726434bc/687474703a2f2f646d697472796672616e6b2e636f6d2f5f6d656469612f61727469636c65732f6a735f636c6f737572655f322e706e67" alt="\u72B6\u6001\u793A\u4F8B"></p><p>myFunc\u6240\u5F15\u7528\u7684\u51FD\u6570\u5BF9\u8C61\uFF0C\u5176\u672C\u8EAB\u4E0D\u4EC5\u4EC5\u542B\u6709\u51FD\u6570\u7684\u4EE3\u7801\uFF0C\u5E76\u4E14\u8FD8\u542B\u6709\u6307\u5411\u5176\u88AB\u521B\u5EFA\u7684\u65F6\u5019\u7684\u4F5C\u7528\u57DF\u5BF9\u8C61\u3002</p><p>**\u8C03\u7528\u65F6\uFF1A**\u5F53myFunc\u51FD\u6570\u88AB\u8C03\u7528\u7684\u65F6\u5019\uFF0C\u4E00\u4E2A\u65B0\u7684\u4F5C\u7528\u57DF\u5BF9\u8C61\u88AB\u521B\u5EFA\u4E86\u3002\u65B0\u7684\u4F5C\u7528\u57DF\u5BF9\u8C61\u4E2D\u5305\u542BmyFunc\u51FD\u6570\u6240\u5B9A\u4E49\u7684\u672C\u5730\u53D8\u91CF\uFF0C\u4EE5\u53CA\u5176\u53C2\u6570\uFF08arguments\uFF09\u3002\u8FD9\u4E2A\u65B0\u7684\u4F5C\u7528\u57DF\u5BF9\u8C61\u7684\u7236\u4F5C\u7528\u57DF\u5BF9\u8C61\u5C31\u662F\u5728\u8FD0\u884CmyFunc\u65F6\u80FD\u76F4\u63A5\u8BBF\u95EE\u7684\u90A3\u4E2A\u4F5C\u7528\u57DF\u5BF9\u8C61\uFF08\u5373\u5168\u5C40\u5BF9\u8C61\uFF09\u3002</p><p><img src="https://camo.githubusercontent.com/74f0b304b1940aab6f4e96949a4708f088e1ed82/687474703a2f2f646d697472796672616e6b2e636f6d2f5f6d656469612f61727469636c65732f6a735f636c6f737572655f332e706e67" alt="\u6267\u884C\u793A\u4F8B"></p><div size="1">**\u6709\u5D4C\u5957\u7684\u51FD\u6570**</div><p>\u5F53\u51FD\u6570\u8FD4\u56DE\u6CA1\u6709\u88AB\u5F15\u7528\u7684\u65F6\u5019\uFF0C\u5C31\u4F1A\u88AB\u5783\u573E\u56DE\u6536\u5668\u56DE\u6536\u3002\u4F46\u662F\u5BF9\u4E8E\u95ED\u5305\uFF0C\u5373\u4F7F\u5916\u90E8\u51FD\u6570\u8FD4\u56DE\u4E86\uFF0C\u51FD\u6570\u5BF9\u8C61\u4ECD\u4F1A\u5F15\u7528\u5B83<strong>\u88AB\u521B\u5EFA\u65F6</strong>\u7684\u4F5C\u7528\u57DF\u5BF9\u8C61\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">createCounter</span><span class="token punctuation">(</span><span class="token parameter">initial</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> counter <span class="token operator">=</span> initial<span class="token punctuation">;</span>
    
    <span class="token keyword">function</span> <span class="token function">increment</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        counter <span class="token operator">+=</span> value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">function</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> counter<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">increment</span><span class="token operator">:</span> increment<span class="token punctuation">,</span>
        <span class="token literal-property property">get</span><span class="token operator">:</span> get
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> myCounter <span class="token operator">=</span> <span class="token function">createCounter</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myCounter<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// \u8FD4\u56DE 100</span>

myCounter<span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myCounter<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// \u8FD4\u56DE 105</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>\u5F53\u8C03\u7528 createCounter(100) \u65F6\uFF0C\u5185\u5D4C\u51FD\u6570increment\u548Cget\u90FD\u6709\u6307\u5411createCounter(100) scope\u7684\u5F15\u7528\u3002\u5047\u8BBEcreateCounter(100)\u6CA1\u6709\u4EFB\u4F55\u8FD4\u56DE\u503C\uFF0C\u90A3\u4E48createCounter(100) scope\u4E0D\u518D\u88AB\u5F15\u7528\uFF0C\u4E8E\u662F\u5C31\u53EF\u4EE5\u88AB\u5783\u573E\u56DE\u6536\u3002</p><p><img src="https://camo.githubusercontent.com/faa2434436b9420b99ae45f42a5a55311250a7af/687474703a2f2f646d697472796672616e6b2e636f6d2f5f6d656469612f61727469636c65732f6a735f636c6f737572655f342e706e67" alt="\u5D4C\u5957\u51FD\u6570\u6267\u884C\u6D41\u7A0B"></p><p>\u4F46\u662FcreateCounter(100)\u5B9E\u9645\u4E0A\u662F\u6709\u8FD4\u56DE\u503C\u7684\uFF0C\u5E76\u4E14\u8FD4\u56DE\u503C\u88AB\u5B58\u50A8\u5728\u4E86myCounter\u4E2D\uFF0C\u6240\u4EE5\u5BF9\u8C61\u4E4B\u95F4\u7684\u5F15\u7528\u5173\u7CFB\u5982\u4E0B\u56FE\uFF1A</p><p><img src="https://camo.githubusercontent.com/13a4e54f23639c5b274014f0caa21115760052f6/687474703a2f2f626c6f672e6c6561706f61686561642e636f6d2f323031352f30392f31352f6a732d636c6f737572652f6a735f636c6f737572655f352e706e67" alt="\u6267\u884C\u7684\u5173\u7CFB\u56FE"></p><p>\u5373\u4F7FcreateCounter(100)\u5DF2\u7ECF\u8FD4\u56DE\uFF0C\u4F46\u662F\u5176\u4F5C\u7528\u57DF\u4ECD\u5728\uFF0C\u5E76\u4E14\u53EA\u80FD\u88AB\u5185\u8054\u51FD\u6570\u8BBF\u95EE\u3002\u53EF\u4EE5\u901A\u8FC7\u8C03\u7528myCounter.increment() \u6216 myCounter.get()\u6765\u76F4\u63A5\u8BBF\u95EEcreateCounter(100)\u7684\u4F5C\u7528\u57DF\u3002</p><p>\u5F53myCounter.increment() \u6216 myCounter.get()\u88AB\u8C03\u7528\u65F6\uFF0C\u65B0\u7684\u4F5C\u7528\u57DF\u5BF9\u8C61\u4F1A\u88AB\u521B\u5EFA\uFF0C\u5E76\u4E14\u8BE5\u4F5C\u7528\u57DF\u5BF9\u8C61\u7684\u7236\u4F5C\u7528\u57DF\u5BF9\u8C61\u4F1A\u662F\u5F53\u524D\u53EF\u4EE5\u76F4\u63A5\u8BBF\u95EE\u7684\u4F5C\u7528\u57DF\u5BF9\u8C61\u3002</p><p>\u8C03\u7528<code>get()</code>\u65F6\uFF0C\u5F53\u6267\u884C\u5230<code>return counter</code>\u65F6\uFF0C\u5728get()\u6240\u5728\u7684\u4F5C\u7528\u57DF\u5E76\u6CA1\u6709\u627E\u5230\u5BF9\u5E94\u7684\u6807\u793A\u7B26\uFF0C\u5C31\u4F1A\u6CBF\u7740\u4F5C\u7528\u57DF\u94FE\u5F80\u4E0A\u627E\uFF0C\u76F4\u5230\u627E\u5230\u53D8\u91CF<code>counter</code>\uFF0C\u7136\u540E\u8FD4\u56DE\u8BE5\u53D8\u91CF\u3002</p><p><img src="https://camo.githubusercontent.com/4cff42540fb6a6ebd532389538101a16af65e7cb/687474703a2f2f646d697472796672616e6b2e636f6d2f5f6d656469612f61727469636c65732f6a735f636c6f737572655f362e706e67" alt=""></p><p>\u5355\u72EC\u8C03\u7528increment(5)\u65F6\uFF0C\u53C2\u6570value\u4FDD\u5B58\u5728\u5F53\u524D\u7684\u4F5C\u7528\u57DF\u5BF9\u8C61\u3002\u5F53\u51FD\u6570\u8981\u8BBF\u95EEcounter\u65F6\uFF0C\u6CA1\u6709\u627E\u5230\uFF0C\u4E8E\u662F\u6CBF\u7740\u4F5C\u7528\u57DF\u94FE\u5411\u4E0A\u67E5\u627E\uFF0C\u5728createCounter(100)\u7684\u4F5C\u7528\u57DF\u627E\u5230\u4E86\u5BF9\u5E94\u7684\u6807\u793A\u7B26\uFF0Cincrement()\u5C31\u4F1A\u4FEE\u6539counter\u7684\u503C\u3002\u9664\u6B64\u4E4B\u5916\uFF0C\u6CA1\u6709\u5176\u4ED6\u65B9\u5F0F\u6765\u4FEE\u6539\u8FD9\u4E2A\u53D8\u91CF\u3002\u95ED\u5305\u7684\u5F3A\u5927\u4E5F\u5728\u4E8E\u6B64\uFF0C\u80FD\u591F\u5B58\u8D2E\u79C1\u6709\u6570\u636E\u3002</p><p><img src="https://camo.githubusercontent.com/5e61b55212aae4198b0bdcb56179baf850ea3bd4/687474703a2f2f646d697472796672616e6b2e636f6d2f5f6d656469612f61727469636c65732f6a735f636c6f737572655f365f696e632e706e67" alt=""></p><p>\u521B\u5EFA\u4E24\u4E2A\u51FD\u6570\uFF1A<code>myCounter1</code>\u548C<code>myCounter2</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//my_script.js</span>
<span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">createCounter</span><span class="token punctuation">(</span><span class="token parameter">initial</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">/* ... see the code from previous example ... */</span>
<span class="token punctuation">}</span>

<span class="token comment">//-- create counter objects</span>
<span class="token keyword">var</span> myCounter1 <span class="token operator">=</span> <span class="token function">createCounter</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> myCounter2 <span class="token operator">=</span> <span class="token function">createCounter</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u5173\u7CFB\u56FE\u5982\u4E0B</p><p><img src="https://camo.githubusercontent.com/ae96f45e96a12f66b88d8bc2126d815c197759b7/687474703a2f2f646d697472796672616e6b2e636f6d2f5f6d656469612f61727469636c65732f6a735f636c6f737572655f372e706e67" alt=""></p><p>myCounter1.increment\u548CmyCounter2.increment\u7684\u51FD\u6570\u5BF9\u8C61\u62E5\u6709\u7740\u4E00\u6837\u7684\u4EE3\u7801\u4EE5\u53CA\u4E00\u6837\u7684\u5C5E\u6027\u503C\uFF08name\uFF0Clength\u7B49\u7B49\uFF09\uFF0C\u4F46\u662F\u5B83\u4EEC\u7684[[scope]]\u6307\u5411\u7684\u662F\u4E0D\u4E00\u6837\u7684\u4F5C\u7528\u57DF\u5BF9\u8C61\u3002</p>`,44);function t(e,c){return p}var l=s(a,[["render",t]]);export{l as default};
