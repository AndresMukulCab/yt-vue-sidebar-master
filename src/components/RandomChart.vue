<template>
  <div class="chart-container">
    <Bar :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

// Registra los componentes de Chart.js
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

// Define las props
const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  backgroundColor: {
    type: String,
    required: true,
  },
});

// Datos del gráfico
const chartData = computed(() => {
  return {
    labels: props.data.map((item) => item.label),
    datasets: [
      {
        label: props.label,
        backgroundColor: props.backgroundColor,
        data: props.data.map((item) => item.value),
      },
    ],
  };
});

// Opciones del gráfico
const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: props.label,
    },
  },
};
</script>

<style scoped>
.chart-container {
  background-color: #ffffff;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
</style>