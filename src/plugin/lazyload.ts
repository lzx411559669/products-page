// 随便导入一张图片作为加载出错时的默认图片
import defaultImg from '@/assets/common/loading.gif';
import { onMounted } from 'vue';

import { useIntersectionObserver } from '@vueuse/core'; //图片加载失败时候用的图片
export default {
  install(app: any) {
    defineDirective(app); //自定义指令
  }
};

// 自定义指令
const defineDirective = (app: any) => {
  // 1．图片懒加载指令v-lazyLoad
  // 原理:先存储图片地址不能在src上，当图片进入可视区，将你存储图片地址设置给图片元素（dom）的src即可。
  app.directive('lazyLoad', {
    // vue2.0监听使用指令的DOM是否创建好，钩子函数: inserted
    // vue3.0 的指令拥有的钩子函数和组件的一样，使用指令的DON是否创建好，钩子函数: mounted,onMounted是在组合API时候使用，现在是选项
    mounted(el: any, binding: any) {
      // 绑定的元素，绑定的值
      // // 2.创建一个观察对象，来观察当前使用指令得元素
      const observe = new IntersectionObserver(
        async ([{ isIntersecting }]) => {
          if (isIntersecting) {
            // 如果进入了可视区
            // 谁进入了可视区？得用observe去观察 是哪个元素使用了该指令，所以会传入dom对象el
            // 停止观察，因为观察一次就够了
            observe.unobserve(el);
            // 3.监听图片加载失败，用默认图
            el.onerror = () => {
              el.src = defaultImg;
            };
            // await new Promise((relove, reject) => {
            //   setTimeout(() => {
            //     relove(true);
            //   }, 1000);
            // });
            // 4.将指令v-lazyLoad上的地址设置给el的src属性
            el.src = binding.value;
          }
        },
        {
          threshold: 0 //进入到可视区交界就开始观察
        }
      );
      observe.observe(el); // 使用observe上的observe方法观察这个dom元素
    }
    // const { stop } = useIntersectionObserver(
    //     // 监听目标元素
    //     el,
    //     ([{ isIntersecting }], observerElement) => {
    //         if (isIntersecting) {
    //             // 当图片url无效加载失败的时候使用默认图片替代
    //             el.onerror = function () {
    //                 el.src = defaultImg
    //             }
    //             console.log('加载')
    //             el.src = binding.value
    //             stop()
    //         }
    //     })
    // }
  });
};
