import { useQuery } from '@tanstack/react-query'

import { api } from '@/services/api'

import { USER_ANIME_LIST_QUERY_KEY } from './use-user-anime-list-query.const'
import { UseUserAnimeListQueryParams } from './use-user-anime-list-query.interface'

export const getUserAnimeListQueryKey = (status: string, login: string) => [
  USER_ANIME_LIST_QUERY_KEY,
  status,
  login
]

export const useUserAnimeListQuery = (params: UseUserAnimeListQueryParams) =>
  useQuery({
    queryKey: getUserAnimeListQueryKey(params.status, params.login),
    queryFn: async () => {
      try {
        const { data } = await api.fetchUserAnimeList({
          status: params.status,
          page: 0,
          limit: 100
        })

        return data
      } catch {
        // TODO: временное решение из-за того что бек отдает 404 если список пуст, а не пустой массив.
        return []
      }
    }
  })
