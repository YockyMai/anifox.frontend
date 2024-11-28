import {
  dehydrate,
  HydrationBoundary,
  QueryClient
} from '@tanstack/react-query'

import { HomeScreen } from '@/screens/home'
import {
  usePrefetchAnimeWeekSchedulesQuery,
  usePrefetchComingOutAnimeQuery
} from '@/services/queries'
import { usePrefetchAnimeCatalogLandingData } from '@/widgets/anime-catalog-landing/api/prefetch-anime-catalog-landing-data'

const Home = async () => {
  const queryClient = new QueryClient()

  await usePrefetchComingOutAnimeQuery(queryClient)

  await usePrefetchAnimeCatalogLandingData(queryClient)

  await usePrefetchAnimeWeekSchedulesQuery(queryClient)

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <HomeScreen />
    </HydrationBoundary>
  )
}

export default Home
