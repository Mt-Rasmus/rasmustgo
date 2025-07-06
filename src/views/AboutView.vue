<script setup lang="ts">

import FooterComponent from '@/components/FooterComponent.vue';

</script>

<template>
  <div class="about px-[10vw]">
    <div
      class="mt-[30px] flex flex-col lg:flex-row w-full justify-center"
      style="font-family: 'Fredoka'"
    >
      <div class="w-full lg:w-[40%] mb-6 lg:mb-0">
        <img src="/src/assets/9.jpeg" class="w-full h-auto" />
      </div>
      <div class="w-full lg:w-[50%] lg:ml-6">
        <div class="mb-4 flex">
          I'm
          <div class="font-bold ml-1" style="color: #409EFF;">
            Rasmus Ståhl.
          </div>
        </div>
        <div class="mb-4">
          I'm a cartoonist based in Amsterdam, originally from Sweden.
        </div>
        <div class="mb-4">
          All of my cartoons are made entirely by me: writing, voices, artwork, animation, sound, and most of the music.
          I've been crafting cartoons like this for over 10 years.
        </div>
        <div class="mb-4">
          Alongside animation, I work professionally as a software developer, though my main focus and love is for animation and storytelling.
        </div>
        <div class="mb-4">
          I have a Bachelor's and a Master's degree in Media Technology and Engineering from Linköping University.
        </div>
        <div class="mb-4">
          <div class="mb-4">Feel free to reach out if you'd like to collaborate — or just say hi: </div>
          <a href="mailto:rasmus.stahl.47@gmail.com">
            <div class="font-bold" style="color: #409EFF;">rasmus.stahl.47@gmail.com</div>
          </a>
        </div>
        <div>Cheers!</div>
      </div>
    </div>
  </div>
  <FooterComponent class="mt-[40px] mb-[20px]" />
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
  }
}
</style>
