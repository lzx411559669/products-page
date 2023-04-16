//@unocss-include
import { createRouter, createWebHashHistory, createWebHistory, Router } from 'vue-router';

const router: Router = createRouter({
  history: createWebHashHistory("/products"),
  routes: [
    {
      path: "/",
      name: "主页",
      component:()=>import('@views/Home.vue')
    },
    {
      path: "/product/:id",
      name: "商品详情",
      component:()=>import('@views/ProductInfo.vue')
    },
    {
      path: "/factory",
      name: "工厂环境",
      component:()=>import('@views/Factory.vue')
    },
    {
      path: "/contact",
      name: "联系我们",
      component:()=>import('@views/Contact.vue')
    }
  ]
});

export default router;
