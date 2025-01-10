import Link from 'next/link'
import React from 'react'

import { Image } from '@/common/components'

import './anime-character-card.css'
import { AnimeCharacterCardProps } from './anime-character-card.interface'

export const AnimeCharacterCard = ({ character }: AnimeCharacterCardProps) => {
  return (
    <div className='anime-character-card'>
      <div className='anime-character-card__image'>
        <Link href={'#'}>
          <div className='anime-character-card__image__element'>
            <Image
              fit='cover'
              width='100%'
              height='100%'
              src={character.image}
              alt='Изображение отсутсвует'
            />
          </div>
        </Link>
      </div>
      <Link
        title={character.name}
        className='anime-character-card__title'
        href={'#'}
      >
        {character.name}
      </Link>
    </div>
  )
}
