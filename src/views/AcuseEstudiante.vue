<template>
    <div class="acuse-estudiante-view">
      <h1>Acuse del Estudiante</h1>
  
      <div class="content-box">
        <div class="toolbar">
          <button class="toolbar-button" @click="addFolder">
            <span class="material-icons">create_new_folder</span>
            Nueva Carpeta
          </button>
          <button class="toolbar-button" @click="uploadDocument">
            <span class="material-icons">upload</span>
            Subir Documento
          </button>
        </div>
  
        <div class="items-grid">
          <div class="item folder" v-for="folder in folders" :key="folder.id" @click="openFolder(folder)">
            <span class="item-icon">📁</span>
            <span class="item-name">{{ folder.name }}</span>
          </div>
        </div>
      </div>
  
      <div v-if="selectedFolder" class="folder-modal">
        <div class="modal-content">
          <h2>{{ selectedFolder.name }}</h2>
          <button class="close-modal" @click="selectedFolder = null">
            <span class="material-icons">close</span>
          </button>
          <div class="documents-list">
            <div class="item file" v-for="document in selectedFolder.documents" :key="document.id">
              <span class="item-icon">📄</span>
              <span class="item-name">{{ document.name }}</span>
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
      id: 1,
      name: 'Acuses 2023',
      documents: [
        { id: 1, name: 'Acuse 1.pdf' },
        { id: 2, name: 'Acuse 2.docx' },
      ],
    },
    {
      id: 2,
      name: 'Acuses 2022',
      documents: [
        { id: 1, name: 'Acuse 1.pdf' },
        { id: 2, name: 'Acuse 2.docx' },
      ],
    },
  ]);
  
  const selectedFolder = ref(null);
  
  const addFolder = () => {
    const newFolder = {
      id: folders.value.length + 1,
      name: `Acuses ${new Date().getFullYear()}`,
      documents: [],
    };
    folders.value.push(newFolder);
  };
  
  const uploadDocument = () => {
    if (!selectedFolder.value) return;
  
    const newDocument = {
      id: selectedFolder.value.documents.length + 1,
      name: `Documento ${selectedFolder.value.documents.length + 1}.pdf`,
    };
    selectedFolder.value.documents.push(newDocument);
  };
  
  const openFolder = (folder) => {
    selectedFolder.value = folder;
  };
  </script>
  
  <style lang="scss" scoped>
  .acuse-estudiante-view {
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
        }
      }
    }
  }
  </style>
  