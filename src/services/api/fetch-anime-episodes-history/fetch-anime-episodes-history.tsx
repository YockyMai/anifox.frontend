import { http } from '@/services/http'

import {
  FetchAnimeEpisodesHistoryRequest,
  FetchAnimeEpisodesHistoryResponse
} from './fetch-anime-episodes-history.interface'

export const fetchAnimeEpisodesHistory = async ({
  animeUrl,
  limit = 10,
  page = 0
}: FetchAnimeEpisodesHistoryRequest) => {
  const response = await http.get<FetchAnimeEpisodesHistoryResponse>(
    `/anime/${animeUrl}/episodes/history`,
    {
      params: {
        page,
        limit
      }
    }
  )

  return response
}
