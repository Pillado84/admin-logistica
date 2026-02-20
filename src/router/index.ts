import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView 
    },
    {
      path: '/',
      name: 'dashboard',
      component: DashboardView,
      meta: { requiresAuth: true }
    },
  ],
})

router.beforeEach((to) => { 
  const token = localStorage.getItem('token') 
  
  // Si la ruta requiere autenticación y NO hay token → redirigir a login 
  if (to.meta.requiresAuth && !token) { return '/login' } 
  
  // Si ya está autenticado e intenta ir a /login → enviarlo al dashboard 
  if (to.path === '/login' && token) { return '/' } 
})

export default router
