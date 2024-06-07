import './anime-catalog-filter.css'
import { AnimeFilters, AnimeOrder } from './ui'

export const AnimeCatalogFilter = () => {
  return (
    <div className='anime-catalog-filter'>
      <div className='anime-catalog-filter__left-section'>
        <AnimeOrder />
        <AnimeFilters />
      </div>
      <div></div>
    </div>
  )
}
