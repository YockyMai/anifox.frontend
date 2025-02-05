import { http } from '@/services/http'

import { AnimeTranslation } from './fetch-anime-translation.interface'

export const fetchAnimeTranslation = async () => {
  const response = await http.get<AnimeTranslation[]>(`anime/translations`)

  return response
}
