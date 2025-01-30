<template>
  <footer class="bg-gray-900 text-gray-300">
    <div class="max-w-7xl mx-auto px-4 py-12">
      <!-- {/* Trust Metrics Banner */} -->
      <div
        class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 pb-12 border-b border-gray-800"
      >
        <div
          v-for="(item, index) in achievements"
          :key="index"
          class="text-center"
        >
          <div class="text-2xl font-bold text-white mb-1">
            {{ item.number }}
          </div>
          <div class="text-sm text-gray-400">{{ item.label }}</div>
        </div>
      </div>

      <!-- Guarantees Section -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 pb-12 border-b border-gray-800"
      >
        <div
          v-for="(item, index) in guarantees"
          :key="index"
          class="flex items-center space-x-3"
        >
          <Icon :name="item.icon" class="text-blue-400" size="24" />
          <span class="text-sm">{{ item.text }}</span>
        </div>
      </div>
    </div>

    <!-- Client Testimonial Preview -->
    <div class="mb-12 pb-12 border-b border-gray-800">
      <div class="flex items-center justify-center space-x-2 mb-4">
        <Icon
          name="material-symbols:kid-star"
          v-for="(item, i) in 5"
          :key="i"
          class="text-yellow-400 fill-current"
          size="20"
        />
      </div>
      <p class="text-center text-sm italic max-w-2xl mx-auto">
        "Nalgilabs transformed our startup idea into reality in just 6 weeks.
        Their Kenyan team delivered exceptional quality at a fraction of Silicon
        Valley costs."
      </p>
      <p class="text-center text-xs mt-2 text-gray-400">
        - Elizabeth Mwenga, CEO of TechStart Inc.
      </p>
    </div>

    <!-- {/* Main Footer Content */} -->
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 mx-auto"
    >
      <!-- {/* Company Info */} -->
      <div class="space-y-4">
        <h3 class="text-white text-lg font-semibold">Nalgi Labs</h3>
        <p class="text-sm">
          Your trusted partner in software development. We combine Silicon
          Valley expertise with competitive Kenyan rates to deliver world-class
          MVPs and full-stack solutions.
        </p>
        <div class="flex items-center space-x-4">
          <img src="~/assets/images/shield.png" alt="ISO 27001" class="h-8" />
          <img
            src="~/assets/images/gdpr.png"
            alt="GDPR Compliant"
            class="h-8"
          />
        </div>
        <!-- <div class="flex space-x-4">
            <a href="#" class="hover:text-white transition-colors">
              <Facebook size="{20}" />
            </a>
            <a href="#" class="hover:text-white transition-colors">
              <Twitter size="{20}" />
            </a>
            <a href="#" class="hover:text-white transition-colors">
              <Linkedin size="{20}" />
            </a>
          </div> -->
      </div>

      <!-- {/* Services */} -->
      <div class="space-y-4">
        <h3 class="text-white text-lg font-semibold">Our Services</h3>
        <ul class="space-y-2 text-sm">
          <li>
            <a href="#" class="hover:text-white transition-colors"
              >MVP Development</a
            >
          </li>
          <li>
            <a href="#" class="hover:text-white transition-colors"
              >Full-Stack Teams</a
            >
          </li>
          <li>
            <a href="#" class="hover:text-white transition-colors"
              >UI/UX Design</a
            >
          </li>
          <li>
            <a href="#" class="hover:text-white transition-colors"
              >Cloud Solutions</a
            >
          </li>
          <li>
            <a href="#" class="hover:text-white transition-colors"
              >Mobile Development</a
            >
          </li>
        </ul>
      </div>

      <!-- {/* Quick Links */} -->
      <div class="space-y-4">
        <h3 class="text-white text-lg font-semibold">Quick Links</h3>
        <ul class="space-y-2 text-sm">
          <li>
            <a href="#" class="hover:text-white transition-colors">About Us</a>
          </li>
          <li>
            <a href="#" class="hover:text-white transition-colors"
              >Case Studies</a
            >
          </li>
          <li>
            <a href="#" class="hover:text-white transition-colors"
              >Client Reviews</a
            >
          </li>
          <li>
            <a href="#" class="hover:text-white transition-colors"
              >Code Quality Standards</a
            >
          </li>
          <li>
            <a href="#" class="hover:text-white transition-colors"
              >Our Guarantees</a
            >
          </li>
        </ul>
      </div>

      <!-- {/* Contact Info */} -->
      <div class="space-y-4">
        <h3 class="text-white text-lg font-semibold">Contact Us</h3>
        <ul class="space-y-3 text-sm">
          <li class="flex items-center space-x-2">
            <Icon name="material-symbols:home-pin-outline-rounded" size="16" />
            <span>Nairobi, Kenya</span>
          </li>
          <li class="flex items-center space-x-2">
            <Icon name="material-symbols:call" size="16" />
            <span>+254 (0) 706 356 815</span>
          </li>
          <li class="flex items-center space-x-2">
            <Icon name="material-symbols:mail" size="16" />
            <span>contact@nalgilabs.com</span>
          </li>
        </ul>
        <div class="pt-4">
          <NuxtLink to="#contact-us">
            <button
              class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Schedule a Free Consultation
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- {/* Bottom Bar */} -->
    <div class="mt-12 pt-8 border-t border-gray-800 px-4 mx-auto">
      <div
        class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
      >
        <p class="text-sm">
          © {{ currentYear }} Nalgi Labs. All rights reserved.
        </p>
        <div class="flex space-x-6 text-sm">
          <a href="#" class="hover:text-white transition-colors"
            >Privacy Policy</a
          >
          <a href="#" class="hover:text-white transition-colors"
            >Terms of Service</a
          >
          <a href="#" class="hover:text-white transition-colors"
            >Cookie Policy</a
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Icon } from '#components'

const currentYear = new Date().getFullYear()

const achievements = [
  { number: '50+', label: 'Projects Delivered' },
  { number: '30+', label: 'Happy Clients' },
  { number: '98%', label: 'On-time Delivery' },
  { number: '100%', label: 'Money-back Guarantee' },
]

const guarantees = [
  { icon: 'gravity-ui:shield', text: 'Secure Payment Protection' },
  { icon: 'gravity-ui:clock', text: '24/7 Support Coverage' },
  { icon: 'gravity-ui:circle-check', text: 'Quality Code Guarantee' },
  { icon: 'gravity-ui:gift', text: 'ISO 27001 Certified' },
]
</script>

<style></style>
