import './anime-catalog.css'
import { AnimeCatalogList, AnimeCatalogFilter } from './ui'

export const AnimeCatalog = () => {
  return (
    <div className='anime-catalog'>
      <AnimeCatalogFilter />
      <AnimeCatalogList />
    </div>
  )
}
