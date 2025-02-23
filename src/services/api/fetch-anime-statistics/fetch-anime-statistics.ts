import { http } from '@/services/http'

import { FetchAnimeStatisticsResponse } from './fetch-anime-statistics.interface'

export const fetchAnimeStatistics = async (animeUrl: string) => {
  const response = await http.get<FetchAnimeStatisticsResponse>(
    `anime/${animeUrl}/statistics`
  )

  return response
}
