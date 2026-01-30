<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'
import { ref } from 'vue'

const currentPage = ref('')
const router = useRouter()

const menuOpen = ref(false)

const handleClick = (tab: { paneName: string }) => {
  menuOpen.value = false
  router.push(`/${tab.paneName}`)
}

const goToInstagram = () => {
  window.open('https://www.instagram.com/rasmustgo/', '_blank')
}
</script>

<template>
  <header>
    <div class="flex flex-row justify-between items-center mt-5 px-4 md:px-9 w-full h-[75px]">
      <!-- Logo -->
      <div class="flex justify-start items-center">
        <img
          src="/src/assets/header/logo2-1.png"
          class="w-[150px] cursor-pointer"
          @click="handleClick({ paneName: '' })"
        />
      </div>

      <!-- Desktop Tabs -->
      <div class="hidden md:flex">
        <el-tabs v-model="currentPage" class="demo-tabs custom-tabs" @tab-click="handleClick">
          <el-tab-pane label="Work" name=""></el-tab-pane>
          <el-tab-pane label="Reel" name="reel"></el-tab-pane>
          <el-tab-pane label="Info" name="info"></el-tab-pane>
        </el-tabs>

        <!-- Instagram icon -->
        <div class="group relative w-[20px] h-[20px] mt-[9px] ml-8 cursor-pointer">
          <img
            src="/src/assets/instagram-brands-solid.svg"
            class="absolute top-0 left-0 w-full h-full block group-hover:hidden"
            alt="Instagram"
          />
          <img
            src="/src/assets/instagram-brands-solid-blue.svg"
            class="absolute top-0 left-0 w-full h-full hidden group-hover:block"
            alt="Instagram (hover)"
            @click="goToInstagram"
          />
        </div>
      </div>
      <!-- Mobile burger -->
      <div class="flex md:hidden items-center relative">
        <button
          class="text-3xl bburger-icon hover:text-[#409EFF] cursor-pointer"
          @click="menuOpen = !menuOpen"
        >
          ☰
        </button>
        <div
          v-if="menuOpen"
          class="absolute top-[30px] right-0 bg-white shadow-lg z-50 w-[160px] py-2"
          style="font-family: 'Poppins', sans-serif"
        >
          <div
            class="px-4 py-2 cursor-pointer hover:text-[#409EFF] hover:underline"
            @click="handleClick({ paneName: '' })"
          >
            Work
          </div>
          <div
            class="px-4 py-2 cursor-pointer hover:text-[#409EFF] hover:underline"
            @click="handleClick({ paneName: 'reel' })"
          >
            Reel
          </div>
          <div
            class="px-4 py-2 cursor-pointer hover:text-[#409EFF] hover:underline"
            @click="handleClick({ paneName: 'info' })"
          >
            Info
          </div>
          <div
            class="px-4 py-2 cursor-pointer hover:text-[#409EFF] hover:underline"
            @click="goToInstagram"
          >
            Instagram
          </div>
        </div>
      </div>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
::v-deep(.el-tabs__nav-wrap::after) {
  display: none;
}
</style>
