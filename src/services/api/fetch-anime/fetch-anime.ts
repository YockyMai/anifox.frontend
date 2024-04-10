import { publicHttp } from '@/services/http'

import { AnimeResponse } from './fetch-anime.interface'

export const fetchAnime = async ({ animeUrl }: { animeUrl: string }) => {
  const response = await publicHttp.get<AnimeResponse>(`anime/${animeUrl}`)

  return response
}
