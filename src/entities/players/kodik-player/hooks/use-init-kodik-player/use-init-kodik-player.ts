import { useSetAtom } from 'jotai'
import { useEffect } from 'react'

import {
  useAnimeEpisodesQuery,
  useAnimeTranslationsQuery
} from '@/services/queries'

import { getPlayerLinkFromParams } from '../../helpers/get-player-link-from-params'
import { $kodikPlayerAtoms } from '../../store/kodik-player'
import { UseInitKodikPlayerOptions } from './use-init-kodik-player.interface'

export const useInitKodikPlayer = ({ animeUrl }: UseInitKodikPlayerOptions) => {
  const setKodikEpisodeLink = useSetAtom($kodikPlayerAtoms.kodikEpisodeLink)

  const { data: episodes } = useAnimeEpisodesQuery({ animeUrl })
  const translations = useAnimeTranslationsQuery(animeUrl)

  useEffect(() => {
    if (!episodes?.pages.length) {
      return
    }

    const episodeLink = getPlayerLinkFromParams(
      episodes.pages[0][0].translations[0].link,
      {
        only_episode: true,
        translations: false
      }
    )

    setKodikEpisodeLink(episodeLink)
  }, [episodes, setKodikEpisodeLink])
}
