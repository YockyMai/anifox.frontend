import { publicHttp } from '@/services/http'

import { LoginParams } from './login.interface'

export const login = async (params: LoginParams) => {
  const response = await publicHttp.post(`/auth/authentication`, {
    body: params
  })

  return response
}
