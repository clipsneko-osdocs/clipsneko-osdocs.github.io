import { defineConfig } from 'vitepress'
import { en } from './en'
import { zhs } from './zhs'
import { zht } from './zht'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'ClipsNeko Linux 文档',
  description: 'ClipsNeko Linux 中文文档',

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      themeConfig: en
    },
    zhs: {
      label: '简体中文',
      lang: 'zh-Hans',
      link: '/zhs/',
      themeConfig: zhs
    },
    zht: {
      label: '繁體中文',
      lang: 'zh-Hant',
      link: '/zht/',
      themeConfig: zht
    }
  }
})