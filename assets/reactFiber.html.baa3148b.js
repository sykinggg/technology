import{a as n}from"./app.ee3fc36b.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h2 id="fiberroot" tabindex="-1"><a class="header-anchor" href="#fiberroot" aria-hidden="true">#</a> <strong>FiberRoot</strong></h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>type BaseFiberRootProperties <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token operator">|</span>
    <span class="token comment">// root\u8282\u70B9\uFF0Crender\u65B9\u6CD5\u63A5\u6536\u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570</span>
    <span class="token literal-property property">containerInfo</span><span class="token operator">:</span> any<span class="token punctuation">,</span>
    <span class="token comment">// \u53EA\u6709\u5728\u6301\u4E45\u66F4\u65B0\u4E2D\u4F1A\u7528\u5230\uFF0C\u4E5F\u5C31\u662F\u4E0D\u652F\u6301\u589E\u91CF\u66F4\u65B0\u7684\u5E73\u53F0\uFF0Creact-dom\u4E0D\u4F1A\u7528\u5230</span>
    <span class="token literal-property property">pendingChildren</span><span class="token operator">:</span> any<span class="token punctuation">,</span>
    <span class="token comment">// \u5F53\u524D\u5E94\u7528\u5BF9\u5E94\u7684Fiber\u5BF9\u8C61\uFF0C\u662FRoot Fiber</span>
    <span class="token literal-property property">current</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span>

    <span class="token comment">// \u4E00\u4E0B\u7684\u4F18\u5148\u7EA7\u662F\u7528\u6765\u533A\u5206</span>
    <span class="token comment">// 1) \u6CA1\u6709\u63D0\u4EA4(committed)\u7684\u4EFB\u52A1</span>
    <span class="token comment">// 2) \u6CA1\u6709\u63D0\u4EA4\u7684\u6302\u8D77\u4EFB\u52A1</span>
    <span class="token comment">// 3) \u6CA1\u6709\u63D0\u4EA4\u7684\u53EF\u80FD\u88AB\u6302\u8D77\u7684\u4EFB\u52A1</span>
    <span class="token comment">// \u9009\u62E9\u4E0D\u8FFD\u8E2A\u6BCF\u4E2A\u5355\u72EC\u7684\u963B\u585E\u767B\u8BB0\uFF0C\u4E3A\u4E86\u517C\u987E\u6027\u80FD</span>
    <span class="token comment">// The earliest and latest priority levels that are suspended from committing.</span>
    <span class="token comment">// \u6700\u8001\u548C\u65B0\u7684\u5728\u63D0\u4EA4\u7684\u65F6\u5019\u88AB\u6302\u8D77\u7684\u4EFB\u52A1</span>
    <span class="token literal-property property">earliestSuspendedTime</span><span class="token operator">:</span> ExpirationTime<span class="token punctuation">,</span>
    <span class="token literal-property property">latestSuspendedTime</span><span class="token operator">:</span> ExpirationTime<span class="token punctuation">,</span>
    <span class="token comment">// The earliest and latest priority levels that are not known to be suspended.</span>
    <span class="token comment">// \u6700\u8001\u548C\u6700\u65B0\u7684\u4E0D\u786E\u5B9A\u662F\u5426\u4F1A\u6302\u8D77\u7684\u4F18\u5148\u7EA7\uFF08\u6240\u6709\u4EFB\u52A1\u8FDB\u6765\u4E00\u5F00\u59CB\u90FD\u662F\u8FD9\u4E2A\u72B6\u6001\uFF09</span>
    <span class="token literal-property property">earliestPendingTime</span><span class="token operator">:</span> ExpirationTime<span class="token punctuation">,</span>
    <span class="token literal-property property">latestPendingTime</span><span class="token operator">:</span> ExpirationTime<span class="token punctuation">,</span>
    <span class="token comment">// The latest priority level that was pinged by a resolved promise and can</span>
    <span class="token comment">// be retried.</span>
    <span class="token comment">// \u6700\u65B0\u7684\u901A\u8FC7\u4E00\u4E2Apromise\u88ABreslove\u5E76\u4E14\u53EF\u4EE5\u91CD\u65B0\u5C1D\u8BD5\u7684\u4F18\u5148\u7EA7</span>
    <span class="token literal-property property">latestPingedTime</span><span class="token operator">:</span> ExpirationTime<span class="token punctuation">,</span>

    <span class="token comment">// \u5982\u679C\u6709\u9519\u8BEF\u88AB\u629B\u51FA\u5E76\u4E14\u6CA1\u6709\u66F4\u591A\u7684\u66F4\u65B0\u5B58\u5728\uFF0C\u5C1D\u8BD5\u5728\u5904\u7406\u9519\u8BEF\u524D\u540C\u6B65\u91CD\u65B0\u4ECE\u5934\u6E32\u67D3</span>
    <span class="token comment">// \u5728\`renderRoot\`\u51FA\u73B0\u65E0\u6CD5\u5904\u7406\u7684\u9519\u8BEF\u65F6\u4F1A\u88AB\u8BBE\u7F6E\u4E3A\`true\`</span>
    <span class="token literal-property property">didError</span><span class="token operator">:</span> boolean<span class="token punctuation">,</span>

    <span class="token comment">// \u6B63\u5728\u7B49\u5F85\u63D0\u4EA4\u7684\u4EFB\u52A1\u7684\`expirationTime\`</span>
    <span class="token literal-property property">pendingCommitExpirationTime</span><span class="token operator">:</span> ExpirationTime<span class="token punctuation">,</span>
    <span class="token comment">// \u5DF2\u7ECF\u5B8C\u6210\u7684\u4EFB\u52A1\u7684FiberRoot\u5BF9\u8C61\uFF0C\u5982\u679C\u53EA\u6709\u4E00\u4E2ARoot\uFF0C\u90A3\u4ED6\u6C38\u8FDC\u53EA\u53EF\u80FD\u662F\u8FD9\u4E2ARoot\u5BF9\u5E94\u7684Fiber\uFF0C\u6216\u8005\u662Fnull</span>
    <span class="token comment">// \u5728commit\u9636\u6BB5\u53EA\u4F1A\u5904\u7406\u8FD9\u4E2A\u503C\u5BF9\u5E94\u7684\u4EFB\u52A1</span>
    <span class="token literal-property property">finishedWork</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5728\u4EFB\u52A1\u88AB\u6302\u8D77\u7684\u65F6\u5019\u901A\u8FC7setTimeout\u8BBE\u7F6E\u7684\u8FD4\u56DE\u5185\u5BB9\uFF0C\u7528\u6765\u4E0B\u4E00\u6B21\u5982\u679C\u6709\u65B0\u7684\u4EFB\u52A1\u6302\u8D77\u65F6\u6E05\u7406\u8FD8\u6CA1\u89E6\u53D1\u7684timeout</span>
    <span class="token literal-property property">timeoutHandle</span><span class="token operator">:</span> TimeoutHandle <span class="token operator">|</span> NoTimeout<span class="token punctuation">,</span>
    <span class="token comment">// \u9876\u5C42context\u5BF9\u8C61\uFF0C\u53EA\u6709\u4E3B\u52A8\u8C03\u7528\`renderSubtreeIntoContainer\`\u65F6\u624D\u4F1A\u6709\u7528</span>
    <span class="token literal-property property">context</span><span class="token operator">:</span> Object <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">pendingContext</span><span class="token operator">:</span> Object <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7528\u6765\u786E\u5B9A\u7B2C\u4E00\u6B21\u6E32\u67D3\u7684\u65F6\u5019\u662F\u5426\u9700\u8981\u878D\u5408</span>
    <span class="token operator">+</span>hydrate<span class="token operator">:</span> boolean<span class="token punctuation">,</span>
    <span class="token comment">// \u5F53\u524Droot\u4E0A\u5269\u4F59\u7684\u8FC7\u671F\u65F6\u95F4</span>
    <span class="token comment">// TODO: \u63D0\u5230renderer\u91CC\u9762\u533A\u5904\u7406</span>
    <span class="token literal-property property">nextExpirationTimeToWorkOn</span><span class="token operator">:</span> ExpirationTime<span class="token punctuation">,</span>
    <span class="token comment">// \u5F53\u524D\u66F4\u65B0\u5BF9\u5E94\u7684\u8FC7\u671F\u65F6\u95F4</span>
    <span class="token literal-property property">expirationTime</span><span class="token operator">:</span> ExpirationTime<span class="token punctuation">,</span>
    <span class="token comment">// List of top-level batches. This list indicates whether a commit should be</span>
    <span class="token comment">// deferred. Also contains completion callbacks.</span>
    <span class="token comment">// TODO: Lift this into the renderer</span>
    <span class="token comment">// \u9876\u5C42\u6279\u6B21\uFF08\u6279\u5904\u7406\u4EFB\u52A1\uFF1F\uFF09\u8FD9\u4E2A\u53D8\u91CF\u6307\u660E\u4E00\u4E2Acommit\u662F\u5426\u5E94\u8BE5\u88AB\u63A8\u8FDF</span>
    <span class="token comment">// \u540C\u65F6\u5305\u62EC\u5B8C\u6210\u4E4B\u540E\u7684\u56DE\u8C03</span>
    <span class="token comment">// \u8C8C\u4F3C\u7528\u5728\u6D4B\u8BD5\u7684\u65F6\u5019\uFF1F</span>
    <span class="token literal-property property">firstBatch</span><span class="token operator">:</span> Batch <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token comment">// root\u4E4B\u95F4\u5173\u8054\u7684\u94FE\u8868\u7ED3\u6784</span>
    <span class="token literal-property property">nextScheduledRoot</span><span class="token operator">:</span> FiberRoot <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
<span class="token operator">|</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br></div></div><h2 id="fiber" tabindex="-1"><a class="header-anchor" href="#fiber" aria-hidden="true">#</a> <strong>Fiber</strong></h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// Fiber\u5BF9\u5E94\u4E00\u4E2A\u7EC4\u4EF6\u9700\u8981\u88AB\u5904\u7406\u6216\u8005\u5DF2\u7ECF\u5904\u7406\u4E86\uFF0C\u4E00\u4E2A\u7EC4\u4EF6\u53EF\u4EE5\u6709\u4E00\u4E2A\u6216\u8005\u591A\u4E2AFiber</span>
type Fiber <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token operator">|</span>
    <span class="token comment">// \u6807\u8BB0\u4E0D\u540C\u7684\u7EC4\u4EF6\u7C7B\u578B</span>
    <span class="token literal-property property">tag</span><span class="token operator">:</span> WorkTag<span class="token punctuation">,</span>

    <span class="token comment">// ReactElement\u91CC\u9762\u7684key</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token keyword">null</span> <span class="token operator">|</span> string<span class="token punctuation">,</span>

    <span class="token comment">// ReactElement.type\uFF0C\u4E5F\u5C31\u662F\u8C03\u7528\`createElement\`\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570</span>
    <span class="token literal-property property">elementType</span><span class="token operator">:</span> any<span class="token punctuation">,</span>

    <span class="token comment">// The resolved function/class/ associated with this fiber.</span>
    <span class="token comment">// \u5F02\u6B65\u7EC4\u4EF6resolved\u4E4B\u540E\u8FD4\u56DE\u7684\u5185\u5BB9\uFF0C\u4E00\u822C\u662F\`function\`\u6216\u8005\`class\`</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> any<span class="token punctuation">,</span>

    <span class="token comment">// The local state associated with this fiber.</span>
    <span class="token comment">// \u8DDF\u5F53\u524DFiber\u76F8\u5173\u672C\u5730\u72B6\u6001\uFF08\u6BD4\u5982\u6D4F\u89C8\u5668\u73AF\u5883\u5C31\u662FDOM\u8282\u70B9\uFF09</span>
    <span class="token literal-property property">stateNode</span><span class="token operator">:</span> any<span class="token punctuation">,</span>

    <span class="token comment">// \u6307\u5411\u4ED6\u5728Fiber\u8282\u70B9\u6811\u4E2D\u7684\`parent\`\uFF0C\u7528\u6765\u5728\u5904\u7406\u5B8C\u8FD9\u4E2A\u8282\u70B9\u4E4B\u540E\u5411\u4E0A\u8FD4\u56DE</span>
    <span class="token keyword">return</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>

    <span class="token comment">// \u5355\u94FE\u8868\u6811\u7ED3\u6784</span>
    <span class="token comment">// \u6307\u5411\u81EA\u5DF1\u7684\u7B2C\u4E00\u4E2A\u5B50\u8282\u70B9</span>
    <span class="token literal-property property">child</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token comment">// \u6307\u5411\u81EA\u5DF1\u7684\u5144\u5F1F\u7ED3\u6784</span>
    <span class="token comment">// \u5144\u5F1F\u8282\u70B9\u7684return\u6307\u5411\u540C\u4E00\u4E2A\u7236\u8282\u70B9</span>
    <span class="token literal-property property">sibling</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">index</span><span class="token operator">:</span> number<span class="token punctuation">,</span>

    <span class="token comment">// ref\u5C5E\u6027</span>
    <span class="token literal-property property">ref</span><span class="token operator">:</span> <span class="token keyword">null</span> <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">handle</span><span class="token operator">:</span> mixed</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token punctuation">{</span><span class="token literal-property property">_stringRef</span><span class="token operator">:</span> <span class="token operator">?</span>string<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">|</span> RefObject<span class="token punctuation">,</span>

    <span class="token comment">// \u65B0\u7684\u53D8\u52A8\u5E26\u6765\u7684\u65B0\u7684props</span>
    <span class="token literal-property property">pendingProps</span><span class="token operator">:</span> any<span class="token punctuation">,</span> 
    <span class="token comment">// \u4E0A\u4E00\u6B21\u6E32\u67D3\u5B8C\u6210\u4E4B\u540E\u7684props</span>
    <span class="token literal-property property">memoizedProps</span><span class="token operator">:</span> any<span class="token punctuation">,</span>

    <span class="token comment">// \u8BE5Fiber\u5BF9\u5E94\u7684\u7EC4\u4EF6\u4EA7\u751F\u7684Update\u4F1A\u5B58\u653E\u5728\u8FD9\u4E2A\u961F\u5217\u91CC\u9762</span>
    <span class="token literal-property property">updateQueue</span><span class="token operator">:</span> UpdateQueue<span class="token operator">&lt;</span>any<span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>

    <span class="token comment">// \u4E0A\u4E00\u6B21\u6E32\u67D3\u7684\u65F6\u5019\u7684state</span>
    <span class="token literal-property property">memoizedState</span><span class="token operator">:</span> any<span class="token punctuation">,</span>

    <span class="token comment">// \u4E00\u4E2A\u5217\u8868\uFF0C\u5B58\u653E\u8FD9\u4E2AFiber\u4F9D\u8D56\u7684context</span>
    <span class="token literal-property property">firstContextDependency</span><span class="token operator">:</span> ContextDependency<span class="token operator">&lt;</span>mixed<span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>

    <span class="token comment">// \u7528\u6765\u63CF\u8FF0\u5F53\u524DFiber\u548C\u4ED6\u5B50\u6811\u7684\`Bitfield\`</span>
    <span class="token comment">// \u5171\u5B58\u7684\u6A21\u5F0F\u8868\u793A\u8FD9\u4E2A\u5B50\u6811\u662F\u5426\u9ED8\u8BA4\u662F\u5F02\u6B65\u6E32\u67D3\u7684</span>
    <span class="token comment">// Fiber\u88AB\u521B\u5EFA\u7684\u65F6\u5019\u4ED6\u4F1A\u7EE7\u627F\u7236Fiber</span>
    <span class="token comment">// \u5176\u4ED6\u7684\u6807\u8BC6\u4E5F\u53EF\u4EE5\u5728\u521B\u5EFA\u7684\u65F6\u5019\u88AB\u8BBE\u7F6E</span>
    <span class="token comment">// \u4F46\u662F\u5728\u521B\u5EFA\u4E4B\u540E\u4E0D\u5E94\u8BE5\u518D\u88AB\u4FEE\u6539\uFF0C\u7279\u522B\u662F\u4ED6\u7684\u5B50Fiber\u521B\u5EFA\u4E4B\u524D</span>
    <span class="token literal-property property">mode</span><span class="token operator">:</span> TypeOfMode<span class="token punctuation">,</span>

    <span class="token comment">// Effect</span>
    <span class="token comment">// \u7528\u6765\u8BB0\u5F55Side Effect</span>
    <span class="token literal-property property">effectTag</span><span class="token operator">:</span> SideEffectTag<span class="token punctuation">,</span>

    <span class="token comment">// \u5355\u94FE\u8868\u7528\u6765\u5FEB\u901F\u67E5\u627E\u4E0B\u4E00\u4E2Aside effect</span>
    <span class="token literal-property property">nextEffect</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>

    <span class="token comment">// \u5B50\u6811\u4E2D\u7B2C\u4E00\u4E2Aside effect</span>
    <span class="token literal-property property">firstEffect</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5B50\u6811\u4E2D\u6700\u540E\u4E00\u4E2Aside effect</span>
    <span class="token literal-property property">lastEffect</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>

    <span class="token comment">// \u4EE3\u8868\u4EFB\u52A1\u5728\u672A\u6765\u7684\u54EA\u4E2A\u65F6\u95F4\u70B9\u5E94\u8BE5\u88AB\u5B8C\u6210</span>
    <span class="token comment">// \u4E0D\u5305\u62EC\u4ED6\u7684\u5B50\u6811\u4EA7\u751F\u7684\u4EFB\u52A1</span>
    <span class="token literal-property property">expirationTime</span><span class="token operator">:</span> ExpirationTime<span class="token punctuation">,</span>

    <span class="token comment">// \u5FEB\u901F\u786E\u5B9A\u5B50\u6811\u4E2D\u662F\u5426\u6709\u4E0D\u5728\u7B49\u5F85\u7684\u53D8\u5316</span>
    <span class="token literal-property property">childExpirationTime</span><span class="token operator">:</span> ExpirationTime<span class="token punctuation">,</span>

    <span class="token comment">// \u5728Fiber\u6811\u66F4\u65B0\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u6BCF\u4E2AFiber\u90FD\u4F1A\u6709\u4E00\u4E2A\u8DDF\u5176\u5BF9\u5E94\u7684Fiber</span>
    <span class="token comment">// \u79F0\u4ED6\u4E3A\`current &lt;==&gt; workInProgress\`</span>
    <span class="token comment">// \u5728\u6E32\u67D3\u5B8C\u6210\u4E4B\u540E\u4ED6\u4EEC\u4F1A\u4EA4\u6362\u4F4D\u7F6E</span>
    <span class="token literal-property property">alternate</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>

    <span class="token comment">// \u4E0B\u9762\u662F\u8C03\u8BD5\u76F8\u5173\u7684\uFF0C\u6536\u96C6\u6BCF\u4E2AFiber\u548C\u5B50\u6811\u6E32\u67D3\u65F6\u95F4\u7684</span>

    actualDuration<span class="token operator">?</span><span class="token operator">:</span> number<span class="token punctuation">,</span>

    <span class="token comment">// If the Fiber is currently active in the &quot;render&quot; phase,</span>
    <span class="token comment">// This marks the time at which the work began.</span>
    <span class="token comment">// This field is only set when the enableProfilerTimer flag is enabled.</span>
    actualStartTime<span class="token operator">?</span><span class="token operator">:</span> number<span class="token punctuation">,</span>

    <span class="token comment">// Duration of the most recent render time for this Fiber.</span>
    <span class="token comment">// This value is not updated when we bailout for memoization purposes.</span>
    <span class="token comment">// This field is only set when the enableProfilerTimer flag is enabled.</span>
    selfBaseDuration<span class="token operator">?</span><span class="token operator">:</span> number<span class="token punctuation">,</span>

    <span class="token comment">// Sum of base times for all descedents of this Fiber.</span>
    <span class="token comment">// This value bubbles up during the &quot;complete&quot; phase.</span>
    <span class="token comment">// This field is only set when the enableProfilerTimer flag is enabled.</span>
    treeBaseDuration<span class="token operator">?</span><span class="token operator">:</span> number<span class="token punctuation">,</span>

    <span class="token comment">// Conceptual aliases</span>
    <span class="token comment">// workInProgress : Fiber -&gt;  alternate The alternate used for reuse happens</span>
    <span class="token comment">// to be the same as work in progress.</span>
    <span class="token comment">// __DEV__ only</span>
    _debugID<span class="token operator">?</span><span class="token operator">:</span> number<span class="token punctuation">,</span>
    _debugSource<span class="token operator">?</span><span class="token operator">:</span> Source <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    _debugOwner<span class="token operator">?</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    _debugIsCurrentlyTiming<span class="token operator">?</span><span class="token operator">:</span> boolean<span class="token punctuation">,</span>
<span class="token operator">|</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br></div></div><h2 id="effecttags" tabindex="-1"><a class="header-anchor" href="#effecttags" aria-hidden="true">#</a> <strong>effectTags</strong></h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * <span class="token keyword">@flow</span>
 */</span>

<span class="token keyword">export</span> type SideEffectTag <span class="token operator">=</span> number<span class="token punctuation">;</span>

<span class="token comment">// Don&#39;t change these two values. They&#39;re used by React Dev Tools.</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> NoEffect <span class="token operator">=</span> <span class="token comment">/*              */</span> <span class="token number">0b00000000000</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> PerformedWork <span class="token operator">=</span> <span class="token comment">/*         */</span> <span class="token number">0b00000000001</span><span class="token punctuation">;</span>

<span class="token comment">// You can change the rest (and add more).</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> Placement <span class="token operator">=</span> <span class="token comment">/*             */</span> <span class="token number">0b00000000010</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> Update <span class="token operator">=</span> <span class="token comment">/*                */</span> <span class="token number">0b00000000100</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> PlacementAndUpdate <span class="token operator">=</span> <span class="token comment">/*    */</span> <span class="token number">0b00000000110</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> Deletion <span class="token operator">=</span> <span class="token comment">/*              */</span> <span class="token number">0b00000001000</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> ContentReset <span class="token operator">=</span> <span class="token comment">/*          */</span> <span class="token number">0b00000010000</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> Callback <span class="token operator">=</span> <span class="token comment">/*              */</span> <span class="token number">0b00000100000</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> DidCapture <span class="token operator">=</span> <span class="token comment">/*            */</span> <span class="token number">0b00001000000</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> Ref <span class="token operator">=</span> <span class="token comment">/*                   */</span> <span class="token number">0b00010000000</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> Snapshot <span class="token operator">=</span> <span class="token comment">/*              */</span> <span class="token number">0b00100000000</span><span class="token punctuation">;</span>

<span class="token comment">// Update &amp; Callback &amp; Ref &amp; Snapshot</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> LifecycleEffectMask <span class="token operator">=</span> <span class="token comment">/*   */</span> <span class="token number">0b00110100100</span><span class="token punctuation">;</span>

<span class="token comment">// Union of all host effects</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> HostEffectMask <span class="token operator">=</span> <span class="token comment">/*        */</span> <span class="token number">0b00111111111</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> Incomplete <span class="token operator">=</span> <span class="token comment">/*            */</span> <span class="token number">0b01000000000</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> ShouldCapture <span class="token operator">=</span> <span class="token comment">/*         */</span> <span class="token number">0b10000000000</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><h2 id="reactworktag" tabindex="-1"><a class="header-anchor" href="#reactworktag" aria-hidden="true">#</a> <strong>ReactWorkTag</strong></h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> FunctionComponent <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> ClassComponent <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> IndeterminateComponent <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// Before we know whether it is function or class</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> HostRoot <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span> <span class="token comment">// Root of a host tree. Could be nested inside another node.</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> HostPortal <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span> <span class="token comment">// A subtree. Could be an entry point to a different renderer.</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> HostComponent <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> HostText <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> Fragment <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> Mode <span class="token operator">=</span> <span class="token number">8</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> ContextConsumer <span class="token operator">=</span> <span class="token number">9</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> ContextProvider <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> ForwardRef <span class="token operator">=</span> <span class="token number">11</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> Profiler <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> SuspenseComponent <span class="token operator">=</span> <span class="token number">13</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> MemoComponent <span class="token operator">=</span> <span class="token number">14</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> SimpleMemoComponent <span class="token operator">=</span> <span class="token number">15</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> LazyComponent <span class="token operator">=</span> <span class="token number">16</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> IncompleteClassComponent <span class="token operator">=</span> <span class="token number">17</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="sideeffects" tabindex="-1"><a class="header-anchor" href="#sideeffects" aria-hidden="true">#</a> <strong>sideEffects</strong></h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * <span class="token keyword">@flow</span>
 */</span>

<span class="token keyword">export</span> type SideEffectTag <span class="token operator">=</span> number<span class="token punctuation">;</span>

<span class="token comment">// Don&#39;t change these two values. They&#39;re used by React Dev Tools.</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> NoEffect <span class="token operator">=</span> <span class="token comment">/*              */</span> <span class="token number">0b00000000000</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> PerformedWork <span class="token operator">=</span> <span class="token comment">/*         */</span> <span class="token number">0b00000000001</span><span class="token punctuation">;</span>

<span class="token comment">// You can change the rest (and add more).</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> Placement <span class="token operator">=</span> <span class="token comment">/*             */</span> <span class="token number">0b00000000010</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> Update <span class="token operator">=</span> <span class="token comment">/*                */</span> <span class="token number">0b00000000100</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> PlacementAndUpdate <span class="token operator">=</span> <span class="token comment">/*    */</span> <span class="token number">0b00000000110</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> Deletion <span class="token operator">=</span> <span class="token comment">/*              */</span> <span class="token number">0b00000001000</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> ContentReset <span class="token operator">=</span> <span class="token comment">/*          */</span> <span class="token number">0b00000010000</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> Callback <span class="token operator">=</span> <span class="token comment">/*              */</span> <span class="token number">0b00000100000</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> DidCapture <span class="token operator">=</span> <span class="token comment">/*            */</span> <span class="token number">0b00001000000</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> Ref <span class="token operator">=</span> <span class="token comment">/*                   */</span> <span class="token number">0b00010000000</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> Snapshot <span class="token operator">=</span> <span class="token comment">/*              */</span> <span class="token number">0b00100000000</span><span class="token punctuation">;</span>

<span class="token comment">// Update &amp; Callback &amp; Ref &amp; Snapshot</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> LifecycleEffectMask <span class="token operator">=</span> <span class="token comment">/*   */</span> <span class="token number">0b00110100100</span><span class="token punctuation">;</span>

<span class="token comment">// Union of all host effects</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> HostEffectMask <span class="token operator">=</span> <span class="token comment">/*        */</span> <span class="token number">0b00111111111</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> Incomplete <span class="token operator">=</span> <span class="token comment">/*            */</span> <span class="token number">0b01000000000</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> ShouldCapture <span class="token operator">=</span> <span class="token comment">/*         */</span> <span class="token number">0b10000000000</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><h2 id="update-updatequeue" tabindex="-1"><a class="header-anchor" href="#update-updatequeue" aria-hidden="true">#</a> <strong>Update &amp; UpdateQueue</strong></h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> type Update<span class="token operator">&lt;</span>State<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u66F4\u65B0\u7684\u8FC7\u671F\u65F6\u95F4</span>
    <span class="token literal-property property">expirationTime</span><span class="token operator">:</span> ExpirationTime<span class="token punctuation">,</span>

    <span class="token comment">// export const UpdateState = 0;</span>
    <span class="token comment">// export const ReplaceState = 1;</span>
    <span class="token comment">// export const ForceUpdate = 2;</span>
    <span class="token comment">// export const CaptureUpdate = 3;</span>
    <span class="token comment">// \u6307\u5B9A\u66F4\u65B0\u7684\u7C7B\u578B\uFF0C\u503C\u4E3A\u4EE5\u4E0A\u51E0\u79CD</span>
    <span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token operator">|</span> <span class="token number">1</span> <span class="token operator">|</span> <span class="token number">2</span> <span class="token operator">|</span> <span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token comment">// \u66F4\u65B0\u5185\u5BB9\uFF0C\u6BD4\u5982\`setState\`\u63A5\u6536\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570</span>
    <span class="token literal-property property">payload</span><span class="token operator">:</span> any<span class="token punctuation">,</span>
    <span class="token comment">// \u5BF9\u5E94\u7684\u56DE\u8C03\uFF0C\`setState\`\uFF0C\`render\`\u90FD\u6709</span>
    <span class="token literal-property property">callback</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> mixed<span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>

    <span class="token comment">// \u6307\u5411\u4E0B\u4E00\u4E2A\u66F4\u65B0</span>
    <span class="token literal-property property">next</span><span class="token operator">:</span> Update<span class="token operator">&lt;</span>State<span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token comment">// \u6307\u5411\u4E0B\u4E00\u4E2A\`side effect\`</span>
    <span class="token literal-property property">nextEffect</span><span class="token operator">:</span> Update<span class="token operator">&lt;</span>State<span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> type UpdateQueue<span class="token operator">&lt;</span>State<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u6BCF\u6B21\u64CD\u4F5C\u5B8C\u66F4\u65B0\u4E4B\u540E\u7684\`state\`</span>
    <span class="token literal-property property">baseState</span><span class="token operator">:</span> State<span class="token punctuation">,</span>

    <span class="token comment">// \u961F\u5217\u4E2D\u7684\u7B2C\u4E00\u4E2A\`Update\`</span>
    <span class="token literal-property property">firstUpdate</span><span class="token operator">:</span> Update<span class="token operator">&lt;</span>State<span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token comment">// \u961F\u5217\u4E2D\u7684\u6700\u540E\u4E00\u4E2A\`Update\`</span>
    <span class="token literal-property property">lastUpdate</span><span class="token operator">:</span> Update<span class="token operator">&lt;</span>State<span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>

    <span class="token comment">// \u7B2C\u4E00\u4E2A\u6355\u83B7\u7C7B\u578B\u7684\`Update\`</span>
    <span class="token literal-property property">firstCapturedUpdate</span><span class="token operator">:</span> Update<span class="token operator">&lt;</span>State<span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token comment">// \u6700\u540E\u4E00\u4E2A\u6355\u83B7\u7C7B\u578B\u7684\`Update\`</span>
    <span class="token literal-property property">lastCapturedUpdate</span><span class="token operator">:</span> Update<span class="token operator">&lt;</span>State<span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>

    <span class="token comment">// \u7B2C\u4E00\u4E2A\`side effect\`</span>
    <span class="token literal-property property">firstEffect</span><span class="token operator">:</span> Update<span class="token operator">&lt;</span>State<span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token comment">// \u6700\u540E\u4E00\u4E2A\`side effect\`</span>
    <span class="token literal-property property">lastEffect</span><span class="token operator">:</span> Update<span class="token operator">&lt;</span>State<span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>

    <span class="token comment">// \u7B2C\u4E00\u4E2A\u548C\u6700\u540E\u4E00\u4E2A\u6355\u83B7\u4EA7\u751F\u7684\`side effect\`</span>
    <span class="token literal-property property">firstCapturedEffect</span><span class="token operator">:</span> Update<span class="token operator">&lt;</span>State<span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">lastCapturedEffect</span><span class="token operator">:</span> Update<span class="token operator">&lt;</span>State<span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div>`,12);function p(t,o){return e}var c=s(a,[["render",p]]);export{c as default};
