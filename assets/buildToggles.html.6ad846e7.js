import{a as n}from"./app.ee3fc36b.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="\u6784\u5EFA\u5207\u6362" tabindex="-1"><a class="header-anchor" href="#\u6784\u5EFA\u5207\u6362" aria-hidden="true">#</a> \u6784\u5EFA\u5207\u6362</h1><p>\u6839\u636E JavaScript \u9879\u76EE\u7684\u8FD0\u884C\u73AF\u5883\u8FDB\u884C\u5207\u6362\u73AF\u5883\u53D8\u91CF\u662F\u5F88\u5E38\u89C1\u7684\uFF0C\u901A\u8FC7 webpack \u53EF\u4EE5\u5F88\u8F7B\u677E\u5730\u505A\u5230\u8FD9\u4E00\u70B9\uFF0C\u56E0\u4E3A\u5B83\u652F\u6301\u57FA\u4E8E\u73AF\u5883\u53D8\u91CF\u7684\u6B7B\u4EE3\u7801\u6392\u9664\u3002</p><p>\u5728\u4F60\u7684 <code>package.json script</code> \u91CC\uFF0C\u6DFB\u52A0\u4E0D\u540C\u7684\u7F16\u8BD1\u76EE\u6807\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;build:test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack -p --config ./src/webpack.config.js&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;build:prod&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack -p --define p<wbr>rocess.env.NODE_ENV=&#39;\\&quot;production\\&quot;&#39; --config ./src/webpack.config.js&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u5F53\u7136\uFF0C\u5047\u8BBE\u4F60\u5DF2\u7ECF\u5B89\u88C5\u4E86 webpack <code>npm install webpack</code>\uFF0C\u73B0\u5728\uFF0C\u4F60\u53EF\u4EE5\u8FD0\u884C <code>npm run build:test</code> \u4E86\u3002</p><p>\u4F7F\u7528\u73AF\u5883\u53D8\u91CF\u4E5F\u8D85\u7EA7\u7B80\u5355\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * This interface makes sure we don&#39;t miss adding a property to both \`prod\` and \`test\`
 */</span>
<span class="token keyword">interface</span> <span class="token class-name">Config</span> <span class="token punctuation">{</span>
  someItem<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * We only export a single thing. The config.
 */</span>
<span class="token keyword">export</span> <span class="token keyword">let</span> config<span class="token operator">:</span> Config<span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \`p<wbr>rocess.env.NODE_ENV\` definition is driven from webpack
 *
 * The whole \`else\` block will be removed in the emitted JavaScript
 *  for a production build
 */</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  config <span class="token operator">=</span> <span class="token punctuation">{</span>
    someItem<span class="token operator">:</span> <span class="token string">&#39;prod&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Running in prod&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  config <span class="token operator">=</span> <span class="token punctuation">{</span>
    someItem<span class="token operator">:</span> <span class="token string">&#39;test&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Running in test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u4F7F\u7528 <code>p<wbr>rocess.env.NODE_ENV</code> \u4EC5\u4EC5\u662F\u56E0\u4E3A\u7EDD\u5927\u591A\u6570 JavaScript \u5E93\u4E2D\u90FD\u4F7F\u7528\u6B64\u53D8\u91CF\uFF0C\u4F8B\u5982\uFF1A<code>React</code>\u3002</p></div>`,8);function e(t,o){return p}var r=s(a,[["render",e]]);export{r as default};
