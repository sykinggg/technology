import{a as n}from"./app.b05da4ec.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="updatecontextprovider" tabindex="-1"><a class="header-anchor" href="#updatecontextprovider" aria-hidden="true">#</a> updateContextProvider</h1><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">updateContextProvider</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">current</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token literal-property property">workInProgress</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span>
  <span class="token literal-property property">renderExpirationTime</span><span class="token operator">:</span> ExpirationTime<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token literal-property property">providerType</span><span class="token operator">:</span> ReactProviderType<span class="token operator">&lt;</span>any<span class="token operator">&gt;</span> <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>type<span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token literal-property property">context</span><span class="token operator">:</span> ReactContext<span class="token operator">&lt;</span>any<span class="token operator">&gt;</span> <span class="token operator">=</span> providerType<span class="token punctuation">.</span>_context<span class="token punctuation">;</span>

  <span class="token keyword">const</span> newProps <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>pendingProps<span class="token punctuation">;</span>
  <span class="token keyword">const</span> oldProps <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>memoizedProps<span class="token punctuation">;</span>

  <span class="token keyword">const</span> newValue <span class="token operator">=</span> newProps<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
  workInProgress<span class="token punctuation">.</span>memoizedProps <span class="token operator">=</span> newProps<span class="token punctuation">;</span>

  <span class="token function">pushProvider</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">,</span> newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>oldProps <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> oldValue <span class="token operator">=</span> oldProps<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
    <span class="token keyword">const</span> changedBits <span class="token operator">=</span> <span class="token function">calculateChangedBits</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> newValue<span class="token punctuation">,</span> oldValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>changedBits <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// No change. Bailout early if children are the same.</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>
        oldProps<span class="token punctuation">.</span>children <span class="token operator">===</span> newProps<span class="token punctuation">.</span>children <span class="token operator">&amp;&amp;</span>
        <span class="token operator">!</span><span class="token function">hasLegacyContextChanged</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">bailoutOnAlreadyFinishedWork</span><span class="token punctuation">(</span>
          current<span class="token punctuation">,</span>
          workInProgress<span class="token punctuation">,</span>
          renderExpirationTime<span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// The context value changed. Search for matching consumers and schedule</span>
      <span class="token comment">// them to update.</span>
      <span class="token function">propagateContextChange</span><span class="token punctuation">(</span>
        workInProgress<span class="token punctuation">,</span>
        context<span class="token punctuation">,</span>
        changedBits<span class="token punctuation">,</span>
        renderExpirationTime<span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> newChildren <span class="token operator">=</span> newProps<span class="token punctuation">.</span>children<span class="token punctuation">;</span>
  <span class="token function">reconcileChildren</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> workInProgress<span class="token punctuation">,</span> newChildren<span class="token punctuation">,</span> renderExpirationTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> workInProgress<span class="token punctuation">.</span>child<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br></div></div>`,2);function e(t,o){return p}var l=s(a,[["render",e]]);export{l as default};
