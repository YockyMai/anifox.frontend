import { QueryClient } from '@tanstack/react-query'

import {
  prefetchAllTimePopularAnimeListQuery,
  prefetchMostRatedAnimeListQuery,
  prefetchPopularOngoingQuery
} from '@/services/queries'

export const prefetchAnimeCatalogLandingData = async (
  queryClient: QueryClient
) => {
  await Promise.all([
    prefetchAllTimePopularAnimeListQuery(queryClient),
    prefetchMostRatedAnimeListQuery(queryClient),
    prefetchPopularOngoingQuery(queryClient)
  ])
}
