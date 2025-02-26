import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue'; // Importar la vista de Login

const routes = [
  {
    path: '/',
    redirect: '/login' // Redirigir automáticamente al login
  },

  {
    path: '/login',
    component: Login,
    meta: { hideLayout: true } // Etiqueta para que se use en app vue y oculte el sidebar
  },

  {
    path: '/home',
    component: Home
  },

  {
    path: '/CarpetaE',
    component: () => import('../views/CarpetaE.vue')
  },

  {
    path: '/AvanceP',
    component: () => import('../views/AvanceP.vue')
  },

  {
    path: '/ProjectosDocencia',
    component: () => import('../views/ProjectosDocencia.vue')
  },

  {
    path: '/ProjectosVinculacion',
    component: () => import('../views/ProjectosVinculacion.vue')
  },

  {
    path: '/ProyectosInvestigacion',
    component: () => import('../views/ProyectosInvestigacion.vue')
  },

  {
    path: '/SeguimientoMaestros',
    component: () => import('../views/SeguimientoMaestros.vue')
  },

  {
    path: '/Instrumentacion',
    component: () => import('../views/Instrumentacion.vue')
  },

  {
    path: '/Horario',
    component: () => import('../views/Horario.vue')
  },

  {
    path: '/Nombramientos',
    component: () => import('../views/Nombramientos.vue')
  },

  {
    path: '/DocumentosConstancias',
    component: () => import('../views/DocumentosConstancias.vue')
  },

  {
    path: '/AcuseEstudiante',
    component: () => import('../views/AcuseEstudiante.vue')
  },

  {
    path: '/EvaluacionDiagnostica',
    component: () => import('../views/EvaluacionDiagnostica.vue')
  },

  {
    path: '/CalificacionesParciales',
    component: () => import('../views/CalificacionesParciales.vue')
  },


  {
    path: '/ConstanciasCumplimiento',
    component: () => import('../views/ConstanciasCumplimiento.vue')
  },

  {
    path: '/ActasCalificaciones',
    component: () => import('../views/ActasCalificaciones.vue')
  },

  {
    path: '/Configuracion',
    component: () => import('../views/Configuracion.vue')
  },

  {
    path: '/Calendario',
    component: () => import('../views/Calendario.vue')
  },

  {
    path: '/DatosG',
    component: () => import('../views/DatosG.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;