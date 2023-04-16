<template>
  <div class="layout">
    <Header></Header>
    <div class="">
      <RouterView />
    </div>
    <nut-backtop :distance="200" :bottom="30">
      <div class="i-material-symbols:vertical-align-top-rounded text-2xl"></div>
    </nut-backtop>
    <!-- <Footer /> -->
  </div>
</template>

<script setup lang="ts">
import Footer from './Footer.vue';
import Header from './Header.vue';
</script>

<style lang="scss" scoped>
::v-deep .nut-backtop.show {
  width: 80px;
  height: 80px;
}
.layout {
}
</style>
