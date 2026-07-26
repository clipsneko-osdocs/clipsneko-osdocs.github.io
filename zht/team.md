---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://blog.zlicdt.top/img/avatar.webp',
    name: 'zlicdt',
    title: 'Creator and Team Leader, Core Developer',
    links: [
      { icon: 'github', link: 'https://github.com/zlicdt' },
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      團隊資訊
    </template>
    <template #lead>
      ClipsNeko Linux 由 ReSpring ClipsNeko Co., Ltd. 開發。
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members />
</VPTeamPage>
