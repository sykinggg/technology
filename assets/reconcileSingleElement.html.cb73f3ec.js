import{a as n}from"./app.6f963528.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><h1 id="reconcilesingleelement" tabindex="-1"><a class="header-anchor" href="#reconcilesingleelement" aria-hidden="true">#</a> reconcileSingleElement</h1><p>\u7B2C\u4E00\u4E2A<code>while</code>\u5FAA\u73AF\u7684\u76EE\u7684\u660E\u663E\u5C31\u662F\u627E\u5230\u8001\u7684<code>children</code>\u548C\u65B0\u7684<code>children</code>\u4E2D\u7B2C\u4E00\u4E2A<strong>key\u548C\u8282\u70B9\u7C7B\u578B</strong>\u76F8\u540C\u7684\u8282\u70B9\uFF0C\u76F4\u63A5\u590D\u7528\u8FD9\u4E2A\u8282\u70B9\uFF0C\u7136\u540E\u5220\u9664\u8001\u7684<code>children</code>\u4E2D\u5176\u4ED6\u7684\uFF08\u65E0\u6CD5\u4FDD\u8BC1\u65B0\u7684<code>children</code>\u662F\u5355\u4E2A\u8282\u70B9\u7684\u65F6\u5019\u8001\u7684<code>children</code>\u4E5F\u662F\u5355\u4E2A\u7684\uFF0C\u6240\u4EE5\u8981\u7528\u904D\u5386\u3002\uFF09</p><p><strong>\u6CE8\u610F<code>key</code>\u4E3A<code>null</code>\u4E5F\u8BA4\u4E3A\u662F\u76F8\u7B49\uFF0C\u56E0\u4E3A\u5355\u4E2A\u8282\u70B9\u6CA1\u6709<code>key</code>\u4E5F\u662F\u6B63\u5E38\u7684</strong></p><p>\u5982\u679C\u627E\u4E86\u4E00\u5708\u6CA1\u53D1\u73B0\uFF0C\u90A3\u4E48\u5C31\u628A\u8001\u7684<code>children</code>\u90FD\u5220\u4E86\uFF0C\u91CD\u65B0\u4E3A\u65B0\u7684<code>children</code>\u521B\u5EFA\u8282\u70B9\u3002</p><p><code>coerceRef</code>\u7684\u4F5C\u7528\u662F\u628A\u89C4\u8303\u5316<code>ref</code>\uFF0C\u56E0\u4E3A<code>ref</code>\u6709\u4E09\u79CD\u5F62\u5F0F\uFF0C<code>string ref</code>\u8981\u8F6C\u6362\u6210\u65B9\u6CD5\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">coerceRef</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">returnFiber</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span>
  <span class="token literal-property property">current</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token literal-property property">element</span><span class="token operator">:</span> ReactElement<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> mixedRef <span class="token operator">=</span> element<span class="token punctuation">.</span>ref
  <span class="token keyword">if</span> <span class="token punctuation">(</span>
    mixedRef <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span>
    <span class="token keyword">typeof</span> mixedRef <span class="token operator">!==</span> <span class="token string">&#39;function&#39;</span> <span class="token operator">&amp;&amp;</span>
    <span class="token keyword">typeof</span> mixedRef <span class="token operator">!==</span> <span class="token string">&#39;object&#39;</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>element<span class="token punctuation">.</span>_owner<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token literal-property property">owner</span><span class="token operator">:</span> <span class="token operator">?</span>Fiber <span class="token operator">=</span> <span class="token punctuation">(</span>element<span class="token punctuation">.</span>_owner<span class="token operator">:</span> any<span class="token punctuation">)</span>
      <span class="token keyword">let</span> inst
      <span class="token keyword">if</span> <span class="token punctuation">(</span>owner<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> ownerFiber <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>owner<span class="token operator">:</span> any<span class="token punctuation">)</span><span class="token operator">:</span> Fiber<span class="token punctuation">)</span>
        <span class="token function">invariant</span><span class="token punctuation">(</span>
          ownerFiber<span class="token punctuation">.</span>tag <span class="token operator">===</span> ClassComponent<span class="token punctuation">,</span>
          <span class="token string">&#39;Function components cannot have refs.&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span>
        inst <span class="token operator">=</span> ownerFiber<span class="token punctuation">.</span>stateNode
      <span class="token punctuation">}</span>
      <span class="token function">invariant</span><span class="token punctuation">(</span>
        inst<span class="token punctuation">,</span>
        <span class="token string">&#39;Missing owner for string ref %s. This error is likely caused by a &#39;</span> <span class="token operator">+</span>
          <span class="token string">&#39;bug in React. Please file an issue.&#39;</span><span class="token punctuation">,</span>
        mixedRef<span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
      <span class="token keyword">const</span> stringRef <span class="token operator">=</span> <span class="token string">&#39;&#39;</span> <span class="token operator">+</span> mixedRef
      <span class="token comment">// Check if previous string ref matches new string ref</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>
        current <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span>
        current<span class="token punctuation">.</span>ref <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span>
        <span class="token keyword">typeof</span> current<span class="token punctuation">.</span>ref <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span> <span class="token operator">&amp;&amp;</span>
        current<span class="token punctuation">.</span>ref<span class="token punctuation">.</span>_stringRef <span class="token operator">===</span> stringRef
      <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> current<span class="token punctuation">.</span>ref
      <span class="token punctuation">}</span>
      <span class="token keyword">const</span> <span class="token function-variable function">ref</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> refs <span class="token operator">=</span> inst<span class="token punctuation">.</span>refs
        <span class="token keyword">if</span> <span class="token punctuation">(</span>refs <span class="token operator">===</span> emptyRefsObject<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// This is a lazy pooled frozen object, so we need to initialize.</span>
          refs <span class="token operator">=</span> inst<span class="token punctuation">.</span>refs <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">delete</span> refs<span class="token punctuation">[</span>stringRef<span class="token punctuation">]</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          refs<span class="token punctuation">[</span>stringRef<span class="token punctuation">]</span> <span class="token operator">=</span> value
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      ref<span class="token punctuation">.</span>_stringRef <span class="token operator">=</span> stringRef
      <span class="token keyword">return</span> ref
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// error handlers</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> mixedRef
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br></div></div><p>\u8FD9\u4E2A\u65B9\u6CD5\u53EF\u4EE5\u770B\u51FA\u6765\u4F1A\u628A<code>string ref</code>\u8F6C\u6362\u6210\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u6700\u7EC8\u4F1A\u628A\u5BF9\u8C61\u8BBE\u7F6E\u5230<code>inst.refs</code>\u4E0A\u3002</p><blockquote><p>\u6E90\u7801</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">reconcileSingleElement</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">returnFiber</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span>
  <span class="token literal-property property">currentFirstChild</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token literal-property property">element</span><span class="token operator">:</span> ReactElement<span class="token punctuation">,</span>
  <span class="token literal-property property">expirationTime</span><span class="token operator">:</span> ExpirationTime<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span><span class="token operator">:</span> Fiber <span class="token punctuation">{</span>
  <span class="token keyword">const</span> key <span class="token operator">=</span> element<span class="token punctuation">.</span>key
  <span class="token keyword">let</span> child <span class="token operator">=</span> currentFirstChild
  <span class="token keyword">while</span> <span class="token punctuation">(</span>child <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// TODO: If key === null and child.key === null, then this only applies to</span>
    <span class="token comment">// the first item in the list.</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>child<span class="token punctuation">.</span>key <span class="token operator">===</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>
        child<span class="token punctuation">.</span>tag <span class="token operator">===</span> Fragment
          <span class="token operator">?</span> element<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token constant">REACT_FRAGMENT_TYPE</span>
          <span class="token operator">:</span> child<span class="token punctuation">.</span>elementType <span class="token operator">===</span> element<span class="token punctuation">.</span>type
      <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">deleteRemainingChildren</span><span class="token punctuation">(</span>returnFiber<span class="token punctuation">,</span> child<span class="token punctuation">.</span>sibling<span class="token punctuation">)</span>
        <span class="token keyword">const</span> existing <span class="token operator">=</span> <span class="token function">useFiber</span><span class="token punctuation">(</span>
          child<span class="token punctuation">,</span>
          element<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token constant">REACT_FRAGMENT_TYPE</span>
            <span class="token operator">?</span> element<span class="token punctuation">.</span>props<span class="token punctuation">.</span>children
            <span class="token operator">:</span> element<span class="token punctuation">.</span>props<span class="token punctuation">,</span>
          expirationTime<span class="token punctuation">,</span>
        <span class="token punctuation">)</span>
        existing<span class="token punctuation">.</span>ref <span class="token operator">=</span> <span class="token function">coerceRef</span><span class="token punctuation">(</span>returnFiber<span class="token punctuation">,</span> child<span class="token punctuation">,</span> element<span class="token punctuation">)</span>
        existing<span class="token punctuation">.</span>return <span class="token operator">=</span> returnFiber
        <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          existing<span class="token punctuation">.</span>_debugSource <span class="token operator">=</span> element<span class="token punctuation">.</span>_source
          existing<span class="token punctuation">.</span>_debugOwner <span class="token operator">=</span> element<span class="token punctuation">.</span>_owner
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> existing
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">deleteRemainingChildren</span><span class="token punctuation">(</span>returnFiber<span class="token punctuation">,</span> child<span class="token punctuation">)</span>
        <span class="token keyword">break</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token function">deleteChild</span><span class="token punctuation">(</span>returnFiber<span class="token punctuation">,</span> child<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    child <span class="token operator">=</span> child<span class="token punctuation">.</span>sibling
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>element<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token constant">REACT_FRAGMENT_TYPE</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> created <span class="token operator">=</span> <span class="token function">createFiberFromFragment</span><span class="token punctuation">(</span>
      element<span class="token punctuation">.</span>props<span class="token punctuation">.</span>children<span class="token punctuation">,</span>
      returnFiber<span class="token punctuation">.</span>mode<span class="token punctuation">,</span>
      expirationTime<span class="token punctuation">,</span>
      element<span class="token punctuation">.</span>key<span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
    created<span class="token punctuation">.</span>return <span class="token operator">=</span> returnFiber
    <span class="token keyword">return</span> created
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> created <span class="token operator">=</span> <span class="token function">createFiberFromElement</span><span class="token punctuation">(</span>
      element<span class="token punctuation">,</span>
      returnFiber<span class="token punctuation">.</span>mode<span class="token punctuation">,</span>
      expirationTime<span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
    created<span class="token punctuation">.</span>ref <span class="token operator">=</span> <span class="token function">coerceRef</span><span class="token punctuation">(</span>returnFiber<span class="token punctuation">,</span> currentFirstChild<span class="token punctuation">,</span> element<span class="token punctuation">)</span>
    created<span class="token punctuation">.</span>return <span class="token operator">=</span> returnFiber
    <span class="token keyword">return</span> created
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br></div></div><h1 id="reconcilesingleportal" tabindex="-1"><a class="header-anchor" href="#reconcilesingleportal" aria-hidden="true">#</a> reconcileSinglePortal</h1><p><code>portal</code>\u5176\u5B9E\u5C31\u662F\u7279\u6B8A\u7684<code>ReactElement</code>\uFF0C\u4ED6\u7684<code>$$typeof</code>\u4E0D\u662F<code>REACT_ELEMENT_TYPE</code>\u3002\u4F46\u662F\u4ED6\u4EEC\u7684\u5904\u7406\u65B9\u5F0F\u5176\u5B9E\u5DEE\u4E0D\u591A\uFF0C\u4E5F\u90FD\u662F\u5FAA\u73AF\u8001\u7684<code>children</code>\u627E\u80FD\u590D\u7528\u7684\uFF0C\u627E\u4E0D\u5230\u5C31\u521B\u5EFA\u65B0\u7684\uFF0C\u53EA\u662F\u521B\u5EFA<code>Fiber</code>\u7684\u65B9\u6CD5\u4E0D\u4E00\u6837\u3002</p><blockquote><p>\u6E90\u7801</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">reconcileSinglePortal</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">returnFiber</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span>
  <span class="token literal-property property">currentFirstChild</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token literal-property property">portal</span><span class="token operator">:</span> ReactPortal<span class="token punctuation">,</span>
  <span class="token literal-property property">expirationTime</span><span class="token operator">:</span> ExpirationTime<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span><span class="token operator">:</span> Fiber <span class="token punctuation">{</span>
  <span class="token keyword">const</span> key <span class="token operator">=</span> portal<span class="token punctuation">.</span>key
  <span class="token keyword">let</span> child <span class="token operator">=</span> currentFirstChild
  <span class="token keyword">while</span> <span class="token punctuation">(</span>child <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>child<span class="token punctuation">.</span>key <span class="token operator">===</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>
        child<span class="token punctuation">.</span>tag <span class="token operator">===</span> HostPortal <span class="token operator">&amp;&amp;</span>
        child<span class="token punctuation">.</span>stateNode<span class="token punctuation">.</span>containerInfo <span class="token operator">===</span> portal<span class="token punctuation">.</span>containerInfo <span class="token operator">&amp;&amp;</span>
        child<span class="token punctuation">.</span>stateNode<span class="token punctuation">.</span>implementation <span class="token operator">===</span> portal<span class="token punctuation">.</span>implementation
      <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">deleteRemainingChildren</span><span class="token punctuation">(</span>returnFiber<span class="token punctuation">,</span> child<span class="token punctuation">.</span>sibling<span class="token punctuation">)</span>
        <span class="token keyword">const</span> existing <span class="token operator">=</span> <span class="token function">useFiber</span><span class="token punctuation">(</span>child<span class="token punctuation">,</span> portal<span class="token punctuation">.</span>children <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> expirationTime<span class="token punctuation">)</span>
        existing<span class="token punctuation">.</span>return <span class="token operator">=</span> returnFiber
        <span class="token keyword">return</span> existing
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">deleteRemainingChildren</span><span class="token punctuation">(</span>returnFiber<span class="token punctuation">,</span> child<span class="token punctuation">)</span>
        <span class="token keyword">break</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token function">deleteChild</span><span class="token punctuation">(</span>returnFiber<span class="token punctuation">,</span> child<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    child <span class="token operator">=</span> child<span class="token punctuation">.</span>sibling
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> created <span class="token operator">=</span> <span class="token function">createFiberFromPortal</span><span class="token punctuation">(</span>
    portal<span class="token punctuation">,</span>
    returnFiber<span class="token punctuation">.</span>mode<span class="token punctuation">,</span>
    expirationTime<span class="token punctuation">,</span>
  <span class="token punctuation">)</span>
  created<span class="token punctuation">.</span>return <span class="token operator">=</span> returnFiber
  <span class="token keyword">return</span> created
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><h1 id="reconcilesingletextnode" tabindex="-1"><a class="header-anchor" href="#reconcilesingletextnode" aria-hidden="true">#</a> reconcileSingleTextNode</h1><p>\u6587\u5B57\u8282\u70B9\u7684\u5BF9\u6BD4\u6BD4\u8F83\u7B80\u5355\u7C97\u66B4\uFF0C\u76F4\u63A5\u627E\u8001\u7684<code>children</code>\u4E2D\u7684\u7B2C\u4E00\u4E2A\u8282\u70B9\uFF0C\u5982\u679C\u662F\u6587\u5B57\u8282\u70B9\u5C31\u590D\u7528\uFF0C\u5982\u679C\u4E0D\u662F\u5C31\u5220\u9664\u5168\u90E8\u8001\u7684\u8282\u70B9\uFF0C\u521B\u5EFA\u65B0\u7684\u6587\u5B57\u8282\u70B9\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">reconcileSingleTextNode</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">returnFiber</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span>
  <span class="token literal-property property">currentFirstChild</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token literal-property property">textContent</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token literal-property property">expirationTime</span><span class="token operator">:</span> ExpirationTime<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span><span class="token operator">:</span> Fiber <span class="token punctuation">{</span>
  <span class="token comment">// There&#39;s no need to check for keys on text nodes since we don&#39;t have a</span>
  <span class="token comment">// way to define them.</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>currentFirstChild <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> currentFirstChild<span class="token punctuation">.</span>tag <span class="token operator">===</span> HostText<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// We already have an existing node so let&#39;s just update it and delete</span>
    <span class="token comment">// the rest.</span>
    <span class="token function">deleteRemainingChildren</span><span class="token punctuation">(</span>returnFiber<span class="token punctuation">,</span> currentFirstChild<span class="token punctuation">.</span>sibling<span class="token punctuation">)</span>
    <span class="token keyword">const</span> existing <span class="token operator">=</span> <span class="token function">useFiber</span><span class="token punctuation">(</span>currentFirstChild<span class="token punctuation">,</span> textContent<span class="token punctuation">,</span> expirationTime<span class="token punctuation">)</span>
    existing<span class="token punctuation">.</span>return <span class="token operator">=</span> returnFiber
    <span class="token keyword">return</span> existing
  <span class="token punctuation">}</span>
  <span class="token comment">// The existing first child is not a text node so we need to create one</span>
  <span class="token comment">// and delete the existing ones.</span>
  <span class="token function">deleteRemainingChildren</span><span class="token punctuation">(</span>returnFiber<span class="token punctuation">,</span> currentFirstChild<span class="token punctuation">)</span>
  <span class="token keyword">const</span> created <span class="token operator">=</span> <span class="token function">createFiberFromText</span><span class="token punctuation">(</span>
    textContent<span class="token punctuation">,</span>
    returnFiber<span class="token punctuation">.</span>mode<span class="token punctuation">,</span>
    expirationTime<span class="token punctuation">,</span>
  <span class="token punctuation">)</span>
  created<span class="token punctuation">.</span>return <span class="token operator">=</span> returnFiber
  <span class="token keyword">return</span> created
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div>`,17);function e(t,o){return p}var l=s(a,[["render",e]]);export{l as default};
