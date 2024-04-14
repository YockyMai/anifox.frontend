import { publicHttp } from '@/services/http'

export const fetchAnimeReleaseYears = async () => {
  const response = await publicHttp.get<string[]>('anime/years')

  return response
}
