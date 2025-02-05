import { http } from '@/services/http'

import {
  FetchAnimeScreenshotsParams,
  FetchAnimeScreenshotsResponse
} from './fetch-anime-screenshots.interface'

export const fetchAnimeScreenshots = async ({
  animeUrl
}: FetchAnimeScreenshotsParams) => {
  const response = await http.get<FetchAnimeScreenshotsResponse>(
    `anime/${animeUrl}/screenshots`
  )

  return response
}
