# useCallback/useMemo

> 在编写 React Hook 代码时，`useCallback`和`useMemo`时常令人感到困惑。尽管知道他们的功能都是做缓存并优化性能，但是又会担心因为使用方法不正确导致负优化。本文将阐述`useCallback`和`useMemo`在开发中常见的使用方式和误区，并结合源码剖析原因，知其然并知其所以然。

## 1.useCallback

### 1.1 不要滥用useCallback

示例：

```js
import React from 'react';

function Comp() {
    const onClick = () => {
        console.log('打印');
    }
    
    return <div onClick={onClick}>Comp组件</div>
}
```

当`Comp`组件自身触发刷新或作为子组件跟随父组件刷新时，注意到`onClick`会被重新赋值。为了"提升性能"，使用`useCallback`包裹`onClick`以达到缓存的目的：

```js
import React, { useCallback } from 'react';

function Comp() {
    const onClick = useCallback(() => {
        console.log('打印');
    }, []);
    
    return <div onClick={onClick}>Comp组件</div>
}
```

那么问题来了，性能到底有没有获得提升？答案是非但没有，反而不如以前了；改写代码的逻辑结构之后，原因就会非常清晰：

```js
import React, { useCallback } from 'react';

function Comp() {
    const onClick = () => {
        console.log('打印');
    };
    
    const memoOnClick = useCallback(onClick, []);
    
    return <div onClick={memoOnClick}>Comp组件</div>
}
```

每一行多余代码的执行都产生消耗，哪怕这消耗只是 CPU 的一丁点热量。官方文档指出，[无需担心创建函数会导致性能问题](https://reactjs.org/docs/hooks-faq.html#are-hooks-slow-because-of-creating-functions-in-render)，所以使用`useCallback`来改造该场景下的组件，并未获得任何收益（函数还是会被创建），反而其带来的成本让组件负重（需要对比依赖是否发生变化），`useCallback`用的越多，负重越多。站在 javascript 的角度，当组件刷新时，未被`useCallback`包裹的方法将被垃圾回收并重新定义，但被`useCallback`所制造的闭包将保持对回调函数和依赖项的引用。

### 1.2 useCallback的正确使用方法

产生误区的原因是`useCallback`的设计初衷并非解决组件内部函数多次创建的问题，而是减少子组件的不必要重复渲染。实际上在 **React** 体系下，优化思路主要有两种：

1. 减少重新 `render` 的次数。因为 React 最耗费性能的就是`调和过程（reconciliation）`，只要不 `render` 就不会触发 `reconciliation`。

2. 减少计算量，这个自然不必多说。

所以考察如下场景：

```js
import React, { useState } from 'react';

function Comp() {
    const [dataA, setDataA] = useState(0);
    const [dataB, setDataB] = useState(0);

    const onClickA = () => {
        setDataA(o => o + 1);
    };
    
    const onClickB = () => {
        setDataB(o => o + 1);
    }
    
    return <div>
        <Cheap onClick={onClickA}>组件Cheap：{dataA}</div>
        <Expensive onClick={onClickB}>组件Expensive：{dataB}</Expensive>
    </div>
}
```

`Expensive`是一个渲染成本非常高的组件，但点击`Cheap`组件也会导致`Expensive`重新渲染，即使`dataB`并未发生改变。原因就是`onClickB`被重新定义，导致 React 在 diff 新旧组件时，判定组件发生了变化。这时候`useCabllback`和`memo`就发挥了作用：

```js
import React, { useState, memo, useCallback } from 'react';

function Expensive({ onClick, name }) {
  console.log('Expensive渲染');
  return <div onClick={onClick}>{name}</div>
}

const MemoExpensive = memo(Expensive);

function Cheap({ onClick, name }) {
  console.log('cheap渲染');
  return <div onClick={onClick}>{name}</div>
}

export default function Comp() {
    const [dataA, setDataA] = useState(0);
    const [dataB, setDataB] = useState(0);

    const onClickA = () => {
        setDataA(o => o + 1);
    };
    
    const onClickB = useCallback(() => {
        setDataB(o => o + 1);
    }, []);
    
    return <div>
        <Cheap onClick={onClickA} name={`组件Cheap：${dataA}`}/>
        <MemoExpensive onClick={onClickB} name={`组件Expensive：${dataB}`} />
    </div>
}
```

`memo`是 React v16.6.0 新增的方法，与 `PureComponent` 类似，前者负责 `Function Component` 的优化，后者负责 `Class Component`。它们都会对传入组件的新旧数据进行浅比较，如果相同则不会触发渲染。

所以`useCallback`保证了`onClickB`不发生变化，此时点击`Cheap`组件不会触发`Expensive`组件的刷新，只有点击`Expensive`组件才会触发。在实现减少不必要渲染的优化过程中，`useCallback`和`memo`是一对利器。[运行示例代码](https://codesandbox.io/s/jovial-jang-p29x7?file=/src/App.js)

### 1.3 延伸

`useCallback`源码如下：

```js
// 初始化阶段
function mountCallback(callback, deps) {
    const hook = mountWorkInProgressHook();
    const nextDeps = deps === undefined ? null : deps;
    hook.memoizedState = [callback, nextDeps];
    return callback;
}

// 更新阶段
function updateCallback(callback, deps) {
    const hook = updateWorkInProgressHook();，
    const nextDeps = deps === undefined ? null : deps;
    const prevState = hook.memoizedState;
    if (prevState !== null) {
        if (nextDeps !== null) {
            const prevDeps = prevState[1];
            // 比较是否相等
            if (areHookInputsEqual(nextDeps, prevDeps)) {
                // 如果相等，返回旧的 callback
                return prevState[0];
            }
        }
    }
  
    hook.memoizedState = [callback, nextDeps];
    return callback;
}
```

核心逻辑就是比较`deps`是否发生变化，如果有变化则返回新的`callback`函数，否则返回原函数。其中比较方法`areHookInputsEqual`内部实际调用了 React 的`is`工具方法:

```js
// 排除以下两种特殊情况：
// +0 === -0  // true
// NaN === NaN // false

function is(x: any, y: any) {
  return (
    (x === y && (x !== 0 || 1 / x === 1 / y)) || (x !== x && y !== y);
  );
}
```

## 2.useMemo

### 2.1 不要滥用useMemo

```js
import React, { useMemo } from 'react';

function Comp() {
    const v = 0;
    const memoV = useMemo(() => v, []);
    
    return <div>{memoV}</div>;
}
```

创建`memoV`的开销是没有必要的，原因与第一节提到的相同。只有当创建行为本身会产生高昂的开销（比如计算上千次才会生成变量值），才有必要使用`useMemo`，当然这种场景少之又少。

### 2.2 useMemo的正确使用方法

前文提到，优化 React 组件性能的两个主要思路之一是减少计算量，这也是`useMemo`的用武之地：

```js
import React, { useMemo } from 'react';

function Comp({ a, b }) {
    const v = 0;
    const calculate = (a, b) => {
        // ...  complex calculation
        return c;
    }
    
    const memoV = useMemo((a, b) => v, [a, b]);
    
    return <div>{memoV}</div>;
}
```

## 3.总结

React Hook 对团队的协作一致性要求非常高，`useCallback`和`useMemo`这一对方法就是很好的示例，更复杂的场景还有对`useRef`、自定义 Hook 的使用等等。从经验上来看，团队在进行 Hook 编码时需要特别加强 code review，否则很容易出现难以定位的 bug 或性能问题。当前 Hook 的各类方法还不完善，推特上争论也很多，期待 React 后续版本提供出更成熟易用的方案。
 