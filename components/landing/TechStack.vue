<template>
  <div className="bg-white py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Elite Engineering Expertise</h2>
        <p className="text-xl text-gray-600">
          Our engineers excel in modern tech stacks, ensuring your project
          leverages the best tools for scalable success
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(category, index) in techCategories"
          :key="index"
          className="bg-gray-50 rounded-xl p-8"
        >
          <h3 className="text-2xl font-semibold mb-3">{{ category.title }}</h3>
          <p className="text-gray-600 mb-6">{{ category.description }}</p>

          <div className="space-y-4">
            <div
              v-for="(tech, techIndex) in category.technologies"
              :key="techIndex"
              className="flex items-center gap-3"
            >
              <Icon
                name="gravity-ui:circle-check"
                class="w-5 h-5 text-green-500"
              />
              <div>
                <span className="font-medium">{{ tech.name }}</span>
                <span className="text-sm text-gray-500 ml-2">{{
                  tech.level
                }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- {/* Case Study Preview */} -->
      <!-- <div className="mt-12 bg-blue-50 rounded-xl p-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Recent Success Story
            </h3>
            <p className="text-gray-600 mb-4">
              Built a scalable SaaS platform for a fintech startup using React,
              Node.js, and AWS, leading to successful seed round funding.
            </p>
            <button
              className="text-blue-600 font-semibold flex items-center gap-2"
            >
              View Case Study
              <span className="text-xl">→</span>
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg">
            <img
              src="/api/placeholder/400/300"
              alt="Project Screenshot"
              className="rounded-lg w-full"
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
