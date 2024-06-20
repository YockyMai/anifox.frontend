import { publicHttp } from '@/services/http'

import {
  FetchAnimeEpisodesParams,
  FetchAnimeEpisodesResponse
} from './fetch-anime-episodes.interface'

export const fetchAnimeEpisodes = async ({
  animeUrl,
  limit,
  page,
  sort
}: FetchAnimeEpisodesParams) => {
  const response = await publicHttp.get<FetchAnimeEpisodesResponse>(
    `anime/${animeUrl}/episodes`,
    {
      searchParams: {
        ...(page && { page }),
        ...(limit && { limit }),
        ...(sort && { sort })
      }
    }
  )

  return response
}
