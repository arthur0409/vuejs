<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()

// programmatic navigation + query
function goSearch() {
  router.push({ path: '/user/99', query: { tab: 'profile' } })
}
</script>

<template>
  <h1>Home</h1>
  <p>Query hiện tại: {{ route.query }}</p>
  <button @click="goSearch">Đi tới User 99 với query ?tab=profile</button>
</template>
