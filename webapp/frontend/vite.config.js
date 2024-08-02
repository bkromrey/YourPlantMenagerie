import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {

    // Following configuration adapted from the CS340 starter code.
    // Date Accessed: 1 August 2024
    // URL: https://github.com/osu-cs340-ecampus/react-starter-app
    
    // Use VITE_PORT from your .env, or default to a port if not specified
    port: parseInt(process.env.VITE_PORT, 10) || 5173
  }
})

