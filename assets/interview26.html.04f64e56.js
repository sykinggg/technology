import{a as n}from"./app.ba47fc91.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><h1 id="\u4EE3\u7801\u5206\u5272" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u5206\u5272" aria-hidden="true">#</a> \u4EE3\u7801\u5206\u5272</h1><h2 id="\u6253\u5305" tabindex="-1"><a class="header-anchor" href="#\u6253\u5305" aria-hidden="true">#</a> \u6253\u5305</h2><p>\u5927\u591A\u6570 React \u5E94\u7528\u90FD\u4F1A\u4F7F\u7528 <code>Webpack</code>\uFF0C<code>Rollup</code> \u6216 <code>Browserify</code> \u8FD9\u7C7B\u7684\u6784\u5EFA\u5DE5\u5177\u6765\u6253\u5305\u6587\u4EF6\u3002\u6253\u5305\u662F\u4E00\u4E2A\u5C06\u6587\u4EF6\u5F15\u5165\u5E76\u5408\u5E76\u5230\u4E00\u4E2A\u5355\u72EC\u6587\u4EF6\u7684\u8FC7\u7A0B\uFF0C\u6700\u7EC8\u5F62\u6210\u4E00\u4E2A \u201Cbundle\u201D\u3002\u63A5\u7740\u5728\u9875\u9762\u4E0A\u5F15\u5165\u8BE5 bundle\uFF0C\u6574\u4E2A\u5E94\u7528\u5373\u53EF\u4E00\u6B21\u6027\u52A0\u8F7D\u3002</p><p>\u793A\u4F8B</p><p><strong>App\u6587\u4EF6</strong>\uFF1A</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token comment">// app.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> add <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./math.js&#39;</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">,</span> <span class="token number">26</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 42</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token comment">// math.js</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><strong>\u6253\u5305\u540E\u6587\u4EF6</strong>\uFF1A</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">,</span> <span class="token number">26</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 42</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><blockquote><p><strong>\u6CE8\u610F</strong>\uFF1A</p><p>\u6700\u7EC8\u7684\u6253\u5305\u6587\u4EF6\u770B\u8D77\u6765\u4F1A\u548C\u4E0A\u9762\u7684\u4F8B\u5B50\u533A\u522B\u5F88\u5927\u3002</p></blockquote><h2 id="import" tabindex="-1"><a class="header-anchor" href="#import" aria-hidden="true">#</a> import()</h2><p>\u5728\u7684\u5E94\u7528\u4E2D\u5F15\u5165\u4EE3\u7801\u5206\u5272\u7684\u6700\u4F73\u65B9\u5F0F\u662F\u901A\u8FC7\u52A8\u6001 <code>import()</code> \u8BED\u6CD5</p><p><strong>\u4F7F\u7528\u4E4B\u524D</strong></p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> add <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./math&#39;</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">,</span> <span class="token number">26</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>\u4F7F\u7528\u4E4B\u540E</strong></p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&quot;./math&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">math</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>math<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">,</span> <span class="token number">26</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5F53 Webpack \u89E3\u6790\u5230\u8BE5\u8BED\u6CD5\u65F6\uFF0C\u4F1A\u81EA\u52A8\u8FDB\u884C\u4EE3\u7801\u5206\u5272</p><h2 id="react-lazy" tabindex="-1"><a class="header-anchor" href="#react-lazy" aria-hidden="true">#</a> React.lazy</h2><blockquote><p><strong>\u6CE8\u610F</strong>:</p><p><code>React.lazy</code> \u548C <code>Suspense</code> \u6280\u672F\u8FD8\u4E0D\u652F\u6301\u670D\u52A1\u7AEF\u6E32\u67D3</p></blockquote><p><code>React.lazy</code> \u51FD\u6570\u80FD\u8BA9\u50CF\u6E32\u67D3\u5E38\u89C4\u7EC4\u4EF6\u4E00\u6837\u5904\u7406\u52A8\u6001\u5F15\u5165\uFF08\u7684\u7EC4\u4EF6\uFF09</p><p><strong>\u4F7F\u7528\u4E4B\u524D</strong></p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">import</span> OtherComponent <span class="token keyword">from</span> <span class="token string">&#39;./OtherComponent&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>\u4F7F\u7528\u4E4B\u540E</strong></p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">const</span> OtherComponent <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./OtherComponent&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u6B64\u4EE3\u7801\u5C06\u4F1A\u5728\u7EC4\u4EF6\u9996\u6B21\u6E32\u67D3\u65F6\uFF0C\u81EA\u52A8\u5BFC\u5165\u5305\u542B <code>OtherComponent</code> \u7EC4\u4EF6\u7684\u5305\u3002</p><p><code>React.lazy</code> \u63A5\u53D7\u4E00\u4E2A\u51FD\u6570\uFF0C\u8FD9\u4E2A\u51FD\u6570\u9700\u8981\u52A8\u6001\u8C03\u7528 <code>import()</code>\u3002\u5B83\u5FC5\u987B\u8FD4\u56DE\u4E00\u4E2A <code>Promise</code>\uFF0C\u8BE5 Promise \u9700\u8981 resolve \u4E00\u4E2A <code>default</code> export \u7684 React \u7EC4\u4EF6\u3002</p><p>\u7136\u540E\u5E94\u5728 <code>Suspense</code> \u7EC4\u4EF6\u4E2D\u6E32\u67D3 lazy \u7EC4\u4EF6\uFF0C\u5982\u6B64\u4F7F\u5F97\u53EF\u4EE5\u4F7F\u7528\u5728\u7B49\u5F85\u52A0\u8F7D lazy \u7EC4\u4EF6\u65F6\u505A\u4F18\u96C5\u964D\u7EA7\uFF08\u5982 loading \u6307\u793A\u5668\u7B49\uFF09\u3002</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Suspense <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> OtherComponent <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./OtherComponent&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">MyComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Suspense</span></span> <span class="token attr-name">fallback</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Loading...</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">OtherComponent</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Suspense</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p><code>fallback</code> \u5C5E\u6027\u63A5\u53D7\u4EFB\u4F55\u5728\u7EC4\u4EF6\u52A0\u8F7D\u8FC7\u7A0B\u4E2D\u60F3\u5C55\u793A\u7684 React \u5143\u7D20\u3002\u53EF\u4EE5\u5C06 <code>Suspense</code> \u7EC4\u4EF6\u7F6E\u4E8E\u61D2\u52A0\u8F7D\u7EC4\u4EF6\u4E4B\u4E0A\u7684\u4EFB\u4F55\u4F4D\u7F6E\u3002\u751A\u81F3\u53EF\u4EE5\u7528\u4E00\u4E2A <code>Suspense</code> \u7EC4\u4EF6\u5305\u88F9\u591A\u4E2A\u61D2\u52A0\u8F7D\u7EC4\u4EF6\u3002</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Suspense <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> OtherComponent <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./OtherComponent&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> AnotherComponent <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./AnotherComponent&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">MyComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Suspense</span></span> <span class="token attr-name">fallback</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Loading...</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">OtherComponent</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">AnotherComponent</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Suspense</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="\u5F02\u5E38\u6355\u83B7\u8FB9\u754C-error-boundaries" tabindex="-1"><a class="header-anchor" href="#\u5F02\u5E38\u6355\u83B7\u8FB9\u754C-error-boundaries" aria-hidden="true">#</a> \u5F02\u5E38\u6355\u83B7\u8FB9\u754C\uFF08Error boundaries\uFF09</h2><p>\u5982\u679C\u6A21\u5757\u52A0\u8F7D\u5931\u8D25\uFF08\u5982\u7F51\u7EDC\u95EE\u9898\uFF09\uFF0C\u5B83\u4F1A\u89E6\u53D1\u4E00\u4E2A\u9519\u8BEF\u3002\u53EF\u4EE5\u901A\u8FC7<a href="">\u5F02\u5E38\u6355\u83B7\u8FB9\u754C\uFF08Error boundaries\uFF09</a>\u6280\u672F\u6765\u5904\u7406\u8FD9\u4E9B\u60C5\u51B5\uFF0C\u4EE5\u663E\u793A\u826F\u597D\u7684\u7528\u6237\u4F53\u9A8C\u5E76\u7BA1\u7406\u6062\u590D\u4E8B\u5B9C\u3002</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Suspense <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> MyErrorBoundary <span class="token keyword">from</span> <span class="token string">&#39;./MyErrorBoundary&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> OtherComponent <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./OtherComponent&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> AnotherComponent <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./AnotherComponent&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">MyComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MyErrorBoundary</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Suspense</span></span> <span class="token attr-name">fallback</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Loading...</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">OtherComponent</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">AnotherComponent</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Suspense</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">MyErrorBoundary</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="\u57FA\u4E8E\u8DEF\u7531\u7684\u4EE3\u7801\u5206\u5272" tabindex="-1"><a class="header-anchor" href="#\u57FA\u4E8E\u8DEF\u7531\u7684\u4EE3\u7801\u5206\u5272" aria-hidden="true">#</a> \u57FA\u4E8E\u8DEF\u7531\u7684\u4EE3\u7801\u5206\u5272</h2><p>\u51B3\u5B9A\u5728\u54EA\u5F15\u5165\u4EE3\u7801\u5206\u5272\u9700\u8981\u4E00\u4E9B\u6280\u5DE7\u3002\u9700\u8981\u786E\u4FDD\u9009\u62E9\u7684\u4F4D\u7F6E\u80FD\u591F\u5747\u5300\u5730\u5206\u5272\u4EE3\u7801\u5305\u800C\u4E0D\u4F1A\u5F71\u54CD\u7528\u6237\u4F53\u9A8C\u3002</p><p>\u4E00\u4E2A\u4E0D\u9519\u7684\u9009\u62E9\u662F\u4ECE\u8DEF\u7531\u5F00\u59CB\u3002\u5927\u591A\u6570\u7F51\u7EDC\u7528\u6237\u4E60\u60EF\u4E8E\u9875\u9762\u4E4B\u95F4\u80FD\u6709\u4E2A\u52A0\u8F7D\u5207\u6362\u8FC7\u7A0B\u3002\u4E5F\u53EF\u4EE5\u9009\u62E9\u91CD\u65B0\u6E32\u67D3\u6574\u4E2A\u9875\u9762\uFF0C\u8FD9\u6837\u60A8\u7684\u7528\u6237\u5C31\u4E0D\u5FC5\u5728\u6E32\u67D3\u7684\u540C\u65F6\u518D\u548C\u9875\u9762\u4E0A\u7684\u5176\u4ED6\u5143\u7D20\u8FDB\u884C\u4EA4\u4E92\u3002</p><p>\u8FD9\u91CC\u662F\u4E00\u4E2A\u4F8B\u5B50\uFF0C\u5C55\u793A\u5982\u4F55\u5728\u7684\u5E94\u7528\u4E2D\u4F7F\u7528 <code>React.lazy</code> \u548C <code>React Router</code> \u8FD9\u7C7B\u7684\u7B2C\u4E09\u65B9\u5E93\uFF0C\u6765\u914D\u7F6E\u57FA\u4E8E\u8DEF\u7531\u7684\u4EE3\u7801\u5206\u5272\u3002</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Suspense<span class="token punctuation">,</span> lazy <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> BrowserRouter <span class="token keyword">as</span> Router<span class="token punctuation">,</span> Route<span class="token punctuation">,</span> Switch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-router-dom&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> Home <span class="token operator">=</span> <span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./routes/Home&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> About <span class="token operator">=</span> <span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./routes/About&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Router</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Suspense</span></span> <span class="token attr-name">fallback</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Loading...</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Route</span></span> <span class="token attr-name">exact</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/<span class="token punctuation">&quot;</span></span> <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>Home<span class="token punctuation">}</span></span><span class="token punctuation">/&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Route</span></span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/about<span class="token punctuation">&quot;</span></span> <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>About<span class="token punctuation">}</span></span><span class="token punctuation">/&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Switch</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Suspense</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Router</span></span><span class="token punctuation">&gt;</span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="\u547D\u540D\u5BFC\u51FA-named-exports" tabindex="-1"><a class="header-anchor" href="#\u547D\u540D\u5BFC\u51FA-named-exports" aria-hidden="true">#</a> \u547D\u540D\u5BFC\u51FA\uFF08Named Exports\uFF09</h2><p><code>React.lazy</code> \u76EE\u524D\u53EA\u652F\u6301\u9ED8\u8BA4\u5BFC\u51FA\uFF08default exports\uFF09\u3002\u5982\u679C\u60F3\u88AB\u5F15\u5165\u7684\u6A21\u5757\u4F7F\u7528\u547D\u540D\u5BFC\u51FA\uFF08named exports\uFF09\uFF0C\u53EF\u4EE5\u521B\u5EFA\u4E00\u4E2A\u4E2D\u95F4\u6A21\u5757\uFF0C\u6765\u91CD\u65B0\u5BFC\u51FA\u4E3A\u9ED8\u8BA4\u6A21\u5757\u3002\u8FD9\u80FD\u4FDD\u8BC1 tree shaking \u4E0D\u4F1A\u51FA\u9519\uFF0C\u5E76\u4E14\u4E0D\u5FC5\u5F15\u5165\u4E0D\u9700\u8981\u7684\u7EC4\u4EF6\u3002</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token comment">// ManyComponents.js</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> MyComponent <span class="token operator">=</span> <span class="token comment">/* ... */</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> MyUnusedComponent <span class="token operator">=</span> <span class="token comment">/* ... */</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token comment">// MyComponent.js</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> MyComponent <span class="token keyword">as</span> <span class="token keyword">default</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./ManyComponents.js&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token comment">// MyApp.js</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> lazy <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> MyComponent <span class="token operator">=</span> <span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&quot;./MyComponent.js&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,44);function t(e,o){return p}var u=s(a,[["render",t]]);export{u as default};
