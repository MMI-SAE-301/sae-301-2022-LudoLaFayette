import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";
import VueTypeImports from "vite-plugin-vue-type-imports";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [Pages(), VueTypeImports(), vue({
    // This is needed, or else Vite will try to find image paths (which it wont be able to find because this will be called on the web, not directly)
    // For example <img src="/images/logo.png"> will not work without the code below
    template: {
      transformAssetUrls: {
      //  includeAbsolute: false,
      },
    },
  }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
