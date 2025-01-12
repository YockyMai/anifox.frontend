import { Metadata } from 'next'

import { AnimeCatalogVariants } from '@/screens/anime-catalog'

export const metadata: Metadata = {
  title: 'Популярные аниме'
}

const PopularOngoing = () => {
  return <AnimeCatalogVariants.AnimePopularScreen />
}

export default PopularOngoing
