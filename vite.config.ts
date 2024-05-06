import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      name: 'Bloomreach',
      entry: './src/index.ts',
      fileName: 'index',
      formats: ['es'],
    },
    sourcemap: true,
  },
  plugins: [
    dts({ rollupTypes: true }),
  ],
  test: {
    passWithNoTests: true
  }
});
