<template>
    <div class="onedrive-view">
      <!-- Título de la vista -->
      <h1>Proyectos de Vinculación</h1>
  
      <!-- Contenedor principal (box) -->
      <div class="content-box">
        <!-- Barra de herramientas (opcional) -->
        <div class="toolbar">
          <button class="toolbar-button" @click="addFolder">
            <span class="material-icons">create_new_folder</span>
            Nueva Carpeta
          </button>
          <button class="toolbar-button" @click="uploadFile">
            <span class="material-icons">upload</span>
            Subir Archivo
          </button>
        </div>
  
        <!-- Contenedor de carpetas y documentos -->
        <div class="items-grid">
          <!-- Carpeta -->
          <div class="item folder" v-for="folder in folders" :key="folder.id">
            <span class="item-icon">📁</span>
            <span class="item-name">{{ folder.name }}</span>
          </div>
  
          <!-- Documento -->
          <div class="item file" v-for="file in files" :key="file.id">
            <span class="item-icon">📄</span>
            <span class="item-name">{{ file.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Datos de ejemplo para carpetas y documentos
  const folders = ref([
    { id: 1, name: 'Vinculación 1' },
    { id: 2, name: 'Vinculación 2' },
    { id: 3, name: 'Vinculación 3' },
  ]);
  
  const files = ref([
    { id: 1, name: 'Documento 1.pdf' },
    { id: 2, name: 'Documento 2.docx' },
    { id: 3, name: 'Imagen.png' },
  ]);
  
  // Función para agregar una nueva carpeta
  const addFolder = () => {
    const newFolder = {
      id: folders.value.length + 1,
      name: `Vinculación ${folders.value.length + 1}`,
    };
    folders.value.push(newFolder);
  };
  
  // Función para subir un archivo (simulación)
  const uploadFile = () => {
    const newFile = {
      id: files.value.length + 1,
      name: `Archivo ${files.value.length + 1}.txt`,
    };
    files.value.push(newFile);
  };
  </script>
  
  <style lang="scss" scoped>
  .onedrive-view {
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
  }
  
  /* Estilos responsive */
  @media (max-width: 768px) {
    .onedrive-view {
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