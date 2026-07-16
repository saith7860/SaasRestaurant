import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { cloudflare } from "@cloudflare/vite-plugin";
// https://vite.dev/config/
export default defineConfig({
  server:{
    
    proxy:{
      "/api": {
        target: process.env.VITE_API_URL,
        changeOrigin: true,
        secure: false,
        
      },
    }
  },
  plugins: [react(), tailwindcss(), cloudflare()],

  
})