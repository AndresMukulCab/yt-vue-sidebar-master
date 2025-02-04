<template>
  <div class="chart-container">
    <Bar :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

// Register Chart.js components
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

// Define props
const props = defineProps({
  data: {
    type: Array,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  backgroundColor: {
    type: String,
    required: true
  }
});

// Computed properties for chart data and options
const chartData = computed(() => {
  return {
    labels: props.data.map(item => item.label),
    datasets: [
      {
        label: props.label,
        backgroundColor: props.backgroundColor,
        data: props.data.map(item => item.value)
      }
    ]
  };
});

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'Estadísticas actuales'
    }
  }
};
</script>

<style scoped>
.chart-container {
  margin-top: 2rem;
  padding: 1rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
</style>
