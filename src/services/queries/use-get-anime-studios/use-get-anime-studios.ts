import { useQuery } from '@tanstack/react-query'

import { api } from '@/services/api'

import { ANIME_STUDIOS_QUERY_KEY } from './use-get-anime-studios.const'

export const useGetAnimeStudios = () =>
  useQuery({
    queryKey: [ANIME_STUDIOS_QUERY_KEY],
    queryFn: async () => {
      const { data } = await api.fetchAnimeStudios()

      return data
    }
  })
