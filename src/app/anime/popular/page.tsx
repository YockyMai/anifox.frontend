import { Metadata } from 'next'

import { AnimePopularScreen } from '@/screens/anime-catalog'

export const metadata: Metadata = {
  title: 'Популярные аниме'
}

const Popular = () => {
  return <AnimePopularScreen />
}

export default Popular
