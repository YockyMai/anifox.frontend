import { useQuery } from '@tanstack/react-query'

import { api } from '@/services/api'

export const useGetAnime = (animeUrl: string) =>
  useQuery({
    queryKey: [animeUrl],
    queryFn: () => api.fetchAnime({ animeUrl })
  })
