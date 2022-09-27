<script setup lang="ts">
import Button from "@/components/UI/AppButton.vue";
</script>

<template>
  <div class="hero">
    <div class="hero-slogan">
      <h1 class="hero-title">
        Neomi, la plateforme <span class="font-orange">collaborative</span> pour
        les professionnels de la promotion immobilière
      </h1>
      <Button>Demander une démo</Button>
    </div>
  </div>
</template>

<style scoped>
.hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;
  height: 390px;
  margin-top: 30px;

  text-align: center;

  background-image: url("/static/img/homepage/hero-banner.jpg");
  background-repeat: repeat-x;
  background-position: 0 30px;
}
.hero-slogan {
  position: absolute;
  z-index: 1;
  max-width: 400px;
  padding: 0 12px;
}

.hero-title {
  font-size: 18px;
  line-height: 40px;
  font-weight: 600;
  margin-bottom: 30px;
}

.hero::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.1);
}

@media (min-width: 480px) {
  .hero {
    height: 440px;
    margin-top: 80px;
    background-position: 0 -35px;
  }
  .hero-title {
    margin-bottom: 50px;
  }
}
</style>
