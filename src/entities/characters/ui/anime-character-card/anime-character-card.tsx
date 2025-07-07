import { Image } from '@anifox/ui'
import { Link } from 'react-router'

import { ROUTES } from '@/screens/pages.routes'

import { AnimeCharacterCardProps } from './anime-character-card.interface'

export const AnimeCharacterCard = ({ character }: AnimeCharacterCardProps) => {
  return (
    <div className='relative grid w-full grid-rows-[min-content_auto] drop-shadow-2xl transition-transform hover:text-orange-400'>
      <div className='relative'>
        <div className='absolute bottom-1 left-1/2 z-10 w-[90%] -translate-x-1/2 rounded bg-slate-800/60 p-2 text-white backdrop-blur-xl'>
          <p className='text-center text-xs'>{character.role} роль</p>
        </div>
        <Link to={ROUTES.CHARACTER.ROOT(character.id)}>
          <div className='aspect-[3/4] w-full overflow-hidden rounded'>
            <Image
              className='h-full w-full scale-105 object-cover'
              src={character.image}
              alt='Изображение отсутсвует'
            />
          </div>
        </Link>
      </div>
      <Link
        title={character.name}
        className='mt-1 line-clamp-2 h-10 text-sm max-sm:h-8 max-sm:text-xs'
        to={ROUTES.CHARACTER.ROOT(character.id)}
      >
        {character.name}
      </Link>
    </div>
  )
}
