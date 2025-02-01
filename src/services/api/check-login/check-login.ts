import { http } from '@/services/http'

export const checkLogin = async (login: string) => {
  await http.post(`/auth/check/login`, {
    searchParams: {
      login
    }
  })
}
