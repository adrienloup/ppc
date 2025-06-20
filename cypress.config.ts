import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3030',
    downloadsFolder: 'src/tests/downloads',
    supportFile: 'src/tests/support/support.ts',
    specPattern: 'src/tests/**/*.test.ts',
  },
});
