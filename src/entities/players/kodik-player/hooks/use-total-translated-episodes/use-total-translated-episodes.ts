import { useMemo } from 'react'

import { useEpisodes } from '../use-episodes'

export const useTotalTranslatedEpisodes = (translationId: number) => {
  const episodes = useEpisodes()

  const totalTranslatedEpisodes = useMemo(
    () =>
      (episodes ?? []).reduce((acc, value) => {
        const isEpisodeTranslated = value.translations.some(
          (translation) => translation.translationId === translationId
        )

        if (isEpisodeTranslated) {
          return acc + 1
        }

        return acc
      }, 0),
    [episodes, translationId]
  )

  return {
    totalTranslatedEpisodes,
    isSeasonTotalTranslated: (episodes ?? []).length === totalTranslatedEpisodes
  }
}
