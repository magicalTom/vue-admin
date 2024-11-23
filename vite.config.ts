import vue from '@vitejs/plugin-vue';
import vueJsxPlugin from '@vitejs/plugin-vue-jsx';
import { fileURLToPath } from 'node:url';
import AutoImport from 'unplugin-auto-import/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsxPlugin(),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      resolvers: [ElementPlusResolver()],
      dts: true,
      eslintrc: {
        enabled: true,
      },
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      dts: true,
      dirs: [],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('src', import.meta.url)),
    },
  },
});
