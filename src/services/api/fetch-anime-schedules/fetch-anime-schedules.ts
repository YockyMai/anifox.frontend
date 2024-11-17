import { publicHttp } from '@/services/http'

import {
  FetchAnimeSchedulesParams,
  FetchAnimeSchedulesResponse
} from './fetch-anime-schedules.interface'

export const fetchAnimeSchedules = async ({
  day
}: FetchAnimeSchedulesParams) => {
  const response = await publicHttp.get<FetchAnimeSchedulesResponse>(
    `anime/schedules`,
    {
      searchParams: {
        day_of_week: day,
        limit: 100,
        page: 0,
        start_date: `${new Date().getFullYear()}-01-01`, // TODO: remove how the changed api params
        end_date: `${new Date().getFullYear() + 1}-01-01` // TODO: remove how the changed api params
      }
    }
  )

  return response
}
