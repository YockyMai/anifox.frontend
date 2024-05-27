import { useQuery } from '@tanstack/react-query'

import { api } from '@/services/api'

import { USE_GET_ANIME_GENRE_KEY } from './use-get-anime-genres.const'

export const useGetAnimeGenres = () =>
  useQuery({
    queryKey: [USE_GET_ANIME_GENRE_KEY],
    queryFn: async () => {
      const { data } = await api.fetchAnimeGenres()

      return data
    }
  })
