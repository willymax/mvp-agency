<template>
  <div class="bg-white py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
        <div
          v-for="(metric, index) in metrics"
          :key="index"
          class="text-center"
        >
          <div class="text-4xl font-bold text-blue-600 mb-2">
            {{ metric.value }}
          </div>
          <div class="text-gray-600">{{ metric.label }}</div>
        </div>
      </div>

      <div class="flex justify-center items-center gap-8 mb-16 flex-wrap">
        <div class="text-gray-400 font-medium">Our engineers come from:</div>
        <div
          v-for="company in companies"
          :key="company"
          class="text-gray-500 font-semibold text-xl"
        >
          {{ company }}
        </div>
      </div>
      <div class="grid md:grid-cols-2 gap-8">
        <div class="grid md:grid-cols-2 gap-8">
          <div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="bg-gray-50 rounded-xl p-6"
          >
            <div class="flex gap-1 mb-4">
              <Icon
                v-for="n in 5"
                :key="n"
                name="material-symbols:kid-star"
                class="w-5 h-5 text-yellow-400 fill-current"
              />
            </div>
            <p class="text-gray-700 mb-4">"{{ testimonial.quote }}"</p>
            <div class="flex items-center gap-4">
              <!-- <img
                src="{testimonial.image}"
                alt="{testimonial.author}"
                class="w-12 h-12 rounded-full"
              /> -->
              <div>
                <div class="font-semibold">{{ testimonial.author }}</div>
                <div class="text-sm text-gray-600">
                  {{ testimonial.role }}
                </div>
                <div class="text-sm text-blue-600">
                  {{ testimonial.company }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const metrics = [
  { label: 'MVPs Launched', value: '50+' },
  { label: 'Client Satisfaction', value: '98%' },
  { label: 'Team Members', value: '20+' },
  { label: 'Cost Savings', value: '50%' },
]
const companies = ['Microsoft', 'Google', 'Safaricom', 'Oracle']

const testimonials = [
  {
    quote:
      'Their team delivered our MVP in just 28 days. The quality exceeded our expectations and helped us secure seed funding.',
    author: 'Sarah Chen',
    role: 'Founder & CEO',
    company: 'HealthTech Solutions',
    image: '/api/placeholder/64/64',
  },
  {
    quote:
      'Working directly with senior engineers made a huge difference. They brought insights that helped us avoid costly mistakes.',
    author: 'Michael Roberts',
    role: 'CTO',
    company: 'FinanceFlow',
    image: '/api/placeholder/64/64',
  },
]
</script>

<style></style>
