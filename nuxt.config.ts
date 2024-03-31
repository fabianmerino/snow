// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    'nuxt-icon',
    '@nuxt/fonts',
    '@vueuse/nuxt',
    '@nuxt/eslint',
    '@nuxtjs/color-mode',
  ],

  shadcn: {
    prefix: 'ui',
  },

  colorMode: {
    classSuffix: '',
  },

  eslint: {
    config: {
      standalone: false,
    },
  },
})
