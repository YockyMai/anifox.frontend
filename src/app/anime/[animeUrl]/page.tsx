import { Suspense } from 'react'

import { AnimeOverviewScreen } from '@/screens/anime/anime-overview'

const Anime = () => {
  return (
    <Suspense fallback={<div></div>}>
      <AnimeOverviewScreen />
    </Suspense>
  )
}

export default Anime
