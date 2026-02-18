<template>
  <div class="layout-container d-flex">
    <Sidebar />
    <div class="flex-grow-1 d-flex flex-column">
      <Navbar />
      <main class="p-4">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style scoped>
.layout-container {
  min-height: 100vh;
}
</style>

<script setup lang="ts">
  import Sidebar from './components/Sidebar.vue'
  import Navbar from './components/Navbar.vue'
</script>