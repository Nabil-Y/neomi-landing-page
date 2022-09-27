<script setup lang="ts">
defineProps<{
  html: string;
  name: string;
  job: string;
  company: string;
  clientFrom: string;
  image: string;
}>();
</script>

<template>
  <div class="review-slide">
    <div>
      <img class="quotes" src="/static/svg/quote.svg" alt="guillemets" />
    </div>
    <p v-html="html" class="user-text"></p>
    <hr class="review-separator" />
    <div class="user-infos">
      <div class="user-name-block">
        <div class="user-name">{{ name }}</div>
        <span class="font-bold">{{ job }} -</span>
        <span class="font-bold font-orange"> {{ company }}</span>
        <div class="font-bold font-grey">{{ clientFrom }}</div>
      </div>
      <img
        class="user-img"
        :src="image"
        alt="photo utilisateur"
        loading="lazy"
      />
    </div>
  </div>
</template>

<style scoped>
.review-slide {
  padding: 24px;
  background-color: var(--color-white);
  border: 1px solid var(--color-grey-light);
  border-radius: 14px;
  margin-bottom: 40px;
  cursor: grabbing;
}
.quotes {
  height: 16px;
  width: 23px;
}
.user-img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
.user-infos {
  display: flex;
  justify-content: flex-end;
  align-content: center;

  text-align: right;
  margin-top: 10px;
}

.user-name-block {
  align-self: center;
  margin-right: 10px;
}
</style>
