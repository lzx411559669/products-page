import { computed, reactive, toRefs, onMounted, watch,ref } from 'vue';
import categorys from '@/data/categorys.json';
import products from '@/data/products.json';

export const useHome = () => {
  const state = reactive({
    currentCategoryId:
    sessionStorage.getItem('currentCategoryId') || categorys[0].id,
    products: products,
    categorys: categorys,
    loading: false,
  });

  let timer = ref<any>()

  const currentProducts = computed(() => {
    return state.products.filter(
      (e: any) => e.categoryId === state.currentCategoryId
    );
  });

  const setCurrentCategoryId = (id: any) => {
    state.currentCategoryId = id;
  };

  // onMounted(() => {
  //   if (
  //     sessionStorage.getItem('currentCategoryId') &&
  //     sessionStorage.getItem('currentCategoryId') !== ''
  //   ) {
  //     state.currentCategoryId = sessionStorage.getItem(
  //       'currentCategoryId'
  //     ) as string;
  //   }
  // });

  watch(
    () => state.currentCategoryId,
    (val, oldval) => {
      state.loading = true;
      timer.value = window.setTimeout(() => {
        state.loading = false;
        if (timer.value) { 
         window.clearTimeout(timer.value)
        }
      }, 600);
    }
  );

  return {
    ...toRefs(state),
    currentProducts,
    setCurrentCategoryId
  };
};
