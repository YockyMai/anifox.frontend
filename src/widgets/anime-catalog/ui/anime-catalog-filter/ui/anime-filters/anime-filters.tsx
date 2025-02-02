import { useMemo } from 'react'

import './anime-filters.css'
import { AnimeType, Search, Genres, MinimalAge, Status, Studios } from './ui'

export const AnimeFilters = () => {
  const filters = useMemo(
    () => [
      <Search key={'search'} />,
      <AnimeType key={'anime-type'} />,
      <Genres key={'genres'} />,
      <MinimalAge key={'minimal-age'} />,
      <Status key={'status'} />,
      <Studios key={'studios'} />
    ],
    []
  )

  return (
    <div className='anime-filters'>
      {filters.map((filter, index) => (
        <div className='anime-filters__filter' key={index}>
          {filter}
        </div>
      ))}
    </div>
  )
}
