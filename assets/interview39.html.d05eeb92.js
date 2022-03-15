import{a as n}from"./app.ba47fc91.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<p>\u4E0D\u53EA\u662F\u57DF\u540D\uFF0C\u8FD9\u79CD\u95EE\u9898\u9488\u5BF9\u7684\u662F\u4E0D\u540C\u73AF\u5883\u7684\u4E2A\u6027\u5316\u73AF\u5883\u53D8\u91CF\u5982\u4F55\u8BBE\u7F6E\u7684\u95EE\u9898\u3002 \u89E3\u51B3\u601D\u8DEF\uFF1A\u6253\u5305\u65F6\u901A\u8FC7nodejs\u6765\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF</p><p>\u4EE5\u4E0B\u4E3A<code>create-react-app</code>\u4E2D\u5982\u4F55\u5904\u7406\u8BE5\u95EE\u9898\u7684\u793A\u4F8B</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token comment">// package.json</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;react-scripts build&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;build:staging&quot;</span><span class="token operator">:</span> <span class="token string">&quot;export REACT_APP_STAGE=dev &amp;&amp; npm run build&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// in react component</span>
<span class="token keyword">const</span> stage <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">REACT_APP_STAGE</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u5982\u679C\u662FCRA\u7684\u9879\u76EE\u7684\u8BDD\uFF0C\u53EF\u4EE5\u4F7F\u7528<code>.env</code> <code>.env.development</code> <code>.env.production</code>\u6587\u4EF6\u6765\u533A\u5206\u4E0D\u540C\u7684\u73AF\u5883\uFF1B \u6BD4\u5982\u751F\u4EA7\u73AF\u5883\u57DF\u540D<code>http://www.prod.com</code>\uFF0C\u5F00\u53D1\u73AF\u5883\u57DF\u540D<code>http://www.deve.com</code>\uFF0C \u5219\u53EF\u4EE5\u5206\u522B\u8BBE\u7F6E<code>REACT_APP_BASE_URL = &#39;http://www.prod.com&#39;</code>\u548C<code>REACT_APP_BASE_URL = &#39;http://www.deve.com&#39;</code>\uFF0C \u7136\u540E\u5728\u7A0B\u5E8F\u4E2D\u4F7F\u7528<code>p<wbr>rocess.env.REACT_APP_BASE_URL</code>\u6765\u83B7\u53D6\u57FA\u7840\u8DEF\u5F84\uFF0C\u6B64\u65F6\u6253\u5305\u7684\u65F6\u5019\u4F1A\u6839\u636E\u4E0D\u540C\u7684\u73AF\u5883\u6253\u5305\u4E0D\u540C\u7684\u57DF\u540D</p>`,5);function p(o,t){return e}var l=s(a,[["render",p]]);export{l as default};
