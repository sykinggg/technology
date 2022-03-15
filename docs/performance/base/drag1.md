# 可视化拖拽组件库原理分析

## 技术要点

1. 编辑器

2. 自定义组件

3. 拖拽

4. 删除组件、调整图层层级

5. 放大缩小

6. 撤消、重做

7. 组件属性设置

8. 吸附

9. 预览、保存代码

10. 绑定事件

11. 绑定动画

12. 导入 PSD

13. 手机模式

## 1. 编辑器

先来看一下页面的整体结构。

<img :src="$withBase('/assets/performance/base/efe303bcc3a649d3a758eb94ccc38e0e_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

这一节要讲的编辑器其实就是中间的画布。它的作用是：当从左边组件列表拖拽出一个组件放到画布中时，画布要把这个组件渲染出来。

这个编辑器的实现思路是：

1. 用一个数组 `componentData` 维护编辑器中的数据。

2. 把组件拖拽到画布中时，使用 `push()` 方法将新的组件数据添加到 `componentData`。

3. 编辑器使用 `v-for` 指令遍历 `componentData`，将每个组件逐个渲染到画布（也可以使用 JSX 语法结合 `render()` 方法代替）。

> 编辑器渲染的核心代码如下所示：

```js
<component 
  v-for="item in componentData"
  :key="item.id"
  :is="item.component"
  :style="item.style"
  :propValue="item.propValue"
/>
```

> 每个组件数据大概是这样：

```js
{
    component: 'v-text', // 组件名称，需要提前注册到 Vue
    label: '文字', // 左侧组件列表中显示的名字
    propValue: '文字', // 组件所使用的值
    icon: 'el-icon-edit', // 左侧组件列表中显示的名字
    animations: [], // 动画列表
    events: {}, // 事件列表
    style: { // 组件样式
        width: 200,
        height: 33,
        fontSize: 14,
        fontWeight: 500,
        lineHeight: '',
        letterSpacing: 0,
        textAlign: '',
        color: '',
    },
}
```

在遍历 `componentData` 组件数据时，主要靠 `is` 属性来识别出真正要渲染的是哪个组件。

例如要渲染的组件数据是 `{ component: 'v-text' }`，则 `<component :is="item.component" />` 会被转换为 `<v-text />`。当然，你这个组件也要提前注册到 Vue 中。

如果你想了解更多 is 属性的资料，请查看[官方文档](https://link.juejin.cn/?target=https%3A%2F%2Fcn.vuejs.org%2Fv2%2Fapi%2F%23is)。

## 2. 自定义组件

原则上使用第三方组件也是可以的，但建议你最好封装一下。不管是第三方组件还是自定义组件，每个组件所需的属性可能都不一样，所以每个组件数据可以暴露出一个属性 `propValue` 用于传递值。

例如 a 组件只需要一个属性，你的 `propValue` 可以这样写：`propValue: 'aaa'`。如果需要多个属性，`propValue` 则可以是一个对象：

```js
propValue: {
  a: 1,
  b: 'text'
}
```

在这个 DEMO 组件库中我定义了三个组件。

> 图片组件 `Picture`：

```html
<template>
    <div style="overflow: hidden">
        <img :src="propValue">
    </div>
</template>

<script>
export default {
    props: {
        propValue: {
            type: String,
            require: true,
        },
    },
}
</script>
```

> 按钮组件 `VButton`:

```html
<template>
    <button class="v-button">{{ propValue }}</button>
</template>

<script>
export default {
    props: {
        propValue: {
            type: String,
            default: '',
        },
    },
}
</script>
```

> 文本组件 `VText`:

```html
<template>
    <textarea 
        v-if="editMode == 'edit'"
        :value="propValue"
        class="text textarea"
        @input="handleInput"
        ref="v-text"
    ></textarea>
    <div v-else class="text disabled">
        <div v-for="(text, index) in propValue.split('\n')" :key="index">{{ text }}</div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    props: {
        propValue: {
            type: String,
        },
        element: {
            type: Object,
        },
    },
    computed: mapState([
        'editMode',
    ]),
    methods: {
        handleInput(e) {
            this.$emit('input', this.element, e.target.value)
        },
    },
}
</script>
```

## 3. 拖拽

### 从组件列表到画布

一个元素如果要设为可拖拽，必须给它添加一个 `draggable` 属性。另外，在将组件列表中的组件拖拽到画布中，还有两个事件是起到关键作用的：

1. `dragstart` 事件，在拖拽刚开始时触发。它主要用于将拖拽的组件信息传递给画布。

2. `drop` 事件，在拖拽结束时触发。主要用于接收拖拽的组件信息。

先来看一下左侧组件列表的代码：

```html
<div @dragstart="handleDragStart" class="component-list">
    <div v-for="(item, index) in componentList" :key="index" class="list" draggable :data-index="index">
        <i :class="item.icon"></i>
        <span>{{ item.label }}</span>
    </div>
</div>
```

```js
handleDragStart(e) {
    e.dataTransfer.setData('index', e.target.dataset.index)
}
```

可以看到给列表中的每一个组件都设置了 `draggable` 属性。另外，在触发 `dragstart` 事件时，使用 `dataTransfer.setData()` 传输数据。再来看一下接收数据的代码：

```html
<div class="content" @drop="handleDrop" @dragover="handleDragOver" @click="deselectCurComponent">
    <Editor />
</div>
```

```js
handleDrop(e) {
    e.preventDefault()
    e.stopPropagation()
    const component = deepCopy(componentList[e.dataTransfer.getData('index')])
    this.$store.commit('addComponent', component)
}
```

触发 `drop` 事件时，使用 `dataTransfer.getData()` 接收传输过来的索引数据，然后根据索引找到对应的组件数据，再添加到画布，从而渲染组件。

<img :src="$withBase('/assets/performance/base/c9083ec57c6c4b51bb4af50f3818d2a0_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

### 组件在画布中移动

首先需要将画布设为相对定位 `position: relative`，然后将每个组件设为绝对定位 `position: absolute`。除了这一点外，还要通过监听三个事件来进行移动：

1. `mousedown` 事件，在组件上按下鼠标时，记录组件当前的位置，即 xy 坐标（为了方便讲解，这里使用的坐标轴，实际上 xy 对应的是 css 中的 `left` 和 `top`。

2. `mousemove` 事件，每次鼠标移动时，都用当前最新的 xy 坐标减去最开始的 xy 坐标，从而计算出移动距离，再改变组件位置。

3. `mouseup` 事件，鼠标抬起时结束移动。

```js
handleMouseDown(e) {
    e.stopPropagation()
    this.$store.commit('setCurComponent', { component: this.element, zIndex: this.zIndex })

    const pos = { ...this.defaultStyle }
    const startY = e.clientY
    const startX = e.clientX
    // 如果直接修改属性，值的类型会变为字符串，所以要转为数值型
    const startTop = Number(pos.top)
    const startLeft = Number(pos.left)

    const move = (moveEvent) => {
        const currX = moveEvent.clientX
        const currY = moveEvent.clientY
        pos.top = currY - startY + startTop
        pos.left = currX - startX + startLeft
        // 修改当前组件样式
        this.$store.commit('setShapeStyle', pos)
    }

    const up = () => {
        document.removeEventListener('mousemove', move)
        document.removeEventListener('mouseup', up)
    }

    document.addEventListener('mousemove', move)
    document.addEventListener('mouseup', up)
}
```

<img :src="$withBase('/assets/performance/base/66fd70a8b2064e4f81c2e4be6c7d3328_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

## 4. 删除组件、调整图层层级

### 改变图层层级

由于拖拽组件到画布中是有先后顺序的，所以可以按照数据顺序来分配图层层级。

例如画布新增了五个组件 abcde，那它们在画布数据中的顺序为 `[a, b, c, d, e]`，图层层级和索引一一对应，即它们的 `z-index` 属性值是 01234（后来居上）。用代码表示如下：

```html
<div v-for="(item, index) in componentData" :zIndex="index"></div>
```

如果不了解 `z-index` 属性的，请看一下 [MDN 文档](https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FCSS%2Fz-index)。

理解了这一点之后，改变图层层级就很容易做到了。改变图层层级，即是改变组件数据在 `componentData` 数组中的顺序。例如有 `[a, b, c]` 三个组件，它们的图层层级从低到高顺序为 abc（索引越大，层级越高）。

如果要将 b 组件上移，只需将它和 c 调换顺序即可：

```js
const temp = componentData[1]
componentData[1] = componentData[2]
componentData[2] = temp
```

同理，置顶置底也是一样，例如我要将 a 组件置顶，只需将 a 和最后一个组件调换顺序即可：

```js
const temp = componentData[0]
componentData[0] = componentData[componentData.lenght - 1]
componentData[componentData.lenght - 1] = temp
```

<img :src="$withBase('/assets/performance/base/42ca7d8c64f840aeb60f3a5c4f3c7ba8_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

### 删除组件

删除组件非常简单，一行代码搞定：`componentData.splice(index, 1)`。

<img :src="$withBase('/assets/performance/base/53a43ff0c23a4287833006c3985533ba_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

## 5. 放大缩小

点击画布上的组件时，组件上会出现 8 个小圆点。这 8 个小圆点就是用来放大缩小用的。实现原理如下：

### 第一步

1. 在每个组件外面包一层 `Shape` 组件，`Shape` 组件里包含 8 个小圆点和一个 `<slot>` 插槽，用于放置组件。

```html
<!--页面组件列表展示-->
<Shape v-for="(item, index) in componentData"
    :defaultStyle="item.style"
    :style="getShapeStyle(item.style, index)"
    :key="item.id"
    :active="item === curComponent"
    :element="item"
    :zIndex="index"
>
    <component
        class="component"
        :is="item.component"
        :style="getComponentStyle(item.style)"
        :propValue="item.propValue"
    />
</Shape>
```

> `Shape` 组件内部结构：

```html
<template>
    <div class="shape" :class="{ active: this.active }" @click="selectCurComponent" @mousedown="handleMouseDown"
    @contextmenu="handleContextMenu">
        <div
            class="shape-point"
            v-for="(item, index) in (active? pointList : [])"
            @mousedown="handleMouseDownOnPoint(item)"
            :key="index"
            :style="getPointStyle(item)">
        </div>
        <slot></slot>
    </div>
</template>
```

### 第二步

2. 点击组件时，将 8 个小圆点显示出来。

起作用的是这行代码 `:active="item === curComponent"`。

### 第三步

3. 计算每个小圆点的位置。

先来看一下计算小圆点位置的代码：

```js
const pointList = ['t', 'r', 'b', 'l', 'lt', 'rt', 'lb', 'rb']

getPointStyle(point) {
    const { width, height } = this.defaultStyle
    const hasT = /t/.test(point)
    const hasB = /b/.test(point)
    const hasL = /l/.test(point)
    const hasR = /r/.test(point)
    let newLeft = 0
    let newTop = 0

    // 四个角的点
    if (point.length === 2) {
        newLeft = hasL? 0 : width
        newTop = hasT? 0 : height
    } else {
        // 上下两点的点，宽度居中
        if (hasT || hasB) {
            newLeft = width / 2
            newTop = hasT? 0 : height
        }

        // 左右两边的点，高度居中
        if (hasL || hasR) {
            newLeft = hasL? 0 : width
            newTop = Math.floor(height / 2)
        }
    }

    const style = {
        marginLeft: hasR? '-4px' : '-3px',
        marginTop: '-3px',
        left: `${newLeft}px`,
        top: `${newTop}px`,
        cursor: point.split('').reverse().map(m => this.directionKey[m]).join('') + '-resize',
    }

    return style
}
```

计算小圆点的位置需要获取一些信息：

* 组件的高度 `height`、宽度 `width`

注意，小圆点也是绝对定位的，相对于 `Shape` 组件。所以有四个小圆点的位置很好确定：

1. 左上角的小圆点，坐标 `left: 0, top: 0`

2. 右上角的小圆点，坐标 `left: width, top: 0`

3. 左下角的小圆点，坐标 `left: 0, top: height`

4. 右下角的小圆点，坐标 `left: width, top: height`

<img :src="$withBase('/assets/performance/base/aa848fc6227849ad80b4ce21f0eaec59_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

另外的四个小圆点需要通过计算间接算出来。例如左边中间的小圆点，计算公式为 `left: 0, top: height / 2`，其他小圆点同理。

<img :src="$withBase('/assets/performance/base/0cf2bbe521f343cda67a542263e61d57_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

### 第四步

4. 点击小圆点时，可以进行放大缩小操作。

```js
handleMouseDownOnPoint(point) {
    const downEvent = window.event
    downEvent.stopPropagation()
    downEvent.preventDefault()

    const pos = { ...this.defaultStyle }
    const height = Number(pos.height)
    const width = Number(pos.width)
    const top = Number(pos.top)
    const left = Number(pos.left)
    const startX = downEvent.clientX
    const startY = downEvent.clientY

    // 是否需要保存快照
    let needSave = false
    const move = (moveEvent) => {
        needSave = true
        const currX = moveEvent.clientX
        const currY = moveEvent.clientY
        const disY = currY - startY
        const disX = currX - startX
        const hasT = /t/.test(point)
        const hasB = /b/.test(point)
        const hasL = /l/.test(point)
        const hasR = /r/.test(point)
        const newHeight = height + (hasT? -disY : hasB? disY : 0)
        const newWidth = width + (hasL? -disX : hasR? disX : 0)
        pos.height = newHeight > 0? newHeight : 0
        pos.width = newWidth > 0? newWidth : 0
        pos.left = left + (hasL? disX : 0)
        pos.top = top + (hasT? disY : 0)
        this.$store.commit('setShapeStyle', pos)
    }

    const up = () => {
        document.removeEventListener('mousemove', move)
        document.removeEventListener('mouseup', up)
        needSave && this.$store.commit('recordSnapshot')
    }

    document.addEventListener('mousemove', move)
    document.addEventListener('mouseup', up)
}
```

它的原理是这样的：

1. 点击小圆点时，记录点击的坐标 xy。

2. 假设我们现在向下拖动，那么 y 坐标就会增大。

3. 用新的 y 坐标减去原来的 y 坐标，就可以知道在纵轴方向的移动距离是多少。

4. 最后再将移动距离加上原来组件的高度，就可以得出新的组件高度。

5. 如果是正数，说明是往下拉，组件的高度在增加。如果是负数，说明是往上拉，组件的高度在减少。

<img :src="$withBase('/assets/performance/base/0d92a3d0097943df97d0ebfe0285dd1f_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

## 6. 撤消、重做

撤销重做的实现原理其实挺简单的，先看一下代码：

```js
snapshotData: [], // 编辑器快照数据
snapshotIndex: -1, // 快照索引
        
undo(state) {
    if (state.snapshotIndex >= 0) {
        state.snapshotIndex--
        store.commit('setComponentData', deepCopy(state.snapshotData[state.snapshotIndex]))
    }
},

redo(state) {
    if (state.snapshotIndex < state.snapshotData.length - 1) {
        state.snapshotIndex++
        store.commit('setComponentData', deepCopy(state.snapshotData[state.snapshotIndex]))
    }
},

setComponentData(state, componentData = []) {
    Vue.set(state, 'componentData', componentData)
},

recordSnapshot(state) {
    // 添加新的快照
    state.snapshotData[++state.snapshotIndex] = deepCopy(state.componentData)
    // 在 undo 过程中，添加新的快照时，要将它后面的快照清理掉
    if (state.snapshotIndex < state.snapshotData.length - 1) {
        state.snapshotData = state.snapshotData.slice(0, state.snapshotIndex + 1)
    }
},
```

用一个数组来保存编辑器的快照数据。保存快照就是不停地执行 `push()` 操作，将当前的编辑器数据推入 `snapshotData` 数组，并增加快照索引 `snapshotIndex`。目前以下几个动作会触发保存快照操作：

* 新增组件

* 删除组件

* 改变图层层级

* 拖动组件结束时

### 撤销

假设现在 `snapshotData` 保存了 4 个快照。即 `[a, b, c, d]`，对应的快照索引为 3。如果这时进行了撤销操作，我们需要将快照索引减 1，然后将对应的快照数据赋值给画布。

例如当前画布数据是 d，进行撤销后，索引 -1，现在画布的数据是 c。

### 重做

明白了撤销，那重做就很好理解了，就是将快照索引加 1，然后将对应的快照数据赋值给画布。

不过还有一点要注意，就是在撤销操作中进行了新的操作，要怎么办呢？有两种解决方案：

1. 新操作替换当前快照索引后面所有的数据。还是用刚才的数据 `[a, b, c, d]` 举例，假设现在进行了两次撤销操作，快照索引变为 1，对应的快照数据为 b，如果这时进行了新的操作，对应的快照数据为 e。那 e 会把 cd 顶掉，现在的快照数据为 `[a, b, e]`。

2. 不顶掉数据，在原来的快照中新增一条记录。用刚才的例子举例，e 不会把 cd 顶掉，而是在 cd 之前插入，即快照数据变为 `[a, b, e, c, d]`。

我采用的是第一种方案。

<img :src="$withBase('/assets/performance/base/62bedf9d3e6441b3ad75ffcceb415d63_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

## 7. 吸附

什么是吸附？就是在拖拽组件时，如果它和另一个组件的距离比较接近，就会自动吸附在一起。

<img :src="$withBase('/assets/performance/base/b88c059157874d7f951ead234d6b27ce_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

吸附的代码大概在 300 行左右，建议自己打开源码文件看（文件路径：`src\components\Editor\MarkLine.vue`）。这里不贴代码了，主要说说原理是怎么实现的。

### 标线

在页面上创建 6 条线，分别是三横三竖。这 6 条线的作用是对齐，它们什么时候会出现呢？

1. 上下方向的两个组件左边、中间、右边对齐时会出现竖线

2. 左右方向的两个组件上边、中间、下边对齐时会出现横线

具体的计算公式主要是根据每个组件的 xy 坐标和宽度高度进行计算的。例如要判断 ab 两个组件的左边是否对齐，则要知道它们每个组件的 x 坐标；如果要知道它们右边是否对齐，除了要知道 x 坐标，还要知道它们各自的宽度。

```js
// 左对齐的条件
a.x == b.x

// 右对齐的条件
a.x + a.width == b.x + b.width
```

在对齐的时候，显示标线。

另外还要判断 ab 两个组件是否“足够”近。如果足够近，就吸附在一起。是否足够近要靠一个变量来判断：

```js
diff: 3, // 相距 dff 像素将自动吸附
```

小于等于 `diff` 像素则自动吸附。

### 吸附

**吸附效果是怎么实现的呢？**

假设现在有 ab 组件，a 组件坐标 xy 都是 0，宽高都是 100。现在假设 a 组件不动，我们正在拖拽 b 组件。当把 b 组件拖到坐标为 `x: 0, y: 103` 时，由于 `103 - 100 <= 3(diff)`，所以可以判定它们已经接近得足够近。这时需要手动将 b 组件的 y 坐标值设为 100，这样就将 ab 组件吸附在一起了。

<img :src="$withBase('/assets/performance/base/fa6c061224f4453db980b8a0b35bef26_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

### 优化

在拖拽时如果 6 条标线都显示出来会不太美观。所以我们可以做一下优化，在纵横方向上最多只同时显示一条线。实现原理如下：

1. a 组件在左边不动，我们拖着 b 组件往 a 组件靠近。

2. 这时它们最先对齐的是 a 的右边和 b 的左边，所以只需要一条线就够了。

3. 如果 ab 组件已经靠近，并且 b 组件继续往左边移动，这时就要判断它们俩的中间是否对齐。

4. b 组件继续拖动，这时需要判断 a 组件的左边和 b 组件的右边是否对齐，也是只需要一条线。

可以发现，关键的地方是我们要知道两个组件的方向。即 ab 两个组件靠近，我们要知道到底 b 是在 a 的左边还是右边。

这一点可以通过鼠标移动事件来判断，之前在讲解拖拽的时候说过，`mousedown` 事件触发时会记录起点坐标。所以每次触发 `mousemove` 事件时，用当前坐标减去原来的坐标，就可以判断组件方向。例如 x 方向上，如果 `b.x - a.x` 的差值为正，说明是 b 在 a 右边，否则为左边。

```js
// 触发元素移动事件，用于显示标线、吸附功能
// 后面两个参数代表鼠标移动方向
// currY - startY > 0 true 表示向下移动 false 表示向上移动
// currX - startX > 0 true 表示向右移动 false 表示向左移动
eventBus.$emit('move', this.$el, currY - startY > 0, currX - startX > 0)
```

<img :src="$withBase('/assets/performance/base/2508cf9cc943444f901d266afdc7f3d2_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

## 8. 组件属性设置

每个组件都有一些通用属性和独有的属性，我们需要提供一个能显示和修改属性的地方。

```js
// 每个组件数据大概是这样
{
    component: 'v-text', // 组件名称，需要提前注册到 Vue
    label: '文字', // 左侧组件列表中显示的名字
    propValue: '文字', // 组件所使用的值
    icon: 'el-icon-edit', // 左侧组件列表中显示的名字
    animations: [], // 动画列表
    events: {}, // 事件列表
    style: { // 组件样式
        width: 200,
        height: 33,
        fontSize: 14,
        fontWeight: 500,
        lineHeight: '',
        letterSpacing: 0,
        textAlign: '',
        color: '',
    },
}
```

<img :src="$withBase('/assets/performance/base/27b2819fe4e3492ebd82af58569ff1b1_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

我定义了一个 `AttrList` 组件，用于显示每个组件的属性。

```html
<template>
    <div class="attr-list">
        <el-form>
            <el-form-item v-for="(key, index) in styleKeys" :key="index" :label="map[key]">
                <el-color-picker v-if="key == 'borderColor'" v-model="curComponent.style[key]"></el-color-picker>
                <el-color-picker v-else-if="key == 'color'" v-model="curComponent.style[key]"></el-color-picker>
                <el-color-picker v-else-if="key == 'backgroundColor'" v-model="curComponent.style[key]"></el-color-picker>
                <el-select v-else-if="key == 'textAlign'" v-model="curComponent.style[key]">
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    ></el-option>
                </el-select>
                <el-input type="number" v-else v-model="curComponent.style[key]" />
            </el-form-item>
            <el-form-item label="内容" v-if="curComponent && curComponent.propValue && !excludes.includes(curComponent.component)">
                <el-input type="textarea" v-model="curComponent.propValue" />
            </el-form-item>
        </el-form>
    </div>
</template>
```

代码逻辑很简单，就是遍历组件的 `style` 对象，将每一个属性遍历出来。并且需要根据具体的属性用不同的组件显示出来，例如颜色属性，需要用颜色选择器显示；数值类的属性需要用 `type=number` 的 input 组件显示等等。

为了方便用户修改属性值，我使用 `v-model` 将组件和值绑定在一起。

<img :src="$withBase('/assets/performance/base/3bf1645c633b4090bf52d942796014aa_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

## 9. 预览、保存代码

预览和编辑的渲染原理是一样的，区别是不需要编辑功能。所以只需要将原先渲染组件的代码稍微改一下就可以了。

```html
<!--页面组件列表展示-->
<Shape v-for="(item, index) in componentData"
    :defaultStyle="item.style"
    :style="getShapeStyle(item.style, index)"
    :key="item.id"
    :active="item === curComponent"
    :element="item"
    :zIndex="index"
>
    <component
        class="component"
        :is="item.component"
        :style="getComponentStyle(item.style)"
        :propValue="item.propValue"
    />
</Shape>
```

经过刚才的介绍，我们知道 `Shape` 组件具备了拖拽、放大缩小的功能。现在只需要将 `Shape` 组件去掉，外面改成套一个普通的 DIV 就可以了（其实不用这个 DIV 也行，但为了绑定事件这个功能，所以需要加上）。

```html
<!--页面组件列表展示-->
<div v-for="(item, index) in componentData" :key="item.id">
    <component
        class="component"
        :is="item.component"
        :style="getComponentStyle(item.style)"
        :propValue="item.propValue"
    />
</div>
```

保存代码的功能也特别简单，只需要保存画布上的数据 `componentData` 即可。保存有两种选择：

1. 保存到服务器

2. 本地保存

在 DEMO 上我使用的 `localStorage` 保存在本地。

<img :src="$withBase('/assets/performance/base/3b5d7b6b2e7148ba8468b68d734b89c2_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

## 10. 绑定事件

每个组件有一个 `events` 对象，用于存储绑定的事件。目前我只定义了两个事件：

* alert 事件

* redirect 事件

```js
// 编辑器自定义事件
const events = {
    redirect(url) {
        if (url) {
            window.location.href = url
        }
    },

    alert(msg) {
        if (msg) {
            alert(msg)
        }
    },
}

const mixins = {
    methods: events,
}

const eventList = [
    {
        key: 'redirect',
        label: '跳转事件',
        event: events.redirect,
        param: '',
    },
    {
        key: 'alert',
        label: 'alert 事件',
        event: events.alert,
        param: '',
    },
]

export {
    mixins,
    events,
    eventList,
}
```

不过不能在编辑的时候触发，可以在预览的时候触发。

<img :src="$withBase('/assets/performance/base/81c3d2722b7a4069bd76476b5b320934_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

### 添加事件

通过 `v-for` 指令将事件列表渲染出来：

```html
<el-tabs v-model="eventActiveName">
    <el-tab-pane v-for="item in eventList" :key="item.key" :label="item.label" :name="item.key" style="padding: 0 20px">
        <el-input v-if="item.key == 'redirect'" v-model="item.param" type="textarea" placeholder="请输入完整的 URL" />
        <el-input v-if="item.key == 'alert'" v-model="item.param" type="textarea" placeholder="请输入要 alert 的内容" />
        <el-button style="margin-top: 20px;" @click="addEvent(item.key, item.param)">确定</el-button>
    </el-tab-pane>
</el-tabs>
```

选中事件时将事件添加到组件的 `events` 对象。

### 触发事件

预览或真正渲染页面时，也需要在每个组件外面套一层 DIV，这样就可以在 DIV 上绑定一个点击事件，点击时触发我们刚才添加的事件。

```html
<template>
    <div @click="handleClick">
        <component
            class="conponent"
            :is="config.component"
            :style="getStyle(config.style)"
            :propValue="config.propValue"
        />
    </div>
</template>
```

```js
handleClick() {
    const events = this.config.events
    // 循环触发绑定的事件
    Object.keys(events).forEach(event => {
        this[event](events[event])
    })
}
```

## 11. 绑定动画

动画和事件的原理是一样的，先将所有的动画通过 `v-for` 指令渲染出来，然后点击动画将对应的动画添加到组件的 `animations` 数组里。同事件一样，执行的时候也是遍历组件所有的动画并执行。

为了方便，我们使用了 [animate.css](https://link.juejin.cn/?target=https%3A%2F%2Fanimate.style%2F) 动画库。

```js
// main.js
import '@/styles/animate.css'
```

现在我们提前定义好所有的动画数据：

```js
export default [
    {
        label: '进入',
        children: [
            { label: '渐显', value: 'fadeIn' },
            { label: '向右进入', value: 'fadeInLeft' },
            { label: '向左进入', value: 'fadeInRight' },
            { label: '向上进入', value: 'fadeInUp' },
            { label: '向下进入', value: 'fadeInDown' },
            { label: '向右长距进入', value: 'fadeInLeftBig' },
            { label: '向左长距进入', value: 'fadeInRightBig' },
            { label: '向上长距进入', value: 'fadeInUpBig' },
            { label: '向下长距进入', value: 'fadeInDownBig' },
            { label: '旋转进入', value: 'rotateIn' },
            { label: '左顺时针旋转', value: 'rotateInDownLeft' },
            { label: '右逆时针旋转', value: 'rotateInDownRight' },
            { label: '左逆时针旋转', value: 'rotateInUpLeft' },
            { label: '右逆时针旋转', value: 'rotateInUpRight' },
            { label: '弹入', value: 'bounceIn' },
            { label: '向右弹入', value: 'bounceInLeft' },
            { label: '向左弹入', value: 'bounceInRight' },
            { label: '向上弹入', value: 'bounceInUp' },
            { label: '向下弹入', value: 'bounceInDown' },
            { label: '光速从右进入', value: 'lightSpeedInRight' },
            { label: '光速从左进入', value: 'lightSpeedInLeft' },
            { label: '光速从右退出', value: 'lightSpeedOutRight' },
            { label: '光速从左退出', value: 'lightSpeedOutLeft' },
            { label: 'Y轴旋转', value: 'flip' },
            { label: '中心X轴旋转', value: 'flipInX' },
            { label: '中心Y轴旋转', value: 'flipInY' },
            { label: '左长半径旋转', value: 'rollIn' },
            { label: '由小变大进入', value: 'zoomIn' },
            { label: '左变大进入', value: 'zoomInLeft' },
            { label: '右变大进入', value: 'zoomInRight' },
            { label: '向上变大进入', value: 'zoomInUp' },
            { label: '向下变大进入', value: 'zoomInDown' },
            { label: '向右滑动展开', value: 'slideInLeft' },
            { label: '向左滑动展开', value: 'slideInRight' },
            { label: '向上滑动展开', value: 'slideInUp' },
            { label: '向下滑动展开', value: 'slideInDown' },
        ],
    },
    {
        label: '强调',
        children: [
            { label: '弹跳', value: 'bounce' },
            { label: '闪烁', value: 'flash' },
            { label: '放大缩小', value: 'pulse' },
            { label: '放大缩小弹簧', value: 'rubberBand' },
            { label: '左右晃动', value: 'headShake' },
            { label: '左右扇形摇摆', value: 'swing' },
            { label: '放大晃动缩小', value: 'tada' },
            { label: '扇形摇摆', value: 'wobble' },
            { label: '左右上下晃动', value: 'jello' },
            { label: 'Y轴旋转', value: 'flip' },
        ],
    },
    {
        label: '退出',
        children: [
            { label: '渐隐', value: 'fadeOut' },
            { label: '向左退出', value: 'fadeOutLeft' },
            { label: '向右退出', value: 'fadeOutRight' },
            { label: '向上退出', value: 'fadeOutUp' },
            { label: '向下退出', value: 'fadeOutDown' },
            { label: '向左长距退出', value: 'fadeOutLeftBig' },
            { label: '向右长距退出', value: 'fadeOutRightBig' },
            { label: '向上长距退出', value: 'fadeOutUpBig' },
            { label: '向下长距退出', value: 'fadeOutDownBig' },
            { label: '旋转退出', value: 'rotateOut' },
            { label: '左顺时针旋转', value: 'rotateOutDownLeft' },
            { label: '右逆时针旋转', value: 'rotateOutDownRight' },
            { label: '左逆时针旋转', value: 'rotateOutUpLeft' },
            { label: '右逆时针旋转', value: 'rotateOutUpRight' },
            { label: '弹出', value: 'bounceOut' },
            { label: '向左弹出', value: 'bounceOutLeft' },
            { label: '向右弹出', value: 'bounceOutRight' },
            { label: '向上弹出', value: 'bounceOutUp' },
            { label: '向下弹出', value: 'bounceOutDown' },
            { label: '中心X轴旋转', value: 'flipOutX' },
            { label: '中心Y轴旋转', value: 'flipOutY' },
            { label: '左长半径旋转', value: 'rollOut' },
            { label: '由小变大退出', value: 'zoomOut' },
            { label: '左变大退出', value: 'zoomOutLeft' },
            { label: '右变大退出', value: 'zoomOutRight' },
            { label: '向上变大退出', value: 'zoomOutUp' },
            { label: '向下变大退出', value: 'zoomOutDown' },
            { label: '向左滑动收起', value: 'slideOutLeft' },
            { label: '向右滑动收起', value: 'slideOutRight' },
            { label: '向上滑动收起', value: 'slideOutUp' },
            { label: '向下滑动收起', value: 'slideOutDown' },
        ],
    },
]
```

然后用 `v-for` 指令渲染出来动画列表。

<img :src="$withBase('/assets/performance/base/7a8937f86e9c4b0489357e0c3e871cc8_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

### 添加动画

```html
<el-tabs v-model="animationActiveName">
    <el-tab-pane v-for="item in animationClassData" :key="item.label" :label="item.label" :name="item.label">
        <el-scrollbar class="animate-container">
            <div
                class="animate"
                v-for="(animate, index) in item.children"
                :key="index"
                @mouseover="hoverPreviewAnimate = animate.value"
                @click="addAnimation(animate)"
            >
                <div :class="[hoverPreviewAnimate === animate.value && animate.value + ' animated']">
                    {{ animate.label }}
                </div>
            </div>
        </el-scrollbar>
    </el-tab-pane>
</el-tabs>
```

点击动画将调用 `addAnimation(animate)` 将动画添加到组件的 `animations` 数组。

### 触发动画

运行动画的代码：

```js
export default async function runAnimation($el, animations = []) {
    const play = (animation) => new Promise(resolve => {
        $el.classList.add(animation.value, 'animated')
        const removeAnimation = () => {
            $el.removeEventListener('animationend', removeAnimation)
            $el.removeEventListener('animationcancel', removeAnimation)
            $el.classList.remove(animation.value, 'animated')
            resolve()
        }
            
        $el.addEventListener('animationend', removeAnimation)
        $el.addEventListener('animationcancel', removeAnimation)
    })

    for (let i = 0, len = animations.length; i < len; i++) {
        await play(animations[i])
    }
}
```

运行动画需要两个参数：组件对应的 DOM 元素（在组件使用 `this.$el` 获取）和它的动画数据 `animations`。并且需要监听 `animationend` 事件和 `animationcancel` 事件：一个是动画结束时触发，一个是动画意外终止时触发。

利用这一点再配合 `Promise` 一起使用，就可以逐个运行组件的每个动画了。

## 12. 导入 PSD

由于时间关系，这个功能我还没做。现在简单的描述一下怎么做这个功能。那就是使用 [psd.js](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fmeltingice%2Fpsd.js%23readme) 库，它可以解析 PSD 文件。

使用 `psd` 库解析 PSD 文件得出的数据如下：

```js
{ children: 
   [ { type: 'group',
       visible: false,
       opacity: 1,
       blendingMode: 'normal',
       name: 'Version D',
       left: 0,
       right: 900,
       top: 0,
       bottom: 600,
       height: 600,
       width: 900,
       children: 
        [ { type: 'layer',
            visible: true,
            opacity: 1,
            blendingMode: 'normal',
            name: 'Make a change and save.',
            left: 275,
            right: 636,
            top: 435,
            bottom: 466,
            height: 31,
            width: 361,
            mask: {},
            text: 
             { value: 'Make a change and save.',
               font: 
                { name: 'HelveticaNeue-Light',
                  sizes: [ 33 ],
                  colors: [ [ 85, 96, 110, 255 ] ],
                  alignment: [ 'center' ] },
               left: 0,
               top: 0,
               right: 0,
               bottom: 0,
               transform: { xx: 1, xy: 0, yx: 0, yy: 1, tx: 456, ty: 459 } },
            image: {} } ] } ],
    document: 
       { width: 900,
         height: 600,
         resources: 
          { layerComps: 
             [ { id: 692243163, name: 'Version A', capturedInfo: 1 },
               { id: 725235304, name: 'Version B', capturedInfo: 1 },
               { id: 730932877, name: 'Version C', capturedInfo: 1 } ],
            guides: [],
            slices: [] } } }
```

从以上代码可以发现，这些数据和 css 非常像。根据这一点，只需要写一个转换函数，将这些数据转换成我们组件所需的数据，就能实现 PSD 文件转成渲染组件的功能。目前 [quark-h5](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fhuangwei9527%2Fquark-h5) 和 [luban-h5](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fly525%2Fluban-h5) 都是这样实现的 PSD 转换功能。

## 13. 手机模式

由于画布是可以调整大小的，我们可以使用 iphone6 的分辨率来开发手机页面。

<img :src="$withBase('/assets/performance/base/645bcbb6740f472a921e8b29f236402c_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

这样开发出来的页面也可以在手机下正常浏览，但可能会有样式偏差。因为我自定义的三个组件是没有做适配的，如果你需要开发手机页面，那自定义组件必须使用移动端的 UI 组件库。或者自己开发移动端专用的自定义组件。

## 14. 拖拽旋转

这个旋转功能还有很多不完善的地方：

1. 不支持拖拽旋转。

2. 旋转后的放大缩小不正确。

3. 旋转后的自动吸附不正确。

4. 旋转后八个可伸缩点的光标不正确。

### 拖拽旋转

拖拽旋转需要使用 [Math.atan2()](https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FJavaScript%2FReference%2FGlobal_Objects%2FMath%2Fatan2) 函数。

::: tip 注意
Math.atan2() 返回从原点(0,0)到(x,y)点的线段与x轴正方向之间的平面角度(弧度值)，也就是Math.atan2(y,x)。Math.atan2(y,x)中的y和x都是相对于圆点(0,0)的距离。
:::

简单的说就是以组件中心点为原点 `(centerX,centerY)`，用户按下鼠标时的坐标设为 `(startX,startY)`，鼠标移动时的坐标设为 `(curX,curY)`。旋转角度可以通过 `(startX,startY)` 和 `(curX,curY)` 计算得出。

<img :src="$withBase('/assets/performance/base/b8e325e225904a5ab273ff03716ba4f9_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

那我们如何得到从点 `(startX,startY)` 到点 `(curX,curY)` 之间的旋转角度呢？

**第一步**，鼠标点击时的坐标设为 `(startX,startY)`：

```js
const startY = e.clientY
const startX = e.clientX
```

**第二步**，算出组件中心点：

```js
// 获取组件中心点位置
const rect = this.$el.getBoundingClientRect()
const centerX = rect.left + rect.width / 2
const centerY = rect.top + rect.height / 2
```

**第三步**，按住鼠标移动时的坐标设为 `(curX,curY)`：

```js
const curX = moveEvent.clientX
const curY = moveEvent.clientY
```

**第四步**，分别算出 `(startX,startY)` 和 `(curX,curY)` 对应的角度，再将它们相减得出旋转的角度。另外，还需要注意的就是 `Math.atan2()` 方法的返回值是一个弧度，因此还需要将弧度转化为角度。所以完整的代码为：

```js
// 旋转前的角度
const rotateDegreeBefore = Math.atan2(startY - centerY, startX - centerX) / (Math.PI / 180)
// 旋转后的角度
const rotateDegreeAfter = Math.atan2(curY - centerY, curX - centerX) / (Math.PI / 180)
// 获取旋转的角度值， startRotate 为初始角度值
pos.rotate = startRotate + rotateDegreeAfter - rotateDegreeBefore
```

<img :src="$withBase('/assets/performance/base/8e0757a022d847908ca0564a63cf9a5c_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

### 放大缩小

组件旋转后的放大缩小会有 BUG。

<img :src="$withBase('/assets/performance/base/9018348db9eb47de924babb7214eb3d9_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

从上图可以看到，放大缩小时会发生移位。另外伸缩的方向和我们拖动的方向也不对。造成这一 BUG 的原因是：当初设计放大缩小功能没有考虑到旋转的场景。所以无论旋转多少角度，放大缩小仍然是按没旋转时计算的。

下面再看一个具体的示例：

<img :src="$withBase('/assets/performance/base/e91838cfb5d14659ba94c2d0eaefc66c_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

从上图可以看出，在没有旋转时，按住顶点往上拖动，只需用 `y2 - y1` 就可以得出拖动距离 `s`。这时将组件原来的高度加上 `s` 就能得出新的高度，同时将组件的 `top`、`left` 属性更新。

<img :src="$withBase('/assets/performance/base/99dc83bff7404910b4b5bf7f0a21ed19_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

现在旋转 180 度，如果这时拖住顶点往下拖动，我们期待的结果是组件高度增加。但这时计算的方式和原来没旋转时是一样的，所以结果和我们期待的相反，组件的高度将会变小（如果不理解这个现象，可以想像一下没有旋转的那张图，按住顶点往下拖动）。

<img :src="$withBase('/assets/performance/base/ea760305cb254f26bd8312ea37536b8e_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

如何解决这个问题呢？我从 github 上的一个项目 [snapping-demo](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fshenhudong%2Fsnapping-demo%2Fwiki%2Fcorner-handle) 找到了解决方案：将放大缩小和旋转角度关联起来。

### 解决方案

下面是一个已旋转一定角度的矩形，假设现在拖动它左上方的点进行拉伸。

<img :src="$withBase('/assets/performance/base/3f4c1071b2a0484294552ce0bfcd67c3_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

现在我们将一步步分析如何得出拉伸后的组件的正确大小和位移。

**第一步**，按下鼠标时通过组件的坐标（无论旋转多少度，组件的 `top` `left` 属性不变）和大小算出组件中心点：

```js
const center = {
    x: style.left + style.width / 2,
    y: style.top + style.height / 2,
}
```

**第二步**，用**当前点击坐标**和组件中心点算出**当前点击坐标**的对称点坐标：

```js
// 获取画布位移信息
const editorRectInfo = document.querySelector('#editor').getBoundingClientRect()

// 当前点击坐标
const curPoint = {
    x: e.clientX - editorRectInfo.left,
    y: e.clientY - editorRectInfo.top,
}

// 获取对称点的坐标
const symmetricPoint = {
    x: center.x - (curPoint.x - center.x),
    y: center.y - (curPoint.y - center.y),
}
```

**第三步**，摁住组件左上角进行拉伸时，通过当前鼠标实时坐标和对称点计算出新的组件中心点：

```js
const curPositon = {
    x: moveEvent.clientX - editorRectInfo.left,
    y: moveEvent.clientY - editorRectInfo.top,
}

const newCenterPoint = getCenterPoint(curPositon, symmetricPoint)

// 求两点之间的中点坐标
function getCenterPoint(p1, p2) {
    return {
        x: p1.x + ((p2.x - p1.x) / 2),
        y: p1.y + ((p2.y - p1.y) / 2),
    }
}
```

由于组件处于旋转状态，即使你知道了拉伸时移动的 `xy` 距离，也不能直接对组件进行计算。否则就会出现 BUG，移位或者放大缩小方向不正确。因此，我们需要在组件未旋转的情况下对其进行计算。

<img :src="$withBase('/assets/performance/base/53e1d2636ca744d5a732de828ef71789_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

**第四步**，根据已知的旋转角度、新的组件中心点、当前鼠标实时坐标可以算出**当前鼠标实时坐标** `currentPosition` 在未旋转时的坐标 `newTopLeftPoint`。同时也能根据已知的旋转角度、新的组件中心点、对称点算出**组件对称点** `sPoint` 在未旋转时的坐标 `newBottomRightPoint`。

对应的计算公式如下：

```js
/**
 * 计算根据圆心旋转后的点的坐标
 * @param   {Object}  point  旋转前的点坐标
 * @param   {Object}  center 旋转中心
 * @param   {Number}  rotate 旋转的角度
 * @return  {Object}         旋转后的坐标
 * https://www.zhihu.com/question/67425734/answer/252724399 旋转矩阵公式
 */
export function calculateRotatedPointCoordinate(point, center, rotate) {
    /**
     * 旋转公式：
     *  点a(x, y)
     *  旋转中心c(x, y)
     *  旋转后点n(x, y)
     *  旋转角度θ                tan ??
     * nx = cosθ * (ax - cx) - sinθ * (ay - cy) + cx
     * ny = sinθ * (ax - cx) + cosθ * (ay - cy) + cy
     */

    return {
        x: (point.x - center.x) * Math.cos(angleToRadian(rotate)) - (point.y - center.y) * Math.sin(angleToRadian(rotate)) + center.x,
        y: (point.x - center.x) * Math.sin(angleToRadian(rotate)) + (point.y - center.y) * Math.cos(angleToRadian(rotate)) + center.y,
    }
}
```

上面的公式涉及到线性代数中旋转矩阵的知识，对于一个没上过大学的人来说，实在太难了。还好我从知乎上的一个[回答](https://link.juejin.cn/?target=https%3A%2F%2Fwww.zhihu.com%2Fquestion%2F67425734%2Fanswer%2F252724399)中找到了这一公式的推理过程，下面是回答的原文：

<img :src="$withBase('/assets/performance/base/c7642af219464d1ab244d3cebd9e10cf_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

通过以上几个计算值，就可以得到组件新的位移值 `top` `left` 以及新的组件大小。对应的完整代码如下：

```js
function calculateLeftTop(style, curPositon, pointInfo) {
    const { symmetricPoint } = pointInfo
    const newCenterPoint = getCenterPoint(curPositon, symmetricPoint)
    const newTopLeftPoint = calculateRotatedPointCoordinate(curPositon, newCenterPoint, -style.rotate)
    const newBottomRightPoint = calculateRotatedPointCoordinate(symmetricPoint, newCenterPoint, -style.rotate)
  
    const newWidth = newBottomRightPoint.x - newTopLeftPoint.x
    const newHeight = newBottomRightPoint.y - newTopLeftPoint.y
    if (newWidth > 0 && newHeight > 0) {
        style.width = Math.round(newWidth)
        style.height = Math.round(newHeight)
        style.left = Math.round(newTopLeftPoint.x)
        style.top = Math.round(newTopLeftPoint.y)
    }
}
```

现在再来看一下旋转后的放大缩小：

<img :src="$withBase('/assets/performance/base/e2180e27188b4dfcbe97500faf330dd6_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

### 自动吸附

自动吸附是根据组件的四个属性 `top` `left` `width` `height` 计算的，在将组件进行旋转后，这些属性的值是不会变的。所以无论组件旋转多少度，吸附时仍然按未旋转时计算。这样就会有一个问题，虽然实际上组件的 `top` `left` `width` `height` 属性没有变化。但在外观上却发生了变化。下面是两个同样的组件：一个没旋转，一个旋转了 45 度。

<img :src="$withBase('/assets/performance/base/97b6da46c19b49bbbb54ce1be0b468cf_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

可以看出来旋转后按钮的 `height` 属性和我们从外观上看到的高度是不一样的，所以在这种情况下就出现了吸附不正确的 BUG。

<img :src="$withBase('/assets/performance/base/d722ae0c1ff440f99c8b04cc788e3049_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

### 解决方案

如何解决这个问题？我们需要拿组件旋转后的大小及位移来做吸附对比。也就是说不要拿组件实际的属性来对比，而是拿我们看到的大小和位移做对比。

<img :src="$withBase('/assets/performance/base/49d0b11e874347f487bfce88972b5297_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

从上图可以看出，旋转后的组件在 `x` 轴上的投射长度为两条红线长度之和。这两条红线的长度可以通过正弦和余弦算出，左边的红线用正弦计算，右边的红线用余弦计算：

```js
const newWidth = style.width * cos(style.rotate) + style.height * sin(style.rotate)
```

同理，高度也是一样：

```js
const newHeight = style.height * cos(style.rotate) + style.width * sin(style.rotate)
```

新的宽度和高度有了，再根据组件原有的 `top` `left` 属性，可以得出组件旋转后新的 `top` `left` 属性。下面附上完整代码：

```js
translateComponentStyle(style) {
    style = { ...style }
    if (style.rotate != 0) {
        const newWidth = style.width * cos(style.rotate) + style.height * sin(style.rotate)
        const diffX = (style.width - newWidth) / 2
        style.left += diffX
        style.right = style.left + newWidth

        const newHeight = style.height * cos(style.rotate) + style.width * sin(style.rotate)
        const diffY = (newHeight - style.height) / 2
        style.top -= diffY
        style.bottom = style.top + newHeight

        style.width = newWidth
        style.height = newHeight
    } else {
        style.bottom = style.top + style.height
        style.right = style.left + style.width
    }

    return style
}
```

经过修复后，吸附也可以正常显示了。

<img :src="$withBase('/assets/performance/base/979c53d0c3034e1e9e0cb91b6693d694_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

### 光标

光标和可拖动的方向不对，是因为八个点的光标是固定设置的，没有随着角度变化而变化。

<img :src="$withBase('/assets/performance/base/2af5d35bcb5d4bf5b2e1b4ce633037f6_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

### 解决方案

由于 `360 / 8 = 45`，所以可以为每一个方向分配 45 度的范围，每个范围对应一个光标。同时为每个方向设置一个初始角度，也就是未旋转时组件每个方向对应的角度。

<img :src="$withBase('/assets/performance/base/92c4f8a3c3444316a662a79f0f44af63_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

```js
pointList: ['lt', 't', 'rt', 'r', 'rb', 'b', 'lb', 'l'], // 八个方向
initialAngle: { // 每个点对应的初始角度
    lt: 0,
    t: 45,
    rt: 90,
    r: 135,
    rb: 180,
    b: 225,
    lb: 270,
    l: 315,
},
angleToCursor: [ // 每个范围的角度对应的光标
    { start: 338, end: 23, cursor: 'nw' },
    { start: 23, end: 68, cursor: 'n' },
    { start: 68, end: 113, cursor: 'ne' },
    { start: 113, end: 158, cursor: 'e' },
    { start: 158, end: 203, cursor: 'se' },
    { start: 203, end: 248, cursor: 's' },
    { start: 248, end: 293, cursor: 'sw' },
    { start: 293, end: 338, cursor: 'w' },
],
cursors: {},
```

计算方式也很简单：

1. 假设现在组件已旋转了一定的角度 a。

2. 遍历八个方向，用每个方向的初始角度 + a 得出现在的角度 b。

3. 遍历 `angleToCursor` 数组，看看 b 在哪一个范围中，然后将对应的光标返回。

经过上面三个步骤就可以计算出组件旋转后正确的光标方向。具体的代码如下：

```js
getCursor() {
    const { angleToCursor, initialAngle, pointList, curComponent } = this
    const rotate = (curComponent.style.rotate + 360) % 360 // 防止角度有负数，所以 + 360
    const result = {}
    let lastMatchIndex = -1 // 从上一个命中的角度的索引开始匹配下一个，降低时间复杂度
    pointList.forEach(point => {
        const angle = (initialAngle[point] + rotate) % 360
        const len = angleToCursor.length
        while (true) {
            lastMatchIndex = (lastMatchIndex + 1) % len
            const angleLimit = angleToCursor[lastMatchIndex]
            if (angle < 23 || angle >= 338) {
                result[point] = 'nw-resize'
                return
            }

            if (angleLimit.start <= angle && angle < angleLimit.end) {
                result[point] = angleLimit.cursor + '-resize'
                return
            }
        }
    })

    return result
},
```

<img :src="$withBase('/assets/performance/base/9343e68731d14e74b9a1361a5584958b_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

从上面的动图可以看出来，现在八个方向上的光标是可以正确显示的。

## 15. 复制粘贴剪切

相对于拖拽旋转功能，复制粘贴就比较简单了。

```js
const ctrlKey = 17, vKey = 86, cKey = 67, xKey = 88
let isCtrlDown = false

window.onkeydown = (e) => {
    if (e.keyCode == ctrlKey) {
        isCtrlDown = true
    } else if (isCtrlDown && e.keyCode == cKey) {
        this.$store.commit('copy')
    } else if (isCtrlDown && e.keyCode == vKey) {
        this.$store.commit('paste')
    } else if (isCtrlDown && e.keyCode == xKey) {
        this.$store.commit('cut')
    }
}

window.onkeyup = (e) => {
    if (e.keyCode == ctrlKey) {
        isCtrlDown = false
    }
}
```

监听用户的按键操作，在按下特定按键时触发对应的操作。

### 复制操作

在 vuex 中使用 `copyData` 来表示复制的数据。当用户按下 `ctrl + c` 时，将当前组件数据深拷贝到 `copyData`。

```js
copy(state) {
    state.copyData = {
        data: deepCopy(state.curComponent),
        index: state.curComponentIndex,
    }
},
```

同时需要将当前组件在组件数据中的索引记录起来，在剪切中要用到。

### 粘贴操作

```js
paste(state, isMouse) {
    if (!state.copyData) {
        toast('请选择组件')
        return
    }

    const data = state.copyData.data

    if (isMouse) {
        data.style.top = state.menuTop
        data.style.left = state.menuLeft
    } else {
        data.style.top += 10
        data.style.left += 10
    }

    data.id = generateID()
    store.commit('addComponent', { component: data })
    store.commit('recordSnapshot')
    state.copyData = null
},
```

粘贴时，如果是按键操作 `ctrl+v`。则将组件的 `top` `left` 属性加 10，以免和原来的组件重叠在一起。如果是使用鼠标右键执行粘贴操作，则将复制的组件放到鼠标点击处。

### 剪切操作

```js
cut(state) {
    if (!state.curComponent) {
        toast('请选择组件')
        return
    }

    if (state.copyData) {
        store.commit('addComponent', { component: state.copyData.data, index: state.copyData.index })
        if (state.curComponentIndex >= state.copyData.index) {
            // 如果当前组件索引大于等于插入索引，需要加一，因为当前组件往后移了一位
            state.curComponentIndex++
        }
    }

    store.commit('copy')
    store.commit('deleteComponent')
},
```

剪切操作本质上还是复制，只不过在执行复制后，需要将当前组件删除。为了避免用户执行剪切操作后，不执行粘贴操作，而是继续执行剪切。这时就需要将原先剪切的数据进行恢复。所以复制数据中记录的索引就起作用了，可以通过索引将原来的数据恢复到原来的位置中。

### 右键操作

右键操作和按键操作是一样的，一个功能两种触发途径。

```html
<li @click="copy" v-show="curComponent">复制</li>
<li @click="paste">粘贴</li>
<li @click="cut" v-show="curComponent">剪切</li>

cut() {
    this.$store.commit('cut')
},

copy() {
    this.$store.commit('copy')
},

paste() {
    this.$store.commit('paste', true)
},
```

## 16. 数据交互

### 方式一

提前写好一系列 ajax 请求API，点击组件时按需选择 API，选好 API 再填参数。例如下面这个组件，就展示了如何使用 ajax 请求向后台交互：

```html
<template>
    <div>{{ propValue.data }}</div>
</template>

<script>
export default {
    // propValue: {
    //     api: {
    //             request: a,
    //             params,
    //      },
    //     data: null
    // }
    props: {
        propValue: {
            type: Object,
            default: () => {},
        },
    },
    created() {
        this.propValue.api.request(this.propValue.api.params).then(res => {
            this.propValue.data = res.data
        })
    },
}
</script>
```

### 方式二

方式二适合纯展示的组件，例如有一个报警组件，可以根据后台传来的数据显示对应的颜色。在编辑页面的时候，可以通过 ajax 向后台请求页面能够使用的 websocket 数据：

```js
const data = ['status', 'text'...]
```

然后再为不同的组件添加上不同的属性。例如有 a 组件，它绑定的属性为 `status`。

```js
// 组件能接收的数据
props: {
    propValue: {
        type: String,
    },
    element: {
        type: Object,
    },
    wsKey: {
        type: String,
        default: '',
    },
},
```

在组件中通过 `wsKey` 获取这个绑定的属性。等页面发布后或者预览时，通过 weboscket 向后台请求全局数据放在 vuex 上。组件就可以通过 `wsKey` 访问数据了。

```html
<template>
    <div>{{ wsData[wsKey] }}</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    props: {
        propValue: {
            type: String,
        },
        element: {
            type: Object,
        },
        wsKey: {
            type: String,
            default: '',
        },
    },
    computed: mapState([
        'wsData',
    ]),
</script>
```

## 17. 发布

页面发布有两种方式：一是将组件数据渲染为一个单独的 HTML 页面；二是从本项目中抽取出一个最小运行时 runtime 作为一个单独的项目。

这里说一下第二种方式，本项目中的最小运行时其实就是预览页面加上自定义组件。将这些代码提取出来作为一个项目单独打包。发布页面时将组件数据以 JSON 的格式传给服务端，同时为每个页面生成一个唯一 ID。

假设现在有三个页面，发布页面生成的 ID 为 a、b、c。访问页面时只需要把 ID 带上，这样就可以根据 ID 获取每个页面对应的组件数据。

```js
www.test.com/?id=a
www.test.com/?id=c
www.test.com/?id=b
```

### 按需加载

如果自定义组件过大，例如有数十个甚至上百个。这时可以将自定义组件用 `import` 的方式导入，做到按需加载，减少首屏渲染时间：

```js
import Vue from 'vue'

const components = [
    'Picture',
    'VText',
    'VButton',
]

components.forEach(key => {
    Vue.component(key, () => import(`@/custom-component/${key}`))
})
```

### 按版本发布

自定义组件有可能会有更新的情况。例如原来的组件使用了大半年，现在有功能变更，为了不影响原来的页面。建议在发布时带上组件的版本号：

```
- v-text
  - v1.vue
  - v2.vue
```

例如 `v-text` 组件有两个版本，在左侧组件列表区使用时就可以带上版本号：

```js
{
  component: 'v-text',
  version: 'v1'
  ...
}
```

这样导入组件时就可以根据组件版本号进行导入：

```js
import Vue from 'vue'
import componentList from '@/custom-component/component-list`

componentList.forEach(component => {
    Vue.component(component.name, () => import(`@/custom-component/${component.name}/${component.version}`))
})
```

## 18. 多个组件的组合和拆分

组合和拆分的技术点相对来说比较多，共有以下 4 个：

* 选中区域

* 组合后的移动、旋转

* 组合后的放大缩小

* 拆分后子组件样式的恢复

### 选中区域

在将多个组件组合之前，需要先选中它们。利用鼠标事件可以很方便的将选中区域展示出来：

<img :src="$withBase('/assets/performance/base/94c0f8c072494b4f917bb8a315371632_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

1. `mousedown` 记录起点坐标

2. `mousemove` 将当前坐标和起点坐标进行计算得出移动区域

3. 如果按下鼠标后往左上方移动，类似于这种操作则需要将当前坐标设为起点坐标，再计算出移动区域

```js
// 获取编辑器的位移信息
const rectInfo = this.editor.getBoundingClientRect()
this.editorX = rectInfo.x
this.editorY = rectInfo.y

const startX = e.clientX
const startY = e.clientY
this.start.x = startX - this.editorX
this.start.y = startY - this.editorY
// 展示选中区域
this.isShowArea = true

const move = (moveEvent) => {
    this.width = Math.abs(moveEvent.clientX - startX)
    this.height = Math.abs(moveEvent.clientY - startY)
    if (moveEvent.clientX < startX) {
        this.start.x = moveEvent.clientX - this.editorX
    }

    if (moveEvent.clientY < startY) {
        this.start.y = moveEvent.clientY - this.editorY
    }
}
```

在 `mouseup` 事件触发时，需要对选中区域内的所有组件的位移大小信息进行计算，得出一个能包含区域内所有组件的最小区域。这个效果如下图所示：

<img :src="$withBase('/assets/performance/base/a8ceeb3266b2498590f47183c58215f8_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

这个计算过程的代码：

```js
createGroup() {
  // 获取选中区域的组件数据
  const areaData = this.getSelectArea()
  if (areaData.length <= 1) {
      this.hideArea()
      return
  }

  // 根据选中区域和区域中每个组件的位移信息来创建 Group 组件
  // 要遍历选择区域的每个组件，获取它们的 left top right bottom 信息来进行比较
  let top = Infinity, left = Infinity
  let right = -Infinity, bottom = -Infinity
  areaData.forEach(component => {
      let style = {}
      if (component.component == 'Group') {
          component.propValue.forEach(item => {
              const rectInfo = $(`#component${item.id}`).getBoundingClientRect()
              style.left = rectInfo.left - this.editorX
              style.top = rectInfo.top - this.editorY
              style.right = rectInfo.right - this.editorX
              style.bottom = rectInfo.bottom - this.editorY

              if (style.left < left) left = style.left
              if (style.top < top) top = style.top
              if (style.right > right) right = style.right
              if (style.bottom > bottom) bottom = style.bottom
          })
      } else {
          style = getComponentRotatedStyle(component.style)
      }

      if (style.left < left) left = style.left
      if (style.top < top) top = style.top
      if (style.right > right) right = style.right
      if (style.bottom > bottom) bottom = style.bottom
  })

  this.start.x = left
  this.start.y = top
  this.width = right - left
  this.height = bottom - top
	
  // 设置选中区域位移大小信息和区域内的组件数据
  this.$store.commit('setAreaData', {
      style: {
          left,
          top,
          width: this.width,
          height: this.height,
      },
      components: areaData,
  })
},
        
getSelectArea() {
    const result = []
    // 区域起点坐标
    const { x, y } = this.start
    // 计算所有的组件数据，判断是否在选中区域内
    this.componentData.forEach(component => {
        if (component.isLock) return
        const { left, top, width, height } = component.style
        if (x <= left && y <= top && (left + width <= x + this.width) && (top + height <= y + this.height)) {
            result.push(component)
        }
    })
	
    // 返回在选中区域内的所有组件
    return result
}
```

简单描述一下这段代码的处理逻辑：

1. 利用 [getBoundingClientRect()](https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FAPI%2FElement%2FgetBoundingClientRect) 浏览器 API 获取每个组件相对于浏览器视口四个方向上的信息，也就是 `left` `top` `right` `bottom`。

2. 对比每个组件的这四个信息，取得选中区域的最左、最上、最右、最下四个方向的数值，从而得出一个能包含区域内所有组件的最小区域。

3. 如果选中区域内已经有一个 `Group` 组合组件，则需要对它里面的子组件进行计算，而不是对组合组件进行计算。

### 组合后的移动、旋转

为了方便将多个组件一起进行移动、旋转、放大缩小等操作，我新创建了一个 `Group` 组合组件：

```html
<template>
    <div class="group">
        <div>
             <template v-for="item in propValue">
                <component
                    class="component"
                    :is="item.component"
                    :style="item.groupStyle"
                    :propValue="item.propValue"
                    :key="item.id"
                    :id="'component' + item.id"
                    :element="item"
                />
            </template>
        </div>
    </div>
</template>

<script>
import { getStyle } from '@/utils/style'

export default {
    props: {
        propValue: {
            type: Array,
            default: () => [],
        },
        element: {
            type: Object,
        },
    },
    created() {
        const parentStyle = this.element.style
        this.propValue.forEach(component => {
            // component.groupStyle 的 top left 是相对于 group 组件的位置
            // 如果已存在 component.groupStyle，说明已经计算过一次了。不需要再次计算
            if (!Object.keys(component.groupStyle).length) {
                const style = { ...component.style }
                component.groupStyle = getStyle(style)
                component.groupStyle.left = this.toPercent((style.left - parentStyle.left) / parentStyle.width)
                component.groupStyle.top = this.toPercent((style.top - parentStyle.top) / parentStyle.height)
                component.groupStyle.width = this.toPercent(style.width / parentStyle.width)
                component.groupStyle.height = this.toPercent(style.height / parentStyle.height)
            }
        })
    },
    methods: {
        toPercent(val) {
            return val * 100 + '%'
        },
    },
}
</script>

<style lang="scss" scoped>
.group {
    & > div {
        position: relative;
        width: 100%;
        height: 100%;

        .component {
            position: absolute;
        }
    }
}
</style>
```

`Group` 组件的作用就是将区域内的组件放到它下面，成为子组件。并且在创建 `Group` 组件时，获取每个子组件在 `Group` 组件内的相对位移和相对大小：

```js
created() {
    const parentStyle = this.element.style
    this.propValue.forEach(component => {
        // component.groupStyle 的 top left 是相对于 group 组件的位置
        // 如果已存在 component.groupStyle，说明已经计算过一次了。不需要再次计算
        if (!Object.keys(component.groupStyle).length) {
            const style = { ...component.style }
            component.groupStyle = getStyle(style)
            component.groupStyle.left = this.toPercent((style.left - parentStyle.left) / parentStyle.width)
            component.groupStyle.top = this.toPercent((style.top - parentStyle.top) / parentStyle.height)
            component.groupStyle.width = this.toPercent(style.width / parentStyle.width)
            component.groupStyle.height = this.toPercent(style.height / parentStyle.height)
        }
    })
},
methods: {
        toPercent(val) {
            return val * 100 + '%'
        },
    },
```

也就是将子组件的 `left` `top` `width` `height` 等属性转成以 `%` 结尾的相对数值。

**为什么不使用绝对数值？**

如果使用绝对数值，那么在移动 `Group` 组件时，除了对 `Group` 组件的属性进行计算外，还需要对它的每个子组件进行计算。并且 `Group` 包含子组件太多的话，在进行移动、放大缩小时，计算量会非常大，有可能会造成页面卡顿。如果改成相对数值，则只需要在 `Group` 创建时计算一次。然后在 `Group` 组件进行移动、旋转时也不用管 `Group` 的子组件，只对它自己计算即可。

<img :src="$withBase('/assets/performance/base/27d0a749d4e14609bb6cf31eb76eeb93_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

### 组合后的放大缩小

组合后的放大缩小是个大问题，主要是因为有旋转角度的存在。首先来看一下各个子组件没旋转时的放大缩小：

<img :src="$withBase('/assets/performance/base/46c7278e99a246ad801cd81ba83d52c3_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

从动图可以看出，效果非常完美。各个子组件的大小是跟随 `Group` 组件的大小而改变的。

现在试着给子组件加上旋转角度，再看一下效果：

<img :src="$withBase('/assets/performance/base/de1db52cd2254f8aae6da99c61b7adcf_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

**为什么会出现这个问题？**

主要是因为一个组件无论旋不旋转，它的 `top` `left` 属性都是不变的。这样就会有一个问题，虽然实际上组件的 `top` `left` `width` `height` 属性没有变化。但在外观上却发生了变化。下面是两个同样的组件：一个没旋转，一个旋转了 45 度。

<img :src="$withBase('/assets/performance/base/97b6da46c19b49bbbb54ce1be0b468cf_tplv-k3u1fbpfcp-watermark(1).awebp')" alt="demo" />

可以看出来旋转后按钮的 `top` `left` `width` `height` 属性和我们从外观上看到的是不一样的。

接下来再看一个具体的示例：

<img :src="$withBase('/assets/performance/base/f5bb6d7e2c754eb28406400eb4972ee5_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

上面是一个 `Group` 组件，它左边的子组件属性为：

```css
transform: rotate(-75.1967deg);
width: 51.2267%;
height: 32.2679%;
top: 33.8661%;
left: -10.6496%;
```

可以看到 `width` 的值为 `51.2267%`，但从外观上来看，这个子组件最多占 `Group` 组件宽度的三分之一。所以这就是放大缩小不正常的问题所在。

**一个不可行的解决方案**

一开始我想的是，先算出它相对浏览器视口的 `top` `left` `width` `height` 属性，再算出这几个属性在 `Group` 组件上的相对数值。这可以通过 `getBoundingClientRect()` API 实现。只要维持外观上的各个属性占比不变，这样 `Group` 组件在放大缩小时，再通过旋转角度，利用旋转矩阵的知识（这一点在第二篇有详细描述）获取它未旋转前的 `top` `left` `width` `height` 属性。这样就可以做到子组件动态调整了。

但是这有个问题，通过 `getBoundingClientRect()` API 只能获取组件外观上的 `top` `left` `right` `bottom` `width` `height` 属性。再加上一个角度，参数还是不够，所以无法计算出组件实际的 `top` `left` `width` `height` 属性。

<img :src="$withBase('/assets/performance/base/17b76fd2d8f04aba8abaabedb1fed5ac_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

就像上面的这张图，只知道原点 `O(x,y)` `w` `h` 和旋转角度，无法算出按钮的宽高。

**一个可行的解决方案**

这是无意中发现的，我在对 `Group` 组件进行放大缩小时，发现只要保持 `Group` 组件的宽高比例，子组件就能做到根据比例放大缩小。那么现在问题就转变成了**如何让 `Group` 组件放大缩小时保持宽高比例**。我在网上找到了这一篇[文章](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fshenhudong%2Fsnapping-demo%2Fwiki%2Fcorner-handle)，它详细描述了一个旋转组件如何保持宽高比来进行放大缩小，并配有源码示例。

现在我尝试简单描述一下如何保持宽高比对一个旋转组件进行放大缩小（建议还是看看原文）。下面是一个已旋转一定角度的矩形，假设现在拖动它左上方的点进行拉伸。

<img :src="$withBase('/assets/performance/base/3f4c1071b2a0484294552ce0bfcd67c3_tplv-k3u1fbpfcp-watermark(1).awebp')" alt="demo" />

**第一步**，算出组件宽高比，以及按下鼠标时通过组件的坐标（无论旋转多少度，组件的 `top` `left` 属性不变）和大小算出组件中心点：

```js
// 组件宽高比
const proportion = style.width / style.height
            
const center = {
    x: style.left + style.width / 2,
    y: style.top + style.height / 2,
}
```

**第二步**，用**当前点击坐标**和组件中心点算出**当前点击坐标**的对称点坐标：

```js
// 获取画布位移信息
const editorRectInfo = document.querySelector('#editor').getBoundingClientRect()

// 当前点击坐标
const curPoint = {
    x: e.clientX - editorRectInfo.left,
    y: e.clientY - editorRectInfo.top,
}

// 获取对称点的坐标
const symmetricPoint = {
    x: center.x - (curPoint.x - center.x),
    y: center.y - (curPoint.y - center.y),
}
```

**第三步**，摁住组件左上角进行拉伸时，通过当前鼠标实时坐标和对称点计算出新的组件中心点：

```js
const curPositon = {
    x: moveEvent.clientX - editorRectInfo.left,
    y: moveEvent.clientY - editorRectInfo.top,
}

const newCenterPoint = getCenterPoint(curPositon, symmetricPoint)

// 求两点之间的中点坐标
function getCenterPoint(p1, p2) {
    return {
        x: p1.x + ((p2.x - p1.x) / 2),
        y: p1.y + ((p2.y - p1.y) / 2),
    }
}
```

由于组件处于旋转状态，即使你知道了拉伸时移动的 `xy` 距离，也不能直接对组件进行计算。否则就会出现 BUG，移位或者放大缩小方向不正确。因此，我们需要在组件未旋转的情况下对其进行计算。

<img :src="$withBase('/assets/performance/base/53e1d2636ca744d5a732de828ef71789_tplv-k3u1fbpfcp-watermark(1).awebp')" alt="demo" />

**第四步**，根据已知的旋转角度、新的组件中心点、当前鼠标实时坐标可以算出**当前鼠标实时坐标** `currentPosition` 在未旋转时的坐标 `newTopLeftPoint`。同时也能根据已知的旋转角度、新的组件中心点、对称点算出**组件对称点** `sPoint` 在未旋转时的坐标 `newBottomRightPoint`。

对应的计算公式如下：

```js
/**
 * 计算根据圆心旋转后的点的坐标
 * @param   {Object}  point  旋转前的点坐标
 * @param   {Object}  center 旋转中心
 * @param   {Number}  rotate 旋转的角度
 * @return  {Object}         旋转后的坐标
 * https://www.zhihu.com/question/67425734/answer/252724399 旋转矩阵公式
 */
export function calculateRotatedPointCoordinate(point, center, rotate) {
    /**
     * 旋转公式：
     *  点a(x, y)
     *  旋转中心c(x, y)
     *  旋转后点n(x, y)
     *  旋转角度θ                tan ??
     * nx = cosθ * (ax - cx) - sinθ * (ay - cy) + cx
     * ny = sinθ * (ax - cx) + cosθ * (ay - cy) + cy
     */

    return {
        x: (point.x - center.x) * Math.cos(angleToRadian(rotate)) - (point.y - center.y) * Math.sin(angleToRadian(rotate)) + center.x,
        y: (point.x - center.x) * Math.sin(angleToRadian(rotate)) + (point.y - center.y) * Math.cos(angleToRadian(rotate)) + center.y,
    }
}
```

上面的公式涉及到线性代数中旋转矩阵的知识，对于一个没上过大学的人来说，实在太难了。还好我从知乎上的一个[回答](https://link.juejin.cn/?target=https%3A%2F%2Fwww.zhihu.com%2Fquestion%2F67425734%2Fanswer%2F252724399)中找到了这一公式的推理过程，下面是回答的原文：

<img :src="$withBase('/assets/performance/base/c7642af219464d1ab244d3cebd9e10cf_tplv-k3u1fbpfcp-watermark(1).awebp')" alt="demo" />

通过以上几个计算值，就可以得到组件新的位移值 `top` `left` 以及新的组件大小。对应的完整代码如下：

```js
function calculateLeftTop(style, curPositon, pointInfo) {
    const { symmetricPoint } = pointInfo
    const newCenterPoint = getCenterPoint(curPositon, symmetricPoint)
    const newTopLeftPoint = calculateRotatedPointCoordinate(curPositon, newCenterPoint, -style.rotate)
    const newBottomRightPoint = calculateRotatedPointCoordinate(symmetricPoint, newCenterPoint, -style.rotate)
  
    const newWidth = newBottomRightPoint.x - newTopLeftPoint.x
    const newHeight = newBottomRightPoint.y - newTopLeftPoint.y
    if (newWidth > 0 && newHeight > 0) {
        style.width = Math.round(newWidth)
        style.height = Math.round(newHeight)
        style.left = Math.round(newTopLeftPoint.x)
        style.top = Math.round(newTopLeftPoint.y)
    }
}
```

现在再来看一下旋转后的放大缩小：

<img :src="$withBase('/assets/performance/base/e2180e27188b4dfcbe97500faf330dd6_tplv-k3u1fbpfcp-watermark(1).awebp')" alt="demo" />

**第五步**，由于我们现在需要的是锁定宽高比来进行放大缩小，所以需要重新计算拉伸后的图形的左上角坐标。

这里先确定好几个形状的命名：

* 原图形: 　红色部分

* 新图形: 　蓝色部分

* 修正图形: 绿色部分，即加上宽高比锁定规则的修正图形

<img :src="$withBase('/assets/performance/base/a7719e5339494723bcdd00663895acc7_tplv-k3u1fbpfcp-watermark(1).awebp')" alt="demo" />

在第四步中算出组件未旋转前的 `newTopLeftPoint` `newBottomRightPoint` `newWidth` `newHeight` 后，需要根据宽高比 `proportion` 来算出新的宽度或高度。

<img :src="$withBase('/assets/performance/base/141d080347e8408d8272141738a8a7e4_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

上图就是一个需要改变高度的示例，计算过程如下：

```js
if (newWidth / newHeight > proportion) {
    newTopLeftPoint.x += Math.abs(newWidth - newHeight * proportion)
    newWidth = newHeight * proportion
} else {
    newTopLeftPoint.y += Math.abs(newHeight - newWidth / proportion)
    newHeight = newWidth / proportion
}
```

由于现在求的未旋转前的坐标是以没按比例缩减宽高前的坐标来计算的，所以缩减宽高后，需要按照原来的中心点旋转回去，获得缩减宽高并旋转后对应的坐标。然后以这个坐标和对称点获得新的中心点，并重新计算未旋转前的坐标。

<img :src="$withBase('/assets/performance/base/c1a42618920b44eb8ee7da1f5194c0f2_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

<img :src="$withBase('/assets/performance/base/6a818d694b3941f3bd847d65570b2782_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

经过修改后的完整代码如下：

```js
function calculateLeftTop(style, curPositon, proportion, needLockProportion, pointInfo) {
    const { symmetricPoint } = pointInfo
    let newCenterPoint = getCenterPoint(curPositon, symmetricPoint)
    let newTopLeftPoint = calculateRotatedPointCoordinate(curPositon, newCenterPoint, -style.rotate)
    let newBottomRightPoint = calculateRotatedPointCoordinate(symmetricPoint, newCenterPoint, -style.rotate)
  
    let newWidth = newBottomRightPoint.x - newTopLeftPoint.x
    let newHeight = newBottomRightPoint.y - newTopLeftPoint.y

    if (needLockProportion) {
        if (newWidth / newHeight > proportion) {
            newTopLeftPoint.x += Math.abs(newWidth - newHeight * proportion)
            newWidth = newHeight * proportion
        } else {
            newTopLeftPoint.y += Math.abs(newHeight - newWidth / proportion)
            newHeight = newWidth / proportion
        }

        // 由于现在求的未旋转前的坐标是以没按比例缩减宽高前的坐标来计算的
        // 所以缩减宽高后，需要按照原来的中心点旋转回去，获得缩减宽高并旋转后对应的坐标
        // 然后以这个坐标和对称点获得新的中心点，并重新计算未旋转前的坐标
        const rotatedTopLeftPoint = calculateRotatedPointCoordinate(newTopLeftPoint, newCenterPoint, style.rotate)
        newCenterPoint = getCenterPoint(rotatedTopLeftPoint, symmetricPoint)
        newTopLeftPoint = calculateRotatedPointCoordinate(rotatedTopLeftPoint, newCenterPoint, -style.rotate)
        newBottomRightPoint = calculateRotatedPointCoordinate(symmetricPoint, newCenterPoint, -style.rotate)
    
        newWidth = newBottomRightPoint.x - newTopLeftPoint.x
        newHeight = newBottomRightPoint.y - newTopLeftPoint.y
    }

    if (newWidth > 0 && newHeight > 0) {
        style.width = Math.round(newWidth)
        style.height = Math.round(newHeight)
        style.left = Math.round(newTopLeftPoint.x)
        style.top = Math.round(newTopLeftPoint.y)
    }
}
```

保持宽高比进行放大缩小的效果如下：

<img :src="$withBase('/assets/performance/base/e1f12dc0c05f4639be0795b8576eff19_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

当 `Group` 组件有旋转的子组件时，才需要保持宽高比进行放大缩小。所以在创建 `Group` 组件时可以判断一下子组件是否有旋转角度。如果没有，就不需要保持宽度比进行放大缩小。

```js
isNeedLockProportion() {
    if (this.element.component != 'Group') return false
    const ratates = [0, 90, 180, 360]
    for (const component of this.element.propValue) {
        if (!ratates.includes(mod360(parseInt(component.style.rotate)))) {
            return true
        }
    }

    return false
}
```

### 拆分后子组件样式的恢复

将多个组件组合在一起只是第一步，第二步是将 `Group` 组件进行拆分并恢复各个子组件的样式。保证拆分后的子组件在外观上的属性不变。

计算代码如下：

```js
// store
decompose({ curComponent, editor }) {
    const parentStyle = { ...curComponent.style }
    const components = curComponent.propValue
    const editorRect = editor.getBoundingClientRect()

    store.commit('deleteComponent')
    components.forEach(component => {
        decomposeComponent(component, editorRect, parentStyle)
        store.commit('addComponent', { component })
    })
}
        
// 将组合中的各个子组件拆分出来，并计算它们新的 style
export default function decomposeComponent(component, editorRect, parentStyle) {
    // 子组件相对于浏览器视口的样式
    const componentRect = $(`#component${component.id}`).getBoundingClientRect()
    // 获取元素的中心点坐标
    const center = {
        x: componentRect.left - editorRect.left + componentRect.width / 2,
        y: componentRect.top - editorRect.top + componentRect.height / 2,
    }

    component.style.rotate = mod360(component.style.rotate + parentStyle.rotate)
    component.style.width = parseFloat(component.groupStyle.width) / 100 * parentStyle.width
    component.style.height = parseFloat(component.groupStyle.height) / 100 * parentStyle.height
    // 计算出元素新的 top left 坐标
    component.style.left = center.x - component.style.width / 2
    component.style.top = center.y - component.style.height / 2
    component.groupStyle = {}
}
```

这段代码的处理逻辑为：

1. 遍历 `Group` 的子组件并恢复它们的样式

2. 利用 `getBoundingClientRect()` API 获取子组件相对于浏览器视口的 `left` `top` `width` `height` 属性。

3. 利用这四个属性计算出子组件的中心点坐标。

4. 由于子组件的 `width` `height` 属性是相对于 `Group` 组件的，所以将它们的百分比值和 `Group` 相乘得出具体数值。

5. 再用中心点 `center(x, y)` 减去子组件宽高的一半得出它的 `left` `top` 属性。

## 19. 文本组件

文本组件 `VText` 之前就已经实现过了，但不完美。例如无法对文字进行选中。现在我对它进行了重写，让它支持选中功能。

```html
<template>
    <div v-if="editMode == 'edit'" class="v-text" @keydown="handleKeydown" @keyup="handleKeyup">
        <!-- tabindex >= 0 使得双击时聚集该元素 -->
        <div :contenteditable="canEdit" :class="{ canEdit }" @dblclick="setEdit" :tabindex="element.id" @paste="clearStyle"
            @mousedown="handleMousedown" @blur="handleBlur" ref="text" v-html="element.propValue" @input="handleInput"
            :style="{ verticalAlign: element.style.verticalAlign }"
        ></div>
    </div>
    <div v-else class="v-text">
        <div v-html="element.propValue" :style="{ verticalAlign: element.style.verticalAlign }"></div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { keycodes } from '@/utils/shortcutKey.js'

export default {
    props: {
        propValue: {
            type: String,
            require: true,
        },
        element: {
            type: Object,
        },
    },
    data() {
        return {
            canEdit: false,
            ctrlKey: 17,
            isCtrlDown: false,
        }
    },
    computed: {
        ...mapState([
            'editMode',
        ]),
    },
    methods: {
        handleInput(e) {
            this.$emit('input', this.element, e.target.innerHTML)
        },

        handleKeydown(e) {
            if (e.keyCode == this.ctrlKey) {
                this.isCtrlDown = true
            } else if (this.isCtrlDown && this.canEdit && keycodes.includes(e.keyCode)) {
                e.stopPropagation()
            } else if (e.keyCode == 46) { // deleteKey
                e.stopPropagation()
            }
        },

        handleKeyup(e) {
            if (e.keyCode == this.ctrlKey) {
                this.isCtrlDown = false
            }
        },

        handleMousedown(e) {
            if (this.canEdit) {
                e.stopPropagation()
            }
        },

        clearStyle(e) {
            e.preventDefault()
            const clp = e.clipboardData
            const text = clp.getData('text/plain') || ''
            if (text !== '') {
                document.execCommand('insertText', false, text)
            }

            this.$emit('input', this.element, e.target.innerHTML)
        },

        handleBlur(e) {
            this.element.propValue = e.target.innerHTML || '&nbsp;'
            this.canEdit = false
        },

        setEdit() {
            this.canEdit = true
            // 全选
            this.selectText(this.$refs.text)
        },

        selectText(element) {
            const selection = window.getSelection()
            const range = document.createRange()
            range.selectNodeContents(element)
            selection.removeAllRanges()
            selection.addRange(range)
        },
    },
}
</script>

<style lang="scss" scoped>
.v-text {
    width: 100%;
    height: 100%;
    display: table;

    div {
        display: table-cell;
        width: 100%;
        height: 100%;
        outline: none;
    }

    .canEdit {
        cursor: text;
        height: 100%;
    }
}
</style>
```

改造后的 `VText` 组件功能如下：

1. 双击启动编辑。

2. 支持选中文本。

3. 粘贴时过滤掉文本的样式。

4. 换行时自动扩充文本框的高度。

<img :src="$withBase('/assets/performance/base/bf877636139048d58f2dc5be99cca15b_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

## 20. 矩形组件

矩形组件其实就是一个内嵌 `VText` 文本组件的一个 DIV。

```html
<template>
    <div class="rect-shape">
        <v-text :propValue="element.propValue" :element="element" />
    </div>
</template>

<script>
export default {
    props: {
        element: {
            type: Object,
        },
    },
}
</script>

<style lang="scss" scoped>
.rect-shape {
    width: 100%;
    height: 100%;
    overflow: auto;
}
</style>
```

`VText` 文本组件有的功能它都有，并且可以任意放大缩小。

<img :src="$withBase('/assets/performance/base/4b9865747fb4481aa3fc36d092653232_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

## 21. 锁定组件

锁定组件主要是看到 `processon` 和墨刀有这个功能，于是我顺便实现了。锁定组件的具体需求为：不能移动、放大缩小、旋转、复制、粘贴等，只能进行解锁操作。

它的实现原理也不难：

1. 在自定义组件上加一个 isLock 属性，表示是否锁定组件。

2. 在点击组件时，根据 isLock 是否为 true 来隐藏组件上的八个点和旋转图标。

3. 为了突出一个组件被锁定，给它加上透明度属性和一个锁的图标。

4. 如果组件被锁定，置灰上面所说的需求对应的按钮，不能被点击。

相关代码如下：

```js
export const commonAttr = {
    animations: [],
    events: {},
    groupStyle: {}, // 当一个组件成为 Group 的子组件时使用
    isLock: false, // 是否锁定组件
}
```

```html
<el-button @click="decompose" 
:disabled="!curComponent || curComponent.isLock || curComponent.component != 'Group'">拆分</el-button>

<el-button @click="lock" :disabled="!curComponent || curComponent.isLock">锁定</el-button>
<el-button @click="unlock" :disabled="!curComponent || !curComponent.isLock">解锁</el-button>
```

```html
<template>
    <div class="contextmenu" v-show="menuShow" :style="{ top: menuTop + 'px', left: menuLeft + 'px' }">
        <ul @mouseup="handleMouseUp">
            <template v-if="curComponent">
                <template v-if="!curComponent.isLock">
                    <li @click="copy">复制</li>
                    <li @click="paste">粘贴</li>
                    <li @click="cut">剪切</li>
                    <li @click="deleteComponent">删除</li>
                    <li @click="lock">锁定</li>
                    <li @click="topComponent">置顶</li>
                    <li @click="bottomComponent">置底</li>
                    <li @click="upComponent">上移</li>
                    <li @click="downComponent">下移</li>
                </template>
                <li v-else @click="unlock">解锁</li>
            </template>
            <li v-else @click="paste">粘贴</li>
        </ul>
    </div>
</template>
```

<img :src="$withBase('/assets/performance/base/40e9da0cb1e54c3a8a4d682304a544fc_tplv-k3u1fbpfcp-watermark.awebp')" alt="demo" />

## 22. 快捷键

支持快捷键主要是为了提升开发效率，用鼠标点点点毕竟没有按键盘快。目前快捷键支持的功能如下：

```js
const ctrlKey = 17, 
    vKey = 86, // 粘贴
    cKey = 67, // 复制
    xKey = 88, // 剪切

    yKey = 89, // 重做
    zKey = 90, // 撤销

    gKey = 71, // 组合
    bKey = 66, // 拆分

    lKey = 76, // 锁定
    uKey = 85, // 解锁

    sKey = 83, // 保存
    pKey = 80, // 预览
    dKey = 68, // 删除
    deleteKey = 46, // 删除
    eKey = 69 // 清空画布
```

实现原理主要是利用 `window` 全局监听按键事件，在符合条件的按键触发时执行对应的操作：

```js
// 与组件状态无关的操作
const basemap = {
    [vKey]: paste,
    [yKey]: redo,
    [zKey]: undo,
    [sKey]: save,
    [pKey]: preview,
    [eKey]: clearCanvas,
}

// 组件锁定状态下可以执行的操作
const lockMap = {
    ...basemap,
    [uKey]: unlock,
}

// 组件未锁定状态下可以执行的操作
const unlockMap = {
    ...basemap,
    [cKey]: copy,
    [xKey]: cut,
    [gKey]: compose,
    [bKey]: decompose,
    [dKey]: deleteComponent,
    [deleteKey]: deleteComponent,
    [lKey]: lock,
}

let isCtrlDown = false
// 全局监听按键操作并执行相应命令
export function listenGlobalKeyDown() {
    window.onkeydown = (e) => {
        const { curComponent } = store.state
        if (e.keyCode == ctrlKey) {
            isCtrlDown = true
        } else if (e.keyCode == deleteKey && curComponent) {
            store.commit('deleteComponent')
            store.commit('recordSnapshot')
        } else if (isCtrlDown) {
            if (!curComponent || !curComponent.isLock) {
                e.preventDefault()
                unlockMap[e.keyCode] && unlockMap[e.keyCode]()
            } else if (curComponent && curComponent.isLock) {
                e.preventDefault()
                lockMap[e.keyCode] && lockMap[e.keyCode]()
            }
        }
    }

    window.onkeyup = (e) => {
        if (e.keyCode == ctrlKey) {
            isCtrlDown = false
        }
    }
}
```

为了防止和浏览器默认快捷键冲突，所以需要加上 `e.preventDefault()`。

## 23. 网格线

网格线功能使用 SVG 来实现：

```html
<template>
    <svg class="grid" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <pattern id="smallGrid" width="7.236328125" height="7.236328125" patternUnits="userSpaceOnUse">
                <path 
                    d="M 7.236328125 0 L 0 0 0 7.236328125" 
                    fill="none" 
                    stroke="rgba(207, 207, 207, 0.3)" 
                    stroke-width="1">
                </path>
            </pattern>
            <pattern id="grid" width="36.181640625" height="36.181640625" patternUnits="userSpaceOnUse">
                <rect width="36.181640625" height="36.181640625" fill="url(#smallGrid)"></rect>
                <path 
                    d="M 36.181640625 0 L 0 0 0 36.181640625" 
                    fill="none" 
                    stroke="rgba(186, 186, 186, 0.5)" 
                    stroke-width="1">
                </path>
            </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)"></rect>
    </svg>
</template>

<style lang="scss" scoped>
.grid {
    position: absolute;
    top: 0;
    left: 0;
}
</style>
```

MDN 的[教程](https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FSVG)。

## 24. 编辑器快照的另一种实现方式

```js
snapshotData: [], // 编辑器快照数据
snapshotIndex: -1, // 快照索引
        
undo(state) {
    if (state.snapshotIndex >= 0) {
        state.snapshotIndex--
        store.commit('setComponentData', deepCopy(state.snapshotData[state.snapshotIndex]))
    }
},

redo(state) {
    if (state.snapshotIndex < state.snapshotData.length - 1) {
        state.snapshotIndex++
        store.commit('setComponentData', deepCopy(state.snapshotData[state.snapshotIndex]))
    }
},

setComponentData(state, componentData = []) {
    Vue.set(state, 'componentData', componentData)
},

recordSnapshot(state) {
    // 添加新的快照
    state.snapshotData[++state.snapshotIndex] = deepCopy(state.componentData)
    // 在 undo 过程中，添加新的快照时，要将它后面的快照清理掉
    if (state.snapshotIndex < state.snapshotData.length - 1) {
        state.snapshotData = state.snapshotData.slice(0, state.snapshotIndex + 1)
    }
},
```

用一个数组来保存编辑器的快照数据。保存快照就是不停地执行 `push()` 操作，将当前的编辑器数据推入 `snapshotData` 数组，并增加快照索引 `snapshotIndex`。

由于每一次添加快照都是将当前编辑器的所有组件数据推入 `snapshotData`，保存的快照数据越多占用的内存就越多。对此有两个解决方案：

1. 限制快照步数，例如只能保存 50 步的快照数据。

2. 保存快照只保存差异部分。

**现在详细描述一下第二个解决方案。**

假设依次往画布上添加 a b c d 四个组件，在原来的实现中，对应的 `snapshotData` 数据为：

```js
// snapshotData
[
  [a],
  [a, b],
  [a, b, c],
  [a, b, c, d],
]
```

从上面的代码可以发现，每一相邻的快照中，只有一个数据是不同的。所以我们可以为每一步的快照添加一个类型字段，用来表示此次操作是添加还是删除。

那么上面添加四个组件的操作，所对应的 `snapshotData` 数据为：

```js
// snapshotData
[
  [{ type: 'add', value: a }],
  [{ type: 'add', value: b }],
  [{ type: 'add', value: c }],
  [{ type: 'add', value: d }],
]
```

如果我们要删除 c 组件，那么 `snapshotData` 数据将变为：

```js
// snapshotData
[
  [{ type: 'add', value: a }],
  [{ type: 'add', value: b }],
  [{ type: 'add', value: c }],
  [{ type: 'add', value: d }],
  [{ type: 'remove', value: c }],
]
```

**那如何使用现在的快照数据呢？**

我们需要遍历一遍快照数据，来生成编辑器的组件数据 `componentData`。假设在上面的数据基础上执行了 `undo` 撤销操作：

```js
// snapshotData
// 快照索引 snapshotIndex 此时为 3
[
  [{ type: 'add', value: a }],
  [{ type: 'add', value: b }],
  [{ type: 'add', value: c }],
  [{ type: 'add', value: d }],
  [{ type: 'remove', value: c }],
]
```

1. `snapshotData[0]` 类型为 `add`，将组件 `a` 添加到 `componentData` 中，此时 `componentData` 为 `[a]`

2. 依次类推 `[a, b]`

3. `[a, b, c]`

4. `[a, b, c, d]`

如果这时执行 `redo` 重做操作，快照索引 `snapshotIndex` 变为 4。对应的快照数据类型为 `type: 'remove'`， 移除组件 c。则数组数据为 `[a, b, d]`。