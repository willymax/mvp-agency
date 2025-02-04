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
          <div
            className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border border-blue-200 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800"
          >
            <div className="flex-shrink-0">
              <Icon name="gravity-ui:shield" class="text-blue-600 w-6 h-6" />
            </div>
            <div className="flex flex-col space-y-1">
              <span className="text-sm font-bold text-blue-900 leading-tight">
                {{ plan.guarantee }}
              </span>
              <span className="text-xs text-blue-700">
                No questions asked. No risk on your part.</span
              >
            </div>
          </div>

          <!-- Plan Features -->
          <ul class="space-y-3 mb-6 mt-5">
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
    price: 197,
    features: [
      '24/7 Security & Daily Backups',
      'Real-Time Uptime Monitoring',
      'Basic SEO Optimizations (15 Keywords + Competitor Analysis)',
      'Monthly Performance Report with Actionable Insights',
      'Free Website Audit (Valued at $200)',
    ],
    ctaText: 'Get Started',
    ctaLink: calendlyLink,
    isPopular: false,
    guarantee: '100% Hack-Free, 99.99% Uptime, 10-Minute Emergency Response',
  },
  {
    name: 'Website Growth Guarantee',
    price: 499,
    features: [
      '30-Day "First Page or Free" SEO Guarantee',
      'Turn website visitors into leads (2x conversion rate)',
      'Google Ranking Blueprint + Monthly Progress Reports',
      '24/7 Hack Protection & Emergency Support',
      'FREE Premium Analytics Dashboard ($299/mo value)',
    ],
    ctaText: 'Select Growth Plan',
    ctaLink: calendlyLink,
    isPopular: true,
    guarantee:
      'Double your website leads in 90 days or we work free until you do', // Risk reversal
  },
  {
    name: 'All-Access Revenue Engine',
    price: 997,
    features: [
      'Everything in Growth',
      'Guaranteed 100 Qualified Leads/Month',
      'Dedicated Growth Team (Strategist + Tech Expert)',
      'Paid Ads Setup & Management (Up to $100 Ad Spend Included)',
      'Convert Leads to Sales System Setup',
      'Free Quarterly Business Review (Valued at $300)',
    ],
    ctaText: 'Explore Pro Options',
    ctaLink: calendlyLink,
    isPopular: false,
    guarantee: 'Generate $25,000 in new revenue within 3 months or pay nothing',
    // High-stakes guarantee
  },
]
</script>

<style scoped>
/* Add custom styles if needed */
</style>
