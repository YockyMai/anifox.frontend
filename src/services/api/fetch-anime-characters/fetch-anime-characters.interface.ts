export type AnimeCharacter = {
  id: string
  role: string
  image: string
  name: string
}

export type FetchAnimeCharactersResponse = {
  characters: AnimeCharacter[]
  available_roles: string[]
}

export type FetchAnimeCharactersParams = {
  page: number
  limit: number
  role?: string | null
  animeUrl: string
  search?: string
}
