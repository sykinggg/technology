import{r as t,o,c,b as n,d as e,F as l,e as s,a as p}from"./app.ee3fc36b.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const i={},u=n("p",null,"warning \u672C\u7AE0\u4E3A\u9009\u8BFB\u7AE0\u8282",-1),d=n("p",null,"\u662F\u5426\u5B66\u4E60\u8BE5\u7AE0\u5BF9\u540E\u7EED\u7AE0\u8282\u7684\u5B66\u4E60\u6CA1\u6709\u5F71\u54CD\u3002",-1),k=s("\u5728"),b={href:"/react/process/beginWork.md#reconcilechildren",target:"_blank",rel:"noopener noreferrer"},m=s("beginWork\u4E00\u8282"),h=s("\u63D0\u5230"),g=n("blockquote",null,[n("p",null,[s("\u5BF9\u4E8E"),n("code",null,"update"),s("\u7684\u7EC4\u4EF6\uFF0C\u4ED6\u4F1A\u5C06\u5F53\u524D\u7EC4\u4EF6\u4E0E\u8BE5\u7EC4\u4EF6\u5728\u4E0A\u6B21\u66F4\u65B0\u65F6\u5BF9\u5E94\u7684Fiber\u8282\u70B9\u6BD4\u8F83\uFF08\u4E5F\u5C31\u662F\u4FD7\u79F0\u7684Diff\u7B97\u6CD5\uFF09\uFF0C\u5C06\u6BD4\u8F83\u7684\u7ED3\u679C\u751F\u6210\u65B0Fiber\u8282\u70B9\u3002")])],-1),f=n("p",null,[s("\u8FD9\u4E00\u7AE0\u8BB2\u89E3"),n("code",null,"Diff\u7B97\u6CD5"),s("\u7684\u5B9E\u73B0\u3002")],-1),_=s("\u4F60\u53EF\u4EE5\u4ECE"),y={href:"https://zh-hans.reactjs.org/docs/reconciliation.html#the-diffing-algorithm",target:"_blank",rel:"noopener noreferrer"},w=s("\u8FD9\u91CC"),C=s("\u770B\u5230"),x=n("code",null,"Diff\u7B97\u6CD5",-1),v=s("\u7684\u4ECB\u7ECD\u3002"),F=p(`<p>warning \u4E3A\u4E86\u9632\u6B62\u6982\u5FF5\u6DF7\u6DC6\uFF0C\u8FD9\u91CC\u518D\u5F3A\u8C03\u4E0B</p><p>\u4E00\u4E2A<code>DOM\u8282\u70B9</code>\u5728\u67D0\u4E00\u65F6\u523B\u6700\u591A\u4F1A\u67094\u4E2A\u8282\u70B9\u548C\u4ED6\u76F8\u5173\u3002</p><ol><li><p><code>current Fiber</code>\u3002\u5982\u679C\u8BE5<code>DOM\u8282\u70B9</code>\u5DF2\u5728\u9875\u9762\u4E2D\uFF0C<code>current Fiber</code>\u4EE3\u8868\u8BE5<code>DOM\u8282\u70B9</code>\u5BF9\u5E94\u7684<code>Fiber\u8282\u70B9</code>\u3002</p></li><li><p><code>workInProgress Fiber</code>\u3002\u5982\u679C\u8BE5<code>DOM\u8282\u70B9</code>\u5C06\u5728\u672C\u6B21\u66F4\u65B0\u4E2D\u6E32\u67D3\u5230\u9875\u9762\u4E2D\uFF0C<code>workInProgress Fiber</code>\u4EE3\u8868\u8BE5<code>DOM\u8282\u70B9</code>\u5BF9\u5E94\u7684<code>Fiber\u8282\u70B9</code>\u3002</p></li><li><p><code>DOM\u8282\u70B9</code>\u672C\u8EAB\u3002</p></li><li><p><code>JSX\u5BF9\u8C61</code>\u3002\u5373<code>ClassComponent</code>\u7684<code>render</code>\u65B9\u6CD5\u7684\u8FD4\u56DE\u7ED3\u679C\uFF0C\u6216<code>FunctionComponent</code>\u7684\u8C03\u7528\u7ED3\u679C\u3002<code>JSX\u5BF9\u8C61</code>\u4E2D\u5305\u542B\u63CF\u8FF0<code>DOM\u8282\u70B9</code>\u7684\u4FE1\u606F\u3002</p></li></ol><p><code>Diff\u7B97\u6CD5</code>\u7684\u672C\u8D28\u662F\u5BF9\u6BD41\u548C4\uFF0C\u751F\u62102\u3002</p><h2 id="diff\u7684\u74F6\u9888\u4EE5\u53CAreact\u5982\u4F55\u5E94\u5BF9" tabindex="-1"><a class="header-anchor" href="#diff\u7684\u74F6\u9888\u4EE5\u53CAreact\u5982\u4F55\u5E94\u5BF9" aria-hidden="true">#</a> Diff\u7684\u74F6\u9888\u4EE5\u53CAReact\u5982\u4F55\u5E94\u5BF9</h2><p>\u7531\u4E8E<code>Diff</code>\u64CD\u4F5C\u672C\u8EAB\u4E5F\u4F1A\u5E26\u6765\u6027\u80FD\u635F\u8017\uFF0CReact\u6587\u6863\u4E2D\u63D0\u5230\uFF0C\u5373\u4F7F\u5728\u6700\u524D\u6CBF\u7684\u7B97\u6CD5\u4E2D\uFF0C\u5C06\u524D\u540E\u4E24\u68F5\u6811\u5B8C\u5168\u6BD4\u5BF9\u7684\u7B97\u6CD5\u7684\u590D\u6742\u7A0B\u5EA6\u4E3A O(n 3 )\uFF0C\u5176\u4E2D<code>n</code>\u662F\u6811\u4E2D\u5143\u7D20\u7684\u6570\u91CF\u3002</p><p>\u5982\u679C\u5728<code>React</code>\u4E2D\u4F7F\u7528\u4E86\u8BE5\u7B97\u6CD5\uFF0C\u90A3\u4E48\u5C55\u793A1000\u4E2A\u5143\u7D20\u6240\u9700\u8981\u6267\u884C\u7684\u8BA1\u7B97\u91CF\u5C06\u5728\u5341\u4EBF\u7684\u91CF\u7EA7\u8303\u56F4\u3002\u8FD9\u4E2A\u5F00\u9500\u5B9E\u5728\u662F\u592A\u8FC7\u9AD8\u6602\u3002</p><p>\u4E3A\u4E86\u964D\u4F4E\u7B97\u6CD5\u590D\u6742\u5EA6\uFF0C<code>React</code>\u7684<code>diff</code>\u4F1A\u9884\u8BBE\u4E09\u4E2A\u9650\u5236\uFF1A</p><ol><li><p>\u53EA\u5BF9\u540C\u7EA7\u5143\u7D20\u8FDB\u884C<code>Diff</code>\u3002\u5982\u679C\u4E00\u4E2A<code>DOM\u8282\u70B9</code>\u5728\u524D\u540E\u4E24\u6B21\u66F4\u65B0\u4E2D\u8DE8\u8D8A\u4E86\u5C42\u7EA7\uFF0C\u90A3\u4E48<code>React</code>\u4E0D\u4F1A\u5C1D\u8BD5\u590D\u7528\u4ED6\u3002</p></li><li><p>\u4E24\u4E2A\u4E0D\u540C\u7C7B\u578B\u7684\u5143\u7D20\u4F1A\u4EA7\u751F\u51FA\u4E0D\u540C\u7684\u6811\u3002\u5982\u679C\u5143\u7D20\u7531<code>div</code>\u53D8\u4E3A<code>p</code>\uFF0CReact\u4F1A\u9500\u6BC1<code>div</code>\u53CA\u5176\u5B50\u5B59\u8282\u70B9\uFF0C\u5E76\u65B0\u5EFA<code>p</code>\u53CA\u5176\u5B50\u5B59\u8282\u70B9\u3002</p></li><li><p>\u5F00\u53D1\u8005\u53EF\u4EE5\u901A\u8FC7 <code>key prop</code>\u6765\u6697\u793A\u54EA\u4E9B\u5B50\u5143\u7D20\u5728\u4E0D\u540C\u7684\u6E32\u67D3\u4E0B\u80FD\u4FDD\u6301\u7A33\u5B9A\u3002\u8003\u8651\u5982\u4E0B\u4F8B\u5B50\uFF1A</p></li></ol><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token comment">// \u66F4\u65B0\u524D</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ka<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">ka</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>song<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">song</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">// \u66F4\u65B0\u540E</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>song<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">song</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ka<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">ka</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u5982\u679C\u6CA1\u6709<code>key</code>\uFF0C<code>React</code>\u4F1A\u8BA4\u4E3A<code>div</code>\u7684\u7B2C\u4E00\u4E2A\u5B50\u8282\u70B9\u7531<code>p</code>\u53D8\u4E3A<code>h3</code>\uFF0C\u7B2C\u4E8C\u4E2A\u5B50\u8282\u70B9\u7531<code>h3</code>\u53D8\u4E3A<code>p</code>\u3002\u8FD9\u7B26\u5408\u9650\u52362\u7684\u8BBE\u5B9A\uFF0C\u4F1A\u9500\u6BC1\u5E76\u65B0\u5EFA\u3002</p><p>\u4F46\u662F\u5F53\u7528<code>key</code>\u6307\u660E\u4E86\u8282\u70B9\u524D\u540E\u5BF9\u5E94\u5173\u7CFB\u540E\uFF0C<code>React</code>\u77E5\u9053<code>key === &quot;ka&quot;</code>\u7684<code>p</code>\u5728\u66F4\u65B0\u540E\u8FD8\u5B58\u5728\uFF0C\u6240\u4EE5<code>DOM\u8282\u70B9</code>\u53EF\u4EE5\u590D\u7528\uFF0C\u53EA\u662F\u9700\u8981\u4EA4\u6362\u4E0B\u987A\u5E8F\u3002</p><p>\u8FD9\u5C31\u662F<code>React</code>\u4E3A\u4E86\u5E94\u5BF9\u7B97\u6CD5\u6027\u80FD\u74F6\u9888\u505A\u51FA\u7684\u4E09\u6761\u9650\u5236\u3002</p><h2 id="diff\u662F\u5982\u4F55\u5B9E\u73B0\u7684" tabindex="-1"><a class="header-anchor" href="#diff\u662F\u5982\u4F55\u5B9E\u73B0\u7684" aria-hidden="true">#</a> Diff\u662F\u5982\u4F55\u5B9E\u73B0\u7684</h2><p>\u4ECE<code>Diff</code>\u7684\u5165\u53E3\u51FD\u6570<code>reconcileChildFibers</code>\u51FA\u53D1\uFF0C\u8BE5\u51FD\u6570\u4F1A\u6839\u636E<code>newChild</code>\uFF08\u5373<code>JSX\u5BF9\u8C61</code>\uFF09\u7C7B\u578B\u8C03\u7528\u4E0D\u540C\u7684\u5904\u7406\u51FD\u6570\u3002</p>`,15),D=s("\u4F60\u53EF\u4EE5\u4ECE"),q={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactChildFiber.new.js#L1280",target:"_blank",rel:"noopener noreferrer"},E=s("\u8FD9\u91CC"),R=s("\u770B\u5230"),j=n("code",null,"reconcileChildFibers",-1),O=s("\u7684\u6E90\u7801\u3002"),M=p(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u6839\u636EnewChild\u7C7B\u578B\u9009\u62E9\u4E0D\u540Cdiff\u51FD\u6570\u5904\u7406</span>
<span class="token keyword">function</span> <span class="token function">reconcileChildFibers</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">returnFiber</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span>
  <span class="token literal-property property">currentFirstChild</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token literal-property property">newChild</span><span class="token operator">:</span> any<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>

  <span class="token keyword">const</span> isObject <span class="token operator">=</span> <span class="token keyword">typeof</span> newChild <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">&amp;&amp;</span> newChild <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>isObject<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// object\u7C7B\u578B\uFF0C\u53EF\u80FD\u662F REACT_ELEMENT_TYPE \u6216 REACT_PORTAL_TYPE</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>newChild<span class="token punctuation">.</span>$$<span class="token keyword">typeof</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">case</span> <span class="token constant">REACT_ELEMENT_TYPE</span><span class="token operator">:</span>
        <span class="token comment">// \u8C03\u7528 reconcileSingleElement \u5904\u7406</span>
      <span class="token comment">// // ...\u7701\u7565\u5176\u4ED6case</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> newChild <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span> <span class="token operator">||</span> <span class="token keyword">typeof</span> newChild <span class="token operator">===</span> <span class="token string">&#39;number&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u8C03\u7528 reconcileSingleTextNode \u5904\u7406</span>
    <span class="token comment">// ...\u7701\u7565</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isArray</span><span class="token punctuation">(</span>newChild<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u8C03\u7528 reconcileChildrenArray \u5904\u7406</span>
    <span class="token comment">// ...\u7701\u7565</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u4E00\u4E9B\u5176\u4ED6\u60C5\u51B5\u8C03\u7528\u5904\u7406\u51FD\u6570</span>
  <span class="token comment">// ...\u7701\u7565</span>

  <span class="token comment">// \u4EE5\u4E0A\u90FD\u6CA1\u6709\u547D\u4E2D\uFF0C\u5220\u9664\u8282\u70B9</span>
  <span class="token keyword">return</span> <span class="token function">deleteRemainingChildren</span><span class="token punctuation">(</span>returnFiber<span class="token punctuation">,</span> currentFirstChild<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><p>\u53EF\u4EE5\u4ECE\u540C\u7EA7\u7684\u8282\u70B9\u6570\u91CF\u5C06Diff\u5206\u4E3A\u4E24\u7C7B\uFF1A</p><ol><li><p>\u5F53<code>newChild</code>\u7C7B\u578B\u4E3A<code>object</code>\u3001<code>number</code>\u3001<code>string</code>\uFF0C\u4EE3\u8868\u540C\u7EA7\u53EA\u6709\u4E00\u4E2A\u8282\u70B9</p></li><li><p>\u5F53<code>newChild</code>\u7C7B\u578B\u4E3A<code>Array</code>\uFF0C\u540C\u7EA7\u6709\u591A\u4E2A\u8282\u70B9</p></li></ol><p>\u5728\u63A5\u4E0B\u6765\u4E24\u8282\u4F1A\u5206\u522B\u8BA8\u8BBA\u8FD9\u4E24\u7C7B\u8282\u70B9\u7684<code>Diff</code>\u3002</p>`,4);function T(A,N){const a=t("ExternalLinkIcon");return o(),c(l,null,[u,d,n("p",null,[k,n("a",b,[m,e(a)]),h]),g,f,n("blockquote",null,[n("p",null,[_,n("a",y,[w,e(a)]),C,x,v])]),F,n("blockquote",null,[n("p",null,[D,n("a",q,[E,e(a)]),R,j,O])]),M],64)}var S=r(i,[["render",T]]);export{S as default};
