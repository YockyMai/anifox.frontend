import { QueryClient } from '@tanstack/react-query'

import { api } from '@/services/api'

import { ALL_TIME_POPULAR_ANIME_QUERY_KEY } from './use-all-time-popular-anime-query.const'

export const usePrefetchAllTimePopularAnimeListQuery = (
  queryClient: QueryClient
) =>
  queryClient.prefetchQuery({
    queryKey: [ALL_TIME_POPULAR_ANIME_QUERY_KEY],
    queryFn: async () => {
      const { data } = await api.fetchAnimeList({
        page: 0,
        limit: 7,
        sort: 'Desc',
        order: 'Random'
      })

      return data
    }
  })
