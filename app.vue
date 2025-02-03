<template>
  <NuxtLayout>
    <NuxtLoadingIndicator color="#2563eb" :height="3" />
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup>
// Global loading state
const nuxtApp = useNuxtApp()
const isLoading = ref(false)

// Global loading handler
nuxtApp.hook('page:start', () => {
  isLoading.value = true
})
nuxtApp.hook('page:finish', () => {
  isLoading.value = false
})

// Global error handler
nuxtApp.hook('vue:error', (err) => {
  console.error('Vue Error:', err)
})

// Add global meta tags
useHead({
  titleTemplate: '%s',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'format-detection', content: 'telephone=no' },
    {
      name: 'description',
      content: '%s',
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon-96x96.png',
      sizes: '96x96',
    },
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    { rel: 'shortcut icon', href: '/favicon.ico' },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
    { rel: 'manifest', href: '/site.webmanifest' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
    },
  ],
})
</script>

<style>
/* Global styles */
html {
  scroll-behavior: smooth;
}

body {
  @apply antialiased text-gray-800 bg-white;
}

::selection {
  @apply bg-blue-500 text-white;
}
</style>
