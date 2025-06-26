import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';
import path from 'path';
import react from '@vitejs/plugin-react';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      public: path.resolve(__dirname, './public'),
      src: path.resolve(__dirname, './src/'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `@use "bootstrap/scss/bootstrap" as *;`,
        includePaths: [path.resolve(__dirname, './node_modules/'), path.resolve(__dirname, './src/styles/scss/'), path.resolve(__dirname, './src/assets/font/')],
      },
    },
  },
});
