# nginx使用综合场景

## 同一个域名通过不同目录指定不同项目目录

在开发过程中，有一种场景，比如有项目有多个子系统需要通过同一个域名通过不同目录去访问 在A/B Test 灰度发布等场景也会用上

比如：

* 访问 a.com/a/*** 访问的是a系统

* 访问 a.com/b/*** 访问的是b系统

```bash
# 第一种方式通过物理路径匹配的方式指向不同的项目目录，直接指向代码
server {
  listen 12088;
  server_name  localhost;
  index index.php index.html;
  error_log  /var/log/nginx/error.log;
  access_log /var/log/nginx/access.log;
  root /var/www/html/demo-a;
  location / {
    root   /var/www/html/demo-a/;
    index  index.html index.html;
  }
  location /b{
    alias   /var/www/html/mall/;
    index  index.html index.html;
  }
}

#第二种方式是通过代理指向，指向的是项目服务
# 比如：a项目已经通过nginx启动了8081端口，b项目通过nginx启动了8082端口
# 那么我们就可以通过
server {
  listen 80;
  server_name xxx.ccc.com;

  #通过访问service二级目录来访问b项目
	location /b/ {
    #DemoBackend1后面的斜杠是一个关键，没有斜杠的话就会传递service到后端节点导致404
    proxy_pass      http://127.0.0.1:8082/;
    proxy_redirect  off;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  }
  #其他路径默认访问a项目
  location / {
    proxy_pass http://127.0.0.1:8081;
    proxy_redirect  off;
    proxy_set_header  Host  $host;
    proxy_set_header  X-Real-IP  $remote_addr;
    proxy_set_header  X-Forwarded-For $proxy_add_x_forwarded_for;
  }
}
```

## gzip

```bash
server {
  listen 12089;
  index index.php index.html;
  error_log  /var/log/nginx/error.log;
  access_log /var/log/nginx/access.log;
  root /var/www/html/gzip;
  gzip on;
  # http请求版本
  gzip_http_version 1.0;
  # 设置什么类型的文件需要压缩
  gzip_types text/css text/javascript application/javascript image/png image/jpeg image/gif;
  location / {
    index  index.html index.htm index.php;
    autoindex  off;
  }
}
```

## 前端单页面应用路由history模式刷新404处理

```bash
server {
  listen       80;
  server_name  localhost;
  
  location / {
    root       /usr/share/nginx/html/dist;  # vue 打包后的文件夹
    index      index.html index.htm;
    try_files  $uri $uri/ /index.html;
  }
}


# server {
#   listen       80;
#   server_name  localhost;
  
#   location / {
#     root       /usr/share/nginx/html/dist;  # vue 打包后的文件夹
#     index      index.html index.htm;
#     try_files  $uri $uri/ /index.html @rewrites;  
    
#     expires -1;                          # 首页一般没有强制缓存
#     add_header Cache-Control no-cache;
#   }
  
  
#   location @rewrites {
#     rewrite ^(.+)$ /index.html break;
#   }
# }
```

## 加权轮询

```bash
upstream  constPolling {
  # ip_hash 每个请求都根据访问ip的hash结果分配，经过这样的处理，每个访客固定访问一个后端服务，如下配置（ip_hash可以和weight配合使用），并且可以有效解决动态网页存在的session共享问题
  # ip_hash;
  server    localhost:10001 weight=1; 
  server    localhost:10002 weight=2; 
}

server {
  listen       10000;
  server_name  localhost;

  location / {
    proxy_pass http://constPolling;
    proxy_redirect default;
  }
}
```

## 动态资源，静态资源，分离

```bash
server {
  listen       80;
  server_name  localhost;
  charset utf-8;    # 防止中文文件名乱码

  location /download {
    alias	 /usr/share/nginx/html/static;  # 静态资源目录
    #root /usr/share/nginx/html/static/;
    autoindex               on;    # 开启静态资源列目录
    autoindex_exact_size    off;   # on(默认)显示文件的确切大小，单位是byte；off显示文件大概大小，单位KB、MB、GB
    autoindex_localtime     off;   # off(默认)时显示的文件时间为GMT时间；on显示的文件时间为服务器时间
  }
}
```

## 权限控制

```bash
server {
  listen       80;
  server_name  localhost;
  charset utf-8;    # 防止中文文件名乱码

  # 非指定请求全返回 403
  if ( $request_method !~ ^(GET|POST|HEAD)$ ) {
    return 403;
  }

  location / {
    # IP访问限制（只允许IP是 192.168.0.3 机器访问）
    allow 192.168.0.3;
    deny all;
    
    root   html;
    index  index.html index.htm;
  }
}
```

## 泛解析

```bash
# 有时候我们可能需要配置一些二级或者三级域名，希望通过 Nginx 自动指向对应目录，比如：
# a.baidu.com 自动指向 /usr/share/nginx/html/a 服务器地址；
# b.baidu.com 自动指向 /usr/share/nginx/html/b 服务器地址；
server {
  listen       80;
  server_name  ~^([\w-]+)\.baidu\.com$;

  root /usr/share/nginx/html/$1;
}
# 有泛解析，就有泛转发
# 有时候我们希望把二级或者三级域名链接重写到我们希望的路径，让后端就可以根据路由解析不同的规则
# a.baidu.com/api?name=a 自动转发到 127.0.0.1:8080/a/api?name=a ；
# b.baidu.com/api?name=a 自动转发到 127.0.0.1:8080/b/api?name=a ；
server {
  listen       80;
  server_name ~^([\w-]+)\.baidu\.com$;

  location / {
    proxy_set_header        X-Real-IP $remote_addr;
    proxy_set_header        X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header        Host $http_host;
    proxy_set_header        X-NginX-Proxy true;
    proxy_pass              http://127.0.0.1:8080/$1$request_uri;
  }
}
```

## 自动适配PC和移动端

```bash
server{
  listen 80;
  server_name localhost;
  location / {
    root /usr/share/nginx/pc; #pc端代码目录
    if ($http_user_agent ~* '(Android|webOS|iPhone|iPod|BlackBerry)') {
      root /usr/share/nginx/mobile; #移动端代码目录
    }
    index index.html;
  }
}
```

## 防盗链

```bash
server {
  listen       80;        
  server_name  *.aaa.com;
  
  # 图片防盗链
  location ~* \.(gif|jpg|jpeg|png|bmp|swf)$ {
    valid_referers none blocked server_names ~\.google\. ~\.baidu\. *.qq.com;  # 只允许本机 IP 外链引用 将百度和谷歌也加入白名单
    if ($invalid_referer){
      return 403;
    }
  }
}
```

## 限制只能谷歌浏览器访问

```bash
server {
  listen 12088;
  index index.php index.html;
  error_log  /var/log/nginx/error.log;
  access_log /var/log/nginx/access.log;
  root /var/www/html/demo-a;
  # 限制除了谷歌浏览器，都返回500， user_age 就是请求头里面的User-Agent
  if ($http_user_agent !~ Chrome) {   
    return 500;  
  }
  location / {
    index  index.html index.htm index.php;
    autoindex  off;
  }
}
```

## 默认轮询

```bash
upstream  constPolling {
  server    localhost:10001;
  server    localhost:10002;
}

server {
    listen       10000;
    server_name  localhost;

    location / {
    proxy_pass http://constPolling;
    proxy_redirect default;
  }
}
```