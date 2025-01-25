import { useQuery } from '@tanstack/react-query'

import { api } from '@/services/api'

import { ANIME_SIMILAR_QUERY_KEY } from './use-anime-similar.const'

export const useAnimeSimilarQuery = (animeUrl: string) =>
  useQuery({
    queryKey: [ANIME_SIMILAR_QUERY_KEY.replace('animeUrl', animeUrl)],
    queryFn: async () => {
      const { data } = await api.fetchSimilarAnime(animeUrl)

      return data ?? []
    }
  })
