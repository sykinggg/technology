import { defineUserConfig } from 'vuepress';
import type { DefaultThemeOptions } from 'vuepress';
// import { path } from '@vuepress/utils'
import { navbar } from './navbar';
import { sidebar } from './sidebar';

// const isProd = process.env.NODE_ENV === 'production'

export default defineUserConfig<DefaultThemeOptions>({
  base: '/technology/',
  lang: 'zh-CN',
  description: '君子藏器于身 待时而动 天下有道则见 无道则隐',
  //   head: [
  //     [
  //       'link',
  //       {
  //         rel: 'icon',
  //         type: 'image/png',
  //         sizes: '16x16',
  //         href: `/images/icons/favicon-16x16.png`,
  //       },
  //     ],
  //     [
  //       'link',
  //       {
  //         rel: 'icon',
  //         type: 'image/png',
  //         sizes: '32x32',
  //         href: `/images/icons/favicon-32x32.png`,
  //       },
  //     ],
  //     ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
  //     ['meta', { name: 'application-name', content: 'VuePress' }],
  //     ['meta', { name: 'apple-mobile-web-app-title', content: 'VuePress' }],
  //     [
  //       'meta',
  //       { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
  //     ],
  //     [
  //       'link',
  //       { rel: 'apple-touch-icon', href: `/images/icons/apple-touch-icon.png` },
  //     ],
  //     [
  //       'link',
  //       {
  //         rel: 'mask-icon',
  //         href: '/images/icons/safari-pinned-tab.svg',
  //         color: '#3eaf7c',
  //       },
  //     ],
  //     ['meta', { name: 'msapplication-TileColor', content: '#3eaf7c' }],
  //     ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  //   ],

  // site-level locales config
  //   locales: {
  //     '/': {
  //       lang: 'en-US',
  //       title: 'VuePress',
  //       description: 'Vue-powered Static Site Generator',
  //     },
  //     '/zh/': {
  //       lang: 'zh-CN',
  //       title: 'VuePress',
  //       description: 'Vue 驱动的静态网站生成器',
  //     },
  //   },

  // bundler:
  //     // specify bundler via environment variable
  //     process.env.DOCS_BUNDLER ??
  //     // use vite by default
  //     '@vuepress/vite',

  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',

    // repo: 'vuepress/vuepress-next',

    // docsDir: 'docs',

    // sidebar
    sidebar: sidebar,

    // navbar
    navbar: navbar,

    locales: {
      '/': {
        lang: 'zh-CN',
        title: 'VuePress',
        description: 'Vue 驱动的静态网站生成器',
      },
    },

    // themePlugins: {
    //     // only enable git plugin in production mode
    //     git: isProd,
    //     // use shiki plugin in production mode instead
    //     prismjs: !isProd,
    // },
  },

  // markdown: {
  //     importCode: {
  //         handleImportPath: (str) =>
  //             str.replace(
  //                 /^@vuepress/,
  //                 path.resolve(__dirname, '../../packages/@vuepress')
  //             ),
  //     },
  // },

  plugins: [
    [
      '@vuepress/plugin-docsearch',
      {
        apiKey: 'b2f376a0250f5e3133828784238a53dd',
        indexName: 'vuepress',
        searchParameters: {
          facetFilters: ['tags:v2'],
        },
        placeholder: '搜索文档',
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            searchBox: {
              resetButtonTitle: '清除查询条件',
              resetButtonAriaLabel: '清除查询条件',
              cancelButtonText: '取消',
              cancelButtonAriaLabel: '取消',
            },
            startScreen: {
              recentSearchesTitle: '搜索历史',
              noRecentSearchesText: '没有搜索历史',
              saveRecentSearchButtonTitle: '保存至搜索历史',
              removeRecentSearchButtonTitle: '从搜索历史中移除',
              favoriteSearchesTitle: '收藏',
              removeFavoriteSearchButtonTitle: '从收藏中移除',
            },
            errorScreen: {
              titleText: '无法获取结果',
              helpText: '你可能需要检查你的网络连接',
            },
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
              searchByText: '搜索提供者',
            },
            noResultsScreen: {
              noResultsText: '无法找到相关结果',
              suggestedQueryText: '你可以尝试查询',
              openIssueText: '你认为该查询应该有结果？',
              openIssueLinkText: '点击反馈',
            },
          },
        },
      },
    ],
    // [
    //     '@vuepress/plugin-google-analytics',
    //     {
    //         // we have multiple deployments, which would use different id
    //         id: process.env.DOCS_GA_ID,
    //     },
    // ],
    // [
    //     '@vuepress/plugin-register-components',
    //     {
    //         componentsDir: path.resolve(__dirname, './components'),
    //     },
    // ],
    // only enable shiki plugin in production mode
    // [
    //     '@vuepress/plugin-shiki',
    //     {
    //         theme: 'dark-plus',
    //     },
    // ],
  ]
  // bundlerConfig: {
  //   rollupOptions: {
  //     output: {
  //       manualChunks: {
  //         vue: ['vue'],
  //         '@vueuse/core': ['@vueuse/core'],
  //         '@vue/devtools-api': ['@vue/devtools-api'],
  //         'vue-router': ['vue-router'],
  //         nprogress: ['nprogress'],
  //       }
  //     }
  //   }
  // }
})