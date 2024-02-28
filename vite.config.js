import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // Import 'path' directly here

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
})
