import type { NavbarConfig } from '@vuepress/theme-default';

export const navbar: NavbarConfig = [
  {
    text: '公众号日常',
    link: '/pmpFragments/1.md',
  },
  {
    text: '面授课程',
    link: '/pmpClass/1.md',
    // children: [
    //   {
    //     text: '课程笔记',
    //     link: '/pmpClass/1.md',
    //   }
    // ]
  }
]