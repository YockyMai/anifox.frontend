import { Anime } from "~shared/api"

export type RelatedAnime = {
  anime: Anime
  relation: {
    type: string
    typeEn: string
  }
}
