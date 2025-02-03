<template>
  <div>
    <!-- Fixed Bottom Navigation -->
    <nav
      :class="[
        'fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 transition-transform duration-300',
        isScrolled ? 'transform translate-y-0' : '',
      ]"
    >
      <!-- Desktop Navigation -->
      <div class="hidden sm:block">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-center space-x-8 py-4">
            <a
              v-for="item in navItems"
              :key="item.name"
              :href="item.href"
              class="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              {{ item.name }}
            </a>
          </div>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div class="sm:hidden">
        <button
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="w-full px-4 py-3 flex items-center justify-between"
        >
          <span class="text-sm font-medium text-gray-700">Menu</span>
          <Icon
            v-if="isMobileMenuOpen"
            name="lucide:x"
            class="h-6 w-6 text-gray-600"
          />
          <Icon v-else name="lucide:menu" class="h-6 w-6 text-gray-600" />
        </button>

        <!-- Mobile Menu -->
        <div :class="[isMobileMenuOpen ? 'block' : 'hidden', 'bg-white']">
          <div class="px-2 pt-2 pb-20">
            <a
              v-for="item in navItems"
              :key="item.name"
              :href="item.href"
              class="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
              @click="isMobileMenuOpen = false"
            >
              {{ item.name }}
            </a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const navItems = [
  { name: 'Services', href: '#services' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Case Studies', href: '#case-studies' },
  { name: 'Contact', href: '#contact' },
]

// Handle scroll effect for navbar
const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
