import type { NavbarConfig } from '@vuepress/theme-default';

export const navbar: NavbarConfig = [
  {
    text: 'pmpFragments',
    children: [
      {
        text: '碎片整理',
        link: '/pmpFragments/1.md',
      }
    ]
  },
  {
    text: 'pmpClass',
    children: [
      {
        text: '课程笔记',
        link: '/pmpClass/1.md',
      }
    ]
  }
]