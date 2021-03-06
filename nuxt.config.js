export default {
  googleAnalytics: {
    id: 'UA-194229007-1'
  },
  loading: {
    color: '#B81F24',
    height: '5px'
  },
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Dykkeprat',
    htmlAttrs: {
      lang: 'nb',
      amp: true
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Dykkeprat-arkivet' }
    ],
    script: [
      {
        src: 'https://cdn.jsdelivr.net/npm/velocity-animate@1.2.3/velocity.min.js'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'manifest', type: 'image/x-icon', href: '/site.webmanifest' }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-paginate.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-analytics',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/content',
  ],
  content: {
    fullTextSearchFields: ['title'],
    liveEdit: false
  },


  generate: {
    async routes () {
      const { $content } = require('@nuxt/content')
      const threads = await $content('threads', { deep: true }).fetch()

      return threads.map(thread => thread.path === '/index' ? '/' : thread.path)
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
