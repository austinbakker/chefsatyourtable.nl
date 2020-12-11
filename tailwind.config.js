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
          gold: '#CBC7B7'
        }
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }