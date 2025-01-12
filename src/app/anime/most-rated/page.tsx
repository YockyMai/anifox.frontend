import { Metadata } from 'next'

import { AnimeCatalogVariants } from '@/screens/anime-catalog'

export const metadata: Metadata = {
  title: 'Популярные аниме'
}

const AnimePopular = () => {
  return <AnimeCatalogVariants.AnimeMostRatedScreen />
}

export default AnimePopular
