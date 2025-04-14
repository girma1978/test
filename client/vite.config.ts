import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,  
    open: true,
    proxy: {
      '/graphql': {
        target: 'https://test-1-e9ln.onrender.com',  
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
  },
  // Make API URL available during build
  define: {
    'import.meta.env.VITE_API_URL': JSON.stringify('https://test-1-e9ln.onrender.com/graphql')
  },
});