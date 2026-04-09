import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@modules': resolve(__dirname, './src/modules'),
      '@shared': resolve(__dirname, './src/shared'),
      '@types': resolve(__dirname, './src/types'),
    },
  },
  server: {
    port: 5173,
    strictPort: false,
  },
})
