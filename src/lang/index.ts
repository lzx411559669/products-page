//   language/index.js
import zhCn from './zh';
import en from './en';
import { createI18n } from 'vue-i18n';
const message = {
  zh: zhCn,
  en: en
};

const i18n = createI18n({
  locale: localStorage.getItem('LANG') || 'zh', // 设置语言类型
  legacy: false, // 如果要支持compositionAPI，此项必须设置为false;
  globalInjection: true, // 全局注册$t方法
  messages: message
});

export default i18n;
