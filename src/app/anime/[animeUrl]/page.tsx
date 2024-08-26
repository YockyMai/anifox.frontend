import {
  HydrationBoundary,
  QueryClient,
  dehydrate
} from '@tanstack/react-query'
import { Suspense } from 'react'

import { AnimeOverviewScreen } from '@/screens/anime/anime-overview'
import { AnimePageParams } from '@/screens/anime/anime.interface'
import { usePrefetchAnimeVideosQuery } from '@/services/queries'
import { usePrefetchScreenshotsQuery } from '@/services/queries/use-anime-screenshots-query'

const Anime = async ({ params }: { params: AnimePageParams }) => {
  const queryClient = new QueryClient()

  await usePrefetchScreenshotsQuery(params.animeUrl, queryClient)
  await usePrefetchAnimeVideosQuery(params.animeUrl, queryClient)

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<div>loading</div>}>
        <AnimeOverviewScreen />
      </Suspense>
    </HydrationBoundary>
  )
}

export default Anime
