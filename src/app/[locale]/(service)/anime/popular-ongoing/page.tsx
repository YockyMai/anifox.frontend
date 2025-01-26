import { Metadata } from 'next'

import { AnimePopularOngoingScreen } from '@/screens/anime-catalog'

export const metadata: Metadata = {
  title: 'Популярные новинки аниме — Смотреть онлайн!',
  description:
    'Свежие новинки аниме этого года! Все самые актуальные и популярные релизы смотреть онлайн.'
}

const PopularOngoing = () => {
  return <AnimePopularOngoingScreen />
}

export default PopularOngoing
