import { http } from '@/services/http'

export const deleteTrackedAnime = async (animeUrl: string) => {
  const response = await http.delete(`/users/anime/${animeUrl}/favourite`)

  return response
}
