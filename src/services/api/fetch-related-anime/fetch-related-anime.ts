import { publicHttp } from '@/services/http'

import { RelatedAnime } from './fetch-related-anime.interface'

export const fetchRelatedAnime = async (animeUrl: string) => {
  const response = await publicHttp.get<RelatedAnime[]>(
    `/anime/${animeUrl}/related`
  )

  return response
}
