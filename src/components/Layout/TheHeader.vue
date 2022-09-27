<script setup lang="ts">
import Button from "@/components/UI/AppButton.vue";
import Logo from "@/components/UI/AppLogo.vue";
</script>

<template>
  <a class="sr-only" href="#skip-nav">Skip to main content</a>

  <header class="header sticky">
    <Logo />

    <div class="header-nav">
      <nav class="nav">
        <span class="already-user">Déja utilisateur?</span>
        <a href="#">Me connecter</a>
      </nav>
      <Button>Demander une démo</Button>
    </div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-content: center;

  height: 80px;
  background-color: var(--color-white);
  box-shadow: var(--shadow);
}

.sticky {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
}

.header-nav {
  display: flex;
  justify-content: center;
  align-items: center;
}

.header-nav > * {
  margin: 0 8px;
}

.nav {
  white-space: nowrap;
  font-weight: 600;
}

.nav .already-user {
  display: none;
}

@media (min-width: 760px) {
  .header {
    padding-left: 64px;
  }
  .nav {
    display: flex;
  }
  .nav .already-user {
    display: block;
    margin-right: 16px;
  }
}
</style>
