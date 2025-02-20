import { http } from '@/services/http'

import {
  FetchFavoriteAnimeListResponse,
  FetchFavoriteAnimeListParams
} from './fetch-user-anime-list.interface'

export const fetchUserAnimeList = async ({
  status,
  limit = 15,
  page = 0
}: FetchFavoriteAnimeListParams) => {
  const response = await http.get<FetchFavoriteAnimeListResponse>(
    `/users/anime/favourite/${status}`,
    {
      params: {
        limit,
        page
      }
    }
  )

  return response
}
