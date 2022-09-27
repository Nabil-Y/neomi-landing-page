<script setup lang="ts">
defineProps<{
  title: string;
  image: string;
  alt: string;
  html: string;
}>();
</script>

<template>
  <div class="feature-slide">
    <div class="feature-slide-left">
      <h2 class="feature-slide-title">{{ title }}</h2>
      <div class="separator"></div>
      <div v-html="html" class="feature-slide-text"></div>
    </div>

    <div class="feature-slide-right">
      <img :src="image" :alt="alt" loading="lazy" />
    </div>
  </div>
</template>

<style scoped>
.feature-slide {
  cursor: grabbing;
  max-width: 420px;
  padding: 0 16px;
  margin: 0 auto;
}

.feature-slide-right {
  max-width: 500px;
  margin-bottom: 24px;
}

.feature-slide-title {
  font-size: 18px;
}

@media (min-width: 1200px) {
  .feature-slide {
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    padding: 80px 0;
  }
  .feature-slide-left {
    max-width: 400px;
  }
}
</style>
