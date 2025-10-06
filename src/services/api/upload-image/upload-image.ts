import { http } from '@/services/http'

export const uploadImage = async (file: File) => {
  const formData = new FormData()

  formData.append('file', file)

  const response = await http.post<string>(`/upload/uploads`, formData)

  return response.data
}
