import * as path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

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
