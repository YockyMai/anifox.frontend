import { useQuery } from '@tanstack/react-query'

import { api } from '@/services/api'
import { ANIME_ORDER_OPTIONS } from '@/widgets/anime-catalog/ui/anime-catalog-filter/ui/anime-order/anime-order.const'

import { COMING_OUT_ANIME_QUERY_KEY } from './use-coming-out-anime-query.const'

export const useComingOutAnimeQuery = () =>
  useQuery({
    queryKey: [COMING_OUT_ANIME_QUERY_KEY],
    queryFn: async () => {
      const { data } = await api.fetchAnimeList({
        order: ANIME_ORDER_OPTIONS.RELEASED
      })

      return data
    }
  })
