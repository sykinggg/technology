import{r as t,o,c,b as s,d as e,F as l,e as n,a as p}from"./app.ba47fc91.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const r={},i=n("\u5728"),k={href:"/react/renderer/prepare.md",target:"_blank",rel:"noopener noreferrer"},d=n("\u67B6\u6784\u7BC7commit\u9636\u6BB5\u6D41\u7A0B\u6982\u89C8"),f=n("\u8BB2\u89E3\u4E86"),b=s("code",null,"useEffect",-1),m=n("\u7684\u5DE5\u4F5C\u6D41\u7A0B\u3002"),h=p('<p>\u5176\u4E2D\u8C08\u5230</p><blockquote><p>\u5728<code>flushPassiveEffects</code>\u65B9\u6CD5\u5185\u90E8\u4F1A\u4ECE\u5168\u5C40\u53D8\u91CF<code>rootWithPendingPassiveEffects</code>\u83B7\u53D6<code>effectList</code>\u3002</p></blockquote><p>\u672C\u8282\u6DF1\u5165<code>flushPassiveEffects</code>\u65B9\u6CD5\u5185\u90E8\u63A2\u7D22<code>useEffect</code>\u7684\u5DE5\u4F5C\u539F\u7406\u3002</p><h2 id="flushpassiveeffectsimpl" tabindex="-1"><a class="header-anchor" href="#flushpassiveeffectsimpl" aria-hidden="true">#</a> flushPassiveEffectsImpl</h2><p><code>flushPassiveEffects</code>\u5185\u90E8\u4F1A\u8BBE\u7F6E<code>\u4F18\u5148\u7EA7</code>\uFF0C\u5E76\u6267\u884C<code>flushPassiveEffectsImpl</code>\u3002</p>',5),_=n("\u4F60\u53EF\u4EE5\u4ECE"),E={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberWorkLoop.old.js#L2458",target:"_blank",rel:"noopener noreferrer"},y=n("\u8FD9\u91CC"),v=n("\u770B\u5230"),g=s("code",null,"flushPassiveEffects",-1),w=n("\u7684\u4EE3\u7801"),P=p("<p><code>flushPassiveEffectsImpl</code>\u4E3B\u8981\u505A\u4E09\u4EF6\u4E8B\uFF1A</p><ul><li><p>\u8C03\u7528\u8BE5<code>useEffect</code>\u5728\u4E0A\u4E00\u6B21<code>render</code>\u65F6\u7684\u9500\u6BC1\u51FD\u6570</p></li><li><p>\u8C03\u7528\u8BE5<code>useEffect</code>\u5728\u672C\u6B21<code>render</code>\u65F6\u7684\u56DE\u8C03\u51FD\u6570</p></li><li><p>\u5982\u679C\u5B58\u5728\u540C\u6B65\u4EFB\u52A1\uFF0C\u4E0D\u9700\u8981\u7B49\u5F85\u4E0B\u6B21<code>\u4E8B\u4EF6\u5FAA\u73AF</code>\u7684<code>\u5B8F\u4EFB\u52A1</code>\uFF0C\u63D0\u524D\u6267\u884C\u4ED6</p></li></ul><p>\u672C\u8282\u5173\u6CE8\u524D\u4E24\u6B65\u3002</p>",3),H=n("\u5728"),x=s("code",null,"v16",-1),j=n("\u4E2D\u7B2C\u4E00\u6B65\u662F\u540C\u6B65\u6267\u884C\u7684\uFF0C\u5728"),q={href:"https://zh-hans.reactjs.org/blog/2020/08/10/react-v17-rc.html#effect-cleanup-timing",target:"_blank",rel:"noopener noreferrer"},F=n("\u5B98\u65B9\u535A\u5BA2"),L=n("\u4E2D\u63D0\u5230\uFF1A"),U=p(`<blockquote><p>\u526F\u4F5C\u7528\u6E05\u7406\u51FD\u6570\uFF08\u5982\u679C\u5B58\u5728\uFF09\u5728 React 16 \u4E2D\u540C\u6B65\u8FD0\u884C\u3002\u53D1\u73B0\uFF0C\u5BF9\u4E8E\u5927\u578B\u5E94\u7528\u7A0B\u5E8F\u6765\u8BF4\uFF0C\u8FD9\u4E0D\u662F\u7406\u60F3\u9009\u62E9\uFF0C\u56E0\u4E3A\u540C\u6B65\u4F1A\u51CF\u7F13\u5C4F\u5E55\u7684\u8FC7\u6E21\uFF08\u4F8B\u5982\uFF0C\u5207\u6362\u6807\u7B7E\uFF09\u3002</p></blockquote><p>\u57FA\u4E8E\u8FD9\u4E2A\u539F\u56E0\uFF0C\u5728<code>v17.0.0</code>\u4E2D\uFF0C<code>useEffect</code>\u7684\u4E24\u4E2A\u9636\u6BB5\u4F1A\u5728\u9875\u9762\u6E32\u67D3\u540E\uFF08<code>layout</code>\u9636\u6BB5\u540E\uFF09\u5F02\u6B65\u6267\u884C\u3002</p><blockquote><p>\u4E8B\u5B9E\u4E0A\uFF0C\u4ECE\u4EE3\u7801\u4E2D\u770B\uFF0C<code>v16.13.1</code>\u4E2D\u5DF2\u7ECF\u662F\u5F02\u6B65\u6267\u884C\u4E86</p></blockquote><p>\u63A5\u4E0B\u6765\u8BE6\u7EC6\u8BB2\u89E3\u8FD9\u4E24\u4E2A\u6B65\u9AA4\u3002</p><h2 id="\u9636\u6BB5\u4E00-\u9500\u6BC1\u51FD\u6570\u7684\u6267\u884C" tabindex="-1"><a class="header-anchor" href="#\u9636\u6BB5\u4E00-\u9500\u6BC1\u51FD\u6570\u7684\u6267\u884C" aria-hidden="true">#</a> \u9636\u6BB5\u4E00\uFF1A\u9500\u6BC1\u51FD\u6570\u7684\u6267\u884C</h2><p><code>useEffect</code>\u7684\u6267\u884C\u9700\u8981\u4FDD\u8BC1\u6240\u6709\u7EC4\u4EF6<code>useEffect</code>\u7684<code>\u9500\u6BC1\u51FD\u6570</code>\u5FC5\u987B\u90FD\u6267\u884C\u5B8C\u540E\u624D\u80FD\u6267\u884C\u4EFB\u610F\u4E00\u4E2A\u7EC4\u4EF6\u7684<code>useEffect</code>\u7684<code>\u56DE\u8C03\u51FD\u6570</code>\u3002</p><p>\u8FD9\u662F\u56E0\u4E3A\u591A\u4E2A<code>\u7EC4\u4EF6</code>\u95F4\u53EF\u80FD\u5171\u7528\u540C\u4E00\u4E2A<code>ref</code>\u3002</p><p>\u5982\u679C\u4E0D\u662F\u6309\u7167\u201C\u5168\u90E8\u9500\u6BC1\u201D\u518D\u201C\u5168\u90E8\u6267\u884C\u201D\u7684\u987A\u5E8F\uFF0C\u90A3\u4E48\u5728\u67D0\u4E2A\u7EC4\u4EF6<code>useEffect</code>\u7684<code>\u9500\u6BC1\u51FD\u6570</code>\u4E2D\u4FEE\u6539\u7684<code>ref.current</code>\u53EF\u80FD\u5F71\u54CD\u53E6\u4E00\u4E2A\u7EC4\u4EF6<code>useEffect</code>\u7684<code>\u56DE\u8C03\u51FD\u6570</code>\u4E2D\u7684\u540C\u4E00\u4E2A<code>ref</code>\u7684<code>current</code>\u5C5E\u6027\u3002</p><p>\u5728<code>useLayoutEffect</code>\u4E2D\u4E5F\u6709\u540C\u6837\u7684\u95EE\u9898\uFF0C\u6240\u4EE5\u4ED6\u4EEC\u90FD\u9075\u5FAA\u201C\u5168\u90E8\u9500\u6BC1\u201D\u518D\u201C\u5168\u90E8\u6267\u884C\u201D\u7684\u987A\u5E8F\u3002</p><p>\u5728\u9636\u6BB5\u4E00\uFF0C\u4F1A\u904D\u5386\u5E76\u6267\u884C\u6240\u6709<code>useEffect</code>\u7684<code>\u9500\u6BC1\u51FD\u6570</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// pendingPassiveHookEffectsUnmount\u4E2D\u4FDD\u5B58\u4E86\u6240\u6709\u9700\u8981\u6267\u884C\u9500\u6BC1\u7684useEffect</span>
<span class="token keyword">const</span> unmountEffects <span class="token operator">=</span> pendingPassiveHookEffectsUnmount<span class="token punctuation">;</span>
  pendingPassiveHookEffectsUnmount <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> unmountEffects<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> effect <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>unmountEffects<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">:</span> any<span class="token punctuation">)</span><span class="token operator">:</span> HookEffect<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> fiber <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>unmountEffects<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">:</span> any<span class="token punctuation">)</span><span class="token operator">:</span> Fiber<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> destroy <span class="token operator">=</span> effect<span class="token punctuation">.</span>destroy<span class="token punctuation">;</span>
    effect<span class="token punctuation">.</span>destroy <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> destroy <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u9500\u6BC1\u51FD\u6570\u5B58\u5728\u5219\u6267\u884C</span>
      <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">captureCommitPhaseError</span><span class="token punctuation">(</span>fiber<span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>\u5176\u4E2D<code>pendingPassiveHookEffectsUnmount</code>\u6570\u7EC4\u7684\u7D22\u5F15<code>i</code>\u4FDD\u5B58\u9700\u8981\u9500\u6BC1\u7684<code>effect</code>\uFF0C<code>i+1</code>\u4FDD\u5B58\u8BE5<code>effect</code>\u5BF9\u5E94\u7684<code>fiber</code>\u3002</p><p>\u5411<code>pendingPassiveHookEffectsUnmount</code>\u6570\u7EC4\u5185<code>push</code>\u6570\u636E\u7684\u64CD\u4F5C\u53D1\u751F\u5728<code>layout\u9636\u6BB5</code> <code>commitLayoutEffectOnFiber</code>\u65B9\u6CD5\u5185\u90E8\u7684<code>schedulePassiveEffects</code>\u65B9\u6CD5\u4E2D\u3002</p>`,13),M=s("code",null,"commitLayoutEffectOnFiber",-1),N=n("\u65B9\u6CD5\u5728"),W={href:"/react/renderer/layout.md#commitlayouteffectonfiber",target:"_blank",rel:"noopener noreferrer"},I=n("Layout\u9636\u6BB5"),Q=n("\u5DF2\u7ECF\u4ECB\u7ECD"),C=p(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">schedulePassiveEffects</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">finishedWork</span><span class="token operator">:</span> Fiber</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token literal-property property">updateQueue</span><span class="token operator">:</span> FunctionComponentUpdateQueue <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token punctuation">(</span>finishedWork<span class="token punctuation">.</span>updateQueue<span class="token operator">:</span> any<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> lastEffect <span class="token operator">=</span> updateQueue <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">?</span> updateQueue<span class="token punctuation">.</span>lastEffect <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>lastEffect <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> firstEffect <span class="token operator">=</span> lastEffect<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token keyword">let</span> effect <span class="token operator">=</span> firstEffect<span class="token punctuation">;</span>
    <span class="token keyword">do</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span>next<span class="token punctuation">,</span> tag<span class="token punctuation">}</span> <span class="token operator">=</span> effect<span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>
        <span class="token punctuation">(</span>tag <span class="token operator">&amp;</span> HookPassive<span class="token punctuation">)</span> <span class="token operator">!==</span> NoHookEffect <span class="token operator">&amp;&amp;</span>
        <span class="token punctuation">(</span>tag <span class="token operator">&amp;</span> HookHasEffect<span class="token punctuation">)</span> <span class="token operator">!==</span> NoHookEffect
      <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u5411\`pendingPassiveHookEffectsUnmount\`\u6570\u7EC4\u5185\`push\`\u8981\u9500\u6BC1\u7684effect</span>
        <span class="token function">enqueuePendingPassiveHookEffectUnmount</span><span class="token punctuation">(</span>finishedWork<span class="token punctuation">,</span> effect<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// \u5411\`pendingPassiveHookEffectsMount\`\u6570\u7EC4\u5185\`push\`\u8981\u6267\u884C\u56DE\u8C03\u7684effect</span>
        <span class="token function">enqueuePendingPassiveHookEffectMount</span><span class="token punctuation">(</span>finishedWork<span class="token punctuation">,</span> effect<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      effect <span class="token operator">=</span> next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>effect <span class="token operator">!==</span> firstEffect<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="\u9636\u6BB5\u4E8C-\u56DE\u8C03\u51FD\u6570\u7684\u6267\u884C" tabindex="-1"><a class="header-anchor" href="#\u9636\u6BB5\u4E8C-\u56DE\u8C03\u51FD\u6570\u7684\u6267\u884C" aria-hidden="true">#</a> \u9636\u6BB5\u4E8C\uFF1A\u56DE\u8C03\u51FD\u6570\u7684\u6267\u884C</h2><p>\u4E0E\u9636\u6BB5\u4E00\u7C7B\u4F3C\uFF0C\u540C\u6837\u904D\u5386\u6570\u7EC4\uFF0C\u6267\u884C\u5BF9\u5E94<code>effect</code>\u7684<code>\u56DE\u8C03\u51FD\u6570</code>\u3002</p><p>\u5176\u4E2D\u5411<code>pendingPassiveHookEffectsMount</code>\u4E2D<code>push</code>\u6570\u636E\u7684\u64CD\u4F5C\u540C\u6837\u53D1\u751F\u5728<code>schedulePassiveEffects</code>\u4E2D\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// pendingPassiveHookEffectsMount\u4E2D\u4FDD\u5B58\u4E86\u6240\u6709\u9700\u8981\u6267\u884C\u56DE\u8C03\u7684useEffect</span>
<span class="token keyword">const</span> mountEffects <span class="token operator">=</span> pendingPassiveHookEffectsMount<span class="token punctuation">;</span>
pendingPassiveHookEffectsMount <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> mountEffects<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> effect <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>mountEffects<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">:</span> any<span class="token punctuation">)</span><span class="token operator">:</span> HookEffect<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> fiber <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>mountEffects<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">:</span> any<span class="token punctuation">)</span><span class="token operator">:</span> Fiber<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> create <span class="token operator">=</span> effect<span class="token punctuation">.</span>create<span class="token punctuation">;</span>
   effect<span class="token punctuation">.</span>destroy <span class="token operator">=</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">captureCommitPhaseError</span><span class="token punctuation">(</span>fiber<span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,5);function V(B,O){const a=t("ExternalLinkIcon");return o(),c(l,null,[s("p",null,[i,s("a",k,[d,e(a)]),f,b,m]),h,s("blockquote",null,[s("p",null,[_,s("a",E,[y,e(a)]),v,g,w])]),P,s("p",null,[H,x,j,s("a",q,[F,e(a)]),L]),U,s("blockquote",null,[s("p",null,[M,N,s("a",W,[I,e(a)]),Q])]),C],64)}var S=u(r,[["render",V]]);export{S as default};
