<template>
  <div class="configuracion-view">
    <!-- Título de la vista -->
    <h1>Configuración</h1>

    <!-- Buscador -->
    <div class="search-bar">
      <input
        type="text"
        placeholder="Buscar configuración..."
        v-model="searchQuery"
      />
      <span class="material-icons">search</span>
    </div>

    <!-- Filtro por categorías -->
    <div class="filters">
      <button
        v-for="category in categories"
        :key="category"
        :class="{ active: activeCategory === category }"
        @click="activeCategory = category"
      >
        {{ category }}
      </button>
    </div>

    <!-- Contenedor principal (box) -->
    <div class="content-box">
      <!-- Contenedor de configuraciones -->
      <div class="settings-grid">
        <!-- Configuración -->
        <div
          v-for="(setting, index) in filteredSettings"
          :key="index"
          class="setting-item"
          @click="openModal(setting)"
        >
          <span class="setting-icon material-icons">{{ setting.icon }}</span>
          <span class="setting-name">{{ setting.title }}</span>
          <!-- Indicador de estado -->
          <span v-if="setting.requiresAttention" class="status-badge">!</span>
        </div>
      </div>
    </div>

    <!-- Modal de confirmación -->
    <div v-if="selectedSetting" class="modal">
      <div class="modal-content">
        <h2>{{ selectedSetting.title }}</h2>
        <p>¿Estás seguro de que deseas realizar esta acción?</p>
        <div class="modal-actions">
          <button @click="confirmAction">Confirmar</button>
          <button @click="closeModal">Cancelar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// Datos de configuraciones
const settings = [
  { title: "Gestión de Cursos", icon: "school", category: "Cursos", requiresAttention: true, action: () => alert("Abrir gestión de cursos") },
  { title: "Gestión de Docentes", icon: "groups", category: "Docentes", requiresAttention: false, action: () => alert("Abrir gestión de docentes") },
  { title: "Documentación Institucional", icon: "description", category: "Documentación", requiresAttention: true, action: () => alert("Abrir gestión de documentación") },
  { title: "Notificaciones", icon: "notifications", category: "General", requiresAttention: false, action: () => alert("Abrir configuración de notificaciones") },
  { title: "Seguridad y Accesos", icon: "security", category: "Seguridad", requiresAttention: false, action: () => alert("Abrir configuración de seguridad") },
  { title: "Reportes y Estadísticas", icon: "analytics", category: "Reportes", requiresAttention: true, action: () => alert("Abrir gestión de reportes") }
];

// Categorías para filtros
const categories = ["Todos", "Cursos", "Docentes", "Documentación", "General", "Seguridad", "Reportes"];
const activeCategory = ref("Todos");

// Buscador
const searchQuery = ref('');

// Configuración seleccionada para el modal
const selectedSetting = ref(null);

// Filtrado de configuraciones
const filteredSettings = computed(() => {
  let filtered = settings;

  // Filtrar por categoría
  if (activeCategory.value !== "Todos") {
    filtered = filtered.filter(setting => setting.category === activeCategory.value);
  }

  // Filtrar por búsqueda
  if (searchQuery.value) {
    filtered = filtered.filter(setting =>
      setting.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  }

  return filtered;
});

// Abrir modal
const openModal = (setting) => {
  selectedSetting.value = setting;
};

// Cerrar modal
const closeModal = () => {
  selectedSetting.value = null;
};

// Confirmar acción
const confirmAction = () => {
  selectedSetting.value.action();
  closeModal();
};
</script>

<style lang="scss" scoped>
.configuracion-view {
  flex-grow: 1; /* Ocupa el espacio restante junto al sidebar */
  padding: 2rem;
  margin-left: var(--sidebar-width); /* Respeta el ancho del sidebar */
  max-width: 1200px;
  margin: 0 auto;

  h1 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: var(--dark);
    text-align: center; /* Centrar el título */
  }

  .search-bar {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 0.5rem 1rem;
    max-width: 400px;
    margin: 0 auto 1.5rem;

    input {
      flex-grow: 1;
      border: none;
      outline: none;
      font-size: 1rem;
    }

    .material-icons {
      color: var(--primary);
      cursor: pointer;
    }
  }

  .filters {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    margin-bottom: 1.5rem;

    button {
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 0.25rem;
      background-color: var(--light);
      color: var(--dark);
      cursor: pointer;
      transition: background-color 0.2s ease;

      &.active {
        background-color: var(--primary);
        color: white;
      }

      &:hover {
        background-color: var(--primary-alt);
      }
    }
  }

  .content-box {
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 1.5rem;
  }

  .settings-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1.5rem;

    .setting-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 1.5rem;
      background-color: var(--light);
      border-radius: 0.5rem;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      cursor: pointer;
      transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
      position: relative;

      &:hover {
        transform: scale(1.05);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        background-color: var(--primary-alt);
      }

      .setting-icon {
        font-size: 2.5rem;
        margin-bottom: 0.5rem;
        color: var(--primary);
      }

      .setting-name {
        font-size: 1rem;
        color: var(--dark);
        text-align: center;
        word-break: break-word; /* Evita que el texto se desborde */
      }

      .status-badge {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        background-color: var(--primary);
        color: white;
        border-radius: 50%;
        width: 1.5rem;
        height: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.9rem;
      }
    }
  }

  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;

    .modal-content {
      background-color: white;
      border-radius: 0.5rem;
      padding: 1.5rem;
      max-width: 400px;
      width: 100%;

      h2 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
      }

      .modal-actions {
        display: flex;
        gap: 1rem;
        justify-content: flex-end;
        margin-top: 1rem;

        button {
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 0.25rem;
          cursor: pointer;

          &:first-child {
            background-color: var(--primary);
            color: white;
          }

          &:last-child {
            background-color: var(--light);
            color: var(--dark);
          }
        }
      }
    }
  }
}

/* Estilos responsive */
@media (max-width: 768px) {
  .configuracion-view {
    margin-left: 0; /* En móviles, el sidebar está oculto */
    padding: 1rem;

    h1 {
      font-size: 1.5rem;
    }

    .content-box {
      padding: 1rem;
    }

    .settings-grid {
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      gap: 1rem;

      .setting-item {
        padding: 1rem;

        .setting-icon {
          font-size: 2rem;
        }

        .setting-name {
          font-size: 0.9rem;
        }
      }
    }
  }
}
</style>