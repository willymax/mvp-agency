<template>
  <section className="py-16">
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Why Choose Our MVP Agency?
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Get your software ideas to market faster and more efficiently
          </p>
        </div>

        <div className="mt-16">
          <div className="space-y-12">
            <div
              v-for="(benefit, index) in benefits"
              :key="index"
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {{ benefit.title }}
                </h3>
                <p className="text-gray-600 mb-6">{{ benefit.description }}</p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <Icon
                      name="gravity-ui:circle-check"
                      class="h-6 w-6 text-green-500 flex-shrink-0"
                    />
                    <div>
                      <h4 className="font-medium text-gray-900">With Us</h4>
                      <p className="mt-1 text-gray-600">{{ benefit.us }}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Icon
                      name="gravity-ui:circle-xmark"
                      class="h-6 w-6 text-red-500 flex-shrink-0"
                    />
                    <div>
                      <h4 className="font-medium text-gray-900">
                        Freelance Platforms
                      </h4>
                      <p className="mt-1 text-gray-600">{{ benefit.them }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <NuxtLink to="#contact-us">
              <button
                className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
              >
                Start Your Project Today
              </button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const benefits = [
  {
    title: 'Experienced Full-Stack Team',
    us: 'Dedicated team of developers working in sync',
    them: 'Individual freelancers working in isolation',
    description:
      'Get a complete, collaborative team that handles everything from frontend to backend development',
  },
  {
    title: 'Direct Communication',
    us: 'Direct access to your development team',
    them: 'Communication through platform intermediaries',
    description:
      'No middlemen - speak directly with the developers building your product',
  },
  {
    title: 'Cost-Effectiveness Solutions',
    us: 'Competitive rates without platform fees',
    them: 'Higher costs due to platform commissions',
    description:
      'Save money while getting the same quality of work from experienced developers',
  },
  {
    title: 'Quality Assurance',
    us: 'Consistent quality from a coordinated team',
    them: 'Varying quality from different freelancers',
    description: 'Reliable, consistent quality across your entire project',
  },
]
</script>

<style></style>
