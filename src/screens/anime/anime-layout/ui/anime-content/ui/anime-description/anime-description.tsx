import { Spoiler } from '@anifox/ui'
import { useParams } from 'react-router'

import { useAnimeQuery } from '@/graphql/generated/output'
import { AnimePageParams } from '@/screens/anime/anime.interface'

import './anime-description.css'

export const AnimeDescription = () => {
  const { animeUrl } = useParams<AnimePageParams>()!

  const { data } = useAnimeQuery({
    variables: {
      url: animeUrl!
    }
  })

  if (!data?.anime.description) {
    return null
  }

  return (
    <>
      {/* only for PC */}
      <div className='anime-description'>
        <Spoiler maxHeight={125}>
          <p className='anime-description__text'>{data?.anime.description}</p>
        </Spoiler>
      </div>

      {/* only for mobile */}
      <div className='anime-description-mobile'>
        <p className='anime-description-mobile__title'>Описание</p>
        <Spoiler buttonWidthFull maxHeight={220}>
          <p className='anime-description__text'>{data?.anime.description}</p>
        </Spoiler>
      </div>
    </>
  )
}
