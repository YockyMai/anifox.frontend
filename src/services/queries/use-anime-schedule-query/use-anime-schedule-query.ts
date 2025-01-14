import { useQuery } from '@tanstack/react-query'
import dayjs from 'dayjs'

import { api } from '@/services/api'

import { ANIME_SCHEDULES_QUERY_KEY } from './use-anime-schedule-query.const'

export const useAnimeSchedulesQuery = () => {
  const date = dayjs(new Date()).format('DD-MM-YYYY')

  return useQuery({
    queryKey: [ANIME_SCHEDULES_QUERY_KEY.replace('date', date)],
    queryFn: async () => {
      const { data } = await api.fetchAnimeSchedules({
        date: date,
        limit: 100
      })

      return data
    }
  })
}
