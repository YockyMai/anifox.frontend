import { http } from '@/services/http'

export const checkEmail = async (email: string) => {
  await http.post(`/auth/check/email`, {
    searchParams: {
      email
    }
  })
}
