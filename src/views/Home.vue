<template>
  <main id="home-page">
    <!-- Título de la vista -->
    <h1>Estadísticas</h1>

    <!-- Contenedor principal (box) -->
    <div class="content-box">
      <!-- Componente de estadísticas -->
      <RandomStats />
    </div>
  </main>
</template>

<script setup>
import RandomStats from '../components/RandomStats.vue';
</script>

<style lang="scss" scoped>
#home-page {
  flex-grow: 1; /* Ocupa el espacio restante junto al sidebar */
  padding: 2rem;
  margin-left: var(--sidebar-width); /* Respeta el ancho del sidebar */
  max-width: 1200px;
  margin: 0 auto;

  h1 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: var(--dark);
  }

  .content-box {
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 1.5rem;
  }
}

/* Estilos responsive */
@media (max-width: 768px) {
  #home-page {
    margin-left: 0; /* En móviles, el sidebar está oculto */
    padding: 1rem;

    h1 {
      font-size: 1.5rem;
    }

    .content-box {
      padding: 1rem;
    }
  }
}
</style>