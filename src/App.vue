<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="flex justify-center mt-5">
      <nav class="flex justify-center">
        <div class="pr-4">
          <RouterLink to="/" class="!text-black">Home</RouterLink>
        </div>
         <div>
          <RouterLink to="/about" class="!text-black">About</RouterLink>
        </div>       
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

.wrapper {
  
}

</style>
