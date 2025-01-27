import {
  HydrationBoundary,
  QueryClient,
  dehydrate
} from '@tanstack/react-query'

import { AnimeOverviewScreen } from '@/screens/anime/anime-overview'
import { AnimePageParams } from '@/screens/anime/anime.interface'
import { prefetchAnimeVideosQuery } from '@/services/queries'
import { prefetchScreenshotsQuery } from '@/services/queries/use-anime-screenshots-query'

const Anime = async (props: { params: Promise<AnimePageParams> }) => {
  const params = await props.params
  const queryClient = new QueryClient()

  await Promise.all([
    prefetchScreenshotsQuery(params.animeUrl, queryClient),
    prefetchAnimeVideosQuery(params.animeUrl, queryClient)
  ])

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <AnimeOverviewScreen />
    </HydrationBoundary>
  )
}

export default Anime
