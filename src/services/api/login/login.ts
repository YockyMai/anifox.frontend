import { http } from '@/services/http'

import { LoginParams } from './login.interface'

export const login = async (params: LoginParams) => {
  const response = await http.post(`/auth/authentication`, params)

  return response
}
