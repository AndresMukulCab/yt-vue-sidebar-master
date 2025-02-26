<template>
    <div class="constancias-view">
      <!-- Título de la vista -->
      <h1>Comisiones para actividades docentes</h1>
  
      <!-- Contenedor principal -->
      <div class="content-box">
        <!-- Barra de herramientas -->
        <div class="toolbar">
          <button class="toolbar-button" @click="addFolder">
            <span class="material-icons">create_new_folder</span>
            Nueva Carpeta
          </button>
          <button class="toolbar-button" @click="uploadDocumento">
            <span class="material-icons">upload</span>
            Subir Documento
          </button>
        </div>
  
        <!-- Contenedor de carpetas -->
        <div class="items-grid">
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
  
      <!-- Modal para ver los documentos de una carpeta -->
      <div v-if="selectedFolder" class="folder-modal">
        <div class="modal-content">
          <h2>{{ selectedFolder.name }}</h2>
          <button class="close-modal" @click="selectedFolder = null">
            <span class="material-icons">close</span>
          </button>
  
          <!-- Lista de documentos en la carpeta -->
          <div class="documents-list">
            <div class="item file" v-for="doc in selectedFolder.documentos" :key="`${selectedFolder.id}-${doc.id}`">
              <span class="item-icon">📄</span>
              <span class="item-name">{{ doc.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const folders = ref([
    {
      id: Date.now(),
      name: '2024',
      documentos: [
        { id: 1, name: 'Constancia 1.pdf' },
        { id: 2, name: 'Constancia 2.docx' },
      ],
    },
  ]);
  
  const selectedFolder = ref(null);
  
  const addFolder = () => {
    folders.value.push({
      id: Date.now(),
      name: `Constancias ${new Date().getFullYear()}`,
      documentos: [],
    });
  };
  
  const uploadDocumento = () => {
    if (!selectedFolder.value) return;
    const newDoc = {
      id: selectedFolder.value.documentos.length + 1,
      name: `Documento ${selectedFolder.value.documentos.length + 1}.pdf`,
    };
    
    const index = folders.value.findIndex(f => f.id === selectedFolder.value.id);
    if (index !== -1) {
      folders.value[index].documentos.push(newDoc);
    }
    folders.value = [...folders.value];
  };
  
  const openFolder = (folder) => {
    selectedFolder.value = folder;
  };
  </script>
  
  <style lang="scss" scoped>
  .constancias-view {
    flex-grow: 1;
    padding: 2rem;
    margin-left: var(--sidebar-width);
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
        cursor: pointer;
  
        &:hover {
          background-color: var(--primary-alt);
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
        cursor: pointer;
  
        &:hover {
          transform: translateY(-5px);
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
      }
    }
  }
  </style>
  