<template>
  <div class="login-container">
    <div class="login-card">
      <h2>Iniciar Sesión</h2>
      <form @submit.prevent="handleLogin">
        <div class="input-group">
          <label for="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            v-model="email"
            placeholder="Ingresa tu correo"
            required
          />
        </div>

        <div class="input-group">
          <label for="password">Contraseña</label>
          <div class="password-container">
            <input
              :type="showPassword ? 'text' : 'password'"
              id="password"
              v-model="password"
              placeholder="Ingresa tu contraseña"
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
/* Estilos globales para asegurar que el body y html ocupen el 100% */
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  height: 100%;
}

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Usar min-height en lugar de height */
  background: linear-gradient(135deg, #1e3c72, #2a5298);
  margin: 0;
  padding: 0;
  width: 100%; /* Asegúrate de que el ancho sea del 100% */
}

.login-card {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 320px;
}

h2 {
  margin-bottom: 1rem;
  color: #333;
}

.input-group {
  margin-bottom: 1rem;
  text-align: left;
}

.input-group label {
  font-size: 0.9rem;
  color: #555;
}

.input-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
}

.password-container {
  position: relative;
  display: flex;
  align-items: center;
}

.password-container input {
  flex: 1;
}

.toggle-password {
  position: absolute;
  right: 10px;
  cursor: pointer;
}

.login-button {
  width: 100%;
  padding: 10px;
  background: #2a5298;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;
}

.login-button:hover {
  background: #1e3c72;
}

.register-link {
  margin-top: 1rem;
  font-size: 0.9rem;
}

.register-link a {
  color: #2a5298;
  text-decoration: none;
  font-weight: bold;
}
</style>