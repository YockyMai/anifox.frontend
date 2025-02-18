import { http } from '@/services/http'

import { SetAnimeStatusParams } from './set-anime-status.interface'

export const setAnimeStatus = async ({
  animeUrl,
  status
}: SetAnimeStatusParams) => {
  const response = await http.put(
    `/users/anime/${animeUrl}/favourite`,
    {},
    { params: { status, episodes_watched: 1 } }
  )

  return response
}
