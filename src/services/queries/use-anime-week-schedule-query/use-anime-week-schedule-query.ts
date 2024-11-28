import { useQuery } from '@tanstack/react-query'

import {
  Anime,
  ANIME_SCHEDULE_DAY,
  AnimeScheduleDay,
  api
} from '@/services/api'

import { ANIME_WEEK_SCHEDULES_QUERY_KEY } from './use-anime-week-schedule-query.const'

export const useAnimeWeekSchedulesQuery = () =>
  useQuery({
    queryKey: [ANIME_WEEK_SCHEDULES_QUERY_KEY],
    queryFn: async () => {
      const queries = Object.entries(ANIME_SCHEDULE_DAY).map(([_, day]) =>
        api.fetchAnimeSchedules({
          day
        })
      )

      const responses = await Promise.all(queries)

      const result = {} as Record<AnimeScheduleDay, Anime[]>

      for (const response of responses) {
        Object.assign(result, response.data)
      }

      return result
    }
  })
