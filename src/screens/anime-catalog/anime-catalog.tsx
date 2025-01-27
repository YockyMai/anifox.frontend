'use client'

import { useAtomValue } from 'jotai'

import { $animeCatalogFilterAtoms } from '@/widgets/anime-catalog'
import { AnimeCatalogLanding } from '@/widgets/anime-catalog-landing'
import {
  AnimeCatalogFilter,
  AnimeCatalogList
} from '@/widgets/anime-catalog/ui'

import { useInitFilterPreset, useSyncAnimeCatalogSearchParams } from './hooks'

export const AnimeCatalogScreen = () => {
  useInitFilterPreset()
  useSyncAnimeCatalogSearchParams()

  const isFilterActive = useAtomValue($animeCatalogFilterAtoms.isFilterActive)

  return (
    <div className='mt-[100]'>
      <AnimeCatalogFilter />
      {isFilterActive ? (
        <AnimeCatalogList />
      ) : (
        <div className='mt-52'>
          <AnimeCatalogLanding />
        </div>
      )}
    </div>
  )
}
