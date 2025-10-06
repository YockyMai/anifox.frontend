import { AnimeLiteFragment } from '@/graphql/generated/output'

export type AnimeRelatedCardProps = {
  anime: AnimeLiteFragment
  relation: string
}
