<script setup lang="ts">
const clientAlts = ["CA CIB", "Nexity", "Bouygues Immobilier", "CA Immobilier"];
</script>

<template>
  <section class="trust-clients">
    <h2 class="trust-clients-title">
      <span class="font-orange"
        >Grâce à Neomi, plus de 500 professionnels de toutes tailles</span
      >
      <br />
      de la promotion immobilière optimisent leur activité
    </h2>
    <ul class="trust-clients-list">
      <li v-for="i in 4" :key="i + 'client'">
        <img
          class="trust-clients-logo"
          :src="`/static/img/clients/client${i}\.png`"
          :alt="'Logo ' + clientAlts[i]"
        />
      </li>
    </ul>
  </section>
</template>

<style scoped>
.trust-clients {
  margin-top: 32px;
  margin-bottom: 16px;
}

.trust-clients-title {
  font-weight: 600;
  line-height: 40px;
  font-size: 18px;
  text-align: center;
  padding: 12px;
}

.trust-clients-list {
  display: flex;
  justify-content: space-evenly;
  max-width: 800px;
  margin: 20px auto;
}

.trust-clients-logo {
  height: 36px;
  width: 100%;
}

@media (min-width: 480px) {
  .trust-clients {
    margin-top: 64px;

    margin-bottom: 32px;
  }
  .trust-clients-logo {
    height: 60px;
  }
}
</style>
