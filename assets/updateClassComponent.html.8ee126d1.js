import{a as n}from"./app.b05da4ec.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><h1 id="updateclasscomponent" tabindex="-1"><a class="header-anchor" href="#updateclasscomponent" aria-hidden="true">#</a> updateClassComponent</h1><p>\u5F00\u59CB\u662F\u5BF9<code>context</code>\u7684\u64CD\u4F5C\uFF0C\u56E0\u4E3A<code>ClassComponent</code>\u53EF\u4EE5\u6210\u4E3A<code>context provider</code>\u3002</p><p><code>current === null</code>\u53EA\u4F1A\u51FA\u73B0\u5728\u7B2C\u4E00\u6B21\u6E32\u67D3\u7684\u65F6\u5019\uFF0C\u56E0\u4E3A\u4F1A\u5148\u521B\u5EFA<code>workInProcess</code>\uFF0C\u5728\u6E32\u67D3\u7ED3\u675F\u4E4B\u540E\u624D\u4F1A\u628A<code>workInProcess</code>\u62F7\u8D1D\u6210<code>current</code>\uFF0C\u4EE3\u8868\u7740\u7B2C\u4E00\u6B21\u6E32\u67D3\u7ED3\u675F\u3002\u800C\u540E\u9762\u4E5F\u4F1A\u51FA\u73B0\u6839\u636E<code>current === null</code>\u6765\u5224\u65AD\u662F\u5426\u9700\u8981\u8C03\u7528<code>componentDidMount</code>\u7684\u4EE3\u7801</p><p>\u5728\u8FD9\u91CC\u5982\u679C<code>current === null</code>\u5C31\u884C\u8981\u8FDB\u884C\u5B9E\u4F8B\u7684\u6784\u5EFA\u5DE5\u4F5C\uFF0C\u5982\u679C\u4E0D\u662F\uFF0C\u76F4\u63A5<a href="">updateClassInstance</a></p><p>\u5982\u679C\u662F\u8FD8\u8981\u5224\u65AD\u5B9E\u4F8B\u662F\u5426\u5DF2\u7ECF\u521B\u5EFA<code>workInProgress.stateNode === null</code>\uFF0C\u5982\u679C\u662F\u7684\u8BDD\u8981\u521B\u5EFA\u8FD9\u4E2A\u5B9E\u4F8B\uFF0C\u901A\u8FC7<a href="">constructClassInstance</a>\uFF0C\u5E76\u4E14\u6302\u8F7D\u5B9E\u4F8B<a href="">mountClassInstance</a></p><p>\u5982\u679C\u5DF2\u7ECF\u6709<code>current</code>\u5219\u8C03\u7528<a href="">updateClassInstance</a></p><p>\u6700\u540E\u8C03\u7528<a href="">finishClassComponent</a></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">updateClassComponent</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">current</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token literal-property property">workInProgress</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span>
  <span class="token literal-property property">Component</span><span class="token operator">:</span> any<span class="token punctuation">,</span>
  nextProps<span class="token punctuation">,</span>
  <span class="token literal-property property">renderExpirationTime</span><span class="token operator">:</span> ExpirationTime<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Push context providers early to prevent context stack mismatches.</span>
  <span class="token comment">// During mounting we don&#39;t know the child context yet as the instance doesn&#39;t exist.</span>
  <span class="token comment">// We will invalidate the child context in finishClassComponent() right after rendering.</span>
  <span class="token keyword">let</span> hasContext
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isLegacyContextProvider</span><span class="token punctuation">(</span>Component<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    hasContext <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token function">pushLegacyContextProvider</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    hasContext <span class="token operator">=</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>
  <span class="token function">prepareToReadContext</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">,</span> renderExpirationTime<span class="token punctuation">)</span>

  <span class="token keyword">const</span> instance <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>stateNode
  <span class="token keyword">let</span> shouldUpdate
  <span class="token keyword">if</span> <span class="token punctuation">(</span>instance <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>current <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// An class component without an instance only mounts if it suspended</span>
      <span class="token comment">// inside a non- concurrent tree, in an inconsistent state. We want to</span>
      <span class="token comment">// tree it like a new mount, even though an empty version of it already</span>
      <span class="token comment">// committed. Disconnect the alternate pointers.</span>
      current<span class="token punctuation">.</span>alternate <span class="token operator">=</span> <span class="token keyword">null</span>
      workInProgress<span class="token punctuation">.</span>alternate <span class="token operator">=</span> <span class="token keyword">null</span>
      <span class="token comment">// Since this is conceptually a new fiber, schedule a Placement effect</span>
      workInProgress<span class="token punctuation">.</span>effectTag <span class="token operator">|=</span> Placement
    <span class="token punctuation">}</span>
    <span class="token comment">// In the initial pass we might need to construct the instance.</span>
    <span class="token function">constructClassInstance</span><span class="token punctuation">(</span>
      workInProgress<span class="token punctuation">,</span>
      Component<span class="token punctuation">,</span>
      nextProps<span class="token punctuation">,</span>
      renderExpirationTime<span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
    <span class="token function">mountClassInstance</span><span class="token punctuation">(</span>
      workInProgress<span class="token punctuation">,</span>
      Component<span class="token punctuation">,</span>
      nextProps<span class="token punctuation">,</span>
      renderExpirationTime<span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
    shouldUpdate <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>current <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// In a resume, we&#39;ll already have an instance we can reuse.</span>
    shouldUpdate <span class="token operator">=</span> <span class="token function">resumeMountClassInstance</span><span class="token punctuation">(</span>
      workInProgress<span class="token punctuation">,</span>
      Component<span class="token punctuation">,</span>
      nextProps<span class="token punctuation">,</span>
      renderExpirationTime<span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    shouldUpdate <span class="token operator">=</span> <span class="token function">updateClassInstance</span><span class="token punctuation">(</span>
      current<span class="token punctuation">,</span>
      workInProgress<span class="token punctuation">,</span>
      Component<span class="token punctuation">,</span>
      nextProps<span class="token punctuation">,</span>
      renderExpirationTime<span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token function">finishClassComponent</span><span class="token punctuation">(</span>
    current<span class="token punctuation">,</span>
    workInProgress<span class="token punctuation">,</span>
    Component<span class="token punctuation">,</span>
    shouldUpdate<span class="token punctuation">,</span>
    hasContext<span class="token punctuation">,</span>
    renderExpirationTime<span class="token punctuation">,</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br></div></div><h1 id="constructclassinstance" tabindex="-1"><a class="header-anchor" href="#constructclassinstance" aria-hidden="true">#</a> constructClassInstance</h1><p>\u9996\u5148\u6839\u636E<code>workInProcess.type</code>\u83B7\u53D6<code>class</code>\uFF0C\u7136\u540E\u6784\u5EFA<code>instance</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">adoptClassInstance</span><span class="token punctuation">(</span><span class="token parameter">workInProgress<span class="token punctuation">,</span> instance</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  instance<span class="token punctuation">.</span>updater <span class="token operator">=</span> classComponentUpdater
  workInProgress<span class="token punctuation">.</span>stateNode <span class="token operator">=</span> instance
  <span class="token comment">// The instance needs access to the fiber so that it can schedule updates</span>
  <span class="token function">set</span><span class="token punctuation">(</span>instance<span class="token punctuation">,</span> workInProgress<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    instance<span class="token punctuation">.</span>_reactInternalInstance <span class="token operator">=</span> fakeInternalInstance
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u8FD9\u4E2A\u65B9\u6CD5\u7ED9 ClassComponent \u7684\u5B9E\u4F8B\u6302\u8F7D\u4E00\u4E2A<code>updater</code>\u5BF9\u8C61</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">enqueueForceUpdate</span><span class="token operator">:</span> func<span class="token punctuation">,</span>
  <span class="token literal-property property">enqueueReplaceState</span><span class="token operator">:</span> func<span class="token punctuation">,</span>
  <span class="token literal-property property">enqueueSetState</span><span class="token operator">:</span> func<span class="token punctuation">,</span>
  <span class="token literal-property property">isMounted</span><span class="token operator">:</span> func
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u5F88\u719F\u6089\u5BF9\u4E0D\u5BF9\uFF0C\u8FD9\u51E0\u4E2A\u65B9\u6CD5\u5C31\u5BF9\u5E94\u5E73\u65F6\u8C03\u7528\u7684<code>forceUpdate</code>, <code>replaceState</code>, <code>setState</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">set</span><span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  key<span class="token punctuation">.</span>_reactInternalFiber <span class="token operator">=</span> value
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u8FD9\u91CC\u7ED9 <code>instance</code> \u7684<code>_reactInternalFiber</code>\u6302\u8F7D\u4E0A<code>workInProgress</code>\uFF0C\u6240\u4EE5\u53EF\u4EE5\u901A\u8FC7<code>this._reactInternalFiber</code>\u83B7\u53D6\u8BE5\u5B9E\u4F8B\u5BF9\u5E94\u7684<code>Fiber</code>\u5BF9\u8C61</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">constructClassInstance</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">workInProgress</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span>
  <span class="token literal-property property">ctor</span><span class="token operator">:</span> any<span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> any<span class="token punctuation">,</span>
  <span class="token literal-property property">renderExpirationTime</span><span class="token operator">:</span> ExpirationTime<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span><span class="token operator">:</span> any <span class="token punctuation">{</span>
  <span class="token keyword">const</span> unmaskedContext <span class="token operator">=</span> <span class="token function">getUnmaskedContext</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">,</span> ctor<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> contextTypes <span class="token operator">=</span> ctor<span class="token punctuation">.</span>contextTypes
  <span class="token keyword">const</span> isContextConsumer <span class="token operator">=</span> contextTypes <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> contextTypes <span class="token operator">!==</span> <span class="token keyword">undefined</span>
  <span class="token keyword">const</span> context <span class="token operator">=</span> isContextConsumer
    <span class="token operator">?</span> <span class="token function">getMaskedContext</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">,</span> unmaskedContext<span class="token punctuation">)</span>
    <span class="token operator">:</span> emptyContextObject

  <span class="token keyword">const</span> instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ctor</span><span class="token punctuation">(</span>props<span class="token punctuation">,</span> context<span class="token punctuation">)</span>
  <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token punctuation">(</span>workInProgress<span class="token punctuation">.</span>memoizedState <span class="token operator">=</span>
    instance<span class="token punctuation">.</span>state <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> instance<span class="token punctuation">.</span>state <span class="token operator">!==</span> <span class="token keyword">undefined</span>
      <span class="token operator">?</span> instance<span class="token punctuation">.</span>state
      <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
  <span class="token function">adoptClassInstance</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">,</span> instance<span class="token punctuation">)</span>

  <span class="token comment">// \u5220\u4E86\u4E00\u5806\u5173\u4E8E\u5F00\u53D1\u65F6\u63D0\u9192\u4E0D\u5B89\u5168\u7684\u751F\u547D\u5468\u671F\u65B9\u6CD5\u7684\u903B\u8F91</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>isContextConsumer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">cacheContext</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">,</span> unmaskedContext<span class="token punctuation">,</span> context<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> instance
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">adoptClassInstance</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">workInProgress</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span> <span class="token literal-property property">instance</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  instance<span class="token punctuation">.</span>updater <span class="token operator">=</span> classComponentUpdater
  workInProgress<span class="token punctuation">.</span>stateNode <span class="token operator">=</span> instance
  <span class="token comment">// The instance needs access to the fiber so that it can schedule updates</span>
  ReactInstanceMap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>instance<span class="token punctuation">,</span> workInProgress<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><h1 id="mountclassinstance" tabindex="-1"><a class="header-anchor" href="#mountclassinstance" aria-hidden="true">#</a> mountClassInstance</h1><p>\u521D\u59CB\u5316 <code>props</code>\u3001<code>state</code> \u7B49\u5B9E\u4F8B\u5C5E\u6027\uFF0C\u5982\u679C\u6709<code>updateQueue</code>\u5C31\u66F4\u65B0\u4E4B\uFF0C\u4E00\u822C\u6765\u8BF4\u7B2C\u4E00\u6B21\u6E32\u67D3\u662F\u6CA1\u6709\u7684\u3002</p><p><code>processUpdateQueue</code>\u7528\u6765\u8BA1\u7B97\u65B0\u7684<code>state</code>\uFF0C\u8BE6\u89C1\u8FD9\u91CC</p><p>TODO: <code>updateQueue</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> getDerivedStateFromProps <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>type<span class="token punctuation">.</span>getDerivedStateFromProps
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> getDerivedStateFromProps <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">applyDerivedStateFromProps</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">,</span> getDerivedStateFromProps<span class="token punctuation">,</span> props<span class="token punctuation">)</span>
  instance<span class="token punctuation">.</span>state <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>memoizedState
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u5982\u679C class \u6709\u58F0\u660E<code>getDerivedStateFromProps</code>\uFF0C\u5C31\u8C03\u7528\u4ED6\uFF0C\u8C03\u7528\u8BE5\u65B9\u6CD5\u4E4B\u540E\u4F1A\u6839\u636E\u7ED3\u679C\u66F4\u65B0<code>workInProgress.memoizedState</code>\uFF0C\u6240\u4EE5\u8981\u91CD\u65B0\u8D4B\u503C\u7ED9<code>instance.state</code></p><p>\u63A5\u4E0B\u53BB\u5224\u65AD\u4E00\u4E0B\u662F\u5426\u6CA1\u6709\u65B0\u7684\u751F\u547D\u5468\u671F\u65B9\u6CD5\uFF0C\u5982\u679C\u6CA1\u6709\u5E76\u4E14\u6709<code>componentWillMount</code>\u751F\u547D\u5468\u671F\u65B9\u6CD5\uFF0C\u5219\u8C03\u7528\u4ED6\u3002</p><p>\u6700\u540E\u5224\u65AD\u662F\u5426\u6709<code>componentDidMount</code>\uFF0C\u5982\u679C\u6709\u5C31\u4FEE\u6539<code>workInProgress.effectTag |= Update</code>\uFF0C\u56E0\u4E3A<code>componentDidMount</code>\u8981\u5728\u771F\u6B63\u6E32\u67D3\u8FDB<code>DOM</code>\u4E4B\u540E\u624D\u8C03\u7528\uFF0C\u4E5F\u5C31\u662F<code>commit</code>\u4E4B\u540E</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">mountClassInstance</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">workInProgress</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span>
  <span class="token literal-property property">ctor</span><span class="token operator">:</span> any<span class="token punctuation">,</span>
  <span class="token literal-property property">newProps</span><span class="token operator">:</span> any<span class="token punctuation">,</span>
  <span class="token literal-property property">renderExpirationTime</span><span class="token operator">:</span> ExpirationTime<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">checkClassInstance</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">,</span> ctor<span class="token punctuation">,</span> newProps<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> instance <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>stateNode
  <span class="token keyword">const</span> unmaskedContext <span class="token operator">=</span> <span class="token function">getUnmaskedContext</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">,</span> ctor<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>

  instance<span class="token punctuation">.</span>props <span class="token operator">=</span> newProps
  instance<span class="token punctuation">.</span>state <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>memoizedState
  instance<span class="token punctuation">.</span>refs <span class="token operator">=</span> emptyRefsObject
  instance<span class="token punctuation">.</span>context <span class="token operator">=</span> <span class="token function">getMaskedContext</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">,</span> unmaskedContext<span class="token punctuation">)</span>

  <span class="token keyword">let</span> updateQueue <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>updateQueue
  <span class="token keyword">if</span> <span class="token punctuation">(</span>updateQueue <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">processUpdateQueue</span><span class="token punctuation">(</span>
      workInProgress<span class="token punctuation">,</span>
      updateQueue<span class="token punctuation">,</span>
      newProps<span class="token punctuation">,</span>
      instance<span class="token punctuation">,</span>
      renderExpirationTime<span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
    instance<span class="token punctuation">.</span>state <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>memoizedState
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> getDerivedStateFromProps <span class="token operator">=</span> ctor<span class="token punctuation">.</span>getDerivedStateFromProps
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> getDerivedStateFromProps <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">applyDerivedStateFromProps</span><span class="token punctuation">(</span>
      workInProgress<span class="token punctuation">,</span>
      ctor<span class="token punctuation">,</span>
      getDerivedStateFromProps<span class="token punctuation">,</span>
      newProps<span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
    instance<span class="token punctuation">.</span>state <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>memoizedState
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>
    <span class="token keyword">typeof</span> ctor<span class="token punctuation">.</span>getDerivedStateFromProps <span class="token operator">!==</span> <span class="token string">&#39;function&#39;</span> <span class="token operator">&amp;&amp;</span>
    <span class="token keyword">typeof</span> instance<span class="token punctuation">.</span>getSnapshotBeforeUpdate <span class="token operator">!==</span> <span class="token string">&#39;function&#39;</span> <span class="token operator">&amp;&amp;</span>
    <span class="token punctuation">(</span><span class="token keyword">typeof</span> instance<span class="token punctuation">.</span>UNSAFE_componentWillMount <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span> <span class="token operator">||</span>
      <span class="token keyword">typeof</span> instance<span class="token punctuation">.</span>componentWillMount <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">callComponentWillMount</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">,</span> instance<span class="token punctuation">)</span>
    <span class="token comment">// If we had additional state updates during this life-cycle, let&#39;s</span>
    <span class="token comment">// process them now.</span>
    updateQueue <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>updateQueue
    <span class="token keyword">if</span> <span class="token punctuation">(</span>updateQueue <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">processUpdateQueue</span><span class="token punctuation">(</span>
        workInProgress<span class="token punctuation">,</span>
        updateQueue<span class="token punctuation">,</span>
        newProps<span class="token punctuation">,</span>
        instance<span class="token punctuation">,</span>
        renderExpirationTime<span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
      instance<span class="token punctuation">.</span>state <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>memoizedState
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> instance<span class="token punctuation">.</span>componentDidMount <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    workInProgress<span class="token punctuation">.</span>effectTag <span class="token operator">|=</span> Update
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br></div></div><h1 id="applyderivedstatefromprops" tabindex="-1"><a class="header-anchor" href="#applyderivedstatefromprops" aria-hidden="true">#</a> applyDerivedStateFromProps</h1><p>\u8C03\u7528<code>getDerivedStateFromProps</code>\u83B7\u5F97\u6700\u65B0\u7684<code>state</code>\u5E76\u653E\u5230<code>fiber.memoizedState</code>\u4E0A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">applyDerivedStateFromProps</span><span class="token punctuation">(</span>
  <span class="token literal-property property">workInProgress</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span>
  <span class="token function-variable function">getDerivedStateFromProps</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">props</span><span class="token operator">:</span> any<span class="token punctuation">,</span> <span class="token literal-property property">state</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> any<span class="token punctuation">,</span>
  <span class="token literal-property property">nextProps</span><span class="token operator">:</span> any<span class="token punctuation">,</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> prevState <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>memoizedState

  <span class="token keyword">const</span> partialState <span class="token operator">=</span> <span class="token function">getDerivedStateFromProps</span><span class="token punctuation">(</span>nextProps<span class="token punctuation">,</span> prevState<span class="token punctuation">)</span>

  <span class="token comment">// Merge the partial state and the previous state.</span>
  <span class="token keyword">const</span> memoizedState <span class="token operator">=</span>
    partialState <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> partialState <span class="token operator">===</span> <span class="token keyword">undefined</span>
      <span class="token operator">?</span> prevState
      <span class="token operator">:</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> prevState<span class="token punctuation">,</span> partialState<span class="token punctuation">)</span>
  workInProgress<span class="token punctuation">.</span>memoizedState <span class="token operator">=</span> memoizedState

  <span class="token comment">// Once the update queue is empty, persist the derived state onto the</span>
  <span class="token comment">// base state.</span>
  <span class="token keyword">const</span> updateQueue <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>updateQueue
  <span class="token keyword">if</span> <span class="token punctuation">(</span>updateQueue <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> updateQueue<span class="token punctuation">.</span>expirationTime <span class="token operator">===</span> NoWork<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    updateQueue<span class="token punctuation">.</span>baseState <span class="token operator">=</span> memoizedState
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h1 id="finishclasscomponent" tabindex="-1"><a class="header-anchor" href="#finishclasscomponent" aria-hidden="true">#</a> finishClassComponent</h1><p>\u9996\u5148<code>markRef</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">markRef</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">current</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token literal-property property">workInProgress</span><span class="token operator">:</span> Fiber</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> ref <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>ref
  <span class="token keyword">if</span> <span class="token punctuation">(</span>
    <span class="token punctuation">(</span>current <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> ref <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token operator">||</span>
    <span class="token punctuation">(</span>current <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> current<span class="token punctuation">.</span>ref <span class="token operator">!==</span> ref<span class="token punctuation">)</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Schedule a Ref effect</span>
    workInProgress<span class="token punctuation">.</span>effectTag <span class="token operator">|=</span> Ref
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u4E5F\u5C31\u662F\u7ED9<code>effectTag</code>\u52A0\u4E0A<code>Ref</code>\u5C5E\u6027</p><p>\u7136\u540E\u5982\u679C\u5373<code>shouldUpdate</code>\u4E0D\u4E3A<code>true</code>\uFF0C\u53C8\u6CA1\u6709\u6355\u83B7\u5230\u9519\u8BEF\uFF0C\u90A3\u4E48\u8BF4\u660E\u8FD9\u4E2A\u7EC4\u4EF6\u5DF2\u7ECF\u66F4\u65B0\u5B8C\u6210\u4E86\uFF0C\u76F4\u63A5\u8FD4\u56DE<code>bailoutOnAlreadyFinishedWork</code></p><p>\u4E4B\u540E\u8FDB\u5165<code>render</code>\u9636\u6BB5\uFF0C\u8FD9\u4E2A\u9636\u6BB5\u4E3B\u8981\u662F\u83B7\u53D6<code>instance.render</code>\u7684\u7ED3\u679C\uFF0C\u4F5C\u4E3A\u5F53\u524D<code>Fiber</code>\u7684<code>children</code>\uFF0C\u5230\u8FD9\u91CC\u5C31\u7ED3\u675F\u4E86<code>render</code>\u9636\u6BB5\u3002</p><p>\u518D\u7ED9<code>effectTag</code>\u52A0\u4E0A<code>PerformedWork</code>\uFF0C\u63A5\u4E0B\u53BB\u5C31\u8FDB\u5165\u4E86\u65E5\u5E38\u7684<code>reconcileChildrenAtExpirationTime</code>\u9636\u6BB5\u4E86</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">finishClassComponent</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">current</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token literal-property property">workInProgress</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span>
  <span class="token literal-property property">shouldUpdate</span><span class="token operator">:</span> boolean<span class="token punctuation">,</span>
  <span class="token literal-property property">hasContext</span><span class="token operator">:</span> boolean<span class="token punctuation">,</span>
  <span class="token literal-property property">renderExpirationTime</span><span class="token operator">:</span> ExpirationTime<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Refs should update even if shouldComponentUpdate returns false</span>
  <span class="token function">markRef</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> workInProgress<span class="token punctuation">)</span>

  <span class="token keyword">const</span> didCaptureError <span class="token operator">=</span> <span class="token punctuation">(</span>workInProgress<span class="token punctuation">.</span>effectTag <span class="token operator">&amp;</span> DidCapture<span class="token punctuation">)</span> <span class="token operator">!==</span> NoEffect

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>shouldUpdate <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>didCaptureError<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Context providers should defer to sCU for rendering</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>hasContext<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">invalidateContextProvider</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token function">bailoutOnAlreadyFinishedWork</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> workInProgress<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> ctor <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>type
  <span class="token keyword">const</span> instance <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>stateNode

  <span class="token comment">// Rerender</span>
  ReactCurrentOwner<span class="token punctuation">.</span>current <span class="token operator">=</span> workInProgress
  <span class="token keyword">let</span> nextChildren
  <span class="token keyword">if</span> <span class="token punctuation">(</span>
    didCaptureError <span class="token operator">&amp;&amp;</span>
    <span class="token punctuation">(</span><span class="token operator">!</span>enableGetDerivedStateFromCatch <span class="token operator">||</span>
      <span class="token keyword">typeof</span> ctor<span class="token punctuation">.</span>getDerivedStateFromCatch <span class="token operator">!==</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    nextChildren <span class="token operator">=</span> <span class="token keyword">null</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>enableProfilerTimer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">stopBaseRenderTimerIfRunning</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    nextChildren <span class="token operator">=</span> instance<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// React DevTools reads this flag.</span>
  workInProgress<span class="token punctuation">.</span>effectTag <span class="token operator">|=</span> PerformedWork
  <span class="token keyword">if</span> <span class="token punctuation">(</span>didCaptureError<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">reconcileChildrenAtExpirationTime</span><span class="token punctuation">(</span>
      current<span class="token punctuation">,</span>
      workInProgress<span class="token punctuation">,</span>
      <span class="token keyword">null</span><span class="token punctuation">,</span>
      renderExpirationTime<span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
    workInProgress<span class="token punctuation">.</span>child <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>
  <span class="token function">reconcileChildrenAtExpirationTime</span><span class="token punctuation">(</span>
    current<span class="token punctuation">,</span>
    workInProgress<span class="token punctuation">,</span>
    nextChildren<span class="token punctuation">,</span>
    renderExpirationTime<span class="token punctuation">,</span>
  <span class="token punctuation">)</span>
  <span class="token comment">// Memoize props and state using the values we just used to render.</span>
  <span class="token comment">// TODO: Restructure so we never read values from the instance.</span>
  <span class="token function">memoizeState</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">,</span> instance<span class="token punctuation">.</span>state<span class="token punctuation">)</span>
  <span class="token function">memoizeProps</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">,</span> instance<span class="token punctuation">.</span>props<span class="token punctuation">)</span>

  <span class="token comment">// The context might have changed so we need to recalculate it.</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>hasContext<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">invalidateContextProvider</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> workInProgress<span class="token punctuation">.</span>child
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br></div></div><h1 id="updateclassinstance" tabindex="-1"><a class="header-anchor" href="#updateclassinstance" aria-hidden="true">#</a> updateClassInstance</h1><p>\u8FD9\u4E2A\u4EE3\u7801\u5C31\u662F\u6309\u7167\u6D41\u7A0B\u6765\u529E\u4E8B\u6765\uFF0C\u6BD4\u8F83\u7B80\u5355\u5C31\u4E0D\u8BE6\u7EC6\u8BB2\u4E86\u3002\u4E3B\u8981\u5C31\u662F\u8C03\u7528\u6765\u66F4\u65B0\u76F8\u5173\u7684\u51E0\u4E2A\u751F\u547D\u5468\u671F\u65B9\u6CD5</p><p><code>checkShouldComponentUpdate</code>\u91CC\u9762\u4F1A\u8C03\u7528<code>shouldComponentUpdate</code>\u751F\u547D\u5468\u671F\u65B9\u6CD5</p><p><strong>\u8FD9\u91CC\u770B\u51FA\u6765\u662F\u5426\u9700\u8981<code>update</code>\u53EA\u53D6\u51B3\u4E8E\u4F60<code>shouldComponentUpdate</code>\u7684\u8FD4\u56DE\u4EE5\u53CA\u662F\u5426\u662F<code>PureComponent</code>\u5E76\u4E14<code>props</code>\u548C<code>state</code>\u6CA1\u6709\u53D8\u5316</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">checkShouldComponentUpdate</span><span class="token punctuation">(</span>
  <span class="token parameter">workInProgress<span class="token punctuation">,</span>
  ctor<span class="token punctuation">,</span>
  oldProps<span class="token punctuation">,</span>
  newProps<span class="token punctuation">,</span>
  oldState<span class="token punctuation">,</span>
  newState<span class="token punctuation">,</span>
  nextLegacyContext<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> instance <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>stateNode
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> instance<span class="token punctuation">.</span>shouldComponentUpdate <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">startPhaseTimer</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">,</span> <span class="token string">&#39;shouldComponentUpdate&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> shouldUpdate <span class="token operator">=</span> instance<span class="token punctuation">.</span><span class="token function">shouldComponentUpdate</span><span class="token punctuation">(</span>
      newProps<span class="token punctuation">,</span>
      newState<span class="token punctuation">,</span>
      nextLegacyContext<span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
    <span class="token function">stopPhaseTimer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">warningWithoutStack</span><span class="token punctuation">(</span>
        shouldUpdate <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
        <span class="token string">&#39;%s.shouldComponentUpdate(): Returned undefined instead of a &#39;</span> <span class="token operator">+</span>
          <span class="token string">&#39;boolean value. Make sure to return true or false.&#39;</span><span class="token punctuation">,</span>
        <span class="token function">getComponentName</span><span class="token punctuation">(</span>ctor<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">&#39;Component&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> shouldUpdate
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>ctor<span class="token punctuation">.</span>prototype <span class="token operator">&amp;&amp;</span> ctor<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>isPureReactComponent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">!</span><span class="token function">shallowEqual</span><span class="token punctuation">(</span>oldProps<span class="token punctuation">,</span> newProps<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token operator">!</span><span class="token function">shallowEqual</span><span class="token punctuation">(</span>oldState<span class="token punctuation">,</span> newState<span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">updateClassInstance</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">current</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span>
  <span class="token literal-property property">workInProgress</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span>
  <span class="token literal-property property">renderExpirationTime</span><span class="token operator">:</span> ExpirationTime<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span><span class="token operator">:</span> boolean <span class="token punctuation">{</span>
  <span class="token keyword">const</span> ctor <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>type
  <span class="token keyword">const</span> instance <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>stateNode

  <span class="token keyword">const</span> oldProps <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>memoizedProps
  <span class="token keyword">const</span> newProps <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>pendingProps
  instance<span class="token punctuation">.</span>props <span class="token operator">=</span> oldProps

  <span class="token keyword">const</span> oldContext <span class="token operator">=</span> instance<span class="token punctuation">.</span>context
  <span class="token keyword">const</span> newUnmaskedContext <span class="token operator">=</span> <span class="token function">getUnmaskedContext</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">)</span>
  <span class="token keyword">const</span> newContext <span class="token operator">=</span> <span class="token function">getMaskedContext</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">,</span> newUnmaskedContext<span class="token punctuation">)</span>

  <span class="token keyword">const</span> getDerivedStateFromProps <span class="token operator">=</span> ctor<span class="token punctuation">.</span>getDerivedStateFromProps
  <span class="token keyword">const</span> hasNewLifecycles <span class="token operator">=</span>
    <span class="token keyword">typeof</span> getDerivedStateFromProps <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span> <span class="token operator">||</span>
    <span class="token keyword">typeof</span> instance<span class="token punctuation">.</span>getSnapshotBeforeUpdate <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>
    <span class="token operator">!</span>hasNewLifecycles <span class="token operator">&amp;&amp;</span>
    <span class="token punctuation">(</span><span class="token keyword">typeof</span> instance<span class="token punctuation">.</span>UNSAFE_componentWillReceiveProps <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span> <span class="token operator">||</span>
      <span class="token keyword">typeof</span> instance<span class="token punctuation">.</span>componentWillReceiveProps <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>oldProps <span class="token operator">!==</span> newProps <span class="token operator">||</span> oldContext <span class="token operator">!==</span> newContext<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">callComponentWillReceiveProps</span><span class="token punctuation">(</span>
        workInProgress<span class="token punctuation">,</span>
        instance<span class="token punctuation">,</span>
        newProps<span class="token punctuation">,</span>
        newContext<span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">resetHasForceUpdateBeforeProcessing</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> oldState <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>memoizedState
  <span class="token keyword">let</span> newState <span class="token operator">=</span> <span class="token punctuation">(</span>instance<span class="token punctuation">.</span>state <span class="token operator">=</span> oldState<span class="token punctuation">)</span>
  <span class="token keyword">let</span> updateQueue <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>updateQueue
  <span class="token keyword">if</span> <span class="token punctuation">(</span>updateQueue <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">processUpdateQueue</span><span class="token punctuation">(</span>
      workInProgress<span class="token punctuation">,</span>
      updateQueue<span class="token punctuation">,</span>
      newProps<span class="token punctuation">,</span>
      instance<span class="token punctuation">,</span>
      renderExpirationTime<span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
    newState <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>memoizedState
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>
    oldProps <span class="token operator">===</span> newProps <span class="token operator">&amp;&amp;</span>
    oldState <span class="token operator">===</span> newState <span class="token operator">&amp;&amp;</span>
    <span class="token operator">!</span><span class="token function">hasContextChanged</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
    <span class="token operator">!</span><span class="token function">checkHasForceUpdateAfterProcessing</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> instance<span class="token punctuation">.</span>componentDidUpdate <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>
        oldProps <span class="token operator">!==</span> current<span class="token punctuation">.</span>memoizedProps <span class="token operator">||</span>
        oldState <span class="token operator">!==</span> current<span class="token punctuation">.</span>memoizedState
      <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        workInProgress<span class="token punctuation">.</span>effectTag <span class="token operator">|=</span> Update
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> instance<span class="token punctuation">.</span>getSnapshotBeforeUpdate <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>
        oldProps <span class="token operator">!==</span> current<span class="token punctuation">.</span>memoizedProps <span class="token operator">||</span>
        oldState <span class="token operator">!==</span> current<span class="token punctuation">.</span>memoizedState
      <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        workInProgress<span class="token punctuation">.</span>effectTag <span class="token operator">|=</span> Snapshot
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> getDerivedStateFromProps <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">applyDerivedStateFromProps</span><span class="token punctuation">(</span>
      workInProgress<span class="token punctuation">,</span>
      getDerivedStateFromProps<span class="token punctuation">,</span>
      newProps<span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
    newState <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>memoizedState
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> shouldUpdate <span class="token operator">=</span>
    <span class="token function">checkHasForceUpdateAfterProcessing</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">||</span>
    <span class="token function">checkShouldComponentUpdate</span><span class="token punctuation">(</span>
      workInProgress<span class="token punctuation">,</span>
      oldProps<span class="token punctuation">,</span>
      newProps<span class="token punctuation">,</span>
      oldState<span class="token punctuation">,</span>
      newState<span class="token punctuation">,</span>
      newContext<span class="token punctuation">,</span>
    <span class="token punctuation">)</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>shouldUpdate<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// In order to support react-lifecycles-compat polyfilled components,</span>
    <span class="token comment">// Unsafe lifecycles should not be invoked for components using the new APIs.</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>
      <span class="token operator">!</span>hasNewLifecycles <span class="token operator">&amp;&amp;</span>
      <span class="token punctuation">(</span><span class="token keyword">typeof</span> instance<span class="token punctuation">.</span>UNSAFE_componentWillUpdate <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span> <span class="token operator">||</span>
        <span class="token keyword">typeof</span> instance<span class="token punctuation">.</span>componentWillUpdate <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">startPhaseTimer</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">,</span> <span class="token string">&#39;componentWillUpdate&#39;</span><span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> instance<span class="token punctuation">.</span>componentWillUpdate <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        instance<span class="token punctuation">.</span><span class="token function">componentWillUpdate</span><span class="token punctuation">(</span>newProps<span class="token punctuation">,</span> newState<span class="token punctuation">,</span> newContext<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> instance<span class="token punctuation">.</span>UNSAFE_componentWillUpdate <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        instance<span class="token punctuation">.</span><span class="token function">UNSAFE_componentWillUpdate</span><span class="token punctuation">(</span>newProps<span class="token punctuation">,</span> newState<span class="token punctuation">,</span> newContext<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token function">stopPhaseTimer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> instance<span class="token punctuation">.</span>componentDidUpdate <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      workInProgress<span class="token punctuation">.</span>effectTag <span class="token operator">|=</span> Update
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> instance<span class="token punctuation">.</span>getSnapshotBeforeUpdate <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      workInProgress<span class="token punctuation">.</span>effectTag <span class="token operator">|=</span> Snapshot
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// If an update was already in progress, we should schedule an Update</span>
    <span class="token comment">// effect even though we&#39;re bailing out, so that cWU/cDU are called.</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> instance<span class="token punctuation">.</span>componentDidUpdate <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>
        oldProps <span class="token operator">!==</span> current<span class="token punctuation">.</span>memoizedProps <span class="token operator">||</span>
        oldState <span class="token operator">!==</span> current<span class="token punctuation">.</span>memoizedState
      <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        workInProgress<span class="token punctuation">.</span>effectTag <span class="token operator">|=</span> Update
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> instance<span class="token punctuation">.</span>getSnapshotBeforeUpdate <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>
        oldProps <span class="token operator">!==</span> current<span class="token punctuation">.</span>memoizedProps <span class="token operator">||</span>
        oldState <span class="token operator">!==</span> current<span class="token punctuation">.</span>memoizedState
      <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        workInProgress<span class="token punctuation">.</span>effectTag <span class="token operator">|=</span> Snapshot
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// If shouldComponentUpdate returned false, we should still update the</span>
    <span class="token comment">// memoized props/state to indicate that this work can be reused.</span>
    workInProgress<span class="token punctuation">.</span>memoizedProps <span class="token operator">=</span> newProps
    workInProgress<span class="token punctuation">.</span>memoizedState <span class="token operator">=</span> newState
  <span class="token punctuation">}</span>

  <span class="token comment">// Update the existing instance&#39;s state, props, and context pointers even</span>
  <span class="token comment">// if shouldComponentUpdate returns false.</span>
  instance<span class="token punctuation">.</span>props <span class="token operator">=</span> newProps
  instance<span class="token punctuation">.</span>state <span class="token operator">=</span> newState
  instance<span class="token punctuation">.</span>context <span class="token operator">=</span> newContext

  <span class="token keyword">return</span> shouldUpdate
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br></div></div>`,44);function e(t,o){return p}var l=s(a,[["render",e]]);export{l as default};
