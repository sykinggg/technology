import{r as t,o as c,c as o,b as n,d as l,F as r,e as s,a}from"./app.ee3fc36b.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const i={},k=n("p",null,[s("\u5BF9\u4E8E\u5355\u4E2A\u8282\u70B9\uFF0C\u4EE5\u7C7B\u578B"),n("code",null,"object"),s("\u4E3A\u4F8B\uFF0C\u4F1A\u8FDB\u5165"),n("code",null,"reconcileSingleElement")],-1),d=s("\u4F60\u53EF\u4EE5\u4ECE"),b={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactChildFiber.new.js#L1141",target:"_blank",rel:"noopener noreferrer"},m=s("\u8FD9\u91CC"),g=s("\u770B\u5230"),y=n("code",null,"reconcileSingleElement",-1),h=s("\u6E90\u7801"),v=a(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token keyword">const</span> isObject <span class="token operator">=</span> <span class="token keyword">typeof</span> newChild <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">&amp;&amp;</span> newChild <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>isObject<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5BF9\u8C61\u7C7B\u578B\uFF0C\u53EF\u80FD\u662F REACT_ELEMENT_TYPE \u6216 REACT_PORTAL_TYPE</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>newChild<span class="token punctuation">.</span>$$<span class="token keyword">typeof</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">case</span> <span class="token constant">REACT_ELEMENT_TYPE</span><span class="token operator">:</span>
        <span class="token comment">// \u8C03\u7528 reconcileSingleElement \u5904\u7406</span>
      <span class="token comment">// ...\u5176\u4ED6case</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u8FD9\u4E2A\u51FD\u6570\u4F1A\u505A\u5982\u4E0B\u4E8B\u60C5\uFF1A</p>`,2),f=["src"],_=a(`<p>\u8BA9\u770B\u770B\u7B2C\u4E8C\u6B65<strong>\u5224\u65ADDOM\u8282\u70B9\u662F\u5426\u53EF\u4EE5\u590D\u7528</strong>\u662F\u5982\u4F55\u5B9E\u73B0\u7684\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">reconcileSingleElement</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">returnFiber</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span>
  <span class="token literal-property property">currentFirstChild</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token literal-property property">element</span><span class="token operator">:</span> ReactElement</span>
<span class="token punctuation">)</span><span class="token operator">:</span> Fiber <span class="token punctuation">{</span>
  <span class="token keyword">const</span> key <span class="token operator">=</span> element<span class="token punctuation">.</span>key<span class="token punctuation">;</span>
  <span class="token keyword">let</span> child <span class="token operator">=</span> currentFirstChild<span class="token punctuation">;</span>
  
  <span class="token comment">// \u9996\u5148\u5224\u65AD\u662F\u5426\u5B58\u5728\u5BF9\u5E94DOM\u8282\u70B9</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>child <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u4E0A\u4E00\u6B21\u66F4\u65B0\u5B58\u5728DOM\u8282\u70B9\uFF0C\u63A5\u4E0B\u6765\u5224\u65AD\u662F\u5426\u53EF\u590D\u7528</span>

    <span class="token comment">// \u9996\u5148\u6BD4\u8F83key\u662F\u5426\u76F8\u540C</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>child<span class="token punctuation">.</span>key <span class="token operator">===</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>

      <span class="token comment">// key\u76F8\u540C\uFF0C\u63A5\u4E0B\u6765\u6BD4\u8F83type\u662F\u5426\u76F8\u540C</span>

      <span class="token keyword">switch</span> <span class="token punctuation">(</span>child<span class="token punctuation">.</span>tag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// ...\u7701\u7565case</span>
        
        <span class="token keyword">default</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>child<span class="token punctuation">.</span>elementType <span class="token operator">===</span> element<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// type\u76F8\u540C\u5219\u8868\u793A\u53EF\u4EE5\u590D\u7528</span>
            <span class="token comment">// \u8FD4\u56DE\u590D\u7528\u7684fiber</span>
            <span class="token keyword">return</span> existing<span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
          
          <span class="token comment">// type\u4E0D\u540C\u5219\u8DF3\u51FAswitch</span>
          <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// \u4EE3\u7801\u6267\u884C\u5230\u8FD9\u91CC\u4EE3\u8868\uFF1Akey\u76F8\u540C\u4F46\u662Ftype\u4E0D\u540C</span>
      <span class="token comment">// \u5C06\u8BE5fiber\u53CA\u5176\u5144\u5F1Ffiber\u6807\u8BB0\u4E3A\u5220\u9664</span>
      <span class="token function">deleteRemainingChildren</span><span class="token punctuation">(</span>returnFiber<span class="token punctuation">,</span> child<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// key\u4E0D\u540C\uFF0C\u5C06\u8BE5fiber\u6807\u8BB0\u4E3A\u5220\u9664</span>
      <span class="token function">deleteChild</span><span class="token punctuation">(</span>returnFiber<span class="token punctuation">,</span> child<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    child <span class="token operator">=</span> child<span class="token punctuation">.</span>sibling<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u521B\u5EFA\u65B0Fiber\uFF0C\u5E76\u8FD4\u56DE ...\u7701\u7565</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><p>\u8FD8\u8BB0\u5F97\u521A\u624D\u63D0\u5230\u7684\uFF0CReact\u9884\u8BBE\u7684\u9650\u5236\u4E48\uFF0C</p><p>\u4ECE\u4EE3\u7801\u53EF\u4EE5\u770B\u51FA\uFF0CReact\u901A\u8FC7\u5148\u5224\u65AD<code>key</code>\u662F\u5426\u76F8\u540C\uFF0C\u5982\u679C<code>key</code>\u76F8\u540C\u5219\u5224\u65AD<code>type</code>\u662F\u5426\u76F8\u540C\uFF0C\u53EA\u6709\u90FD\u76F8\u540C\u65F6\u4E00\u4E2A<code>DOM\u8282\u70B9</code>\u624D\u80FD\u590D\u7528\u3002</p><p>\u8FD9\u91CC\u6709\u4E2A\u7EC6\u8282\u9700\u8981\u5173\u6CE8\u4E0B\uFF1A</p><ul><li><p>\u5F53<code>child !== null</code>\u4E14<code>key\u76F8\u540C</code>\u4E14<code>type\u4E0D\u540C</code>\u65F6\u6267\u884C<code>deleteRemainingChildren</code>\u5C06<code>child</code>\u53CA\u5176\u5144\u5F1F<code>fiber</code>\u90FD\u6807\u8BB0\u5220\u9664\u3002</p></li><li><p>\u5F53<code>child !== null</code>\u4E14<code>key\u4E0D\u540C</code>\u65F6\u4EC5\u5C06<code>child</code>\u6807\u8BB0\u5220\u9664\u3002</p></li></ul><p>\u8003\u8651\u5982\u4E0B\u4F8B\u5B50\uFF1A</p><p>\u5F53\u524D\u9875\u9762\u67093\u4E2A<code>li</code>\uFF0C\u8981\u5168\u90E8\u5220\u9664\uFF0C\u518D\u63D2\u5165\u4E00\u4E2A<code>p</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5F53\u524D\u9875\u9762\u663E\u793A\u7684</span>
ul <span class="token operator">&gt;</span> li <span class="token operator">*</span> <span class="token number">3</span>

<span class="token comment">// \u8FD9\u6B21\u9700\u8981\u66F4\u65B0\u7684</span>
ul <span class="token operator">&gt;</span> p
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u7531\u4E8E\u672C\u6B21\u66F4\u65B0\u65F6\u53EA\u6709\u4E00\u4E2A<code>p</code>\uFF0C\u5C5E\u4E8E\u5355\u4E00\u8282\u70B9\u7684<code>Diff</code>\uFF0C\u4F1A\u8D70\u4E0A\u9762\u4ECB\u7ECD\u7684\u4EE3\u7801\u903B\u8F91\u3002</p><p>\u5728<code>reconcileSingleElement</code>\u4E2D\u904D\u5386\u4E4B\u524D\u76843\u4E2A<code>fiber</code>\uFF08\u5BF9\u5E94\u7684<code>DOM</code>\u4E3A3\u4E2A<code>li</code>\uFF09\uFF0C\u5BFB\u627E\u672C\u6B21\u66F4\u65B0\u7684<code>p</code>\u662F\u5426\u53EF\u4EE5\u590D\u7528\u4E4B\u524D\u76843\u4E2A<code>fiber</code>\u4E2D\u67D0\u4E2A\u7684<code>DOM</code>\u3002</p><p>\u5F53<code>key\u76F8\u540C</code>\u4E14<code>type\u4E0D\u540C</code>\u65F6\uFF0C\u4EE3\u8868\u5DF2\u7ECF\u627E\u5230\u672C\u6B21\u66F4\u65B0\u7684<code>p</code>\u5BF9\u5E94\u7684\u4E0A\u6B21\u7684<code>fiber</code>\uFF0C\u4F46\u662F<code>p</code>\u4E0E<code>li</code> <code>type</code>\u4E0D\u540C\uFF0C\u4E0D\u80FD\u590D\u7528\u3002\u65E2\u7136\u552F\u4E00\u7684\u53EF\u80FD\u6027\u5DF2\u7ECF\u4E0D\u80FD\u590D\u7528\uFF0C\u5219\u5269\u4E0B\u7684<code>fiber</code>\u90FD\u6CA1\u6709\u673A\u4F1A\u4E86\uFF0C\u6240\u4EE5\u90FD\u9700\u8981\u6807\u8BB0\u5220\u9664\u3002</p><p>\u5F53<code>key\u4E0D\u540C</code>\u65F6\u53EA\u4EE3\u8868\u904D\u5386\u5230\u7684\u8BE5<code>fiber</code>\u4E0D\u80FD\u88AB<code>p</code>\u590D\u7528\uFF0C\u540E\u9762\u8FD8\u6709\u5144\u5F1F<code>fiber</code>\u8FD8\u6CA1\u6709\u904D\u5386\u5230\u3002\u6240\u4EE5\u4EC5\u4EC5\u6807\u8BB0\u8BE5<code>fiber</code>\u5220\u9664\u3002</p><h2 id="\u7EC3\u4E60\u9898" tabindex="-1"><a class="header-anchor" href="#\u7EC3\u4E60\u9898" aria-hidden="true">#</a> \u7EC3\u4E60\u9898</h2><p>\u8BA9\u6765\u505A\u51E0\u9053\u4E60\u9898\u5DE9\u56FA\u4E0B\u5427\uFF1A</p><p>\u8BF7\u5224\u65AD\u5982\u4E0B<code>JSX\u5BF9\u8C61</code>\u5BF9\u5E94\u7684<code>DOM</code>\u5143\u7D20\u662F\u5426\u53EF\u4EE5\u590D\u7528\uFF1A</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token comment">// \u4E60\u98981 \u66F4\u65B0\u524D</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">ka song</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">// \u66F4\u65B0\u540E</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">ka song</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">// \u4E60\u98982 \u66F4\u65B0\u524D</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xxx<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">ka song</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">// \u66F4\u65B0\u540E</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ooo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">ka song</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">// \u4E60\u98983 \u66F4\u65B0\u524D</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xxx<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">ka song</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">// \u66F4\u65B0\u540E</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ooo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">ka song</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">// \u4E60\u98984 \u66F4\u65B0\u524D</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xxx<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">ka song</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">// \u66F4\u65B0\u540E</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xxx<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">xiao bei</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>\u3002</p><p>\u3002</p><p>\u3002</p><p>\u3002</p><p>\u516C\u5E03\u7B54\u6848\uFF1A</p><p>\u4E60\u98981: \u672A\u8BBE\u7F6E<code>key prop</code>\u9ED8\u8BA4 <code>key = null;</code>\uFF0C\u6240\u4EE5\u66F4\u65B0\u524D\u540Ekey\u76F8\u540C\uFF0C\u90FD\u4E3A<code>null</code>\uFF0C\u4F46\u662F\u66F4\u65B0\u524D<code>type</code>\u4E3A<code>div</code>\uFF0C\u66F4\u65B0\u540E\u4E3A<code>p</code>\uFF0C<code>type</code>\u6539\u53D8\u5219\u4E0D\u80FD\u590D\u7528\u3002</p><p>\u4E60\u98982: \u66F4\u65B0\u524D\u540E<code>key</code>\u6539\u53D8\uFF0C\u4E0D\u9700\u8981\u518D\u5224\u65AD<code>type</code>\uFF0C\u4E0D\u80FD\u590D\u7528\u3002</p><p>\u4E60\u98983: \u66F4\u65B0\u524D\u540E<code>key</code>\u6539\u53D8\uFF0C\u4E0D\u9700\u8981\u518D\u5224\u65AD<code>type</code>\uFF0C\u4E0D\u80FD\u590D\u7528\u3002</p><p>\u4E60\u98984: \u66F4\u65B0\u524D\u540E<code>key</code>\u4E0E<code>type</code>\u90FD\u672A\u6539\u53D8\uFF0C\u53EF\u4EE5\u590D\u7528\u3002<code>children</code>\u53D8\u5316\uFF0C<code>DOM</code>\u7684\u5B50\u5143\u7D20\u9700\u8981\u66F4\u65B0\u3002</p><p>\u4F60\u662F\u4E0D\u662F\u90FD\u7B54\u5BF9\u4E86\u5462\u3002</p>`,27);function x(e,w){const p=t("ExternalLinkIcon");return c(),o(r,null,[k,n("blockquote",null,[n("p",null,[d,n("a",b,[m,l(p)]),g,y,h])]),v,n("img",{src:e.$withBase("/assets/react/diff.png"),alt:"diff"},null,8,f),_],64)}var j=u(i,[["render",x]]);export{j as default};