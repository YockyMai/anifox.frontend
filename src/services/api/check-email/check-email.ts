import { http } from '@/services/http'

export const checkEmail = async (email: string) => {
  return await http.post('/auth/check/email', {}, { params: { email } })
}
