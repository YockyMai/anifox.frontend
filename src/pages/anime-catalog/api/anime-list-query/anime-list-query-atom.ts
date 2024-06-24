import { useInfiniteQuery } from '@tanstack/react-query'

import { Anime, FetchAnimeListParams, api } from '@/services/api'

export const useAnimeListQuery = (params: FetchAnimeListParams) =>
  useInfiniteQuery<Anime[]>({
    queryKey: [
      'get-anime-list',
      params.genres,
      params.limit,
      params.minimal_age,
      params.order,
      params.page,
      params.rating_mpa,
      params.search,
      params.season,
      params.status,
      params.type,
      params.years,
      params.translations,
      params.studio,
      params.sort
    ],
    queryFn: async ({ pageParam = 0 }) => {
      const { data } = await api.fetchAnimeList({
        ...params,
        page: pageParam as number
      })

      return data
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length !== 0 ? allPages.length : undefined,
    refetchOnWindowFocus: false
  })
