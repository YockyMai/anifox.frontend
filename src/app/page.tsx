import {
  dehydrate,
  HydrationBoundary,
  QueryClient
} from '@tanstack/react-query'

import { HomeScreen } from '@/screens/home'
import { usePrefetchComingOutAnimeQuery } from '@/services/queries'

const Home = async () => {
  const queryClient = new QueryClient()

  await usePrefetchComingOutAnimeQuery(queryClient)

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <HomeScreen />
    </HydrationBoundary>
  )
}

export default Home
