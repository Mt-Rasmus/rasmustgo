<script setup lang="ts">

import reel from '../data/reel';
import FooterComponent from '@/components/FooterComponent.vue';

</script>

<template>
  <div class="flex justify-center w-full mt-7 mb-[75px]">
    <div class="wrapper">
      <div class="youtube-video">
        <div class="video-container">
          <iframe
            :src="reel.embedUrl"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
      </div>
    </div>
  </div>
  <FooterComponent class="mt-[40px] mb-[20px]" />
</template>

<style scoped>

.youtube-video {
  width: 75vw;
  margin: 0 auto;
}

.video-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

</style>
