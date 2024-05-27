import { publicHttp } from '@/services/http'
import { createArrayQueryParams } from '@/shared/lib/query'

import { Anime, FetchAnimeListParams } from './fetch-anime-list.interface'

export const fetchAnimeList = async ({
  limit,
  search,
  status,
  season,
  rating_mpa,
  genres,
  minimal_age,
  order,
  type,
  years,
  translations,
  studio,
  page
}: FetchAnimeListParams) => {
  const params = {
    limit: limit ? limit : 20,
    page: page ?? 0,
    ...(search && { search: search.trim() }),
    ...(minimal_age && { age: minimal_age }),
    ...(rating_mpa && { rating_mpa }),
    ...(status && { status }),
    ...(season && { season }),
    ...(order && { order }),
    ...(type && { type }),
    ...(studio && { studio })
  }

  const response = await publicHttp.get<Anime[]>(
    `anime/${createArrayQueryParams([
      { paramName: 'genres', array: genres },
      { paramName: 'year', array: years },
      { paramName: 'translation', array: translations }
    ])}`,
    {
      params
    }
  )

  return response
}
