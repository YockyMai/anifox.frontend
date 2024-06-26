import { publicHttp } from '@/services/http'

import { SetAnimeStatusParams } from './set-anime-status.interface'

export const setAnimeStatus = async ({
  animeUrl,
  status
}: SetAnimeStatusParams) => {
  const response = await publicHttp.post(`/users/anime/${animeUrl}/favorite`, {
    searchParams: { status, episodeNumber: 1 }
  })

  return response
}
