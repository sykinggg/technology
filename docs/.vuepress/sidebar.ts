
   
import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebar: SidebarConfig = {
  '/jsInterview/': [
    {
      text: '第 1 期：基础面试题',
      collapsible: true,
      children: [
        '/jsInterview/promiseAll.md',
        '/jsInterview/webAnimations.md',
        '/jsInterview/44Questions.md',
        '/jsInterview/jsHandwriting.md',
        '/jsInterview/jsonStringify.md',
        '/jsInterview/useEs6.md',
        '/jsInterview/asyncAwait.md',
        '/jsInterview/cycle.md',
        '/jsInterview/cycleOtherWay.md',
        '/jsInterview/largeFileResumableUpload.md',
        '/jsInterview/baseInterview.md',
        '/jsInterview/babelCompile.md',
        '/jsInterview/tsBaseInterview.md',
        '/jsInterview/base.md',
        '/jsInterview/weird.md',
        '/jsInterview/hybrid.md',
        '/jsInterview/baseWebpack.md',
        '/jsInterview/webpackLoader.md',
        '/jsInterview/webpackPublic.md',
        '/jsInterview/codeSeparation.md',
        '/jsInterview/performance.md',
        '/jsInterview/spa.md',
        '/jsInterview/promise.md',
        '/jsInterview/executionMechanism.md',
        '/jsInterview/interview50/interview1.md',
        '/jsInterview/interview50/interview2.md',
        '/jsInterview/interview50/interview3.md',
        '/jsInterview/interview50/interview4.md',
        '/jsInterview/interview50/interview5.md',
        '/jsInterview/interview50/interview6.md',
        '/jsInterview/interview50/interview7.md',
        '/jsInterview/interview50/interview8.md',
        '/jsInterview/interview50/interview9.md',
        '/jsInterview/interview50/interview10.md',
        '/jsInterview/interview50/interview11.md',
        '/jsInterview/interview50/interview12.md',
        '/jsInterview/interview50/interview13.md',
        '/jsInterview/interview50/interview14.md',
        '/jsInterview/interview50/interview15.md',
        '/jsInterview/interview50/interview16.md',
        '/jsInterview/interview50/interview17.md',
        '/jsInterview/interview50/interview18.md',
        '/jsInterview/interview50/interview19.md',
        '/jsInterview/interview50/interview20.md',
        '/jsInterview/interview50/interview21.md',
        '/jsInterview/interview50/interview22.md',
        '/jsInterview/interview50/interview23.md',
        '/jsInterview/interview50/interview24.md',
        '/jsInterview/interview50/interview25.md',
        '/jsInterview/interview50/interview26.md',
        '/jsInterview/interview50/interview27.md',
        '/jsInterview/interview50/interview28.md',
        '/jsInterview/interview50/interview29.md',
        '/jsInterview/interview50/interview30.md',
      ]
    }
  ],
  '/jsNews/': [
    {
      text: 'js 版本',
      children: [
        '/jsNews/es6News.md',
        '/jsNews/es7News.md',
        '/jsNews/es8News.md',
        '/jsNews/es9News.md',
        '/jsNews/es10News.md',
      ]
    },
    {
      text: 'js 版本 衍生',
      children: [
        '/jsNews/es6Interview1.md',
        '/jsNews/es6Interview2.md',
        '/jsNews/es6Interview3.md',
      ]
    }
  ],
  // '/es6/': [
  //   {
  //     text: '第 1 期：概述',
  //     children: [
  //       '/es6/interview1.md',
  //       '/es6/interview2.md',
  //       '/es6/interview3.md',
  //     ]
  //   }
  // ],
  // '/es7/': [
  //   {
  //     text: '第 1 期：概述',
  //     children: [
  //       '/es7/interview1.md',
  //     ]
  //   }
  // ],
  // '/es8/': [
  //   {
  //     text: '第 1 期：概述',
  //     children: [
  //       '/es8/interview1.md',
  //     ]
  //   }
  // ],
  // '/es9/': [
  //   {
  //     text: '第 1 期：概述',
  //     children: [
  //       '/es9/interview1.md',
  //     ]
  //   }
  // ],
  // '/es10/': [
  //   {
  //     text: '第 1 期：概述',
  //     children: [
  //       '/es10/interview1.md',
  //     ]
  //   }
  // ],
  '/mozillajs/': [
    {
      text: '第 1 期：基本对象',
      children: [
        '/mozillajs/baseObject/intersectionObserver.md',
        '/mozillajs/baseObject/fileReader.md',
        '/mozillajs/baseObject/symbol.md',
        '/mozillajs/baseObject/promise.md',
        '/mozillajs/baseObject/xMLHttpRequest.md',
        '/mozillajs/baseObject/eventLoop.md',
        '/mozillajs/baseObject/arrayFlat.md',
        '/mozillajs/baseObject/generator.md',
        '/mozillajs/baseObject/functionGenerator.md',
        '/mozillajs/baseObject/IterationProtocols.md',
        '/mozillajs/baseObject/asyncHistory.md',
        '/mozillajs/baseObject/formData.md',
        '/mozillajs/baseObject/string.md',
        '/mozillajs/baseObject/map.md',
        '/mozillajs/baseObject/set.md',
        '/mozillajs/reference/strictMode.md',
        '/mozillajs/reference/spreadSyntax.md',
      ]
    }
  ],
  '/mozillaCss/': [
    {
      text: '第 1 期：CSS API',
      children: [
        '/mozillaCss/reference/universalSelectors.md',
        '/mozillaCss/reference/typeSelectors.md',
        '/mozillaCss/reference/classSelectors.md',
        '/mozillaCss/reference/iDSelectors.md',
        '/mozillaCss/reference/attributeSelectors.md',
        '/mozillaCss/reference/selectorList.md',
        '/mozillaCss/reference/adjacentSiblingCombinator.md',
        '/mozillaCss/reference/generalSiblingCombinator.md',
        '/mozillaCss/reference/childCombinator.md',
        '/mozillaCss/reference/descendantCombinator.md',
        '/mozillaCss/reference/pseudoClasses.md',
        '/mozillaCss/reference/pseudoElements.md',
        '/mozillaCss/reference/charset.md'
      ]
    },
  ],
  '/js/': [
    {
      text: '第 1 期：调用堆栈',
      children: [
        '/js/stack/executionStack.md',
        '/js/stack/variableObject.md',
        '/js/stack/memorySpace.md',
        '/js/stack/memoryMechanism.md',
        '/js/stack/memoryLeak.md',
        '/js/stack/precompiled.md',
      ]
    },
    {
      text: '第 2 期：作用域闭包',
      children: [
        '/js/scope/scopeChain.md',
        '/js/scope/understandingClosures.md',
        '/js/scope/closureInterview.md'
      ]
    },
    {
      text: '第 3 期：this 全面解析',
      children: [
        { text: '【进阶3-1期】JavaScript深入之史上最全--5种this绑定全面解析', link: '/js/this/thisBind.md' },
        { text: '【进阶3-2期】JavaScript深入之重新认识箭头函数的this', link: '/js/this/arrowFunctionThis.md' },
        { text: '【进阶3-3期】深度广度解析 call 和 apply 原理、使用场景及实现', link: '/js/this/callApply.md' },
        { text: '【进阶3-4期】深度解析bind原理、使用场景及模拟实现', link: '/js/this/bindSimulation.md' },
        { text: '【进阶3-5期】深度解析 new 原理及模拟实现', link: '/js/this/newSimulation.md' }
      ]
    },
    {
      text: '第 4 期：深浅拷贝原理',
      children: [
        { text: '【进阶4-1期】详细解析赋值、浅拷贝和深拷贝的区别', link: '/js/clone/cloneIntroduction.md' },
        { text: '【进阶4-2期】Object.assign 原理及其实现', link: '/js/clone/objectAssign.md' },
        { text: '【进阶4-3期】面试题之如何实现一个深拷贝', link: '/js/clone/deepClone.md' },
        { text: '【进阶4-4期】Lodash是如何实现深拷贝的', link: '/js/clone/lodashDeepClone.md' }
      ]
    },
    {
      text: '第 5 期：原型Prototype',
      children: [
        { text: '【进阶5-1期】重新认识构造函数、原型和原型链', link: '/js/prototype/baseProyotype.md' },
        { text: '【进阶5-2期】图解原型链及其继承优缺点', link: '/js/prototype/prototypeInherit.md' },
        { text: '【进阶5-3期】深入探究 Function & Object 鸡蛋问题', link: '/js/prototype/functionObjectResource.md' }
      ]
    },
    {
      text: '第 6 期：高阶函数',
      children: [
        { text: '【进阶6-1期】JavaScript 高阶函数浅析', link: '/js/high/baseHigh.md' },
        { text: '【进阶6-2期】深入高阶函数应用之柯里化', link: '/js/high/currying.md' },
        { text: '【进阶6-3期】Array 原型方法源码实现大解密', link: '/js/high/arraySourceCode.md' }
      ]
    },
    {
      text: '第 7 期：防抖节流',
      children: [
        { text: '【进阶7-1期】深入浅出节流函数 throttle', link: '/js/antiShakeThrottling/throttle.md' },
        { text: '【进阶7-2期】深入浅出防抖函数 debounce', link: '/js/antiShakeThrottling/debounce.md' },
        { text: '【进阶7-3期】Throttle 和 Debounce 在 React 中的应用', link: '/js/antiShakeThrottling/throttleDebounceReact.md' },
        { text: '【进阶7-4期】深入篇 | 阿里 P6 必会 Lodash 防抖节流函数实现原理', link: '/js/antiShakeThrottling/lodashPrinciple.md' },
        { text: '【进阶7-5期】浅出篇 | 7 个角度吃透 Lodash 防抖节流原理', link: '/js/antiShakeThrottling/lodashThrottleDebounce.md' }
      ]
    },
    {
      text: '第 8 期：框架用到的js API',
      children: [
        { text: '【进阶8-1期】Object.is（）', link: '/js/interview/interview1.md' }
      ]
    },
    {
      text: 'js知识碎片',
      children: [
        { text: 'js 兼容性', link: '/js/interview/jsCompatible.md' },
        { text: 'event loop', link: '/js/interview/eventLoop.md' },
        { text: 'Object.is', link: '/js/interview/interview1.md' },
        { text: 'js 细节整理', link: '/js/interview/baseInterview.md' },
        '/js/interview/iife.md',
      ]
    },
    {
      text: 'js零碎题目',
      children: [
        { text: '用递归算法实现，数组长度为5且元素的随机数在2-32间不重复的值', link: '/js/scattered/interview50/interview1.md' },
        { text: '写一个方法去掉字符串中的空格', link: '/js/scattered/interview50/interview2.md' },
        { text: 'JavaScript实现双向链表', link: '/js/scattered/interview50/interview3.md' }
      ]
    }
  ],
  '/css/': [
    {
      text: '零散记录',
      children: [
        '/css/interview/tools.md',
        '/css/interview/frame.md',
        '/css/interview/knowledgePoints.md',
        '/css/interview/fieldInvalid.md',
        { text: 'css基础面试', link: '/css/interview/baseCss.md' },
        { text: 'css单位', link: '/css/interview/units.md' },
        { text: 'css属性继承有哪些？css中可继承的属性和不可继承属性', link: '/css/interview/cssTutorial.md' },
        { text: 'css hack', link: '/css/interview/cssHack.md' },
        { text: 'css box modal', link: '/css/interview/cssBoxModal.md' },
        { text: 'css Selector', link: '/css/interview/cssSelector.md' },
        { text: 'css before after', link: '/css/interview/cssBeforeAfter.md' },
        { text: 'css 优先级', link: '/css/interview/cssPriority.md' },
        { text: 'css 外边距重叠', link: '/css/interview/cssCollapsing.md' },
        { text: 'css 布局和包含块', link: '/css/interview/containingBlock.md' },
        { text: 'css 伪类和伪元素', link: '/css/interview/cssPseudo.md' },
        { text: 'css Grid 网格布局教程', link: '/css/interview/cssGridLayout.md' },
        { text: 'css flex布局', link: '/css/interview/cssFlexLayout.md' },
        { text: 'css flex布局demo', link: '/css/interview/cssFlexDemo.md' },
        { text: 'css 新伪类', link: '/css/interview/cssPseudoClass.md' },
        { text: 'css inline-block元素间间距', link: '/css/interview/cssInlineBlock.md' },
        { text: 'css 兼容性', link: '/css/interview/cssCompatible.md' },
        { text: '代码题目-span width|height', link: '/css/code/spanWidthHeight.md' },
      ]
    }
  ],
  '/html/': [
    {
      text: '零散记录',
      children: [
        '/html/interview/baseInterview.md',
        '/html/interview/regular.md',
        { text: '第1天使用link和@import有什么区别？', link: '/html/interview/linkImport.md' },
        { text: '第2天html的元素？', link: '/html/interview/htmlElement.md' },
        { text: '第3天HTML全局属性(globalattribute)？', link: '/html/interview/globalAttr.md' },
        { text: '第4天HTML5的文件离线储存？', link: '/html/interview/offlineStorage.md' },
        { text: '第5天简述超链接target属性？', link: '/html/interview/interview5.md' },
        { text: '第6天label都有哪些作用？', link: '/html/interview/interview6.md' },
        { text: '第7天iframe框架都有哪些优缺点？', link: '/html/interview/interview7.md' },
        { text: '第9天浏览器内多个标签页之间的通信方式？', link: '/html/interview/interview8.md' },
        { text: '第10天viewport常见设置？', link: '/html/interview/interview9.md' },
        { text: '第12天常见的浏览器内核？', link: '/html/interview/interview10.md' },
        { text: '第13天html5中的form怎么关闭自动完成？', link: '/html/interview/interview11.md' },
        { text: '第14天为什么HTML5只需要写<!DOCTYPEHTML>？', link: '/html/interview/interview12.md' },
        { text: '第15天title与h1的区别、b与strong的区别、i与em的区别？', link: '/html/interview/interview13.md' },
        { text: '第16天元素的alt和title有什么区别？', link: '/html/interview/interview14.md' },
        { text: '第17天认为table的作用和优缺点？', link: '/html/interview/interview15.md' },
        { text: '第18天怎样在页面上实现一个圆形的可点击区域？', link: '/html/interview/interview16.md' },
        { text: '第19天html中的置换元素和非置换元素的理解？', link: '/html/interview/interview17.md' },
        { text: '第20天请描述HTML元素的显示优先级？', link: '/html/interview/interview18.md' },
        { text: '第21天input元素中readonly和disabled？', link: '/html/interview/interview19.md' },
        { text: '第22天js放在html的`<body>`和`<head>`有什么区别？', link: '/html/interview/interview20.md' },
        { text: '第23天关于`<form>`标签的enctype属性？', link: '/html/interview/interview21.md' },
        { text: '第24天属性data-？', link: '/html/interview/interview22.md' },
        { text: '第26天GBK和UTF-8，页面上产生乱码？', link: '/html/interview/interview23.md' },
        { text: '第27天影子(Shadow)DOM？', link: '/html/interview/interview24.md' },
        { text: '第28天`<meta>`标签？', link: '/html/interview/interview25.md' },
        { text: '第30天网页上的验证码？', link: '/html/interview/interview26.md' },
        { text: '第31天DOM和BOM？', link: '/html/interview/interview27.md' },
        { text: '第33天html和html5？', link: '/html/interview/interview28.md' },
        { text: '第34天Standards模式和Quirks模式？', link: '/html/interview/interview29.md' },
        { text: '第35天用一个div模拟titlearea的实现？', link: '/html/interview/interview30.md' },
        { text: '第37天html5哪些标签可以优化SEO？', link: '/html/interview/interview31.md' },
        { text: '第38天cookie和session？', link: '/html/interview/interview32.md' },
        { text: '第39天title与h1、b与strong、i与em？', link: '/html/interview/interview33.md' },
        { text: '第43天元素固定在页面底部？', link: '/html/interview/interview34.md' },
        { text: '第44天video标签中预加载视频用到的属性？', link: '/html/interview/interview35.md' },
        { text: '第49天target="_blank"安全性问题？', link: '/html/interview/interview36.md' },
        { text: '第51天Form表单上传文件？', link: '/html/interview/interview37.md' },
        { text: '第53天webworkers？', link: '/html/interview/interview38.md' },
        { text: '第54天HTML5的地理定位？', link: '/html/interview/interview39.md' },
        { text: '第55天HTML5中新添加的表单属性？', link: '/html/interview/interview40.md' },
        { text: '第59天WebGL？', link: '/html/interview/interview41.md' },
        { text: '第60天src、href、link的区别？', link: '/html/interview/interview42.md' },
        { text: '第61天HTML拖放API？', link: '/html/interview/interview43.md' },
        { text: '第64天空格实体（5种以上）？', link: '/html/interview/interview44.md' },
        { text: '第65天html直接输入多个空格为什么只能显示一个空格？', link: '/html/interview/interview45.md' },
        { text: '第66天HTML5如果不写`<!DOCTYPEhtml>`，页面还会正常工作么？', link: '/html/interview/interview46.md' },
        { text: '第67天请写出唤醒拔打电话、发送邮件、发送短信的例子？', link: '/html/interview/interview47.md' },
        { text: '第68天写个例子说明HTML5在移动端如何打开APP？', link: '/html/interview/interview48.md' },
        { text: '第69天怎样禁止表单记住密码自动填充？', link: '/html/interview/interview49.md' },
        { text: "第70天html的a标签属性rel='nofollow'有什么作用？", link: '/html/interview/interview50.md' },
        { text: '第71天怎么在IE8及以下实现HTML5的兼容？', link: '/html/interview/interview51.md' },
        { text: '第72天video和audio分别支持哪些格式？', link: '/html/interview/interview52.md' },
        { text: '第73天favicon.ico有什么作用？怎么在页面中引用？常用尺寸有哪些？可以修改后缀名吗？', link: '/html/interview/interview53.md' },
        { text: '第74天在a标签上的四个伪类执行顺序是什么？', link: '/html/interview/interview54.md' },
        { text: '第75天web页面标签优化？', link: '/html/interview/interview55.md' },
        { text: '第76天HTML5如何识别语音读出的内容和朗读指定的内容？', link: '/html/interview/interview56.md' },
        { text: '第77天HTML5的img标签属性srcset和sizes的理解？', link: '/html/interview/interview57.md' },
        { text: '第78天HTML5中的datalist标签吗？', link: '/html/interview/interview58.md' },
        { text: '第79天HTML5的应用程序缓存与浏览器缓存有什么不同？', link: '/html/interview/interview59.md' },
        { text: '第80天Canvas和SVG区别？', link: '/html/interview/canvasSvg.md' },
        { text: '第81天html5datalist？', link: '/html/interview/htmlDatalist.md' },
        { text: 'Web worker', link: '/html/interview/webWorker.md' },
        { text: '第80天 简述下HTML的快捷键属性是哪个？并举例说明有什么用？', link: '/html/interview/accesskey.md' },
        { text: '第81天 你有用过HTML5的Device API吗?', link: '/html/interview/deviceAPI.md' },
        { text: '第82天 用HTML5实现手机摇一摇功能你有做过吗？', link: '/html/interview/shake.md' }
      ]
    }
  ],
  '/browser/': [
    {
      text: '基础浏览器',
      children: [
        { text: '第一套浏览器综合基础面试题', link: '/browser/interview/baseInterview.md' },
        { text: 'Quirks模式是什么？它和Standards模式有什么区别?', link: '/browser/interview/quirksStandards.md' },
        { text: '获取localStorage和sessionStorage当前已存储大小?', link: '/browser/interview/storageSpace.md' },
        '/browser/interview/webUrl.md',
        '/browser/interview/progress.md',
        '/browser/interview/redrawReflow.md',
        '/browser/interview/bigDataRender.md',
        '/browser/interview/webComLink.md',
      ]
    }
  ],
  '/http/': [
    {
      text: '基础http',
      children: [
        '/http/interview/crossDomainCookie.md',
        '/http/interview/nestAxios.md',
        { text: '第一套http综合基础面试题', link: '/http/interview/baseInterview.md' },
        { text: 'Fetch API 教程', link: '/http/interview/fetch.md' },
        { text: '跨域资源共享 CORS 详解', link: '/http/interview/cors.md' }
      ]
    },
  ],
  '/ILoveDevelop/': [
    {
      text: '概念',
      children: [
        { text: '基础', link: '/ILoveDevelop/react/principle/base.md' },
        { text: '流程', link: '/ILoveDevelop/react/principle/renderProcess.md' },
        { text: '调度', link: '/ILoveDevelop/react/principle/schedulingPrinciple.md' },
        { text: '组件更新', link: '/ILoveDevelop/react/principle/componentUpdate.md' },
        { text: 'diff策略', link: '/ILoveDevelop/react/principle/commpontDiff.md' },
      ]
    },
    {
      text: '基础',
      children: [
        { text: 'reactapi', link: '/ILoveDevelop/react/basic/reactApi.md' },
        { text: 'ReactElementapi', link: '/ILoveDevelop/react/basic/reactElement.md' },
        { text: 'ReactChildrenapi', link: '/ILoveDevelop/react/basic/reactChildren.md' },
        { text: 'React中的数据结构', link: '/ILoveDevelop/react/basic/reactFiber.md' },
      ]
    },
    {
      text: '创建更新',
      children: [
        { text: 'ReactDOM.render', link: '/ILoveDevelop/react/createUpdate/reactDomRender.md' },
        { text: 'setState&forceUpdate', link: '/ILoveDevelop/react/createUpdate/setStateForceUpdate.md' },
        { text: 'expirationTime时间', link: '/ILoveDevelop/react/createUpdate/expirationTime.md' },
      ]
    },
    {
      text: '任务调度',
      children: [
        { text: '全局变量', link: '/ILoveDevelop/react/taskScheduling/globalVariable.md' },
        { text: 'scheduleWork', link: '/ILoveDevelop/react/taskScheduling/scheduleWork.md' },
        { text: 'reactScheduler', link: '/ILoveDevelop/react/taskScheduling/reactScheduler.md' },
        { text: 'performWork', link: '/ILoveDevelop/react/taskScheduling/performWork.md' },
        { text: 'performUnitOfWork', link: '/ILoveDevelop/react/taskScheduling/performUnitOfWork.md' },
        { text: 'renderRoot', link: '/ILoveDevelop/react/taskScheduling/renderRoot.md' },
        { text: 'throwException', link: '/ILoveDevelop/react/taskScheduling/throwException.md' },
        { text: 'beginWork', link: '/ILoveDevelop/react/taskScheduling/beginWork.md' },
        { text: 'mountIndeterminateComponent', link: '/ILoveDevelop/react/taskScheduling/mountIndeterminateComponent.md' },
        { text: 'mountLazyCompont', link: '/ILoveDevelop/react/taskScheduling/mountLazyCompont.md' },
        { text: 'updateFunctionalComponent', link: '/ILoveDevelop/react/taskScheduling/updateFunctionalComponent.md' },
        { text: 'updateClassComponent', link: '/ILoveDevelop/react/taskScheduling/updateClassComponent.md' },
        { text: 'updateHostRoot', link: '/ILoveDevelop/react/taskScheduling/updateHostRoot.md' },
        { text: 'updateHostComponent', link: '/ILoveDevelop/react/taskScheduling/updateHostComponent.md' },
        { text: 'updateHostText', link: '/ILoveDevelop/react/taskScheduling/updateHostText.md' },
        { text: 'updateSuspenseComponent', link: '/ILoveDevelop/react/taskScheduling/updateSuspenseComponent.md' },
        { text: 'updatePortalComponent', link: '/ILoveDevelop/react/taskScheduling/updatePortalComponent.md' },
        { text: 'updateForwardRef', link: '/ILoveDevelop/react/taskScheduling/updateForwardRef.md' },
        { text: 'updateFragment', link: '/ILoveDevelop/react/taskScheduling/updateFragment.md' },
        { text: 'updateMode', link: '/ILoveDevelop/react/taskScheduling/updateMode.md' },
        { text: 'updateProfiler', link: '/ILoveDevelop/react/taskScheduling/updateProfiler.md' },
        { text: 'updateContextProvider', link: '/ILoveDevelop/react/taskScheduling/updateContextProvider.md' },
        { text: 'updateContextConsumer', link: '/ILoveDevelop/react/taskScheduling/updateContextConsumer.md' },
        { text: 'reconcileChildren', link: '/ILoveDevelop/react/taskScheduling/reconcileChildren.md' },
        { text: 'reconcileSingleElement', link: '/ILoveDevelop/react/taskScheduling/reconcileSingleElement.md' },
        { text: 'reconcileChildrenArray', link: '/ILoveDevelop/react/taskScheduling/reconcileChildrenArray.md' },
      ]
    },
    {
      text: 'commit 阶段',
      children: [
        { text: 'commitRoot', link: '/ILoveDevelop/react/commit/commitRoot.md' },
        { text: 'invokeGuardedCallback', link: '/ILoveDevelop/react/commit/invokeGuardedCallback.md' },
        { text: 'commitBeforeMutationLifecycles', link: '/ILoveDevelop/react/commit/commitBeforeMutationLifecycles.md' },
        { text: 'commitAllHostEffects', link: '/ILoveDevelop/react/commit/commitAllHostEffects.md' },
        { text: 'commitPlacement', link: '/ILoveDevelop/react/commit/commitPlacement.md' },
        { text: 'commitWork', link: '/ILoveDevelop/react/commit/commitWork.md' },
        { text: 'commitDeletion', link: '/ILoveDevelop/react/commit/commitDeletion.md' },
        { text: 'commitAllLifeCycles', link: '/ILoveDevelop/react/commit/commitAllLifeCycles.md' },
      ]
    },
    {
      text: '功能',
      children: [
        { text: 'context', link: '/ILoveDevelop/react/features/context.md' },
        { text: 'hydrate', link: '/ILoveDevelop/react/features/hydrate.md' },
        { text: 'ref', link: '/ILoveDevelop/react/features/ref.md' },
        { text: '事件系统初始化', link: '/ILoveDevelop/react/features/evenInit.md' },
        { text: '事件绑定', link: '/ILoveDevelop/react/features/eventBind.md' },
        { text: '事件触发', link: '/ILoveDevelop/react/features/eventDispath.md' },
        { text: '事件对象生成', link: '/ILoveDevelop/react/features/eventCreateEventObject.md' },
        { text: 'suspense', link: '/ILoveDevelop/react/features/suspense.md' },
        { text: '挂起任务', link: '/ILoveDevelop/react/features/suspenseWork.md' },
        { text: 'lazy组件', link: '/ILoveDevelop/react/features/suspenseLazy.md' },
      ]
    },
    {
      text: 'Hooks',
      children: [
        { text: '基础', link: '/ILoveDevelop/react/hooks/start.md' },
        { text: 'useState', link: '/ILoveDevelop/react/hooks/useState.md' },
        { text: 'useEffect', link: '/ILoveDevelop/react/hooks/useEffect.md' },
        { text: '其他API', link: '/ILoveDevelop/react/hooks/hooksOther.md' },
        { text: '通用API', link: '/ILoveDevelop/react/hooks/hooksCommon.md' },
      ]
    }
  ],
  '/reactInterview/': [
    {
      text: '第一期：基础概念笔记',
      children: [
        '/reactInterview/inelegantHook.md',
        '/reactInterview/interview1.md',
        '/reactInterview/interview2.md',
        '/reactInterview/interview3.md',
      ]
    }
  ],
  '/webpack/': [
    {
      text: '第1期：基础概念笔记',
      children: [
        { text: '整理1', link: '/webpack/interview/webpackInterview.md' },
        { text: '基本概念', link: '/webpack/interview/baseInterview.md' },
        { text: '配置', link: '/webpack/interview/configuration.md' },
        { text: '入口起点(entrypoints)', link: '/webpack/interview/entryPoints.md' },
        { text: '输出(output)', link: '/webpack/interview/output.md' },
        { text: 'loader', link: '/webpack/interview/loader.md' },
        { text: 'plugin', link: '/webpack/interview/plugin.md' },
      ]
    }
  ],
  '/esbuild/': [
    '/esbuild/description.md',
    {
      text: 'API',
      children: [
        '/esbuild/api/transform.md',
      ]
    },
    {
      text: 'contentTypes',
      children: [
        '/esbuild/contentTypes/content.md',
      ]
    },
    {
      text: 'plugins',
      children: [
        '/esbuild/plugins/plugins.md',
      ]
    }
  ],
  '/rollup/': [
    '/rollup/base.md',
    '/rollup/introduction.md',
  ],
  '/git/': [
    {
      text: 'git 基础整理',
      children: [
        { text: 'git基础面试', link: '/git/indx.md' },
        { text: 'git rebase', link: '/git/rebase.md' },
      ]
    }
  ],
  '/npm/': [
    '/npm/commonlyUsed.md',
  ],
  '/umi/': [
    {
      text: 'umi 整理',
      children: [
        { text: '@umijs/plugin-dva', link: '/umi/interview/pluginDva.md' },
        { text: '@umijs/plugin-qiankun', link: '/umi/interview/pluginQiankun.md' },
      ]
    }
  ],
  '/vue/': [
    {
      text: '第 1 期：源码解读-准备工作',
      children: [
        { text: 'flow', link: '/vue/prepare/flow.md' },
        { text: '源码目录', link: '/vue/prepare/directory.md' },
        { text: '源码构建', link: '/vue/prepare/build.md' },
        { text: '入口', link: '/vue/prepare/entrance.md' },
      ]
    },
    {
      text: '第2期：源码解读-数据驱动',
      children: [
        { text: '概述', link: '/vue/data-driven/new-vue.md' },
        { text: 'newVue', link: '/vue/data-driven/new-vue.md' },
        { text: '挂载实现', link: '/vue/data-driven/mounted.md' },
        { text: 'render', link: '/vue/data-driven/render.md' },
        { text: 'VirtualDOM', link: '/vue/data-driven/virtual-dom.md' },
        { text: 'createElement', link: '/vue/data-driven/create-element.md' },
        { text: 'update', link: '/vue/data-driven/update.md' },
      ]
    },
    {
      text: '第3期：源码解读-组件化',
      children: [
        { text: '概述', link: '/vue/components/outline.md' },
        { text: 'createComponent', link: '/vue/components/create-component.md' },
        { text: 'patch', link: '/vue/components/patch.md' },
        { text: '合并配置', link: '/vue/components/merge-option.md' },
        { text: '生命周期', link: '/vue/components/lifecycle.md' },
        { text: '组件注册', link: '/vue/components/component-register.md' },
        { text: '异步组件', link: '/vue/components/async-component.md' },
      ]
    },
    {
      text: '第4期：源码解读-深入响应式原理',
      children: [
        { text: '概述', link: '/vue/reactive/outline.md' },
        { text: '响应式对象', link: '/vue/reactive/reactive-object.md' },
        { text: '依赖收集', link: '/vue/reactive/getters.md' },
        { text: '派发更新', link: '/vue/reactive/setters.md' },
        { text: 'nextTick', link: '/vue/reactive/next-tick.md' },
        { text: '检测变化的注意事项', link: '/vue/reactive/questions.md' },
        { text: '计算属性VS侦听属性', link: '/vue/reactive/computed-watcher.md' },
        { text: '组件更新', link: '/vue/reactive/component-update.md' },
        { text: 'Props(v2.6.11)', link: '/vue/reactive/props.md' },
        { text: '原理图', link: '/vue/reactive/summary.md' },
      ]
    },
    {
      text: '第5期：源码解读-编译',
      children: [
        { text: '概述', link: '/vue/compile/outline.md' },
        { text: '编译入口', link: '/vue/compile/entrance.md' },
        { text: 'parse', link: '/vue/compile/parse.md' },
        { text: 'optimize', link: '/vue/compile/optimize.md' },
        { text: 'codegen', link: '/vue/compile/codegen.md' },
      ]
    },
    {
      text: '第6期：源码解读-扩展',
      children: [
        { text: '概述', link: '/vue/extend/outline.md' },
        { text: 'event', link: '/vue/extend/event.md' },
        { text: 'v-model', link: '/vue/extend/v-model.md' },
        { text: 'slot', link: '/vue/extend/slot.md' },
        { text: 'keep-alive', link: '/vue/extend/keep-alive.md' },
        { text: 'transition', link: '/vue/extend/tansition.md' },
        { text: 'transition-group', link: '/vue/extend/tansition-group.md' },
      ]
    },
    {
      text: '第7期：源码解读-VueRouter',
      children: [
        { text: '概述', link: '/vue/vue-router/outline.md' },
        { text: '路由注册', link: '/vue/vue-router/install.md' },
        { text: 'VueRouter对象', link: '/vue/vue-router/router.md' },
        { text: 'matcher', link: '/vue/vue-router/matcher.md' },
        { text: '路径切换', link: '/vue/vue-router/transition-to.md' },
      ]
    },
    {
      text: '第8期：源码解读-Vuex',
      children: [
        { text: '概述', link: '/vue/vuex/idex.md' },
        { text: 'Vuex初始化', link: '/vue/vuex/init.md' },
        { text: 'API', link: '/vue/vuex/api.md' },
        { text: '插件', link: '/vue/vuex/plugin.md' },
      ]
    },
    {
      text: '第9期：基础面试题',
      children: [
        { text: '整理1', link: '/vue/interview/baseInterview.md' },
        { text: '整理2', link: '/vue/interview/baseInterviewSecond.md' },
        { text: '知识体系', link: '/vue/interview/knowledgeSystem.md' },
        { text: '响应式详解', link: '/vue/interview/detailedResponsiveness.md' },
        { text: '组件间通信', link: '/vue/interview/componentCommunication.md' },
        { text: '事件绑定', link: '/vue/interview/eventBinding.md' },
        { text: 'slot插槽', link: '/vue/interview/slot.md' },
        { text: '模板编译', link: '/vue/interview/templateCompilation.md' },
        { text: 'diff算法', link: '/vue/interview/diff.md' },
        { text: 'key作用', link: '/vue/interview/key.md' },
      ]
    }
  ],
  '/react/': [
    {
      text: '第 1 期：React理念',
      children: [
        { text: 'React理念', link: '/react/preparation/idea.md' },
        { text: '老的React架构', link: '/react/preparation/oldConstructure.md' },
        { text: '新的React架构', link: '/react/preparation/newConstructure.md' },
        { text: 'Fiber架构的心智模型', link: '/react/process/fiber-mental.md' },
        { text: 'Fiber架构的实现原理', link: '/react/process/fiber.md' },
        { text: 'Fiber架构的工作原理', link: '/react/process/doubleBuffer.md' },
        { text: '总结', link: '/react/preparation/summary.md' },
      ]
    },
    {
      text: '第2期：前置知识',
      children: [
        { text: '源码的文件结构', link: '/react/preparation/file.md' },
        { text: '调试源码', link: '/react/preparation/source.md' },
        { text: '深入理解JSX', link: '/react/preparation/jsx.md' },
      ]
    },
    {
      text: '第3期：render阶段',
      children: [
        { text: '流程概览', link: '/react/process/reconciler.md' },
        { text: 'beginWork', link: '/react/process/beginWork.md' },
        { text: 'completeWork', link: '/react/process/completeWork.md' },
      ]
    },
    {
      text: '第4期：commit阶段',
      children: [
        { text: '流程概览', link: '/react/renderer/prepare.md' },
        { text: 'beforemutation阶段', link: '/react/renderer/beforeMutation.md' },
        { text: 'mutation阶段', link: '/react/renderer/mutation.md' },
        { text: 'layout阶段', link: '/react/renderer/layout.md' },
      ]
    },
    {
      text: '第5期：Diff算法',
      children: [
        { text: '概览', link: '/react/diff/prepare.md' },
        { text: '单节点Diff', link: '/react/diff/one.md' },
        { text: '多节点Diff', link: '/react/diff/multi.md' },
      ]
    },
    {
      text: '第6期：状态更新',
      children: [
        { text: '流程概览', link: '/react/state/prepare.md' },
        { text: '心智模型', link: '/react/state/mental.md' },
        { text: 'Update', link: '/react/state/update.md' },
        { text: '深入理解优先级', link: '/react/state/priority.md' },
        { text: 'ReactDOM.render', link: '/react/state/reactdom.md' },
        { text: 'this.setState', link: '/react/state/setstate.md' },
      ]
    },
    {
      text: '第7期：Hooks',
      children: [
        { text: 'Hooks理念', link: '/react/hooks/prepare.md' },
        { text: '极简Hooks实现', link: '/react/hooks/create.md' },
        { text: 'Hooks数据结构', link: '/react/hooks/structure.md' },
        { text: 'useState与useReducer', link: '/react/hooks/usestate.md' },
        { text: 'useEffect', link: '/react/hooks/useeffect.md' },
        { text: 'useRef', link: '/react/hooks/useref.md' },
        { text: 'useMemo与useCallback', link: '/react/hooks/usememo.md' },
      ]
    },
    {
      text: '第8期：ConcurrentMode',
      children: [
        { text: '概览', link: '/react/concurrent/prepare.md' },
        { text: 'Scheduler的原理与实现', link: '/react/concurrent/scheduler.md' },
        { text: 'lane模型', link: '/react/concurrent/lane.md' },
        { text: '深入源码剖析componentWillXXX为什么UNSAFE', link: '/react/concurrent/componentWillXXX.md' },
        '/react/concurrent/redux.md'
      ]
    },
    {
      text: '第9期：基础概念',
      children: [
        { text: '概述', link: '/react/principle/basePrinciple.md' },
        { text: '组件类-api', link: '/react/principle/componentApi.md' },
        { text: '工具类-api', link: '/react/principle/toolApi.md' },
        { text: 'hooks-api', link: '/react/principle/hookApi.md' },
        { text: 'react-dom-api', link: '/react/principle/domApi.md' },
        { text: 'react-hook使用', link: '/react/principle/hookUse.md' },
        { text: 'react-hook自定义', link: '/react/principle/hookCustom.md' },
        { text: 'react-hook原理', link: '/react/principle/hookPrinciple.md' },
        { text: '深入hoc', link: '/react/principle/hoc.md' },
        { text: 'React-redux源码', link: '/react/principle/reactRedux.md' },
        { text: 'react缓存页面', link: '/react/principle/reactKeeplive.md' },
        { text: 'react-router路由原理', link: '/react/principle/reactRouter.md' },
      ]
    },
    {
      text: '第10期：基础面试题',
      children: [
        { text: '什么时候使用状态管理器?', link: '/react/interview/50/interview1.md' },
        { text: 'render函数中return如果没有使用()会有什么问题?', link: '/react/interview/50/interview2.md' },
        { text: 'componentWillUpdate可以直接修改state的值吗?', link: '/react/interview/50/interview3.md' },
        { text: '说说对React的渲染原理的理解?', link: '/react/interview/50/interview4.md' },
        { text: '什么渲染劫持？', link: '/react/interview/50/interview5.md' },
        { text: 'ReactIntl？', link: '/react/interview/50/interview6.md' },
        { text: 'Context？', link: '/react/interview/50/interview7.md' },
        { text: 'Context实例？', link: '/react/interview/50/interview12.md' },
        { text: 'RenderProps？', link: '/react/interview/50/interview8.md' },
        { text: '高阶组件？', link: '/react/interview/50/interview9.md' },
        { text: 'Refs转发？', link: '/react/interview/50/interview10.md' },
        { text: 'React顶层API？', link: '/react/interview/50/interview11.md' },
        { text: 'contextType？', link: '/react/interview/50/interview13.md' },
        { text: '除了实例的属性可以获取Context外哪些地方还能直接获取Context？', link: '/react/interview/50/interview14.md' },
        { text: 'Consumer？', link: '/react/interview/50/interview15.md' },
        { text: 'windowing？', link: '/react/interview/50/interview16.md' },
        { text: 'ReactDOM-React的插槽(Portals)？', link: '/react/interview/50/interview17.md' },
        { text: 'React的插槽(Portals)？', link: '/react/interview/50/interview18.md' },
        { text: '构造函数？', link: '/react/interview/50/interview19.md' },
        { text: 'React拆分组件？', link: '/react/interview/50/interview20.md' },
        { text: 'React的严格模式？', link: '/react/interview/50/interview21.md' },
        { text: 'relay？', link: '/react/interview/50/interview22.md' },
        { text: '捕获错误？', link: '/react/interview/50/interview23.md' },
        { text: '如果组件的属性没有传值，那么它的默认值是什么？', link: '/react/interview/50/interview24' },
        { text: 'React的表单库？', link: '/react/interview/50/interview25.md' },
        { text: 'suspense组件？', link: '/react/interview/50/interview26.md' },
        { text: '`super()`和`super(props)`？', link: '/react/interview/50/interview27.md' },
        { text: '动态导入组件？', link: '/react/interview/50/interview28.md' },
        { text: '给非控组件设置默认的值？', link: '/react/interview/50/interview29.md' },
        { text: '使用Hooks获取服务端数据？', link: '/react/interview/50/interview30.md' },
        { text: 'render方法的原理？', link: '/react/interview/50/interview31.md' },
        { text: '使用Hooks？', link: '/react/interview/50/interview32.md' },
        { text: 'useEffect和useLayoutEffect？', link: '/react/interview/50/interview33.md' },
        { text: '自定义组件时render是否为可选的？', link: '/react/interview/50/interview34.md' },
        { text: 'React必须使用JSX？', link: '/react/interview/50/interview35.md' },
        { text: '需要把keys设置为全局唯一？', link: '/react/interview/50/interview36.md' },
        { text: '怎么定时更新一个组件？', link: '/react/interview/50/interview37.md' },
        { text: '使用webpack打包React项目优化？', link: '/react/interview/50/interview38.md' },
        { text: 'React根据不同的环境打包？', link: '/react/interview/50/interview39.md' },
        { text: '遍React的源码', link: '/react/interview/50/interview40.md' },
        { text: 'React.forwardRef', link: '/react/interview/50/interview41.md' },
        { text: 'React事件', link: '/react/interview/50/interview42.md' },
        { text: 'React的reconciliation（一致化算法）', link: '/react/interview/50/interview43.md' },
        { text: 'Fragment|DOM元素|安全注入', link: '/react/interview/50/interview44.md' },
        { text: 'React中如何监听state', link: '/react/interview/50/interview45.md' },
        { text: '为什么props复制给state会产生bug', link: '/react/interview/50/interview46.md' },
        { text: 'React为什么不要直接修改state|ReactFiber', link: '/react/interview/50/interview47.md' },
        { text: '装饰器(Decorator)React', link: '/react/interview/50/interview48.md' },
        { text: 'react手动清除|for和htmlFor', link: '/react/interview/50/interview49.md' },
        { text: 'React状态管理', link: '/react/interview/50/interview50.md' },
        { text: 'React新特性', link: '/react/interview/100/interview51.md' },
        { text: 'React事件引用', link: '/react/interview/100/interview52.md' },
        { text: 'constructor和getInitialState|引入本地图片', link: '/react/interview/100/interview53.md' },
        { text: 'ImmutableData', link: '/react/interview/100/interview54.md' },
        { text: '提高组件的渲染效率', link: '/react/interview/100/interview55.md' },
        { text: 'react推行函数式组件', link: '/react/interview/100/interview56.md' },
      ]
    }
  ],
  '/algorithm/': [
    {
      text: '第 1 期：基础面试题',
      children: [
        { text: '第一套综合基础面试题', link: '/algorithm/interview/baseInterview.md' }
      ]
    }
  ],
  '/design/': [
    '/design/functionalProgramming.md',
    '/design/overview.md',
    '/design/constructor.md',
    '/design/module.md',
    '/design/exposed.md',
    '/design/singleton.md',
    '/design/observer.md',
    '/design/intermediary.md',
    '/design/prototype.md',
    '/design/command.md',
    '/design/exterior.md',
    '/design/factory.md',
    '/design/mixin.md',
    '/design/decoration.md',
    '/design/flyweight.md',
    '/design/mvc.md',
    '/design/mvp.md',
    '/design/mvvm.md',
    '/design/combination.md',
    '/design/adapter.md',
    '/design/outward.md',
    '/design/censorJquery.md',
    '/design/iterator.md',
    '/design/lazyInitial.md',
    '/design/proxy.md',
    '/design/builder.md',
    '/design/amd.md',
    '/design/commonJS.md',
    '/design/esHarmony.md',
  ],
  '/designFrame/': [
    {
      text: '库设计模式',
      children: [
        '/designFrame/jquery.md',
        '/designFrame/underscore.md',
        '/designFrame/createUnderscore.md',
        '/designFrame/lodash.md',
        '/designFrame/sentry.md',
        '/designFrame/vuex.md',
        '/designFrame/axios.md',
      ]
    }
  ],
  '/ts/': [
    {
      text: 'TypeScript 项目',
      children: [
        '/ts/project/unknownAny.md',
        '/ts/project/inDepthTs.md',
        '/ts/project/compilationContext',
        '/ts/project/declarationspaces',
        '/ts/project/modules',
        '/ts/project/namespaces',
        '/ts/project/dynamicImportExpressions',
      ]
    },
    {
      text: 'TypeScript 类型系统',
      children: [
        '/ts/typings/overview',
        '/ts/typings/migrating',
        '/ts/typings/types',
        '/ts/typings/ambient',
        '/ts/typings/interfaces',
        '/ts/typings/enums',
        '/ts/typings/lib',
        '/ts/typings/functions',
        '/ts/typings/callable',
        '/ts/typings/typeAssertion',
        '/ts/typings/freshness',
        '/ts/typings/typeGuard',
        '/ts/typings/literals',
        '/ts/typings/readonly',
        '/ts/typings/generices',
        '/ts/typings/typeInference',
        '/ts/typings/typeCompatibility',
        '/ts/typings/neverType',
        '/ts/typings/discrominatedUnion',
        '/ts/typings/indexSignatures',
        '/ts/typings/movingTypes',
        '/ts/typings/exceptionsHanding',
        '/ts/typings/mixins',
        '/ts/typings/thisType'
      ]
    },
    {
      text: 'JSX',
      children: [
        '/ts/jsx/support',
        '/ts/jsx/reactJSX',
        '/ts/jsx/nonReactJSX'
      ]
    },
    {
      text: 'TypeScript 错误提示',
      children: [
        '/ts/error/interpreting',
        '/ts/error/common'
      ]
    },
    {
      text: 'TIPs',
      children: [
        '/ts/tips/stringBasedEmuns',
        '/ts/tips/nominalTyping',
        '/ts/tips/statefulFunctions',
        '/ts/tips/bind',
        '/ts/tips/curry',
        '/ts/tips/typeInstantiation',
        '/ts/tips/lazyObjectLiteralInitialization',
        '/ts/tips/classAreUseful',
        '/ts/tips/avoidExportDefault',
        '/ts/tips/limitPropertySetters',
        '/ts/tips/createArrays',
        '/ts/tips/outFileCaution',
        '/ts/tips/staticConstructors',
        '/ts/tips/singletonPatern',
        '/ts/tips/functionParameters',
        '/ts/tips/truthy',
        '/ts/tips/buildToggles',
        '/ts/tips/typesafeEventEmitter',
        '/ts/tips/metadata',
        '/ts/tips/covarianceAndContravariance',
        '/ts/tips/infer'
      ]
    },
    {
      text: 'TypeScript 编译原理',
      children: [
        '/ts/compiler/overview',
        '/ts/compiler/program',
        '/ts/compiler/ast',
        '/ts/compiler/scanner',
        '/ts/compiler/parser',
        '/ts/compiler/binder',
        '/ts/compiler/checker',
        '/ts/compiler/emitter'
      ]
    },
    {
      text: 'TypeScript FAQs',
      children: [
        '/ts/faqs/common-bug-not-bugs',
        '/ts/faqs/common-feature-request',
        '/ts/faqs/type-system-behavior',
        '/ts/faqs/function',
        '/ts/faqs/class',
        '/ts/faqs/generics',
        '/ts/faqs/modules',
        '/ts/faqs/enums',
        '/ts/faqs/type-guards',
        '/ts/faqs/jsx-and-react',
        '/ts/faqs/thing-that-dont-work',
        '/ts/faqs/commandline-behavior',
        '/ts/faqs/tsconfig-behavior'
      ]
    },
    {
      text: '版本差异',
      children: [
        '/ts/new/typescript-3.9',
        '/ts/new/typescript-3.8',
        '/ts/new/typescript-3.7'
      ]
    },
  ],
  '/performance/': [
    {
      text: 'vue',
      children: [
        '/performance/vue/vue2Base.md',
        '/performance/vue/vue2Table.md',
        '/performance/vue/vue2offsetTop.md',
      ],
    },
    {
      text: 'react',
      children: [
        '/performance/react/reactBase.md',
        '/performance/react/reactTypescript.md',
      ],
    },
    {
      text: '基础优化',
      children: [
        '/performance/base/drag1.md',
        '/performance/base/cache.md',
        '/performance/base/oneLineCode.md',
        '/performance/base/oneLineCodeArray.md',
        '/performance/base/oneLineCodeDateTime.md',
        '/performance/base/oneLineCodeDOM.md',
        '/performance/base/oneLineCodeFunction.md',
        '/performance/base/oneLineCodeMath.md',
        '/performance/base/oneLineCodeMisc.md',
        '/performance/base/oneLineCodeNumber.md',
        '/performance/base/oneLineCodeObject.md',
        '/performance/base/oneLineCodeRandom.md',
        '/performance/base/oneLineCodeString.md',
        '/performance/base/oneLineCodeValidator.md',
        '/performance/base/typeScriptCache.md',
      ]
    }
  ],
  '/nginx/': [
    {
      text: '基础',
      children: [
        '/nginx/base.md',
        '/nginx/nginxComprehensiveScene.md',
      ]
    }
  ],
  '/react-illustration-series/': [
    {
      text: '基础概念',
      children: [
        '/react-illustration-series/main/macro-structure.md',
        '/react-illustration-series/main/workloop.md',
        '/react-illustration-series/main/object-structure.md',
      ],
    },
    {
      text: '运行核心',
      children: [
        '/react-illustration-series/main/reconciler-workflow.md',
        '/react-illustration-series/main/bootstrap.md',
        '/react-illustration-series/main/priority.md',
        '/react-illustration-series/main/scheduler.md',
        '/react-illustration-series/main/fibertree-prepare.md',
        '/react-illustration-series/main/fibertree-create.md',
        '/react-illustration-series/main/fibertree-update.md',
        '/react-illustration-series/main/fibertree-commit.md',
      ],
    },
    {
      text: '数据管理',
      children: [
        '/react-illustration-series/main/state-effects.md',
        '/react-illustration-series/main/hook-summary.md',
        '/react-illustration-series/main/hook-state.md',
        '/react-illustration-series/main/hook-effect.md',
        '/react-illustration-series/main/context.md',
      ]
    },
    {
      text: '交互',
      children: [
        '/react-illustration-series/main/synthetic-event.md',
      ],
    },
    {
      text: '高频算法',
      children: [
        '/react-illustration-series/algorithm/bitfiled.md',
        '/react-illustration-series/algorithm/heapsort.md',
        '/react-illustration-series/algorithm/dfs.md',
        '/react-illustration-series/algorithm/linkedlist.md',
        '/react-illustration-series/algorithm/stack.md',
        '/react-illustration-series/algorithm/diff.md',
      ],
    }
  ],
  '/cli/': [
    '/cli/base.md',
    '/cli/customCli.md',
  ],
  '/technology/': [
    '/technology/base.md',
    '/technology/summarize.md',
  ],
}