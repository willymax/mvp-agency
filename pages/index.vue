<template>
  <div class="flex flex-col gap-16">
    <LandingHeroSection />
    <LandingSocialProofSection id="testimonials" />
    <LandingDevelopmentProcessSection id="how-it-works" />
    <LandingWhyChooseUs id="why-choose-us" />
    <LandingTechStack id="tech-stack" />
    <LandingPricing id="pricing" />
    <ClientOnly>
      <LandingContactForm id="contact-us" />
    </ClientOnly>
    <div id="features"></div>
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
