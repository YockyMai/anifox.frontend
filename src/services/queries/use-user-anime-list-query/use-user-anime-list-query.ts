import { useQuery } from '@tanstack/react-query'

import { api } from '@/services/api'

import { USER_ANIME_LIST_QUERY_KEY } from './use-user-anime-list-query.const'
import { UseUserAnimeListQueryParams } from './use-user-anime-list-query.interface'

export const useUserAnimeListQuery = (params: UseUserAnimeListQueryParams) =>
  useQuery({
    queryKey: [USER_ANIME_LIST_QUERY_KEY, params.status, params.login],
    queryFn: async () => {
      const { data } = await api.fetchUserAnimeList({
        status: params.status,
        page: 0,
        limit: 100
      })

      return data
    }
  })
