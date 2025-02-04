<template>
  <div class="calendar-view">
    <vue-cal
      :events="events"
      @cell-click="handleDateClick"
      @event-click="handleEventClick"
    />
  </div>
</template>

<script>
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'

export default {
  name: 'CalendarView',
  components: {
    VueCal,
  },
  data() {
    return {
      events: [
        {
          start: '2024-09-15 10:00',
          end: '2024-09-15 11:00',
          title: 'Evento 1',
        },
        {
          start: '2024-09-16 12:00',
          end: '2024-09-16 13:30',
          title: 'Evento 2',
        },
      ],
    }
  },
  methods: {
    handleDateClick(day) {
      console.log('Día clickeado:', day)
    },
    handleEventClick(event) {
      console.log('Evento clickeado:', event)
    },
  },
}
</script>

<style>
.calendar-view {
  width: 100%;
  height: 100vh; /* Opcional: para que ocupe toda la altura de la pantalla */
}

.vuecal {
  width: 100%;
  height: 100%; /* Asegúrate de que el calendario ocupe todo el espacio disponible */
}

/* Opcional: Ajusta el tamaño de las celdas y otros elementos internos del calendario */
.vuecal__cell {
  height: 100px; /* Ajusta la altura de las celdas según sea necesario */
}
</style>