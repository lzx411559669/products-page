<template>
  <div class="text-center">
    <!-- <h2>兰溪市金环工艺制品有限公司</h2> -->
    <div class=" text-lg py-2 bg-gray-500 sticky top-16">{{$t('工艺流程')}}</div>
    <div>
      <ProcessItem
        v-for="item in processes"
        :key="item.title"
        :title="item.title"
        :imgs="item.imgs"
      ></ProcessItem>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProcessItem from '@/components/factory/ProcessItem.vue';
import { ref } from 'vue';

const processes = ref([
  {
    title: '造料',
    imgs: ['1.png', '2.png']
  },
  {
    title: '挤出',
    imgs: ['1.png', '2.png', '3.png']
  },
  {
    title: '烫金',
    imgs: ['1.png', '2.png', '3.png']
  },
  {
    title: '切框',
    imgs: ['1.png', '2.png', '3.png']
  },
  {
    title: '拼框',
    imgs: ['1.png', '2.png', '3.png']
  },
  {
    title: '玻璃',
    imgs: ['1.png', '2.png', '3.png']
  },
  {
    title: '背板',
    imgs: ['1.png', '2.png', '3.png']
  },
  {
    title: '装配包装',
    imgs: ['1.png', '2.png', '3.png']
  },
  {
    title: '成品入库',
    imgs: ['1.png', '2.png', '3.png']
  }
]);
</script>

<style scoped></style>
