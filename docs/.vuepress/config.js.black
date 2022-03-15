const sidebar = require('./sidebar');
const nav = require('./nav');


module.exports = {
  lang: 'zh-CN',
  title: '笔记!',
  description: '君子藏器于身 待时而动 天下有道则见 无道则隐',
  base: '/notes/',

  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',

    sidebar: sidebar,
    navbar: nav,
  },

  bundler:
    // specify bundler via environment variable
    process.env.DOCS_BUNDLER ??
    // use vite by default
    '@vuepress/vite',
  // '@vuepress/webpack'
  bundlerConfig: {
    rollupOptions: {
      output: {
        manualChunks: {
          vue: ['vue'],
          '@vueuse/core': ['@vueuse/core'],
          '@vue/devtools-api': ['@vue/devtools-api'],
          'vue-router': ['vue-router'],
          nprogress: ['nprogress'],
        }
      }
    }
  }
}