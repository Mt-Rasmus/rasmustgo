<script setup lang="ts">

import { useRoute } from 'vue-router';
import videos from '../data/videos';
import { type Video } from '../types/video'

const route = useRoute();

const videoId = route.params.id;
const video = <Video>videos.find(({ id }) => id === Number(videoId));

</script>

<template>
  <div class="flex justify-center w-full">
    <div class="wrapper">
      <div>Heyyyy dis a video Entry page</div>
      <div>{{ `And the ID of the video is ${videoId}` }}</div>
      <div class="youtube-video">
        <iframe
          width="560"
          height="315"
          :src="video.embedUrl"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    </div>
  </div>
</template>

<style scoped>

.wrapper {

}
</style>
