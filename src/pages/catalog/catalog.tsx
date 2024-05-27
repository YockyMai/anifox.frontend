import { AnimeCatalog } from '@/modules/anime-catalog'

import { CatalogPageHelmet } from './catalog.helmet'

export const CatalogPage = () => {
  return (
    <div className='mt-28'>
      <CatalogPageHelmet />
      <AnimeCatalog />
    </div>
  )
}
