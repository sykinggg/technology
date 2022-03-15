import type { NavbarConfig } from '@vuepress/theme-default';

export const navbar: NavbarConfig = [
  {
    text: '技术',
    children: [
      {
        text: '技术前瞻',
        link: '/technology/base.md',
      }
    ]
  },
  {
    text: 'js',
    children: [
      {
        text: 'mozilla：基本对象',
        link: '/mozillajs/baseObject/symbol.md',
      },
      {
        text: '基础面试题',
        link: '/jsInterview/baseInterview.md',
      },
      {
        text: 'js 概念',
        link: '/js/stack/executionStack.md',
      },
      { text: 'JSX', link: '/ts/jsx/support' },
      { text: 'TypeScript 项目', link: '/ts/project/inDepthTs.md' },
      { text: 'js 新概念', link: '/jsNews/es6News.md' },
      // { text: 'es6', link: '/es6/interview1.md' },
      // { text: 'es7', link: '/es7/interview1.md' },
      // { text: 'es8', link: '/es8/interview1.md' },
      // { text: 'es9', link: '/es9/interview1.md' },
      // { text: 'es10', link: '/es10/interview1.md' },
    ]
  },
  {
    text: 'css',
    children: [
      {
        text: '第 1 期：CSS API',
        link: '/mozillaCss/reference/universalSelectors.md'
      },
      {
        text: '零散记录',
        link: '/css/interview/baseCss.md',
      }
    ]
  },
  {
    text: 'html',
    children: [
      {
        text: '零散记录',
        link: '/html/interview/linkImport.md',
      }
    ]
  },
  {
    text: '端',
    children: [
      {
        text: '基础浏览器',
        link: '/browser/interview/baseInterview.md',
      },
      {
        text: '基础http',
        link: '/http/interview/baseInterview.md',
      }
    ]
  },
  {
    text: '工具',
    children: [
      {
        text: 'webpack',
        link: '/webpack/interview/webpackInterview.md',
      },
      {
        text: 'esbuild',
        link: '/esbuild/description.md'
      },
      {
        text: 'rollup',
        link: '/rollup/introduction.md'
      },
      {
        text: 'git',
        link: '/git/indx.md',
        // children: [
        //     { text: 'git基础面试', link: '/git/index.md' }
        // ]
      },
      {
        text: 'nginx',
        link: '/nginx/base.md',
      },
      {
        text: 'cli',
        link: '/cli/base.md',
      },
      {
        text: 'npm',
        link: '/npm/commonlyUsed.md',
      },
    ]
  },
  {
    text: 'react',
    children: [
      {
        text: 'react 源码阅读 代码视角',
        link: '/ILoveDevelop/react/principle/base.md',
        // children: [
        //     { text: '概念', link: '/ILoveDevelop/react/principle/base.md' },
        //     { text: '基础', link: '/ILoveDevelop/react/basic/reactApi.md' },
        //     { text: '创建更新', link: '/ILoveDevelop/react/createUpdate/reactDomRender.md' },
        //     { text: '任务调度', link: '/ILoveDevelop/react/taskScheduling/globalVariable.md' },
        //     { text: 'commit 阶段', link: '/ILoveDevelop/react/commit/commitRoot.md' },
        //     { text: '功能', link: '/ILoveDevelop/react/features/context.md' },
        //     { text: 'Hooks', link: '/ILoveDevelop/react/hooks/start.md' },
        // ]
      },
      {
        text: 'react 源码阅读 思想视角',
        link: '/react/preparation/idea.md',
        // children: [
        //     { text: '第 1 期：React理念', link: '/react/preparation/idea.md' },
        //     { text: '第 2 期：前置知识', link: '/react/preparation/file.md' },
        //     { text: '第 3 期：render阶段', link: '/react/process/reconciler.md' },
        //     { text: '第 4 期：commit阶段', link: '/react/renderer/prepare.md' },
        //     { text: '第 5 期：Diff算法', link: '/react/diff/prepare.md' },
        //     { text: '第 6 期：状态更新', link: '/react/state/prepare.md' },
        //     { text: '第 7 期：Hooks', link: '/react/hooks/prepare.md' },
        //     { text: '第 8 期：Concurrent Mode', link: '/react/concurrent/prepare.md' },
        //     { text: '第 9 期：基础概念', link: '/react/principle/basePrinciple.md' },
        //     { text: '第 10 期：基础面试题', link: '/react/interview/50/interview1.md' },
        // ]
      },
      {
        text: '图解React源码',
        link: '/react-illustration-series/main/macro-structure.md'
      },
      {
        text: 'umi',
        link: '/umi/interview/pluginDva.md',
        // children: [
        //     { text: '@umijs/plugin-dva', link: '/umi/interview/pluginDva.md' },
        //     { text: '@umijs/plugin-qiankun', link: '/umi/interview/pluginQiankun.md' }
        // ]
      },
      {
        text: '整理',
        link: '/reactInterview/interview1.md'
      }
    ]
  },
  {
    text: 'vue',
    children: [
      {
        text: '第 1 期：源码解读-准备工作',
        link: '/vue/prepare/flow.md',
        // children: [
        //     { text: 'flow', link: '/vue/prepare/flow.md' },
        //     { text: '源码目录', link: '/vue/prepare/directory.md' },
        //     { text: '源码构建', link: '/vue/prepare/build.md' },
        //     { text: '入口', link: '/vue/prepare/entrance.md' },
        // ]
      },
      {
        text: '第2期：源码解读-数据驱动',
        link: '/vue/data-driven/_index.md',
        // children: [
        //     { text: '概述', link: '/vue/data-driven/index.md' },
        //     { text: 'newVue', link: '/vue/data-driven/new-vue.md' },
        //     { text: '挂载实现', link: '/vue/data-driven/mounted.md' },
        //     { text: 'render', link: '/vue/data-driven/render.md' },
        //     { text: 'VirtualDOM', link: '/vue/data-driven/virtual-dom.md' },
        //     { text: 'createElement', link: '/vue/data-driven/create-element.md' },
        //     { text: 'update', link: '/vue/data-driven/update.md' },
        // ]
      },
      {
        text: '第3期：源码解读-组件化',
        link: '/vue/components/create-component.md',
        // children: [
        //     { text: 'createComponent', link: '/vue/components/create-component.md' },
        //     { text: 'patch', link: '/vue/components/patch.md' },
        //     { text: '合并配置', link: '/vue/components/merge-option.md' },
        //     { text: '生命周期', link: '/vue/components/lifecycle.md' },
        //     { text: '组件注册', link: '/vue/components/component-register.md' },
        //     { text: '异步组件', link: '/vue/components/async-component.md' },
        // ]
      },
      {
        text: '第4期：源码解读-深入响应式原理',
        link: '/vue/reactive/reactive-object.md',
        // children: [
        //     { text: '响应式对象', link: '/vue/reactive/reactive-object.md' },
        //     { text: '依赖收集', link: '/vue/reactive/getters.md' },
        //     { text: '派发更新', link: '/vue/reactive/setters.md' },
        //     { text: 'nextTick', link: '/vue/reactive/next-tick.md' },
        //     { text: '检测变化的注意事项', link: '/vue/reactive/questions.md' },
        //     { text: '计算属性VS侦听属性', link: '/vue/reactive/computed-watcher.md' },
        //     { text: '组件更新', link: '/vue/reactive/component-update.md' },
        //     { text: 'Props(v2.6.11)', link: '/vue/reactive/props.md' },
        //     { text: '原理图', link: '/vue/reactive/summary.md' },
        // ]
      },
      {
        text: '第5期：源码解读-编译',
        link: '/vue/compile/entrance.md',
        // children: [
        //     { text: '编译入口', link: '/vue/compile/entrance.md' },
        //     { text: 'parse', link: '/vue/compile/parse.md' },
        //     { text: 'optimize', link: '/vue/compile/optimize.md' },
        //     { text: 'codegen', link: '/vue/compile/codegen.md' },
        // ]
      },
      {
        text: '第6期：源码解读-扩展',
        link: '/vue/extend/event.md',
        // children: [
        //     { text: 'event', link: '/vue/extend/event.md' },
        //     { text: 'v-model', link: '/vue/extend/v-model.md' },
        //     { text: 'slot', link: '/vue/extend/slot.md' },
        //     { text: 'keep-alive', link: '/vue/extend/keep-alive.md' },
        //     { text: 'transition', link: '/vue/extend/tansition.md' },
        //     { text: 'transition-group', link: '/vue/extend/tansition-group.md' },
        // ]
      },
      {
        text: '第7期：源码解读-VueRouter',
        link: '/vue/vue-router/install.md',
        // children: [
        //     { text: '路由注册', link: '/vue/vue-router/install.md' },
        //     { text: 'VueRouter对象', link: '/vue/vue-router/router.md' },
        //     { text: 'matcher', link: '/vue/vue-router/matcher.md' },
        //     { text: '路径切换', link: '/vue/vue-router/transition-to.md' },
        // ]
      },
      {
        text: '第8期：源码解读-Vuex',
        link: '/vue/vuex/idex.md',
        // children: [
        //     { text: '概述', link: '/vue/vuex/idex.md' },
        //     { text: 'Vuex初始化', link: '/vue/vuex/init.md' },
        //     { text: 'API', link: '/vue/vuex/api.md' },
        //     { text: '插件', link: '/vue/vuex/plugin.md' },
        // ]
      },
      {
        text: '第9期：基础面试题',
        link: '/vue/interview/baseInterview.md',
        // children: [
        //     { text: '整理1', link: '/vue/interview/baseInterview.md' },
        //     { text: '整理2', link: '/vue/interview/baseInterviewSecond.md' },
        //     { text: '知识体系', link: '/vue/interview/knowledgeSystem.md' },
        //     { text: '响应式详解', link: '/vue/interview/detailedResponsiveness.md' },
        //     { text: '组件间通信', link: '/vue/interview/componentCommunication.md' },
        //     { text: '事件绑定', link: '/vue/interview/eventBinding.md' },
        //     { text: 'slot插槽', link: '/vue/interview/slot.md' },
        //     { text: '模板编译', link: '/vue/interview/templateCompilation.md' },
        //     { text: 'diff算法', link: '/vue/interview/diff.md' },
        //     { text: 'key作用', link: '/vue/interview/key.md' },
        // ]
      }
    ]
  },
  {
    text: '性能优化',
    children: [
      {
        text: 'vue-性能优化',
        link: '/performance/vue/vue2Base.md',
      },
      {
        text: 'react-性能优化',
        link: '/performance/react/reactBase.md',
      },
      {
        text: '组件设计',
        link: '/performance/base/drag1.md',
      }
    ]
  },
  {
    text: '算法&设计',
    children: [
      {
        text: '第 1 期：基础面试题',
        link: '/algorithm/interview/baseInterview.md',
        // children: [
        //     { text: '第一套综合基础面试题', link: '/algorithm/interview/baseInterview.md' }
        // ]
      },
      {
        text: '设计模式',
        link: '/design/overview.md'
      },
      {
        text: '设计应用',
        link: '/designFrame/jquery.md'
      }
    ]
  }
]