import { http } from '@/services/http'

import { AnimeVideo } from './fetch-anime-videos.interface'

export const fetchAnimeVideos = async (animeUrl: string) => {
  const response = await http.get<AnimeVideo[]>(`anime/${animeUrl}/videos`)

  return response
}
