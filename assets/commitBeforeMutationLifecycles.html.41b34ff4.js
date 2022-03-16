import{a as n}from"./app.b05da4ec.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="commitbeforemutationlifecycles" tabindex="-1"><a class="header-anchor" href="#commitbeforemutationlifecycles" aria-hidden="true">#</a> commitBeforeMutationLifecycles</h1><p>\u8FD9\u91CC\u5728<code>ReactFiberScheduler.js</code>\u91CC\u9762\u58F0\u660E\u4E86\u8FD9\u4E2A\u65B9\u6CD5\uFF0C\u4F46\u8FD8\u4ECE<code>ReactFiberCommitWork</code>\u5F15\u5165\u4E86\u4E00\u4E2A\u540C\u540D\u65B9\u6CD5\uFF0C\u55EF~~~</p><p>\u8FD9\u5176\u5B9E\u5C31\u662F\u8C03\u7528<code>getSnapshotBeforeUpdate</code>\uFF0C\u5728\u540E\u9762\u8C03\u7528<code>componentDidUpdate</code>\u58F0\u660E\u5468\u671F\u65B9\u6CD5\u7684\u65F6\u5019\uFF0C\u4F1A\u4F20\u5165\u8FD9\u91CC\u8BA1\u7B97\u51FA\u6765\u7684\u503C\u3002</p><blockquote><p>\u6E90\u7801</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">commitBeforeMutationLifecycles</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>nextEffect <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> effectTag <span class="token operator">=</span> nextEffect<span class="token punctuation">.</span>effectTag
    <span class="token keyword">if</span> <span class="token punctuation">(</span>effectTag <span class="token operator">&amp;</span> Snapshot<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">recordEffect</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> current <span class="token operator">=</span> nextEffect<span class="token punctuation">.</span>alternate
      <span class="token function">commitBeforeMutationLifeCycles</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> nextEffect<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Don&#39;t cleanup effects yet;</span>
    <span class="token comment">// This will be done by commitAllLifeCycles()</span>
    nextEffect <span class="token operator">=</span> nextEffect<span class="token punctuation">.</span>nextEffect
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">commitBeforeMutationLifeCycles</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">current</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token literal-property property">finishedWork</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>finishedWork<span class="token punctuation">.</span>tag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token literal-property property">ClassComponent</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>finishedWork<span class="token punctuation">.</span>effectTag <span class="token operator">&amp;</span> Snapshot<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>current <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> prevProps <span class="token operator">=</span> current<span class="token punctuation">.</span>memoizedProps
          <span class="token keyword">const</span> prevState <span class="token operator">=</span> current<span class="token punctuation">.</span>memoizedState
          <span class="token function">startPhaseTimer</span><span class="token punctuation">(</span>finishedWork<span class="token punctuation">,</span> <span class="token string">&#39;getSnapshotBeforeUpdate&#39;</span><span class="token punctuation">)</span>
          <span class="token keyword">const</span> instance <span class="token operator">=</span> finishedWork<span class="token punctuation">.</span>stateNode
          instance<span class="token punctuation">.</span>props <span class="token operator">=</span> finishedWork<span class="token punctuation">.</span>memoizedProps
          instance<span class="token punctuation">.</span>state <span class="token operator">=</span> finishedWork<span class="token punctuation">.</span>memoizedState
          <span class="token keyword">const</span> snapshot <span class="token operator">=</span> instance<span class="token punctuation">.</span><span class="token function">getSnapshotBeforeUpdate</span><span class="token punctuation">(</span>
            prevProps<span class="token punctuation">,</span>
            prevState<span class="token punctuation">,</span>
          <span class="token punctuation">)</span>
          instance<span class="token punctuation">.</span>__reactInternalSnapshotBeforeUpdate <span class="token operator">=</span> snapshot
          <span class="token function">stopPhaseTimer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">case</span> <span class="token literal-property property">HostRoot</span><span class="token operator">:</span>
    <span class="token keyword">case</span> <span class="token literal-property property">HostComponent</span><span class="token operator">:</span>
    <span class="token keyword">case</span> <span class="token literal-property property">HostText</span><span class="token operator">:</span>
    <span class="token keyword">case</span> <span class="token literal-property property">HostPortal</span><span class="token operator">:</span>
    <span class="token keyword">case</span> <span class="token literal-property property">IncompleteClassComponent</span><span class="token operator">:</span>
      <span class="token comment">// Nothing to do for these component types</span>
      <span class="token keyword">return</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">invariant</span><span class="token punctuation">(</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token string">&#39;This unit of work tag should not have side-effects. This error is &#39;</span> <span class="token operator">+</span>
          <span class="token string">&#39;likely caused by a bug in React. Please file an issue.&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br></div></div>`,5);function e(t,o){return p}var l=s(a,[["render",e]]);export{l as default};
