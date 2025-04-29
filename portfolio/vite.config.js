import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0', // Optional: allows external connections
    allowedHosts: [
      'tomdu3.co.uk', // Your domain
      'localhost',     // Standard localhost
      '127.0.0.1'     // Local IP
    ]
  },
  plugins: [react(), tailwindcss()],
})
