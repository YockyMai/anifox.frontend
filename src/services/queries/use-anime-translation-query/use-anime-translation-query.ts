import { useQuery } from '@tanstack/react-query'

import { api } from '@/services/api'

import { ANIME_TRANSLATIONS_QUERY_KEY } from './use-anime-translation-query.const'

export const useAnimeTranslationsQuery = (animeUrl: string) =>
  useQuery({
    queryKey: [ANIME_TRANSLATIONS_QUERY_KEY.replace('animeUrl', animeUrl)],
    queryFn: async () => {
      const { data } = await api.fetchAnimeTranslation()

      return data
    }
  })
