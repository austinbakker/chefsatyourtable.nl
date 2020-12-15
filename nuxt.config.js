export default {
  ssr: false,
  target: 'static',
  buildModules: [
    '@nuxtjs/composition-api',
    '@aceforth/nuxt-optimized-images',
    '@nuxtjs/tailwindcss'
  ],
  optimizedImages: {
    optimizeImages: true
  },
  head: {
    titleTemplate: 'Chefs at your table',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      { hid: 'description', name: 'description', content: 'Meta description' }
    ]
  }
}