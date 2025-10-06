import { useParams } from 'react-router'

import { useAnimeQuery } from '@/graphql/generated/output'
import { AnimePageParams } from '@/screens/anime/anime.interface'

import './anime-content-info.css'
import {
  AnimeContentCharacteristics,
  AnimeContentGenres,
  AnimeContentStudios
} from './ui'

export const AnimeContentInfo = () => {
  const { animeUrl } = useParams<AnimePageParams>()!

  const { loading } = useAnimeQuery({
    variables: {
      url: animeUrl!
    }
  })

  return (
    <div className='anime-content-info'>
      {!loading && (
        <>
          <AnimeContentCharacteristics />
          <AnimeContentStudios />
          <AnimeContentGenres />
        </>
      )}
    </div>
  )
}
