import { useMemo } from 'react'
import { useSearchParams } from 'react-router'

import {
  AnimeMinimalAge,
  AnimeOrderVariants,
  AnimeRatingMpa,
  AnimeSeasons,
  AnimeSortDirection,
  AnimeStatuses,
  AnimeTypeVariants
} from '@/services/api'
import { AnimeCatalogFilterStore } from '@/widgets/anime-catalog/store/anime-catalog-filter/anime-catalog-filter.interface'

export const useInitialFilterFromSearchParams = () => {
  const [searchParams] = useSearchParams()

  const initialFilter = useMemo<AnimeCatalogFilterStore>(() => {
    const minimalAge = searchParams.get('minimalAge')

    return {
      genres: searchParams.getAll('genres'),
      minimalAge: minimalAge
        ? (Number.parseInt(minimalAge) as AnimeMinimalAge)
        : null,
      search: searchParams.get('search') ?? '',
      order: searchParams.get('order') as AnimeOrderVariants | null,
      sort: searchParams.get('sort') as AnimeSortDirection | null,
      ratingMpa: searchParams.get('ratingMpa') as AnimeRatingMpa | null,
      season: searchParams.get('season') as AnimeSeasons | null,
      status: searchParams.get('status') as AnimeStatuses | null,
      studio: searchParams.get('studio'),
      translations: searchParams.getAll('translations'),
      type: searchParams.get('type') as AnimeTypeVariants | null,
      years: searchParams.getAll('years')
    }
  }, [searchParams])

  return initialFilter
}
