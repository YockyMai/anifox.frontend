import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type Anime = {
  __typename?: 'Anime';
  /** Color derived from image color */
  accentColor: Scalars['String']['output'];
  airedOn?: Maybe<Scalars['DateTime']['output']>;
  /** User comments on anime */
  comments: AnimeCommentConnection;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['Float']['output']>;
  /** Anime episodes */
  episodes: EpisodeConnection;
  episodesAired: Scalars['Int']['output'];
  episodesCount?: Maybe<Scalars['Int']['output']>;
  franchise?: Maybe<Scalars['String']['output']>;
  /** Anime genres */
  genres: Array<AnimeGenre>;
  /** Anime ID */
  id: Scalars['ID']['output'];
  image: AnimeImage;
  /** Minimal age to view anime */
  minimalAge: Scalars['Int']['output'];
  /** Next episode release date */
  nextEpisode?: Maybe<Scalars['DateTime']['output']>;
  /** Link for Kodik player iframe */
  playerLink: Scalars['String']['output'];
  /** Age limit for view in MPAA format */
  ratingMpa: Scalars['String']['output'];
  /** Related animes */
  related: AnimeConnection;
  /** Anime release date */
  releasedOn: Scalars['DateTime']['output'];
  screenshots: Array<Scalars['String']['output']>;
  season: AnimeSeason;
  /** Anime ID on shikimori */
  shikimoriId: Scalars['Int']['output'];
  /** Anime rating on shikimori */
  shikimoriRating: Scalars['Float']['output'];
  /** Anime votes count on shikimori */
  shikimoriVotes: Scalars['Int']['output'];
  /** Similar animes */
  similar: AnimeConnection;
  status: AnimeStatus;
  studios: Array<AnimeStudio>;
  /** Anime title */
  title: Scalars['String']['output'];
  titlesEnglish: Array<Scalars['String']['output']>;
  titlesJapan: Array<Scalars['String']['output']>;
  titlesOther: Array<Scalars['String']['output']>;
  titlesSynonyms: Array<Scalars['String']['output']>;
  /** Averaged anime rating */
  totalRating?: Maybe<Scalars['Float']['output']>;
  type: AnimeType;
  /** Date of last anime update (any data) */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Unique anime url derived from anime title */
  url: Scalars['String']['output'];
  videos: Array<AnimeVideo>;
  /** Year of release */
  year: Scalars['Int']['output'];
};


export type AnimeCommentsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type AnimeEpisodesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type AnimeRelatedArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type AnimeSimilarArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type AnimeCharacter = {
  __typename?: 'AnimeCharacter';
  about?: Maybe<Scalars['String']['output']>;
  aboutEn?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  image: Scalars['String']['output'];
  malId: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  nameEn: Scalars['String']['output'];
  nameKanji?: Maybe<Scalars['String']['output']>;
  pictures: Array<Scalars['String']['output']>;
  role: CharacterRole;
};

export type AnimeComment = {
  __typename?: 'AnimeComment';
  anime: Anime;
  animeId: Scalars['String']['output'];
  author: User;
  authorId: Scalars['String']['output'];
  children: Array<AnimeComment>;
  comment: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  dislikes: Array<User>;
  /** Example field (placeholder) */
  id: Scalars['String']['output'];
  likes: AnimeCommentLikeConnection;
  parent?: Maybe<AnimeComment>;
  verified: Scalars['Boolean']['output'];
};


export type AnimeCommentLikesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type AnimeCommentConnection = {
  __typename?: 'AnimeCommentConnection';
  data: Array<AnimeComment>;
  pageInfo: PageInfo;
};

export type AnimeCommentLike = {
  __typename?: 'AnimeCommentLike';
  animeCommentId: Scalars['String']['output'];
  comment: AnimeComment;
  createdAt: Scalars['DateTime']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type AnimeCommentLikeConnection = {
  __typename?: 'AnimeCommentLikeConnection';
  data: Array<AnimeCommentLike>;
  pageInfo: PageInfo;
};

export type AnimeConnection = {
  __typename?: 'AnimeConnection';
  data: Array<Anime>;
  pageInfo: PageInfo;
};

export type AnimeFranchise = {
  __typename?: 'AnimeFranchise';
  animes: Array<Anime>;
  banner?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
};

export type AnimeFranchiseConnection = {
  __typename?: 'AnimeFranchiseConnection';
  data: Array<AnimeFranchise>;
  pageInfo: PageInfo;
};

export type AnimeGenre = {
  __typename?: 'AnimeGenre';
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
};

/** Anime image variants */
export type AnimeImage = {
  __typename?: 'AnimeImage';
  animeId: Scalars['ID']['output'];
  cover?: Maybe<Scalars['String']['output']>;
  large?: Maybe<Scalars['String']['output']>;
  medium?: Maybe<Scalars['String']['output']>;
};

export type AnimeList = {
  __typename?: 'AnimeList';
  completed: Array<AnimeListEntry>;
  dropped: Array<AnimeListEntry>;
  onHold: Array<AnimeListEntry>;
  planToWatch: Array<AnimeListEntry>;
  userId: Scalars['String']['output'];
  watching: Array<AnimeListEntry>;
};

export type AnimeListEntry = {
  __typename?: 'AnimeListEntry';
  anime: Anime;
  animeId: Scalars['String']['output'];
  endedAt?: Maybe<Scalars['DateTime']['output']>;
  episodesWatched?: Maybe<Scalars['Int']['output']>;
  startedAt?: Maybe<Scalars['DateTime']['output']>;
  status: AnimeListStatus;
  updatedAt: Scalars['DateTime']['output'];
  user: Anime;
  userId: Scalars['String']['output'];
};

export const AnimeListStatus = {
  COMPLETED: 'COMPLETED',
  DROPPED: 'DROPPED',
  ON_HOLD: 'ON_HOLD',
  PLAN_TO_WATCH: 'PLAN_TO_WATCH',
  WATCHING: 'WATCHING'
} as const;

export type AnimeListStatus = typeof AnimeListStatus[keyof typeof AnimeListStatus];
export const AnimeOrder = {
  AIRED_ON: 'AIRED_ON',
  RANDOM: 'RANDOM',
  RATING: 'RATING',
  RELEASED_ON: 'RELEASED_ON',
  UPDATED_AT: 'UPDATED_AT'
} as const;

export type AnimeOrder = typeof AnimeOrder[keyof typeof AnimeOrder];
export type AnimeRating = {
  __typename?: 'AnimeRating';
  anime: User;
  animeId: Scalars['String']['output'];
  rating: Scalars['Int']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type AnimeRatingDistribution = {
  __typename?: 'AnimeRatingDistribution';
  anime: Anime;
  animeId: Scalars['String']['output'];
  scoreEight: Scalars['Int']['output'];
  scoreFive: Scalars['Int']['output'];
  scoreFour: Scalars['Int']['output'];
  scoreNine: Scalars['Int']['output'];
  scoreOne: Scalars['Int']['output'];
  scoreSeven: Scalars['Int']['output'];
  scoreSix: Scalars['Int']['output'];
  scoreTen: Scalars['Int']['output'];
  scoreThree: Scalars['Int']['output'];
  scoreTwo: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export const AnimeSeason = {
  FALL: 'FALL',
  SPRING: 'SPRING',
  SUMMER: 'SUMMER',
  WINTER: 'WINTER'
} as const;

export type AnimeSeason = typeof AnimeSeason[keyof typeof AnimeSeason];
export const AnimeStatus = {
  ANNOUNCED: 'ANNOUNCED',
  COMPLETED: 'COMPLETED',
  ONGOING: 'ONGOING'
} as const;

export type AnimeStatus = typeof AnimeStatus[keyof typeof AnimeStatus];
export type AnimeStudio = {
  __typename?: 'AnimeStudio';
  /** Anime studio ID */
  id: Scalars['String']['output'];
  /** Anime studio name */
  name: Scalars['String']['output'];
};

export const AnimeType = {
  MOVIE: 'MOVIE',
  MUSIC: 'MUSIC',
  ONA: 'ONA',
  OVA: 'OVA',
  SPECIAL: 'SPECIAL',
  TV: 'TV'
} as const;

export type AnimeType = typeof AnimeType[keyof typeof AnimeType];
export type AnimeVideo = {
  __typename?: 'AnimeVideo';
  id: Scalars['ID']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  playerUrl: Scalars['String']['output'];
  type: AnimeVideoType;
  url: Scalars['String']['output'];
};

export const AnimeVideoType = {
  CM: 'CM',
  PV: 'PV',
  TRAILER: 'TRAILER'
} as const;

export type AnimeVideoType = typeof AnimeVideoType[keyof typeof AnimeVideoType];
export type AnimeYears = {
  __typename?: 'AnimeYears';
  years: Array<Scalars['Int']['output']>;
};

export type Character = {
  __typename?: 'Character';
  about?: Maybe<Scalars['String']['output']>;
  aboutEn?: Maybe<Scalars['String']['output']>;
  animes: Array<Anime>;
  id: Scalars['String']['output'];
  image: Scalars['String']['output'];
  malId: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  nameEn: Scalars['String']['output'];
  nameKanji?: Maybe<Scalars['String']['output']>;
  pictures: Array<Scalars['String']['output']>;
};

export type CharacterConnection = {
  __typename?: 'CharacterConnection';
  data: Array<AnimeCharacter>;
  pageInfo: PageInfo;
};

export const CharacterRole = {
  MAIN: 'MAIN',
  SUPPORTING: 'SUPPORTING'
} as const;

export type CharacterRole = typeof CharacterRole[keyof typeof CharacterRole];
export type DayActivity = {
  __typename?: 'DayActivity';
  count: Scalars['Int']['output'];
  day: Scalars['DateTime']['output'];
};

export type Episode = {
  __typename?: 'Episode';
  /** Episode air date */
  aired?: Maybe<Scalars['DateTime']['output']>;
  /** Episode description in russian */
  description?: Maybe<Scalars['String']['output']>;
  /** Episode description in english */
  descriptionEn?: Maybe<Scalars['String']['output']>;
  /** Episode duration in minutes */
  duration?: Maybe<Scalars['Int']['output']>;
  /** Episode is filler */
  filler: Scalars['Boolean']['output'];
  id: Scalars['String']['output'];
  /** Episode image */
  image: Scalars['String']['output'];
  /** Episode number in the season */
  number: Scalars['Int']['output'];
  /** Episode is a recap */
  recap: Scalars['Boolean']['output'];
  /** Episode title in russian */
  title: Scalars['String']['output'];
  /** Episode title in english */
  titleEn: Scalars['String']['output'];
  /** Available translations for episode */
  translations: Array<EpisodeTranslation>;
};

export type EpisodeConnection = {
  __typename?: 'EpisodeConnection';
  data: Array<Episode>;
  pageInfo: PageInfo;
};

export type EpisodeTranslation = {
  __typename?: 'EpisodeTranslation';
  id: Scalars['String']['output'];
  link: Scalars['String']['output'];
  title: Scalars['String']['output'];
  type: TranslationType;
};

export type FavoriteAnime = {
  __typename?: 'FavoriteAnime';
  anime: Anime;
  animeId: Scalars['String']['output'];
  user: Anime;
  userId: Scalars['String']['output'];
};

export type FavoriteAnimeConnection = {
  __typename?: 'FavoriteAnimeConnection';
  data: Array<FavoriteAnime>;
  pageInfo: PageInfo;
};

export type FavoriteCharacter = {
  __typename?: 'FavoriteCharacter';
  character: Character;
  characterId: Scalars['String']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type FavoriteCharacterConnection = {
  __typename?: 'FavoriteCharacterConnection';
  data: Array<FavoriteCharacter>;
  pageInfo: PageInfo;
};

export type Login = {
  __typename?: 'Login';
  tokens: UserTokens;
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  addAnimeToFavorites: FavoriteAnime;
  createAnimeComment: AnimeComment;
  createAnimeCommentLike: AnimeCommentLike;
  login: Login;
  refreshTokens: UserTokens;
  removeAnimeComment: AnimeComment;
  removeAnimeCommentLike: AnimeCommentLike;
  removeAnimeFromFavorites: FavoriteAnime;
  removeAnimeListEntry: AnimeListEntry;
  removeAnimeRating: AnimeRating;
  saveAnimeListEntry: AnimeListEntry;
  saveAnimeRating: AnimeRating;
  signup: Signup;
  toggleFavoriteCharacter: FavoriteCharacter;
  updateAnimeComment: AnimeComment;
};


export type MutationAddAnimeToFavoritesArgs = {
  animeId: Scalars['String']['input'];
};


export type MutationCreateAnimeCommentArgs = {
  animeId: Scalars['String']['input'];
  comment: Scalars['String']['input'];
};


export type MutationCreateAnimeCommentLikeArgs = {
  animeCommentId: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationRefreshTokensArgs = {
  refreshToken: Scalars['String']['input'];
};


export type MutationRemoveAnimeCommentArgs = {
  id: Scalars['String']['input'];
};


export type MutationRemoveAnimeCommentLikeArgs = {
  animeCommentId: Scalars['String']['input'];
};


export type MutationRemoveAnimeFromFavoritesArgs = {
  animeId: Scalars['String']['input'];
};


export type MutationRemoveAnimeListEntryArgs = {
  animeId: Scalars['String']['input'];
};


export type MutationRemoveAnimeRatingArgs = {
  animeId: Scalars['String']['input'];
};


export type MutationSaveAnimeListEntryArgs = {
  animeId: Scalars['String']['input'];
  endedAt?: InputMaybe<Scalars['DateTime']['input']>;
  episodesWatched?: InputMaybe<Scalars['Int']['input']>;
  startedAt?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<AnimeListStatus>;
};


export type MutationSaveAnimeRatingArgs = {
  animeId: Scalars['String']['input'];
  rating: Scalars['Int']['input'];
};


export type MutationSignupArgs = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  banner?: InputMaybe<Scalars['String']['input']>;
  birthday?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  login: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  role: UserRole;
};


export type MutationToggleFavoriteCharacterArgs = {
  characterId: Scalars['String']['input'];
};


export type MutationUpdateAnimeCommentArgs = {
  comment: Scalars['String']['input'];
  commentId: Scalars['String']['input'];
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  page: Scalars['Int']['output'];
  totalCount: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  anime: Anime;
  animeComment: AnimeComment;
  animeCommentLikes: AnimeCommentLikeConnection;
  animeComments: AnimeCommentConnection;
  animeFranchise: AnimeFranchise;
  animeFranchises: AnimeFranchiseConnection;
  animeList: AnimeList;
  animeRating: AnimeRating;
  animeRatingDistribution: AnimeRatingDistribution;
  animeStudio: AnimeStudio;
  animeYears: AnimeYears;
  animes: AnimeConnection;
  character: Character;
  characters: CharacterConnection;
  episode: Episode;
  episodeTranslations: Array<EpisodeTranslation>;
  episodes: EpisodeConnection;
  favoriteAnimes: FavoriteAnimeConnection;
  favoriteCharacters: FavoriteCharacterConnection;
  genre: AnimeGenre;
  genres: Array<AnimeGenre>;
  profile: User;
  relatedAnimes: AnimeConnection;
  similarAnimes: AnimeConnection;
  translations: Array<Translation>;
  user: User;
  userStatistics: UserStatistics;
  viewer: User;
};


export type QueryAnimeArgs = {
  url: Scalars['String']['input'];
};


export type QueryAnimeCommentArgs = {
  id: Scalars['String']['input'];
};


export type QueryAnimeCommentLikesArgs = {
  animeCommentId?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryAnimeCommentsArgs = {
  animeId?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAnimeFranchiseArgs = {
  id: Scalars['String']['input'];
};


export type QueryAnimeFranchisesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryAnimeListArgs = {
  userId: Scalars['String']['input'];
};


export type QueryAnimeRatingArgs = {
  animeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};


export type QueryAnimeRatingDistributionArgs = {
  animeId: Scalars['String']['input'];
};


export type QueryAnimeStudioArgs = {
  id: Scalars['String']['input'];
};


export type QueryAnimesArgs = {
  genres?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  minimalAge?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<AnimeOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  ratingMpa?: InputMaybe<RatingMpa>;
  search?: InputMaybe<Scalars['String']['input']>;
  season?: InputMaybe<AnimeSeason>;
  sort?: InputMaybe<SortOrder>;
  status?: InputMaybe<AnimeStatus>;
  studios?: InputMaybe<Array<Scalars['String']['input']>>;
  translations?: InputMaybe<Array<Scalars['Int']['input']>>;
  type?: InputMaybe<AnimeType>;
  years?: InputMaybe<Array<Scalars['Int']['input']>>;
};


export type QueryCharacterArgs = {
  id: Scalars['String']['input'];
};


export type QueryCharactersArgs = {
  animeUrl?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  role?: InputMaybe<CharacterRole>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryEpisodeArgs = {
  animeId: Scalars['String']['input'];
  episodeId: Scalars['String']['input'];
};


export type QueryEpisodeTranslationsArgs = {
  episodeId: Scalars['String']['input'];
};


export type QueryEpisodesArgs = {
  animeId: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFavoriteAnimesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['String']['input'];
};


export type QueryFavoriteCharactersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['String']['input'];
};


export type QueryProfileArgs = {
  login: Scalars['String']['input'];
};


export type QueryRelatedAnimesArgs = {
  animeId: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySimilarAnimesArgs = {
  animeId: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUserArgs = {
  id: Scalars['String']['input'];
};


export type QueryUserStatisticsArgs = {
  userId: Scalars['String']['input'];
};

export const RatingMpa = {
  G: 'G',
  PG: 'PG',
  PG_13: 'PG_13',
  R: 'R',
  R_PLUS: 'R_PLUS'
} as const;

export type RatingMpa = typeof RatingMpa[keyof typeof RatingMpa];
export type Signup = {
  __typename?: 'Signup';
  tokens: UserTokens;
  user: User;
};

export const SortOrder = {
  ASC: 'ASC',
  DESC: 'DESC'
} as const;

export type SortOrder = typeof SortOrder[keyof typeof SortOrder];
export type TotalWatched = {
  __typename?: 'TotalWatched';
  totalWatchedEpisodes: Scalars['Int']['output'];
  totalWatchedSeconds: Scalars['Int']['output'];
};

export type Translation = {
  __typename?: 'Translation';
  id: Scalars['String']['output'];
  title: Scalars['String']['output'];
  type: TranslationType;
};

export const TranslationType = {
  SUB: 'SUB',
  VOICE: 'VOICE'
} as const;

export type TranslationType = typeof TranslationType[keyof typeof TranslationType];
export type User = {
  __typename?: 'User';
  animeComments: AnimeCommentConnection;
  animeList: AnimeList;
  avatar?: Maybe<Scalars['String']['output']>;
  birthday?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  favoriteAnimes: FavoriteAnimeConnection;
  favoriteCharacters: FavoriteCharacterConnection;
  googleId?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  login: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  role: UserRole;
  statistics: UserStatistics;
  vkId?: Maybe<Scalars['String']['output']>;
};


export type UserAnimeCommentsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type UserFavoriteAnimesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type UserFavoriteCharactersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type UserActivity = {
  __typename?: 'UserActivity';
  days: Array<DayActivity>;
  user: User;
  userId: Scalars['String']['output'];
};

export type UserGenreDistribution = {
  __typename?: 'UserGenreDistribution';
  genre: AnimeGenre;
  percent: Scalars['Int']['output'];
};

export const UserRole = {
  ADMIN: 'ADMIN',
  DEVELOPER: 'DEVELOPER',
  MODERATOR: 'MODERATOR',
  USER: 'USER'
} as const;

export type UserRole = typeof UserRole[keyof typeof UserRole];
export type UserStatistics = {
  __typename?: 'UserStatistics';
  activity: UserActivity;
  genresDistribution: Array<UserGenreDistribution>;
  totalWatched: TotalWatched;
  userId: Scalars['String']['output'];
};


export type UserStatisticsActivityArgs = {
  year: Scalars['Int']['input'];
};

export type UserTokens = {
  __typename?: 'UserTokens';
  accessToken: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
};

export type AnimeLiteFragment = { __typename?: 'Anime', url: string, title: string, episodesAired: number, season: AnimeSeason, episodesCount?: number | null, status: AnimeStatus, ratingMpa: string, totalRating?: number | null, accentColor: string, year: number, type: AnimeType, minimalAge: number, image: { __typename?: 'AnimeImage', cover?: string | null, medium?: string | null }, studios: Array<{ __typename?: 'AnimeStudio', id: string, name: string }>, genres: Array<{ __typename?: 'AnimeGenre', image?: string | null, name: string, id: string }> };

export type CharacterLightFragment = { __typename?: 'AnimeCharacter', id: string, about?: string | null, name: string, nameEn: string, nameKanji?: string | null, image: string, role: CharacterRole };

export type ToggleFavoriteCharacterMutationVariables = Exact<{
  characterId: Scalars['String']['input'];
}>;


export type ToggleFavoriteCharacterMutation = { __typename?: 'Mutation', toggleFavoriteCharacter: { __typename?: 'FavoriteCharacter', userId: string, characterId: string, user: { __typename?: 'User', id: string, name?: string | null }, character: { __typename?: 'Character', id: string } } };

export type AnimeQueryVariables = Exact<{
  url: Scalars['String']['input'];
}>;


export type AnimeQuery = { __typename?: 'Query', anime: { __typename?: 'Anime', accentColor: string, airedOn?: any | null, createdAt: any, description?: string | null, duration?: number | null, episodesAired: number, episodesCount?: number | null, franchise?: string | null, id: string, minimalAge: number, nextEpisode?: any | null, playerLink: string, ratingMpa: string, releasedOn: any, screenshots: Array<string>, season: AnimeSeason, shikimoriId: number, shikimoriRating: number, shikimoriVotes: number, status: AnimeStatus, title: string, totalRating?: number | null, type: AnimeType, updatedAt?: any | null, url: string, year: number, image: { __typename?: 'AnimeImage', medium?: string | null, cover?: string | null, large?: string | null }, studios: Array<{ __typename?: 'AnimeStudio', id: string, name: string }>, genres: Array<{ __typename?: 'AnimeGenre', id: string, image?: string | null, name: string }>, videos: Array<{ __typename?: 'AnimeVideo', id: string, imageUrl?: string | null, name?: string | null, type: AnimeVideoType, playerUrl: string }> } };

export type AnimesQueryVariables = Exact<{
  genres?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  minimalAge?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<AnimeOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  ratingMpa?: InputMaybe<RatingMpa>;
  search?: InputMaybe<Scalars['String']['input']>;
  season?: InputMaybe<AnimeSeason>;
  sort?: InputMaybe<SortOrder>;
  status?: InputMaybe<AnimeStatus>;
  studios?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  translations?: InputMaybe<Array<Scalars['Int']['input']> | Scalars['Int']['input']>;
  type?: InputMaybe<AnimeType>;
  years?: InputMaybe<Array<Scalars['Int']['input']> | Scalars['Int']['input']>;
}>;


export type AnimesQuery = { __typename?: 'Query', animes: { __typename?: 'AnimeConnection', data: Array<{ __typename?: 'Anime', id: string, url: string, title: string, episodesAired: number, season: AnimeSeason, episodesCount?: number | null, status: AnimeStatus, ratingMpa: string, totalRating?: number | null, accentColor: string, year: number, type: AnimeType, minimalAge: number, image: { __typename?: 'AnimeImage', cover?: string | null, medium?: string | null }, studios: Array<{ __typename?: 'AnimeStudio', id: string, name: string }>, genres: Array<{ __typename?: 'AnimeGenre', image?: string | null, name: string, id: string }> }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, page: number } } };

export type CharacterQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type CharacterQuery = { __typename?: 'Query', character: { __typename?: 'Character', about?: string | null, aboutEn?: string | null, id: string, image: string, malId: number, name: string, nameEn: string, nameKanji?: string | null, pictures: Array<string> } };

export type CharactersQueryVariables = Exact<{
  animeUrl: Scalars['String']['input'];
  page: Scalars['Int']['input'];
  role?: InputMaybe<CharacterRole>;
  search?: InputMaybe<Scalars['String']['input']>;
}>;


export type CharactersQuery = { __typename?: 'Query', characters: { __typename?: 'CharacterConnection', data: Array<{ __typename?: 'AnimeCharacter', id: string, about?: string | null, name: string, nameEn: string, nameKanji?: string | null, image: string, role: CharacterRole }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, page: number } } };

export type FavoriteAnimesQueryVariables = Exact<{
  page: Scalars['Int']['input'];
  userId: Scalars['String']['input'];
}>;


export type FavoriteAnimesQuery = { __typename?: 'Query', favoriteAnimes: { __typename?: 'FavoriteAnimeConnection', data: Array<{ __typename?: 'FavoriteAnime', anime: { __typename?: 'Anime', id: string } }> } };

export type FavoriteCharactersQueryVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type FavoriteCharactersQuery = { __typename?: 'Query', favoriteCharacters: { __typename?: 'FavoriteCharacterConnection', data: Array<{ __typename?: 'FavoriteCharacter', characterId: string }> } };

export type ProfileQueryVariables = Exact<{
  login: Scalars['String']['input'];
}>;


export type ProfileQuery = { __typename?: 'Query', profile: { __typename?: 'User', id: string, login: string, googleId?: string | null, vkId?: string | null, name?: string | null, role: UserRole, avatar?: string | null, birthday?: any | null, email?: string | null } };

export type ViewerQueryVariables = Exact<{ [key: string]: never; }>;


export type ViewerQuery = { __typename?: 'Query', viewer: { __typename?: 'User', name?: string | null, role: UserRole, vkId?: string | null, avatar?: string | null, birthday?: any | null, email?: string | null, id: string, googleId?: string | null, login: string } };

export const AnimeLiteFragmentDoc = gql`
    fragment AnimeLite on Anime {
  url
  title
  image {
    cover
    medium
  }
  episodesAired
  studios {
    id
    name
  }
  season
  episodesCount
  genres {
    image
    name
    id
  }
  status
  ratingMpa
  totalRating
  accentColor
  year
  type
  minimalAge
}
    `;
export const CharacterLightFragmentDoc = gql`
    fragment CharacterLight on AnimeCharacter {
  id
  about
  name
  nameEn
  nameKanji
  image
  role
}
    `;
export const ToggleFavoriteCharacterDocument = gql`
    mutation ToggleFavoriteCharacter($characterId: String!) {
  toggleFavoriteCharacter(characterId: $characterId) {
    userId
    user {
      id
      name
    }
    characterId
    character {
      id
    }
  }
}
    `;
export type ToggleFavoriteCharacterMutationFn = Apollo.MutationFunction<ToggleFavoriteCharacterMutation, ToggleFavoriteCharacterMutationVariables>;

/**
 * __useToggleFavoriteCharacterMutation__
 *
 * To run a mutation, you first call `useToggleFavoriteCharacterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleFavoriteCharacterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleFavoriteCharacterMutation, { data, loading, error }] = useToggleFavoriteCharacterMutation({
 *   variables: {
 *      characterId: // value for 'characterId'
 *   },
 * });
 */
export function useToggleFavoriteCharacterMutation(baseOptions?: Apollo.MutationHookOptions<ToggleFavoriteCharacterMutation, ToggleFavoriteCharacterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ToggleFavoriteCharacterMutation, ToggleFavoriteCharacterMutationVariables>(ToggleFavoriteCharacterDocument, options);
      }
export type ToggleFavoriteCharacterMutationHookResult = ReturnType<typeof useToggleFavoriteCharacterMutation>;
export type ToggleFavoriteCharacterMutationResult = Apollo.MutationResult<ToggleFavoriteCharacterMutation>;
export type ToggleFavoriteCharacterMutationOptions = Apollo.BaseMutationOptions<ToggleFavoriteCharacterMutation, ToggleFavoriteCharacterMutationVariables>;
export const AnimeDocument = gql`
    query Anime($url: String!) {
  anime(url: $url) {
    accentColor
    airedOn
    createdAt
    description
    duration
    episodesAired
    episodesCount
    franchise
    id
    image {
      medium
      cover
      large
    }
    studios {
      id
      name
    }
    genres {
      id
      image
      name
    }
    videos {
      id
      imageUrl
      name
      type
      playerUrl
    }
    minimalAge
    nextEpisode
    playerLink
    ratingMpa
    releasedOn
    screenshots
    season
    shikimoriId
    shikimoriRating
    shikimoriVotes
    status
    title
    totalRating
    type
    updatedAt
    url
    year
  }
}
    `;

/**
 * __useAnimeQuery__
 *
 * To run a query within a React component, call `useAnimeQuery` and pass it any options that fit your needs.
 * When your component renders, `useAnimeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAnimeQuery({
 *   variables: {
 *      url: // value for 'url'
 *   },
 * });
 */
export function useAnimeQuery(baseOptions: Apollo.QueryHookOptions<AnimeQuery, AnimeQueryVariables> & ({ variables: AnimeQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AnimeQuery, AnimeQueryVariables>(AnimeDocument, options);
      }
export function useAnimeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AnimeQuery, AnimeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AnimeQuery, AnimeQueryVariables>(AnimeDocument, options);
        }
export function useAnimeSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<AnimeQuery, AnimeQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AnimeQuery, AnimeQueryVariables>(AnimeDocument, options);
        }
export type AnimeQueryHookResult = ReturnType<typeof useAnimeQuery>;
export type AnimeLazyQueryHookResult = ReturnType<typeof useAnimeLazyQuery>;
export type AnimeSuspenseQueryHookResult = ReturnType<typeof useAnimeSuspenseQuery>;
export type AnimeQueryResult = Apollo.QueryResult<AnimeQuery, AnimeQueryVariables>;
export const AnimesDocument = gql`
    query Animes($genres: [String!], $limit: Int, $minimalAge: Int, $order: AnimeOrder, $page: Int, $ratingMpa: RatingMpa, $search: String, $season: AnimeSeason, $sort: SortOrder, $status: AnimeStatus, $studios: [String!], $translations: [Int!], $type: AnimeType, $years: [Int!]) {
  animes(
    genres: $genres
    limit: $limit
    minimalAge: $minimalAge
    order: $order
    page: $page
    ratingMpa: $ratingMpa
    search: $search
    season: $season
    sort: $sort
    status: $status
    studios: $studios
    translations: $translations
    type: $type
    years: $years
  ) {
    data {
      id
      ...AnimeLite
    }
    pageInfo {
      hasNextPage
      page
    }
  }
}
    ${AnimeLiteFragmentDoc}`;

/**
 * __useAnimesQuery__
 *
 * To run a query within a React component, call `useAnimesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAnimesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAnimesQuery({
 *   variables: {
 *      genres: // value for 'genres'
 *      limit: // value for 'limit'
 *      minimalAge: // value for 'minimalAge'
 *      order: // value for 'order'
 *      page: // value for 'page'
 *      ratingMpa: // value for 'ratingMpa'
 *      search: // value for 'search'
 *      season: // value for 'season'
 *      sort: // value for 'sort'
 *      status: // value for 'status'
 *      studios: // value for 'studios'
 *      translations: // value for 'translations'
 *      type: // value for 'type'
 *      years: // value for 'years'
 *   },
 * });
 */
export function useAnimesQuery(baseOptions?: Apollo.QueryHookOptions<AnimesQuery, AnimesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AnimesQuery, AnimesQueryVariables>(AnimesDocument, options);
      }
export function useAnimesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AnimesQuery, AnimesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AnimesQuery, AnimesQueryVariables>(AnimesDocument, options);
        }
export function useAnimesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<AnimesQuery, AnimesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AnimesQuery, AnimesQueryVariables>(AnimesDocument, options);
        }
export type AnimesQueryHookResult = ReturnType<typeof useAnimesQuery>;
export type AnimesLazyQueryHookResult = ReturnType<typeof useAnimesLazyQuery>;
export type AnimesSuspenseQueryHookResult = ReturnType<typeof useAnimesSuspenseQuery>;
export type AnimesQueryResult = Apollo.QueryResult<AnimesQuery, AnimesQueryVariables>;
export const CharacterDocument = gql`
    query Character($id: String!) {
  character(id: $id) {
    about
    aboutEn
    id
    image
    malId
    name
    nameEn
    nameKanji
    pictures
  }
}
    `;

/**
 * __useCharacterQuery__
 *
 * To run a query within a React component, call `useCharacterQuery` and pass it any options that fit your needs.
 * When your component renders, `useCharacterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCharacterQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCharacterQuery(baseOptions: Apollo.QueryHookOptions<CharacterQuery, CharacterQueryVariables> & ({ variables: CharacterQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CharacterQuery, CharacterQueryVariables>(CharacterDocument, options);
      }
export function useCharacterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CharacterQuery, CharacterQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CharacterQuery, CharacterQueryVariables>(CharacterDocument, options);
        }
export function useCharacterSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<CharacterQuery, CharacterQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CharacterQuery, CharacterQueryVariables>(CharacterDocument, options);
        }
export type CharacterQueryHookResult = ReturnType<typeof useCharacterQuery>;
export type CharacterLazyQueryHookResult = ReturnType<typeof useCharacterLazyQuery>;
export type CharacterSuspenseQueryHookResult = ReturnType<typeof useCharacterSuspenseQuery>;
export type CharacterQueryResult = Apollo.QueryResult<CharacterQuery, CharacterQueryVariables>;
export const CharactersDocument = gql`
    query Characters($animeUrl: String!, $page: Int!, $role: CharacterRole, $search: String) {
  characters(animeUrl: $animeUrl, page: $page, role: $role, search: $search) {
    data {
      ...CharacterLight
    }
    pageInfo {
      hasNextPage
      page
    }
  }
}
    ${CharacterLightFragmentDoc}`;

/**
 * __useCharactersQuery__
 *
 * To run a query within a React component, call `useCharactersQuery` and pass it any options that fit your needs.
 * When your component renders, `useCharactersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCharactersQuery({
 *   variables: {
 *      animeUrl: // value for 'animeUrl'
 *      page: // value for 'page'
 *      role: // value for 'role'
 *      search: // value for 'search'
 *   },
 * });
 */
export function useCharactersQuery(baseOptions: Apollo.QueryHookOptions<CharactersQuery, CharactersQueryVariables> & ({ variables: CharactersQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CharactersQuery, CharactersQueryVariables>(CharactersDocument, options);
      }
export function useCharactersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CharactersQuery, CharactersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CharactersQuery, CharactersQueryVariables>(CharactersDocument, options);
        }
export function useCharactersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<CharactersQuery, CharactersQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CharactersQuery, CharactersQueryVariables>(CharactersDocument, options);
        }
export type CharactersQueryHookResult = ReturnType<typeof useCharactersQuery>;
export type CharactersLazyQueryHookResult = ReturnType<typeof useCharactersLazyQuery>;
export type CharactersSuspenseQueryHookResult = ReturnType<typeof useCharactersSuspenseQuery>;
export type CharactersQueryResult = Apollo.QueryResult<CharactersQuery, CharactersQueryVariables>;
export const FavoriteAnimesDocument = gql`
    query FavoriteAnimes($page: Int!, $userId: String!) {
  favoriteAnimes(page: $page, userId: $userId) {
    data {
      anime {
        id
      }
    }
  }
}
    `;

/**
 * __useFavoriteAnimesQuery__
 *
 * To run a query within a React component, call `useFavoriteAnimesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFavoriteAnimesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFavoriteAnimesQuery({
 *   variables: {
 *      page: // value for 'page'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useFavoriteAnimesQuery(baseOptions: Apollo.QueryHookOptions<FavoriteAnimesQuery, FavoriteAnimesQueryVariables> & ({ variables: FavoriteAnimesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FavoriteAnimesQuery, FavoriteAnimesQueryVariables>(FavoriteAnimesDocument, options);
      }
export function useFavoriteAnimesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FavoriteAnimesQuery, FavoriteAnimesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FavoriteAnimesQuery, FavoriteAnimesQueryVariables>(FavoriteAnimesDocument, options);
        }
export function useFavoriteAnimesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FavoriteAnimesQuery, FavoriteAnimesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FavoriteAnimesQuery, FavoriteAnimesQueryVariables>(FavoriteAnimesDocument, options);
        }
export type FavoriteAnimesQueryHookResult = ReturnType<typeof useFavoriteAnimesQuery>;
export type FavoriteAnimesLazyQueryHookResult = ReturnType<typeof useFavoriteAnimesLazyQuery>;
export type FavoriteAnimesSuspenseQueryHookResult = ReturnType<typeof useFavoriteAnimesSuspenseQuery>;
export type FavoriteAnimesQueryResult = Apollo.QueryResult<FavoriteAnimesQuery, FavoriteAnimesQueryVariables>;
export const FavoriteCharactersDocument = gql`
    query FavoriteCharacters($userId: String!) {
  favoriteCharacters(userId: $userId) {
    data {
      characterId
    }
  }
}
    `;

/**
 * __useFavoriteCharactersQuery__
 *
 * To run a query within a React component, call `useFavoriteCharactersQuery` and pass it any options that fit your needs.
 * When your component renders, `useFavoriteCharactersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFavoriteCharactersQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useFavoriteCharactersQuery(baseOptions: Apollo.QueryHookOptions<FavoriteCharactersQuery, FavoriteCharactersQueryVariables> & ({ variables: FavoriteCharactersQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FavoriteCharactersQuery, FavoriteCharactersQueryVariables>(FavoriteCharactersDocument, options);
      }
export function useFavoriteCharactersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FavoriteCharactersQuery, FavoriteCharactersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FavoriteCharactersQuery, FavoriteCharactersQueryVariables>(FavoriteCharactersDocument, options);
        }
export function useFavoriteCharactersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FavoriteCharactersQuery, FavoriteCharactersQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FavoriteCharactersQuery, FavoriteCharactersQueryVariables>(FavoriteCharactersDocument, options);
        }
export type FavoriteCharactersQueryHookResult = ReturnType<typeof useFavoriteCharactersQuery>;
export type FavoriteCharactersLazyQueryHookResult = ReturnType<typeof useFavoriteCharactersLazyQuery>;
export type FavoriteCharactersSuspenseQueryHookResult = ReturnType<typeof useFavoriteCharactersSuspenseQuery>;
export type FavoriteCharactersQueryResult = Apollo.QueryResult<FavoriteCharactersQuery, FavoriteCharactersQueryVariables>;
export const ProfileDocument = gql`
    query Profile($login: String!) {
  profile(login: $login) {
    id
    login
    googleId
    vkId
    name
    role
    avatar
    birthday
    email
  }
}
    `;

/**
 * __useProfileQuery__
 *
 * To run a query within a React component, call `useProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProfileQuery({
 *   variables: {
 *      login: // value for 'login'
 *   },
 * });
 */
export function useProfileQuery(baseOptions: Apollo.QueryHookOptions<ProfileQuery, ProfileQueryVariables> & ({ variables: ProfileQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, options);
      }
export function useProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProfileQuery, ProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, options);
        }
export function useProfileSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ProfileQuery, ProfileQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, options);
        }
export type ProfileQueryHookResult = ReturnType<typeof useProfileQuery>;
export type ProfileLazyQueryHookResult = ReturnType<typeof useProfileLazyQuery>;
export type ProfileSuspenseQueryHookResult = ReturnType<typeof useProfileSuspenseQuery>;
export type ProfileQueryResult = Apollo.QueryResult<ProfileQuery, ProfileQueryVariables>;
export const ViewerDocument = gql`
    query Viewer {
  viewer {
    name
    role
    vkId
    avatar
    birthday
    email
    id
    googleId
    login
  }
}
    `;

/**
 * __useViewerQuery__
 *
 * To run a query within a React component, call `useViewerQuery` and pass it any options that fit your needs.
 * When your component renders, `useViewerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useViewerQuery({
 *   variables: {
 *   },
 * });
 */
export function useViewerQuery(baseOptions?: Apollo.QueryHookOptions<ViewerQuery, ViewerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ViewerQuery, ViewerQueryVariables>(ViewerDocument, options);
      }
export function useViewerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ViewerQuery, ViewerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ViewerQuery, ViewerQueryVariables>(ViewerDocument, options);
        }
export function useViewerSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ViewerQuery, ViewerQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ViewerQuery, ViewerQueryVariables>(ViewerDocument, options);
        }
export type ViewerQueryHookResult = ReturnType<typeof useViewerQuery>;
export type ViewerLazyQueryHookResult = ReturnType<typeof useViewerLazyQuery>;
export type ViewerSuspenseQueryHookResult = ReturnType<typeof useViewerSuspenseQuery>;
export type ViewerQueryResult = Apollo.QueryResult<ViewerQuery, ViewerQueryVariables>;