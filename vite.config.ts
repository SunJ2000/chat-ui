import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"), // 将 @ 指向 src
      "@components": resolve(__dirname, "./src/components"), // 将 @components 指向 src/components"
    },
  },
});
