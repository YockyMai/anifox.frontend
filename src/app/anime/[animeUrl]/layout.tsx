import {
  HydrationBoundary,
  QueryClient,
  dehydrate
} from '@tanstack/react-query'
import { ReactNode } from 'react'

import { AnimeScreenLayout } from '@/screens/anime/anime-layout'
import { AnimePageParams } from '@/screens/anime/anime.interface'
import { usePrefetchAnimeQuery } from '@/services/queries'

const AnimeLayout = async ({
  children,
  params
}: {
  children: ReactNode
  params: AnimePageParams
}) => {
  const queryClient = new QueryClient()

  await usePrefetchAnimeQuery(params.animeUrl, queryClient)

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <AnimeScreenLayout>{children}</AnimeScreenLayout>
    </HydrationBoundary>
  )
}

export default AnimeLayout
