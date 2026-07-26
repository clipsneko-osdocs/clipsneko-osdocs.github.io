import { defineConfig } from 'vitepress'
import { en } from './en'
import { zhs } from './zhs'
import { zht } from './zht'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head:  [
    ['link', { rel: 'icon', href: '/logo.svg' }]
  ],

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      themeConfig: en,
      title: 'ClipsNeko Linux Documents'
    },
    zhs: {
      label: '简体中文',
      lang: 'zh-Hans',
      link: '/zhs/',
      themeConfig: zhs,
      title: 'ClipsNeko Linux 文档',
    },
    zht: {
      label: '繁體中文',
      lang: 'zh-Hant',
      link: '/zht/',
      themeConfig: zht,
      title: 'ClipsNeko Linux 文件'
    }
  }
})