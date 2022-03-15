import{a as n}from"./app.ba47fc91.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h2 id="_1-\u4E94\u5927\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#_1-\u4E94\u5927\u7B97\u6CD5" aria-hidden="true">#</a> <strong>1. \u4E94\u5927\u7B97\u6CD5</strong></h2><ul><li><p><strong>\u8D2A\u5FC3\u7B97\u6CD5</strong>: \u5C40\u90E8\u6700\u4F18\u89E3\u6CD5</p></li><li><p><strong>\u5206\u6CBB\u7B97\u6CD5</strong>: \u5206\u6210\u591A\u4E2A\u5C0F\u6A21\u5757\uFF0C\u4E0E\u539F\u95EE\u9898\u6027\u8D28\u76F8\u540C</p></li><li><p><strong>\u52A8\u6001\u89C4\u5212</strong>: \u6BCF\u4E2A\u72B6\u6001\u90FD\u662F\u8FC7\u53BB\u5386\u53F2\u7684\u4E00\u4E2A\u603B\u7ED3</p></li><li><p><strong>\u56DE\u6EAF\u6CD5</strong>: \u53D1\u73B0\u539F\u5148\u9009\u62E9\u4E0D\u4F18\u65F6\uFF0C\u9000\u56DE\u91CD\u65B0\u9009\u62E9</p></li><li><p><strong>\u5206\u652F\u9650\u754C\u6CD5</strong></p></li></ul><p><strong>2. \u57FA\u7840\u6392\u5E8F\u7B97\u6CD5</strong></p><ul><li>\u5192\u6CE1\u6392\u5E8F: \u4E24\u4E24\u6BD4\u8F83</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">bubleSort</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> len <span class="token operator">=</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> outer <span class="token operator">=</span> len <span class="token punctuation">;</span> outer <span class="token operator">&gt;=</span> <span class="token number">2</span><span class="token punctuation">;</span> outer<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> inner <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> inner <span class="token operator">&lt;=</span>outer <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> inner<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>inner<span class="token punctuation">]</span> <span class="token operator">&gt;</span> arr<span class="token punctuation">[</span>inner <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token punctuation">[</span>arr<span class="token punctuation">[</span>inner<span class="token punctuation">]</span><span class="token punctuation">,</span>arr<span class="token punctuation">[</span>inner<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>arr<span class="token punctuation">[</span>inner<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>arr<span class="token punctuation">[</span>inner<span class="token punctuation">]</span><span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> arr<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ul><li>\u9009\u62E9\u6392\u5E8F: \u904D\u5386\u81EA\u8EAB\u4EE5\u540E\u7684\u5143\u7D20\uFF0C\u6700\u5C0F\u7684\u5143\u7D20\u8DDF\u81EA\u5DF1\u8C03\u6362\u4F4D\u7F6E</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">selectSort</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> len <span class="token operator">=</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span> <span class="token punctuation">;</span>i <span class="token operator">&lt;</span> len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> i <span class="token punctuation">;</span> j<span class="token operator">&lt;</span>len<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&lt;</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token punctuation">[</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> arr
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ul><li>\u63D2\u5165\u6392\u5E8F: \u5373\u5C06\u5143\u7D20\u63D2\u5165\u5230\u5DF2\u6392\u5E8F\u597D\u7684\u6570\u7EC4\u4E2D</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">insertSort</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">//\u5916\u5FAA\u73AF\u4ECE1\u5F00\u59CB\uFF0C\u9ED8\u8BA4arr[0]\u662F\u6709\u5E8F\u6BB5</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> i<span class="token punctuation">;</span> j <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span> j<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">//j = i,\u5C06arr[j]\u4F9D\u6B21\u63D2\u5165\u6709\u5E8F\u6BB5\u4E2D</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&lt;</span> arr<span class="token punctuation">[</span>j<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token punctuation">[</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span>arr<span class="token punctuation">[</span>j<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>arr<span class="token punctuation">[</span>j<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> arr<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="_3-\u9AD8\u7EA7\u6392\u5E8F\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#_3-\u9AD8\u7EA7\u6392\u5E8F\u7B97\u6CD5" aria-hidden="true">#</a> <strong>3. \u9AD8\u7EA7\u6392\u5E8F\u7B97\u6CD5</strong></h2><ul><li><p>\u5FEB\u901F\u6392\u5E8F</p><ul><li><p>\u9009\u62E9\u57FA\u51C6\u503C(base)\uFF0C\u539F\u6570\u7EC4\u957F\u5EA6\u51CF\u4E00(\u57FA\u51C6\u503C)\uFF0C\u4F7F\u7528 splice</p></li><li><p>\u5FAA\u73AF\u539F\u6570\u7EC4\uFF0C\u5C0F\u7684\u653E\u5DE6\u8FB9(left\u6570\u7EC4)\uFF0C\u5927\u7684\u653E\u53F3\u8FB9(right\u6570\u7EC4);</p></li><li><p>concat(left, base, right)</p></li><li><p>\u9012\u5F52\u7EE7\u7EED\u6392\u5E8F left \u4E0E right</p></li></ul></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">quickSort</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length <span class="token operator">&lt;=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> arr<span class="token punctuation">;</span>  <span class="token comment">//\u9012\u5F52\u51FA\u53E3</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">var</span> left <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        right <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        current <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> current<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            left<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment">//\u653E\u5728\u5DE6\u8FB9</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            right<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">//\u653E\u5728\u53F3\u8FB9</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token function">quickSort</span><span class="token punctuation">(</span>left<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span><span class="token function">quickSort</span><span class="token punctuation">(</span>right<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><ul><li><p>\u5E0C\u5C14\u6392\u5E8F\uFF1A\u4E0D\u5B9A\u6B65\u6570\u7684\u63D2\u5165\u6392\u5E8F\uFF0C\u63D2\u5165\u6392\u5E8F</p></li><li><p>\u53E3\u8BC0: \u63D2\u5192\u5F52\u57FA\u7A33\u5B9A\uFF0C\u5FEB\u9009\u5806\u5E0C\u4E0D\u7A33\u5B9A</p></li></ul><img src="https://user-gold-cdn.xitu.io/2019/2/14/168e9d8524a2b947?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" width="100%"><p>\u7A33\u5B9A\u6027\uFF1A \u540C\u5927\u5C0F\u60C5\u51B5\u4E0B\u662F\u5426\u53EF\u80FD\u4F1A\u88AB\u4EA4\u6362\u4F4D\u7F6E, \u865A\u62DFdom\u7684diff\uFF0C\u4E0D\u7A33\u5B9A\u6027\u4F1A\u5BFC\u81F4\u91CD\u65B0\u6E32\u67D3\uFF1B</p><h2 id="_4-\u9012\u5F52\u8FD0\u7528-\u6590\u6CE2\u90A3\u5951\u6570\u5217-\u722C\u697C\u68AF\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_4-\u9012\u5F52\u8FD0\u7528-\u6590\u6CE2\u90A3\u5951\u6570\u5217-\u722C\u697C\u68AF\u95EE\u9898" aria-hidden="true">#</a> <strong>4. \u9012\u5F52\u8FD0\u7528(\u6590\u6CE2\u90A3\u5951\u6570\u5217)\uFF1A \u722C\u697C\u68AF\u95EE\u9898</strong></h2><p>\u521D\u59CB\u5728\u7B2C\u4E00\u7EA7\uFF0C\u5230\u7B2C\u4E00\u7EA7\u67091\u79CD\u65B9\u6CD5(s(1) = 1)\uFF0C\u5230\u7B2C\u4E8C\u7EA7\u4E5F\u53EA\u6709\u4E00\u79CD\u65B9\u6CD5(s(2) = 1)\uFF0C \u7B2C\u4E09\u7EA7(s(3) = s(1) + s(2))</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">cStairs</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>n <span class="token operator">===</span> <span class="token number">1</span> <span class="token operator">||</span> n <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">cStairs</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">cStairs</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="_5-\u6570\u636E\u6811" tabindex="-1"><a class="header-anchor" href="#_5-\u6570\u636E\u6811" aria-hidden="true">#</a> <strong>5. \u6570\u636E\u6811</strong></h2><ul><li><p>\u4E8C\u53C9\u6811: \u6700\u591A\u53EA\u6709\u4E24\u4E2A\u5B50\u8282\u70B9</p><ul><li><p>\u5B8C\u5168\u4E8C\u53C9\u6811</p></li><li><p>\u6EE1\u4E8C\u53C9\u6811</p><ul><li>\u6DF1\u5EA6\u4E3A h, \u6709 n \u4E2A\u8282\u70B9\uFF0C\u4E14\u6EE1\u8DB3 n = 2^h - 1</li></ul></li></ul></li><li><p>\u4E8C\u53C9\u67E5\u627E\u6811: \u662F\u4E00\u79CD\u7279\u6B8A\u7684\u4E8C\u53C9\u6811\uFF0C\u80FD\u6709\u6548\u5730\u63D0\u9AD8\u67E5\u627E\u6548\u7387</p><ul><li><p>\u5C0F\u503C\u5728\u5DE6\uFF0C\u5927\u503C\u5728\u53F3</p></li><li><p>\u8282\u70B9 n \u7684\u6240\u6709\u5DE6\u5B50\u6811\u503C\u5C0F\u4E8E n\uFF0C\u6240\u6709\u53F3\u5B50\u6811\u503C\u5927\u4E8E n</p></li></ul></li></ul><img src="https://user-gold-cdn.xitu.io/2019/2/14/168e9d89406fa6a8?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" width="40%"><ul><li><p>\u904D\u5386\u8282\u70B9</p><ul><li><p>\u524D\u5E8F\u904D\u5386</p><ul><li><p>\u6839\u8282\u70B9</p></li><li><p>\u8BBF\u95EE\u5DE6\u5B50\u8282\u70B9\uFF0C\u56DE\u5230 1</p></li><li><p>\u8BBF\u95EE\u53F3\u5B50\u8282\u70B9\uFF0C\u56DE\u5230 1</p></li></ul></li><li><p>\u4E2D\u5E8F\u904D\u5386</p><ul><li><p>\u5148\u8BBF\u95EE\u5230\u6700\u5DE6\u7684\u5B50\u8282\u70B9</p></li><li><p>\u8BBF\u95EE\u8BE5\u8282\u70B9\u7684\u7236\u8282\u70B9</p></li><li><p>\u8BBF\u95EE\u8BE5\u7236\u8282\u70B9\u7684\u53F3\u5B50\u8282\u70B9\uFF0C \u56DE\u5230 1</p></li></ul></li><li><p>\u540E\u5E8F\u904D\u5386</p><ul><li><p>\u5148\u8BBF\u95EE\u5230\u6700\u5DE6\u7684\u5B50\u8282\u70B9</p></li><li><p>\u8BBF\u95EE\u76F8\u90BB\u7684\u53F3\u8282\u70B9</p></li><li><p>\u8BBF\u95EE\u7236\u8282\u70B9\uFF0C \u56DE\u5230 1</p></li></ul></li></ul></li><li><p>\u63D2\u5165\u4E0E\u5220\u9664\u8282\u70B9</p></li></ul><h2 id="_6-\u5929\u5E73\u627E\u6B21\u54C1" tabindex="-1"><a class="header-anchor" href="#_6-\u5929\u5E73\u627E\u6B21\u54C1" aria-hidden="true">#</a> <strong>6. \u5929\u5E73\u627E\u6B21\u54C1</strong></h2><p>\u6709n\u4E2A\u786C\u5E01\uFF0C\u5176\u4E2D1\u4E2A\u4E3A\u5047\u5E01\uFF0C\u5047\u5E01\u91CD\u91CF\u8F83\u8F7B\uFF0C\u6709\u4E00\u628A\u5929\u5E73\uFF0C\u8BF7\u95EE\uFF0C\u81F3\u5C11\u9700\u8981\u79F0\u591A\u5C11\u6B21\u80FD\u4FDD\u8BC1\u4E00\u5B9A\u627E\u5230\u5047\u5E01?</p><ul><li><p>\u4E09\u7B49\u5206\u7B97\u6CD5:</p><ol><li>\u5C06\u786C\u5E01\u5206\u62103\u7EC4\uFF0C\u968F\u4FBF\u53D6\u5176\u4E2D\u4E24\u7EC4\u5929\u5E73\u79F0\u91CF</li></ol><ul><li><p>\u5E73\u8861\uFF0C\u5047\u5E01\u5728\u672A\u4E0A\u79F0\u7684\u4E00\u7EC4\uFF0C\u53D6\u5176\u56DE\u5230 1 \u7EE7\u7EED\u5FAA\u73AF</p></li><li><p>\u4E0D\u5E73\u8861\uFF0C\u5047\u5E01\u5728\u5929\u5E73\u4E0A\u8F83\u8F7B\u7684\u4E00\u7EC4\uFF0C \u53D6\u5176\u56DE\u5230 1 \u7EE7\u7EED\u5FAA\u73AF</p></li></ul></li></ul>`,25);function t(o,e){return p}var u=s(a,[["render",t]]);export{u as default};
