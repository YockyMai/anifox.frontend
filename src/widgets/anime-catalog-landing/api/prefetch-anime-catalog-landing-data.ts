import { QueryClient } from '@tanstack/react-query'

import {
  usePrefetchAllTimePopularAnimeListQuery,
  usePrefetchMostRatedAnimeListQuery,
  usePrefetchPopularOngoingQuery
} from '@/services/queries'

export const usePrefetchAnimeCatalogLandingData = async (
  queryClient: QueryClient
) => {
  await Promise.all([
    usePrefetchAllTimePopularAnimeListQuery(queryClient),
    usePrefetchMostRatedAnimeListQuery(queryClient),
    usePrefetchPopularOngoingQuery(queryClient)
  ])
}
