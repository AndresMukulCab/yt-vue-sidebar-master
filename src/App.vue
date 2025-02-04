<template>
  <div :class="{'full-screen': $route.meta.hideLayout}" class="app">
    <!-- Sidebar (oculto en login) -->
    <Sidebar v-if="!$route.meta.hideLayout" />

    <!-- Contenido -->
    <router-view />

    <!-- Notificaciones (ocultas en login) -->
    <NotificationPanel v-if="!$route.meta.hideLayout" />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import Sidebar from './components/Sidebar.vue';
import NotificationPanel from './components/NotificationPanel.vue';

const $route = useRoute();
</script>

<style lang="scss">
:root {
  --primary: #4ade80;
  --primary-alt: #22c55e;
  --grey: #64748b;
  --dark: #1e293b;
  --dark-alt: #334155;
  --light: #f1f5f9;
  --sidebar-width: 300px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Fira sans', sans-serif;
}

body {
  background: var(--light);
  margin: 0;
  padding: 0;
  height: 100vh; /* Asegura que el body ocupe toda la pantalla */
}

.app {
  display: flex;
  width: 100%;
  min-height: 100vh; /* Usa min-height en lugar de height */
}

.full-screen {
  position: fixed; /* Fija el contenedor en la pantalla */
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--light);
}
</style>