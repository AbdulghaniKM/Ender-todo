// nuxt.config.js
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: 'Ender | To Do List',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'A simple and powerful To Do List built with Nuxt.js' },
      ],
      link: [
        { rel: 'shortcut icon', type: 'image/png', href: '/todo.png' }, // Ensure the type matches the image format
      ],
    }
  },

  compatibilityDate: '2024-07-19',
  
});