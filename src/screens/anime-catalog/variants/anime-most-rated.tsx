'use client'

import { useHydrateAtoms } from 'jotai/utils'

import { $animeCatalogFilterAtoms } from '@/widgets/anime-catalog'
import {
  AnimeCatalogFilter,
  AnimeCatalogList
} from '@/widgets/anime-catalog/ui'
import { ANIME_ORDER_OPTIONS } from '@/widgets/anime-catalog/ui/anime-catalog-filter/ui/anime-order/anime-order.const'

export const AnimeMostRatedScreen = () => {
  useHydrateAtoms([
    [$animeCatalogFilterAtoms.order, ANIME_ORDER_OPTIONS.RATING]
  ])

  return (
    <div className='mt-[100]'>
      <AnimeCatalogFilter />
      <AnimeCatalogList />
    </div>
  )
}
