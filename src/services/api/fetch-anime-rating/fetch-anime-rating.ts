import { publicHttp } from '@/services/http'

import { AnimeRating } from './fetch-anime-rating.interface'

export const fetchAnimeRating = async (animeUrl: string) => {
  const response = await publicHttp.get<AnimeRating[]>(
    `/anime/${animeUrl}/rating`
  )

  return response
}
