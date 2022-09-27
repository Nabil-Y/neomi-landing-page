<script setup lang="ts">
import { Pagination, Autoplay, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import FeatureSlide from "@/components/UI/FeatureSlide.vue";
import { featureSlides } from "@/data/featureSlides";
</script>

<template>
  <swiper
    :modules="[Pagination, Autoplay, A11y]"
    :pagination="{ clickable: true }"
    :autoplay="{ delay: 7000 }"
    a11y
    loop
  >
    <swiper-slide
      v-for="slide in featureSlides"
      :key="slide.title"
      class="feature-slides-container"
    >
      <FeatureSlide v-bind="slide" />
    </swiper-slide>
  </swiper>
</template>
