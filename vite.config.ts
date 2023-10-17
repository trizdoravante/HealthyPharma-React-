import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'src/components/category/CategoriaDetail.js': 'src/components/category/CategoriaDetail.jsx',
      'src/components/category/CategoriaForm.js': 'src/components/category/CategoriaForm.jsx',
  
    },
  },
});
