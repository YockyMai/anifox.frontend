'use client'

import { useAtomCallback } from 'jotai/utils'
import { useCallback, useEffect } from 'react'

import { ANIME_STATUSES } from '@/services/api'
import { $animeCatalogFilterAtoms } from '@/widgets/anime-catalog'
import { DEFAULT_ATOMS } from '@/widgets/anime-catalog/model'
import { ANIME_ORDER_OPTIONS } from '@/widgets/anime-catalog/ui/anime-catalog-filter/ui/anime-order/anime-order.const'

import { FILTER_PRESET } from './use-init-filter-preset.const'
import { FilterPreset } from './use-init-filter-preset.interface'

export const useInitFilterPreset = (preset?: FilterPreset) => {
  const resetFilter = useAtomCallback(
    useCallback((_, set) => {
      set($animeCatalogFilterAtoms.status, DEFAULT_ATOMS.status)
      set($animeCatalogFilterAtoms.search, DEFAULT_ATOMS.search)
      set($animeCatalogFilterAtoms.genres, DEFAULT_ATOMS.genres)
      set($animeCatalogFilterAtoms.minimalAge, DEFAULT_ATOMS.minimalAge)
      set($animeCatalogFilterAtoms.ratingMpa, DEFAULT_ATOMS.ratingMpa)
      set($animeCatalogFilterAtoms.season, DEFAULT_ATOMS.season)
      set($animeCatalogFilterAtoms.type, DEFAULT_ATOMS.type)
      set($animeCatalogFilterAtoms.years, DEFAULT_ATOMS.years)
      set($animeCatalogFilterAtoms.translations, DEFAULT_ATOMS.translations)
      set($animeCatalogFilterAtoms.studio, DEFAULT_ATOMS.studio)
      set($animeCatalogFilterAtoms.sort, DEFAULT_ATOMS.sort)
      set($animeCatalogFilterAtoms.order, DEFAULT_ATOMS.order)
    }, [])
  )

  const setMostRatedPreset = useAtomCallback(
    useCallback((_, set) => {
      set($animeCatalogFilterAtoms.order, ANIME_ORDER_OPTIONS.RATING)
    }, [])
  )

  const setPopularOngoingPreset = useAtomCallback(
    useCallback((_, set) => {
      set($animeCatalogFilterAtoms.order, ANIME_ORDER_OPTIONS.RATING)
      set($animeCatalogFilterAtoms.status, ANIME_STATUSES.ONGOING)
    }, [])
  )

  const setMostPopularPreset = useAtomCallback(
    useCallback((_, set) => {
      set($animeCatalogFilterAtoms.order, ANIME_ORDER_OPTIONS.RATING)
    }, [])
  )

  useEffect(() => {
    resetFilter()

    if (preset) {
      switch (preset) {
        case FILTER_PRESET.MOST_RATED:
          setMostRatedPreset()
          break
        case FILTER_PRESET.MOST_POPULAR:
          setMostPopularPreset()
          break
        case FILTER_PRESET.POPULAR_ONGOING:
          setPopularOngoingPreset()
          break
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    preset,
    resetFilter,
    setMostPopularPreset,
    setMostRatedPreset,
    setPopularOngoingPreset
  ])
}
