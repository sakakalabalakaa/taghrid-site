import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' keeps asset paths relative, so the build works unmodified
// on GitHub Pages (project pages), Vercel, or any static host.
export default defineConfig({
  plugins: [react()],
  base: './',
})
