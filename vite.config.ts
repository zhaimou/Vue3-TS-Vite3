// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'
// import * as path from "path";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import eslintPlugin from 'vite-plugin-eslint' //导入包

export default defineConfig({
  resolve: {
    //设置别名
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [vue(), eslintPlugin()],
})
