import { useInfiniteQuery } from '@tanstack/react-query'

import { api, FetchFavoriteAnimeListResponse } from '@/services/api'

import { USER_ANIME_LIST_QUERY_KEY } from './use-user-anime-list-query.const'
import { UseUserAnimeListQueryParams } from './use-user-anime-list-query.interface'

export const useUserAnimeListQuery = (params: UseUserAnimeListQueryParams) =>
  useInfiniteQuery({
    queryKey: [USER_ANIME_LIST_QUERY_KEY, params.status, params.login],
    queryFn: async ({ pageParam = 0 }) => {
      const { data } = await api.fetchUserAnimeList({
        status: params.status,
        page: pageParam
      })

      return data
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length !== 0 ? allPages.length : undefined,
    refetchOnWindowFocus: false
  })
