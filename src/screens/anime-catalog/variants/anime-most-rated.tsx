import {
  AnimeCatalogFilter,
  AnimeCatalogList
} from '@/widgets/anime-catalog/ui'

import { useInitFilterPreset } from '../hooks'
import { FILTER_PRESET } from '../hooks/use-init-filter-preset/use-init-filter-preset.const'
import { AnimeMostRatedMetadata } from './anime-most-rated.metadata'

export const AnimeMostRatedScreen = () => {
  useInitFilterPreset(FILTER_PRESET.MOST_RATED)

  return (
    <div className='mt-[100]'>
      <AnimeMostRatedMetadata />

      <AnimeCatalogFilter />
      <AnimeCatalogList />
    </div>
  )
}
