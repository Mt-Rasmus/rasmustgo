<script setup lang="ts">
import VideoListEntry from './VideoListEntry.vue'
import ShortListEntry from './ShortListEntry.vue'
import { RouterLink } from 'vue-router'
import videos from '../data/videos'
import { shorts, sweShorts } from '../data/shorts'
</script>

<template>
  <div class="flex flex-col justify-center items-center w-full">
    <div class="mb-6 text-3xl mb-4" style="font-family: Poppins">Short films</div>
    <div class="wrapper">
      <div v-for="video in videos" :key="video.id">
        <RouterLink :to="`/videos/${video.id}`">
          <VideoListEntry :video="video" />
        </RouterLink>
      </div>
    </div>
    <div class="text-3xl my-8" style="font-family: Poppins">Vertical Shorts</div>
    <div class="shorts-wrapper">
      <div v-for="short in shorts" :key="short.id">
        <RouterLink :to="`/shorts/${short.id}`">
          <ShortListEntry :video="short" />
        </RouterLink>
      </div>
    </div>
    <div class="text-3xl my-8 sm:text-2xl" style="font-family: Poppins">
      Vertical Shorts (in Swedish)
    </div>
    <div class="shorts-wrapper">
      <div v-for="short in sweShorts" :key="short.id">
        <RouterLink :to="`/shorts/${short.id}`">
          <ShortListEntry :video="short" />
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: repeat(1, minmax(200px, 1fr));
  gap: 24px;
  width: 100%;
  max-width: 72vw;
  padding: 0 16px;
}

@media (min-width: 1024px) {
  .wrapper {
    grid-template-columns: repeat(2, minmax(200px, 1fr));
  }
}

.shorts-wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  width: 100%;
  max-width: 72vw;
  padding: 0 125px;
  margin: 0 auto;
}

@media (max-width: 640px) {
  .shorts-wrapper {
    grid-template-columns: repeat(1, minmax(200px, 1fr));
  }
  .wrapper {
    max-width: 85vw;
  }
}
</style>
