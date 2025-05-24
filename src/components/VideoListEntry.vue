<script setup lang="ts">
defineProps<{
  video: {
    thumbnail: string;
    gifPreview: string;
  };
}>();
</script>

<template>
  <div class="w-[320px] h-[180px] bg-amber-600 border cursor-pointer relative overflow-hidden">
    <img
      :src="video.thumbnail"
      class="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 hover:opacity-0"
    />
    <img
      :src="video.gifPreview"
      class="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 hover:opacity-100"
    />
  </div>
</template>
