<template>
  <div class="login-container">
    <div class="login-card">
      <div class="logo">
        <img src=".\src\assets\LogoITCH.png" alt="LogoITCH" /> <!-- Reemplaza con tu logo -->
      </div>
      <h2>Iniciar Sesión</h2>
      <form @submit.prevent="handleLogin">
        <div class="input-group">
          <input
            type="email"
            id="email"
            v-model="email"
            placeholder="Correo Electrónico"
            required
          />
        </div>

        <div class="input-group">
          <div class="password-container">
            <input
              :type="showPassword ? 'text' : 'password'"
              id="password"
              v-model="password"
              placeholder="Contraseña"
              required
            />
            <span class="toggle-password" @click="showPassword = !showPassword">
              {{ showPassword ? "🙈" : "👁️" }}
            </span>
          </div>
        </div>

        <button type="submit" class="login-button">Ingresar</button>
      </form>
      <p class="register-link">
        ¿No tienes cuenta? <a href="#">Regístrate aquí</a>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const email = ref("");
const password = ref("");
const showPassword = ref(false);

const handleLogin = () => {
  alert(`Correo: ${email.value}, Contraseña: ${password.value}`);
};
</script>

<style scoped>
/* Estilos globales */
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: 'Georgia', serif; /* Tipografía más formal */
  background: #f5f5f5; /* Fondo claro */
}

#app {
  height: 100%;
}

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, rgba(245, 245, 245, 0.9), rgba(230, 230, 230, 0.9)), url('https://source.unsplash.com/1600x900/?university,campus');
  background-size: cover;
  background-position: center;
  margin: 0;
  padding: 0;
  width: 100%;
}

.login-card {
  background: rgba(255, 255, 255, 0.95); /* Fondo blanco con transparencia */
  padding: 2.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100%;
  max-width: 400px;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(0, 0, 0, 0.1);
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.logo {
  margin-bottom: 1.5rem;
}

.logo img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid #2a5298;
}

h2 {
  margin-bottom: 1.5rem;
  color: #2a5298; /* Texto azul oscuro */
  font-size: 2rem;
  font-weight: bold;
}

.input-group {
  margin-bottom: 1.5rem;
  text-align: left;
  position: relative;
}

.input-group input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc; /* Borde gris claro */
  border-radius: 6px;
  font-size: 1rem;
  background: #fff; /* Fondo blanco */
  color: #333; /* Texto oscuro */
  transition: border-color 0.3s, box-shadow 0.3s;
}

.input-group input:focus {
  border-color: #2a5298; /* Borde azul al enfocar */
  box-shadow: 0 0 8px rgba(42, 82, 152, 0.2);
  outline: none;
}

.password-container {
  position: relative;
}

.toggle-password {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #2a5298; /* Color azul para el ícono */
}

.login-button {
  width: 100%;
  padding: 12px;
  background: #2a5298; /* Botón azul */
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;
}

.login-button:hover {
  background: #1e3c72; /* Botón azul oscuro al hacer hover */
  transform: translateY(-2px);
}

.register-link {
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: #666; /* Texto gris */
}

.register-link a {
  color: #2a5298; /* Enlace azul */
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;
}

.register-link a:hover {
  color: #1e3c72; /* Enlace azul oscuro al hacer hover */
}
</style>