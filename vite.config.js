import tailwindcss from '@tailwindcss/vite';

export default {
  plugins: [tailwindcss()],
  base: './',
  build: {
    outDir: 'dist',
  },
};
