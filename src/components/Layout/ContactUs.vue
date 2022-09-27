<script setup lang="ts">
import Button from "../UI/AppButton.vue";
</script>

<template>
  <div class="contact">
    <div v-for="i in 5" :key="'bubble' + i" :class="'bubble' + i"></div>
    <div class="contact-title">
      En un rendez-vous, nous analysons vos besoins pour vous proposer la
      meilleure solution
    </div>
    <div class="contact-action">
      <input
        type="email"
        class="contact-input"
        placeholder="Votre adresse E-mail..."
      />
      <Button class="contact-button">Demander une démo</Button>
    </div>
  </div>
</template>

<style scoped>
.contact {
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  position: relative;
  overflow: hidden;
  max-width: 665px;

  padding: 32px;
  margin: 32px 16px;
  border-radius: 10px;

  background-color: var(--color-primary);
}

.contact-title {
  z-index: 2;
  max-width: 601px;
  margin: 0 auto 14px;

  font-weight: 600;
  font-size: 18px;
  text-align: center;
  line-height: 40px;
  color: var(--color-white);
}

.contact-action {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  z-index: 2;
  width: 100%;
}

.contact-input {
  width: 300px;
  height: 42px;
  padding: 8px;
  margin: 0 12px 12px;
  border: 1px solid var(--color-grey-light);
  border-radius: 3px;
}

.contact-button {
  margin: 0 12px;
  font-weight: 500;
  background-color: var(--color-white);
  color: var(--color-black);
}

.contact-button:hover {
  background-color: var(--color-white);
  color: var(--color-primary);
}

@media (min-width: 700px) {
  .contact {
    margin: 32px auto;
  }
}
</style>
