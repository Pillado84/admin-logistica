import axios from 'axios'

export interface LoginRequest {
  username: string
  password: string
}

export interface RegisterRequest {
  username: string
  email: string
  password: string
}

export const loginUserService = async (data: LoginRequest) => {
  return axios.post('/auth/login', data)
}

export const registerUserService = async (data: RegisterRequest) => {
  return axios.post('http://localhost:8080/api/v1/usuarios', data)
}
