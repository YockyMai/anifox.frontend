import { Metadata } from 'next'

import { AnimeCatalogScreen } from '@/screens/anime-catalog'

export const metadata: Metadata = {
  title: 'Посик аниме | ANIFOX'
}

const AnimeCatalog = () => {
  return <AnimeCatalogScreen />
}

export default AnimeCatalog
