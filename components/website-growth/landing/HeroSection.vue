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
          We will optimize your site to attract more visitors, convert them into
          customers, and keep them coming back—while ensuring it's secure, fast,
          and always online.
        </p>
        <div class="my-6 w-full text-center">
          <div
            class="inline-flex items-center bg-green-100 px-4 py-2 rounded-lg text-sm font-medium text-green-800"
          >
            <svg
              class="w-5 h-5 mr-2 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <div class="flex flex-col space-y-1">
              <span class="text-sm font-bold"
                >Guaranteed results or we work for free</span
              >
              <span class="text-xs text-green-700">
                No questions asked. No risk on your part.</span
              >
            </div>
          </div>
        </div>
        <div
          class="flex flex-col md:flex-row justify-center items-center gap-5 w-full max-w-7xl mx-auto px-4 sm:px-6"
        >
          <NuxtLink to="#contact-us">
            <button
              class="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium inline-flex items-center"
              id="hero-call-to-action"
            >
              Start Growing Today
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
          </NuxtLink>
          <NuxtLink to="#plans">
            <button
              class="border border-blue-400 hover:bg-blue-800/50 px-8 py-3 rounded-lg font-semibold"
              id="show-pricing-call-to-action"
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
