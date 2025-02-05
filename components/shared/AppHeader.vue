<template>
  <header class="fixed w-full bg-white/80 backdrop-blur-sm z-50">
    <nav class="container mx-auto px-4 py-4 flex items-center justify-between">
      <NuxtLink to="/" class="flex items-center">
        <img src="/nalgi-labs-logo.svg" alt="Logo" class="h-16" />
      </NuxtLink>

      <!-- Mobile menu button -->
      <button @click="isOpen = !isOpen" class="lg:hidden">
        <span class="sr-only">Toggle menu</span>
        <!-- Add hamburger icon -->
      </button>

      <!-- Desktop navigation -->
      <div class="hidden lg:flex items-center space-x-8">
        <NuxtLink
          v-for="item in navigationItems"
          :key="item.path"
          :to="item.path"
          class="text-gray-600 hover:text-gray-900"
        >
          {{ item.name }}
        </NuxtLink>
        <SharedCTAButton>Contact Us</SharedCTAButton>
      </div>

      <!-- Mobile navigation -->
      <div
        v-show="isOpen"
        class="lg:hidden absolute top-full left-0 right-0 bg-white border-t"
      >
        <!-- Mobile menu items -->
      </div>
    </nav>
  </header>
</template>

<script setup>
const isOpen = ref(false)
const navigationItems = [
  { name: 'How it works', path: '#how-it-works' },
  { name: 'Why us', path: '#why-choose-us' },
  { name: 'Tech Stack', path: '#tech-stack' },
  { name: 'Pricing', path: '#plans' },
]
const isHeaderTransparent = computed(() => {
  return useRoute().path === '/'
})
</script>
