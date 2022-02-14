import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src',
      assets: '/src/assets',
      components: '/src/components',
      views: '/src/views',
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:2000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
