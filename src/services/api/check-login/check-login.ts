import { http } from '@/services/http'

export const checkLogin = async (login: string) => {
  return await http.post(
    `/auth/check/login`,
    {},
    {
      params: {
        login
      }
    }
  )
}
