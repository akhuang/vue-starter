import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  define: {
    'process.env': {}
  },
  server: {
    proxy: {
      "/api":{
         secure:false,
         target:"https://www.baidu.com",
         changeOrigin: true,
         rewrite: path => path.replace(/^\/api/, '')
      },
      '/huawei': {
        target: 'https://cdn.myhuaweicloud.com',
        changeOrigin: true,
        secure:true,
        rewrite: path => path.replace(/^\/huawei/, '')
      }
    }
  }
})
