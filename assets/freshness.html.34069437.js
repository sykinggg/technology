import{r as p,o as t,c as e,b as n,d as o,F as c,e as s,a as l}from"./app.6f963528.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const u={},i=n("h1",{id:"freshness",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#freshness","aria-hidden":"true"},"#"),s(" Freshness")],-1),k=s("\u4E3A\u4E86\u80FD\u8BA9\u68C0\u67E5\u5BF9\u8C61\u5B57\u9762\u91CF\u7C7B\u578B\u66F4\u5BB9\u6613\uFF0CTypeScript \u63D0\u4F9B \u300C"),m={href:"https://github.com/Microsoft/TypeScript/pull/3823",target:"_blank",rel:"noopener noreferrer"},b=s("Freshness"),d=s("\u300D \u7684\u6982\u5FF5\uFF08\u5B83\u4E5F\u88AB\u79F0\u4E3A\u66F4\u4E25\u683C\u7684\u5BF9\u8C61\u5B57\u9762\u91CF\u68C0\u67E5\uFF09\u7528\u6765\u786E\u4FDD\u5BF9\u8C61\u5B57\u9762\u91CF\u5728\u7ED3\u6784\u4E0A\u7C7B\u578B\u517C\u5BB9\u3002"),g=l(`<p>\u7ED3\u6784\u7C7B\u578B\u975E\u5E38\u65B9\u4FBF\u3002\u8003\u8651\u5982\u4E0B\u4F8B\u5B50\u4EE3\u7801\uFF0C\u5B83\u53EF\u4EE5\u8BA9\u4F60\u975E\u5E38\u4FBF\u5229\u7684\u4ECE JavaScript \u8FC1\u79FB\u81F3 TypeScript\uFF0C\u5E76\u4E14\u4F1A\u63D0\u4F9B\u7C7B\u578B\u5B89\u5168\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">logName</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">something</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> string <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>something<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;matt&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">job</span><span class="token operator">:</span> <span class="token string">&#39;being awesome&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> animal <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;cow&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">diet</span><span class="token operator">:</span> <span class="token string">&#39;vegan, but has milk of own specie&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> randow <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">note</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">I don&#39;t have a name property</span><span class="token template-punctuation string">\`</span></span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">logName</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ok</span>
<span class="token function">logName</span><span class="token punctuation">(</span>animal<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ok</span>
<span class="token function">logName</span><span class="token punctuation">(</span>randow<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Error: \u6CA1\u6709 \`name\` \u5C5E\u6027</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u4F46\u662F\uFF0C\u7ED3\u6784\u7C7B\u578B\u6709\u4E00\u4E2A\u7F3A\u70B9\uFF0C\u5B83\u80FD\u8BEF\u5BFC\u4F60\u8BA4\u4E3A\u67D0\u4E9B\u4E1C\u897F\u63A5\u6536\u7684\u6570\u636E\u6BD4\u5B83\u5B9E\u9645\u7684\u591A\u3002\u5982\u4E0B\u4F8B\uFF0CTypeScript \u53D1\u51FA\u9519\u8BEF\u8B66\u544A\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">logName</span><span class="token punctuation">(</span>something<span class="token operator">:</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>something<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">logName</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;matt&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ok</span>
<span class="token function">logName</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;matt&#39;</span><span class="token punctuation">,</span> job<span class="token operator">:</span> <span class="token string">&#39;being awesome&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Error: \u5BF9\u8C61\u5B57\u9762\u91CF\u53EA\u80FD\u6307\u5B9A\u5DF2\u77E5\u5C5E\u6027\uFF0C\`job\` \u5C5E\u6027\u5728\u8FD9\u91CC\u5E76\u4E0D\u5B58\u5728\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>\u8BF7\u6CE8\u610F\uFF0C\u8FD9\u79CD\u9519\u8BEF\u63D0\u793A\uFF0C\u53EA\u4F1A\u53D1\u751F\u5728\u5BF9\u8C61\u5B57\u9762\u91CF\u4E0A\u3002</p></div><p>\u5982\u679C\u6CA1\u6709\u8FD9\u79CD\u9519\u8BEF\u63D0\u793A\uFF0C\u53EF\u80FD\u4F1A\u53BB\u5BFB\u627E\u51FD\u6570\u7684\u8C03\u7528 <code>logName({ name: &#39;matt&#39;, job: &#39;being awesome&#39; })</code>\uFF0C\u7EE7\u800C\u4F1A\u8BA4\u4E3A <code>logName</code> \u53EF\u80FD\u4F1A\u4F7F\u7528 <code>job</code> \u5C5E\u6027\u505A\u4E00\u4E9B\u4E8B\u60C5\uFF0C\u7136\u800C\u5B9E\u9645\u4E0A <code>logName</code> \u5E76\u6CA1\u6709\u4F7F\u7528\u5B83\u3002</p><p>\u53E6\u5916\u4E00\u4E2A\u4F7F\u7528\u6BD4\u8F83\u591A\u7684\u573A\u666F\u662F\u4E0E\u5177\u6709\u53EF\u9009\u6210\u5458\u7684\u63A5\u53E3\u4E00\u8D77\u4F7F\u7528\uFF0C\u5982\u679C\u6CA1\u6709\u8FD9\u6837\u7684\u5BF9\u8C61\u5B57\u9762\u91CF\u68C0\u67E5\uFF0C\u5F53\u4F60\u8F93\u5165\u9519\u8BEF\u5355\u8BCD\u7684\u65F6\u5019\uFF0C\u5E76\u4E0D\u4F1A\u53D1\u51FA\u9519\u8BEF\u8B66\u544A\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">logIfHasName</span><span class="token punctuation">(</span>something<span class="token operator">:</span> <span class="token punctuation">{</span> name<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>something<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>something<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;matt&#39;</span><span class="token punctuation">,</span> job<span class="token operator">:</span> <span class="token string">&#39;being awesome&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> animal <span class="token operator">=</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;cow&#39;</span><span class="token punctuation">,</span> diet<span class="token operator">:</span> <span class="token string">&#39;vegan, but has milk of own species&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">logIfHasName</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// okay</span>
<span class="token function">logIfHasName</span><span class="token punctuation">(</span>animal<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// okay</span>

<span class="token function">logIfHasName</span><span class="token punctuation">(</span><span class="token punctuation">{</span> neme<span class="token operator">:</span> <span class="token string">&#39;I just misspelled name to neme&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Error: \u5BF9\u8C61\u5B57\u9762\u91CF\u53EA\u80FD\u6307\u5B9A\u5DF2\u77E5\u5C5E\u6027\uFF0C\`neme\` \u5C5E\u6027\u4E0D\u5B58\u5728\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u4E4B\u6240\u4EE5\u53EA\u5BF9\u5BF9\u8C61\u5B57\u9762\u91CF\u8FDB\u884C\u7C7B\u578B\u68C0\u67E5\uFF0C\u56E0\u4E3A\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u90A3\u4E9B\u5B9E\u9645\u4E0A\u5E76\u6CA1\u6709\u88AB\u4F7F\u7528\u5230\u7684\u5C5E\u6027\u6709\u53EF\u80FD\u4F1A\u62FC\u5199\u9519\u8BEF\u6216\u8005\u4F1A\u88AB\u8BEF\u7528\u3002</p><h2 id="\u5141\u8BB8\u989D\u5916\u7684\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5141\u8BB8\u989D\u5916\u7684\u5C5E\u6027" aria-hidden="true">#</a> \u5141\u8BB8\u989D\u5916\u7684\u5C5E\u6027</h2><p>\u4E00\u4E2A\u7C7B\u578B\u80FD\u591F\u5305\u542B\u7D22\u5F15\u7B7E\u540D\uFF0C\u4EE5\u660E\u786E\u8868\u660E\u53EF\u4EE5\u4F7F\u7528\u989D\u5916\u7684\u5C5E\u6027\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> x<span class="token operator">:</span> <span class="token punctuation">{</span> foo<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>x<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

x <span class="token operator">=</span> <span class="token punctuation">{</span> foo<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> baz<span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// ok, &#39;baz&#39; \u5C5E\u6027\u5339\u914D\u4E8E\u7D22\u5F15\u7B7E\u540D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u7528\u4F8B-react-state" tabindex="-1"><a class="header-anchor" href="#\u7528\u4F8B-react-state" aria-hidden="true">#</a> \u7528\u4F8B\uFF1AReact State</h2><p>Facebook ReactJS \u4E3A\u5BF9\u8C61\u7684 Freshness \u63D0\u4F9B\u4E86\u4E00\u4E2A\u5F88\u597D\u7684\u7528\u4F8B\uFF0C\u901A\u5E38\u5728\u7EC4\u4EF6\u4E2D\uFF0C\u4F60\u53EA\u4F7F\u7528\u5C11\u91CF\u5C5E\u6027\uFF0C\u800C\u4E0D\u662F\u4F20\u5165\u6240\u6709\uFF0C\u6765\u8C03\u7528 <code>setState</code>\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \u5047\u8BBE</span>
<span class="token keyword">interface</span> <span class="token class-name">State</span> <span class="token punctuation">{</span>
  foo<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  bar<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u4F60\u53EF\u80FD\u60F3\u505A\uFF1A</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> foo<span class="token operator">:</span> <span class="token string">&#39;Hello&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Error: \u6CA1\u6709\u5C5E\u6027 &#39;bar&#39;</span>

<span class="token comment">// \u56E0\u4E3A state \u5305\u542B &#39;foo&#39; \u4E0E &#39;bar&#39;\uFF0CTypeScript \u4F1A\u5F3A\u5236\u4F60\u8FD9\u4E48\u505A\uFF1A</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> foo<span class="token operator">:</span> <span class="token string">&#39;Hello&#39;</span><span class="token punctuation">,</span> bar<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>bar <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u5982\u679C\u4F60\u60F3\u4F7F\u7528 Freshness\uFF0C\u4F60\u53EF\u80FD\u9700\u8981\u5C06\u6240\u6709\u6210\u5458\u6807\u8BB0\u4E3A\u53EF\u9009\uFF0C\u8FD9\u4ECD\u7136\u4F1A\u6355\u6349\u5230\u62FC\u5199\u9519\u8BEF\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \u5047\u8BBE</span>
<span class="token keyword">interface</span> <span class="token class-name">State</span> <span class="token punctuation">{</span>
  foo<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  bar<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u4F60\u53EF\u80FD\u60F3\u505A</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> foo<span class="token operator">:</span> <span class="token string">&#39;Hello&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Yay works fine!</span>

<span class="token comment">// \u7531\u4E8E Freshness\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u9632\u6B62\u9519\u522B\u5B57</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> foos<span class="token operator">:</span> <span class="token string">&#39;Hello&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// Error: \u5BF9\u8C61\u53EA\u80FD\u6307\u5B9A\u5DF2\u77E5\u5C5E\u6027</span>

<span class="token comment">// \u4ECD\u7136\u4F1A\u6709\u7C7B\u578B\u68C0\u67E5</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> foo<span class="token operator">:</span> <span class="token number">123</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// Error: \u65E0\u6CD5\u5C06 number \u7C7B\u578B\u8D4B\u503C\u7ED9 string \u7C7B\u578B</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,17);function f(h,y){const a=p("ExternalLinkIcon");return t(),e(c,null,[i,n("p",null,[k,n("a",m,[b,o(a)]),d]),g],64)}var _=r(u,[["render",f]]);export{_ as default};
