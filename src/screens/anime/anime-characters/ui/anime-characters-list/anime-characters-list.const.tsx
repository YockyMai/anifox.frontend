import { AnimeCardSkeleton } from '@/entities/anime/anime-card'

export const ANIME_CHARACTERS_LOADER = Array.from(
  { length: 20 },
  (_, index) => <AnimeCardSkeleton key={index} />
)
