<template>
  <section class="bg-white py-16 px-4">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold text-center mb-12">
        Frequently Asked Questions
      </h2>
      <div class="space-y-6">
        <div class="bg-gray-100 rounded-lg p-6">
          <h3
            class="text-xl font-semibold mb-4 flex items-center justify-between cursor-pointer"
            @click="toggleFAQ(0)"
          >
            How quickly can I expect to see results?
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </h3>
          <p v-if="openFAQ === 0" class="text-gray-700 mt-2">
            Most clients see initial improvements within the first 30-60 days,
            with significant growth typically occurring within 3-6 months.
          </p>
        </div>
        <div class="bg-gray-100 rounded-lg p-6">
          <h3
            class="text-xl font-semibold mb-4 flex items-center justify-between cursor-pointer"
            @click="toggleFAQ(1)"
          >
            How long does it typically take to implement your solutions?
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </h3>
          <p v-if="openFAQ === 1" class="text-gray-700 mt-2">
            Initial implementation usually takes 2-4 weeks, depending on your
            website's current state and the services selected. During this
            period, we'll set up tracking tools, implement security measures,
            and begin core optimizations.
          </p>
        </div>
        <div class="bg-gray-100 rounded-lg p-6">
          <h3
            class="text-xl font-semibold mb-4 flex items-center justify-between cursor-pointer"
            @click="toggleFAQ(2)"
          >
            What makes your service different from others?
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </h3>
          <p v-if="openFAQ === 2" class="text-gray-700 mt-2">
            We focus on tangible business growth, not just technical
            maintenance. Our service is designed to increase your website's
            ability to generate leads, convert customers, and drive revenue.
          </p>
        </div>
        <div class="bg-gray-100 rounded-lg p-6">
          <h3
            class="text-xl font-semibold mb-4 flex items-center justify-between cursor-pointer"
            @click="toggleFAQ(3)"
          >
            Do you offer a free trial or guarantee?
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </h3>
          <p v-if="openFAQ === 3" class="text-gray-700 mt-2">
            We offer a free website audit and performance assessment.
            Additionally, we provide detailed monthly reports so you can see the
            exact value we're delivering to your business.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FAQSection',
  data() {
    return {
      openFAQ: null,
    }
  },
  methods: {
    toggleFAQ(index) {
      this.openFAQ = this.openFAQ === index ? null : index
    },
  },
}
</script>
