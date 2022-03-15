# 单例模式

> 单例模式也称为单体模式，规定一个类只有一个实例，并且提供可全局访问点；
>
> JavaScript中没有类的定义，单例模式的特点是”唯一“和”全局访问“，那么可以联想到JavaScript中的全局对象，利用ES6的let不允许重复声明的特性，刚好符合这两个特点；是的，全局对象是最简单的单例模式；

```js
let obj = {
    name:"W3Cschool",
    getName:function(){}
}
```

> 上述代码中可以知道obj就是一个单例，因为obj刚好就符合单例模式的两大特点："唯一"和"可全局访问"；
> 
> 但是并不建议这么实现单例，因为全局对象/全局变量会有一些弊端：


1. 污染命名空间（容易变量名冲突）

2. 维护时不容易管控 (搞不好就直接覆盖了)

简单版单例模式：

    分析：只能有一个实例，所以需要使用if分支来判断，如果已经存在就直接返回，如果不存在就新建一个实例；

```js
let Singleton = function(name){
    this.name = name;
    this.instance = null; 
}

Singleton.prototype.getName = function(){
    console.log(this.name);
}

Singleton.getInstance = function(name){
    if(this.instance){
        return this.instance; 
    }
    return this.instance = new Singleton(name);
}

let winner = Singleton.getInstance("winner");   //winner
console.log(winner.getName());
let sunner = Singleton.getInstance("sunner");   //winner
console.log(sunner.getName())
```

> 上面代码中是通过一个变量 `instance` 的值来进行判断是否已存在实例，如果存在就直接返回 `this.instance`，如果不存在，就新建实例并赋值给 `instance`；

　　但是上面的代码还是存在问题，因为创建对象的操作和判断实例的操作耦合在一起，并不符合”单一职责原则“；

* 改良版：

思路：通过一个闭包，来实现判断实例的操作；

```js
let CreateSingleton = (function(){
    let instance = null;
    return function(name){
        this.name = name;
        if(instance){
            return instance
        }
        return instance = this;
    }
})()


CreateSingleton.prototype.getName = function(){
        console.log(this.name);
}

let winner = new CreateSingleton("winner");  //winner
console.log(winner.getName());
let sunner = new CreateSingleton("sunner");  //winner
console.log(sunner.getName())
```

* 代理版单例模式：

　　通过代理的形式，将创建对象的操作和实例判断的操作进行解耦拆分，实现更小粒度的划分，符合”单一职责原则“；

```js
let ProxyCreateSingleton = (function(){
    let instance = null;
    return function(name){
        if(instance){
            return instance
        }
        return instance = new Singlton(name);
    }
})();
    
let Singlton = function(name){
    this.name = name;
} 

Singlton.prototype.getName = function(){
    console.log(this.name);
}

let winner = new ProxyCreateSingleton("winner");
console.log(winner.getName());
let sunner = new ProxyCreateSingleton("sunner");
console.log(sunner.getName());
```

上面的代码中，`ProxyCreateSingleton()`只负责判断实例，`Singlton`只负责创建对象和赋值；

* 惰性单例模式

　　 经常会有这样的场景：页面多次调用都有弹窗提示，只是提示内容不一样；

　　 这个时候可以立马想到是单例模式，弹窗就是单例实例，提示内容是参数传递；可以用惰性单例模式来实现它；

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>W3Cschool</title>
</head>
<body>
  <div id="loginBtn">W3Cschool</div>
</body>
<script>
  let getSingleton = function (fn) {
    var result;
    return function () {
      return result || (result = fn.apply(this, arguments)); // 确定this上下文并传递参数
    }
  }
  let createAlertMessage = function (html) {
    var div = document.createElement('div');
    div.innerHTML = html;
    div.style.display = 'none';
    document.body.appendChild(div);
    return div;
  }
  let createSingleAlertMessage = getSingleton(createAlertMessage);
  document.getElementById('loginBtn').onclick = function () {
    let alertMessage = createSingleAlertMessage('<a href="https://www.w3cschool.cn/" style="text-decoration:none;" target="_blank">W3Cschool.cn</a>');
    alertMessage.style.display = 'block';
  }
</script>
</html>
```

> 惰性单例是指的是页面开始加载的时候的实例是没有进行创建的，是当点击页面的div之后才开始创建实例（按需创建），这可以提高的网页性能，加快的页面渲染速度；