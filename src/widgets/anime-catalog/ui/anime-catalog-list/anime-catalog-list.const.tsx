import { AnimeCardSkeleton } from '@/entities/anime/anime-card'

export const ANIME_CARD_LOADERS = Array.from({ length: 20 }, (_, index) => (
  <AnimeCardSkeleton key={index} />
))
