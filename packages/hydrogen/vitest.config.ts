import {defineConfig} from '@voidzero-dev/vite-plus';

export default defineConfig({
  test: {
    environment: 'happy-dom',
    globals: false,
    setupFiles: ['./vitest.setup.ts'],
    coverage: {
      all: true,
      include: ['src/**'],
      exclude: ['src/vite/virtual-routes/**'],
    },
  },
});
