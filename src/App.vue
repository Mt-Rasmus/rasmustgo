<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="flex flex-row justify-center items-center mt-5 px-5 w-full">
      <div class="flex justify-start w-full">
        <img src="/src/assets/header/charsLEFT.png" class="w-[350px]"/>
      </div>
      <nav class="flex justify-center items-center text-4xl font-bold">
        <div class="pr-4">
          <RouterLink to="/" class="!text-black">Home</RouterLink>
        </div>
         <div>
          <RouterLink to="/about" class="!text-black">About</RouterLink>
        </div>       
      </nav>
      <div class="flex justify-end w-full">
        <img src="/src/assets/header/charsRIGHT.png" class="w-[350px]"/>
      </div>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

.wrapper {
  
}

</style>
