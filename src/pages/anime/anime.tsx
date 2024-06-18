import { api } from '@/services/api'
import {
  AnimeCatalogFilter,
  AnimeCatalogList
} from '@/widgets/anime-catalog/ui'

export const AnimePage = async () => {
  return (
    <div style={{ marginTop: 100 }}>
      <AnimeCatalogFilter />
      <AnimeCatalogList />
    </div>
  )
}
