<template>
	<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet">
	<aside v-if="showSidebar" :class="`${is_expanded ? 'is-expanded' : ''}`">
	  <div class="logo">
		<img :src="logoURL" alt="Vue" />
	  </div>
  
	  <div class="menu-toggle-wrap">
		<button class="menu-toggle" @click="ToggleMenu" aria-label="Toggle sidebar">
		  <span class="material-icons">keyboard_double_arrow_right</span>
		</button>
	  </div>
	  
	  <h3>Menú</h3>
	  <div class="menu">
		<router-link to="/Home" class="button" aria-label="Dashboard">
		  <span class="material-icons">home</span>
		  <span class="text">Dashboard</span>
		</router-link>
  
		<h4>SIG DOCENTES</h4>
		<div @click="toggleGenerales" class="button" aria-label="Generales">
		  <span class="material-icons">folder</span>
		  <span class="text">Generales</span>
		  <span class="material-icons dropdown-icon">{{ isGeneralesOpen ? 'expand_less' : 'expand_more' }}</span>
		</div>
  
		<div v-if="isGeneralesOpen" class="submenu">
		  <router-link to="/Horario" class="button" aria-label="Horario">
			<span class="material-icons">schedule</span>
			<span class="text">Horario</span>
		  </router-link>
		  <router-link to="/Nombramientos" class="button" aria-label="Nombramientos">
			<span class="material-icons">assignment_ind</span>
			<span class="text">Nombramientos</span>
		  </router-link>
		</div>
  
		<div @click="toggleComisiones" class="button" aria-label="Comisiones">
		  <span class="material-icons">folder</span>
		  <span class="text">Comisiones</span>
		  <span class="material-icons dropdown-icon">{{ isComisionesOpen ? 'expand_less' : 'expand_more' }}</span>
		</div>
  
		<div v-if="isComisionesOpen" class="submenu">
		  <router-link to="/DocumentosConstancias" class="button" aria-label="Documentos">
			<span class="material-icons">description</span>
			<span class="text">Documentos</span>
		  </router-link>
		  <router-link to="/ConstanciasCumplimiento" class="button" aria-label="Constancias">
			<span class="material-icons">description</span>
			<span class="text">Constancias</span>
		  </router-link>
		</div>
  
		<div @click="toggleSeguimiento" class="button" aria-label="Seguimiento departamental">
		  <span class="material-icons">folder</span>
		  <span class="text">Seguimiento departamental</span>
		  <span class="material-icons dropdown-icon">{{ isSeguimientoOpen ? 'expand_less' : 'expand_more' }}</span>
		</div>
  
		<div v-if="isSeguimientoOpen" class="submenu">
		  <router-link to="/AvanceP" class="button" aria-label="Avance programático">
			<span class="material-icons">description</span>
			<span class="text">Avance programático</span>
		  </router-link>
		  <router-link to="/Instrumentacion" class="button" aria-label="Instrumentación didáctica">
			<span class="material-icons">description</span>
			<span class="text">Instrumentación didáctica</span>
		  </router-link>
		  <router-link to="/EvaluacionDiagnostica" class="button" aria-label="Evaluación diagnóstica">
			<span class="material-icons">description</span>
			<span class="text">Evaluación diagnóstica</span>
		  </router-link>
		  <router-link to="/CarpetaE" class="button" aria-label="Carpeta de evidencias">
			<span class="material-symbols-outlined">folder_open</span>
			<span class="text">Carpeta de evidencias</span>
		  </router-link>
		  <router-link to="/AcuseEstudiante" class="button" aria-label="Acuse del estudiante">
			<span class="material-icons">description</span>
			<span class="text">Acuse del estudiante</span>
		  </router-link>
		  <router-link to="/CalificacionesParciales" class="button" aria-label="Calificaciones parciales">
			<span class="material-icons">description</span>
			<span class="text">Calificaciones parciales</span>
		  </router-link>
		  <router-link to="Admin/SeguimientoDepartamental" class="button" aria-label="Asesorías">
			<span class="material-icons">description</span>
			<span class="text">Asesorías</span>
		  </router-link>
		</div>
  
		<div @click="toggleProyectosIndividuales" class="button" aria-label="Proyectos individuales">
		  <span class="material-icons">folder</span>
		  <span class="text">Proyectos individuales</span>
		  <span class="material-icons dropdown-icon">{{ isProyectosIndividualesOpen ? 'expand_less' : 'expand_more' }}</span>
		</div>
  
		<div v-if="isProyectosIndividualesOpen" class="submenu">
		  <router-link to="/ProjectosDocencia" class="button" aria-label="Proyectos de docencia">
			<span class="material-icons">description</span>
			<span class="text">Proyectos de docencia</span>
		  </router-link>
		  <router-link to="/ProjectosVinculacion" class="button" aria-label="Proyectos de vinculación">
			<span class="material-icons">description</span>
			<span class="text">Proyectos de vinculación</span>
		  </router-link>
		  <router-link to="/ProyectosInvestigacion" class="button" aria-label="Proyectos de investigación">
			<span class="material-icons">description</span>
			<span class="text">Proyectos de investigación</span>
		  </router-link>
		</div>
  
		<div @click="toggleLiberacion" class="button" aria-label="Liberación de actividades">
		  <span class="material-icons">folder</span>
		  <span class="text">Liberación de actividades</span>
		  <span class="material-icons dropdown-icon">{{ isLiberacionOpen ? 'expand_less' : 'expand_more' }}</span>
		</div>
  
		<div v-if="isLiberacionOpen" class="submenu">
		  <router-link to="/ReporteFinal" class="button" aria-label="Reporte final">
			<span class="material-icons">description</span>
			<span class="text">Reporte final</span>
		  </router-link>
		  <router-link to="/ActasCalificaciones" class="button" aria-label="Actas de calificaciones">
			<span class="material-icons">description</span>
			<span class="text">Actas de calificaciones</span>
		  </router-link>
		  <router-link to="/LiberacionActividadesDocentes" class="button" aria-label="Liberación de actividades docentes">
			<span class="material-icons">description</span>
			<span class="text">Liberación de actividades docentes</span>
		  </router-link>
		  <router-link to="/LiberacionActividadesAcademicas" class="button" aria-label="Liberación de actividades académicas">
			<span class="material-icons">description</span>
			<span class="text">Liberación de actividades académicas</span>
		  </router-link>
		</div>
		
		<router-link to="/Tutorias" class="button" aria-label="Tutorías">
			<span class="material-icons">school</span>
			<span class="text">Tutorías</span>
		  </router-link>

		  <router-link to="/ValidacionEntregas" class="button" aria-label="Validación de entregas">
			<span class="material-icons">check_circle</span>
			<span class="text">Validación de entregas</span>
		  </router-link>
	  </div>
  
	  <div class="flex"></div>
  
	  <div class="menu">
		<h4>Configuraciones</h4>
		<router-link to="/Configuracion" class="button" aria-label="Configuraciones">
		  <span class="material-icons">settings</span>
		  <span class="text">Configuraciones</span>
		</router-link>
	  </div>
	</aside>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import { useRoute } from 'vue-router';
  import logoURL from '../assets/Mapache.jpg';
  
  const is_expanded = ref(localStorage.getItem("is_expanded") === "true");
  const isGeneralesOpen = ref(false);
  const isComisionesOpen = ref(false);
  const isSeguimientoOpen = ref(false);
  const isProyectosIndividualesOpen = ref(false);
  const isLiberacionOpen = ref(false);
  
  const ToggleMenu = () => {
	is_expanded.value = !is_expanded.value;
	localStorage.setItem("is_expanded", is_expanded.value);
  };
  
  const toggleGenerales = () => {
	isGeneralesOpen.value = !isGeneralesOpen.value;
  };
  
  const toggleComisiones = () => {
	isComisionesOpen.value = !isComisionesOpen.value;
  };
  
  const toggleSeguimiento = () => {
	isSeguimientoOpen.value = !isSeguimientoOpen.value;
  };
  
  const toggleProyectosIndividuales = () => {
	isProyectosIndividualesOpen.value = !isProyectosIndividualesOpen.value;
  };
  
  const toggleLiberacion = () => {
	isLiberacionOpen.value = !isLiberacionOpen.value;
  };
  
  const route = useRoute();
  const showSidebar = computed(() => route.path !== '/login'); 
  </script>
  <style lang="scss" scoped>
  aside {
	display: flex;
	flex-direction: column;
	background-color: #ffffff; /* Fondo blanco */
	color: #333333; /* Texto oscuro */
	width: calc(2rem + 32px);
	overflow: hidden;
	min-height: 100vh;
	padding: 1rem;
	transition: 0.2s ease-in-out;
	box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
	border-right: 1px solid #e0e0e0; /* Borde suave */
  
	.flex {
	  flex: 1 1 0%;
	}
  
	.logo img {
	  width: 2.5rem;
	  height: 2.5rem;
	  border-radius: 50%;
	  object-fit: cover;
	  border: 2px solid #00a650; /* Verde de Mercado Libre */
	  margin-bottom: 1rem;
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
		background: none;
		border: none;
		cursor: pointer;
  
		.material-icons {
		  font-size: 2rem;
		  color: #333333; /* Color oscuro */
		  transition: 0.2s ease-out;
		}
  
		&:hover {
		  .material-icons {
			color: #00a650; /* Verde de Mercado Libre */
			transform: translateX(0.5rem);
		  }
		}
	  }
	}
  
	h3, h4,
	.button .text {
	  opacity: 0;
	  transition: opacity 0.3s ease-in-out;
	}
  
	h3, h4 {
	  color: #666666; /* Color gris */
	  font-size: 0.875rem;
	  margin-bottom: 0.5rem;
	  text-transform: uppercase;
	  padding-left: 0.5rem;
	}
  
	.menu {
	  margin: 0 -1rem;
  
	  .button {
		display: flex;
		align-items: center;
		text-decoration: none;
		transition: 0.2s ease-in-out;
		padding: 0.75rem 1rem;
		border-radius: 0.5rem;
		margin-bottom: 0.5rem;
		color: #333333; /* Texto oscuro */
  
		.material-icons {
		  font-size: 1.5rem;
		  color: #666666; /* Color gris */
		  transition: 0.2s ease-in-out;
		  margin-right: 1rem;
		}
  
		.text {
		  color: #333333; /* Texto oscuro */
		  transition: 0.2s ease-in-out;
		  font-size: 0.875rem;
		}
  
		&:hover {
		  background-color: #f5f5f5; /* Fondo gris claro al pasar el mouse */
  
		  .material-icons,
		  .text {
			color: #00a650; /* Verde de Mercado Libre */
		  }
		}
  
		&.router-link-exact-active {
		  background-color: #f5f5f5; /* Fondo gris claro para la opción activa */
		  border-right: 3px solid #00a650; /* Borde verde */
  
		  .material-icons,
		  .text {
			color: #00a650; /* Verde de Mercado Libre */
		  }
		}
	  }
  
	  .dropdown-icon {
		margin-left: auto;
		transition: transform 0.2s ease-in-out;
		color: #666666; /* Color gris */
	  }
  
	  .submenu {
		padding-left: 1.5rem;
		margin-top: 0.5rem;
  
		.button {
		  padding-left: 1rem;
		  background-color: transparent;
		  border-radius: 0.25rem;
		  margin-bottom: 0.25rem;
  
		  &:hover {
			background-color: #f5f5f5; /* Fondo gris claro al pasar el mouse */
		  }
		}
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
  
	  h3, h4,
	  .button .text {
		opacity: 1;
	  }
  
	  .button .material-icons {
		margin-right: 1rem;
	  }
	}
  
	@media (max-width: 1024px) {
	  position: absolute;
	  z-index: 99;
	}
  }
  </style>