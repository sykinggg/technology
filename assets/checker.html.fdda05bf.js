import{a as n}from"./app.ba47fc91.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const s={},e=n(`<h1 id="\u68C0\u67E5\u5668" tabindex="-1"><a class="header-anchor" href="#\u68C0\u67E5\u5668" aria-hidden="true">#</a> \u68C0\u67E5\u5668</h1><p>\u5982\u524D\u6240\u8FF0\uFF0C<em>\u68C0\u67E5\u5668</em>\u4F7F\u5F97 TypeScript \u66F4\u72EC\u7279\uFF0C\u6BD4<em>\u5176\u5B83 JavaScript \u8F6C\u8BD1\u5668</em>\u66F4\u5F3A\u5927\u3002\u68C0\u67E5\u5668\u4F4D\u4E8E <code>checker.ts</code> \u4E2D\uFF0C\u5F53\u524D\u6709 23k \u884C\u4EE5\u4E0A\u7684\u4EE3\u7801\uFF08\u7F16\u8BD1\u5668\u4E2D\u6700\u5927\u7684\u90E8\u5206\uFF09</p><h3 id="\u7A0B\u5E8F\u5BF9\u68C0\u67E5\u5668\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u7A0B\u5E8F\u5BF9\u68C0\u67E5\u5668\u7684\u4F7F\u7528" aria-hidden="true">#</a> \u7A0B\u5E8F\u5BF9\u68C0\u67E5\u5668\u7684\u4F7F\u7528</h3><p>\u68C0\u67E5\u5668\u662F\u7531\u7A0B\u5E8F\u521D\u59CB\u5316\uFF0C\u4E0B\u9762\u662F\u8C03\u7528\u6808\u793A\u610F\uFF08\u7ED1\u5B9A\u5668\u4E00\u8282\u4E5F\u5C55\u793A\u8FC7\uFF09\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>program.getTypeChecker -&gt;
    ts.createTypeChecker\uFF08\u68C0\u67E5\u5668\u4E2D\uFF09-&gt;
        initializeTypeChecker\uFF08\u68C0\u67E5\u5668\u4E2D\uFF09 -&gt;
            for each SourceFile \`ts.bindSourceFile\`\uFF08\u7ED1\u5B9A\u5668\u4E2D\uFF09
            // \u63A5\u7740
            for each SourceFile \`ts.mergeSymbolTable\`\uFF08\u68C0\u67E5\u5668\u4E2D\uFF09
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="\u4E0E\u53D1\u5C04\u5668\u7684\u8054\u7CFB" tabindex="-1"><a class="header-anchor" href="#\u4E0E\u53D1\u5C04\u5668\u7684\u8054\u7CFB" aria-hidden="true">#</a> \u4E0E\u53D1\u5C04\u5668\u7684\u8054\u7CFB</h3><p>\u771F\u6B63\u7684\u7C7B\u578B\u68C0\u67E5\u4F1A\u5728\u8C03\u7528 <code>getDiagnostics</code> \u65F6\u624D\u53D1\u751F\u3002\u8BE5\u51FD\u6570\u88AB\u8C03\u7528\u65F6\uFF08\u6BD4\u5982\u7531 <code>Program.emit</code> \u8BF7\u6C42\uFF09\uFF0C\u68C0\u67E5\u5668\u8FD4\u56DE\u4E00\u4E2A <code>EmitResolver</code>\uFF08\u7531\u7A0B\u5E8F\u8C03\u7528\u68C0\u67E5\u5668\u7684 <code>getEmitResolver</code> \u51FD\u6570\u5F97\u5230\uFF09\uFF0C<code>EmitResolver</code> \u662F <code>createTypeChecker</code> \u7684\u4E00\u4E2A\u672C\u5730\u51FD\u6570\u7684\u96C6\u5408\u3002\u4ECB\u7ECD\u53D1\u5C04\u5668\u65F6\u8FD8\u4F1A\u518D\u6B21\u63D0\u5230\u3002</p><p>\u4E0B\u9762\u662F\u8BE5\u8FC7\u7A0B\u76F4\u5230 <code>checkSourceFile</code> \u7684\u8C03\u7528\u6808\uFF08<code>checkSourceFile</code> \u662F <code>createTypeChecker</code> \u7684\u4E00\u4E2A\u672C\u5730\u51FD\u6570\uFF09\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>program.emit -&gt;
    emitWorker (program local) -&gt;
        createTypeChecker.getEmitResolver -&gt;
            // \u7B2C\u4E00\u6B21\u8C03\u7528\u4E0B\u9762\u7684\u51E0\u4E2A createTypeChecker \u7684\u672C\u5730\u51FD\u6570
            call getDiagnostics -&gt;
                getDiagnosticsWorker -&gt;
                    checkSourceFile

            // \u63A5\u7740
            return resolver
            // \u901A\u8FC7\u5BF9\u672C\u5730\u51FD\u6570 createResolver() \u7684\u8C03\u7528\uFF0Cresolver \u5DF2\u5728 createTypeChecker \u4E2D\u521D\u59CB\u5316\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="\u5168\u5C40\u547D\u540D\u7A7A\u95F4\u5408\u5E76" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u547D\u540D\u7A7A\u95F4\u5408\u5E76" aria-hidden="true">#</a> \u5168\u5C40\u547D\u540D\u7A7A\u95F4\u5408\u5E76</h2><p><code>initializeTypeChecker</code> \u4E2D\u5B58\u5728\u4EE5\u4E0B\u4EE3\u7801\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \u521D\u59CB\u5316\u5168\u5C40\u7B26\u53F7\u8868\uFF08SymbolTable\uFF09\u3002</span>
<span class="token function">forEach</span><span class="token punctuation">(</span>host<span class="token punctuation">.</span><span class="token function">getSourceFiles</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> file <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isExternalModule</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">mergeSymbolTable</span><span class="token punctuation">(</span>globals<span class="token punctuation">,</span> file<span class="token punctuation">.</span>locals<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u57FA\u672C\u4E0A\u662F\u5C06\u6240\u6709\u7684 <code>global</code> \u7B26\u53F7\u5408\u5E76\u5230 <code>let globals: SymbolTable = {}</code> \u7B26\u53F7\u8868\u4E2D\uFF08\u4F4D\u4E8E <code>createTypeChecker</code> \u4E2D\uFF09\u3002 <code>mergeSymbolTable</code> \u4E3B\u8981\u8C03\u7528 <code>mergeSymbol</code> \u51FD\u6570\u3002</p><h2 id="\u68C0\u67E5\u5668\u9519\u8BEF\u62A5\u544A" tabindex="-1"><a class="header-anchor" href="#\u68C0\u67E5\u5668\u9519\u8BEF\u62A5\u544A" aria-hidden="true">#</a> \u68C0\u67E5\u5668\u9519\u8BEF\u62A5\u544A</h2><p>\u68C0\u67E5\u5668\u4F7F\u7528\u672C\u5730\u7684 <code>error</code> \u51FD\u6570\u62A5\u544A\u9519\u8BEF\uFF0C\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">error</span><span class="token punctuation">(</span>location<span class="token operator">:</span> Node<span class="token punctuation">,</span> message<span class="token operator">:</span> DiagnosticMessage<span class="token punctuation">,</span> arg0<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> arg1<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> arg2<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> diagnostic <span class="token operator">=</span> location
    <span class="token operator">?</span> <span class="token function">createDiagnosticForNode</span><span class="token punctuation">(</span>location<span class="token punctuation">,</span> message<span class="token punctuation">,</span> arg0<span class="token punctuation">,</span> arg1<span class="token punctuation">,</span> arg2<span class="token punctuation">)</span>
    <span class="token operator">:</span> <span class="token function">createCompilerDiagnostic</span><span class="token punctuation">(</span>message<span class="token punctuation">,</span> arg0<span class="token punctuation">,</span> arg1<span class="token punctuation">,</span> arg2<span class="token punctuation">)</span><span class="token punctuation">;</span>
  diagnostics<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>diagnostic<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,16);function p(t,c){return e}var l=a(s,[["render",p]]);export{l as default};
