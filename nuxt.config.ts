// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    'v-gsap-nuxt',
    'nuxt-swiper'
  ],
  css: ['@/assets/css/app.css'],
  fonts: {
    families: [
      {
        name: 'Fira Code',
        provider: 'google',
        weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      }
    ]
  },

  tailwindcss: {
    configPath: 'tailwind.config.ts'
  }
})