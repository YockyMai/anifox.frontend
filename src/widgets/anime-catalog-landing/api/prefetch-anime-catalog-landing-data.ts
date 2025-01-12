import { QueryClient } from '@tanstack/react-query'

import {
  usePrefetchAllTimePopularAnimeListQuery,
  usePrefetchMostRatedAnimeListQuery
} from '@/services/queries'

export const usePrefetchAnimeCatalogLandingData = async (
  queryClient: QueryClient
) => {
  await Promise.all([
    usePrefetchAllTimePopularAnimeListQuery(queryClient),
    usePrefetchMostRatedAnimeListQuery(queryClient)
  ])
}
