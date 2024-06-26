import { Anime } from '../fetch-anime-list'

export type RelatedAnime = {
  anime: Anime
  relation: {
    type: string
    typeEn: string
  }
}
