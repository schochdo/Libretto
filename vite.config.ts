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
          const parts = chunkInfo.facadeModuleId ? chunkInfo.facadeModuleId.split('/') : [];
          const dir = parts[parts.length - 2];
          if (dir && ['fidelio', 'dieZauberfloete', 'falstaff', 'tannhaeuser'].includes(dir)) {
            return `assets/opera-${dir}-[hash].js`;
          }
          return 'assets/[name]-[hash].js';
        }
      }
    }
  }
})
