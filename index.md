<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const map = {
    'zh-hans': '/zhs/',
    'zh-hant': '/zht/',
    'zh-cn': '/zhs/',
    'zh-sg': '/zhs/',
    'zh-tw': '/zht/',
    'zh-hk': '/zht/',
    'zh-mo': '/zht/',
    'zh': '/zhs/',
    'en': '/en/'
  }
  const langs = navigator.languages?.length ? navigator.languages : [navigator.language]
  let target = '/en/'
  for (const l of langs) {
    const k = (l || '').toLowerCase()
    if (map[k]) { target = map[k]; break }
    const base = k.split('-')[0]
    if (base === 'zh') { target = '/zhs/'; break }
    if (base === 'en') { target = '/en/'; break }
  }
  if (location.pathname.replace(/\/+$/, '/') !== target) {
    location.replace(target)
  }
})
</script>