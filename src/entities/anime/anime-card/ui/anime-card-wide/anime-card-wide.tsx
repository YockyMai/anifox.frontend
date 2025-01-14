import clsx from 'clsx'

import { Image } from '@/common/components'

import './anime-card-wide.css'
import { AnimeCardSimpleProps } from './anime-card-wide.interface'

export const AnimeCardWide = ({ anime, isActive }: AnimeCardSimpleProps) => {
  return (
    <div className='anime-card-wide'>
      <Image
        className='anime-card-wide__image'
        src={anime.image.cover ?? anime.image.medium}
        alt={anime.title}
      />
      <div
        className={clsx(
          'anime-card-wide__title',
          isActive && 'anime-card-wide__title_active'
        )}
      >
        <p>{anime.title}</p>
      </div>
    </div>
  )
}
