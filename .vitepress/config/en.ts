import type { DefaultTheme } from 'vitepress'
import { socialLinks, footer } from './shared'

export const en: DefaultTheme.Config = {
  nav: [
    { text: 'Home', link: '/en/' },
    { text: 'Documents', link: '/en/prepare' }
  ],

  sidebar: [
    {
      text: 'Installation',
      items: [
        { text: 'Prepare', link: '/en/prepare' }
      ]
    }
  ],

  socialLinks,
  footer
}