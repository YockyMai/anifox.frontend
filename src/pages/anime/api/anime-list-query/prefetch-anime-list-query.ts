import { QueryClient } from '@tanstack/react-query'

import { Anime, FetchAnimeListParams, api } from '@/services/api'

export const usePrefetchAnimeListQuery = (
  queryClient: QueryClient,
  params?: FetchAnimeListParams
) =>
  queryClient.prefetchInfiniteQuery<Anime[]>({
    queryKey: [
      'anime-list-query',
      params?.genres,
      params?.limit,
      params?.minimal_age,
      params?.order,
      params?.page,
      params?.rating_mpa,
      params?.search,
      params?.season,
      params?.status,
      params?.type,
      params?.years,
      params?.translations,
      params?.studio,
      params?.sort
    ],
    queryFn: async ({ pageParam = 0 }) => {
      const { data } = await api.fetchAnimeList({
        ...params,
        page: pageParam as number
      })

      return data
    },
    initialPageParam: 0
  })
