import { useEffect } from 'react'

import { $viewer } from '@/entities/viewer'
import {
  useSaveEpisodeProgressMutation,
  useSaveLastWatchedEpisodeMutation,
  useSetEpisodeDurationMutation
} from '@/graphql/generated/output'

import { useKodikPlayerStores } from '../../context'
import { $localLastWatchedEpisode } from '../../store/local-last-watched-episodes/local-last-watched-episodes'
import { KODIK_MESSAGES } from './kodik-message-listener.const'

export const KodikMessageListener = () => {
  const { $kodikPlayer } = useKodikPlayerStores()

  const viewer = $viewer.selectors.viewer()
  const animeId = $kodikPlayer.selectors.animeId()

  const selectedEpisode = $kodikPlayer.selectors.selectedEpisode()
  const selectedTranslation = $kodikPlayer.selectors.selectedTranslation()

  const [setEpisodeDuration] = useSetEpisodeDurationMutation()
  const [saveLastWatchedEpisode] = useSaveLastWatchedEpisodeMutation()
  const [saveEpisodeProgress] = useSaveEpisodeProgressMutation()

  useEffect(() => {
    const handleKodikPlayerMessage = (message: MessageEvent) => {
      if (message.data.key === KODIK_MESSAGES.KODIK_PLAYER_PLAY) {
        console.log(message.data)
      }
      if (message.data.key === KODIK_MESSAGES.KODIK_PLAYER_PAUSE) {
      }
      if (message.data.key === KODIK_MESSAGES.KODIK_PLAYER_TIME_UPDATE) {
        const timing = message.data.value as number

        if (viewer) {
          saveEpisodeProgress({
            variables: {
              animeId,
              episodeId: selectedEpisode.id,
              timing
            }
          })
        }
      }
      if (message.data.key === KODIK_MESSAGES.KODIK_PLAYER_DURATION_UPDATE) {
        if (selectedEpisode && !selectedEpisode.duration) {
          const duration = Math.floor(message.data.value / 60)

          setEpisodeDuration({
            variables: {
              episodeId: selectedEpisode.id,
              duration
            }
          })
        }
      }
      if (message.data.key === KODIK_MESSAGES.KODIK_PLAYER_VIDEO_STARTED) {
        if (viewer) {
          saveLastWatchedEpisode({
            variables: {
              animeId,
              episodeId: selectedEpisode.id,
              translationId: selectedTranslation.translationId
            }
          })
        } else {
          $localLastWatchedEpisode.actions.setLastWatchedEpisode({
            animeId,
            episodeId: selectedEpisode.id,
            translationId: selectedTranslation.translationId
          })
        }
      }
      if (message.data.key === KODIK_MESSAGES.KODIK_PLAYER_VIDEO_ENDED) {
      }
      if (message.data.key === KODIK_MESSAGES.KODIK_PLAYER_VOLUME_CHANGE) {
      }
      if (message.data.key === KODIK_MESSAGES.KODIK_PLAYER_CURRENT_EPISODE) {
      }
    }

    window.addEventListener('message', handleKodikPlayerMessage)

    return () => {
      window.removeEventListener('message', handleKodikPlayerMessage)
    }
  }, [selectedEpisode, setEpisodeDuration])

  return null
}
