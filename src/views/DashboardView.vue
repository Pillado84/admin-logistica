<script setup lang="ts">
import DashboardChart from "../components/DashboardChart.vue"
</script>

<template>
  <div class="dashboard">

    <!-- TÍTULO -->
    <h2 class="mb-4 fw-semibold">Dashboard</h2>

    <!-- TARJETAS -->
    <div class="row g-3 mb-4">

      <div class="col-md-3">
        <div class="card shadow-sm border-0">
          <div class="card-body">
            <h6 class="text-muted">Envíos hoy</h6>
            <h3 class="fw-bold">128</h3>
            <p class="text-success small mb-0">
              <i class="bi bi-arrow-up"></i> +12% respecto ayer
            </p>
          </div>
        </div>
      </div>

      <div class="col-md-3">
        <div class="card shadow-sm border-0">
          <div class="card-body">
            <h6 class="text-muted">Transportes activos</h6>
            <h3 class="fw-bold">42</h3>
            <p class="text-primary small mb-0">
              <i class="bi bi-truck"></i> En ruta
            </p>
          </div>
        </div>
      </div>

      <div class="col-md-3">
        <div class="card shadow-sm border-0">
          <div class="card-body">
            <h6 class="text-muted">Devoluciones</h6>
            <h3 class="fw-bold">9</h3>
            <p class="text-danger small mb-0">
              <i class="bi bi-arrow-return-left"></i> Pendientes
            </p>
          </div>
        </div>
      </div>

      <div class="col-md-3">
        <div class="card shadow-sm border-0">
          <div class="card-body">
            <h6 class="text-muted">Clientes activos</h6>
            <h3 class="fw-bold">312</h3>
            <p class="text-muted small mb-0">
              <i class="bi bi-people"></i> Total registrados
            </p>
          </div>
        </div>
      </div>

    </div>

    <!-- GRÁFICA (placeholder) -->
    <div class="card shadow-sm border-0 mb-4">
      <div class="card-body">
        <h5 class="card-title">Actividad semanal</h5>
        <div class="chart-placeholder d-flex align-items-center justify-content-center">
          <DashboardChart />
        </div>
      </div>
    </div>

    <!-- TABLA -->
    <div class="card shadow-sm border-0">
      <div class="card-body">
        <h5 class="card-title mb-3">Últimos envíos</h5>

        <div class="table-responsive">
          <table class="table table-striped align-middle">
            <thead>
              <tr>
                <th>ID</th>
                <th>Cliente</th>
                <th>Estado</th>
                <th>Fecha</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#00124</td>
                <td>Juan Pérez</td>
                <td><span class="badge bg-success">Entregado</span></td>
                <td>18/02/2026</td>
                <td><button class="btn btn-sm btn-outline-primary">Ver</button></td>
              </tr>

              <tr>
                <td>#00125</td>
                <td>Logística Norte</td>
                <td><span class="badge bg-warning text-dark">En tránsito</span></td>
                <td>18/02/2026</td>
                <td><button class="btn btn-sm btn-outline-primary">Ver</button></td>
              </tr>

              <tr>
                <td>#00126</td>
                <td>María López</td>
                <td><span class="badge bg-danger">Retrasado</span></td>
                <td>17/02/2026</td>
                <td><button class="btn btn-sm btn-outline-primary">Ver</button></td>
              </tr>

            </tbody>
          </table>
        </div>

      </div>
    </div>

  </div>
</template>

<style scoped>
.chart-placeholder {
  height: 250px;
  background: #f8f9fa;
  border-radius: 6px;
}
</style>
