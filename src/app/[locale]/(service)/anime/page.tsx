import {
  dehydrate,
  HydrationBoundary,
  QueryClient
} from '@tanstack/react-query'
import { Metadata } from 'next'

import { AnimeCatalogScreen } from '@/screens/anime-catalog'
import { prefetchAnimeCatalogLandingData } from '@/widgets/anime-catalog-landing/api'

export const metadata: Metadata = {
  title: 'Поиск аниме',
  alternates: {
    canonical: `${process.env.HOST}/anime`
  }
}

const AnimeCatalog = async () => {
  const queryClient = new QueryClient()

  await prefetchAnimeCatalogLandingData(queryClient)

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <AnimeCatalogScreen />
    </HydrationBoundary>
  )
}

export default AnimeCatalog
