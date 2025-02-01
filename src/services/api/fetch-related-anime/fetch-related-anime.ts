import { http } from '@/services/http'

import { AnimeRelated } from './fetch-related-anime.interface'

export const fetchRelatedAnime = async (animeUrl: string) => {
  const response = await http.get<AnimeRelated[]>(`/anime/${animeUrl}/related`)

  return response
}
