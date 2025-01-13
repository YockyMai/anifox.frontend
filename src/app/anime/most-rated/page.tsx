import { Metadata } from 'next'

import { AnimeMostRatedScreen } from '@/screens/anime-catalog'

export const metadata: Metadata = {
  title: 'Популярные аниме'
}

const AnimePopular = () => {
  return <AnimeMostRatedScreen />
}

export default AnimePopular
