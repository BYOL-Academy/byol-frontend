import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import dynamicImport from 'vite-plugin-dynamic-import'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    babel: {
      plugins: [
        'babel-plugin-macros'
      ]
    }
  }),
  dynamicImport()],
  assetsInclude: ['**/*.md'],
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src'),
    },
  },
  build: {
    outDir: 'build'
  },
  server: {
    proxy: {
      '/api': {
        target: process.env.VITE_NODE_ENV === 'production' ? `${process.env.VITE_CLIENT_URL}` : `${process.env.VITE_LOCALHOST}:${process.env.VITE_PORT}`,
        changeOrigin: true,
        secure: false,
        ws: true,
        rewrite: (path) => path.replace('/^/api/', ''),
      },
    },
  }
});
