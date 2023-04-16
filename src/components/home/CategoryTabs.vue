<template>
  <div class="flex justify-between text-sm pt-2 sticky top-16 bg-white shadow">
    <div :class="`overflow-hidden flex-1 categorys ${more ? 'h-50' : 'h-24'}`">
      <div class="flex flex-row flex-wrap">
        <div
          v-for="item in categorys"
          class="category py-2 px-3 mx-1 text-center"
          :class="currentCategoryId === item.id ? ' bg-slate-200' : ''"
          @click="setCurrentCategoryId(item.id)"
        >
          <SvgIcon
            class="w-11 h-11"
            :class="currentCategoryId === item.id ? ' bg-slate-200' : ''"
            :name="item.categoryName"
          ></SvgIcon>
          <!-- <img class="w-8 h-8"  :class="currentCategoryId===item.id?' bg-slate-200':''" :src="getAssetsFile(item.icon,'../assets/category/')" alt="" /> -->
          <div class="mt-1">{{ $t(item.categoryName) }}</div>
        </div>
      </div>
    </div>
    <div class="flex h-20 items-center" @click="toggleMore">
      <div class="flex-1">{{$t('更多')}}</div>
      <div
        v-show="!more"
        class="i-material-symbols:chevron-right-sharp text-xl"
      ></div>
      <div
        v-show="more"
        class="i-material-symbols:keyboard-arrow-down-sharp text-xl"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHome } from '@/hooks/useHome';
import { getAssetsFile } from '@/utils/index';
import { ref } from 'vue';

const props = defineProps<{
  categorys: Array<any>;
  currentCategoryId: any;
}>();

const emits = defineEmits(['update:currentCategoryId']);

const more = ref<Boolean>(false);

const setCurrentCategoryId = (id: any) => {
  // if (more.value) {
  //     toggleMore()
  // }
  sessionStorage.setItem('currentCategoryId', id);
  emits('update:currentCategoryId', id);
};

const toggleMore = () => {
  more.value = !more.value;
};
</script>

<style lang="scss" scoped>
.categorys {
  transition: height 0.3s ease-in;
}
</style>
