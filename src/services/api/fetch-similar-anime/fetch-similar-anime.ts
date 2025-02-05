import { http } from '@/services/http'

import { Anime } from '../api.types'

export const fetchSimilarAnime = async (animeUrl: string) => {
  const response = await http.get<Anime[]>(`/anime/${animeUrl}/similar`)

  return response
}
