import { publicHttp } from '@/services/http'

import { AnimeGenre } from './fetch-anime-genres.interface'

export const fetchAnimeGenres = async () => {
  const response = await publicHttp.get<AnimeGenre[]>(`anime/genres`)

  return response
}
