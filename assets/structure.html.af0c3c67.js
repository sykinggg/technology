import{r as t,o as p,c,b as e,d as o,F as r,a as n,e as s}from"./app.b05da4ec.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const d={},i=n(`<p>\u5728\u4E0A\u4E00\u8282\u5B9E\u73B0\u4E86\u4E00\u4E2A\u6781\u7B80\u7684<code>useState</code>\uFF0C\u4E86\u89E3\u4E86<code>Hooks</code>\u7684\u8FD0\u884C\u539F\u7406\u3002</p><p>\u672C\u8282\u8BB2\u89E3<code>Hooks</code>\u7684\u6570\u636E\u7ED3\u6784\uFF0C\u4E3A\u540E\u9762\u4ECB\u7ECD\u5177\u4F53\u7684<code>hook</code>\u6253\u4E0B\u57FA\u7840\u3002</p><h2 id="dispatcher" tabindex="-1"><a class="header-anchor" href="#dispatcher" aria-hidden="true">#</a> dispatcher</h2><p>\u5728\u4E0A\u4E00\u8282\u7684\u6781\u7B80<code>useState</code>\u5B9E\u73B0\u4E2D\uFF0C\u4F7F\u7528<code>isMount</code>\u53D8\u91CF\u533A\u5206<code>mount</code>\u4E0E<code>update</code>\u3002</p><p>\u5728\u771F\u5B9E\u7684<code>Hooks</code>\u4E2D\uFF0C\u7EC4\u4EF6<code>mount</code>\u65F6\u7684<code>hook</code>\u4E0E<code>update</code>\u65F6\u7684<code>hook</code>\u6765\u6E90\u4E8E\u4E0D\u540C\u7684\u5BF9\u8C61\uFF0C\u8FD9\u7C7B\u5BF9\u8C61\u5728\u6E90\u7801\u4E2D\u88AB\u79F0\u4E3A<code>dispatcher</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// mount\u65F6\u7684Dispatcher</span>
<span class="token keyword">const</span> <span class="token literal-property property">HooksDispatcherOnMount</span><span class="token operator">:</span> Dispatcher <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">useCallback</span><span class="token operator">:</span> mountCallback<span class="token punctuation">,</span>
  <span class="token literal-property property">useContext</span><span class="token operator">:</span> readContext<span class="token punctuation">,</span>
  <span class="token literal-property property">useEffect</span><span class="token operator">:</span> mountEffect<span class="token punctuation">,</span>
  <span class="token literal-property property">useImperativeHandle</span><span class="token operator">:</span> mountImperativeHandle<span class="token punctuation">,</span>
  <span class="token literal-property property">useLayoutEffect</span><span class="token operator">:</span> mountLayoutEffect<span class="token punctuation">,</span>
  <span class="token literal-property property">useMemo</span><span class="token operator">:</span> mountMemo<span class="token punctuation">,</span>
  <span class="token literal-property property">useReducer</span><span class="token operator">:</span> mountReducer<span class="token punctuation">,</span>
  <span class="token literal-property property">useRef</span><span class="token operator">:</span> mountRef<span class="token punctuation">,</span>
  <span class="token literal-property property">useState</span><span class="token operator">:</span> mountState<span class="token punctuation">,</span>
  <span class="token comment">// ...\u7701\u7565</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// update\u65F6\u7684Dispatcher</span>
<span class="token keyword">const</span> <span class="token literal-property property">HooksDispatcherOnUpdate</span><span class="token operator">:</span> Dispatcher <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">useCallback</span><span class="token operator">:</span> updateCallback<span class="token punctuation">,</span>
  <span class="token literal-property property">useContext</span><span class="token operator">:</span> readContext<span class="token punctuation">,</span>
  <span class="token literal-property property">useEffect</span><span class="token operator">:</span> updateEffect<span class="token punctuation">,</span>
  <span class="token literal-property property">useImperativeHandle</span><span class="token operator">:</span> updateImperativeHandle<span class="token punctuation">,</span>
  <span class="token literal-property property">useLayoutEffect</span><span class="token operator">:</span> updateLayoutEffect<span class="token punctuation">,</span>
  <span class="token literal-property property">useMemo</span><span class="token operator">:</span> updateMemo<span class="token punctuation">,</span>
  <span class="token literal-property property">useReducer</span><span class="token operator">:</span> updateReducer<span class="token punctuation">,</span>
  <span class="token literal-property property">useRef</span><span class="token operator">:</span> updateRef<span class="token punctuation">,</span>
  <span class="token literal-property property">useState</span><span class="token operator">:</span> updateState<span class="token punctuation">,</span>
  <span class="token comment">// ...\u7701\u7565</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>\u53EF\u89C1\uFF0C<code>mount</code>\u65F6\u8C03\u7528\u7684<code>hook</code>\u548C<code>update</code>\u65F6\u8C03\u7528\u7684<code>hook</code>\u5176\u5B9E\u662F\u4E24\u4E2A\u4E0D\u540C\u7684\u51FD\u6570\u3002</p><p>\u5728<code>FunctionComponent</code> <code>render</code>\u524D\uFF0C\u4F1A\u6839\u636E<code>FunctionComponent</code>\u5BF9\u5E94<code>fiber</code>\u7684\u4EE5\u4E0B\u6761\u4EF6\u533A\u5206<code>mount</code>\u4E0E<code>update</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>current <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> current<span class="token punctuation">.</span>memoizedState <span class="token operator">===</span> <span class="token keyword">null</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5E76\u5C06\u4E0D\u540C\u60C5\u51B5\u5BF9\u5E94\u7684<code>dispatcher</code>\u8D4B\u503C\u7ED9\u5168\u5C40\u53D8\u91CF<code>ReactCurrentDispatcher</code>\u7684<code>current</code>\u5C5E\u6027\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>ReactCurrentDispatcher<span class="token punctuation">.</span>current <span class="token operator">=</span>
      current <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> current<span class="token punctuation">.</span>memoizedState <span class="token operator">===</span> <span class="token keyword">null</span>
        <span class="token operator">?</span> HooksDispatcherOnMount
        <span class="token operator">:</span> HooksDispatcherOnUpdate<span class="token punctuation">;</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,11),u=s("\u4F60\u53EF\u4EE5\u5728"),k={href:"https://github.com/acdlite/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberHooks.new.js#L409",target:"_blank",rel:"noopener noreferrer"},b=s("\u8FD9\u91CC"),m=s("\u770B\u5230\u8FD9\u884C\u4EE3\u7801"),h=n("<p>\u5728<code>FunctionComponent</code> <code>render</code>\u65F6\uFF0C\u4F1A\u4ECE<code>ReactCurrentDispatcher.current</code>\uFF08\u5373\u5F53\u524D<code>dispatcher</code>\uFF09\u4E2D\u5BFB\u627E\u9700\u8981\u7684<code>hook</code>\u3002</p><p>\u6362\u8A00\u4E4B\uFF0C\u4E0D\u540C\u7684\u8C03\u7528\u6808\u4E0A\u4E0B\u6587\u4E3A<code>ReactCurrentDispatcher.current</code>\u8D4B\u503C\u4E0D\u540C\u7684<code>dispatcher</code>\uFF0C\u5219<code>FunctionComponent</code> <code>render</code>\u65F6\u8C03\u7528\u7684<code>hook</code>\u4E5F\u662F\u4E0D\u540C\u7684\u51FD\u6570\u3002</p>",2),_=s("\u9664\u4E86\u8FD9\u4E24\u4E2A"),y=e("code",null,"dispatcher",-1),f=s("\uFF0C\u4F60\u53EF\u4EE5\u5728"),v={href:"https://github.com/acdlite/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberHooks.new.js#L1775",target:"_blank",rel:"noopener noreferrer"},g=s("\u8FD9\u91CC"),S=s("\u770B\u5230\u5176\u4ED6"),C=e("code",null,"dispatcher",-1),H=s("\u5B9A\u4E49"),w=n(`<h2 id="\u4E00\u4E2Adispatcher\u4F7F\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u4E00\u4E2Adispatcher\u4F7F\u7528\u573A\u666F" aria-hidden="true">#</a> \u4E00\u4E2Adispatcher\u4F7F\u7528\u573A\u666F</h2><p>\u5F53\u9519\u8BEF\u7684\u4E66\u5199\u4E86\u5D4C\u5957\u5F62\u5F0F\u7684<code>hook</code>\uFF0C\u5982\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u6B64\u65F6<code>ReactCurrentDispatcher.current</code>\u5DF2\u7ECF\u6307\u5411<code>ContextOnlyDispatcher</code>\uFF0C\u6240\u4EE5\u8C03\u7528<code>useState</code>\u5B9E\u9645\u4F1A\u8C03\u7528<code>throwInvalidHookError</code>\uFF0C\u76F4\u63A5\u629B\u51FA\u5F02\u5E38\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token literal-property property">ContextOnlyDispatcher</span><span class="token operator">:</span> Dispatcher <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">useCallback</span><span class="token operator">:</span> throwInvalidHookError<span class="token punctuation">,</span>
  <span class="token literal-property property">useContext</span><span class="token operator">:</span> throwInvalidHookError<span class="token punctuation">,</span>
  <span class="token literal-property property">useEffect</span><span class="token operator">:</span> throwInvalidHookError<span class="token punctuation">,</span>
  <span class="token literal-property property">useImperativeHandle</span><span class="token operator">:</span> throwInvalidHookError<span class="token punctuation">,</span>
  <span class="token literal-property property">useLayoutEffect</span><span class="token operator">:</span> throwInvalidHookError<span class="token punctuation">,</span>
  <span class="token comment">// ...\u7701\u7565</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,5),x=s("\u4F60\u53EF\u4EE5\u5728"),j={href:"https://github.com/acdlite/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberHooks.new.js#L458",target:"_blank",rel:"noopener noreferrer"},E=s("\u8FD9\u91CC"),R=s("\u770B\u5230\u8FD9\u6BB5\u903B\u8F91"),z=n(`<h2 id="hook\u7684\u6570\u636E\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#hook\u7684\u6570\u636E\u7ED3\u6784" aria-hidden="true">#</a> Hook\u7684\u6570\u636E\u7ED3\u6784</h2><p>\u63A5\u4E0B\u6765\u5B66\u4E60<code>hook</code>\u7684\u6570\u636E\u7ED3\u6784\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token literal-property property">hook</span><span class="token operator">:</span> Hook <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">memoizedState</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>

  <span class="token literal-property property">baseState</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token literal-property property">baseQueue</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token literal-property property">queue</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>

  <span class="token literal-property property">next</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,3),D=s("\u4F60\u53EF\u4EE5\u5728"),F={href:"https://github.com/acdlite/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberHooks.new.js#L546",target:"_blank",rel:"noopener noreferrer"},I=s("\u8FD9\u91CC"),L=s("\u770B\u5230\u521B\u5EFA"),M=e("code",null,"hook",-1),q=s("\u7684\u903B\u8F91"),O=s("\u5176\u4E2D\u9664"),A=e("code",null,"memoizedState",-1),N=s("\u4EE5\u5916\u5B57\u6BB5\u7684\u610F\u4E49\u4E0E\u4E0A\u4E00\u7AE0\u4ECB\u7ECD\u7684"),V={href:"/react/state/update.md#updatequeue",target:"_blank",rel:"noopener noreferrer"},B=s("updateQueue"),Q=s("\u7C7B\u4F3C\u3002"),U=n('<h2 id="memoizedstate" tabindex="-1"><a class="header-anchor" href="#memoizedstate" aria-hidden="true">#</a> memoizedState</h2><p>warning \u6CE8\u610F <code>hook</code>\u4E0E<code>FunctionComponent fiber</code>\u90FD\u5B58\u5728<code>memoizedState</code>\u5C5E\u6027\uFF0C\u4E0D\u8981\u6DF7\u6DC6\u4ED6\u4EEC\u7684\u6982\u5FF5\u3002</p><ul><li><p><code>fiber.memoizedState</code>\uFF1A<code>FunctionComponent</code>\u5BF9\u5E94<code>fiber</code>\u4FDD\u5B58\u7684<code>Hooks</code>\u94FE\u8868\u3002</p></li><li><p><code>hook.memoizedState</code>\uFF1A<code>Hooks</code>\u94FE\u8868\u4E2D\u4FDD\u5B58\u7684\u5355\u4E00<code>hook</code>\u5BF9\u5E94\u7684\u6570\u636E\u3002</p></li></ul><p>\u4E0D\u540C\u7C7B\u578B<code>hook</code>\u7684<code>memoizedState</code>\u4FDD\u5B58\u4E0D\u540C\u7C7B\u578B\u6570\u636E\uFF0C\u5177\u4F53\u5982\u4E0B\uFF1A</p>',4),T=n("<li><p>useState\uFF1A\u5BF9\u4E8E<code>const [state, updateState] = useState(initialState)</code>\uFF0C<code>memoizedState</code>\u4FDD\u5B58<code>state</code>\u7684\u503C</p></li><li><p>useReducer\uFF1A\u5BF9\u4E8E<code>const [state, dispatch] = useReducer(reducer, {});</code>\uFF0C<code>memoizedState</code>\u4FDD\u5B58<code>state</code>\u7684\u503C</p></li>",2),G=s("useEffect\uFF1A"),J=e("code",null,"memoizedState",-1),K=s("\u4FDD\u5B58\u5305\u542B"),P=e("code",null,"useEffect\u56DE\u8C03\u51FD\u6570",-1),W=s("\u3001"),X=e("code",null,"\u4F9D\u8D56\u9879",-1),Y=s("\u7B49\u7684\u94FE\u8868\u6570\u636E\u7ED3\u6784"),Z=e("code",null,"effect",-1),$=s("\uFF0C\u4F60\u53EF\u4EE5\u5728"),ee={href:"https://github.com/acdlite/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberHooks.new.js#L1181",target:"_blank",rel:"noopener noreferrer"},se=s("\u8FD9\u91CC"),ne=s("\u770B\u5230"),ae=e("code",null,"effect",-1),oe=s("\u7684\u521B\u5EFA\u8FC7\u7A0B\u3002"),te=e("code",null,"effect",-1),pe=s("\u94FE\u8868\u540C\u65F6\u4F1A\u4FDD\u5B58\u5728"),ce=e("code",null,"fiber.updateQueue",-1),re=s("\u4E2D"),le=n("<li><p>useRef\uFF1A\u5BF9\u4E8E<code>useRef(1)</code>\uFF0C<code>memoizedState</code>\u4FDD\u5B58<code>{current: 1}</code></p></li><li><p>useMemo\uFF1A\u5BF9\u4E8E<code>useMemo(callback, [depA])</code>\uFF0C<code>memoizedState</code>\u4FDD\u5B58<code>[callback(), depA]</code></p></li><li><p>useCallback\uFF1A\u5BF9\u4E8E<code>useCallback(callback, [depA])</code>\uFF0C<code>memoizedState</code>\u4FDD\u5B58<code>[callback, depA]</code>\u3002\u4E0E<code>useMemo</code>\u7684\u533A\u522B\u662F\uFF0C<code>useCallback</code>\u4FDD\u5B58\u7684\u662F<code>callback</code>\u51FD\u6570\u672C\u8EAB\uFF0C\u800C<code>useMemo</code>\u4FDD\u5B58\u7684\u662F<code>callback</code>\u51FD\u6570\u7684\u6267\u884C\u7ED3\u679C</p></li>",3),de=e("p",null,[s("\u6709\u4E9B"),e("code",null,"hook"),s("\u662F\u6CA1\u6709"),e("code",null,"memoizedState"),s("\u7684\uFF0C\u6BD4\u5982\uFF1A")],-1),ie=e("ul",null,[e("li",null,"useContext")],-1);function ue(ke,be){const a=t("ExternalLinkIcon");return p(),c(r,null,[i,e("blockquote",null,[e("p",null,[u,e("a",k,[b,o(a)]),m])]),h,e("blockquote",null,[e("p",null,[_,y,f,e("a",v,[g,o(a)]),S,C,H])]),w,e("blockquote",null,[e("p",null,[x,e("a",j,[E,o(a)]),R])]),z,e("blockquote",null,[e("p",null,[D,e("a",F,[I,o(a)]),L,M,q])]),e("p",null,[O,A,N,e("a",V,[B,o(a)]),Q]),U,e("ul",null,[T,e("li",null,[e("p",null,[G,J,K,P,W,X,Y,Z,$,e("a",ee,[se,o(a)]),ne,ae,oe,te,pe,ce,re])]),le]),de,ie],64)}var _e=l(d,[["render",ue]]);export{_e as default};
