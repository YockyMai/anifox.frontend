import { IconArrowRight } from '@tabler/icons-react'
import Link from 'next/link'
import React from 'react'

import { Image } from '@/common/components'
import { ROUTES } from '@/screens/pages.routes'

import { getAnimeAccentColorStyles } from '../../helpers'
import './anime-card-upcoming.css'
import { AnimeCardUpcomingProps } from './anime-card-upcoming.interface'

export const AnimeCardUpcoming = ({ anime }: AnimeCardUpcomingProps) => {
  const accentColorsStyles = getAnimeAccentColorStyles(
    anime.accent_color,
    'light'
  )
  return (
    <Link
      style={accentColorsStyles}
      className='hover:text-inherit'
      href={ROUTES.CATALOG.ANIME.ROOT.replace(':animeUrl', anime.url)}
    >
      <div className='anime-card-upcoming'>
        <div className='anime-card-upcoming__header'>
          <Image
            className='anime-card-upcoming__header__image'
            src={anime.image.cover ?? anime.image.medium}
            alt={anime.title}
          />
          <div className='anime-card-upcoming__header__title'>
            <p>{anime.title}</p>
          </div>
        </div>

        <div className='anime-card-upcoming__body'>
          <div className='anime-card-upcoming__episodes'>
            <div>
              <p className='anime-card-upcoming__episodes__title'>Вышла</p>
              <p className='anime-card-upcoming__episodes__episode'>
                {anime.episodes ?? 0} серия
              </p>
            </div>

            <IconArrowRight size={16} />

            <div>
              <p className='anime-card-upcoming__episodes__title text-right'>
                Выйдет
              </p>
              <p className='anime-card-upcoming__episodes__episode text-right'>
                {(anime.episodes ?? 0) + 1} серия
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
