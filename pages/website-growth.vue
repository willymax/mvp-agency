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
useServerSeoMeta({
  title: 'NalgiLabs | Website Growth Service',
  description:
    'Optimize your website to attract more visitors, convert them into customers, and keep them coming back—all while ensuring it’s secure, fast, and always online.',
  ogDescription:
    'Your website should be performing better and bringing consant leads',
  ogTitle: 'Turn Your Website into a 24/7 Sales Machine',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})
</script>

<style></style>
