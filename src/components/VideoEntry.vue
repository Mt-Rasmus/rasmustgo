<script setup lang="ts">

import { useRoute } from 'vue-router';
import videos from '../data/videos';
import { type Video } from '../types/video'

const route = useRoute();

const videoId = route.params.id;
const video = <Video>videos.find(({ id }) => id === Number(videoId));

</script>

<template>
  <div class="flex justify-center w-full mt-7">
    <div class="wrapper">
      <div class="youtube-video">
        <div class="video-container">
          <iframe
            :src="video.embedUrl"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
      </div>
      <div class="mt-6">{{ video.title }}</div>
      <div>A video about...</div>
      <div>Credits:</div>
    </div>
  </div>
</template>

<style scoped>

.youtube-video {
  width: 70vw;
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
