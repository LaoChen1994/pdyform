import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      'pdyform-vue': fileURLToPath(new URL('../../packages/vue/src/index.ts', import.meta.url)),
      'pdyform-core': fileURLToPath(new URL('../../packages/core/src/index.ts', import.meta.url)),
    },
    dedupe: ['vue'],
  },
});
