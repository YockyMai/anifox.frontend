import { Metadata } from 'next'

import { AnimeMostRatedScreen } from '@/screens/anime-catalog'

export const metadata: Metadata = {
  title: 'Самые рейтинговые аниме — Смотреть онлайн!',
  description:
    'Смотрите и отслеживайте топовые тайталы с наивысший оценкой от зрителей. Не пропустите лучшие аниме по мнению коммьюнити, которые стоит посмотреть прямо сейчас!'
}

const AnimePopular = () => {
  return <AnimeMostRatedScreen />
}

export default AnimePopular
