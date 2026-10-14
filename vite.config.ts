import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  build: {
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        chunkFileNames: (chunkInfo) => {
          const id = chunkInfo.facadeModuleId || '';
          const match = id.match(/\/src\/data\/([^/]+)\/index\.ts$/);
          if (match && match[1] !== 'samples') {
            return `assets/opera-${match[1]}-[hash].js`;
          }
          return 'assets/[name]-[hash].js';
        }
      }
    }
  }
})
