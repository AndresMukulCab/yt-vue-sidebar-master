<template>
  <div class="layout">
    <Sidebar />
    <main class="main-content">
      <slot></slot> <!-- Renderización-->
    </main>
  </div>
</template>

<script setup>
import Sidebar from './Sidebar.vue'; // Sidebar
</script>

<style scoped>
.layout {
  display: flex;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  padding: 2rem;
  background-color: #f5f5f5;
  margin-left: 250px; /* Ancho */
}
</style>