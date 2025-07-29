import { defineConfig } from 'vite';
import shopify from 'vite-plugin-shopify';
import path from 'path';

export default defineConfig({
  root: '.',
  build: {
    sourcemap: true,
    outDir: '.',
    emptyOutDir: false,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/css/main.scss')
      },
      output: {
        assetFileNames: 'assets/[name].css'
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        includePaths: [path.resolve(__dirname, 'src/css')]
      },
    },
  },
  plugins: [
    shopify({
      entrypointsDir: "src/css"
    }),
  ],
});