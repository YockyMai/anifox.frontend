import { User } from '@/graphql/generated/output'
import { http } from '@/services/http'

export const uploadUserAvatar = async (file: File) => {
  const formData = new FormData()

  formData.append('file', file)

  const response = await http.post<User>(`/user/upload/avatar`, formData)

  return response.data
}
