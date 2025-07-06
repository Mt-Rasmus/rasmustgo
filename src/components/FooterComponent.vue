<script setup lang="ts">
import SocialMediaIcon from './SocialMediaIcon.vue'

// Import icons directly
import instagramIcon from '@/assets/instagram-brands-solid.svg'
import instagramHoverIcon from '@/assets/instagram-brands-solid-blue.svg'

import youtubeIcon from '@/assets/youtube-brands-solid.svg'
import youtubeHoverIcon from '@/assets/youtube-brands-solid-blue.svg'

import tiktokIcon from '@/assets/tiktok-brands-solid.svg'
import tiktokHoverIcon from '@/assets/tiktok-brands-solid-blue.svg'

import gmailIcon from '@/assets/envelope-solid.svg'
import gmailHoverIcon from '@/assets/envelope-solid-blue.svg'

const icons = [
  {
    name: 'instagram',
    icon: instagramIcon,
    hoverIcon: instagramHoverIcon,
    action: () => window.open('https://www.instagram.com/rasmustgo/', '_blank'),
  },
  {
    name: 'youtube',
    icon: youtubeIcon,
    hoverIcon: youtubeHoverIcon,
    action: () => window.open('https://www.youtube.com/@rasmustgo', '_blank'),
  },
  {
    name: 'tiktok',
    icon: tiktokIcon,
    hoverIcon: tiktokHoverIcon,
    action: () => window.open('https://www.tiktok.com/@rasmustgo', '_blank'),
  },
  {
    name: 'gmail',
    icon: gmailIcon,
    hoverIcon: gmailHoverIcon,
    action: () => {
      window.location.href = 'mailto:rasmus.stahl.47@gmail.com'
    },
  },
]
</script>

<template>
  <div class="flex justify-center">
    <div v-for="(icon, index) in icons" :key="index" class="mb-4">
      <SocialMediaIcon :icon />
    </div>
  </div>
</template>

<style scoped>
::v-deep(.el-tabs__nav-wrap::after) {
  display: none;
}
</style>
