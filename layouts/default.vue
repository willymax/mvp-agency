<template>
  <!-- <ClientOnly> -->
  <div class="min-h-screen flex flex-col">
    <!-- Skip to main content link for accessibility -->
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md"
    >
      Skip to main content
    </a>

    <!-- Header -->

    <SharedAppHeader :is-transparent="isHeaderTransparent" />

    <!-- Main content -->
    <main id="main-content" class="flex-grow pt-24">
      <!-- Page loading overlay -->

      <div
        v-if="isLoading"
        class="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center"
      >
        <div
          class="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"
        ></div>
      </div>

      <!-- Page content -->
      <slot />
    </main>

    <!-- Newsletter signup (optional) -->
    <!-- 
        <section v-if="showNewsletter" class="bg-gray-50 content-container">
          <div class="container mx-auto px-4">
            <SharedNewsletterSignup @close="showNewsletter = false" />
          </div>
        </section>
       -->

    <!-- Footer -->

    <SharedAppFooter />

    <!-- Cookie consent banner -->

    <SharedCookieConsent v-if="showCookieConsent" @accept="acceptCookies" />

    <!-- Back to top button -->

    <button
      v-show="showBackToTop"
      @click="scrollToTop"
      class="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 z-40"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  </div>
  <!-- </ClientOnly> -->
</template>

<script setup>
const isLoading = ref(false)
const showNewsletter = ref(true)
const showCookieConsent = ref(true)
const showBackToTop = ref(false)
const isHeaderTransparent = ref(true)

const handleScroll = () => {
  // Show/hide back to top button
  showBackToTop.value = window.scrollY > 500

  // Update header transparency
  isHeaderTransparent.value = window.scrollY < 50
}

// Handle scroll events
onMounted(() => {
  if (import.meta.client) {
    window.addEventListener('scroll', handleScroll)
    // Check if cookies were previously accepted
    showCookieConsent.value = !localStorage.getItem('cookiesAccepted')
  }
})
onUnmounted(() => {
  if (import.meta.client) {
    window.removeEventListener('scroll', handleScroll)
  }
})

// Scroll to top function
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

// Cookie consent handler
const acceptCookies = () => {
  showCookieConsent.value = false
  localStorage.setItem('cookiesAccepted', 'true')
}
</script>

<style>
/* Page transition animations */
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

/* Ensure smooth scrolling for hash links */
html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px;
  /* Adjust based on your header height */
}

.content-container:not(:empty) {
  @apply bg-gray-50 py-12;
}
</style>
