import { AnimeLiteFragment } from '@/graphql/generated/output'

export type AnimeCardSimpleProps = {
  anime: AnimeLiteFragment
  isActive?: boolean
}
