import { http } from '@/services/http'

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
  const response = await http.get<FetchAnimeEpisodesResponse>(
    `anime/${animeUrl}/episodes`,
    {
      params: {
        ...(page && { page }),
        ...(limit && { limit }),
        ...(sort && { sort })
      }
    }
  )

  return response
}
