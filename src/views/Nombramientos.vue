<template>
    <div class="horario-container">
      <h1>Horario de Clases</h1>
      <table>
        <thead>
          <tr>
            <th>Hora</th>
            <th v-for="(day, index) in days" :key="index">{{ day }}</th>
          </tr>
        </thead>
        <tbody>
          <!-- Fila de horas de entrada -->
          <tr>
            <td class="header-cell">E (Entrada)</td>
            <td v-for="(day, dayIndex) in days" :key="dayIndex">
              <template v-if="day !== 'Sábado'">
                <input
                  type="time"
                  v-model="entranceTimes[dayIndex]"
                  @input="saveSchedule"
                />
              </template>
            </td>
          </tr>
          <!-- Fila de horas de salida -->
          <tr>
            <td class="header-cell">S (Salida)</td>
            <td v-for="(day, dayIndex) in days" :key="dayIndex">
              <template v-if="day !== 'Sábado'">
                <input
                  type="time"
                  v-model="exitTimes[dayIndex]"
                  @input="saveSchedule"
                />
              </template>
            </td>
          </tr>
          <!-- Horarios de clases -->
          <tr v-for="(hour, hourIndex) in hours" :key="hourIndex">
            <td class="header-cell">{{ hour }}</td>
            <td v-for="(day, dayIndex) in days" :key="dayIndex">
              <template v-if="day !== 'Sábado'">
                <input
                  type="text"
                  v-model="schedule[dayIndex][hourIndex]"
                  @input="saveSchedule"
                />
              </template>
              <template v-else>
                <span>No se chambea</span>
              </template>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <!-- Total de horas -->
          <tr>
            <td class="header-cell">Total de Horas</td>
            <td v-for="(day, dayIndex) in days" :key="dayIndex">
              <span v-if="day !== 'Sábado'">{{ calculateTotalHours(entranceTimes[dayIndex], exitTimes[dayIndex]) }}</span>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  // Días de la semana
  const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  
  // Horas de clases de 8:00 a 22:00
  const hours = [
    '08:00 - 09:00', '09:00 - 10:00', '10:00 - 11:00', '11:00 - 12:00',
    '12:00 - 13:00', '13:00 - 14:00', '14:00 - 15:00', '15:00 - 16:00',
    '16:00 - 17:00', '17:00 - 18:00', '18:00 - 19:00', '19:00 - 20:00',
    '20:00 - 21:00', '21:00 - 22:00'
  ];
  
  // Matriz del horario
  const schedule = ref(Array(days.length).fill().map(() => Array(hours.length).fill('')));
  
  // Hora de entrada y salida
  const entranceTimes = ref(Array(days.length).fill('08:00'));
  const exitTimes = ref(Array(days.length).fill('22:00'));
  
  // Guardar en localStorage
  const saveSchedule = () => {
    const data = {
      schedule: schedule.value,
      entranceTimes: entranceTimes.value,
      exitTimes: exitTimes.value
    };
    localStorage.setItem('teacherSchedule', JSON.stringify(data));
  };
  
  // Cargar desde localStorage
  const loadSchedule = () => {
    const savedData = localStorage.getItem('teacherSchedule');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      schedule.value = parsedData.schedule || schedule.value;
      entranceTimes.value = parsedData.entranceTimes || entranceTimes.value;
      exitTimes.value = parsedData.exitTimes || exitTimes.value;
    }
  };
  
  // Calcular el total de horas
  const calculateTotalHours = (entrance, exit) => {
    if (!entrance || !exit) return '0';
    
    const [entranceHour, entranceMin] = entrance.split(':').map(Number);
    const [exitHour, exitMin] = exit.split(':').map(Number);
  
    const entranceTime = entranceHour * 60 + entranceMin;
    const exitTime = exitHour * 60 + exitMin;
  
    const totalMinutes = Math.max(0, exitTime - entranceTime);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
  
    return `${hours}h ${minutes}m`;
  };
  
  // Cargar horario al montar
  onMounted(() => {
    loadSchedule();
  });
  </script>
  
  <style scoped>
  .horario-container {
    padding: 2rem;
    background-color: #eef2f7;
    border-radius: 10px;
    max-width: 1000px;
    margin: 2rem auto;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    font-size: 2.5rem;
    color: #334e68;
    margin-bottom: 1.5rem;
    text-align: center;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    background-color: #ffffff;
    border-radius: 8px;
    overflow: hidden;
  }
  
  th, td {
    padding: 0.75rem;
    text-align: center;
  }
  
  thead th {
    background-color: #4a90e2;
    color: white;
    font-weight: bold;
  }
  
  .header-cell {
    background-color: #f7fafc;
    font-weight: bold;
    color: #334e68;
  }
  
  input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccd0d5;
    outline: none;
    text-align: center;
    border-radius: 4px;
  }
  
  tfoot td {
    background-color: #f1f5f9;
    font-weight: bold;
  }
  
  tfoot .header-cell {
    background-color: #dae1e7;
  }
  
  input:focus {
    border-color: #4a90e2;
    box-shadow: 0 0 4px rgba(74, 144, 226, 0.4);
  }
  </style>
  