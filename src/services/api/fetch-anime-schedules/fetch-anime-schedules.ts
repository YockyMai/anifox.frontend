import { publicHttp } from '@/services/http'

import {
  FetchAnimeSchedulesParams,
  FetchAnimeSchedulesResponse
} from './fetch-anime-schedules.interface'

export const fetchAnimeSchedules = async ({
  date,
  limit = 20,
  page = 0
}: FetchAnimeSchedulesParams) => {
  const response = await publicHttp.get<FetchAnimeSchedulesResponse>(
    `anime/schedules`,
    {
      searchParams: {
        date,
        limit,
        page
      }
    }
  )

  return response
}
