<script setup lang="ts">
import Nav from './component/Nav.vue';
</script>

<template>
  <Nav />
  <main class="container">
    <router-view />
  </main>
</template>

<style scoped>
.container { padding: 16px; }
</style>
