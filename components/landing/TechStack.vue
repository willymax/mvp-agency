<template>
  <div class="bg-white py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold mb-4">Elite Engineering Expertise</h2>
        <p class="text-xl text-gray-600">
          Our engineers excel in modern tech stacks, ensuring your project
          leverages the best tools for scalable success
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(category, index) in techCategories"
          :key="index"
          class="bg-gray-50 rounded-xl p-8"
        >
          <h3 class="text-2xl font-semibold mb-3">{{ category.title }}</h3>
          <p class="text-gray-600 mb-6">{{ category.description }}</p>

          <div class="space-y-4">
            <div
              v-for="(tech, techIndex) in category.technologies"
              :key="techIndex"
              class="flex items-center gap-3"
            >
              <Icon
                name="gravity-ui:circle-check"
                class="w-5 h-5 text-green-500"
              />
              <div>
                <span class="font-medium">{{ tech.name }}</span>
                <span class="text-sm text-gray-500 ml-2">{{ tech.level }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- {/* Case Study Preview */} -->
      <!-- <div class="mt-12 bg-blue-50 rounded-xl p-8">
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 class="text-2xl font-semibold mb-4">
              Recent Success Story
            </h3>
            <p class="text-gray-600 mb-4">
              Built a scalable SaaS platform for a fintech startup using React,
              Node.js, and AWS, leading to successful seed round funding.
            </p>
            <button
              class="text-blue-600 font-semibold flex items-center gap-2"
            >
              View Case Study
              <span class="text-xl">→</span>
            </button>
          </div>
          <div class="bg-white p-6 rounded-lg">
            <img
              src="/api/placeholder/400/300"
              alt="Project Screenshot"
              class="rounded-lg w-full"
            />
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script setup>
const techCategories = [
  {
    title: 'Web Applications',
    description: 'Full-stack solutions for modern web apps',
    technologies: [
      { name: 'React', level: 'Advanced' },
      { name: 'Vue.js', level: 'Advanced' },
      { name: 'Node.js', level: 'Advanced' },
      { name: 'Python', level: 'Advanced' },
      { name: 'PostgreSQL', level: 'Advanced' },
      { name: 'MongoDB', level: 'Advanced' },
    ],
  },
  {
    title: 'Mobile Development',
    description: 'Cross-platform and native solutions',
    technologies: [
      { name: 'Flutter', level: 'Advanced' },
      { name: 'React Native', level: 'Advanced' },
      { name: 'Swift', level: 'Advanced' },
      { name: 'Kotlin', level: 'Advanced' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    description: 'Scalable infrastructure solutions',
    technologies: [
      { name: 'AWS', level: 'Advanced' },
      { name: 'Docker', level: 'Advanced' },
      { name: 'Kubernetes', level: 'Advanced' },
      { name: 'CI/CD', level: 'Advanced' },
    ],
  },
]
</script>

<style></style>
