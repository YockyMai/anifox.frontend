import { Image } from '@anifox/ui'
import { Link } from 'react-router'

import { ROUTES } from '@/screens/pages.routes'

import './anime-character-card.css'
import { AnimeCharacterCardProps } from './anime-character-card.interface'

export const AnimeCharacterCard = ({ character }: AnimeCharacterCardProps) => {
  return (
    <div className='anime-character-card'>
      <div className='anime-character-card__top-section'>
        <div className='anime-character-card__role'>
          <p>{character.role} роль</p>
        </div>
        <Link to={ROUTES.CHARACTER.ROOT.replace(':id', character.id)}>
          <div className='anime-character-card__image'>
            <Image src={character.image} alt='Изображение отсутсвует' />
          </div>
        </Link>
      </div>
      <Link
        title={character.name}
        className='anime-character-card__title'
        to={ROUTES.CHARACTER.ROOT.replace(':id', character.id)}
      >
        {character.name}
      </Link>
    </div>
  )
}
