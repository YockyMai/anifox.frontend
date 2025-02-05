import { http } from '@/services/http'

import { RecentlyWatchedEpisode } from './fetch-recently-watched-episodes.interface'

export const lastWatchedEpisodeQuery = async (animeUrl: string) => {
  const response = await http.get<RecentlyWatchedEpisode[]>(
    `/users/anime/${animeUrl}/recently`
  )

  return response
}
