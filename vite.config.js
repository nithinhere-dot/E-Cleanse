import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   host: '0.0.0.0', // Allows access from any device on the network
  //   port: 3000,      // Optional: specify port if needed
  // },
})
