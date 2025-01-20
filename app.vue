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
  titleTemplate: '%s | Your Company Name',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'format-detection', content: 'telephone=no' },
    {
      name: 'description',
      content: 'Your default site description here',
    },
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
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
