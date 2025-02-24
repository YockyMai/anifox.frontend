import { useStore } from '@anifox/store'

import { useAnimeCatalogStores } from '../..'

export const useAnimeListQueryParams = () => {
  const { $filter } = useAnimeCatalogStores()

  const {
    genres,
    minimalAge,
    order,
    ratingMpa,
    search,
    season,
    status,
    type,
    years,
    translations,
    studio,
    sort
  } = useStore($filter.store)

  return {
    genres,
    minimal_age: minimalAge,
    order,
    rating_mpa: ratingMpa,
    search,
    season,
    status,
    type,
    years,
    translations,
    studio,
    sort
  }
}
