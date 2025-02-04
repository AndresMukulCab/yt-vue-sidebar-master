<template>
    <div class="carpeta-container">
      <h1>Carpetas de Evidencias</h1>
      <div class="folders">
        <div class="folder" v-for="(folder, index) in folders" :key="index" @click="openFolder(index)">
          <span class="folder-icon">📁</span>
          <span class="folder-name">{{ folder.name }}</span>
        </div>
      </div>
  
      <div v-if="activeFolder !== null" class="folder-contents">
        <h2>{{ folders[activeFolder].name }}</h2>
        <ul>
          <li v-for="(file, index) in folders[activeFolder].files" :key="index">
            {{ file }}
          </li>
        </ul>
        <button @click="closeFolder">Cerrar Carpeta</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Define las carpetas y sus archivos
  const folders = ref([
    { name: 'Documentos de Evidencia A', files: ['Evidencia 1.pdf', 'Evidencia 2.docx', 'Evidencia 3.xlsx'] },
    { name: 'Documentos de Evidencia B', files: ['Evidencia 1.pdf', 'Evidencia 2.docx'] },
    { name: 'Documentos de Evidencia C', files: ['Evidencia 1.pdf', 'Evidencia 2.docx', 'Evidencia 3.xlsx', 'Evidencia 4.pptx'] },
    { name: 'Documentos de Evidencia D', files: ['Evidencia 1.pdf', 'Evidencia 2.docx', 'Evidencia 3.xlsx', 'Evidencia 4.pptx'] },
    { name: 'Documentos de Evidencia E', files: ['Evidencia 1.pdf', 'Evidencia 2.docx', 'Evidencia 3.xlsx', 'Evidencia 4.pptx'] },
    { name: 'Documentos de Evidencia F', files: ['Evidencia 1.pdf', 'Evidencia 2.docx', 'Evidencia 3.xlsx', 'Evidencia 4.pptx'] },
    { name: 'Documentos de Evidencia G', files: ['Evidencia 1.pdf', 'Evidencia 2.docx', 'Evidencia 3.xlsx', 'Evidencia 4.pptx'] }
    
  ]);
  
  // Maneja la carpeta activa
  const activeFolder = ref(null);
  
  // Abre una carpeta
  const openFolder = (index) => {
    activeFolder.value = index;
  };
  
  // Cierra la carpeta activa
  const closeFolder = () => {
    activeFolder.value = null;
  };
  </script>
  
  <style scoped>
  .carpeta-container {
    padding: 2rem;
    background-color: #f5f5f5;
    border-radius: 10px;
    max-width: 1000px;
    margin: 2rem auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    font-size: 2rem;
    color: #333;
    margin-bottom: 1.5rem;
  }
  
  .folders {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
  
  .folder {
    background-color: #4caf50;
    color: white;
    padding: 1rem;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: background-color 0.3s ease;
  }
  
  .folder:hover {
    background-color: #45a049;
  }
  
  .folder-icon {
    font-size: 1.5rem;
    margin-right: 0.5rem;
  }
  
  .folder-name {
    font-size: 1rem;
  }
  
  .folder-contents {
    margin-top: 2rem;
    background-color: white;
    padding: 1rem;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .folder-contents h2 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 1rem;
  }
  
  .folder-contents ul {
    list-style-type: none;
    padding: 0;
  }
  
  .folder-contents li {
    background-color: #f5f5f5;
    margin-bottom: 0.5rem;
    padding: 0.5rem;
    border-radius: 5px;
    font-size: 1rem;
  }
  
  .folder-contents button {
    background-color: #2196f3;
    color: white;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    margin-top: 1rem;
    transition: background-color 0.3s ease;
  }
  
  .folder-contents button:hover {
    background-color: #1e88e5;
  }
  </style>
  