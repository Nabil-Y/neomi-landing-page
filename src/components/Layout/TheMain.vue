<script setup lang="ts">
import HeroBanner from "@/components/Layout/HeroBanner.vue";
import TrustClient from "@/components/Layout/TrustClient.vue";
import FeatureCarousel from "@/components/Layout/FeatureCarousel.vue";
import ValueSection from "@/components/Layout/ValueSection.vue";
import ReviewSection from "@/components/Layout/ReviewSection.vue";
import ContactUs from "@/components/Layout/ContactUs.vue";
</script>

<template>
  <main id="#skip-nav">
    <HeroBanner />
    <div class="main-container">
      <TrustClient />
      <FeatureCarousel />
      <ValueSection />
      <ReviewSection />
      <ContactUs />
    </div>
  </main>
</template>

<style scoped>
.main-container {
  max-width: 1121px;
  margin: 0 auto;
}
</style>
