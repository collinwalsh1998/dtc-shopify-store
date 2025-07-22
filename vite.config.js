import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: '.',
  build: {
    sourcemap: true,
    outDir: '.',
    emptyOutDir: false,
    rollupOptions: {
      input: './assets/scss/main.scss',
      output: {
        entryFileNames: 'main.css'
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        includePaths: [path.resolve(__dirname, 'assets/scss')]
      },
    },
  },
});