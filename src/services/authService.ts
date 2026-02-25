import { api } from './api' 
import type { LoginRequest, RegisterRequest } from './types.ts'

export const loginUserService = (data: LoginRequest) => api.post('/auth/login', data)

export const registerUserService = (data: RegisterRequest) => api.post('/usuarios', data)
