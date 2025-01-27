<template>
  <div class="flex flex-col gap-16">
    <LandingHeroSection />
    <LandingSocialProofSection id="testimonials" />
    <LandingDevelopmentProcessSection id="how-it-works" />
    <LandingWhyChooseUs id="why-choose-us" />
    <LandingTechStack id="tech-stack" />
    <LandingContactForm id="contact-us" />
    <div id="features"></div>
    <LandingPricing id="pricing" />
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
