import{a as n}from"./app.6f963528.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="nginx\u4F7F\u7528\u7EFC\u5408\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#nginx\u4F7F\u7528\u7EFC\u5408\u573A\u666F" aria-hidden="true">#</a> nginx\u4F7F\u7528\u7EFC\u5408\u573A\u666F</h1><h2 id="\u540C\u4E00\u4E2A\u57DF\u540D\u901A\u8FC7\u4E0D\u540C\u76EE\u5F55\u6307\u5B9A\u4E0D\u540C\u9879\u76EE\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#\u540C\u4E00\u4E2A\u57DF\u540D\u901A\u8FC7\u4E0D\u540C\u76EE\u5F55\u6307\u5B9A\u4E0D\u540C\u9879\u76EE\u76EE\u5F55" aria-hidden="true">#</a> \u540C\u4E00\u4E2A\u57DF\u540D\u901A\u8FC7\u4E0D\u540C\u76EE\u5F55\u6307\u5B9A\u4E0D\u540C\u9879\u76EE\u76EE\u5F55</h2><p>\u5728\u5F00\u53D1\u8FC7\u7A0B\u4E2D\uFF0C\u6709\u4E00\u79CD\u573A\u666F\uFF0C\u6BD4\u5982\u6709\u9879\u76EE\u6709\u591A\u4E2A\u5B50\u7CFB\u7EDF\u9700\u8981\u901A\u8FC7\u540C\u4E00\u4E2A\u57DF\u540D\u901A\u8FC7\u4E0D\u540C\u76EE\u5F55\u53BB\u8BBF\u95EE \u5728A/B Test \u7070\u5EA6\u53D1\u5E03\u7B49\u573A\u666F\u4E5F\u4F1A\u7528\u4E0A</p><p>\u6BD4\u5982\uFF1A</p><ul><li><p>\u8BBF\u95EE a.com/a/*** \u8BBF\u95EE\u7684\u662Fa\u7CFB\u7EDF</p></li><li><p>\u8BBF\u95EE a.com/b/*** \u8BBF\u95EE\u7684\u662Fb\u7CFB\u7EDF</p></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u7B2C\u4E00\u79CD\u65B9\u5F0F\u901A\u8FC7\u7269\u7406\u8DEF\u5F84\u5339\u914D\u7684\u65B9\u5F0F\u6307\u5411\u4E0D\u540C\u7684\u9879\u76EE\u76EE\u5F55\uFF0C\u76F4\u63A5\u6307\u5411\u4EE3\u7801</span>
server <span class="token punctuation">{</span>
  listen <span class="token number">12088</span><span class="token punctuation">;</span>
  server_name  localhost<span class="token punctuation">;</span>
  index index.php index.html<span class="token punctuation">;</span>
  error_log  /var/log/nginx/error.log<span class="token punctuation">;</span>
  access_log /var/log/nginx/access.log<span class="token punctuation">;</span>
  root /var/www/html/demo-a<span class="token punctuation">;</span>
  location / <span class="token punctuation">{</span>
    root   /var/www/html/demo-a/<span class="token punctuation">;</span>
    index  index.html index.html<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  location /b<span class="token punctuation">{</span>
    <span class="token builtin class-name">alias</span>   /var/www/html/mall/<span class="token punctuation">;</span>
    index  index.html index.html<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">#\u7B2C\u4E8C\u79CD\u65B9\u5F0F\u662F\u901A\u8FC7\u4EE3\u7406\u6307\u5411\uFF0C\u6307\u5411\u7684\u662F\u9879\u76EE\u670D\u52A1</span>
<span class="token comment"># \u6BD4\u5982\uFF1Aa\u9879\u76EE\u5DF2\u7ECF\u901A\u8FC7nginx\u542F\u52A8\u4E868081\u7AEF\u53E3\uFF0Cb\u9879\u76EE\u901A\u8FC7nginx\u542F\u52A8\u4E868082\u7AEF\u53E3</span>
<span class="token comment"># \u90A3\u4E48\u6211\u4EEC\u5C31\u53EF\u4EE5\u901A\u8FC7</span>
server <span class="token punctuation">{</span>
  listen <span class="token number">80</span><span class="token punctuation">;</span>
  server_name xxx.ccc.com<span class="token punctuation">;</span>

  <span class="token comment">#\u901A\u8FC7\u8BBF\u95EEservice\u4E8C\u7EA7\u76EE\u5F55\u6765\u8BBF\u95EEb\u9879\u76EE</span>
	location /b/ <span class="token punctuation">{</span>
    <span class="token comment">#DemoBackend1\u540E\u9762\u7684\u659C\u6760\u662F\u4E00\u4E2A\u5173\u952E\uFF0C\u6CA1\u6709\u659C\u6760\u7684\u8BDD\u5C31\u4F1A\u4F20\u9012service\u5230\u540E\u7AEF\u8282\u70B9\u5BFC\u81F4404</span>
    proxy_pass      http://127.0.0.1:8082/<span class="token punctuation">;</span>
    proxy_redirect  off<span class="token punctuation">;</span>
    proxy_set_header Host <span class="token variable">$host</span><span class="token punctuation">;</span>
    proxy_set_header X-Real-IP <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
    proxy_set_header X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">#\u5176\u4ED6\u8DEF\u5F84\u9ED8\u8BA4\u8BBF\u95EEa\u9879\u76EE</span>
  location / <span class="token punctuation">{</span>
    proxy_pass http://127.0.0.1:8081<span class="token punctuation">;</span>
    proxy_redirect  off<span class="token punctuation">;</span>
    proxy_set_header  Host  <span class="token variable">$host</span><span class="token punctuation">;</span>
    proxy_set_header  X-Real-IP  <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
    proxy_set_header  X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div><h2 id="gzip" tabindex="-1"><a class="header-anchor" href="#gzip" aria-hidden="true">#</a> gzip</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
  listen <span class="token number">12089</span><span class="token punctuation">;</span>
  index index.php index.html<span class="token punctuation">;</span>
  error_log  /var/log/nginx/error.log<span class="token punctuation">;</span>
  access_log /var/log/nginx/access.log<span class="token punctuation">;</span>
  root /var/www/html/gzip<span class="token punctuation">;</span>
  <span class="token function">gzip</span> on<span class="token punctuation">;</span>
  <span class="token comment"># http\u8BF7\u6C42\u7248\u672C</span>
  gzip_http_version <span class="token number">1.0</span><span class="token punctuation">;</span>
  <span class="token comment"># \u8BBE\u7F6E\u4EC0\u4E48\u7C7B\u578B\u7684\u6587\u4EF6\u9700\u8981\u538B\u7F29</span>
  gzip_types text/css text/javascript application/javascript image/png image/jpeg image/gif<span class="token punctuation">;</span>
  location / <span class="token punctuation">{</span>
    index  index.html index.htm index.php<span class="token punctuation">;</span>
    autoindex  off<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="\u524D\u7AEF\u5355\u9875\u9762\u5E94\u7528\u8DEF\u7531history\u6A21\u5F0F\u5237\u65B0404\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u524D\u7AEF\u5355\u9875\u9762\u5E94\u7528\u8DEF\u7531history\u6A21\u5F0F\u5237\u65B0404\u5904\u7406" aria-hidden="true">#</a> \u524D\u7AEF\u5355\u9875\u9762\u5E94\u7528\u8DEF\u7531history\u6A21\u5F0F\u5237\u65B0404\u5904\u7406</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
  listen       <span class="token number">80</span><span class="token punctuation">;</span>
  server_name  localhost<span class="token punctuation">;</span>
  
  location / <span class="token punctuation">{</span>
    root       /usr/share/nginx/html/dist<span class="token punctuation">;</span>  <span class="token comment"># vue \u6253\u5305\u540E\u7684\u6587\u4EF6\u5939</span>
    index      index.html index.htm<span class="token punctuation">;</span>
    try_files  <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /index.html<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token comment"># server {</span>
<span class="token comment">#   listen       80;</span>
<span class="token comment">#   server_name  localhost;</span>
  
<span class="token comment">#   location / {</span>
<span class="token comment">#     root       /usr/share/nginx/html/dist;  # vue \u6253\u5305\u540E\u7684\u6587\u4EF6\u5939</span>
<span class="token comment">#     index      index.html index.htm;</span>
<span class="token comment">#     try_files  $uri $uri/ /index.html @rewrites;  </span>
    
<span class="token comment">#     expires -1;                          # \u9996\u9875\u4E00\u822C\u6CA1\u6709\u5F3A\u5236\u7F13\u5B58</span>
<span class="token comment">#     add_header Cache-Control no-cache;</span>
<span class="token comment">#   }</span>
  
  
<span class="token comment">#   location @rewrites {</span>
<span class="token comment">#     rewrite ^(.+)$ /index.html break;</span>
<span class="token comment">#   }</span>
<span class="token comment"># }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h2 id="\u52A0\u6743\u8F6E\u8BE2" tabindex="-1"><a class="header-anchor" href="#\u52A0\u6743\u8F6E\u8BE2" aria-hidden="true">#</a> \u52A0\u6743\u8F6E\u8BE2</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>upstream  constPolling <span class="token punctuation">{</span>
  <span class="token comment"># ip_hash \u6BCF\u4E2A\u8BF7\u6C42\u90FD\u6839\u636E\u8BBF\u95EEip\u7684hash\u7ED3\u679C\u5206\u914D\uFF0C\u7ECF\u8FC7\u8FD9\u6837\u7684\u5904\u7406\uFF0C\u6BCF\u4E2A\u8BBF\u5BA2\u56FA\u5B9A\u8BBF\u95EE\u4E00\u4E2A\u540E\u7AEF\u670D\u52A1\uFF0C\u5982\u4E0B\u914D\u7F6E\uFF08ip_hash\u53EF\u4EE5\u548Cweight\u914D\u5408\u4F7F\u7528\uFF09\uFF0C\u5E76\u4E14\u53EF\u4EE5\u6709\u6548\u89E3\u51B3\u52A8\u6001\u7F51\u9875\u5B58\u5728\u7684session\u5171\u4EAB\u95EE\u9898</span>
  <span class="token comment"># ip_hash;</span>
  server    localhost:10001 <span class="token assign-left variable">weight</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span> 
  server    localhost:10002 <span class="token assign-left variable">weight</span><span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span>

server <span class="token punctuation">{</span>
  listen       <span class="token number">10000</span><span class="token punctuation">;</span>
  server_name  localhost<span class="token punctuation">;</span>

  location / <span class="token punctuation">{</span>
    proxy_pass http://constPolling<span class="token punctuation">;</span>
    proxy_redirect default<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="\u52A8\u6001\u8D44\u6E90-\u9759\u6001\u8D44\u6E90-\u5206\u79BB" tabindex="-1"><a class="header-anchor" href="#\u52A8\u6001\u8D44\u6E90-\u9759\u6001\u8D44\u6E90-\u5206\u79BB" aria-hidden="true">#</a> \u52A8\u6001\u8D44\u6E90\uFF0C\u9759\u6001\u8D44\u6E90\uFF0C\u5206\u79BB</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
  listen       <span class="token number">80</span><span class="token punctuation">;</span>
  server_name  localhost<span class="token punctuation">;</span>
  charset utf-8<span class="token punctuation">;</span>    <span class="token comment"># \u9632\u6B62\u4E2D\u6587\u6587\u4EF6\u540D\u4E71\u7801</span>

  location /download <span class="token punctuation">{</span>
    <span class="token builtin class-name">alias</span>	 /usr/share/nginx/html/static<span class="token punctuation">;</span>  <span class="token comment"># \u9759\u6001\u8D44\u6E90\u76EE\u5F55</span>
    <span class="token comment">#root /usr/share/nginx/html/static/;</span>
    autoindex               on<span class="token punctuation">;</span>    <span class="token comment"># \u5F00\u542F\u9759\u6001\u8D44\u6E90\u5217\u76EE\u5F55</span>
    autoindex_exact_size    off<span class="token punctuation">;</span>   <span class="token comment"># on(\u9ED8\u8BA4)\u663E\u793A\u6587\u4EF6\u7684\u786E\u5207\u5927\u5C0F\uFF0C\u5355\u4F4D\u662Fbyte\uFF1Boff\u663E\u793A\u6587\u4EF6\u5927\u6982\u5927\u5C0F\uFF0C\u5355\u4F4DKB\u3001MB\u3001GB</span>
    autoindex_localtime     off<span class="token punctuation">;</span>   <span class="token comment"># off(\u9ED8\u8BA4)\u65F6\u663E\u793A\u7684\u6587\u4EF6\u65F6\u95F4\u4E3AGMT\u65F6\u95F4\uFF1Bon\u663E\u793A\u7684\u6587\u4EF6\u65F6\u95F4\u4E3A\u670D\u52A1\u5668\u65F6\u95F4</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="\u6743\u9650\u63A7\u5236" tabindex="-1"><a class="header-anchor" href="#\u6743\u9650\u63A7\u5236" aria-hidden="true">#</a> \u6743\u9650\u63A7\u5236</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
  listen       <span class="token number">80</span><span class="token punctuation">;</span>
  server_name  localhost<span class="token punctuation">;</span>
  charset utf-8<span class="token punctuation">;</span>    <span class="token comment"># \u9632\u6B62\u4E2D\u6587\u6587\u4EF6\u540D\u4E71\u7801</span>

  <span class="token comment"># \u975E\u6307\u5B9A\u8BF7\u6C42\u5168\u8FD4\u56DE 403</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span> <span class="token variable">$request_method</span> <span class="token operator">!</span>~ ^<span class="token punctuation">(</span>GET<span class="token operator">|</span>POST<span class="token operator">|</span>HEAD<span class="token punctuation">)</span>$ <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">return</span> <span class="token number">403</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  location / <span class="token punctuation">{</span>
    <span class="token comment"># IP\u8BBF\u95EE\u9650\u5236\uFF08\u53EA\u5141\u8BB8IP\u662F 192.168.0.3 \u673A\u5668\u8BBF\u95EE\uFF09</span>
    allow <span class="token number">192.168</span>.0.3<span class="token punctuation">;</span>
    deny all<span class="token punctuation">;</span>
    
    root   html<span class="token punctuation">;</span>
    index  index.html index.htm<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="\u6CDB\u89E3\u6790" tabindex="-1"><a class="header-anchor" href="#\u6CDB\u89E3\u6790" aria-hidden="true">#</a> \u6CDB\u89E3\u6790</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u6709\u65F6\u5019\u6211\u4EEC\u53EF\u80FD\u9700\u8981\u914D\u7F6E\u4E00\u4E9B\u4E8C\u7EA7\u6216\u8005\u4E09\u7EA7\u57DF\u540D\uFF0C\u5E0C\u671B\u901A\u8FC7 Nginx \u81EA\u52A8\u6307\u5411\u5BF9\u5E94\u76EE\u5F55\uFF0C\u6BD4\u5982\uFF1A</span>
<span class="token comment"># a.baidu.com \u81EA\u52A8\u6307\u5411 /usr/share/nginx/html/a \u670D\u52A1\u5668\u5730\u5740\uFF1B</span>
<span class="token comment"># b.baidu.com \u81EA\u52A8\u6307\u5411 /usr/share/nginx/html/b \u670D\u52A1\u5668\u5730\u5740\uFF1B</span>
server <span class="token punctuation">{</span>
  listen       <span class="token number">80</span><span class="token punctuation">;</span>
  server_name  ~^<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">\\</span>w-<span class="token punctuation">]</span>+<span class="token punctuation">)</span><span class="token punctuation">\\</span>.baidu<span class="token punctuation">\\</span>.com$<span class="token punctuation">;</span>

  root /usr/share/nginx/html/<span class="token variable">$1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment"># \u6709\u6CDB\u89E3\u6790\uFF0C\u5C31\u6709\u6CDB\u8F6C\u53D1</span>
<span class="token comment"># \u6709\u65F6\u5019\u6211\u4EEC\u5E0C\u671B\u628A\u4E8C\u7EA7\u6216\u8005\u4E09\u7EA7\u57DF\u540D\u94FE\u63A5\u91CD\u5199\u5230\u6211\u4EEC\u5E0C\u671B\u7684\u8DEF\u5F84\uFF0C\u8BA9\u540E\u7AEF\u5C31\u53EF\u4EE5\u6839\u636E\u8DEF\u7531\u89E3\u6790\u4E0D\u540C\u7684\u89C4\u5219</span>
<span class="token comment"># a.baidu.com/api?name=a \u81EA\u52A8\u8F6C\u53D1\u5230 127.0.0.1:8080/a/api?name=a \uFF1B</span>
<span class="token comment"># b.baidu.com/api?name=a \u81EA\u52A8\u8F6C\u53D1\u5230 127.0.0.1:8080/b/api?name=a \uFF1B</span>
server <span class="token punctuation">{</span>
  listen       <span class="token number">80</span><span class="token punctuation">;</span>
  server_name ~^<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">\\</span>w-<span class="token punctuation">]</span>+<span class="token punctuation">)</span><span class="token punctuation">\\</span>.baidu<span class="token punctuation">\\</span>.com$<span class="token punctuation">;</span>

  location / <span class="token punctuation">{</span>
    proxy_set_header        X-Real-IP <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
    proxy_set_header        X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span>
    proxy_set_header        Host <span class="token variable">$http_host</span><span class="token punctuation">;</span>
    proxy_set_header        X-NginX-Proxy <span class="token boolean">true</span><span class="token punctuation">;</span>
    proxy_pass              http://127.0.0.1:8080/<span class="token variable">$1</span><span class="token variable">$request_uri</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h2 id="\u81EA\u52A8\u9002\u914Dpc\u548C\u79FB\u52A8\u7AEF" tabindex="-1"><a class="header-anchor" href="#\u81EA\u52A8\u9002\u914Dpc\u548C\u79FB\u52A8\u7AEF" aria-hidden="true">#</a> \u81EA\u52A8\u9002\u914DPC\u548C\u79FB\u52A8\u7AEF</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>server<span class="token punctuation">{</span>
  listen <span class="token number">80</span><span class="token punctuation">;</span>
  server_name localhost<span class="token punctuation">;</span>
  location / <span class="token punctuation">{</span>
    root /usr/share/nginx/pc<span class="token punctuation">;</span> <span class="token comment">#pc\u7AEF\u4EE3\u7801\u76EE\u5F55</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$http_user_agent</span> ~* <span class="token string">&#39;(Android|webOS|iPhone|iPod|BlackBerry)&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      root /usr/share/nginx/mobile<span class="token punctuation">;</span> <span class="token comment">#\u79FB\u52A8\u7AEF\u4EE3\u7801\u76EE\u5F55</span>
    <span class="token punctuation">}</span>
    index index.html<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="\u9632\u76D7\u94FE" tabindex="-1"><a class="header-anchor" href="#\u9632\u76D7\u94FE" aria-hidden="true">#</a> \u9632\u76D7\u94FE</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
  listen       <span class="token number">80</span><span class="token punctuation">;</span>        
  server_name  *.aaa.com<span class="token punctuation">;</span>
  
  <span class="token comment"># \u56FE\u7247\u9632\u76D7\u94FE</span>
  location ~* <span class="token punctuation">\\</span>.<span class="token punctuation">(</span>gif<span class="token operator">|</span>jpg<span class="token operator">|</span>jpeg<span class="token operator">|</span>png<span class="token operator">|</span>bmp<span class="token operator">|</span>swf<span class="token punctuation">)</span>$ <span class="token punctuation">{</span>
    valid_referers none blocked server_names ~<span class="token punctuation">\\</span>.google<span class="token punctuation">\\</span>. ~<span class="token punctuation">\\</span>.baidu<span class="token punctuation">\\</span>. *.qq.com<span class="token punctuation">;</span>  <span class="token comment"># \u53EA\u5141\u8BB8\u672C\u673A IP \u5916\u94FE\u5F15\u7528 \u5C06\u767E\u5EA6\u548C\u8C37\u6B4C\u4E5F\u52A0\u5165\u767D\u540D\u5355</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$invalid_referer</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token builtin class-name">return</span> <span class="token number">403</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="\u9650\u5236\u53EA\u80FD\u8C37\u6B4C\u6D4F\u89C8\u5668\u8BBF\u95EE" tabindex="-1"><a class="header-anchor" href="#\u9650\u5236\u53EA\u80FD\u8C37\u6B4C\u6D4F\u89C8\u5668\u8BBF\u95EE" aria-hidden="true">#</a> \u9650\u5236\u53EA\u80FD\u8C37\u6B4C\u6D4F\u89C8\u5668\u8BBF\u95EE</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
  listen <span class="token number">12088</span><span class="token punctuation">;</span>
  index index.php index.html<span class="token punctuation">;</span>
  error_log  /var/log/nginx/error.log<span class="token punctuation">;</span>
  access_log /var/log/nginx/access.log<span class="token punctuation">;</span>
  root /var/www/html/demo-a<span class="token punctuation">;</span>
  <span class="token comment"># \u9650\u5236\u9664\u4E86\u8C37\u6B4C\u6D4F\u89C8\u5668\uFF0C\u90FD\u8FD4\u56DE500\uFF0C user_age \u5C31\u662F\u8BF7\u6C42\u5934\u91CC\u9762\u7684User-Agent</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$http_user_agent</span> <span class="token operator">!</span>~ Chrome<span class="token punctuation">)</span> <span class="token punctuation">{</span>   
    <span class="token builtin class-name">return</span> <span class="token number">500</span><span class="token punctuation">;</span>  
  <span class="token punctuation">}</span>
  location / <span class="token punctuation">{</span>
    index  index.html index.htm index.php<span class="token punctuation">;</span>
    autoindex  off<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="\u9ED8\u8BA4\u8F6E\u8BE2" tabindex="-1"><a class="header-anchor" href="#\u9ED8\u8BA4\u8F6E\u8BE2" aria-hidden="true">#</a> \u9ED8\u8BA4\u8F6E\u8BE2</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>upstream  constPolling <span class="token punctuation">{</span>
  server    localhost:10001<span class="token punctuation">;</span>
  server    localhost:10002<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

server <span class="token punctuation">{</span>
    listen       <span class="token number">10000</span><span class="token punctuation">;</span>
    server_name  localhost<span class="token punctuation">;</span>

    location / <span class="token punctuation">{</span>
    proxy_pass http://constPolling<span class="token punctuation">;</span>
    proxy_redirect default<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,26);function p(l,t){return e}var o=s(a,[["render",p]]);export{o as default};
