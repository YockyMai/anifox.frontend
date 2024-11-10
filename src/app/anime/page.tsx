import {
  dehydrate,
  HydrationBoundary,
  QueryClient
} from '@tanstack/react-query'
import { Metadata } from 'next'

import { AnimeCatalogScreen } from '@/screens/anime-catalog'
import { usePrefetchAnimeCatalogLandingData } from '@/widgets/anime-catalog-landing/api/prefetch-anime-catalog-landing-data'

export const metadata: Metadata = {
  title: 'Посик аниме'
}

const AnimeCatalog = async () => {
  const queryClient = new QueryClient()

  await usePrefetchAnimeCatalogLandingData(queryClient)

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <AnimeCatalogScreen />
    </HydrationBoundary>
  )
}

export default AnimeCatalog
