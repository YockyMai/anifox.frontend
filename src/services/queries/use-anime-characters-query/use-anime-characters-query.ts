import { useInfiniteQuery } from '@tanstack/react-query'

import { api } from '@/services/api'

import { ANIME_CHARACTERS_QUERY_KEY } from './use-anime-characters-query.const'
import { UseAnimeCharactersQueryParams } from './use-anime-characters-query.interface'

export const useAnimeCharactersQuery = (
  params: UseAnimeCharactersQueryParams
) =>
  useInfiniteQuery({
    queryKey: [
      ANIME_CHARACTERS_QUERY_KEY,
      params.role,
      params.search,
      params.animeUrl
    ],
    queryFn: async ({ pageParam = 0 }) => {
      const { data } = await api.fetchAnimeCharacters({
        ...params,
        limit: 24,
        page: pageParam as number
      })

      return data
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.characters.length !== 0 ? allPages.length : undefined,
    refetchOnWindowFocus: false
  })
