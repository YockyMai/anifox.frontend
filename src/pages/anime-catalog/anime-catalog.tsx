import {
  AnimeCatalogFilter,
  AnimeCatalogList
} from '@/widgets/anime-catalog/ui'

export const AnimeCatalogPage = async () => {
  return (
    <div className='mt-[100]'>
      <AnimeCatalogFilter />
      <AnimeCatalogList />
    </div>
  )
}
