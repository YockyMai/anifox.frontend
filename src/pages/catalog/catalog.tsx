import { AnimeCatalog } from '@/widgets/anime-catalog'

import { CatalogPageHelmet } from './catalog.helmet'

export const CatalogPage = () => {
  return (
    <div>
      <CatalogPageHelmet />
      <AnimeCatalog />
    </div>
  )
}
