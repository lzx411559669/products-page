<template>
  <div
    class="w-full flex justify-center items-center -mt-25"
    :style="`height:${height};width:${width}`"
  >
    <div>
      <div class="progress-9" :style="styles"></div>
      <!-- <div class=" text-center mt-2">{{ tips || '玩命加载中' }}</div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  styles: string;
  height: string;
  width: string;
  tips?: string;
}>();
</script>

<style scoped>
.progress-9 {
  --r1: 154%;
  --r2: 68.5%;
  border-radius: 50%;
  background: radial-gradient(
        var(--r1) var(--r2) at top,
        #0000 79.5%,
        #269af2 80%
      )
      center left,
    radial-gradient(var(--r1) var(--r2) at bottom, #269af2 79.5%, #0000 80%)
      center center,
    radial-gradient(var(--r1) var(--r2) at top, #0000 79.5%, #269af2 80%) center
      right,
    #ccc;
  background-size: 50.5% 220%;
  background-position: -100% 0%, 0% 0%, 100% 0%;
  background-repeat: no-repeat;
  animation: p9 1s infinite linear;
}
@keyframes p9 {
  33% {
    background-position: 0% 33%, 100% 33%, 200% 33%;
  }
  66% {
    background-position: -100% 66%, 0% 66%, 100% 66%;
  }
  100% {
    background-position: 0% 100%, 100% 100%, 200% 100%;
  }
}
</style>
