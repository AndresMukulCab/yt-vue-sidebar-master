<template>
  <div class="avance-programatico">
    <h1>Avance Programático</h1>
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
            <th>F. Periodo Programado</th>
            <th>F. Periodo Real</th>
            <th>F. Evaluación Programada</th>
            <th>F. Evaluación Real</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(correction, index) in corrections" :key="index">
            <td>{{ correction.observacion }}</td>
            <td>{{ correction.correccion }}</td>
            <td>{{ correction.fechaPeriodoProgramado }}</td>
            <td>{{ correction.fechaPeriodoReal }}</td>
            <td>{{ correction.fechaEvaluacionProgramada }}</td>
            <td>{{ correction.fechaEvaluacionReal }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const fileURL = ref(null);
const isEditing = ref(false);
const annotation = ref('');
const annotations = ref([]);
const corrections = ref([
  { 
    observacion: 'Falta de referencias en el capítulo 3', 
    correccion: 'Se añadieron las referencias necesarias en el capítulo 3',
    fechaPeriodoProgramado: '2024-06-01',
    fechaPeriodoReal: '2024-06-05',
    fechaEvaluacionProgramada: '2024-06-10',
    fechaEvaluacionReal: '2024-06-15'
  },
  { 
    observacion: 'Fechas tentativamente incorrectas', 
    correccion: 'Modificacion de las de periodo programado',
    fechaPeriodoProgramado: '2024-07-01',
    fechaPeriodoReal: '2024-07-05',
    fechaEvaluacionProgramada: '2024-07-10',
    fechaEvaluacionReal: '2024-07-15'
  }
]);

const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      fileURL.value = e.target.result;
    };
    reader.readAsDataURL(file);
  }
};

const downloadFile = () => {
  if (fileURL.value) {
    const link = document.createElement('a');
    link.href = fileURL.value;
    link.download = 'avanceProgramatico.pdf'; // Nombre predeterminado del archivo descargado
    link.click();
  } else {
    alert('No hay ningún archivo para descargar');
  }
};

const toggleEditMode = () => {
  if (isEditing.value) {
    saveAnnotations();
  }
  isEditing.value = !isEditing.value;
};

const addAnnotation = () => {
  if (annotation.value) {
    annotations.value.push(annotation.value);
    annotation.value = '';
  }
};

const removeAnnotation = (index) => {
  annotations.value.splice(index, 1);
};

const saveAnnotations = () => {
  // Aquí puedes añadir la lógica para guardar las anotaciones en el archivo PDF.
  // En este ejemplo, solo simulamos el guardado.
  alert('Anotaciones guardadas (simulación)');
};
</script>

<style scoped>
.avance-programatico {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 900px;
  margin: 2rem auto;
}

h1 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 1.5rem;
}

.actions {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.upload-button,
.download-button,
.edit-button {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  text-decoration: none;
}

.upload-button input {
  display: none;
}

.upload-button:hover,
.download-button:hover,
.edit-button:hover {
  background-color: #45a049;
}

.download-button {
  background-color: #2196f3;
}

.download-button:hover {
  background-color: #1e88e5;
}

.download-button:disabled {
  background-color: #9e9e9e;
  cursor: not-allowed;
}

.edit-button {
  background-color: #ff9800;
}

.edit-button:hover {
  background-color: #fb8c00;
}

.edit-button:disabled {
  background-color: #9e9e9e;
  cursor: not-allowed;
}

.material-icons {
  margin-left: 0.5rem;
}

.document-viewer {
  width: 100%;
  max-width: 800px;
  height: 500px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.document-viewer iframe {
  width: 100%;
  height: 100%;
  border: none;
}

.editor {
  width: 100%;
  max-width: 800px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  margin-top: 2rem;
}

.editor h2 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
}

.editor textarea {
  width: 100%;
  height: 100px;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
}

.add-annotation {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.add-annotation:hover {
  background-color: #45a049;
}

.annotations {
  margin-top: 1rem;
}

.annotations h3 {
  font-size: 1.25rem;
  color: #333;
  margin-bottom: 0.5rem;
}

.annotations ul {
  list-style-type: none;
  padding: 0;
}

.annotations li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
}

.annotations button {
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 0.25rem 0.5rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.875rem;
  transition: background-color 0.3s ease;
}

.annotations button:hover {
  background-color: #c0392b;
}

.corrections-table {
  width: 100%;
  max-width: 800px;
  margin-top: 2rem;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1rem;
}

.corrections-table h2 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
}

.corrections-table table {
  width: 100%;
  border-collapse: collapse;
}

.corrections-table th,
.corrections-table td {
  padding: 0.75rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.corrections-table th {
  background-color: #f9f9f9;
  font-weight: bold;
}

.corrections-table tr:last-child td {
  border-bottom: none;
}
</style>
