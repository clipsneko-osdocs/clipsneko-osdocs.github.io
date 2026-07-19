import type { DefaultTheme } from 'vitepress'
import { socialLinks, footer } from './shared'

export const en: DefaultTheme.Config = {
  nav: [
    { text: 'Home', link: '/en/' },
    { text: 'Installation Guide', link: '/en/prepare' }
  ],

  sidebar: [
    {
      text: 'Installation',
      items: [
        { text: 'Prepare', link: '/en/prepare' },
        { text: 'Launch the installer', link: '/en/installer' },
        { text: 'Language and locale settings', link: '/en/locale' },
        { text: 'Network settings', link: '/en/network' },
        { text: 'Mirror selection', link: '/en/mirror' },
        { text: 'Disk partitioning', link: '/en/disk' },
        { text: 'Select a kernel', link: '/en/kernel' },
        { text: 'Select a graphics driver', link: '/en/nvidia' },
        { text: 'Time zone settings', link: '/en/timezone' },
        { text: 'User settings', link: '/en/account' },
        { text: 'Hostname settings', link: '/en/hostname' },
        { text: 'Confirm the installation', link: '/en/summary' }
      ]
    }
  ],

  socialLinks,
  footer
}
