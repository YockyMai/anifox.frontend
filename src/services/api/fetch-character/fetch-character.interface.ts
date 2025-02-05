import { Anime } from '../api.types'

export type FetchCharacterResponse = {
  id: string
  name: string
  name_en: string
  name_kanji: string
  image: string
  about?: string
  pictures: string[]
  roles: [
    {
      role: string
      anime: Anime
    }
  ]
}
