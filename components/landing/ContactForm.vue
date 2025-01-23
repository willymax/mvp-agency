<template>
  <section className="py-6">
    <div class="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <div class="space-y-4 text-center">
          <h2 class="text-2xl font-bold">Request MVP Development Quote</h2>
          <p class="text-gray-600">
            Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>

        <div class="space-y-4">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700"
              >Name</label
            >
            <input
              id="name"
              v-model="formData.name"
              type="text"
              required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-gray-700"
              >Email</label
            >
            <input
              id="email"
              v-model="formData.email"
              type="email"
              required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label for="company" class="block text-sm font-medium text-gray-700"
              >Company Name</label
            >
            <input
              id="company"
              v-model="formData.company"
              type="text"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Your company name (optional)"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700"
              >Project Type</label
            >
            <div class="mt-2 space-y-2">
              <div class="flex items-center">
                <input
                  id="web"
                  v-model="formData.projectType"
                  type="radio"
                  value="web"
                  class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label for="web" class="ml-2 block text-sm text-gray-700"
                  >Web Application</label
                >
              </div>
              <div class="flex items-center">
                <input
                  id="mobile"
                  v-model="formData.projectType"
                  type="radio"
                  value="mobile"
                  class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label for="mobile" class="ml-2 block text-sm text-gray-700"
                  >Mobile App</label
                >
              </div>
              <div class="flex items-center">
                <input
                  id="both"
                  v-model="formData.projectType"
                  type="radio"
                  value="both"
                  class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label for="both" class="ml-2 block text-sm text-gray-700"
                  >Web + Mobile</label
                >
              </div>
            </div>
          </div>

          <div>
            <label
              for="projectDescription"
              class="block text-sm font-medium text-gray-700"
              >Project Description</label
            >
            <textarea
              id="projectDescription"
              v-model="formData.projectDescription"
              required
              rows="4"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Describe your project idea, features, and goals..."
            ></textarea>
          </div>

          <div>
            <label
              for="timeline"
              class="block text-sm font-medium text-gray-700"
              >Expected Timeline</label
            >
            <select
              id="timeline"
              v-model="formData.timeline"
              required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="">Select timeline</option>
              <option value="1-3">1-3 months</option>
              <option value="3-6">3-6 months</option>
              <option value="6+">6+ months</option>
            </select>
          </div>

          <div>
            <label for="budget" class="block text-sm font-medium text-gray-700"
              >Budget Range (USD)</label
            >
            <select
              id="budget"
              v-model="formData.budget"
              required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="">Select budget range</option>
              <option value="5000-10000">$5,000 - $10,000</option>
              <option value="10000-20000">$10,000 - $20,000</option>
              <option value="20000-50000">$20,000 - $50,000</option>
              <option value="50000+">$50,000+</option>
            </select>
          </div>

          <div>
            <label
              for="mathChallenge"
              class="block text-sm font-medium text-gray-700"
            >
              Security Check: What is {{ mathProblem.num1 }} +
              {{ mathProblem.num2 }}?
            </label>
            <input
              id="mathChallenge"
              v-model="userAnswer"
              type="number"
              required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Enter the answer"
            />
          </div>
        </div>

        <button
          type="submit"
          :disabled="loading"
          class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
        >
          <svg
            v-if="loading"
            class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          {{ loading ? 'Sending Request...' : 'Request Quote' }}
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
const mail = useMail()
const loading = ref(false)
const userAnswer = ref('')
const mathProblem = ref({
  num1: Math.floor(Math.random() * 10),
  num2: Math.floor(Math.random() * 10),
})

const formData = ref({
  name: '',
  email: '',
  company: '',
  projectType: '',
  projectDescription: '',
  timeline: '',
  budget: '',
})

const handleSubmit = async () => {
  // Validate math challenge
  if (
    Number(userAnswer.value) !==
    mathProblem.value.num1 + mathProblem.value.num2
  ) {
    alert('Incorrect answer to the security check. Please try again.')
    // Generate new problem
    mathProblem.value = {
      num1: Math.floor(Math.random() * 10),
      num2: Math.floor(Math.random() * 10),
    }
    userAnswer.value = ''
    return
  }

  loading.value = true
  // Simulate API call
  await new Promise((resolve) => {
    mail
      .send({
        from: formData.value.name,
        subject: 'Incredible',
        text: 'New contact form submission',
        replyTo: formData.value.email,
        html: `<p>Name: ${formData.value.name}</p>
        <p>Email: ${formData.value.email}</p>
        <p>Company: ${formData.value.company}</p>
        <p>Project Type: ${formData.value.projectType}</p>
        <p>Project Description: ${formData.value.projectDescription}</p>
        <p>Timeline: ${formData.value.timeline}</p>
        <p>Budget: ${formData.value.budget}</p>`,
      })
      .then(() => {
        resolve()
      })
      .catch((error) => {
        console.error(error)
        alert('An error occurred while sending the email. Please try again.')
        resolve()
      })
  })
  loading.value = false
  // Reset form
  formData.value = {
    name: '',
    email: '',
    company: '',
    projectType: '',
    projectDescription: '',
    timeline: '',
    budget: '',
  }
  // Reset math challenge along with form
  userAnswer.value = ''
  mathProblem.value = {
    num1: Math.floor(Math.random() * 10),
    num2: Math.floor(Math.random() * 10),
  }
}
</script>

<style></style>
