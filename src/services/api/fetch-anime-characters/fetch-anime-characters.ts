import { publicHttp } from '@/services/http'

import {
  FetchAnimeCharactersResponse,
  FetchAnimeCharactersParams
} from './fetch-anime-characters.interface'

export const fetchAnimeCharacters = async (
  params: FetchAnimeCharactersParams
) => {
  const { animeUrl, limit, page, role } = params

  const response = await publicHttp.get<FetchAnimeCharactersResponse>(
    `anime/${animeUrl}/characters`,
    {
      searchParams: {
        limit,
        page,
        ...(role && { role })
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
