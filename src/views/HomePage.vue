<script setup lang="ts">
import TheHeader from "@/components/Layout/TheHeader.vue";
import TheMain from "../components/Layout/TheMain.vue";
import TheFooter from "../components/Layout/TheFooter.vue";
import AppModal from "../components/UI/AppModal.vue";

import { useModalStore } from "@/stores/store";
const store = useModalStore();
</script>

<template>
  <TheHeader />
  <TheMain />
  <TheFooter />
  <AppModal v-if="store.isModalVisible" />
</template>
