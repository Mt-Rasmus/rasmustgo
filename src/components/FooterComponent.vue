<script setup lang="ts">

import SocialMediaIcon from './SocialMediaIcon.vue';

const icons = [
  {
    name: 'instagram',
    icon: './src/assets/instagram-brands-solid.svg',
    hoverIcon: './src/assets/instagram-brands-solid-blue.svg',
    action: () => window.open('https://www.instagram.com/rasmustgo/', '_blank')
  },
  {
    name: 'youtube',
    icon: './src/assets/youtube-brands-solid.svg',
    hoverIcon: './src/assets/youtube-brands-solid-blue.svg',
    action: () => window.open('https://www.instagram.com/rasmustgo/', '_blank')
  },
  {
    name: 'tiktok',
    icon: './src/assets/tiktok-brands-solid.svg',
    hoverIcon: './src/assets/tiktok-brands-solid-blue.svg',
    action: () => window.open('https://www.instagram.com/rasmustgo/', '_blank')
  },
  {
    name: 'gmail',
    icon: './src/assets/envelope-solid.svg',
    hoverIcon: './src/assets/envelope-solid-blue.svg',
    action: () => window.open('https://www.instagram.com/rasmustgo/', '_blank')
  },
]

</script>

<template>
  <div class="flex justify-center">
    <div v-for="(icon, index) in icons" :key="index">
      <SocialMediaIcon :icon/>
    </div>
  </div>
</template>

<style scoped>

::v-deep(.el-tabs__nav-wrap::after) {
  display: none;
}

</style>
