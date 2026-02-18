<script setup lang="ts">
import VueApexCharts from "vue3-apexcharts"
import type { ApexOptions } from "apexcharts"

const series = [
  {
    name: "Envíos",
    data: [30, 42, 55, 48, 62, 70, 65] // datos estáticos
  }
]

const chartOptions: ApexOptions = {
  chart: {
    type: "area",
    height: 250,
    toolbar: { show: false }
  },
  stroke: {
    curve: "smooth",
    width: 3
  },
  dataLabels: {
    enabled: false
  },
  xaxis: {
    categories: ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"]
  },
  colors: ["#0d6efd"],
  fill: {
    opacity: 0.3
  },
  grid: {
    strokeDashArray: 4
  }
}
</script>

<template>
  <div class="chart-wrapper">
    <VueApexCharts
      type="area"
      height="250"
      :options="chartOptions"
      :series="series"
    />
  </div>
</template>

<style scoped>
.chart-wrapper {
  width: 100%;
}
</style>