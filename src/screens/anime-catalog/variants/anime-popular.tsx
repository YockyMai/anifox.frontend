import {
  AnimeCatalogFilter,
  AnimeCatalogList
} from '@/widgets/anime-catalog/ui'

import { useInitFilterPreset } from '../hooks'
import { FILTER_PRESET } from '../hooks/use-init-filter-preset/use-init-filter-preset.const'
import { AnimePopularMetadata } from './anime-popular.metadata'

export const AnimePopularScreen = () => {
  useInitFilterPreset(FILTER_PRESET.MOST_POPULAR)

  return (
    <div className='mt-[100]'>
      <AnimePopularMetadata />

      <AnimeCatalogFilter />
      <AnimeCatalogList />
    </div>
  )
}
