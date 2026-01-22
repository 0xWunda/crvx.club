import { defineConfig } from 'vite'

export default defineConfig({
  // Base path for GitHub Pages
  // If your repository is at https://github.com/<username>/<repo>/, set base to '/<repo>/'
  // Since the CNAME is present, the site will likely be at crvx.club/, so base is '/'
  base: '/',
  build: {
    outDir: 'dist',
  },
})
