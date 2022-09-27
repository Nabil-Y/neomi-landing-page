<script setup lang="ts">
import Button from "./AppButton.vue";
defineProps<{
  title: string;
  image: string;
  alt: string;
  html: string;
  reversed: boolean;
}>();
</script>

<template>
  <div class="value-block">
    <div class="value-block-left">
      <h2 class="value-block-title">{{ title }}</h2>
      <div class="separator"></div>
      <div v-html="html" class="value-block-text"></div>
      <Button>Demander une démo</Button>
    </div>

    <div :class="reversed ? 'reversed' : ''">
      <img class="value-block-img" :src="image" :alt="alt" />
    </div>
  </div>
</template>

<style scoped>
.value-block {
  max-width: 595px;
  padding: 0 16px;
  margin: 0 auto;
}

.value-block-left {
  max-width: 420px;
  margin: 0 auto;
}

.value-block-img {
  max-height: 400px;
  margin: 24px 0;
}

.value-block-title {
  font-size: 18px;
}

@media (min-width: 1200px) {
  .value-block {
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    padding: 0;
  }
  .value-block-left {
    margin: 0;
  }
  .value-block-img {
    margin-top: 0;
  }

  .reversed {
    order: -1;
  }
}
</style>
