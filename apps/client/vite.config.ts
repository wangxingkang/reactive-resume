import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    nxViteTsPaths(),
  ],
})
