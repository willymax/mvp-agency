<!-- components/ComparisonSection.vue -->
<template>
  <section class="bg-gray-50 py-16 px-4">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          What Makes Us Different
        </h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          While traditional services keep your site running, we fuel growth at
          every level
        </p>
      </div>

      <div class="overflow-x-auto rounded-xl shadow-xl">
        <table class="w-full bg-white">
          <thead class="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
            <tr>
              <th class="p-6 text-left rounded-tl-xl">Key Features</th>
              <th class="p-6 text-center w-1/4">
                <div class="flex flex-col items-center">
                  <span class="text-sm font-medium"
                    >Traditional Maintenance</span
                  >
                  <span class="text-xs opacity-90 mt-1">Basic Protection</span>
                </div>
              </th>
              <th class="p-6 text-center w-1/4 bg-blue-800/20 rounded-tr-xl">
                <div class="flex flex-col items-center">
                  <span class="text-sm font-medium">Our Growth Service</span>
                  <span class="text-xs opacity-90 mt-1"
                    >Strategic Partnership</span
                  >
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <template v-for="(feature, index) in features" :key="index">
              <tr class="group hover:bg-gray-50 transition-colors">
                <td class="p-6 font-semibold text-gray-700 align-middle">
                  <div class="flex items-center">
                    <Icon
                      :name="feature.icon"
                      class="w-5 h-5 mr-3 text-blue-600"
                    />
                    {{ feature.title }}
                  </div>
                </td>
                <td class="p-6 text-center text-gray-500 align-middle">
                  <div class="flex flex-col items-center">
                    <span class="text-red-500">
                      <Icon name="material-symbols:close" class="w-6 h-6" />
                    </span>
                    <span class="text-sm mt-2">{{ feature.traditional }}</span>
                  </div>
                </td>
                <td class="p-6 text-center bg-blue-50/30 align-middle">
                  <div class="flex flex-col items-center">
                    <span class="text-green-600">
                      <Icon
                        name="gravity-ui:circle-check-fill"
                        class="w-6 h-6"
                      />
                    </span>
                    <span class="text-sm font-semibold text-green-700 mt-2">
                      {{ feature.ourService }}
                    </span>
                    <span
                      v-if="feature.details"
                      class="text-xs text-gray-600 mt-1"
                    >
                      {{ feature.details }}
                    </span>
                  </div>
                </td>
              </tr>
              <tr
                v-if="index < features.length - 1"
                class="border-b border-gray-200/80"
              />
            </template>
          </tbody>
        </table>
      </div>

      <div class="mt-12 text-center">
        <a
          href="#contact-us"
          class="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-lg hover:shadow-xl"
          id="comparison-call-to-action"
        >
          Start Growing Today
          <Icon name="gravity-ui:arrow-right" class="w-4 h-4 ml-2" />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    icon: 'gravity-ui:shield',
    title: 'Security & Uptime',
    traditional: 'Basic monitoring with slow response',
    ourService: '24/7 Threat Prevention',
    details: 'Includes DDoS protection & malware scanning',
  },
  {
    icon: 'gravity-ui:chart-mixed',
    title: 'SEO Optimization',
    traditional: 'Basic meta tag checks',
    ourService: 'Full Technical SEO Suite',
    details: 'Monthly content optimization + backlink strategy',
  },
  {
    icon: 'material-symbols:trending-up',
    title: 'Conversion Optimization',
    traditional: 'Not included',
    ourService: 'Continuous A/B Testing',
    details: 'Heatmaps + visitor session analysis',
  },
  {
    icon: 'material-symbols:table-chart-view',
    title: 'Performance Reporting',
    traditional: 'Basic uptime stats',
    ourService: 'Growth Metrics Dashboard',
    details: 'Revenue tracking + conversion analytics',
  },
  {
    icon: 'material-symbols:rocket-launch',
    title: 'Strategic Support',
    traditional: 'Ticket-based responses',
    ourService: 'Dedicated Growth Team',
    details: 'Monthly strategy sessions included',
  },
]
</script>
