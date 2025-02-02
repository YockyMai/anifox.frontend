import { useParams } from 'react-router-dom'

import { AnimePageParams } from '@/screens/anime/anime.interface'
import { useAnimeQuery } from '@/services/queries'

import './anime-content-info.css'
import {
  AnimeContentCharacteristics,
  AnimeContentGenres,
  AnimeContentStudios
} from './ui'

export const AnimeContentInfo = () => {
  const { animeUrl } = useParams<AnimePageParams>()!

  const { isSuccess } = useAnimeQuery(animeUrl!)

  return (
    <div className='anime-content-info'>
      {isSuccess && (
        <>
          <AnimeContentCharacteristics />
          <AnimeContentStudios />
          <AnimeContentGenres />
        </>
      )}
    </div>
  )
}
