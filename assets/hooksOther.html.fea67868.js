import{a as n}from"./app.b05da4ec.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><h1 id="usecontext" tabindex="-1"><a class="header-anchor" href="#usecontext" aria-hidden="true">#</a> useContext</h1><p>\u76F4\u63A5\u8C03\u7528<code>readContext</code>\uFF0C\u8FD9\u4E5F\u662F\u4E3A\u4EC0\u4E48\u5728\u66F4\u65B0<code>FunctionalComponent</code>\u9700\u8981\u8C03\u7528<code>prepareToReadContext</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> useContext<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>
  <span class="token literal-property property">context</span><span class="token operator">:</span> ReactContext<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">observedBits</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">|</span> number <span class="token operator">|</span> boolean<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>
  <span class="token comment">// Ensure we&#39;re in a function component (class components support only the</span>
  <span class="token comment">// .unstable_read() form)</span>
  <span class="token function">resolveCurrentlyRenderingFiber</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token function">readContext</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> observedBits<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h1 id="useref" tabindex="-1"><a class="header-anchor" href="#useref" aria-hidden="true">#</a> useRef</h1><p>\u521B\u5EFA\u5E76\u8BB0\u5F55<code>ref</code>\u5BF9\u8C61</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> useRef<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>initialValue<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">current</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">}</span> <span class="token punctuation">{</span>
  currentlyRenderingFiber <span class="token operator">=</span> <span class="token function">resolveCurrentlyRenderingFiber</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  workInProgressHook <span class="token operator">=</span> <span class="token function">createWorkInProgressHook</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> ref<span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>workInProgressHook<span class="token punctuation">.</span>memoizedState <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ref <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">current</span><span class="token operator">:</span> initialValue<span class="token punctuation">}</span><span class="token punctuation">;</span>
    workInProgressHook<span class="token punctuation">.</span>memoizedState <span class="token operator">=</span> ref<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    ref <span class="token operator">=</span> workInProgressHook<span class="token punctuation">.</span>memoizedState<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> ref<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h1 id="useimperativemethods" tabindex="-1"><a class="header-anchor" href="#useimperativemethods" aria-hidden="true">#</a> useImperativeMethods</h1><p>\u63A5\u53D7\u4E00\u4E2A<code>ref</code>\u4F5C\u4E3A\u53C2\u6570\uFF0C\u5185\u90E8\u5176\u5B9E\u5C31\u662F\u4E00\u4E2A<code>useLayoutEffect</code>\u7684\u8C03\u7528\u3002\u4E3B\u8981\u5C31\u662F\u5728\u5916\u90E8\u4F20\u5165\u7684<code>ref</code>\u4E0A\u6302\u8F7D\u5185\u5BB9\uFF0C\u5B9E\u73B0\u7C7B\u4F3C<code>ref</code>\u6302\u8F7D\u5230<code>ClassComponent</code>\u4E0A\u7684\u6548\u679C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> useImperativeMethods<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>
  <span class="token literal-property property">ref</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">current</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">}</span> <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">inst</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token operator">|</span> <span class="token keyword">null</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> mixed<span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">|</span> <span class="token keyword">void</span><span class="token punctuation">,</span>
  <span class="token function-variable function">create</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">T</span><span class="token punctuation">,</span>
  <span class="token literal-property property">inputs</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>mixed<span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token keyword">void</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token comment">// TODO: If inputs are provided, should we skip comparing the ref itself?</span>
  <span class="token keyword">const</span> nextInputs <span class="token operator">=</span>
    inputs <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> inputs <span class="token operator">!==</span> <span class="token keyword">undefined</span>
      <span class="token operator">?</span> inputs<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">[</span>ref<span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token operator">:</span> <span class="token punctuation">[</span>ref<span class="token punctuation">,</span> create<span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token function">useLayoutEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> ref <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> refCallback <span class="token operator">=</span> ref<span class="token punctuation">;</span>
      <span class="token keyword">const</span> inst <span class="token operator">=</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">refCallback</span><span class="token punctuation">(</span>inst<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">refCallback</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>ref <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> ref <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> refObject <span class="token operator">=</span> ref<span class="token punctuation">;</span>
      <span class="token keyword">const</span> inst <span class="token operator">=</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      refObject<span class="token punctuation">.</span>current <span class="token operator">=</span> inst<span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        refObject<span class="token punctuation">.</span>current <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> nextInputs<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h1 id="usecallback" tabindex="-1"><a class="header-anchor" href="#usecallback" aria-hidden="true">#</a> useCallback</h1><p>\u521B\u5EFA\u4E00\u4E2A\u56DE\u8C03\u65B9\u6CD5\u7684\u7F13\u5B58\uFF0C\u53EF\u4EE5\u8BA9\u4F20\u5165\u5B50\u8282\u70B9\u4F5C\u4E3A<code>props</code>\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u8BA9\u5176\u6CA1\u6709\u53D8\u5316\uFF0C\u907F\u514D\u6CA1\u5FC5\u8981\u7684\u6E32\u67D3\u3002</p><p>\u6839\u636E\u8F93\u5165\u7684<code>inputs</code>\uFF0C\u4E5F\u5C31\u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C\u5185\u90E8\u7684\u5185\u5BB9\u662F\u5426\u53C8\u53D8\u56DE\uFF0C\u51B3\u5B9A\u662F\u8FD4\u56DE\u5B58\u50A8\u7684\u8001\u65B9\u6CD5\uFF0C\u8FD8\u662F\u8FD4\u56DE\u65B0\u7684\u65B9\u6CD5\u5E76\u8BB0\u5F55\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> useCallback<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>
  <span class="token literal-property property">callback</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span>
  <span class="token literal-property property">inputs</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>mixed<span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token keyword">void</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>
  currentlyRenderingFiber <span class="token operator">=</span> <span class="token function">resolveCurrentlyRenderingFiber</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  workInProgressHook <span class="token operator">=</span> <span class="token function">createWorkInProgressHook</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> nextInputs <span class="token operator">=</span>
    inputs <span class="token operator">!==</span> <span class="token keyword">undefined</span> <span class="token operator">&amp;&amp;</span> inputs <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">?</span> inputs <span class="token operator">:</span> <span class="token punctuation">[</span>callback<span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> prevState <span class="token operator">=</span> workInProgressHook<span class="token punctuation">.</span>memoizedState<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>prevState <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> prevInputs <span class="token operator">=</span> prevState<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">areHookInputsEqual</span><span class="token punctuation">(</span>nextInputs<span class="token punctuation">,</span> prevInputs<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> prevState<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  workInProgressHook<span class="token punctuation">.</span>memoizedState <span class="token operator">=</span> <span class="token punctuation">[</span>callback<span class="token punctuation">,</span> nextInputs<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> callback<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h1 id="usememo" tabindex="-1"><a class="header-anchor" href="#usememo" aria-hidden="true">#</a> useMemo</h1><p><code>useMemo(() =&gt; fn, inputs)</code>\u8DDF<code>useCallback(fn, inputs)</code>\u6548\u679C\u4E00\u6837</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> useMemo<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>
  <span class="token function-variable function">nextCreate</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">T</span><span class="token punctuation">,</span>
  <span class="token literal-property property">inputs</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>mixed<span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token keyword">void</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>
  currentlyRenderingFiber <span class="token operator">=</span> <span class="token function">resolveCurrentlyRenderingFiber</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  workInProgressHook <span class="token operator">=</span> <span class="token function">createWorkInProgressHook</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> nextInputs <span class="token operator">=</span>
    inputs <span class="token operator">!==</span> <span class="token keyword">undefined</span> <span class="token operator">&amp;&amp;</span> inputs <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">?</span> inputs <span class="token operator">:</span> <span class="token punctuation">[</span>nextCreate<span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> prevState <span class="token operator">=</span> workInProgressHook<span class="token punctuation">.</span>memoizedState<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>prevState <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> prevInputs <span class="token operator">=</span> prevState<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">areHookInputsEqual</span><span class="token punctuation">(</span>nextInputs<span class="token punctuation">,</span> prevInputs<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> prevState<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> nextValue <span class="token operator">=</span> <span class="token function">nextCreate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  workInProgressHook<span class="token punctuation">.</span>memoizedState <span class="token operator">=</span> <span class="token punctuation">[</span>nextValue<span class="token punctuation">,</span> nextInputs<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> nextValue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div>`,17);function t(e,o){return p}var l=s(a,[["render",t]]);export{l as default};
