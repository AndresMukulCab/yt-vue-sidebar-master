<template>
  <div class="stats-container">
    <div class="stat-item" v-for="(stat, index) in stats" :key="index">
      <div class="stat-number">{{ stat.value }}</div>
      <div class="stat-label">{{ stat.label }}</div>
    </div>
    <RandomChart :data="stats" label="Dococumento entregados" backgroundColor="#42A5F5" />
    <RandomChart :data="stats" label="Documentos en revision" backgroundColor="#66BB6A" />
    <RandomChart :data="stats" label="Documentos aprobados" backgroundColor="#FFA726" />
    <RandomChart :data="stats" label="Documentos devueltos para correccion" backgroundColor="#AB47BC" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import RandomChart from '../components/RandomChart.vue';

const stats = ref([]);

const generateRandomStats = () => {
  const labels = ['Documentos entregados', 'Documentos en revision', 'Documentos aprobados', 'Documentos devueltos para correccion',];
  stats.value = labels.map(label => ({
    label: label,
    value: Math.floor(Math.random() * 9) + 1
  }));
};

onMounted(() => {
  generateRandomStats();
});
</script>

<style scoped>
.stats-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
.stat-item {
  background-color: #f5f5f5;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  flex: 1 1 calc(20% - 1rem);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
.stat-number {
  font-size: 2rem;
  font-weight: bold;
}
.stat-label {
  margin-top: 0.5rem;
  color: #666;
}
</style>
