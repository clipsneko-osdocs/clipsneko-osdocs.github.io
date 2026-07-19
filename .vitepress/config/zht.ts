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
        { text: '準備', link: '/zht/prepare' },
        { text: '啟動安裝程式', link: '/zht/installer' },
        { text: '語言與本地化設定', link: '/zht/locale' },
        { text: '網路設定', link: '/zht/network' },
        { text: '映象選擇', link: '/zht/mirror' },
        { text: '磁碟分割', link: '/zht/disk' },
        { text: '選擇核心', link: '/zht/kernel' },
        { text: '選擇顯示卡驅動', link: '/zht/nvidia' },
        { text: '時區設定', link: '/zht/timezone' },
        { text: '使用者設定', link: '/zht/account' },
        { text: '主機名設定', link: '/zht/hostname' },
        { text: '安裝確認', link: '/zht/summary' }
      ]
    }
  ],

  socialLinks,
  footer
}
