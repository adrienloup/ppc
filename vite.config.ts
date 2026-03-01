import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    VitePWA({
      manifest: {
        name: 'Paperclips App',
        short_name: 'PPC',
        description: 'An addictive Idle/Incremental/Clicker game inspired by Universal Paperclips built with React.',
        start_url: '/',
        display: 'standalone',
        theme_color: '#2900ff',
        background_color: '#fff',
        icons: [
          {
            src: '/ppc-192x192.svg',
            type: 'image/svg+xml',
            sizes: '192x192',
          },
          {
            src: '/ppc-256x256.svg',
            type: 'image/svg+xml',
            sizes: '256x256',
          },
          {
            src: '/ppc-384x384.svg',
            type: 'image/svg+xml',
            sizes: '384x384',
          },
          {
            src: '/ppc-512x512.svg',
            type: 'image/svg+xml',
            sizes: '512x512',
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve('./'),
    },
  },
});
