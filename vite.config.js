import { defineConfig } from "vite";
import { fileURLToPath } from "url";
import path from "path";
import react from "@vitejs/plugin-react";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({

  plugins: [react()],
  resolve: {
    alias: {
      public: path.resolve(__dirname, "./public"),
      src: path.resolve(__dirname, "./src/"),
      contexts: path.resolve(__dirname, "./src/contexts"),
      images: path.resolve(__dirname, "./src/assets/images"),
      favicon: path.resolve(__dirname, "./src/assets/favicon"),
      portfolioImg: path.resolve(__dirname, "./src/assets/images/portfolioImg"),
      common: path.resolve(__dirname, "./src/components/common"),
      contact: path.resolve(__dirname, "./src/components/contact"),
      layout: path.resolve(__dirname, "./src/components/layout"),
      navbar: path.resolve(__dirname, "./src/components/navbar"),
      portfolio: path.resolve(__dirname, "./src/components/portfolio"),
      progressbar: path.resolve(__dirname, "./src/components/progressbar"),
      services: path.resolve(__dirname, "./src/components/services"),
      data: path.resolve(__dirname, "./src/data"),
      hooks: path.resolve(__dirname, "./src/hooks"),
      pages: path.resolve(__dirname, "./src/pages"),
      font: path.resolve(__dirname, "./src/assets/font"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "bootstrap/scss/bootstrap" as *;`,
        includePaths: [
          path.resolve(__dirname, "./node_modules/"),
          path.resolve(__dirname, "./src/styles/scss/"),
          path.resolve(__dirname, "./src/assets/font/")
        ],
      },
    },
  },
});
