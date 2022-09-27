<script setup lang="ts">
import { useModalStore } from "@/stores/store";
const { toggleModal } = useModalStore();
</script>

<template>
  <button class="button-demo" @click.stop="toggleModal">
    <slot>Demander une démo</slot>
  </button>
</template>

<style scoped>
.button-demo {
  height: 42px;
  max-width: 182px;
  padding: 0 12px;

  color: var(--color-white);
  background: var(--color-primary);

  border: solid 1px var(--color-primary);
  cursor: pointer;

  font-weight: 600;
  font-size: 14px;
  font-family: inherit;
}

.button-demo:hover {
  background: var(--color-primary-hover);
}
</style>
