import { IconArrowRight } from '@tabler/icons-react'
import Link from 'next/link'
import React from 'react'

import { Badge, Image, MarqueeText, Tooltip } from '@/common/components'
import { AnimeFavoriteButton } from '@/entities/anime/anime-favorite'
import { AnimeListButton } from '@/entities/anime/anime-list'
import { AnimeRateButton } from '@/entities/anime/anime-rating'
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
        <div className='anime-card-upcoming__image'>
          <Image src={anime.image.medium} alt={anime.title} />
        </div>
        <div className='anime-card-upcoming__body'>
          <div>
            <MarqueeText>
              <p className='anime-card-upcoming__title'>{anime.title}</p>
            </MarqueeText>
            <div className='anime-card-upcoming__episodes'>
              <Badge color='red' size='sm'>
                Вышла {anime.episodes_aired ?? 0} серия
              </Badge>
              <IconArrowRight size={16} />
              <Badge color='green' size='sm'>
                Выйдет {(anime.episodes_aired ?? 0) + 1} серия
              </Badge>
            </div>
          </div>

          <div className='anime-card-upcoming__actions'>
            <AnimeFavoriteButton animeUrl={anime.url} />
            <AnimeListButton
              openDelay={300}
              animeUrl={anime.url}
              withoutTitle
            />
            <AnimeRateButton
              openDelay={300}
              animeUrl={anime.url}
              withoutText
              rating={anime.rating ?? 0}
            />
          </div>
        </div>
      </div>
    </Link>
  )
}
