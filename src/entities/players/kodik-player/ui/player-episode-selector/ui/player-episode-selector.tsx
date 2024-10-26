import { useAtomValue } from 'jotai'
import React, { useMemo } from 'react'

import { useAnimeEpisodesQuery } from '@/services/queries'

import { $kodikPlayerAtoms } from '../../../store/kodik-player'
import { Episodes } from './episodes/episodes'
import { Translations } from './translations/translations'

export const PlayerEpisodeSelector = () => {
  const animeUrl = useAtomValue($kodikPlayerAtoms.animeUrl)

  const { data } = useAnimeEpisodesQuery({ animeUrl })

  const episodes = useMemo(
    () => data?.pages.flatMap((episode) => episode.flat()),
    [data?.pages]
  )

  if (!episodes || episodes.length <= 1) return null

  return (
    <div className='flex gap-x-1'>
      <Episodes episodes={episodes} />
      <Translations />
    </div>
  )
}
