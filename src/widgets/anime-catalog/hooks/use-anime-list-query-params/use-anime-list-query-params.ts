import { useAtomValue } from 'jotai'
import { useMemo } from 'react'

import { $animeCatalogFilterAtoms } from '../../model'

export const useAnimeListQueryParams = () => {
  const genres = useAtomValue($animeCatalogFilterAtoms.genres)
  const minimalAge = useAtomValue($animeCatalogFilterAtoms.minimalAge)
  const order = useAtomValue($animeCatalogFilterAtoms.order)
  const ratingMpa = useAtomValue($animeCatalogFilterAtoms.ratingMpa)
  const search = useAtomValue($animeCatalogFilterAtoms.search)
  const season = useAtomValue($animeCatalogFilterAtoms.season)
  const status = useAtomValue($animeCatalogFilterAtoms.status)
  const type = useAtomValue($animeCatalogFilterAtoms.type)
  const years = useAtomValue($animeCatalogFilterAtoms.years)
  const translations = useAtomValue($animeCatalogFilterAtoms.translations)
  const studio = useAtomValue($animeCatalogFilterAtoms.studio)
  const sort = useAtomValue($animeCatalogFilterAtoms.sort)

  const params = useMemo(
    () => ({
      genres: genres.map(({ id }) => id),
      minimal_age: minimalAge,
      order,
      rating_mpa: ratingMpa,
      search,
      season,
      status,
      type,
      years,
      translations: translations.map(({ id }) => id.toString()),
      studio,
      sort
    }),
    [
      genres,
      minimalAge,
      order,
      ratingMpa,
      search,
      season,
      sort,
      status,
      studio,
      translations,
      type,
      years
    ]
  )

  return params
}
