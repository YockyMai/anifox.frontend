import {
  HydrationBoundary,
  QueryClient,
  dehydrate
} from '@tanstack/react-query'

import { AnimeOverviewScreen } from '@/screens/anime/anime-overview'
import { AnimePageParams } from '@/screens/anime/anime.interface'
import { usePrefetchAnimeVideosQuery } from '@/services/queries'
import { usePrefetchScreenshotsQuery } from '@/services/queries/use-anime-screenshots-query'

const Anime = async (props: { params: Promise<AnimePageParams> }) => {
  const params = await props.params
  const queryClient = new QueryClient()

  await Promise.all([
    usePrefetchScreenshotsQuery(params.animeUrl, queryClient),
    usePrefetchAnimeVideosQuery(params.animeUrl, queryClient)
  ])

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <AnimeOverviewScreen />
    </HydrationBoundary>
  )
}

export default Anime
