<template>
  <div class="bg-gray-50 py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold mb-4">
          Transparent Pricing, Exceptional Value
        </h2>
        <p class="text-xl text-gray-600">
          50% lower than US agencies with the same quality guarantee
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <div
          v-for="(plan, index) in plans"
          :key="index"
          class="bg-white rounded-xl p-8 shadow-sm"
        >
          <h3 class="text-2xl font-semibold mb-2">{{ plan.name }}</h3>
          <div class="text-3xl font-bold text-blue-600 mb-2">
            {{ plan.price }}
          </div>
          <div class="text-gray-600 mb-4">{{ plan.duration }}</div>
          <p class="text-gray-600 mb-6">{{ plan.description }}</p>

          <div class="space-y-4 mb-8">
            <div
              v-for="(feature, featureIndex) in plan.features"
              :key="featureIndex"
              class="flex items-center gap-3"
            >
              <Icon class="w-5 h-5 text-green-500" name="gravity-ui:check" />
              <span>{{ feature }}</span>
            </div>
          </div>
          <NuxtLink to="#contact-us">
            <button
              class="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2"
            >
              Schedule a Free Consultation
              <Icon class="w-5 h-5" name="gravity-ui:arrow-right" />
            </button>
          </NuxtLink>
        </div>
      </div>

      <div class="mt-12 bg-blue-50 rounded-xl p-8">
        <h3 class="text-2xl font-semibold mb-6 text-center">
          Why We're Different
        </h3>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="font-bold text-2xl text-blue-600 mb-2">$30,000</div>
            <div class="text-gray-600">Typical US Agency MVP Cost</div>
          </div>
          <div class="text-center">
            <div class="font-bold text-2xl text-blue-600 mb-2">$15,000</div>
            <div class="text-gray-600">Our MVP Package</div>
          </div>
          <div class="text-center">
            <div class="font-bold text-2xl text-green-600 mb-2">50%</div>
            <div class="text-gray-600">Cost Savings</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '#components'

const plans = [
  {
    name: 'MVP Package',
    price: 'Starting at $5,000',
    duration: '30 Days',
    description:
      'Perfect for validating your idea and getting to market quickly',
    features: [
      'Full-stack development',
      'Core feature implementation',
      'User authentication',
      'Basic admin dashboard',
      'Database setup',
      'API development',
      'Cloud deployment',
      '30 days free maintenance',
    ],
  },
  {
    name: 'Dedicated Team',
    price: 'Starting at $1,500',
    duration: 'per developer/month',
    description: 'Ideal for ongoing development and scaling your product',
    features: [
      'Senior full-stack developer',
      'Direct communication',
      'Daily updates',
      'Code reviews',
      'Technical consultation',
      'Architecture planning',
      'Agile development',
      'Flexible scaling',
    ],
  },
]
</script>

<style></style>
