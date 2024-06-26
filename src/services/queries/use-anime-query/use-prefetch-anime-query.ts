import { QueryClient } from '@tanstack/react-query'

import { api } from '@/services/api'

import { ANIME_QUERY_KEY } from './use-anime-query.const'

export const usePrefetchAnimeQuery = (
  animeUrl: string,
  queryClient: QueryClient
) =>
  queryClient.prefetchQuery({
    queryKey: [ANIME_QUERY_KEY.replace('animeUrl', animeUrl)],
    queryFn: async () => {
      const { data } = await api.fetchAnime(animeUrl)

      return data
    }
  })
