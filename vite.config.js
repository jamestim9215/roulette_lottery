import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: "9000",
    cors: true,
    // proxy: {
    //   "/dev": {
    //     target: [""],
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/dev/, ""),
    //   },
    // },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "./",
})