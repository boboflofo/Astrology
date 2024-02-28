import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // Import 'path' directly here

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'), // Define your path alias here
    }
  },
  server: {
    port: 8080,
    hot: true
  }
})