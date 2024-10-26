import { useSetAtom } from 'jotai'
import { useEffect } from 'react'

import { useAnimeEpisodesQuery } from '@/services/queries'

import { $kodikPlayerAtoms } from '../../store/kodik-player'
import { UseInitKodikPlayerOptions } from './use-init-kodik-player.interface'

export const useInitKodikPlayer = ({ animeUrl }: UseInitKodikPlayerOptions) => {
  const setSelectedEpisode = useSetAtom($kodikPlayerAtoms.selectedEpisodeAtom)
  const setSelectedTranslation = useSetAtom(
    $kodikPlayerAtoms.selectedTranslationAtom
  )

  const setAnimeUrl = useSetAtom($kodikPlayerAtoms.animeUrl)

  const { data: episodes } = useAnimeEpisodesQuery({ animeUrl })

  setAnimeUrl(animeUrl)

  useEffect(() => {
    if (!episodes?.pages.length) {
      return
    }

    const lastWatchedEpisode = episodes.pages[0][0]

    setSelectedTranslation(lastWatchedEpisode.translations[0])
    setSelectedEpisode(lastWatchedEpisode)
  }, [episodes, setSelectedEpisode, setSelectedTranslation])
}
