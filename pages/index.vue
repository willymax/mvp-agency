<template>
  <div class="flex flex-col gap-16">
    <LandingHeroSection />
    <LandingSocialProofSection id="testimonials" />
    <LandingDevelopmentProcessSection id="how-it-works" />
    <LandingWhyChooseUs id="why-choose-us" />
    <LandingTechStack id="tech-stack" />
    <LandingPricing id="pricing" />
    <LandingContactForm id="contact-us" />
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
useServerSeoMeta({
  title:
    'NalgiLabs | Affordable Full-Stack Development Teams for Startups & SaaS Founders',
  description:
    'NalgiLabs provides affordable, full-stack development teams for startups, SaaS founders, and entrepreneurs. Build your MVP on time, within budget, and with high-quality results. Based in Kenya, we deliver cost-effective solutions without compromising on quality.',
  ogDescription:
    'Full-stack development teams for startups, SaaS founders, and entrepreneurs. Launch your ideas on time, within budget, and with high-quality results.',
  ogTitle: 'A software devlopment team you can rely on',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})
</script>

<style></style>
