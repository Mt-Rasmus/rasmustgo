<script setup lang="ts">

import VideoEntry from './VideoListEntry.vue';
import { RouterLink } from 'vue-router';

const videos = [
  {
    id: 1,
    url: 'https://www.youtube.com/watch?v=xJMvZjDDcuo',
    embedUrl: 'https://www.youtube.com/embed/xJMvZjDDcuo',
    thumbnail: 'src/assets/thumbnails/SteveDogsThumbnail9.png',
    gifPreview: 'https://media.giphy.com/media/abc123/giphy.gif',
  },
  {
    id: 2,
    url: 'https://youtu.be/xJMvZjDDcuo?si=uJBjRBRN5uysVsil',
    embedUrl: 'https://www.youtube.com/embed/xJMvZjDDcuo',
    thumbnail: 'src/assets/thumbnails/Fancy.png',
    gifPreview: 'https://media.giphy.com/media/abc123/giphy.gif',
  },
  {
    id: 3,
    url: 'https://www.youtube.com/watch?v=FxZQG52SuWo',
    embedUrl: 'https://www.youtube.com/embed/FxZQG52SuWo',
    thumbnail: 'src/assets/thumbnails/Perennial.png',
    gifPreview: 'https://media.giphy.com/media/abc123/giphy.gif',
  },
  {
    id: 4,
    url: 'https://www.youtube.com/watch?v=RSldWKGYfEs',
    embedUrl: 'https://www.youtube.com/embed/RSldWKGYfEs',
    thumbnail: 'src/assets/thumbnails/TheInterview.png',
    gifPreview: 'https://media.giphy.com/media/abc123/giphy.gif',
  },
  {
    id: 5,
    url: 'https://www.youtube.com/watch?v=OnmXfh_fqkg',
    embedUrl: 'https://www.youtube.com/embed/OnmXfh_fqkg',
    thumbnail: 'src/assets/thumbnails/gains.png',
    gifPreview: 'https://media.giphy.com/media/abc123/giphy.gif',
  },
  {
    id: 6,
    url: 'https://www.youtube.com/watch?v=-WWquHtph5A',
    embedUrl: 'https://www.youtube.com/embed/-WWquHtph5A',
    thumbnail: 'src/assets/thumbnails/Smeagol-Arnold.png',
    gifPreview: 'https://media.giphy.com/media/abc123/giphy.gif',
  },
  {
    id: 7,
    url: 'https://www.youtube.com/watch?v=aRIY36bBk78',
    embedUrl: 'https://www.youtube.com/embed/aRIY36bBk78',
    thumbnail: 'src/assets/thumbnails/TheGhost.png',
    gifPreview: 'https://media.giphy.com/media/abc123/giphy.gif',
  },
]

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
