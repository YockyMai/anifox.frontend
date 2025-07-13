import { useStore } from '@anifox/store'

import { QueryAnimesArgs } from '@/graphql/generated/output'

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

  const params: QueryAnimesArgs = {
    // genres,
    // minimalAge,
    // order,
    // ratingMpa,
    // search
    // season,
    // status,
    // type,
    // years
    // translations,
    // studios,
    // sort
  }

  if (genres.length) {
    params.genres = genres
  }

  if (minimalAge) {
    params.minimalAge = minimalAge
  }

  // if (order) {
  //   params.order = order
  // }

  // if (ratingMpa) {
  //   params.ratingMpa = ratingMpa
  // }

  if (search) {
    params.search = search
  }

  // if (season) {
  //   params.season = season
  // }

  if (status) {
    params.status = status
  }

  // if (type) {
  //   params.type = type
  // }

  if (years.length) {
    params.years = years
  }

  // if (translations.length) {
  //   params.translations = translations
  // }

  if (studio) {
    params.studios = [studio]
  }

  // if (sort) {
  //   params.sort = sort
  // }

  return params
}
