<template>
  <section id="plans" class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Heading -->
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900">Our Service Packages</h2>
        <p class="mt-4 text-xl text-gray-600">
          Choose the plan that fits your business growth needs
        </p>
      </div>

      <!-- Pricing Plans Grid -->
      <div class="grid md:grid-cols-3 gap-8">
        <!-- Loop through plans -->
        <div
          v-for="(plan, index) in plans"
          :key="plan.name + index"
          class="bg-white border rounded-lg p-6 shadow-md relative transition-all hover:shadow-lg"
          :class="{
            'border-blue-500 transform scale-105': plan.isPopular,
          }"
        >
          <!-- Popular Badge -->
          <div
            v-if="plan.isPopular"
            class="absolute top-0 right-0 m-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm"
          >
            Most Popular
          </div>

          <!-- Plan Name -->
          <h3 class="text-2xl font-bold text-gray-900 mb-4">{{ plan.name }}</h3>

          <!-- Plan Price -->
          <p class="text-4xl font-bold text-blue-600 mb-4">
            ${{ plan.price }}<span class="text-base">/month</span>
          </p>

          <!-- Plan Features -->
          <ul class="space-y-3 mb-6">
            <li
              v-for="feature in plan.features"
              :key="feature"
              class="flex items-center"
            >
              <Icon
                name="gravity-ui:circle-check"
                class="mr-2 h-5 w-5 text-green-500"
              />
              {{ feature }}
            </li>
          </ul>

          <!-- Plan CTA Button -->
          <a
            :href="plan.ctaLink"
            class="w-full block text-center px-6 py-3 font-semibold rounded-lg transition"
            :class="{
              'bg-blue-100 text-blue-600 hover:bg-blue-200': !plan.isPopular,
              'bg-blue-600 text-white hover:bg-blue-700': plan.isPopular,
            }"
          >
            {{ plan.ctaText }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Import icons or components if needed
const calendlyLink = 'https://calendly.com/william-k-makau/30min'
// Define plans data
const plans = [
  {
    name: 'Starter Plan',
    price: 99,
    features: [
      'Security & backups',
      'Uptime monitoring',
      'Basic SEO optimizations',
      'Monthly performance report',
    ],
    ctaText: 'Get Started',
    ctaLink: calendlyLink,
    isPopular: false,
  },
  {
    name: 'Growth Plan',
    price: 299,
    features: [
      'Everything in Starter',
      'Advanced SEO updates',
      'Content strategy',
      'Conversion rate optimization',
      'Lead generation tools',
    ],
    ctaText: 'Select Growth Plan',
    ctaLink: calendlyLink,
    isPopular: true,
  },
  {
    name: 'Pro Plan',
    price: 499,
    features: [
      'Everything in Growth',
      'Dedicated account manager',
      'Monthly strategy calls',
      'Paid ads setup',
      'Email marketing assistance',
    ],
    ctaText: 'Explore Pro Options',
    ctaLink: calendlyLink,
    isPopular: false,
  },
]
</script>

<style scoped>
/* Add custom styles if needed */
</style>
