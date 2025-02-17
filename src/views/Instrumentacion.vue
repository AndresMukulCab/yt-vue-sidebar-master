<template>
  <div class="view-container">
    <h1>Instrumentación Didáctica</h1>
    <div class="actions">
      <label class="upload-button">
        <input type="file" @change="handleFileUpload" />
        <span>Subir Documento</span>
        <span class="material-icons">file_upload</span>
      </label>
      <button class="download-button" @click="downloadFile" :disabled="!fileURL">
        Descargar Documento
        <span class="material-icons">file_download</span>
      </button>
      <button class="edit-button" @click="toggleEditMode" :disabled="!fileURL">
        {{ isEditing ? 'Guardar Cambios' : 'Modificar Documento' }}
        <span class="material-icons">{{ isEditing ? 'save' : 'edit' }}</span>
      </button>
    </div>
    <div class="document-viewer" v-if="fileURL">
      <iframe :src="fileURL" frameborder="0"></iframe>
    </div>
    <div class="editor" v-if="isEditing && fileURL">
      <h2>Editar Documento</h2>
      <textarea v-model="annotation" placeholder="Escribe tu anotación aquí..."></textarea>
      <button class="add-annotation" @click="addAnnotation">Agregar Anotación</button>
      <div class="annotations">
        <h3>Anotaciones:</h3>
        <ul>
          <li v-for="(note, index) in annotations" :key="index">
            {{ note }}
            <button @click="removeAnnotation(index)">Eliminar</button>
          </li>
        </ul>
      </div>
    </div>
    <div class="corrections-table" v-if="corrections.length > 0">
      <h2>Historial de Correcciones</h2>
      <table>
        <thead>
          <tr>
            <th>Observación</th>
            <th>Corrección Realizada</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(correction, index) in corrections" :key="index">
            <td>{{ correction.observacion }}</td>
            <td>{{ correction.correccion }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.view-container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
}

.upload-button,
.download-button,
.edit-button {
  flex: 1 1 200px;
}

.document-viewer {
  width: 100%;
  height: 500px;
}

@media (max-width: 768px) {
  .actions {
    flex-direction: column;
  }

  .document-viewer {
    height: 300px;
  }

  .editor textarea {
    height: 80px;
  }
}
</style>