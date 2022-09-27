<script setup lang="ts">
import TheHeader from "@/components/Layout/TheHeader.vue";
import HeroBanner from "@/components/Layout/HeroBanner.vue";
import TrustClient from "@/components/Layout/TrustClient.vue";
import FeatureCarousel from "@/components/Layout/FeatureCarousel.vue";
import ValueSection from "@/components/Layout/ValueSection.vue";
import ReviewSection from "@/components/Layout/ReviewSection.vue";
import ContactUs from "@/components/Layout/ContactUs.vue";
import TheFooter from "../components/Layout/TheFooter.vue";
import AppModal from "../components/UI/AppModal.vue";
import { useModalStore } from "@/stores/store";

const store = useModalStore();
</script>

<template>
  <TheHeader />
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
  <TheFooter />
  <AppModal v-if="store.isModalVisible" />
</template>

<style scoped>
.main-container {
  max-width: 1121px;
  margin: 0 auto;
}
</style>
