import { createApp } from 'vue';
import App from './App.vue';
import NutUI from '@nutui/nutui';
import router from './router';
import i18n from './lang/index'
import lazyload from './plugin/lazyload';
import '@nutui/nutui/dist/style.css';
// import { Button  ,Tabbar, TabbarItem} from 'vant';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import 'uno.css';
import 'virtual:svg-icons-register';
import SvgIcon from './components/SvgIcon.vue';

// import 'viewerjs/dist/viewer.css'
import VueViewer from 'v-viewer'

import './styles/index.scss';

const app = createApp(App);

dayjs.locale('zh-ch');
app.config.globalProperties.$dayjs = dayjs;

app.component('SvgIcon', SvgIcon).use(NutUI).use(router).use(lazyload).use(i18n).use(VueViewer);
router.isReady().then(() => {
  app.mount('#app');
});
