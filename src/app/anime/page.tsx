import {
  HydrationBoundary,
  QueryClient,
  dehydrate
} from '@tanstack/react-query'

import { AnimePage } from '@/pages/anime/anime'
import { metadata } from '@/pages/anime/anime.metadata'
import { usePrefetchAnimeListQuery } from '@/pages/anime/api/anime-list-query/prefetch-anime-list-query'

export { metadata }

const Anime = async () => {
  const queryClient = new QueryClient()

  await usePrefetchAnimeListQuery(queryClient)

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <AnimePage />
    </HydrationBoundary>
  )
}

export default Anime
