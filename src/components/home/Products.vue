<template>
  <div v-if="products?.length > 0" class="page">
    <div v-for="product in products">
      <div
        @click="toProductInfo(product.id)"
        class="product-box flex justify-between p-2 px-5 my-3"
      >
        <div class="w-full">
          <div class="text-3xl font-bold mb-2">{{ product.title }}</div>
          <div>
            <img
              class="w-full object-cover"
              :src="
                encodeURI(
                  getUrl(
                    `/products/${product.categoryId}/${product.title}/封面图/${product.leftImg}`
                  )
                ).replace(/\+/g, '%2B')
              "
              alt=""
            />
          </div>
        </div>
        <div class="mt-11 w-full">
          <img
            class="w-full ml-2"
            :src="
              encodeURI(
                getUrl(
                  `/products/${product.categoryId}/${product.title}/封面图/${product.rightImg}`
                )
              ).replace(/\+/g, '%2B')
            "
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="text-center text-sm text-gray-500 py-4">{{ $t('已滑至最底部') }}</div>
  </div>

  <div v-else>
    <nut-empty :description="$t('无内容')"></nut-empty>
  </div>
  <nut-image-preview :show="showPreview" :images="imgData" @close="hideFn" />
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { getAssetsFile } from '@/utils/index';
import { computed, ref } from 'vue';

import { useOss } from '@/hooks/useOss';

const { getUrl } = useOss();

const props = defineProps<{
  products: any;
}>();

const router = useRouter();

const toProductInfo = (id: string) => {
  router.push(`/product/${id}`);
};

const viewImg = (url: string) => {
  currentImgUrl.value = url;
  showPreview.value = true;
};

const showPreview = ref(false);

const currentImgUrl = ref('');

const imgData = computed(() => {
  return [
    {
      src: currentImgUrl.value
    }
  ];
});

const hideFn = () => {
  showPreview.value = false;
};
</script>

<style lang="scss" scoped>
.page {
  background: #ececec;
  padding-top: 10px;
}
.product-box {
  // border: 1px solid rgb(156, 156, 156);
  border-radius: 20px;
  margin: 30px 30px;
  background: white;
  box-shadow: 0px 0px 10px 10px #ebebeb;
}
</style>
