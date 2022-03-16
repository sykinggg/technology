import{o as l,c as t,b as n,F as o,e,a}from"./app.b05da4ec.js";import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";const r={},c=n("p",null,"BOM\u662FBrowser Object Model\u7684\u7F29\u5199\uFF0C\u5373\u6D4F\u89C8\u5668\u5BF9\u8C61\u6A21\u578B\u3002DOM\u662FDocument Object Model\u7684\u7F29\u5199\uFF0C\u5373\u6587\u6863\u5BF9\u8C61\u6A21\u578B\u3002\u4ED6\u4EEC\u90FD\u662F\u6D4F\u89C8\u5668\u63D0\u4F9B\u7ED9JavaScript\u7684API\u63A5\u53E3\u3002",-1),i=n("h2",{id:"bom\u6307-\u6D4F\u89C8\u5668\u5BF9\u8C61\u6A21\u578B",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#bom\u6307-\u6D4F\u89C8\u5668\u5BF9\u8C61\u6A21\u578B","aria-hidden":"true"},"#"),e(" BOM\u6307 \u6D4F\u89C8\u5668\u5BF9\u8C61\u6A21\u578B")],-1),d=n("p",null,"Browser Object Model \u7684\u7F29\u5199\u3002\u5373\u6D4F\u89C8\u5668\u5BF9\u8C61\u6A21\u578B\uFF0C\u8FD9\u5E76\u6CA1\u6709\u4E00\u5957\u89C4\u5B9A\u6807\u51C6\uFF0C\u6BCF\u4E2A\u6D4F\u89C8\u5668\u90FD\u6709\u81EA\u5DF1\u7684\u5B9E\u73B0\u3002\u4F46\u4E8B\u5B9E\u4E0A\u5728\u5927\u90E8\u5206\u4E3B\u8981\u7684\u529F\u80FD\u4E0A\u90FD\u5DF2\u7ECF\u5F62\u6210\u9ED8\u5951\u3002 \u63D0\u4F9B\u4E86\u72EC\u7ACB\u4E8E\u5185\u5BB9\u800C\u4E0E\u6D4F\u89C8\u5668\u7A97\u53E3\u8FDB\u884C\u4EA4\u4E92\u7684\u5BF9\u8C61\u3002\u63CF\u8FF0\u4E86\u4E0E\u6D4F\u89C8\u5668\u8FDB\u884C\u4EA4\u4E92\u7684\u65B9\u6CD5\u548C\u63A5\u53E3\uFF0C\u53EF\u4EE5\u5BF9\u6D4F\u89C8\u5668\u7A97\u53E3\u8FDB\u884C\u8BBF\u95EE\u548C\u64CD\u4F5C\uFF0C\u8B6C\u5982\u53EF\u4EE5\u5F39\u51FA\u65B0\u7684\u7A97\u53E3\uFF0C\u6539\u53D8\u72B6\u6001\u680F\u4E2D\u7684\u6587\u672C\u3002",-1),m=n("h2",{id:"\u5E38\u7528\u7684bom\u5C5E\u6027",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5E38\u7528\u7684bom\u5C5E\u6027","aria-hidden":"true"},"#"),e(),n("strong",null,"\u5E38\u7528\u7684Bom\u5C5E\u6027")],-1),u=["src"],h=a(`<p><strong>navigator\uFF08\u6D4F\u89C8\u5668\u5BF9\u8C61\uFF09</strong></p><ol><li>\u5982\u4F55\u68C0\u6D4B\u6D4F\u89C8\u5668\u7684\u7C7B\u578B (ua\u7684\u95EE\u9898)\uFF1F</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u5982\u4F55\u68C0\u6D4B\u662F\u5426\u4E3AChrome\u6D4F\u89C8\u5668</span>
<span class="token keyword">var</span> ua <span class="token operator">=</span> navigator<span class="token punctuation">.</span>userAgent<span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ua<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> isChrome <span class="token operator">=</span>ua<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;Chrome&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>isChrome<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true\u4E3A\u662F\uFF0Cfalse\u4E3A\u4E0D\u662F</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,3),b=["src"],g=a(`<p><strong>screen\uFF08\u5C4F\u5E55\u5BF9\u8C61\uFF09</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>screen<span class="token punctuation">.</span>width<span class="token punctuation">;</span><span class="token comment">//\u5C4F\u5E55\u5BBD\u5EA6</span>
screen<span class="token punctuation">.</span>height<span class="token punctuation">;</span> <span class="token comment">//\u5C4F\u5E55\u9AD8\u5EA6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>location (\u5730\u5740\u5BF9\u8C61)</strong></p><ul><li><p><code>location.href</code>-- \u8FD4\u56DE\u6216\u8BBE\u7F6E\u5F53\u524D\u6587\u6863\u7684URL</p></li><li><p><code>location.search</code> -- \u8FD4\u56DEURL\u4E2D\u7684\u67E5\u8BE2\u5B57\u7B26\u4E32\u90E8\u5206\u3002\u4F8B\u5982 http://www.dreamdu.com/dreamdu.php?id=5&amp;name=dreamdu \u8FD4\u56DE\u5305\u62EC(?)\u540E\u9762\u7684\u5185\u5BB9?id=5&amp;name=dreamdu</p></li><li><p><code>location.hash</code> -- \u8FD4\u56DEURL#\u540E\u9762\u7684\u5185\u5BB9\uFF0C\u5982\u679C\u6CA1\u6709#\uFF0C\u8FD4\u56DE\u7A7A</p></li><li><p><code>location.host</code> -- \u8FD4\u56DEURL\u4E2D\u7684\u57DF\u540D\u90E8\u5206\uFF0C\u4F8B\u5982www.dreamdu.com</p></li><li><p><code>location.hostname</code> -- \u8FD4\u56DEURL\u4E2D\u7684\u4E3B\u57DF\u540D\u90E8\u5206\uFF0C\u4F8B\u5982dreamdu.com</p></li><li><p><code>location.pathname</code> -- \u8FD4\u56DEURL\u7684\u57DF\u540D\u540E\u7684\u90E8\u5206\u3002\u4F8B\u5982 http://www.dreamdu.com/xhtml/ \u8FD4\u56DE/xhtml/</p></li><li><p><code>location.port</code> -- \u8FD4\u56DEURL\u4E2D\u7684\u7AEF\u53E3\u90E8\u5206\u3002\u4F8B\u5982 http://www.dreamdu.com:8080/xhtml/ \u8FD4\u56DE8080</p></li><li><p><code>location.protocol</code> -- \u8FD4\u56DEURL\u4E2D\u7684\u534F\u8BAE\u90E8\u5206\u3002\u4F8B\u5982 http://www.dreamdu.com:8080/xhtml/ \u8FD4\u56DE(//)\u524D\u9762\u7684\u5185\u5BB9http:</p></li><li><p><code>location.assign</code> -- \u8BBE\u7F6E\u5F53\u524D\u6587\u6863\u7684URL</p></li><li><p><code>location.replace()</code> -- \u8BBE\u7F6E\u5F53\u524D\u6587\u6863\u7684URL\uFF0C\u5E76\u4E14\u5728history\u5BF9\u8C61\u7684\u5730\u5740\u5217\u8868\u4E2D\u79FB\u9664\u8FD9\u4E2AURL location.replace(url);</p></li><li><p><code>location.reload()</code> -- \u91CD\u8F7D\u5F53\u524D\u9875\u9762</p></li></ul><p><strong>history(\u5386\u53F2\u5BF9\u8C61\uFF09</strong></p><ul><li><p><code>history.go()</code> //\u524D\u8FDB\u6216\u540E\u9000\u6307\u5B9A\u7684\u9875\u9762\u6570 history.go(num);</p></li><li><p><code>history.back()</code>// \u540E\u9000\u4E00\u9875</p></li><li><p><code>history.forward()</code> // \u524D\u8FDB\u4E00\u9875</p></li></ul><h2 id="dom\u6307-\u6587\u6863\u5BF9\u8C61\u6A21\u578B" tabindex="-1"><a class="header-anchor" href="#dom\u6307-\u6587\u6863\u5BF9\u8C61\u6A21\u578B" aria-hidden="true">#</a> DOM\u6307 \u6587\u6863\u5BF9\u8C61\u6A21\u578B</h2><p>Document Object Model \u7684\u7F29\u5199\u3002\u5373\u6587\u6863\u5BF9\u8C61\u6A21\u578B\uFF0C\u9075\u5FAA W3C \u5236\u5B9A\u7684\u6807\u51C6\u3002\u5176\u672C\u8D28\u5C31\u662F DOM \u5143\u7D20\u3002 DOM \u662F\u9488\u5BF9 HTML \u7684\u57FA\u4E8E\u6811\u7684 API\u3002\u63CF\u8FF0\u4E86\u5904\u7406\u7F51\u9875\u5185\u5BB9\u7684\u65B9\u6CD5\u548C\u63A5\u53E3\uFF0C\u662F HTML \u7684API\uFF0CDOM \u628A\u6574\u4E2A\u9875\u9762\u89C4\u5212\u6210\u7531\u8282\u70B9\u5C42\u7EA7\u6784\u6210\u7684\u6587\u6863\u3002</p><p>\u6CE8\u610F: \u53EA\u6709 JS \u7684\u5BBF\u4E3B\u73AF\u5883\u662F\u6D4F\u89C8\u5668\u7684\u65F6\u5019\u624D\u6709 DOM \u548C BOM \uFF0C\u5728 Node \u4E2D\u662F\u6CA1\u6709\u8FD9\u4E24\u4E2A\u5BF9\u8C61\u7684\u3002</p><h2 id="dom" tabindex="-1"><a class="header-anchor" href="#dom" aria-hidden="true">#</a> <strong>DOM</strong></h2><ul><li><p>JavaScript\u64CD\u4F5C\u7F51\u9875\u7684\u63A5\u53E3\uFF0C\u5168\u79F0\u4E3A\u201C\u6587\u6863\u5BF9\u8C61\u6A21\u578B(Document Object Model)\u3002 \u6709\u8FD9\u51E0\u4E2A\u6982\u5FF5\uFF1A\u6587\u6863\u3001\u5143\u7D20\u3001\u8282\u70B9</p></li><li><p>\u6574\u4E2A\u6587\u6863\u662F\u4E00\u4E2A\u6587\u6863\u8282\u70B9</p></li><li><p>\u6BCF\u4E2A\u6807\u7B7E\u662F\u4E00\u4E2A\u5143\u7D20\u8282\u70B9</p></li><li><p>\u5305\u542B\u5728\u5143\u7D20\u4E2D\u7684\u6587\u672C\u662F\u6587\u672C\u8282\u70B9</p></li><li><p>\u5143\u7D20\u4E0A\u7684\u5C5E\u6027\u662F\u5C5E\u6027\u8282\u70B9</p></li><li><p>\u6587\u6863\u4E2D\u7684\u6CE8\u91CA\u662F\u6CE8\u91CA\u8282\u70B9</p></li></ul><h2 id="dom\u672C\u8D28-dom\u6811" tabindex="-1"><a class="header-anchor" href="#dom\u672C\u8D28-dom\u6811" aria-hidden="true">#</a> <strong>DOM\u672C\u8D28 DOM\u6811\uFF1A</strong></h2><blockquote><p>DOM\u6811\u662F\u7ED3\u6784\uFF0C\u6811\u662F\u7531DOM\u5143\u7D20\u548C\u5C5E\u6027\u8282\u70B9\u7EC4\u6210\u7684\uFF0CDOM\u7684\u672C\u8D28\u662F\u628Ahtml\u7ED3\u6784\u5316\u6210js\u53EF\u4EE5\u8BC6\u522B\u7684\u6811\u6A21\u578B\uFF1B</p><p>\u6709\u4E86\u6811\u6A21\u578B\uFF0C\u5C31\u6709\u4E86\u5C42\u7EA7\u7ED3\u6784\uFF0C\u5C42\u7EA7\u7ED3\u6784\u662F\u6307\u5143\u7D20\u548C\u5143\u7D20\u4E4B\u95F4\u7684\u5173\u7CFB\u7236\u5B50\uFF0C\u5144\u5F1F\u3002</p></blockquote>`,13),k=["src"],_=a(`<h2 id="dom-\u8282\u70B9\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#dom-\u8282\u70B9\u64CD\u4F5C" aria-hidden="true">#</a> <strong>DOM \u8282\u70B9\u64CD\u4F5C</strong></h2><ul><li><p><code>\u65B0\u589E\u8282\u70B9</code></p></li><li><p><code>\u67E5\u8BE2\u5B50\u8282\u70B9</code></p></li><li><p><code>\u67E5\u8BE2\u7236\u8282\u70B9</code></p></li><li><p><code>\u5220\u9664\u8282\u70B9</code></p></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1. \u521B\u5EFA\u65B0\u8282\u70B9  \uFF08document\u8C03\u7528\uFF09

createDocumentFragment() //\u521B\u5EFA\u4E00\u4E2ADOM\u7247\u6BB5
createElement() //\u521B\u5EFA\u4E00\u4E2A\u5177\u4F53\u7684\u5143\u7D20
createTextNode() //\u521B\u5EFA\u4E00\u4E2A\u6587\u672C\u8282\u70B9

2. \u6DFB\u52A0\u3001\u79FB\u9664\u3001\u66FF\u6362\u3001\u63D2\u5165  \uFF08\u7236\u5143\u7D20\u8C03\u7528\uFF09

appendChild() //\u6DFB\u52A0
removeChild() //\u79FB\u9664
replaceChild() //\u66FF\u6362
insertBefore() //\u63D2\u5165

3. \u67E5\u627E \uFF08document\u8C03\u7528\uFF09

getElementsByTagName() //\u901A\u8FC7\u6807\u7B7E\u540D\u79F0 \u4E00\u7EC4\u5143\u7D20
getElementsByName() //\u901A\u8FC7\u5143\u7D20\u7684Name\u5C5E\u6027\u7684\u503C \u4E00\u7EC4\u5143\u7D20
getElementById() //\u901A\u8FC7\u5143\u7D20Id\uFF0C\u552F\u4E00\u6027\u5355\u4E2A\u5143\u7D20
getElementByClassName()//\u901A\u8FC7c\u5143\u7D20lass\u83B7\u53D6  \u4E00\u7EC4\u5143\u7D20
qurySelectorAll(&#39;\u9009\u62E9\u5668&#39;) // \u901A\u8FC7\u9009\u62E9\u5668\u83B7\u53D6\u4E00\u7EC4\u5143\u7D20
querySelector(&quot;\u9009\u62E9\u5668&quot;) // \u901A\u8FC7\u9009\u62E9\u5668\u83B7\u53D6\u5355\u4E2A\u5143\u7D20

4. \u5173\u7CFB  \uFF08\u5143\u7D20\u8C03\u7528\u524D\u4E09\u4E2A\u7236\u5143\u7D20\u8C03\u7528 \uFF09

childNodes // \u83B7\u53D6\u6240\u6709\u7684\u5B50\u8282\u70B9
children  // \u83B7\u53D6\u6240\u6709\u7684\u5B50\u5143\u7D20\u8282\u70B9 (\u5E38\u7528)
firstElementChild   \u83B7\u53D6\u7B2C\u4E00\u4E2A\u5143\u7D20
lastElementChild  \u83B7\u53D6\u6700\u540E\u4E00\u4E2A\u5143\u7D20
parentNode	\u83B7\u53D6\u5F53\u524D\u8282\u70B9\u7684\u7236\u8282\u70B9
previousElementSibling	\u83B7\u53D6\u5F53\u524D\u8282\u70B9\u7684\u524D\u4E00\u4E2A\u5144\u5F1F\u5143\u7D20
nextElementSibling \u83B7\u53D6\u5F53\u524D\u8282\u70B9\u7684\u540E\u4E00\u4E2A\u5144\u5F1F\u5143\u7D20
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><h2 id="dom\u8282\u70B9\u7684attribute\u548Cproperty\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#dom\u8282\u70B9\u7684attribute\u548Cproperty\u533A\u522B" aria-hidden="true">#</a> <strong>Dom\u8282\u70B9\u7684Attribute\u548CProperty\u533A\u522B</strong></h2>`,4),w=["src"],v=["src"],M=["src"],f=["src"],O=n("p",null,"\u4F18\u5316\u6D41\u7A0B",-1),B=["src"];function D(s,y){return l(),t(o,null,[c,i,d,m,n("img",{src:s.$withBase("/assets/html/2020102414322631.png"),alt:"demo"},null,8,u),h,n("img",{src:s.$withBase("/assets/html/2020102414370328.png"),alt:"demo"},null,8,b),g,n("img",{src:s.$withBase("/assets/html/20201024140711640.png"),alt:"demo"},null,8,k),_,n("img",{src:s.$withBase("/assets/html/20201024141424441.png"),alt:"demo"},null,8,w),n("img",{src:s.$withBase("/assets/html/20201024141451942.png"),alt:"demo"},null,8,v),n("img",{src:s.$withBase("/assets/html/20201024141514206.png"),alt:"demo"},null,8,M),n("img",{src:s.$withBase("/assets/html/20201024141631577.png"),alt:"demo"},null,8,f),O,n("img",{src:s.$withBase("/assets/html/20201024141702164.png"),alt:"demo"},null,8,B)],64)}var j=p(r,[["render",D]]);export{j as default};
