import{o as s,c as t,b as n,F as p,a as e}from"./app.ba47fc91.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";const o={},l=e(`<h1 id="\u901A\u914D\u9009\u62E9\u5668" tabindex="-1"><a class="header-anchor" href="#\u901A\u914D\u9009\u62E9\u5668" aria-hidden="true">#</a> \u901A\u914D\u9009\u62E9\u5668</h1><h1 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h1><p>\u5728CSS\u4E2D,\u4E00\u4E2A\u661F\u53F7(<code>*</code>)\u5C31\u662F\u4E00\u4E2A\u901A\u914D\u9009\u62E9\u5668.\u5B83\u53EF\u4EE5\u5339\u914D\u4EFB\u610F\u7C7B\u578B\u7684HTML\u5143\u7D20.\u5728\u914D\u5408\u5176\u4ED6\u7B80\u5355\u9009\u62E9\u5668\u7684\u65F6\u5019,\u7701\u7565\u6389\u901A\u914D\u9009\u62E9\u5668\u4F1A\u6709\u540C\u6837\u7684\u6548\u679C.\u6BD4\u5982,<code>*.warning</code> \u548C<code>.warning</code> \u7684\u6548\u679C\u5B8C\u5168\u76F8\u540C.</p><p>\u5728CSS3\u4E2D,\u661F\u53F7(<code>*</code>)\u53EF\u4EE5\u548C\u547D\u540D\u7A7A\u95F4\u7EC4\u5408\u4F7F\u7528:</p><ul><li><p><code>ns|*</code> - \u4F1A\u5339\u914Dns\u547D\u540D\u7A7A\u95F4\u4E0B\u7684\u6240\u6709\u5143\u7D20</p></li><li><p><code>*|*</code> - \u4F1A\u5339\u914D\u6240\u6709\u547D\u540D\u7A7A\u95F4\u4E0B\u7684\u6240\u6709\u5143\u7D20</p></li><li><p><code>|*</code> - \u4F1A\u5339\u914D\u6240\u6709\u6CA1\u6709\u547D\u540D\u7A7A\u95F4\u7684\u5143\u7D20</p></li></ul><h1 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h1><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">*[lang^=en]</span><span class="token punctuation">{</span><span class="token property">color</span><span class="token punctuation">:</span>green<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token selector">*.warning</span> <span class="token punctuation">{</span><span class="token property">color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token selector">*#maincontent</span> <span class="token punctuation">{</span><span class="token property">border</span><span class="token punctuation">:</span> 1px solid blue<span class="token punctuation">;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u4E0A\u9762\u7684CSS\u4F5C\u7528\u4E8E\u4E0B\u9762\u7684HTML:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>warning<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en-us<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>A green span<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span> in a red paragraph.
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>maincontent<span class="token punctuation">&quot;</span></span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en-gb<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>warning<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>A red span<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span> in a green paragraph.
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u5219\u4F1A\u4EA7\u751F\u8FD9\u6837\u7684\u6548\u679C:</p>`,10),u=["src"],i=n("blockquote",null,[n("p",null,"\u6CE8: \u7B14\u8005\u4E0D\u63A8\u8350\u4F7F\u7528\u901A\u914D\u9009\u62E9\u5668,\u56E0\u4E3A\u5B83\u662F\u6027\u80FD\u6700\u4F4E\u7684\u4E00\u4E2ACSS\u9009\u62E9\u5668")],-1);function r(a,k){return s(),t(p,null,[l,n("img",{src:a.$withBase("/assets/mozillaCss/1617672495(1).jpg"),alt:"demo"},null,8,u),i],64)}var m=c(o,[["render",r]]);export{m as default};
