import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import * as path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve('./'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['src/**/!(*tests)/**/*.test.tsx'],
    setupFiles: ['./vitest.setup.ts'],
  },
});
