'use client'

import { useQuery } from '@tanstack/react-query'

import { api } from '@/services/api'

import { POPULAR_ONGOING_QUERY_KEY } from './use-popular-ongoing-query.const'

export const usePopularOngoingQuery = () =>
  useQuery({
    queryKey: [POPULAR_ONGOING_QUERY_KEY],
    queryFn: async () => {
      const { data } = await api.fetchAnimeList({
        page: 0,
        limit: 7,
        status: 'Ongoing',
        order: 'Rating',
        years: [new Date().getFullYear().toString()]
      })

      return data
    }
  })
