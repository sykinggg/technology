import{a as n}from"./app.6f963528.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h2 id="vue\u4E8B\u4EF6\u7ED1\u5B9A" tabindex="-1"><a class="header-anchor" href="#vue\u4E8B\u4EF6\u7ED1\u5B9A" aria-hidden="true">#</a> <strong>Vue\u4E8B\u4EF6\u7ED1\u5B9A</strong></h2><p><strong>\u603B\u7ED3</strong>:</p><ul><li>\u539F\u751F\u4E8B\u4EF6\u7ED1\u5B9A\u662F\u901A\u8FC7<code>addEventListener</code>\u7ED1\u5B9A\u7ED9\u771F\u5B9E\u5143\u7D20\u7684\uFF0C\u7EC4\u4EF6\u4E8B\u4EF6\u7ED1\u5B9A\u662F\u901A\u8FC7<code>Vue</code>\u81EA\u5B9A\u4E49\u7684<code>$on</code>\u5B9E\u73B0\u7684\u3002</li></ul><p>\u8FD9\u662F\u4E00\u4E2A\u7B80\u5355\u7684 vue demo\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> vue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
        &lt;div @click=&quot;handleClick(&#39;abcd&#39;)&quot;&gt;&lt;/div&gt; 
    </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">handleClick</span> <span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u4ECE Vue \u7684\u6574\u4E2A\u6D41\u7A0B\u601D\u8003\uFF0C\u770BVue\u662F\u5982\u4F55\u5C06\u4E8B\u4EF6\u8FDB\u884C\u7ED1\u5B9A\u7684\u3002</p><ol><li><p>vue \u521D\u59CB\u5316</p></li><li><p>\u6A21\u677F\u7F16\u8BD1</p></li><li><p>patch</p></li></ol><h2 id="vue\u521D\u59CB\u5316" tabindex="-1"><a class="header-anchor" href="#vue\u521D\u59CB\u5316" aria-hidden="true">#</a> <strong>Vue\u521D\u59CB\u5316</strong></h2><p><code>vue</code> \u521D\u59CB\u5316 <code>_init</code> \u51FD\u6570\u4E2D\uFF0C\u4F1A\u8C03\u7528 <code>initEvents</code> \u521D\u59CB\u5316\u4E8B\u4EF6\u76F8\u5173\u7684\u52A8\u4F5C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">initEvents</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">vm</span><span class="token operator">:</span> Component</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    vm<span class="token punctuation">.</span>_events <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
    vm<span class="token punctuation">.</span>_hasHookEvent <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token comment">// init parent attached events</span>
    <span class="token keyword">const</span> listeners <span class="token operator">=</span> vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>_parentListeners
    <span class="token keyword">if</span> <span class="token punctuation">(</span>listeners<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">updateComponentListeners</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> listeners<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u6BCF\u4E00\u4E2A vue \u5B9E\u4F8B\uFF0C\u521B\u5EFA\u4E86\u4E00\u4E2A <code>_event</code> \u5BF9\u8C61\uFF0C\u8FD9\u4E2A\u5BF9\u8C61\u5B9E\u9645\u4E0A\u662F\u7ED9\u865A\u62DF\u4E8B\u4EF6\u7528\u7684\uFF0C\u5E76\u4E0D\u662F\u771F\u5B9E\u7684 DOM \u4E8B\u4EF6\uFF0C\u4F7F\u7528<code>$on</code>\u5728\u5BF9\u8C61\u4E2D\u6DFB\u52A0\u4E8B\u4EF6\uFF0C<code>$emit</code>\u8FDB\u884C\u89E6\u53D1\u3002\u7D27\u8DDF\u7740\uFF0C\u4ECE<code>options</code>\u4E2D\u62FF<code>_parentListeners</code>\uFF0C\u7136\u540E\u8FDB\u884C\u66F4\u65B0\u3002</p><p>\u7531\u4E8E\u5F53\u524D\u4F8B\u5B50\u53EA\u4F1A\u4EA7\u751F\u4E00\u4E2A vue \u5B9E\u4F8B\uFF0C\u5148\u6682\u65F6\u5FFD\u7565 <code>_parentListeners</code>\u3002</p><h2 id="\u6A21\u677F\u7F16\u8BD1" tabindex="-1"><a class="header-anchor" href="#\u6A21\u677F\u7F16\u8BD1" aria-hidden="true">#</a> <strong>\u6A21\u677F\u7F16\u8BD1</strong></h2><p>\u7531\u4E8E\u7ED9\u7684\u662F <code>template</code>\uFF0Cvue \u4F1A\u5C06\u6A21\u677F\u7F16\u8BD1\uFF0C\u4EA7\u51FA <code>AST</code> \u548C <code>render</code> \u51FD\u6570</p><p><strong>ast</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u751F\u6210\u7684 AST \u5BF9\u8C61</span>
<span class="token punctuation">{</span>
    <span class="token literal-property property">attrsMap</span><span class="token operator">:</span> <span class="token punctuation">{</span> @click<span class="token operator">:</span> <span class="token string">&quot;handleClick(&#39;abcd&#39;)&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">events</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&#39;click&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;handleClick(&#39;abcd&#39;)&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u6A21\u677F\u7F16\u8BD1\u540E\u5F97\u5230\u62BD\u8C61\u8BED\u6CD5\u6811\uFF0C\u6811\u91CC\u5305\u542B\u4E86\u5B9E\u4F8B\u5316\u4E00\u4E2A\u771F\u5B9E\u8282\u70B9\u7684\u6240\u6709\u4FE1\u606F\u3002\u6BD4\u5982\u5F53\u524D <code>element</code> \u7684\u5C5E\u6027\uFF0C\u5B50\u8282\u70B9 <code>children</code> \u7B49\u7B49\u3002\u8FD9\u91CC\u53EA\u622A\u53D6\u4E86\u4E00\u90E8\u5206\u5C5E\u6027\u3002</p><p>\u5728 <code>attrsMap</code> \u4E2D\u53EF\u4EE5\u53D1\u73B0\uFF0C\u7684\u4E8B\u4EF6\u548C <code>style</code>\u3001<code>class</code> \u8FD9\u4E9B\u771F\u5B9E\u5C5E\u6027\u6CA1\u6709\u533A\u522B\uFF0C\u53EA\u662F<code>=</code>\u5206\u5272\u5F00\u6765\uFF0C\u524D\u9762\u662F <code>key</code>\uFF0C\u540E\u9762\u662F <code>value</code>\u3002</p><p>\u56E0\u4E3A\u5BF9 <code>html-parse</code> \u9636\u6BB5\u6765\u8BF4\uFF0C<code>@click=&quot;handleclick(&#39;abcd&#39;)</code> \u4E0E <code>class=&quot;a b&quot;</code> \u662F\u6CA1\u6709\u533A\u522B\u7684\uFF0C\u90FD\u53EA\u662F <code>html</code> \u4E2D\u7684\u5C5E\u6027\uFF0C\u53EA\u662F <code>vue</code> \u9700\u8981\u5BF9\u8FD9\u79CD\u5C5E\u6027\u505A\u7279\u6B8A\u7684\u5904\u7406\u3002</p><p><code>vue</code> \u901A\u8FC7\u6B63\u5219<code>/^@|^v-on:/</code>\u5224\u65AD\uFF0C\u5047\u5982\u5C5E\u6027\u4EE5<code>@</code> \u6216 <code>v-on</code>\u5F00\u5934\uFF0C\u5C31\u662F\u8981\u8FDB\u884C\u4E8B\u4EF6\u7ED1\u5B9A\u4E86\u3002\u5728 <code>ast</code> \u5BF9\u8C61\u4E2D\u52A0\u4E0A\u4E86 <code>events</code> \uFF0C\u5E76\u5C06 <code>click</code> \u52A0\u5230\u91CC\u9762\u3002</p><p>\u53E6\u5916\uFF0C\u5F53\u5C06\u6A21\u677F\u4FEE\u6539\u4E3A<code>@click.once=handleclick(&#39;abcd&#39;)</code>\u7684\u65F6\u5019\uFF0C<code>events</code> \u4E2D\u751F\u6210\u7684\u5C5E\u6027\u4F1A\u53D8\u6210<code>~click</code>\u3002</p><p>\u7ED1\u5B9A\u5C5E\u6027\u4E2D\uFF0C<code>once</code> <code>stop</code> \u8FD9\u4E9B\u79F0\u4E3A <code>modifier</code>\u3002<code>vue</code> \u9488\u5BF9<code>\u4E8B\u4EF6\u76D1\u542C</code>\u4E2D\u7684<code>modifier</code>\uFF0C\u505A\u4E86\u7279\u6B8A\u7684\u5904\u7406\uFF0C\u65B9\u4FBF\u540E\u7EED\u9636\u6BB5\u8FDB\u884C\u76F8\u5E94\u7684\u5904\u7406\u3002</p><ul><li><p>capture -&gt; !</p></li><li><p>once -&gt; ~</p></li><li><p>passive -&gt; &amp;</p></li></ul><p><strong>render</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// render \u5B57\u7B26\u4E32</span>
<span class="token keyword">with</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token keyword">return</span> <span class="token function">_c</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">on</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token string-property property">&quot;click&quot;</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">$event</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token keyword">return</span> <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token string">&#39;abcd&#39;</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token function">_v</span><span class="token punctuation">(</span><span class="token string">&quot;fjskdflds&quot;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u5B57\u7B26\u4E32\u4F1A\u901A\u8FC7 <code>new Function(code)</code> \u7684\u65B9\u5F0F\u521B\u5EFA\u4E00\u4E2A\u51FD\u6570\u3002</p><p>\u4ECE\u5B57\u7B26\u4E32\u4E2D\u53EF\u4EE5\u770B\u51FA\uFF0C\u7684<code>click \u4E8B\u4EF6\u51FD\u6570</code> \u662F on \u5BF9\u8C61\u4E2D\u7684\u4E00\u4E2A\u5C5E\u6027<code>click</code>\u3002\u53EF\u4EE5\u5F88\u81EA\u7136\u7684\u8054\u60F3\u5230\uFF0C\u4E4B\u540E\u53EF\u80FD\u4F1A\u7528<code>addEventListener(&#39;click&#39;, fn)</code>\u53BB\u6DFB\u52A0\u76F8\u5E94\u7684\u51FD\u6570\uFF08\u5176\u5B9E\u4E0D\u662F\uFF09\u3002</p><p>\u540C\u65F6\uFF0C\u5728\u6E32\u67D3\u51FD\u6570\u4E2D\uFF0C\u7684\u4EE3\u7801\u6709\u4E86\u4E00\u4E9B\u53D8\u5316\u3002</p><p><code>click</code>\u51FD\u6570\u88AB\u5305\u88F9\u5728\u4E00\u4E2A\u5E26\u6709<code>$event</code>\u53D8\u91CF\u7684\u51FD\u6570\u4E2D\u3002\u8FD9\u4E5F\u5C31\u4E0D\u96BE\u7406\u89E3\uFF0C\u4E3A\u4EC0\u4E48\u53EF\u4EE5\u5728\u81EA\u5DF1\u7684\u6A21\u677F\u5B57\u7B26\u4E32\uFF08\u5982 <code>handleClick(&#39;abcd&#39;, $event)</code>\uFF09\u4E2D\u4F7F\u7528<code>$event</code>\uFF0C\u4ECE\u800C\u5F97\u5230\u539F\u751F\u7684\u4E8B\u4EF6\u5BF9\u8C61\u4E86\u3002\u56E0\u4E3A\u521B\u5EFA\u51FD\u6570\u4EE5\u540E\uFF0C\u8FD9\u4E2A\u53D8\u91CF\u5728\u51FD\u6570\u7684\u4F5C\u7528\u57DF\u4E0A\u5C42\u3002</p><p>\u901A\u8FC7\u4FEE\u6539\u5B57\u7B26\u4E32\u6A21\u677F\uFF0C\u6700\u540E\u521B\u5EFA\u51FA\u6765\u771F\u5B9E\u7684\u51FD\u6570\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u5F88\u795E\u5947\u3002</p><h2 id="patch-\u9636\u6BB5" tabindex="-1"><a class="header-anchor" href="#patch-\u9636\u6BB5" aria-hidden="true">#</a> <strong>patch \u9636\u6BB5</strong></h2><p><code>render</code> \u51FD\u6570\u751F\u6210 <code>vnode</code>\u3002\u6839\u636E <code>vnode</code> \u8FDB\u884C <code>patch</code> \u7684\u8FC7\u7A0B\u4E2D\uFF0C\u5B9A\u4E49\u4E86\u4E00\u4E9B\u94A9\u5B50\u51FD\u6570\uFF0C\u5982 <code>create</code> <code>update</code>\u3002\u5728 <code>patch</code> \u7684\u4E0D\u540C\u9636\u6BB5\u8FDB\u884C\u8C03\u7528\uFF0C\u4E8B\u4EF6\u5C31\u662F\u901A\u8FC7\u8FD9\u4E9B\u94A9\u5B50\u51FD\u6570\u7ED1\u5B9A\u4E0A\u53BB\u7684\u3002</p><p>\u8FD9\u4E9B\u94A9\u5B50\u51FD\u6570\u5728<code>/platforms/web/runtime/modules</code>\u6587\u4EF6\u5939\u4E2D\uFF0C\u73B0\u5728\u53EA\u5173\u5FC3 <code>events.js</code>\u3002</p><p>\u53EF\u4EE5\u53D1\u73B0\uFF0C\u5728<code>create</code> <code>update</code>\u65F6\uFF0C\u5B9E\u9645\u4E0A\u90FD\u662F\u5C06<code>vnode</code>\u4F20\u7ED9<code>updateDOMListener</code>\uFF0C\u8FD9\u4E2A\u51FD\u6570\u8D1F\u8D23\u4E86 DOM \u4E8B\u4EF6\u7684\u521B\u5EFA\u548C\u66F4\u65B0\u3002\u8BE5\u51FD\u6570\u5B9E\u9645\u4E0A\u662F<code>/src/core/vdom/helpers/update-listeners.js</code>\u3002</p><p><strong>update-listener</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">updateListeners</span> <span class="token punctuation">(</span>
    <span class="token parameter"><span class="token literal-property property">on</span><span class="token operator">:</span> Object<span class="token punctuation">,</span>
    <span class="token literal-property property">oldOn</span><span class="token operator">:</span> Object<span class="token punctuation">,</span>
    <span class="token literal-property property">add</span><span class="token operator">:</span> Function<span class="token punctuation">,</span>
    <span class="token literal-property property">remove</span><span class="token operator">:</span> Function<span class="token punctuation">,</span>
    <span class="token literal-property property">createOnceHandler</span><span class="token operator">:</span> Function<span class="token punctuation">,</span>
    <span class="token literal-property property">vm</span><span class="token operator">:</span> Component</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u51FD\u6570\u904D\u5386 on \u5BF9\u8C61\uFF0C\u901A\u8FC7<code>normalizeEvent</code>\u51FD\u6570\u5904\u7406\u7279\u6B8A\u7684\u5C5E\u6027\u540D\uFF0C\u5C06\u5176\u8F6C\u4E3A\u53C2\u6570\uFF0C\u4E5F\u5C31\u662F<code>once</code> <code>passive</code> \u7B49\u3002</p><p>\u7136\u540E\u6839\u636E\u65B0\u65E7 <code>vnode</code> \u5BF9\u6BD4\uFF0C\u66F4\u65B0\u3001\u66FF\u6362\u3001\u5220\u9664\u4E8B\u4EF6\u51FD\u6570\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u6700\u7EC8\u7684 vnode</span>
<span class="token punctuation">{</span>
	<span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">on</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token function-variable function">click</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">invoker</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u5B9E\u9645\u4E0A\uFF0C\u4E8B\u4EF6\u51FD\u6570\u4F1A\u518D\u88AB\u5C01\u88C5\u4E00\u6B21\uFF0C\u5305\u88F9\u5728\u4E00\u4E2A\u540D\u4E3A <code>invoker</code> \u7684\u51FD\u6570\u4E2D</p><ul><li><p>\u8BE5\u51FD\u6570\u7531<code>createFnInvoker</code>\u521B\u5EFA\uFF0C\u5C06\u7684\u51FD\u6570\u5305\u88F9\u5728\u4E00\u4E2A\u5F02\u5E38\u5904\u7406\u4EE3\u7801\u5757\u4E2D\u6267\u884C\u3002</p></li><li><p>\u7684\u51FD\u6570\u5B9E\u9645\u4E0A\u5B9E\u9645\u4E0A\u662F<code>invoker</code>\u51FD\u6570\u7684\u4E00\u4E2A\u5C5E\u6027<code>fns</code>\uFF0C\u5F53\u4E8B\u4EF6\u89E6\u53D1\u65F6\uFF0C\u8C03\u7528\u7684\u662F <code>invoker</code>\uFF0C<code>invoker</code> \u518D\u627E\u7684\u51FD\u6570\u3002\u8FD9\u6837\u7684\u8BDD\uFF0C\u5F53\u7684\u4E8B\u4EF6\u51FD\u6570\u53D8\u5316\u65F6\uFF0C\u53EA\u9700\u8981\u4FEE\u6539\u8FD9\u4E2A\u5C5E\u6027\uFF0C\u4E0D\u9700\u8981<code>removeEventListener</code></p></li></ul><p><strong>parentListeners</strong></p><p>\u56DE\u5230\u4E4B\u524D\u521D\u59CB\u5316\u7684\u4F8B\u5B50\uFF0C\u505A\u4E00\u70B9\u4FEE\u6539</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;child&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;&lt;div&gt;child&lt;/div&gt;&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> vue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
        &lt;child @click=&quot;handleClick(&#39;abcd&#39;)&quot;&gt;&lt;/child&gt; 
    </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">handleClick</span> <span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u8FD9\u4E2A\u65F6\u5019\uFF0C\u7684 click \u4E8B\u4EF6\u662F\u7ED1\u5B9A\u5728\u5B50\u7EC4\u4EF6\u4E0A\u7684\u3002\u8FD9\u5C31\u548C\u771F\u5B9E dom \u5143\u7D20\u7684\u4E8B\u4EF6\u6709\u533A\u522B\u4E86\u3002</p><p>\u77E5\u9053 <code>vue</code> \u5B9E\u4F8B\u53EF\u4EE5\u901A\u8FC7 <code>$emit</code> \u89E6\u53D1\u4E8B\u4EF6\uFF0C<code>$on</code> \u7ED1\u5B9A\u4E8B\u4EF6\uFF0C\u7236\u5B50\u7EC4\u4EF6\u4E4B\u95F4\u53EF\u4EE5\u8FDB\u884C\u901A\u4FE1\uFF0C\u4E0D\u9700\u8981\u4F7F\u7528\u6D4F\u89C8\u5668\u7684 <code>API</code>\u3002</p><p><code>_parentListeners</code> \u5C31\u662F\u7236\u7EC4\u4EF6\u9700\u8981\u5728\u5B50\u7EC4\u4EF6\u6CE8\u518C\u7684\u51FD\u6570\u3002\u8FC7\u7A0B\u540C\u6837\u662F\u8C03\u7528<code>updateListeners</code>\uFF0C\u533A\u522B\u5C31\u662F\u540E\u9762\u7684\u53C2\u6570\uFF0C<code>add</code> <code>remove</code>\u51FD\u6570\u3002\u4E4B\u524D\u7684\u4F8B\u5B50\u4E2D\uFF0C<code>add</code> \u51FD\u6570\u662F <code>addEventListener</code>\uFF0C\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\u662F <code>$on</code>\u3002</p><h2 id="\u5176\u4ED6\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6\u95EE\u9898" aria-hidden="true">#</a> <strong>\u5176\u4ED6\u95EE\u9898</strong></h2><p><strong>vnode\u662F\u865A\u62DF\u8282\u70B9\uFF0C\u4EC0\u4E48\u65F6\u5019\u5C06\u8FD9\u4E2A\u51FD\u6570\u6302\u8F7D\u5230\u771F\u5B9EDOM\u8282\u70B9\u4E2D\uFF1F</strong></p><p>patch\u7684\u65F6\u5019\u4F1A\u6839\u636Evnode\u521B\u5EFA\u771F\u5B9EDOM\u8282\u70B9\uFF0C\u5E76\u4E14\u5C06\u5176\u8D4B\u503C\u4E3Aelm\u5230vnode\u4E2D\uFF0C\u901A\u8FC7\u8FD9\u4E2A\u5F15\u7528\uFF0C\u6DFB\u52A0\u51FD\u6570</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">updateDOMListeners</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">oldVnode</span><span class="token operator">:</span> VNodeWithData<span class="token punctuation">,</span> <span class="token literal-property property">vnode</span><span class="token operator">:</span> VNodeWithData</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isUndef</span><span class="token punctuation">(</span>oldVnode<span class="token punctuation">.</span>data<span class="token punctuation">.</span>on<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isUndef</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>data<span class="token punctuation">.</span>on<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> on <span class="token operator">=</span> vnode<span class="token punctuation">.</span>data<span class="token punctuation">.</span>on <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">const</span> oldOn <span class="token operator">=</span> oldVnode<span class="token punctuation">.</span>data<span class="token punctuation">.</span>on <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    target <span class="token operator">=</span> vnode<span class="token punctuation">.</span>elm
    <span class="token function">normalizeEvents</span><span class="token punctuation">(</span>on<span class="token punctuation">)</span>
    <span class="token function">updateListeners</span><span class="token punctuation">(</span>on<span class="token punctuation">,</span> oldOn<span class="token punctuation">,</span> add<span class="token punctuation">,</span> remove<span class="token punctuation">,</span> createOnceHandler<span class="token punctuation">,</span> vnode<span class="token punctuation">.</span>context<span class="token punctuation">)</span>
    target <span class="token operator">=</span> <span class="token keyword">undefined</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p><strong>\u51FD\u6570\u8C03\u7528\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u600E\u4E48\u4FDD\u8BC1this\u6307\u5411\u5F53\u524Dvue\u5B9E\u4F8B\uFF1F</strong></p><p>\u5728<code>init</code>\u9636\u6BB5\uFF0C<code>initMethods</code>\u8FC7\u7A0B\u4E2D\uFF0C\u5982\u679C\u5224\u65AD\u5C5E\u6027\u662F\u51FD\u6570\uFF0C\u4F1A\u5C06\u5176<code>bind</code>\u5230\u5F53\u524D\u5B9E\u4F8B\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>    vm<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">typeof</span> methods<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">!==</span> <span class="token string">&#39;function&#39;</span> <span class="token operator">?</span> noop <span class="token operator">:</span> <span class="token function">bind</span><span class="token punctuation">(</span>methods<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">,</span> vm<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,54);function e(t,o){return p}var r=s(a,[["render",e]]);export{r as default};
