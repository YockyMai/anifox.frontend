import { http } from '@/services/http'

import { AnimeStudio } from './fetch-anime-studios.interface'

export const fetchAnimeStudios = async () => {
  const response = await http.get<AnimeStudio[]>('/anime/studios')

  return response
}
