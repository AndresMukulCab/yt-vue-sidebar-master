<template>
    <div class="notification-icon" @click="togglePanel">
      <span class="material-icons">notifications</span>
      <div v-if="unreadCount > 0" class="badge">{{ unreadCount }}</div>
      <NotificationPanel v-if="showPanel" @close="togglePanel" />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import NotificationPanel from './NotificationPanel.vue';
  
  const showPanel = ref(false);
  const unreadCount = ref(5); // Puedes ajustar esto para que venga de una API o estado global.
  
  const togglePanel = () => {
    showPanel.value = !showPanel.value;
  };
  </script>
  
  <style scoped>
  .notification-icon {
    position: fixed;
    top: 20px;
    right: 20px;
    cursor: pointer;
    font-size: 1.5rem;
    z-index: 1000;
  }
  
  .material-icons {
    color: var(--dark);
  }
  
  .badge {
    position: absolute;
    top: -5px;
    right: -5px;
    background-color: red;
    color: white;
    border-radius: 50%;
    padding: 0.2rem 0.4rem;
    font-size: 0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  </style>
  