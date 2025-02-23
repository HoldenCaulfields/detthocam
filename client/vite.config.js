import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/', // Base path for the project
  plugins: [react(), tailwindcss()],
  build: {
    outDir: "dist", // Output folder for Express to serve
  },
})
