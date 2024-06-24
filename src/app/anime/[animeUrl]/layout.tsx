import {
  HydrationBoundary,
  QueryClient,
  dehydrate
} from '@tanstack/react-query'
import { ReactNode } from 'react'

import { AnimePageLayout } from '@/pages/anime/anime-layout'
import { AnimePageParams } from '@/pages/anime/anime.interface'
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
      <AnimePageLayout>{children}</AnimePageLayout>
    </HydrationBoundary>
  )
}

export default AnimeLayout
