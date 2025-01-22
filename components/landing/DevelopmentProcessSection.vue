<template>
  <div className="bg-gray-50 py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">
          From Contact to Code in 48 Hours
        </h2>
        <p className="text-xl text-gray-600">
          Our streamlined process gets you from idea to development in record
          time
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="(step, index) in steps" :key="index" className="relative">
          <!-- {/* Connector Line */}} -->
          <div
            v-if="index < steps.length - 1"
            className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-blue-200 z-0"
          />
          <!-- {/* Step Card */}} -->
          <div className="bg-white rounded-xl p-6 shadow-sm relative z-10">
            <div
              className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4"
            >
              <Icon :name="step.icon" class="w-8 h-8 text-blue-600" />
            </div>
            <div className="text-blue-600 font-medium mb-2">
              {{ step.duration }}
            </div>
            <h3 className="text-xl font-semibold mb-3">{{ step.title }}</h3>
            <p className="text-gray-600 mb-4">{{ step.description }}</p>

            <!-- {/* Testimonial */}} -->
            <div className="border-t pt-4 mt-4">
              <p className="text-sm italic text-gray-600 mb-2">
                "{{ step.quote }}"
              </p>
              <p className="text-sm text-gray-500">- {{ step.author }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const steps = [
  {
    icon: 'gravity-ui:file-check',
    title: 'Quick Qualification',
    duration: 'Day 1',
    description:
      "Share your project vision and requirements through our streamlined form. We'll review and respond within hours.",
    quote: 'The onboarding process was surprisingly fast and thorough.',
    author: 'Alex M., Startup Founder',
  },
  {
    icon: 'gravity-ui:code',
    title: 'Technical Review',
    duration: '24 Hours',
    description:
      'Our team analyzes your needs and prepares a detailed solution proposal with team composition and timeline.',
    quote: 'Their technical assessment was spot-on and saved us time.',
    author: 'Rachel K., Product Manager',
  },
  {
    icon: 'ix:handshake',
    title: 'Agreement & Setup',
    duration: 'Day 2',
    description:
      'Quick alignment call, simple paperwork, and immediate team setup. We handle all the technical setup.',
    quote: 'Zero bureaucracy, just straight to building.',
    author: 'David L., Tech Founder',
  },
  {
    icon: 'gravity-ui:rocket',
    title: 'Start Building',
    duration: '48 Hours',
    description:
      'Your dedicated team starts development with all tools and access ready. Daily updates and clear communication.',
    quote: 'From first contact to coding in just 2 days. Impressive!',
    author: 'Sarah P., CEO',
  },
]
</script>

<style></style>
