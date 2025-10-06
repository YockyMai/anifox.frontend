import { User } from '@/graphql/generated/output'
import { http } from '@/services/http'

export const uploadUserBanner = async (file: File) => {
  const formData = new FormData()

  formData.append('file', file)

  const response = await http.post<User>(`/user/upload/banner`, formData)

  return response.data
}
