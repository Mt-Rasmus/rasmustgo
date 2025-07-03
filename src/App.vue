<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'
import { ref } from 'vue';

const currentPage = ref('')
const router = useRouter()

const handleClick = (tab: { paneName: unknown; }) => {
  console.log(tab?.paneName )
  router.push(`/${tab.paneName}`);
}

const goToInstagram = () => {
  window.open('https://www.instagram.com/rasmustgo/', '_blank');
}

</script>

<template>
  <header>
    <div class="flex flex-row justify-center items-center mt-5 px-9 w-full h-[75px]">
      <div class="flex justify-start w-full">
        <img src="/src/assets/header/logo2-1.png" class="w-[150px]"/>
      </div>
      <div class="flex">
        <el-tabs v-model="currentPage" class="demo-tabs custom-tabs" @tab-click="handleClick">
          <el-tab-pane label="Work" name=""></el-tab-pane>
          <el-tab-pane label="Reel" name="reel"></el-tab-pane>
          <el-tab-pane label="Info" name="info"></el-tab-pane>
        </el-tabs>
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
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

::v-deep(.el-tabs__nav-wrap::after) {
  display: none;
}

</style>
