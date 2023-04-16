<template>
  <div>
    <CategoryTabs
      :categorys="categorys"
      v-model:current-category-id="currentCategoryId"
    ></CategoryTabs>
    <Transition >
      <div v-if="loading" class="px-2">
        <!-- <nut-skeleton
        width="97vw"
        height="15px"
        title
        animated
        row="15"
        class="item"
      >
      </nut-skeleton> -->
        <Loading
          height="90vh"
          width="100%"
          styles="width:100px;height:100px"
        ></Loading>
      </div>
      <!-- <div class="border border-gray-300 w-full"></div> -->
      <div v-else>
        <Products :products="currentProducts"></Products>
      </div>
    </Transition>

    <!-- <nut-tabs v-model="state.tab11value" :title-gutter="30" title-scroll>
      <template v-slot:titles>
        <div
          class="nut-tabs__titles-item"
          @click="state.tab11value = item.key"
          :class="{ active: state.tab11value == item.key }"
          :key="item.key"
          style="margin: 0px 15px;height:80px"
          v-for="item in kinds"
        >
          <div>
            <div>
              <img class="w-5" src="@/common/assets/logo.png" alt="" />
            </div>
            <div>
              <span class="nut-tabs__titles-item__text">{{ item.tab }}</span>
              <span class="nut-tabs__titles-item__line "></span>
            </div>
          </div>
        </div>
      </template>
      <nut-tab-pane v-for="item in kinds" :title="item.tab">
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
      </nut-tab-pane>
    </nut-tabs> -->
  </div>
</template>

<script setup lang="ts">
import Products from '@/components/home/Products.vue';
import CategoryTabs from '@/components/home/CategoryTabs.vue';
import { reactive, ref } from 'vue';
import { useHome } from '@/hooks/useHome';
import Loading from '@/components/Layout/Loading.vue';

const { categorys, currentCategoryId, currentProducts, loading } = useHome();

const state = reactive({
  tab11value: 'desk'
});
const kinds = ref([
  {
    tab: '桌子',
    key: 'desk'
  },
  {
    tab: '椅子',
    key: '2'
  },
  {
    tab: '玄关',
    key: '3'
  },
  {
    tab: '梳妆台',
    key: '4'
  },
  {
    tab: '梳妆台',
    key: '5'
  },
  {
    tab: '玄关',
    key: '3'
  },
  {
    tab: '梳妆台',
    key: '4'
  },
  {
    tab: '梳妆台',
    key: '5'
  }
]);
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
