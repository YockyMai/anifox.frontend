import { useQuery } from '@tanstack/react-query'

import { api } from '@/services/api'

export const useGetAnime = (animeUrl: string) =>
  useQuery({
    queryKey: [animeUrl],
    queryFn: async () => {
      const { data } = await api.fetchAnime({ animeUrl })

      return data
    }
  })
