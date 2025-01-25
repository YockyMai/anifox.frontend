import { publicHttp } from '@/services/http'

import { AnimeRelated } from './fetch-related-anime.interface'

export const fetchRelatedAnime = async (animeUrl: string) => {
  const response = await publicHttp.get<AnimeRelated[]>(
    `/anime/${animeUrl}/related`
  )

  return response
}
