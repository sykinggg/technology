import{a as n}from"./app.6f963528.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><h1 id="commitalllifecycles" tabindex="-1"><a class="header-anchor" href="#commitalllifecycles" aria-hidden="true">#</a> commitAllLifeCycles</h1><h2 id="commitupdatequeue" tabindex="-1"><a class="header-anchor" href="#commitupdatequeue" aria-hidden="true">#</a> commitUpdateQueue</h2><p>\u5BF9\u4E8E<code>ClassComponent</code>\uFF0C\u9700\u8981\u8C03\u7528\u751F\u547D\u5468\u671F\u65B9\u6CD5\u3002\u540C\u65F6\u5BF9\u4E8E\u521B\u5EFA\u4E86\u66F4\u65B0\u7684<code>ClassComponent</code>\uFF0C\u9700\u8981\u5224\u65AD\u8C03\u7528\u7684<code>setState</code>\u662F\u5426\u6709\u56DE\u8C03\u51FD\u6570\uFF0C\u5982\u679C\u6709\u7684\u8BDD\u9700\u8981\u5728\u8FD9\u91CC\u4E00\u8D77\u8C03\u7528\u3002\u6CE8\u610F\u8FD9\u91CC\u628A<code>capturedUpdates</code>\u6302\u5230\u4E86<code>updates</code>\u4E0A\uFF0CReact \u4F1A\u5C1D\u8BD5\u628A\u6355\u83B7\u4EA7\u751F\u7684\u66F4\u65B0\u653E\u5230\u4E0B\u4E00\u6B21\u6E32\u67D3\u4E0A\uFF08\u5982\u679C\u6709\u7684\u8BDD\uFF09\uFF0C\u4F46\u662F\u5982\u679C\u672C\u8EAB\u5DF2\u7ECF\u6CA1\u6709\u66F4\u65B0\u4E86\uFF0C\u5219\u4F1A\u76F4\u63A5\u5220\u9664\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> commitUpdateQueue<span class="token operator">&lt;</span>State<span class="token operator">&gt;</span><span class="token punctuation">(</span>
  <span class="token literal-property property">finishedWork</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span>
  <span class="token literal-property property">finishedQueue</span><span class="token operator">:</span> UpdateQueue<span class="token operator">&lt;</span>State<span class="token operator">&gt;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">instance</span><span class="token operator">:</span> any<span class="token punctuation">,</span>
  <span class="token literal-property property">renderExpirationTime</span><span class="token operator">:</span> ExpirationTime<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5982\u679C\u6709\u4F4E\u4F18\u5148\u7EA7\u7684\u4EFB\u52A1\uFF0C\u5219\u8BA9\u672C\u6B21\u6E32\u67D3\u6355\u83B7\u7684\u66F4\u65B0\u653E\u5230\u4F4E\u4F18\u5148\u7EA7\u7684\u4EFB\u52A1\u4E0A\u6E32\u67D3</span>
  <span class="token comment">// \u8FD9\u91CC\u7684\u5047\u8BBE\u662F\u5F53\u524D\u8282\u70B9\u4E0A\u4F4E\u4F18\u5148\u7EA7\u7684\u4EFB\u52A1\u53EF\u80FD\u53EF\u4EE5\u5904\u7406\u6355\u83B7\u7684\u4EFB\u52A1</span>
  <span class="token comment">// \u5982\u679C\u6CA1\u6709\u4F4E\u4F18\u5148\u7EA7\u7684\u4EFB\u52A1\uFF0C\u5219\u6E05\u9664\u672C\u6B21\u6355\u83B7\u7684\u66F4\u65B0</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>finishedQueue<span class="token punctuation">.</span>firstCapturedUpdate <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Join the captured update list to the end of the normal list.</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>finishedQueue<span class="token punctuation">.</span>lastUpdate <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      finishedQueue<span class="token punctuation">.</span>lastUpdate<span class="token punctuation">.</span>next <span class="token operator">=</span> finishedQueue<span class="token punctuation">.</span>firstCapturedUpdate
      finishedQueue<span class="token punctuation">.</span>lastUpdate <span class="token operator">=</span> finishedQueue<span class="token punctuation">.</span>lastCapturedUpdate
    <span class="token punctuation">}</span>
    <span class="token comment">// Clear the list of captured updates.</span>
    finishedQueue<span class="token punctuation">.</span>firstCapturedUpdate <span class="token operator">=</span> finishedQueue<span class="token punctuation">.</span>lastCapturedUpdate <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// Commit the effects</span>
  <span class="token function">commitUpdateEffects</span><span class="token punctuation">(</span>finishedQueue<span class="token punctuation">.</span>firstEffect<span class="token punctuation">,</span> instance<span class="token punctuation">)</span>
  finishedQueue<span class="token punctuation">.</span>firstEffect <span class="token operator">=</span> finishedQueue<span class="token punctuation">.</span>lastEffect <span class="token operator">=</span> <span class="token keyword">null</span>

  <span class="token function">commitUpdateEffects</span><span class="token punctuation">(</span>finishedQueue<span class="token punctuation">.</span>firstCapturedEffect<span class="token punctuation">,</span> instance<span class="token punctuation">)</span>
  finishedQueue<span class="token punctuation">.</span>firstCapturedEffect <span class="token operator">=</span> finishedQueue<span class="token punctuation">.</span>lastCapturedEffect <span class="token operator">=</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> commitUpdateEffects<span class="token operator">&lt;</span>State<span class="token operator">&gt;</span><span class="token punctuation">(</span>
  <span class="token literal-property property">effect</span><span class="token operator">:</span> Update<span class="token operator">&lt;</span>State<span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token literal-property property">instance</span><span class="token operator">:</span> any<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>effect <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> callback <span class="token operator">=</span> effect<span class="token punctuation">.</span>callback
    <span class="token keyword">if</span> <span class="token punctuation">(</span>callback <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      effect<span class="token punctuation">.</span>callback <span class="token operator">=</span> <span class="token keyword">null</span>
      <span class="token function">callCallback</span><span class="token punctuation">(</span>callback<span class="token punctuation">,</span> instance<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    effect <span class="token operator">=</span> effect<span class="token punctuation">.</span>nextEffect
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><blockquote><p>\u6E90\u7801</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">commitAllLifeCycles</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">finishedRoot</span><span class="token operator">:</span> FiberRoot<span class="token punctuation">,</span>
  <span class="token literal-property property">committedExpirationTime</span><span class="token operator">:</span> ExpirationTime<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>nextEffect <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> effectTag <span class="token operator">=</span> nextEffect<span class="token punctuation">.</span>effectTag

    <span class="token keyword">if</span> <span class="token punctuation">(</span>effectTag <span class="token operator">&amp;</span> <span class="token punctuation">(</span>Update <span class="token operator">|</span> Callback<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">recordEffect</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> current <span class="token operator">=</span> nextEffect<span class="token punctuation">.</span>alternate
      <span class="token function">commitLifeCycles</span><span class="token punctuation">(</span>
        finishedRoot<span class="token punctuation">,</span>
        current<span class="token punctuation">,</span>
        nextEffect<span class="token punctuation">,</span>
        committedExpirationTime<span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>effectTag <span class="token operator">&amp;</span> Ref<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">recordEffect</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token function">commitAttachRef</span><span class="token punctuation">(</span>nextEffect<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> next <span class="token operator">=</span> nextEffect<span class="token punctuation">.</span>nextEffect
    nextEffect<span class="token punctuation">.</span>nextEffect <span class="token operator">=</span> <span class="token keyword">null</span>
    nextEffect <span class="token operator">=</span> next
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">commitLifeCycles</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">finishedRoot</span><span class="token operator">:</span> FiberRoot<span class="token punctuation">,</span>
  <span class="token literal-property property">current</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token literal-property property">finishedWork</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span>
  <span class="token literal-property property">committedExpirationTime</span><span class="token operator">:</span> ExpirationTime<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>finishedWork<span class="token punctuation">.</span>tag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token literal-property property">ClassComponent</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> instance <span class="token operator">=</span> finishedWork<span class="token punctuation">.</span>stateNode
      <span class="token keyword">if</span> <span class="token punctuation">(</span>finishedWork<span class="token punctuation">.</span>effectTag <span class="token operator">&amp;</span> Update<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>current <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">startPhaseTimer</span><span class="token punctuation">(</span>finishedWork<span class="token punctuation">,</span> <span class="token string">&#39;componentDidMount&#39;</span><span class="token punctuation">)</span>
          instance<span class="token punctuation">.</span>props <span class="token operator">=</span> finishedWork<span class="token punctuation">.</span>memoizedProps
          instance<span class="token punctuation">.</span>state <span class="token operator">=</span> finishedWork<span class="token punctuation">.</span>memoizedState
          instance<span class="token punctuation">.</span><span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token function">stopPhaseTimer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> prevProps <span class="token operator">=</span> current<span class="token punctuation">.</span>memoizedProps
          <span class="token keyword">const</span> prevState <span class="token operator">=</span> current<span class="token punctuation">.</span>memoizedState
          <span class="token function">startPhaseTimer</span><span class="token punctuation">(</span>finishedWork<span class="token punctuation">,</span> <span class="token string">&#39;componentDidUpdate&#39;</span><span class="token punctuation">)</span>
          instance<span class="token punctuation">.</span>props <span class="token operator">=</span> finishedWork<span class="token punctuation">.</span>memoizedProps
          instance<span class="token punctuation">.</span>state <span class="token operator">=</span> finishedWork<span class="token punctuation">.</span>memoizedState
          instance<span class="token punctuation">.</span><span class="token function">componentDidUpdate</span><span class="token punctuation">(</span>
            prevProps<span class="token punctuation">,</span>
            prevState<span class="token punctuation">,</span>
            instance<span class="token punctuation">.</span>__reactInternalSnapshotBeforeUpdate<span class="token punctuation">,</span>
          <span class="token punctuation">)</span>
          <span class="token function">stopPhaseTimer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">const</span> updateQueue <span class="token operator">=</span> finishedWork<span class="token punctuation">.</span>updateQueue
      <span class="token keyword">if</span> <span class="token punctuation">(</span>updateQueue <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        instance<span class="token punctuation">.</span>props <span class="token operator">=</span> finishedWork<span class="token punctuation">.</span>memoizedProps
        instance<span class="token punctuation">.</span>state <span class="token operator">=</span> finishedWork<span class="token punctuation">.</span>memoizedState
        <span class="token function">commitUpdateQueue</span><span class="token punctuation">(</span>
          finishedWork<span class="token punctuation">,</span>
          updateQueue<span class="token punctuation">,</span>
          instance<span class="token punctuation">,</span>
          committedExpirationTime<span class="token punctuation">,</span>
        <span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">case</span> <span class="token literal-property property">HostRoot</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> updateQueue <span class="token operator">=</span> finishedWork<span class="token punctuation">.</span>updateQueue
      <span class="token keyword">if</span> <span class="token punctuation">(</span>updateQueue <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> instance <span class="token operator">=</span> <span class="token keyword">null</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>finishedWork<span class="token punctuation">.</span>child <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">switch</span> <span class="token punctuation">(</span>finishedWork<span class="token punctuation">.</span>child<span class="token punctuation">.</span>tag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">case</span> <span class="token literal-property property">HostComponent</span><span class="token operator">:</span>
              instance <span class="token operator">=</span> <span class="token function">getPublicInstance</span><span class="token punctuation">(</span>finishedWork<span class="token punctuation">.</span>child<span class="token punctuation">.</span>stateNode<span class="token punctuation">)</span>
              <span class="token keyword">break</span>
            <span class="token keyword">case</span> <span class="token literal-property property">ClassComponent</span><span class="token operator">:</span>
              instance <span class="token operator">=</span> finishedWork<span class="token punctuation">.</span>child<span class="token punctuation">.</span>stateNode
              <span class="token keyword">break</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token function">commitUpdateQueue</span><span class="token punctuation">(</span>
          finishedWork<span class="token punctuation">,</span>
          updateQueue<span class="token punctuation">,</span>
          instance<span class="token punctuation">,</span>
          committedExpirationTime<span class="token punctuation">,</span>
        <span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">case</span> <span class="token literal-property property">HostComponent</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token literal-property property">instance</span><span class="token operator">:</span> Instance <span class="token operator">=</span> finishedWork<span class="token punctuation">.</span>stateNode
      <span class="token keyword">if</span> <span class="token punctuation">(</span>current <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> finishedWork<span class="token punctuation">.</span>effectTag <span class="token operator">&amp;</span> Update<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> type <span class="token operator">=</span> finishedWork<span class="token punctuation">.</span>type
        <span class="token keyword">const</span> props <span class="token operator">=</span> finishedWork<span class="token punctuation">.</span>memoizedProps
        <span class="token function">commitMount</span><span class="token punctuation">(</span>instance<span class="token punctuation">,</span> type<span class="token punctuation">,</span> props<span class="token punctuation">,</span> finishedWork<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">case</span> <span class="token literal-property property">HostText</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// We have no life-cycles associated with text.</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">case</span> <span class="token literal-property property">HostPortal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// We have no life-cycles associated with portals.</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">case</span> <span class="token literal-property property">Profiler</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>enableProfilerTimer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> onRender <span class="token operator">=</span> finishedWork<span class="token punctuation">.</span>memoizedProps<span class="token punctuation">.</span>onRender

        <span class="token keyword">if</span> <span class="token punctuation">(</span>enableSchedulerTracing<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">onRender</span><span class="token punctuation">(</span>
            finishedWork<span class="token punctuation">.</span>memoizedProps<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
            current <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">?</span> <span class="token string">&#39;mount&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;update&#39;</span><span class="token punctuation">,</span>
            finishedWork<span class="token punctuation">.</span>actualDuration<span class="token punctuation">,</span>
            finishedWork<span class="token punctuation">.</span>treeBaseDuration<span class="token punctuation">,</span>
            finishedWork<span class="token punctuation">.</span>actualStartTime<span class="token punctuation">,</span>
            <span class="token function">getCommitTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            finishedRoot<span class="token punctuation">.</span>memoizedInteractions<span class="token punctuation">,</span>
          <span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token function">onRender</span><span class="token punctuation">(</span>
            finishedWork<span class="token punctuation">.</span>memoizedProps<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
            current <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">?</span> <span class="token string">&#39;mount&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;update&#39;</span><span class="token punctuation">,</span>
            finishedWork<span class="token punctuation">.</span>actualDuration<span class="token punctuation">,</span>
            finishedWork<span class="token punctuation">.</span>treeBaseDuration<span class="token punctuation">,</span>
            finishedWork<span class="token punctuation">.</span>actualStartTime<span class="token punctuation">,</span>
            <span class="token function">getCommitTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">case</span> <span class="token literal-property property">SuspenseComponent</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>finishedWork<span class="token punctuation">.</span>effectTag <span class="token operator">&amp;</span> Callback<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> <span class="token literal-property property">newState</span><span class="token operator">:</span> SuspenseState <span class="token operator">=</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">alreadyCaptured</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token literal-property property">didTimeout</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token literal-property property">timedOutAt</span><span class="token operator">:</span> NoWork<span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
        finishedWork<span class="token punctuation">.</span>memoizedState <span class="token operator">=</span> newState
        <span class="token function">scheduleWork</span><span class="token punctuation">(</span>finishedWork<span class="token punctuation">,</span> Sync<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">let</span> <span class="token literal-property property">oldState</span><span class="token operator">:</span> SuspenseState <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span>
        current <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">?</span> current<span class="token punctuation">.</span>memoizedState <span class="token operator">:</span> <span class="token keyword">null</span>
      <span class="token keyword">let</span> <span class="token literal-property property">newState</span><span class="token operator">:</span> SuspenseState <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> finishedWork<span class="token punctuation">.</span>memoizedState
      <span class="token keyword">let</span> oldDidTimeout <span class="token operator">=</span> oldState <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">?</span> oldState<span class="token punctuation">.</span>didTimeout <span class="token operator">:</span> <span class="token boolean">false</span>

      <span class="token keyword">let</span> newDidTimeout
      <span class="token keyword">let</span> primaryChildParent <span class="token operator">=</span> finishedWork
      <span class="token keyword">if</span> <span class="token punctuation">(</span>newState <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        newDidTimeout <span class="token operator">=</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        newDidTimeout <span class="token operator">=</span> newState<span class="token punctuation">.</span>didTimeout
        <span class="token keyword">if</span> <span class="token punctuation">(</span>newDidTimeout<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          primaryChildParent <span class="token operator">=</span> finishedWork<span class="token punctuation">.</span>child
          newState<span class="token punctuation">.</span>alreadyCaptured <span class="token operator">=</span> <span class="token boolean">false</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>newState<span class="token punctuation">.</span>timedOutAt <span class="token operator">===</span> NoWork<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            newState<span class="token punctuation">.</span>timedOutAt <span class="token operator">=</span> <span class="token function">requestCurrentTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>newDidTimeout <span class="token operator">!==</span> oldDidTimeout <span class="token operator">&amp;&amp;</span> primaryChildParent <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">hideOrUnhideAllChildren</span><span class="token punctuation">(</span>primaryChildParent<span class="token punctuation">,</span> newDidTimeout<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">case</span> <span class="token literal-property property">IncompleteClassComponent</span><span class="token operator">:</span>
      <span class="token keyword">break</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">invariant</span><span class="token punctuation">(</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token string">&#39;This unit of work tag should not have side-effects. This error is &#39;</span> <span class="token operator">+</span>
          <span class="token string">&#39;likely caused by a bug in React. Please file an issue.&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br></div></div>`,7);function e(t,o){return p}var r=s(a,[["render",e]]);export{r as default};
