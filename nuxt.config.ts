import { defineNuxtConfig } from '@nuxt/bridge'
import { ElementUiResolver } from 'unplugin-vue-components/resolvers'

export default defineNuxtConfig({
  srcDir: 'src/',
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/vue.svg' }],
      title: 'Nuxt Element Issue'
    }
  },
  css: ['element-ui/lib/theme-chalk/index.css'],
  modules: [
    [
      'unplugin-vue-components/nuxt',
      {
        dts: false,
        dirs: [],
        resolvers: [ElementUiResolver({ importStyle: false })]
      }
    ]
  ],
  bridge: {
    meta: true,
    vite: true,
    nitro: true
  },
  vite: {
    optimizeDeps: {
      exclude: ['vue-demi']
    },
    build: {
      reportCompressedSize: false
    }
  }
})
