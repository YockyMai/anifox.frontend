import { cache } from 'react'

import { createArrayQueryParams } from '@/common/lib/query'
import { publicHttp } from '@/services/http'

import { Anime, FetchAnimeListParams } from './fetch-anime-list.interface'

export const fetchAnimeList = cache(
  async ({
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
    sort,
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
      ...(studio && { studio }),
      ...(sort && { sort })
    }

    const response = await publicHttp.get<Anime[]>(
      `anime/${createArrayQueryParams([
        { paramName: 'genres', array: genres },
        { paramName: 'year', array: years },
        { paramName: 'translation', array: translations }
      ])}`,
      {
        searchParams: params
      }
    )

    return response
  }
)
