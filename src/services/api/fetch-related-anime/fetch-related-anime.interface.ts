import { Anime } from '../api.types'

export type AnimeRelated = {
  anime: Anime
  relation: {
    type: string
  }
}
