import { http } from '@/services/http'

import { Anime } from '../fetch-anime-list'

export const fetchSimilarAnime = async (animeUrl: string) => {
  const response = await http.get<Anime[]>(`/anime/${animeUrl}/similar`)

  return response
}
