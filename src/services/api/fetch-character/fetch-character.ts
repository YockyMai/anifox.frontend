import { publicHttp } from '@/services/http'

import { FetchCharacterResponse } from './fetch-character.interface'

export const fetchCharacter = async (id: string) => {
  const response = await publicHttp.get<FetchCharacterResponse>(
    `characters/${id}`
  )

  return response
}
