import{a as n}from"./app.ba47fc91.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<blockquote><p>Ref \u8F6C\u53D1\u662F\u4E00\u9879\u5C06 <code>ref</code> \u81EA\u52A8\u5730\u901A\u8FC7\u7EC4\u4EF6\u4F20\u9012\u5230\u5176\u4E00\u5B50\u7EC4\u4EF6\u7684\u6280\u5DE7\u3002\u5BF9\u4E8E\u5927\u591A\u6570\u5E94\u7528\u4E2D\u7684\u7EC4\u4EF6\u6765\u8BF4\uFF0C\u8FD9\u901A\u5E38\u4E0D\u662F\u5FC5\u9700\u7684\u3002\u4F46\u5176\u5BF9\u67D0\u4E9B\u7EC4\u4EF6\uFF0C\u5C24\u5176\u662F\u53EF\u91CD\u7528\u7684\u7EC4\u4EF6\u5E93\u662F\u5F88\u6709\u7528\u7684\u3002</p></blockquote><h2 id="\u8F6C\u53D1-refs-\u5230-dom-\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u8F6C\u53D1-refs-\u5230-dom-\u7EC4\u4EF6" aria-hidden="true">#</a> \u8F6C\u53D1 refs \u5230 DOM \u7EC4\u4EF6</h2><p>\u8003\u8651\u8FD9\u4E2A\u6E32\u67D3\u539F\u751F DOM \u5143\u7D20 <code>button</code> \u7684 <code>FancyButton</code> \u7EC4\u4EF6\uFF1A</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">FancyButton</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>FancyButton<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>children<span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>React \u7EC4\u4EF6\u9690\u85CF\u5176\u5B9E\u73B0\u7EC6\u8282\uFF0C\u5305\u62EC\u5176\u6E32\u67D3\u7ED3\u679C\u3002\u5176\u4ED6\u4F7F\u7528 <code>FancyButton</code> \u7684\u7EC4\u4EF6<strong>\u901A\u5E38\u4E0D\u9700\u8981</strong>\u83B7\u53D6\u5185\u90E8\u7684 DOM \u5143\u7D20 <code>button</code> \u7684 <code>ref</code>\u3002\u8FD9\u5F88\u597D\uFF0C\u56E0\u4E3A\u8FD9\u9632\u6B62\u7EC4\u4EF6\u8FC7\u5EA6\u4F9D\u8D56\u5176\u4ED6\u7EC4\u4EF6\u7684 DOM \u7ED3\u6784\u3002</p><p>\u867D\u7136\u8FD9\u79CD\u5C01\u88C5\u5BF9\u7C7B\u4F3C <code>FeedStory</code> \u6216 <code>Comment</code> \u8FD9\u6837\u7684\u5E94\u7528\u7EA7\u7EC4\u4EF6\u662F\u7406\u60F3\u7684\uFF0C\u4F46\u5176\u5BF9 <code>FancyButton</code> \u6216 <code>MyTextInput</code> \u8FD9\u6837\u7684\u9AD8\u53EF\u590D\u7528\u201C\u53F6\u201D\u7EC4\u4EF6\u6765\u8BF4\u53EF\u80FD\u662F\u4E0D\u65B9\u4FBF\u7684\u3002\u8FD9\u4E9B\u7EC4\u4EF6\u503E\u5411\u4E8E\u5728\u6574\u4E2A\u5E94\u7528\u4E2D\u4EE5\u4E00\u79CD\u7C7B\u4F3C\u5E38\u89C4 DOM <code>button</code> \u548C <code>input</code> \u7684\u65B9\u5F0F\u88AB\u4F7F\u7528\uFF0C\u5E76\u4E14\u8BBF\u95EE\u5176 DOM \u8282\u70B9\u5BF9\u7BA1\u7406\u7126\u70B9\uFF0C\u9009\u4E2D\u6216\u52A8\u753B\u6765\u8BF4\u662F\u4E0D\u53EF\u907F\u514D\u7684\u3002</p><p><strong>Ref \u8F6C\u53D1\u662F\u4E00\u4E2A\u53EF\u9009\u7279\u6027\uFF0C\u5176\u5141\u8BB8\u67D0\u4E9B\u7EC4\u4EF6\u63A5\u6536 ref\uFF0C\u5E76\u5C06\u5176\u5411\u4E0B\u4F20\u9012\uFF08\u6362\u53E5\u8BDD\u8BF4\uFF0C\u201C\u8F6C\u53D1\u201D\u5B83\uFF09\u7ED9\u5B50\u7EC4\u4EF6</strong>\u3002</p><p>\u5728\u4E0B\u9762\u7684\u793A\u4F8B\u4E2D\uFF0C<code>FancyButton</code> \u4F7F\u7528 <code>React.forwardRef</code> \u6765\u83B7\u53D6\u4F20\u9012\u7ED9\u5B83\u7684 ref\uFF0C\u7136\u540E\u8F6C\u53D1\u5230\u5B83\u6E32\u67D3\u7684 DOM <code>button</code>\uFF1A</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">const</span> FancyButton <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">forwardRef</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> ref</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>ref<span class="token punctuation">}</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>FancyButton<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>children<span class="token punctuation">}</span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u53EF\u4EE5\u76F4\u63A5\u83B7\u53D6 DOM button \u7684 ref\uFF1A</span>
<span class="token keyword">const</span> ref <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">FancyButton</span></span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>ref<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Click me!</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">FancyButton</span></span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u8FD9\u6837\uFF0C\u4F7F\u7528 <code>FancyButton</code> \u7684\u7EC4\u4EF6\u53EF\u4EE5\u83B7\u53D6\u5E95\u5C42 DOM \u8282\u70B9 <code>button</code> \u7684 <code>ref</code> \uFF0C\u5E76\u5728\u5FC5\u8981\u65F6\u8BBF\u95EE\uFF0C\u5C31\u50CF\u5176\u76F4\u63A5\u4F7F\u7528 DOM <code>button</code> \u4E00\u6837\u3002</p><p>\u4EE5\u4E0B\u662F\u5BF9\u4E0A\u8FF0\u793A\u4F8B\u53D1\u751F\u60C5\u51B5\u7684\u9010\u6B65\u89E3\u91CA\uFF1A</p><ol><li><p>\u901A\u8FC7\u8C03\u7528 <code>React.createRef</code> \u521B\u5EFA\u4E86\u4E00\u4E2A <code>React ref</code> \u5E76\u5C06\u5176\u8D4B\u503C\u7ED9 <code>ref</code> \u53D8\u91CF\u3002</p></li><li><p>\u901A\u8FC7\u6307\u5B9A <code>ref</code> \u4E3A JSX \u5C5E\u6027\uFF0C\u5C06\u5176\u5411\u4E0B\u4F20\u9012\u7ED9 <code>&lt;FancyButton ref={ref}&gt;</code>\u3002</p></li><li><p>React \u4F20\u9012 <code>ref</code> \u7ED9 <code>forwardRef</code> \u5185\u51FD\u6570 <code>(props, ref) =&gt; ...</code>\uFF0C\u4F5C\u4E3A\u5176\u7B2C\u4E8C\u4E2A\u53C2\u6570\u3002</p></li><li><p>\u5411\u4E0B\u8F6C\u53D1\u8BE5 <code>ref</code> \u53C2\u6570\u5230 <code>&lt;button ref={ref}&gt;</code>\uFF0C\u5C06\u5176\u6307\u5B9A\u4E3A JSX \u5C5E\u6027\u3002</p></li><li><p>\u5F53 ref \u6302\u8F7D\u5B8C\u6210\uFF0C<code>ref.current</code> \u5C06\u6307\u5411 <code>&lt;button&gt;</code> DOM \u8282\u70B9\u3002</p></li></ol><blockquote><p><strong>\u6CE8\u610F</strong></p><p>\u7B2C\u4E8C\u4E2A\u53C2\u6570 <code>ref</code> \u53EA\u5728\u4F7F\u7528 <code>React.forwardRef</code> \u5B9A\u4E49\u7EC4\u4EF6\u65F6\u5B58\u5728\u3002\u5E38\u89C4\u51FD\u6570\u548C <code>class</code> \u7EC4\u4EF6\u4E0D\u63A5\u6536 <code>ref</code> \u53C2\u6570\uFF0C\u4E14 <code>props</code> \u4E2D\u4E5F\u4E0D\u5B58\u5728 <code>ref</code>\u3002</p><p><code>Ref</code> \u8F6C\u53D1\u4E0D\u4EC5\u9650\u4E8E <code>DOM</code> \u7EC4\u4EF6\uFF0C\u4E5F\u53EF\u4EE5\u8F6C\u53D1 <code>refs</code> \u5230 <code>class</code> \u7EC4\u4EF6\u5B9E\u4F8B\u4E2D\u3002</p></blockquote><h1 id="\u7EC4\u4EF6\u5E93\u7EF4\u62A4\u8005\u7684\u6CE8\u610F\u4E8B\u9879" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u5E93\u7EF4\u62A4\u8005\u7684\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a> \u7EC4\u4EF6\u5E93\u7EF4\u62A4\u8005\u7684\u6CE8\u610F\u4E8B\u9879</h1><p><strong>\u5F53\u5F00\u59CB\u5728\u7EC4\u4EF6\u5E93\u4E2D\u4F7F\u7528 forwardRef \u65F6\uFF0C\u5E94\u5F53\u5C06\u5176\u89C6\u4E3A\u4E00\u4E2A\u7834\u574F\u6027\u66F4\u6539\uFF0C\u5E76\u53D1\u5E03\u5E93\u7684\u4E00\u4E2A\u65B0\u7684\u4E3B\u7248\u672C</strong>\u3002 \u8FD9\u662F\u56E0\u4E3A\u7684\u5E93\u53EF\u80FD\u4F1A\u6709\u660E\u663E\u4E0D\u540C\u7684\u884C\u4E3A\uFF08\u4F8B\u5982 refs \u88AB\u5206\u914D\u7ED9\u4E86\u8C01\uFF0C\u4EE5\u53CA\u5BFC\u51FA\u4E86\u4EC0\u4E48\u7C7B\u578B\uFF09\uFF0C\u5E76\u4E14\u8FD9\u6837\u53EF\u80FD\u4F1A\u5BFC\u81F4\u4F9D\u8D56\u65E7\u884C\u4E3A\u7684\u5E94\u7528\u548C\u5176\u4ED6\u5E93\u5D29\u6E83\u3002</p><p>\u51FA\u4E8E\u540C\u6837\u7684\u539F\u56E0\uFF0C\u5F53 <code>React.forwardRef</code> \u5B58\u5728\u65F6\u6709\u6761\u4EF6\u5730\u4F7F\u7528\u5B83\u4E5F\u662F\u4E0D\u63A8\u8350\u7684\uFF1A\u5B83\u6539\u53D8\u4E86\u7684\u5E93\u7684\u884C\u4E3A\uFF0C\u5E76\u5728\u5347\u7EA7 React \u81EA\u8EAB\u65F6\u7834\u574F\u7528\u6237\u7684\u5E94\u7528\u3002</p><h2 id="\u5728\u9AD8\u9636\u7EC4\u4EF6\u4E2D\u8F6C\u53D1-refs" tabindex="-1"><a class="header-anchor" href="#\u5728\u9AD8\u9636\u7EC4\u4EF6\u4E2D\u8F6C\u53D1-refs" aria-hidden="true">#</a> \u5728\u9AD8\u9636\u7EC4\u4EF6\u4E2D\u8F6C\u53D1 refs</h2><p>\u8FD9\u4E2A\u6280\u5DE7\u5BF9\u9AD8\u9636\u7EC4\u4EF6\uFF08\u4E5F\u88AB\u79F0\u4E3A HOC\uFF09\u7279\u522B\u6709\u7528\u3002\u8BA9\u4ECE\u4E00\u4E2A\u8F93\u51FA\u7EC4\u4EF6 props \u5230\u63A7\u5236\u53F0\u7684 HOC \u793A\u4F8B\u5F00\u59CB\uFF1A</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">logProps</span><span class="token punctuation">(</span><span class="token parameter">WrappedComponent</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">class</span> <span class="token class-name">LogProps</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
    <span class="token function">componentDidUpdate</span><span class="token punctuation">(</span><span class="token parameter">prevProps</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;old props:&#39;</span><span class="token punctuation">,</span> prevProps<span class="token punctuation">)</span><span class="token punctuation">;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;new props:&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">WrappedComponent</span></span> <span class="token spread"><span class="token punctuation">{</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> LogProps<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u201ClogProps\u201D HOC <code>\u900F\u4F20\uFF08pass through\uFF09</code>\u6240\u6709 <code>props</code> \u5230\u5176\u5305\u88F9\u7684\u7EC4\u4EF6\uFF0C\u6240\u4EE5\u6E32\u67D3\u7ED3\u679C\u5C06\u662F\u76F8\u540C\u7684\u3002\u4F8B\u5982\uFF1A\u53EF\u4EE5\u4F7F\u7528\u8BE5 HOC \u8BB0\u5F55\u6240\u6709\u4F20\u9012\u5230 \u201Cfancy button\u201D \u7EC4\u4EF6\u7684 props\uFF1A</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token class-name">FancyButton</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5BFC\u51FA LogProps\uFF0C\u800C\u4E0D\u662F FancyButton\u3002</span>
<span class="token comment">// \u867D\u7136\u5B83\u4E5F\u4F1A\u6E32\u67D3\u4E00\u4E2A FancyButton\u3002</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">logProps</span><span class="token punctuation">(</span>FancyButton<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u4E0B\u9762\u7684\u793A\u4F8B\u6709\u4E00\u70B9\u9700\u8981\u6CE8\u610F\uFF1Arefs \u5C06\u4E0D\u4F1A\u900F\u4F20\u4E0B\u53BB\u3002\u8FD9\u662F\u56E0\u4E3A <code>ref</code> \u4E0D\u662F prop \u5C5E\u6027\u3002\u5C31\u50CF <code>key</code> \u4E00\u6837\uFF0C\u5176\u88AB React \u8FDB\u884C\u4E86\u7279\u6B8A\u5904\u7406\u3002\u5982\u679C\u5BF9 HOC \u6DFB\u52A0 ref\uFF0C\u8BE5 ref \u5C06\u5F15\u7528\u6700\u5916\u5C42\u7684\u5BB9\u5668\u7EC4\u4EF6\uFF0C\u800C\u4E0D\u662F\u88AB\u5305\u88F9\u7684\u7EC4\u4EF6\u3002</p><p>\u8FD9\u610F\u5473\u7740\u7528\u4E8E <code>FancyButton</code> \u7EC4\u4EF6\u7684 refs \u5B9E\u9645\u4E0A\u5C06\u88AB\u6302\u8F7D\u5230 <code>LogProps</code> \u7EC4\u4EF6\uFF1A</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">import</span> FancyButton <span class="token keyword">from</span> <span class="token string">&#39;./FancyButton&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> ref <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u5BFC\u5165\u7684 FancyButton \u7EC4\u4EF6\u662F\u9AD8\u9636\u7EC4\u4EF6\uFF08HOC\uFF09LogProps\u3002</span>
<span class="token comment">// \u5C3D\u7BA1\u6E32\u67D3\u7ED3\u679C\u5C06\u662F\u4E00\u6837\u7684\uFF0C</span>
<span class="token comment">// \u4F46\u7684 ref \u5C06\u6307\u5411 LogProps \u800C\u4E0D\u662F\u5185\u90E8\u7684 FancyButton \u7EC4\u4EF6\uFF01</span>
<span class="token comment">// \u8FD9\u610F\u5473\u7740\u4E0D\u80FD\u8C03\u7528\u4F8B\u5982 ref.current.focus() \u8FD9\u6837\u7684\u65B9\u6CD5</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">FancyButton</span></span>
  <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Click Me<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">handleClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleClick<span class="token punctuation">}</span></span>
  <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>ref<span class="token punctuation">}</span></span>
<span class="token punctuation">/&gt;</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u5E78\u8FD0\u7684\u662F\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>React.forwardRef</code> API \u660E\u786E\u5730\u5C06 refs \u8F6C\u53D1\u5230\u5185\u90E8\u7684 <code>FancyButton</code> \u7EC4\u4EF6\u3002<code>React.forwardRef</code> \u63A5\u53D7\u4E00\u4E2A\u6E32\u67D3\u51FD\u6570\uFF0C\u5176\u63A5\u6536 <code>props</code> \u548C <code>ref</code> \u53C2\u6570\u5E76\u8FD4\u56DE\u4E00\u4E2A React \u8282\u70B9\u3002\u4F8B\u5982\uFF1A</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">logProps</span><span class="token punctuation">(</span><span class="token parameter">Component</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">class</span> <span class="token class-name">LogProps</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
    <span class="token function">componentDidUpdate</span><span class="token punctuation">(</span><span class="token parameter">prevProps</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;old props:&#39;</span><span class="token punctuation">,</span> prevProps<span class="token punctuation">)</span><span class="token punctuation">;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;new props:&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span>forwardedRef<span class="token punctuation">,</span> <span class="token operator">...</span>rest<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">;</span>

      <span class="token comment">// \u5C06\u81EA\u5B9A\u4E49\u7684 prop \u5C5E\u6027 \u201CforwardedRef\u201D \u5B9A\u4E49\u4E3A ref</span>
      <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Component</span></span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>forwardedRef<span class="token punctuation">}</span></span> <span class="token spread"><span class="token punctuation">{</span><span class="token operator">...</span>rest<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u6CE8\u610F React.forwardRef \u56DE\u8C03\u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570 \u201Cref\u201D\u3002</span>
  <span class="token comment">// \u53EF\u4EE5\u5C06\u5176\u4F5C\u4E3A\u5E38\u89C4 prop \u5C5E\u6027\u4F20\u9012\u7ED9 LogProps\uFF0C\u4F8B\u5982 \u201CforwardedRef\u201D</span>
  <span class="token comment">// \u7136\u540E\u5B83\u5C31\u53EF\u4EE5\u88AB\u6302\u8F7D\u5230\u88AB LogProps \u5305\u88F9\u7684\u5B50\u7EC4\u4EF6\u4E0A\u3002</span>
  <span class="token keyword">return</span> React<span class="token punctuation">.</span><span class="token function">forwardRef</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> ref</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">LogProps</span></span> <span class="token spread"><span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span></span> <span class="token attr-name">forwardedRef</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>ref<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="\u5728-devtools-\u4E2D\u663E\u793A\u81EA\u5B9A\u4E49\u540D\u79F0" tabindex="-1"><a class="header-anchor" href="#\u5728-devtools-\u4E2D\u663E\u793A\u81EA\u5B9A\u4E49\u540D\u79F0" aria-hidden="true">#</a> \u5728 DevTools \u4E2D\u663E\u793A\u81EA\u5B9A\u4E49\u540D\u79F0</h2><p><code>React.forwardRef</code> \u63A5\u53D7\u4E00\u4E2A\u6E32\u67D3\u51FD\u6570\u3002React DevTools \u4F7F\u7528\u8BE5\u51FD\u6570\u6765\u51B3\u5B9A\u4E3A ref \u8F6C\u53D1\u7EC4\u4EF6\u663E\u793A\u7684\u5185\u5BB9\u3002</p><p>\u4F8B\u5982\uFF0C\u4EE5\u4E0B\u7EC4\u4EF6\u5C06\u5728 DevTools \u4E2D\u663E\u793A\u4E3A \u201CForwardRef\u201D\uFF1A</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">const</span> WrappedComponent <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">forwardRef</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> ref</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">LogProps</span></span> <span class="token spread"><span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span></span> <span class="token attr-name">forwardedRef</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>ref<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5982\u679C\u547D\u540D\u4E86\u6E32\u67D3\u51FD\u6570\uFF0CDevTools \u4E5F\u5C06\u5305\u542B\u5176\u540D\u79F0\uFF08\u4F8B\u5982 \u201CForwardRef(myFunction)\u201D\uFF09\uFF1A</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">const</span> WrappedComponent <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">forwardRef</span><span class="token punctuation">(</span>
  <span class="token keyword">function</span> <span class="token function">myFunction</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> ref</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">LogProps</span></span> <span class="token spread"><span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span></span> <span class="token attr-name">forwardedRef</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>ref<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u751A\u81F3\u53EF\u4EE5\u8BBE\u7F6E\u51FD\u6570\u7684 <code>displayName</code> \u5C5E\u6027\u6765\u5305\u542B\u88AB\u5305\u88F9\u7EC4\u4EF6\u7684\u540D\u79F0\uFF1A</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">logProps</span><span class="token punctuation">(</span><span class="token parameter">Component</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">class</span> <span class="token class-name">LogProps</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">function</span> <span class="token function">forwardRef</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> ref</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">LogProps</span></span> <span class="token spread"><span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span></span> <span class="token attr-name">forwardedRef</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>ref<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u5728 DevTools \u4E2D\u4E3A\u8BE5\u7EC4\u4EF6\u63D0\u4F9B\u4E00\u4E2A\u66F4\u6709\u7528\u7684\u663E\u793A\u540D\u3002</span>
  <span class="token comment">// \u4F8B\u5982 \u201CForwardRef(logProps(MyComponent))\u201D</span>
  <span class="token keyword">const</span> name <span class="token operator">=</span> Component<span class="token punctuation">.</span>displayName <span class="token operator">||</span> Component<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
  forwardRef<span class="token punctuation">.</span>displayName <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">logProps(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> React<span class="token punctuation">.</span><span class="token function">forwardRef</span><span class="token punctuation">(</span>forwardRef<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>`,34);function t(e,o){return p}var u=s(a,[["render",t]]);export{u as default};
