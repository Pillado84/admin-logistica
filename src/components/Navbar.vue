<script setup lang="ts">
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm navbar-panel">
    <div class="container-fluid">

      <!-- Título o logo -->
      <span class="navbar-brand fw-semibold">
        Panel de Administración
      </span>

      <!-- Menú derecho -->
      <ul class="navbar-nav ms-auto align-items-center">

        <li class="nav-item me-3">
          <a href="#" class="nav-link">
            <i class="bi bi-bell fs-5"></i>
          </a>
        </li>

        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle d-flex align-items-center"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
          >
            <i class="bi bi-person-circle fs-5 me-2"></i>
            Admin
          </a>

          <ul class="dropdown-menu dropdown-menu-end">
            <li>
              <a class="dropdown-item" href="#">
                <i class="bi bi-gear me-2"></i> Configuración
              </a>
            </li>
            <li>
              <a class="dropdown-item text-danger" href="#">
                <i class="bi bi-box-arrow-right me-2"></i> Cerrar sesión
              </a>
            </li>
          </ul>
        </li>

      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar-panel {
  height: 60px;
}
</style>
