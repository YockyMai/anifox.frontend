import { QueryClient } from '@tanstack/react-query'

import { api } from '@/services/api'

import { MOST_RATED_ANIME_QUERY_KEY } from './use-most-rated-anime-query.const'

export const prefetchMostRatedAnimeListQuery = (queryClient: QueryClient) =>
  queryClient.prefetchQuery({
    queryKey: [MOST_RATED_ANIME_QUERY_KEY],
    queryFn: async () => {
      const { data } = await api.fetchAnimeList({
        page: 0,
        limit: 7,
        sort: 'Desc',
        order: 'Rating'
      })

      return data
    }
  })
