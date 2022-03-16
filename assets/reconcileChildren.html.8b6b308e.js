import{a as n}from"./app.b05da4ec.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><h1 id="reconcilechildren" tabindex="-1"><a class="header-anchor" href="#reconcilechildren" aria-hidden="true">#</a> reconcileChildren</h1><p>\u8BE5\u65B9\u6CD5\u6700\u7EC8\u8C03\u7528\u7684\u662F<code>reconcileChildFibers</code></p><p><code>mountChildFibers</code>\u548C<code>reconcileChildFibers</code>\u65B9\u6CD5\u662F\u4E00\u6837\u7684\uFF0C\u552F\u4E00\u7684\u533A\u522B\u662F\u751F\u6210\u8FD9\u4E2A\u65B9\u6CD5\u7684\u65F6\u5019\u7684\u4E00\u4E2A\u53C2\u6570\u4E0D\u540C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> reconcileChildFibers <span class="token operator">=</span> <span class="token function">ChildReconciler</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> mountChildFibers <span class="token operator">=</span> <span class="token function">ChildReconciler</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u8FD9\u4E2A\u53C2\u6570\u53EB<code>shouldTrackSideEffects</code>\uFF0C\u4ED6\u7684\u4F5C\u7528\u662F\u5224\u65AD\u662F\u5426\u8981\u589E\u52A0\u4E00\u4E9B<code>effectTag</code>\uFF0C\u4E3B\u8981\u662F\u7528\u6765\u4F18\u5316\u521D\u6B21\u6E32\u67D3\u7684\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>shouldTrackSideEffects <span class="token operator">&amp;&amp;</span> newFiber<span class="token punctuation">.</span>alternate <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  newFiber<span class="token punctuation">.</span>effectTag <span class="token operator">=</span> Placement
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// TODO: Remove this and use reconcileChildrenAtExpirationTime directly.</span>
<span class="token keyword">function</span> <span class="token function">reconcileChildren</span><span class="token punctuation">(</span><span class="token parameter">current<span class="token punctuation">,</span> workInProgress<span class="token punctuation">,</span> nextChildren</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">reconcileChildrenAtExpirationTime</span><span class="token punctuation">(</span>
    current<span class="token punctuation">,</span>
    workInProgress<span class="token punctuation">,</span>
    nextChildren<span class="token punctuation">,</span>
    workInProgress<span class="token punctuation">.</span>expirationTime<span class="token punctuation">,</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">reconcileChildrenAtExpirationTime</span><span class="token punctuation">(</span>
  <span class="token parameter">current<span class="token punctuation">,</span>
  workInProgress<span class="token punctuation">,</span>
  nextChildren<span class="token punctuation">,</span>
  renderExpirationTime<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>current <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    workInProgress<span class="token punctuation">.</span>child <span class="token operator">=</span> <span class="token function">mountChildFibers</span><span class="token punctuation">(</span>
      workInProgress<span class="token punctuation">,</span>
      <span class="token keyword">null</span><span class="token punctuation">,</span>
      nextChildren<span class="token punctuation">,</span>
      renderExpirationTime<span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    workInProgress<span class="token punctuation">.</span>child <span class="token operator">=</span> <span class="token function">reconcileChildFibers</span><span class="token punctuation">(</span>
      workInProgress<span class="token punctuation">,</span>
      current<span class="token punctuation">.</span>child<span class="token punctuation">,</span>
      nextChildren<span class="token punctuation">,</span>
      renderExpirationTime<span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><h1 id="reconcilechildfibers" tabindex="-1"><a class="header-anchor" href="#reconcilechildfibers" aria-hidden="true">#</a> reconcileChildFibers</h1><p>\u8FD9\u662F\u4E2A\u5165\u53E3\u65B9\u6CD5\uFF0C\u4F1A\u6839\u636E<code>newChild</code>\u7684\u4E0D\u540C\u7C7B\u578B\u8FDB\u884C\u5BF9\u5E94\u7684\u5904\u7406\uFF0C\u8FD9\u91CC\u4F1A\u8FDB\u884C\u62C6\u5206\u5BF9\u4E0D\u540C\u7C7B\u578B\u7684\u5904\u7406\u65B9\u6CD5\u8FDB\u884C\u5355\u72EC\u7684\u8BB2\u89E3\u3002</p><p><code>reconcileChildFibers</code>\u6700\u7EC8\u7684\u8FD4\u56DE\u662F\u5F53\u524D\u8282\u70B9\u7684\u7B2C\u4E00\u4E2A\u5B69\u5B50\u8282\u70B9\uFF0C\u4F1A\u5728<code>performUnitWork</code>\u4E2D <code>return</code> \u5E76\u8D4B\u503C\u7ED9<code>nextUnitOfWork</code></p><p><code>children</code>\u7684\u5408\u6CD5\u7C7B\u578B\uFF1A</p><ul><li><p><code>ReactElement</code>\uFF0C\u901A\u8FC7<code>createElement</code>\u548C<code>ReactDOM.createPortal</code>\u521B\u5EFA\uFF0C<code>$$typeof</code>\u4E0D\u540C</p></li><li><p><code>string</code>\u6216\u8005<code>number</code>\uFF0C<code>&lt;div&gt;abc&lt;/div&gt;</code>\u4E2D<code>div</code>\u7684<code>children</code>\u5C31\u662F<code>&quot;abc&quot;</code></p></li><li><p><code>[// renderAble]</code>\u6570\u7EC4\uFF0C\u6BCF\u4E00\u9879\u90FD\u53EF\u4EE5\u662F\u5176\u4ED6\u5408\u6CD5\u7C7B\u578B\uFF0C\u4E0D\u80FD\u5D4C\u5957</p></li><li><p><code>Iterator</code>\uFF0C\u8DDF\u6570\u7EC4\u7C7B\u4F3C\uFF0C\u53EA\u662F\u904D\u5386\u65B9\u5F0F\u4E0D\u540C</p></li><li><p><code>React.ConcurrentMode</code>\u8FD9\u4E9B\u5185\u7F6E\u7EC4\u4EF6\uFF0C\u6700\u7EC8\u4F1A\u8F6C\u6362\u6210<code>ReactElement</code>\uFF0C\u4E0D\u540C\u7684\u662F<code>ReactElement.type</code></p></li><li><p><a href=""><code>reconcileSingleElement</code></a> &amp; <a href=""><code>reconcileSinglePortal</code></a> &amp; <a href=""><code>reconcileSingleTextNode</code></a></p></li><li><p><a href=""><code>reconcileChildrenArray</code></a> &amp; <a href=""><code>reconcileChildrenArray</code></a></p></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">reconcileChildFibers</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">returnFiber</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span>
  <span class="token literal-property property">currentFirstChild</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token literal-property property">newChild</span><span class="token operator">:</span> any<span class="token punctuation">,</span>
  <span class="token literal-property property">expirationTime</span><span class="token operator">:</span> ExpirationTime<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> isUnkeyedTopLevelFragment <span class="token operator">=</span>
    <span class="token keyword">typeof</span> newChild <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">&amp;&amp;</span>
    newChild <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span>
    newChild<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token constant">REACT_FRAGMENT_TYPE</span> <span class="token operator">&amp;&amp;</span>
    newChild<span class="token punctuation">.</span>key <span class="token operator">===</span> <span class="token keyword">null</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>isUnkeyedTopLevelFragment<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    newChild <span class="token operator">=</span> newChild<span class="token punctuation">.</span>props<span class="token punctuation">.</span>children
  <span class="token punctuation">}</span>

  <span class="token comment">// Handle object types</span>
  <span class="token keyword">const</span> isObject <span class="token operator">=</span> <span class="token keyword">typeof</span> newChild <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">&amp;&amp;</span> newChild <span class="token operator">!==</span> <span class="token keyword">null</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>isObject<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>newChild<span class="token punctuation">.</span>$$<span class="token keyword">typeof</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">case</span> <span class="token constant">REACT_ELEMENT_TYPE</span><span class="token operator">:</span>
        <span class="token keyword">return</span> <span class="token function">placeSingleChild</span><span class="token punctuation">(</span>
          <span class="token function">reconcileSingleElement</span><span class="token punctuation">(</span>
            returnFiber<span class="token punctuation">,</span>
            currentFirstChild<span class="token punctuation">,</span>
            newChild<span class="token punctuation">,</span>
            expirationTime<span class="token punctuation">,</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span>
      <span class="token keyword">case</span> <span class="token constant">REACT_PORTAL_TYPE</span><span class="token operator">:</span>
        <span class="token keyword">return</span> <span class="token function">placeSingleChild</span><span class="token punctuation">(</span>
          <span class="token function">reconcileSinglePortal</span><span class="token punctuation">(</span>
            returnFiber<span class="token punctuation">,</span>
            currentFirstChild<span class="token punctuation">,</span>
            newChild<span class="token punctuation">,</span>
            expirationTime<span class="token punctuation">,</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> newChild <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span> <span class="token operator">||</span> <span class="token keyword">typeof</span> newChild <span class="token operator">===</span> <span class="token string">&#39;number&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">placeSingleChild</span><span class="token punctuation">(</span>
      <span class="token function">reconcileSingleTextNode</span><span class="token punctuation">(</span>
        returnFiber<span class="token punctuation">,</span>
        currentFirstChild<span class="token punctuation">,</span>
        <span class="token string">&#39;&#39;</span> <span class="token operator">+</span> newChild<span class="token punctuation">,</span>
        expirationTime<span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isArray</span><span class="token punctuation">(</span>newChild<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">reconcileChildrenArray</span><span class="token punctuation">(</span>
      returnFiber<span class="token punctuation">,</span>
      currentFirstChild<span class="token punctuation">,</span>
      newChild<span class="token punctuation">,</span>
      expirationTime<span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">getIteratorFn</span><span class="token punctuation">(</span>newChild<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">reconcileChildrenIterator</span><span class="token punctuation">(</span>
      returnFiber<span class="token punctuation">,</span>
      currentFirstChild<span class="token punctuation">,</span>
      newChild<span class="token punctuation">,</span>
      expirationTime<span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>isObject<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">throwOnInvalidObjectType</span><span class="token punctuation">(</span>returnFiber<span class="token punctuation">,</span> newChild<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> newChild <span class="token operator">===</span> <span class="token string">&#39;undefined&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>isUnkeyedTopLevelFragment<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>returnFiber<span class="token punctuation">.</span>tag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">case</span> <span class="token literal-property property">ClassComponent</span><span class="token operator">:</span>
      <span class="token keyword">case</span> <span class="token literal-property property">FunctionComponent</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> Component <span class="token operator">=</span> returnFiber<span class="token punctuation">.</span>type
        <span class="token function">invariant</span><span class="token punctuation">(</span>
          <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token string">&#39;%s(...): Nothing was returned from render. This usually means a &#39;</span> <span class="token operator">+</span>
            <span class="token string">&#39;return statement is missing. Or, to render nothing, &#39;</span> <span class="token operator">+</span>
            <span class="token string">&#39;return null.&#39;</span><span class="token punctuation">,</span>
          Component<span class="token punctuation">.</span>displayName <span class="token operator">||</span> Component<span class="token punctuation">.</span>name <span class="token operator">||</span> <span class="token string">&#39;Component&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token function">deleteRemainingChildren</span><span class="token punctuation">(</span>returnFiber<span class="token punctuation">,</span> currentFirstChild<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br></div></div><h1 id="placesinglechild" tabindex="-1"><a class="header-anchor" href="#placesinglechild" aria-hidden="true">#</a> placeSingleChild</h1><p>\u5224\u65AD\u662F\u5426\u662F\u7B2C\u4E00\u6B21\u6E32\u67D3\uFF0C\u5982\u679C\u662F\u7684\u8BDD\u589E\u52A0<code>Placement</code>\u526F\u4F5C\u7528\uFF0C\u540E\u671F\u9700\u8981\u6302\u8F7D DOM</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">placeSingleChild</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">newFiber</span><span class="token operator">:</span> Fiber</span><span class="token punctuation">)</span><span class="token operator">:</span> Fiber <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>shouldTrackSideEffects <span class="token operator">&amp;&amp;</span> newFiber<span class="token punctuation">.</span>alternate <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    newFiber<span class="token punctuation">.</span>effectTag <span class="token operator">=</span> Placement
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> newFiber
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,17);function e(t,c){return p}var r=s(a,[["render",e]]);export{r as default};
