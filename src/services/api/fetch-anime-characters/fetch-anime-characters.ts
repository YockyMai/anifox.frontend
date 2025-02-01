import { http } from '@/services/http'

import {
  FetchAnimeCharactersResponse,
  FetchAnimeCharactersParams
} from './fetch-anime-characters.interface'

export const fetchAnimeCharacters = async (
  params: FetchAnimeCharactersParams
) => {
  const { animeUrl, limit = 24, page = 0, role, search } = params

  const response = await http.get<FetchAnimeCharactersResponse>(
    `anime/${animeUrl}/characters`,
    {
      searchParams: {
        limit,
        page,
        ...(role && { role }),
        ...(search && { search })
      }
    }
  )

  const data = response.data

  return {
    ...response,
    data: {
      characters: data.characters,
      availableRoles: data.available_roles
    }
  }
}
