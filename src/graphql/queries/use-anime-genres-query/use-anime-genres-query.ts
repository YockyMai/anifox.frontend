import { useQuery } from '@tanstack/react-query'

import { api } from '@/services/api'

import { ANIME_GENRES_QUERY_KEY } from './use-anime-genres-query.const'

export const useAnimeGenresQuery = () =>
  useQuery({
    queryKey: [ANIME_GENRES_QUERY_KEY],
    queryFn: async () => {
      const { data } = await api.fetchAnimeGenres()

      return data
    }
  })
