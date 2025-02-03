<template>
  <section
    class="relative py-20 bg-gradient-to-br from-blue-50 to-white"
    id="hero"
  >
    <div class="container mx-auto px-4">
      <div
        class="max-w-4xl mx-auto text-center"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0 }"
      >
        <h1 class="text-5xl font-bold mb-6 text-gray-900">
          Turn Your Website into a 24/7 Sales Machine
        </h1>
        <p class="text-xl mb-8 text-gray-700">
          We optimize and maintain your site to attract more visitors, convert
          them into customers, and keep them coming back—while ensuring it's
          secure, fast, and always online.
        </p>
        <div class="flex justify-center gap-5">
          <button
            class="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium inline-flex items-center"
          >
            Get Your Free Website Audit
            <svg
              class="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
          <NuxtLink to="#plans">
            <button
              class="border border-blue-400 hover:bg-blue-800/50 px-8 py-3 rounded-lg font-semibold"
            >
              Show Pricing
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
