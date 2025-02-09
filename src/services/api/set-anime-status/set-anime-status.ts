import { http } from '@/services/http'

import { SetAnimeStatusParams } from './set-anime-status.interface'

export const setAnimeStatus = async ({
  animeUrl,
  status
}: SetAnimeStatusParams) => {
  const response = await http.post(
    `/users/anime/${animeUrl}/favorite`,
    {},
    { params: { status, episodes_watched: 1 } }
  )

  return response
}
