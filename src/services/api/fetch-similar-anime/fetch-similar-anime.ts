import { publicHttp } from '@/services/http'

import { Anime } from '../fetch-anime-list'

export const fetchSimilarAnime = async (animeUrl: string) => {
  const response = await publicHttp.get<Anime[]>(`/anime/${animeUrl}/similar`)

  return response
}
