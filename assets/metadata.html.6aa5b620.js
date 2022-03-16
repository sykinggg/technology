import{r as e,o,c,b as n,d as t,F as l,a,e as s}from"./app.ee3fc36b.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const r={},i=a(`<h1 id="reflect-metadata" tabindex="-1"><a class="header-anchor" href="#reflect-metadata" aria-hidden="true">#</a> Reflect Metadata</h1><h2 id="\u57FA\u7840" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840" aria-hidden="true">#</a> \u57FA\u7840</h2><p>Reflect Metadata \u662F ES7 \u7684\u4E00\u4E2A\u63D0\u6848\uFF0C\u5B83\u4E3B\u8981\u7528\u6765\u5728\u58F0\u660E\u7684\u65F6\u5019\u6DFB\u52A0\u548C\u8BFB\u53D6\u5143\u6570\u636E\u3002TypeScript \u5728 1.5+ \u7684\u7248\u672C\u5DF2\u7ECF\u652F\u6301\u5B83\uFF0C\u4F60\u53EA\u9700\u8981\uFF1A</p><ul><li><code>npm i reflect-metadata --save</code>\u3002</li><li>\u5728 <code>tsconfig.json</code> \u91CC\u914D\u7F6E <code>emitDecoratorMetadata</code> \u9009\u9879\u3002</li></ul><p>Reflect Metadata \u7684 API \u53EF\u4EE5\u7528\u4E8E\u7C7B\u6216\u8005\u7C7B\u7684\u5C5E\u6027\u4E0A\uFF0C\u5982\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">metadata</span><span class="token punctuation">(</span>
  metadataKey<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span>
  metadataValue<span class="token operator">:</span> <span class="token builtin">any</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token punctuation">(</span>target<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token punctuation">(</span>target<span class="token operator">:</span> Object<span class="token punctuation">,</span> propertyKey<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">symbol</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><code>Reflect.metadata</code> \u5F53\u4F5C <code>Decorator</code> \u4F7F\u7528\uFF0C\u5F53\u4FEE\u9970\u7C7B\u65F6\uFF0C\u5728\u7C7B\u4E0A\u6DFB\u52A0\u5143\u6570\u636E\uFF0C\u5F53\u4FEE\u9970\u7C7B\u5C5E\u6027\u65F6\uFF0C\u5728\u7C7B\u539F\u578B\u7684\u5C5E\u6027\u4E0A\u6DFB\u52A0\u5143\u6570\u636E\uFF0C\u5982\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token decorator"><span class="token at operator">@</span><span class="token function">Reflect</span></span><span class="token punctuation">.</span><span class="token function">metadata</span><span class="token punctuation">(</span><span class="token string">&#39;inClass&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;A&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Reflect</span></span><span class="token punctuation">.</span><span class="token function">metadata</span><span class="token punctuation">(</span><span class="token string">&#39;inMethod&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;B&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">public</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;hello world&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Reflect<span class="token punctuation">.</span><span class="token function">getMetadata</span><span class="token punctuation">(</span><span class="token string">&#39;inClass&#39;</span><span class="token punctuation">,</span> Test<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;A&#39;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Reflect<span class="token punctuation">.</span><span class="token function">getMetadata</span><span class="token punctuation">(</span><span class="token string">&#39;inMethod&#39;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;B&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u5B83\u5177\u6709\u8BF8\u591A\u4F7F\u7528\u573A\u666F\u3002</p><h2 id="\u83B7\u53D6\u7C7B\u578B\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u7C7B\u578B\u4FE1\u606F" aria-hidden="true">#</a> \u83B7\u53D6\u7C7B\u578B\u4FE1\u606F</h2>`,10),k=s("\u8B6C\u5982\u5728 "),b={href:"https://github.com/kaorun343/vue-property-decorator",target:"_blank",rel:"noopener noreferrer"},d=n("code",null,"vue-property-decorator",-1),m=s(" 6.1 \u53CA\u5176\u4EE5\u4E0B\u7248\u672C\u4E2D\uFF0C\u901A\u8FC7\u4F7F\u7528 "),g=n("code",null,"Reflect.getMetadata",-1),h=s(" API\uFF0C"),f=n("code",null,"Prop",-1),y=s(" Decorator \u80FD\u83B7\u53D6\u5C5E\u6027\u7C7B\u578B\u4F20\u81F3 Vue\uFF0C\u7B80\u8981\u4EE3\u7801\u5982\u4E0B\uFF1A"),v=a(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">Prop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> PropertyDecorator <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> type <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">getMetadata</span><span class="token punctuation">(</span><span class="token string">&#39;design:type&#39;</span><span class="token punctuation">,</span> target<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> type: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>type<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// other...</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">SomeClass</span> <span class="token punctuation">{</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Prop</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">public</span> Aprop<span class="token operator">!</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u8FD0\u884C\u4EE3\u7801\u53EF\u5728\u63A7\u5236\u53F0\u770B\u5230 <code>Aprop type: string</code>\u3002\u9664\u80FD\u83B7\u53D6\u5C5E\u6027\u7C7B\u578B\u5916\uFF0C\u901A\u8FC7 <code>Reflect.getMetadata(&quot;design:paramtypes&quot;, target, key)</code> \u548C <code>Reflect.getMetadata(&quot;design:returntype&quot;, target, key)</code> \u53EF\u4EE5\u5206\u522B\u83B7\u53D6\u51FD\u6570\u53C2\u6570\u7C7B\u578B\u548C\u8FD4\u56DE\u503C\u7C7B\u578B\u3002</p><h2 id="\u81EA\u5B9A\u4E49-metadatakey" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49-metadatakey" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49 <code>metadataKey</code></h2><p>\u9664\u80FD\u83B7\u53D6\u7C7B\u578B\u4FE1\u606F\u5916\uFF0C\u5E38\u7528\u4E8E\u81EA\u5B9A\u4E49 <code>metadataKey</code>\uFF0C\u5E76\u5728\u5408\u9002\u7684\u65F6\u673A\u83B7\u53D6\u5B83\u7684\u503C\uFF0C\u793A\u4F8B\u5982\u4E0B\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">classDecorator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> ClassDecorator <span class="token punctuation">{</span>
  <span class="token keyword">return</span> target <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5728\u7C7B\u4E0A\u5B9A\u4E49\u5143\u6570\u636E\uFF0Ckey \u4E3A \`classMetaData\`\uFF0Cvalue \u4E3A \`a\`</span>
    Reflect<span class="token punctuation">.</span><span class="token function">defineMetadata</span><span class="token punctuation">(</span><span class="token string">&#39;classMetaData&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> target<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">methodDecorator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> MethodDecorator <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> descriptor<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5728\u7C7B\u7684\u539F\u578B\u5C5E\u6027 &#39;someMethod&#39; \u4E0A\u5B9A\u4E49\u5143\u6570\u636E\uFF0Ckey \u4E3A \`methodMetaData\`\uFF0Cvalue \u4E3A \`b\`</span>
    Reflect<span class="token punctuation">.</span><span class="token function">defineMetadata</span><span class="token punctuation">(</span><span class="token string">&#39;methodMetaData&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> target<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">classDecorator</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">SomeClass</span> <span class="token punctuation">{</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">methodDecorator</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token function">someMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

Reflect<span class="token punctuation">.</span><span class="token function">getMetadata</span><span class="token punctuation">(</span><span class="token string">&#39;classMetaData&#39;</span><span class="token punctuation">,</span> SomeClass<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;a&#39;</span>
Reflect<span class="token punctuation">.</span><span class="token function">getMetadata</span><span class="token punctuation">(</span><span class="token string">&#39;methodMetaData&#39;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">SomeClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;someMethod&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;b&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="\u4F8B\u5B50" tabindex="-1"><a class="header-anchor" href="#\u4F8B\u5B50" aria-hidden="true">#</a> \u4F8B\u5B50</h2><h3 id="\u63A7\u5236\u53CD\u8F6C\u548C\u4F9D\u8D56\u6CE8\u5165" tabindex="-1"><a class="header-anchor" href="#\u63A7\u5236\u53CD\u8F6C\u548C\u4F9D\u8D56\u6CE8\u5165" aria-hidden="true">#</a> \u63A7\u5236\u53CD\u8F6C\u548C\u4F9D\u8D56\u6CE8\u5165</h3>`,7),w=s("\u5728 Angular 2+ \u7684\u7248\u672C\u4E2D\uFF0C"),M={href:"https://segmentfault.com/a/1190000008626680",target:"_blank",rel:"noopener noreferrer"},_=s("\u63A7\u5236\u53CD\u8F6C\u4E0E\u4F9D\u8D56\u6CE8\u5165"),T=s("\u4FBF\u662F\u57FA\u4E8E\u6B64\u5B9E\u73B0\uFF0C\u73B0\u5728\uFF0C\u6765\u5B9E\u73B0\u4E00\u4E2A\u7B80\u5355\u7248\uFF1A"),A=a(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Constructor<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">any</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">T</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> Injectable <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> ClassDecorator <span class="token operator">=&gt;</span> target <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">OtherService</span> <span class="token punctuation">{</span>
  a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Injectable</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">TestService</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">public</span> <span class="token keyword">readonly</span> otherService<span class="token operator">:</span> OtherService<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token function">testMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>otherService<span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> Factory <span class="token operator">=</span> <span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>target<span class="token operator">:</span> Constructor<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u83B7\u53D6\u6240\u6709\u6CE8\u5165\u7684\u670D\u52A1</span>
  <span class="token keyword">const</span> providers <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">getMetadata</span><span class="token punctuation">(</span><span class="token string">&#39;design:paramtypes&#39;</span><span class="token punctuation">,</span> target<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [OtherService]</span>
  <span class="token keyword">const</span> args <span class="token operator">=</span> providers<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>provider<span class="token operator">:</span> Constructor<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">provider</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">target</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">Factory</span><span class="token punctuation">(</span>TestService<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">testMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h3 id="controller-\u4E0E-get-\u7684\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#controller-\u4E0E-get-\u7684\u5B9E\u73B0" aria-hidden="true">#</a> Controller \u4E0E Get \u7684\u5B9E\u73B0</h3><p>\u5982\u679C\u4F60\u5728\u4F7F\u7528 TypeScript \u5F00\u53D1 Node \u5E94\u7528\uFF0C\u76F8\u4FE1\u4F60\u5BF9 <code>Controller</code>\u3001<code>Get</code>\u3001<code>POST</code> \u8FD9\u4E9B Decorator\uFF0C\u5E76\u4E0D\u964C\u751F\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token decorator"><span class="token at operator">@</span><span class="token function">Controller</span></span><span class="token punctuation">(</span><span class="token string">&#39;/test&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">SomeClass</span> <span class="token punctuation">{</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Get</span></span><span class="token punctuation">(</span><span class="token string">&#39;/a&#39;</span><span class="token punctuation">)</span>
  <span class="token function">someGetMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;hello world&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Post</span></span><span class="token punctuation">(</span><span class="token string">&#39;/b&#39;</span><span class="token punctuation">)</span>
  <span class="token function">somePostMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u8FD9\u4E9B Decorator \u4E5F\u662F\u57FA\u4E8E <code>Reflect Metadata</code> \u5B9E\u73B0\uFF0C\u8FD9\u6B21\uFF0C\u5C06 <code>metadataKey</code> \u5B9A\u4E49\u5728 <code>descriptor</code> \u7684 <code>value</code> \u4E0A\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token constant">METHOD_METADATA</span> <span class="token operator">=</span> <span class="token string">&#39;method&#39;</span>\uFF1B
<span class="token keyword">const</span> <span class="token constant">PATH_METADATA</span> <span class="token operator">=</span> <span class="token string">&#39;path&#39;</span>\uFF1B

<span class="token keyword">const</span> Controller <span class="token operator">=</span> <span class="token punctuation">(</span>path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> ClassDecorator <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> target <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    Reflect<span class="token punctuation">.</span><span class="token function">defineMetadata</span><span class="token punctuation">(</span><span class="token constant">PATH_METADATA</span><span class="token punctuation">,</span> path<span class="token punctuation">,</span> target<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">createMappingDecorator</span> <span class="token operator">=</span> <span class="token punctuation">(</span>method<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> MethodDecorator <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> descriptor<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    Reflect<span class="token punctuation">.</span><span class="token function">defineMetadata</span><span class="token punctuation">(</span><span class="token constant">PATH_METADATA</span><span class="token punctuation">,</span> path<span class="token punctuation">,</span> descriptor<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    Reflect<span class="token punctuation">.</span><span class="token function">defineMetadata</span><span class="token punctuation">(</span><span class="token constant">METHOD_METADATA</span><span class="token punctuation">,</span> method<span class="token punctuation">,</span> descriptor<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> Get <span class="token operator">=</span> <span class="token function">createMappingDecorator</span><span class="token punctuation">(</span><span class="token string">&#39;GET&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> Post <span class="token operator">=</span> <span class="token function">createMappingDecorator</span><span class="token punctuation">(</span><span class="token string">&#39;POST&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>\u63A5\u7740\uFF0C\u521B\u5EFA\u4E00\u4E2A\u51FD\u6570\uFF0C\u6620\u5C04\u51FA <code>route</code>\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">mapRoute</span><span class="token punctuation">(</span>instance<span class="token operator">:</span> Object<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> prototype <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>instance<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \u7B5B\u9009\u51FA\u7C7B\u7684 methodName</span>
  <span class="token keyword">const</span> methodsNames <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyNames</span><span class="token punctuation">(</span>prototype<span class="token punctuation">)</span>
                              <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>item <span class="token operator">=&gt;</span> <span class="token operator">!</span><span class="token function">isConstructor</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isFunction</span><span class="token punctuation">(</span>prototype<span class="token punctuation">[</span>item<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\uFF1B
  <span class="token keyword">return</span> methodsNames<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>methodName <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> fn <span class="token operator">=</span> prototype<span class="token punctuation">[</span>methodName<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token comment">// \u53D6\u51FA\u5B9A\u4E49\u7684 metadata</span>
    <span class="token keyword">const</span> route <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">getMetadata</span><span class="token punctuation">(</span><span class="token constant">PATH_METADATA</span><span class="token punctuation">,</span> fn<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> method <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">getMetadata</span><span class="token punctuation">(</span><span class="token constant">METHOD_METADATA</span><span class="token punctuation">,</span> fn<span class="token punctuation">)</span>\uFF1B
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      route<span class="token punctuation">,</span>
      method<span class="token punctuation">,</span>
      fn<span class="token punctuation">,</span>
      methodName
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>\u56E0\u6B64\uFF0C\u53EF\u4EE5\u5F97\u5230\u4E00\u4E9B\u6709\u7528\u7684\u4FE1\u606F\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>Reflect<span class="token punctuation">.</span><span class="token function">getMetadata</span><span class="token punctuation">(</span><span class="token constant">PATH_METADATA</span><span class="token punctuation">,</span> SomeClass<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;/test&#39;</span>

<span class="token function">mapRoute</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">SomeClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * [<span class="token punctuation">{</span>
 *    route: &#39;/a&#39;,
 *    method: &#39;GET&#39;,
 *    fn: someGetMethod() <span class="token punctuation">{</span> ... <span class="token punctuation">}</span>,
 *    methodName: &#39;someGetMethod&#39;
 *  <span class="token punctuation">}</span>,<span class="token punctuation">{</span>
 *    route: &#39;/b&#39;,
 *    method: &#39;POST&#39;,
 *    fn: somePostMethod() <span class="token punctuation">{</span> ... <span class="token punctuation">}</span>,
 *    methodName: &#39;somePostMethod&#39;
 * <span class="token punctuation">}</span>]
 *
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>\u6700\u540E\uFF0C\u53EA\u9700\u628A <code>route</code> \u76F8\u5173\u4FE1\u606F\u7ED1\u5728 <code>express</code> \u6216\u8005 <code>koa</code> \u4E0A\u5C31 ok \u4E86\u3002</p>`,11);function D(R,x){const p=e("ExternalLinkIcon");return o(),c(l,null,[i,n("p",null,[k,n("a",b,[d,t(p)]),m,g,h,f,y]),v,n("p",null,[w,n("a",M,[_,t(p)]),T]),A],64)}var S=u(r,[["render",D]]);export{S as default};
