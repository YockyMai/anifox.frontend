import { useQuery } from '@tanstack/react-query'

import { api } from '@/services/api'

import { ANIME_STATISTICS_QUERY_KEY } from './use-anime-statistics-query.const'

export const getAnimeStatisticsQueryKey = (animeUrl: string) => [
  ANIME_STATISTICS_QUERY_KEY,
  animeUrl
]

export const useAnimeStatisticsQuery = (animeUrl: string) =>
  useQuery({
    queryKey: getAnimeStatisticsQueryKey(animeUrl),
    queryFn: async () => {
      const { data } = await api.fetchAnimeStatistics(animeUrl)

      return data
    }
  })
