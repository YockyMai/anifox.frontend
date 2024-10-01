'use client'

import { useHover } from '@anifox/hooks'
import { IconChevronDown, IconPlayerPlayFilled } from '@tabler/icons-react'
import { useAtomValue } from 'jotai'
import React, { useEffect, useMemo, useState } from 'react'

import Popover from '@/common/components/popover/popover'
import { getUserDeviceType } from '@/common/helpers'
import { $kodikPlayerAtoms } from '@/entities/players/kodik-player/store/kodik-player'
import { useAnimeEpisodesQuery } from '@/services/queries'

import { $playerEpisodeAtoms } from '../../store'
import { EpisodesList } from './episodes-list/episodes-list'
import './episodes.css'

export const Episodes = () => {
  const animeUrl = useAtomValue($kodikPlayerAtoms.animeUrl)

  const { data } = useAnimeEpisodesQuery({ animeUrl })

  const selectedEpisode = useAtomValue($playerEpisodeAtoms.selectedEpisodeAtom)
  const selectedTranslation = useAtomValue(
    $playerEpisodeAtoms.selectedTranslationAtom
  )

  const [isOpened, setIsOpened] = useState(false)

  const toggleEpisodeListOpened = () => {
    setIsOpened((prev) => !prev)
  }

  const episodes = useMemo(
    () => data?.pages.flatMap((episode) => episode.flat()) ?? [],
    [data?.pages]
  )

  if (episodes.length <= 1) return null

  return (
    <Popover
      unstyled
      withoutArrow
      trigger={
        <div
          onClick={toggleEpisodeListOpened}
          className='anime-episodes-trigger'
        >
          <IconPlayerPlayFilled className='anime-episodes-trigger__icon' />
          {selectedEpisode ? (
            <p>{selectedEpisode.number} серия</p>
          ) : (
            <p>Выберите серию</p>
          )}

          <div>
            <IconChevronDown className='anime-episodes-episode__icon' />
          </div>
        </div>
      }
    >
      <EpisodesList isOpened={isOpened} episodes={episodes} />
    </Popover>
  )
}
