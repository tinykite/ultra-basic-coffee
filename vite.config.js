import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',
  },
  css: {
    postcss: './postcss.config.js',
  },
  optimizeDeps: {
    include: ['**/*.svg'],
  },
  assetsInclude: ['**/*.svg'],
})