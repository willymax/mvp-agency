<template>
  <div class="flex flex-col gap-16">
    <WebsiteGrowthLandingHeroSection />
    <WebsiteGrowthLandingSocialProofSection />
    <WebsiteGrowthLandingFeaturesSection />
    <WebsiteGrowthLandingHowItWorksSection />
    <WebsiteGrowthLandingBenefitsSection />
    <WebsiteGrowthLandingRoadMapSection />
    <WebsiteGrowthLandingComparisonSection />
    <WebsiteGrowthLandingTestimonialsSection />
    <WebsiteGrowthLandingPricingSection />
    <WebsiteGrowthLandingFAQSection />
    <WebsiteGrowthLandingFreeAuditSection />
    <WebsiteGrowthLandingCalenderBookingSection />
  </div>
</template>

<script setup>
// Optional: Add page transition
definePageMeta({
  layout: 'website-growth',
  pageTransition: {
    name: 'page',
    mode: 'out-in',
  },
})
</script>

<style></style>
