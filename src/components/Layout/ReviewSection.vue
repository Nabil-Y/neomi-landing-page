<script setup lang="ts">
import { Pagination, Autoplay, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import ReviewSlide from "../UI/ReviewSlide.vue";
import { clientReviews } from "@/data/clientReviews";
</script>

<template>
  <section class="review-section">
    <h2 class="review-section-title">Ce qu'en disent nos clients</h2>
    <swiper
      :modules="[Pagination, Autoplay, A11y]"
      :pagination="{ clickable: true }"
      :autoplay="{ delay: 7000 }"
      a11y
      loop
    >
      <swiper-slide v-for="client in clientReviews" :key="client.name">
        <ReviewSlide v-bind="client" />
      </swiper-slide>
    </swiper>
  </section>
</template>

<style scoped>
.review-section {
  background-color: var(--color-primary-transparent);
  margin: 0 16px;
}

.review-section-title {
  font-size: 18px;
  line-height: 40px;
  margin: 14px;
}

@media (min-width: 500px) {
  .review-section {
    padding: 32px;
  }
}

@media (min-width: 1200px) {
  .review-section {
    margin: 0;
  }
}
</style>
