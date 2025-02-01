import { http } from '@/services/http'

import { AnimeGenre } from './fetch-anime-genres.interface'

export const fetchAnimeGenres = async () => {
  const response = await http.get<AnimeGenre[]>(`anime/genres`)

  return response
}
