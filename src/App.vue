<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'
import { ref } from 'vue';

const currentPage = ref('')
const router = useRouter()

const handleClick = (tab: any) => {
  console.log(tab?.paneName )
  router.push(`/${tab.paneName}`);
}

</script>

<template>
  <header>
    <div class="flex flex-row justify-center items-center mt-5 px-5 w-full h-[200px]">
      <div class="flex justify-start w-full">
        <img src="/src/assets/header/logo2-1.png" class="w-[150px]"/>
      </div>
      <el-tabs v-model="currentPage" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="Work" name=""></el-tab-pane>
        <el-tab-pane label="Reel" name="reel"></el-tab-pane>
        <el-tab-pane label="Info" name="info"></el-tab-pane>
      </el-tabs>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

.wrapper {
  
}

</style>
