import { MAP_ANIME_TYPE_VARIANTS } from '@/common/const/translate'
import { AnimeType } from '@/graphql/generated/output'

export const TYPE_OPTIONS = [
  { value: AnimeType.MOVIE, label: MAP_ANIME_TYPE_VARIANTS[AnimeType.MOVIE] },
  { value: AnimeType.ONA, label: MAP_ANIME_TYPE_VARIANTS[AnimeType.ONA] },
  { value: AnimeType.OVA, label: MAP_ANIME_TYPE_VARIANTS[AnimeType.OVA] },
  { value: AnimeType.MUSIC, label: MAP_ANIME_TYPE_VARIANTS[AnimeType.MUSIC] },
  {
    value: AnimeType.SPECIAL,
    label: MAP_ANIME_TYPE_VARIANTS[AnimeType.SPECIAL]
  },
  { value: AnimeType.TV, label: MAP_ANIME_TYPE_VARIANTS[AnimeType.TV] }
]
