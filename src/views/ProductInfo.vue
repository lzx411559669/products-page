<template>
  <div v-if="productInfo" class="p-2">
    <Back :title="productInfo?.projectName" />
    <!-- {{currentUrl}} -->
    <div v-if="currentUrl" class="my-2">
      <!-- <img
        @click="
          showPreviewFn(
            getUrl(
              `/products/${productInfo?.categoryId}/${productInfo?.title}/${productInfo?.detailImgs[0]}`
            )
          )
        "
        class="w-full"
        :src="currentUrl.src"
        alt=""
      /> -->
      <viewer :images="imgs">
        <img v-show="item===currentUrl.src" class="w-full" v-for="item in imgs" :key="item" :src="item" />
      </viewer>
    </div>
    <nut-indicator
      v-if="imgData"
      :block="true"
      align="center"
      :size="imgData.length"
      :current="index + 1"
      >step1</nut-indicator
    >
    <nut-image-preview
      :closeable="true"
      :pagination-visible="true"
      pagination-color="red"
      :init-no="index"
      :show="showPreview"
      :images="imgData"
      @close="hideFn"
    />

    <Title :title="$t('样品图')"></Title>
    <div class="flex flex-wrap w-full ml-2">
      <ImgsView
        ref="imgView"
        imgStyles="border:1px solid #999;height:110px"
        :prefix="`/products/${productInfo?.categoryId}/${productInfo?.title}/`"
        :urls="productInfo.detailImgs"
        class-names="w-[23%]  mr-1"
      ></ImgsView>
      <!-- <div class="w-[23%] mr-1" v-for="item in productInfo.detailImgs">
        <img
          @click="
            showPreviewFn(
              getUrl(
                `/products/${productInfo?.categoryId}/${productInfo?.title}/${item}`
              )
            )
          "
          class="w-full"
          :src="
            getUrl(
              `/products/${productInfo.categoryId}/${productInfo.title}/${item}`
            )
          "
          alt=""
        />
      </div> -->
    </div>
    <Title :title="$t('尺寸')"></Title>
    <div class="text-sm px-1 flex justify-center">
      <img
        class="w-[90%] m-auto"
        :src="
          getUrl(
            `/products/${productInfo.categoryId}/${productInfo.title}/封面图/${productInfo.leftImg}`
          )
        "
        alt=""
      />
      <!-- <div class="my-1"><span>{{$t('产品号')}}：</span>FSEHSC</div>
      <div>
        <span>{{$t('产品说明')}}：</span><span class="text-gray-500">392x308x89cm</span>
      </div> -->
    </div>
    <!-- <Title :title="$t('材料')"></Title>
    <div class="text-sm px-1">
      <div>Mertal</div>
      <div>
        <p>Fabric</p>
        <p>Frescolana</p>
        <p>CAT.H</p>
      </div>
    </div> -->
  </div>
</template>

<script setup lang="ts">
import { useProductInfo } from '@/hooks/useProductInfo';
import { getAssetsFile } from '@/utils/index';
import Title from '@/components/Title.vue';
import Back from '@/components/Back.vue';
import { useOss } from '@/hooks/useOss';
import { computed, ref } from 'vue';
import ImgsView from '@/components/ImgsView.vue';

const { getUrl } = useOss();
const { productInfo } = useProductInfo();

const showPreview = ref(false);
// const imgData = ref<any>([]);

const showPreviewFn = (url: string | Array<string>) => {
  showPreview.value = true;
  // if (Array.isArray(url)) {
  //   imgData.value = url.map((e: string) => ({ src: e }));
  // } else {
  //   imgData.value = [{ src: url }];
  // }
};

const hideFn = () => {
  showPreview.value = false;
};

const imgView = ref();

const currentUrl = computed(() => {
  return imgView.value?.currentUrl;
});

const index = computed(() => {
  return imgView.value?.index;
});

const imgData = computed(() => {
  return imgView.value?.imgData;
});

const imgs = computed(() => {
  return imgView.value?.imgData.map((e: any) => e.src);
});
</script>

<style scoped></style>
