import { User } from '@/entities/viewer'

export type ProfileStore = {
  user: User
  isOwner: boolean
}

export type InitProfilePayload = {
  user: User
  isOwner: boolean
}
