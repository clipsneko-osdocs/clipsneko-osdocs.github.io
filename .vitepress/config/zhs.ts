import type { DefaultTheme } from 'vitepress'
import { socialLinks, footer } from './shared'

export const zhs: DefaultTheme.Config = {
  nav: [
    { text: '主页', link: '/zhs/' },
    { text: '安装教程', link: '/zhs/prepare' }
  ],

  sidebar: [
    {
      text: '安装',
      items: [
        { text: '准备', link: '/zhs/prepare' },
        { text: '启动安装程序', link: '/zhs/installer' },
        { text: '语言与本地化', link: '/zhs/locale' },
        { text: '网络设置', link: '/zhs/network'}
      ]
    }
  ],

  socialLinks,
  footer
}