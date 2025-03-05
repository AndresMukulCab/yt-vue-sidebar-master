<template>
  <div class="horario-container">
    <h1>Horario de Clases</h1>
    <div class="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Hora</th>
            <th v-for="(day, index) in days" :key="index">{{ day }}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="header-cell">E (Entrada)</td>
            <td v-for="(day, dayIndex) in days" :key="dayIndex">
              <input v-if="day !== 'Sábado'" type="time" v-model="entranceTimes[dayIndex]" @input="saveSchedule" />
            </td>
          </tr>
          <tr>
            <td class="header-cell">S (Salida)</td>
            <td v-for="(day, dayIndex) in days" :key="dayIndex">
              <input v-if="day !== 'Sábado'" type="time" v-model="exitTimes[dayIndex]" @input="saveSchedule" />
            </td>
          </tr>
          <tr v-for="(hour, hourIndex) in hours" :key="hourIndex">
            <td class="header-cell">{{ hour }}</td>
            <td v-for="(day, dayIndex) in days" :key="dayIndex">
              <input v-if="day !== 'Sábado'" type="text" v-model="schedule[dayIndex][hourIndex]" @input="saveSchedule" />
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td class="header-cell">Total de Horas</td>
            <td v-for="(day, dayIndex) in days" :key="dayIndex">
              <span v-if="day !== 'Sábado'">{{ calculateTotalHours(entranceTimes[dayIndex], exitTimes[dayIndex]) }}</span>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
const hours = [
  '08:00 - 09:00', '09:00 - 10:00', '10:00 - 11:00', '11:00 - 12:00',
  '12:00 - 13:00', '13:00 - 14:00', '14:00 - 15:00', '15:00 - 16:00',
  '16:00 - 17:00', '17:00 - 18:00', '18:00 - 19:00', '19:00 - 20:00',
  '20:00 - 21:00', '21:00 - 22:00'
];

const schedule = ref(Array(days.length).fill().map(() => Array(hours.length).fill('')));
const entranceTimes = ref(Array(days.length).fill('08:00'));
const exitTimes = ref(Array(days.length).fill('22:00'));

const saveSchedule = () => {
  const data = {
    schedule: schedule.value,
    entranceTimes: entranceTimes.value,
    exitTimes: exitTimes.value
  };
  localStorage.setItem('teacherSchedule', JSON.stringify(data));
};

const loadSchedule = () => {
  const savedData = localStorage.getItem('teacherSchedule');
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    schedule.value = parsedData.schedule || schedule.value;
    entranceTimes.value = parsedData.entranceTimes || entranceTimes.value;
    exitTimes.value = parsedData.exitTimes || exitTimes.value;
  }
};

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

onMounted(() => {
  loadSchedule();
});
</script>

<style scoped>
.horario-container {
  padding: 1rem;
  background-color: #f9fafb;
  border-radius: 8px;
  max-width: 870px; /* Ancho máximo para evitar que se expanda demasiado */
  margin: 1rem auto; /* Centrado en la página */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 1.25rem;
  color: #2d3748;
  text-align: center;
  margin-bottom: 1rem;
}

.table-wrapper {
  overflow-x: auto;
}

table {
  width: 100%;
  min-width: 600px; /* Reducido para pantallas más pequeñas */
  border-collapse: collapse;
  background-color: #fff;
  border-radius: 8px;
  font-size: 0.75rem; /* Reducido para ahorrar espacio */
  border: 1px solid #e2e8f0;
}

th, td {
  padding: 0.25rem; /* Reducido para ahorrar espacio */
  text-align: center;
  border: 1px solid #e2e8f0;
}

thead th {
  background-color: #2d3748;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 0.75rem; /* Reducido para ahorrar espacio */
}

.header-cell {
  background-color: #f7fafc;
  font-weight: bold;
  color: #2d3748;
}

input {
  width: 90%; /* Ajustado para que no sea tan grande */
  padding: 0.2rem; /* Reducido para ahorrar espacio */
  border: 1px solid #e2e8f0;
  text-align: center;
  border-radius: 4px;
  font-size: 0.75rem; /* Reducido para ahorrar espacio */
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

@media (max-width: 768px) {
  .horario-container {
    max-width: 100%; /* Ajustado para pantallas pequeñas */
    margin: 1rem;
  }

  h1 {
    font-size: 1rem;
  }

  input {
    font-size: 0.7rem;
    width: 100%;
  }

  table {
    min-width: 100%; /* Ajustado para pantallas pequeñas */
  }

  th, td {
    padding: 0.2rem; /* Reducido aún más para móviles */
  }
}
</style>