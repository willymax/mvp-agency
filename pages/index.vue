<template>
  <div class="flex flex-col gap-16">
    <LandingHeroSection />
    <LandingSocialProofSection id="testimonials" />
    <LandingDevelopmentProcessSection />
    <LandingWhyChooseUs />
    <LandingTechStack />
    <!-- <LandingContactForm id="contact-us" /> -->
  </div>
</template>

<script setup>
// Optional: Add page transition
definePageMeta({
  pageTransition: {
    name: 'page',
    mode: 'out-in',
  },
})
</script>

<style></style>
