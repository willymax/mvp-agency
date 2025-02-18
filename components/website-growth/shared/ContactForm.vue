<template>
  <section
    class="w-full max-w-2xl mb-20 mx-auto bg-white shadow-lg rounded-lg px-6 py-12"
    id="contact-us"
  >
    <div class="space-y-1 mb-6">
      <h2 class="text-2xl font-bold text-center">Request a Callback</h2>
      <p class="text-center text-gray-500">
        Let's discuss how we can help grow your business
      </p>
    </div>

    <form @submit.prevent="handleSubmit" class="space-y-4">
      <!-- Name Input -->
      <div class="space-y-2">
        <label for="name" class="block text-sm font-medium text-gray-700"
          >Full Name</label
        >
        <div class="relative">
          <Icon
            name="material-symbols:person"
            class="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"
          />
          <input
            id="name"
            v-model="formData.name"
            type="text"
            placeholder="Your Name"
            class="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            :class="{ 'border-red-500': errors.name }"
          />
        </div>
        <p v-if="errors.name" class="text-sm text-red-500">{{ errors.name }}</p>
      </div>

      <!-- Email Input -->
      <div class="space-y-2">
        <label for="email" class="block text-sm font-medium text-gray-700"
          >Email</label
        >
        <div class="relative">
          <Icon
            name="material-symbols:mail"
            class="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"
          />
          <input
            id="email"
            v-model="formData.email"
            type="email"
            placeholder="Your Email"
            class="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            :class="{ 'border-red-500': errors.email }"
          />
        </div>
        <p v-if="errors.email" class="text-sm text-red-500">
          {{ errors.email }}
        </p>
      </div>

      <!-- Phone Input -->
      <div class="space-y-2">
        <label for="phone" class="block text-sm font-medium text-gray-700"
          >Phone Number</label
        >
        <div class="relative">
          <Icon
            name="material-symbols:call-sharp"
            class="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"
          />
          <input
            id="phone"
            v-model="formData.phone"
            type="tel"
            placeholder="Phone Number"
            class="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            :class="{ 'border-red-500': errors.phone }"
          />
        </div>
        <p v-if="errors.phone" class="text-sm text-red-500">
          {{ errors.phone }}
        </p>
      </div>

      <!-- Company Input -->
      <div class="space-y-2">
        <label for="company" class="block text-sm font-medium text-gray-700"
          >Company</label
        >
        <div class="relative">
          <Icon
            name="material-symbols:home-max-dots-outline"
            class="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"
          />
          <input
            id="company"
            v-model="formData.company"
            type="text"
            placeholder="Your Company Name"
            class="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>
      <!-- Website Input -->
      <div class="space-y-2">
        <label for="email" class="block text-sm font-medium text-gray-700"
          >Website (Optional)</label
        >
        <div class="relative">
          <Icon
            name="material-symbols:web-traffic"
            class="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"
          />
          <input
            id="website"
            v-model="formData.website"
            type="website"
            placeholder="www.company.com"
            class="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            :class="{ 'border-red-500': errors.website }"
          />
        </div>
        <p v-if="errors.website" class="text-sm text-red-500">
          {{ errors.website }}
        </p>
      </div>

      <!-- Service Select -->
      <div class="space-y-2">
        <label for="service" class="block text-sm font-medium text-gray-700"
          >Service Interest</label
        >
        <select
          id="service"
          v-model="formData.service"
          class="w-full pl-3 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          :class="{ 'border-red-500': errors.service }"
        >
          <option value="" disabled>Select a service</option>
          <option value="SEO Optimization">SEO Optimization</option>
          <option value="Paid Advertising">Paid Advertising</option>
          <option value="Website Maintentance">Website Maintentance</option>
        </select>
        <p v-if="errors.service" class="text-sm text-red-500">
          {{ errors.service }}
        </p>
      </div>
      <div>
        <label
          for="mathChallenge"
          class="block text-sm font-medium text-gray-700"
        >
          Security Check: What is {{ formattedMathProblem }}
        </label>
        <input
          id="mathChallenge"
          v-model="formData.userAnswer"
          type="number"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          :class="{ 'border-red-500': errors.challenge }"
          placeholder="Enter the answer"
        />
        <p v-if="errors.challenge" class="text-sm text-red-500">
          {{ errors.challenge }}
        </p>
      </div>

      <!-- Preferred Time -->
      <!-- <div class="space-y-2">
        <label
          for="preferredTime"
          class="block text-sm font-medium text-gray-700"
        >
          Preferred Callback Time (Optional)
        </label>
        <div class="relative">
          <Icon
            name="material-symbols:clock"
            class="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"
          />
          <input
            id="preferredTime"
            v-model="formData.preferredTime"
            type="time"
            class="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div> -->

      <!-- Submit Button -->
      <button
        type="submit"
        :disabled="loading"
        id="contact-form-submit"
        class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 transition-colors"
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
        {{ loading ? 'Sending Request...' : 'Request Callback' }}
      </button>
    </form>
  </section>
</template>
<script>
export default {
  name: 'WebsiteGrowthContactForm',
  inheritAttrs: false,
  customOptions: {},
}
</script>
<script setup>
import { ref } from 'vue'
const mail = useMail()
const loading = ref(false)
const mathProblem = ref({
  num1: 0,
  num2: 0,
})

const formData = ref({
  name: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  preferredTime: '',
  userAnswer: '',
})

const errors = ref({})

const validateForm = () => {
  errors.value = {}
  let isValid = true

  if (!formData.value.name.trim()) {
    errors.value.name = 'Name is required'
    isValid = false
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!formData.value.email) {
    errors.value.email = 'Email is required'
    isValid = false
  } else if (!emailRegex.test(formData.value.email)) {
    errors.value.email = 'Please enter a valid email'
    isValid = false
  }

  const phoneRegex = /^\d{15}$/
  const cleanedPhone = formData.value.phone.replace(/\D/g, '')
  if (!formData.value.phone) {
    errors.value.phone = 'Phone number is required'
    isValid = false
  }
  // else if (!phoneRegex.test(cleanedPhone)) {
  //   errors.value.phone = 'Please enter a valid 10-digit phone number'
  //   isValid = false
  // }

  if (!formData.value.service) {
    errors.value.service = 'Please select a service'
    isValid = false
  }
  if (
    Number(formData.value.userAnswer) !==
    mathProblem.value.num1 + mathProblem.value.num2
  ) {
    errors.value.challenge =
      'Incorrect answer to the security check. Please try again.'
    mathProblem.value = {
      num1: Math.floor(Math.random() * 10),
      num2: Math.floor(Math.random() * 10),
    }
    formData.userAnswer = ''
    isValid = false
  }

  return isValid
}

const handleSubmit = async () => {
  if (validateForm()) {
    loading.value = true
    // Simulate API call
    await new Promise((resolve) => {
      mail
        .send({
          from: formData.value.name,
          subject: 'Website Growth Request',
          text: 'New contact form submission',
          replyTo: formData.value.email,
          html: `<p>Name: ${formData.value.name}</p>
        <p>Email: ${formData.value.email}</p>
        <p>Company: ${formData.value.company}</p>
        <p>Website: ${formData.value.website}</p>
        <p>Service Interest: ${formData.value.service}</p>`,
        })
        .then(() => {
          if (dataLayer) {
            dataLayer.push({ event: 'website-growth-contact-submitted' })
          }
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
    mathProblem.value = {
      num1: Math.floor(Math.random() * 10),
      num2: Math.floor(Math.random() * 10),
    }
    // Submit logic here
    console.log('Form submitted:', formData.value)
    // Reset form
    formData.value = {
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      preferredTime: '',
      userAnswer: '',
    }
    errors.value = {}
  }
}
// computed formattedMathProblem
const formattedMathProblem = computed(() => {
  return `${mathProblem.value.num1} + ${mathProblem.value.num2}`
})
// on mounted generate new math problem
onMounted(() => {
  mathProblem.value = {
    num1: Math.floor(Math.random() * 10),
    num2: Math.floor(Math.random() * 10),
  }
})
</script>
