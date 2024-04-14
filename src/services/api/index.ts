import { fetchAnime } from './fetch-anime'
import { fetchAnimeEpisodes } from './fetch-anime-episodes'
import { fetchAnimeGenres } from './fetch-anime-genres'
import { fetchAnimeList } from './fetch-anime-list'
import { fetchAnimeMedia } from './fetch-anime-media'
import { fetchAnimeRating } from './fetch-anime-rating'
import { fetchAnimeReleaseYears } from './fetch-anime-release-years'
import { fetchAnimeScreenshots } from './fetch-anime-screenshots'
import { fetchAnimeStudios } from './fetch-anime-studios'
import { fetchAnimeTranslation } from './fetch-anime-translation'
import { fetchFavoriteAnimeList } from './fetch-favorite-anime-list'
import { fetchRelatedAnime } from './fetch-related-anime'
import { fetchSimilarAnime } from './fetch-similar-anime'
import { setAnimeStatus } from './set-anime-status'

export const api = {
  fetchAnimeEpisodes,
  fetchFavoriteAnimeList,
  fetchAnime,
  fetchAnimeGenres,
  fetchAnimeScreenshots,
  fetchAnimeStudios,
  fetchAnimeMedia,
  fetchAnimeTranslation,
  fetchAnimeReleaseYears,
  fetchRelatedAnime,
  fetchSimilarAnime,
  fetchAnimeList,
  fetchAnimeRating,
  setAnimeStatus
}

// export types
export type {
  AnimeEpisode,
  AnimeEpisodeTranslation,
  FetchAnimeEpisodesParams,
  FetchAnimeEpisodesResponse,
  fetchAnimeEpisodes
} from './fetch-anime-episodes'

export type {
  Anime,
  AnimeMinimalAge,
  AnimeOrderVariants,
  AnimeRatingMpa,
  AnimeSeasons,
  AnimeStatuses,
  AnimeTypeVariants,
  FetchAnimeListParams,
  fetchAnimeList
} from './fetch-anime-list'

export type {
  FetchAnimeFavoriteAnimeListResponse,
  FetchFavoriteAnimeListParams
} from './fetch-favorite-anime-list'

export type {
  FetchAnimeScreenshotsParams,
  FetchAnimeScreenshotsResponse
} from './fetch-anime-screenshots'

export type {
  AnimeTrackStatuses,
  SetAnimeStatusParams
} from './set-anime-status'

export type { AnimeImageVariants, AnimeResponse } from './fetch-anime'

export type { AnimeGenre } from './fetch-anime-genres'

export type { AnimeStudio } from './fetch-anime-studios'

export type { AnimeMedia } from './fetch-anime-media'

export type { AnimeTranslation } from './fetch-anime-translation'

export type { RelatedAnime } from './fetch-related-anime'

export type { AnimeRating } from './fetch-anime-rating'
