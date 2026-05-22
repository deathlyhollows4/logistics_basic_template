import tailwindcss from '@tailwindcss/vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [tanstackStart(), viteReact(), tailwindcss()],
  build: {
    target: 'es2022',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('@tanstack/react-router') || id.includes('@tanstack/react-start')) {
              return 'vendor-tanstack';
            }
            if (id.includes('@supabase/supabase-js')) {
              return 'vendor-supabase';
            }
            if (id.includes('react-dom') || (id.includes('react') && !id.includes('react-router') && !id.includes('react-dom'))) {
              return 'vendor-react';
            }
          }
        },
      },
    },
  },
})
