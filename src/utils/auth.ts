import { jwtDecode } from "jwt-decode"

export function getUserFromToken() {
  const token = localStorage.getItem("token")
  if (!token) return null

  try {
    return jwtDecode(token)
  } catch (e) {
    return null
  }
}

export function isTokenExpired() { 
  const user: any = getUserFromToken()

  if (!user) return true

  const expirationTime = user.exp * 1000 
  const now = Date.now() 
  return expirationTime < now 
}
