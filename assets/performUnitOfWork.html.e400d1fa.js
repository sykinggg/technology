import{a as n}from"./app.6f963528.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h2 id="performunitofwork" tabindex="-1"><a class="header-anchor" href="#performunitofwork" aria-hidden="true">#</a> <strong>performUnitOfWork</strong></h2><p>\u8FD9\u4E2A\u65B9\u6CD5\u8FD8\u662F\u6BD4\u8F83\u597D\u7406\u89E3\u7684</p><p>\u9996\u5148\u6267\u884C<code>beginWork</code>\u8FDB\u884C\u8282\u70B9\u64CD\u4F5C\uFF0C\u4EE5\u53CA\u521B\u5EFA\u5B50\u8282\u70B9\uFF0C\u5B50\u8282\u70B9\u4F1A\u8FD4\u56DE\u6210\u4E3A<code>next</code>\uFF0C\u5982\u679C\u6709<code>next</code>\u5C31\u8FD4\u56DE\u3002\u8FD4\u56DE\u5230<code>workLoop</code>\u4E4B\u540E\uFF0C<code>workLoop</code>\u4F1A\u5224\u65AD\u662F\u5426\u8FC7\u671F\u4E4B\u7C7B\u7684\uFF0C\u5982\u679C\u90FDOK\u5C31\u4F1A\u518D\u6B21\u8C03\u7528\u8BE5\u65B9\u6CD5\u3002</p><p>\u5982\u679C<code>next</code>\u4E0D\u5B58\u5728\uFF0C\u8BF4\u660E\u5F53\u524D\u8282\u70B9\u5411\u4E0B\u904D\u5386\u5B50\u8282\u70B9\u5DF2\u7ECF\u5230\u5E95\u4E86\uFF0C\u8BF4\u660E\u8FD9\u4E2A\u5B50\u6811\u4FA7\u679D\u5DF2\u7ECF\u904D\u5386\u5B8C\uFF0C\u53EF\u4EE5\u5B8C\u6210\u8FD9\u90E8\u5206\u5DE5\u4F5C\u4E86\u3002\u5C31\u6267\u884C<code>completeUnitOfWork</code>\uFF0C<code>completeUnitOfWork</code>\u5C31\u662F\u5904\u7406\u4E00\u4E9B<code>effact tag</code>\uFF0C\u4ED6\u4F1A\u4E00\u76F4\u5F80\u4E0A\u8FD4\u56DE\u76F4\u5230<code>root</code>\u8282\u70B9\u6216\u8005\u5728\u67D0\u4E00\u4E2A\u8282\u70B9\u53D1\u73B0\u6709<code>sibling</code>\u5144\u5F1F\u8282\u70B9\u4E3A\u6B62\u3002\u5982\u679C\u5230\u4E86<code>root</code>\u90A3\u4E48\u4ED6\u7684\u8FD4\u56DE\u4E5F\u662F<code>null</code>\uFF0C\u4EE3\u8868\u6574\u68F5\u6811\u7684\u904D\u5386\u5DF2\u7ECF\u7ED3\u675F\u4E86\uFF0C\u53EF\u4EE5<code>commit</code>\u4E86\uFF0C\u5982\u679C\u9047\u5230\u5144\u5F1F\u8282\u70B9\u5C31\u8FD4\u56DE\u8BE5\u8282\u70B9\uFF0C\u56E0\u4E3A\u8FD9\u4E2A\u8282\u70B9\u53EF\u80FD\u4E5F\u4F1A\u5B58\u5728\u5B50\u8282\u70B9\uFF0C\u9700\u8981\u901A\u8FC7<code>beginWork</code>\u8FDB\u884C\u64CD\u4F5C\u3002</p><p><img src="https://i.postimg.cc/hPqjvNxr/work_Loop-v2.png" alt="\u8282\u70B9\u6D41\u7A0B\u56FE"></p><p>\u6E90\u7801</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">performUnitOfWork</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">workInProgress</span><span class="token operator">:</span> Fiber</span><span class="token punctuation">)</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
    <span class="token comment">// The current, flushed, state of this fiber is the alternate.</span>
    <span class="token comment">// Ideally nothing should rely on this, but relying on it here</span>
    <span class="token comment">// means that we don&#39;t need an additional field on the work in</span>
    <span class="token comment">// progress.</span>
    <span class="token comment">// \u5907\u7528\u72B6\u6001</span>
    <span class="token keyword">const</span> current <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>alternate<span class="token punctuation">;</span>

    <span class="token comment">// See if beginning this work spawns more work.</span>
    <span class="token comment">// \u67E5\u770B\u5F00\u59CB\u8FD9\u9879\u5DE5\u4F5C\u662F\u5426\u4EA7\u751F\u66F4\u591A\u7684\u5DE5\u4F5C\u3002</span>
    <span class="token function">startWorkTimer</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        ReactCurrentFiber<span class="token punctuation">.</span><span class="token function">setCurrentFiber</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__ <span class="token operator">&amp;&amp;</span> replayFailedUnitOfWorkWithInvokeGuardedCallback<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        stashedWorkInProgressProperties <span class="token operator">=</span> <span class="token function">assignFiberPropertiesInDEV</span><span class="token punctuation">(</span>
            stashedWorkInProgressProperties<span class="token punctuation">,</span>
            workInProgress<span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> next<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>enableProfilerTimer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>workInProgress<span class="token punctuation">.</span>mode <span class="token operator">&amp;</span> ProfileMode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">startProfilerTimer</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        next <span class="token operator">=</span> <span class="token function">beginWork</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> workInProgress<span class="token punctuation">,</span> nextRenderExpirationTime<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>workInProgress<span class="token punctuation">.</span>mode <span class="token operator">&amp;</span> ProfileMode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// Record the render duration assuming we didn&#39;t bailout (or error).</span>
            <span class="token comment">// \u5047\u8BBE\u6CA1\u6709\u7EBE\u56F0\uFF08\u6216\u9519\u8BEF\uFF09\uFF0C\u8BF7\u8BB0\u5F55\u6E32\u67D3\u65F6\u95F4\u3002</span>
            <span class="token function">stopProfilerTimerIfRunningAndRecordDelta</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        next <span class="token operator">=</span> <span class="token function">beginWork</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> workInProgress<span class="token punctuation">,</span> nextRenderExpirationTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        ReactCurrentFiber<span class="token punctuation">.</span><span class="token function">resetCurrentFiber</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>isReplayingFailedUnitOfWork<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// Currently replaying a failed unit of work. This should be unreachable,</span>
            <span class="token comment">// because the render phase is meant to be idempotent, and it should</span>
            <span class="token comment">// have thrown again. Since it didn&#39;t, rethrow the original error, so</span>
            <span class="token comment">// React&#39;s internal stack is not misaligned.</span>
            <span class="token comment">// \u5F53\u524D\u6B63\u5728\u91CD\u64AD\u5931\u8D25\u7684\u5DE5\u4F5C\u5355\u5143\u3002 \u8FD9\u5E94\u8BE5\u662F\u65E0\u6CD5\u8FBE\u5230\u7684\uFF0C\u56E0\u4E3A\u6E32\u67D3\u9636\u6BB5\u662F\u5E42\u7B49\u7684\uFF0C\u6240\u4EE5\u5B83\u5E94\u8BE5\u518D\u6B21\u629B\u51FA\u3002 \u65E2\u7136\u6CA1\u6709\uFF0C\u8BF7\u91CD\u65B0\u629B\u51FA\u539F\u59CB\u9519\u8BEF\uFF0C\u56E0\u6B64React\u7684\u5185\u90E8\u5806\u6808\u672A\u5BF9\u9F50\u3002</span>
            <span class="token function">rethrowOriginalError</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__ <span class="token operator">&amp;&amp;</span> ReactFiberInstrumentation<span class="token punctuation">.</span>debugTool<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        ReactFiberInstrumentation<span class="token punctuation">.</span>debugTool<span class="token punctuation">.</span><span class="token function">onBeginWork</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>next <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// If this doesn&#39;t spawn new work, complete the current work.</span>
        <span class="token comment">// \u5982\u679C\u8FD9\u6CA1\u6709\u4EA7\u751F\u65B0\u7684\u5DE5\u4F5C\uFF0C\u8BF7\u5B8C\u6210\u5F53\u524D\u5DE5\u4F5C\u3002</span>
        next <span class="token operator">=</span> <span class="token function">completeUnitOfWork</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    ReactCurrentOwner<span class="token punctuation">.</span>current <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> next<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br></div></div><p><strong>beginWork</strong></p><p>\u9996\u5148\u6709\u4E00\u4E2A\u5224\u65AD\uFF0C\u8FD9\u4E2A\u5224\u65AD\u662F\u63D0\u5347\u6027\u80FD\u975E\u5E38\u91CD\u8981\u7684\u4E00\u70B9\uFF0C\u5982\u679C\u7B26\u5408\u8FD9\u4E2A\u6761\u4EF6\u90A3\u4E48\u8BF4\u660E\u8FD9\u4E2A\u8282\u70B9\u4EE5\u53CA\u4ED6\u7684\u5B50\u8282\u70B9\u5F88\u53EF\u80FD\u5728\u8FD9\u6B21\u66F4\u65B0\u4E2D\u90FD\u4E0D\u9700\u8981\u518D\u88AB\u8BA1\u7B97\uFF0C\u5148\u6765\u770B\u4E00\u4E0B\u5185\u5BB9</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> updateExpirationTime <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>expirationTime
<span class="token keyword">if</span> <span class="token punctuation">(</span>
    <span class="token operator">!</span><span class="token function">hasLegacyContextChanged</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
    <span class="token punctuation">(</span>updateExpirationTime <span class="token operator">===</span> NoWork <span class="token operator">||</span>
        updateExpirationTime <span class="token operator">&gt;</span> renderExpirationTime<span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><code>hasLegacyContextChanged</code>\u8FD9\u4E2A\u5224\u65AD\u662F\u7528\u6765\u5224\u65AD<code>context</code>\u7684\uFF0C\u8FD9\u4E2A\u5224\u65AD\u4EE3\u8868\u7740\u5982\u679C\u5F53\u524D\u8282\u70B9\u548C\u4ED6\u7684\u7236\u8282\u70B9\u90FD\u6CA1\u6709\u8001\u7684<code>context api</code>\uFF0C\u4E5F\u5C31\u662F<code>childContextType</code>\u90A3\u5957\u7684\u8BDD\uFF0C\u4ED6\u5C31\u4E3A<code>true</code>\uFF0C\u4E0D\u7136\u4E0D\u7BA1\u4ED6\u7684\u7236\u7EA7\u7684<code>context</code>\u5185\u5BB9\u662F\u5426\u6709\u53D8\u5316\uFF0C\u4ED6\u90FD\u4E3A<code>false</code>\u3002\u6240\u4EE5\u8001\u7684<code>context api</code>\u5BF9\u6027\u80FD\u7684\u5F71\u54CD\u8FD8\u662F\u975E\u5E38\u5927\u7684</p><p>TODO: context api</p><p>\u7B2C\u4E8C\u4E2A\u5224\u65AD\u662F\u8D85\u65F6\u65F6\u95F4\u7684\u5224\u65AD\uFF0C\u5982\u679C\u5F53\u524D\u8282\u70B9\u7684<code>expirationTime</code>\u662F<code>NoWork</code>\u90A3\u4E48\u8BF4\u660E\u4ED6\u6CA1\u6709\u66F4\u65B0\uFF0C\u4E5F\u5C31\u4E0D\u9700\u8981\u6539\u52A8\u4E86\uFF0C\u5982\u679C<code>expirationTime</code>\u5927\u4E8E\u5F53\u524D\u6E32\u67D3\u7684\u8D85\u65F6\u65F6\u95F4\uFF0C\u8BF4\u660E\u4ED6\u7684\u66F4\u65B0\u5185\u5BB9\u4E0D\u662F\u8FD9\u6B21\u66F4\u65B0\u9020\u6210\u7684\uFF0C\u4E5F\u53EF\u4EE5\u5FFD\u7565\u3002</p><p>\u5982\u679C\u7B26\u5408\u6761\u4EF6\uFF0C\u6240\u6709\u7EC4\u4EF6\u90FD\u4F1A\u6267\u884C<code>bailoutOnAlreadyFinishedWork</code>\uFF0C\u4F46\u662F\u5BF9\u4E8E\u4E00\u4E9B\u53EF\u4EE5\u63D0\u4F9B<code>context</code>\u7684\u7EC4\u4EF6\uFF0C\u4ECD\u7136\u8981\u505A\u4E00\u4E9B<code>context</code>\u76F8\u5173\u7684\u64CD\u4F5C</p><p><code>bailoutOnAlreadyFinishedWork</code>\u5177\u4F53\u505A\u4E86\u4EC0\u4E48\u5462\uFF1F</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">bailoutOnAlreadyFinishedWork</span><span class="token punctuation">(</span>
    <span class="token parameter"><span class="token literal-property property">current</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">workInProgress</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span>
    <span class="token literal-property property">renderExpirationTime</span><span class="token operator">:</span> ExpirationTime<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
    <span class="token function">cancelWorkTimer</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>current <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        workInProgress<span class="token punctuation">.</span>firstContextDependency <span class="token operator">=</span> current<span class="token punctuation">.</span>firstContextDependency<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>enableProfilerTimer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">stopProfilerTimerIfRunning</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> childExpirationTime <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>childExpirationTime<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>
        childExpirationTime <span class="token operator">===</span> NoWork <span class="token operator">||</span>
        childExpirationTime <span class="token operator">&gt;</span> renderExpirationTime
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">cloneChildFibers</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> workInProgress<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> workInProgress<span class="token punctuation">.</span>child<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>\u6700\u4E3B\u8981\u7684\u662F\u770B\u6700\u540E\u9762\u7684\u5224\u65AD\uFF0C\u5982\u679C<code>childExpirationTime === NoWork || childExpirationTime &gt; renderExpirationTime</code>\u6210\u7ACB\uFF0C\u4E5F\u5C31\u662F\u4ED6\u7684\u5B50\u6811\u4E0A\u6CA1\u6709\u66F4\u65B0\uFF0C\u4ED6\u8FD4\u56DE\u7684\u662F<code>null</code>\uFF0C\u56DE\u60F3\u4E00\u4E0B<code>performUnitOfWork</code>\u7684\u903B\u8F91\uFF0C\u8FD9\u91CC<code>return null</code>\u4EE3\u8868\u7740<code>next</code>\u662F<code>null</code>\uFF0C\u5C31\u76F4\u63A5<code>completeUnitOfWork</code>\u4E86\uFF0C\u5C31\u4E0D\u89E3\u6790<code>child</code>\u4E86\u3002</p><p>\u5982\u679C\u4E0D\u6EE1\u8DB3\u5C31\u662F\u590D\u7528\u5F53\u524D<code>Fiber</code>\u5BF9\u8C61\uFF0C\u7136\u540E\u8FD4\u56DE\u4ED6\u7684\u5B50\u8282\u70B9\uFF0C\u56E0\u4E3A\u4ED6\u7684\u5B50\u8282\u70B9\u8FD8\u662F\u6709\u5DE5\u4F5C\u8981\u505A\u7684\u3002</p><p>\u7136\u540E\u5C31\u662F\u6839\u636E<code>element</code>\u7684\u4E0D\u540C\u7C7B\u578B\u6267\u884C\u4E0D\u540C\u7684<code>update</code>\u3002</p><p><strong>\u8FD9\u91CC\u8BF4\u4E00\u4E0B\uFF0C\u5982\u679C\u51FA\u73B0<code>switch(workInProgress.tag) case ClassComponentLazy</code>\u7684\u60C5\u51B5\uFF0C\u8BF4\u660E\u8FD9\u4E2A\u5F02\u6B65\u7EC4\u4EF6\u5DF2\u7ECF\u52A0\u8F7D\u5B8C\u6210\u4E86\uFF0C\u5728\u52A0\u8F7D\u5B8C\u6210\u524D\u5E94\u8BE5\u90FD\u662F<code>IndeterminateComponent</code>\uFF0C\u4F1A\u76F4\u63A5<code>throw</code>\uFF0C\u9020\u6210\u8DDF<code>Placeholder</code>\u7EC4\u4EF6\u4F7F\u7528\u65F6\u4E00\u6837\u7684\u60C5\u51B5</strong></p><ul><li>mountIndeterminateComponent</li><li>updateFunctionalComponent</li><li>updateClassComponent</li><li>updateHostRoot</li><li>updateHostComponent</li><li>updateHostText</li><li>updateTimeoutComponent</li><li>updatePortalComponent</li><li>updateForwardRef</li><li>updateFragment</li><li>updateMode</li><li>updateProfiler</li><li>updateContextProvider</li><li>updateContextConsumer</li></ul><p>\u6E90\u7801</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">beginWork</span><span class="token punctuation">(</span>
    <span class="token parameter"><span class="token literal-property property">current</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">workInProgress</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span>
    <span class="token literal-property property">renderExpirationTime</span><span class="token operator">:</span> ExpirationTime<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> updateExpirationTime <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>expirationTime<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>
        <span class="token operator">!</span><span class="token function">hasLegacyContextChanged</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
        <span class="token punctuation">(</span>updateExpirationTime <span class="token operator">===</span> NoWork <span class="token operator">||</span>
        updateExpirationTime <span class="token operator">&gt;</span> renderExpirationTime<span class="token punctuation">)</span>
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// This fiber does not have any pending work. Bailout without entering</span>
        <span class="token comment">// the begin phase. There&#39;s still some bookkeeping we that needs to be done</span>
        <span class="token comment">// in this optimized path, mostly pushing stuff onto the stack.</span>
        <span class="token comment">// \u4E3B\u8981\u662F\u5C06\u5185\u5BB9\u63A8\u5165\u5806\u6808\u3002</span>
        <span class="token keyword">switch</span> <span class="token punctuation">(</span>workInProgress<span class="token punctuation">.</span>tag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token literal-property property">HostRoot</span><span class="token operator">:</span>
            <span class="token function">pushHostRootContext</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">resetHydrationState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token literal-property property">HostComponent</span><span class="token operator">:</span>
            <span class="token function">pushHostContext</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token literal-property property">ClassComponent</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> Component <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>type<span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isLegacyContextProvider</span><span class="token punctuation">(</span>Component<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">pushLegacyContextProvider</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">case</span> <span class="token literal-property property">ClassComponentLazy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> thenable <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>type<span class="token punctuation">;</span>
            <span class="token keyword">const</span> Component <span class="token operator">=</span> <span class="token function">getResultFromResolvedThenable</span><span class="token punctuation">(</span>thenable<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isLegacyContextProvider</span><span class="token punctuation">(</span>Component<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">pushLegacyContextProvider</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">case</span> <span class="token literal-property property">HostPortal</span><span class="token operator">:</span>
            <span class="token function">pushHostContainer</span><span class="token punctuation">(</span>
                workInProgress<span class="token punctuation">,</span>
                workInProgress<span class="token punctuation">.</span>stateNode<span class="token punctuation">.</span>containerInfo<span class="token punctuation">,</span>
            <span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token literal-property property">ContextProvider</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> newValue <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>memoizedProps<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
            <span class="token function">pushProvider</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">,</span> newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">case</span> <span class="token literal-property property">Profiler</span><span class="token operator">:</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>enableProfilerTimer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                workInProgress<span class="token punctuation">.</span>effectTag <span class="token operator">|=</span> Update<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token function">bailoutOnAlreadyFinishedWork</span><span class="token punctuation">(</span>
            current<span class="token punctuation">,</span>
            workInProgress<span class="token punctuation">,</span>
            renderExpirationTime<span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Before entering the begin phase, clear the expiration time.</span>
    <span class="token comment">// \u5728\u8FDB\u5165\u5F00\u59CB\u9636\u6BB5\u4E4B\u524D\uFF0C\u8BF7\u6E05\u9664\u5230\u671F\u65F6\u95F4\u3002</span>
    workInProgress<span class="token punctuation">.</span>expirationTime <span class="token operator">=</span> NoWork<span class="token punctuation">;</span>

    <span class="token keyword">switch</span> <span class="token punctuation">(</span>workInProgress<span class="token punctuation">.</span>tag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token literal-property property">IndeterminateComponent</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> Component <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>type<span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token function">mountIndeterminateComponent</span><span class="token punctuation">(</span>
                current<span class="token punctuation">,</span>
                workInProgress<span class="token punctuation">,</span>
                Component<span class="token punctuation">,</span>
                renderExpirationTime<span class="token punctuation">,</span>
            <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">case</span> <span class="token literal-property property">FunctionalComponent</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> Component <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>type<span class="token punctuation">;</span>
            <span class="token keyword">const</span> unresolvedProps <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>pendingProps<span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token function">updateFunctionalComponent</span><span class="token punctuation">(</span>
                current<span class="token punctuation">,</span>
                workInProgress<span class="token punctuation">,</span>
                Component<span class="token punctuation">,</span>
                unresolvedProps<span class="token punctuation">,</span>
                renderExpirationTime<span class="token punctuation">,</span>
            <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">case</span> <span class="token literal-property property">FunctionalComponentLazy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> thenable <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>type<span class="token punctuation">;</span>
            <span class="token keyword">const</span> Component <span class="token operator">=</span> <span class="token function">getResultFromResolvedThenable</span><span class="token punctuation">(</span>thenable<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">const</span> unresolvedProps <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>pendingProps<span class="token punctuation">;</span>
            <span class="token keyword">const</span> child <span class="token operator">=</span> <span class="token function">updateFunctionalComponent</span><span class="token punctuation">(</span>
                current<span class="token punctuation">,</span>
                workInProgress<span class="token punctuation">,</span>
                Component<span class="token punctuation">,</span>
                <span class="token function">resolveDefaultProps</span><span class="token punctuation">(</span>Component<span class="token punctuation">,</span> unresolvedProps<span class="token punctuation">)</span><span class="token punctuation">,</span>
                renderExpirationTime<span class="token punctuation">,</span>
            <span class="token punctuation">)</span><span class="token punctuation">;</span>
            workInProgress<span class="token punctuation">.</span>memoizedProps <span class="token operator">=</span> unresolvedProps<span class="token punctuation">;</span>
            <span class="token keyword">return</span> child<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">case</span> <span class="token literal-property property">ClassComponent</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> Component <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>type<span class="token punctuation">;</span>
            <span class="token keyword">const</span> unresolvedProps <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>pendingProps<span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token function">updateClassComponent</span><span class="token punctuation">(</span>
                current<span class="token punctuation">,</span>
                workInProgress<span class="token punctuation">,</span>
                Component<span class="token punctuation">,</span>
                unresolvedProps<span class="token punctuation">,</span>
                renderExpirationTime<span class="token punctuation">,</span>
            <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">case</span> <span class="token literal-property property">ClassComponentLazy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> thenable <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>type<span class="token punctuation">;</span>
            <span class="token keyword">const</span> Component <span class="token operator">=</span> <span class="token function">getResultFromResolvedThenable</span><span class="token punctuation">(</span>thenable<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">const</span> unresolvedProps <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>pendingProps<span class="token punctuation">;</span>
            <span class="token keyword">const</span> child <span class="token operator">=</span> <span class="token function">updateClassComponent</span><span class="token punctuation">(</span>
                current<span class="token punctuation">,</span>
                workInProgress<span class="token punctuation">,</span>
                Component<span class="token punctuation">,</span>
                <span class="token function">resolveDefaultProps</span><span class="token punctuation">(</span>Component<span class="token punctuation">,</span> unresolvedProps<span class="token punctuation">)</span><span class="token punctuation">,</span>
                renderExpirationTime<span class="token punctuation">,</span>
            <span class="token punctuation">)</span><span class="token punctuation">;</span>
            workInProgress<span class="token punctuation">.</span>memoizedProps <span class="token operator">=</span> unresolvedProps<span class="token punctuation">;</span>
            <span class="token keyword">return</span> child<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">case</span> <span class="token literal-property property">HostRoot</span><span class="token operator">:</span>
        <span class="token keyword">return</span> <span class="token function">updateHostRoot</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> workInProgress<span class="token punctuation">,</span> renderExpirationTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token literal-property property">HostComponent</span><span class="token operator">:</span>
        <span class="token keyword">return</span> <span class="token function">updateHostComponent</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> workInProgress<span class="token punctuation">,</span> renderExpirationTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token literal-property property">HostText</span><span class="token operator">:</span>
        <span class="token keyword">return</span> <span class="token function">updateHostText</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> workInProgress<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token literal-property property">PlaceholderComponent</span><span class="token operator">:</span>
        <span class="token keyword">return</span> <span class="token function">updatePlaceholderComponent</span><span class="token punctuation">(</span>
            current<span class="token punctuation">,</span>
            workInProgress<span class="token punctuation">,</span>
            renderExpirationTime<span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token literal-property property">HostPortal</span><span class="token operator">:</span>
        <span class="token keyword">return</span> <span class="token function">updatePortalComponent</span><span class="token punctuation">(</span>
            current<span class="token punctuation">,</span>
            workInProgress<span class="token punctuation">,</span>
            renderExpirationTime<span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token literal-property property">ForwardRef</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> type <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>type<span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token function">updateForwardRef</span><span class="token punctuation">(</span>
                current<span class="token punctuation">,</span>
                workInProgress<span class="token punctuation">,</span>
                type<span class="token punctuation">,</span>
                workInProgress<span class="token punctuation">.</span>pendingProps<span class="token punctuation">,</span>
                renderExpirationTime<span class="token punctuation">,</span>
            <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">case</span> <span class="token literal-property property">ForwardRefLazy</span><span class="token operator">:</span>
        <span class="token keyword">const</span> thenable <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>type<span class="token punctuation">;</span>
        <span class="token keyword">const</span> Component <span class="token operator">=</span> <span class="token function">getResultFromResolvedThenable</span><span class="token punctuation">(</span>thenable<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> unresolvedProps <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>pendingProps<span class="token punctuation">;</span>
        <span class="token keyword">const</span> child <span class="token operator">=</span> <span class="token function">updateForwardRef</span><span class="token punctuation">(</span>
            current<span class="token punctuation">,</span>
            workInProgress<span class="token punctuation">,</span>
            Component<span class="token punctuation">,</span>
            <span class="token function">resolveDefaultProps</span><span class="token punctuation">(</span>Component<span class="token punctuation">,</span> unresolvedProps<span class="token punctuation">)</span><span class="token punctuation">,</span>
            renderExpirationTime<span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        workInProgress<span class="token punctuation">.</span>memoizedProps <span class="token operator">=</span> unresolvedProps<span class="token punctuation">;</span>
        <span class="token keyword">return</span> child<span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token literal-property property">Fragment</span><span class="token operator">:</span>
        <span class="token keyword">return</span> <span class="token function">updateFragment</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> workInProgress<span class="token punctuation">,</span> renderExpirationTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token literal-property property">Mode</span><span class="token operator">:</span>
        <span class="token keyword">return</span> <span class="token function">updateMode</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> workInProgress<span class="token punctuation">,</span> renderExpirationTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token literal-property property">Profiler</span><span class="token operator">:</span>
        <span class="token keyword">return</span> <span class="token function">updateProfiler</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> workInProgress<span class="token punctuation">,</span> renderExpirationTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token literal-property property">ContextProvider</span><span class="token operator">:</span>
        <span class="token keyword">return</span> <span class="token function">updateContextProvider</span><span class="token punctuation">(</span>
            current<span class="token punctuation">,</span>
            workInProgress<span class="token punctuation">,</span>
            renderExpirationTime<span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token literal-property property">ContextConsumer</span><span class="token operator">:</span>
        <span class="token keyword">return</span> <span class="token function">updateContextConsumer</span><span class="token punctuation">(</span>
            current<span class="token punctuation">,</span>
            workInProgress<span class="token punctuation">,</span>
            renderExpirationTime<span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">default</span><span class="token operator">:</span>
        <span class="token function">invariant</span><span class="token punctuation">(</span>
            <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token string">&#39;Unknown unit of work tag. This error is likely caused by a bug in &#39;</span> <span class="token operator">+</span>
            <span class="token string">&#39;React. Please file an issue.&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br></div></div><h2 id="completeunitofwork" tabindex="-1"><a class="header-anchor" href="#completeunitofwork" aria-hidden="true">#</a> <strong>completeUnitOfWork</strong></h2><p>\u53EF\u4EE5\u770B\u5230\u8FD9\u91CC\u5C31\u662F\u4E00\u4E2A\u975E\u5E38\u5927\u7684\u5FAA\u73AF\uFF0C\u58F0\u660E\u4E86\u4E24\u4E2A\u53D8\u91CF<code>returnFiber</code>\u662F\u7236\u4EB2\u8282\u70B9\uFF0C<code>siblingFiber</code>\u662F\u5144\u5F1F\u8282\u70B9</p><p>\u5FAA\u73AF\u5185\u90E8\u9996\u5148\u662F\u4E00\u4E2A<code>if</code>\u5224\u65AD\uFF0C\u8FD9\u4E2A\u5224\u65AD\u662F\u770B\u8FD9\u4E2A\u4EFB\u52A1\u662F\u5426\u662F<code>Incomplete</code>\uFF0C\u4E5F\u5C31\u662F\u6536\u5426\u6709\u9519\u8BEF\u53D1\u751F\u5E76\u88AB\u6355\u83B7\u3002</p><p><strong>\u5982\u679C\u6CA1\u6709\u9519\u8BEF</strong></p><p>\u5C31\u6267\u884C<code>nextUnitOfWork = completeWork</code></p><p>\u7136\u540E\u6267\u884C<code>resetChildExpirationTime</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">resetChildExpirationTime</span><span class="token punctuation">(</span>
    <span class="token parameter"><span class="token literal-property property">workInProgress</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span>
    <span class="token literal-property property">renderTime</span><span class="token operator">:</span> ExpirationTime<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>renderTime <span class="token operator">!==</span> Never <span class="token operator">&amp;&amp;</span> workInProgress<span class="token punctuation">.</span>childExpirationTime <span class="token operator">===</span> Never<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> newChildExpirationTime <span class="token operator">=</span> NoWork<span class="token punctuation">;</span>

    <span class="token comment">// if ProfileMode</span>

    <span class="token punctuation">{</span>
        <span class="token keyword">let</span> child <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>child<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>child <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> childUpdateExpirationTime <span class="token operator">=</span> child<span class="token punctuation">.</span>expirationTime<span class="token punctuation">;</span>
            <span class="token keyword">const</span> childChildExpirationTime <span class="token operator">=</span> child<span class="token punctuation">.</span>childExpirationTime<span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>
                newChildExpirationTime <span class="token operator">===</span> NoWork <span class="token operator">||</span>
                <span class="token punctuation">(</span>childUpdateExpirationTime <span class="token operator">!==</span> NoWork <span class="token operator">&amp;&amp;</span>
                childUpdateExpirationTime <span class="token operator">&lt;</span> newChildExpirationTime<span class="token punctuation">)</span>
            <span class="token punctuation">)</span> <span class="token punctuation">{</span>
                newChildExpirationTime <span class="token operator">=</span> childUpdateExpirationTime<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>
                newChildExpirationTime <span class="token operator">===</span> NoWork <span class="token operator">||</span>
                <span class="token punctuation">(</span>childChildExpirationTime <span class="token operator">!==</span> NoWork <span class="token operator">&amp;&amp;</span>
                childChildExpirationTime <span class="token operator">&lt;</span> newChildExpirationTime<span class="token punctuation">)</span>
            <span class="token punctuation">)</span> <span class="token punctuation">{</span>
                newChildExpirationTime <span class="token operator">=</span> childChildExpirationTime<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            child <span class="token operator">=</span> child<span class="token punctuation">.</span>sibling<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    workInProgress<span class="token punctuation">.</span>childExpirationTime <span class="token operator">=</span> newChildExpirationTime<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><p>\u8FD9\u4E2A\u65B9\u6CD5\u5C31\u662F\u627E\u5230\u5F53\u524D\u8282\u70B9\u7684\u6240\u6709\u5B50\u8282\u70B9\uFF0C\u5E76\u4E14\u8BFB\u53D6\u4ED6\u7684\u66F4\u65B0\u65F6\u95F4\u548C\u4ED6\u7684\u5B50\u8282\u70B9\u66F4\u65B0\u65F6\u95F4\uFF0C\u627E\u5230\u5176\u4E2D\u975E<code>NoWork</code>\u7684\u6700\u65E9\u8FC7\u671F\u65F6\u95F4\uFF0C\u7136\u540E\u8D4B\u503C\u7ED9\u5F53\u524D\u8282\u70B9\u7684<code>childExpirationTime</code></p><p>\u7136\u540E\u5982\u679C\u6CA1\u6709<code>next</code>\u5C31\u76F4\u63A5\u8FD4\u56DE\uFF0C\u5982\u679C\u6709\uFF0C\u5C31\u8981\u5411\u4E0A\u521B\u5EFA<code>effect</code>\u94FE</p><p>\u6700\u540E\u5982\u679C\u6709\u5144\u5F1F\u8282\u70B9\uFF0C\u5219\u8FD4\u56DE\u5144\u5F1F\u8282\u70B9\uFF0C\u5BF9\u5144\u5F1F\u8282\u70B9\u8FDB\u884C<code>beginWork</code>\uFF0C\u5982\u679C\u6CA1\u6709\u5219\u7EE7\u7EED\u64CD\u4F5C\u4E0A\u7EA7<code>fiber</code></p><p><strong>\u5982\u679C\u6709\u9519\u8BEF</strong></p><p>\u5219\u6267\u884C<code>unwindWork</code>\uFF0C\u540E\u7EED\u7684\u64CD\u4F5C\u8DDF\u6CA1\u6709\u9519\u8BEF\u7684\u60C5\u51B5\u5DEE\u4E0D\u591A</p><p>\u4F46\u662F\u591A\u4E86\u4E00\u6B65\uFF0C\u5C31\u662F\u4F1A\u5411\u4ED6\u7684\u7236\u8282\u70B9\u589E\u52A0<code>Incomplete</code>\u7684<code>side effect tag</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">completeUnitOfWork</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">workInProgress</span><span class="token operator">:</span> Fiber</span><span class="token punctuation">)</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> current <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>alternate<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            ReactCurrentFiber<span class="token punctuation">.</span><span class="token function">setCurrentFiber</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">const</span> returnFiber <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>return<span class="token punctuation">;</span>
        <span class="token keyword">const</span> siblingFiber <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>sibling<span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">.</span>effectTag <span class="token operator">&amp;</span> Incomplete<span class="token punctuation">)</span> <span class="token operator">===</span> NoEffect<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// This fiber completed.</span>
            <span class="token comment">// fiber \u5B8C\u6210</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>enableProfilerTimer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>workInProgress<span class="token punctuation">.</span>mode <span class="token operator">&amp;</span> ProfileMode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token function">startProfilerTimer</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>

                nextUnitOfWork <span class="token operator">=</span> <span class="token function">completeWork</span><span class="token punctuation">(</span>
                    current<span class="token punctuation">,</span>
                    workInProgress<span class="token punctuation">,</span>
                    nextRenderExpirationTime<span class="token punctuation">,</span>
                <span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token keyword">if</span> <span class="token punctuation">(</span>workInProgress<span class="token punctuation">.</span>mode <span class="token operator">&amp;</span> ProfileMode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token comment">// Update render duration assuming we didn&#39;t error.</span>
                    <span class="token comment">// \u5047\u8BBE\u6CA1\u6709\u9519\u8BEF\uFF0C\u8BF7\u66F4\u65B0\u6E32\u67D3\u65F6\u95F4\u3002</span>
                    <span class="token function">stopProfilerTimerIfRunningAndRecordDelta</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                nextUnitOfWork <span class="token operator">=</span> <span class="token function">completeWork</span><span class="token punctuation">(</span>
                    current<span class="token punctuation">,</span>
                    workInProgress<span class="token punctuation">,</span>
                    nextRenderExpirationTime<span class="token punctuation">,</span>
                <span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">let</span> next <span class="token operator">=</span> nextUnitOfWork<span class="token punctuation">;</span>
            <span class="token function">stopWorkTimer</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">resetChildExpirationTime</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">,</span> nextRenderExpirationTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                ReactCurrentFiber<span class="token punctuation">.</span><span class="token function">resetCurrentFiber</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span>next <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">stopWorkTimer</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__ <span class="token operator">&amp;&amp;</span> ReactFiberInstrumentation<span class="token punctuation">.</span>debugTool<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    ReactFiberInstrumentation<span class="token punctuation">.</span>debugTool<span class="token punctuation">.</span><span class="token function">onCompleteWork</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token comment">// If completing this work spawned new work, do that next. We&#39;ll come</span>
                <span class="token comment">// back here again.</span>
                <span class="token comment">// \u5982\u679C\u5B8C\u6210\u8FD9\u9879\u5DE5\u4F5C\u540E\u53C8\u4EA7\u751F\u4E86\u65B0\u5DE5\u4F5C\uFF0C\u8BF7\u7EE7\u7EED\u6267\u884C\u4E0B\u4E00\u6B65\u3002 \u4F1A\u518D\u6B21\u56DE\u5230\u8FD9\u91CC\u3002</span>
                <span class="token keyword">return</span> next<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span>
                returnFiber <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span>
                <span class="token comment">// Do not append effects to parents if a sibling failed to complete</span>
                <span class="token comment">// \u5982\u679C\u540C\u80DE\u672A\u80FD\u5B8C\u6210\uFF0C\u4E0D\u8981\u7ED9\u7236\u6BCD\u9644\u52A0\u6548\u679C</span>
                <span class="token punctuation">(</span>returnFiber<span class="token punctuation">.</span>effectTag <span class="token operator">&amp;</span> Incomplete<span class="token punctuation">)</span> <span class="token operator">===</span> NoEffect
            <span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>returnFiber<span class="token punctuation">.</span>firstEffect <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    returnFiber<span class="token punctuation">.</span>firstEffect <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>firstEffect<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>workInProgress<span class="token punctuation">.</span>lastEffect <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>returnFiber<span class="token punctuation">.</span>lastEffect <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        returnFiber<span class="token punctuation">.</span>lastEffect<span class="token punctuation">.</span>nextEffect <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>firstEffect<span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                    returnFiber<span class="token punctuation">.</span>lastEffect <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>lastEffect<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>

                <span class="token keyword">const</span> effectTag <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>effectTag<span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>effectTag <span class="token operator">&gt;</span> PerformedWork<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>returnFiber<span class="token punctuation">.</span>lastEffect <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        returnFiber<span class="token punctuation">.</span>lastEffect<span class="token punctuation">.</span>nextEffect <span class="token operator">=</span> workInProgress<span class="token punctuation">;</span>
                    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                        returnFiber<span class="token punctuation">.</span>firstEffect <span class="token operator">=</span> workInProgress<span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                    returnFiber<span class="token punctuation">.</span>lastEffect <span class="token operator">=</span> workInProgress<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__ <span class="token operator">&amp;&amp;</span> ReactFiberInstrumentation<span class="token punctuation">.</span>debugTool<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                ReactFiberInstrumentation<span class="token punctuation">.</span>debugTool<span class="token punctuation">.</span><span class="token function">onCompleteWork</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span>siblingFiber <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// If there is more work to do in this returnFiber, do that next.</span>
                <span class="token comment">// \u5982\u679C\u5728\u8BE5returnFiber\u4E2D\u8FD8\u6709\u66F4\u591A\u5DE5\u4F5C\u8981\u505A\uFF0C\u8BF7\u63A5\u4E0B\u6765\u6267\u884C\u3002</span>
                <span class="token keyword">return</span> siblingFiber<span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>returnFiber <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// If there&#39;s no more work in this returnFiber. Complete the returnFiber.</span>
                <span class="token comment">// \u5982\u679C\u6B64returnFiber\u4E2D\u6CA1\u6709\u66F4\u591A\u5DE5\u4F5C\u4E86\u3002 \u5B8C\u6210returnFiber\u3002</span>
                workInProgress <span class="token operator">=</span> returnFiber<span class="token punctuation">;</span>
                <span class="token keyword">continue</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token comment">// We&#39;ve reached the root.</span>
                <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>workInProgress<span class="token punctuation">.</span>mode <span class="token operator">&amp;</span> ProfileMode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// Record the render duration for the fiber that errored.</span>
            <span class="token comment">// \u8BB0\u5F55\u51FA\u73B0\u9519\u8BEF\u7684fiber\u7684\u6E32\u67D3\u65F6\u95F4\u3002</span>
            <span class="token function">stopProfilerTimerIfRunningAndRecordDelta</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">const</span> next <span class="token operator">=</span> <span class="token function">unwindWork</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">,</span> nextRenderExpirationTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// Because this fiber did not complete, don&#39;t reset its expiration time.</span>
        <span class="token comment">// \u7531\u4E8E\u8BE5fiber\u672A\u5B8C\u6210\uFF0C\u56E0\u6B64\u8BF7\u52FF\u91CD\u8BBE\u5176\u5230\u671F\u65F6\u95F4\u3002</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>workInProgress<span class="token punctuation">.</span>effectTag <span class="token operator">&amp;</span> DidCapture<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// Restarting an error boundary</span>
            <span class="token comment">// \u91CD\u65B0\u542F\u52A8\u9519\u8BEF\u8FB9\u754C</span>
            <span class="token function">stopFailedWorkTimer</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token function">stopWorkTimer</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            ReactCurrentFiber<span class="token punctuation">.</span><span class="token function">resetCurrentFiber</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>next <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">stopWorkTimer</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__ <span class="token operator">&amp;&amp;</span> ReactFiberInstrumentation<span class="token punctuation">.</span>debugTool<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                ReactFiberInstrumentation<span class="token punctuation">.</span>debugTool<span class="token punctuation">.</span><span class="token function">onCompleteWork</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span>enableProfilerTimer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// Include the time spent working on failed children before continuing.</span>
            <span class="token comment">// \u5305\u62EC\u5728\u7EE7\u7EED\u5DE5\u4F5C\u4E4B\u524D\u4E3A\u5931\u8D25\u7684\u5B50\u7EC4\u4EF6\u8FD0\u884C\u7684\u65F6\u95F4\u3002</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>next<span class="token punctuation">.</span>mode <span class="token operator">&amp;</span> ProfileMode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">let</span> actualDuration <span class="token operator">=</span> next<span class="token punctuation">.</span>actualDuration<span class="token punctuation">;</span>
                <span class="token keyword">let</span> child <span class="token operator">=</span> next<span class="token punctuation">.</span>child<span class="token punctuation">;</span>
                <span class="token keyword">while</span> <span class="token punctuation">(</span>child <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    actualDuration <span class="token operator">+=</span> child<span class="token punctuation">.</span>actualDuration<span class="token punctuation">;</span>
                    child <span class="token operator">=</span> child<span class="token punctuation">.</span>sibling<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                next<span class="token punctuation">.</span>actualDuration <span class="token operator">=</span> actualDuration<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>

            next<span class="token punctuation">.</span>effectTag <span class="token operator">&amp;=</span> HostEffectMask<span class="token punctuation">;</span>
            <span class="token keyword">return</span> next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>returnFiber <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// Mark the parent fiber as incomplete and clear its effect list.</span>
            <span class="token comment">// \u5C06\u7236fiber\u6807\u8BB0\u4E3A\u4E0D\u5B8C\u6574\uFF0C\u5E76\u6E05\u9664\u5176\u6548\u679C\u5217\u8868\u3002</span>
            returnFiber<span class="token punctuation">.</span>firstEffect <span class="token operator">=</span> returnFiber<span class="token punctuation">.</span>lastEffect <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
            returnFiber<span class="token punctuation">.</span>effectTag <span class="token operator">|=</span> Incomplete<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__ <span class="token operator">&amp;&amp;</span> ReactFiberInstrumentation<span class="token punctuation">.</span>debugTool<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            ReactFiberInstrumentation<span class="token punctuation">.</span>debugTool<span class="token punctuation">.</span><span class="token function">onCompleteWork</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>siblingFiber <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// If there is more work to do in this returnFiber, do that next.</span>
            <span class="token comment">// \u5982\u679C\u5728\u8BE5returnFiber\u4E2D\u8FD8\u6709\u66F4\u591A\u5DE5\u4F5C\u8981\u505A\uFF0C\u8BF7\u63A5\u4E0B\u6765\u6267\u884C\u3002</span>
            <span class="token keyword">return</span> siblingFiber<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>returnFiber <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// If there&#39;s no more work in this returnFiber. Complete the returnFiber.</span>
            <span class="token comment">// \u5982\u679C\u6B64returnFiber\u4E2D\u6CA1\u6709\u66F4\u591A\u5DE5\u4F5C\u4E86\u3002 \u5B8C\u6210returnFiber\u3002</span>
            workInProgress <span class="token operator">=</span> returnFiber<span class="token punctuation">;</span>
            <span class="token keyword">continue</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br></div></div>`,37);function e(t,o){return p}var l=s(a,[["render",e]]);export{l as default};
