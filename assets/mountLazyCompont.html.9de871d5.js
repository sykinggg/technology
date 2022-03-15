import{a as n}from"./app.6f963528.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="mountlazycompont" tabindex="-1"><a class="header-anchor" href="#mountlazycompont" aria-hidden="true">#</a> mountLazyCompont</h1><p>\u4E3A\u4EC0\u4E48\u8981\u53EB<code>mount</code>\u800C\u4E0D\u662F<code>update</code>\u5462\uFF1F\u56E0\u4E3A<code>lazy</code>\u7EC4\u4EF6\u53EA\u6709\u5728\u52A0\u8F7D\u7684\u7EC4\u4EF6\u8FD8\u6CA1\u5B8C\u6210\u4E4B\u524D\u624D\u4F1A\u88AB\u6267\u884C\uFF0C\u7B49\u5230\u52A0\u8F7D\u5B8C\u6210\u4E86\uFF0C\u90A3\u4E48\u5C31\u53D8\u6210\u52A0\u8F7D\u4E4B\u540E\u7684\u7EC4\u4EF6\u4E86\uFF0C\u6C38\u8FDC\u4E0D\u4F1A\u6267\u884C\u5230\u81EA\u5DF1\u7684\u66F4\u65B0\u3002</p><p>\u8FD9\u4E5F\u662F\u4E00\u5F00\u59CB\u5224\u65AD<code>current</code>\u662F\u5426\u5B58\u5728\u7684\u539F\u56E0\uFF0C\u5982\u679C\u5B58\u5728\u5219\u4E0D\u7B26\u5408\u7EC4\u4EF6\u7684\u671F\u671B\uFF0C\u9700\u8981\u91CD\u65B0\u6309\u7167<code>current</code>\u4E0D\u5B58\u5728\u7684\u65B9\u5F0F\u8FDB\u884C\u66F4\u65B0\u3002</p><p>\u6838\u5FC3\u65B9\u6CD5\u662F<code>readLazyComponentType</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> readLazyComponentType<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>lazyComponent<span class="token operator">:</span> LazyComponent<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> status <span class="token operator">=</span> lazyComponent<span class="token punctuation">.</span>_status<span class="token punctuation">;</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> lazyComponent<span class="token punctuation">.</span>_result<span class="token punctuation">;</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>status<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token literal-property property">Resolved</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token literal-property property">Component</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token operator">=</span> result<span class="token punctuation">;</span>
      <span class="token keyword">return</span> Component<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">case</span> <span class="token literal-property property">Rejected</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token literal-property property">error</span><span class="token operator">:</span> mixed <span class="token operator">=</span> result<span class="token punctuation">;</span>
      <span class="token keyword">throw</span> error<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">case</span> <span class="token literal-property property">Pending</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token literal-property property">thenable</span><span class="token operator">:</span> Thenable<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> mixed<span class="token operator">&gt;</span> <span class="token operator">=</span> result<span class="token punctuation">;</span>
      <span class="token keyword">throw</span> thenable<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      lazyComponent<span class="token punctuation">.</span>_status <span class="token operator">=</span> Pending<span class="token punctuation">;</span>
      <span class="token keyword">const</span> ctor <span class="token operator">=</span> lazyComponent<span class="token punctuation">.</span>_ctor<span class="token punctuation">;</span>
      <span class="token keyword">const</span> thenable <span class="token operator">=</span> <span class="token function">ctor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      thenable<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
        <span class="token parameter">moduleObject</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>lazyComponent<span class="token punctuation">.</span>_status <span class="token operator">===</span> Pending<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> defaultExport <span class="token operator">=</span> moduleObject<span class="token punctuation">.</span>default<span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token keyword">if</span> <span class="token punctuation">(</span>defaultExport <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">warning</span><span class="token punctuation">(</span>
                  <span class="token boolean">false</span><span class="token punctuation">,</span>
                  <span class="token string">&#39;lazy: Expected the result of a dynamic import() call. &#39;</span> <span class="token operator">+</span>
                    <span class="token string">&#39;Instead received: %s\\n\\nYour code should look like: \\n  &#39;</span> <span class="token operator">+</span>
                    <span class="token string">&quot;const MyComponent = lazy(() =&gt; import(&#39;./MyComponent&#39;))&quot;</span><span class="token punctuation">,</span>
                  moduleObject<span class="token punctuation">,</span>
                <span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            lazyComponent<span class="token punctuation">.</span>_status <span class="token operator">=</span> Resolved<span class="token punctuation">;</span>
            lazyComponent<span class="token punctuation">.</span>_result <span class="token operator">=</span> defaultExport<span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token parameter">error</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>lazyComponent<span class="token punctuation">.</span>_status <span class="token operator">===</span> Pending<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            lazyComponent<span class="token punctuation">.</span>_status <span class="token operator">=</span> Rejected<span class="token punctuation">;</span>
            lazyComponent<span class="token punctuation">.</span>_result <span class="token operator">=</span> error<span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
      lazyComponent<span class="token punctuation">.</span>_result <span class="token operator">=</span> thenable<span class="token punctuation">;</span>
      <span class="token keyword">throw</span> thenable<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br></div></div><p>\u9ED8\u8BA4<code>status</code>\u662F<code>-1</code>\uFF0C\u6267\u884C\u4F20\u5165\u7684\u65B9\u6CD5\u5F97\u5230<code>thenable</code>\u65B9\u6CD5\uFF0C\u6839\u636E<code>thenable</code>\u7684\u7ED3\u679C\u66F4\u65B0\u7EC4\u4EF6\u7684\u72B6\u6001\uFF0C\u5E76\u4E14\u628A<code>resolve</code>\u7684\u7EC4\u4EF6\u8FDB\u884C\u8FD4\u56DE</p><p>\u8FD4\u56DE\u7EC4\u4EF6\u4E4B\u540E\u6267\u884C\u4E86\u4EE5\u4E0B\u51E0\u53E5\u4EE3\u7801\uFF0C\u975E\u5E38\u91CD\u8981\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>workInProgress<span class="token punctuation">.</span>type <span class="token operator">=</span> Component<span class="token punctuation">;</span>
<span class="token keyword">const</span> resolvedTag <span class="token operator">=</span> <span class="token punctuation">(</span>workInProgress<span class="token punctuation">.</span>tag <span class="token operator">=</span> <span class="token function">resolveLazyComponentTag</span><span class="token punctuation">(</span>Component<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u4ED6\u628A<code>lazy</code>\u7EC4\u4EF6\u7684<code>Fiber</code>\u5BF9\u8C61\u7684<code>tag</code>\u548C<code>type</code>\u90FD\u6539\u53D8\u4E86\uFF0C\u4E0B\u6B21\u6267\u884C\u5230\u8FD9\u4E2A<code>Fiber</code>\u7684\u66F4\u65B0\uFF0C\u5219\u4F1A\u76F4\u63A5\u66F4\u65B0\u8FD4\u56DE\u7684<code>type</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5173\u952E\u4EE3\u7801</span>
<span class="token keyword">function</span> <span class="token function">mountLazyComponent</span><span class="token punctuation">(</span>
  <span class="token parameter">_current<span class="token punctuation">,</span>
  workInProgress<span class="token punctuation">,</span>
  elementType<span class="token punctuation">,</span>
  updateExpirationTime<span class="token punctuation">,</span>
  renderExpirationTime<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>_current <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// An lazy component only mounts if it suspended inside a non-</span>
    <span class="token comment">// concurrent tree, in an inconsistent state. We want to tree it like</span>
    <span class="token comment">// a new mount, even though an empty version of it already committed.</span>
    <span class="token comment">// Disconnect the alternate pointers.</span>
    _current<span class="token punctuation">.</span>alternate <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    workInProgress<span class="token punctuation">.</span>alternate <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token comment">// Since this is conceptually a new fiber, schedule a Placement effect</span>
    workInProgress<span class="token punctuation">.</span>effectTag <span class="token operator">|=</span> Placement<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> props <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>pendingProps<span class="token punctuation">;</span>
  <span class="token comment">// We can&#39;t start a User Timing measurement with correct label yet.</span>
  <span class="token comment">// Cancel and resume right after we know the tag.</span>
  <span class="token function">cancelWorkTimer</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> Component <span class="token operator">=</span> <span class="token function">readLazyComponentType</span><span class="token punctuation">(</span>elementType<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// Store the unwrapped component in the type.</span>
  workInProgress<span class="token punctuation">.</span>type <span class="token operator">=</span> Component<span class="token punctuation">;</span>
  <span class="token keyword">const</span> resolvedTag <span class="token operator">=</span> <span class="token punctuation">(</span>workInProgress<span class="token punctuation">.</span>tag <span class="token operator">=</span> <span class="token function">resolveLazyComponentTag</span><span class="token punctuation">(</span>Component<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">startWorkTimer</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> resolvedProps <span class="token operator">=</span> <span class="token function">resolveDefaultProps</span><span class="token punctuation">(</span>Component<span class="token punctuation">,</span> props<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> child<span class="token punctuation">;</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>resolvedTag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token literal-property property">FunctionComponent</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      child <span class="token operator">=</span> <span class="token function">updateFunctionComponent</span><span class="token punctuation">(</span>
        <span class="token keyword">null</span><span class="token punctuation">,</span>
        workInProgress<span class="token punctuation">,</span>
        Component<span class="token punctuation">,</span>
        resolvedProps<span class="token punctuation">,</span>
        renderExpirationTime<span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">case</span> <span class="token literal-property property">ClassComponent</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      child <span class="token operator">=</span> <span class="token function">updateClassComponent</span><span class="token punctuation">(</span>
        <span class="token keyword">null</span><span class="token punctuation">,</span>
        workInProgress<span class="token punctuation">,</span>
        Component<span class="token punctuation">,</span>
        resolvedProps<span class="token punctuation">,</span>
        renderExpirationTime<span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">case</span> <span class="token literal-property property">ForwardRef</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      child <span class="token operator">=</span> <span class="token function">updateForwardRef</span><span class="token punctuation">(</span>
        <span class="token keyword">null</span><span class="token punctuation">,</span>
        workInProgress<span class="token punctuation">,</span>
        Component<span class="token punctuation">,</span>
        resolvedProps<span class="token punctuation">,</span>
        renderExpirationTime<span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">case</span> <span class="token literal-property property">MemoComponent</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      child <span class="token operator">=</span> <span class="token function">updateMemoComponent</span><span class="token punctuation">(</span>
        <span class="token keyword">null</span><span class="token punctuation">,</span>
        workInProgress<span class="token punctuation">,</span>
        Component<span class="token punctuation">,</span>
        <span class="token function">resolveDefaultProps</span><span class="token punctuation">(</span>Component<span class="token punctuation">.</span>type<span class="token punctuation">,</span> resolvedProps<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// The inner type can have defaults too</span>
        updateExpirationTime<span class="token punctuation">,</span>
        renderExpirationTime<span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> child<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br></div></div>`,10);function e(t,o){return p}var r=s(a,[["render",e]]);export{r as default};
