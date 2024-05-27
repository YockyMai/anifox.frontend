import './anime-catalog.css'
import { AnimeCatalogList, AnimeCatalogFilter } from './components'

export const AnimeCatalog = () => {
  return (
    <div className='anime-catalog'>
      <AnimeCatalogFilter />
      <AnimeCatalogList />
    </div>
  )
}
