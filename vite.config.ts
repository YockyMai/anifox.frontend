import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true
    },
    VITE_HOST: true,
    strictPort: true,
    port: 8000,
    allowedHosts: ['anifox.org']
  },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src/') }]
  }
})
