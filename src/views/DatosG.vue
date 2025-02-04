<template>
    <div class="datos-generales">
      <h1>Datos Generales del Usuario</h1>
      <div class="user-info">
        <img :src="user.profilePicture" alt="Foto de perfil" class="profile-picture" />
        <div class="info">
          <h2>{{ user.name }}</h2>
          <p><strong>Correo institucional:</strong> {{ user.email }}</p>
          <p><strong>Teléfono:</strong> {{ user.phone }}</p>
          <p><strong>Dirección:</strong> {{ user.address }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import profilePicture from '../assets/MapacheM.jpg';
  
  const user = ref({
    profilePicture, 
    name: 'Maestro Mapache',
    email: 'mapache.maestro@tecnm.mx',
    phone: '+52 983 737 37 23',
    address: '123 Calle Bugambilias, Martinez Ross, Chetumal,'
  });
  </script>
  
  <style scoped>
  .datos-generales {
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
  
  .user-info {
    display: flex;
    align-items: center;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 1.5rem;
    width: 100%;
  }
  
  .profile-picture {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 1.5rem;
  }
  
  .info {
    flex: 1;
  }
  
  h2 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 0.5rem;
  }
  
  p {
    font-size: 1rem;
    color: #666;
    margin: 0.5rem 0;
  }
  
  strong {
    color: #333;
  }
  </style>
  