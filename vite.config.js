import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Use your GitHub repo name here (e.g. 'cardHandling' or 'username.github.io')
export default defineConfig({
  plugins: [react()],
  base: '/cardHandling/',
})
