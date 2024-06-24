import './anime-content-info.css'
import {
  AnimeContentCharacteristics,
  AnimeContentGenres,
  AnimeContentStudios
} from './ui'

export const AnimeContentInfo = () => {
  return (
    <div className='anime-content-info'>
      <AnimeContentCharacteristics />
      <AnimeContentStudios />
      <AnimeContentGenres />
    </div>
  )
}
