<template>
  <section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 mb-4">
          Transform Your Website into a Revenue Engine
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Stop losing potential customers to competitors. Our proven solutions
          help you attract more visitors, convert them into leads, and turn
          those leads into paying customers.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="service in services"
          :key="service.title"
          class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6"
        >
          <div class="flex items-start space-x-4 mb-4">
            <Icon
              :name="service.icon"
              class="w-12 h-12 shrink-0"
              :class="service.iconColor"
            />
            <div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">
                {{ service.title }}
              </h3>
              <p class="text-gray-600">
                {{ service.description }}
              </p>
            </div>
          </div>

          <ul class="space-y-3 border-t pt-4">
            <li
              v-for="(outcome, index) in service.outcomes"
              :key="index"
              class="flex items-start"
            >
              <Icon
                name="heroicons:check-circle-20-solid"
                class="text-green-500 w-5 h-5 mt-0.5 mr-2 shrink-0"
              />
              <span class="text-gray-700">{{ outcome }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          title: 'Search Engine Domination',
          description:
            'Stop being invisible online. Get found by customers actively searching for your services.',
          icon: 'material-symbols:search',
          iconColor: 'text-blue-600',
          outcomes: [
            "Rank on Google's first page for keywords that matter to your business",
            'Outperform competitors with data-driven SEO strategies',
            "Attract targeted traffic that's ready to buy",
          ],
        },
        {
          title: 'Website Security & Reliability',
          description: 'Never worry about downtime or security breaches again.',
          icon: 'material-symbols:shield',
          iconColor: 'text-green-600',
          outcomes: [
            '24/7 protection against hackers and threats',
            'Instant response to any security emergencies',
            'Keep your website running smoothly with real-time monitoring',
          ],
        },
        {
          title: 'Performance Analytics',
          description:
            'Turn complex data into clear actions that grow your business.',
          icon: 'material-symbols:bar-chart',
          iconColor: 'text-purple-600',
          outcomes: [
            'Understand exactly how your website performs',
            'Get actionable insights to improve results',
            'Track your return on investment in real-time',
          ],
        },
        {
          title: 'Lead Generation',
          description:
            'Transform your website from a brochure into a lead-generating machine.',
          icon: 'material-symbols:target',
          iconColor: 'text-red-600',
          outcomes: [
            'Convert more visitors into qualified leads',
            'Capture leads through multiple channels',
            'Build a predictable flow of potential customers',
          ],
        },
        {
          title: 'Conversion Optimization',
          description:
            'Turn more browsers into buyers with proven conversion strategies.',
          icon: 'gravity-ui:persons',
          iconColor: 'text-yellow-600',
          outcomes: [
            "Double your website's conversion rate",
            'Optimize your sales funnel for maximum results',
            'Turn leads into paying customers systematically',
          ],
        },
        {
          title: 'Growth Strategy',
          description: 'Get a complete roadmap to sustainable online growth.',
          icon: 'material-symbols:rocket',
          iconColor: 'text-indigo-600',
          outcomes: [
            'Custom growth plan based on your business goals',
            'Regular strategy updates based on real data',
            'Expert guidance at every step of your journey',
          ],
        },
      ],
    }
  },
}
</script>
