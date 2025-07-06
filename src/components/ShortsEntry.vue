<script setup lang="ts">
import { useRoute } from 'vue-router';
import { shorts, sweShorts } from '../data/shorts';
import { type Video } from '../types/video';
import FooterComponent from '@/components/FooterComponent.vue';

const route = useRoute();

const videoId = route.params.id as string;
const video = <Video>shorts.concat(sweShorts).find(({ id }) => id === videoId);
</script>

<template>
  <div class="flex flex-col justify-center items-center w-full mt-7" style="font-family: 'Fredoka'">
    <div class="wrapper">
      <div class="video-container vertical">
        <iframe
          :src="`${video?.embedUrl}?autoplay=1&modestbranding=1&playsinline=1`"
          title="YouTube Shorts"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
      <div class="info mt-6 mb-5">
        <h1 class="text-xl font-bold mb-2" style="font-family: Poppins">{{ video?.title }}</h1>
        <p class="mb-2 whitespace-pre-line">{{ video?.description }}</p>
        <p class="mb-2"><strong>Role:</strong> {{ video?.role }}</p>
        <p>({{ video?.year }})</p>
      </div>
    </div>
    <FooterComponent class="mt-10 mb-5" />
  </div>
</template>

<style scoped>
.wrapper {
  width: 100%;
  max-width: 400px;
  padding: 0 16px;
}

.video-container.vertical {
  position: relative;
  width: 100%;
  padding-bottom: 177.78%; /* 9:16 aspect ratio */
  height: 0;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); /* optional: remove this line for completely flat look */
}

.video-container.vertical iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.info {
  font-family: Poppins, sans-serif;
  text-align: left;
}
</style>
