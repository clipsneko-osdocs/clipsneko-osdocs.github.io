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
      团队信息
    </template>
    <template #lead>
      ClipsNeko Linux 由 ReSpring ClipsNeko Co., Ltd. 开发。
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members />
</VPTeamPage>