import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          threeVendor: ['three', '@react-three/fiber', '@react-three/drei'],
          animationVendor: ['gsap', 'framer-motion', 'lenis'],
        },
      },
    },
    chunkSizeWarningLimit: 1200,
  },
  server: {
    port: 3000,
    host: true,
  },
});

