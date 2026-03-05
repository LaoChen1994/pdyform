import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'pdyform-react': fileURLToPath(new URL('../../packages/react/src/index.tsx', import.meta.url)),
      'pdyform-core': fileURLToPath(new URL('../../packages/core/src/index.ts', import.meta.url)),
    },
    dedupe: ['react', 'react-dom'],
  },
});
