/// <reference types='vitest' />

import path from 'node:path';
import { lingui } from '@lingui/vite-plugin';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import { defineConfig, searchForWorkspaceRoot, type PluginOption } from 'vite';

export default defineConfig({
  cacheDir: '../../node_modules/.vite/client',

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  build: {
    sourcemap: true,
    emptyOutDir: true,
  },

  define: {
    appVersion: JSON.stringify(process.env.npm_package_version),
  },

  server: {
    host: true,
    port: 8888,
    fs: { allow: [searchForWorkspaceRoot(process.cwd())] },
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    }
  },

  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.po': 'text',
      },
    },
  },

  plugins: [
    tailwindcss() as PluginOption[],
    TanStackRouterVite({
      target: 'react',
      autoCodeSplitting: true
    }),
    react({
      plugins: [['@lingui/swc-plugin', {}]],
    }),
    lingui(),
  ],
});
