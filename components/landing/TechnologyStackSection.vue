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
        {techCategories.map((category, index) => (
        <div key="{index}" className="bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl font-semibold mb-3">{category.title}</h3>
          <p className="text-gray-600 mb-6">{category.description}</p>

          <div className="space-y-4">
            {category.technologies.map((tech, techIndex) => (
            <div key="{techIndex}" className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <div>
                <span className="font-medium">{tech.name}</span>
                <span className="text-sm text-gray-500 ml-2">{tech.level}</span>
              </div>
            </div>
            ))}
          </div>
        </div>
        ))}
      </div>

      {/* Case Study Preview */}
      <div className="mt-12 bg-blue-50 rounded-xl p-8">
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
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
