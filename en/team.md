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
      Team
    </template>
    <template #lead>
      ClipsNeko Linux is developed by ReSpring ClipsNeko Co., Ltd.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members />
</VPTeamPage>
