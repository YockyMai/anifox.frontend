import './anime-filters.css'
import { AnimeType, Genres, Search } from './components'

export const AnimeFilters = () => {
  const filters = [<Search />, <AnimeType />, <Genres />]

  return (
    <div className='anime-filters'>
      {filters.map((filter) => (
        <div className='anime-filters__filter'>{filter}</div>
      ))}
    </div>
  )
}
