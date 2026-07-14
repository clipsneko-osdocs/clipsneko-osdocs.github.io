import type { DefaultTheme } from 'vitepress'
import { socialLinks, footer } from './shared'

export const zht: DefaultTheme.Config = {
  nav: [
    { text: '首頁', link: '/zht/' },
    { text: '安裝教學', link: '/zht/prepare' }
  ],

  sidebar: [
    {
      text: '安裝',
      items: [
        { text: '準備', link: '/zht/prepare' }
      ]
    }
  ],

  socialLinks,
  footer
}