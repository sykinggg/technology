import{a as n}from"./app.6f963528.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="\u66B4\u9732\u6A21\u5757\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u66B4\u9732\u6A21\u5757\u6A21\u5F0F" aria-hidden="true">#</a> \u66B4\u9732\u6A21\u5757\u6A21\u5F0F</h1><blockquote><p>\u65E2\u7136\u5BF9\u6A21\u5757\u6A21\u5F0F\u5DF2\u7ECF\u6709\u4E00\u4E9B\u4E86\u89E3\u4E86\uFF0C\u8BA9\u770B\u4E00\u4E0B\u6539\u8FDB\u7248\u672C - Christian Heilmann \u7684\u542F\u53D1\u5F0F\u6A21\u5757\u6A21\u5F0F\u3002 \u542F\u53D1\u5F0F\u6A21\u5757\u6A21\u5F0F\u6765\u81EA\u4E8E\uFF0C\u5F53Heilmann\u5BF9\u8FD9\u6837\u4E00\u4E2A\u73B0\u72B6\u7684\u4E0D\u6EE1\uFF0C\u5373\u5F53\u60F3\u8981\u5728\u4E00\u4E2A\u516C\u6709\u65B9\u6CD5\u4E2D\u8C03\u7528\u53E6\u5916\u4E00\u4E2A\u516C\u6709\u65B9\u6CD5\uFF0C\u6216\u8005\u8BBF\u95EE\u516C\u6709\u53D8\u91CF\u7684\u65F6\u5019\uFF0C\u4E0D\u5F97\u4E0D\u91CD\u590D\u4E3B\u5BF9\u8C61\u7684\u540D\u79F0\u3002\u4ED6\u4E5F\u4E0D\u559C\u6B22\u6A21\u5757\u6A21\u5F0F\u4E2D\uFF0C\u5F53\u60F3\u8981\u5C06\u67D0\u4E2A\u6210\u5458\u53D8\u6210\u516C\u5171\u6210\u5458\u65F6\uFF0C\u4FEE\u6539\u6587\u5B57\u6807\u8BB0\u7684\u505A\u6CD5\u3002</p><p>\u56E0\u6B64\u4ED6\u5DE5\u4F5C\u7684\u7ED3\u679C\u5C31\u662F\u4E00\u4E2A\u66F4\u65B0\u7684\u6A21\u5F0F\uFF0C\u5728\u8FD9\u4E2A\u6A21\u5F0F\u4E2D\uFF0C\u53EF\u4EE5\u7B80\u5355\u5730\u5728\u79C1\u6709\u57DF\u4E2D\u5B9A\u4E49\u6240\u6709\u7684\u51FD\u6570\u548C\u53D8\u91CF\uFF0C\u5E76\u4E14\u8FD4\u56DE\u4E00\u4E2A\u533F\u540D\u5BF9\u8C61\uFF0C\u8FD9\u4E2A\u5BF9\u8C61\u5305\u542B\u6709\u4E00\u4E9B\u6307\u9488\uFF0C\u8FD9\u4E9B\u6307\u9488\u6307\u5411\u60F3\u8981\u66B4\u9732\u51FA\u6765\u7684\u79C1\u6709\u6210\u5458\uFF0C\u4F7F\u8FD9\u4E9B\u79C1\u6709\u6210\u5458\u516C\u6709\u5316\u3002</p></blockquote><blockquote><p>\u4E0B\u9762\u7ED9\u51FA\u4E00\u4E2A\u5982\u4F55\u4F7F\u7528\u66B4\u9732\u5F0F\u6A21\u5757\u6A21\u5F0F\u7684\u4F8B\u5B50:</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">myRevealingModule</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">var</span> privateVar <span class="token operator">=</span> <span class="token string">&quot;Ben Cherry&quot;</span><span class="token punctuation">,</span>
        publicVar  <span class="token operator">=</span> <span class="token string">&quot;Hey there!&quot;</span><span class="token punctuation">;</span>

    <span class="token keyword">function</span> <span class="token function">privateFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token string">&quot;Name:&quot;</span> <span class="token operator">+</span> privateVar <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">publicSetName</span><span class="token punctuation">(</span> <span class="token parameter">strName</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        privateVar <span class="token operator">=</span> strName<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">publicGetName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">privateFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Reveal public pointers to </span>
    <span class="token comment">// private functions and properties</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">setName</span><span class="token operator">:</span> publicSetName<span class="token punctuation">,</span>
        <span class="token literal-property property">greeting</span><span class="token operator">:</span> publicVar<span class="token punctuation">,</span>
        <span class="token literal-property property">getName</span><span class="token operator">:</span> publicGetName
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

myRevealingModule<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span> <span class="token string">&quot;Paul Kinlan&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><blockquote><p>\u8FD9\u4E2A\u6A21\u5F0F\u53EF\u4EE5\u7528\u4E8E\u5C06\u79C1\u6709\u51FD\u6570\u548C\u5C5E\u6027\u4EE5\u66F4\u52A0\u89C4\u8303\u7684\u547D\u540D\u65B9\u5F0F\u5C55\u73B0\u51FA\u6765\u3002</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">myRevealingModule</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">var</span> privateCounter <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token keyword">function</span> <span class="token function">privateFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        privateCounter<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">publicFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">publicIncrement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">publicIncrement</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">privateFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">publicGetCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> privateCounter<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Reveal public pointers to</span>
    <span class="token comment">// private functions and properties       </span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">start</span><span class="token operator">:</span> publicFunction<span class="token punctuation">,</span>
        <span class="token literal-property property">increment</span><span class="token operator">:</span> publicIncrement<span class="token punctuation">,</span>
        <span class="token literal-property property">count</span><span class="token operator">:</span> publicGetCount
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

myRevealingModule<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><h3 id="\u4F18\u52BF" tabindex="-1"><a class="header-anchor" href="#\u4F18\u52BF" aria-hidden="true">#</a> \u4F18\u52BF</h3><blockquote><p>\u8FD9\u4E2A\u6A21\u5F0F\u662F\u811A\u672C\u7684\u8BED\u6CD5\u66F4\u52A0\u4E00\u81F4\u3002\u540C\u6837\u5728\u6A21\u5757\u7684\u6700\u540E\u5173\u4E8E\u90A3\u4E9B\u51FD\u6570\u548C\u53D8\u91CF\u53EF\u4EE5\u88AB\u516C\u5171\u8BBF\u95EE\u4E5F\u53D8\u5F97\u66F4\u52A0\u6E05\u6670\uFF0C\u589E\u5F3A\u4E86\u53EF\u8BFB\u6027\u3002</p></blockquote><h3 id="\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#\u7F3A\u70B9" aria-hidden="true">#</a> \u7F3A\u70B9</h3><blockquote><p>\u8FD9\u4E2A\u6A21\u5F0F\u7684\u4E00\u4E2A\u7F3A\u70B9\u662F\u5982\u679C\u79C1\u6709\u51FD\u6570\u9700\u8981\u4F7F\u7528\u516C\u6709\u51FD\u6570\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u516C\u6709\u51FD\u6570\u5728\u9700\u8981\u6253\u8865\u4E01\u7684\u65F6\u5019\u5C31\u4E0D\u80FD\u88AB\u91CD\u8F7D\u3002\u56E0\u4E3A\u79C1\u6709\u51FD\u6570\u4ECD\u7136\u4F7F\u7528\u7684\u662F\u79C1\u6709\u7684\u5B9E\u73B0\uFF0C\u5E76\u4E14\u8FD9\u4E2A\u6A21\u5F0F\u4E0D\u80FD\u7528\u4E8E\u516C\u6709\u6210\u5458\uFF0C\u53EA\u7528\u4E8E\u51FD\u6570\u3002</p><p>\u516C\u6709\u6210\u5458\u4F7F\u7528\u79C1\u6709\u6210\u5458\u4E5F\u9075\u5FAA\u4E0A\u9762\u4E0D\u80FD\u6253\u8865\u4E01\u7684\u89C4\u5219\u3002</p><p>\u56E0\u4E3A\u4E0A\u9762\u7684\u539F\u56E0\uFF0C\u4F7F\u7528\u66B4\u9732\u5F0F\u6A21\u5757\u6A21\u5F0F\u521B\u5EFA\u7684\u6A21\u5757\u76F8\u5BF9\u4E8E\u539F\u59CB\u7684\u6A21\u5757\u6A21\u5F0F\u66F4\u5BB9\u6613\u51FA\u95EE\u9898\uFF0C\u56E0\u6B64\u5728\u4F7F\u7528\u7684\u65F6\u5019\u9700\u8981\u5C0F\u5FC3\u3002</p></blockquote>`,10);function t(e,o){return p}var u=s(a,[["render",t]]);export{u as default};
