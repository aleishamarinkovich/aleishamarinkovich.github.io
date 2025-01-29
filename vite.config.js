import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000,
  },
  base: '/A_Marinkovich_Web/',
  build: {
    outDir: 'dist',
  },
});
