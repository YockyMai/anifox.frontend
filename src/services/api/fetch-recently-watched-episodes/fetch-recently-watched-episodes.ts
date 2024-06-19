import { getPrivateHttp } from '@/services/http'

import { RecentlyWatchedEpisode } from './fetch-recently-watched-episodes.interface'

export const lastWatchedEpisodeQuery = async (animeUrl: string) => {
  const privateHttp = getPrivateHttp()

  const response = await privateHttp.get<RecentlyWatchedEpisode[]>(
    `/users/anime/${animeUrl}/recently`
  )

  return response
}
