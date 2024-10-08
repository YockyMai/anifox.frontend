'use client'

import Link from 'next/link'

import { HoverCard, Image } from '@/common/components'
import { ROUTES } from '@/screens/pages.routes'

import { AnimeCardPanel } from '../anime-card-panel'
import './anime-card.css'
import { AnimeCardProps } from './anime-card.interface'

export const AnimeCard = ({ anime, withoutPanel }: AnimeCardProps) => {
  return (
    <div className='relative w-full'>
      <HoverCard
        width={280}
        closeDelay={80}
        position='right'
        unstyled
        triggerClassName='anime-card__tooltip-trigger'
        trigger={
          <div className='anime-card'>
            <div className='anime-card__image'>
              <Link
                href={ROUTES.CATALOG.ANIME.ROOT.replace(':animeUrl', anime.url)}
              >
                <div className='anime-card__image__element'>
                  <Image
                    fit='cover'
                    width='100%'
                    height='100%'
                    src={anime.image.medium}
                    alt='Изображение отсутсвует'
                  />
                </div>
              </Link>
            </div>
            <Link
              title={anime.title}
              className='anime-card__title'
              href={ROUTES.CATALOG.ANIME.ROOT.replace(':animeUrl', anime.url)}
            >
              {anime.title}
            </Link>
          </div>
        }
      >
        {!withoutPanel && <AnimeCardPanel anime={anime} />}
      </HoverCard>
    </div>
  )
}
