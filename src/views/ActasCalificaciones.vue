<template>
    <div class="acta-calificaciones-view">
      <!-- Título de la vista -->
      <h1>Acta de Calificaciones</h1>
  
      <!-- Controles de filtrado y búsqueda -->
      <div class="controls">
        <!-- Filtro por curso -->
        <div class="filter">
          <label for="curso">Filtrar por curso:</label>
          <select id="curso" v-model="selectedCourse">
            <option value="">Todos</option>
            <option v-for="course in courses" :key="course.id" :value="course.id">
              {{ course.name }}
            </option>
          </select>
        </div>
  
        <!-- Buscador de estudiantes -->
        <div class="search-bar">
          <input
            type="text"
            placeholder="Buscar estudiante..."
            v-model="searchQuery"
          />
          <span class="material-icons">search</span>
        </div>
      </div>
  
      <!-- Tabla de calificaciones -->
      <div class="content-box">
        <table class="calificaciones-table">
          <thead>
            <tr>
              <th>Estudiante</th>
              <th>Curso</th>
              <th>Calificación</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(grade, index) in filteredGrades" :key="index">
              <td>{{ grade.student }}</td>
              <td>{{ grade.course }}</td>
              <td>{{ grade.score }}</td>
              <td>
                <span :class="['status', grade.status.toLowerCase()]">
                  {{ grade.status }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  // Datos de ejemplo para cursos y calificaciones
  const courses = [
    { id: 1, name: "Administracion BD" },
    { id: 2, name: "Desarrollo Web II" },
    { id: 3, name: "Estructura datos" },
  ];
  
  const grades = [
    { student: "Andres Oswaldo Mukul Cab", course: "Desarrollo Web II", score: 85, status: "Aprobado" },
    { student: "Kevin Jesus Yam Sanchez", course: "Desarrollo Web II", score: 92, status: "Aprobado" },
    { student: "Angel Alberto Sulub Castellanos", course: "Desarrollo Web II", score: 78, status: "Aprobado" },
    { student: "Angel Alexis Nolasco Acosta", course: "Desarrollo Web II", score: 45, status: "Reprobado" },
    { student: "Yaxelen Mejia Diaz", course: "Desarrollo Web II", score: 88, status: "Aprobado" },
    { student: "Emiliano", course: "Desarrollo Web II", score: 95, status: "Aprobado" },
  ];
  
  // Filtros y búsqueda
  const selectedCourse = ref("");
  const searchQuery = ref("");
  
  // Filtrar calificaciones
  const filteredGrades = computed(() => {
    let filtered = grades;
  
    // Filtrar por curso
    if (selectedCourse.value) {
      const courseName = courses.find(course => course.id === selectedCourse.value)?.name;
      filtered = filtered.filter(grade => grade.course === courseName);
    }
  
    // Filtrar por búsqueda
    if (searchQuery.value) {
      filtered = filtered.filter(grade =>
        grade.student.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    }
  
    return filtered;
  });
  </script>
  
  <style lang="scss" scoped>
  .acta-calificaciones-view {
    flex-grow: 1; /* Ocupa el espacio restante junto al sidebar */
    padding: 2rem;
    margin-left: var(--sidebar-width); /* Respeta el ancho del sidebar */
    max-width: 1200px;
    margin: 0 auto;
  
    h1 {
      font-size: 2rem;
      margin-bottom: 1.5rem;
      color: var(--dark);
      text-align: center; /* Centrar el título */
    }
  
    .controls {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5rem;
  
      .filter {
        display: flex;
        align-items: center;
        gap: 0.5rem;
  
        label {
          font-size: 1rem;
          color: var(--dark);
        }
  
        select {
          padding: 0.5rem;
          border-radius: 0.25rem;
          border: 1px solid var(--light);
          background-color: white;
          font-size: 1rem;
        }
      }
  
      .search-bar {
        display: flex;
        align-items: center;
        background-color: white;
        border-radius: 0.5rem;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        padding: 0.5rem 1rem;
  
        input {
          flex-grow: 1;
          border: none;
          outline: none;
          font-size: 1rem;
        }
  
        .material-icons {
          color: var(--primary);
          cursor: pointer;
        }
      }
    }
  
    .content-box {
      background-color: white;
      border-radius: 0.5rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      padding: 1.5rem;
      overflow-x: auto; /* Para tablas responsivas */
    }
  
    .calificaciones-table {
      width: 100%;
      border-collapse: collapse;
  
      th, td {
        padding: 1rem;
        text-align: left;
        border-bottom: 1px solid var(--light);
      }
  
      th {
        background-color: var(--primary);
        color: white;
        font-weight: bold;
      }
  
      .status {
        padding: 0.25rem 0.5rem;
        border-radius: 0.25rem;
        font-size: 0.9rem;
        font-weight: bold;
        text-transform: uppercase;
  
        &.aprobado {
          background-color: #d4edda;
          color: #155724;
        }
  
        &.reprobado {
          background-color: #f8d7da;
          color: #721c24;
        }
      }
    }
  }
  
  /* Estilos responsive */
  @media (max-width: 768px) {
    .acta-calificaciones-view {
      margin-left: 0; /* En móviles, el sidebar está oculto */
      padding: 1rem;
  
      h1 {
        font-size: 1.5rem;
      }
  
      .controls {
        flex-direction: column;
        gap: 1rem;
  
        .filter, .search-bar {
          width: 100%;
        }
      }
  
      .calificaciones-table {
        th, td {
          padding: 0.75rem;
        }
      }
    }
  }
  </style>