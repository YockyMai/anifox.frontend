import { useQuery } from '@tanstack/react-query'

import { api } from '@/services/api'

import { CHARACTER_QUERY_KEY } from './use-character-query.const'

export const useCharacterQuery = (id: string) =>
  useQuery({
    queryKey: [CHARACTER_QUERY_KEY],
    queryFn: async () => {
      const { data } = await api.fetchCharacter(id)

      return data
    }
  })
