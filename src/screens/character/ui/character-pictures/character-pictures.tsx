import { Carousel, Fancybox } from '@anifox/ui'
import { useParams } from 'react-router'

import { useCharacterQuery } from '@/services/queries'

import { CharacterPageParams } from '../../character.interface'
import { CharacterPicture } from './character-picture'
import './character-pictures.css'

export const CharacterPictures = () => {
  const { id } = useParams<CharacterPageParams>()

  const { data } = useCharacterQuery(id!)

  return (
    <Fancybox>
      <div className='character-pictures'>
        <Carousel
          slides={(data?.pictures ?? []).map((src) => ({
            content: <CharacterPicture key={src} src={src} />,
            size: 120
          }))}
          dragFree
          slideSpacing={10}
          align='end'
        />
      </div>
    </Fancybox>
  )
}
