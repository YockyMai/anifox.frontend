import { Metadata } from 'next'

import { AnimePopularScreen } from '@/screens/anime-catalog'

export const metadata: Metadata = {
  title: 'Самые популярные аниме — Смотреть онлайн!',
  description:
    'Список самых популярных и культовых произведений в мире аниме. Откройте для себя аниме, которые завоевали сердца миллионов поклонников по всему миру.'
}

const Popular = () => {
  return <AnimePopularScreen />
}

export default Popular
