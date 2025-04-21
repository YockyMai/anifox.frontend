import { useEffect, useState } from 'react'

import { $viewer } from '@/entities/viewer'
import { client } from '@/graphql/client'
import {
  LastWatchedEpisodeDocument,
  LastWatchedEpisodeQuery,
  LastWatchedEpisodeQueryVariables,
  useEpisodesQuery
} from '@/graphql/generated/output'

import { KodikPlayerStore } from '../../store'
import { $localLastWatchedEpisode } from '../../store/local-last-watched-episodes/local-last-watched-episodes'
import { UseInitKodikPlayerOptions } from './use-init-kodik-player.interface'

export const useInitKodikPlayer = ({
  animeUrl,
  animeId
}: UseInitKodikPlayerOptions) => {
  const viewer = $viewer.selectors.viewer()
  const localLastWatchedEpisodes = $localLastWatchedEpisode.selectors.episodes()

  const { data } = useEpisodesQuery({
    variables: {
      page: 0,
      animeUrl: animeUrl!,
      limit: 1000,
      userId: viewer?.id
    }
  })

  const episodes = data?.episodes.data ?? []

  const [initialData, setInitialData] = useState<KodikPlayerStore | null>(null)

  useEffect(() => {
    const initData = async () => {
      if (!episodes) return

      let selectedEpisode = episodes[0]
      let selectedTranslation = selectedEpisode.translations[0]

      // если авторизован
      if (viewer) {
        const { data: lastWatchedEpisodeData } = await client.query<
          LastWatchedEpisodeQuery,
          LastWatchedEpisodeQueryVariables
        >({
          query: LastWatchedEpisodeDocument,
          variables: {
            animeId,
            userId: viewer.id
          },
          fetchPolicy: 'no-cache'
        })

        if (!lastWatchedEpisodeData?.lastWatchedEpisode) {
          return setInitialData({
            animeUrl,
            animeId,
            selectedEpisode,
            selectedTranslation
          })
        }

        const lastWatchedEpisode = episodes.find(
          ({ id }) =>
            id === lastWatchedEpisodeData.lastWatchedEpisode!.episodeId
        )

        if (lastWatchedEpisode) {
          selectedEpisode = lastWatchedEpisode

          const lastSelectedTranslation = lastWatchedEpisode.translations.find(
            ({ translationId }) =>
              translationId ===
              lastWatchedEpisodeData?.lastWatchedEpisode!.translationId
          )

          if (lastSelectedTranslation) {
            selectedTranslation = lastSelectedTranslation
          }
        }

        return setInitialData({
          animeUrl,
          animeId,
          selectedEpisode,
          selectedTranslation
        })
      } else {
        const savedLastWatchedEpisode = localLastWatchedEpisodes.find(
          (episode) => episode.animeId === animeId
        )

        if (savedLastWatchedEpisode) {
          const lastWatchedEpisode = episodes.find(
            ({ id }) => id === savedLastWatchedEpisode?.episodeId
          )

          if (lastWatchedEpisode) {
            selectedEpisode = lastWatchedEpisode

            const lastSelectedTranslation =
              lastWatchedEpisode.translations.find(
                ({ translationId }) =>
                  translationId === savedLastWatchedEpisode.translationId
              )

            if (lastSelectedTranslation) {
              selectedTranslation = lastSelectedTranslation
            }
          }
        }

        setInitialData({
          animeUrl,
          animeId,
          selectedEpisode,
          selectedTranslation
        })
      }
    }

    initData()
  }, [viewer, episodes])

  return initialData
}
