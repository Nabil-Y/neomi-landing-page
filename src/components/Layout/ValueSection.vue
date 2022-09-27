<script setup lang="ts">
import { valueBlocks } from "@/data/valueBlocks";
import ValueBlock from "@/components/UI/ValueBlock.vue";
</script>

<template>
  <section
    v-for="block in valueBlocks"
    :key="block.title"
    class="feature-slides-container"
  >
    <ValueBlock v-bind="block" />
  </section>
</template>
