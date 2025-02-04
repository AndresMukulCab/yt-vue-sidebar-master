<template>
	
	<aside v-if="showSidebar" :class="`${is_expanded ? 'is-expanded' : ''}`">
	  <div class="logo">
		<img :src="logoURL" alt="Vue" />
	  </div>

	  <div class="menu-toggle-wrap">
		<button class="menu-toggle" @click="ToggleMenu">
		  <span class="material-icons">keyboard_double_arrow_right</span>
		</button>
	  </div>
	  
	  <h3>Menu</h3>
	  <div class="menu">
		<router-link to="/Home" class="button">
		  <span class="material-icons">home</span>
		  <span class="text">Dashboard</span>
		</router-link>

		<div @click="toggleDocuments" class="button documents-button">
			<span class="material-icons">folder</span>
			<span class="text">Documentos</span>
			<span class="material-icons dropdown-icon">{{ isDocumentsOpen ? 'expand_less' : 'expand_more' }}</span>
		  </div>
		  

		<div v-if="isDocumentsOpen" class="submenu">
		  <router-link to="/about" class="button">
			<span class="material-icons">description</span>
			<span class="text">Liberacion de actividades</span>
		  </router-link>
		  <router-link to="/about" class="button">
			<span class="material-icons">description</span>
			<span class="text">Proyectos individuales</span>
		  </router-link>
		  <router-link to="/AvanceP" class="button">
			<span class="material-icons">description</span>
			<span class="text">Avance programatico</span>
		  </router-link>

		  <router-link to="/Instrumentacion" class="button">
			<span class="material-icons">description</span>
			<span class="text">Instrumentacion didactica</span>
		  </router-link>

		  <router-link to="/about" class="button">
			<span class="material-icons">description</span>
			<span class="text">Evaluacion diagnostica</span>
		  </router-link>

		  <router-link to="/CarpetaE" class="button">
			<span class="material-icons">folder_open</span>
			<span class="text">Carpeta de evidencias</span>
		  </router-link>

		  <router-link to="/Nombramientos" class="button">
			<span class="material-icons">schedule</span>
			<span class="text">Horario</span>
		  </router-link>

		</div>
		<router-link to="/DatosG" class="button">
		  <span class="material-icons">group</span>
		  <span class="text">Usuario</span>
		</router-link>

		<router-link to="/Calendario" class="button">
			<span class="material-icons">calendar_today</span>
			<span class="text">Calendario</span>
		  </router-link>			  
	  </div>

	  <div class="flex"></div>

	  <div class="menu">
		<router-link to="/Configuracion" class="button">
		  <span class="material-icons">settings</span>
		  <span class="text">Configuraciones</span>
		</router-link>
	  </div>
	  <div class="menu">
		<router-link to="/Configuracion" class="button">
		  <span class="material-icons">logout</span>
		  <span class="text">Cerrar sesión</span>
		</router-link>
	  </div>
	  
	</aside>
  </template>
  <script setup>
  import { ref, computed } from 'vue';
  import { useRoute } from 'vue-router';
  import logoURL from '../assets/Mapache.jpg';
  
  const is_expanded = ref(localStorage.getItem("is_expanded") === "true");
  const isDocumentsOpen = ref(false);
  
  const ToggleMenu = () => {
	  is_expanded.value = !is_expanded.value;
	  localStorage.setItem("is_expanded", is_expanded.value);
  };
  
  const toggleDocuments = () => {
	  isDocumentsOpen.value = !isDocumentsOpen.value;
  };
  
  const route = useRoute();
  const showSidebar = computed(() => route.path !== '/login'); 
  </script>
  
  <style lang="scss" scoped>
  aside {
	display: flex;
	flex-direction: column;
  
	// Degradado vibrante en tonos de azul y cian
	background: ( #000b29);
	color: var(--light);
  
	width: calc(2rem + 32px);
	overflow: hidden;
	min-height: 100vh;
	padding: 1rem;
  
	transition: 0.2s ease-in-out;
  
	.flex {
	  flex: 1 1 0%;
	}
  
	.logo img {
	  width: 2.5rem;
	  height: 2.5rem;
	  border-radius: 50%;
	  object-fit: cover;
	  border: 2px solid #ffffff; // Borde blanco para contraste
	}
  
	.menu-toggle-wrap {
	  display: flex;
	  justify-content: flex-end;
	  margin-bottom: 1rem;
  
	  position: relative;
	  top: 0;
	  transition: 0.2s ease-in-out;
  
	  .menu-toggle {
		transition: 0.2s ease-in-out;
  
		.material-icons {
		  font-size: 2rem;
		  color: var(--light);
		  transition: 0.2s ease-out;
		}
  
		&:hover {
		  .material-icons {
			color: var(--primary);
			transform: translateX(0.5rem);
		  }
		}
	  }
	}
  
	h3,
	.button .text {
	  opacity: 0;
	  transition: opacity 0.3s ease-in-out;
	}
  
	h3 {
	  color: var(--grey);
	  font-size: 0.875rem;
	  margin-bottom: 0.5rem;
	  text-transform: uppercase;
	}
  
	.menu {
	  margin: 0 -1rem;
  
	  .button {
		display: flex;
		align-items: center;
		text-decoration: none;
  
		transition: 0.2s ease-in-out;
		padding: 0.5rem 1rem;
  
		.material-icons {
		  font-size: 2rem;
		  color: var(--light);
		  transition: 0.2s ease-in-out;
		}
		.text {
		  color: var(--light);
		  transition: 0.2s ease-in-out;
		}
  
		&:hover {
		  background-color: rgba(255, 0, 0, 0.1); // Fondo semitransparente para hover
  
		  .material-icons,
		  .text {
			//Color del hover
			color: var(--primary);
		  }
		}
  
		&.router-link-exact-active {
		  background-color: rgba(22, 255, 201, 0.1);
		  border-right: 5px solid var(--primary);
  
		  .material-icons,
		  .text {
			//Color del hover
			color: var(--primary);
		  }
		}
	  }
  
	  .documents-button {
		cursor: pointer;
	  }
  
	  .dropdown-icon {
		margin-left: auto;
	  }
  
	  .submenu {
		padding-left: 1rem;
  
		.button {
		  padding-left: 0.5rem;
		}
	  }
	}
  
	.footer {
	  opacity: 0;
	  transition: opacity 0.3s ease-in-out;
  
	  p {
		font-size: 0.875rem;
		color: var(--grey);
	  }
	}
  
	&.is-expanded {
	  width: var(--sidebar-width);
  
	  .menu-toggle-wrap {
		top: -3rem;
  
		.menu-toggle {
		  transform: rotate(-180deg);
		}
	  }
  
	  h3,
	  .button .text {
		opacity: 1;
	  }
  
	  .button .material-icons {
		margin-right: 1rem;
	  }
  
	  .footer {
		opacity: 0;
	  }
	}
  
	@media (max-width: 1024px) {
	  position: absolute;
	  z-index: 99;
	}
  }
  </style>
  
  