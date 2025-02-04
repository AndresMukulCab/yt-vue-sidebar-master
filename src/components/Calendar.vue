<template>
    <FullCalendar
      :plugins="calendarPlugins"
      :initialView="'dayGridMonth'"
      :events="calendarEvents"
      :editable="true"
      :selectable="true"
      :select="handleSelect"
      @eventClick="handleEventClick"
    />
  </template>
  
  <script>
  import FullCalendar from '@fullcalendar/vue3';
  import dayGridPlugin from '@fullcalendar/daygrid';
  import timeGridPlugin from '@fullcalendar/timegrid';
  import interactionPlugin from '@fullcalendar/interaction';
  
  export default {
    components: {
      FullCalendar,
    },
    data() {
      return {
        calendarPlugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
        calendarEvents: [
          { title: 'Event 1', start: new Date(), end: new Date() },
          { title: 'Event 2', start: '2024-09-15', end: '2024-09-16' },
        ],
      };
    },
    methods: {
      handleSelect(info) {
        console.log('Date selected:', info.startStr, 'to', info.endStr);
        // Lógica para manejar selección de fechas
      },
      handleEventClick(info) {
        console.log('Event clicked:', info.event.title);
        // Lógica para manejar clic en eventos
      },
    },
  };
  </script>
  
  <style scoped>
  /* Puedes agregar tus propios estilos */
  </style>
  