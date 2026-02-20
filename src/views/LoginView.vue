<template>
  <div class="auth-box card shadow p-4">
    <ul class="nav nav-tabs mb-3" role="tablist">
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          :class="{ active: activeTab === 'login' }"
          @click="activeTab = 'login'"
        >
          Iniciar sesión
        </button>
      </li>

      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          :class="{ active: activeTab === 'register' }"
          @click="activeTab = 'register'"
        >
          Crear cuenta
        </button>
      </li>
    </ul>

    <!-- LOGIN -->
    <div v-if="activeTab === 'login'">
      <h4 class="mb-3">Iniciar sesión</h4>

      <form @submit.prevent="loginUser">
        <div class="mb-3">
          <label class="form-label">Usuario</label>
          <input v-model="login.username" type="text" class="form-control" required />
        </div>

        <div class="mb-3">
          <label class="form-label">Contraseña</label>
          <input v-model="login.password" type="password" class="form-control" required />
        </div>

        <button class="btn btn-primary w-100">Entrar</button>
      </form>
    </div>

    <!-- REGISTRO -->
    <div v-if="activeTab === 'register'">
        <h4 class="mb-3">Crear cuenta</h4>

        <form @submit.prevent="registerUser">
            
            <!-- Usuario -->
            <div class="mb-3">
            <label class="form-label">Usuario</label>
            <input v-model="register.username" type="text" class="form-control" required />
            </div>

            <!-- Nombre -->
            <div class="mb-3">
            <label class="form-label">Nombre</label>
            <input v-model="register.nombre" type="text" class="form-control" required />
            </div>

            <!-- Apellidos -->
            <div class="mb-3">
            <label class="form-label">Apellidos</label>
            <input v-model="register.apellidos" type="text" class="form-control" required />
            </div>

            <!-- Email -->
            <div class="mb-3">
            <label class="form-label">Email</label>
            <input v-model="register.email" type="email" class="form-control" required />
            </div>

            <!-- Contraseña -->
            <div class="mb-3">
            <label class="form-label">Contraseña</label>
            <input v-model="register.password" type="password" class="form-control" required />
            </div>

            <!-- Rol -->
            <div class="mb-3">
            <label class="form-label">Rol</label>
            <select v-model="register.rol" class="form-select" required>
                <option disabled value="">Seleccione un rol</option>
                <option v-for="rol in roles" :key="rol" :value="rol">
                {{ rol }}
                </option>
            </select>
            </div>

            <!-- Activo -->
            <div class="form-check form-switch mb-3">
            <input class="form-check-input" type="checkbox" v-model="register.activo" />
            <label class="form-check-label">Usuario activo</label>
            </div>

            <button class="btn btn-success w-100">Crear cuenta</button>
        </form>
        </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import axios, { AxiosError } from 'axios'

function isAxiosError(error: unknown): error is AxiosError { return axios.isAxiosError(error) }

type BackendError = { message: string }

const router = useRouter()

// Tabs
const activeTab = ref('login')

// Datos login
const login = ref({
  username: '',
  password: ''
})

// Datos registro
const register = ref({
  username: '',
  password: '',
  nombre: '',
  apellidos: '',
  email: '',
  rol: '',
  activo: true
})

// Lista de roles obtenidos del backend
const roles = ref<string[]>([])

// Cargar roles desde el backend
onMounted(async () => {
  try {
    const res = await axios.get('http://localhost:8080/api/v1/enums/roles-usuarios')
    roles.value = res.data
    console.log("Roles recibidos:", res.data)  // ← Aquí tu console.log
  } catch (err) {
    // console.error("Error cargando roles:", err)
  }
})

// LOGIN
const loginUser = async () => {
  try {
    const res = await axios.post('/auth/login', login.value)
    localStorage.setItem('token', res.data.token)
    router.push('/')
  } catch (err) {
    alert('Error al iniciar sesión')
  }
}

// REGISTRO
const registerUser = async () => {
  try {
    await axios.post('http://localhost:8080/api/v1/usuarios', register.value)
    
    // Login automático
    const loginResponse = await axios.post('http://localhost:8080/api/v1/auth/login', { username: register.value.username, password: register.value.password }) 
    
    // Guardar token (según tu backend)
    localStorage.setItem('token', loginResponse.data.token)
    
    // Redirigir al dashboard 
    window.location.href = '/'
  } catch (err) {
    console.log("Error al crear usuario")
    
    if (isAxiosError(err)) {
      const status = err.response?.status 
      const data = err.response?.data as BackendError | undefined 
      switch (status) {
        case 400:
          console.log("Solicitud inválida:", data?.message)
          break 
        case 401: 
          console.log("No autorizado:", data?.message) 
          break 
        case 403: 
          console.log("Acceso prohibido:", data?.message) 
          break 
        case 404: 
          console.log("Recurso no encontrado:", data?.message) 
          break 
        case 409: 
          console.log("Conflicto:", data?.message) 
          break 
        case 500: 
          console.log("Error interno del servidor:", data?.message) 
          break 
        default: 
          console.log("Error inesperado:", data?.message)
          break 
      } 
    } else { 
      console.log("Error inesperado:", err) 
    }
  }
}
</script>