import { defineConfig } from 'vite';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  base: '/modules/',
  plugins: [
    federation({
      name: 'modules',
      filename: 'remoteEntry.js',
      exposes: {
        './counter': './src/counter.ts',
        './program': './src/program.ts',
      },
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});
