import { AnimeLiteFragment } from '@/graphql/generated/output'

export type AnimeCardProps = {
  anime: AnimeLiteFragment
  label?: string
  withoutPanel?: boolean
}
