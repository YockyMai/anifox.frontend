'use client'

import { useQuery } from '@tanstack/react-query'

import { api } from '@/services/api'

export const useAnimeQuery = (animeUrl: string) =>
  useQuery({
    queryKey: [animeUrl],
    queryFn: async () => {
      const { data } = await api.fetchAnime(animeUrl)

      return data
    }
  })
