import { defineConfig, defaultAllowedOrigins } from 'vite';
import shopify from 'vite-plugin-shopify';

export default defineConfig({
  plugins: [shopify({ snippetFile: 'vite-tag.liquid' })],
  server: {
    cors: {
      origin: [
        defaultAllowedOrigins,
        'https://walsh-web-development.myshopify.com',
      ],
    },
  },
  build: {
    emptyOutDir: false,
    rollupOptions: {
      output: {
        entryFileNames: '[name].[hash].min.js',
        chunkFileNames: '[name].[hash].min.js',
        assetFileNames: '[name].[hash].min[extname]',
      },
    },
  },
});