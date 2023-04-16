<template>
  <nut-tabbar bottom @tab-switch="tabSwitch">
    <nut-tabbar-item tab-title="目录" to="/">
      <template #icon="props">
        <div class="i-material-symbols:home-outline text-lg"></div>
      </template>
    </nut-tabbar-item>
    <nut-tabbar-item tab-title="工厂环境" to="/factory">
      <template #icon="props">
        <!-- <img :src="props.active ? icon.active : icon.unactive" alt="" /> -->
        <div class="i-material-symbols:factory text-lg"></div>
      </template>
    </nut-tabbar-item>
    <nut-tabbar-item tab-title="联系我们" to="/contact">
      <template #icon="props">
        <!-- <img :src="props.active ? icon.active : icon.unactive" alt="" /> -->
        <div class="i-material-symbols:android-contacts text-lg"></div>
      </template>
    </nut-tabbar-item>
  </nut-tabbar>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const tabSwitch = (item: any, index: any) => {
  console.log(item, index);
};
</script>

<style scoped></style>
