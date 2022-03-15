import{a as n}from"./app.ba47fc91.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="mountindeterminatecomponent" tabindex="-1"><a class="header-anchor" href="#mountindeterminatecomponent" aria-hidden="true">#</a> mountIndeterminateComponent</h1><p>\u5224\u65AD<code>_current</code>\u662F\u5426\u5B58\u5728\u7136\u540E\u505A\u7684\u64CD\u4F5C\u4E3B\u8981\u662F\u56E0\u4E3A\uFF1A<code>IndeterminateComponent</code>\u53EA\u6709\u5728\u7EC4\u4EF6\u88AB\u7B2C\u4E00\u6B21\u6E32\u67D3\u7684\u60C5\u51B5\u4E0B\u624D\u4F1A\u51FA\u73B0\uFF0C\u5728\u7ECF\u8FC7\u7B2C\u4E00\u6B21\u6E32\u67D3\u4E4B\u540E\uFF0C\u5C31\u4F1A\u66F4\u65B0\u7EC4\u4EF6\u7684\u7C7B\u578B\uFF0C\u4E5F\u5C31\u662F<code>Fiber.tag</code>\u3002\u5982\u679C\u51FA\u73B0\u4E86<code>_current</code>\u5B58\u5728\u7684\u60C5\u51B5\uFF0C\u90A3\u4E48\u53EF\u80FD\u662F\u56E0\u4E3A\u6E32\u67D3\u65F6\u6709<code>Suspend</code>\u7684\u60C5\u51B5\u3002</p><p>\u5BF9\u4E8E<code>ClassComponent</code>\u548C<code>FunctionalComponent</code>\u7684\u5224\u65AD\u6761\u4EF6\u4EC5\u4EC5\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>
  <span class="token keyword">typeof</span> value <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">&amp;&amp;</span>
  value <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span>
  <span class="token keyword">typeof</span> value<span class="token punctuation">.</span>render <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span> <span class="token operator">&amp;&amp;</span>
  value<span class="token punctuation">.</span>$$<span class="token keyword">typeof</span> <span class="token operator">===</span> <span class="token keyword">undefined</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u8BF4\u660E<code>FunctionalComponent</code>\u8FD9\u4E48\u4E9B\uFF0C\u4F1A\u88AB\u5F53\u505A<code>ClassComponent</code>\u5904\u7406</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">TestIndeterminateComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;invoker&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token operator">&lt;</span>span<span class="token operator">&gt;</span>aaa<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p><strong>\u4EC0\u4E48\u65F6\u5019\u7EC4\u4EF6\u4F1A\u662F<code>IndeterminateComponent</code>\uFF1F</strong></p><p><code>FunctionalComponent</code>\u5728\u7B2C\u4E00\u6B21\u521B\u5EFA Fiber \u7684\u65F6\u5019\u5C31\u662F\uFF0C\u8BE6\u7EC6\u770B<code>createFiberFormTypeAndProps</code>\u65B9\u6CD5\u3002</p><ul><li><p><a href="">updateClassComponent</a></p></li><li><p><a href="">updateFunctionalComponent</a></p></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5173\u952E\u4EE3\u7801</span>
<span class="token keyword">function</span> <span class="token function">mountIndeterminateComponent</span><span class="token punctuation">(</span>
  <span class="token parameter">_current<span class="token punctuation">,</span>
  workInProgress<span class="token punctuation">,</span>
  Component<span class="token punctuation">,</span>
  renderExpirationTime<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>_current <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// An indeterminate component only mounts if it suspended inside a non-</span>
    <span class="token comment">// concurrent tree, in an inconsistent state. We want to tree it like</span>
    <span class="token comment">// a new mount, even though an empty version of it already committed.</span>
    <span class="token comment">// Disconnect the alternate pointers.</span>
    _current<span class="token punctuation">.</span>alternate <span class="token operator">=</span> <span class="token keyword">null</span>
    workInProgress<span class="token punctuation">.</span>alternate <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token comment">// Since this is conceptually a new fiber, schedule a Placement effect</span>
    workInProgress<span class="token punctuation">.</span>effectTag <span class="token operator">|=</span> Placement
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> props <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>pendingProps
  <span class="token keyword">const</span> unmaskedContext <span class="token operator">=</span> <span class="token function">getUnmaskedContext</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">,</span> Component<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> context <span class="token operator">=</span> <span class="token function">getMaskedContext</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">,</span> unmaskedContext<span class="token punctuation">)</span>

  <span class="token function">prepareToReadContext</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">,</span> renderExpirationTime<span class="token punctuation">)</span>

  <span class="token keyword">let</span> value

  value <span class="token operator">=</span> <span class="token function">Component</span><span class="token punctuation">(</span>props<span class="token punctuation">,</span> context<span class="token punctuation">)</span>
  <span class="token comment">// React DevTools reads this flag.</span>
  workInProgress<span class="token punctuation">.</span>effectTag <span class="token operator">|=</span> PerformedWork

  <span class="token keyword">if</span> <span class="token punctuation">(</span>
    <span class="token keyword">typeof</span> value <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">&amp;&amp;</span>
    value <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span>
    <span class="token keyword">typeof</span> value<span class="token punctuation">.</span>render <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span> <span class="token operator">&amp;&amp;</span>
    value<span class="token punctuation">.</span>$$<span class="token keyword">typeof</span> <span class="token operator">===</span> <span class="token keyword">undefined</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Proceed under the assumption that this is a class instance</span>
    workInProgress<span class="token punctuation">.</span>tag <span class="token operator">=</span> ClassComponent

    <span class="token keyword">let</span> hasContext <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isLegacyContextProvider</span><span class="token punctuation">(</span>Component<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      hasContext <span class="token operator">=</span> <span class="token boolean">true</span>
      <span class="token function">pushLegacyContextProvider</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      hasContext <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>

    workInProgress<span class="token punctuation">.</span>memoizedState <span class="token operator">=</span>
      value<span class="token punctuation">.</span>state <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> value<span class="token punctuation">.</span>state <span class="token operator">!==</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> value<span class="token punctuation">.</span>state <span class="token operator">:</span> <span class="token keyword">null</span>

    <span class="token keyword">const</span> getDerivedStateFromProps <span class="token operator">=</span> Component<span class="token punctuation">.</span>getDerivedStateFromProps
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> getDerivedStateFromProps <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">applyDerivedStateFromProps</span><span class="token punctuation">(</span>
        workInProgress<span class="token punctuation">,</span>
        Component<span class="token punctuation">,</span>
        getDerivedStateFromProps<span class="token punctuation">,</span>
        props<span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token function">adoptClassInstance</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
    <span class="token function">mountClassInstance</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">,</span> Component<span class="token punctuation">,</span> props<span class="token punctuation">,</span> renderExpirationTime<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token function">finishClassComponent</span><span class="token punctuation">(</span>
      <span class="token keyword">null</span><span class="token punctuation">,</span>
      workInProgress<span class="token punctuation">,</span>
      Component<span class="token punctuation">,</span>
      <span class="token boolean">true</span><span class="token punctuation">,</span>
      hasContext<span class="token punctuation">,</span>
      renderExpirationTime<span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// Proceed under the assumption that this is a function component</span>
    workInProgress<span class="token punctuation">.</span>tag <span class="token operator">=</span> FunctionComponent
    <span class="token function">reconcileChildren</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> workInProgress<span class="token punctuation">,</span> value<span class="token punctuation">,</span> renderExpirationTime<span class="token punctuation">)</span>
    <span class="token keyword">return</span> workInProgress<span class="token punctuation">.</span>child
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br></div></div>`,10);function e(t,o){return p}var l=s(a,[["render",e]]);export{l as default};
