<script setup lang="ts">

import { useRoute } from 'vue-router';

const route = useRoute();

const videoId = route.params.id;

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
          :src="'https://www.youtube.com/embed/aRIY36bBk78'"
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
