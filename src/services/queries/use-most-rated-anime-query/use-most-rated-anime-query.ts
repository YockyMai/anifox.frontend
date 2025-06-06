import { useQuery } from '@tanstack/react-query'

import { api } from '@/services/api'

import { MOST_RATED_ANIME_QUERY_KEY } from './use-most-rated-anime-query.const'

export const useMostRatedAnimeListQuery = () =>
  useQuery({
    queryKey: [MOST_RATED_ANIME_QUERY_KEY],
    queryFn: async () => {
      const { data } = await api.fetchAnimeList({
        page: 0,
        limit: 7,
        order: 'Rating',
        status: 'Ongoing'
      })

      return data
    }
  })
