<template>
  <Topbar 
    :app-name="'My Custom App'"
    :app-subtitle="'Dashboard'"
    :on-logo-click="handleLogoClick"
    :menu-items="customMenuItems"
    :on-menu-click="handleMenuClick"
    :user-info="customUserInfo"/>
  <Sidebar
    :isExpanded = "true" />
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()

const customMenuItems = ref([
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: 'dashboard-icon',
    href: '/dashboard' // or to: '/dashboard' for Vue Router
  },
  {
    id: 'users',
    label: 'Users',
    icon: 'reports-icon',
    href: '/users'
  }
])

const customUserInfo = ref({
  name: 'Alice Johnson',
  role: 'Product Manager',
  avatar: 'AJ'
})

const handleMenuClick = (item) => {
  if (item.href) {
    window.location.href = item.href // External link
  } else if (item.to) {
    router.push(item.to) // Vue Router
  }
}

const handleLogoClick = () => {
  router.push('/') // Navigate to home
}
</script>