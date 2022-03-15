# 49个CSS知识点

## 01.【负边距】

> 💘负边距的效果。注意左右负边距表现并不一致。左为负时，是左移，右为负时，是左拉。上下与左右类似

<img :src="$withBase('/assets/css/16c3f20e0bfc9f24')" alt="demo" />

## 02.【shape-outside】

> ❤不要自以为是了。你以为自己是方的，在别人眼里你却是圆的

<img :src="$withBase('/assets/css/16c3d4d63509b4f0')" alt="demo" />

## 03.【BFC应用】

> 💓BFC应用之阻止外边距合并（`margin collapsing`）

<img :src="$withBase('/assets/css/16c3d4f1395d5cc2')" alt="demo" />

## 04.【BFC应用】

> 💔BFC应用之消除浮动的影响

<img :src="$withBase('/assets/css/16c3d4f22d3173c9')" alt="demo" />

## 05.【flex不为人知的特性之一】

> 💕flex布局下`margin:auto`的神奇用法

<img :src="$withBase('/assets/css/16c3d4f579c4de52')" alt="demo" />

## 06.【flex不为人知的特性之二】

> 💖flex布局，当`flex-grow`之和小于1时，只能按比例分配部分剩余空间，而不是全部

<img :src="$withBase('/assets/css/16c3d4f642feaa48')" alt="demo" />

## 07.【input的宽度】

> 💗并不是给元素设置`display:block`就会自动填充父元素宽度。input 就是个例外，其默认宽度取决于size特性的值

<img :src="$withBase('/assets/css/16c3d4f6fef0a871')" alt="demo" />

## 08.【定位特性】

> 💙绝对定位和固定定位时，同时设置 left 和 right 等同于隐式地设置宽度

<img :src="$withBase('/assets/css/16c3d4f7f76af224')" alt="demo" />

## 09.【层叠上下文】

> 💚层叠上下文：小辈就是小辈，再厉害也只是个小辈

<img :src="$withBase('/assets/css/16c3d4f89327d07d')" alt="demo" />

## 10.【粘性定位】

> 💛`position:sticky`，粘性定位要起作用，需要设置最后滞留位置。chrome有bug，firefox完美

<img :src="$withBase('/assets/css/16c3d4f943e923f9')" alt="demo" />

## 11.【相邻兄弟选择器】

> 💜相邻兄弟选择器之常用场景

<img :src="$withBase('/assets/css/16c3d4f9f7e99a80')" alt="demo" />

## 12.【模态框】

> 🖤要使模态框背景透明，用`rgba`是一种简单方式

<img :src="$withBase('/assets/css/16c3d4fb360585bf')" alt="demo" />

## 13.【三角形】

> 💝css绘制三角形的原理

<img :src="$withBase('/assets/css/16c3d4fc3a5fd756')" alt="demo" />

## 14.【table布局】

> 💞`display:table`实现多列等高布局

<img :src="$withBase('/assets/css/16c3d4fd6cc88002')" alt="demo" />

## 15.【颜色对比度】

> ❣蓝底红字，由于颜色对比度比较低，故而看不清，因此不是好的配色方案😂

<img :src="$withBase('/assets/css/16c3d4ff199cd6d0')" alt="demo" />

## 16.【定宽高比】

> ♥css实现定宽高比的原理：`padding`的百分比是相对于其包含块的宽度，而不是高度

<img :src="$withBase('/assets/css/16c3d5000087a8d0')" alt="demo" />

## 17.【动画方向】

> 🐹动画方向可以选择`alternate`，去回交替进行

<img :src="$withBase('/assets/css/16c3d501284cbcff')" alt="demo" />

## 18.【线性渐变应用】

> 🐮css绘制彩带的原理

<img :src="$withBase('/assets/css/16c3d5021ac977bb')" alt="demo" />

## 19.【隐藏文本】

> 🐯隐藏文字内容的两种办法

<img :src="$withBase('/assets/css/16c3d50308c15117')" alt="demo" />

## 20.【居中】

> 🐰实现居中的一种简单方式

<img :src="$withBase('/assets/css/16c3d503b2a29f31')" alt="demo" />

## 21.【角向渐变】

> 🐲新的渐变：角向渐变。可以用来实现饼图

<img :src="$withBase('/assets/css/16c3d50444a314cc')" alt="demo" />

## 22.【背景位置百分比】

> 🐍`background-position`百分比的正确理解方式：图片自身的百分比位置与容器同样的百分比位置重合

<img :src="$withBase('/assets/css/16c3d5051a3e4f1a')" alt="demo" />

## 23.【背景重复新值】

> 🐴`background-repeat`新属性值：`round`和`space`。前者表示凑个整，后者表示留点缝

<img :src="$withBase('/assets/css/16c3d505c290f434')" alt="demo" />

## 24.【背景附着】

> 🐐`background-attachment`指定背景如何附着在容器上，注意其属性值`local`和`fixed`的使用

<img :src="$withBase('/assets/css/16c3d50761cdf47c')" alt="demo" />

## 25.【动画延时】

> 🐵动画添加延迟时间可以使步调不一致

<img :src="$withBase('/assets/css/16c3d5089051201a')" alt="demo" />

## 26.【outline使用】

> 🐔可以使用`outline`来描边，不占地方，它甚至可以在里面

<img :src="$withBase('/assets/css/16c3d5092af1be9f')" alt="demo" />

## 27【背景定位】

> 🐶当固定背景不随元素滚动时，背景定位是相对于视口的

<img :src="$withBase('/assets/css/16c3d509e173f40b')" alt="demo" />

## 28【tab-size】

> 🐷浏览器默认显示tab为8个空格，`tab-size`可以指定空格长度

<img :src="$withBase('/assets/css/16c3d50ac1d21e4b')" alt="demo" />

## 29【动画暂停】

> 🥝CSS动画其实是可以暂停的

<img :src="$withBase('/assets/css/16c3d50bcc76349f')" alt="demo" />

## 30【object-fit】

> 🍓图片在指定尺寸后，可以设置`object-fit`为`contain`或`cover`保持比例

<img :src="$withBase('/assets/css/16c3d50c9c447a1a')" alt="demo" />

## 31【鼠标状态】

> 🍒按钮禁用时，不要忘了设置鼠标状态

<img :src="$withBase('/assets/css/16c3d50df31971f3')" alt="demo" />

## 32【背景虚化】

> 🍑使用CSS滤镜实现背景虚化

<img :src="$withBase('/assets/css/16c3d50e8cadbfc4')" alt="demo" />

## 33【fill-available】

> 🍏设置宽度为`fill-available`，可以使`inline-block`像`block`那样填充整个空间

<img :src="$withBase('/assets/css/16c3d50f694c5878')" alt="demo" />

## 34【fit-content】

> 🍎设置宽度为`fit-content`，可以使`block`像`inline-block`那样实现收缩宽度包裹内容的效果

<img :src="$withBase('/assets/css/16c3d510015a44fc')" alt="demo" />

## 35【自定义属性】

> 🍋CSS自定义属性的简单使用

<img :src="$withBase('/assets/css/16c3d510b10d731e')" alt="demo" />

## 36【min-content/max-content】

> 🍍可以设置宽度为`min-content`和`max-content`，前者让内容尽可能地收缩，后者让内容尽可能地展开

<img :src="$withBase('/assets/css/16c3d511d0ea8214')" alt="demo" />

## 37【进度条】

> 🍊使用渐变，一个`div`实现进度条

<img :src="$withBase('/assets/css/16c3d51329e83a68')" alt="demo" />

## 38【打印】

> 🍉可以在打印网页时，设置`page`相关属性。比如`page-break-before`属性来表示是否需要另起新页

<img :src="$withBase('/assets/css/16c3d514c5cc6473')" alt="demo" />

## 39【逐帧动画】

> 🍌利用CSS精灵实现逐帧动画

<img :src="$withBase('/assets/css/16c3d515ef18723a')" alt="demo" />

## 40【resize】

> 🍐普通元素也可以像`textarea`那样`resize`

<img :src="$withBase('/assets/css/16c3d516e61e2885')" alt="demo" />

## 41【面包屑】

> 🍇使用`before`伪元素实现面包屑

<img :src="$withBase('/assets/css/16c3d517babad7d8')" alt="demo" />

## 42【sticky footer】

> 🍈使用`grid`布局实现`sticky footer`

<img :src="$withBase('/assets/css/16c3d518ab2c7e0f')" alt="demo" />

## 43【动画填充状态】

> 🍅CSS可以设置动画开始前和结束时所保持的状态

<img :src="$withBase('/assets/css/16c3d5195e6bea48')" alt="demo" />

## 44【动画负延迟】

> 🥑CSS动画可以设置延迟时间为负数，表示动画仿佛开始前就已经运行过了那么长时间

<img :src="$withBase('/assets/css/16c3d51a09f353d9')" alt="demo" />

## 45【过渡】

> 🍆爱的魔力转圈圈

<img :src="$withBase('/assets/css/16c3d51b12aca6ff')" alt="demo" />

## 46【动画案例】

> 🍬水波效果原理

<img :src="$withBase('/assets/css/16c3d51c0ada68da')" alt="demo" />

## 47【动画案例】

> 🌸CSS弹球动画效果的原理

<img :src="$withBase('/assets/css/16c3d51d2d34833e')" alt="demo" />

## 48【outline】

> 🌻`outline`属性的妙用

<img :src="$withBase('/assets/css/16c3d51e76666d72')" alt="demo" />

## 49【grid】

> 💕火狐浏览器grid布局检测器

<img :src="$withBase('/assets/css/16c3d52039c1b1da')" alt="demo" />