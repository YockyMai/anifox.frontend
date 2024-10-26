'use client'

import { IconChevronDown, IconPlayerPlayFilled } from '@tabler/icons-react'
import { useAtomValue } from 'jotai'
import React from 'react'

import Popover from '@/common/components/popover/popover'
import { $kodikPlayerAtoms } from '@/entities/players/kodik-player/store/kodik-player'

import { EpisodesList } from './episodes-list/episodes-list'
import './episodes.css'
import { EpisodesProps } from './episodes.interface'

export const Episodes = ({ episodes }: EpisodesProps) => {
  const selectedEpisode = useAtomValue($kodikPlayerAtoms.selectedEpisodeAtom)

  return (
    <Popover
      unstyled
      withoutArrow
      trigger={
        <div className='anime-episodes-trigger'>
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
      <EpisodesList episodes={episodes} />
    </Popover>
  )
}
