import { Metadata } from 'next'

import { AnimeCatalogVariants } from '@/screens/anime-catalog'

export const metadata: Metadata = {
  title: 'Популярные аниме'
}

const Popular = () => {
  return <AnimeCatalogVariants.AnimePopularScreen />
}

export default Popular
