import { useMemo } from 'react'

import { useAnimeEpisodesQuery } from '@/graphql/queries'

export const useTotalTranslatedEpisodes = (
  animeUrl: string,
  translationId: number
) => {
  const { data: episodes } = useAnimeEpisodesQuery({ animeUrl })

  const flattedEpisodes = episodes?.pages.flat() ?? []

  const totalTranslatedEpisodes = useMemo(
    () =>
      flattedEpisodes.reduce((acc, value) => {
        const isEpisodeTranslated = value.translations.some(
          ({ id }) => id === translationId
        )

        if (isEpisodeTranslated) {
          return acc + 1
        }

        return acc
      }, 0),
    [flattedEpisodes, translationId]
  )

  return {
    totalTranslatedEpisodes,
    isSeasonTotalTranslated: flattedEpisodes.length === totalTranslatedEpisodes
  }
}
