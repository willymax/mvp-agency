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
          <div class="flex justify-center items-center space-x-8 py-4">
            <a
              v-for="item in navItems"
              :key="item.name"
              :href="item.href"
              class="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              {{ item.name }}
            </a>
            <!-- CTA Button with User Profile Pic -->
            <div class="flex items-center justify-center">
              <NuxtLink
                to="https://calendly.com/william-k-makau/30min"
                target="_blank"
              >
                <button
                  class="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors duration-200"
                  id="nav-book-a-call-web"
                >
                  <img
                    src="/william-makau.jpg"
                    alt="Website Growth Engine"
                    class="h-10 rounded-full"
                  />
                  <span class="text-sm font-medium"
                    >Book a Call With William</span
                  >
                </button>
              </NuxtLink>
            </div>
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
            name="material-symbols:close"
            class="h-6 w-6 text-gray-600"
          />
          <Icon
            v-else
            name="material-symbols:menu"
            class="h-6 w-6 text-gray-600"
          />
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
            <div class="flex items-center justify-center">
              <NuxtLink
                to="https://calendly.com/william-k-makau/30min"
                target="_blank"
              >
                <button
                  class="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors duration-200"
                  id="nav-book-a-call-mobile"
                >
                  <img
                    src="/william-makau.jpg"
                    alt="Website Growth Engine"
                    class="h-10 rounded-full"
                  />
                  <span class="text-sm font-medium"
                    >Book a Call With William</span
                  >
                </button>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const { isScrolled } = useScroll()
const isMobileMenuOpen = ref(false)
const userProfilePic = '/william-makau.jpg'

const navItems = [
  { name: 'Services', href: '#services' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Pricing', href: '#plans' },
  // { name: 'Case Studies', href: '#case-studies' },
]
const handleCtaClick = () => {}
</script>
