import {defineConfig} from '@voidzero-dev/vite-plus';

export default defineConfig({
  test: {
    environment: 'node',
    globals: false,
    coverage: {
      include: ['src/**'],
      exclude: ['src/**/*.test.ts'],
    },
  },
});
