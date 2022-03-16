import{a as n}from"./app.ee3fc36b.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><h1 id="commitallhosteffects" tabindex="-1"><a class="header-anchor" href="#commitallhosteffects" aria-hidden="true">#</a> commitAllHostEffects</h1><p>\u8FD9\u8FB9\u5C31\u662F\u5BF9\u4F5C\u7528\u4E8E<code>HostComponent</code>\u4E0A\u7684\u6240\u6709<code>side effect</code>\u8FDB\u884C<code>commit</code></p><h2 id="commitresettextcontent" tabindex="-1"><a class="header-anchor" href="#commitresettextcontent" aria-hidden="true">#</a> commitResetTextContent</h2><p>\u5C31\u662F\u628A\u8282\u70B9\u7684\u6587\u5B57\u5185\u5BB9\u8BBE\u7F6E\u4E3A\u7A7A\u5B57\u7B26\u4E32</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">commitResetTextContent</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">current</span><span class="token operator">:</span> Fiber</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>supportsMutation<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>
  <span class="token function">resetTextContent</span><span class="token punctuation">(</span>current<span class="token punctuation">.</span>stateNode<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">resetTextContent</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">domElement</span><span class="token operator">:</span> Instance</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token function">setTextContent</span><span class="token punctuation">(</span>domElement<span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> <span class="token function-variable function">setTextContent</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">node</span><span class="token operator">:</span> Element<span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>text<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> firstChild <span class="token operator">=</span> node<span class="token punctuation">.</span>firstChild

    <span class="token keyword">if</span> <span class="token punctuation">(</span>
      firstChild <span class="token operator">&amp;&amp;</span>
      firstChild <span class="token operator">===</span> node<span class="token punctuation">.</span>lastChild <span class="token operator">&amp;&amp;</span>
      firstChild<span class="token punctuation">.</span>nodeType <span class="token operator">===</span> <span class="token constant">TEXT_NODE</span>
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      firstChild<span class="token punctuation">.</span>nodeValue <span class="token operator">=</span> text
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  node<span class="token punctuation">.</span>textContent <span class="token operator">=</span> text
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h2 id="commitdetachref" tabindex="-1"><a class="header-anchor" href="#commitdetachref" aria-hidden="true">#</a> commitDetachRef</h2><p>\u628A<code>ref</code>\u7F6E\u7A7A\uFF0C\u56E0\u4E3A\u8FD9\u4E2A\u7EC4\u4EF6\u540E\u7EED\u9700\u8981\u8BBE\u7F6E<code>ref</code>\uFF0C\u6240\u4EE5\u4E4B\u524D<code>ref</code>\u4E0A\u7684\u503C\u9700\u8981\u5148\u6E05\u7A7A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">commitDetachRef</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">current</span><span class="token operator">:</span> Fiber</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> currentRef <span class="token operator">=</span> current<span class="token punctuation">.</span>ref
  <span class="token keyword">if</span> <span class="token punctuation">(</span>currentRef <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> currentRef <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">currentRef</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      currentRef<span class="token punctuation">.</span>current <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="placement-update-deletion" tabindex="-1"><a class="header-anchor" href="#placement-update-deletion" aria-hidden="true">#</a> placement &amp; update &amp; deletion</h2><ul><li><p><a href="">commitPlacement</a></p></li><li><p><a href="">commitWork</a></p></li><li><p><a href="">commitDeletion</a></p></li></ul><blockquote><p>\u6E90\u7801</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">commitAllHostEffects</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>nextEffect <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">recordEffect</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> effectTag <span class="token operator">=</span> nextEffect<span class="token punctuation">.</span>effectTag

    <span class="token keyword">if</span> <span class="token punctuation">(</span>effectTag <span class="token operator">&amp;</span> ContentReset<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">commitResetTextContent</span><span class="token punctuation">(</span>nextEffect<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>effectTag <span class="token operator">&amp;</span> Ref<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> current <span class="token operator">=</span> nextEffect<span class="token punctuation">.</span>alternate
      <span class="token keyword">if</span> <span class="token punctuation">(</span>current <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">commitDetachRef</span><span class="token punctuation">(</span>current<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> primaryEffectTag <span class="token operator">=</span> effectTag <span class="token operator">&amp;</span> <span class="token punctuation">(</span>Placement <span class="token operator">|</span> Update <span class="token operator">|</span> Deletion<span class="token punctuation">)</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>primaryEffectTag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">case</span> <span class="token literal-property property">Placement</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">commitPlacement</span><span class="token punctuation">(</span>nextEffect<span class="token punctuation">)</span>
        nextEffect<span class="token punctuation">.</span>effectTag <span class="token operator">&amp;=</span> <span class="token operator">~</span>Placement
        <span class="token keyword">break</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">case</span> <span class="token literal-property property">PlacementAndUpdate</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// Placement</span>
        <span class="token function">commitPlacement</span><span class="token punctuation">(</span>nextEffect<span class="token punctuation">)</span>
        nextEffect<span class="token punctuation">.</span>effectTag <span class="token operator">&amp;=</span> <span class="token operator">~</span>Placement

        <span class="token comment">// Update</span>
        <span class="token keyword">const</span> current <span class="token operator">=</span> nextEffect<span class="token punctuation">.</span>alternate
        <span class="token function">commitWork</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> nextEffect<span class="token punctuation">)</span>
        <span class="token keyword">break</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">case</span> <span class="token literal-property property">Update</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> current <span class="token operator">=</span> nextEffect<span class="token punctuation">.</span>alternate
        <span class="token function">commitWork</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> nextEffect<span class="token punctuation">)</span>
        <span class="token keyword">break</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">case</span> <span class="token literal-property property">Deletion</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">commitDeletion</span><span class="token punctuation">(</span>nextEffect<span class="token punctuation">)</span>
        <span class="token keyword">break</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    nextEffect <span class="token operator">=</span> nextEffect<span class="token punctuation">.</span>nextEffect
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br></div></div>`,13);function e(t,o){return p}var r=s(a,[["render",e]]);export{r as default};
