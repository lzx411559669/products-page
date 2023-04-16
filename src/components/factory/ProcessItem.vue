<template>
  <div class="text-center">
    <div class=" bg-gray-300 text-center ">
        <h3 style="" class=" late-200 py-2 text-base font-thin">{{ $t(title) }}</h3>
    </div>
    <div>
      <!-- <img class=" w-[90%] my-1" v-for="item in imgs" :key="item" :src="getAssetsFile(item,`../assets/factory/${title}/`)" alt="" srcset="" /> -->
      <img class=" rounded-md w-[90%] my-1" v-for="item in imgs" :key="item" v-lazyLoad="getUrl(`/factory/${title}/${item}`)" alt="" srcset="" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { getAssetsFile } from '@/utils/index'
const props = defineProps<{
  title: string;
  imgs: string[];
}>();
const prefix = import.meta.env.VITE_OSS_PREFIX

const getUrl = (name:string) => { 
    return `${prefix}${name}`
}

</script>

<style lang="scss" scoped></style>
