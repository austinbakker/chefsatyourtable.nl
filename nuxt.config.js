export default {
  target: 'static',
  vue: {
    config: {
      productionTip: true,
      devtools: false
    }
  },
  htmlAttrs: {
    lang: 'nl'
  },
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
      { hid: 'description', name: 'description', content: 'Max zorgt als kok-aan-huis voor een gastronomische culinaire ervaring. In de vertrouwde omgeving van uw eigen woning. Geniet van een geweldige diner van uw favoriete restaurant.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.png' }
    ]
  }
}