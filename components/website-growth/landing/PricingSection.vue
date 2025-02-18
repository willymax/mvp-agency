<template>
  <section id="plans" class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
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
          <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-4">
            {{ plan.name }}
          </h3>

          <!-- Plan Price -->
          <p class="text-4xl font-bold text-blue-600 mb-4">
            Ksh. {{ plan.price }}<span class="text-base">/month</span>
          </p>

          <!-- Plan Features -->
          <ul class="space-y-3 mb-6 mt-5">
            <li
              v-for="feature in plan.features"
              :key="feature"
              class="flex items-center text-sm"
            >
              <Icon
                name="gravity-ui:circle-check"
                class="mr-2 h-5 w-5 text-green-500"
              />
              {{ feature }}
            </li>
          </ul>
          <div class="my-6" v-if="index > 0">
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
                <span class="text-sm font-bold">{{ plan.guarantee }}</span>
                <span class="text-xs text-green-700">
                  No questions asked. No risk on your part.</span
                >
              </div>
            </div>
          </div>

          <!-- Plan CTA Button -->
          <a
            :href="plan.ctaLink"
            :id="plan.id"
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
    name: 'Maintenance & Optimization',
    // price: 197,
    price: '13,000',
    features: [
      '24/7 Security & Daily Backups',
      'Real-Time Uptime Monitoring',
      'Basic SEO Optimizations (15 Keywords + Competitor Analysis)',
      'Monthly Performance Report with Actionable Insights',
      'Free Website Audit (Valued at $200)',
    ],
    ctaText: 'Get Started',
    ctaLink: '#contact-us',
    id: 'maintenance-and-optimization-package',
    isPopular: false,
    guarantee: '100% Hack-Free, 99.99% Uptime, 10-Minute Emergency Response',
  },
  {
    name: 'Website Growth Ignite',
    // price: 499,
    price: '35,000',
    features: [
      '30-Day "First Page or Free" SEO Guarantee',
      'Turn website visitors into leads (2x conversion rate)',
      'Google Ranking Blueprint + Monthly Progress Reports',
      '24/7 Hack Protection & Emergency Support',
      'FREE Premium Analytics Dashboard ($299/mo value)',
    ],
    ctaText: 'Select Growth Plan',
    ctaLink: '#contact-us',
    id: 'website-growth-ignite-package',
    isPopular: true,
    guarantee:
      'Double your website leads in 90 days or we work free until you do', // Risk reversal
  },
  {
    name: 'All-Access Revenue Engine',
    // price: 997,
    price: '75,000',
    features: [
      'Everything in Growth',
      'Guaranteed 100 Qualified Leads/Month',
      'Dedicated Growth Team (Strategist + Tech Expert)',
      'Paid Ads Setup & Management (Up to $100 Ad Spend Included)',
      'Convert Leads to Sales System Setup',
      'Free Quarterly Business Review (Valued at $300)',
    ],
    ctaText: 'Explore Pro Options',
    ctaLink: '#contact-us',
    id: 'all-access-revenue-engine-package',
    isPopular: false,
    guarantee: 'Generate $25,000 in new revenue within 3 months or pay nothing',
    // High-stakes guarantee
  },
]
</script>

<style scoped>
/* Add custom styles if needed */
</style>
