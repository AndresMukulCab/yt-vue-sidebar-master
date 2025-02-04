<template>
  <div class="notification-icon" @click="togglePanel">
    <span class="material-icons">notifications</span>
    <span v-if="unreadCount > 0" class="badge">{{ unreadCount }}</span>
  </div>
  <transition name="slide">
    <div class="notification-panel" v-if="isOpen">
      <div class="header">
        <h3>Notificaciones</h3>
        <!-- <button class="mark-all-read" @click="markAllAsRead">Marcar todas como leídas</button>-->
      </div>
      <div class="notifications">
        <div 
          v-for="notification in notifications" 
          :key="notification.id" 
          class="notification" 
          :class="{ read: notification.read }">
          <p>{{ notification.message }}</p>
          <small class="time">{{ notification.time }}</small>
          <span class="document-label">{{ notification.documentType }}</span>
          <button @click="markAsRead(notification.id)" v-if="!notification.read">Marcar como leída</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, computed } from 'vue';

const notifications = ref([
  { id: 1, message: 'Documento revisado', read: false, documentType: 'Avance Programatico', time: 'Hace 2 minutos' },
  { id: 2, message: 'Documento a entregar', read: true, documentType: 'Reporte final', time: 'Hace 1 hora' },
  { id: 3, message: 'Documento devuelto para corregir', read: false, documentType: 'Instrumentacion didactica', time: 'Hace 3 días' }
]);

const isOpen = ref(false);
const unreadCount = computed(() => notifications.value.filter(n => !n.read).length);

const togglePanel = () => {
  isOpen.value = !isOpen.value;
};

const markAsRead = (id) => {
  const notification = notifications.value.find(n => n.id === id);
  if (notification) {
    notification.read = true;
  }
};

const markAllAsRead = () => {
  notifications.value.forEach(n => n.read = true);
};
</script>

<style scoped>
.notification-icon {
  position: fixed;
  top: 20px;
  right: 20px;
  cursor: pointer;
}

.material-icons {
  font-size: 2rem;
}

.badge {
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  position: absolute;
  top: -5px;
  right: -5px;
}

.notification-panel {
  position: fixed;
  top: 60px;
  right: 20px;
  width: 200px;
  max-height: 300px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: auto;
  z-index: 1000;
}

.slide-enter-active, .slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from, .slide-leave-to {
  transform: translateY(-20px);
}

.header {
  display: flex;
  justify-content: space-between;
  color: #ddd;
  align-items: center;
  padding: 1rem;
  background-color: #3e37fc;
  border-bottom: 1px solid #ddd;
}

.mark-all-read {
  background-color: #4ade80;
  color: white;
  border: none;
  padding: 0.1rem 0.4rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.75rem;
  transition: background-color 0.2s ease-in-out;
}

.mark-all-read:hover {
  background-color: #22c55e;
}

.notifications {
  padding: 1rem;
}

.notification {
  padding: 1rem;
  margin-bottom: 0.5rem;
  border-bottom: 1px solid #ddd;
}

.notification.read {
  background-color: #f0f0f0;
}

.time {
  display: block;
  font-size: 0.75rem;
  color: #666;
  margin-top: 0.5rem;
}

.document-label {
  display: block;
  background-color: yellow;
  color: #333;
  padding: 0.25rem;
  margin-top: 0.5rem;
  font-size: 0.75rem;
  border-radius: 4px;
  text-align: center;
}
</style>
