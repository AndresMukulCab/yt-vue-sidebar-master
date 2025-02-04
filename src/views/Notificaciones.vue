<template>
    <div class="notifications-panel">
      <h2>Notificaciones</h2>
      <ul>
        <li v-for="notification in notifications" :key="notification.id" :class="notification.type">
          <p>{{ notification.message }}</p>
          <span>{{ new Date(notification.timestamp).toLocaleString() }}</span>
          <button @click="markAsRead(notification.id)">Marcar como leída</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Ejemplo de datos de notificaciones (este sería tu estado global o Vuex)
  const notifications = ref([
    // Ejemplo de notificaciones
    {
      id: 1,
      type: 'warning',
      message: 'Documento "Informe Anual" está próximo a entregar.',
      status: 'unread',
      timestamp: new Date().toISOString()
    },
    {
      id: 2,
      type: 'info',
      message: 'Documento "Proyecto X" ha sido revisado.',
      status: 'unread',
      timestamp: new Date().toISOString()
    },
    {
      id: 3,
      type: 'error',
      message: 'Documento "Reporte Mensual" fue devuelto para corregir.',
      status: 'unread',
      timestamp: new Date().toISOString()
    }
  ]);
  
  // Función para marcar una notificación como leída
  const markAsRead = (id) => {
    const notification = notifications.value.find(n => n.id === id);
    if (notification) {
      notification.status = 'read';
    }
  };
  </script>
  
  <style scoped>
  .notifications-panel {
    width: 300px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 1rem;
  }
  
  .notifications-panel h2 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    color: #333;
  }
  
  .notifications-panel ul {
    list-style-type: none;
    padding: 0;
  }
  
  .notifications-panel li {
    margin-bottom: 1rem;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 8px;
  }
  
  .notifications-panel li.warning {
    border-color: orange;
  }
  
  .notifications-panel li.info {
    border-color: blue;
  }
  
  .notifications-panel li.error {
    border-color: red;
  }
  
  .notifications-panel li p {
    margin: 0;
    font-size: 1rem;
  }
  
  .notifications-panel li span {
    display: block;
    font-size: 0.8rem;
    color: #999;
  }
  
  .notifications-panel li button {
    margin-top: 0.5rem;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
  }
  </style>
  