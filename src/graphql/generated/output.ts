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
  JSON: { input: any; output: any; }
};

export type Anime = {
  __typename?: 'Anime';
  /** Color derived from image color */
  accentColor: Scalars['String']['output'];
  airedOn?: Maybe<Scalars['DateTime']['output']>;
  animeListEntry?: Maybe<AnimeListEntry>;
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
  /** Средний рейтинг аниме */
  rating: Scalars['Float']['output'];
  /** Кол-во оценок аниме */
  ratingCount: Scalars['Int']['output'];
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
  type: AnimeType;
  /** Date of last anime update (any data) */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Unique anime url derived from anime title */
  url: Scalars['String']['output'];
  userRating?: Maybe<AnimeRating>;
  videos: Array<AnimeVideo>;
  /** Year of release */
  year: Scalars['Int']['output'];
};


export type AnimeAnimeListEntryArgs = {
  userId?: InputMaybe<Scalars['String']['input']>;
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


export type AnimeUserRatingArgs = {
  userId?: InputMaybe<Scalars['String']['input']>;
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
  createdAt: Scalars['DateTime']['output'];
  dislikes: AnimeCommentDislikeConnection;
  html: Scalars['String']['output'];
  id: Scalars['String']['output'];
  json: Scalars['String']['output'];
  likes: AnimeCommentLikeConnection;
  parent?: Maybe<AnimeComment>;
  parentId?: Maybe<Scalars['String']['output']>;
  text: Scalars['String']['output'];
  verified: Scalars['Boolean']['output'];
};


export type AnimeCommentDislikesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
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

export type AnimeCommentDislike = {
  __typename?: 'AnimeCommentDislike';
  animeCommentId: Scalars['String']['output'];
  comment: AnimeComment;
  createdAt: Scalars['DateTime']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type AnimeCommentDislikeConnection = {
  __typename?: 'AnimeCommentDislikeConnection';
  data: Array<AnimeCommentDislike>;
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
  list: Array<AnimeListEntry>;
  userId: Scalars['String']['output'];
};

export type AnimeListEntry = {
  __typename?: 'AnimeListEntry';
  anime: Anime;
  animeId: Scalars['String']['output'];
  endedAt?: Maybe<Scalars['DateTime']['output']>;
  episodesWatched?: Maybe<Scalars['Int']['output']>;
  id: Scalars['String']['output'];
  rating?: Maybe<AnimeRating>;
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
  id: Scalars['ID']['output'];
  rating: Scalars['Int']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type AnimeRatingDistribution = {
  __typename?: 'AnimeRatingDistribution';
  anime: Anime;
  animeId: Scalars['String']['output'];
  scores: Array<AnimeRatingDistributionScore>;
  total: Scalars['Int']['output'];
};

export type AnimeRatingDistributionScore = {
  __typename?: 'AnimeRatingDistributionScore';
  score: Scalars['Int']['output'];
  votes: Scalars['Int']['output'];
};

export type AnimeSchedule = {
  __typename?: 'AnimeSchedule';
  anime: Anime;
  animeId: Scalars['String']['output'];
  dayOfWeek: DayOfWeek;
  nextEpisodeDate: Scalars['DateTime']['output'];
  previousEpisodeDate: Scalars['DateTime']['output'];
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
  isFavorite?: Maybe<Scalars['Boolean']['output']>;
  malId: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  nameEn: Scalars['String']['output'];
  nameKanji?: Maybe<Scalars['String']['output']>;
  pictures: Array<Scalars['String']['output']>;
};


export type CharacterIsFavoriteArgs = {
  userId?: InputMaybe<Scalars['String']['input']>;
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

export const DayOfWeek = {
  FRIDAY: 'FRIDAY',
  MONDAY: 'MONDAY',
  SATURDAY: 'SATURDAY',
  SUNDAY: 'SUNDAY',
  THURSDAY: 'THURSDAY',
  TUESDAY: 'TUESDAY',
  WEDNESDAY: 'WEDNESDAY'
} as const;

export type DayOfWeek = typeof DayOfWeek[keyof typeof DayOfWeek];
export type Episode = {
  __typename?: 'Episode';
  /** Episode air date */
  aired?: Maybe<Scalars['DateTime']['output']>;
  animeId: Scalars['String']['output'];
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
  progress?: Maybe<EpisodeProgress>;
  /** Episode is a recap */
  recap: Scalars['Boolean']['output'];
  /** Episode title in russian */
  title: Scalars['String']['output'];
  /** Episode title in english */
  titleEn: Scalars['String']['output'];
  /** Available translations for episode */
  translations: Array<EpisodeTranslation>;
};


export type EpisodeProgressArgs = {
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type EpisodeConnection = {
  __typename?: 'EpisodeConnection';
  data: Array<Episode>;
  pageInfo: PageInfo;
};

export type EpisodeHistory = {
  __typename?: 'EpisodeHistory';
  aired: Scalars['DateTime']['output'];
  isUpcoming: Scalars['Boolean']['output'];
  number: Scalars['Int']['output'];
  title: Scalars['String']['output'];
};

export const EpisodeOrder = {
  AIRED: 'AIRED',
  NUMBER: 'NUMBER'
} as const;

export type EpisodeOrder = typeof EpisodeOrder[keyof typeof EpisodeOrder];
export type EpisodeProgress = {
  __typename?: 'EpisodeProgress';
  animeId: Scalars['String']['output'];
  episodeId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  /** Текущее время просмотра в секундах */
  timing: Scalars['Int']['output'];
  userId: Scalars['String']['output'];
};

/** Озвучка конкретного эпизода */
export type EpisodeTranslation = {
  __typename?: 'EpisodeTranslation';
  id: Scalars['String']['output'];
  /** Ссылка на iframe кодика */
  kodikPlayerLink: Scalars['String']['output'];
  /** Название студии озвучки */
  title: Scalars['String']['output'];
  translationId: Scalars['Int']['output'];
  /** Тип студии озвучки */
  type: TranslationType;
};

export type FavoriteAnime = {
  __typename?: 'FavoriteAnime';
  anime: Anime;
  animeId: Scalars['String']['output'];
  count: Scalars['Int']['output'];
  user: User;
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
  count: Scalars['Int']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type FavoriteCharacterConnection = {
  __typename?: 'FavoriteCharacterConnection';
  data: Array<FavoriteCharacter>;
  pageInfo: PageInfo;
};

export type Friendship = {
  __typename?: 'Friendship';
  createdAt: Scalars['DateTime']['output'];
  friend: User;
  /** ID друга */
  friendId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  /** Статус заявки в друзья */
  status: FriendshipStatus;
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  /** ID пользователя, который отправил запрос на дружбу */
  userId: Scalars['String']['output'];
};

export const FriendshipStatus = {
  ACCEPTED: 'ACCEPTED',
  PENDING: 'PENDING',
  REJECTED: 'REJECTED'
} as const;

export type FriendshipStatus = typeof FriendshipStatus[keyof typeof FriendshipStatus];
export type FriendshipsConnection = {
  __typename?: 'FriendshipsConnection';
  data: Array<Friendship>;
  pageInfo: PageInfo;
};

export type LastWatchedEpisode = {
  __typename?: 'LastWatchedEpisode';
  anime: Anime;
  animeId: Scalars['String']['output'];
  episode: Episode;
  /** ID последней просмотренной серии */
  episodeId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  /** ID выбранной озвучки */
  translationId: Scalars['Int']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type LastWatchedEpisodeConnection = {
  __typename?: 'LastWatchedEpisodeConnection';
  data: Array<LastWatchedEpisode>;
  pageInfo: PageInfo;
};

export type Login = {
  __typename?: 'Login';
  tokens: UserTokens;
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  acceptFriendInvite: Friendship;
  addFriend: Friendship;
  createAnimeComment: AnimeComment;
  login: Login;
  refreshTokens: UserTokens;
  rejectFriendInvite: Friendship;
  removeAnimeComment: AnimeComment;
  removeAnimeListEntry: AnimeListEntry;
  removeAnimeRating: AnimeRating;
  removeFriend: Friendship;
  removeUserAbout: UserAbout;
  saveAnimeListEntry: AnimeListEntry;
  saveAnimeRating: AnimeRating;
  saveEpisodeProgress: EpisodeProgress;
  saveLastWatchedEpisode: LastWatchedEpisode;
  saveUserAbout: UserAbout;
  /** Запрос для установки длительности серии через kodik */
  setEpisodeDuration: Episode;
  signup: Signup;
  toggleAnimeCommentDislike: AnimeCommentDislike;
  toggleAnimeCommentLike: AnimeCommentLike;
  toggleFavoriteAnime: FavoriteAnime;
  toggleFavoriteCharacter: FavoriteCharacter;
  updateAnimeComment: AnimeComment;
  updateUserLastSeen: User;
};


export type MutationAcceptFriendInviteArgs = {
  friendshipId: Scalars['ID']['input'];
};


export type MutationAddFriendArgs = {
  friendId: Scalars['ID']['input'];
};


export type MutationCreateAnimeCommentArgs = {
  animeId: Scalars['String']['input'];
  html: Scalars['String']['input'];
  json: Scalars['String']['input'];
  parentCommentId?: InputMaybe<Scalars['String']['input']>;
  text: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationRefreshTokensArgs = {
  refreshToken: Scalars['String']['input'];
};


export type MutationRejectFriendInviteArgs = {
  friendshipId: Scalars['ID']['input'];
};


export type MutationRemoveAnimeCommentArgs = {
  id: Scalars['String']['input'];
};


export type MutationRemoveAnimeListEntryArgs = {
  animeUrl: Scalars['String']['input'];
};


export type MutationRemoveAnimeRatingArgs = {
  animeId: Scalars['String']['input'];
};


export type MutationRemoveFriendArgs = {
  friendshipId: Scalars['ID']['input'];
};


export type MutationSaveAnimeListEntryArgs = {
  animeUrl: Scalars['String']['input'];
  endedAt?: InputMaybe<Scalars['DateTime']['input']>;
  episodesWatched?: InputMaybe<Scalars['Int']['input']>;
  startedAt?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<AnimeListStatus>;
};


export type MutationSaveAnimeRatingArgs = {
  animeId: Scalars['String']['input'];
  rating: Scalars['Int']['input'];
};


export type MutationSaveEpisodeProgressArgs = {
  animeId: Scalars['String']['input'];
  episodeId: Scalars['String']['input'];
  timing: Scalars['Int']['input'];
};


export type MutationSaveLastWatchedEpisodeArgs = {
  animeId: Scalars['String']['input'];
  episodeId: Scalars['String']['input'];
  translationId: Scalars['Int']['input'];
};


export type MutationSaveUserAboutArgs = {
  html: Scalars['String']['input'];
  json: Scalars['JSON']['input'];
  text: Scalars['String']['input'];
};


export type MutationSetEpisodeDurationArgs = {
  duration: Scalars['Int']['input'];
  episodeId: Scalars['String']['input'];
};


export type MutationSignupArgs = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  banner?: InputMaybe<Scalars['String']['input']>;
  birthday?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  login: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationToggleAnimeCommentDislikeArgs = {
  animeCommentId: Scalars['String']['input'];
};


export type MutationToggleAnimeCommentLikeArgs = {
  animeCommentId: Scalars['String']['input'];
};


export type MutationToggleFavoriteAnimeArgs = {
  animeUrl: Scalars['String']['input'];
};


export type MutationToggleFavoriteCharacterArgs = {
  characterId: Scalars['String']['input'];
};


export type MutationUpdateAnimeCommentArgs = {
  commentId: Scalars['String']['input'];
  html: Scalars['String']['input'];
  json: Scalars['String']['input'];
  text: Scalars['String']['input'];
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
  animeCommentDislikes: AnimeCommentDislikeConnection;
  animeCommentLikes: AnimeCommentLikeConnection;
  animeComments: AnimeCommentConnection;
  animeFranchise: AnimeFranchise;
  animeFranchises: AnimeFranchiseConnection;
  animeList: AnimeList;
  animeRating: AnimeRating;
  animeRatingDistribution: AnimeRatingDistribution;
  animeSchedules: Array<AnimeSchedule>;
  animeYears: AnimeYears;
  animes: AnimeConnection;
  character: Character;
  characters: CharacterConnection;
  episode: Episode;
  episodeProgress: EpisodeProgress;
  episodeTranslations: Array<EpisodeTranslation>;
  episodes: EpisodeConnection;
  episodesHistory: Array<EpisodeHistory>;
  favoriteAnimes: FavoriteAnimeConnection;
  favoriteCharacters: FavoriteCharacterConnection;
  friendships: FriendshipsConnection;
  genre: AnimeGenre;
  genres: Array<AnimeGenre>;
  lastWatchedEpisode?: Maybe<LastWatchedEpisode>;
  lastWatchedEpisodes?: Maybe<LastWatchedEpisodeConnection>;
  profile: User;
  randomAnimes: Array<Anime>;
  relatedAnimes: RelatedAnimeConnection;
  similarAnimes: AnimeConnection;
  studio: AnimeStudio;
  studios: Array<AnimeStudio>;
  translations: Array<Translation>;
  user: User;
  userStatistics: UserStatistics;
  users: UserConnection;
  viewer: User;
};


export type QueryAnimeArgs = {
  url: Scalars['String']['input'];
};


export type QueryAnimeCommentArgs = {
  id: Scalars['String']['input'];
};


export type QueryAnimeCommentDislikesArgs = {
  animeCommentId?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
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
  status?: InputMaybe<AnimeListStatus>;
  userId: Scalars['String']['input'];
};


export type QueryAnimeRatingArgs = {
  animeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};


export type QueryAnimeRatingDistributionArgs = {
  animeId: Scalars['String']['input'];
};


export type QueryAnimeSchedulesArgs = {
  dayOfWeek?: InputMaybe<DayOfWeek>;
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
  id?: InputMaybe<Scalars['String']['input']>;
  malId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCharactersArgs = {
  animeUrl?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  role?: InputMaybe<CharacterRole>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryEpisodeArgs = {
  episodeId: Scalars['String']['input'];
};


export type QueryEpisodeProgressArgs = {
  animeId: Scalars['String']['input'];
  episodeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};


export type QueryEpisodeTranslationsArgs = {
  episodeId: Scalars['String']['input'];
};


export type QueryEpisodesArgs = {
  animeUrl: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<EpisodeOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortOrder>;
};


export type QueryEpisodesHistoryArgs = {
  animeUrl: Scalars['String']['input'];
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


export type QueryFriendshipsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  status?: FriendshipStatus;
  userId: Scalars['String']['input'];
};


export type QueryLastWatchedEpisodeArgs = {
  animeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};


export type QueryLastWatchedEpisodesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['String']['input'];
};


export type QueryProfileArgs = {
  login: Scalars['String']['input'];
};


export type QueryRandomAnimesArgs = {
  count?: InputMaybe<Scalars['Int']['input']>;
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


export type QueryStudioArgs = {
  id: Scalars['String']['input'];
};


export type QueryUserArgs = {
  id: Scalars['String']['input'];
};


export type QueryUserStatisticsArgs = {
  userId: Scalars['String']['input'];
};


export type QueryUsersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export const RatingMpa = {
  G: 'G',
  PG: 'PG',
  PG_13: 'PG_13',
  R: 'R',
  R_PLUS: 'R_PLUS'
} as const;

export type RatingMpa = typeof RatingMpa[keyof typeof RatingMpa];
export type RelatedAnime = {
  __typename?: 'RelatedAnime';
  anime: Anime;
  type: Scalars['String']['output'];
};

export type RelatedAnimeConnection = {
  __typename?: 'RelatedAnimeConnection';
  data: Array<RelatedAnime>;
  pageInfo: PageInfo;
};

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
export type TotalStatistics = {
  __typename?: 'TotalStatistics';
  totalActivity: Scalars['Int']['output'];
  totalWatchedAnimes: Scalars['Int']['output'];
  totalWatchedEpisodes: Scalars['Int']['output'];
  totalWatchedSeconds: Scalars['Int']['output'];
};

/** Студия озвучки аниме */
export type Translation = {
  __typename?: 'Translation';
  /** ID Студия озвучки */
  id: Scalars['Int']['output'];
  /** Название студии озвучки */
  title: Scalars['String']['output'];
  /** Тип студии озвучки */
  type: TranslationType;
};

export const TranslationType = {
  SUB: 'SUB',
  VOICE: 'VOICE'
} as const;

export type TranslationType = typeof TranslationType[keyof typeof TranslationType];
export type User = {
  __typename?: 'User';
  about?: Maybe<UserAbout>;
  animeComments: AnimeCommentConnection;
  animeList: AnimeList;
  avatar?: Maybe<Scalars['String']['output']>;
  banner?: Maybe<Scalars['String']['output']>;
  birthday?: Maybe<Scalars['DateTime']['output']>;
  createdAt: Scalars['DateTime']['output'];
  email?: Maybe<Scalars['String']['output']>;
  favoriteAnimes: FavoriteAnimeConnection;
  favoriteCharacters: FavoriteCharacterConnection;
  googleId?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  isOnline: Scalars['Boolean']['output'];
  lastSeen: Scalars['DateTime']['output'];
  login: Scalars['String']['output'];
  name: Scalars['String']['output'];
  role: UserRole;
  statistics: UserStatistics;
  updatedAt: Scalars['DateTime']['output'];
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

export type UserAbout = {
  __typename?: 'UserAbout';
  html: Scalars['String']['output'];
  id: Scalars['String']['output'];
  json: Scalars['JSON']['output'];
  text: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type UserActivity = {
  __typename?: 'UserActivity';
  days: Array<DayActivity>;
  user: User;
  userId: Scalars['String']['output'];
};

export type UserConnection = {
  __typename?: 'UserConnection';
  data: Array<User>;
  pageInfo: PageInfo;
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
  total: TotalStatistics;
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

export type AnimeLiteFragment = { __typename?: 'Anime', id: string, url: string, title: string, episodesAired: number, season: AnimeSeason, episodesCount?: number | null, status: AnimeStatus, ratingMpa: string, rating: number, accentColor: string, year: number, type: AnimeType, minimalAge: number, image: { __typename?: 'AnimeImage', cover?: string | null, medium?: string | null }, studios: Array<{ __typename?: 'AnimeStudio', id: string, name: string }>, genres: Array<{ __typename?: 'AnimeGenre', image?: string | null, name: string, id: string }>, userRating?: { __typename?: 'AnimeRating', id: string, rating: number } | null, animeListEntry?: { __typename?: 'AnimeListEntry', id: string, status: AnimeListStatus } | null };

export type CharacterLightFragment = { __typename?: 'AnimeCharacter', id: string, about?: string | null, name: string, nameEn: string, nameKanji?: string | null, image: string, role: CharacterRole };

export type UserAboutFragment = { __typename?: 'UserAbout', id: string, html: string, json: any, text: string };

export type ViewerFragment = { __typename?: 'User', name: string, banner?: string | null, role: UserRole, vkId?: string | null, avatar?: string | null, birthday?: any | null, email?: string | null, id: string, googleId?: string | null, login: string, lastSeen: any, isOnline: boolean, about?: { __typename?: 'UserAbout', id: string, html: string, json: any, text: string } | null };

export type AcceptFriendInviteMutationVariables = Exact<{
  friendshipId: Scalars['ID']['input'];
}>;


export type AcceptFriendInviteMutation = { __typename?: 'Mutation', acceptFriendInvite: { __typename?: 'Friendship', id: string, status: FriendshipStatus, friendId: string, userId: string, user: { __typename?: 'User', id: string, name: string, avatar?: string | null, login: string, role: UserRole, banner?: string | null, createdAt: any, statistics: { __typename?: 'UserStatistics', total: { __typename?: 'TotalStatistics', totalActivity: number, totalWatchedAnimes: number, totalWatchedEpisodes: number, totalWatchedSeconds: number } } }, friend: { __typename?: 'User', id: string, name: string, avatar?: string | null, login: string, role: UserRole, banner?: string | null, createdAt: any, statistics: { __typename?: 'UserStatistics', total: { __typename?: 'TotalStatistics', totalActivity: number, totalWatchedAnimes: number, totalWatchedEpisodes: number, totalWatchedSeconds: number } } } } };

export type FriendshipFragment = { __typename?: 'Friendship', id: string, status: FriendshipStatus, friendId: string, userId: string, user: { __typename?: 'User', id: string, name: string, avatar?: string | null, login: string, role: UserRole, banner?: string | null, createdAt: any, statistics: { __typename?: 'UserStatistics', total: { __typename?: 'TotalStatistics', totalActivity: number, totalWatchedAnimes: number, totalWatchedEpisodes: number, totalWatchedSeconds: number } } }, friend: { __typename?: 'User', id: string, name: string, avatar?: string | null, login: string, role: UserRole, banner?: string | null, createdAt: any, statistics: { __typename?: 'UserStatistics', total: { __typename?: 'TotalStatistics', totalActivity: number, totalWatchedAnimes: number, totalWatchedEpisodes: number, totalWatchedSeconds: number } } } };

export type AddFriendMutationVariables = Exact<{
  friendId: Scalars['ID']['input'];
}>;


export type AddFriendMutation = { __typename?: 'Mutation', addFriend: { __typename?: 'Friendship', id: string, status: FriendshipStatus, friendId: string, userId: string, user: { __typename?: 'User', id: string, name: string, avatar?: string | null, login: string, role: UserRole, banner?: string | null, createdAt: any, statistics: { __typename?: 'UserStatistics', total: { __typename?: 'TotalStatistics', totalActivity: number, totalWatchedAnimes: number, totalWatchedEpisodes: number, totalWatchedSeconds: number } } }, friend: { __typename?: 'User', id: string, name: string, avatar?: string | null, login: string, role: UserRole, banner?: string | null, createdAt: any, statistics: { __typename?: 'UserStatistics', total: { __typename?: 'TotalStatistics', totalActivity: number, totalWatchedAnimes: number, totalWatchedEpisodes: number, totalWatchedSeconds: number } } } } };

export type CreateAnimeCommentMutationVariables = Exact<{
  animeId: Scalars['String']['input'];
  json: Scalars['String']['input'];
  text: Scalars['String']['input'];
  html: Scalars['String']['input'];
  parentCommentId?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateAnimeCommentMutation = { __typename?: 'Mutation', createAnimeComment: { __typename?: 'AnimeComment', id: string, createdAt: any, text: string, html: string, json: string, animeId: string, likes: { __typename?: 'AnimeCommentLikeConnection', data: Array<{ __typename?: 'AnimeCommentLike', userId: string }>, pageInfo: { __typename?: 'PageInfo', totalCount: number } }, dislikes: { __typename?: 'AnimeCommentDislikeConnection', data: Array<{ __typename?: 'AnimeCommentDislike', userId: string }>, pageInfo: { __typename?: 'PageInfo', totalCount: number } }, author: { __typename?: 'User', role: UserRole, name: string, avatar?: string | null, login: string }, parent?: { __typename?: 'AnimeComment', id: string, author: { __typename?: 'User', name: string } } | null, children: Array<{ __typename?: 'AnimeComment', id: string, createdAt: any, text: string, html: string, json: string, animeId: string, likes: { __typename?: 'AnimeCommentLikeConnection', data: Array<{ __typename?: 'AnimeCommentLike', userId: string }>, pageInfo: { __typename?: 'PageInfo', totalCount: number } }, dislikes: { __typename?: 'AnimeCommentDislikeConnection', data: Array<{ __typename?: 'AnimeCommentDislike', userId: string }>, pageInfo: { __typename?: 'PageInfo', totalCount: number } }, parent?: { __typename?: 'AnimeComment', id: string, author: { __typename?: 'User', name: string } } | null, author: { __typename?: 'User', role: UserRole, name: string, avatar?: string | null, login: string } }> } };

export type LoginMutationVariables = Exact<{
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'Login', tokens: { __typename?: 'UserTokens', accessToken: string, refreshToken: string }, user: { __typename?: 'User', name: string, banner?: string | null, role: UserRole, vkId?: string | null, avatar?: string | null, birthday?: any | null, email?: string | null, id: string, googleId?: string | null, login: string, lastSeen: any, isOnline: boolean, about?: { __typename?: 'UserAbout', id: string, html: string, json: any, text: string } | null } } };

export type UserTokensFragment = { __typename?: 'UserTokens', accessToken: string, refreshToken: string };

export type RefreshTokensMutationVariables = Exact<{
  refreshToken: Scalars['String']['input'];
}>;


export type RefreshTokensMutation = { __typename?: 'Mutation', refreshTokens: { __typename?: 'UserTokens', accessToken: string, refreshToken: string } };

export type RejectFriendInviteMutationVariables = Exact<{
  friendshipId: Scalars['ID']['input'];
}>;


export type RejectFriendInviteMutation = { __typename?: 'Mutation', rejectFriendInvite: { __typename?: 'Friendship', id: string, status: FriendshipStatus, friendId: string, userId: string, user: { __typename?: 'User', id: string, name: string, avatar?: string | null, login: string, role: UserRole, banner?: string | null, createdAt: any, statistics: { __typename?: 'UserStatistics', total: { __typename?: 'TotalStatistics', totalActivity: number, totalWatchedAnimes: number, totalWatchedEpisodes: number, totalWatchedSeconds: number } } }, friend: { __typename?: 'User', id: string, name: string, avatar?: string | null, login: string, role: UserRole, banner?: string | null, createdAt: any, statistics: { __typename?: 'UserStatistics', total: { __typename?: 'TotalStatistics', totalActivity: number, totalWatchedAnimes: number, totalWatchedEpisodes: number, totalWatchedSeconds: number } } } } };

export type RemoveAnimeListEntryMutationVariables = Exact<{
  animeUrl: Scalars['String']['input'];
}>;


export type RemoveAnimeListEntryMutation = { __typename?: 'Mutation', removeAnimeListEntry: { __typename?: 'AnimeListEntry', id: string } };

export type RemoveUserAboutMutationVariables = Exact<{ [key: string]: never; }>;


export type RemoveUserAboutMutation = { __typename?: 'Mutation', removeUserAbout: { __typename?: 'UserAbout', id: string, html: string, json: any, text: string } };

export type SaveAnimeListEntryMutationVariables = Exact<{
  animeUrl: Scalars['String']['input'];
  endedAt?: InputMaybe<Scalars['DateTime']['input']>;
  episodesWatched?: InputMaybe<Scalars['Int']['input']>;
  startedAt?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<AnimeListStatus>;
}>;


export type SaveAnimeListEntryMutation = { __typename?: 'Mutation', saveAnimeListEntry: { __typename?: 'AnimeListEntry', id: string, userId: string, animeId: string, endedAt?: any | null, episodesWatched?: number | null, startedAt?: any | null, updatedAt: any, status: AnimeListStatus, anime: { __typename?: 'Anime', id: string, url: string, title: string, episodesAired: number, season: AnimeSeason, episodesCount?: number | null, status: AnimeStatus, ratingMpa: string, rating: number, accentColor: string, year: number, type: AnimeType, minimalAge: number, image: { __typename?: 'AnimeImage', cover?: string | null, medium?: string | null }, studios: Array<{ __typename?: 'AnimeStudio', id: string, name: string }>, genres: Array<{ __typename?: 'AnimeGenre', image?: string | null, name: string, id: string }>, userRating?: { __typename?: 'AnimeRating', id: string, rating: number } | null, animeListEntry?: { __typename?: 'AnimeListEntry', id: string, status: AnimeListStatus } | null }, rating?: { __typename?: 'AnimeRating', id: string, rating: number } | null } };

export type SaveAnimeRatingMutationVariables = Exact<{
  animeId: Scalars['String']['input'];
  rating: Scalars['Int']['input'];
}>;


export type SaveAnimeRatingMutation = { __typename?: 'Mutation', saveAnimeRating: { __typename?: 'AnimeRating', id: string, rating: number } };

export type SaveEpisodeProgressMutationVariables = Exact<{
  animeId: Scalars['String']['input'];
  episodeId: Scalars['String']['input'];
  timing: Scalars['Int']['input'];
}>;


export type SaveEpisodeProgressMutation = { __typename?: 'Mutation', saveEpisodeProgress: { __typename?: 'EpisodeProgress', animeId: string, episodeId: string, id: string, userId: string, timing: number } };

export type SaveLastWatchedEpisodeMutationVariables = Exact<{
  animeId: Scalars['String']['input'];
  episodeId: Scalars['String']['input'];
  translationId: Scalars['Int']['input'];
}>;


export type SaveLastWatchedEpisodeMutation = { __typename?: 'Mutation', saveLastWatchedEpisode: { __typename?: 'LastWatchedEpisode', id: string, animeId: string, episodeId: string, translationId: number, userId: string } };

export type SaveUserAboutMutationVariables = Exact<{
  html: Scalars['String']['input'];
  json: Scalars['JSON']['input'];
  text: Scalars['String']['input'];
}>;


export type SaveUserAboutMutation = { __typename?: 'Mutation', saveUserAbout: { __typename?: 'UserAbout', id: string, html: string, json: any, text: string } };

export type SetEpisodeDurationMutationVariables = Exact<{
  episodeId: Scalars['String']['input'];
  duration: Scalars['Int']['input'];
}>;


export type SetEpisodeDurationMutation = { __typename?: 'Mutation', setEpisodeDuration: { __typename?: 'Episode', id: string, duration?: number | null } };

export type SignupMutationVariables = Exact<{
  email: Scalars['String']['input'];
  login: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  avatar?: InputMaybe<Scalars['String']['input']>;
  banner?: InputMaybe<Scalars['String']['input']>;
  birthday?: InputMaybe<Scalars['DateTime']['input']>;
}>;


export type SignupMutation = { __typename?: 'Mutation', signup: { __typename?: 'Signup', user: { __typename?: 'User', name: string, banner?: string | null, role: UserRole, vkId?: string | null, avatar?: string | null, birthday?: any | null, email?: string | null, id: string, googleId?: string | null, login: string, lastSeen: any, isOnline: boolean, about?: { __typename?: 'UserAbout', id: string, html: string, json: any, text: string } | null }, tokens: { __typename?: 'UserTokens', accessToken: string, refreshToken: string } } };

export type ToggleAnimeCommentDislikeMutationVariables = Exact<{
  animeCommentId: Scalars['String']['input'];
}>;


export type ToggleAnimeCommentDislikeMutation = { __typename?: 'Mutation', toggleAnimeCommentDislike: { __typename?: 'AnimeCommentDislike', animeCommentId: string, userId: string } };

export type ToggleAnimeCommentLikeMutationVariables = Exact<{
  animeCommentId: Scalars['String']['input'];
}>;


export type ToggleAnimeCommentLikeMutation = { __typename?: 'Mutation', toggleAnimeCommentLike: { __typename?: 'AnimeCommentLike', animeCommentId: string, userId: string } };

export type ToggleFavoriteAnimeMutationVariables = Exact<{
  animeUrl: Scalars['String']['input'];
}>;


export type ToggleFavoriteAnimeMutation = { __typename?: 'Mutation', toggleFavoriteAnime: { __typename?: 'FavoriteAnime', userId: string, animeId: string, anime: { __typename?: 'Anime', id: string }, user: { __typename?: 'User', id: string } } };

export type ToggleFavoriteCharacterMutationVariables = Exact<{
  characterId: Scalars['String']['input'];
}>;


export type ToggleFavoriteCharacterMutation = { __typename?: 'Mutation', toggleFavoriteCharacter: { __typename?: 'FavoriteCharacter', userId: string, characterId: string, user: { __typename?: 'User', id: string }, character: { __typename?: 'Character', id: string } } };

export type UpdateUserLastSeenMutationVariables = Exact<{ [key: string]: never; }>;


export type UpdateUserLastSeenMutation = { __typename?: 'Mutation', updateUserLastSeen: { __typename?: 'User', id: string, lastSeen: any } };

export type AnimeCommentFragment = { __typename?: 'AnimeComment', id: string, createdAt: any, text: string, html: string, json: string, animeId: string, likes: { __typename?: 'AnimeCommentLikeConnection', data: Array<{ __typename?: 'AnimeCommentLike', userId: string }>, pageInfo: { __typename?: 'PageInfo', totalCount: number } }, dislikes: { __typename?: 'AnimeCommentDislikeConnection', data: Array<{ __typename?: 'AnimeCommentDislike', userId: string }>, pageInfo: { __typename?: 'PageInfo', totalCount: number } }, author: { __typename?: 'User', role: UserRole, name: string, avatar?: string | null, login: string }, parent?: { __typename?: 'AnimeComment', id: string, author: { __typename?: 'User', name: string } } | null, children: Array<{ __typename?: 'AnimeComment', id: string, createdAt: any, text: string, html: string, json: string, animeId: string, likes: { __typename?: 'AnimeCommentLikeConnection', data: Array<{ __typename?: 'AnimeCommentLike', userId: string }>, pageInfo: { __typename?: 'PageInfo', totalCount: number } }, dislikes: { __typename?: 'AnimeCommentDislikeConnection', data: Array<{ __typename?: 'AnimeCommentDislike', userId: string }>, pageInfo: { __typename?: 'PageInfo', totalCount: number } }, parent?: { __typename?: 'AnimeComment', id: string, author: { __typename?: 'User', name: string } } | null, author: { __typename?: 'User', role: UserRole, name: string, avatar?: string | null, login: string } }> };

export type AnimeCommentsQueryVariables = Exact<{
  animeId: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
}>;


export type AnimeCommentsQuery = { __typename?: 'Query', animeComments: { __typename?: 'AnimeCommentConnection', data: Array<{ __typename?: 'AnimeComment', id: string, createdAt: any, text: string, html: string, json: string, animeId: string, likes: { __typename?: 'AnimeCommentLikeConnection', data: Array<{ __typename?: 'AnimeCommentLike', userId: string }>, pageInfo: { __typename?: 'PageInfo', totalCount: number } }, dislikes: { __typename?: 'AnimeCommentDislikeConnection', data: Array<{ __typename?: 'AnimeCommentDislike', userId: string }>, pageInfo: { __typename?: 'PageInfo', totalCount: number } }, author: { __typename?: 'User', role: UserRole, name: string, avatar?: string | null, login: string }, parent?: { __typename?: 'AnimeComment', id: string, author: { __typename?: 'User', name: string } } | null, children: Array<{ __typename?: 'AnimeComment', id: string, createdAt: any, text: string, html: string, json: string, animeId: string, likes: { __typename?: 'AnimeCommentLikeConnection', data: Array<{ __typename?: 'AnimeCommentLike', userId: string }>, pageInfo: { __typename?: 'PageInfo', totalCount: number } }, dislikes: { __typename?: 'AnimeCommentDislikeConnection', data: Array<{ __typename?: 'AnimeCommentDislike', userId: string }>, pageInfo: { __typename?: 'PageInfo', totalCount: number } }, parent?: { __typename?: 'AnimeComment', id: string, author: { __typename?: 'User', name: string } } | null, author: { __typename?: 'User', role: UserRole, name: string, avatar?: string | null, login: string } }> }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, page: number } } };

export type AnimeGenreFragment = { __typename?: 'AnimeGenre', id: string, name: string, image?: string | null };

export type AnimeGenresQueryVariables = Exact<{ [key: string]: never; }>;


export type AnimeGenresQuery = { __typename?: 'Query', genres: Array<{ __typename?: 'AnimeGenre', id: string, name: string, image?: string | null }> };

export type AnimeListEntryFragment = { __typename?: 'AnimeListEntry', id: string, userId: string, animeId: string, endedAt?: any | null, episodesWatched?: number | null, startedAt?: any | null, updatedAt: any, status: AnimeListStatus, anime: { __typename?: 'Anime', id: string, url: string, title: string, episodesAired: number, season: AnimeSeason, episodesCount?: number | null, status: AnimeStatus, ratingMpa: string, rating: number, accentColor: string, year: number, type: AnimeType, minimalAge: number, image: { __typename?: 'AnimeImage', cover?: string | null, medium?: string | null }, studios: Array<{ __typename?: 'AnimeStudio', id: string, name: string }>, genres: Array<{ __typename?: 'AnimeGenre', image?: string | null, name: string, id: string }>, userRating?: { __typename?: 'AnimeRating', id: string, rating: number } | null, animeListEntry?: { __typename?: 'AnimeListEntry', id: string, status: AnimeListStatus } | null }, rating?: { __typename?: 'AnimeRating', id: string, rating: number } | null };

export type AnimeListQueryVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type AnimeListQuery = { __typename?: 'Query', animeList: { __typename?: 'AnimeList', list: Array<{ __typename?: 'AnimeListEntry', id: string, userId: string, animeId: string, endedAt?: any | null, episodesWatched?: number | null, startedAt?: any | null, updatedAt: any, status: AnimeListStatus, anime: { __typename?: 'Anime', id: string, url: string, title: string, episodesAired: number, season: AnimeSeason, episodesCount?: number | null, status: AnimeStatus, ratingMpa: string, rating: number, accentColor: string, year: number, type: AnimeType, minimalAge: number, image: { __typename?: 'AnimeImage', cover?: string | null, medium?: string | null }, studios: Array<{ __typename?: 'AnimeStudio', id: string, name: string }>, genres: Array<{ __typename?: 'AnimeGenre', image?: string | null, name: string, id: string }>, userRating?: { __typename?: 'AnimeRating', id: string, rating: number } | null, animeListEntry?: { __typename?: 'AnimeListEntry', id: string, status: AnimeListStatus } | null }, rating?: { __typename?: 'AnimeRating', id: string, rating: number } | null }> } };

export type AnimeRatingDistributionQueryVariables = Exact<{
  animeId: Scalars['String']['input'];
}>;


export type AnimeRatingDistributionQuery = { __typename?: 'Query', animeRatingDistribution: { __typename?: 'AnimeRatingDistribution', animeId: string, total: number, scores: Array<{ __typename?: 'AnimeRatingDistributionScore', votes: number, score: number }> } };

export type AnimeSchedulesQueryVariables = Exact<{ [key: string]: never; }>;


export type AnimeSchedulesQuery = { __typename?: 'Query', animeSchedules: Array<{ __typename?: 'AnimeSchedule', dayOfWeek: DayOfWeek, nextEpisodeDate: any, previousEpisodeDate: any, animeId: string, anime: { __typename?: 'Anime', id: string, url: string, title: string, episodesAired: number, season: AnimeSeason, episodesCount?: number | null, status: AnimeStatus, ratingMpa: string, rating: number, accentColor: string, year: number, type: AnimeType, minimalAge: number, image: { __typename?: 'AnimeImage', cover?: string | null, medium?: string | null }, studios: Array<{ __typename?: 'AnimeStudio', id: string, name: string }>, genres: Array<{ __typename?: 'AnimeGenre', image?: string | null, name: string, id: string }>, userRating?: { __typename?: 'AnimeRating', id: string, rating: number } | null, animeListEntry?: { __typename?: 'AnimeListEntry', id: string, status: AnimeListStatus } | null } }> };

export type AnimeStudioFragment = { __typename?: 'AnimeStudio', id: string, name: string };

export type AnimeStudiosQueryVariables = Exact<{ [key: string]: never; }>;


export type AnimeStudiosQuery = { __typename?: 'Query', studios: Array<{ __typename?: 'AnimeStudio', id: string, name: string }> };

export type AnimeQueryVariables = Exact<{
  url: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
}>;


export type AnimeQuery = { __typename?: 'Query', anime: { __typename?: 'Anime', accentColor: string, airedOn?: any | null, createdAt: any, description?: string | null, duration?: number | null, episodesAired: number, episodesCount?: number | null, franchise?: string | null, id: string, minimalAge: number, nextEpisode?: any | null, playerLink: string, ratingMpa: string, releasedOn: any, screenshots: Array<string>, season: AnimeSeason, shikimoriId: number, shikimoriRating: number, shikimoriVotes: number, status: AnimeStatus, title: string, titlesEnglish: Array<string>, rating: number, ratingCount: number, type: AnimeType, updatedAt?: any | null, url: string, year: number, image: { __typename?: 'AnimeImage', medium?: string | null, cover?: string | null, large?: string | null }, studios: Array<{ __typename?: 'AnimeStudio', id: string, name: string }>, genres: Array<{ __typename?: 'AnimeGenre', id: string, image?: string | null, name: string }>, videos: Array<{ __typename?: 'AnimeVideo', id: string, imageUrl?: string | null, name?: string | null, type: AnimeVideoType, playerUrl: string }>, userRating?: { __typename?: 'AnimeRating', id: string, rating: number, userId: string } | null, animeListEntry?: { __typename?: 'AnimeListEntry', id: string, status: AnimeListStatus } | null } };

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


export type AnimesQuery = { __typename?: 'Query', animes: { __typename?: 'AnimeConnection', data: Array<{ __typename?: 'Anime', id: string, url: string, title: string, episodesAired: number, season: AnimeSeason, episodesCount?: number | null, status: AnimeStatus, ratingMpa: string, rating: number, accentColor: string, year: number, type: AnimeType, minimalAge: number, image: { __typename?: 'AnimeImage', cover?: string | null, medium?: string | null }, studios: Array<{ __typename?: 'AnimeStudio', id: string, name: string }>, genres: Array<{ __typename?: 'AnimeGenre', image?: string | null, name: string, id: string }>, userRating?: { __typename?: 'AnimeRating', id: string, rating: number } | null, animeListEntry?: { __typename?: 'AnimeListEntry', id: string, status: AnimeListStatus } | null }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, page: number } } };

export type CharacterQueryVariables = Exact<{
  characterId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
  malId?: InputMaybe<Scalars['Int']['input']>;
}>;


export type CharacterQuery = { __typename?: 'Query', character: { __typename?: 'Character', about?: string | null, aboutEn?: string | null, id: string, image: string, malId: number, name: string, nameEn: string, nameKanji?: string | null, pictures: Array<string>, isFavorite?: boolean | null } };

export type CharactersQueryVariables = Exact<{
  animeUrl: Scalars['String']['input'];
  page: Scalars['Int']['input'];
  role?: InputMaybe<CharacterRole>;
  search?: InputMaybe<Scalars['String']['input']>;
}>;


export type CharactersQuery = { __typename?: 'Query', characters: { __typename?: 'CharacterConnection', data: Array<{ __typename?: 'AnimeCharacter', id: string, about?: string | null, name: string, nameEn: string, nameKanji?: string | null, image: string, role: CharacterRole }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, page: number } } };

export type EpisodesHistoryQueryVariables = Exact<{
  animeUrl: Scalars['String']['input'];
}>;


export type EpisodesHistoryQuery = { __typename?: 'Query', episodesHistory: Array<{ __typename?: 'EpisodeHistory', aired: any, number: number, title: string, isUpcoming: boolean }> };

export type EpisodeProgressFragment = { __typename?: 'EpisodeProgress', id: string, timing: number };

export type EpisodeTranslationFragment = { __typename?: 'EpisodeTranslation', id: string, kodikPlayerLink: string, title: string, type: TranslationType, translationId: number };

export type EpisodeFragment = { __typename?: 'Episode', id: string, aired?: any | null, title: string, description?: string | null, duration?: number | null, filler: boolean, recap: boolean, number: number, image: string, progress?: { __typename?: 'EpisodeProgress', id: string, timing: number } | null, translations: Array<{ __typename?: 'EpisodeTranslation', id: string, kodikPlayerLink: string, title: string, type: TranslationType, translationId: number }> };

export type EpisodesQueryVariables = Exact<{
  animeUrl: Scalars['String']['input'];
  page: Scalars['Int']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
}>;


export type EpisodesQuery = { __typename?: 'Query', episodes: { __typename?: 'EpisodeConnection', data: Array<{ __typename?: 'Episode', id: string, aired?: any | null, title: string, description?: string | null, duration?: number | null, filler: boolean, recap: boolean, number: number, image: string, progress?: { __typename?: 'EpisodeProgress', id: string, timing: number } | null, translations: Array<{ __typename?: 'EpisodeTranslation', id: string, kodikPlayerLink: string, title: string, type: TranslationType, translationId: number }> }> } };

export type FavoriteAnimeFragment = { __typename?: 'Anime', id: string, url: string, title: string, image: { __typename?: 'AnimeImage', medium?: string | null } };

export type FavoriteAnimesQueryVariables = Exact<{
  page: Scalars['Int']['input'];
  userId: Scalars['String']['input'];
}>;


export type FavoriteAnimesQuery = { __typename?: 'Query', favoriteAnimes: { __typename?: 'FavoriteAnimeConnection', data: Array<{ __typename?: 'FavoriteAnime', count: number, animeId: string, anime: { __typename?: 'Anime', id: string, url: string, title: string, image: { __typename?: 'AnimeImage', medium?: string | null } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, page: number } } };

export type FavoriteCharacterFragment = { __typename?: 'Character', id: string, image: string, name: string, isFavorite?: boolean | null };

export type FavoriteCharactersQueryVariables = Exact<{
  userId: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
}>;


export type FavoriteCharactersQuery = { __typename?: 'Query', favoriteCharacters: { __typename?: 'FavoriteCharacterConnection', data: Array<{ __typename?: 'FavoriteCharacter', count: number, characterId: string, character: { __typename?: 'Character', id: string, image: string, name: string, isFavorite?: boolean | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, page: number } } };

export type FriendshipsQueryVariables = Exact<{
  userId: Scalars['String']['input'];
  status?: InputMaybe<FriendshipStatus>;
  search?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
}>;


export type FriendshipsQuery = { __typename?: 'Query', friendships: { __typename?: 'FriendshipsConnection', data: Array<{ __typename?: 'Friendship', id: string, createdAt: any, updatedAt: any, status: FriendshipStatus, friend: { __typename?: 'User', id: string, name: string, avatar?: string | null, login: string, role: UserRole, banner?: string | null, createdAt: any, statistics: { __typename?: 'UserStatistics', total: { __typename?: 'TotalStatistics', totalActivity: number, totalWatchedAnimes: number, totalWatchedEpisodes: number, totalWatchedSeconds: number } } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, page: number } } };

export type LastWatchedEpisodeFragment = { __typename?: 'LastWatchedEpisode', id: string, animeId: string, episodeId: string, translationId: number, userId: string };

export type LastWatchedEpisodeQueryVariables = Exact<{
  animeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}>;


export type LastWatchedEpisodeQuery = { __typename?: 'Query', lastWatchedEpisode?: { __typename?: 'LastWatchedEpisode', id: string, animeId: string, episodeId: string, translationId: number, userId: string } | null };

export type ContinueWatchingFragment = { __typename?: 'LastWatchedEpisode', id: string, anime: { __typename?: 'Anime', id: string, url: string, title: string, episodesAired: number, season: AnimeSeason, episodesCount?: number | null, status: AnimeStatus, ratingMpa: string, rating: number, accentColor: string, year: number, type: AnimeType, minimalAge: number, image: { __typename?: 'AnimeImage', cover?: string | null, medium?: string | null }, studios: Array<{ __typename?: 'AnimeStudio', id: string, name: string }>, genres: Array<{ __typename?: 'AnimeGenre', image?: string | null, name: string, id: string }>, userRating?: { __typename?: 'AnimeRating', id: string, rating: number } | null, animeListEntry?: { __typename?: 'AnimeListEntry', id: string, status: AnimeListStatus } | null }, episode: { __typename?: 'Episode', id: string, number: number, duration?: number | null, progress?: { __typename?: 'EpisodeProgress', id: string, timing: number } | null } };

export type LastWatchedEpisodesQueryVariables = Exact<{
  userId: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
}>;


export type LastWatchedEpisodesQuery = { __typename?: 'Query', lastWatchedEpisodes?: { __typename?: 'LastWatchedEpisodeConnection', data: Array<{ __typename?: 'LastWatchedEpisode', id: string, anime: { __typename?: 'Anime', id: string, url: string, title: string, episodesAired: number, season: AnimeSeason, episodesCount?: number | null, status: AnimeStatus, ratingMpa: string, rating: number, accentColor: string, year: number, type: AnimeType, minimalAge: number, image: { __typename?: 'AnimeImage', cover?: string | null, medium?: string | null }, studios: Array<{ __typename?: 'AnimeStudio', id: string, name: string }>, genres: Array<{ __typename?: 'AnimeGenre', image?: string | null, name: string, id: string }>, userRating?: { __typename?: 'AnimeRating', id: string, rating: number } | null, animeListEntry?: { __typename?: 'AnimeListEntry', id: string, status: AnimeListStatus } | null }, episode: { __typename?: 'Episode', id: string, number: number, duration?: number | null, progress?: { __typename?: 'EpisodeProgress', id: string, timing: number } | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, page: number } } | null };

export type ProfileQueryVariables = Exact<{
  login: Scalars['String']['input'];
}>;


export type ProfileQuery = { __typename?: 'Query', profile: { __typename?: 'User', name: string, banner?: string | null, role: UserRole, vkId?: string | null, avatar?: string | null, birthday?: any | null, email?: string | null, id: string, googleId?: string | null, login: string, lastSeen: any, isOnline: boolean, about?: { __typename?: 'UserAbout', id: string, html: string, json: any, text: string } | null } };

export type RandomAnimesQueryVariables = Exact<{
  count?: InputMaybe<Scalars['Int']['input']>;
}>;


export type RandomAnimesQuery = { __typename?: 'Query', randomAnimes: Array<{ __typename?: 'Anime', id: string, url: string }> };

export type RelatedAnimesQueryVariables = Exact<{
  animeId: Scalars['String']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type RelatedAnimesQuery = { __typename?: 'Query', relatedAnimes: { __typename?: 'RelatedAnimeConnection', data: Array<{ __typename?: 'RelatedAnime', type: string, anime: { __typename?: 'Anime', id: string, url: string, title: string, episodesAired: number, season: AnimeSeason, episodesCount?: number | null, status: AnimeStatus, ratingMpa: string, rating: number, accentColor: string, year: number, type: AnimeType, minimalAge: number, image: { __typename?: 'AnimeImage', cover?: string | null, medium?: string | null }, studios: Array<{ __typename?: 'AnimeStudio', id: string, name: string }>, genres: Array<{ __typename?: 'AnimeGenre', image?: string | null, name: string, id: string }>, userRating?: { __typename?: 'AnimeRating', id: string, rating: number } | null, animeListEntry?: { __typename?: 'AnimeListEntry', id: string, status: AnimeListStatus } | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, page: number } } };

export type SimilarAnimesQueryVariables = Exact<{
  animeId: Scalars['String']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type SimilarAnimesQuery = { __typename?: 'Query', similarAnimes: { __typename?: 'AnimeConnection', data: Array<{ __typename?: 'Anime', id: string, url: string, title: string, episodesAired: number, season: AnimeSeason, episodesCount?: number | null, status: AnimeStatus, ratingMpa: string, rating: number, accentColor: string, year: number, type: AnimeType, minimalAge: number, image: { __typename?: 'AnimeImage', cover?: string | null, medium?: string | null }, studios: Array<{ __typename?: 'AnimeStudio', id: string, name: string }>, genres: Array<{ __typename?: 'AnimeGenre', image?: string | null, name: string, id: string }>, userRating?: { __typename?: 'AnimeRating', id: string, rating: number } | null, animeListEntry?: { __typename?: 'AnimeListEntry', id: string, status: AnimeListStatus } | null }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, page: number } } };

export type UserStatisticsQueryVariables = Exact<{
  userId: Scalars['String']['input'];
  year: Scalars['Int']['input'];
}>;


export type UserStatisticsQuery = { __typename?: 'Query', userStatistics: { __typename?: 'UserStatistics', activity: { __typename?: 'UserActivity', days: Array<{ __typename?: 'DayActivity', count: number, day: any }> }, genresDistribution: Array<{ __typename?: 'UserGenreDistribution', percent: number, genre: { __typename?: 'AnimeGenre', id: string, name: string } }>, total: { __typename?: 'TotalStatistics', totalActivity: number, totalWatchedSeconds: number, totalWatchedEpisodes: number, totalWatchedAnimes: number } } };

export type UserLiteFragment = { __typename?: 'User', id: string, name: string, avatar?: string | null, login: string, role: UserRole, banner?: string | null, createdAt: any, statistics: { __typename?: 'UserStatistics', total: { __typename?: 'TotalStatistics', totalActivity: number, totalWatchedAnimes: number, totalWatchedEpisodes: number, totalWatchedSeconds: number } } };

export type UsersQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
}>;


export type UsersQuery = { __typename?: 'Query', users: { __typename?: 'UserConnection', data: Array<{ __typename?: 'User', id: string, name: string, avatar?: string | null, login: string, role: UserRole, banner?: string | null, createdAt: any, statistics: { __typename?: 'UserStatistics', total: { __typename?: 'TotalStatistics', totalActivity: number, totalWatchedAnimes: number, totalWatchedEpisodes: number, totalWatchedSeconds: number } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, page: number } } };

export type ViewerQueryVariables = Exact<{ [key: string]: never; }>;


export type ViewerQuery = { __typename?: 'Query', viewer: { __typename?: 'User', name: string, banner?: string | null, role: UserRole, vkId?: string | null, avatar?: string | null, birthday?: any | null, email?: string | null, id: string, googleId?: string | null, login: string, lastSeen: any, isOnline: boolean, about?: { __typename?: 'UserAbout', id: string, html: string, json: any, text: string } | null } };

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
export const UserAboutFragmentDoc = gql`
    fragment UserAbout on UserAbout {
  id
  html
  json
  text
}
    `;
export const ViewerFragmentDoc = gql`
    fragment Viewer on User {
  name
  banner
  role
  vkId
  avatar
  birthday
  email
  id
  googleId
  login
  lastSeen
  isOnline
  about {
    ...UserAbout
  }
}
    ${UserAboutFragmentDoc}`;
export const UserLiteFragmentDoc = gql`
    fragment UserLite on User {
  id
  name
  avatar
  login
  role
  banner
  createdAt
  statistics {
    total {
      totalActivity
      totalWatchedAnimes
      totalWatchedEpisodes
      totalWatchedSeconds
    }
  }
}
    `;
export const FriendshipFragmentDoc = gql`
    fragment Friendship on Friendship {
  id
  status
  friendId
  userId
  user {
    ...UserLite
  }
  friend {
    ...UserLite
  }
}
    ${UserLiteFragmentDoc}`;
export const UserTokensFragmentDoc = gql`
    fragment UserTokens on UserTokens {
  accessToken
  refreshToken
}
    `;
export const AnimeCommentFragmentDoc = gql`
    fragment AnimeComment on AnimeComment {
  id
  createdAt
  text
  html
  json
  animeId
  likes(limit: 100000, page: 0) {
    data {
      userId
    }
    pageInfo {
      totalCount
    }
  }
  dislikes(limit: 100000, page: 0) {
    data {
      userId
    }
    pageInfo {
      totalCount
    }
  }
  author {
    role
    name
    avatar
    login
  }
  parent {
    id
    author {
      name
    }
  }
  children {
    id
    createdAt
    text
    html
    json
    animeId
    likes(limit: 100000, page: 0) {
      data {
        userId
      }
      pageInfo {
        totalCount
      }
    }
    dislikes(limit: 100000, page: 0) {
      data {
        userId
      }
      pageInfo {
        totalCount
      }
    }
    parent {
      id
      author {
        name
      }
    }
    author {
      role
      name
      avatar
      login
    }
  }
}
    `;
export const AnimeGenreFragmentDoc = gql`
    fragment AnimeGenre on AnimeGenre {
  id
  name
  image
}
    `;
export const AnimeLiteFragmentDoc = gql`
    fragment AnimeLite on Anime {
  id
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
  userRating {
    id
    rating
  }
  animeListEntry {
    id
    status
  }
  status
  ratingMpa
  rating
  accentColor
  year
  type
  minimalAge
}
    `;
export const AnimeListEntryFragmentDoc = gql`
    fragment AnimeListEntry on AnimeListEntry {
  id
  userId
  animeId
  anime {
    ...AnimeLite
  }
  endedAt
  episodesWatched
  startedAt
  updatedAt
  status
  rating {
    id
    rating
  }
}
    ${AnimeLiteFragmentDoc}`;
export const AnimeStudioFragmentDoc = gql`
    fragment AnimeStudio on AnimeStudio {
  id
  name
}
    `;
export const EpisodeProgressFragmentDoc = gql`
    fragment EpisodeProgress on EpisodeProgress {
  id
  timing
}
    `;
export const EpisodeTranslationFragmentDoc = gql`
    fragment EpisodeTranslation on EpisodeTranslation {
  id
  kodikPlayerLink
  title
  type
  translationId
}
    `;
export const EpisodeFragmentDoc = gql`
    fragment Episode on Episode {
  id
  aired
  title
  description
  duration
  filler
  recap
  number
  image
  progress(userId: $userId) {
    ...EpisodeProgress
  }
  translations {
    ...EpisodeTranslation
  }
}
    ${EpisodeProgressFragmentDoc}
${EpisodeTranslationFragmentDoc}`;
export const FavoriteAnimeFragmentDoc = gql`
    fragment FavoriteAnime on Anime {
  id
  url
  image {
    medium
  }
  title
}
    `;
export const FavoriteCharacterFragmentDoc = gql`
    fragment FavoriteCharacter on Character {
  id
  image
  name
  isFavorite
}
    `;
export const LastWatchedEpisodeFragmentDoc = gql`
    fragment LastWatchedEpisode on LastWatchedEpisode {
  id
  animeId
  episodeId
  translationId
  userId
}
    `;
export const ContinueWatchingFragmentDoc = gql`
    fragment ContinueWatching on LastWatchedEpisode {
  id
  anime {
    ...AnimeLite
  }
  episode {
    id
    number
    duration
    progress(userId: $userId) {
      id
      timing
    }
  }
}
    ${AnimeLiteFragmentDoc}`;
export const AcceptFriendInviteDocument = gql`
    mutation acceptFriendInvite($friendshipId: ID!) {
  acceptFriendInvite(friendshipId: $friendshipId) {
    ...Friendship
  }
}
    ${FriendshipFragmentDoc}`;
export type AcceptFriendInviteMutationFn = Apollo.MutationFunction<AcceptFriendInviteMutation, AcceptFriendInviteMutationVariables>;

/**
 * __useAcceptFriendInviteMutation__
 *
 * To run a mutation, you first call `useAcceptFriendInviteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAcceptFriendInviteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [acceptFriendInviteMutation, { data, loading, error }] = useAcceptFriendInviteMutation({
 *   variables: {
 *      friendshipId: // value for 'friendshipId'
 *   },
 * });
 */
export function useAcceptFriendInviteMutation(baseOptions?: Apollo.MutationHookOptions<AcceptFriendInviteMutation, AcceptFriendInviteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AcceptFriendInviteMutation, AcceptFriendInviteMutationVariables>(AcceptFriendInviteDocument, options);
      }
export type AcceptFriendInviteMutationHookResult = ReturnType<typeof useAcceptFriendInviteMutation>;
export type AcceptFriendInviteMutationResult = Apollo.MutationResult<AcceptFriendInviteMutation>;
export type AcceptFriendInviteMutationOptions = Apollo.BaseMutationOptions<AcceptFriendInviteMutation, AcceptFriendInviteMutationVariables>;
export const AddFriendDocument = gql`
    mutation addFriend($friendId: ID!) {
  addFriend(friendId: $friendId) {
    ...Friendship
  }
}
    ${FriendshipFragmentDoc}`;
export type AddFriendMutationFn = Apollo.MutationFunction<AddFriendMutation, AddFriendMutationVariables>;

/**
 * __useAddFriendMutation__
 *
 * To run a mutation, you first call `useAddFriendMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddFriendMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addFriendMutation, { data, loading, error }] = useAddFriendMutation({
 *   variables: {
 *      friendId: // value for 'friendId'
 *   },
 * });
 */
export function useAddFriendMutation(baseOptions?: Apollo.MutationHookOptions<AddFriendMutation, AddFriendMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddFriendMutation, AddFriendMutationVariables>(AddFriendDocument, options);
      }
export type AddFriendMutationHookResult = ReturnType<typeof useAddFriendMutation>;
export type AddFriendMutationResult = Apollo.MutationResult<AddFriendMutation>;
export type AddFriendMutationOptions = Apollo.BaseMutationOptions<AddFriendMutation, AddFriendMutationVariables>;
export const CreateAnimeCommentDocument = gql`
    mutation CreateAnimeComment($animeId: String!, $json: String!, $text: String!, $html: String!, $parentCommentId: String) {
  createAnimeComment(
    animeId: $animeId
    json: $json
    text: $text
    html: $html
    parentCommentId: $parentCommentId
  ) {
    ...AnimeComment
  }
}
    ${AnimeCommentFragmentDoc}`;
export type CreateAnimeCommentMutationFn = Apollo.MutationFunction<CreateAnimeCommentMutation, CreateAnimeCommentMutationVariables>;

/**
 * __useCreateAnimeCommentMutation__
 *
 * To run a mutation, you first call `useCreateAnimeCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAnimeCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAnimeCommentMutation, { data, loading, error }] = useCreateAnimeCommentMutation({
 *   variables: {
 *      animeId: // value for 'animeId'
 *      json: // value for 'json'
 *      text: // value for 'text'
 *      html: // value for 'html'
 *      parentCommentId: // value for 'parentCommentId'
 *   },
 * });
 */
export function useCreateAnimeCommentMutation(baseOptions?: Apollo.MutationHookOptions<CreateAnimeCommentMutation, CreateAnimeCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAnimeCommentMutation, CreateAnimeCommentMutationVariables>(CreateAnimeCommentDocument, options);
      }
export type CreateAnimeCommentMutationHookResult = ReturnType<typeof useCreateAnimeCommentMutation>;
export type CreateAnimeCommentMutationResult = Apollo.MutationResult<CreateAnimeCommentMutation>;
export type CreateAnimeCommentMutationOptions = Apollo.BaseMutationOptions<CreateAnimeCommentMutation, CreateAnimeCommentMutationVariables>;
export const LoginDocument = gql`
    mutation Login($identifier: String!, $password: String!) {
  login(identifier: $identifier, password: $password) {
    tokens {
      accessToken
      refreshToken
    }
    user {
      ...Viewer
    }
  }
}
    ${ViewerFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      identifier: // value for 'identifier'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RefreshTokensDocument = gql`
    mutation RefreshTokens($refreshToken: String!) {
  refreshTokens(refreshToken: $refreshToken) {
    ...UserTokens
  }
}
    ${UserTokensFragmentDoc}`;
export type RefreshTokensMutationFn = Apollo.MutationFunction<RefreshTokensMutation, RefreshTokensMutationVariables>;

/**
 * __useRefreshTokensMutation__
 *
 * To run a mutation, you first call `useRefreshTokensMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefreshTokensMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refreshTokensMutation, { data, loading, error }] = useRefreshTokensMutation({
 *   variables: {
 *      refreshToken: // value for 'refreshToken'
 *   },
 * });
 */
export function useRefreshTokensMutation(baseOptions?: Apollo.MutationHookOptions<RefreshTokensMutation, RefreshTokensMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RefreshTokensMutation, RefreshTokensMutationVariables>(RefreshTokensDocument, options);
      }
export type RefreshTokensMutationHookResult = ReturnType<typeof useRefreshTokensMutation>;
export type RefreshTokensMutationResult = Apollo.MutationResult<RefreshTokensMutation>;
export type RefreshTokensMutationOptions = Apollo.BaseMutationOptions<RefreshTokensMutation, RefreshTokensMutationVariables>;
export const RejectFriendInviteDocument = gql`
    mutation rejectFriendInvite($friendshipId: ID!) {
  rejectFriendInvite(friendshipId: $friendshipId) {
    ...Friendship
  }
}
    ${FriendshipFragmentDoc}`;
export type RejectFriendInviteMutationFn = Apollo.MutationFunction<RejectFriendInviteMutation, RejectFriendInviteMutationVariables>;

/**
 * __useRejectFriendInviteMutation__
 *
 * To run a mutation, you first call `useRejectFriendInviteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRejectFriendInviteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [rejectFriendInviteMutation, { data, loading, error }] = useRejectFriendInviteMutation({
 *   variables: {
 *      friendshipId: // value for 'friendshipId'
 *   },
 * });
 */
export function useRejectFriendInviteMutation(baseOptions?: Apollo.MutationHookOptions<RejectFriendInviteMutation, RejectFriendInviteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RejectFriendInviteMutation, RejectFriendInviteMutationVariables>(RejectFriendInviteDocument, options);
      }
export type RejectFriendInviteMutationHookResult = ReturnType<typeof useRejectFriendInviteMutation>;
export type RejectFriendInviteMutationResult = Apollo.MutationResult<RejectFriendInviteMutation>;
export type RejectFriendInviteMutationOptions = Apollo.BaseMutationOptions<RejectFriendInviteMutation, RejectFriendInviteMutationVariables>;
export const RemoveAnimeListEntryDocument = gql`
    mutation RemoveAnimeListEntry($animeUrl: String!) {
  removeAnimeListEntry(animeUrl: $animeUrl) {
    id
  }
}
    `;
export type RemoveAnimeListEntryMutationFn = Apollo.MutationFunction<RemoveAnimeListEntryMutation, RemoveAnimeListEntryMutationVariables>;

/**
 * __useRemoveAnimeListEntryMutation__
 *
 * To run a mutation, you first call `useRemoveAnimeListEntryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveAnimeListEntryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeAnimeListEntryMutation, { data, loading, error }] = useRemoveAnimeListEntryMutation({
 *   variables: {
 *      animeUrl: // value for 'animeUrl'
 *   },
 * });
 */
export function useRemoveAnimeListEntryMutation(baseOptions?: Apollo.MutationHookOptions<RemoveAnimeListEntryMutation, RemoveAnimeListEntryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveAnimeListEntryMutation, RemoveAnimeListEntryMutationVariables>(RemoveAnimeListEntryDocument, options);
      }
export type RemoveAnimeListEntryMutationHookResult = ReturnType<typeof useRemoveAnimeListEntryMutation>;
export type RemoveAnimeListEntryMutationResult = Apollo.MutationResult<RemoveAnimeListEntryMutation>;
export type RemoveAnimeListEntryMutationOptions = Apollo.BaseMutationOptions<RemoveAnimeListEntryMutation, RemoveAnimeListEntryMutationVariables>;
export const RemoveUserAboutDocument = gql`
    mutation RemoveUserAbout {
  removeUserAbout {
    ...UserAbout
  }
}
    ${UserAboutFragmentDoc}`;
export type RemoveUserAboutMutationFn = Apollo.MutationFunction<RemoveUserAboutMutation, RemoveUserAboutMutationVariables>;

/**
 * __useRemoveUserAboutMutation__
 *
 * To run a mutation, you first call `useRemoveUserAboutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveUserAboutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeUserAboutMutation, { data, loading, error }] = useRemoveUserAboutMutation({
 *   variables: {
 *   },
 * });
 */
export function useRemoveUserAboutMutation(baseOptions?: Apollo.MutationHookOptions<RemoveUserAboutMutation, RemoveUserAboutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveUserAboutMutation, RemoveUserAboutMutationVariables>(RemoveUserAboutDocument, options);
      }
export type RemoveUserAboutMutationHookResult = ReturnType<typeof useRemoveUserAboutMutation>;
export type RemoveUserAboutMutationResult = Apollo.MutationResult<RemoveUserAboutMutation>;
export type RemoveUserAboutMutationOptions = Apollo.BaseMutationOptions<RemoveUserAboutMutation, RemoveUserAboutMutationVariables>;
export const SaveAnimeListEntryDocument = gql`
    mutation SaveAnimeListEntry($animeUrl: String!, $endedAt: DateTime, $episodesWatched: Int, $startedAt: DateTime, $status: AnimeListStatus) {
  saveAnimeListEntry(
    animeUrl: $animeUrl
    endedAt: $endedAt
    episodesWatched: $episodesWatched
    startedAt: $startedAt
    status: $status
  ) {
    ...AnimeListEntry
  }
}
    ${AnimeListEntryFragmentDoc}`;
export type SaveAnimeListEntryMutationFn = Apollo.MutationFunction<SaveAnimeListEntryMutation, SaveAnimeListEntryMutationVariables>;

/**
 * __useSaveAnimeListEntryMutation__
 *
 * To run a mutation, you first call `useSaveAnimeListEntryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveAnimeListEntryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveAnimeListEntryMutation, { data, loading, error }] = useSaveAnimeListEntryMutation({
 *   variables: {
 *      animeUrl: // value for 'animeUrl'
 *      endedAt: // value for 'endedAt'
 *      episodesWatched: // value for 'episodesWatched'
 *      startedAt: // value for 'startedAt'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useSaveAnimeListEntryMutation(baseOptions?: Apollo.MutationHookOptions<SaveAnimeListEntryMutation, SaveAnimeListEntryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveAnimeListEntryMutation, SaveAnimeListEntryMutationVariables>(SaveAnimeListEntryDocument, options);
      }
export type SaveAnimeListEntryMutationHookResult = ReturnType<typeof useSaveAnimeListEntryMutation>;
export type SaveAnimeListEntryMutationResult = Apollo.MutationResult<SaveAnimeListEntryMutation>;
export type SaveAnimeListEntryMutationOptions = Apollo.BaseMutationOptions<SaveAnimeListEntryMutation, SaveAnimeListEntryMutationVariables>;
export const SaveAnimeRatingDocument = gql`
    mutation SaveAnimeRating($animeId: String!, $rating: Int!) {
  saveAnimeRating(animeId: $animeId, rating: $rating) {
    id
    rating
  }
}
    `;
export type SaveAnimeRatingMutationFn = Apollo.MutationFunction<SaveAnimeRatingMutation, SaveAnimeRatingMutationVariables>;

/**
 * __useSaveAnimeRatingMutation__
 *
 * To run a mutation, you first call `useSaveAnimeRatingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveAnimeRatingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveAnimeRatingMutation, { data, loading, error }] = useSaveAnimeRatingMutation({
 *   variables: {
 *      animeId: // value for 'animeId'
 *      rating: // value for 'rating'
 *   },
 * });
 */
export function useSaveAnimeRatingMutation(baseOptions?: Apollo.MutationHookOptions<SaveAnimeRatingMutation, SaveAnimeRatingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveAnimeRatingMutation, SaveAnimeRatingMutationVariables>(SaveAnimeRatingDocument, options);
      }
export type SaveAnimeRatingMutationHookResult = ReturnType<typeof useSaveAnimeRatingMutation>;
export type SaveAnimeRatingMutationResult = Apollo.MutationResult<SaveAnimeRatingMutation>;
export type SaveAnimeRatingMutationOptions = Apollo.BaseMutationOptions<SaveAnimeRatingMutation, SaveAnimeRatingMutationVariables>;
export const SaveEpisodeProgressDocument = gql`
    mutation SaveEpisodeProgress($animeId: String!, $episodeId: String!, $timing: Int!) {
  saveEpisodeProgress(animeId: $animeId, episodeId: $episodeId, timing: $timing) {
    animeId
    episodeId
    id
    userId
    timing
  }
}
    `;
export type SaveEpisodeProgressMutationFn = Apollo.MutationFunction<SaveEpisodeProgressMutation, SaveEpisodeProgressMutationVariables>;

/**
 * __useSaveEpisodeProgressMutation__
 *
 * To run a mutation, you first call `useSaveEpisodeProgressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveEpisodeProgressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveEpisodeProgressMutation, { data, loading, error }] = useSaveEpisodeProgressMutation({
 *   variables: {
 *      animeId: // value for 'animeId'
 *      episodeId: // value for 'episodeId'
 *      timing: // value for 'timing'
 *   },
 * });
 */
export function useSaveEpisodeProgressMutation(baseOptions?: Apollo.MutationHookOptions<SaveEpisodeProgressMutation, SaveEpisodeProgressMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveEpisodeProgressMutation, SaveEpisodeProgressMutationVariables>(SaveEpisodeProgressDocument, options);
      }
export type SaveEpisodeProgressMutationHookResult = ReturnType<typeof useSaveEpisodeProgressMutation>;
export type SaveEpisodeProgressMutationResult = Apollo.MutationResult<SaveEpisodeProgressMutation>;
export type SaveEpisodeProgressMutationOptions = Apollo.BaseMutationOptions<SaveEpisodeProgressMutation, SaveEpisodeProgressMutationVariables>;
export const SaveLastWatchedEpisodeDocument = gql`
    mutation SaveLastWatchedEpisode($animeId: String!, $episodeId: String!, $translationId: Int!) {
  saveLastWatchedEpisode(
    animeId: $animeId
    episodeId: $episodeId
    translationId: $translationId
  ) {
    ...LastWatchedEpisode
  }
}
    ${LastWatchedEpisodeFragmentDoc}`;
export type SaveLastWatchedEpisodeMutationFn = Apollo.MutationFunction<SaveLastWatchedEpisodeMutation, SaveLastWatchedEpisodeMutationVariables>;

/**
 * __useSaveLastWatchedEpisodeMutation__
 *
 * To run a mutation, you first call `useSaveLastWatchedEpisodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveLastWatchedEpisodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveLastWatchedEpisodeMutation, { data, loading, error }] = useSaveLastWatchedEpisodeMutation({
 *   variables: {
 *      animeId: // value for 'animeId'
 *      episodeId: // value for 'episodeId'
 *      translationId: // value for 'translationId'
 *   },
 * });
 */
export function useSaveLastWatchedEpisodeMutation(baseOptions?: Apollo.MutationHookOptions<SaveLastWatchedEpisodeMutation, SaveLastWatchedEpisodeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveLastWatchedEpisodeMutation, SaveLastWatchedEpisodeMutationVariables>(SaveLastWatchedEpisodeDocument, options);
      }
export type SaveLastWatchedEpisodeMutationHookResult = ReturnType<typeof useSaveLastWatchedEpisodeMutation>;
export type SaveLastWatchedEpisodeMutationResult = Apollo.MutationResult<SaveLastWatchedEpisodeMutation>;
export type SaveLastWatchedEpisodeMutationOptions = Apollo.BaseMutationOptions<SaveLastWatchedEpisodeMutation, SaveLastWatchedEpisodeMutationVariables>;
export const SaveUserAboutDocument = gql`
    mutation SaveUserAbout($html: String!, $json: JSON!, $text: String!) {
  saveUserAbout(html: $html, json: $json, text: $text) {
    ...UserAbout
  }
}
    ${UserAboutFragmentDoc}`;
export type SaveUserAboutMutationFn = Apollo.MutationFunction<SaveUserAboutMutation, SaveUserAboutMutationVariables>;

/**
 * __useSaveUserAboutMutation__
 *
 * To run a mutation, you first call `useSaveUserAboutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveUserAboutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveUserAboutMutation, { data, loading, error }] = useSaveUserAboutMutation({
 *   variables: {
 *      html: // value for 'html'
 *      json: // value for 'json'
 *      text: // value for 'text'
 *   },
 * });
 */
export function useSaveUserAboutMutation(baseOptions?: Apollo.MutationHookOptions<SaveUserAboutMutation, SaveUserAboutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveUserAboutMutation, SaveUserAboutMutationVariables>(SaveUserAboutDocument, options);
      }
export type SaveUserAboutMutationHookResult = ReturnType<typeof useSaveUserAboutMutation>;
export type SaveUserAboutMutationResult = Apollo.MutationResult<SaveUserAboutMutation>;
export type SaveUserAboutMutationOptions = Apollo.BaseMutationOptions<SaveUserAboutMutation, SaveUserAboutMutationVariables>;
export const SetEpisodeDurationDocument = gql`
    mutation SetEpisodeDuration($episodeId: String!, $duration: Int!) {
  setEpisodeDuration(episodeId: $episodeId, duration: $duration) {
    id
    duration
  }
}
    `;
export type SetEpisodeDurationMutationFn = Apollo.MutationFunction<SetEpisodeDurationMutation, SetEpisodeDurationMutationVariables>;

/**
 * __useSetEpisodeDurationMutation__
 *
 * To run a mutation, you first call `useSetEpisodeDurationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetEpisodeDurationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setEpisodeDurationMutation, { data, loading, error }] = useSetEpisodeDurationMutation({
 *   variables: {
 *      episodeId: // value for 'episodeId'
 *      duration: // value for 'duration'
 *   },
 * });
 */
export function useSetEpisodeDurationMutation(baseOptions?: Apollo.MutationHookOptions<SetEpisodeDurationMutation, SetEpisodeDurationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SetEpisodeDurationMutation, SetEpisodeDurationMutationVariables>(SetEpisodeDurationDocument, options);
      }
export type SetEpisodeDurationMutationHookResult = ReturnType<typeof useSetEpisodeDurationMutation>;
export type SetEpisodeDurationMutationResult = Apollo.MutationResult<SetEpisodeDurationMutation>;
export type SetEpisodeDurationMutationOptions = Apollo.BaseMutationOptions<SetEpisodeDurationMutation, SetEpisodeDurationMutationVariables>;
export const SignupDocument = gql`
    mutation Signup($email: String!, $login: String!, $name: String!, $password: String!, $avatar: String, $banner: String, $birthday: DateTime) {
  signup(
    email: $email
    login: $login
    name: $name
    password: $password
    avatar: $avatar
    banner: $banner
    birthday: $birthday
  ) {
    user {
      ...Viewer
    }
    tokens {
      ...UserTokens
    }
  }
}
    ${ViewerFragmentDoc}
${UserTokensFragmentDoc}`;
export type SignupMutationFn = Apollo.MutationFunction<SignupMutation, SignupMutationVariables>;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      email: // value for 'email'
 *      login: // value for 'login'
 *      name: // value for 'name'
 *      password: // value for 'password'
 *      avatar: // value for 'avatar'
 *      banner: // value for 'banner'
 *      birthday: // value for 'birthday'
 *   },
 * });
 */
export function useSignupMutation(baseOptions?: Apollo.MutationHookOptions<SignupMutation, SignupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument, options);
      }
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = Apollo.MutationResult<SignupMutation>;
export type SignupMutationOptions = Apollo.BaseMutationOptions<SignupMutation, SignupMutationVariables>;
export const ToggleAnimeCommentDislikeDocument = gql`
    mutation ToggleAnimeCommentDislike($animeCommentId: String!) {
  toggleAnimeCommentDislike(animeCommentId: $animeCommentId) {
    animeCommentId
    userId
  }
}
    `;
export type ToggleAnimeCommentDislikeMutationFn = Apollo.MutationFunction<ToggleAnimeCommentDislikeMutation, ToggleAnimeCommentDislikeMutationVariables>;

/**
 * __useToggleAnimeCommentDislikeMutation__
 *
 * To run a mutation, you first call `useToggleAnimeCommentDislikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleAnimeCommentDislikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleAnimeCommentDislikeMutation, { data, loading, error }] = useToggleAnimeCommentDislikeMutation({
 *   variables: {
 *      animeCommentId: // value for 'animeCommentId'
 *   },
 * });
 */
export function useToggleAnimeCommentDislikeMutation(baseOptions?: Apollo.MutationHookOptions<ToggleAnimeCommentDislikeMutation, ToggleAnimeCommentDislikeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ToggleAnimeCommentDislikeMutation, ToggleAnimeCommentDislikeMutationVariables>(ToggleAnimeCommentDislikeDocument, options);
      }
export type ToggleAnimeCommentDislikeMutationHookResult = ReturnType<typeof useToggleAnimeCommentDislikeMutation>;
export type ToggleAnimeCommentDislikeMutationResult = Apollo.MutationResult<ToggleAnimeCommentDislikeMutation>;
export type ToggleAnimeCommentDislikeMutationOptions = Apollo.BaseMutationOptions<ToggleAnimeCommentDislikeMutation, ToggleAnimeCommentDislikeMutationVariables>;
export const ToggleAnimeCommentLikeDocument = gql`
    mutation ToggleAnimeCommentLike($animeCommentId: String!) {
  toggleAnimeCommentLike(animeCommentId: $animeCommentId) {
    animeCommentId
    userId
  }
}
    `;
export type ToggleAnimeCommentLikeMutationFn = Apollo.MutationFunction<ToggleAnimeCommentLikeMutation, ToggleAnimeCommentLikeMutationVariables>;

/**
 * __useToggleAnimeCommentLikeMutation__
 *
 * To run a mutation, you first call `useToggleAnimeCommentLikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleAnimeCommentLikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleAnimeCommentLikeMutation, { data, loading, error }] = useToggleAnimeCommentLikeMutation({
 *   variables: {
 *      animeCommentId: // value for 'animeCommentId'
 *   },
 * });
 */
export function useToggleAnimeCommentLikeMutation(baseOptions?: Apollo.MutationHookOptions<ToggleAnimeCommentLikeMutation, ToggleAnimeCommentLikeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ToggleAnimeCommentLikeMutation, ToggleAnimeCommentLikeMutationVariables>(ToggleAnimeCommentLikeDocument, options);
      }
export type ToggleAnimeCommentLikeMutationHookResult = ReturnType<typeof useToggleAnimeCommentLikeMutation>;
export type ToggleAnimeCommentLikeMutationResult = Apollo.MutationResult<ToggleAnimeCommentLikeMutation>;
export type ToggleAnimeCommentLikeMutationOptions = Apollo.BaseMutationOptions<ToggleAnimeCommentLikeMutation, ToggleAnimeCommentLikeMutationVariables>;
export const ToggleFavoriteAnimeDocument = gql`
    mutation ToggleFavoriteAnime($animeUrl: String!) {
  toggleFavoriteAnime(animeUrl: $animeUrl) {
    userId
    animeId
    anime {
      id
    }
    user {
      id
    }
  }
}
    `;
export type ToggleFavoriteAnimeMutationFn = Apollo.MutationFunction<ToggleFavoriteAnimeMutation, ToggleFavoriteAnimeMutationVariables>;

/**
 * __useToggleFavoriteAnimeMutation__
 *
 * To run a mutation, you first call `useToggleFavoriteAnimeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleFavoriteAnimeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleFavoriteAnimeMutation, { data, loading, error }] = useToggleFavoriteAnimeMutation({
 *   variables: {
 *      animeUrl: // value for 'animeUrl'
 *   },
 * });
 */
export function useToggleFavoriteAnimeMutation(baseOptions?: Apollo.MutationHookOptions<ToggleFavoriteAnimeMutation, ToggleFavoriteAnimeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ToggleFavoriteAnimeMutation, ToggleFavoriteAnimeMutationVariables>(ToggleFavoriteAnimeDocument, options);
      }
export type ToggleFavoriteAnimeMutationHookResult = ReturnType<typeof useToggleFavoriteAnimeMutation>;
export type ToggleFavoriteAnimeMutationResult = Apollo.MutationResult<ToggleFavoriteAnimeMutation>;
export type ToggleFavoriteAnimeMutationOptions = Apollo.BaseMutationOptions<ToggleFavoriteAnimeMutation, ToggleFavoriteAnimeMutationVariables>;
export const ToggleFavoriteCharacterDocument = gql`
    mutation ToggleFavoriteCharacter($characterId: String!) {
  toggleFavoriteCharacter(characterId: $characterId) {
    userId
    user {
      id
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
export const UpdateUserLastSeenDocument = gql`
    mutation UpdateUserLastSeen {
  updateUserLastSeen {
    id
    lastSeen
  }
}
    `;
export type UpdateUserLastSeenMutationFn = Apollo.MutationFunction<UpdateUserLastSeenMutation, UpdateUserLastSeenMutationVariables>;

/**
 * __useUpdateUserLastSeenMutation__
 *
 * To run a mutation, you first call `useUpdateUserLastSeenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserLastSeenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserLastSeenMutation, { data, loading, error }] = useUpdateUserLastSeenMutation({
 *   variables: {
 *   },
 * });
 */
export function useUpdateUserLastSeenMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserLastSeenMutation, UpdateUserLastSeenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserLastSeenMutation, UpdateUserLastSeenMutationVariables>(UpdateUserLastSeenDocument, options);
      }
export type UpdateUserLastSeenMutationHookResult = ReturnType<typeof useUpdateUserLastSeenMutation>;
export type UpdateUserLastSeenMutationResult = Apollo.MutationResult<UpdateUserLastSeenMutation>;
export type UpdateUserLastSeenMutationOptions = Apollo.BaseMutationOptions<UpdateUserLastSeenMutation, UpdateUserLastSeenMutationVariables>;
export const AnimeCommentsDocument = gql`
    query AnimeComments($animeId: String!, $limit: Int, $page: Int, $userId: String) {
  animeComments(animeId: $animeId, limit: $limit, page: $page, userId: $userId) {
    data {
      ...AnimeComment
    }
    pageInfo {
      hasNextPage
      page
    }
  }
}
    ${AnimeCommentFragmentDoc}`;

/**
 * __useAnimeCommentsQuery__
 *
 * To run a query within a React component, call `useAnimeCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAnimeCommentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAnimeCommentsQuery({
 *   variables: {
 *      animeId: // value for 'animeId'
 *      limit: // value for 'limit'
 *      page: // value for 'page'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useAnimeCommentsQuery(baseOptions: Apollo.QueryHookOptions<AnimeCommentsQuery, AnimeCommentsQueryVariables> & ({ variables: AnimeCommentsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AnimeCommentsQuery, AnimeCommentsQueryVariables>(AnimeCommentsDocument, options);
      }
export function useAnimeCommentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AnimeCommentsQuery, AnimeCommentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AnimeCommentsQuery, AnimeCommentsQueryVariables>(AnimeCommentsDocument, options);
        }
export function useAnimeCommentsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<AnimeCommentsQuery, AnimeCommentsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AnimeCommentsQuery, AnimeCommentsQueryVariables>(AnimeCommentsDocument, options);
        }
export type AnimeCommentsQueryHookResult = ReturnType<typeof useAnimeCommentsQuery>;
export type AnimeCommentsLazyQueryHookResult = ReturnType<typeof useAnimeCommentsLazyQuery>;
export type AnimeCommentsSuspenseQueryHookResult = ReturnType<typeof useAnimeCommentsSuspenseQuery>;
export type AnimeCommentsQueryResult = Apollo.QueryResult<AnimeCommentsQuery, AnimeCommentsQueryVariables>;
export const AnimeGenresDocument = gql`
    query AnimeGenres {
  genres {
    ...AnimeGenre
  }
}
    ${AnimeGenreFragmentDoc}`;

/**
 * __useAnimeGenresQuery__
 *
 * To run a query within a React component, call `useAnimeGenresQuery` and pass it any options that fit your needs.
 * When your component renders, `useAnimeGenresQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAnimeGenresQuery({
 *   variables: {
 *   },
 * });
 */
export function useAnimeGenresQuery(baseOptions?: Apollo.QueryHookOptions<AnimeGenresQuery, AnimeGenresQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AnimeGenresQuery, AnimeGenresQueryVariables>(AnimeGenresDocument, options);
      }
export function useAnimeGenresLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AnimeGenresQuery, AnimeGenresQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AnimeGenresQuery, AnimeGenresQueryVariables>(AnimeGenresDocument, options);
        }
export function useAnimeGenresSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<AnimeGenresQuery, AnimeGenresQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AnimeGenresQuery, AnimeGenresQueryVariables>(AnimeGenresDocument, options);
        }
export type AnimeGenresQueryHookResult = ReturnType<typeof useAnimeGenresQuery>;
export type AnimeGenresLazyQueryHookResult = ReturnType<typeof useAnimeGenresLazyQuery>;
export type AnimeGenresSuspenseQueryHookResult = ReturnType<typeof useAnimeGenresSuspenseQuery>;
export type AnimeGenresQueryResult = Apollo.QueryResult<AnimeGenresQuery, AnimeGenresQueryVariables>;
export const AnimeListDocument = gql`
    query AnimeList($userId: String!) {
  animeList(userId: $userId) {
    list {
      ...AnimeListEntry
    }
  }
}
    ${AnimeListEntryFragmentDoc}`;

/**
 * __useAnimeListQuery__
 *
 * To run a query within a React component, call `useAnimeListQuery` and pass it any options that fit your needs.
 * When your component renders, `useAnimeListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAnimeListQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useAnimeListQuery(baseOptions: Apollo.QueryHookOptions<AnimeListQuery, AnimeListQueryVariables> & ({ variables: AnimeListQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AnimeListQuery, AnimeListQueryVariables>(AnimeListDocument, options);
      }
export function useAnimeListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AnimeListQuery, AnimeListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AnimeListQuery, AnimeListQueryVariables>(AnimeListDocument, options);
        }
export function useAnimeListSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<AnimeListQuery, AnimeListQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AnimeListQuery, AnimeListQueryVariables>(AnimeListDocument, options);
        }
export type AnimeListQueryHookResult = ReturnType<typeof useAnimeListQuery>;
export type AnimeListLazyQueryHookResult = ReturnType<typeof useAnimeListLazyQuery>;
export type AnimeListSuspenseQueryHookResult = ReturnType<typeof useAnimeListSuspenseQuery>;
export type AnimeListQueryResult = Apollo.QueryResult<AnimeListQuery, AnimeListQueryVariables>;
export const AnimeRatingDistributionDocument = gql`
    query AnimeRatingDistribution($animeId: String!) {
  animeRatingDistribution(animeId: $animeId) {
    animeId
    total
    scores {
      votes
      score
    }
  }
}
    `;

/**
 * __useAnimeRatingDistributionQuery__
 *
 * To run a query within a React component, call `useAnimeRatingDistributionQuery` and pass it any options that fit your needs.
 * When your component renders, `useAnimeRatingDistributionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAnimeRatingDistributionQuery({
 *   variables: {
 *      animeId: // value for 'animeId'
 *   },
 * });
 */
export function useAnimeRatingDistributionQuery(baseOptions: Apollo.QueryHookOptions<AnimeRatingDistributionQuery, AnimeRatingDistributionQueryVariables> & ({ variables: AnimeRatingDistributionQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AnimeRatingDistributionQuery, AnimeRatingDistributionQueryVariables>(AnimeRatingDistributionDocument, options);
      }
export function useAnimeRatingDistributionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AnimeRatingDistributionQuery, AnimeRatingDistributionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AnimeRatingDistributionQuery, AnimeRatingDistributionQueryVariables>(AnimeRatingDistributionDocument, options);
        }
export function useAnimeRatingDistributionSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<AnimeRatingDistributionQuery, AnimeRatingDistributionQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AnimeRatingDistributionQuery, AnimeRatingDistributionQueryVariables>(AnimeRatingDistributionDocument, options);
        }
export type AnimeRatingDistributionQueryHookResult = ReturnType<typeof useAnimeRatingDistributionQuery>;
export type AnimeRatingDistributionLazyQueryHookResult = ReturnType<typeof useAnimeRatingDistributionLazyQuery>;
export type AnimeRatingDistributionSuspenseQueryHookResult = ReturnType<typeof useAnimeRatingDistributionSuspenseQuery>;
export type AnimeRatingDistributionQueryResult = Apollo.QueryResult<AnimeRatingDistributionQuery, AnimeRatingDistributionQueryVariables>;
export const AnimeSchedulesDocument = gql`
    query AnimeSchedules {
  animeSchedules {
    dayOfWeek
    nextEpisodeDate
    previousEpisodeDate
    animeId
    anime {
      ...AnimeLite
    }
  }
}
    ${AnimeLiteFragmentDoc}`;

/**
 * __useAnimeSchedulesQuery__
 *
 * To run a query within a React component, call `useAnimeSchedulesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAnimeSchedulesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAnimeSchedulesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAnimeSchedulesQuery(baseOptions?: Apollo.QueryHookOptions<AnimeSchedulesQuery, AnimeSchedulesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AnimeSchedulesQuery, AnimeSchedulesQueryVariables>(AnimeSchedulesDocument, options);
      }
export function useAnimeSchedulesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AnimeSchedulesQuery, AnimeSchedulesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AnimeSchedulesQuery, AnimeSchedulesQueryVariables>(AnimeSchedulesDocument, options);
        }
export function useAnimeSchedulesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<AnimeSchedulesQuery, AnimeSchedulesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AnimeSchedulesQuery, AnimeSchedulesQueryVariables>(AnimeSchedulesDocument, options);
        }
export type AnimeSchedulesQueryHookResult = ReturnType<typeof useAnimeSchedulesQuery>;
export type AnimeSchedulesLazyQueryHookResult = ReturnType<typeof useAnimeSchedulesLazyQuery>;
export type AnimeSchedulesSuspenseQueryHookResult = ReturnType<typeof useAnimeSchedulesSuspenseQuery>;
export type AnimeSchedulesQueryResult = Apollo.QueryResult<AnimeSchedulesQuery, AnimeSchedulesQueryVariables>;
export const AnimeStudiosDocument = gql`
    query AnimeStudios {
  studios {
    ...AnimeStudio
  }
}
    ${AnimeStudioFragmentDoc}`;

/**
 * __useAnimeStudiosQuery__
 *
 * To run a query within a React component, call `useAnimeStudiosQuery` and pass it any options that fit your needs.
 * When your component renders, `useAnimeStudiosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAnimeStudiosQuery({
 *   variables: {
 *   },
 * });
 */
export function useAnimeStudiosQuery(baseOptions?: Apollo.QueryHookOptions<AnimeStudiosQuery, AnimeStudiosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AnimeStudiosQuery, AnimeStudiosQueryVariables>(AnimeStudiosDocument, options);
      }
export function useAnimeStudiosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AnimeStudiosQuery, AnimeStudiosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AnimeStudiosQuery, AnimeStudiosQueryVariables>(AnimeStudiosDocument, options);
        }
export function useAnimeStudiosSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<AnimeStudiosQuery, AnimeStudiosQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AnimeStudiosQuery, AnimeStudiosQueryVariables>(AnimeStudiosDocument, options);
        }
export type AnimeStudiosQueryHookResult = ReturnType<typeof useAnimeStudiosQuery>;
export type AnimeStudiosLazyQueryHookResult = ReturnType<typeof useAnimeStudiosLazyQuery>;
export type AnimeStudiosSuspenseQueryHookResult = ReturnType<typeof useAnimeStudiosSuspenseQuery>;
export type AnimeStudiosQueryResult = Apollo.QueryResult<AnimeStudiosQuery, AnimeStudiosQueryVariables>;
export const AnimeDocument = gql`
    query Anime($url: String!, $userId: String) {
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
    titlesEnglish
    rating
    ratingCount
    type
    updatedAt
    url
    year
    userRating(userId: $userId) {
      id
      rating
      userId
    }
    animeListEntry(userId: $userId) {
      id
      status
    }
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
 *      userId: // value for 'userId'
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
    query Character($characterId: String, $userId: String, $malId: Int) {
  character(id: $characterId, malId: $malId) {
    about
    aboutEn
    id
    image
    malId
    name
    nameEn
    nameKanji
    pictures
    isFavorite(userId: $userId)
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
 *      characterId: // value for 'characterId'
 *      userId: // value for 'userId'
 *      malId: // value for 'malId'
 *   },
 * });
 */
export function useCharacterQuery(baseOptions?: Apollo.QueryHookOptions<CharacterQuery, CharacterQueryVariables>) {
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
export const EpisodesHistoryDocument = gql`
    query EpisodesHistory($animeUrl: String!) {
  episodesHistory(animeUrl: $animeUrl) {
    aired
    number
    title
    isUpcoming
  }
}
    `;

/**
 * __useEpisodesHistoryQuery__
 *
 * To run a query within a React component, call `useEpisodesHistoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useEpisodesHistoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEpisodesHistoryQuery({
 *   variables: {
 *      animeUrl: // value for 'animeUrl'
 *   },
 * });
 */
export function useEpisodesHistoryQuery(baseOptions: Apollo.QueryHookOptions<EpisodesHistoryQuery, EpisodesHistoryQueryVariables> & ({ variables: EpisodesHistoryQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EpisodesHistoryQuery, EpisodesHistoryQueryVariables>(EpisodesHistoryDocument, options);
      }
export function useEpisodesHistoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EpisodesHistoryQuery, EpisodesHistoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EpisodesHistoryQuery, EpisodesHistoryQueryVariables>(EpisodesHistoryDocument, options);
        }
export function useEpisodesHistorySuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<EpisodesHistoryQuery, EpisodesHistoryQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<EpisodesHistoryQuery, EpisodesHistoryQueryVariables>(EpisodesHistoryDocument, options);
        }
export type EpisodesHistoryQueryHookResult = ReturnType<typeof useEpisodesHistoryQuery>;
export type EpisodesHistoryLazyQueryHookResult = ReturnType<typeof useEpisodesHistoryLazyQuery>;
export type EpisodesHistorySuspenseQueryHookResult = ReturnType<typeof useEpisodesHistorySuspenseQuery>;
export type EpisodesHistoryQueryResult = Apollo.QueryResult<EpisodesHistoryQuery, EpisodesHistoryQueryVariables>;
export const EpisodesDocument = gql`
    query Episodes($animeUrl: String!, $page: Int!, $limit: Int, $userId: String) {
  episodes(animeUrl: $animeUrl, page: $page, limit: $limit) {
    data {
      ...Episode
    }
  }
}
    ${EpisodeFragmentDoc}`;

/**
 * __useEpisodesQuery__
 *
 * To run a query within a React component, call `useEpisodesQuery` and pass it any options that fit your needs.
 * When your component renders, `useEpisodesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEpisodesQuery({
 *   variables: {
 *      animeUrl: // value for 'animeUrl'
 *      page: // value for 'page'
 *      limit: // value for 'limit'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useEpisodesQuery(baseOptions: Apollo.QueryHookOptions<EpisodesQuery, EpisodesQueryVariables> & ({ variables: EpisodesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EpisodesQuery, EpisodesQueryVariables>(EpisodesDocument, options);
      }
export function useEpisodesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EpisodesQuery, EpisodesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EpisodesQuery, EpisodesQueryVariables>(EpisodesDocument, options);
        }
export function useEpisodesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<EpisodesQuery, EpisodesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<EpisodesQuery, EpisodesQueryVariables>(EpisodesDocument, options);
        }
export type EpisodesQueryHookResult = ReturnType<typeof useEpisodesQuery>;
export type EpisodesLazyQueryHookResult = ReturnType<typeof useEpisodesLazyQuery>;
export type EpisodesSuspenseQueryHookResult = ReturnType<typeof useEpisodesSuspenseQuery>;
export type EpisodesQueryResult = Apollo.QueryResult<EpisodesQuery, EpisodesQueryVariables>;
export const FavoriteAnimesDocument = gql`
    query FavoriteAnimes($page: Int!, $userId: String!) {
  favoriteAnimes(page: $page, userId: $userId) {
    data {
      count
      anime {
        ...FavoriteAnime
      }
      animeId
    }
    pageInfo {
      hasNextPage
      page
    }
  }
}
    ${FavoriteAnimeFragmentDoc}`;

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
    query FavoriteCharacters($userId: String!, $limit: Int, $page: Int) {
  favoriteCharacters(userId: $userId, limit: $limit, page: $page) {
    data {
      count
      character {
        ...FavoriteCharacter
      }
      characterId
    }
    pageInfo {
      hasNextPage
      page
    }
  }
}
    ${FavoriteCharacterFragmentDoc}`;

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
 *      limit: // value for 'limit'
 *      page: // value for 'page'
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
export const FriendshipsDocument = gql`
    query Friendships($userId: String!, $status: FriendshipStatus, $search: String, $limit: Int, $page: Int) {
  friendships(
    userId: $userId
    status: $status
    search: $search
    limit: $limit
    page: $page
  ) {
    data {
      id
      createdAt
      updatedAt
      status
      friend {
        ...UserLite
      }
    }
    pageInfo {
      hasNextPage
      page
    }
  }
}
    ${UserLiteFragmentDoc}`;

/**
 * __useFriendshipsQuery__
 *
 * To run a query within a React component, call `useFriendshipsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFriendshipsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFriendshipsQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      status: // value for 'status'
 *      search: // value for 'search'
 *      limit: // value for 'limit'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useFriendshipsQuery(baseOptions: Apollo.QueryHookOptions<FriendshipsQuery, FriendshipsQueryVariables> & ({ variables: FriendshipsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FriendshipsQuery, FriendshipsQueryVariables>(FriendshipsDocument, options);
      }
export function useFriendshipsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FriendshipsQuery, FriendshipsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FriendshipsQuery, FriendshipsQueryVariables>(FriendshipsDocument, options);
        }
export function useFriendshipsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FriendshipsQuery, FriendshipsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FriendshipsQuery, FriendshipsQueryVariables>(FriendshipsDocument, options);
        }
export type FriendshipsQueryHookResult = ReturnType<typeof useFriendshipsQuery>;
export type FriendshipsLazyQueryHookResult = ReturnType<typeof useFriendshipsLazyQuery>;
export type FriendshipsSuspenseQueryHookResult = ReturnType<typeof useFriendshipsSuspenseQuery>;
export type FriendshipsQueryResult = Apollo.QueryResult<FriendshipsQuery, FriendshipsQueryVariables>;
export const LastWatchedEpisodeDocument = gql`
    query LastWatchedEpisode($animeId: String!, $userId: String!) {
  lastWatchedEpisode(animeId: $animeId, userId: $userId) {
    ...LastWatchedEpisode
  }
}
    ${LastWatchedEpisodeFragmentDoc}`;

/**
 * __useLastWatchedEpisodeQuery__
 *
 * To run a query within a React component, call `useLastWatchedEpisodeQuery` and pass it any options that fit your needs.
 * When your component renders, `useLastWatchedEpisodeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLastWatchedEpisodeQuery({
 *   variables: {
 *      animeId: // value for 'animeId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useLastWatchedEpisodeQuery(baseOptions: Apollo.QueryHookOptions<LastWatchedEpisodeQuery, LastWatchedEpisodeQueryVariables> & ({ variables: LastWatchedEpisodeQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LastWatchedEpisodeQuery, LastWatchedEpisodeQueryVariables>(LastWatchedEpisodeDocument, options);
      }
export function useLastWatchedEpisodeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LastWatchedEpisodeQuery, LastWatchedEpisodeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LastWatchedEpisodeQuery, LastWatchedEpisodeQueryVariables>(LastWatchedEpisodeDocument, options);
        }
export function useLastWatchedEpisodeSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<LastWatchedEpisodeQuery, LastWatchedEpisodeQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<LastWatchedEpisodeQuery, LastWatchedEpisodeQueryVariables>(LastWatchedEpisodeDocument, options);
        }
export type LastWatchedEpisodeQueryHookResult = ReturnType<typeof useLastWatchedEpisodeQuery>;
export type LastWatchedEpisodeLazyQueryHookResult = ReturnType<typeof useLastWatchedEpisodeLazyQuery>;
export type LastWatchedEpisodeSuspenseQueryHookResult = ReturnType<typeof useLastWatchedEpisodeSuspenseQuery>;
export type LastWatchedEpisodeQueryResult = Apollo.QueryResult<LastWatchedEpisodeQuery, LastWatchedEpisodeQueryVariables>;
export const LastWatchedEpisodesDocument = gql`
    query LastWatchedEpisodes($userId: String!, $limit: Int, $page: Int) {
  lastWatchedEpisodes(userId: $userId, limit: $limit, page: $page) {
    data {
      ...ContinueWatching
    }
    pageInfo {
      hasNextPage
      page
    }
  }
}
    ${ContinueWatchingFragmentDoc}`;

/**
 * __useLastWatchedEpisodesQuery__
 *
 * To run a query within a React component, call `useLastWatchedEpisodesQuery` and pass it any options that fit your needs.
 * When your component renders, `useLastWatchedEpisodesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLastWatchedEpisodesQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      limit: // value for 'limit'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useLastWatchedEpisodesQuery(baseOptions: Apollo.QueryHookOptions<LastWatchedEpisodesQuery, LastWatchedEpisodesQueryVariables> & ({ variables: LastWatchedEpisodesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LastWatchedEpisodesQuery, LastWatchedEpisodesQueryVariables>(LastWatchedEpisodesDocument, options);
      }
export function useLastWatchedEpisodesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LastWatchedEpisodesQuery, LastWatchedEpisodesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LastWatchedEpisodesQuery, LastWatchedEpisodesQueryVariables>(LastWatchedEpisodesDocument, options);
        }
export function useLastWatchedEpisodesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<LastWatchedEpisodesQuery, LastWatchedEpisodesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<LastWatchedEpisodesQuery, LastWatchedEpisodesQueryVariables>(LastWatchedEpisodesDocument, options);
        }
export type LastWatchedEpisodesQueryHookResult = ReturnType<typeof useLastWatchedEpisodesQuery>;
export type LastWatchedEpisodesLazyQueryHookResult = ReturnType<typeof useLastWatchedEpisodesLazyQuery>;
export type LastWatchedEpisodesSuspenseQueryHookResult = ReturnType<typeof useLastWatchedEpisodesSuspenseQuery>;
export type LastWatchedEpisodesQueryResult = Apollo.QueryResult<LastWatchedEpisodesQuery, LastWatchedEpisodesQueryVariables>;
export const ProfileDocument = gql`
    query Profile($login: String!) {
  profile(login: $login) {
    ...Viewer
  }
}
    ${ViewerFragmentDoc}`;

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
export const RandomAnimesDocument = gql`
    query RandomAnimes($count: Int) {
  randomAnimes(count: $count) {
    id
    url
  }
}
    `;

/**
 * __useRandomAnimesQuery__
 *
 * To run a query within a React component, call `useRandomAnimesQuery` and pass it any options that fit your needs.
 * When your component renders, `useRandomAnimesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRandomAnimesQuery({
 *   variables: {
 *      count: // value for 'count'
 *   },
 * });
 */
export function useRandomAnimesQuery(baseOptions?: Apollo.QueryHookOptions<RandomAnimesQuery, RandomAnimesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RandomAnimesQuery, RandomAnimesQueryVariables>(RandomAnimesDocument, options);
      }
export function useRandomAnimesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RandomAnimesQuery, RandomAnimesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RandomAnimesQuery, RandomAnimesQueryVariables>(RandomAnimesDocument, options);
        }
export function useRandomAnimesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<RandomAnimesQuery, RandomAnimesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<RandomAnimesQuery, RandomAnimesQueryVariables>(RandomAnimesDocument, options);
        }
export type RandomAnimesQueryHookResult = ReturnType<typeof useRandomAnimesQuery>;
export type RandomAnimesLazyQueryHookResult = ReturnType<typeof useRandomAnimesLazyQuery>;
export type RandomAnimesSuspenseQueryHookResult = ReturnType<typeof useRandomAnimesSuspenseQuery>;
export type RandomAnimesQueryResult = Apollo.QueryResult<RandomAnimesQuery, RandomAnimesQueryVariables>;
export const RelatedAnimesDocument = gql`
    query RelatedAnimes($animeId: String!, $page: Int, $limit: Int) {
  relatedAnimes(animeId: $animeId, page: $page, limit: $limit) {
    data {
      anime {
        ...AnimeLite
      }
      type
    }
    pageInfo {
      hasNextPage
      page
    }
  }
}
    ${AnimeLiteFragmentDoc}`;

/**
 * __useRelatedAnimesQuery__
 *
 * To run a query within a React component, call `useRelatedAnimesQuery` and pass it any options that fit your needs.
 * When your component renders, `useRelatedAnimesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRelatedAnimesQuery({
 *   variables: {
 *      animeId: // value for 'animeId'
 *      page: // value for 'page'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useRelatedAnimesQuery(baseOptions: Apollo.QueryHookOptions<RelatedAnimesQuery, RelatedAnimesQueryVariables> & ({ variables: RelatedAnimesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RelatedAnimesQuery, RelatedAnimesQueryVariables>(RelatedAnimesDocument, options);
      }
export function useRelatedAnimesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RelatedAnimesQuery, RelatedAnimesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RelatedAnimesQuery, RelatedAnimesQueryVariables>(RelatedAnimesDocument, options);
        }
export function useRelatedAnimesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<RelatedAnimesQuery, RelatedAnimesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<RelatedAnimesQuery, RelatedAnimesQueryVariables>(RelatedAnimesDocument, options);
        }
export type RelatedAnimesQueryHookResult = ReturnType<typeof useRelatedAnimesQuery>;
export type RelatedAnimesLazyQueryHookResult = ReturnType<typeof useRelatedAnimesLazyQuery>;
export type RelatedAnimesSuspenseQueryHookResult = ReturnType<typeof useRelatedAnimesSuspenseQuery>;
export type RelatedAnimesQueryResult = Apollo.QueryResult<RelatedAnimesQuery, RelatedAnimesQueryVariables>;
export const SimilarAnimesDocument = gql`
    query SimilarAnimes($animeId: String!, $page: Int, $limit: Int) {
  similarAnimes(animeId: $animeId, page: $page, limit: $limit) {
    data {
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
 * __useSimilarAnimesQuery__
 *
 * To run a query within a React component, call `useSimilarAnimesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSimilarAnimesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSimilarAnimesQuery({
 *   variables: {
 *      animeId: // value for 'animeId'
 *      page: // value for 'page'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useSimilarAnimesQuery(baseOptions: Apollo.QueryHookOptions<SimilarAnimesQuery, SimilarAnimesQueryVariables> & ({ variables: SimilarAnimesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SimilarAnimesQuery, SimilarAnimesQueryVariables>(SimilarAnimesDocument, options);
      }
export function useSimilarAnimesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SimilarAnimesQuery, SimilarAnimesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SimilarAnimesQuery, SimilarAnimesQueryVariables>(SimilarAnimesDocument, options);
        }
export function useSimilarAnimesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<SimilarAnimesQuery, SimilarAnimesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SimilarAnimesQuery, SimilarAnimesQueryVariables>(SimilarAnimesDocument, options);
        }
export type SimilarAnimesQueryHookResult = ReturnType<typeof useSimilarAnimesQuery>;
export type SimilarAnimesLazyQueryHookResult = ReturnType<typeof useSimilarAnimesLazyQuery>;
export type SimilarAnimesSuspenseQueryHookResult = ReturnType<typeof useSimilarAnimesSuspenseQuery>;
export type SimilarAnimesQueryResult = Apollo.QueryResult<SimilarAnimesQuery, SimilarAnimesQueryVariables>;
export const UserStatisticsDocument = gql`
    query UserStatistics($userId: String!, $year: Int!) {
  userStatistics(userId: $userId) {
    activity(year: $year) {
      days {
        count
        day
      }
    }
    genresDistribution {
      percent
      genre {
        id
        name
      }
    }
    total {
      totalActivity
      totalWatchedSeconds
      totalWatchedEpisodes
      totalWatchedAnimes
    }
  }
}
    `;

/**
 * __useUserStatisticsQuery__
 *
 * To run a query within a React component, call `useUserStatisticsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserStatisticsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserStatisticsQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      year: // value for 'year'
 *   },
 * });
 */
export function useUserStatisticsQuery(baseOptions: Apollo.QueryHookOptions<UserStatisticsQuery, UserStatisticsQueryVariables> & ({ variables: UserStatisticsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserStatisticsQuery, UserStatisticsQueryVariables>(UserStatisticsDocument, options);
      }
export function useUserStatisticsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserStatisticsQuery, UserStatisticsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserStatisticsQuery, UserStatisticsQueryVariables>(UserStatisticsDocument, options);
        }
export function useUserStatisticsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<UserStatisticsQuery, UserStatisticsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<UserStatisticsQuery, UserStatisticsQueryVariables>(UserStatisticsDocument, options);
        }
export type UserStatisticsQueryHookResult = ReturnType<typeof useUserStatisticsQuery>;
export type UserStatisticsLazyQueryHookResult = ReturnType<typeof useUserStatisticsLazyQuery>;
export type UserStatisticsSuspenseQueryHookResult = ReturnType<typeof useUserStatisticsSuspenseQuery>;
export type UserStatisticsQueryResult = Apollo.QueryResult<UserStatisticsQuery, UserStatisticsQueryVariables>;
export const UsersDocument = gql`
    query Users($search: String, $limit: Int, $page: Int) {
  users(search: $search, limit: $limit, page: $page) {
    data {
      ...UserLite
    }
    pageInfo {
      hasNextPage
      page
    }
  }
}
    ${UserLiteFragmentDoc}`;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *      search: // value for 'search'
 *      limit: // value for 'limit'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
      }
export function useUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
        }
export function useUsersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersSuspenseQueryHookResult = ReturnType<typeof useUsersSuspenseQuery>;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;
export const ViewerDocument = gql`
    query Viewer {
  viewer {
    ...Viewer
  }
}
    ${ViewerFragmentDoc}`;

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