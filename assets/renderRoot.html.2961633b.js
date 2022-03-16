import{a as n}from"./app.b05da4ec.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h2 id="renderroot" tabindex="-1"><a class="header-anchor" href="#renderroot" aria-hidden="true">#</a> <strong>renderRoot</strong></h2><p>\u8FD9\u5927\u6982\u662F React \u6E90\u7801\u4E2D\u770B\u5230\u8FC7\u6700\u957F\u7684\u65B9\u6CD5\u4EE3\u7801\u4E86\u3002\u3002\u3002\u8FD9\u91CC\u5C55\u793A\u7684\u628A\u4E00\u4E9B\u4E0D\u662F\u7279\u522B\u91CD\u8981\u7684\u6BD4\u5982\u63D0\u9192\u4EE3\u7801\u6216\u8005\u5F00\u53D1\u5DE5\u5177\u4EE3\u7801\u5220\u4E86\u4E00\u90E8\u5206\uFF0C\u8FD8\u6709\u6CE8\u91CA\u4E5F\u5220\u4E86\u633A\u591A\u3002</p><p>\u9996\u5148\u662F\u4E00\u4E2A\u5224\u65AD\u662F\u5426\u9700\u8981\u521D\u59CB\u5316\u53D8\u91CF\u7684\u5224\u65AD</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>
    expirationTime <span class="token operator">!==</span> nextRenderExpirationTime <span class="token operator">||</span>
    root <span class="token operator">!==</span> nextRoot <span class="token operator">||</span>
    nextUnitOfWork <span class="token operator">===</span> <span class="token keyword">null</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Reset the stack and start working from the root.</span>
    <span class="token comment">// \u91CD\u7F6E\u5806\u6808\u5E76\u4ECE\u6839\u76EE\u5F55\u5F00\u59CB\u5DE5\u4F5C\u3002</span>
    <span class="token function">resetStack</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    nextRoot <span class="token operator">=</span> root
    nextRenderExpirationTime <span class="token operator">=</span> expirationTime
    nextUnitOfWork <span class="token operator">=</span> <span class="token function">createWorkInProgress</span><span class="token punctuation">(</span>
        nextRoot<span class="token punctuation">.</span>current<span class="token punctuation">,</span>
        <span class="token keyword">null</span><span class="token punctuation">,</span>
        nextRenderExpirationTime<span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
    root<span class="token punctuation">.</span>pendingCommitExpirationTime <span class="token operator">=</span> NoWork
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>\u90A3\u4E48\u8FD9\u4E2A\u5224\u65AD\u662F\u4EC0\u4E48\u610F\u601D\u5462\uFF1F\u4ED6\u5224\u65AD\u7684\u60C5\u51B5\u662F\u662F\u5426\u6709\u65B0\u7684\u66F4\u65B0\u8FDB\u6765\u4E86\u3002\u5047\u8BBE\u8FD9\u79CD\u60C5\u51B5\uFF1A\u4E0A\u4E00\u4E2A\u4EFB\u52A1\u56E0\u4E3A\u65F6\u95F4\u7247\u7528\u5B8C\u4E86\u800C\u4E2D\u65AD\u4E86\uFF0C\u8FD9\u4E2A\u65F6\u5019<code>nextUnitOfWork</code>\u662F\u6709\u5DE5\u4F5C\u7684\uFF0C\u8FD9\u65F6\u5019\u5982\u679C\u4E0B\u4E00\u4E2A<code>requestIdleCallback</code>\u8FDB\u6765\u4E86\uFF0C\u4E2D\u9014\u6CA1\u6709\u65B0\u7684\u4EFB\u52A1\u8FDB\u6765\uFF0C\u90A3\u4E48\u8FD9\u4E9B\u5168\u5C40\u53D8\u91CF\u90FD\u6CA1\u6709\u53D8\u8FC7\uFF0C<code>root</code>\u7684<code>nextExpirationTimeToWorkOn</code>\u80AF\u5B9A\u4E5F\u6CA1\u6709\u53D8\u5316\uFF0C\u90A3\u4E48\u4EE3\u8868\u662F\u7EE7\u7EED\u4E0A\u4E00\u6B21\u7684\u4EFB\u52A1\u3002\u800C\u5982\u679C\u6709\u65B0\u7684\u66F4\u65B0\u8FDB\u6765\uFF0C\u5219\u52BF\u5FC5<code>nextExpirationTimeToWorkOn</code>\u6216\u8005<code>root</code>\u4F1A\u53D8\u5316\uFF0C\u90A3\u4E48\u80AF\u5B9A\u9700\u8981\u91CD\u7F6E\u53D8\u91CF</p><p><code>resetStack</code>\u5982\u679C\u662F\u88AB\u4E2D\u65AD\u7684\u60C5\u51B5\uFF0C\u4F1A\u63A8\u51FA<code>context</code>\u6808\uFF0C\u5173\u4E8E<code>context</code>\u53EF\u4EE5</p><p>TODO: \u589E\u52A0<code>context.md</code>\u7684\u94FE\u63A5</p><p>\u7136\u540E\u5C31\u8FDB\u5165\u6574\u4F53\uFF0C\u8C03\u7528<code>workLoop</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">workLoop</span><span class="token punctuation">(</span><span class="token parameter">isYieldy</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isYieldy<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Flush work without yielding</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>nextUnitOfWork <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            nextUnitOfWork <span class="token operator">=</span> <span class="token function">performUnitOfWork</span><span class="token punctuation">(</span>nextUnitOfWork<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// Flush asynchronous work until the deadline runs out of time.</span>
        <span class="token comment">// \u5237\u65B0\u5F02\u6B65\u5DE5\u4F5C\uFF0C\u76F4\u5230\u622A\u6B62\u671F\u9650\u7528\u5B8C\u4E3A\u6B62\u3002</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>nextUnitOfWork <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token function">shouldYield</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            nextUnitOfWork <span class="token operator">=</span> <span class="token function">performUnitOfWork</span><span class="token punctuation">(</span>nextUnitOfWork<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p><code>workLoop</code>\u903B\u8F91\u5F88\u7B80\u5355\u7684\uFF0C\u53EA\u662F\u5224\u65AD\u662F\u5426\u9700\u8981\u7EE7\u7EED\u8C03\u7528<code>performUnitOfWork</code>\uFF0C\u90A3\u4E48<code>performUnitOfWorkoop</code>\u653E\u5230\u4E0B\u4E00\u8282\u518D\u8BB2\uFF0C\u5148\u770B\u5982\u679C<code>catch</code>\u5230\u9519\u8BEF\u4F1A\u600E\u4E48\u6837\u3002</p><h2 id="if-catch-error" tabindex="-1"><a class="header-anchor" href="#if-catch-error" aria-hidden="true">#</a> <strong>if catch error</strong></h2><p>\u9996\u5148\u5224\u65AD\u662F\u5426\u6709<code>nextUnitOfWork</code>\uFF0C\u5982\u679C\u662F\u9884\u671F\u9519\u8BEF\u90A3\u4E48\u8FD9\u4E2A\u503C\u662F\u5B58\u5728\u7684\uFF0C\u5982\u679C\u4E0D\u5B58\u5728\u4EE3\u8868\u662F <code>React</code> \u65E0\u6CD5\u9884\u671F\u7684\u9519\u8BEF</p><p>\u5982\u679C\u5B58\u5728\uFF0C\u5728\u5F00\u53D1\u65F6\u4F1A\u8C03\u7528<code>replayUnitOfWork</code>\u91CD\u653E\u4E00\u4E0B\u3002\u7136\u540E\u770B\u4E00\u4E0B<code>nextUnitOfWork.return</code>\u662F\u5426\u5B58\u5728\uFF0C\u5982\u679C\u4E0D\u5B58\u5728\u4E5F\u662F\u65E0\u6CD5\u9884\u671F\u7684\u9519\u8BEF\u3002\u7136\u540E\u6267\u884C<code>throwException</code>\uFF0C\u8FD9\u4E2A\u65B9\u6CD5\u975E\u5E38\u91CD\u8981</p><p>\u5728<code>throwException</code>\u4E4B\u540E\u4F1A\u76F4\u63A5\u8C03\u7528<code>completeWork</code>\u5F53\u524D\u7684<code>nextUnitOfWork</code>\uFF0C\u56E0\u4E3A\u4ED6\u5DF2\u7ECF\u62A5\u9519\u4E86\uFF0C\u6240\u4EE5\u6CA1\u5FC5\u8981\u518D\u6E32\u67D3\u4ED6\u7684\u5B50\u8282\u70B9\u4E86\u3002</p><h2 id="\u6536\u5C3E" tabindex="-1"><a class="header-anchor" href="#\u6536\u5C3E" aria-hidden="true">#</a> <strong>\u6536\u5C3E</strong></h2><p>\u5728<code>workLoop</code>\u6267\u884C\u5B8C\u4E4B\u540E\uFF0C\u5C31\u8FDB\u5165\u6536\u5C3E\u9636\u6BB5\u4E86\u3002</p><p>\u9996\u5148\u5982\u679C<code>didFatal</code>\u4E3A<code>true</code>\uFF0C\u4EE3\u8868\u6709\u4E00\u4E2A\u65E0\u6CD5\u5904\u7406\u7684\u9519\u8BEF\uFF0C\u76F4\u63A5\u8C03\u7528<code>onFatal</code>\uFF0C\u4E0D<code>commit</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">onFatal</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    root<span class="token punctuation">.</span>finishedWork <span class="token operator">=</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5982\u679C<code>nextUnitOfWork !== null</code>\uFF0C\u4EE3\u8868\u4EFB\u52A1\u6CA1\u6709\u6267\u884C\u5B8C\uFF0C\u662F<code>yield</code>\u4E86\uFF0C\u6267\u884C<code>onYield</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">onYield</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    root<span class="token punctuation">.</span>finishedWork <span class="token operator">=</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5982\u679C\u4EE5\u4E0A\u90FD\u6CA1\u6709\uFF0C\u8BF4\u660E\u5DF2\u7ECF<code>complete</code>\u6574\u68F5\u6811\u4E86\uFF0C\u5982\u679C<code>nextRenderDidError</code>\u4EE3\u8868\u6709\u6355\u83B7\u5230\u53EF\u5904\u7406\u7684\u9519\u8BEF</p><p>\u8FD9\u65F6\u5019\u5148\u5224\u65AD\u662F\u5426\u6709\u4F18\u5148\u7EA7\u66F4\u4F4E\u7684\u4EFB\u52A1\uFF0C\u6709\u7684\u8BDD\u628A\u5F53\u524D\u7684\u6E32\u67D3\u65F6\u95F4\u8BBE\u7F6E\u8FDB<code>suspendTime</code>\uFF0C\u540C\u65F6\u8C03\u7528<code>onSuspend</code></p><p>\u5982\u679C\u4E0D\u7B26\u5408\u518D\u5224\u65AD\u662F\u5426\u5E27\u65F6\u95F4\u8D85\u65F6\uFF0C\u5982\u679C\u6CA1\u6709\u8D85\u65F6\u5E76\u4E14\u6CA1\u6709<code>root.didError</code>\uFF0C\u5E76\u4E14\u628A<code>root.expirationTime</code>\u8BBE\u7F6E\u4E3A<code>Sync</code>\uFF0C\u7136\u540E\u8C03\u7528<code>onSuspend</code>\u3002</p><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u4ED6\u4EEC\u8C03\u7528<code>onSuspend</code>\u6700\u540E\u4E00\u4E2A\u53C2\u6570\u4F20\u9012\u7684\u90FD\u662F<code>-1</code>\uFF0C\u770B<code>onSuspend</code>\u7684\u903B\u8F91\u53EF\u4EE5\u53D1\u73B0\u5176\u5B9E\u4EC0\u4E48\u90FD\u4E0D\u505A\u3002\u4EC0\u4E48\u90FD\u4E0D\u505A\u4EE3\u8868\u7740\uFF0C\u4ED6\u4EEC\u4E0D\u4F1A\u8BBE\u7F6E<code>root.finishedWork</code>\uFF0C\u90A3\u4E48\u8FD4\u56DE\u5230\u4E0A\u4E00\u5C42\u7684<code>performWorkOnRoot</code>\u7684\u65F6\u5019</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>finishedWork <span class="token operator">=</span> root<span class="token punctuation">.</span>finishedWork
<span class="token keyword">if</span> <span class="token punctuation">(</span>finishedWork <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">shouldYield</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Still time left. Commit the root.</span>
        <span class="token comment">// \u8FD8\u6709\u65F6\u95F4\u3002 \u63D0\u4EA4\u6839\u3002</span>
        <span class="token function">completeRoot</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> finishedWork<span class="token punctuation">,</span> expirationTime<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        root<span class="token punctuation">.</span>finishedWork <span class="token operator">=</span> finishedWork
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u5E76\u4E0D\u4F1A\u6267\u884C<code>completeRoot</code>\u4E5F\u5C31\u4E0D\u4F1A<code>commit</code>\uFF0C\u4F1A\u518D\u8FD4\u56DE\u5230<code>performWork</code>\u627E\u4E0B\u4E00\u4E2A<code>root</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">onSuspend</span><span class="token punctuation">(</span>
    <span class="token parameter"><span class="token literal-property property">root</span><span class="token operator">:</span> FiberRoot<span class="token punctuation">,</span>
    <span class="token literal-property property">finishedWork</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span>
    <span class="token literal-property property">suspendedExpirationTime</span><span class="token operator">:</span> ExpirationTime<span class="token punctuation">,</span>
    <span class="token literal-property property">rootExpirationTime</span><span class="token operator">:</span> ExpirationTime<span class="token punctuation">,</span>
    <span class="token literal-property property">msUntilTimeout</span><span class="token operator">:</span> number<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    root<span class="token punctuation">.</span>expirationTime <span class="token operator">=</span> rootExpirationTime
    <span class="token keyword">if</span> <span class="token punctuation">(</span>enableSuspense <span class="token operator">&amp;&amp;</span> msUntilTimeout <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token function">shouldYield</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Don&#39;t wait an additional tick. Commit the tree immediately.</span>
        <span class="token comment">// \u4E0D\u8981\u518D\u7B49\u4E86\u3002 \u7ACB\u5373\u63D0\u4EA4\u6811\u3002</span>
        root<span class="token punctuation">.</span>pendingCommitExpirationTime <span class="token operator">=</span> suspendedExpirationTime
        root<span class="token punctuation">.</span>finishedWork <span class="token operator">=</span> finishedWork
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>msUntilTimeout <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Wait \`msUntilTimeout\` milliseconds before committing.</span>
        <span class="token comment">// \u5728\u63D0\u4EA4\u4E4B\u524D\u7B49\u5F85\`msUntilTimeout\`\u6BEB\u79D2\u3002</span>
        root<span class="token punctuation">.</span>timeoutHandle <span class="token operator">=</span> <span class="token function">scheduleTimeout</span><span class="token punctuation">(</span>
            <span class="token function">onTimeout</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> root<span class="token punctuation">,</span> finishedWork<span class="token punctuation">,</span> suspendedExpirationTime<span class="token punctuation">)</span><span class="token punctuation">,</span>
            msUntilTimeout<span class="token punctuation">,</span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">onTimeout</span><span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> finishedWork<span class="token punctuation">,</span> suspendedExpirationTime</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>enableSuspense<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// The root timed out. Commit it.</span>
        <span class="token comment">// \u6839\u65F6\u95F4\u8FC7\u671F\u540E\u63D0\u4EA4\u4ED6</span>
        root<span class="token punctuation">.</span>pendingCommitExpirationTime <span class="token operator">=</span> suspendedExpirationTime
        root<span class="token punctuation">.</span>finishedWork <span class="token operator">=</span> finishedWork
        <span class="token comment">// Read the current time before entering the commit phase. We can be</span>
        <span class="token comment">// certain this won&#39;t cause tearing related to batching of event updates</span>
        <span class="token comment">// because we&#39;re at the top of a timer event.</span>
        <span class="token comment">// \u5728\u8FDB\u5165\u63D0\u4EA4\u9636\u6BB5\u4E4B\u524D\uFF0C\u8BF7\u5148\u9605\u8BFB\u5F53\u524D\u65F6\u95F4\u3002 \u53EF\u4EE5\u786E\u5B9A\u8FD9\u4E0D\u4F1A\u5BFC\u81F4\u4E0E\u4E8B\u4EF6\u66F4\u65B0\u6279\u5904\u7406\u6709\u5173\u7684\u6495\u88C2\uFF0C\u56E0\u4E3A\u5904\u4E8E\u8BA1\u65F6\u5668\u4E8B\u4EF6\u7684\u9876\u90E8\u3002</span>
        <span class="token function">recomputeCurrentRendererTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        currentSchedulerTime <span class="token operator">=</span> currentRendererTime

        <span class="token keyword">if</span> <span class="token punctuation">(</span>enableSchedulerTracing<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// Don&#39;t update pending interaction counts for suspense timeouts,</span>
            <span class="token comment">// Because we know we still need to do more work in this case.</span>
            <span class="token comment">// \u4E0D\u8981\u4E3A\u6682\u6302\u8D85\u65F6\u66F4\u65B0\u672A\u51B3\u7684\u4EA4\u4E92\u8BA1\u6570\uFF0C\u56E0\u4E3A\u77E5\u9053\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\u4ECD\u7136\u9700\u8981\u505A\u66F4\u591A\u7684\u5DE5\u4F5C\u3002</span>
            suspenseDidTimeout <span class="token operator">=</span> <span class="token boolean">true</span>
            <span class="token function">flushRoot</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> suspendedExpirationTime<span class="token punctuation">)</span>
            suspenseDidTimeout <span class="token operator">=</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token function">flushRoot</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> suspendedExpirationTime<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div><p>\u5176\u4E2D<code>scheduleTimeout</code>\u662F\u4E0D\u540C\u5E73\u53F0\u7684<code>setTimout</code></p><h2 id="\u771F\u6B63\u7684-sequense" tabindex="-1"><a class="header-anchor" href="#\u771F\u6B63\u7684-sequense" aria-hidden="true">#</a> <strong>\u771F\u6B63\u7684 sequense</strong></h2><p>\u6700\u540E\u4E00\u4E2A\u5224\u65AD\u5C31\u662F\u771F\u6B63\u7684\u6302\u8D77\u4EFB\u52A1\u4E86\uFF0C\u4E5F\u5C31\u662F<code>suquense</code>\u7684\u60C5\u51B5\uFF0C\u5176\u5B9E\u505A\u7684\u4E8B\u60C5\u8DDF\u4E0A\u9762\u4E24\u4E2A\u5DEE\u4E0D\u591A\uFF0C\u552F\u4E00\u7684\u533A\u522B\u662F\u8C03\u7528<code>onSuspend</code>\u7684\u65F6\u5019\u6700\u540E\u4E00\u4E2A\u53C2\u6570\u80AF\u5B9A\u662F\u5927\u4E8E\u7B49\u4E8E\u96F6\u7684\u3002\u4EE3\u8868\u7740\u4ED6\u662F\u7ACB\u523B\u5C31\u8981<code>commit</code>\u8FD8\u662F\u5728\u4E00\u4E2A<code>timeout</code>\u4E4B\u540E\u518D<code>commit</code>\u3002\u56E0\u4E3A\u53EF\u4EE5\u770B\u5230<code>onTimeout</code>\u6700\u540E\u662F<code>flushRoot</code>\uFF0C\u5C31\u662F\u4EE5<code>Sync</code>\u7684\u65B9\u5F0F\u8C03\u7528<code>performWork</code></p><h2 id="\u6700\u540E" tabindex="-1"><a class="header-anchor" href="#\u6700\u540E" aria-hidden="true">#</a> <strong>\u6700\u540E</strong></h2><p>\u5982\u679C\u4EE5\u4E0A\u903B\u8F91\u90FD\u6CA1\u6709\uFF0C\u90A3\u4E48\u76F4\u63A5\u8C03\u7528<code>onComplete</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">onComplete</span><span class="token punctuation">(</span>
    <span class="token parameter"><span class="token literal-property property">root</span><span class="token operator">:</span> FiberRoot<span class="token punctuation">,</span>
    <span class="token literal-property property">finishedWork</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span>
    <span class="token literal-property property">expirationTime</span><span class="token operator">:</span> ExpirationTime<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    root<span class="token punctuation">.</span>pendingCommitExpirationTime <span class="token operator">=</span> expirationTime
    root<span class="token punctuation">.</span>finishedWork <span class="token operator">=</span> finishedWork
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><strong>\u6E90\u7801</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">renderRoot</span><span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> isYieldy<span class="token punctuation">,</span> isExpired</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token operator">!</span><span class="token operator">!</span>isWorking
        <span class="token operator">?</span> <span class="token function">invariant</span><span class="token punctuation">(</span>
            <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token string">&#39;renderRoot was called recursively. This error is likely caused by a bug in React. Please file an issue.&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span>
        <span class="token operator">:</span> <span class="token keyword">void</span> <span class="token number">0</span>
    isWorking <span class="token operator">=</span> <span class="token boolean">true</span>
    ReactCurrentOwner$2<span class="token punctuation">.</span>currentDispatcher <span class="token operator">=</span> Dispatcher

    <span class="token comment">// console.log(isYieldy, isExpired)</span>
    <span class="token function">logRootTimes</span><span class="token punctuation">(</span><span class="token string">&#39;start&#39;</span><span class="token punctuation">,</span> root<span class="token punctuation">)</span>

    <span class="token keyword">var</span> expirationTime <span class="token operator">=</span> root<span class="token punctuation">.</span>nextExpirationTimeToWorkOn
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>expirationTime<span class="token punctuation">,</span> nextRenderExpirationTime<span class="token punctuation">)</span>

    <span class="token keyword">var</span> prevInteractions <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>enableSchedulerTracing<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        prevInteractions <span class="token operator">=</span> tracing<span class="token punctuation">.</span>__interactionsRef<span class="token punctuation">.</span>current
        tracing<span class="token punctuation">.</span>__interactionsRef<span class="token punctuation">.</span>current <span class="token operator">=</span> root<span class="token punctuation">.</span>memoizedInteractions
    <span class="token punctuation">}</span>

    <span class="token comment">// Check if we&#39;re starting from a fresh stack, or if we&#39;re resuming from</span>
    <span class="token comment">// previously yielded work.</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>
        expirationTime <span class="token operator">!==</span> nextRenderExpirationTime <span class="token operator">||</span>
        root <span class="token operator">!==</span> nextRoot <span class="token operator">||</span>
        nextUnitOfWork <span class="token operator">===</span> <span class="token keyword">null</span>
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Reset the stack and start working from the root.</span>
        <span class="token function">resetStack</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        nextRoot <span class="token operator">=</span> root
        nextRenderExpirationTime <span class="token operator">=</span> expirationTime
        nextUnitOfWork <span class="token operator">=</span> <span class="token function">createWorkInProgress</span><span class="token punctuation">(</span>
        nextRoot<span class="token punctuation">.</span>current<span class="token punctuation">,</span>
        <span class="token keyword">null</span><span class="token punctuation">,</span>
        nextRenderExpirationTime<span class="token punctuation">,</span>
        <span class="token punctuation">)</span>
        root<span class="token punctuation">.</span>pendingCommitExpirationTime <span class="token operator">=</span> NoWork
    <span class="token punctuation">}</span>

    <span class="token keyword">var</span> didFatal <span class="token operator">=</span> <span class="token boolean">false</span>

    <span class="token function">startWorkLoopTimer</span><span class="token punctuation">(</span>nextUnitOfWork<span class="token punctuation">)</span>

    <span class="token keyword">do</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token function">workLoop</span><span class="token punctuation">(</span>isYieldy<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>thrownValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>nextUnitOfWork <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// This is a fatal error.</span>
            didFatal <span class="token operator">=</span> <span class="token boolean">true</span>
            <span class="token function">onUncaughtError</span><span class="token punctuation">(</span>thrownValue<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token punctuation">{</span>
            <span class="token comment">// Reset global debug state</span>
            <span class="token comment">// We assume this is defined in DEV</span>
            <span class="token function">resetCurrentlyProcessingQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">var</span> failedUnitOfWork <span class="token operator">=</span> nextUnitOfWork
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span> <span class="token operator">&amp;&amp;</span> replayFailedUnitOfWorkWithInvokeGuardedCallback<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">replayUnitOfWork</span><span class="token punctuation">(</span>failedUnitOfWork<span class="token punctuation">,</span> thrownValue<span class="token punctuation">,</span> isYieldy<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            <span class="token operator">!</span><span class="token punctuation">(</span>nextUnitOfWork <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
            <span class="token operator">?</span> <span class="token function">invariant</span><span class="token punctuation">(</span>
                <span class="token boolean">false</span><span class="token punctuation">,</span>
                <span class="token string">&#39;Failed to replay rendering after an error. This is likely caused by a bug in React. Please file an issue with a reproducing case to help us find it.&#39;</span><span class="token punctuation">,</span>
                <span class="token punctuation">)</span>
            <span class="token operator">:</span> <span class="token keyword">void</span> <span class="token number">0</span>

            <span class="token keyword">var</span> sourceFiber <span class="token operator">=</span> nextUnitOfWork
            <span class="token keyword">var</span> returnFiber <span class="token operator">=</span> sourceFiber<span class="token punctuation">.</span>return
            <span class="token keyword">if</span> <span class="token punctuation">(</span>returnFiber <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            didFatal <span class="token operator">=</span> <span class="token boolean">true</span>
            <span class="token function">onUncaughtError</span><span class="token punctuation">(</span>thrownValue<span class="token punctuation">)</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token function">throwException</span><span class="token punctuation">(</span>
                root<span class="token punctuation">,</span>
                returnFiber<span class="token punctuation">,</span>
                sourceFiber<span class="token punctuation">,</span>
                thrownValue<span class="token punctuation">,</span>
                nextRenderExpirationTime<span class="token punctuation">,</span>
            <span class="token punctuation">)</span>
            nextUnitOfWork <span class="token operator">=</span> <span class="token function">completeUnitOfWork</span><span class="token punctuation">(</span>sourceFiber<span class="token punctuation">)</span>
            <span class="token keyword">continue</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">break</span>
    <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>

    <span class="token function">logRootTimes</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> root<span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>enableSchedulerTracing<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Traced work is done for now; restore the previous interactions.</span>
        tracing<span class="token punctuation">.</span>__interactionsRef<span class="token punctuation">.</span>current <span class="token operator">=</span> prevInteractions
    <span class="token punctuation">}</span>

    <span class="token comment">// We&#39;re done performing work. Time to clean up.</span>
    isWorking <span class="token operator">=</span> <span class="token boolean">false</span>
    ReactCurrentOwner$2<span class="token punctuation">.</span>currentDispatcher <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token function">resetContextDependences</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// Yield back to main thread.</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>didFatal<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> _didCompleteRoot <span class="token operator">=</span> <span class="token boolean">false</span>
        <span class="token function">stopWorkLoopTimer</span><span class="token punctuation">(</span>interruptedBy<span class="token punctuation">,</span> _didCompleteRoot<span class="token punctuation">)</span>
        interruptedBy <span class="token operator">=</span> <span class="token keyword">null</span>
        <span class="token comment">// There was a fatal error.</span>
        <span class="token punctuation">{</span>
        <span class="token function">resetStackAfterFatalErrorInDev</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        nextRoot <span class="token operator">=</span> <span class="token keyword">null</span>
        <span class="token function">onFatal</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>nextUnitOfWork <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> _didCompleteRoot2 <span class="token operator">=</span> <span class="token boolean">false</span>
        <span class="token function">stopWorkLoopTimer</span><span class="token punctuation">(</span>interruptedBy<span class="token punctuation">,</span> _didCompleteRoot2<span class="token punctuation">)</span>
        interruptedBy <span class="token operator">=</span> <span class="token keyword">null</span>
        <span class="token function">onYield</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// We completed the whole tree.</span>
    <span class="token keyword">var</span> didCompleteRoot <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token function">stopWorkLoopTimer</span><span class="token punctuation">(</span>interruptedBy<span class="token punctuation">,</span> didCompleteRoot<span class="token punctuation">)</span>
    <span class="token keyword">var</span> rootWorkInProgress <span class="token operator">=</span> root<span class="token punctuation">.</span>current<span class="token punctuation">.</span>alternate
    <span class="token operator">!</span><span class="token punctuation">(</span>rootWorkInProgress <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
        <span class="token operator">?</span> <span class="token function">invariant</span><span class="token punctuation">(</span>
            <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token string">&#39;Finished root should have a work-in-progress. This error is likely caused by a bug in React. Please file an issue.&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span>
        <span class="token operator">:</span> <span class="token keyword">void</span> <span class="token number">0</span>

    nextRoot <span class="token operator">=</span> <span class="token keyword">null</span>
    interruptedBy <span class="token operator">=</span> <span class="token keyword">null</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>nextRenderDidError<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">hasLowerPriorityWork</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> expirationTime<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">markSuspendedPriorityLevel</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> expirationTime<span class="token punctuation">)</span>
        <span class="token keyword">var</span> suspendedExpirationTime <span class="token operator">=</span> expirationTime
        <span class="token keyword">var</span> rootExpirationTime <span class="token operator">=</span> root<span class="token punctuation">.</span>expirationTime
        <span class="token function">onSuspend</span><span class="token punctuation">(</span>
            root<span class="token punctuation">,</span>
            rootWorkInProgress<span class="token punctuation">,</span>
            suspendedExpirationTime<span class="token punctuation">,</span>
            rootExpirationTime<span class="token punctuation">,</span>
            <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">// Indicates no timeout</span>
        <span class="token punctuation">)</span>
        <span class="token keyword">return</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">.</span>didError <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>isExpired<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        root<span class="token punctuation">.</span>didError <span class="token operator">=</span> <span class="token boolean">true</span>
        <span class="token keyword">var</span> _suspendedExpirationTime <span class="token operator">=</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>nextExpirationTimeToWorkOn <span class="token operator">=</span> expirationTime<span class="token punctuation">)</span>
        <span class="token keyword">var</span> _rootExpirationTime <span class="token operator">=</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>expirationTime <span class="token operator">=</span> Sync<span class="token punctuation">)</span>
        <span class="token function">onSuspend</span><span class="token punctuation">(</span>
            root<span class="token punctuation">,</span>
            rootWorkInProgress<span class="token punctuation">,</span>
            _suspendedExpirationTime<span class="token punctuation">,</span>
            _rootExpirationTime<span class="token punctuation">,</span>
            <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">// Indicates no timeout</span>
        <span class="token punctuation">)</span>
        <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isExpired <span class="token operator">&amp;&amp;</span> nextLatestAbsoluteTimeoutMs <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// The tree was suspended.</span>
        <span class="token keyword">var</span> _suspendedExpirationTime2 <span class="token operator">=</span> expirationTime
        <span class="token function">markSuspendedPriorityLevel</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> _suspendedExpirationTime2<span class="token punctuation">)</span>

        <span class="token keyword">var</span> earliestExpirationTime <span class="token operator">=</span> <span class="token function">findEarliestOutstandingPriorityLevel</span><span class="token punctuation">(</span>
        root<span class="token punctuation">,</span>
        expirationTime<span class="token punctuation">,</span>
        <span class="token punctuation">)</span>
        <span class="token keyword">var</span> earliestExpirationTimeMs <span class="token operator">=</span> <span class="token function">expirationTimeToMs</span><span class="token punctuation">(</span>earliestExpirationTime<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>earliestExpirationTimeMs <span class="token operator">&lt;</span> nextLatestAbsoluteTimeoutMs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        nextLatestAbsoluteTimeoutMs <span class="token operator">=</span> earliestExpirationTimeMs
        <span class="token punctuation">}</span>

        <span class="token keyword">var</span> currentTimeMs <span class="token operator">=</span> <span class="token function">expirationTimeToMs</span><span class="token punctuation">(</span><span class="token function">requestCurrentTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">var</span> msUntilTimeout <span class="token operator">=</span> nextLatestAbsoluteTimeoutMs <span class="token operator">-</span> currentTimeMs
        msUntilTimeout <span class="token operator">=</span> msUntilTimeout <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> msUntilTimeout

        <span class="token comment">// TODO: Account for the Just Noticeable Difference</span>

        <span class="token keyword">var</span> _rootExpirationTime2 <span class="token operator">=</span> root<span class="token punctuation">.</span>expirationTime
        <span class="token function">onSuspend</span><span class="token punctuation">(</span>
        root<span class="token punctuation">,</span>
        rootWorkInProgress<span class="token punctuation">,</span>
        _suspendedExpirationTime2<span class="token punctuation">,</span>
        _rootExpirationTime2<span class="token punctuation">,</span>
        msUntilTimeout<span class="token punctuation">,</span>
        <span class="token punctuation">)</span>
        <span class="token function">logRootTimes</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> root<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>

    <span class="token function">logRootTimes</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> root<span class="token punctuation">)</span>

    <span class="token comment">// Ready to commit.</span>
    <span class="token function">onComplete</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> rootWorkInProgress<span class="token punctuation">,</span> expirationTime<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br></div></div>`,35);function e(o,t){return p}var l=s(a,[["render",e]]);export{l as default};
