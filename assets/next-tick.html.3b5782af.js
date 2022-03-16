import{o as a,c as p,b as e,F as t,a as n}from"./app.ee3fc36b.js";import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";const c={},l=n('<h1 id="nexttick" tabindex="-1"><a class="header-anchor" href="#nexttick" aria-hidden="true">#</a> nextTick</h1><p><code>nextTick</code> \u662F Vue \u7684\u4E00\u4E2A\u6838\u5FC3\u5B9E\u73B0\uFF0C\u5728\u4ECB\u7ECD Vue \u7684 nextTick \u4E4B\u524D\uFF0C\u4E3A\u4E86\u65B9\u4FBF\u5927\u5BB6\u7406\u89E3\uFF0C\u5148\u7B80\u5355\u4ECB\u7ECD\u4E00\u4E0B JS \u7684\u8FD0\u884C\u673A\u5236\u3002</p><h2 id="js-\u8FD0\u884C\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#js-\u8FD0\u884C\u673A\u5236" aria-hidden="true">#</a> JS \u8FD0\u884C\u673A\u5236</h2><p>JS \u6267\u884C\u662F\u5355\u7EBF\u7A0B\u7684\uFF0C\u5B83\u662F\u57FA\u4E8E\u4E8B\u4EF6\u5FAA\u73AF\u7684\u3002\u4E8B\u4EF6\u5FAA\u73AF\u5927\u81F4\u5206\u4E3A\u4EE5\u4E0B\u51E0\u4E2A\u6B65\u9AA4\uFF1A</p><p>\uFF081\uFF09\u6240\u6709\u540C\u6B65\u4EFB\u52A1\u90FD\u5728\u4E3B\u7EBF\u7A0B\u4E0A\u6267\u884C\uFF0C\u5F62\u6210\u4E00\u4E2A\u6267\u884C\u6808\uFF08execution context stack\uFF09\u3002</p><p>\uFF082\uFF09\u4E3B\u7EBF\u7A0B\u4E4B\u5916\uFF0C\u8FD8\u5B58\u5728\u4E00\u4E2A&quot;\u4EFB\u52A1\u961F\u5217&quot;\uFF08task queue\uFF09\u3002\u53EA\u8981\u5F02\u6B65\u4EFB\u52A1\u6709\u4E86\u8FD0\u884C\u7ED3\u679C\uFF0C\u5C31\u5728&quot;\u4EFB\u52A1\u961F\u5217&quot;\u4E4B\u4E2D\u653E\u7F6E\u4E00\u4E2A\u4E8B\u4EF6\u3002</p><p>\uFF083\uFF09\u4E00\u65E6&quot;\u6267\u884C\u6808&quot;\u4E2D\u7684\u6240\u6709\u540C\u6B65\u4EFB\u52A1\u6267\u884C\u5B8C\u6BD5\uFF0C\u7CFB\u7EDF\u5C31\u4F1A\u8BFB\u53D6&quot;\u4EFB\u52A1\u961F\u5217&quot;\uFF0C\u770B\u770B\u91CC\u9762\u6709\u54EA\u4E9B\u4E8B\u4EF6\u3002\u90A3\u4E9B\u5BF9\u5E94\u7684\u5F02\u6B65\u4EFB\u52A1\uFF0C\u4E8E\u662F\u7ED3\u675F\u7B49\u5F85\u72B6\u6001\uFF0C\u8FDB\u5165\u6267\u884C\u6808\uFF0C\u5F00\u59CB\u6267\u884C\u3002</p><p>\uFF084\uFF09\u4E3B\u7EBF\u7A0B\u4E0D\u65AD\u91CD\u590D\u4E0A\u9762\u7684\u7B2C\u4E09\u6B65\u3002</p>',8),u=["src"],r=n(`<p>\u4E3B\u7EBF\u7A0B\u7684\u6267\u884C\u8FC7\u7A0B\u5C31\u662F\u4E00\u4E2A tick\uFF0C\u800C\u6240\u6709\u7684\u5F02\u6B65\u7ED3\u679C\u90FD\u662F\u901A\u8FC7 \u201C\u4EFB\u52A1\u961F\u5217\u201D \u6765\u8C03\u5EA6\u3002 \u6D88\u606F\u961F\u5217\u4E2D\u5B58\u653E\u7684\u662F\u4E00\u4E2A\u4E2A\u7684\u4EFB\u52A1\uFF08task\uFF09\u3002 \u89C4\u8303\u4E2D\u89C4\u5B9A task \u5206\u4E3A\u4E24\u5927\u7C7B\uFF0C\u5206\u522B\u662F macro task \u548C micro task\uFF0C\u5E76\u4E14\u6BCF\u4E2A macro task \u7ED3\u675F\u540E\uFF0C\u90FD\u8981\u6E05\u7A7A\u6240\u6709\u7684 micro task\u3002</p><p>\u5173\u4E8E macro task \u548C micro task \u7684\u6982\u5FF5\uFF0C\u8FD9\u91CC\u4E0D\u4F1A\u7EC6\u8BB2\uFF0C\u7B80\u5355\u901A\u8FC7\u4E00\u6BB5\u4EE3\u7801\u6F14\u793A\u4ED6\u4EEC\u7684\u6267\u884C\u987A\u5E8F\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span>macroTask <span class="token keyword">of</span> macroTaskQueue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1. Handle current MACRO-TASK</span>
    <span class="token function">handleMacroTask</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      
    <span class="token comment">// 2. Handle all MICRO-TASK</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>microTask <span class="token keyword">of</span> microTaskQueue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">handleMicroTask</span><span class="token punctuation">(</span>microTask<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u5728\u6D4F\u89C8\u5668\u73AF\u5883\u4E2D\uFF0C\u5E38\u89C1\u7684 macro task \u6709 setTimeout\u3001MessageChannel\u3001postMessage\u3001setImmediate\uFF1B\u5E38\u89C1\u7684 micro task \u6709 MutationObsever \u548C Promise.then\u3002</p><h2 id="vue-\u7684\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#vue-\u7684\u5B9E\u73B0" aria-hidden="true">#</a> Vue \u7684\u5B9E\u73B0</h2><p>\u5728 Vue \u6E90\u7801 2.5+ \u540E\uFF0C<code>nextTick</code> \u7684\u5B9E\u73B0\u5355\u72EC\u6709\u4E00\u4E2A JS \u6587\u4EF6\u6765\u7EF4\u62A4\u5B83\uFF0C\u5B83\u7684\u6E90\u7801\u5E76\u4E0D\u591A\uFF0C\u603B\u5171\u4E5F\u5C31 100 \u591A\u884C\u3002\u63A5\u4E0B\u6765\u6765\u770B\u4E00\u4E0B\u5B83\u7684\u5B9E\u73B0\uFF0C\u5728 <code>src/core/util/next-tick.js</code> \u4E2D\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> noop <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;shared/util&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> handleError <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./error&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> isIOS<span class="token punctuation">,</span> isNative <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./env&#39;</span>

<span class="token keyword">const</span> callbacks <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> pending <span class="token operator">=</span> <span class="token boolean">false</span>

<span class="token keyword">function</span> <span class="token function">flushCallbacks</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  pending <span class="token operator">=</span> <span class="token boolean">false</span>
  <span class="token keyword">const</span> copies <span class="token operator">=</span> callbacks<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
  callbacks<span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> copies<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    copies<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Here we have async deferring wrappers using both microtasks and (macro) tasks.</span>
<span class="token comment">// In &lt; 2.4 we used microtasks everywhere, but there are some scenarios where</span>
<span class="token comment">// microtasks have too high a priority and fire in between supposedly</span>
<span class="token comment">// sequential events (e.g. #4521, #6690) or even between bubbling of the same</span>
<span class="token comment">// event (#6566). However, using (macro) tasks everywhere also has subtle problems</span>
<span class="token comment">// when state is changed right before repaint (e.g. #6813, out-in transitions).</span>
<span class="token comment">// Here we use microtask by default, but expose a way to force (macro) task when</span>
<span class="token comment">// needed (e.g. in event handlers attached by v-on).</span>
<span class="token keyword">let</span> microTimerFunc
<span class="token keyword">let</span> macroTimerFunc
<span class="token keyword">let</span> useMacroTask <span class="token operator">=</span> <span class="token boolean">false</span>

<span class="token comment">// Determine (macro) task defer implementation.</span>
<span class="token comment">// Technically setImmediate should be the ideal choice, but it&#39;s only available</span>
<span class="token comment">// in IE. The only polyfill that consistently queues the callback after all DOM</span>
<span class="token comment">// events triggered in the same loop is by using MessageChannel.</span>
<span class="token comment">/* istanbul ignore if */</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> setImmediate <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isNative</span><span class="token punctuation">(</span>setImmediate<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">macroTimerFunc</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setImmediate</span><span class="token punctuation">(</span>flushCallbacks<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> MessageChannel <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>
  <span class="token function">isNative</span><span class="token punctuation">(</span>MessageChannel<span class="token punctuation">)</span> <span class="token operator">||</span>
  <span class="token comment">// PhantomJS</span>
  MessageChannel<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;[object MessageChannelConstructor]&#39;</span>
<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> channel <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MessageChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> port <span class="token operator">=</span> channel<span class="token punctuation">.</span>port2
  channel<span class="token punctuation">.</span>port1<span class="token punctuation">.</span>onmessage <span class="token operator">=</span> flushCallbacks
  <span class="token function-variable function">macroTimerFunc</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    port<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token comment">/* istanbul ignore next */</span>
  <span class="token function-variable function">macroTimerFunc</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span>flushCallbacks<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Determine microtask defer implementation.</span>
<span class="token comment">/* istanbul ignore next, $flow-disable-line */</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> Promise <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isNative</span><span class="token punctuation">(</span>Promise<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> p <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token function-variable function">microTimerFunc</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    p<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>flushCallbacks<span class="token punctuation">)</span>
    <span class="token comment">// in problematic UIWebViews, Promise.then doesn&#39;t completely break, but</span>
    <span class="token comment">// it can get stuck in a weird state where callbacks are pushed into the</span>
    <span class="token comment">// microtask queue but the queue isn&#39;t being flushed, until the browser</span>
    <span class="token comment">// needs to do some other work, e.g. handle a timer. Therefore we can</span>
    <span class="token comment">// &quot;force&quot; the microtask queue to be flushed by adding an empty timer.</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>isIOS<span class="token punctuation">)</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>noop<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token comment">// fallback to macro</span>
  microTimerFunc <span class="token operator">=</span> macroTimerFunc
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * Wrap a function so that if any code inside triggers state change,
 * the changes are queued using a (macro) task instead of a microtask.
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">withMacroTask</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">fn</span><span class="token operator">:</span> Function</span><span class="token punctuation">)</span><span class="token operator">:</span> Function <span class="token punctuation">{</span>
  <span class="token keyword">return</span> fn<span class="token punctuation">.</span>_withTask <span class="token operator">||</span> <span class="token punctuation">(</span>fn<span class="token punctuation">.</span><span class="token function-variable function">_withTask</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    useMacroTask <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span>
    useMacroTask <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token keyword">return</span> res
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">nextTick</span> <span class="token punctuation">(</span><span class="token parameter">cb<span class="token operator">?</span><span class="token operator">:</span> Function<span class="token punctuation">,</span> ctx<span class="token operator">?</span><span class="token operator">:</span> Object</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> _resolve
  callbacks<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>cb<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token function">cb</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">handleError</span><span class="token punctuation">(</span>e<span class="token punctuation">,</span> ctx<span class="token punctuation">,</span> <span class="token string">&#39;nextTick&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>_resolve<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">_resolve</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>pending<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    pending <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>useMacroTask<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">macroTimerFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token function">microTimerFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// $flow-disable-line</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>cb <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> Promise <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      _resolve <span class="token operator">=</span> resolve
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br></div></div><p><code>next-tick.js</code> \u7533\u660E\u4E86 <code>microTimerFunc</code> \u548C <code>macroTimerFunc</code> 2 \u4E2A\u53D8\u91CF\uFF0C\u5B83\u4EEC\u5206\u522B\u5BF9\u5E94\u7684\u662F micro task \u7684\u51FD\u6570\u548C macro task \u7684\u51FD\u6570\u3002\u5BF9\u4E8E macro task \u7684\u5B9E\u73B0\uFF0C\u4F18\u5148\u68C0\u6D4B\u662F\u5426\u652F\u6301\u539F\u751F <code>setImmediate</code>\uFF0C\u8FD9\u662F\u4E00\u4E2A\u9AD8\u7248\u672C IE \u548C Edge \u624D\u652F\u6301\u7684\u7279\u6027\uFF0C\u4E0D\u652F\u6301\u7684\u8BDD\u518D\u53BB\u68C0\u6D4B\u662F\u5426\u652F\u6301\u539F\u751F\u7684 <code>MessageChannel</code>\uFF0C\u5982\u679C\u4E5F\u4E0D\u652F\u6301\u7684\u8BDD\u5C31\u4F1A\u964D\u7EA7\u4E3A <code>setTimeout 0</code>\uFF1B\u800C\u5BF9\u4E8E micro task \u7684\u5B9E\u73B0\uFF0C\u5219\u68C0\u6D4B\u6D4F\u89C8\u5668\u662F\u5426\u539F\u751F\u652F\u6301 Promise\uFF0C\u4E0D\u652F\u6301\u7684\u8BDD\u76F4\u63A5\u6307\u5411 macro task \u7684\u5B9E\u73B0\u3002</p><p><code>next-tick.js</code> \u5BF9\u5916\u66B4\u9732\u4E86 2 \u4E2A\u51FD\u6570\uFF0C\u5148\u6765\u770B <code>nextTick</code>\uFF0C\u8FD9\u5C31\u662F\u5728\u4E0A\u4E00\u8282\u6267\u884C <code>nextTick(flushSchedulerQueue)</code> \u6240\u7528\u5230\u7684\u51FD\u6570\u3002\u5B83\u7684\u903B\u8F91\u4E5F\u5F88\u7B80\u5355\uFF0C\u628A\u4F20\u5165\u7684\u56DE\u8C03\u51FD\u6570 <code>cb</code> \u538B\u5165 <code>callbacks</code> \u6570\u7EC4\uFF0C\u6700\u540E\u4E00\u6B21\u6027\u5730\u6839\u636E <code>useMacroTask</code> \u6761\u4EF6\u6267\u884C <code>macroTimerFunc</code> \u6216\u8005\u662F <code>microTimerFunc</code>\uFF0C\u800C\u5B83\u4EEC\u90FD\u4F1A\u5728\u4E0B\u4E00\u4E2A tick \u6267\u884C <code>flushCallbacks</code>\uFF0C<code>flushCallbacks</code> \u7684\u903B\u8F91\u975E\u5E38\u7B80\u5355\uFF0C\u5BF9 <code>callbacks</code> \u904D\u5386\uFF0C\u7136\u540E\u6267\u884C\u76F8\u5E94\u7684\u56DE\u8C03\u51FD\u6570\u3002</p><p>\u8FD9\u91CC\u4F7F\u7528 <code>callbacks</code> \u800C\u4E0D\u662F\u76F4\u63A5\u5728 <code>nextTick</code> \u4E2D\u6267\u884C\u56DE\u8C03\u51FD\u6570\u7684\u539F\u56E0\u662F\u4FDD\u8BC1\u5728\u540C\u4E00\u4E2A tick \u5185\u591A\u6B21\u6267\u884C <code>nextTick</code>\uFF0C\u4E0D\u4F1A\u5F00\u542F\u591A\u4E2A\u5F02\u6B65\u4EFB\u52A1\uFF0C\u800C\u628A\u8FD9\u4E9B\u5F02\u6B65\u4EFB\u52A1\u90FD\u538B\u6210\u4E00\u4E2A\u540C\u6B65\u4EFB\u52A1\uFF0C\u5728\u4E0B\u4E00\u4E2A tick \u6267\u884C\u5B8C\u6BD5\u3002</p><p><code>nextTick</code> \u51FD\u6570\u6700\u540E\u8FD8\u6709\u4E00\u6BB5\u903B\u8F91\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>cb <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> Promise <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    _resolve <span class="token operator">=</span> resolve
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u8FD9\u662F\u5F53 <code>nextTick</code> \u4E0D\u4F20 <code>cb</code> \u53C2\u6570\u7684\u65F6\u5019\uFF0C\u63D0\u4F9B\u4E00\u4E2A Promise \u5316\u7684\u8C03\u7528\uFF0C\u6BD4\u5982\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5F53 <code>_resolve</code> \u51FD\u6570\u6267\u884C\uFF0C\u5C31\u4F1A\u8DF3\u5230 <code>then</code> \u7684\u903B\u8F91\u4E2D\u3002</p><p><code>next-tick.js</code> \u8FD8\u5BF9\u5916\u66B4\u9732\u4E86 <code>withMacroTask</code> \u51FD\u6570\uFF0C\u5B83\u662F\u5BF9\u51FD\u6570\u505A\u4E00\u5C42\u5305\u88C5\uFF0C\u786E\u4FDD\u51FD\u6570\u6267\u884C\u8FC7\u7A0B\u4E2D\u5BF9\u6570\u636E\u4EFB\u610F\u7684\u4FEE\u6539\uFF0C\u89E6\u53D1\u53D8\u5316\u6267\u884C <code>nextTick</code> \u7684\u65F6\u5019\u5F3A\u5236\u8D70 <code>macroTimerFunc</code>\u3002\u6BD4\u5982\u5BF9\u4E8E\u4E00\u4E9B DOM \u4EA4\u4E92\u4E8B\u4EF6\uFF0C\u5982 <code>v-on</code> \u7ED1\u5B9A\u7684\u4E8B\u4EF6\u56DE\u8C03\u51FD\u6570\u7684\u5904\u7406\uFF0C\u4F1A\u5F3A\u5236\u8D70 macro task\u3002</p><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u901A\u8FC7\u8FD9\u4E00\u8282\u5BF9 <code>nextTick</code> \u7684\u5206\u6790\uFF0C\u5E76\u7ED3\u5408\u4E0A\u4E00\u8282\u7684 setter \u5206\u6790\uFF0C\u4E86\u89E3\u5230\u6570\u636E\u7684\u53D8\u5316\u5230 DOM \u7684\u91CD\u65B0\u6E32\u67D3\u662F\u4E00\u4E2A\u5F02\u6B65\u8FC7\u7A0B\uFF0C\u53D1\u751F\u5728\u4E0B\u4E00\u4E2A tick\u3002\u8FD9\u5C31\u662F\u5E73\u65F6\u5728\u5F00\u53D1\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u6BD4\u5982\u4ECE\u670D\u52A1\u7AEF\u63A5\u53E3\u53BB\u83B7\u53D6\u6570\u636E\u7684\u65F6\u5019\uFF0C\u6570\u636E\u505A\u4E86\u4FEE\u6539\uFF0C\u5982\u679C\u7684\u67D0\u4E9B\u65B9\u6CD5\u53BB\u4F9D\u8D56\u4E86\u6570\u636E\u4FEE\u6539\u540E\u7684 DOM \u53D8\u5316\uFF0C\u5C31\u5FC5\u987B\u5728 <code>nextTick</code> \u540E\u6267\u884C\u3002\u6BD4\u5982\u4E0B\u9762\u7684\u4F2A\u4EE3\u7801\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">getData</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>xxx <span class="token operator">=</span> res<span class="token punctuation">.</span>data
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u8FD9\u91CC\u53EF\u4EE5\u83B7\u53D6\u53D8\u5316\u540E\u7684 DOM</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>Vue.js \u63D0\u4F9B\u4E86 2 \u79CD\u8C03\u7528 <code>nextTick</code> \u7684\u65B9\u5F0F\uFF0C\u4E00\u79CD\u662F\u5168\u5C40 API <code>Vue.nextTick</code>\uFF0C\u4E00\u79CD\u662F\u5B9E\u4F8B\u4E0A\u7684\u65B9\u6CD5 <code>vm.$nextTick</code>\uFF0C\u65E0\u8BBA\u4F7F\u7528\u54EA\u4E00\u79CD\uFF0C\u6700\u540E\u90FD\u662F\u8C03\u7528 <code>next-tick.js</code> \u4E2D\u5B9E\u73B0\u7684 <code>nextTick</code> \u65B9\u6CD5\u3002</p>`,20);function i(s,k){return a(),p(t,null,[l,e("img",{src:s.$withBase("/assets/vue/event-loop.png"),alt:"\u539F\u7406\u56FE"},null,8,u),r],64)}var d=o(c,[["render",i]]);export{d as default};
