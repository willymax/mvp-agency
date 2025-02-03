<template>
  <section class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold mb-4">Trusted by Growing Businesses</h2>
        <p class="text-gray-600">
          Our clients see real results within the first 3 months
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="(stat, index) in stats"
          :key="index"
          class="text-center"
          v-motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :enter="{ opacity: 1, scale: 1 }"
          :delay="index * 100"
        >
          <div class="text-4xl font-bold text-blue-600 mb-2">
            <CountUp :endVal="parseFloat(stat.value)" :suffix="stat.suffix" />
          </div>
          <div class="text-gray-600">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import CountUp from 'vue-countup-v3'
const stats = [
  { label: 'Average Traffic Increase', value: 30, suffix: '%' },
  { label: 'Conversion Rate Improvement', value: 15, suffix: '%' },
  { label: 'Happy Clients', value: 100, suffix: '+' },
  { label: 'Revenue Growth', value: 25, suffix: '%' },
]
</script>

<style lang="sass" scoped></style>
