import { QueryClient } from '@tanstack/react-query'

import { api } from '@/services/api'

export const usePrefetchAnimeQuery = (
  animeUrl: string,
  queryClient: QueryClient
) =>
  queryClient.prefetchQuery({
    queryKey: [animeUrl],
    queryFn: async () => {
      const { data } = await api.fetchAnime(animeUrl)

      return data
    }
  })
