import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Relative asset paths support GitHub Pages project sites and custom hosting.
  base: './',
  plugins: [react()],
})
