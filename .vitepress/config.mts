import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ClipsNeko Linux Documents",
  description: "ClipsNeko Linux documents and wiki site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documents', link: '/prepare' }
    ],

    sidebar: [
      {
        text: 'Installation',
        items: [
          { text: 'Prepare', link: '/prepare' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ReSpringClipsNeko/' }
    ],

    footer: {
      message: 'ClipsNeko Linux',
      copyright: 'Copyright © 2026 ReSpring ClipsNeko Co., Ltd.'
    }
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en',
    },
    zhs: {
      label: '简体中文',
      lang: 'zh-Hans',
      link: '/zhs/',
      themeConfig: {
        nav: [
          { text: '主页', link: './' },
          { text: '文档', link: './prepare' }
        ],

        sidebar: [
          {
            text: '安装',
            items: [
              { text: '准备', link: './prepare' },
            ]
          }
        ],

        socialLinks: [
          { icon: 'github', link: 'https://github.com/ReSpringClipsNeko/' }
        ],

        footer: {
          message: 'ClipsNeko Linux',
          copyright: 'Copyright © 2026 ReSpring ClipsNeko Co., Ltd.'
        }
      }
    },
    zht: {
      label: '繁體中文',
      lang: 'zh-Hant',
      link: '/zht/'
    }
  }
})
