import { privateHttp } from '@/services/http'

import {
  FetchFavoriteAnimeListResponse,
  FetchFavoriteAnimeListParams
} from './fetch-favorite-anime-list.interface'

export const fetchFavoriteAnimeList = async ({
  status,
  limit = 15,
  page = 0
}: FetchFavoriteAnimeListParams) => {
  const response = await privateHttp.get<FetchFavoriteAnimeListResponse>(
    `/users/anime/favorite/${status}`,
    {
      params: {
        limit,
        page
      }
    }
  )

  return response
}
