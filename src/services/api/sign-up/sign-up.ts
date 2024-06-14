import { publicHttp } from '@/services/http'

import { SignUpParams } from './sign-up.interface'

export const signup = async (params: SignUpParams) => {
  const response = await publicHttp.post(`/auth/authentication`, params)

  return response
}
