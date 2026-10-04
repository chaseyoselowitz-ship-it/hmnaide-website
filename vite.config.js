import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Multi-page build: the marketing landing (index.html), the standalone
// contact page (contact-us.html) and the pricing page (pricing.html).
// Paths are relative to the project root.
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        contact: 'contact-us.html',
        pricing: 'pricing.html',
      },
    },
  },
})
