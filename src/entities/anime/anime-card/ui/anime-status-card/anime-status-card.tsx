import { Image, useHover } from '@anifox/ui'
import { motion } from 'framer-motion'
import { Link } from 'react-router'

import { AnimeRateButton } from '@/entities/anime/anime-rating'
import { ROUTES } from '@/screens/pages.routes'

import { AnimeCardPanel } from '../anime-card-panel'
import { AnimeStatusCardProps } from './anime-status-card.interface'
import { AnimeStatusMenu } from './anime-status-menu'

export const AnimeStatusCard = ({
  animeListEntry,
  onDeleteButtonClick,
  onEditButtonClick
}: AnimeStatusCardProps) => {
  const { anime, episodesWatched, rating, status } = animeListEntry

  const { isHovered, hoverProps } = useHover()

  return (
    <div {...hoverProps} className='relative flex flex-col'>
      <div className='relative flex items-center justify-between overflow-hidden py-1 pl-3'>
        <motion.div className='flex flex-[7] items-center' layout>
          <div className='flex w-fit items-center'>
            <AnimeStatusMenu
              isCardHovered={isHovered}
              anime={anime}
              status={status}
              onDeleteButtonClick={onDeleteButtonClick}
              onEditButtonClick={onEditButtonClick}
            />
            <div className='w-[40px] pl-1'>
              <Link to={ROUTES.CATALOG.ANIME.ROOT(anime.id, anime.url)}>
                <div className='aspect-[3/4] h-full py-1'>
                  <Image src={anime.image.medium ?? ''} />
                </div>
              </Link>
            </div>
            <Link to={ROUTES.CATALOG.ANIME.ROOT(anime.id, anime.url)}>
              <p className='pl-3 font-semibold'>{anime.title}</p>
            </Link>
          </div>
        </motion.div>

        <div className='flex flex-[2] items-center justify-center gap-x-1.5'>
          <AnimeRateButton
            animeId={anime.id}
            animeUrl={anime.url}
            rating={rating?.rating}
          />
        </div>

        <div className='flex flex-[1] items-center justify-center gap-x-1.5'>
          {episodesWatched ?? 0} /{' '}
          {anime.episodesAired ?? anime.episodesCount ?? '?'}
        </div>
      </div>

      {isHovered && (
        <div className='absolute left-0 top-1/2 w-[300px] -translate-x-[calc(100%+10px)] -translate-y-1/2'>
          <AnimeCardPanel anime={anime} />
        </div>
      )}
    </div>
  )
}
