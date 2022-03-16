import{a as n}from"./app.b05da4ec.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="beginwork" tabindex="-1"><a class="header-anchor" href="#beginwork" aria-hidden="true">#</a> beginWork</h1><p>\u8FD9\u4E2A\u7248\u672C React \u4F18\u5316\u4E86\u662F\u5426\u9700\u8981\u66F4\u65B0\u7684\u9A8C\u8BC1\uFF0C\u76F4\u63A5\u653E\u5728<code>beginWork</code>\u7684\u9876\u90E8</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>
  oldProps <span class="token operator">===</span> newProps <span class="token operator">&amp;&amp;</span>
  <span class="token operator">!</span><span class="token function">hasLegacyContextChanged</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
  <span class="token punctuation">(</span>updateExpirationTime <span class="token operator">===</span> NoWork <span class="token operator">||</span>
    updateExpirationTime <span class="token operator">&gt;</span> renderExpirationTime<span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u8FD9\u91CC\u5224\u65AD\u4E86\uFF1A</p><ul><li><p>\u524D\u540E<code>props</code>\u662F\u5426\u76F8\u7B49</p></li><li><p><code>hasLegacyContextChanged</code>\u5224\u65AD\u4E86\u662F\u5426\u6709\u8001\u7248\u672C<code>context</code>\u4F7F\u7528\u5E76\u4E14\u53D1\u751F\u53D8\u5316</p></li><li><p>\u5F53\u524D\u8282\u70B9\u662F\u5426\u9700\u8981\u66F4\u65B0\u4EE5\u53CA\u4ED6\u7684\u66F4\u65B0\u4F18\u5148\u7EA7\u662F\u5426\u5728\u5F53\u524D\u66F4\u65B0\u4F18\u5148\u7EA7\u4E4B\u524D</p></li></ul><p>\u53EA\u8981\u6EE1\u8DB3\u8FD9\u4E09\u4E2A\u6761\u4EF6\u90FD\u4E0D\u5B58\u5728\uFF0C\u90A3\u4E48 React \u5224\u65AD\u5F53\u524D\u8282\u70B9\u662F\u4E0D\u9700\u8981\u66F4\u65B0\u7684\uFF0C\u6267\u884C\u4E00\u4E9B\u5FC5\u8981\u64CD\u4F5C\u4E4B\u540E\u5C31\u53EF\u4EE5\u8DF3\u8FC7\u4E86\u3002</p><p>\u5FC5\u8981\u64CD\u4F5C\u65E0\u975E\u5C31\u662F\uFF1A</p><ul><li><p>\u5982\u679C\u63D0\u9AD8\u8001\u7248\u672C<code>context</code>\uFF0C\u8981\u5165\u6808</p></li><li><p>\u5982\u679C\u662F<code>host container</code>\u4E5F\u8981\u5982\u6808</p></li><li><p>\u7279\u6B8A\u7EC4\u4EF6\u5982<code>Suspense</code>\u7684\u7279\u6B8A\u5904\u7406</p></li></ul><p><strong>bailoutOnAlreadyFinishedWork</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">bailoutOnAlreadyFinishedWork</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">current</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token literal-property property">workInProgress</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span>
  <span class="token literal-property property">renderExpirationTime</span><span class="token operator">:</span> ExpirationTime<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> childExpirationTime <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>childExpirationTime
  <span class="token keyword">if</span> <span class="token punctuation">(</span>
    childExpirationTime <span class="token operator">===</span> NoWork <span class="token operator">||</span>
    childExpirationTime <span class="token operator">&gt;</span> renderExpirationTime
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">cloneChildFibers</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> workInProgress<span class="token punctuation">)</span>
    <span class="token keyword">return</span> workInProgress<span class="token punctuation">.</span>child
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u8FD9\u91CC\u6839\u636E\u4E4B\u524D\u8BBE\u7F6E\u7684<code>childExpirationTime</code>\u6765\u5224\u65AD\u5B50\u6811\u662F\u5426\u9700\u8981\u66F4\u65B0\uFF0C\u5982\u679C\u5B50\u6811\u4E5F\u4E0D\u9700\u8981\u66F4\u65B0\u5219\u5C31\u76F4\u63A5<code>return null</code>\u4E86\uFF0C\u4EE3\u8868\u53EF\u4EE5\u76F4\u63A5<code>complete</code>\u4E86\u3002\u5982\u679C\u6709\u66F4\u65B0\u8FD8\u662F\u9700\u8981\u8C03\u548C\u5B50\u8282\u70B9\u3002</p><p>\u5982\u679C\u4E0D\u80FD\u8DF3\u8FC7\uFF0C\u90A3\u4E48\u5C31\u6839\u636E\u8282\u70B9\u7C7B\u578B\u8FDB\u884C\u66F4\u65B0\u4E86\uFF1A</p><ul><li><p><a href="">mountIndeterminateComponent</a></p></li><li><p><a href="">mountLazyComponent</a></p></li><li><p><a href="">updateFunctionComponent</a></p></li><li><p><a href="">updateClassComponent</a></p></li><li><p><a href="">updateHostRoot</a></p></li><li><p><a href="">updateHostComponent</a></p></li><li><p><a href="">updateHostText</a></p></li><li><p><a href="">updateSuspenseComponent</a></p></li><li><p><a href="">updatePortalComponent</a></p></li><li><p><a href="">updateForwardRef</a></p></li><li><p><a href="">updateFragment</a></p></li><li><p><a href="">updateMode</a></p></li><li><p><a href="">updateProfiler</a></p></li><li><p><a href="">updateContextProvider</a></p></li><li><p><a href="">updateContextConsumer</a></p></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">beginWork</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">current</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token literal-property property">workInProgress</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span>
  <span class="token literal-property property">renderExpirationTime</span><span class="token operator">:</span> ExpirationTime<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> updateExpirationTime <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>expirationTime

  <span class="token keyword">if</span> <span class="token punctuation">(</span>current <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> oldProps <span class="token operator">=</span> current<span class="token punctuation">.</span>memoizedProps
    <span class="token keyword">const</span> newProps <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>pendingProps
    <span class="token keyword">if</span> <span class="token punctuation">(</span>
      oldProps <span class="token operator">===</span> newProps <span class="token operator">&amp;&amp;</span>
      <span class="token operator">!</span><span class="token function">hasLegacyContextChanged</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
      <span class="token punctuation">(</span>updateExpirationTime <span class="token operator">===</span> NoWork <span class="token operator">||</span>
        updateExpirationTime <span class="token operator">&gt;</span> renderExpirationTime<span class="token punctuation">)</span>
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// This fiber does not have any pending work. Bailout without entering</span>
      <span class="token comment">// the begin phase. There&#39;s still some bookkeeping we that needs to be done</span>
      <span class="token comment">// in this optimized path, mostly pushing stuff onto the stack.</span>
      <span class="token keyword">switch</span> <span class="token punctuation">(</span>workInProgress<span class="token punctuation">.</span>tag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token literal-property property">HostRoot</span><span class="token operator">:</span>
          <span class="token function">pushHostRootContext</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">)</span>
          <span class="token function">resetHydrationState</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token keyword">break</span>
        <span class="token keyword">case</span> <span class="token literal-property property">HostComponent</span><span class="token operator">:</span>
          <span class="token function">pushHostContext</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">)</span>
          <span class="token keyword">break</span>
        <span class="token keyword">case</span> <span class="token literal-property property">ClassComponent</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> Component <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>type
          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isLegacyContextProvider</span><span class="token punctuation">(</span>Component<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">pushLegacyContextProvider</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
          <span class="token keyword">break</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">case</span> <span class="token literal-property property">HostPortal</span><span class="token operator">:</span>
          <span class="token function">pushHostContainer</span><span class="token punctuation">(</span>
            workInProgress<span class="token punctuation">,</span>
            workInProgress<span class="token punctuation">.</span>stateNode<span class="token punctuation">.</span>containerInfo<span class="token punctuation">,</span>
          <span class="token punctuation">)</span>
          <span class="token keyword">break</span>
        <span class="token keyword">case</span> <span class="token literal-property property">ContextProvider</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> newValue <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>memoizedProps<span class="token punctuation">.</span>value
          <span class="token function">pushProvider</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">,</span> newValue<span class="token punctuation">)</span>
          <span class="token keyword">break</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">case</span> <span class="token literal-property property">Profiler</span><span class="token operator">:</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>enableProfilerTimer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            workInProgress<span class="token punctuation">.</span>effectTag <span class="token operator">|=</span> Update
          <span class="token punctuation">}</span>
          <span class="token keyword">break</span>
        <span class="token keyword">case</span> <span class="token literal-property property">SuspenseComponent</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> <span class="token literal-property property">state</span><span class="token operator">:</span> SuspenseState <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>memoizedState
          <span class="token keyword">const</span> didTimeout <span class="token operator">=</span> state <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> state<span class="token punctuation">.</span>didTimeout
          <span class="token keyword">if</span> <span class="token punctuation">(</span>didTimeout<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> <span class="token literal-property property">primaryChildFragment</span><span class="token operator">:</span> Fiber <span class="token operator">=</span> <span class="token punctuation">(</span>workInProgress<span class="token punctuation">.</span>child<span class="token operator">:</span> any<span class="token punctuation">)</span>
            <span class="token keyword">const</span> primaryChildExpirationTime <span class="token operator">=</span>
              primaryChildFragment<span class="token punctuation">.</span>childExpirationTime
            <span class="token keyword">if</span> <span class="token punctuation">(</span>
              primaryChildExpirationTime <span class="token operator">!==</span> NoWork <span class="token operator">&amp;&amp;</span>
              primaryChildExpirationTime <span class="token operator">&lt;=</span> renderExpirationTime
            <span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token keyword">return</span> <span class="token function">updateSuspenseComponent</span><span class="token punctuation">(</span>
                current<span class="token punctuation">,</span>
                workInProgress<span class="token punctuation">,</span>
                renderExpirationTime<span class="token punctuation">,</span>
              <span class="token punctuation">)</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
              <span class="token keyword">const</span> child <span class="token operator">=</span> <span class="token function">bailoutOnAlreadyFinishedWork</span><span class="token punctuation">(</span>
                current<span class="token punctuation">,</span>
                workInProgress<span class="token punctuation">,</span>
                renderExpirationTime<span class="token punctuation">,</span>
              <span class="token punctuation">)</span>
              <span class="token keyword">if</span> <span class="token punctuation">(</span>child <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> child<span class="token punctuation">.</span>sibling
              <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token keyword">null</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
          <span class="token keyword">break</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token function">bailoutOnAlreadyFinishedWork</span><span class="token punctuation">(</span>
        current<span class="token punctuation">,</span>
        workInProgress<span class="token punctuation">,</span>
        renderExpirationTime<span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// Before entering the begin phase, clear the expiration time.</span>
  workInProgress<span class="token punctuation">.</span>expirationTime <span class="token operator">=</span> NoWork

  <span class="token keyword">switch</span> <span class="token punctuation">(</span>workInProgress<span class="token punctuation">.</span>tag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token literal-property property">IndeterminateComponent</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> elementType <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>elementType
      <span class="token keyword">return</span> <span class="token function">mountIndeterminateComponent</span><span class="token punctuation">(</span>
        current<span class="token punctuation">,</span>
        workInProgress<span class="token punctuation">,</span>
        elementType<span class="token punctuation">,</span>
        renderExpirationTime<span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">case</span> <span class="token literal-property property">LazyComponent</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> elementType <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>elementType
      <span class="token keyword">return</span> <span class="token function">mountLazyComponent</span><span class="token punctuation">(</span>
        current<span class="token punctuation">,</span>
        workInProgress<span class="token punctuation">,</span>
        elementType<span class="token punctuation">,</span>
        updateExpirationTime<span class="token punctuation">,</span>
        renderExpirationTime<span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">case</span> <span class="token literal-property property">FunctionComponent</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> Component <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>type
      <span class="token keyword">const</span> unresolvedProps <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>pendingProps
      <span class="token keyword">const</span> resolvedProps <span class="token operator">=</span>
        workInProgress<span class="token punctuation">.</span>elementType <span class="token operator">===</span> Component
          <span class="token operator">?</span> unresolvedProps
          <span class="token operator">:</span> <span class="token function">resolveDefaultProps</span><span class="token punctuation">(</span>Component<span class="token punctuation">,</span> unresolvedProps<span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token function">updateFunctionComponent</span><span class="token punctuation">(</span>
        current<span class="token punctuation">,</span>
        workInProgress<span class="token punctuation">,</span>
        Component<span class="token punctuation">,</span>
        resolvedProps<span class="token punctuation">,</span>
        renderExpirationTime<span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">case</span> <span class="token literal-property property">ClassComponent</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> Component <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>type
      <span class="token keyword">const</span> unresolvedProps <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>pendingProps
      <span class="token keyword">const</span> resolvedProps <span class="token operator">=</span>
        workInProgress<span class="token punctuation">.</span>elementType <span class="token operator">===</span> Component
          <span class="token operator">?</span> unresolvedProps
          <span class="token operator">:</span> <span class="token function">resolveDefaultProps</span><span class="token punctuation">(</span>Component<span class="token punctuation">,</span> unresolvedProps<span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token function">updateClassComponent</span><span class="token punctuation">(</span>
        current<span class="token punctuation">,</span>
        workInProgress<span class="token punctuation">,</span>
        Component<span class="token punctuation">,</span>
        resolvedProps<span class="token punctuation">,</span>
        renderExpirationTime<span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">case</span> <span class="token literal-property property">HostRoot</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token function">updateHostRoot</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> workInProgress<span class="token punctuation">,</span> renderExpirationTime<span class="token punctuation">)</span>
    <span class="token keyword">case</span> <span class="token literal-property property">HostComponent</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token function">updateHostComponent</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> workInProgress<span class="token punctuation">,</span> renderExpirationTime<span class="token punctuation">)</span>
    <span class="token keyword">case</span> <span class="token literal-property property">HostText</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token function">updateHostText</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> workInProgress<span class="token punctuation">)</span>
    <span class="token keyword">case</span> <span class="token literal-property property">SuspenseComponent</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token function">updateSuspenseComponent</span><span class="token punctuation">(</span>
        current<span class="token punctuation">,</span>
        workInProgress<span class="token punctuation">,</span>
        renderExpirationTime<span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
    <span class="token keyword">case</span> <span class="token literal-property property">HostPortal</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token function">updatePortalComponent</span><span class="token punctuation">(</span>
        current<span class="token punctuation">,</span>
        workInProgress<span class="token punctuation">,</span>
        renderExpirationTime<span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
    <span class="token keyword">case</span> <span class="token literal-property property">ForwardRef</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> type <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>type
      <span class="token keyword">const</span> unresolvedProps <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>pendingProps
      <span class="token keyword">const</span> resolvedProps <span class="token operator">=</span>
        workInProgress<span class="token punctuation">.</span>elementType <span class="token operator">===</span> type
          <span class="token operator">?</span> unresolvedProps
          <span class="token operator">:</span> <span class="token function">resolveDefaultProps</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> unresolvedProps<span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token function">updateForwardRef</span><span class="token punctuation">(</span>
        current<span class="token punctuation">,</span>
        workInProgress<span class="token punctuation">,</span>
        type<span class="token punctuation">,</span>
        resolvedProps<span class="token punctuation">,</span>
        renderExpirationTime<span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">case</span> <span class="token literal-property property">Fragment</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token function">updateFragment</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> workInProgress<span class="token punctuation">,</span> renderExpirationTime<span class="token punctuation">)</span>
    <span class="token keyword">case</span> <span class="token literal-property property">Mode</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token function">updateMode</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> workInProgress<span class="token punctuation">,</span> renderExpirationTime<span class="token punctuation">)</span>
    <span class="token keyword">case</span> <span class="token literal-property property">Profiler</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token function">updateProfiler</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> workInProgress<span class="token punctuation">,</span> renderExpirationTime<span class="token punctuation">)</span>
    <span class="token keyword">case</span> <span class="token literal-property property">ContextProvider</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token function">updateContextProvider</span><span class="token punctuation">(</span>
        current<span class="token punctuation">,</span>
        workInProgress<span class="token punctuation">,</span>
        renderExpirationTime<span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
    <span class="token keyword">case</span> <span class="token literal-property property">ContextConsumer</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token function">updateContextConsumer</span><span class="token punctuation">(</span>
        current<span class="token punctuation">,</span>
        workInProgress<span class="token punctuation">,</span>
        renderExpirationTime<span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
    <span class="token keyword">case</span> <span class="token literal-property property">MemoComponent</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> type <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>type
      <span class="token keyword">const</span> unresolvedProps <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>pendingProps
      <span class="token keyword">const</span> resolvedProps <span class="token operator">=</span> <span class="token function">resolveDefaultProps</span><span class="token punctuation">(</span>type<span class="token punctuation">.</span>type<span class="token punctuation">,</span> unresolvedProps<span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token function">updateMemoComponent</span><span class="token punctuation">(</span>
        current<span class="token punctuation">,</span>
        workInProgress<span class="token punctuation">,</span>
        type<span class="token punctuation">,</span>
        resolvedProps<span class="token punctuation">,</span>
        updateExpirationTime<span class="token punctuation">,</span>
        renderExpirationTime<span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">case</span> <span class="token literal-property property">SimpleMemoComponent</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">updateSimpleMemoComponent</span><span class="token punctuation">(</span>
        current<span class="token punctuation">,</span>
        workInProgress<span class="token punctuation">,</span>
        workInProgress<span class="token punctuation">.</span>type<span class="token punctuation">,</span>
        workInProgress<span class="token punctuation">.</span>pendingProps<span class="token punctuation">,</span>
        updateExpirationTime<span class="token punctuation">,</span>
        renderExpirationTime<span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">case</span> <span class="token literal-property property">IncompleteClassComponent</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> Component <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>type
      <span class="token keyword">const</span> unresolvedProps <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>pendingProps
      <span class="token keyword">const</span> resolvedProps <span class="token operator">=</span>
        workInProgress<span class="token punctuation">.</span>elementType <span class="token operator">===</span> Component
          <span class="token operator">?</span> unresolvedProps
          <span class="token operator">:</span> <span class="token function">resolveDefaultProps</span><span class="token punctuation">(</span>Component<span class="token punctuation">,</span> unresolvedProps<span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token function">mountIncompleteClassComponent</span><span class="token punctuation">(</span>
        current<span class="token punctuation">,</span>
        workInProgress<span class="token punctuation">,</span>
        Component<span class="token punctuation">,</span>
        resolvedProps<span class="token punctuation">,</span>
        renderExpirationTime<span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
      <span class="token function">invariant</span><span class="token punctuation">(</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token string">&#39;Unknown unit of work tag. This error is likely caused by a bug in &#39;</span> <span class="token operator">+</span>
          <span class="token string">&#39;React. Please file an issue.&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br><span class="line-number">218</span><br><span class="line-number">219</span><br><span class="line-number">220</span><br><span class="line-number">221</span><br><span class="line-number">222</span><br><span class="line-number">223</span><br><span class="line-number">224</span><br><span class="line-number">225</span><br><span class="line-number">226</span><br><span class="line-number">227</span><br><span class="line-number">228</span><br><span class="line-number">229</span><br><span class="line-number">230</span><br><span class="line-number">231</span><br><span class="line-number">232</span><br><span class="line-number">233</span><br><span class="line-number">234</span><br><span class="line-number">235</span><br><span class="line-number">236</span><br><span class="line-number">237</span><br><span class="line-number">238</span><br><span class="line-number">239</span><br><span class="line-number">240</span><br></div></div>`,14);function e(o,t){return p}var c=s(a,[["render",e]]);export{c as default};
