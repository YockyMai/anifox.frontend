import { Image } from '@anifox/ui'

import './anime-card-simple.css'
import { AnimeCardSimpleProps } from './anime-card-simple.interface'

export const AnimeCardSimple = ({ anime }: AnimeCardSimpleProps) => {
  return (
    <div className='anime-card-simple'>
      <Image
        className='anime-card-simple__image'
        src={anime.image.medium}
        alt={anime.title}
      />
      <p className='anime-card-simple__title'>{anime.title}</p>
    </div>
  )
}
