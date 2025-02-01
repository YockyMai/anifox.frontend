import { http } from '@/services/http'

import { SignupParams } from './sign-up.interface'

export const signup = async (params: SignupParams) => {
  const response = await http.post(`/auth/registration`, {
    body: params
  })

  return response
}
