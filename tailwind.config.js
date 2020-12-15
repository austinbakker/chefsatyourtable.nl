 // tailwind.config.js
 module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {
       colors:{
          green: '#072422',
          gold: '#CBC7B7',
          gray: '#F0F0F0'
        },
        boxShadow:{
          '0': '0 0 0 0 rgba(0, 0, 0, 0.25)',
        }
     },
   },
   variants: {
     extend: {
      zIndex: ['hover', 'active'],
     },
   },
   plugins: [],
 }