// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-schema-org', '@nuxt/image', '@nuxt/icon'],
  css: ['~/assets/css/main.css'],
  schemaOrg: {
    // Your schema.org configuration for SEO
    // TODO: add schema.org configuration
  },
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL,
      apiBase: process.env.NUXT_PUBLIC_API_BASE,
    },
  },
})