import {
  dehydrate,
  HydrationBoundary,
  QueryClient
} from '@tanstack/react-query'

import { HomeScreen } from '@/screens/home'
import {
  prefetchAnimeSchedulesQuery,
  prefetchComingOutAnimeQuery
} from '@/services/queries'
import { prefetchAnimeCatalogLandingData } from '@/widgets/anime-catalog-landing/api/prefetch-anime-catalog-landing-data'

const Home = async () => {
  const queryClient = new QueryClient()

  await Promise.all([
    prefetchComingOutAnimeQuery(queryClient),
    prefetchAnimeCatalogLandingData(queryClient),
    prefetchAnimeSchedulesQuery(queryClient)
  ])

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <HomeScreen />
    </HydrationBoundary>
  )
}

export default Home
