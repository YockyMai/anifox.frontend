import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig, loadEnv } from 'vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react()],
    server: {
      watch: {
        usePolling: true
      },
      ...(env?.VITE_USE_PROXY === 'true' && {
        proxy: {
          '/api': {
            target: env.VITE_PUBLIC_PROXY_HOST
          }
        }
      }),
      host: true,
      strictPort: true,
      port: 8000,
      allowedHosts: ['anifox.org']
    },
    resolve: {
      alias: [{ find: '@', replacement: path.resolve(__dirname, 'src/') }]
    }
  }
})
