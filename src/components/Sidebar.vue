<script setup lang="ts">
</script>

<template>
  <!-- SIDEBAR ESCRITORIO -->
  <aside class="bg-dark text-white p-3 flex-shrink-0 d-none d-md-block sidebar-desktop">
    <h4 class="mb-4">Admin Panel</h4>

    <ul class="nav flex-column">
      <li class="nav-item mb-2">
        <a href="#" class="nav-link text-white">
          <i class="bi bi-speedometer2 me-2"></i> Dashboard
        </a>
      </li>

      <li class="nav-item mb-2">
        <a href="#" class="nav-link text-white">
          <i class="bi bi-truck me-2"></i> Transportes
        </a>
      </li>

      <li class="nav-item mb-2">
        <a href="#" class="nav-link text-white">
          <i class="bi bi-box-seam me-2"></i> Envíos
        </a>
      </li>

      <li class="nav-item mb-2">
        <a href="#" class="nav-link text-white">
          <i class="bi bi-arrow-return-left me-2"></i> Devoluciones
        </a>
      </li>

      <li class="nav-item mb-2">
        <a href="#" class="nav-link text-white">
          <i class="bi bi-people me-2"></i> Clientes
        </a>
      </li>

      <li class="nav-item mb-2">
        <a href="#" class="nav-link text-white">
          <i class="bi bi-person-badge me-2"></i> Usuarios
        </a>
      </li>
    </ul>
  </aside>

  <!-- SIDEBAR MÓVIL (OFFCANVAS) -->
  <div class="offcanvas offcanvas-start bg-dark text-white" tabindex="-1" id="mobileSidebar">
    <div class="offcanvas-header">
      <h4 class="offcanvas-title">Admin Panel</h4>
      <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"></button>
    </div>

    <div class="offcanvas-body">
      <ul class="nav flex-column">
        <li class="nav-item mb-2">
          <a href="#" class="nav-link text-white">
            <i class="bi bi-speedometer2 me-2"></i> Dashboard
          </a>
        </li>

        <li class="nav-item mb-2">
          <a href="#" class="nav-link text-white">
            <i class="bi bi-truck me-2"></i> Transportes
          </a>
        </li>

        <li class="nav-item mb-2">
          <a href="#" class="nav-link text-white">
            <i class="bi bi-box-seam me-2"></i> Envíos
          </a>
        </li>

        <li class="nav-item mb-2">
          <a href="#" class="nav-link text-white">
            <i class="bi bi-arrow-return-left me-2"></i> Devoluciones
          </a>
        </li>

        <li class="nav-item mb-2">
          <a href="#" class="nav-link text-white">
            <i class="bi bi-people me-2"></i> Clientes
          </a>
        </li>

        <li class="nav-item mb-2">
          <a href="#" class="nav-link text-white">
            <i class="bi bi-person-badge me-2"></i> Usuarios
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.sidebar-desktop {
  width: 250px;
  min-height: 100vh;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}
</style>
