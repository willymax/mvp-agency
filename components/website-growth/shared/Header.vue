<template>
  <header class="fixed top-0 w-full z-50 transition-all duration-300">
    <div
      :class="['w-full', isScrolled ? 'bg-white shadow-md' : 'bg-transparent']"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-center items-center h-20">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <img
              src="~/assets/images/nalgi-labs-logo.svg"
              alt="Website Growth Engine"
              class="h-16"
            />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped></style>
