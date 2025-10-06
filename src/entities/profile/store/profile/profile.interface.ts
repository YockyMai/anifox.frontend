import { ViewerFragment } from '@/graphql/generated/output'

export type ProfileStore = {
  user: ViewerFragment
  isOwner: boolean
}

export type InitProfilePayload = {
  user: ViewerFragment
  isOwner: boolean
}
