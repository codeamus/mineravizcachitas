import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import million from 'million/compiler'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://mineravizcachitas.cl/',
  plugins: [million.vite({ auto: true }), react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src/'),
      components: `${resolve(__dirname, './src/components/')}`,
    },
  },
  build: {
    cssMinify: true,
  },
})
