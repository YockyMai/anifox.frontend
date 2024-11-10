import { QueryClient } from '@tanstack/react-query'

import {
  usePrefetchAllTimePopularAnimeListQuery,
  usePrefetchMostRatedAnimeListQuery
} from '@/services/queries'

export const usePrefetchAnimeCatalogLandingData = async (
  queryClient: QueryClient
) => {
  await usePrefetchAllTimePopularAnimeListQuery(queryClient)
  await usePrefetchMostRatedAnimeListQuery(queryClient)
}
