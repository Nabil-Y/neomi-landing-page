<script setup lang="ts">
import Button from "@/components/UI/AppButton.vue";
import Logo from "@/components/UI/AppLogo.vue";
</script>

<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-left">
        <Logo />
      </div>
      <div class="footer-right">
        <div class="footer-text">Nous contacter</div>
        <Button class="footer-button">contact@neomi.immo</Button>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--color-grey);
  padding: 24px;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
}

.footer-right {
  text-align: right;
}

.footer-button {
  padding: 0;
  border: none;
  height: auto;
  background-color: transparent;
  color: var(--color-primary);
}

.footer-button:hover {
  background-color: transparent;
  color: var(--color-primary-hover);
}

@media (min-width: 500px) {
  .footer-left {
    margin-left: 64px;
  }
}
</style>
