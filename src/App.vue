<template>
  <!-- Si NO está autenticado -->
  <div v-if="!isAuthenticated" class="auth-container">
    <RouterView />
  </div>

  <!-- Si SÍ está autenticado -->
  <div v-else class="layout-container d-flex flex-column flex-md-row">
    <Sidebar />

    <div class="flex-grow-1 d-flex flex-column">
      <Navbar :user="user" />

      <main class="p-3 p-md-4">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { isTokenExpired, getUserFromToken } from '@/utils/auth'
import type { JwtPayload } from "jwt-decode"
import Sidebar from './components/Sidebar.vue'
import Navbar from './components/Navbar.vue'

const userFromToken = getUserFromToken()
const user = ref<JwtPayload | null>(null)
if (userFromToken && "exp" in userFromToken) {
  user.value = userFromToken
}

// Comprobación simple basada en localStorage
const isAuthenticated = computed(() => {
  return !!localStorage.getItem('token')
})

onMounted(() => {
  const router = useRouter() 
  if (isTokenExpired()) { 
    localStorage.removeItem("token")
    router.push('/login')
    return 
  }

  const userFromToken = getUserFromToken()
  if (!userFromToken || !("exp" in userFromToken)) { 
    router.push('/login') 
    return 
  }
  

  console.log("Usuario actual:", user.value)
  const expirationDate = new Date((user.value?.exp ?? 0) * 1000)
  console.log("Fecha de expiración:", expirationDate.toLocaleString())
})
</script>

<style scoped>
.layout-container {
  min-height: 100vh;
}

/* Centrar login/registro */
.auth-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
