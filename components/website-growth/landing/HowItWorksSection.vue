<template>
  <section class="py-16 bg-gray-50" id="how-it-works">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900">
          How Our Growth Service Works
        </h2>
        <p class="mt-4 text-xl text-gray-500">
          We transform your website from a digital brochure into a powerful
          sales engine
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <!-- Step 1: Comprehensive Audit -->
        <div
          class="bg-white p-8 rounded-lg shadow-md text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          <div class="flex justify-center items-center mb-4">
            <div
              class="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 text-xl font-bold"
            >
              1
            </div>
          </div>
          <Icon
            name="gravity-ui:circle-check"
            class="mx-auto h-12 w-12 text-blue-600 mb-4 hover:animate-bounce"
          />
          <h3 class="text-xl font-semibold mb-3">Comprehensive Audit</h3>
          <p class="text-gray-600">
            We conduct a free, in-depth analysis of your website to identify
            growth opportunities, technical issues, and UX improvements. Our
            audit covers SEO, performance, and conversion rate optimization.
          </p>
        </div>

        <!-- Step 2: Strategic Optimization -->
        <div
          class="bg-white p-8 rounded-lg shadow-md text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          <div class="flex justify-center items-center mb-4">
            <div
              class="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-600 text-xl font-bold"
            >
              2
            </div>
          </div>
          <!-- <BarChart
            class="mx-auto h-12 w-12 text-green-600 mb-4 hover:animate-bounce"
          /> -->
          <Icon
            name="gravity-ui:circle-check"
            class="mx-auto h-12 w-12 text-green-600 mb-4 hover:animate-bounce"
          />
          <h3 class="text-xl font-semibold mb-3">Strategic Optimization</h3>
          <p class="text-gray-600">
            Based on the audit, we implement targeted improvements to boost
            traffic, enhance user experience, and increase conversion rates.
            This includes SEO, content optimization, and technical enhancements.
          </p>
        </div>

        <!-- Step 3: Continuous Growth -->
        <div
          class="bg-white p-8 rounded-lg shadow-md text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          <div class="flex justify-center items-center mb-4">
            <div
              class="w-12 h-12 bg-yellow-50 rounded-full flex items-center justify-center text-yellow-600 text-xl font-bold"
            >
              3
            </div>
          </div>
          <!-- <Zap
            class="mx-auto h-12 w-12 text-yellow-600 mb-4 hover:animate-bounce"
          /> -->
          <Icon
            name="gravity-ui:circle-check"
            class="mx-auto h-12 w-12 text-yellow-600 mb-4 hover:animate-bounce"
          />
          <h3 class="text-xl font-semibold mb-3">Continuous Growth</h3>
          <p class="text-gray-600">
            We provide ongoing maintenance, performance tracking, and proactive
            recommendations to ensure your website stays ahead of the
            competition. Regular updates and optimizations keep your growth
            engine running.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
/* Add custom animations or styles here if needed */
.hover\:animate-bounce:hover {
  animation: bounce 1s infinite;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
</style>
