import { AnimeWatchScreen } from '@/screens/anime/anime-watch'
import { AnimePageParams } from '@/screens/anime/anime.interface'

const AnimeWatch = async ({ params }: { params: AnimePageParams }) => {
  return (
    <div>
      <AnimeWatchScreen />
    </div>
  )
}

export default AnimeWatch
