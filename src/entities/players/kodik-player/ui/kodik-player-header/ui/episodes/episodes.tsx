'use client'

import { useAtom } from 'jotai'
import { useParams } from 'next/navigation'
import { useMemo, useState } from 'react'

import { $kodikPlayerHeaderAtoms } from '@/entities/players/kodik-player/store/kodik-player-header'
import { AnimePageParams } from '@/screens/anime/anime.interface'
import { useAnimeEpisodesQuery } from '@/services/queries'

import { useSelectorAnimation } from '../../hooks'
import { EpisodesButton } from './episodes-button'
import { EpisodesList } from './episodes-list'
import { getEpisodeListHeight } from './episodes-list/episodes-list.helpers'
import { EPISODES_LIST_WIDTH } from './episodes.const'
import './episodes.css'

export const Episodes = () => {
  const { animeUrl } = useParams<AnimePageParams>()

  const { data } = useAnimeEpisodesQuery({ animeUrl })

  const episodes = useMemo(
    () => data?.pages.flatMap((episodes) => episodes) ?? [],
    [data?.pages]
  )

  const [isOpened, setIsOpened] = useAtom(
    $kodikPlayerHeaderAtoms.episodeSelectorIsOpened
  )

  const { scope, startCloseAnimation, startOpenAnimation } =
    useSelectorAnimation({
      toWidth: EPISODES_LIST_WIDTH,
      toHeight: getEpisodeListHeight(episodes.length),
      listNode: '.episodes__list',
      rootNode: '.episodes'
    })

  const onChangeEpisodesOpen = (isOpen: boolean) => {
    setIsOpened(isOpen)

    if (isOpen) {
      startOpenAnimation()
    } else {
      startCloseAnimation()
    }
  }

  return (
    <div ref={scope}>
      <div className='episodes' onClick={() => onChangeEpisodesOpen(!isOpened)}>
        <EpisodesButton />
        <EpisodesList episodes={episodes} />
      </div>
    </div>
  )
}
