import { http } from '@/services/http'

export const fetchAnimeReleaseYears = async () => {
  const response = await http.get<string[]>('anime/years')

  return response
}
