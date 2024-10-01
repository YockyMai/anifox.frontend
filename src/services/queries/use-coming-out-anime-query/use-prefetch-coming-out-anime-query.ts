import { QueryClient } from '@tanstack/react-query'

import { api } from '@/services/api'
import { ANIME_SORT_DIRECTION } from '@/widgets/anime-catalog/model'
import { ANIME_ORDER_OPTIONS } from '@/widgets/anime-catalog/ui/anime-catalog-filter/ui/anime-order/anime-order.const'

import { COMING_OUT_ANIME_QUERY_KEY } from './use-coming-out-anime-query.const'

export const usePrefetchComingOutAnimeQuery = (queryClient: QueryClient) =>
  queryClient.prefetchQuery({
    queryKey: [COMING_OUT_ANIME_QUERY_KEY],
    queryFn: async () => {
      const { data } = await api.fetchAnimeList({
        order: ANIME_ORDER_OPTIONS.UPDATE,
        sort: ANIME_SORT_DIRECTION.ASC
      })

      return data
    }
  })
