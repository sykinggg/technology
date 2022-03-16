import{a as n}from"./app.b05da4ec.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><h1 id="commitroot" tabindex="-1"><a class="header-anchor" href="#commitroot" aria-hidden="true">#</a> commitRoot</h1><p>\u9996\u5148\u8981\u6807\u8BB0\u4F18\u5148\u7EA7\uFF0C\u56E0\u4E3A\u6709\u4E00\u90E8\u5206\u4F18\u5148\u7EA7\u7684\u4EFB\u52A1\u5DF2\u7ECF\u88AB\u63D0\u4EA4\u4E86\uFF0C\u6240\u4EE5\u9700\u8981\u6E05\u695A\u4E00\u4E9B\u76F8\u5173\u7684\u4F18\u5148\u7EA7\u3002\u88AB\u63D0\u4EA4\u7684\u4EFB\u52A1\u5E94\u8BE5\u662F\uFF1A</p><ul><li><p>\u5B50\u6811\u4E2D\u4F18\u5148\u7EA7\u6700\u9AD8\u7684\u4EFB\u52A1</p></li><li><p>\u6216\u8005\u5916\u90E8\u6307\u5B9A\u7684\u4F18\u5148\u7EA7\uFF08<code>flushSync</code>\u6216\u8005<code>retry</code>\uFF09</p></li></ul><p>\u5982\u679C<code>RootFiber</code>\u672C\u8EAB\u4E5F\u6709\u526F\u4F5C\u7528\uFF08\u4E00\u822C\u53EA\u6709\u7B2C\u4E00\u6B21\uFF09\uFF0C\u90A3\u4E48\u4ED6\u672C\u8EAB\u4E5F\u8981\u52A0\u5230<code>effect</code>\u94FE\u4E0A\uFF0C\u653E\u5728\u6700\u540E\u3002</p><p>\u63A5\u4E0B\u53BB\u662F\u4E09\u4E2A\u63D0\u4EA4\u64CD\u4F5C\uFF0C\u5206\u522B\u662F\uFF1A</p><ul><li><p><a href="">\u63D0\u4EA4Snapshot</a></p></li><li><p><a href="">\u63D0\u4EA4HostComponent\u7684 side effect\`</a></p></li><li><p><a href="">\u63D0\u4EA4\u6240\u6709\u7EC4\u4EF6\u7684\u751F\u547D\u5468\u671F</a></p></li></ul><p>\u6CE8\u610F\u8FD9\u91CC\u7528\u5230\u4E86\u4E00\u4E2A\u65B9\u6CD5<code>invokeGuardedCallback</code>\uFF0C\u53EA\u6709\u5728\u5F00\u53D1\u73AF\u5883\u624D\u4F1A\u4F7F\u7528\uFF0C\u90A3\u4E48\u4ED6\u662F\u5E72\u561B\u7684\u5462\uFF1F<a href="">\u770B\u8FD9\u91CC</a></p><blockquote><p>\u6E90\u7801</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">commitRoot</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">root</span><span class="token operator">:</span> FiberRoot<span class="token punctuation">,</span> <span class="token literal-property property">finishedWork</span><span class="token operator">:</span> Fiber</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  isWorking <span class="token operator">=</span> <span class="token boolean">true</span>
  isCommitting <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token function">startCommitTimer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token function">invariant</span><span class="token punctuation">(</span>
    root<span class="token punctuation">.</span>current <span class="token operator">!==</span> finishedWork<span class="token punctuation">,</span>
    <span class="token string">&#39;Cannot commit the same tree as before. This is probably a bug &#39;</span> <span class="token operator">+</span>
      <span class="token string">&#39;related to the return field. This error is likely caused by a bug &#39;</span> <span class="token operator">+</span>
      <span class="token string">&#39;in React. Please file an issue.&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span>
  <span class="token keyword">const</span> committedExpirationTime <span class="token operator">=</span> root<span class="token punctuation">.</span>pendingCommitExpirationTime
  <span class="token function">invariant</span><span class="token punctuation">(</span>
    committedExpirationTime <span class="token operator">!==</span> NoWork<span class="token punctuation">,</span>
    <span class="token string">&#39;Cannot commit an incomplete root. This error is likely caused by a &#39;</span> <span class="token operator">+</span>
      <span class="token string">&#39;bug in React. Please file an issue.&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span>
  root<span class="token punctuation">.</span>pendingCommitExpirationTime <span class="token operator">=</span> NoWork

  <span class="token keyword">const</span> updateExpirationTimeBeforeCommit <span class="token operator">=</span> finishedWork<span class="token punctuation">.</span>expirationTime
  <span class="token keyword">const</span> childExpirationTimeBeforeCommit <span class="token operator">=</span> finishedWork<span class="token punctuation">.</span>childExpirationTime
  <span class="token keyword">const</span> earliestRemainingTimeBeforeCommit <span class="token operator">=</span>
    updateExpirationTimeBeforeCommit <span class="token operator">===</span> NoWork <span class="token operator">||</span>
    <span class="token punctuation">(</span>childExpirationTimeBeforeCommit <span class="token operator">!==</span> NoWork <span class="token operator">&amp;&amp;</span>
      childExpirationTimeBeforeCommit <span class="token operator">&lt;</span> updateExpirationTimeBeforeCommit<span class="token punctuation">)</span>
      <span class="token operator">?</span> childExpirationTimeBeforeCommit
      <span class="token operator">:</span> updateExpirationTimeBeforeCommit
  <span class="token function">markCommittedPriorityLevels</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> earliestRemainingTimeBeforeCommit<span class="token punctuation">)</span>

  <span class="token keyword">let</span> <span class="token literal-property property">prevInteractions</span><span class="token operator">:</span> Set<span class="token operator">&lt;</span>Interaction<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">null</span><span class="token operator">:</span> any<span class="token punctuation">)</span>

  <span class="token comment">// Reset this to null before calling lifecycles</span>
  ReactCurrentOwner<span class="token punctuation">.</span>current <span class="token operator">=</span> <span class="token keyword">null</span>

  <span class="token keyword">let</span> firstEffect
  <span class="token keyword">if</span> <span class="token punctuation">(</span>finishedWork<span class="token punctuation">.</span>effectTag <span class="token operator">&gt;</span> PerformedWork<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// A fiber&#39;s effect list consists only of its children, not itself. So if</span>
    <span class="token comment">// the root has an effect, we need to add it to the end of the list. The</span>
    <span class="token comment">// resulting list is the set that would belong to the root&#39;s parent, if</span>
    <span class="token comment">// it had one; that is, all the effects in the tree including the root.</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>finishedWork<span class="token punctuation">.</span>lastEffect <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      finishedWork<span class="token punctuation">.</span>lastEffect<span class="token punctuation">.</span>nextEffect <span class="token operator">=</span> finishedWork
      firstEffect <span class="token operator">=</span> finishedWork<span class="token punctuation">.</span>firstEffect
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      firstEffect <span class="token operator">=</span> finishedWork
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// There is no effect on the root.</span>
    firstEffect <span class="token operator">=</span> finishedWork<span class="token punctuation">.</span>firstEffect
  <span class="token punctuation">}</span>

  <span class="token function">prepareForCommit</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>containerInfo<span class="token punctuation">)</span>

  <span class="token comment">// Invoke instances of getSnapshotBeforeUpdate before mutation.</span>
  nextEffect <span class="token operator">=</span> firstEffect
  <span class="token function">startCommitSnapshotEffectsTimer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>nextEffect <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> didError <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token keyword">let</span> error
    <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">invokeGuardedCallback</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> commitBeforeMutationLifecycles<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">hasCaughtError</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        didError <span class="token operator">=</span> <span class="token boolean">true</span>
        error <span class="token operator">=</span> <span class="token function">clearCaughtError</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token function">commitBeforeMutationLifecycles</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        didError <span class="token operator">=</span> <span class="token boolean">true</span>
        error <span class="token operator">=</span> e
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>didError<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">invariant</span><span class="token punctuation">(</span>
        nextEffect <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
        <span class="token string">&#39;Should have next effect. This error is likely caused by a bug &#39;</span> <span class="token operator">+</span>
          <span class="token string">&#39;in React. Please file an issue.&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
      <span class="token function">captureCommitPhaseError</span><span class="token punctuation">(</span>nextEffect<span class="token punctuation">,</span> error<span class="token punctuation">)</span>
      <span class="token comment">// Clean-up</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>nextEffect <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        nextEffect <span class="token operator">=</span> nextEffect<span class="token punctuation">.</span>nextEffect
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token function">stopCommitSnapshotEffectsTimer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  nextEffect <span class="token operator">=</span> firstEffect
  <span class="token function">startCommitHostEffectsTimer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>nextEffect <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> didError <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token keyword">let</span> error
    <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">invokeGuardedCallback</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> commitAllHostEffects<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">hasCaughtError</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        didError <span class="token operator">=</span> <span class="token boolean">true</span>
        error <span class="token operator">=</span> <span class="token function">clearCaughtError</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token function">commitAllHostEffects</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        didError <span class="token operator">=</span> <span class="token boolean">true</span>
        error <span class="token operator">=</span> e
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>didError<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">invariant</span><span class="token punctuation">(</span>
        nextEffect <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
        <span class="token string">&#39;Should have next effect. This error is likely caused by a bug &#39;</span> <span class="token operator">+</span>
          <span class="token string">&#39;in React. Please file an issue.&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
      <span class="token function">captureCommitPhaseError</span><span class="token punctuation">(</span>nextEffect<span class="token punctuation">,</span> error<span class="token punctuation">)</span>
      <span class="token comment">// Clean-up</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>nextEffect <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        nextEffect <span class="token operator">=</span> nextEffect<span class="token punctuation">.</span>nextEffect
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token function">stopCommitHostEffectsTimer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token function">resetAfterCommit</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>containerInfo<span class="token punctuation">)</span>

  root<span class="token punctuation">.</span>current <span class="token operator">=</span> finishedWork

  nextEffect <span class="token operator">=</span> firstEffect
  <span class="token function">startCommitLifeCyclesTimer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>nextEffect <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> didError <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token keyword">let</span> error
    <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">invokeGuardedCallback</span><span class="token punctuation">(</span>
        <span class="token keyword">null</span><span class="token punctuation">,</span>
        commitAllLifeCycles<span class="token punctuation">,</span>
        <span class="token keyword">null</span><span class="token punctuation">,</span>
        root<span class="token punctuation">,</span>
        committedExpirationTime<span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">hasCaughtError</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        didError <span class="token operator">=</span> <span class="token boolean">true</span>
        error <span class="token operator">=</span> <span class="token function">clearCaughtError</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token function">commitAllLifeCycles</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> committedExpirationTime<span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        didError <span class="token operator">=</span> <span class="token boolean">true</span>
        error <span class="token operator">=</span> e
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>didError<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">invariant</span><span class="token punctuation">(</span>
        nextEffect <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
        <span class="token string">&#39;Should have next effect. This error is likely caused by a bug &#39;</span> <span class="token operator">+</span>
          <span class="token string">&#39;in React. Please file an issue.&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
      <span class="token function">captureCommitPhaseError</span><span class="token punctuation">(</span>nextEffect<span class="token punctuation">,</span> error<span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>nextEffect <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        nextEffect <span class="token operator">=</span> nextEffect<span class="token punctuation">.</span>nextEffect
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  isCommitting <span class="token operator">=</span> <span class="token boolean">false</span>
  isWorking <span class="token operator">=</span> <span class="token boolean">false</span>
  <span class="token function">stopCommitLifeCyclesTimer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token function">stopCommitTimer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token function">onCommitRoot</span><span class="token punctuation">(</span>finishedWork<span class="token punctuation">.</span>stateNode<span class="token punctuation">)</span>

  <span class="token keyword">const</span> updateExpirationTimeAfterCommit <span class="token operator">=</span> finishedWork<span class="token punctuation">.</span>expirationTime
  <span class="token keyword">const</span> childExpirationTimeAfterCommit <span class="token operator">=</span> finishedWork<span class="token punctuation">.</span>childExpirationTime
  <span class="token keyword">const</span> earliestRemainingTimeAfterCommit <span class="token operator">=</span>
    updateExpirationTimeAfterCommit <span class="token operator">===</span> NoWork <span class="token operator">||</span>
    <span class="token punctuation">(</span>childExpirationTimeAfterCommit <span class="token operator">!==</span> NoWork <span class="token operator">&amp;&amp;</span>
      childExpirationTimeAfterCommit <span class="token operator">&lt;</span> updateExpirationTimeAfterCommit<span class="token punctuation">)</span>
      <span class="token operator">?</span> childExpirationTimeAfterCommit
      <span class="token operator">:</span> updateExpirationTimeAfterCommit
  <span class="token keyword">if</span> <span class="token punctuation">(</span>earliestRemainingTimeAfterCommit <span class="token operator">===</span> NoWork<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// If there&#39;s no remaining work, we can clear the set of already failed</span>
    <span class="token comment">// error boundaries.</span>
    legacyErrorBoundariesThatAlreadyFailed <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>
  <span class="token function">onCommit</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> earliestRemainingTimeAfterCommit<span class="token punctuation">)</span>

  <span class="token comment">// profiler \u76F8\u5173</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br></div></div>`,10);function e(t,o){return p}var r=s(a,[["render",e]]);export{r as default};
