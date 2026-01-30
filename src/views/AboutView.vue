<script setup lang="ts">
import FooterComponent from '@/components/FooterComponent.vue'
</script>

<template>
  <div class="flex flex-col min-h-[88vh] px-[10vw]" style="font-family: 'Fredoka'">
    <main class="flex-grow mt-[30px] flex flex-col md:flex-row justify-center w-full">
      <!-- Image block -->
      <div class="w-full md:w-[35%] mb-6 md:mb-0">
        <img src="/src/assets/9.png" class="w-full h-auto" />
      </div>

      <!-- Text block -->
      <div class="w-full md:w-[50%] md:ml-6">
        <div class="mb-4 flex">
          I'm
          <div class="font-bold ml-1" style="color: #409eff">Rasmus Ståhl.</div>
        </div>
        <div class="mb-4">I'm a cartoonist based in Amsterdam, originally from Sweden.</div>
        <div class="mb-4">
          All of my cartoons are made entirely by me: writing, voices, artwork, animation, sound,
          and most of the music. I've been crafting cartoons like this for over 10 years.
        </div>
        <div class="mb-4">
          Alongside animation, I work professionally as a software developer, though my main focus
          and love is for animation and storytelling.
        </div>
        <div class="mb-4">
          I have a Bachelor's and a Master's degree in Media Technology and Engineering from
          Linköping University.
        </div>
        <div class="mb-4">
          <div class="mb-4">
            Feel free to reach out if you'd like to collaborate — or just say hi:
          </div>
          <a href="mailto:rasmus.stahl.47@gmail.com">
            <div class="font-bold" style="color: #409eff">rasmus.stahl.47@gmail.com</div>
          </a>
        </div>
        <div>Cheers!</div>
      </div>
    </main>

    <!-- Footer -->
    <FooterComponent class="mt-[40px] mb-[20px]" />
  </div>
</template>
