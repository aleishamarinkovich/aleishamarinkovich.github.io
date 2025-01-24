import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000,
  },
  base: '/vite-react-ts/',
  build: {
    outDir: 'dist',
  },
});
