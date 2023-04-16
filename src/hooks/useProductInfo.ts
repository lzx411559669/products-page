import { computed, reactive } from 'vue';
import { useRoute } from 'vue-router';
import products from '@/data/products.json';

export const useProductInfo = () => {
  const state = reactive({
    products: products
  });
  const route = useRoute();

  const productInfo = computed(() => {
    const id = route.params.id;
    return state.products.find((e: any) => e.id === id);
  });



  return {
    productInfo
  };
};
