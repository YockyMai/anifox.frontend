import { http } from '@/services/http'

import { AnimeMedia } from './fetch-anime-media.interface'

export const fetchAnimeMedia = async ({ animeUrl }: { animeUrl: string }) => {
  const response = await http.get<AnimeMedia[]>(`anime/${animeUrl}/media`)

  return response
}
