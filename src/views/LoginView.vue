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
import { loginUserService, registerUserService } from '@/services/authService' 
import { rolesUsersService } from '@/services/enums'
import axios, { AxiosError } from 'axios'

function isAxiosError(error: unknown): error is AxiosError { return axios.isAxiosError(error) } 

type BackendError = { message: string } 

const router = useRouter() 
const activeTab = ref('login') 
const login = ref({ username: '', password: '' }) 
const register = ref({ username: '', password: '', nombre: '', apellidos: '', email: '', rol: '', activo: true }) 
const roles = ref<string[]>([]) 

onMounted(async () => { 
  const res = await rolesUsersService() 
  roles.value = res.data }) 
  
// LOGIN 
const loginUser = async () => { 
  try { 
    const res = await loginUserService(login.value) 
    localStorage.setItem('token', res.data.token) 
    router.push('/') 
  } catch (err: unknown) { 
    console.log('Error al iniciar sesión')
    console.log(err)
  } 
} 

// REGISTRO 
const registerUser = async () => { 
  try { 
    await registerUserService(register.value) 
    
    // Login automático 
    const loginResponse = await loginUserService({ 
      username: register.value.username, 
      password: register.value.password 
    }) 
    
    localStorage.setItem('token', loginResponse.data.token) 
    
    router.push('/') 
  } catch (err: unknown) { 
    if (isAxiosError(err)) { 
      const status = err.response?.status 
      const data = err.response?.data as BackendError | undefined 
      
      switch (status) { 
        case 409: 
          console.log("Conflicto:", data?.message) 
          break 
        default: 
          console.log("Error:", data?.message) 
      } 
    } 
  } 
} 
</script>