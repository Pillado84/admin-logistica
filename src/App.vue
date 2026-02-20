<template>
  <!-- Si NO está autenticado -->
  <div v-if="!isAuthenticated" class="auth-container">
    <RouterView />
  </div>

  <!-- Si SÍ está autenticado -->
  <div v-else class="layout-container d-flex flex-column flex-md-row">
    <Sidebar />

    <div class="flex-grow-1 d-flex flex-column">
      <Navbar />

      <main class="p-3 p-md-4">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Sidebar from './components/Sidebar.vue'
import Navbar from './components/Navbar.vue'

// Comprobación simple basada en localStorage
const isAuthenticated = computed(() => {
  return !!localStorage.getItem('token')
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
