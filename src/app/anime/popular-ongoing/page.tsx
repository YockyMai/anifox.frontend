import { Metadata } from 'next'

import { AnimePopularOngoingScreen } from '@/screens/anime-catalog'

export const metadata: Metadata = {
  title: 'Популярные аниме'
}

const PopularOngoing = () => {
  return <AnimePopularOngoingScreen />
}

export default PopularOngoing
