import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    hmr: {
      overlay: false
    },

  },
  plugins: [react()],
  css:{
    modules:{
      localsConvention:"camelCase"
    }
  }
})