import{a as n}from"./app.6f963528.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><h1 id="suspense-\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#suspense-\u7EC4\u4EF6" aria-hidden="true">#</a> Suspense \u7EC4\u4EF6</h1><h2 id="\u66F4\u65B0" tabindex="-1"><a class="header-anchor" href="#\u66F4\u65B0" aria-hidden="true">#</a> \u66F4\u65B0</h2><p>\u9996\u5148\u6765\u770B\u4E00\u4E0B\u7EC4\u4EF6\u7684<code>state</code>\u4F1A\u5177\u6709\u54EA\u4E9B\u5C5E\u6027</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> type SuspenseState <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token operator">|</span>
  <span class="token literal-property property">alreadyCaptured</span><span class="token operator">:</span> boolean<span class="token punctuation">,</span>
  <span class="token literal-property property">didTimeout</span><span class="token operator">:</span> boolean<span class="token punctuation">,</span>
  <span class="token literal-property property">timedOutAt</span><span class="token operator">:</span> ExpirationTime<span class="token punctuation">,</span>
<span class="token operator">|</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u8FD9\u4E09\u4E2A\u5C5E\u6027\u5206\u522B\u7684\u7528\u5904\u662F\uFF1A</p><ul><li><p><code>alreadyCaptured</code>\u6807\u5FD7\u662F\u5426\u5B50\u6811\u4E2D\u5DF2\u7ECF\u6302\u8D77\u4E86</p></li><li><p><code>didTimeout</code>\u6807\u5FD7\u73B0\u5728\u662F\u6E32\u67D3\u7684\u4E3B\u8981\u5B50\u8282\u70B9\uFF0C\u8FD8\u662F<code>fallback</code>\u8282\u70B9\u3002\u8FD9\u4E2A\u4E3B\u8981\u662F\u5728\u975E<code>ConcurrentMode</code>\u4E2D\u7528\u5230</p></li><li><p><code>timedOutAt</code>\u5728\u6BCF\u6B21\u8BE5\u7EC4\u4EF6\u88AB<code>commit</code>\u7684\u65F6\u5019\u88AB\u8BBE\u7F6E\u4E3A\u5F53\u65F6\u7684\u65F6\u95F4</p></li></ul><p>\u9996\u5148\uFF0C\u7B2C\u4E00\u6B21\u6E32\u67D3\u8BE5\u7EC4\u4EF6\u7684\u65F6\u5019\uFF0C<code>state</code>\u80AF\u5B9A\u7B49\u4E8E<code>null</code>\uFF0C\u6240\u4EE5<code>nextDidTimeout</code>\u662F<code>false</code>\uFF0C\u800C\u4E14<code>current</code>\u662F<code>null</code>\uFF0C\u8D70\u7684\u5C31\u662F\u8FD9\u4E2A\u6D41\u7A0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// Mount the primary children without an intermediate fragment fiber.</span>
<span class="token keyword">const</span> nextPrimaryChildren <span class="token operator">=</span> nextProps<span class="token punctuation">.</span>children
child <span class="token operator">=</span> next <span class="token operator">=</span> <span class="token function">mountChildFibers</span><span class="token punctuation">(</span>
  workInProgress<span class="token punctuation">,</span>
  <span class="token keyword">null</span><span class="token punctuation">,</span>
  nextPrimaryChildren<span class="token punctuation">,</span>
  renderExpirationTime<span class="token punctuation">,</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u8D70\u6B63\u5E38\u6E32\u67D3\u3002\u800C\u5982\u679C\u8FD9\u65F6\u5019\u5B50\u6811<code>throw promise</code>\uFF0C\u90A3\u4E48\u5C31\u4F1A\u5230<code>throwException</code>\u7684\u6D41\u7A0B\uFF0C\u5728<code>throwException</code>\u4E2D\u505A\u4E86\u4EC0\u4E48\u5462\uFF1F</p><h2 id="\u5BF9\u4E8E\u540C\u6B65\u7684\u60C5\u51B5" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u4E8E\u540C\u6B65\u7684\u60C5\u51B5" aria-hidden="true">#</a> \u5BF9\u4E8E\u540C\u6B65\u7684\u60C5\u51B5</h2><p>\u7ED9\u8FD9\u4E2A\u8282\u70B9\u589E\u52A0<code>Callback</code>\u526F\u4F5C\u7528\uFF0C\u6CA1\u6709<code>ShouldCapture</code></p><p>\u6240\u4EE5\u8BE5\u7EC4\u4EF6\u5728\u540E\u7EED<code>unwindWork</code>\u7684\u65F6\u5019\u4EC0\u4E48\u90FD\u4E0D\u505A\uFF0C\u8FD9\u4E00\u6B21\u6E32\u67D3\u5C31\u8FD9\u4E48\u7ED3\u675F\u4E86\uFF0C\u90A3\u4E48\u540C\u5B66\u4EEC\u80AF\u5B9A\u8981\u95EE\u4E86\uFF0C\u8FD9\u6CA1\u6709\u6E32\u67D3\u51FAfallback\u554A\u3002\u662F\u7684\uFF0C\u8FD9\u4E2A\u6B65\u9AA4\u8981\u7B49\u5230\u4E0B\u4E00\u6B21<code>commit</code></p><p>\u56E0\u4E3A\u589E\u52A0<code>Callback</code>\u6240\u4EE5\u8FD9\u4E2A\u7EC4\u4EF6\u5728<code>commitLifecycle</code>\u7684\u65F6\u5019\u4F1A\u88AB\u63D0\u4EA4\uFF0C\u5177\u4F53\u4EE3\u7801\u5982\u4E0B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>finishedWork<span class="token punctuation">.</span>effectTag <span class="token operator">&amp;</span> Callback<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token literal-property property">newState</span><span class="token operator">:</span> SuspenseState <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">alreadyCaptured</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">didTimeout</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">timedOutAt</span><span class="token operator">:</span> NoWork<span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
  finishedWork<span class="token punctuation">.</span>memoizedState <span class="token operator">=</span> newState
  <span class="token function">scheduleWork</span><span class="token punctuation">(</span>finishedWork<span class="token punctuation">,</span> Sync<span class="token punctuation">)</span>
  <span class="token keyword">return</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u53EF\u4EE5\u770B\u5230\u4ED6\u7684<code>state</code>\u88AB\u7B2C\u4E00\u6B21\u8BBE\u7F6E\u4E86\uFF0C\u5E76\u4E14\u5728\u8BE5\u8282\u70B9\u4E0A\u53D1\u8D77\u4E86\u4E00\u6B21\u540C\u6B65\u7684\u66F4\u65B0\uFF0C\u800C\u4E0B\u4E00\u6B21\u66F4\u65B0\u7684\u65F6\u5019\uFF0C\u4ED6\u7684<code>state</code>\u5C31\u662F\u8FD9\u91CC\u7684<code>newState</code>\u3002\u8FD9\u6B21\u66F4\u65B0\u7684\u65F6\u5019\uFF0C<code>didTimeout</code>\u88AB\u8BBE\u7F6E\u4E3A<code>true</code>\uFF0C\u90A3\u4E48<code>nextDidTimeout</code>\u4E5F\u662F<code>true</code>\uFF0C\u540C\u65F6\u7ECF\u8FC7\u4E0A\u4E00\u6B21\u63D0\u4EA4\uFF0C<code>current</code>\u5DF2\u7ECF\u5B58\u5728\u3002</p><h2 id="\u5BF9\u4E8E\u5F02\u6B65\u7684\u60C5\u51B5" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u4E8E\u5F02\u6B65\u7684\u60C5\u51B5" aria-hidden="true">#</a> \u5BF9\u4E8E\u5F02\u6B65\u7684\u60C5\u51B5</h2><p>\u589E\u52A0<code>ShouldCapture</code>\u5E76\u4E14\u8BBE\u7F6E<code>expirationTime</code>\u4E3A<code>renderExpirationTime</code>\uFF0C\u76EE\u7684\u662F\u4E3A\u4E86\u540E\u9762<code>retry</code>\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u8BA9\u8BE5\u7EC4\u4EF6\u88AB\u66F4\u65B0\u3002\u5E76\u4E14\u8BA1\u7B97\u4E86<code>nextLatestAbsoluteTimeoutMs</code>\u6765\u67E5\u770B\u4F55\u65F6\u9700\u8981<code>commit</code>\u8FD9\u4E2A\u88AB\u6302\u8D77\u7684\u63D0\u4EA4\u3002</p><p>\u56E0\u4E3A\u6709\u4E86<code>ShouldCapture</code>\uFF0C\u6240\u4EE5\u5728<code>unwindWork</code>\u4E2D\u4F1A\u66F4\u65B0<code>state</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>effectTag <span class="token operator">&amp;</span> ShouldCapture<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  workInProgress<span class="token punctuation">.</span>effectTag <span class="token operator">=</span> <span class="token punctuation">(</span>effectTag <span class="token operator">&amp;</span> <span class="token operator">~</span>ShouldCapture<span class="token punctuation">)</span> <span class="token operator">|</span> DidCapture
  <span class="token keyword">const</span> current <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>alternate
  <span class="token keyword">const</span> <span class="token literal-property property">currentState</span><span class="token operator">:</span> SuspenseState <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span>
    current <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">?</span> current<span class="token punctuation">.</span>memoizedState <span class="token operator">:</span> <span class="token keyword">null</span>
  <span class="token keyword">let</span> <span class="token literal-property property">nextState</span><span class="token operator">:</span> SuspenseState <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>memoizedState
  <span class="token keyword">if</span> <span class="token punctuation">(</span>nextState <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// No existing state. Create a new object.</span>
    nextState <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">alreadyCaptured</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">didTimeout</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">timedOutAt</span><span class="token operator">:</span> NoWork<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>currentState <span class="token operator">===</span> nextState<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// There is an existing state but it&#39;s the same as the current tree&#39;s.</span>
    <span class="token comment">// Clone the object.</span>
    nextState <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">alreadyCaptured</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">didTimeout</span><span class="token operator">:</span> nextState<span class="token punctuation">.</span>didTimeout<span class="token punctuation">,</span>
      <span class="token literal-property property">timedOutAt</span><span class="token operator">:</span> nextState<span class="token punctuation">.</span>timedOutAt<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// Already have a clone, so it&#39;s safe to mutate.</span>
    nextState<span class="token punctuation">.</span>alreadyCaptured <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
  workInProgress<span class="token punctuation">.</span>memoizedState <span class="token operator">=</span> nextState
  <span class="token comment">// Re-render the boundary.</span>
  <span class="token keyword">return</span> workInProgress
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><p>\u8BBE\u7F6E\u4E86<code>alreadyCaptured</code>\u4E3A<code>true</code>\uFF0C\u6765\u6E32\u67D3<code>fallback</code>\uFF0C\u540C\u65F6\u7EE7\u7EED\u6CBF\u7528\u4E4B\u524D\u7684<code>didTimeout</code>\uFF0C\u5982\u679C\u4E0A\u4E00\u6B21\u6E32\u67D3\u5DF2\u7ECF\u88AB\u6302\u8D77\uFF0C\u90A3\u4E48\u8FD9\u6B21\u7EE7\u7EED\u6302\u8D77\uFF0C\u8FD9\u5728<code>updateSuspenseComponent</code>\u4F7F\u7528<code>prevDidTimeout</code>\u548C<code>nextDidTimeout</code>\u6765\u8FDB\u884C\u533A\u5206\u3002\u4E3B\u8981\u533A\u522B\u5728\u4E8E\u662F\u5426\u8981\u91CD\u65B0\u6784\u5EFA<code>FragmentFiber</code></p><h2 id="completework" tabindex="-1"><a class="header-anchor" href="#completework" aria-hidden="true">#</a> completeWork</h2><p>\u5BF9\u4E8E\u524D\u540E\u4E24\u6B21<code>didTimeout</code>\u4E0D\u4E00\u6837\u7684\u60C5\u51B5\uFF0C\u4F1A\u4E3A\u8BE5\u8282\u70B9\u8BBE\u7F6E<code>Update</code>\u526F\u4F5C\u7528\uFF0C\u5728<code>commitLifecycles</code>\u7684\u65F6\u5019\u4F1A\u8FDB\u884C\u8BBE\u7F6E</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">case</span> <span class="token literal-property property">SuspenseComponent</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> nextState <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>memoizedState<span class="token punctuation">;</span>
  <span class="token keyword">const</span> prevState <span class="token operator">=</span> current <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">?</span> current<span class="token punctuation">.</span>memoizedState <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> nextDidTimeout <span class="token operator">=</span> nextState <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> nextState<span class="token punctuation">.</span>didTimeout<span class="token punctuation">;</span>
  <span class="token keyword">const</span> prevDidTimeout <span class="token operator">=</span> prevState <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> prevState<span class="token punctuation">.</span>didTimeout<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>nextDidTimeout <span class="token operator">!==</span> prevDidTimeout<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// If this render commits, and it switches between the normal state</span>
    <span class="token comment">// and the timed-out state, schedule an effect.</span>
    workInProgress<span class="token punctuation">.</span>effectTag <span class="token operator">|=</span> Update<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">break</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u53EA\u6709\u5728\u524D\u540E<code>didTimeout</code>\u4E0D\u540C\u7684\u65F6\u5019\u624D\u4F1A\u589E\u52A0<code>Update</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>newDidTimeout <span class="token operator">=</span> newState<span class="token punctuation">.</span>didTimeout
<span class="token keyword">if</span> <span class="token punctuation">(</span>newDidTimeout<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  primaryChildParent <span class="token operator">=</span> finishedWork<span class="token punctuation">.</span>child
  newState<span class="token punctuation">.</span>alreadyCaptured <span class="token operator">=</span> <span class="token boolean">false</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>newState<span class="token punctuation">.</span>timedOutAt <span class="token operator">===</span> NoWork<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    newState<span class="token punctuation">.</span>timedOutAt <span class="token operator">=</span> <span class="token function">requestCurrentTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u7ECF\u8FC7\u8FD9\u6837\u4E4B\u540E\uFF0C\u5728\u4E0B\u4E00\u6B21\u66F4\u65B0<code>SuspenseComponent</code>\u7684\u65F6\u5019\uFF0C<code>nextState</code>\u5C31\u7B49\u4E8E<code>null</code></p><blockquote><p>\u6E90\u7801</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">updateSuspenseComponent</span><span class="token punctuation">(</span>
  <span class="token parameter">current<span class="token punctuation">,</span>
  workInProgress<span class="token punctuation">,</span>
  renderExpirationTime<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> mode <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>mode
  <span class="token keyword">const</span> nextProps <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>pendingProps

  <span class="token comment">// We should attempt to render the primary children unless this boundary</span>
  <span class="token comment">// already suspended during this render (\`alreadyCaptured\` is true).</span>
  <span class="token keyword">let</span> <span class="token literal-property property">nextState</span><span class="token operator">:</span> SuspenseState <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>memoizedState
  <span class="token keyword">if</span> <span class="token punctuation">(</span>nextState <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// An empty suspense state means this boundary has not yet timed out.</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>nextState<span class="token punctuation">.</span>alreadyCaptured<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// Since we haven&#39;t already suspended during this commit, clear the</span>
      <span class="token comment">// existing suspense state. We&#39;ll try rendering again.</span>
      nextState <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// Something in this boundary&#39;s subtree already suspended. Switch to</span>
      <span class="token comment">// rendering the fallback children. Set \`alreadyCaptured\` to true.</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>current <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> nextState <span class="token operator">===</span> current<span class="token punctuation">.</span>memoizedState<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Create a new suspense state to avoid mutating the current tree&#39;s.</span>
        nextState <span class="token operator">=</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">alreadyCaptured</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token literal-property property">didTimeout</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token literal-property property">timedOutAt</span><span class="token operator">:</span> nextState<span class="token punctuation">.</span>timedOutAt<span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// Already have a clone, so it&#39;s safe to mutate.</span>
        nextState<span class="token punctuation">.</span>alreadyCaptured <span class="token operator">=</span> <span class="token boolean">true</span>
        nextState<span class="token punctuation">.</span>didTimeout <span class="token operator">=</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> nextDidTimeout <span class="token operator">=</span> nextState <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> nextState<span class="token punctuation">.</span>didTimeout

  <span class="token keyword">let</span> child
  <span class="token keyword">let</span> next
  <span class="token keyword">if</span> <span class="token punctuation">(</span>current <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>nextDidTimeout<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// Mount separate fragments for primary and fallback children.</span>
      <span class="token keyword">const</span> nextFallbackChildren <span class="token operator">=</span> nextProps<span class="token punctuation">.</span>fallback
      <span class="token keyword">const</span> primaryChildFragment <span class="token operator">=</span> <span class="token function">createFiberFromFragment</span><span class="token punctuation">(</span>
        <span class="token keyword">null</span><span class="token punctuation">,</span>
        mode<span class="token punctuation">,</span>
        NoWork<span class="token punctuation">,</span>
        <span class="token keyword">null</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
      <span class="token keyword">const</span> fallbackChildFragment <span class="token operator">=</span> <span class="token function">createFiberFromFragment</span><span class="token punctuation">(</span>
        nextFallbackChildren<span class="token punctuation">,</span>
        mode<span class="token punctuation">,</span>
        renderExpirationTime<span class="token punctuation">,</span>
        <span class="token keyword">null</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
      primaryChildFragment<span class="token punctuation">.</span>sibling <span class="token operator">=</span> fallbackChildFragment
      child <span class="token operator">=</span> primaryChildFragment
      <span class="token comment">// Skip the primary children, and continue working on the</span>
      <span class="token comment">// fallback children.</span>
      next <span class="token operator">=</span> fallbackChildFragment
      child<span class="token punctuation">.</span>return <span class="token operator">=</span> next<span class="token punctuation">.</span>return <span class="token operator">=</span> workInProgress
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// Mount the primary children without an intermediate fragment fiber.</span>
      <span class="token keyword">const</span> nextPrimaryChildren <span class="token operator">=</span> nextProps<span class="token punctuation">.</span>children
      child <span class="token operator">=</span> next <span class="token operator">=</span> <span class="token function">mountChildFibers</span><span class="token punctuation">(</span>
        workInProgress<span class="token punctuation">,</span>
        <span class="token keyword">null</span><span class="token punctuation">,</span>
        nextPrimaryChildren<span class="token punctuation">,</span>
        renderExpirationTime<span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// This is an update. This branch is more complicated because we need to</span>
    <span class="token comment">// ensure the state of the primary children is IncompleteClassComponent.</span>
    <span class="token keyword">const</span> prevState <span class="token operator">=</span> current<span class="token punctuation">.</span>memoizedState
    <span class="token keyword">const</span> prevDidTimeout <span class="token operator">=</span> prevState <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> prevState<span class="token punctuation">.</span>didTimeout
    <span class="token keyword">if</span> <span class="token punctuation">(</span>prevDidTimeout<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// The current tree already timed out. That means each child set is</span>
      <span class="token comment">// wrapped in a fragment fiber.</span>
      <span class="token keyword">const</span> <span class="token literal-property property">currentPrimaryChildFragment</span><span class="token operator">:</span> Fiber <span class="token operator">=</span> <span class="token punctuation">(</span>current<span class="token punctuation">.</span>child<span class="token operator">:</span> any<span class="token punctuation">)</span>
      <span class="token keyword">const</span> <span class="token literal-property property">currentFallbackChildFragment</span><span class="token operator">:</span> Fiber <span class="token operator">=</span> <span class="token punctuation">(</span>currentPrimaryChildFragment<span class="token punctuation">.</span>sibling<span class="token operator">:</span> any<span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>nextDidTimeout<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Still timed out. Reuse the current primary children by cloning</span>
        <span class="token comment">// its fragment. We&#39;re going to skip over these entirely.</span>
        <span class="token keyword">const</span> nextFallbackChildren <span class="token operator">=</span> nextProps<span class="token punctuation">.</span>fallback
        <span class="token keyword">const</span> primaryChildFragment <span class="token operator">=</span> <span class="token function">createWorkInProgress</span><span class="token punctuation">(</span>
          currentPrimaryChildFragment<span class="token punctuation">,</span>
          currentPrimaryChildFragment<span class="token punctuation">.</span>pendingProps<span class="token punctuation">,</span>
          NoWork<span class="token punctuation">,</span>
        <span class="token punctuation">)</span>
        primaryChildFragment<span class="token punctuation">.</span>effectTag <span class="token operator">|=</span> Placement
        <span class="token comment">// Clone the fallback child fragment, too. These we&#39;ll continue</span>
        <span class="token comment">// working on.</span>
        <span class="token keyword">const</span> fallbackChildFragment <span class="token operator">=</span> <span class="token punctuation">(</span>primaryChildFragment<span class="token punctuation">.</span>sibling <span class="token operator">=</span> <span class="token function">createWorkInProgress</span><span class="token punctuation">(</span>
          currentFallbackChildFragment<span class="token punctuation">,</span>
          nextFallbackChildren<span class="token punctuation">,</span>
          currentFallbackChildFragment<span class="token punctuation">.</span>expirationTime<span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">)</span>
        fallbackChildFragment<span class="token punctuation">.</span>effectTag <span class="token operator">|=</span> Placement
        child <span class="token operator">=</span> primaryChildFragment
        primaryChildFragment<span class="token punctuation">.</span>childExpirationTime <span class="token operator">=</span> NoWork
        <span class="token comment">// Skip the primary children, and continue working on the</span>
        <span class="token comment">// fallback children.</span>
        next <span class="token operator">=</span> fallbackChildFragment
        child<span class="token punctuation">.</span>return <span class="token operator">=</span> next<span class="token punctuation">.</span>return <span class="token operator">=</span> workInProgress
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// No longer suspended. Switch back to showing the primary children,</span>
        <span class="token comment">// and remove the intermediate fragment fiber.</span>
        <span class="token keyword">const</span> nextPrimaryChildren <span class="token operator">=</span> nextProps<span class="token punctuation">.</span>children
        <span class="token keyword">const</span> currentPrimaryChild <span class="token operator">=</span> currentPrimaryChildFragment<span class="token punctuation">.</span>child
        <span class="token keyword">const</span> currentFallbackChild <span class="token operator">=</span> currentFallbackChildFragment<span class="token punctuation">.</span>child
        <span class="token keyword">const</span> primaryChild <span class="token operator">=</span> <span class="token function">reconcileChildFibers</span><span class="token punctuation">(</span>
          workInProgress<span class="token punctuation">,</span>
          currentPrimaryChild<span class="token punctuation">,</span>
          nextPrimaryChildren<span class="token punctuation">,</span>
          renderExpirationTime<span class="token punctuation">,</span>
        <span class="token punctuation">)</span>
        <span class="token comment">// Delete the fallback children.</span>
        <span class="token function">reconcileChildFibers</span><span class="token punctuation">(</span>
          workInProgress<span class="token punctuation">,</span>
          currentFallbackChild<span class="token punctuation">,</span>
          <span class="token keyword">null</span><span class="token punctuation">,</span>
          renderExpirationTime<span class="token punctuation">,</span>
        <span class="token punctuation">)</span>
        <span class="token comment">// Continue rendering the children, like we normally do.</span>
        child <span class="token operator">=</span> next <span class="token operator">=</span> primaryChild
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// The current tree has not already timed out. That means the primary</span>
      <span class="token comment">// children are not wrapped in a fragment fiber.</span>
      <span class="token keyword">const</span> <span class="token literal-property property">currentPrimaryChild</span><span class="token operator">:</span> Fiber <span class="token operator">=</span> <span class="token punctuation">(</span>current<span class="token punctuation">.</span>child<span class="token operator">:</span> any<span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>nextDidTimeout<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Timed out. Wrap the children in a fragment fiber to keep them</span>
        <span class="token comment">// separate from the fallback children.</span>
        <span class="token keyword">const</span> nextFallbackChildren <span class="token operator">=</span> nextProps<span class="token punctuation">.</span>fallback
        <span class="token keyword">const</span> primaryChildFragment <span class="token operator">=</span> <span class="token function">createFiberFromFragment</span><span class="token punctuation">(</span>
          <span class="token comment">// It shouldn&#39;t matter what the pending props are because we aren&#39;t</span>
          <span class="token comment">// going to render this fragment.</span>
          <span class="token keyword">null</span><span class="token punctuation">,</span>
          mode<span class="token punctuation">,</span>
          NoWork<span class="token punctuation">,</span>
          <span class="token keyword">null</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span>
        primaryChildFragment<span class="token punctuation">.</span>effectTag <span class="token operator">|=</span> Placement
        primaryChildFragment<span class="token punctuation">.</span>child <span class="token operator">=</span> currentPrimaryChild
        currentPrimaryChild<span class="token punctuation">.</span>return <span class="token operator">=</span> primaryChildFragment
        <span class="token comment">// Create a fragment from the fallback children, too.</span>
        <span class="token keyword">const</span> fallbackChildFragment <span class="token operator">=</span> <span class="token punctuation">(</span>primaryChildFragment<span class="token punctuation">.</span>sibling <span class="token operator">=</span> <span class="token function">createFiberFromFragment</span><span class="token punctuation">(</span>
          nextFallbackChildren<span class="token punctuation">,</span>
          mode<span class="token punctuation">,</span>
          renderExpirationTime<span class="token punctuation">,</span>
          <span class="token keyword">null</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">)</span>
        fallbackChildFragment<span class="token punctuation">.</span>effectTag <span class="token operator">|=</span> Placement
        child <span class="token operator">=</span> primaryChildFragment
        primaryChildFragment<span class="token punctuation">.</span>childExpirationTime <span class="token operator">=</span> NoWork
        <span class="token comment">// Skip the primary children, and continue working on the</span>
        <span class="token comment">// fallback children.</span>
        next <span class="token operator">=</span> fallbackChildFragment
        child<span class="token punctuation">.</span>return <span class="token operator">=</span> next<span class="token punctuation">.</span>return <span class="token operator">=</span> workInProgress
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// Still haven&#39;t timed out.  Continue rendering the children, like we</span>
        <span class="token comment">// normally do.</span>
        <span class="token keyword">const</span> nextPrimaryChildren <span class="token operator">=</span> nextProps<span class="token punctuation">.</span>children
        next <span class="token operator">=</span> child <span class="token operator">=</span> <span class="token function">reconcileChildFibers</span><span class="token punctuation">(</span>
          workInProgress<span class="token punctuation">,</span>
          currentPrimaryChild<span class="token punctuation">,</span>
          nextPrimaryChildren<span class="token punctuation">,</span>
          renderExpirationTime<span class="token punctuation">,</span>
        <span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  workInProgress<span class="token punctuation">.</span>memoizedState <span class="token operator">=</span> nextState
  workInProgress<span class="token punctuation">.</span>child <span class="token operator">=</span> child
  <span class="token keyword">return</span> next
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br></div></div>`,29);function p(t,o){return e}var l=s(a,[["render",p]]);export{l as default};
