<script setup lang="ts">
import { type Video } from '../types/video'

defineProps<{
  video: Video;
}>();
</script>

<template>
  <div class="relative w-full overflow-hidden cursor-pointer group vertical-preview">
    <img
      :src="video?.thumbnail"
      class="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
    />
    <img
      :src="video?.gifPreview"
      class="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
    />
    <div
      class="absolute inset-0 bg-[rgba(0,0,0,0.25)] flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
    >
      <p class="text-white font-bold text-2xl px-4 text-center">
        {{ video?.title }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.vertical-preview {
  position: relative;
  width: 100%;
  padding-bottom: 177.78%; /* 9:16 aspect ratio */
  height: 0;
}
.vertical-preview > * {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
