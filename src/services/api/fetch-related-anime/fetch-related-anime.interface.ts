import { Anime } from '../fetch-anime-list'

export type AnimeRelated = {
  anime: Anime
  relation: {
    type: string
  }
}
