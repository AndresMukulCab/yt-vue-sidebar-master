<template>
    <div class="configuracion">
      <h1>Configuración</h1>
      <div class="settings-container">
        <div class="setting-item">
          <span class="material-icons">notifications</span>
          <div>
            <h2>Notificaciones</h2>
            <p>Gestiona tus preferencias de notificaciones.</p>
          </div>
          <button @click="manageNotifications">Gestionar</button>
        </div>
        <div class="setting-item">
          <span class="material-icons">person</span>
          <div>
            <h2>Perfil</h2>
            <p>Edita tu información personal y foto de perfil.</p>
          </div>
          <button @click="editProfile">Editar</button>
        </div>
        <div class="setting-item">
          <span class="material-icons">privacy_tip</span>
          <div>
            <h2>Privacidad</h2>
            <p>Configura tus opciones de privacidad.</p>
          </div>
          <button @click="managePrivacy">Gestionar</button>
        </div>
        
      </div>
    </div>
  </template>
  
  <script setup>
  const manageNotifications = () => {
    alert('Abrir configuración de notificaciones');
  };
  
  const editProfile = () => {
    alert('Abrir configuración de perfil');
  };
  
  const managePrivacy = () => {
    alert('Abrir configuración de privacidad');
  };
  
  const customizeTheme = () => {
    alert('Abrir configuración de tema');
  };
  </script>
  
  <style scoped>
  .configuracion {
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
    margin-bottom: 2rem;
  }
  
  .settings-container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
  }
  
  .setting-item {
    display: flex;
    align-items: center;
    background-color: white;
    padding: 1rem;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .setting-item span.material-icons {
    font-size: 2rem;
    color: #4caf50;
    margin-right: 1rem;
  }
  
  .setting-item h2 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 0.5rem;
  }
  
  .setting-item p {
    font-size: 1rem;
    color: #666;
  }
  
  .setting-item button {
    background-color: #4caf50;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    margin-left: auto;
    transition: background-color 0.3s ease;
  }
  
  .setting-item button:hover {
    background-color: #45a049;
  }
  </style>
  