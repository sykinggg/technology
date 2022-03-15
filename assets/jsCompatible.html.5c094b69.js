import{a as n}from"./app.ba47fc91.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=n(`<h1 id="\u4E8B\u4EF6\u76D1\u542C\u53E5\u67C4" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\u76D1\u542C\u53E5\u67C4" aria-hidden="true">#</a> \u4E8B\u4EF6\u76D1\u542C\u53E5\u67C4</h1><hr><p><strong>IE:</strong> <code>dom.attachEvent();</code><strong>\u6807\u51C6\u6D4F\u89C8\u5668\uFF1A</strong> <code>dom.addEventListener(\u2018click&#39;,function(event){},false);</code></p><p>\u6807\u51C6\u6D4F\u89C8\u5668\u91C7\u7528\u4E8B\u4EF6\u6355\u83B7\u7684\u65B9\u5F0F\u5BF9\u5E94IE\u7684\u4E8B\u4EF6\u5192\u6CE1\u673A\u5236\uFF08\u5373\u6807\u51C6<code>\u7531\u6700\u5916\u5143\u7D20\u81F3\u6700\u5185\u5143\u7D20\u6216\u8005IE\u7531\u6700\u5185\u5143\u7D20\u5230\u6700\u5916\u5143\u7D20</code>\uFF09\u6700\u540E\u6807\u51C6\u65B9\u4EA6\u89C9\u5F97IE\u8FD9\u65B9\u9762\u7684\u6BD4\u8F83\u5408\u7406\uFF0C\u6240\u4EE5\u4FBF\u5C06\u4E8B\u4EF6\u5192\u6CE1\u7EB3\u5165\u4E86\u6807\u51C6\uFF0C\u8FD9\u4E5F\u662F<code>addEventListener</code>\u7B2C\u4E09\u4E2A\u53C2\u6570\u7684\u7531\u6765\uFF0C\u800C\u4E14\u4E8B\u4EF6\u5192\u6CE1\u4F5C\u4E3A\u4E86\u9ED8\u8BA4\u503C\u7B2C\u4E09\u503C\u9ED8\u8BA4false\uFF0C\u8868\u793A\u4E8B\u4EF6\u5192\u6CE1\u65B9\u5F0F\u3002</p><p>\u5728<code>IE9</code>\u4E4B\u524D\uFF0C\u5FC5\u987B\u4F7F\u7528<code>attachEvent</code>\u800C\u4E0D\u662F\u4F7F\u7528\u6807\u51C6\u65B9\u6CD5<code>addEventListener</code>\u6765\u6CE8\u518C\u5143\u7D20\u7684\u76D1\u542C\u5668\uFF0C\u4E8B\u4EF6\u517C\u5BB9\u7684\u95EE\u9898\uFF0C\u901A\u5E38\u9700\u8981\u4F1A\u5C01\u88C5\u4E00\u4E2A\u9002\u914D\u5668\u7684\u65B9\u6CD5\uFF0C\u8FC7\u6EE4\u4E8B\u4EF6\u53E5\u67C4\u7ED1\u5B9A\u3001\u79FB\u9664\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code> <span class="token keyword">var</span> handler <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

 <span class="token comment">//\u7ED1\u5B9A\u4E8B\u4EF6</span>
 handler<span class="token punctuation">.</span><span class="token function-variable function">on</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> type<span class="token punctuation">,</span> handler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 	<span class="token keyword">if</span><span class="token punctuation">(</span>target<span class="token punctuation">.</span>addEventListener<span class="token punctuation">)</span> <span class="token punctuation">{</span>
 		target<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> handler<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
 		target<span class="token punctuation">.</span><span class="token function">attachEvent</span><span class="token punctuation">(</span><span class="token string">&quot;on&quot;</span> <span class="token operator">+</span> type<span class="token punctuation">,</span>
 			<span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 				<span class="token keyword">return</span> <span class="token function">handler</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> event<span class="token punctuation">)</span><span class="token punctuation">;</span>
 		    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 	<span class="token punctuation">}</span>
 <span class="token punctuation">}</span><span class="token punctuation">;</span>

 <span class="token comment">//\u53D6\u6D88\u4E8B\u4EF6\u76D1\u542C</span>
 handler<span class="token punctuation">.</span><span class="token function-variable function">remove</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> type<span class="token punctuation">,</span> handler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 	<span class="token keyword">if</span><span class="token punctuation">(</span>target<span class="token punctuation">.</span>removeEventListener<span class="token punctuation">)</span> <span class="token punctuation">{</span>
 		target<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> handler<span class="token punctuation">)</span><span class="token punctuation">;</span>
 	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
 		target<span class="token punctuation">.</span><span class="token function">detachEvent</span><span class="token punctuation">(</span><span class="token string">&quot;on&quot;</span> <span class="token operator">+</span> type<span class="token punctuation">,</span>
 	    <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 			<span class="token keyword">return</span> <span class="token function">handler</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> event<span class="token punctuation">)</span><span class="token punctuation">;</span>
 		<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h1 id="\u963B\u6B62\u9ED8\u8BA4\u884C\u4E3A" tabindex="-1"><a class="header-anchor" href="#\u963B\u6B62\u9ED8\u8BA4\u884C\u4E3A" aria-hidden="true">#</a> \u963B\u6B62\u9ED8\u8BA4\u884C\u4E3A</h1><hr><p><code>W3C</code>\u63A8\u8350\u7684\u963B\u6B62\u9ED8\u8BA4\u884C\u4E3A\u7684\u65B9\u5F0F\u662F<code>event.preventDefault()</code>\uFF0C\u6B64\u65B9\u6CD5\u53EA\u4F1A\u963B\u6B62\u9ED8\u8BA4\u884C\u4E3A\u800C\u4E0D\u4F1A\u963B\u6B62\u4E8B\u4EF6\u7684\u4F20\u64AD\u3002<code>IE9</code>\u4E4B\u524D\u7684\u6D4F\u89C8\u5668\u963B\u6B62\u9ED8\u8BA4\u884C\u4E3A\u9700\u8981\u4F7F\u7528<code>window.event.returnValue = false</code>\u3002\u76F4\u63A5\u5728\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u4E2D<code>return false</code>\u4E5F\u80FD\u963B\u6B62\u9ED8\u8BA4\u884C\u4E3A\uFF0C\u53EA\u5728<code>DOM0</code>\u7EA7\u6A21\u578B\u4E2D\u6709\u6548\u3002\u6B64\u5916\uFF0C\u5728<code>jQuery</code>\u4E2D\u4F7F\u7528<code>return false</code>\u4F1A\u540C\u65F6\u963B\u6B62\u9ED8\u8BA4\u884C\u4E3A\u4E0E\u4E8B\u4EF6\u4F20\u64AD\uFF0C\u901A\u5E38\u4E5F\u4F1A\u5C01\u88C5\u4E00\u4E2A\u65B9\u6CD5\u6765\u5B9E\u73B0\u9ED8\u8BA4\u884C\u4E3A\u7684\u963B\u6B62\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>handler<span class="token punctuation">.</span><span class="token function-variable function">preventDefault</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    event <span class="token operator">=</span> event <span class="token operator">||</span> window<span class="token punctuation">.</span>event<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>preventDefault<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        event<span class="token punctuation">.</span>returnValue <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h1 id="\u963B\u6B62\u4E8B\u4EF6\u5192\u6CE1" tabindex="-1"><a class="header-anchor" href="#\u963B\u6B62\u4E8B\u4EF6\u5192\u6CE1" aria-hidden="true">#</a> \u963B\u6B62\u4E8B\u4EF6\u5192\u6CE1</h1><hr><p><code>W3C</code>\u63A8\u8350\u7684\u963B\u6B62\u5192\u6CE1\u7684\u65B9\u6CD5\u662F<code>event.stopPropagation()</code>\uFF0C<code>IE9</code>\u4E4B\u524D\u5219\u662F\u4F7F\u7528<code>window.event.cancelBubble = true;</code>\uFF0C\u901A\u5E38\u4E5F\u4F1A\u5C01\u88C5\u4E00\u4E2A\u65B9\u6CD5\u6765\u5B9E\u73B0\u963B\u6B62\u4E8B\u4EF6\u5192\u6CE1\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>handler<span class="token punctuation">.</span><span class="token function-variable function">stopPropagation</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    event <span class="token operator">=</span> event <span class="token operator">||</span> window<span class="token punctuation">.</span>event<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>stopPropagation<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        event<span class="token punctuation">.</span><span class="token function">stopPropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        event<span class="token punctuation">.</span>cancelBubble <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h1 id="\u6EDA\u52A8\u9AD8\u5EA6" tabindex="-1"><a class="header-anchor" href="#\u6EDA\u52A8\u9AD8\u5EA6" aria-hidden="true">#</a> \u6EDA\u52A8\u9AD8\u5EA6</h1><hr><p>\u83B7\u53D6\u7A97\u53E3\u7684\u6EDA\u52A8\u9AD8\u5EA6<code>scrollTop</code>\u9700\u8981\u91C7\u7528\u517C\u5BB9\u6027\u5199\u6CD5\uFF0C\u5373\u4F7F\u58F0\u660E<code>&lt;DOCTYPE&gt;</code>\u6D4F\u89C8\u5668\u5BF9\u4E8E\u6587\u6863\u7684\u5904\u7406\u4E5F\u4F1A\u6709\u6240\u4E0D\u540C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> scrollTop <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>scrollTop <span class="token operator">||</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>scrollTop<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h1 id="\u65E5\u671F\u65F6\u95F4" tabindex="-1"><a class="header-anchor" href="#\u65E5\u671F\u65F6\u95F4" aria-hidden="true">#</a> \u65E5\u671F\u65F6\u95F4</h1><hr><p>\u4F7F\u7528<code>new Date()</code>\u6784\u9020\u51FD\u6570\u751F\u6210\u65E5\u671F\u65F6\u95F4\u5BF9\u8C61\uFF0C\u5BF9\u4E8E<code>new Date(&quot;2020-06-29&quot;)</code>\u8BED\u6CD5\u5728\u4E00\u4E9B\u65E9\u671F\u7684\u6D4F\u89C8\u5668\u4F1A\u8F93\u51FA<code>invalid date</code>\uFF0C\u8FD9\u4E3B\u8981\u662F\u56E0\u4E3A\u65E9\u671F\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u8868\u8FBE\u65E5\u671F\u7684<code>-</code>\uFF0C\u800C<code>/</code>\u624D\u662F\u88AB\u5E7F\u6CDB\u652F\u6301\u7684\uFF0C\u6240\u4EE5\u5728\u5904\u7406\u65E9\u671F\u6D4F\u89C8\u5668\u7684\u517C\u5BB9\u6027\u65F6\u9700\u8981\u5C06<code>-</code>\u66FF\u6362\u4E3A<code>/</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">&quot;2020-06-29&quot;</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">-</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h1 id="document" tabindex="-1"><a class="header-anchor" href="#document" aria-hidden="true">#</a> document</h1><hr><blockquote><p><code>event</code>\u4E8B\u4EF6\u5BF9\u8C61\u95EE\u9898</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function-variable function">onclick</span><span class="token operator">=</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">ev</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//\u8C37\u6B4C\u706B\u72D0\u7684\u5199\u6CD5\uFF0CIE9\u4EE5\u4E0A\u652F\u6301\uFF0C\u5F80\u4E0B\u4E0D\u652F\u6301\uFF1B</span>
    <span class="token keyword">var</span> e<span class="token operator">=</span>ev<span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
document<span class="token punctuation">.</span><span class="token function-variable function">onclick</span><span class="token operator">=</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//\u8C37\u6B4C\u548CIE\u652F\u6301\uFF0C\u706B\u72D0\u4E0D\u652F\u6301\uFF1B</span>
    <span class="token keyword">var</span> e<span class="token operator">=</span>event<span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
document<span class="token punctuation">.</span><span class="token function-variable function">onclick</span><span class="token operator">=</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">ev</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//\u517C\u5BB9\u5199\u6CD5\uFF1B</span>
    <span class="token keyword">var</span> e<span class="token operator">=</span>ev<span class="token operator">||</span>window<span class="token punctuation">.</span>event<span class="token punctuation">;</span>
    <span class="token keyword">var</span> mouseX<span class="token operator">=</span>e<span class="token punctuation">.</span>clientX<span class="token punctuation">;</span><span class="token comment">//\u9F20\u6807X\u8F74\u7684\u5750\u6807</span>
    <span class="token keyword">var</span> mouseY<span class="token operator">=</span>e<span class="token punctuation">.</span>clientY<span class="token punctuation">;</span><span class="token comment">//\u9F20\u6807Y\u8F74\u7684\u5750\u6807</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h1 id="event-srcelement-\u4E8B\u4EF6\u6E90\u5BF9\u8C61-\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#event-srcelement-\u4E8B\u4EF6\u6E90\u5BF9\u8C61-\u95EE\u9898" aria-hidden="true">#</a> event.srcElement(\u4E8B\u4EF6\u6E90\u5BF9\u8C61)\u95EE\u9898</h1><hr><p><strong>IE\uFF1A</strong> <code>event</code>\u5BF9\u8C61\u6709<code>srcElement</code>\u5C5E\u6027\uFF0C\u4F46\u662F\u6CA1\u6709<code>target</code>\u5C5E\u6027\uFF1B <strong>Firefox:</strong> <code>event</code>\u5BF9\u8C61\u6709<code>target</code>\u5C5E\u6027\uFF0C\u4F46\u662F\u6CA1\u6709<code>srcElement</code>\u5C5E\u6027\u3002</p><p><strong>\u89E3\u51B3\u65B9\u6CD5\uFF1A</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>srcObj <span class="token operator">=</span> event<span class="token punctuation">.</span>srcElement<span class="token operator">?</span>event<span class="token punctuation">.</span>srcElement<span class="token operator">:</span>event<span class="token punctuation">.</span>target<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h1 id="\u83B7\u53D6\u5143\u7D20\u7684\u975E\u884C\u95F4\u6837\u5F0F\u503C" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u5143\u7D20\u7684\u975E\u884C\u95F4\u6837\u5F0F\u503C" aria-hidden="true">#</a> \u83B7\u53D6\u5143\u7D20\u7684\u975E\u884C\u95F4\u6837\u5F0F\u503C</h1><hr><p><strong>IE:</strong> <code>dom.currentStyle[&#39;width&#39;]</code> \u83B7\u53D6\u5143\u7D20\u9AD8\u5EA6 <strong>\u6807\u51C6\u6D4F\u89C8\u5668\uFF1A</strong> <code>window.getComputedStyle(obj, null)[&#39;width&#39;];</code></p><p><strong>\u8DE8\u6D4F\u89C8\u5668\u517C\u5BB9\u89E3\u51B3\u65B9\u6CD5\uFF1A</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u83B7\u53D6\u5143\u7D20\u5C5E\u6027\u503C\u7684\u517C\u5BB9\u5199\u6CD5</span>
<span class="token keyword">function</span> <span class="token function">getStyle</span><span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span>attr</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>currentStyle<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//\u517C\u5BB9IE</span>
 \u3000\u3000\u3000\u3000obj<span class="token punctuation">.</span>currentStyle<span class="token punctuation">[</span>attr<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> obj<span class="token punctuation">.</span>currentStyle<span class="token punctuation">[</span>attr<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        <span class="token comment">//\u975EIE\uFF0C</span>
 \u3000\u3000\u3000  <span class="token keyword">return</span> window<span class="token punctuation">.</span><span class="token function">getComputedStyle</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">[</span>attr<span class="token punctuation">]</span><span class="token punctuation">;</span> 
 \u3000 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h1 id="ajax\u517C\u5BB9\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#ajax\u517C\u5BB9\u95EE\u9898" aria-hidden="true">#</a> ajax\u517C\u5BB9\u95EE\u9898</h1><hr><p><strong>IE\uFF1A</strong> <code>ActiveXObject</code><strong>\u5176\u4ED6\uFF1A</strong> <code>xmlHttpReuest</code></p><blockquote><p>\u5728<code>IE6</code>\u4EE5\u524D\u4E0D\u662F\u7528<code>XMLHttpRequest</code>\u521B\u5EFA\u7684\uFF0C\u6240\u4EE5\u8981\u517C\u5BB9<code>ie6</code>\u4EE5\u524D\u7684\u6D4F\u89C8\u5668\u8981\u5224\u65AD\u4ED6\u6709\u6CA1\u6709<code>XMLHttpRequest()</code></p></blockquote><p><strong>\u8DE8\u6D4F\u89C8\u5668\u517C\u5BB9\u89E3\u51B3\u65B9\u6CD5\uFF1A</strong></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
	window<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">var</span> oBtn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;btn&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		oBtn<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token comment">//1.\u521B\u5EFAajax\u5BF9\u8C61</span>
			<span class="token comment">//\u53EA\u652F\u6301\u975EIE6\u6D4F\u89C8\u5668</span>
			<span class="token keyword">var</span> oAjax <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>XMLHttpRequest<span class="token punctuation">)</span><span class="token punctuation">{</span>
				oAjax <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>				
				<span class="token comment">//alert(new XMLHttpRequest());</span>
			<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
				<span class="token comment">//\u53EA\u652F\u6301IE6\u6D4F\u89C8\u5668</span>
				oAjax <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ActiveXObject</span><span class="token punctuation">(</span><span class="token string">&quot;Microsoft.XMLHTTP&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	
			<span class="token punctuation">}</span>
			<span class="token comment">//2.\u8FDE\u63A5\u670D\u52A1\u5668,\u8FD9\u91CC\u52A0\u4E2A\u65F6\u95F4\u53C2\u6570,\u6BCF\u6B21\u8BBF\u95EE\u5730\u5740\u90FD\u4E0D\u4E00\u6837,\u6D4F\u89C8\u5668\u5C31\u4E0D\u7528\u6D4F\u89C8\u5668\u91CC\u7684\u7F13\u51B2\u4E86,\u4F46</span>
			<span class="token comment">//	\u4F46\u670D\u52A1\u5668\u90A3\u7AEF\u662F\u4E0D\u89E3\u6790\u8FD9\u4E2A\u65F6\u95F4\u7684</span>
			oAjax<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;get&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;a.txt?t=&quot;</span> <span class="token operator">+</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token comment">//3.\u53D1\u9001</span>
			oAjax<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>		
			<span class="token comment">//4.\u63A5\u53D7\u4FE1\u606F</span>
			oAjax<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				<span class="token comment">//\u6D4F\u89C8\u5668\u4E0E\u670D\u52A1\u5668\u4E4B\u95F4\u7684\u4EA4\u4E92,\u8FDB\u884C\u5230\u54EA\u4E00\u6B65\u4E86,\u5F53\u7B49\u4E8E4\u7684\u65F6\u5019,\u4EE3\u8868\u8BFB\u53D6\u5B8C\u6210\u4E86</span>
				<span class="token keyword">if</span><span class="token punctuation">(</span>oAjax<span class="token punctuation">.</span>readyState<span class="token operator">==</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
					<span class="token comment">//\u72B6\u6001\u7801,\u53EA\u6709\u7B49\u4E8E200,\u4EE3\u8868\u63A5\u53D7\u5B8C\u6210,\u5E76\u4E14\u6210\u529F\u4E86</span>
					<span class="token keyword">if</span><span class="token punctuation">(</span>oAjax<span class="token punctuation">.</span>status<span class="token operator">==</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
						<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;\u6210\u529F&quot;</span> <span class="token operator">+</span> oAjax<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span><span class="token punctuation">;</span>	
					<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
						<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;\u5931\u8D25&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	
					<span class="token punctuation">}</span>	
				<span class="token punctuation">}</span>	
			<span class="token punctuation">}</span><span class="token punctuation">;</span>
				
		<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div>`,42);function p(e,o){return t}var u=s(a,[["render",p]]);export{u as default};
