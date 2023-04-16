<template>
  <div class="pl-2 py-2 relative">
    <div @click="goBack" class="i-material-symbols:arrow-back-ios-new-rounded text-2xl absolute top-2 left-0"></div>
    <div class=" text-center text-base" v-if="title">
      {{title}}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

defineProps<{
  title?:string
}>()

const router = useRouter();

const goBack = () => { 
    router.go(-1)
}

</script>

<style scoped></style>
