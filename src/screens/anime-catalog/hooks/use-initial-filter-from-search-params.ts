import { useMemo } from 'react'
import { useSearchParams } from 'react-router'

import {
  AnimeOrder,
  AnimeSeason,
  AnimeStatus,
  AnimeType,
  RatingMpa,
  SortOrder
} from '@/graphql/generated/output'
import { AnimeCatalogFilterStore } from '@/widgets/anime-catalog'

export const useInitialFilterFromSearchParams = () => {
  const [searchParams] = useSearchParams()

  const initialFilter = useMemo<AnimeCatalogFilterStore>(() => {
    const minimalAge = searchParams.get('minimalAge')

    return {
      genres: searchParams.getAll('genres'),
      minimalAge: minimalAge ? Number.parseInt(minimalAge) : null,
      search: searchParams.get('search') ?? '',
      order: searchParams.get('order') as AnimeOrder | null,
      sort: searchParams.get('sort') as SortOrder | null,
      ratingMpa: searchParams.get('ratingMpa') as RatingMpa | null,
      season: searchParams.get('season') as AnimeSeason | null,
      status: searchParams.get('status') as AnimeStatus | null,
      studio: searchParams.get('studio'),
      translations: searchParams.getAll('translations'),
      type: searchParams.get('type') as AnimeType | null,
      years: searchParams.getAll('years').map(Number.parseInt)
    }
  }, [searchParams])

  return initialFilter
}
