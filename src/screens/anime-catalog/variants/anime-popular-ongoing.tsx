import {
  AnimeCatalogFilter,
  AnimeCatalogList
} from '@/widgets/anime-catalog/ui'

import { useInitFilterPreset } from '../hooks'
import { FILTER_PRESET } from '../hooks/use-init-filter-preset/use-init-filter-preset.const'
import { AnimePopularOngoingMetadata } from './anime-popular-ongoing.metadata'

export const AnimePopularOngoingScreen = () => {
  useInitFilterPreset(FILTER_PRESET.POPULAR_ONGOING)

  return (
    <div className='mt-[100]'>
      <AnimePopularOngoingMetadata />

      <AnimeCatalogFilter />
      <AnimeCatalogList />
    </div>
  )
}
