import{r as e,o,c as t,b as n,d as r,F as c,e as s,a as l}from"./app.ee3fc36b.js";import{_ as k}from"./plugin-vue_export-helper.21dcd24c.js";const i={},u=n("h1",{id:"virtual-dom",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#virtual-dom","aria-hidden":"true"},"#"),s(" Virtual DOM")],-1),d=n("p",null,'Virtual DOM \u8FD9\u4E2A\u6982\u5FF5\u76F8\u4FE1\u5927\u90E8\u5206\u4EBA\u90FD\u4E0D\u4F1A\u964C\u751F\uFF0C\u5B83\u4EA7\u751F\u7684\u524D\u63D0\u662F\u6D4F\u89C8\u5668\u4E2D\u7684 DOM \u662F\u5F88\u201C\u6602\u8D35"\u7684\uFF0C\u4E3A\u4E86\u66F4\u76F4\u89C2\u7684\u611F\u53D7\uFF0C\u53EF\u4EE5\u7B80\u5355\u7684\u628A\u4E00\u4E2A\u7B80\u5355\u7684 div \u5143\u7D20\u7684\u5C5E\u6027\u90FD\u6253\u5370\u51FA\u6765\uFF0C\u5982\u56FE\u6240\u793A\uFF1A',-1),b=["src"],m=l(`<p>\u53EF\u4EE5\u770B\u5230\uFF0C\u771F\u6B63\u7684 DOM \u5143\u7D20\u662F\u975E\u5E38\u5E9E\u5927\u7684\uFF0C\u56E0\u4E3A\u6D4F\u89C8\u5668\u7684\u6807\u51C6\u5C31\u628A DOM \u8BBE\u8BA1\u7684\u975E\u5E38\u590D\u6742\u3002\u5F53\u9891\u7E41\u7684\u53BB\u505A DOM \u66F4\u65B0\uFF0C\u4F1A\u4EA7\u751F\u4E00\u5B9A\u7684\u6027\u80FD\u95EE\u9898\u3002</p><p>\u800C Virtual DOM \u5C31\u662F\u7528\u4E00\u4E2A\u539F\u751F\u7684 JS \u5BF9\u8C61\u53BB\u63CF\u8FF0\u4E00\u4E2A DOM \u8282\u70B9\uFF0C\u6240\u4EE5\u5B83\u6BD4\u521B\u5EFA\u4E00\u4E2A DOM \u7684\u4EE3\u4EF7\u8981\u5C0F\u5F88\u591A\u3002\u5728 Vue.js \u4E2D\uFF0CVirtual DOM \u662F\u7528 <code>VNode</code> \u8FD9\u4E48\u4E00\u4E2A Class \u53BB\u63CF\u8FF0\uFF0C\u5B83\u662F\u5B9A\u4E49\u5728 <code>src/core/vdom/vnode.js</code> \u4E2D\u7684\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">VNode</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">tag</span><span class="token operator">:</span> string <span class="token operator">|</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> VNodeData <span class="token operator">|</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token operator">?</span>Array<span class="token operator">&lt;</span>VNode<span class="token operator">&gt;</span><span class="token punctuation">;</span>
  <span class="token literal-property property">text</span><span class="token operator">:</span> string <span class="token operator">|</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token literal-property property">elm</span><span class="token operator">:</span> Node <span class="token operator">|</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token literal-property property">ns</span><span class="token operator">:</span> string <span class="token operator">|</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token literal-property property">context</span><span class="token operator">:</span> Component <span class="token operator">|</span> <span class="token keyword">void</span><span class="token punctuation">;</span> <span class="token comment">// rendered in this component&#39;s scope</span>
  <span class="token literal-property property">key</span><span class="token operator">:</span> string <span class="token operator">|</span> number <span class="token operator">|</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token literal-property property">componentOptions</span><span class="token operator">:</span> VNodeComponentOptions <span class="token operator">|</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token literal-property property">componentInstance</span><span class="token operator">:</span> Component <span class="token operator">|</span> <span class="token keyword">void</span><span class="token punctuation">;</span> <span class="token comment">// component instance</span>
  <span class="token literal-property property">parent</span><span class="token operator">:</span> VNode <span class="token operator">|</span> <span class="token keyword">void</span><span class="token punctuation">;</span> <span class="token comment">// component placeholder node</span>

  <span class="token comment">// strictly internal</span>
  <span class="token literal-property property">raw</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span> <span class="token comment">// contains raw HTML? (server only)</span>
  <span class="token literal-property property">isStatic</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span> <span class="token comment">// hoisted static node</span>
  <span class="token literal-property property">isRootInsert</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span> <span class="token comment">// necessary for enter transition check</span>
  <span class="token literal-property property">isComment</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span> <span class="token comment">// empty comment placeholder?</span>
  <span class="token literal-property property">isCloned</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span> <span class="token comment">// is a cloned node?</span>
  <span class="token literal-property property">isOnce</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span> <span class="token comment">// is a v-once node?</span>
  <span class="token literal-property property">asyncFactory</span><span class="token operator">:</span> Function <span class="token operator">|</span> <span class="token keyword">void</span><span class="token punctuation">;</span> <span class="token comment">// async component factory function</span>
  <span class="token literal-property property">asyncMeta</span><span class="token operator">:</span> Object <span class="token operator">|</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token literal-property property">isAsyncPlaceholder</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
  <span class="token literal-property property">ssrContext</span><span class="token operator">:</span> Object <span class="token operator">|</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token literal-property property">fnContext</span><span class="token operator">:</span> Component <span class="token operator">|</span> <span class="token keyword">void</span><span class="token punctuation">;</span> <span class="token comment">// real context vm for functional nodes</span>
  <span class="token literal-property property">fnOptions</span><span class="token operator">:</span> <span class="token operator">?</span>ComponentOptions<span class="token punctuation">;</span> <span class="token comment">// for SSR caching</span>
  <span class="token literal-property property">fnScopeId</span><span class="token operator">:</span> <span class="token operator">?</span>string<span class="token punctuation">;</span> <span class="token comment">// functional scope id support</span>

  <span class="token function">constructor</span> <span class="token punctuation">(</span>
    <span class="token parameter">tag<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
    data<span class="token operator">?</span><span class="token operator">:</span> VNodeData<span class="token punctuation">,</span>
    children<span class="token operator">?</span><span class="token operator">:</span> <span class="token operator">?</span>Array<span class="token operator">&lt;</span>VNode<span class="token operator">&gt;</span><span class="token punctuation">,</span>
    text<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
    elm<span class="token operator">?</span><span class="token operator">:</span> Node<span class="token punctuation">,</span>
    context<span class="token operator">?</span><span class="token operator">:</span> Component<span class="token punctuation">,</span>
    componentOptions<span class="token operator">?</span><span class="token operator">:</span> VNodeComponentOptions<span class="token punctuation">,</span>
    asyncFactory<span class="token operator">?</span><span class="token operator">:</span> Function</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>tag <span class="token operator">=</span> tag
    <span class="token keyword">this</span><span class="token punctuation">.</span>data <span class="token operator">=</span> data
    <span class="token keyword">this</span><span class="token punctuation">.</span>children <span class="token operator">=</span> children
    <span class="token keyword">this</span><span class="token punctuation">.</span>text <span class="token operator">=</span> text
    <span class="token keyword">this</span><span class="token punctuation">.</span>elm <span class="token operator">=</span> elm
    <span class="token keyword">this</span><span class="token punctuation">.</span>ns <span class="token operator">=</span> <span class="token keyword">undefined</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>context <span class="token operator">=</span> context
    <span class="token keyword">this</span><span class="token punctuation">.</span>fnContext <span class="token operator">=</span> <span class="token keyword">undefined</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>fnOptions <span class="token operator">=</span> <span class="token keyword">undefined</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>fnScopeId <span class="token operator">=</span> <span class="token keyword">undefined</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>key <span class="token operator">=</span> data <span class="token operator">&amp;&amp;</span> data<span class="token punctuation">.</span>key
    <span class="token keyword">this</span><span class="token punctuation">.</span>componentOptions <span class="token operator">=</span> componentOptions
    <span class="token keyword">this</span><span class="token punctuation">.</span>componentInstance <span class="token operator">=</span> <span class="token keyword">undefined</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>parent <span class="token operator">=</span> <span class="token keyword">undefined</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>raw <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>isStatic <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>isRootInsert <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>isComment <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>isCloned <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>isOnce <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>asyncFactory <span class="token operator">=</span> asyncFactory
    <span class="token keyword">this</span><span class="token punctuation">.</span>asyncMeta <span class="token operator">=</span> <span class="token keyword">undefined</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>isAsyncPlaceholder <span class="token operator">=</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// DEPRECATED: alias for componentInstance for backwards compat.</span>
  <span class="token comment">/* istanbul ignore next */</span>
  <span class="token keyword">get</span> <span class="token function">child</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Component <span class="token operator">|</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>componentInstance
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br></div></div>`,3),y=s("\u53EF\u4EE5\u770B\u5230 Vue.js \u4E2D\u7684 Virtual DOM \u7684\u5B9A\u4E49\u8FD8\u662F\u7565\u5FAE\u590D\u6742\u4E00\u4E9B\u7684\uFF0C\u56E0\u4E3A\u5B83\u8FD9\u91CC\u5305\u542B\u4E86\u5F88\u591A Vue.js \u7684\u7279\u6027\u3002\u8FD9\u91CC\u5343\u4E07\u4E0D\u8981\u88AB\u8FD9\u4E9B\u832B\u832B\u591A\u7684\u5C5E\u6027\u5413\u5230\uFF0C\u5B9E\u9645\u4E0A Vue.js \u4E2D Virtual DOM \u662F\u501F\u9274\u4E86\u4E00\u4E2A\u5F00\u6E90\u5E93 "),h={href:"https://github.com/snabbdom/snabbdom",target:"_blank",rel:"noopener noreferrer"},w=s("snabbdom"),f=s(" \u7684\u5B9E\u73B0\uFF0C\u7136\u540E\u52A0\u5165\u4E86\u4E00\u4E9B Vue.js \u7279\u8272\u7684\u4E1C\u897F\u3002\u5EFA\u8BAE\u5927\u5BB6\u5982\u679C\u60F3\u6DF1\u5165\u4E86\u89E3 Vue.js \u7684 Virtual DOM \u524D\u4E0D\u59A8\u5148\u9605\u8BFB\u8FD9\u4E2A\u5E93\u7684\u6E90\u7801\uFF0C\u56E0\u4E3A\u5B83\u66F4\u52A0\u7B80\u5355\u548C\u7EAF\u7CB9\u3002"),_=n("h2",{id:"\u603B\u7ED3",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u603B\u7ED3","aria-hidden":"true"},"#"),s(" \u603B\u7ED3")],-1),v=n("p",null,"\u5176\u5B9E VNode \u662F\u5BF9\u771F\u5B9E DOM \u7684\u4E00\u79CD\u62BD\u8C61\u63CF\u8FF0\uFF0C\u5B83\u7684\u6838\u5FC3\u5B9A\u4E49\u65E0\u975E\u5C31\u51E0\u4E2A\u5173\u952E\u5C5E\u6027\uFF0C\u6807\u7B7E\u540D\u3001\u6570\u636E\u3001\u5B50\u8282\u70B9\u3001\u952E\u503C\u7B49\uFF0C\u5176\u5B83\u5C5E\u6027\u90FD\u662F\u7528\u6765\u6269\u5C55 VNode \u7684\u7075\u6D3B\u6027\u4EE5\u53CA\u5B9E\u73B0\u4E00\u4E9B\u7279\u6B8A feature \u7684\u3002\u7531\u4E8E VNode \u53EA\u662F\u7528\u6765\u6620\u5C04\u5230\u771F\u5B9E DOM \u7684\u6E32\u67D3\uFF0C\u4E0D\u9700\u8981\u5305\u542B\u64CD\u4F5C DOM \u7684\u65B9\u6CD5\uFF0C\u56E0\u6B64\u5B83\u662F\u975E\u5E38\u8F7B\u91CF\u548C\u7B80\u5355\u7684\u3002",-1),V=n("p",null,[s("Virtual DOM \u9664\u4E86\u5B83\u7684\u6570\u636E\u7ED3\u6784\u7684\u5B9A\u4E49\uFF0C\u6620\u5C04\u5230\u771F\u5B9E\u7684 DOM \u5B9E\u9645\u4E0A\u8981\u7ECF\u5386 VNode \u7684 create\u3001diff\u3001patch \u7B49\u8FC7\u7A0B\u3002\u90A3\u4E48\u5728 Vue.js \u4E2D\uFF0CVNode \u7684 create \u662F\u901A\u8FC7\u4E4B\u524D\u63D0\u5230\u7684 "),n("code",null,"createElement"),s(" \u65B9\u6CD5\u521B\u5EFA\u7684\uFF0C\u63A5\u4E0B\u6765\u5206\u6790\u8FD9\u90E8\u5206\u7684\u5B9E\u73B0\u3002")],-1);function O(a,g){const p=e("ExternalLinkIcon");return o(),t(c,null,[u,d,n("img",{src:a.$withBase("/assets/vue/dom.png"),alt:"demo"},null,8,b),m,n("p",null,[y,n("a",h,[w,r(p)]),f]),_,v,V],64)}var M=k(i,[["render",O]]);export{M as default};
