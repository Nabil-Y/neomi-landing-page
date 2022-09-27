import { ref } from "vue";
import { defineStore } from "pinia";

export const useModalStore = defineStore("modal", () => {
  const isModalVisible = ref(false);
  const toggleModal = () => {
    isModalVisible.value = !isModalVisible.value;

    if (typeof window === "object") {
      document.body.classList.toggle("no-scroll");
    }
  };

  return { isModalVisible, toggleModal };
});
