import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
import Unocss from 'unocss/vite';
import { presetUno, presetAttributify, presetIcons } from 'unocss'; // 配置项解释：https://xiaoman.blog.csdn.net/article/details/125650172
// 引入svg插件
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
const pathResolve = (pathStr) => {
  return path.resolve(__dirname, pathStr)
}
function resolve(dir: string) {
  return path.join(__dirname, dir);
}
// https://vitejs.dev/config/
// https://github.com/vitejs/vite/issues/1930 .env
export default defineConfig({
  plugins: [
    vue(),
    // Components({
    //   resolvers: [VantResolver()]
    // }),
    Unocss({
      rules: [],
      shortcuts: {},
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
          extraProperties: {
            // ...
            display: 'inline-block',
            'vertical-align': 'middle'
          }
        })
      ]
    }),
    createSvgIconsPlugin({
      // 指定需要缓存的svg图标文件夹，即需要识别的svg都应该放在这个文件夹下
      // iconDirs: [path.resolve(process.cwd(), 'src/assets/svgs')],
      // 或
      iconDirs: [pathResolve('./src/assets/category')],
      // 指定symbolId格式（这里的配置与6.2步骤中的引入svg组件的name配置项写法有关）
      symbolId: 'icon-[dir]-[name]'
    })
  ],
  resolve: {
    alias: {
      '@': resolve('./src'),
      '@common': resolve('./src/common'),
      '@components': resolve('./src/components'),
      '@store': resolve('./src/store'),
      '@views': resolve('./src/views')
    }
  }
});
