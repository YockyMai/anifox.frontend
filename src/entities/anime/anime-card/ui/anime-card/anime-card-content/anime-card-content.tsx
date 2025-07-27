import { Image } from '@anifox/ui'
import clsx from 'clsx'
import { Link } from 'react-router'

import { ROUTES } from '@/screens/pages.routes'

import { AnimeCardContentProps } from './anime-card-content.interface'

export const AnimeCardContent = ({
  anime,
  label,
  labelWhite
}: AnimeCardContentProps) => {
  return (
    <div className='relative grid w-full grid-rows-[min-content_auto] drop-shadow-2xl hover:!text-orange-400'>
      <div className='relative w-full overflow-hidden before:block before:h-0 before:w-0 before:pb-[142%] before:content-[""] max-xl:h-auto xl:h-64'>
        <Link to={ROUTES.CATALOG.ANIME.ROOT(anime.id, anime.url)}>
          <div className='absolute left-0 top-0 h-full w-full overflow-hidden rounded text-[var(--card-text-color)]'>
            <Image
              src={anime.image.medium ?? undefined}
              alt='Изображение отсутсвует'
            />
          </div>
        </Link>

        {label && (
          <div className='absolute bottom-1 left-1/2 z-10 w-[90%] -translate-x-1/2 rounded bg-slate-800/60 p-2 text-white backdrop-blur-xl'>
            <p className='text-center text-xs'>{label}</p>
          </div>
        )}
      </div>
      <Link
        title={anime.title}
        className={clsx(
          'mt-1 line-clamp-2 h-10 text-sm max-sm:h-8 max-sm:text-xs',
          labelWhite && 'text-white'
        )}
        to={ROUTES.CATALOG.ANIME.ROOT(anime.id, anime.url)}
      >
        {anime.title}
      </Link>
    </div>
  )
}
