import{a as n}from"./app.6f963528.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="new-vue-\u53D1\u751F\u4E86\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#new-vue-\u53D1\u751F\u4E86\u4EC0\u4E48" aria-hidden="true">#</a> new Vue \u53D1\u751F\u4E86\u4EC0\u4E48</h1><p>\u4ECE\u5165\u53E3\u4EE3\u7801\u5F00\u59CB\u5206\u6790\uFF0C\u5148\u6765\u5206\u6790 <code>new Vue</code> \u80CC\u540E\u53D1\u751F\u4E86\u54EA\u4E9B\u4E8B\u60C5\u3002\u90FD\u77E5\u9053\uFF0C<code>new</code> \u5173\u952E\u5B57\u5728 Javascript \u8BED\u8A00\u4E2D\u4EE3\u8868\u5B9E\u4F8B\u5316\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u800C <code>Vue</code> \u5B9E\u9645\u4E0A\u662F\u4E00\u4E2A\u7C7B\uFF0C\u7C7B\u5728 Javascript \u4E2D\u662F\u7528 Function \u6765\u5B9E\u73B0\u7684\uFF0C\u6765\u770B\u4E00\u4E0B\u6E90\u7801\uFF0C\u5728<code>src/core/instance/index.js</code> \u4E2D\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Vue</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">&amp;&amp;</span>
    <span class="token operator">!</span><span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token keyword">instanceof</span> <span class="token class-name">Vue</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">&#39;Vue is a constructor and should be called with the \`new\` keyword&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_init</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u53EF\u4EE5\u770B\u5230 <code>Vue</code> \u53EA\u80FD\u901A\u8FC7 new \u5173\u952E\u5B57\u521D\u59CB\u5316\uFF0C\u7136\u540E\u4F1A\u8C03\u7528 <code>this._init</code> \u65B9\u6CD5\uFF0C \u8BE5\u65B9\u6CD5\u5728 <code>src/core/instance/init.js</code> \u4E2D\u5B9A\u4E49\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">_init</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">options<span class="token operator">?</span><span class="token operator">:</span> Object</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token literal-property property">vm</span><span class="token operator">:</span> Component <span class="token operator">=</span> <span class="token keyword">this</span>
  <span class="token comment">// a uid</span>
  vm<span class="token punctuation">.</span>_uid <span class="token operator">=</span> uid<span class="token operator">++</span>

  <span class="token keyword">let</span> startTag<span class="token punctuation">,</span> endTag
  <span class="token comment">/* istanbul ignore if */</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">&amp;&amp;</span> config<span class="token punctuation">.</span>performance <span class="token operator">&amp;&amp;</span> mark<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    startTag <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">vue-perf-start:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>vm<span class="token punctuation">.</span>_uid<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
    endTag <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">vue-perf-end:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>vm<span class="token punctuation">.</span>_uid<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
    <span class="token function">mark</span><span class="token punctuation">(</span>startTag<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// a flag to avoid this being observed</span>
  vm<span class="token punctuation">.</span>_isVue <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token comment">// merge options</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>options <span class="token operator">&amp;&amp;</span> options<span class="token punctuation">.</span>_isComponent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// optimize internal component instantiation</span>
    <span class="token comment">// since dynamic options merging is pretty slow, and none of the</span>
    <span class="token comment">// internal component options needs special treatment.</span>
    <span class="token function">initInternalComponent</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> options<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    vm<span class="token punctuation">.</span>$options <span class="token operator">=</span> <span class="token function">mergeOptions</span><span class="token punctuation">(</span>
      <span class="token function">resolveConstructorOptions</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>constructor<span class="token punctuation">)</span><span class="token punctuation">,</span>
      options <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      vm
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">/* istanbul ignore else */</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">initProxy</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    vm<span class="token punctuation">.</span>_renderProxy <span class="token operator">=</span> vm
  <span class="token punctuation">}</span>
  <span class="token comment">// expose real self</span>
  vm<span class="token punctuation">.</span>_self <span class="token operator">=</span> vm
  <span class="token function">initLifecycle</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span>
  <span class="token function">initEvents</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span>
  <span class="token function">initRender</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span>
  <span class="token function">callHook</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> <span class="token string">&#39;beforeCreate&#39;</span><span class="token punctuation">)</span>
  <span class="token function">initInjections</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span> <span class="token comment">// resolve injections before data/props</span>
  <span class="token function">initState</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span>
  <span class="token function">initProvide</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span> <span class="token comment">// resolve provide after data/props</span>
  <span class="token function">callHook</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> <span class="token string">&#39;created&#39;</span><span class="token punctuation">)</span>

  <span class="token comment">/* istanbul ignore if */</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">&amp;&amp;</span> config<span class="token punctuation">.</span>performance <span class="token operator">&amp;&amp;</span> mark<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    vm<span class="token punctuation">.</span>_name <span class="token operator">=</span> <span class="token function">formatComponentName</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
    <span class="token function">mark</span><span class="token punctuation">(</span>endTag<span class="token punctuation">)</span>
    <span class="token function">measure</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">vue </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>vm<span class="token punctuation">.</span>_name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> init</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> startTag<span class="token punctuation">,</span> endTag<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>el<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    vm<span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>el<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br></div></div><p>Vue \u521D\u59CB\u5316\u4E3B\u8981\u5C31\u5E72\u4E86\u51E0\u4EF6\u4E8B\u60C5\uFF0C\u5408\u5E76\u914D\u7F6E\uFF0C\u521D\u59CB\u5316\u751F\u547D\u5468\u671F\uFF0C\u521D\u59CB\u5316\u4E8B\u4EF6\u4E2D\u5FC3\uFF0C\u521D\u59CB\u5316\u6E32\u67D3\uFF0C\u521D\u59CB\u5316 data\u3001props\u3001computed\u3001watcher \u7B49\u7B49\u3002</p><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>Vue \u7684\u521D\u59CB\u5316\u903B\u8F91\u5199\u7684\u975E\u5E38\u6E05\u695A\uFF0C\u628A\u4E0D\u540C\u7684\u529F\u80FD\u903B\u8F91\u62C6\u6210\u4E00\u4E9B\u5355\u72EC\u7684\u51FD\u6570\u6267\u884C\uFF0C\u8BA9\u4E3B\u7EBF\u903B\u8F91\u4E00\u76EE\u4E86\u7136\uFF0C\u8FD9\u6837\u7684\u7F16\u7A0B\u601D\u60F3\u662F\u975E\u5E38\u503C\u5F97\u501F\u9274\u548C\u5B66\u4E60\u7684\u3002</p><p>\u7531\u4E8E\u8FD9\u4E00\u7AE0\u7684\u76EE\u6807\u662F\u5F04\u6E05\u695A\u6A21\u677F\u548C\u6570\u636E\u5982\u4F55\u6E32\u67D3\u6210\u6700\u7EC8\u7684 DOM\uFF0C\u6240\u4EE5\u5404\u79CD\u521D\u59CB\u5316\u903B\u8F91\u5148\u4E0D\u770B\u3002\u5728\u521D\u59CB\u5316\u7684\u6700\u540E\uFF0C\u68C0\u6D4B\u5230\u5982\u679C\u6709 <code>el</code> \u5C5E\u6027\uFF0C\u5219\u8C03\u7528 <code>vm.$mount</code> \u65B9\u6CD5\u6302\u8F7D <code>vm</code>\uFF0C\u6302\u8F7D\u7684\u76EE\u6807\u5C31\u662F\u628A\u6A21\u677F\u6E32\u67D3\u6210\u6700\u7EC8\u7684 DOM\uFF0C\u90A3\u4E48\u63A5\u4E0B\u6765\u6765\u5206\u6790 Vue \u7684\u6302\u8F7D\u8FC7\u7A0B\u3002</p>`,9);function t(e,o){return p}var u=s(a,[["render",t]]);export{u as default};
