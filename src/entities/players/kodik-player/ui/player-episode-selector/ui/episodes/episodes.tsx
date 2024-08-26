'use client'

import { useHover } from '@anifox/hooks'
import { IconChevronDown } from '@tabler/icons-react'
import { useAtomValue } from 'jotai'
import React, { useEffect, useMemo, useState } from 'react'

import { getUserDeviceType } from '@/common/helpers'
import { useAnimeEpisodesQuery } from '@/services/queries'

import { $playerEpisodeAtoms } from '../../store'
import { EpisodesList } from './episodes-list/episodes-list'
import './episodes.css'

type Props = {
  animeUrl: string
}

export const Episodes = ({ animeUrl }: Props) => {
  //TODO: Реализовать бесконечный скролл для эпизодов

  const { data } = useAnimeEpisodesQuery({ animeUrl })

  const selectedEpisode = useAtomValue($playerEpisodeAtoms.selectedEpisodeAtom)
  const selectedTranslation = useAtomValue(
    $playerEpisodeAtoms.selectedTranslationAtom
  )

  const device = getUserDeviceType()
  const { isHovered, hoverProps } = useHover()
  const [isOpened, setIsOpened] = useState(isHovered)

  const toggleEpisodeListOpened = () => {
    if (device !== 'desktop') setIsOpened((prev) => !prev)
  }

  useEffect(() => {
    if (device === 'desktop') {
      setIsOpened(isHovered)
    }
  }, [device, isHovered])

  const episodes = useMemo(
    () => data?.pages.flatMap((episode) => episode.flat()) ?? [],
    [data?.pages]
  )

  if (episodes.length <= 1) return null

  return (
    <div className='anime-episodes-container' {...hoverProps}>
      <div onClick={toggleEpisodeListOpened} className='anime-episodes-episode'>
        <div className='flex'>
          {/* <MdOutlineVideoLibrary className={styles.playIcon} /> */}
          {selectedEpisode ? (
            <p>{selectedEpisode.number} серия</p>
          ) : (
            <p>Выберите серию</p>
          )}

          <div>
            <IconChevronDown className='anime-episodes-episode__icon' />
          </div>
        </div>
      </div>
      <EpisodesList isOpened={isHovered} episodes={episodes} />
    </div>
  )
}
