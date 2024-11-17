import { useQuery } from '@tanstack/react-query'

import { FetchAnimeSchedulesParams, api } from '@/services/api'

import { ANIME_SCHEDULES_QUERY_KEY } from './use-anime-schedule-query.const'

export const useAnimeSchedulesQuery = ({ day }: FetchAnimeSchedulesParams) =>
  useQuery({
    queryKey: [ANIME_SCHEDULES_QUERY_KEY.replace('day-of-week', day)],
    queryFn: async () => {
      const { data } = await api.fetchAnimeSchedules({
        day
      })

      return data[day]
    }
  })
