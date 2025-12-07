import {defineConfig} from '@voidzero-dev/vite-plus';

export default defineConfig({
  test: {
    globalSetup: './vitest.setup.ts',
    coverage: {
      provider: 'v8',
      include: ['src/**'],
      exclude: [
        'src/create-app.*',
        'src/setup-assets/**',
        'src/virtual-routes/**',
      ],
    },
  },
});
