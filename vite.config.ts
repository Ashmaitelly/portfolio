/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Relative base so the build works both at a domain root (Netlify) and under a
  // GitHub Pages project path (username.github.io/repo-name).
  base: './',
  build: {
    outDir: 'build',
  },
  server: {
    port: 3000,
  },
  test: {
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
});
