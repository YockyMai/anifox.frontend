import { useQuery } from '@tanstack/react-query'

import { api } from '@/services/api'

import { ANIME_RELATED_QUERY_KEY } from './use-anime-related.const'

export const useAnimeRelatedQuery = (animeUrl: string) =>
  useQuery({
    queryKey: [ANIME_RELATED_QUERY_KEY.replace('animeUrl', animeUrl)],
    queryFn: async () => {
      const { data } = await api.fetchRelatedAnime(animeUrl)

      return data ?? []
    }
  })
