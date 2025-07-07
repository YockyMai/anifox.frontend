import { Carousel, Fancybox } from '@anifox/ui'
import { useParams } from 'react-router'

import { useCharacterQuery } from '@/graphql/generated/output'

import { CharacterPageParams } from '../../character.interface'
import { CharacterPicture } from './character-picture'

export const CharacterPictures = () => {
  const { id } = useParams<CharacterPageParams>()

  const { data } = useCharacterQuery({ variables: { characterId: id! } })

  const pictures = data?.character.pictures

  return (
    <Fancybox>
      <div className='h-[160px]'>
        <Carousel
          slides={(pictures ?? []).map((src) => ({
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
