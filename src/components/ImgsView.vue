<template>
  <div :class="classNames" v-for="(item, ix) in urls">
    <img
      class="w-full"
      :class="imgClass"
      :style="index === ix ? 'border:1px solid #000; height:110px' : imgStyles"
      @click="showPreviewFn(ix)"
      :src="encodeURI(getUrl(`${prefix || ''}${item}`)).replace(/\+/g, '%2B')"
      alt=""
    />
  </div>
  <nut-image-preview
    :closeable="true"
    :pagination-visible="true"
    pagination-color="red"
    :show="showPreview"
    :init-no="index"
    :images="imgData"
    @close="hideFn"
  />
</template>

<script setup lang="ts">
import { useOss } from '@/hooks/useOss';
import { computed, ref } from 'vue';

const { getUrl } = useOss();
const props = defineProps<{
  urls: string[];
  classNames?: string;
  prefix?: string;
  imgClass?: string;
  imgStyles?: string;
  preview?: boolean;
}>();

const showPreview = ref(false);
const imgData = ref<any>(
  props.urls.map((e: string) => ({
    src: getUrl(`${props?.prefix || ''}${e}`)
  }))
);
const index = ref<number>(0);

const showPreviewFn = (i: number) => {
  index.value = i;
  props.preview ? (showPreview.value = true) : null;
  // showPreview.value = true;
  if (Array.isArray(props.urls)) {
    imgData.value = props.urls.map((e: string) => ({
      src: getUrl(`${props?.prefix || ''}${e}`)
    }));
  }
};

const currentUrl = computed(() => {
  return imgData.value[index.value];
});

defineExpose({
  imgData,
  index,
  currentUrl
});

const hideFn = () => {
  showPreview.value = false;
};
</script>

<style scoped></style>
