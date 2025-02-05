import { useParams } from 'react-router'

import { Spoiler } from '@/common/components'
import { AnimePageParams } from '@/screens/anime/anime.interface'
import { useAnimeQuery } from '@/services/queries'

import './anime-description.css'

export const AnimeDescription = () => {
  const { animeUrl } = useParams<AnimePageParams>()!

  const { data } = useAnimeQuery(animeUrl!)

  if (!data?.description) {
    return null
  }

  return (
    <>
      {/* only for PC */}
      <div className='anime-description'>
        <Spoiler maxHeight={125}>
          <p className='anime-description__text'>{data?.description}</p>
        </Spoiler>
      </div>

      {/* only for mobile */}
      <div className='anime-description-mobile'>
        <p className='anime-description-mobile__title'>Описание</p>
        <Spoiler buttonWidthFull maxHeight={220}>
          <p className='anime-description__text'>{data?.description}</p>
        </Spoiler>
      </div>
    </>
  )
}
