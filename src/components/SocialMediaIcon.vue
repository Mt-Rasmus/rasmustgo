<script setup lang="ts">

type Icon = {
  name: string,
  icon: string,
  hoverIcon: string,
  action: () => void,
}

const props = defineProps<{
  icon: Icon;
}>();

</script>

<template>
  <div class="group relative w-[20px] h-[20px] mt-[9px] ml-8 cursor-pointer">
    <img
      :src="props.icon.icon"
      class="absolute top-0 left-0 w-full h-full block group-hover:hidden"
      alt="Instagram"
    />
    <img
      :src="props.icon.hoverIcon"
      class="absolute top-0 left-0 w-full h-full hidden group-hover:block"
      alt="Instagram (hover)"
      @click="props.icon.action"
    />
  </div>
</template>

<style scoped>

::v-deep(.el-tabs__nav-wrap::after) {
  display: none;
}

</style>
