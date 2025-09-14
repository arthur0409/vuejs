<script setup lang="ts">
import { authStore } from '@/stores/authStore'
import { useRoute, useRouter } from 'vue-router'

const auth = authStore()
const route = useRoute()
const router = useRouter()

async function handleLogin() {
  const ok = await auth.login('TGL', '123') // đổi pass để test fail
  if (ok && route.query.redirect) {
    router.replace(String(route.query.redirect))
  }
}
</script>

<template>
  <nav class="nav">
    <router-link :to="{ name: 'home' }">Home</router-link>
    <router-link :to="{ name: 'about' }">About</router-link>
    <router-link :to="{ name: 'user', params: { id: 42 } }">User 42</router-link>
    <router-link :to="{ name: 'dashboard' }">Dashboard (Protected)</router-link>

    <span class="spacer" />
    <template v-if="!auth.isLogin">
      <button @click="handleLogin">Login</button>
    </template>
    <template v-else>
      <span>Hi, {{ auth.user!.name }}</span>
      <!-- //<button @click="auth.()">Logout</button> -->
    </template>
  </nav>
</template>

<style scoped>
.nav { display:flex; gap:12px; align-items:center; padding:10px; border-bottom:1px solid #eee; }
.spacer { flex:1; }
a { text-decoration:none; }
.active-link { color:#42b883; font-weight:600; }
.exact-active-link { text-decoration: underline; }
button { padding:6px 10px; }
</style>
