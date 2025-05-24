<script setup lang="ts">

import VideoEntry from './VideoListEntry.vue';
import { RouterLink } from 'vue-router';
import videos from '../data/videos';

</script>

<template>
  <div class="flex justify-center w-full">
    <div class="wrapper">
      <div v-for="video in videos" :key="video.id">
        <RouterLink :to="String(video.id)">
          <VideoEntry :video />
        </RouterLink>

      </div>
    </div>
  </div>
</template>

<style scoped>

.wrapper {
  display: grid;
  grid-template-columns: repeat(2, minmax(200px, 1fr));
  gap: 24px;
  width: 100%;
  max-width: 72vw;
  padding: 0 16px;
}
</style>
