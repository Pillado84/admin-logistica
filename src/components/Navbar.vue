<script setup lang="ts">
</script>

<template>
  <nav class="navbar navbar-light bg-light shadow-sm px-3">
    <div class="container-fluid">

      <!-- VISTA MÓVIL -->
      <div class="d-flex d-md-none flex-column w-100">

        <!-- TÍTULO ARRIBA -->
        <div class="fw-semibold mb-2">
          Panel de Administración
        </div>

        <!-- FILA: HAMBURGUESA IZQ + ICONOS DER -->
        <div class="d-flex justify-content-between align-items-center">

          <!-- Botón hamburguesa -->
          <button
            class="btn btn-outline-secondary"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileSidebar"
          >
            <i class="bi bi-list fs-4"></i>
          </button>

          <!-- Iconos derecha -->
          <div class="d-flex align-items-center">

            <a href="#" class="nav-link me-3">
              <i class="bi bi-bell fs-5"></i>
            </a>

            <div class="dropdown">
              <a
                class="nav-link dropdown-toggle d-flex align-items-center"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                <i class="bi bi-person-circle fs-5"></i>
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
            </div>

          </div>
        </div>
      </div>

      <!-- VISTA ESCRITORIO -->
      <div class="d-none d-md-flex w-100 align-items-center justify-content-between">
        <span class="navbar-brand fw-semibold">
          Panel de Administración
        </span>

        <ul class="navbar-nav d-flex flex-row align-items-center">

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

    </div>
  </nav>
</template>

<style scoped>
</style>