import{r as o,o as c,c as l,b as s,d as t,F as u,a,e as n}from"./app.b05da4ec.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const r={},k=a('<h1 id="\u5E76\u53D1\u6A21\u578B\u4E0E\u4E8B\u4EF6\u5FAA\u73AF" tabindex="-1"><a class="header-anchor" href="#\u5E76\u53D1\u6A21\u578B\u4E0E\u4E8B\u4EF6\u5FAA\u73AF" aria-hidden="true">#</a> \u5E76\u53D1\u6A21\u578B\u4E0E\u4E8B\u4EF6\u5FAA\u73AF</h1><p>JavaScript\u6709\u4E00\u4E2A\u57FA\u4E8E<strong>\u4E8B\u4EF6\u5FAA\u73AF</strong>\u7684\u5E76\u53D1\u6A21\u578B\uFF0C\u4E8B\u4EF6\u5FAA\u73AF\u8D1F\u8D23\u6267\u884C\u4EE3\u7801\u3001\u6536\u96C6\u548C\u5904\u7406\u4E8B\u4EF6\u4EE5\u53CA\u6267\u884C\u961F\u5217\u4E2D\u7684\u5B50\u4EFB\u52A1\u3002\u8FD9\u4E2A\u6A21\u578B\u4E0E\u5176\u5B83\u8BED\u8A00\u4E2D\u7684\u6A21\u578B\u622A\u7136\u4E0D\u540C\uFF0C\u6BD4\u5982 C \u548C Java\u3002</p><h1 id="\u8FD0\u884C\u65F6\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u884C\u65F6\u6982\u5FF5" aria-hidden="true">#</a> \u8FD0\u884C\u65F6\u6982\u5FF5</h1><p>\u63A5\u4E0B\u6765\u7684\u5185\u5BB9\u89E3\u91CA\u4E86\u8FD9\u4E2A\u7406\u8BBA\u6A21\u578B\u3002\u73B0\u4EE3JavaScript\u5F15\u64CE\u5B9E\u73B0\u5E76\u7740\u91CD\u4F18\u5316\u4E86\u4EE5\u4E0B\u63CF\u8FF0\u7684\u8FD9\u4E9B\u8BED\u4E49\u3002</p><h2 id="\u53EF\u89C6\u5316\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u53EF\u89C6\u5316\u63CF\u8FF0" aria-hidden="true">#</a> \u53EF\u89C6\u5316\u63CF\u8FF0</h2>',5),d=["src"],b=a(`<h2 id="\u6808" tabindex="-1"><a class="header-anchor" href="#\u6808" aria-hidden="true">#</a> \u6808</h2><p>\u51FD\u6570\u8C03\u7528\u5F62\u6210\u4E86\u4E00\u4E2A\u7531\u82E5\u5E72\u5E27\u7EC4\u6210\u7684\u6808\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> b <span class="token operator">+</span> <span class="token number">11</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> y <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token function">foo</span><span class="token punctuation">(</span>x <span class="token operator">*</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">bar</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u8FD4\u56DE 42</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u6267\u884C\u6D41\u7A0B</p><blockquote><p>\u5F53\u8C03\u7528 <code>bar</code> \u65F6\uFF0C\u7B2C\u4E00\u4E2A\u5E27\u88AB\u521B\u5EFA\u5E76\u538B\u5165\u6808\u4E2D\uFF0C\u5E27\u4E2D\u5305\u542B\u4E86 bar \u7684\u53C2\u6570\u548C\u5C40\u90E8\u53D8\u91CF\u3002 \u5F53 bar \u8C03\u7528 foo \u65F6\uFF0C\u7B2C\u4E8C\u4E2A\u5E27\u88AB\u521B\u5EFA\u5E76\u88AB\u538B\u5165\u6808\u4E2D\uFF0C\u653E\u5728\u7B2C\u4E00\u4E2A\u5E27\u4E4B\u4E0A\uFF0C\u5E27\u4E2D\u5305\u542B foo \u7684\u53C2\u6570\u548C\u5C40\u90E8\u53D8\u91CF\u3002 \u5F53 foo \u6267\u884C\u5B8C\u6BD5\u7136\u540E\u8FD4\u56DE\u65F6\uFF0C\u7B2C\u4E8C\u4E2A\u5E27\u5C31\u88AB\u5F39\u51FA\u6808\uFF08\u5269\u4E0B bar \u51FD\u6570\u7684\u8C03\u7528\u5E27 \uFF09\u3002 \u5F53 bar \u4E5F\u6267\u884C\u5B8C\u6BD5\u7136\u540E\u8FD4\u56DE\u65F6\uFF0C\u7B2C\u4E00\u4E2A\u5E27\u4E5F\u88AB\u5F39\u51FA\uFF0C\u6808\u5C31\u88AB\u6E05\u7A7A\u4E86\u3002</p></blockquote><h2 id="\u5806" tabindex="-1"><a class="header-anchor" href="#\u5806" aria-hidden="true">#</a> \u5806</h2><p>\u5BF9\u8C61\u88AB\u5206\u914D\u5728\u5806\u4E2D\uFF0C\u5806\u662F\u4E00\u4E2A\u7528\u6765\u8868\u793A\u4E00\u5927\u5757\uFF08\u901A\u5E38\u662F\u975E\u7ED3\u6784\u5316\u7684\uFF09\u5185\u5B58\u533A\u57DF\u7684\u8BA1\u7B97\u673A\u672F\u8BED\u3002</p><h2 id="\u961F\u5217" tabindex="-1"><a class="header-anchor" href="#\u961F\u5217" aria-hidden="true">#</a> \u961F\u5217</h2><p>\u4E00\u4E2A <code>JavaScript</code> \u8FD0\u884C\u65F6\u5305\u542B\u4E86\u4E00\u4E2A\u5F85\u5904\u7406\u6D88\u606F\u7684\u6D88\u606F\u961F\u5217\u3002\u6BCF\u4E00\u4E2A\u6D88\u606F\u90FD\u5173\u8054\u7740\u4E00\u4E2A\u7528\u4EE5\u5904\u7406\u8FD9\u4E2A\u6D88\u606F\u7684\u56DE\u8C03\u51FD\u6570\u3002</p>`,9),m=n("\u5728 "),h={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/EventLoop#%E4%BA%8B%E4%BB%B6%E5%BE%AA%E7%8E%AF",target:"_blank",rel:"noopener noreferrer"},_=n("\u4E8B\u4EF6\u5FAA\u73AF"),f=n(" \u671F\u95F4\u7684\u67D0\u4E2A\u65F6\u523B\uFF0C\u8FD0\u884C\u65F6\u4F1A\u4ECE\u6700\u5148\u8FDB\u5165\u961F\u5217\u7684\u6D88\u606F\u5F00\u59CB\u5904\u7406\u961F\u5217\u4E2D\u7684\u6D88\u606F\u3002\u88AB\u5904\u7406\u7684\u6D88\u606F\u4F1A\u88AB\u79FB\u51FA\u961F\u5217\uFF0C\u5E76\u4F5C\u4E3A\u8F93\u5165\u53C2\u6570\u6765\u8C03\u7528\u4E0E\u4E4B\u5173\u8054\u7684\u51FD\u6570\u3002\u6B63\u5982\u524D\u9762\u6240\u63D0\u5230\u7684\uFF0C\u8C03\u7528\u4E00\u4E2A\u51FD\u6570\u603B\u662F\u4F1A\u4E3A\u5176\u521B\u9020\u4E00\u4E2A\u65B0\u7684\u6808\u5E27\u3002"),g=a(`<p>\u51FD\u6570\u7684\u5904\u7406\u4F1A\u4E00\u76F4\u8FDB\u884C\u5230\u6267\u884C\u6808\u518D\u6B21\u4E3A\u7A7A\u4E3A\u6B62\uFF1B\u7136\u540E\u4E8B\u4EF6\u5FAA\u73AF\u5C06\u4F1A\u5904\u7406\u961F\u5217\u4E2D\u7684\u4E0B\u4E00\u4E2A\u6D88\u606F\uFF08\u5982\u679C\u8FD8\u6709\u7684\u8BDD\uFF09\u3002</p><h2 id="\u4E8B\u4EF6\u5FAA\u73AF" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\u5FAA\u73AF" aria-hidden="true">#</a> \u4E8B\u4EF6\u5FAA\u73AF</h2><p>\u4E4B\u6240\u4EE5\u79F0\u4E4B\u4E3A <strong>\u4E8B\u4EF6\u5FAA\u73AF</strong>\uFF0C\u662F\u56E0\u4E3A\u5B83\u7ECF\u5E38\u6309\u7167\u7C7B\u4F3C\u5982\u4E0B\u7684\u65B9\u5F0F\u6765\u88AB\u5B9E\u73B0\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">while</span> <span class="token punctuation">(</span>queue<span class="token punctuation">.</span><span class="token function">waitForMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  queue<span class="token punctuation">.</span><span class="token function">processNextMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><code>queue.waitForMessage()</code> \u4F1A\u540C\u6B65\u5730\u7B49\u5F85\u6D88\u606F\u5230\u8FBE(\u5982\u679C\u5F53\u524D\u6CA1\u6709\u4EFB\u4F55\u6D88\u606F\u7B49\u5F85\u88AB\u5904\u7406)\u3002</p><h3 id="\u6267\u884C\u81F3\u5B8C\u6210" tabindex="-1"><a class="header-anchor" href="#\u6267\u884C\u81F3\u5B8C\u6210" aria-hidden="true">#</a> &quot;\u6267\u884C\u81F3\u5B8C\u6210&quot;</h3><p>\u6BCF\u4E00\u4E2A\u6D88\u606F\u5B8C\u6574\u5730\u6267\u884C\u540E\uFF0C\u5176\u5B83\u6D88\u606F\u624D\u4F1A\u88AB\u6267\u884C\u3002\u8FD9\u4E3A\u7A0B\u5E8F\u7684\u5206\u6790\u63D0\u4F9B\u4E86\u4E00\u4E9B\u4F18\u79C0\u7684\u7279\u6027\uFF0C\u5305\u62EC\uFF1A\u5F53\u4E00\u4E2A\u51FD\u6570\u6267\u884C\u65F6\uFF0C\u5B83\u4E0D\u4F1A\u88AB\u62A2\u5360\uFF0C\u53EA\u6709\u5728\u5B83\u8FD0\u884C\u5B8C\u6BD5\u4E4B\u540E\u624D\u4F1A\u53BB\u8FD0\u884C\u4EFB\u4F55\u5176\u4ED6\u7684\u4EE3\u7801\uFF0C\u624D\u80FD\u4FEE\u6539\u8FD9\u4E2A\u51FD\u6570\u64CD\u4F5C\u7684\u6570\u636E\u3002\u8FD9\u4E0EC\u8BED\u8A00\u4E0D\u540C\uFF0C\u4F8B\u5982\uFF0C\u5982\u679C\u51FD\u6570\u5728\u7EBF\u7A0B\u4E2D\u8FD0\u884C\uFF0C\u5B83\u53EF\u80FD\u5728\u4EFB\u4F55\u4F4D\u7F6E\u88AB\u7EC8\u6B62\uFF0C\u7136\u540E\u5728\u53E6\u4E00\u4E2A\u7EBF\u7A0B\u4E2D\u8FD0\u884C\u5176\u4ED6\u4EE3\u7801\u3002</p><p>\u8FD9\u4E2A\u6A21\u578B\u7684\u4E00\u4E2A\u7F3A\u70B9\u5728\u4E8E\u5F53\u4E00\u4E2A\u6D88\u606F\u9700\u8981\u592A\u957F\u65F6\u95F4\u624D\u80FD\u5904\u7406\u5B8C\u6BD5\u65F6\uFF0CWeb\u5E94\u7528\u7A0B\u5E8F\u5C31\u65E0\u6CD5\u5904\u7406\u4E0E\u7528\u6237\u7684\u4EA4\u4E92\uFF0C\u4F8B\u5982\u70B9\u51FB\u6216\u6EDA\u52A8\u3002\u4E3A\u4E86\u7F13\u89E3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u6D4F\u89C8\u5668\u4E00\u822C\u4F1A\u5F39\u51FA\u4E00\u4E2A\u201C\u8FD9\u4E2A\u811A\u672C\u8FD0\u884C\u65F6\u95F4\u8FC7\u957F\u201D\u7684\u5BF9\u8BDD\u6846\u3002\u4E00\u4E2A\u826F\u597D\u7684\u4E60\u60EF\u662F\u7F29\u77ED\u5355\u4E2A\u6D88\u606F\u5904\u7406\u65F6\u95F4\uFF0C\u5E76\u5728\u53EF\u80FD\u7684\u60C5\u51B5\u4E0B\u5C06\u4E00\u4E2A\u6D88\u606F\u88C1\u526A\u6210\u591A\u4E2A\u6D88\u606F\u3002</p><h3 id="\u6DFB\u52A0\u6D88\u606F" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u6D88\u606F" aria-hidden="true">#</a> \u6DFB\u52A0\u6D88\u606F</h3><p>\u5728\u6D4F\u89C8\u5668\u91CC\uFF0C\u6BCF\u5F53\u4E00\u4E2A\u4E8B\u4EF6\u53D1\u751F\u5E76\u4E14\u6709\u4E00\u4E2A\u4E8B\u4EF6\u76D1\u542C\u5668\u7ED1\u5B9A\u5728\u8BE5\u4E8B\u4EF6\u4E0A\u65F6\uFF0C\u4E00\u4E2A\u6D88\u606F\u5C31\u4F1A\u88AB\u6DFB\u52A0\u8FDB\u6D88\u606F\u961F\u5217\u3002\u5982\u679C\u6CA1\u6709\u4E8B\u4EF6\u76D1\u542C\u5668\uFF0C\u8FD9\u4E2A\u4E8B\u4EF6\u5C06\u4F1A\u4E22\u5931\u3002\u6240\u4EE5\u5F53\u4E00\u4E2A\u5E26\u6709\u70B9\u51FB\u4E8B\u4EF6\u5904\u7406\u5668\u7684\u5143\u7D20\u88AB\u70B9\u51FB\u65F6\uFF0C\u5C31\u4F1A\u50CF\u5176\u4ED6\u4E8B\u4EF6\u4E00\u6837\u4EA7\u751F\u4E00\u4E2A\u7C7B\u4F3C\u7684\u6D88\u606F\u3002</p>`,10),v=n("\u51FD\u6570 "),w={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout",target:"_blank",rel:"noopener noreferrer"},q=n("setTimeout"),x=n(" \u63A5\u53D7\u4E24\u4E2A\u53C2\u6570\uFF1A\u5F85\u52A0\u5165\u961F\u5217\u7684\u6D88\u606F\u548C\u4E00\u4E2A\u65F6\u95F4\u503C\uFF08\u53EF\u9009\uFF0C\u9ED8\u8BA4\u4E3A 0\uFF09\u3002\u8FD9\u4E2A\u65F6\u95F4\u503C\u4EE3\u8868\u4E86\u6D88\u606F\u88AB\u5B9E\u9645\u52A0\u5165\u5230\u961F\u5217\u7684\u6700\u5C0F\u5EF6\u8FDF\u65F6\u95F4\u3002\u5982\u679C\u961F\u5217\u4E2D\u6CA1\u6709\u5176\u5B83\u6D88\u606F\u5E76\u4E14\u6808\u4E3A\u7A7A\uFF0C\u5728\u8FD9\u6BB5\u5EF6\u8FDF\u65F6\u95F4\u8FC7\u53BB\u4E4B\u540E\uFF0C\u6D88\u606F\u4F1A\u88AB\u9A6C\u4E0A\u5904\u7406\u3002\u4F46\u662F\uFF0C\u5982\u679C\u6709\u5176\u5B83\u6D88\u606F\uFF0C"),y=s("code",null,"setTimeout",-1),j=n(" \u6D88\u606F\u5FC5\u987B\u7B49\u5F85\u5176\u5B83\u6D88\u606F\u5904\u7406\u5B8C\u3002\u56E0\u6B64\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4EC5\u4EC5\u8868\u793A\u6700\u5C11\u5EF6\u8FDF\u65F6\u95F4\uFF0C\u800C\u975E\u786E\u5207\u7684\u7B49\u5F85\u65F6\u95F4\u3002"),E=a(`<p>\u4E0B\u9762\u7684\u4F8B\u5B50\u6F14\u793A\u4E86\u8FD9\u4E2A\u6982\u5FF5\uFF08<code>setTimeout</code> \u5E76\u4E0D\u4F1A\u5728\u8BA1\u65F6\u5668\u5230\u671F\u4E4B\u540E\u76F4\u63A5\u6267\u884C\uFF09\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getSeconds</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u8F93\u51FA &quot;2&quot;\uFF0C\u8868\u793A\u56DE\u8C03\u51FD\u6570\u5E76\u6CA1\u6709\u5728 500 \u6BEB\u79D2\u4E4B\u540E\u7ACB\u5373\u6267\u884C</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Ran after &quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getSeconds</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> s<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; seconds&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">while</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getSeconds</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> s <span class="token operator">&gt;=</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Good, looped for 2 seconds&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="\u96F6\u5EF6\u8FDF" tabindex="-1"><a class="header-anchor" href="#\u96F6\u5EF6\u8FDF" aria-hidden="true">#</a> \u96F6\u5EF6\u8FDF</h2><p>\u96F6\u5EF6\u8FDF\u5E76\u4E0D\u610F\u5473\u7740\u56DE\u8C03\u4F1A\u7ACB\u5373\u6267\u884C\u3002\u4EE5 0 \u4E3A\u7B2C\u4E8C\u53C2\u6570\u8C03\u7528 <code>setTimeout</code> \u5E76\u4E0D\u8868\u793A\u5728 0 \u6BEB\u79D2\u540E\u5C31\u7ACB\u5373\u8C03\u7528\u56DE\u8C03\u51FD\u6570\u3002</p><p>\u5176\u7B49\u5F85\u7684\u65F6\u95F4\u53D6\u51B3\u4E8E\u961F\u5217\u91CC\u5F85\u5904\u7406\u7684\u6D88\u606F\u6570\u91CF\u3002\u5728\u4E0B\u9762\u7684\u4F8B\u5B50\u4E2D\uFF0C&quot;<code>\u8FD9\u662F\u4E00\u6761\u6D88\u606F</code>&quot; \u5C06\u4F1A\u5728\u56DE\u8C03\u83B7\u5F97\u5904\u7406\u4E4B\u524D\u8F93\u51FA\u5230\u63A7\u5236\u53F0\uFF0C\u8FD9\u662F\u56E0\u4E3A\u5EF6\u8FDF\u53C2\u6570\u662F\u8FD0\u884C\u65F6\u5904\u7406\u8BF7\u6C42\u6240\u9700\u7684\u6700\u5C0F\u7B49\u5F85\u65F6\u95F4\uFF0C\u4F46\u5E76\u4E0D\u4FDD\u8BC1\u662F\u51C6\u786E\u7684\u7B49\u5F85\u65F6\u95F4\u3002</p><p>\u57FA\u672C\u4E0A\uFF0C<code>setTimeout</code> \u9700\u8981\u7B49\u5F85\u5F53\u524D\u961F\u5217\u4E2D\u6240\u6709\u7684\u6D88\u606F\u90FD\u5904\u7406\u5B8C\u6BD5\u4E4B\u540E\u624D\u80FD\u6267\u884C\uFF0C\u5373\u4F7F\u5DF2\u7ECF\u8D85\u51FA\u4E86\u7531\u7B2C\u4E8C\u53C2\u6570\u6240\u6307\u5B9A\u7684\u65F6\u95F4\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u8FD9\u662F\u5F00\u59CB&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">cb</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u8FD9\u662F\u6765\u81EA\u7B2C\u4E00\u4E2A\u56DE\u8C03\u7684\u6D88\u606F&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u8FD9\u662F\u4E00\u6761\u6D88\u606F&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">cb1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u8FD9\u662F\u6765\u81EA\u7B2C\u4E8C\u4E2A\u56DE\u8C03\u7684\u6D88\u606F&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u8FD9\u662F\u7ED3\u675F&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// &quot;\u8FD9\u662F\u5F00\u59CB&quot;</span>
<span class="token comment">// &quot;\u8FD9\u662F\u4E00\u6761\u6D88\u606F&quot;</span>
<span class="token comment">// &quot;\u8FD9\u662F\u7ED3\u675F&quot;</span>
<span class="token comment">// &quot;\u8FD9\u662F\u6765\u81EA\u7B2C\u4E00\u4E2A\u56DE\u8C03\u7684\u6D88\u606F&quot;</span>
<span class="token comment">// &quot;\u8FD9\u662F\u6765\u81EA\u7B2C\u4E8C\u4E2A\u56DE\u8C03\u7684\u6D88\u606F&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h2 id="\u591A\u4E2A\u8FD0\u884C\u65F6\u4E92\u76F8\u901A\u4FE1" tabindex="-1"><a class="header-anchor" href="#\u591A\u4E2A\u8FD0\u884C\u65F6\u4E92\u76F8\u901A\u4FE1" aria-hidden="true">#</a> \u591A\u4E2A\u8FD0\u884C\u65F6\u4E92\u76F8\u901A\u4FE1</h2>`,8),B=n("\u4E00\u4E2A "),T=s("code",null,"web worker",-1),S=n(" \u6216\u8005\u4E00\u4E2A\u8DE8\u57DF\u7684 "),J=s("code",null,"iframe",-1),N=n(" \u90FD\u6709\u81EA\u5DF1\u7684\u6808\u3001\u5806\u548C\u6D88\u606F\u961F\u5217\u3002\u4E24\u4E2A\u4E0D\u540C\u7684\u8FD0\u884C\u65F6\u53EA\u80FD\u901A\u8FC7 "),z={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage",target:"_blank",rel:"noopener noreferrer"},W=n("postMessage"),A=n(" \u65B9\u6CD5\u8FDB\u884C\u901A\u4FE1\u3002\u5982\u679C\u53E6\u4E00\u4E2A\u8FD0\u884C\u65F6\u4FA6\u542C "),C=s("code",null,"message",-1),I=n(" \u4E8B\u4EF6\uFF0C\u5219\u6B64\u65B9\u6CD5\u4F1A\u5411\u8BE5\u8FD0\u884C\u65F6\u6DFB\u52A0\u6D88\u606F\u3002"),F=a('<h2 id="\u6C38\u4E0D\u963B\u585E" tabindex="-1"><a class="header-anchor" href="#\u6C38\u4E0D\u963B\u585E" aria-hidden="true">#</a> \u6C38\u4E0D\u963B\u585E</h2><p><code>JavaScript</code>\u7684\u4E8B\u4EF6\u5FAA\u73AF\u6A21\u578B\u4E0E\u8BB8\u591A\u5176\u4ED6\u8BED\u8A00\u4E0D\u540C\u7684\u4E00\u4E2A\u975E\u5E38\u6709\u8DA3\u7684\u7279\u6027\u662F\uFF0C\u5B83\u6C38\u4E0D\u963B\u585E\u3002 \u5904\u7406 <code>I/O</code> \u901A\u5E38\u901A\u8FC7\u4E8B\u4EF6\u548C\u56DE\u8C03\u6765\u6267\u884C\uFF0C\u6240\u4EE5\u5F53\u4E00\u4E2A\u5E94\u7528\u6B63\u7B49\u5F85\u4E00\u4E2A <code>IndexedDB</code> \u67E5\u8BE2\u8FD4\u56DE\u6216\u8005\u4E00\u4E2A <code>XHR</code> \u8BF7\u6C42\u8FD4\u56DE\u65F6\uFF0C\u5B83\u4ECD\u7136\u53EF\u4EE5\u5904\u7406\u5176\u5B83\u4E8B\u60C5\uFF0C\u6BD4\u5982\u7528\u6237\u8F93\u5165\u3002</p><p>\u7531\u4E8E\u5386\u53F2\u539F\u56E0\u6709\u4E00\u4E9B\u4F8B\u5916\uFF0C\u5982 <code>alert</code> \u6216\u8005\u540C\u6B65 <code>XHR</code>\uFF0C\u4F46\u5E94\u8BE5\u5C3D\u91CF\u907F\u514D\u4F7F\u7528\u5B83\u4EEC\u3002</p>',3);function M(e,D){const p=o("ExternalLinkIcon");return c(),l(u,null,[k,s("img",{src:e.$withBase("/assets/mozillaJs/The_Javascript_Runtime_Environment_Example.svg"),alt:"demo"},null,8,d),b,s("p",null,[m,s("a",h,[_,t(p)]),f]),g,s("p",null,[v,s("a",w,[q,t(p)]),x,y,j]),E,s("p",null,[B,T,S,J,N,s("a",z,[W,t(p)]),A,C,I]),F],64)}var V=i(r,[["render",M]]);export{V as default};
