import { http } from '@/services/http'

import { SetAnimeRatingParams } from './set-anime-rating.interface'

export const setAnimeRating = async ({
  animeUrl,
  rating
}: SetAnimeRatingParams) => {
  const response = await http.put(
    `/users/anime/${animeUrl}/rating`,
    {},
    { params: { rating } }
  )

  return response
}
