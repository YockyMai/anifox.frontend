import { QueryClient } from '@tanstack/react-query'
import dayjs from 'dayjs'

import { api } from '@/services/api'

import { ANIME_SCHEDULES_QUERY_KEY } from './use-anime-schedule-query.const'

export const prefetchAnimeSchedulesQuery = (queryClient: QueryClient) => {
  const date = dayjs(new Date()).format('DD-MM-YYYY')

  return queryClient.prefetchQuery({
    queryKey: [ANIME_SCHEDULES_QUERY_KEY.replace('date', date)],
    queryFn: async () => {
      const { data } = await api.fetchAnimeSchedules({
        date,
        limit: 100
      })

      return data
    }
  })
}
