import {
  dehydrate,
  HydrationBoundary,
  QueryClient
} from '@tanstack/react-query'

import { getCurrentDayOfWeek } from '@/entities/anime/anime-calendar'
import { HomeScreen } from '@/screens/home'
import {
  usePrefetchAnimeSchedulesQuery,
  usePrefetchComingOutAnimeQuery
} from '@/services/queries'
import { usePrefetchAnimeCatalogLandingData } from '@/widgets/anime-catalog-landing/api/prefetch-anime-catalog-landing-data'

const Home = async () => {
  const queryClient = new QueryClient()

  await usePrefetchComingOutAnimeQuery(queryClient)

  await usePrefetchAnimeCatalogLandingData(queryClient)

  await usePrefetchAnimeSchedulesQuery(
    { day: getCurrentDayOfWeek() },
    queryClient
  )

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <HomeScreen />
    </HydrationBoundary>
  )
}

export default Home
