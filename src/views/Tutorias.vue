<template>
  <div class="asesorias-view">
    <!-- Título de la vista -->
    <h1>Tutorias</h1>

    <!-- Contenedor principal (box) -->
    <div class="content-box">
      <!-- Barra de herramientas -->
      <div class="toolbar">
        <button class="toolbar-button" @click="addFolder">
          <span class="material-icons">create_new_folder</span>
          Nueva Carpeta
        </button>
        <button class="toolbar-button" @click="generateTemplate">
          <span class="material-icons">description</span>
          Generar Plantilla
        </button>
      </div>

      <!-- Contenedor de carpetas -->
      <div class="items-grid">
        <!-- Carpeta -->
        <div
          class="item folder"
          v-for="folder in folders"
          :key="folder.id"
          @click="openFolder(folder)"
        >
          <span class="item-icon">📁</span>
          <span class="item-name">{{ folder.name }}</span>
        </div>
      </div>
    </div>

    <!-- Modal para ver los archivos de una carpeta -->
    <div v-if="selectedFolder" class="folder-modal">
      <div class="modal-content">
        <h2>{{ selectedFolder.name }}</h2>
        <button class="close-modal" @click="selectedFolder = null">
          <span class="material-icons">close</span>
        </button>

        <!-- Lista de archivos en la carpeta -->
        <div class="files-list">
          <div class="item file" v-for="file in selectedFolder.files" :key="file.id">
            <span class="item-icon">📄</span>
            <span class="item-name">{{ file.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Datos de ejemplo para carpetas
const folders = ref([
  {
    id: 1,
    name: 'Tutorias 2023',
    files: [
      { id: 1, name: 'Evidencia de asesorias 1.pdf' },
      { id: 2, name: 'Evidencia de asesorias 1.1.docx' },
    ],
  },
  {
    id: 2,
    name: 'Tutorias 2022',
    files: [
      { id: 1, name: 'Evidencia de asesorias 2.pdf' },
      { id: 2, name: 'Registro de Sesiones 2.docx' },
    ],
  },
]);

// Carpeta seleccionada (para mostrar los archivos)
const selectedFolder = ref(null);

// Función para agregar una nueva carpeta
const addFolder = () => {
  const newFolder = {
    id: folders.value.length + 1,
    name: `Asesorías ${new Date().getFullYear()}`,
    files: [],
  };
  folders.value.push(newFolder);
};

// Función para generar una plantilla (futura funcionalidad)
const generateTemplate = () => {
  alert('Generar plantilla de asesoría');
};

// Función para abrir una carpeta y ver sus archivos
const openFolder = (folder) => {
  selectedFolder.value = folder;
};
</script>

<style lang="scss" scoped>
.asesorias-view {
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

  .toolbar {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.5rem;

    .toolbar-button {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 1rem;
      background-color: var(--primary);
      color: white;
      border: none;
      border-radius: 0.25rem;
      font-size: 0.9rem;
      cursor: pointer;
      transition: background-color 0.2s ease;

      &:hover {
        background-color: var(--primary-alt);
      }

      .material-icons {
        font-size: 1.2rem;
      }
    }
  }

  .items-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1.5rem;

    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 1rem;
      background-color: var(--light);
      border-radius: 0.5rem;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      cursor: pointer;
      transition: transform 0.2s ease, box-shadow 0.2s ease;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
      }

      .item-icon {
        font-size: 2.5rem;
        margin-bottom: 0.5rem;
      }

      .item-name {
        font-size: 0.9rem;
        color: var(--dark);
        text-align: center;
        word-break: break-word; /* Evita que el texto se desborde */
      }
    }
  }

  .folder-modal {
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
      max-width: 600px;
      width: 100%;
      position: relative;

      h2 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
      }

      .close-modal {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: none;
        border: none;
        cursor: pointer;
        font-size: 1.2rem;
      }

      .files-list {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        gap: 1rem;
      }
    }
  }
}

/* Estilos responsive */
@media (max-width: 768px) {
  .asesorias-view {
    margin-left: 0; /* En móviles, el sidebar está oculto */
    padding: 1rem;

    h1 {
      font-size: 1.5rem;
    }

    .content-box {
      padding: 1rem;
    }

    .items-grid {
      grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
      gap: 1rem;

      .item {
        padding: 0.75rem;

        .item-icon {
          font-size: 2rem;
        }

        .item-name {
          font-size: 0.8rem;
        }
      }
    }
  }
}
</style>