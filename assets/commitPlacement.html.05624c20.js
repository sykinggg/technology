import{a as n}from"./app.6f963528.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><h1 id="commitplacement" tabindex="-1"><a class="header-anchor" href="#commitplacement" aria-hidden="true">#</a> commitPlacement</h1><p>\u6302\u8F7D\u8282\u70B9</p><h2 id="gethostparentfiber" tabindex="-1"><a class="header-anchor" href="#gethostparentfiber" aria-hidden="true">#</a> getHostParentFiber</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getHostParentFiber</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">fiber</span><span class="token operator">:</span> Fiber</span><span class="token punctuation">)</span><span class="token operator">:</span> Fiber <span class="token punctuation">{</span>
  <span class="token keyword">let</span> parent <span class="token operator">=</span> fiber<span class="token punctuation">.</span>return
  <span class="token keyword">while</span> <span class="token punctuation">(</span>parent <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>parent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> parent
    <span class="token punctuation">}</span>
    parent <span class="token operator">=</span> parent<span class="token punctuation">.</span>return
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">isHostParent</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">fiber</span><span class="token operator">:</span> Fiber</span><span class="token punctuation">)</span><span class="token operator">:</span> boolean <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    fiber<span class="token punctuation">.</span>tag <span class="token operator">===</span> HostComponent <span class="token operator">||</span>
    fiber<span class="token punctuation">.</span>tag <span class="token operator">===</span> HostRoot <span class="token operator">||</span>
    fiber<span class="token punctuation">.</span>tag <span class="token operator">===</span> HostPortal
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>\u5982\u4E0A\uFF0C\u5C31\u662F\u4ECE\u7236\u94FE\u4E0A\u627E\u5230\u7B2C\u4E00\u4E2A\u5177\u6709<code>container</code>\u7684\u8282\u70B9\u6216\u8005\u662F<code>HostComponent</code></p><hr><p>\u6839\u636E\u627E\u5230\u7684<code>parent</code>\u8BBE\u7F6E\u53D8\u91CF</p><p>\u5982\u679C<code>parent</code>\u9700\u8981\u91CD\u65B0\u8BBE\u7F6E<code>text</code>\u8C03\u7528<code>resetTextContent</code></p><h2 id="gethostsibling" tabindex="-1"><a class="header-anchor" href="#gethostsibling" aria-hidden="true">#</a> getHostSibling</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getHostSibling</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">fiber</span><span class="token operator">:</span> Fiber</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token operator">?</span>Instance <span class="token punctuation">{</span>
  <span class="token keyword">let</span> <span class="token literal-property property">node</span><span class="token operator">:</span> Fiber <span class="token operator">=</span> fiber
  <span class="token literal-property property">siblings</span><span class="token operator">:</span> <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// If we didn&#39;t find anything, let&#39;s try the next sibling.</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>sibling <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>return <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> <span class="token function">isHostParent</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>return<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span>
      <span class="token punctuation">}</span>
      node <span class="token operator">=</span> node<span class="token punctuation">.</span>return
    <span class="token punctuation">}</span>
    node<span class="token punctuation">.</span>sibling<span class="token punctuation">.</span>return <span class="token operator">=</span> node<span class="token punctuation">.</span>return
    node <span class="token operator">=</span> node<span class="token punctuation">.</span>sibling
    <span class="token keyword">while</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>tag <span class="token operator">!==</span> HostComponent <span class="token operator">&amp;&amp;</span> node<span class="token punctuation">.</span>tag <span class="token operator">!==</span> HostText<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>effectTag <span class="token operator">&amp;</span> Placement<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// If we don&#39;t have a child, try the siblings instead.</span>
        <span class="token keyword">continue</span> siblings
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>child <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> node<span class="token punctuation">.</span>tag <span class="token operator">===</span> HostPortal<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">continue</span> siblings
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        node<span class="token punctuation">.</span>child<span class="token punctuation">.</span>return <span class="token operator">=</span> node
        node <span class="token operator">=</span> node<span class="token punctuation">.</span>child
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>effectTag <span class="token operator">&amp;</span> Placement<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// Found it!</span>
      <span class="token keyword">return</span> node<span class="token punctuation">.</span>stateNode
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p>\u8FD9\u4E2A\u65B9\u6CD5\u7528\u6765\u627E\u5230<strong>\u5F53\u524D\u8981\u6267\u884C\u63D2\u5165\u7684\u8282\u70B9\u7684\u73B0\u6709\u7684\u7B2C\u4E00\u4E2A\u53F3\u4FA7\u8282\u70B9\uFF0C\u5982\u679C\u8FD9\u4E2A\u65B9\u6CD5\u8FD4\u56DE<code>null</code>\uFF0C\u5219\u4F1A\u76F4\u63A5\u8C03\u7528<code>parent.appendChild</code></strong></p><p>\u8FD9\u91CC\u4E3B\u8981\u8003\u8651\u7684\u95EE\u9898\u662F<code>parent.appendChild</code>\u662F\u63D2\u5165\u5230\u6700\u540E\u7684\uFF0C\u800C\u5BF9\u4E8E React \u7684\u8282\u70B9\u64CD\u4F5C\uFF0C\u5F88\u53EF\u80FD\u63D2\u5165\u7684\u8282\u70B9\u662F\u5728\u4E2D\u95F4\u3002\u5BF9\u4E8E\u7B2C\u4E00\u6B21\u6E32\u67D3\uFF0C\u56E0\u4E3A\u6240\u6709<code>HostComponent</code>\u90FD\u662F\u9700\u8981\u63D2\u5165\u7684\uFF0C\u6240\u4EE5\u6309\u7167\u987A\u5E8F<code>appendChild</code>\u6CA1\u6709\u95EE\u9898\uFF0C<strong>\u6240\u4EE5 React \u628A\u8FD9\u4E00\u6B65\u653E\u5728<code>completeWork</code>\u5C31\u505A\u4E86</strong>\u3002\u4F46\u662F\u5BF9\u4E8E\u540E\u7EED\u66F4\u65B0\u8FD9\u4E2A\u662F\u4E0D\u786E\u5B9A\u7684\uFF0C\u6240\u4EE5\u8981\u627E\u5230\u6574\u68F5\u6811\u4E2D\u6240\u6709<code>HostComponent</code>\u7684\u6811\u7ED3\u6784\u4E2D\u7684\u53F3\u4FA7\u8282\u70B9\u3002</p><p>\u8FD9\u4E2A\u8282\u70B9\u53EF\u80FD\u5B58\u5728\u4E8E\uFF1A</p><ul><li><p>\u7236\u94FE\u4E2D\u4EFB\u4E00\u8282\u70B9\u7684\u53F3\u4FA7\u8282\u70B9\u7684\u5B50\u6811\u4E2D\u7684\u7B2C\u4E00\u4E2A<code>HostComponent</code></p></li><li><p>\u4ED6\u7684\u53F3\u4FA7\u5144\u5F1F\u8282\u70B9\u6216\u8005\u5B50\u6811\u4E2D\u7684\u7B2C\u4E00\u4E2A<code>HostComponent</code></p></li></ul><p>\u8FD9\u4E2A\u7B97\u6CD5\u5C31\u662F\u7528\u6765\u5B9E\u73B0\u8FD9\u4E2A\u641C\u7D22\u8FC7\u7A0B</p><hr><p>\u63A5\u4E0B\u53BB\u5C31\u662F\u5BF9\u4E0D\u540C\u7684\u60C5\u51B5\u6267\u884C\u4E0D\u540C\u7684\u63D2\u5165\u64CD\u4F5C</p><p>\u5BF9\u4E8E<code>HostPortal</code>\u4E0D\u9700\u8981\u64CD\u4F5C\uFF0C\u56E0\u4E3A\u8FD9\u5176\u5B9E\u662F\u4ED6\u7684\u5B50\u8282\u70B9\u63D2\u5165\u5230<code>HostPortal.containerInfo</code>\u7684\u8FC7\u7A0B\u3002</p><p>\u540C\u65F6\u8FD9\u662F\u4E2A\u5FAA\u73AF\uFF0C\u8FD9\u4E2A\u8DDF\u5728<code>completeWork</code>\u91CC<code>appendAllChindren</code>\u4E00\u6837\uFF0C\u8981\u628A\u5F53\u524D\u7EC4\u4EF6\u7684\u7B2C\u4E00\u5C42\u5B50\u8282\u70B9\u6267\u884C\u63D2\u5165\uFF0C\u6BD4\u5982\u5F53\u524D\u7EC4\u4EF6\u5982\u679C\u662F\u4E00\u4E2A\u8FD4\u56DE\u6570\u7EC4\u7684<code>ClassComponent</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">commitPlacement</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">finishedWork</span><span class="token operator">:</span> Fiber</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>supportsMutation<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// Recursively insert all host nodes into the parent.</span>
  <span class="token keyword">const</span> parentFiber <span class="token operator">=</span> <span class="token function">getHostParentFiber</span><span class="token punctuation">(</span>finishedWork<span class="token punctuation">)</span>

  <span class="token comment">// Note: these two variables *must* always be updated together.</span>
  <span class="token keyword">let</span> parent
  <span class="token keyword">let</span> isContainer

  <span class="token keyword">switch</span> <span class="token punctuation">(</span>parentFiber<span class="token punctuation">.</span>tag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token literal-property property">HostComponent</span><span class="token operator">:</span>
      parent <span class="token operator">=</span> parentFiber<span class="token punctuation">.</span>stateNode
      isContainer <span class="token operator">=</span> <span class="token boolean">false</span>
      <span class="token keyword">break</span>
    <span class="token keyword">case</span> <span class="token literal-property property">HostRoot</span><span class="token operator">:</span>
      parent <span class="token operator">=</span> parentFiber<span class="token punctuation">.</span>stateNode<span class="token punctuation">.</span>containerInfo
      isContainer <span class="token operator">=</span> <span class="token boolean">true</span>
      <span class="token keyword">break</span>
    <span class="token keyword">case</span> <span class="token literal-property property">HostPortal</span><span class="token operator">:</span>
      parent <span class="token operator">=</span> parentFiber<span class="token punctuation">.</span>stateNode<span class="token punctuation">.</span>containerInfo
      isContainer <span class="token operator">=</span> <span class="token boolean">true</span>
      <span class="token keyword">break</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
      <span class="token function">invariant</span><span class="token punctuation">(</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token string">&#39;Invalid host parent fiber. This error is likely caused by a bug &#39;</span> <span class="token operator">+</span>
          <span class="token string">&#39;in React. Please file an issue.&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>parentFiber<span class="token punctuation">.</span>effectTag <span class="token operator">&amp;</span> ContentReset<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Reset the text content of the parent before doing any insertions</span>
    <span class="token function">resetTextContent</span><span class="token punctuation">(</span>parent<span class="token punctuation">)</span>
    <span class="token comment">// Clear ContentReset from the effect tag</span>
    parentFiber<span class="token punctuation">.</span>effectTag <span class="token operator">&amp;=</span> <span class="token operator">~</span>ContentReset
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> before <span class="token operator">=</span> <span class="token function">getHostSibling</span><span class="token punctuation">(</span>finishedWork<span class="token punctuation">)</span>
  <span class="token comment">// We only have the top Fiber that was inserted but we need recurse down its</span>
  <span class="token comment">// children to find all the terminal nodes.</span>
  <span class="token keyword">let</span> <span class="token literal-property property">node</span><span class="token operator">:</span> Fiber <span class="token operator">=</span> finishedWork
  <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>tag <span class="token operator">===</span> HostComponent <span class="token operator">||</span> node<span class="token punctuation">.</span>tag <span class="token operator">===</span> HostText<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>before<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>isContainer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">insertInContainerBefore</span><span class="token punctuation">(</span>parent<span class="token punctuation">,</span> node<span class="token punctuation">.</span>stateNode<span class="token punctuation">,</span> before<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token function">insertBefore</span><span class="token punctuation">(</span>parent<span class="token punctuation">,</span> node<span class="token punctuation">.</span>stateNode<span class="token punctuation">,</span> before<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>isContainer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">appendChildToContainer</span><span class="token punctuation">(</span>parent<span class="token punctuation">,</span> node<span class="token punctuation">.</span>stateNode<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token function">appendChild</span><span class="token punctuation">(</span>parent<span class="token punctuation">,</span> node<span class="token punctuation">.</span>stateNode<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>tag <span class="token operator">===</span> HostPortal<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// If the insertion itself is a portal, then we don&#39;t want to traverse</span>
      <span class="token comment">// down its children. Instead, we&#39;ll get insertions from each child in</span>
      <span class="token comment">// the portal directly.</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>child <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      node<span class="token punctuation">.</span>child<span class="token punctuation">.</span>return <span class="token operator">=</span> node
      node <span class="token operator">=</span> node<span class="token punctuation">.</span>child
      <span class="token keyword">continue</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node <span class="token operator">===</span> finishedWork<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>sibling <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>return <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> node<span class="token punctuation">.</span>return <span class="token operator">===</span> finishedWork<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span>
      <span class="token punctuation">}</span>
      node <span class="token operator">=</span> node<span class="token punctuation">.</span>return
    <span class="token punctuation">}</span>
    node<span class="token punctuation">.</span>sibling<span class="token punctuation">.</span>return <span class="token operator">=</span> node<span class="token punctuation">.</span>return
    node <span class="token operator">=</span> node<span class="token punctuation">.</span>sibling
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br></div></div>`,21);function e(t,o){return p}var r=s(a,[["render",e]]);export{r as default};
