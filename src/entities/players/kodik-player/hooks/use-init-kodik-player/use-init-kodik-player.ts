import { useCallback, useEffect } from 'react'

import { $preferredEpisodeTranslations } from '@/entities/translation/store'
import { useAnimeEpisodesQuery } from '@/services/queries'

import { useKodikPlayerStores } from '../../context'
import { UseInitKodikPlayerOptions } from './use-init-kodik-player.interface'

export const useInitKodikPlayer = ({ animeUrl }: UseInitKodikPlayerOptions) => {
  const preferredTranslations =
    $preferredEpisodeTranslations.selectors.preferredTranslations()
  const { $kodikPlayer } = useKodikPlayerStores()

  const { data: episodes, isLoading } = useAnimeEpisodesQuery({ animeUrl })

  const lastWatchedEpisode = episodes?.pages[0][0]

  const initKodikPlayer = useCallback(() => {
    if (lastWatchedEpisode) {
      const translationId =
        preferredTranslations.find(({ translationId }) =>
          lastWatchedEpisode.translations.some(({ id }) => id === translationId)
        )?.translationId ?? lastWatchedEpisode.translations[0].id

      const translation = lastWatchedEpisode.translations.find(
        ({ id }) => id === translationId
      )!

      $kodikPlayer.actions.initKodikPlayer({
        animeUrl,
        selectedEpisode: lastWatchedEpisode,
        selectedTranslation: translation
      })
    }
  }, [lastWatchedEpisode, animeUrl])

  useEffect(() => {
    initKodikPlayer()
  }, [initKodikPlayer])

  return {
    isLoading
  }
}
