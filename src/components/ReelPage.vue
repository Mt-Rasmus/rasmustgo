<script setup lang="ts">

import reel from '../data/reel';
import FooterComponent from '@/components/FooterComponent.vue';

</script>

<template>
  <div class="flex flex-col min-h-[88vh] px-[10vw]" style="font-family: Poppins;">
    <div class="flex-grow flex flex-col justify-top mt-[28px] items-center w-full mb-[75px]">
      <div class="mt-5 text-3xl mb-6">Showreel</div>
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
  </div>
</template>

<style scoped>
.youtube-video {
  width: 75vw;
  margin: 0 auto;
}

@media (max-width: 640px) {
  .youtube-video {
    width: 90vw;
    margin: 0 auto;
  }
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
