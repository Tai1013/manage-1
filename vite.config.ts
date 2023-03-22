import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import dotenv from 'dotenv'

dotenv.config({ path: `./.env.${process.env.NODE_ENV}` })

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    {
      name: 'html-transform',
      transformIndexHtml(html) {
        return html.replace(
          /<title>(.*?)<\/title>/,
          `<title>${process.env.VITE_APP_TITLE}</title>`
        )
      }
    },
    vue()
  ],
  base: process.env.VITE_APP_FIREBASE_BASE,
  build: {
    outDir: 'docs',
    assetsDir: 'assets'
  },
  server: {
    port: 8000,
    host: '0.0.0.0'
  },
  resolve: {
    alias: {
      'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
      "@": path.resolve(__dirname, 'src/')
    }
  }
})
