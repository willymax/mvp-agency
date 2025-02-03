<template>
  <div class="text-center mb-12">
    <h2 class="text-3xl font-bold text-gray-900">
      Be quick! Spots are almost gone for {{ currentMonth }}.
    </h2>
    <div
      class="calendly-inline-widget"
      data-url="https://calendly.com/william-k-makau/30min"
      style="min-width: 320px; height: 630px"
    />
  </div>
</template>

<script lang="ts" setup>
const calendly = useCalendly()
const currentMonth = new Date().toLocaleString('default', { month: 'long' })

onMounted(() => {
  calendly.initInlineWidget()
})
</script>

<style lang="scss" scoped></style>
