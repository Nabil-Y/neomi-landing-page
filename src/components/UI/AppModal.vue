<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import { useModalStore } from "@/stores/store";
import Button from "./AppButton.vue";

const store = useModalStore();
const { toggleModal } = store;

onMounted(() => {
  const script = document.createElement("script");
  script.src =
    "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";
  script.id = "modal";
  script.defer = true;
  document.body.appendChild(script);
});

onUnmounted(() => {
  const script = document.querySelector("#modal")!;
  document.body.removeChild(script);
});
</script>

<template>
  <div class="modal" @click="toggleModal" data-testid="modal">
    <div class="modal-wrapper">
      <!-- Start of Meetings Embed Script -->
      <div
        class="meetings-iframe-container modal-hub"
        data-src="https://meetings-eu1.hubspot.com/nabil-yassine?embed=true"
      ></div>
      <!-- End of Meetings Embed Script -->

      <div class="modal-footer">
        <Button class="modal-button">Retour</Button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal {
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: var(--shadow);
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
}

.modal-wrapper {
  position: relative;

  max-height: 815px;
  height: 100%;
  max-width: 900px;
  width: 100%;

  border-radius: 10px;
  background: var(--color-white);
  box-shadow: var(--shadow);
}
.modal-hub {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow-x: auto;
}

.modal-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: flex-end;

  border-radius: 0 10px 10px;
  background: var(--color-white);
}

.modal-button {
  margin: 12px 24px;
  font-weight: normal;
  background-color: var(--color-white);
  color: var(--color-black);
}

.modal-button:hover {
  color: var(--color-white);
}
</style>
