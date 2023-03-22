import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve('./src/'),
      '@features': path.resolve(__dirname, './src/features/'),
      '@layout': path.resolve(__dirname, './src/app/layout/'),
      '@pages': path.resolve(__dirname, './src/pages/'),
      '@app': path.resolve(__dirname, './src/app/'),
      '@shared': path.resolve(__dirname, './src/shared/'),
      '@assets': path.resolve(__dirname, './src/assets/'),
    },
  },
})
