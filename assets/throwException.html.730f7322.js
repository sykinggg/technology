import{a as n}from"./app.ba47fc91.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="throwexception" tabindex="-1"><a class="header-anchor" href="#throwexception" aria-hidden="true">#</a> throwException</h1><p>\u9996\u5148\u7ED9\u8FD9\u4E2A<code>Fiber</code>\u52A0\u4E0A<code>Incomplete</code>\u7684<code>side effect</code>\uFF0C\u5E76\u4E14\u6E05\u7A7A<code>effect</code>\u94FE</p><p>\u4E3B\u8981\u5206\u4E3A<code>suspend</code>\u548C<code>did error</code>\u4E24\u79CD\u60C5\u51B5</p><h2 id="suspend" tabindex="-1"><a class="header-anchor" href="#suspend" aria-hidden="true">#</a> suspend</h2><p>\u9700\u8981\u7B26\u5408\u6761\u4EF6\uFF1A<code>throw value</code>\u662F\u4E00\u4E2A<code>promise</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>
  value <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span>
  <span class="token keyword">typeof</span> value <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">&amp;&amp;</span>
  <span class="token keyword">typeof</span> value<span class="token punctuation">.</span>then <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u5904\u7406\u8FD9\u79CD\u60C5\u51B5\u4F1A\u6709\u4E24\u4E2A\u5FAA\u73AF\uFF0C\u5728\u8FD9\u4E4B\u524D\u521D\u59CB\u5316\u4E86\u4E24\u4E2A\u53D8\u91CF<code>earliestTimeoutMs</code>\u548C<code>startTimeMs</code>\uFF0C\u90FD\u662F<code>-1</code></p><h3 id="\u7B2C\u4E00\u4E2A\u5FAA\u73AF" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E00\u4E2A\u5FAA\u73AF" aria-hidden="true">#</a> \u7B2C\u4E00\u4E2A\u5FAA\u73AF</h3><p>\u8FD9\u4E2A\u5FAA\u73AF\u4E3B\u8981\u662F\u8BA1\u7B97\u521D\u59CB\u5316\u7684\u4E24\u4E2A\u503C\u3002\u4ED6\u4EEC\u53EA\u8DDF<code>Suspense</code>\u6709\u5173\u7CFB\uFF0C<code>timeOutAt</code>\u662F\u5728<code>commitWork</code>\u7684\u65F6\u5019\u8BBE\u7F6E\u7684\uFF0C\u6240\u4EE5\u7B2C\u4E00\u6B21\u6CA1\u6709\uFF0C\u800C\u8BBE\u7F6E\u7684\u503C\u5C31\u662F\u5F53\u65F6\u7684<code>currentTime</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> currentTime <span class="token operator">=</span> <span class="token function">requestCurrentTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
finishedWork<span class="token punctuation">.</span>stateNode <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">timedOutAt</span><span class="token operator">:</span> currentTime <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><code>earliestTimeoutMs</code>\u8DDF<code>maxDuration</code>\u6709\u5173\uFF0C\u4ED6\u4F1A\u5411\u4E0A\u627E\u5230<code>maxDuration</code>\u6700\u5C0F\u7684\u975E\u8D1F\u6570</p><p>\u6240\u4EE5\u7B2C\u4E00\u6B21\u6E32\u67D3\u7684\u65F6\u5019\uFF0C<code>startTimeMs</code>\u662F<code>-1</code>\uFF0C\u7B2C\u4E8C\u6B21\u6E32\u67D3<code>earliestTimeoutMs</code>\u662F<code>-1</code></p><h3 id="\u7B2C\u4E8C\u4E2A\u5FAA\u73AF" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E8C\u4E2A\u5FAA\u73AF" aria-hidden="true">#</a> \u7B2C\u4E8C\u4E2A\u5FAA\u73AF</h3><p>\u9996\u5148<code>didTimeout = workInProgress.memoizedState</code>\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u4EC0\u4E48\u65F6\u5019\u4F1A\u53D8\u6210<code>true</code>\u5462\uFF1F\u662F\u5728<code>updateSuspense</code>\u7684\u65F6\u5019\uFF0C\u5177\u4F53\u53EF\u4EE5\u770B<code>Suspense</code></p><p>\u53EF\u4EE5\u5927\u81F4\u6A21\u62DF\u4E00\u4E0B\u6D41\u7A0B\u3002</p><ul><li><p>\u7ECF\u8FC7<code>updateSuspense</code>\uFF0C<code>didTimeout</code>\u4E3A<code>false</code></p></li><li><p>\u7ED1\u5B9A<code>thenable.then</code>\u5230<code>retrySuspendedRoot</code></p></li><li><p>\u5982\u679C\u4E0D\u662F<code>StrictMode</code>\u4F1A\u76F4\u63A5\u53BB\u6389<code>Incomplete</code>\u7684<code>side effect</code>\uFF0C\u4E0D\u8FC7\u76EE\u524D\u53EA\u8981\u662F<code>AsyncMode</code>\u7684\u90FD\u4F1A\u81EA\u52A8\u673A\u4E0A<code>StrictMode</code>\uFF0C\u7136\u540E\u76F4\u63A5<code>return</code>\u4E86</p></li><li><p>\u7136\u540E\u8BA1\u7B97<code>absoluteTimeoutMs</code>\uFF0C\u7136\u540E\u52A0\u4E0A<code>ShouldCapture</code>\u7684<code>side effect</code></p></li><li><p>\u52A0\u4E0A<code>ShouldCapture</code>\u4F1A\u8BA9<code>Suspense</code>\u7EC4\u4EF6\u518D\u6B21\u8FDB\u5165<code>beginWork</code>\u9636\u6BB5\u91CD\u65B0<code>update</code>\uFF0C\u8FD9\u65F6\u5019<code>didTimeout</code>\u4F1A\u53D8\u4E3A<code>true</code>\uFF0C\u5E76\u4E14\u6E32\u67D3<code>fallback</code>\u7684\u5185\u5BB9</p></li><li><p>\u6700\u540E</p></li></ul><p><img src="https://i.postimg.cc/rwJ99f3L/placeholder.png" alt="\u793A\u4F8B"></p><p><strong>\u90A3\u4E48\u7B2C\u4E8C\u4E2A\u5FAA\u73AF\u518D!didTimeout\u4E2D\u7684\u903B\u8F91\u5177\u4F53\u662F\u4EC0\u4E48\u5462</strong></p><p>\u9996\u5148\u8981\u7ED1\u5B9A<code>suquense</code>\u7EC4\u4EF6\u7684<code>resolve</code>\u4E4B\u540E\u8981\u6267\u884C<code>retrySuspendedRoot</code>\uFF0C\u7136\u540E\u8BA1\u7B97<code>absoluteTimeoutMs</code>\uFF0C\u7136\u540E\u8C03\u7528<code>renderDidSuspend</code>\uFF0C\u8FD9\u5757\u653E\u5230\u4E0B\u9762\u518D\u8BB2\u3002</p><p><strong>\u975E<code>Suspense</code>\u7684\u60C5\u51B5</strong></p><p>\u8FD9\u79CD\u60C5\u51B5\u76F8\u5F53\u4E8E\u6355\u6349\u5230\u4E86\u4E00\u4E2A\u9519\u8BEF\uFF0C\u8FD9\u8FB9\u7684\u64CD\u4F5C\u662F\u5411\u4E0A\u904D\u5386\u8282\u70B9\uFF0C\u5BF9<code>HostRoot</code>\u3001<code>ClassComponent</code>\u548C<code>ClassComponentLazy</code>\u505A\u4E00\u4E9B\u64CD\u4F5C\uFF1A</p><ol><li><p>\u52A0\u4E0A<code>shouldCapture</code>\u7684<code>side effect</code></p></li><li><p>\u521B\u5EFA<code>error update</code></p></li></ol><p>\u6CE8\u610F\uFF0C\u5BF9\u4E8E<code>ClassComponent</code>\u53EA\u6709\u5F53\u7EC4\u4EF6\u58F0\u660E<code>getDerivedStateFromCatch</code>\u6216\u8005<code>componentDidCatch</code>\u7684\u7EC4\u4EF6\u4F1A\u505A\u8FD9\u4E9B\u64CD\u4F5C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">throwException</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">root</span><span class="token operator">:</span> FiberRoot<span class="token punctuation">,</span>
  <span class="token literal-property property">returnFiber</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span>
  <span class="token literal-property property">sourceFiber</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span>
  <span class="token literal-property property">value</span><span class="token operator">:</span> mixed<span class="token punctuation">,</span>
  <span class="token literal-property property">renderExpirationTime</span><span class="token operator">:</span> ExpirationTime<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// The source fiber did not complete.</span>
  sourceFiber<span class="token punctuation">.</span>effectTag <span class="token operator">|=</span> Incomplete
  <span class="token comment">// Its effect list is no longer valid.</span>
  sourceFiber<span class="token punctuation">.</span>firstEffect <span class="token operator">=</span> sourceFiber<span class="token punctuation">.</span>lastEffect <span class="token operator">=</span> <span class="token keyword">null</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>
    value <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span>
    <span class="token keyword">typeof</span> value <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">&amp;&amp;</span>
    <span class="token keyword">typeof</span> value<span class="token punctuation">.</span>then <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// This is a thenable.</span>
    <span class="token keyword">const</span> <span class="token literal-property property">thenable</span><span class="token operator">:</span> Thenable <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token operator">:</span> any<span class="token punctuation">)</span>

    <span class="token keyword">let</span> workInProgress <span class="token operator">=</span> returnFiber
    <span class="token keyword">let</span> earliestTimeoutMs <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span>
    <span class="token keyword">let</span> startTimeMs <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span>
    <span class="token keyword">do</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>workInProgress<span class="token punctuation">.</span>tag <span class="token operator">===</span> SuspenseComponent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> current <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>alternate
        <span class="token keyword">if</span> <span class="token punctuation">(</span>current <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> <span class="token literal-property property">currentState</span><span class="token operator">:</span> SuspenseState <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> current<span class="token punctuation">.</span>memoizedState
          <span class="token keyword">if</span> <span class="token punctuation">(</span>currentState <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> currentState<span class="token punctuation">.</span>didTimeout<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// Reached a boundary that already timed out. Do not search</span>
            <span class="token comment">// any further.</span>
            <span class="token keyword">const</span> timedOutAt <span class="token operator">=</span> currentState<span class="token punctuation">.</span>timedOutAt
            startTimeMs <span class="token operator">=</span> <span class="token function">expirationTimeToMs</span><span class="token punctuation">(</span>timedOutAt<span class="token punctuation">)</span>
            <span class="token comment">// Do not search any further.</span>
            <span class="token keyword">break</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">let</span> timeoutPropMs <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>pendingProps<span class="token punctuation">.</span>maxDuration
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> timeoutPropMs <span class="token operator">===</span> <span class="token string">&#39;number&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>timeoutPropMs <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            earliestTimeoutMs <span class="token operator">=</span> <span class="token number">0</span>
          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>
            earliestTimeoutMs <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">||</span>
            timeoutPropMs <span class="token operator">&lt;</span> earliestTimeoutMs
          <span class="token punctuation">)</span> <span class="token punctuation">{</span>
            earliestTimeoutMs <span class="token operator">=</span> timeoutPropMs
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      workInProgress <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>return
    <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>workInProgress <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>

    <span class="token comment">// Schedule the nearest Suspense to re-render the timed out view.</span>
    workInProgress <span class="token operator">=</span> returnFiber
    <span class="token keyword">do</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>
        workInProgress<span class="token punctuation">.</span>tag <span class="token operator">===</span> SuspenseComponent <span class="token operator">&amp;&amp;</span>
        <span class="token function">shouldCaptureSuspense</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">.</span>alternate<span class="token punctuation">,</span> workInProgress<span class="token punctuation">)</span>
      <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> pingTime <span class="token operator">=</span>
          <span class="token punctuation">(</span>workInProgress<span class="token punctuation">.</span>mode <span class="token operator">&amp;</span> ConcurrentMode<span class="token punctuation">)</span> <span class="token operator">===</span> NoEffect
            <span class="token operator">?</span> Sync
            <span class="token operator">:</span> renderExpirationTime

        <span class="token comment">// Attach a listener to the promise to &quot;ping&quot; the root and retry.</span>
        <span class="token keyword">let</span> onResolveOrReject <span class="token operator">=</span> <span class="token function">retrySuspendedRoot</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>
          <span class="token keyword">null</span><span class="token punctuation">,</span>
          root<span class="token punctuation">,</span>
          workInProgress<span class="token punctuation">,</span>
          sourceFiber<span class="token punctuation">,</span>
          pingTime<span class="token punctuation">,</span>
        <span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>enableSchedulerTracing<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          onResolveOrReject <span class="token operator">=</span> <span class="token function">Schedule_tracing_wrap</span><span class="token punctuation">(</span>onResolveOrReject<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        thenable<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>onResolveOrReject<span class="token punctuation">,</span> onResolveOrReject<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">.</span>mode <span class="token operator">&amp;</span> ConcurrentMode<span class="token punctuation">)</span> <span class="token operator">===</span> NoEffect<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          workInProgress<span class="token punctuation">.</span>effectTag <span class="token operator">|=</span> CallbackEffect

          <span class="token comment">// Unmount the source fiber&#39;s children</span>
          <span class="token keyword">const</span> nextChildren <span class="token operator">=</span> <span class="token keyword">null</span>
          <span class="token function">reconcileChildren</span><span class="token punctuation">(</span>
            sourceFiber<span class="token punctuation">.</span>alternate<span class="token punctuation">,</span>
            sourceFiber<span class="token punctuation">,</span>
            nextChildren<span class="token punctuation">,</span>
            renderExpirationTime<span class="token punctuation">,</span>
          <span class="token punctuation">)</span>
          sourceFiber<span class="token punctuation">.</span>effectTag <span class="token operator">&amp;=</span> <span class="token operator">~</span>Incomplete

          <span class="token keyword">if</span> <span class="token punctuation">(</span>sourceFiber<span class="token punctuation">.</span>tag <span class="token operator">===</span> ClassComponent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            sourceFiber<span class="token punctuation">.</span>effectTag <span class="token operator">&amp;=</span> <span class="token operator">~</span>LifecycleEffectMask
            <span class="token keyword">const</span> current <span class="token operator">=</span> sourceFiber<span class="token punctuation">.</span>alternate
            <span class="token keyword">if</span> <span class="token punctuation">(</span>current <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
              sourceFiber<span class="token punctuation">.</span>tag <span class="token operator">=</span> IncompleteClassComponent
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>

          <span class="token comment">// Exit without suspending.</span>
          <span class="token keyword">return</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">let</span> absoluteTimeoutMs
        <span class="token keyword">if</span> <span class="token punctuation">(</span>earliestTimeoutMs <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          absoluteTimeoutMs <span class="token operator">=</span> maxSigned31BitInt
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>startTimeMs <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> earliestExpirationTime <span class="token operator">=</span> <span class="token function">findEarliestOutstandingPriorityLevel</span><span class="token punctuation">(</span>
              root<span class="token punctuation">,</span>
              renderExpirationTime<span class="token punctuation">,</span>
            <span class="token punctuation">)</span>
            <span class="token keyword">const</span> earliestExpirationTimeMs <span class="token operator">=</span> <span class="token function">expirationTimeToMs</span><span class="token punctuation">(</span>
              earliestExpirationTime<span class="token punctuation">,</span>
            <span class="token punctuation">)</span>
            startTimeMs <span class="token operator">=</span> earliestExpirationTimeMs <span class="token operator">-</span> <span class="token constant">LOW_PRIORITY_EXPIRATION</span>
          <span class="token punctuation">}</span>
          absoluteTimeoutMs <span class="token operator">=</span> startTimeMs <span class="token operator">+</span> earliestTimeoutMs
        <span class="token punctuation">}</span>
        <span class="token function">renderDidSuspend</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> absoluteTimeoutMs<span class="token punctuation">,</span> renderExpirationTime<span class="token punctuation">)</span>

        workInProgress<span class="token punctuation">.</span>effectTag <span class="token operator">|=</span> ShouldCapture
        workInProgress<span class="token punctuation">.</span>expirationTime <span class="token operator">=</span> renderExpirationTime
        <span class="token keyword">return</span>
      <span class="token punctuation">}</span>
      workInProgress <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>return
    <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>workInProgress <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
    <span class="token comment">// No boundary was found. Fallthrough to error mode.</span>
    value <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>
      <span class="token string">&#39;An update was suspended, but no placeholder UI was provided.&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">renderDidError</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  value <span class="token operator">=</span> <span class="token function">createCapturedValue</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> sourceFiber<span class="token punctuation">)</span>
  <span class="token keyword">let</span> workInProgress <span class="token operator">=</span> returnFiber
  <span class="token keyword">do</span> <span class="token punctuation">{</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>workInProgress<span class="token punctuation">.</span>tag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">case</span> <span class="token literal-property property">HostRoot</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> errorInfo <span class="token operator">=</span> value
        workInProgress<span class="token punctuation">.</span>effectTag <span class="token operator">|=</span> ShouldCapture
        workInProgress<span class="token punctuation">.</span>expirationTime <span class="token operator">=</span> renderExpirationTime
        <span class="token keyword">const</span> update <span class="token operator">=</span> <span class="token function">createRootErrorUpdate</span><span class="token punctuation">(</span>
          workInProgress<span class="token punctuation">,</span>
          errorInfo<span class="token punctuation">,</span>
          renderExpirationTime<span class="token punctuation">,</span>
        <span class="token punctuation">)</span>
        <span class="token function">enqueueCapturedUpdate</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">,</span> update<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">case</span> <span class="token literal-property property">ClassComponent</span><span class="token operator">:</span>
        <span class="token comment">// Capture and retry</span>
        <span class="token keyword">const</span> errorInfo <span class="token operator">=</span> value
        <span class="token keyword">const</span> ctor <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>type
        <span class="token keyword">const</span> instance <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>stateNode
        <span class="token keyword">if</span> <span class="token punctuation">(</span>
          <span class="token punctuation">(</span>workInProgress<span class="token punctuation">.</span>effectTag <span class="token operator">&amp;</span> DidCapture<span class="token punctuation">)</span> <span class="token operator">===</span> NoEffect <span class="token operator">&amp;&amp;</span>
          <span class="token punctuation">(</span><span class="token keyword">typeof</span> ctor<span class="token punctuation">.</span>getDerivedStateFromError <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span> <span class="token operator">||</span>
            <span class="token punctuation">(</span>instance <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span>
              <span class="token keyword">typeof</span> instance<span class="token punctuation">.</span>componentDidCatch <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span> <span class="token operator">&amp;&amp;</span>
              <span class="token operator">!</span><span class="token function">isAlreadyFailedLegacyErrorBoundary</span><span class="token punctuation">(</span>instance<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span> <span class="token punctuation">{</span>
          workInProgress<span class="token punctuation">.</span>effectTag <span class="token operator">|=</span> ShouldCapture
          workInProgress<span class="token punctuation">.</span>expirationTime <span class="token operator">=</span> renderExpirationTime
          <span class="token comment">// Schedule the error boundary to re-render using updated state</span>
          <span class="token keyword">const</span> update <span class="token operator">=</span> <span class="token function">createClassErrorUpdate</span><span class="token punctuation">(</span>
            workInProgress<span class="token punctuation">,</span>
            errorInfo<span class="token punctuation">,</span>
            renderExpirationTime<span class="token punctuation">,</span>
          <span class="token punctuation">)</span>
          <span class="token function">enqueueCapturedUpdate</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">,</span> update<span class="token punctuation">)</span>
          <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">break</span>
      <span class="token keyword">default</span><span class="token operator">:</span>
        <span class="token keyword">break</span>
    <span class="token punctuation">}</span>
    workInProgress <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>return
  <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>workInProgress <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br></div></div><h2 id="absolutetimeoutms" tabindex="-1"><a class="header-anchor" href="#absolutetimeoutms" aria-hidden="true">#</a> absoluteTimeoutMs</h2><p>\u4E0A\u9762\u63D0\u5230\u4E86\uFF1A</p><ul><li><p><code>earliestTimeoutMs</code>\u662F\u6700\u5C0F\u7684<code>maxDuration</code></p></li><li><p><code>startTimeMs</code>\u662F\u4E0A\u6B21<code>commit</code>\u8BBE\u7F6E\u7684<code>timedOutAt</code></p></li></ul><p>\u5982\u679C\u6CA1\u6709\u8BBE\u7F6E<code>maxDuration</code>\uFF0C\u90A3\u4E48<code>absoluteTimeoutMs</code>\u662F<code>maxSigned31BitInt</code>\u4E5F\u5C31\u662F<code>1073741823</code>\uFF0C\u57FA\u672C\u610F\u601D\u5C31\u662F\u6C38\u8FDC\u4E0D\u8FC7\u8D85\u65F6</p><p>\u5982\u679C\u6709\u8BBE\u7F6E<code>maxDuration</code>\uFF0C\u56E0\u4E3A\u7B2C\u4E00\u6B21\u6CA1\u6709<code>startTimeMs</code>\uFF0C\u6240\u4EE5\u8981\u8BA1\u7B97\u4E00\u4E2A\uFF0C\u4ECE\u5F53\u524D<code>root</code>\u7684\u6240\u6709\u8FC7\u671F\u65F6\u95F4\u4E2D\u627E\u4E00\u4E2A\u4F18\u5148\u7EA7\u6700\u9AD8\u7684\uFF0C\u7136\u540E\u51CF\u53BB<code>LOW_PRIORITY_EXPIRATION</code>\uFF0C\u8FD9\u90E8\u5206\u8BA1\u7B97\u4E0D\u5FC5\u8981\u592A\u5728\u610F\uFF0C\u4E3B\u8981\u770B\u4E00\u4E0B\u7B2C\u4E8C\u6B21\u8FDB\u6765\u7684\u65F6\u5019</p><p>\u5728\u6709<code>earliestTimeoutMs</code>\u548C<code>startTimeMs</code>\u7684\u60C5\u51B5\u4E0B\uFF0C<code>absoluteTimeoutMs</code>\u7B49\u4E8E<code>startTimeMs + earliestTimeoutM</code>\uFF0C\u7B80\u5355\u6765\u8BF4\u5C31\u662F\u5C11\u4E86\u7B2C\u4E00\u6B21\u6E32\u67D3\u5230\u8FD9\u6B21\u6709\u66F4\u65B0\u8FDB\u6765\u4E2D\u95F4\u7684\u7A7A\u767D\u65F6\u95F4\uFF0C\u4E5F\u7B26\u5408<code>maxDuration</code>\u9700\u8981\u7684\u542B\u4E49\u3002</p><p><strong>\u4F46\u662F\u6839\u636E\u4E4B\u524D\u8BF4\u7684\u903B\u8F91\uFF0C\u5728\u6709<code>startTimeMs</code>\u7684\u60C5\u51B5\u4E0B\u6839\u672C\u4E0D\u4F1A\u6267\u884C<code>earliestTimeoutMs</code>\u7684\u903B\u8F91\uFF0C\u6240\u4EE5\u8FD9\u4E2A\u903B\u8F91\u662F\u5426\u6709\u95EE\u9898\uFF1F\u5B9E\u9645\u5199\u4E86\u4E2A\u5C0F\u4F8B\u5B50\u770B\u4E86\u4E00\u4E0B\u7ED3\u679C\u4E5F\u662F\u548C\u7684\u9884\u671F\u4E00\u6837</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// throwException</span>
<span class="token keyword">let</span> absoluteTimeoutMs
<span class="token keyword">if</span> <span class="token punctuation">(</span>earliestTimeoutMs <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  absoluteTimeoutMs <span class="token operator">=</span> maxSigned31BitInt
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>startTimeMs <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> earliestExpirationTime <span class="token operator">=</span> <span class="token function">findEarliestOutstandingPriorityLevel</span><span class="token punctuation">(</span>
      root<span class="token punctuation">,</span>
      renderExpirationTime<span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
    <span class="token keyword">const</span> earliestExpirationTimeMs <span class="token operator">=</span> <span class="token function">expirationTimeToMs</span><span class="token punctuation">(</span>earliestExpirationTime<span class="token punctuation">)</span>
    startTimeMs <span class="token operator">=</span> earliestExpirationTimeMs <span class="token operator">-</span> <span class="token constant">LOW_PRIORITY_EXPIRATION</span>
  <span class="token punctuation">}</span>
  absoluteTimeoutMs <span class="token operator">=</span> startTimeMs <span class="token operator">+</span> earliestTimeoutMs
<span class="token punctuation">}</span>

<span class="token function">renderDidSuspend</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> absoluteTimeoutMs<span class="token punctuation">,</span> renderExpirationTime<span class="token punctuation">)</span>

<span class="token comment">// renderDidSuspend</span>
<span class="token keyword">function</span> <span class="token function">renderDidSuspend</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">root</span><span class="token operator">:</span> FiberRoot<span class="token punctuation">,</span>
  <span class="token literal-property property">absoluteTimeoutMs</span><span class="token operator">:</span> number<span class="token punctuation">,</span>
  <span class="token literal-property property">suspendedTime</span><span class="token operator">:</span> ExpirationTime<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Schedule the timeout.</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>
    absoluteTimeoutMs <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span>
    nextLatestAbsoluteTimeoutMs <span class="token operator">&lt;</span> absoluteTimeoutMs
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    nextLatestAbsoluteTimeoutMs <span class="token operator">=</span> absoluteTimeoutMs
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div>`,32);function p(o,t){return e}var l=s(a,[["render",p]]);export{l as default};
