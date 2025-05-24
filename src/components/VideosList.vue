<script setup lang="ts">

import VideoEntry from './VideoListEntry.vue';

const videos = [
  {
    id: 1,
    url: 'https://youtu.be/xJMvZjDDcuo?si=uJBjRBRN5uysVsil',
    thumbnail: 'src/assets/thumbnails/SteveDogsThumbnail9.png',
    gifPreview: 'https://media.giphy.com/media/abc123/giphy.gif',
  },
  {
    id: 2,
    url: 'https://youtu.be/xJMvZjDDcuo?si=uJBjRBRN5uysVsil',
    thumbnail: 'src/assets/thumbnails/SteveDogsThumbnail9.png',
    gifPreview: 'https://media.giphy.com/media/abc123/giphy.gif',
  },
  {
    id: 3,
    url: 'https://youtu.be/xJMvZjDDcuo?si=uJBjRBRN5uysVsil',
    thumbnail: 'src/assets/thumbnails/SteveDogsThumbnail9.png',
    gifPreview: 'https://media.giphy.com/media/abc123/giphy.gif',
  },
  {
    id: 4,
    url: 'https://youtu.be/xJMvZjDDcuo?si=uJBjRBRN5uysVsil',
    thumbnail: 'src/assets/thumbnails/SteveDogsThumbnail9.png',
    gifPreview: 'https://media.giphy.com/media/abc123/giphy.gif',
  },
]

</script>

<template>
  <div>All dem videos n that</div>
  <div class="flex justify-center w-full">
    <div class="wrapper">
      <div v-for="video in videos" :key="video.id">
        <VideoEntry :video /> 
      </div> 
    </div>
  </div>


</template>

<style scoped>

.wrapper {
  display: grid;
  grid-template-columns: minmax(33%, auto) minmax(33%, auto)
}

</style>
