import { defineConfig } from "vite";
import { fileURLToPath } from "url";
import path from "path";
import react from "@vitejs/plugin-react";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      node_modules: path.resolve(__dirname, "./node_modules/"),
      src: path.resolve(__dirname, "./src/"),
      public: path.resolve(__dirname, "./public/"),
      pages: path.resolve(__dirname, "./src/pages/"),
      images: path.resolve(__dirname, "./src/assets/images/"),
      portfolio: path.resolve(__dirname, "./src/assets/images/portfolio/"),
      favicon: path.resolve(__dirname, "./src/assets/favicon/"),
      font: path.resolve(__dirname, "./src/assets/font/"),
      scss: path.resolve(__dirname, "./src/components/scss/"),
      jsx: path.resolve(__dirname, "./src/components/jsx/"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "bootstrap/scss/bootstrap" as *;`,
        includePaths: [
          path.resolve(__dirname, "./node_modules/"),
          path.resolve(__dirname, "./src/components/scss/"),
          path.resolve(__dirname, "./src/assets/font/")
        ],
      },
    },
  },
});
