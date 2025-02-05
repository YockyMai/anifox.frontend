import { http } from '@/services/http'

import { AnimeResponse } from './fetch-anime.interface'

export const fetchAnime = async (animeUrl: string) => {
  const response = await http.get<AnimeResponse>(`anime/${animeUrl}`)

  return response
}
