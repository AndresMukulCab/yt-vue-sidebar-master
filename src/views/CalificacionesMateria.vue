<template>
    <div class="calificaciones-materia-view">
      <h1>Calificaciones de {{ subjectName }}</h1>
      <div v-if="calificaciones.length">
        <table>
          <thead>
            <tr>
              <th>Estudiante</th>
              <th>Calificación</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="calificacion in calificaciones" :key="calificacion.id">
              <td>{{ calificacion.estudiante }}</td>
              <td>{{ calificacion.calificacion }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else>
        <p>No hay calificaciones disponibles para esta materia.</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  const groupId = route.params.groupId;
  const subjectId = route.params.subjectId;
  
  const subjectName = ref('');
  const calificaciones = ref([]);
  
  onMounted(async () => {
    // Simula la carga de datos desde una API o un archivo
    const data = await fetchCalificaciones(groupId, subjectId);
    subjectName.value = data.subjectName;
    calificaciones.value = data.calificaciones;
  });
  
  const fetchCalificaciones = async (groupId, subjectId) => {
    // Aquí deberías hacer una llamada a una API o cargar los datos desde un archivo
    // Esto es solo un ejemplo
    return {
      subjectName: 'Desarrollo Web II', // Esto debería ser dinámico según el subjectId
      calificaciones: [
        { id: 1, estudiante: 'Juan Perez', calificacion: 85 },
        { id: 2, estudiante: 'Maria Lopez', calificacion: 90 },
        // Más calificaciones...
      ]
    };
  };
  </script>
  
  <style scoped>
  .calificaciones-materia-view {
    padding: 2rem;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 1rem;
  }
  
  th, td {
    padding: 0.75rem;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
  
  th {
    background-color: #f5f5f5;
  }
  </style>